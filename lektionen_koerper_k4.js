// Körpernetze und Würfelgebäude - Klasse 4 Mathe
(function () {
    const extraKurse = [{"id": "koerper_k4", "title": "Körpernetze und Würfelgebäude", "icon": "🎲", "grade": 4, "subject": "mathe", "beschreibung": "Würfel- und Quadernetze erkennen und Würfelgebäude mit Bauplan und Ansichten verstehen."}];
    const extraLektionen = [
    {
        "id": "netz_k4_l1",
        "kurs": "koerper_k4",
        "order": 1,
        "icon": "🎲",
        "title": "Würfelnetze und Quadernetze",
        "kurz": "Körper aufklappen – welches Netz ergibt einen Würfel?",
        "erklaerung": {
            "intro": "Schneidest du einen <b>Würfel</b> an einigen Kanten auf und klappst ihn flach, entsteht ein <b>Körpernetz</b>. Ein Würfelnetz besteht aus <b>6 gleichen Quadraten</b>, und es gibt genau <b>11 verschiedene Würfelnetze</b>. Flächen, die beim Würfel <b>gegenüber</b> liegen, berühren sich im Netz nie – liegen drei Quadrate in einer Reihe, sind die beiden äußeren Gegenüber. Ein <b>Quader</b> hat 6 Rechtecke, davon sind immer <b>2 gleich groß</b>.",
            "merksatz": "Ein Würfelnetz hat 6 Quadrate; gegenüberliegende Flächen berühren sich im Netz nicht – beim Spielwürfel ergeben sie zusammen 7.",
            "beispiele": [
                "Das <b>Kreuz</b> ist eines der 11 Würfelnetze. Faltest du es, liegen A und D gegenüber, ebenso B und C sowie E und F.<svg viewBox='0 0 156 122' style='width:100%;max-width:218px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='44' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='61' y='32.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>E</text><rect x='10' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='27' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>B</text><rect x='44' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='61' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>A</text><rect x='78' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='95' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>C</text><rect x='112' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='129' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>D</text><rect x='44' y='78' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='61' y='100.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>F</text></svg>",
                "Beim <b>Spielwürfel</b> ergeben gegenüberliegende Seiten immer 7: 1 und 6, 2 und 5, 3 und 4.<svg viewBox='0 0 156 122' style='width:100%;max-width:218px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='44' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='53.18' cy='19.18' r='2.72' fill='#e5e7eb'/><circle cx='61' cy='27' r='2.72' fill='#e5e7eb'/><circle cx='68.82' cy='34.82' r='2.72' fill='#e5e7eb'/><rect x='10' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='19.18' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='34.82' cy='68.82' r='2.72' fill='#e5e7eb'/><rect x='44' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='61' cy='61' r='2.72' fill='#e5e7eb'/><rect x='78' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='87.18' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='102.82' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='95' cy='61' r='2.72' fill='#e5e7eb'/><circle cx='87.18' cy='68.82' r='2.72' fill='#e5e7eb'/><circle cx='102.82' cy='68.82' r='2.72' fill='#e5e7eb'/><rect x='112' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='121.18' cy='52.5' r='2.72' fill='#e5e7eb'/><circle cx='136.82' cy='52.5' r='2.72' fill='#e5e7eb'/><circle cx='121.18' cy='61' r='2.72' fill='#e5e7eb'/><circle cx='136.82' cy='61' r='2.72' fill='#e5e7eb'/><circle cx='121.18' cy='69.5' r='2.72' fill='#e5e7eb'/><circle cx='136.82' cy='69.5' r='2.72' fill='#e5e7eb'/><rect x='44' y='78' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='53.18' cy='87.18' r='2.72' fill='#e5e7eb'/><circle cx='68.82' cy='87.18' r='2.72' fill='#e5e7eb'/><circle cx='53.18' cy='102.82' r='2.72' fill='#e5e7eb'/><circle cx='68.82' cy='102.82' r='2.72' fill='#e5e7eb'/></svg>",
                "Ein <b>Quadernetz</b> hat 6 Rechtecke. Gleiche Farbe = gleich große Flächen, die beim Quader gegenüber liegen.<svg viewBox='0 0 132 116' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='42' y='10' width='48' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='58' y1='10' x2='58' y2='42' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='74' y1='10' x2='74' y2='42' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='42' y1='26' x2='90' y2='26' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='42' y='42' width='48' height='16' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><line x1='58' y1='42' x2='58' y2='58' stroke='#f59e0b' stroke-width='0.6' opacity='0.6'/><line x1='74' y1='42' x2='74' y2='58' stroke='#f59e0b' stroke-width='0.6' opacity='0.6'/><rect x='42' y='58' width='48' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='58' y1='58' x2='58' y2='90' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='74' y1='58' x2='74' y2='90' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='42' y1='74' x2='90' y2='74' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='42' y='90' width='48' height='16' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><line x1='58' y1='90' x2='58' y2='106' stroke='#f59e0b' stroke-width='0.6' opacity='0.6'/><line x1='74' y1='90' x2='74' y2='106' stroke='#f59e0b' stroke-width='0.6' opacity='0.6'/><rect x='10' y='42' width='32' height='16' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><line x1='26' y1='42' x2='26' y2='58' stroke='#10b981' stroke-width='0.6' opacity='0.6'/><rect x='90' y='42' width='32' height='16' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><line x1='106' y1='42' x2='106' y2='58' stroke='#10b981' stroke-width='0.6' opacity='0.6'/></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "netzk4l1u_leicht_1",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist ein Körpernetz?",
                    "answers": [
                        "Der aufgeklappte Körper",
                        "Nur die Kanten vom Körper",
                        "Der Körper von oben",
                        "Die Ecken vom Körper"
                    ],
                    "correct": 0,
                    "explanation": "Ein Körpernetz entsteht, wenn du einen Körper an einigen Kanten aufschneidest und flach aufklappst.",
                    "grafik": "<svg viewBox='0 0 140 110' style='width:100%;max-width:196px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='10' width='30' height='30' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='10' y='40' width='30' height='30' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='40' y='40' width='30' height='30' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='70' y='40' width='30' height='30' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='100' y='40' width='30' height='30' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='40' y='70' width='30' height='30' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/></svg>"
                },
                {
                    "id": "netzk4l1u_leicht_2",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Aus wie vielen Quadraten besteht ein Würfelnetz?",
                    "answers": [
                        "6 Quadrate",
                        "4 Quadrate",
                        "8 Quadrate",
                        "12 Quadrate"
                    ],
                    "correct": 0,
                    "explanation": "Ein Würfel hat 6 Flächen, also hat sein Netz 6 Quadrate. 8 ist die Zahl der Ecken, 12 die Zahl der Kanten.",
                    "grafik": "<svg viewBox='0 0 85 96' style='width:100%;max-width:118px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='43,8 77,28 43,48 8,28' fill='#2b5a8a'/><polygon points='8,28 43,48 43,88 8,68' fill='#1d4369'/><polygon points='77,28 43,48 43,88 77,68' fill='#12304f'/></g></svg>"
                },
                {
                    "id": "netzk4l1u_leicht_3",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele verschiedene Würfelnetze gibt es?",
                    "answers": [
                        "11",
                        "6",
                        "8",
                        "12"
                    ],
                    "correct": 0,
                    "explanation": "Es gibt genau 11 verschiedene Würfelnetze. Gedrehte oder gespiegelte Netze zählen nicht extra."
                },
                {
                    "id": "netzk4l1u_leicht_4",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Netz kann man zu einem Würfel falten?",
                    "answers": [
                        "Netz B",
                        "Netz A",
                        "Netz C",
                        "Netz D"
                    ],
                    "correct": 0,
                    "explanation": "Netz B ist das Kreuz, ein echtes Würfelnetz. Bei A und D liegen 4 Quadrate als Block zusammen, bei C liegen alle 6 in einer Reihe – da überlappen Flächen.",
                    "grafik": "<svg viewBox='0 0 360 87' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='19.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='36.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='53.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='19.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='36.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='53.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='45' y='81' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><rect x='118' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='101' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='118' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='135' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='152' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='118' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='135' y='81' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text><rect x='174' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='191' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='208' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='225' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='242' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='259' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='225' y='81' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>C</text><rect x='281' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='298' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='281' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='298' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='315' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='332' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='315' y='81' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>D</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "netzk4l1u_mittel_1",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Fläche liegt beim Würfel gegenüber von A?",
                    "answers": [
                        "Fläche E",
                        "Fläche C",
                        "Fläche B",
                        "Fläche D"
                    ],
                    "correct": 0,
                    "explanation": "A, C und E liegen in einer Reihe. Zwischen A und E liegt genau ein Quadrat (C), darum liegen A und E gegenüber.",
                    "grafik": "<svg viewBox='0 0 156 122' style='width:100%;max-width:218px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='44' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='61' y='32.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>D</text><rect x='10' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='27' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>A</text><rect x='44' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='61' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>C</text><rect x='78' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='95' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>E</text><rect x='112' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='129' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>B</text><rect x='44' y='78' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='61' y='100.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>F</text></svg>"
                },
                {
                    "id": "netzk4l1u_mittel_2",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Spielwürfel: Wie viele Augen gehören auf das Feld mit dem Fragezeichen?",
                    "answers": [
                        "5 Augen",
                        "4 Augen",
                        "6 Augen",
                        "3 Augen"
                    ],
                    "correct": 0,
                    "explanation": "Das ?-Feld liegt der 2 gegenüber (ein Quadrat dazwischen). Gegenüber ergibt immer 7: 7 − 2 = 5.",
                    "grafik": "<svg viewBox='0 0 156 122' style='width:100%;max-width:218px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='44' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='53.18' cy='19.18' r='2.72' fill='#e5e7eb'/><circle cx='61' cy='27' r='2.72' fill='#e5e7eb'/><circle cx='68.82' cy='34.82' r='2.72' fill='#e5e7eb'/><rect x='10' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='44' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='53.18' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='68.82' cy='68.82' r='2.72' fill='#e5e7eb'/><rect x='78' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='112' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='129' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><rect x='44' y='78' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/></svg>"
                },
                {
                    "id": "netzk4l1u_mittel_3",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Netz ergibt KEINEN Würfel?",
                    "answers": [
                        "Netz C",
                        "Netz A",
                        "Netz B",
                        "Netz D"
                    ],
                    "correct": 0,
                    "explanation": "Bei Netz C würden beim Falten zwei Quadrate aufeinander liegen, und eine Seite bliebe offen. A, B und D sind echte Würfelnetze.",
                    "grafik": "<svg viewBox='0 0 360 104' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='2.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='19.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='36.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='36.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='53.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='70.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='45' y='98' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><rect x='101' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='118' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='118' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='135' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='135' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='152' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='135' y='98' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text><rect x='199.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='216.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='233.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='199.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='199.5' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='199.5' y='59' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='225' y='98' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>C</text><rect x='281' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='281' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='298' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='315' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='332' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='332' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='315' y='98' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>D</text></svg>"
                },
                {
                    "id": "netzk4l1u_mittel_4",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ben faltet das Netz. Welche Fläche liegt der roten Fläche gegenüber?",
                    "answers": [
                        "Fläche D",
                        "Fläche A",
                        "Fläche B",
                        "Fläche C"
                    ],
                    "correct": 0,
                    "explanation": "Rot, C und D liegen in einer Reihe. Zwischen Rot und D liegt genau ein Quadrat (C) – also liegen Rot und D gegenüber.",
                    "grafik": "<svg viewBox='0 0 156 122' style='width:100%;max-width:218px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='27' y='32.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>A</text><rect x='44' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='61' y='32.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>B</text><rect x='44' y='44' width='34' height='34' fill='rgba(244,63,94,0.35)' stroke='#f43f5e' stroke-width='2'/><rect x='78' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='95' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>C</text><rect x='112' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='129' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>D</text><rect x='112' y='78' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='129' y='100.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>E</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "netzk4l1u_schwer_1",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Paare gleich großer Flächen hat ein Quader?",
                    "answers": [
                        "3 Paare",
                        "2 Paare",
                        "6 Paare",
                        "4 Paare"
                    ],
                    "correct": 0,
                    "explanation": "Ein Quader hat 6 Flächen. Je zwei gegenüberliegende sind gleich groß: oben/unten, vorne/hinten, links/rechts – das sind 3 Paare.",
                    "grafik": "<svg viewBox='0 0 132 116' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='42' y='10' width='48' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='58' y1='10' x2='58' y2='42' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='74' y1='10' x2='74' y2='42' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='42' y1='26' x2='90' y2='26' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='42' y='42' width='48' height='16' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='58' y1='42' x2='58' y2='58' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='74' y1='42' x2='74' y2='58' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='42' y='58' width='48' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='58' y1='58' x2='58' y2='90' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='74' y1='58' x2='74' y2='90' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='42' y1='74' x2='90' y2='74' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='42' y='90' width='48' height='16' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='58' y1='90' x2='58' y2='106' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='74' y1='90' x2='74' y2='106' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='10' y='42' width='32' height='16' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='26' y1='42' x2='26' y2='58' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='90' y='42' width='32' height='16' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='106' y1='42' x2='106' y2='58' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/></svg>"
                },
                {
                    "id": "netzk4l1u_schwer_2",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Im Quadernetz fehlt noch der Deckel. Wie groß ist er?",
                    "answers": [
                        "4 × 2 Kästchen",
                        "4 × 1 Kästchen",
                        "2 × 1 Kästchen",
                        "2 × 2 Kästchen"
                    ],
                    "correct": 0,
                    "explanation": "Der Deckel ist genauso groß wie der Boden gegenüber: 4 Kästchen lang und 2 Kästchen breit.",
                    "grafik": "<svg viewBox='0 0 164 128' style='width:100%;max-width:229px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='46' y='46' width='72' height='18' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='64' y1='46' x2='64' y2='64' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='82' y1='46' x2='82' y2='64' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='100' y1='46' x2='100' y2='64' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='46' y='64' width='72' height='36' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='64' y1='64' x2='64' y2='100' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='82' y1='64' x2='82' y2='100' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='100' y1='64' x2='100' y2='100' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='46' y1='82' x2='118' y2='82' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='46' y='100' width='72' height='18' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='64' y1='100' x2='64' y2='118' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='82' y1='100' x2='82' y2='118' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='100' y1='100' x2='100' y2='118' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='10' y='46' width='36' height='18' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='28' y1='46' x2='28' y2='64' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='118' y='46' width='36' height='18' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='136' y1='46' x2='136' y2='64' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/></svg>"
                },
                {
                    "id": "netzk4l1u_schwer_3",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Spielwürfel: Wie viele Augen gehören auf das Feld A?",
                    "answers": [
                        "2 Augen",
                        "4 Augen",
                        "5 Augen",
                        "1 Auge"
                    ],
                    "correct": 0,
                    "explanation": "Es fehlen 2 und 4. B liegt in der Reihe der 3 gegenüber, also ist B = 4. Für A bleibt die 2 – sie liegt der 5 gegenüber: 2 + 5 = 7.",
                    "grafik": "<svg viewBox='0 0 190 88' style='width:100%;max-width:266px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='27' cy='27' r='2.72' fill='#e5e7eb'/><rect x='44' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='61' y='32.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>A</text><rect x='78' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='87.18' cy='18.5' r='2.72' fill='#e5e7eb'/><circle cx='102.82' cy='18.5' r='2.72' fill='#e5e7eb'/><circle cx='87.18' cy='27' r='2.72' fill='#e5e7eb'/><circle cx='102.82' cy='27' r='2.72' fill='#e5e7eb'/><circle cx='87.18' cy='35.5' r='2.72' fill='#e5e7eb'/><circle cx='102.82' cy='35.5' r='2.72' fill='#e5e7eb'/><rect x='78' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='87.18' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='95' cy='61' r='2.72' fill='#e5e7eb'/><circle cx='102.82' cy='68.82' r='2.72' fill='#e5e7eb'/><rect x='112' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='121.18' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='136.82' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='129' cy='61' r='2.72' fill='#e5e7eb'/><circle cx='121.18' cy='68.82' r='2.72' fill='#e5e7eb'/><circle cx='136.82' cy='68.82' r='2.72' fill='#e5e7eb'/><rect x='146' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='163' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>B</text></svg>"
                },
                {
                    "id": "netzk4l1u_schwer_4",
                    "category": "kurs_netz_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Nur ein Netz ergibt einen Würfel. Welches?",
                    "answers": [
                        "Netz B",
                        "Netz A",
                        "Netz C",
                        "Netz D"
                    ],
                    "correct": 0,
                    "explanation": "Netz B lässt sich zum Würfel falten. Bei A liegen 5 Quadrate in einer Reihe, bei C und D landen zwei Quadrate auf derselben Seite.",
                    "grafik": "<svg viewBox='0 0 360 104' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='2.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='19.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='36.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='53.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='70.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='36.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='45' y='98' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><rect x='101' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='118' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='118' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='135' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='152' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='152' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='135' y='98' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text><rect x='199.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='216.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='233.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='199.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='199.5' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='199.5' y='59' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='225' y='98' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>C</text><rect x='281' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='281' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='298' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='315' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='332' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='332' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='315' y='98' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>D</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "netzk4l1_test_1",
                "category": "kurs_netz_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Augenzahl liegt beim Spielwürfel der 6 gegenüber?",
                "answers": [
                    "1",
                    "5",
                    "4",
                    "2"
                ],
                "correct": 0,
                "explanation": "Gegenüberliegende Seiten ergeben beim Spielwürfel immer 7: 7 − 6 = 1."
            },
            {
                "id": "netzk4l1_test_2",
                "category": "kurs_netz_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Netz kann man zu einem Würfel falten?",
                "answers": [
                    "Netz C",
                    "Netz A",
                    "Netz B",
                    "Netz D"
                ],
                "correct": 0,
                "explanation": "Netz C (die Treppe) ist ein Würfelnetz. A enthält einen 2×2-Block, B hat 5 Quadrate in einer Reihe, bei D überlappen die beiden oberen Quadrate.",
                "grafik": "<svg viewBox='0 0 360 87' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='19.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='36.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='53.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='19.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='36.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='53.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='45' y='81' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><rect x='92.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='109.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='126.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='143.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='160.5' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='126.5' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='135' y='81' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text><rect x='191' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='208' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='208' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='225' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='225' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='242' y='42' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='225' y='81' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>C</text><rect x='281' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='281' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='298' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='315' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='332' y='25' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='332' y='8' width='17' height='17' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='315' y='81' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#f59e0b'>D</text></svg>"
            },
            {
                "id": "netzk4l1_test_3",
                "category": "kurs_netz_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Fläche liegt beim Würfel gegenüber von A?",
                "answers": [
                    "Fläche F",
                    "Fläche E",
                    "Fläche C",
                    "Fläche B"
                ],
                "correct": 0,
                "explanation": "B, C und D bilden einen Ring mit E. A ist der Deckel, F der Boden – also liegen A und F gegenüber.",
                "grafik": "<svg viewBox='0 0 148 116' style='width:100%;max-width:207px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='32' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='26' y='31.44' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>A</text><rect x='10' y='42' width='32' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='26' y='63.44' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>B</text><rect x='42' y='42' width='32' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='58' y='63.44' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>C</text><rect x='74' y='42' width='32' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='90' y='63.44' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>D</text><rect x='106' y='42' width='32' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='122' y='63.44' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>E</text><rect x='106' y='74' width='32' height='32' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='122' y='95.44' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>F</text></svg>"
            },
            {
                "id": "netzk4l1_test_4",
                "category": "kurs_netz_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Quader: 3 cm lang, 2 cm breit, 1 cm hoch. Wie viele Flächen sind 3 cm × 2 cm groß?",
                "answers": [
                    "2 Flächen",
                    "1 Fläche",
                    "3 Flächen",
                    "4 Flächen"
                ],
                "correct": 0,
                "explanation": "Die Fläche 3 cm × 2 cm ist oben und unten. Gegenüberliegende Flächen sind beim Quader gleich groß, also sind es 2.",
                "grafik": "<svg viewBox='0 0 174 152' style='width:100%;max-width:243px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='54' y='10' width='66' height='44' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='76' y1='10' x2='76' y2='54' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='98' y1='10' x2='98' y2='54' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='54' y1='32' x2='120' y2='32' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='54' y='54' width='66' height='22' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='76' y1='54' x2='76' y2='76' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='98' y1='54' x2='98' y2='76' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='54' y='76' width='66' height='44' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='76' y1='76' x2='76' y2='120' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='98' y1='76' x2='98' y2='120' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='54' y1='98' x2='120' y2='98' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='54' y='120' width='66' height='22' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='76' y1='120' x2='76' y2='142' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><line x1='98' y1='120' x2='98' y2='142' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='10' y='54' width='44' height='22' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='32' y1='54' x2='32' y2='76' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/><rect x='120' y='54' width='44' height='22' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='142' y1='54' x2='142' y2='76' stroke='#38bdf8' stroke-width='0.6' opacity='0.6'/></svg>"
            },
            {
                "id": "netzk4l1_test_5",
                "category": "kurs_netz_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Spielwürfel: Wie viele Augen gehören auf das Feld mit dem Fragezeichen?",
                "answers": [
                    "3 Augen",
                    "5 Augen",
                    "6 Augen",
                    "2 Augen"
                ],
                "correct": 0,
                "explanation": "Das ?-Feld liegt der 4 gegenüber: Zwischen beiden liegt in der Reihe genau ein Quadrat. 7 − 4 = 3.",
                "grafik": "<svg viewBox='0 0 156 122' style='width:100%;max-width:218px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='19.18' cy='19.18' r='2.72' fill='#e5e7eb'/><circle cx='34.82' cy='34.82' r='2.72' fill='#e5e7eb'/><rect x='44' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='44' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='53.18' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='68.82' cy='53.18' r='2.72' fill='#e5e7eb'/><circle cx='53.18' cy='68.82' r='2.72' fill='#e5e7eb'/><circle cx='68.82' cy='68.82' r='2.72' fill='#e5e7eb'/><rect x='78' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='112' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='129' y='66.78' text-anchor='middle' font-size='16' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><rect x='112' y='78' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/></svg>"
            },
            {
                "id": "netzk4l1_test_6",
                "category": "kurs_netz_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Kann man dieses Netz zu einem Würfel falten?",
                "answers": [
                    "Nein, zwei Flächen decken sich",
                    "Ja, es ist ein Würfelnetz",
                    "Ja, so wie beim Kreuz",
                    "Nein, es sind zu viele Quadrate"
                ],
                "correct": 0,
                "explanation": "Die beiden oberen Quadrate klappen beide auf dieselbe Seite und decken sich. Es hat aber genau 6 Quadrate.",
                "grafik": "<svg viewBox='0 0 156 88' style='width:100%;max-width:218px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='10' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='44' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='78' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='112' y='44' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='112' y='10' width='34' height='34' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/></svg>"
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "wuerfelgeb_k4_l2",
        "kurs": "koerper_k4",
        "order": 2,
        "icon": "🧱",
        "title": "Würfelgebäude und Baupläne",
        "kurz": "Würfel zählen, Baupläne lesen, Ansichten finden",
        "erklaerung": {
            "intro": "Ein <b>Würfelgebäude</b> besteht aus gleich großen Würfeln. Jeder Würfel steht auf dem Boden oder auf einem anderen Würfel – auch die, die du nicht siehst, musst du mitzählen. Ein <b>Bauplan</b> zeigt das Gebäude <b>von oben</b>: Die Zahl in jedem Feld sagt, wie hoch der Turm dort ist. Die <b>Ansicht von vorne</b> zeigt in jeder Spalte den höchsten Turm.",
            "merksatz": "Alle Zahlen im Bauplan addieren – das ergibt die Anzahl der Würfel.",
            "beispiele": [
                "Dieses Gebäude hat <b>8 Würfel</b>: Die Türme sind 3, 2, 2 und 1 Würfel hoch. Unter jedem oberen Würfel stehen Würfel, die du nicht siehst.<svg viewBox='0 0 92 126' style='width:100%;max-width:128px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='46,52 65,63 46,74 27,63' fill='#2b5a8a'/><polygon points='27,63 46,74 46,96 27,85' fill='#1d4369'/><polygon points='65,63 46,74 46,96 65,85' fill='#12304f'/><polygon points='65,63 84,74 65,85 46,74' fill='#2b5a8a'/><polygon points='46,74 65,85 65,107 46,96' fill='#1d4369'/><polygon points='84,74 65,85 65,107 84,96' fill='#12304f'/><polygon points='27,63 46,74 27,85 8,74' fill='#2b5a8a'/><polygon points='8,74 27,85 27,107 8,96' fill='#1d4369'/><polygon points='46,74 27,85 27,107 46,96' fill='#12304f'/><polygon points='46,30 65,41 46,52 27,41' fill='#2b5a8a'/><polygon points='27,41 46,52 46,74 27,63' fill='#1d4369'/><polygon points='65,41 46,52 46,74 65,63' fill='#12304f'/><polygon points='46,74 65,85 46,96 27,85' fill='#2b5a8a'/><polygon points='27,85 46,96 46,118 27,107' fill='#1d4369'/><polygon points='65,85 46,96 46,118 65,107' fill='#12304f'/><polygon points='65,41 84,52 65,63 46,52' fill='#2b5a8a'/><polygon points='46,52 65,63 65,85 46,74' fill='#1d4369'/><polygon points='84,52 65,63 65,85 84,74' fill='#12304f'/><polygon points='27,41 46,52 27,63 8,52' fill='#2b5a8a'/><polygon points='8,52 27,63 27,85 8,74' fill='#1d4369'/><polygon points='46,52 27,63 27,85 46,74' fill='#12304f'/><polygon points='46,8 65,19 46,30 27,19' fill='#2b5a8a'/><polygon points='27,19 46,30 46,52 27,41' fill='#1d4369'/><polygon points='65,19 46,30 46,52 65,41' fill='#12304f'/></g></svg>",
                "Im <b>Bauplan</b> steht in jedem Feld die Turmhöhe. Alles zusammen: 3 + 1 + 2 + 2 = 8 Würfel. Von vorne siehst du in jeder Spalte den höchsten Turm.<svg viewBox='0 0 360 124' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='40' y='10' width='34' height='34'/><rect x='74' y='10' width='34' height='34'/><rect x='40' y='44' width='34' height='34'/><rect x='74' y='44' width='34' height='34'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='57' y='33'>3</text><text x='91' y='33'>1</text><text x='57' y='67'>2</text><text x='91' y='67'>2</text></g><text x='74' y='95' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text><text x='220' y='22' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>von vorne:</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='200' y='84' width='24' height='24'/><rect x='200' y='60' width='24' height='24'/><rect x='200' y='36' width='24' height='24'/><rect x='224' y='84' width='24' height='24'/><rect x='224' y='60' width='24' height='24'/></g></svg>",
                "Fehlende Würfel bis zum <b>Quader</b>: erst ausrechnen, wie viele der ganze Quader hat (z. B. 3 · 2 · 2 = 12), dann die vorhandenen abziehen."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "wuerfelgebk4l2u_leicht_1",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Würfel hat dieses Gebäude?",
                    "answers": [
                        "4 Würfel",
                        "3 Würfel",
                        "5 Würfel",
                        "2 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Der hintere Turm ist 2 Würfel hoch, die anderen beiden je 1: 2 + 1 + 1 = 4. Der untere Würfel hinten ist versteckt.",
                    "grafik": "<svg viewBox='0 0 92 104' style='width:100%;max-width:128px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='46,30 65,41 46,52 27,41' fill='#2b5a8a'/><polygon points='27,41 46,52 46,74 27,63' fill='#1d4369'/><polygon points='65,41 46,52 46,74 65,63' fill='#12304f'/><polygon points='65,41 84,52 65,63 46,52' fill='#2b5a8a'/><polygon points='46,52 65,63 65,85 46,74' fill='#1d4369'/><polygon points='84,52 65,63 65,85 84,74' fill='#12304f'/><polygon points='27,41 46,52 27,63 8,52' fill='#2b5a8a'/><polygon points='8,52 27,63 27,85 8,74' fill='#1d4369'/><polygon points='46,52 27,63 27,85 46,74' fill='#12304f'/><polygon points='46,8 65,19 46,30 27,19' fill='#2b5a8a'/><polygon points='27,19 46,30 46,52 27,41' fill='#1d4369'/><polygon points='65,19 46,30 46,52 65,41' fill='#12304f'/></g></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_leicht_2",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Würfel braucht Mia für diesen Bauplan?",
                    "answers": [
                        "7 Würfel",
                        "4 Würfel",
                        "6 Würfel",
                        "8 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Alle Turmhöhen addieren: 2 + 1 + 3 + 1 = 7 Würfel. 4 ist nur die Zahl der Felder.",
                    "grafik": "<svg viewBox='0 0 108 108' style='width:100%;max-width:151px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='20' y='10' width='34' height='34'/><rect x='54' y='10' width='34' height='34'/><rect x='20' y='44' width='34' height='34'/><rect x='54' y='44' width='34' height='34'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='37' y='33'>2</text><text x='71' y='33'>1</text><text x='37' y='67'>3</text><text x='71' y='67'>1</text></g><text x='54' y='95' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_leicht_3",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was zeigt die Zahl in einem Feld vom Bauplan?",
                    "answers": [
                        "Wie hoch der Turm ist",
                        "Wie breit der Turm ist",
                        "Die Nummer vom Würfel",
                        "Wie viele Türme es gibt"
                    ],
                    "correct": 0,
                    "explanation": "Im Bauplan steht in jedem Feld, wie viele Würfel dort übereinander stehen – also die Turmhöhe.",
                    "grafik": "<svg viewBox='0 0 108 108' style='width:100%;max-width:151px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='20' y='10' width='34' height='34'/><rect x='54' y='10' width='34' height='34'/><rect x='20' y='44' width='34' height='34'/><rect x='54' y='44' width='34' height='34'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='37' y='33'>1</text><text x='71' y='33'>2</text><text x='37' y='67'>3</text><text x='71' y='67'>1</text></g><text x='54' y='95' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_leicht_4",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Noah baut eine Treppe. Wie viele Würfel braucht er?",
                    "answers": [
                        "6 Würfel",
                        "3 Würfel",
                        "5 Würfel",
                        "4 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Die Türme sind 3, 2 und 1 Würfel hoch: 3 + 2 + 1 = 6 Würfel.",
                    "grafik": "<svg viewBox='0 0 92 126' style='width:100%;max-width:128px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='27,52 46,63 27,74 8,63' fill='#2b5a8a'/><polygon points='8,63 27,74 27,96 8,85' fill='#1d4369'/><polygon points='46,63 27,74 27,96 46,85' fill='#12304f'/><polygon points='46,63 65,74 46,85 27,74' fill='#2b5a8a'/><polygon points='27,74 46,85 46,107 27,96' fill='#1d4369'/><polygon points='65,74 46,85 46,107 65,96' fill='#12304f'/><polygon points='27,30 46,41 27,52 8,41' fill='#2b5a8a'/><polygon points='8,41 27,52 27,74 8,63' fill='#1d4369'/><polygon points='46,41 27,52 27,74 46,63' fill='#12304f'/><polygon points='65,74 84,85 65,96 46,85' fill='#2b5a8a'/><polygon points='46,85 65,96 65,118 46,107' fill='#1d4369'/><polygon points='84,85 65,96 65,118 84,107' fill='#12304f'/><polygon points='46,41 65,52 46,63 27,52' fill='#2b5a8a'/><polygon points='27,52 46,63 46,85 27,74' fill='#1d4369'/><polygon points='65,52 46,63 46,85 65,74' fill='#12304f'/><polygon points='27,8 46,19 27,30 8,19' fill='#2b5a8a'/><polygon points='8,19 27,30 27,52 8,41' fill='#1d4369'/><polygon points='46,19 27,30 27,52 46,41' fill='#12304f'/></g></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "wuerfelgebk4l2u_mittel_1",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Würfel hat dieses Gebäude?",
                    "answers": [
                        "7 Würfel",
                        "6 Würfel",
                        "4 Würfel",
                        "8 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Turmhöhen 3, 2, 1 und 1: zusammen 7 Würfel. Den untersten Würfel im hohen Turm siehst du nicht – er muss aber da sein.",
                    "grafik": "<svg viewBox='0 0 92 126' style='width:100%;max-width:128px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='46,52 65,63 46,74 27,63' fill='#2b5a8a'/><polygon points='27,63 46,74 46,96 27,85' fill='#1d4369'/><polygon points='65,63 46,74 46,96 65,85' fill='#12304f'/><polygon points='65,63 84,74 65,85 46,74' fill='#2b5a8a'/><polygon points='46,74 65,85 65,107 46,96' fill='#1d4369'/><polygon points='84,74 65,85 65,107 84,96' fill='#12304f'/><polygon points='27,63 46,74 27,85 8,74' fill='#2b5a8a'/><polygon points='8,74 27,85 27,107 8,96' fill='#1d4369'/><polygon points='46,74 27,85 27,107 46,96' fill='#12304f'/><polygon points='46,30 65,41 46,52 27,41' fill='#2b5a8a'/><polygon points='27,41 46,52 46,74 27,63' fill='#1d4369'/><polygon points='65,41 46,52 46,74 65,63' fill='#12304f'/><polygon points='46,74 65,85 46,96 27,85' fill='#2b5a8a'/><polygon points='27,85 46,96 46,118 27,107' fill='#1d4369'/><polygon points='65,85 46,96 46,118 65,107' fill='#12304f'/><polygon points='65,41 84,52 65,63 46,52' fill='#2b5a8a'/><polygon points='46,52 65,63 65,85 46,74' fill='#1d4369'/><polygon points='84,52 65,63 65,85 84,74' fill='#12304f'/><polygon points='46,8 65,19 46,30 27,19' fill='#2b5a8a'/><polygon points='27,19 46,30 46,52 27,41' fill='#1d4369'/><polygon points='65,19 46,30 46,52 65,41' fill='#12304f'/></g></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_mittel_2",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Würfel braucht Elif für diesen Bauplan?",
                    "answers": [
                        "17 Würfel",
                        "9 Würfel",
                        "15 Würfel",
                        "19 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Zeilenweise addieren: 3 + 2 + 1 = 6, 2 + 4 + 1 = 7, 1 + 1 + 2 = 4. Zusammen 6 + 7 + 4 = 17 Würfel.",
                    "grafik": "<svg viewBox='0 0 130 130' style='width:100%;max-width:182px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='20' y='10' width='30' height='30'/><rect x='50' y='10' width='30' height='30'/><rect x='80' y='10' width='30' height='30'/><rect x='20' y='40' width='30' height='30'/><rect x='50' y='40' width='30' height='30'/><rect x='80' y='40' width='30' height='30'/><rect x='20' y='70' width='30' height='30'/><rect x='50' y='70' width='30' height='30'/><rect x='80' y='70' width='30' height='30'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='35' y='31'>3</text><text x='65' y='31'>2</text><text x='95' y='31'>1</text><text x='35' y='61'>2</text><text x='65' y='61'>4</text><text x='95' y='61'>1</text><text x='35' y='91'>1</text><text x='65' y='91'>1</text><text x='95' y='91'>2</text></g><text x='65' y='117' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_mittel_3",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Ansicht siehst du von vorne?",
                    "answers": [
                        "Ansicht C",
                        "Ansicht A",
                        "Ansicht B",
                        "Ansicht D"
                    ],
                    "correct": 0,
                    "explanation": "Von vorne zählt in jeder Spalte der höchste Turm: links 3, Mitte 2, rechts 1. Die vordere Reihe allein (1, 2, 1) reicht nicht – dahinter ragt die 3 hervor.",
                    "grafik": "<svg viewBox='0 0 360 170' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='141' y='6' width='26' height='26'/><rect x='167' y='6' width='26' height='26'/><rect x='193' y='6' width='26' height='26'/><rect x='141' y='32' width='26' height='26'/><rect x='167' y='32' width='26' height='26'/><rect x='193' y='32' width='26' height='26'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='154' y='25'>3</text><text x='180' y='25'>1</text><text x='206' y='25'>1</text><text x='154' y='51'>1</text><text x='180' y='51'>2</text><text x='206' y='51'>1</text></g><text x='180' y='75' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text><line x1='10' y1='82' x2='350' y2='82' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3 3'/><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='25.5' y='131' width='13' height='13'/><rect x='38.5' y='131' width='13' height='13'/><rect x='38.5' y='118' width='13' height='13'/><rect x='51.5' y='131' width='13' height='13'/></g><text x='45' y='162' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='115.5' y='131' width='13' height='13'/><rect x='115.5' y='118' width='13' height='13'/><rect x='115.5' y='105' width='13' height='13'/><rect x='115.5' y='92' width='13' height='13'/><rect x='128.5' y='131' width='13' height='13'/><rect x='128.5' y='118' width='13' height='13'/><rect x='128.5' y='105' width='13' height='13'/><rect x='141.5' y='131' width='13' height='13'/><rect x='141.5' y='118' width='13' height='13'/></g><text x='135' y='162' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='205.5' y='131' width='13' height='13'/><rect x='205.5' y='118' width='13' height='13'/><rect x='205.5' y='105' width='13' height='13'/><rect x='218.5' y='131' width='13' height='13'/><rect x='218.5' y='118' width='13' height='13'/><rect x='231.5' y='131' width='13' height='13'/></g><text x='225' y='162' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>C</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='295.5' y='131' width='13' height='13'/><rect x='308.5' y='131' width='13' height='13'/><rect x='308.5' y='118' width='13' height='13'/><rect x='321.5' y='131' width='13' height='13'/><rect x='321.5' y='118' width='13' height='13'/><rect x='321.5' y='105' width='13' height='13'/></g><text x='315' y='162' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>D</text></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_mittel_4",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Lea will einen Quader: 3 lang, 2 breit, 2 hoch. Wie viele Würfel fehlen noch?",
                    "answers": [
                        "3 Würfel",
                        "9 Würfel",
                        "12 Würfel",
                        "2 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Der Quader hat 3 · 2 · 2 = 12 Würfel. Das Gebäude hat 2 + 2 + 1 + 2 + 1 + 1 = 9. Es fehlen 12 − 9 = 3 Würfel.",
                    "grafik": "<svg viewBox='0 0 111 115' style='width:100%;max-width:155px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='46,30 65,41 46,52 27,41' fill='#2b5a8a'/><polygon points='27,41 46,52 46,74 27,63' fill='#1d4369'/><polygon points='65,41 46,52 46,74 65,63' fill='#12304f'/><polygon points='65,41 84,52 65,63 46,52' fill='#2b5a8a'/><polygon points='46,52 65,63 65,85 46,74' fill='#1d4369'/><polygon points='84,52 65,63 65,85 84,74' fill='#12304f'/><polygon points='27,41 46,52 27,63 8,52' fill='#2b5a8a'/><polygon points='8,52 27,63 27,85 8,74' fill='#1d4369'/><polygon points='46,52 27,63 27,85 46,74' fill='#12304f'/><polygon points='46,8 65,19 46,30 27,19' fill='#2b5a8a'/><polygon points='27,19 46,30 46,52 27,41' fill='#1d4369'/><polygon points='65,19 46,30 46,52 65,41' fill='#12304f'/><polygon points='84,52 103,63 84,74 65,63' fill='#2b5a8a'/><polygon points='65,63 84,74 84,96 65,85' fill='#1d4369'/><polygon points='103,63 84,74 84,96 103,85' fill='#12304f'/><polygon points='46,52 65,63 46,74 27,63' fill='#2b5a8a'/><polygon points='27,63 46,74 46,96 27,85' fill='#1d4369'/><polygon points='65,63 46,74 46,96 65,85' fill='#12304f'/><polygon points='65,19 84,30 65,41 46,30' fill='#2b5a8a'/><polygon points='46,30 65,41 65,63 46,52' fill='#1d4369'/><polygon points='84,30 65,41 65,63 84,52' fill='#12304f'/><polygon points='27,19 46,30 27,41 8,30' fill='#2b5a8a'/><polygon points='8,30 27,41 27,63 8,52' fill='#1d4369'/><polygon points='46,30 27,41 27,63 46,52' fill='#12304f'/><polygon points='65,63 84,74 65,85 46,74' fill='#2b5a8a'/><polygon points='46,74 65,85 65,107 46,96' fill='#1d4369'/><polygon points='84,74 65,85 65,107 84,96' fill='#12304f'/></g></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "wuerfelgebk4l2u_schwer_1",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Würfel hat dieses Gebäude?",
                    "answers": [
                        "13 Würfel",
                        "8 Würfel",
                        "12 Würfel",
                        "14 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Turmhöhen: hinten 3 + 2 + 1, Mitte 2 + 2 + 1, vorne 1 + 1. Zusammen 6 + 5 + 2 = 13 Würfel.",
                    "grafik": "<svg viewBox='0 0 130 148' style='width:100%;max-width:182px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='65,52 84,63 65,74 46,63' fill='#2b5a8a'/><polygon points='46,63 65,74 65,96 46,85' fill='#1d4369'/><polygon points='84,63 65,74 65,96 84,85' fill='#12304f'/><polygon points='84,63 103,74 84,85 65,74' fill='#2b5a8a'/><polygon points='65,74 84,85 84,107 65,96' fill='#1d4369'/><polygon points='103,74 84,85 84,107 103,96' fill='#12304f'/><polygon points='46,63 65,74 46,85 27,74' fill='#2b5a8a'/><polygon points='27,74 46,85 46,107 27,96' fill='#1d4369'/><polygon points='65,74 46,85 46,107 65,96' fill='#12304f'/><polygon points='65,30 84,41 65,52 46,41' fill='#2b5a8a'/><polygon points='46,41 65,52 65,74 46,63' fill='#1d4369'/><polygon points='84,41 65,52 65,74 84,63' fill='#12304f'/><polygon points='103,74 122,85 103,96 84,85' fill='#2b5a8a'/><polygon points='84,85 103,96 103,118 84,107' fill='#1d4369'/><polygon points='122,85 103,96 103,118 122,107' fill='#12304f'/><polygon points='65,74 84,85 65,96 46,85' fill='#2b5a8a'/><polygon points='46,85 65,96 65,118 46,107' fill='#1d4369'/><polygon points='84,85 65,96 65,118 84,107' fill='#12304f'/><polygon points='27,74 46,85 27,96 8,85' fill='#2b5a8a'/><polygon points='8,85 27,96 27,118 8,107' fill='#1d4369'/><polygon points='46,85 27,96 27,118 46,107' fill='#12304f'/><polygon points='84,41 103,52 84,63 65,52' fill='#2b5a8a'/><polygon points='65,52 84,63 84,85 65,74' fill='#1d4369'/><polygon points='103,52 84,63 84,85 103,74' fill='#12304f'/><polygon points='46,41 65,52 46,63 27,52' fill='#2b5a8a'/><polygon points='27,52 46,63 46,85 27,74' fill='#1d4369'/><polygon points='65,52 46,63 46,85 65,74' fill='#12304f'/><polygon points='65,8 84,19 65,30 46,19' fill='#2b5a8a'/><polygon points='46,19 65,30 65,52 46,41' fill='#1d4369'/><polygon points='84,19 65,30 65,52 84,41' fill='#12304f'/><polygon points='84,85 103,96 84,107 65,96' fill='#2b5a8a'/><polygon points='65,96 84,107 84,129 65,118' fill='#1d4369'/><polygon points='103,96 84,107 84,129 103,118' fill='#12304f'/><polygon points='46,85 65,96 46,107 27,96' fill='#2b5a8a'/><polygon points='27,96 46,107 46,129 27,118' fill='#1d4369'/><polygon points='65,96 46,107 46,129 65,118' fill='#12304f'/><polygon points='65,52 84,63 65,74 46,63' fill='#2b5a8a'/><polygon points='46,63 65,74 65,96 46,85' fill='#1d4369'/><polygon points='84,63 65,74 65,96 84,85' fill='#12304f'/></g></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_schwer_2",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Ansicht siehst du von rechts?",
                    "answers": [
                        "Ansicht B",
                        "Ansicht A",
                        "Ansicht C",
                        "Ansicht D"
                    ],
                    "correct": 0,
                    "explanation": "Von rechts zählt in jeder Reihe der höchste Turm. Die vordere Reihe ist dann links: vorne 2, Mitte 3, hinten 1.",
                    "grafik": "<svg viewBox='0 0 360 209' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='141' y='6' width='26' height='26'/><rect x='167' y='6' width='26' height='26'/><rect x='193' y='6' width='26' height='26'/><rect x='141' y='32' width='26' height='26'/><rect x='167' y='32' width='26' height='26'/><rect x='193' y='32' width='26' height='26'/><rect x='141' y='58' width='26' height='26'/><rect x='167' y='58' width='26' height='26'/><rect x='193' y='58' width='26' height='26'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='154' y='25'>1</text><text x='180' y='25'>1</text><text x='206' y='25'>1</text><text x='154' y='51'>3</text><text x='180' y='51'>1</text><text x='206' y='51'>1</text><text x='154' y='77'>2</text><text x='180' y='77'>2</text><text x='206' y='77'>1</text></g><text x='180' y='101' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text><line x1='10' y1='108' x2='350' y2='108' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3 3'/><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='25.5' y='170' width='13' height='13'/><rect x='38.5' y='170' width='13' height='13'/><rect x='38.5' y='157' width='13' height='13'/><rect x='38.5' y='144' width='13' height='13'/><rect x='51.5' y='170' width='13' height='13'/><rect x='51.5' y='157' width='13' height='13'/></g><text x='45' y='201' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='115.5' y='170' width='13' height='13'/><rect x='115.5' y='157' width='13' height='13'/><rect x='128.5' y='170' width='13' height='13'/><rect x='128.5' y='157' width='13' height='13'/><rect x='128.5' y='144' width='13' height='13'/><rect x='141.5' y='170' width='13' height='13'/></g><text x='135' y='201' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='205.5' y='170' width='13' height='13'/><rect x='205.5' y='157' width='13' height='13'/><rect x='205.5' y='144' width='13' height='13'/><rect x='218.5' y='170' width='13' height='13'/><rect x='218.5' y='157' width='13' height='13'/><rect x='231.5' y='170' width='13' height='13'/></g><text x='225' y='201' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>C</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='295.5' y='170' width='13' height='13'/><rect x='295.5' y='157' width='13' height='13'/><rect x='295.5' y='144' width='13' height='13'/><rect x='295.5' y='131' width='13' height='13'/><rect x='295.5' y='118' width='13' height='13'/><rect x='308.5' y='170' width='13' height='13'/><rect x='308.5' y='157' width='13' height='13'/><rect x='308.5' y='144' width='13' height='13'/><rect x='308.5' y='131' width='13' height='13'/><rect x='308.5' y='118' width='13' height='13'/><rect x='321.5' y='170' width='13' height='13'/><rect x='321.5' y='157' width='13' height='13'/><rect x='321.5' y='144' width='13' height='13'/></g><text x='315' y='201' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>D</text></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_schwer_3",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Aylin will einen großen Würfel 3 · 3 · 3 bauen. Wie viele Würfel fehlen?",
                    "answers": [
                        "13 Würfel",
                        "14 Würfel",
                        "27 Würfel",
                        "12 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Der große Würfel hat 3 · 3 · 3 = 27 Würfel. Im Bauplan sind 3+2+1+2+2+1+1+1+1 = 14. Es fehlen 27 − 14 = 13.",
                    "grafik": "<svg viewBox='0 0 130 130' style='width:100%;max-width:182px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='20' y='10' width='30' height='30'/><rect x='50' y='10' width='30' height='30'/><rect x='80' y='10' width='30' height='30'/><rect x='20' y='40' width='30' height='30'/><rect x='50' y='40' width='30' height='30'/><rect x='80' y='40' width='30' height='30'/><rect x='20' y='70' width='30' height='30'/><rect x='50' y='70' width='30' height='30'/><rect x='80' y='70' width='30' height='30'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='35' y='31'>3</text><text x='65' y='31'>2</text><text x='95' y='31'>1</text><text x='35' y='61'>2</text><text x='65' y='61'>2</text><text x='95' y='61'>1</text><text x='35' y='91'>1</text><text x='65' y='91'>1</text><text x='95' y='91'>1</text></g><text x='65' y='117' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text></svg>"
                },
                {
                    "id": "wuerfelgebk4l2u_schwer_4",
                    "category": "kurs_wuerfelgeb_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "geometrie_k4",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Würfel von diesem Gebäude kannst du nicht sehen?",
                    "answers": [
                        "2 Würfel",
                        "0 Würfel",
                        "1 Würfel",
                        "4 Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Das Gebäude hat 3 + 3 + 2 + 2 = 10 Würfel. Sichtbar sind 8, also sind 2 Würfel versteckt – die beiden unteren im hintersten Turm.",
                    "grafik": "<svg viewBox='0 0 92 126' style='width:100%;max-width:128px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='46,52 65,63 46,74 27,63' fill='#2b5a8a'/><polygon points='27,63 46,74 46,96 27,85' fill='#1d4369'/><polygon points='65,63 46,74 46,96 65,85' fill='#12304f'/><polygon points='65,63 84,74 65,85 46,74' fill='#2b5a8a'/><polygon points='46,74 65,85 65,107 46,96' fill='#1d4369'/><polygon points='84,74 65,85 65,107 84,96' fill='#12304f'/><polygon points='27,63 46,74 27,85 8,74' fill='#2b5a8a'/><polygon points='8,74 27,85 27,107 8,96' fill='#1d4369'/><polygon points='46,74 27,85 27,107 46,96' fill='#12304f'/><polygon points='46,30 65,41 46,52 27,41' fill='#2b5a8a'/><polygon points='27,41 46,52 46,74 27,63' fill='#1d4369'/><polygon points='65,41 46,52 46,74 65,63' fill='#12304f'/><polygon points='46,74 65,85 46,96 27,85' fill='#2b5a8a'/><polygon points='27,85 46,96 46,118 27,107' fill='#1d4369'/><polygon points='65,85 46,96 46,118 65,107' fill='#12304f'/><polygon points='65,41 84,52 65,63 46,52' fill='#2b5a8a'/><polygon points='46,52 65,63 65,85 46,74' fill='#1d4369'/><polygon points='84,52 65,63 65,85 84,74' fill='#12304f'/><polygon points='27,41 46,52 27,63 8,52' fill='#2b5a8a'/><polygon points='8,52 27,63 27,85 8,74' fill='#1d4369'/><polygon points='46,52 27,63 27,85 46,74' fill='#12304f'/><polygon points='46,8 65,19 46,30 27,19' fill='#2b5a8a'/><polygon points='27,19 46,30 46,52 27,41' fill='#1d4369'/><polygon points='65,19 46,30 46,52 65,41' fill='#12304f'/><polygon points='46,52 65,63 46,74 27,63' fill='#2b5a8a'/><polygon points='27,63 46,74 46,96 27,85' fill='#1d4369'/><polygon points='65,63 46,74 46,96 65,85' fill='#12304f'/><polygon points='65,19 84,30 65,41 46,30' fill='#2b5a8a'/><polygon points='46,30 65,41 65,63 46,52' fill='#1d4369'/><polygon points='84,30 65,41 65,63 84,52' fill='#12304f'/></g></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "wuerfelgebk4l2_test_1",
                "category": "kurs_wuerfelgeb_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Würfel hat dieses Gebäude?",
                "answers": [
                    "7 Würfel",
                    "6 Würfel",
                    "4 Würfel",
                    "8 Würfel"
                ],
                "correct": 0,
                "explanation": "Turmhöhen 3, 1, 2 und 1: zusammen 7 Würfel. Ein Würfel im hohen Turm ist versteckt.",
                "grafik": "<svg viewBox='0 0 92 126' style='width:100%;max-width:128px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='46,52 65,63 46,74 27,63' fill='#2b5a8a'/><polygon points='27,63 46,74 46,96 27,85' fill='#1d4369'/><polygon points='65,63 46,74 46,96 65,85' fill='#12304f'/><polygon points='65,63 84,74 65,85 46,74' fill='#2b5a8a'/><polygon points='46,74 65,85 65,107 46,96' fill='#1d4369'/><polygon points='84,74 65,85 65,107 84,96' fill='#12304f'/><polygon points='27,63 46,74 27,85 8,74' fill='#2b5a8a'/><polygon points='8,74 27,85 27,107 8,96' fill='#1d4369'/><polygon points='46,74 27,85 27,107 46,96' fill='#12304f'/><polygon points='46,30 65,41 46,52 27,41' fill='#2b5a8a'/><polygon points='27,41 46,52 46,74 27,63' fill='#1d4369'/><polygon points='65,41 46,52 46,74 65,63' fill='#12304f'/><polygon points='46,74 65,85 46,96 27,85' fill='#2b5a8a'/><polygon points='27,85 46,96 46,118 27,107' fill='#1d4369'/><polygon points='65,85 46,96 46,118 65,107' fill='#12304f'/><polygon points='27,41 46,52 27,63 8,52' fill='#2b5a8a'/><polygon points='8,52 27,63 27,85 8,74' fill='#1d4369'/><polygon points='46,52 27,63 27,85 46,74' fill='#12304f'/><polygon points='46,8 65,19 46,30 27,19' fill='#2b5a8a'/><polygon points='27,19 46,30 46,52 27,41' fill='#1d4369'/><polygon points='65,19 46,30 46,52 65,41' fill='#12304f'/></g></svg>"
            },
            {
                "id": "wuerfelgebk4l2_test_2",
                "category": "kurs_wuerfelgeb_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Würfel braucht Ben für diesen Bauplan?",
                "answers": [
                    "11 Würfel",
                    "6 Würfel",
                    "10 Würfel",
                    "12 Würfel"
                ],
                "correct": 0,
                "explanation": "2 + 3 + 1 = 6 und 1 + 2 + 2 = 5. Zusammen 6 + 5 = 11 Würfel.",
                "grafik": "<svg viewBox='0 0 142 108' style='width:100%;max-width:198px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='20' y='10' width='34' height='34'/><rect x='54' y='10' width='34' height='34'/><rect x='88' y='10' width='34' height='34'/><rect x='20' y='44' width='34' height='34'/><rect x='54' y='44' width='34' height='34'/><rect x='88' y='44' width='34' height='34'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='37' y='33'>2</text><text x='71' y='33'>3</text><text x='105' y='33'>1</text><text x='37' y='67'>1</text><text x='71' y='67'>2</text><text x='105' y='67'>2</text></g><text x='71' y='95' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text></svg>"
            },
            {
                "id": "wuerfelgebk4l2_test_3",
                "category": "kurs_wuerfelgeb_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie zeigt ein Bauplan das Würfelgebäude?",
                "answers": [
                    "von oben",
                    "von vorne",
                    "von der Seite",
                    "von unten"
                ],
                "correct": 0,
                "explanation": "Der Bauplan ist eine Draufsicht: Du schaust von oben auf das Gebäude und schreibst die Turmhöhe in jedes Feld."
            },
            {
                "id": "wuerfelgebk4l2_test_4",
                "category": "kurs_wuerfelgeb_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Ansicht siehst du von vorne?",
                "answers": [
                    "Ansicht C",
                    "Ansicht A",
                    "Ansicht B",
                    "Ansicht D"
                ],
                "correct": 0,
                "explanation": "Von vorne zählt in jeder Spalte der höchste Turm: links 2, Mitte 2, rechts 3.",
                "grafik": "<svg viewBox='0 0 360 170' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='141' y='6' width='26' height='26'/><rect x='167' y='6' width='26' height='26'/><rect x='193' y='6' width='26' height='26'/><rect x='141' y='32' width='26' height='26'/><rect x='167' y='32' width='26' height='26'/><rect x='193' y='32' width='26' height='26'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='154' y='25'>1</text><text x='180' y='25'>2</text><text x='206' y='25'>3</text><text x='154' y='51'>2</text><text x='180' y='51'>1</text><text x='206' y='51'>1</text></g><text x='180' y='75' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text><line x1='10' y1='82' x2='350' y2='82' stroke='#94a3b8' stroke-width='1' stroke-dasharray='3 3'/><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='25.5' y='131' width='13' height='13'/><rect x='25.5' y='118' width='13' height='13'/><rect x='38.5' y='131' width='13' height='13'/><rect x='51.5' y='131' width='13' height='13'/></g><text x='45' y='162' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>A</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='115.5' y='131' width='13' height='13'/><rect x='115.5' y='118' width='13' height='13'/><rect x='115.5' y='105' width='13' height='13'/><rect x='128.5' y='131' width='13' height='13'/><rect x='128.5' y='118' width='13' height='13'/><rect x='128.5' y='105' width='13' height='13'/><rect x='141.5' y='131' width='13' height='13'/><rect x='141.5' y='118' width='13' height='13'/><rect x='141.5' y='105' width='13' height='13'/><rect x='141.5' y='92' width='13' height='13'/></g><text x='135' y='162' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>B</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='205.5' y='131' width='13' height='13'/><rect x='205.5' y='118' width='13' height='13'/><rect x='218.5' y='131' width='13' height='13'/><rect x='218.5' y='118' width='13' height='13'/><rect x='231.5' y='131' width='13' height='13'/><rect x='231.5' y='118' width='13' height='13'/><rect x='231.5' y='105' width='13' height='13'/></g><text x='225' y='162' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>C</text><g fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'><rect x='295.5' y='131' width='13' height='13'/><rect x='295.5' y='118' width='13' height='13'/><rect x='295.5' y='105' width='13' height='13'/><rect x='308.5' y='131' width='13' height='13'/><rect x='308.5' y='118' width='13' height='13'/><rect x='321.5' y='131' width='13' height='13'/><rect x='321.5' y='118' width='13' height='13'/></g><text x='315' y='162' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#f59e0b'>D</text></svg>"
            },
            {
                "id": "wuerfelgebk4l2_test_5",
                "category": "kurs_wuerfelgeb_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Finn will einen Quader: 3 lang, 2 breit, 2 hoch. Wie viele Würfel fehlen?",
                "answers": [
                    "2 Würfel",
                    "10 Würfel",
                    "12 Würfel",
                    "3 Würfel"
                ],
                "correct": 0,
                "explanation": "Der Quader hat 3 · 2 · 2 = 12 Würfel. Im Bauplan sind 2+2+2+1+2+1 = 10. Es fehlen 12 − 10 = 2.",
                "grafik": "<svg viewBox='0 0 142 108' style='width:100%;max-width:198px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'><rect x='20' y='10' width='34' height='34'/><rect x='54' y='10' width='34' height='34'/><rect x='88' y='10' width='34' height='34'/><rect x='20' y='44' width='34' height='34'/><rect x='54' y='44' width='34' height='34'/><rect x='88' y='44' width='34' height='34'/></g><g text-anchor='middle' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'><text x='37' y='33'>2</text><text x='71' y='33'>2</text><text x='105' y='33'>2</text><text x='37' y='67'>1</text><text x='71' y='67'>2</text><text x='105' y='67'>1</text></g><text x='71' y='95' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>vorne</text></svg>"
            },
            {
                "id": "wuerfelgebk4l2_test_6",
                "category": "kurs_wuerfelgeb_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "geometrie_k4",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Würfel hat dieses Gebäude?",
                "answers": [
                    "8 Würfel",
                    "6 Würfel",
                    "5 Würfel",
                    "9 Würfel"
                ],
                "correct": 0,
                "explanation": "Turmhöhen hinten 2 + 2 + 1, vorne 2 + 1: zusammen 5 + 3 = 8 Würfel. Zwei Würfel unten sind versteckt.",
                "grafik": "<svg viewBox='0 0 111 115' style='width:100%;max-width:155px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g stroke='#38bdf8' stroke-width='1.5' stroke-linejoin='round'><polygon points='46,30 65,41 46,52 27,41' fill='#2b5a8a'/><polygon points='27,41 46,52 46,74 27,63' fill='#1d4369'/><polygon points='65,41 46,52 46,74 65,63' fill='#12304f'/><polygon points='65,41 84,52 65,63 46,52' fill='#2b5a8a'/><polygon points='46,52 65,63 65,85 46,74' fill='#1d4369'/><polygon points='84,52 65,63 65,85 84,74' fill='#12304f'/><polygon points='27,41 46,52 27,63 8,52' fill='#2b5a8a'/><polygon points='8,52 27,63 27,85 8,74' fill='#1d4369'/><polygon points='46,52 27,63 27,85 46,74' fill='#12304f'/><polygon points='46,8 65,19 46,30 27,19' fill='#2b5a8a'/><polygon points='27,19 46,30 46,52 27,41' fill='#1d4369'/><polygon points='65,19 46,30 46,52 65,41' fill='#12304f'/><polygon points='84,52 103,63 84,74 65,63' fill='#2b5a8a'/><polygon points='65,63 84,74 84,96 65,85' fill='#1d4369'/><polygon points='103,63 84,74 84,96 103,85' fill='#12304f'/><polygon points='46,52 65,63 46,74 27,63' fill='#2b5a8a'/><polygon points='27,63 46,74 46,96 27,85' fill='#1d4369'/><polygon points='65,63 46,74 46,96 65,85' fill='#12304f'/><polygon points='65,19 84,30 65,41 46,30' fill='#2b5a8a'/><polygon points='46,30 65,41 65,63 46,52' fill='#1d4369'/><polygon points='84,30 65,41 65,63 84,52' fill='#12304f'/><polygon points='27,19 46,30 27,41 8,30' fill='#2b5a8a'/><polygon points='8,30 27,41 27,63 8,52' fill='#1d4369'/><polygon points='46,30 27,41 27,63 46,52' fill='#12304f'/></g></svg>"
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
