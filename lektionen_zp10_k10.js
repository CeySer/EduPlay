// Fit für die ZP10 - Klasse 10 Mathe
// Kurs mit 2 Lektionen (Prüfungsteil 1: Basiswissen, Prüfungsteil 2: Sachaufgaben). topic "zp10".
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [{"id": "zp10_k10", "title": "Fit für die ZP10", "icon": "🎯", "grade": 10, "subject": "mathe", "beschreibung": "Typische Aufgaben aus beiden Prüfungsteilen der Zentralen Prüfung 10 in NRW üben – mit Strategien für Basiswissen und Sachaufgaben."}];
    const extraLektionen = [
    {
        "id": "zp10_k10_l1",
        "kurs": "zp10_k10",
        "order": 1,
        "icon": "🧠",
        "title": "Prüfungsteil 1: Basiswissen",
        "kurz": "Kurze Aufgaben ohne Taschenrechner",
        "erklaerung": {
            "intro": "In der <b>ZP10</b> Mathe gibt es zwei Prüfungsteile. <b>Prüfungsteil 1</b> bearbeitest du <b>ohne Taschenrechner</b>: viele <b>kurze Aufgaben</b> zum Basiswissen aus den Klassen 5 bis 10 – Prozent, Terme, Gleichungen, Potenzen, Geometrie, Wahrscheinlichkeit und Funktionen. Wichtige Formeln solltest du deshalb sicher im Kopf haben. Strategie: <b>Wichtiges markieren</b>, bei Geometrie eine <b>Skizze</b> machen, auf <b>Einheiten</b> achten und das <b>Ergebnis prüfen</b> (Überschlag, Probe). Wenn ein Antwortsatz verlangt ist, schreib ihn auf.",
            "merksatz": "Teil 1 ohne Taschenrechner: geschickt im Kopf rechnen, Formeln kennen, Einheiten beachten und jedes Ergebnis mit Überschlag oder Probe prüfen.",
            "beispiele": [
                "🧮 15 % von 80 €: 10 % = 8 € und 5 % = 4 €, zusammen 12 €.",
                "📐 Skizze hilft: Katheten 3 cm und 4 cm, also c² = 9 + 16 = 25 und c = 5 cm.<svg viewBox='0 0 250 145' style='width:100%;max-width:350px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60,120 200,120 60,30' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2.5'/><polyline points='60,108 72,108 72,120' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='52' y='79' text-anchor='end' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 cm</text><text x='130' y='138' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>4 cm</text><text x='144' y='69' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>c</text></svg>",
                "🔎 Überschlag: 198 · 5,1 ≈ 200 · 5 = 1000. Ein Ergebnis wie 100 oder 10 000 kann nicht stimmen.",
                "📏 Einheiten: bei Längen Umrechnungszahl 10, bei Flächen 100, bei Volumen 1000. 1 dm³ = 1 l."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zp10k10l1u_leicht_1",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ohne Taschenrechner: Wie viel sind 20 % von 450 €?",
                    "answers": [
                        "90 €",
                        "45 €",
                        "22,5 €",
                        "9 €"
                    ],
                    "correct": 0,
                    "explanation": "10 % von 450 € sind 45 €. 20 % sind doppelt so viel, also 90 €."
                },
                {
                    "id": "zp10k10l1u_leicht_2",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welchen Wert hat die Potenz 2⁵?",
                    "answers": [
                        "32",
                        "10",
                        "25",
                        "64"
                    ],
                    "correct": 0,
                    "explanation": "2⁵ = 2 · 2 · 2 · 2 · 2 = 32. Die Hochzahl sagt, wie oft die 2 mit sich selbst multipliziert wird."
                },
                {
                    "id": "zp10k10l1u_leicht_3",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele cm² sind 1 m²?",
                    "answers": [
                        "10 000 cm²",
                        "100 cm²",
                        "1000 cm²",
                        "10 cm²"
                    ],
                    "correct": 0,
                    "explanation": "1 m² = 100 cm · 100 cm = 10 000 cm². Bei Flächen ist die Umrechnungszahl 100 statt 10."
                },
                {
                    "id": "zp10k10l1u_leicht_4",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Du würfelst einmal mit einem normalen Würfel. Wie groß ist die Wahrscheinlichkeit für eine gerade Zahl?",
                    "answers": [
                        "1/2",
                        "1/6",
                        "1/3",
                        "2/3"
                    ],
                    "correct": 0,
                    "explanation": "Günstig sind 2, 4 und 6, also 3 von 6 Ergebnissen. 3/6 = 1/2."
                }
            ],
            "mittel": [
                {
                    "id": "zp10k10l1u_mittel_1",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Löse die Gleichung 3x + 7 = 22.",
                    "answers": [
                        "x = 5",
                        "x = 15",
                        "x = 45",
                        "x = 29/3"
                    ],
                    "correct": 0,
                    "explanation": "Erst −7 auf beiden Seiten: 3x = 15. Dann durch 3: x = 5. Probe: 3 · 5 + 7 = 22."
                },
                {
                    "id": "zp10k10l1u_mittel_2",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie lang ist die längste Seite des rechtwinkligen Dreiecks?",
                    "answers": [
                        "10 cm",
                        "14 cm",
                        "48 cm",
                        "100 cm"
                    ],
                    "correct": 0,
                    "explanation": "Pythagoras: c² = 6² + 8² = 36 + 64 = 100. Also c = √100 = 10 cm.",
                    "grafik": "<svg viewBox='0 0 250 145' style='width:100%;max-width:350px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60,120 200,120 60,30' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2.5'/><polyline points='60,108 72,108 72,120' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='52' y='79' text-anchor='end' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>6 cm</text><text x='130' y='138' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>8 cm</text><text x='144' y='69' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>?</text></svg>"
                },
                {
                    "id": "zp10k10l1u_mittel_3",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Beet hat diese Form. Wie groß ist sein Flächeninhalt?",
                    "answers": [
                        "42 m²",
                        "48 m²",
                        "54 m²",
                        "28 m"
                    ],
                    "correct": 0,
                    "explanation": "Ganzes Rechteck 8 m · 6 m = 48 m², davon fehlt die Ecke 3 m · 2 m = 6 m². 48 m² − 6 m² = 42 m².",
                    "grafik": "<svg viewBox='0 0 230 168' style='width:100%;max-width:322px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40,20 140,20 140,60 200,60 200,140 40,140' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2.5'/><text x='120' y='158' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>8 m</text><text x='32' y='84' text-anchor='end' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>6 m</text><text x='134' y='46' text-anchor='end' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 m</text><text x='170' y='54' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>3 m</text></svg>"
                },
                {
                    "id": "zp10k10l1u_mittel_4",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Funktionsgleichung gehört zu der Geraden?",
                    "answers": [
                        "y = 2x + 1",
                        "y = x + 2",
                        "y = 0,5x + 1",
                        "y = 2x − 1"
                    ],
                    "correct": 0,
                    "explanation": "Die Gerade schneidet die y-Achse bei 1. Pro 1 nach rechts geht sie 2 nach oben, also m = 2: y = 2x + 1.",
                    "grafik": "<svg viewBox='0 0 200 238' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='26' y1='224' x2='26' y2='32' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='50' y1='224' x2='50' y2='32' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='74' y1='224' x2='74' y2='32' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='98' y1='224' x2='98' y2='32' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='122' y1='224' x2='122' y2='32' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='146' y1='224' x2='146' y2='32' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='224' x2='146' y2='224' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='200' x2='146' y2='200' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='176' x2='146' y2='176' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='152' x2='146' y2='152' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='128' x2='146' y2='128' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='104' x2='146' y2='104' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='80' x2='146' y2='80' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='56' x2='146' y2='56' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='32' x2='146' y2='32' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='200' x2='156' y2='200' stroke='#94a3b8' stroke-width='1.5'/><line x1='50' y1='224' x2='50' y2='22' stroke='#94a3b8' stroke-width='1.5'/><text x='160' y='204' text-anchor='start' font-size='11' font-weight='700' font-family='sans-serif' fill='#94a3b8'>x</text><text x='56' y='26' text-anchor='start' font-size='11' font-weight='700' font-family='sans-serif' fill='#94a3b8'>y</text><text x='26' y='213' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>−1</text><text x='74' y='213' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>1</text><text x='98' y='213' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>2</text><text x='122' y='213' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>3</text><text x='146' y='213' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>4</text><text x='45' y='228' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>−1</text><text x='45' y='180' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>1</text><text x='45' y='156' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>2</text><text x='45' y='132' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>3</text><text x='45' y='108' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>4</text><text x='45' y='84' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>5</text><text x='45' y='60' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>6</text><text x='45' y='36' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>7</text><text x='45' y='213' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>0</text><line x1='38' y1='200' x2='122' y2='32' stroke='#38bdf8' stroke-width='2.5'/></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "zp10k10l1u_schwer_1",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Überschlage 49,8 · 20,3. Welches Ergebnis ist plausibel?",
                    "answers": [
                        "etwa 1000",
                        "etwa 100",
                        "etwa 10 000",
                        "etwa 70"
                    ],
                    "correct": 0,
                    "explanation": "Runde auf 50 · 20 = 1000. Das genaue Ergebnis liegt also bei etwa 1000."
                },
                {
                    "id": "zp10k10l1u_schwer_2",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welchen Wert hat √(9 · 16)?",
                    "answers": [
                        "12",
                        "25",
                        "5",
                        "144"
                    ],
                    "correct": 0,
                    "explanation": "9 · 16 = 144 und √144 = 12. Oder: √9 · √16 = 3 · 4 = 12."
                },
                {
                    "id": "zp10k10l1u_schwer_3",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Die Kantenlänge eines Würfels wird verdoppelt. Wie verändert sich sein Volumen?",
                    "answers": [
                        "8-mal so groß",
                        "doppelt so groß",
                        "4-mal so groß",
                        "6-mal so groß"
                    ],
                    "correct": 0,
                    "explanation": "V = a³. Mit 2a gilt (2a)³ = 8a³, das Volumen wird also 8-mal so groß."
                },
                {
                    "id": "zp10k10l1u_schwer_4",
                    "category": "kurs_zp10_k10_l1",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Pulli kostet nach 25 % Rabatt noch 60 €. Was hat er vorher gekostet?",
                    "answers": [
                        "80 €",
                        "75 €",
                        "85 €",
                        "45 €"
                    ],
                    "correct": 0,
                    "explanation": "60 € sind 75 % des alten Preises. 1 % = 0,80 €, also 100 % = 80 €. Probe: 25 % von 80 € = 20 €."
                }
            ]
        },
        "test": [
            {
                "id": "zp10k10l1_test_1",
                "category": "kurs_zp10_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Vereinfache den Term 3(x + 4) − 2x.",
                "answers": [
                    "x + 12",
                    "x + 4",
                    "5x + 12",
                    "3x + 10"
                ],
                "correct": 0,
                "explanation": "Klammer auflösen: 3x + 12 − 2x. Zusammenfassen: x + 12."
            },
            {
                "id": "zp10k10l1_test_2",
                "category": "kurs_zp10_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie groß ist der Flächeninhalt des Kreises? Rechne mit π ≈ 3,14.",
                "answers": [
                    "314 cm²",
                    "62,8 cm²",
                    "31,4 cm²",
                    "1256 cm²"
                ],
                "correct": 0,
                "explanation": "A = π · r² = 3,14 · 10 · 10 = 314 cm². 62,8 cm wäre der Umfang.",
                "grafik": "<svg viewBox='0 0 180 150' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='90' cy='75' r='60' fill='rgba(167,139,250,0.2)' stroke='#a78bfa' stroke-width='2.5'/><circle cx='90' cy='75' r='3' fill='#e5e7eb'/><line x1='90' y1='75' x2='150' y2='75' stroke='#f59e0b' stroke-width='2'/><text x='119' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>r = 10 cm</text></svg>"
            },
            {
                "id": "zp10k10l1_test_3",
                "category": "kurs_zp10_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Münze wird zweimal geworfen. Wie groß ist die Wahrscheinlichkeit für zweimal Kopf?",
                "answers": [
                    "1/4",
                    "1/2",
                    "1/3",
                    "1/8"
                ],
                "correct": 0,
                "explanation": "Pfadregel: Entlang des Pfades K–K multiplizieren, 1/2 · 1/2 = 1/4.",
                "grafik": "<svg viewBox='0 0 210 170' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='85' x2='90' y2='40' stroke='#38bdf8' stroke-width='2'/><line x1='20' y1='85' x2='90' y2='130' stroke='#38bdf8' stroke-width='2'/><line x1='110' y1='40' x2='180' y2='18' stroke='#a78bfa' stroke-width='2'/><line x1='110' y1='40' x2='180' y2='62' stroke='#a78bfa' stroke-width='2'/><line x1='110' y1='130' x2='180' y2='108' stroke='#a78bfa' stroke-width='2'/><line x1='110' y1='130' x2='180' y2='152' stroke='#a78bfa' stroke-width='2'/><text x='100' y='44' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>K</text><text x='100' y='134' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Z</text><text x='190' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>K</text><text x='190' y='66' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Z</text><text x='190' y='112' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>K</text><text x='190' y='156' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Z</text><text x='46' y='56' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1/2</text><text x='46' y='122' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1/2</text><text x='140' y='22' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1/2</text><text x='140' y='66' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1/2</text><text x='140' y='112' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1/2</text><text x='140' y='156' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1/2</text></svg>"
            },
            {
                "id": "zp10k10l1_test_4",
                "category": "kurs_zp10_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Steigung hat die Gerade?",
                "answers": [
                    "m = −2",
                    "m = 2",
                    "m = −0,5",
                    "m = 4"
                ],
                "correct": 0,
                "explanation": "Pro 1 nach rechts geht die Gerade 2 nach unten. Sie fällt, also ist m = −2.",
                "grafik": "<svg viewBox='0 0 180 196' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='26' y1='186' x2='26' y2='30' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='52' y1='186' x2='52' y2='30' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='78' y1='186' x2='78' y2='30' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='104' y1='186' x2='104' y2='30' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='130' y1='186' x2='130' y2='30' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='186' x2='130' y2='186' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='160' x2='130' y2='160' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='134' x2='130' y2='134' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='108' x2='130' y2='108' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='82' x2='130' y2='82' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='56' x2='130' y2='56' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='30' x2='130' y2='30' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><line x1='26' y1='160' x2='140' y2='160' stroke='#94a3b8' stroke-width='1.5'/><line x1='52' y1='186' x2='52' y2='20' stroke='#94a3b8' stroke-width='1.5'/><text x='144' y='164' text-anchor='start' font-size='11' font-weight='700' font-family='sans-serif' fill='#94a3b8'>x</text><text x='58' y='24' text-anchor='start' font-size='11' font-weight='700' font-family='sans-serif' fill='#94a3b8'>y</text><text x='26' y='173' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>−1</text><text x='78' y='173' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>1</text><text x='104' y='173' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>2</text><text x='130' y='173' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>3</text><text x='47' y='190' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>−1</text><text x='47' y='138' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>1</text><text x='47' y='112' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>2</text><text x='47' y='86' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>3</text><text x='47' y='60' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>4</text><text x='47' y='34' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>5</text><text x='47' y='173' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>0</text><line x1='41.6' y1='35.2' x2='114.4' y2='180.8' stroke='#38bdf8' stroke-width='2.5'/></svg>"
            },
            {
                "id": "zp10k10l1_test_5",
                "category": "kurs_zp10_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Liter Wasser passen in 1 m³?",
                "answers": [
                    "1000 l",
                    "100 l",
                    "10 l",
                    "10 000 l"
                ],
                "correct": 0,
                "explanation": "1 m³ = 1000 dm³ und 1 dm³ = 1 l. Also passen 1000 l hinein."
            },
            {
                "id": "zp10k10l1_test_6",
                "category": "kurs_zp10_k10_l1",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lang ist die Diagonale des Rechtecks?",
                "answers": [
                    "13 cm",
                    "17 cm",
                    "60 cm",
                    "169 cm"
                ],
                "correct": 0,
                "explanation": "Die Diagonale ist die Hypotenuse: d² = 12² + 5² = 144 + 25 = 169, also d = 13 cm.",
                "grafik": "<svg viewBox='0 0 270 128' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='25' width='180' height='75' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2.5'/><line x1='40' y1='100' x2='220' y2='25' stroke='#a78bfa' stroke-width='2' stroke-dasharray='4 3'/><text x='130' y='118' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>12 cm</text><text x='228' y='67' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>5 cm</text><text x='122' y='56' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#a78bfa'>?</text></svg>"
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "zp10_k10_l2",
        "kurs": "zp10_k10",
        "order": 2,
        "icon": "🧩",
        "title": "Prüfungsteil 2: Sachaufgaben",
        "kurz": "Mehrschrittige Aufgaben mit Taschenrechner",
        "erklaerung": {
            "intro": "In <b>Prüfungsteil 2</b> darfst du den <b>Taschenrechner</b> benutzen. Dafür sind die Aufgaben länger: Eine Alltagssituation (Handyvertrag, Sparen, Gelände, Sport, Pool) wird in mehreren Teilaufgaben untersucht. So gehst du vor: Text lesen und <b>Gegebenes und Gesuchtes markieren</b>, eine <b>Skizze</b> oder Tabelle anlegen, das passende <b>Modell</b> wählen (linear, exponentiell, quadratisch, Trigonometrie, Statistik), mit <b>Einheiten</b> rechnen, das <b>Ergebnis prüfen</b> und einen <b>Antwortsatz</b> schreiben.",
            "merksatz": "Markieren – Skizze – Modell wählen – rechnen mit Einheiten – Ergebnis prüfen – Antwortsatz.",
            "beispiele": [
                "📱 Tarif 3 € + 0,10 € pro Minute gegen Flatrate 10 €: 0,1x + 3 = 10, also x = 70. Antwortsatz: Ab mehr als 70 Minuten lohnt sich die Flatrate.",
                "💰 Zinseszins: K = K₀ · (1 + p/100)ⁿ. 500 € bei 2 % für 3 Jahre: 500 € · 1,02³ ≈ 530,60 €.",
                "⛰️ Trigonometrie: Gegenkathete gesucht, Ankathete bekannt → tan α = Gegenkathete / Ankathete.",
                "📊 Ein Boxplot zeigt fünf Werte: Minimum, unteres Quartil Q₁, Median, oberes Quartil Q₃ und Maximum.<svg viewBox='0 0 290 100' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='48' y1='60' x2='90' y2='60' stroke='#38bdf8' stroke-width='2'/><line x1='160' y1='60' x2='244' y2='60' stroke='#38bdf8' stroke-width='2'/><line x1='48' y1='50' x2='48' y2='70' stroke='#38bdf8' stroke-width='2'/><line x1='244' y1='50' x2='244' y2='70' stroke='#38bdf8' stroke-width='2'/><rect x='90' y='40' width='70' height='40' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><line x1='118' y1='40' x2='118' y2='80' stroke='#f59e0b' stroke-width='3'/><text x='48' y='90' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Min</text><text x='90' y='92' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Q₁</text><text x='118' y='34' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>Median</text><text x='160' y='92' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Q₃</text><text x='244' y='90' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Max</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zp10k10l2u_leicht_1",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Tarif A: 5 € Grundgebühr plus 0,09 € pro Minute. Was kostet A bei 60 Minuten im Monat?",
                    "answers": [
                        "10,40 €",
                        "5,40 €",
                        "305,40 €",
                        "5,54 €"
                    ],
                    "correct": 0,
                    "explanation": "0,09 € · 60 = 5,40 €. Dazu kommt die Grundgebühr: 5,40 € + 5 € = 10,40 €."
                },
                {
                    "id": "zp10k10l2u_leicht_2",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Graph passt zu Tarif A (5 € Grundgebühr plus 0,09 € pro Minute)?",
                    "answers": [
                        "Graph 2",
                        "Graph 1",
                        "Graph 3",
                        "Graph 4"
                    ],
                    "correct": 0,
                    "explanation": "Tarif A startet bei 5 € (Grundgebühr) und steigt langsam um 0,09 € pro Minute. Das ist Graph 2.",
                    "grafik": "<svg viewBox='0 0 270 172' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='110' x2='256' y2='110' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><text x='35' y='114' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>5</text><line x1='40' y1='80' x2='256' y2='80' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><text x='35' y='84' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>10</text><line x1='40' y1='50' x2='256' y2='50' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><text x='35' y='54' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>15</text><line x1='40' y1='20' x2='256' y2='20' stroke='rgba(148,163,184,0.25)' stroke-width='1'/><text x='35' y='24' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>20</text><text x='112' y='153' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>40</text><text x='184' y='153' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>80</text><text x='256' y='153' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>120</text><text x='35' y='153' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>0</text><line x1='40' y1='140' x2='262' y2='140' stroke='#94a3b8' stroke-width='1.5'/><line x1='40' y1='140' x2='40' y2='12' stroke='#94a3b8' stroke-width='1.5'/><text x='256' y='166' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>Minuten</text><text x='36' y='8' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>€</text><line x1='40' y1='56' x2='256' y2='56' stroke='#38bdf8' stroke-width='2.2'/><line x1='40' y1='110' x2='256' y2='45.2' stroke='#10b981' stroke-width='2.2'/><line x1='40' y1='140' x2='256' y2='75.2' stroke='#a78bfa' stroke-width='2.2'/><line x1='40' y1='110' x2='70' y2='20' stroke='#f43f5e' stroke-width='2.2'/><circle cx='148' cy='45' r='8' fill='#0f172a' stroke='#38bdf8' stroke-width='1.5'/><text x='148' y='49' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>1</text><circle cx='220' cy='68' r='8' fill='#0f172a' stroke='#10b981' stroke-width='1.5'/><text x='220' y='72' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#10b981'>2</text><circle cx='220' cy='98' r='8' fill='#0f172a' stroke='#a78bfa' stroke-width='1.5'/><text x='220' y='102' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#a78bfa'>3</text><circle cx='73.6' cy='53.2' r='8' fill='#0f172a' stroke='#f43f5e' stroke-width='1.5'/><text x='73.6' y='57.2' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f43f5e'>4</text></svg>"
                },
                {
                    "id": "zp10k10l2u_leicht_3",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Eine Stadt hat 40 000 Einwohner und wächst jedes Jahr um 2 %. Welcher Term passt nach x Jahren?",
                    "answers": [
                        "40 000 · 1,02ˣ",
                        "40 000 · 0,02ˣ",
                        "40 000 + 800 · x",
                        "40 000 · 1,2ˣ"
                    ],
                    "correct": 0,
                    "explanation": "Plus 2 % heißt jedes Jahr mal 1,02. Der Startwert 40 000 wird x-mal mit 1,02 multipliziert."
                },
                {
                    "id": "zp10k10l2u_leicht_4",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Punkte im Test, sortiert: 8, 11, 12, 14, 15, 15, 17, 19, 20, 23, 30. Wie groß ist der Median?",
                    "answers": [
                        "15",
                        "16,73",
                        "19",
                        "14"
                    ],
                    "correct": 0,
                    "explanation": "Es sind 11 Werte, der 6. Wert steht genau in der Mitte. Das ist 15."
                }
            ],
            "mittel": [
                {
                    "id": "zp10k10l2u_mittel_1",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Tarif A: 5 € + 0,09 € pro Minute. Flatrate: 14 €. Bei wie vielen Minuten kosten beide gleich viel?",
                    "answers": [
                        "100 Minuten",
                        "156 Minuten",
                        "56 Minuten",
                        "9 Minuten"
                    ],
                    "correct": 0,
                    "explanation": "Gleichsetzen: 5 + 0,09x = 14, also 0,09x = 9 und x = 100. Bei 100 Minuten kosten beide 14 €."
                },
                {
                    "id": "zp10k10l2u_mittel_2",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Lea legt 2000 € zu 3 % Zinsen an, die Zinsen bleiben auf dem Konto. Wie viel hat sie nach 5 Jahren?",
                    "answers": [
                        "2318,55 €",
                        "2300,00 €",
                        "2060,00 €",
                        "7425,86 €"
                    ],
                    "correct": 0,
                    "explanation": "Zinseszins: 2000 € · 1,03⁵ ≈ 2318,55 €. 2300 € wäre falsch, weil die Zinsen jedes Jahr mitverzinst werden."
                },
                {
                    "id": "zp10k10l2u_mittel_3",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Finn steht 50 m vor einem Turm und sieht die Spitze unter 32°. Wie hoch ist der Turm?",
                    "answers": [
                        "31,24 m",
                        "26,50 m",
                        "42,40 m",
                        "80,02 m"
                    ],
                    "correct": 0,
                    "explanation": "Gegenkathete h, Ankathete 50 m: tan 32° = h / 50, also h = 50 · tan 32° ≈ 31,24 m.",
                    "grafik": "<svg viewBox='0 0 260 165' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='140' x2='250' y2='140' stroke='#94a3b8' stroke-width='2'/><rect x='200' y='40' width='22' height='100' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><line x1='40' y1='140' x2='200' y2='40' stroke='#f59e0b' stroke-width='2' stroke-dasharray='4 3'/><circle cx='40' cy='140' r='3' fill='#e5e7eb'/><path d='M 80 140 A 40 40 0 0 0 73.9 118.8' fill='none' stroke='#10b981' stroke-width='2'/><text x='88' y='132' text-anchor='start' font-size='11' font-weight='700' font-family='sans-serif' fill='#10b981'>32°</text><text x='120' y='157' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>50 m</text><text x='232' y='94' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#a78bfa'>h</text></svg>"
                },
                {
                    "id": "zp10k10l2u_mittel_4",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Brückenbogen hat die Form y = −0,02x² + 8 (in m). Wie breit ist der Bogen am Wasser?",
                    "answers": [
                        "40 m",
                        "20 m",
                        "400 m",
                        "16 m"
                    ],
                    "correct": 0,
                    "explanation": "Nullstellen: −0,02x² + 8 = 0, also x² = 400 und x = −20 oder x = 20. Breite: 20 m + 20 m = 40 m.",
                    "grafik": "<svg viewBox='0 0 300 140' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='120' width='280' height='16' fill='rgba(56,189,248,0.25)'/><polyline points='30,120.0 42,110.9 54,102.7 66,95.5 78,89.3 90,84.0 102,79.7 114,76.3 126,73.9 138,72.5 150,72.0 162,72.5 174,73.9 186,76.3 198,79.7 210,84.0 222,89.3 234,95.5 246,102.7 258,110.9 270,120.0' fill='none' stroke='#a78bfa' stroke-width='3'/><line x1='150' y1='120' x2='150' y2='72' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4 3'/><text x='150' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>y = −0,02x² + 8</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "zp10k10l2u_schwer_1",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Guthaben wächst jährlich um 6 % Zinseszins. Nach wie vielen ganzen Jahren hat es sich verdoppelt?",
                    "answers": [
                        "12 Jahre",
                        "17 Jahre",
                        "11 Jahre",
                        "6 Jahre"
                    ],
                    "correct": 0,
                    "explanation": "1,06¹¹ ≈ 1,90 reicht noch nicht, 1,06¹² ≈ 2,01 schon. Also nach 12 Jahren."
                },
                {
                    "id": "zp10k10l2u_schwer_2",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein Feld ist ein rechtwinkliges Dreieck. Die 120 m lange Kathete liegt am 40°-Winkel. Wie lang ist der Weg quer?",
                    "answers": [
                        "156,65 m",
                        "91,93 m",
                        "186,69 m",
                        "100,69 m"
                    ],
                    "correct": 0,
                    "explanation": "Ankathete 120 m und Hypotenuse gesucht: cos 40° = 120 / c, also c = 120 / cos 40° ≈ 156,65 m.",
                    "grafik": "<svg viewBox='0 0 250 145' style='width:100%;max-width:350px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='60,120 200,120 60,30' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2.5'/><polyline points='60,108 72,108 72,120' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='52' y='79' text-anchor='end' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'></text><text x='130' y='138' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>120 m</text><text x='144' y='69' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>?</text><path d='M 172 120 A 28 28 0 0 0 176.7 104.5' fill='none' stroke='#10b981' stroke-width='2'/><text x='166' y='115' text-anchor='end' font-size='11' font-weight='700' font-family='sans-serif' fill='#10b981'>40°</text></svg>"
                },
                {
                    "id": "zp10k10l2u_schwer_3",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie weit fliegt der Ball, bis er auf dem Boden aufkommt (h = 0)?",
                    "answers": [
                        "11,32 m",
                        "10,00 m",
                        "5,00 m",
                        "−1,32 m"
                    ],
                    "correct": 0,
                    "explanation": "−0,1x² + x + 1,5 = 0 ergibt x² − 10x − 15 = 0, also x = 5 ± √40. Nur die positive Lösung passt: x ≈ 11,32 m.",
                    "grafik": "<svg viewBox='0 0 280 168' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='130' x2='264' y2='130' stroke='#94a3b8' stroke-width='1.5'/><line x1='30' y1='130' x2='30' y2='18' stroke='#94a3b8' stroke-width='1.5'/><text x='264' y='144' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>x in m</text><text x='36' y='22' text-anchor='start' font-size='10' font-family='sans-serif' fill='#94a3b8'>h in m</text><polyline points='30.0,97.0 39.0,86.5 48.0,77.2 57.0,69.0 66.0,61.8 75.0,55.8 84.0,50.8 93.0,47.0 102.0,44.2 111.0,42.5 120.0,42.0 129.0,42.6 138.0,44.2 147.0,47.0 156.0,50.8 165.0,55.8 174.0,61.8 183.0,69.0 192.0,77.2 201.0,86.6 210.0,97.0 219.0,108.6 228.0,121.2 233.8,130.0' fill='none' stroke='#f59e0b' stroke-width='2.5'/><circle cx='30' cy='97.0' r='4' fill='#38bdf8'/><text x='150' y='160' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>h(x) = −0,1x² + x + 1,5</text></svg>"
                },
                {
                    "id": "zp10k10l2u_schwer_4",
                    "category": "kurs_zp10_k10_l2",
                    "area": "schule",
                    "grade": 10,
                    "subject": "mathe",
                    "topic": "zp10",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Der Pool hat einen schrägen Boden. Wie viel Wasser passt hinein, wenn er ganz gefüllt ist?",
                    "answers": [
                        "75 m³",
                        "100 m³",
                        "50 m³",
                        "150 m³"
                    ],
                    "correct": 0,
                    "explanation": "Seitenfläche ist ein Trapez: (1 m + 2 m) / 2 · 10 m = 15 m². Mal 5 m Breite ergibt 75 m³.",
                    "grafik": "<svg viewBox='0 0 290 136' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,30 250,30 250,108 30,69' fill='rgba(56,189,248,0.3)' stroke='#38bdf8' stroke-width='2.5'/><text x='140' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>10 m</text><text x='24' y='54' text-anchor='end' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1 m</text><text x='256' y='74' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>2 m</text><text x='140' y='128' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Breite des Pools: 5 m</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "zp10k10l2_test_1",
                "category": "kurs_zp10_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Auto kostet 24 000 € und verliert jedes Jahr 15 % an Wert. Was ist es nach 2 Jahren wert?",
                "answers": [
                    "17 340 €",
                    "16 800 €",
                    "20 400 €",
                    "540 €"
                ],
                "correct": 0,
                "explanation": "Jedes Jahr bleiben 85 %: 24 000 € · 0,85² = 17 340 €. 16 800 € wäre linear gerechnet."
            },
            {
                "id": "zp10k10l2_test_2",
                "category": "kurs_zp10_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche maximale Höhe erreicht der Ball?",
                "answers": [
                    "4 m",
                    "1,5 m",
                    "5 m",
                    "6 m"
                ],
                "correct": 0,
                "explanation": "Scheitelstelle x = −1 / (2 · (−0,1)) = 5. Einsetzen: −0,1 · 25 + 5 + 1,5 = 4 m.",
                "grafik": "<svg viewBox='0 0 280 168' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='130' x2='264' y2='130' stroke='#94a3b8' stroke-width='1.5'/><line x1='30' y1='130' x2='30' y2='18' stroke='#94a3b8' stroke-width='1.5'/><text x='264' y='144' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>x in m</text><text x='36' y='22' text-anchor='start' font-size='10' font-family='sans-serif' fill='#94a3b8'>h in m</text><polyline points='30.0,97.0 39.0,86.5 48.0,77.2 57.0,69.0 66.0,61.8 75.0,55.8 84.0,50.8 93.0,47.0 102.0,44.2 111.0,42.5 120.0,42.0 129.0,42.6 138.0,44.2 147.0,47.0 156.0,50.8 165.0,55.8 174.0,61.8 183.0,69.0 192.0,77.2 201.0,86.6 210.0,97.0 219.0,108.6 228.0,121.2 233.8,130.0' fill='none' stroke='#f59e0b' stroke-width='2.5'/><circle cx='30' cy='97.0' r='4' fill='#38bdf8'/><text x='150' y='160' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>h(x) = −0,1x² + x + 1,5</text></svg>"
            },
            {
                "id": "zp10k10l2_test_3",
                "category": "kurs_zp10_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Der Boxplot zeigt den Schulweg einer Klasse. Wie groß ist der Interquartilsabstand?",
                "answers": [
                    "5 min",
                    "14 min",
                    "7 min",
                    "2 min"
                ],
                "correct": 0,
                "explanation": "Interquartilsabstand = oberes Quartil − unteres Quartil = 10 min − 5 min = 5 min. 14 min wäre die Spannweite.",
                "grafik": "<svg viewBox='0 0 290 138' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='272' y2='100' stroke='#94a3b8' stroke-width='1.5'/><line x1='20' y1='97' x2='20' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='20' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>0</text><line x1='48' y1='97' x2='48' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='48' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>2</text><line x1='76' y1='97' x2='76' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='76' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>4</text><line x1='104' y1='97' x2='104' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='104' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>6</text><line x1='132' y1='97' x2='132' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='132' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>8</text><line x1='160' y1='97' x2='160' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='160' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>10</text><line x1='188' y1='97' x2='188' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='188' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>12</text><line x1='216' y1='97' x2='216' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='216' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>14</text><line x1='244' y1='97' x2='244' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='244' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>16</text><line x1='272' y1='97' x2='272' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='272' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>18</text><text x='272' y='132' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>Minuten</text><line x1='48' y1='60' x2='90' y2='60' stroke='#38bdf8' stroke-width='2'/><line x1='160' y1='60' x2='244' y2='60' stroke='#38bdf8' stroke-width='2'/><line x1='48' y1='50' x2='48' y2='70' stroke='#38bdf8' stroke-width='2'/><line x1='244' y1='50' x2='244' y2='70' stroke='#38bdf8' stroke-width='2'/><rect x='90' y='40' width='70' height='40' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><line x1='118' y1='40' x2='118' y2='80' stroke='#f59e0b' stroke-width='3'/></svg>"
            },
            {
                "id": "zp10k10l2_test_4",
                "category": "kurs_zp10_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Aussage passt zum Boxplot über den Schulweg?",
                "answers": [
                    "Die Hälfte braucht höchstens 7 min",
                    "Der Mittelwert ist genau 7 min",
                    "Ein Viertel braucht mehr als 5 min",
                    "Alle brauchen mindestens 5 min"
                ],
                "correct": 0,
                "explanation": "Der Median liegt bei 7 min. Also braucht die Hälfte der Klasse höchstens 7 min. Den Mittelwert zeigt ein Boxplot nicht.",
                "grafik": "<svg viewBox='0 0 290 138' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='272' y2='100' stroke='#94a3b8' stroke-width='1.5'/><line x1='20' y1='97' x2='20' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='20' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>0</text><line x1='48' y1='97' x2='48' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='48' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>2</text><line x1='76' y1='97' x2='76' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='76' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>4</text><line x1='104' y1='97' x2='104' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='104' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>6</text><line x1='132' y1='97' x2='132' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='132' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>8</text><line x1='160' y1='97' x2='160' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='160' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>10</text><line x1='188' y1='97' x2='188' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='188' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>12</text><line x1='216' y1='97' x2='216' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='216' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>14</text><line x1='244' y1='97' x2='244' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='244' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>16</text><line x1='272' y1='97' x2='272' y2='103' stroke='#94a3b8' stroke-width='1.5'/><text x='272' y='116' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>18</text><text x='272' y='132' text-anchor='end' font-size='10' font-family='sans-serif' fill='#94a3b8'>Minuten</text><line x1='48' y1='60' x2='90' y2='60' stroke='#38bdf8' stroke-width='2'/><line x1='160' y1='60' x2='244' y2='60' stroke='#38bdf8' stroke-width='2'/><line x1='48' y1='50' x2='48' y2='70' stroke='#38bdf8' stroke-width='2'/><line x1='244' y1='50' x2='244' y2='70' stroke='#38bdf8' stroke-width='2'/><rect x='90' y='40' width='70' height='40' fill='rgba(56,189,248,0.2)' stroke='#38bdf8' stroke-width='2'/><line x1='118' y1='40' x2='118' y2='80' stroke='#f59e0b' stroke-width='3'/></svg>"
            },
            {
                "id": "zp10k10l2_test_5",
                "category": "kurs_zp10_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Wasser ist in dem runden Pool?",
                "answers": [
                    "12,21 m³",
                    "48,86 m³",
                    "13,57 m³",
                    "6,79 m³"
                ],
                "correct": 0,
                "explanation": "Radius 1,8 m: V = π · 1,8² · 1,2 ≈ 12,21 m³. Mit dem Durchmesser statt Radius käme 48,86 m³ heraus.",
                "grafik": "<svg viewBox='0 0 250 155' style='width:100%;max-width:350px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M 40 40 L 40 130 A 70 16 0 0 0 180 130 L 180 40' fill='none' stroke='#a78bfa' stroke-width='2'/><ellipse cx='110' cy='40' rx='70' ry='16' fill='none' stroke='#a78bfa' stroke-width='2'/><path d='M 40 78 A 70 16 0 0 0 180 78 L 180 130 A 70 16 0 0 1 40 130 Z' fill='rgba(56,189,248,0.3)'/><ellipse cx='110' cy='78' rx='70' ry='16' fill='rgba(56,189,248,0.35)' stroke='#38bdf8' stroke-width='1.5'/><line x1='40' y1='40' x2='180' y2='40' stroke='#f59e0b' stroke-width='2'/><text x='110' y='16' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>d = 3,6 m</text><line x1='194' y1='78' x2='194' y2='130' stroke='#f59e0b' stroke-width='2'/><text x='200' y='108' text-anchor='start' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>1,2 m</text></svg>"
            },
            {
                "id": "zp10k10l2_test_6",
                "category": "kurs_zp10_k10_l2",
                "area": "schule",
                "grade": 10,
                "subject": "mathe",
                "topic": "zp10",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie hoch ist der Brückenbogen 10 m neben der Mitte?",
                "answers": [
                    "6 m",
                    "7,8 m",
                    "10 m",
                    "2 m"
                ],
                "correct": 0,
                "explanation": "x = 10 einsetzen: −0,02 · 10² + 8 = −2 + 8 = 6 m. Erst quadrieren, dann mal −0,02.",
                "grafik": "<svg viewBox='0 0 300 156' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='120' width='280' height='16' fill='rgba(56,189,248,0.25)'/><polyline points='30,120.0 42,110.9 54,102.7 66,95.5 78,89.3 90,84.0 102,79.7 114,76.3 126,73.9 138,72.5 150,72.0 162,72.5 174,73.9 186,76.3 198,79.7 210,84.0 222,89.3 234,95.5 246,102.7 258,110.9 270,120.0' fill='none' stroke='#a78bfa' stroke-width='3'/><line x1='150' y1='120' x2='150' y2='72' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4 3'/><text x='150' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>y = −0,02x² + 8</text><line x1='210' y1='120' x2='210' y2='84' stroke='#f59e0b' stroke-width='2'/><line x1='150' y1='128' x2='210' y2='128' stroke='#f59e0b' stroke-width='1.5'/><text x='180' y='150' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#f59e0b'>10 m</text><text x='216' y='104' text-anchor='start' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>?</text></svg>"
            }
        ],
        "bestehenAb": 0.8
    }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
    }
})();
