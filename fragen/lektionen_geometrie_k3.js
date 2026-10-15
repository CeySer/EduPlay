// Körper und Spiegeln - Klasse 3 Mathe
(function () {
    const extraKurse = [{"id": "geometrie_k3", "title": "Körper und Spiegeln", "icon": "🧊", "grade": 3, "subject": "mathe", "beschreibung": "Körper wie Würfel, Quader und Pyramide erkennen und Figuren an einer Achse spiegeln."}];
    const extraLektionen = [
    {
        "id": "koerper_k3_l1",
        "kurs": "geometrie_k3",
        "order": 1,
        "icon": "🧊",
        "title": "Körper erkennen",
        "kurz": "Würfel, Quader, Kugel, Zylinder, Kegel, Pyramide",
        "erklaerung": {
            "intro": "Ein Quadrat ist eine flache <b>Fläche</b> – du kannst es auf Papier zeichnen. Ein Würfel ist ein <b>Körper</b>: Du kannst ihn in die Hand nehmen. Körper haben <b>Ecken</b> (Spitzen), <b>Kanten</b> (Linien, wo zwei Flächen aneinanderstoßen) und <b>Flächen</b>. Wichtige Körper sind <b>Würfel</b>, <b>Quader</b>, <b>Kugel</b>, <b>Zylinder</b>, <b>Kegel</b> und <b>Pyramide</b>. Gestrichelte Linien im Bild sind Kanten, die du von vorne nicht sehen kannst.",
            "merksatz": "Würfel und Quader haben je 8 Ecken, 12 Kanten und 6 Flächen.",
            "beispiele": [
                "Am Würfel: eine Ecke (orange), eine Kante (grün), eine Fläche (lila). Er hat 8 Ecken, 12 Kanten und 6 Flächen.<svg viewBox='0 0 240 150' style='width:100%;max-width:336px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,120 110,120 110,40 30,40' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='30,40 110,40 144,14 64,14' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='110,120 144,94 144,14 110,40' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='64' y1='94' x2='30' y2='120' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='64' y1='94' x2='144' y2='94' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='64' y1='94' x2='64' y2='14' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><circle cx='30' cy='40' r='5' fill='#f59e0b'/><line x1='110' y1='120' x2='144' y2='94' stroke='#10b981' stroke-width='5'/><polygon points='30,120 110,120 110,40 30,40' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1' stroke-linejoin='round'/><circle cx='160' cy='40' r='5' fill='#f59e0b'/><text x='172' y='45' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#f59e0b'>Ecke</text><line x1='152' y1='72' x2='168' y2='72' stroke='#10b981' stroke-width='5'/><text x='172' y='77' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#10b981'>Kante</text><rect x='152' y='98' width='16' height='14' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='172' y='110' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#a78bfa'>Fläche</text></svg>",
                "Die Körper im Alltag: Eine Dose ist ein Zylinder, eine Eistüte ein Kegel, ein Ball eine Kugel.<svg viewBox='0 0 340 150' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M17,40 L17,105 A28,9 0 0 0 73,105 L73,40' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><ellipse cx='45' cy='40' rx='28' ry='9' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='2.5'/><path d='M17,105 A28,9 0 0 1 73,105' fill='none' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><text x='45' y='140' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>Zylinder</text><path d='M125,28 L95,108 A30,9 0 0 0 155,108 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2.5' stroke-linejoin='round'/><path d='M95,108 A30,9 0 0 1 155,108' fill='none' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='5 4'/><text x='125' y='140' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>Kegel</text><circle cx='200' cy='75' r='33' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><path d='M167,75 A33,9.9 0 0 0 233,75' fill='none' stroke='#38bdf8' stroke-width='2.5'/><path d='M167,75 A33,9.9 0 0 1 233,75' fill='none' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><text x='200' y='140' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>Kugel</text><polygon points='245,110 300,110 285.5,31' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><polygon points='300,110 326,92 285.5,31' fill='rgba(167,139,250,0.12)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><line x1='245' y1='110' x2='271' y2='92' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='271' y1='92' x2='326' y2='92' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='271' y1='92' x2='285.5' y2='31' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><text x='286' y='140' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>Pyramide</text></svg>",
                "Die Pyramide hat unten ein Quadrat und oben eine Spitze: 5 Ecken, 8 Kanten und 5 Flächen (1 Quadrat + 4 Dreiecke)."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "koerperk3l1u_leicht_1",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt dieser Körper?",
                    "answers": [
                        "Würfel",
                        "Quader",
                        "Quadrat",
                        "Pyramide"
                    ],
                    "correct": 0,
                    "explanation": "Alle Flächen sind gleich große Quadrate – das ist ein Würfel. Ein Quadrat ist nur eine flache Fläche.",
                    "grafik": "<svg viewBox='0 0 160 140' style='width:100%;max-width:224px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40,115 110,115 110,45 40,45' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='40,45 110,45 142,21 72,21' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='110,115 142,91 142,21 110,45' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='72' y1='91' x2='40' y2='115' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='72' y1='91' x2='142' y2='91' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='72' y1='91' x2='72' y2='21' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
                },
                {
                    "id": "koerperk3l1u_leicht_2",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt dieser Körper?",
                    "answers": [
                        "Zylinder",
                        "Kegel",
                        "Kreis",
                        "Kugel"
                    ],
                    "correct": 0,
                    "explanation": "Oben und unten ist je ein Kreis, dazwischen eine gebogene Fläche. Das ist ein Zylinder, wie eine Dose.",
                    "grafik": "<svg viewBox='0 0 140 150' style='width:100%;max-width:196px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M30,30 L30,120 A40,13 0 0 0 110,120 L110,30' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5'/><ellipse cx='70' cy='30' rx='40' ry='13' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='2.5'/><path d='M30,120 A40,13 0 0 1 110,120' fill='none' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
                },
                {
                    "id": "koerperk3l1u_leicht_3",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Fußball hat die Form von …",
                    "answers": [
                        "einer Kugel",
                        "einem Kreis",
                        "einem Zylinder",
                        "einem Kegel"
                    ],
                    "correct": 0,
                    "explanation": "Ein Ball ist rundherum rund und kann in jede Richtung rollen. Er ist eine Kugel. Ein Kreis ist flach."
                },
                {
                    "id": "koerperk3l1u_leicht_4",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt dieser Körper?",
                    "answers": [
                        "Kegel",
                        "Pyramide",
                        "Zylinder",
                        "Dreieck"
                    ],
                    "correct": 0,
                    "explanation": "Unten ist ein Kreis, oben eine Spitze. Das ist ein Kegel, wie eine Eistüte.",
                    "grafik": "<svg viewBox='0 0 140 150' style='width:100%;max-width:196px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M70,23 L25,118 A45,14 0 0 0 115,118 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2.5' stroke-linejoin='round'/><path d='M25,118 A45,14 0 0 1 115,118' fill='none' stroke='#f59e0b' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "koerperk3l1u_mittel_1",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Ecken hat ein Würfel?",
                    "answers": [
                        "8",
                        "6",
                        "12",
                        "4"
                    ],
                    "correct": 0,
                    "explanation": "Oben hat der Würfel 4 Ecken und unten 4 Ecken. 4 + 4 = 8 Ecken.",
                    "grafik": "<svg viewBox='0 0 160 140' style='width:100%;max-width:224px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='40,115 110,115 110,45 40,45' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><polygon points='40,45 110,45 142,21 72,21' fill='rgba(167,139,250,0.12)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><polygon points='110,115 142,91 142,21 110,45' fill='rgba(167,139,250,0.18)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><line x1='72' y1='91' x2='40' y2='115' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='72' y1='91' x2='142' y2='91' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='72' y1='91' x2='72' y2='21' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
                },
                {
                    "id": "koerperk3l1u_mittel_2",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Kanten hat dieser Quader?",
                    "answers": [
                        "12",
                        "8",
                        "6",
                        "9"
                    ],
                    "correct": 0,
                    "explanation": "4 Kanten unten, 4 oben und 4 senkrecht: 4 + 4 + 4 = 12. Die gestrichelten Kanten zählen mit.",
                    "grafik": "<svg viewBox='0 0 220 130' style='width:100%;max-width:308px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,105 150,105 150,50 30,50' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='30,50 150,50 186,24 66,24' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='150,105 186,79 186,24 150,50' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='66' y1='79' x2='30' y2='105' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='66' y1='79' x2='186' y2='79' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='66' y1='79' x2='66' y2='24' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
                },
                {
                    "id": "koerperk3l1u_mittel_3",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Eine Eistüte hat die Form von …",
                    "answers": [
                        "einem Kegel",
                        "einer Pyramide",
                        "einem Dreieck",
                        "einem Zylinder"
                    ],
                    "correct": 0,
                    "explanation": "Die Eistüte hat eine runde Öffnung und eine Spitze. Das ist ein Kegel. Ein Dreieck ist flach."
                },
                {
                    "id": "koerperk3l1u_mittel_4",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Bild zeigt einen Körper?",
                    "answers": [
                        "B, den Würfel",
                        "A, das Quadrat",
                        "beide Bilder",
                        "keines davon"
                    ],
                    "correct": 0,
                    "explanation": "Das Quadrat A ist flach, also eine Fläche. Der Würfel B ist ein Körper, den man anfassen kann.",
                    "grafik": "<svg viewBox='0 0 260 140' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,45 100,45 100,115 30,115' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><text x='65' y='134' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>A</text><polygon points='150,115 220,115 220,45 150,45' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><polygon points='150,45 220,45 250,23 180,23' fill='rgba(167,139,250,0.12)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><polygon points='220,115 250,93 250,23 220,45' fill='rgba(167,139,250,0.18)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><line x1='180' y1='93' x2='150' y2='115' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='180' y1='93' x2='250' y2='93' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='180' y1='93' x2='180' y2='23' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><text x='185' y='134' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>B</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "koerperk3l1u_schwer_1",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Ecken hat diese Pyramide?",
                    "answers": [
                        "5",
                        "4",
                        "8",
                        "6"
                    ],
                    "correct": 0,
                    "explanation": "Unten hat die Pyramide 4 Ecken, dazu kommt oben die Spitze: 4 + 1 = 5 Ecken.",
                    "grafik": "<svg viewBox='0 0 180 150' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,128 130,128 102,28' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='130,128 174,98 102,28' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='30' y1='128' x2='74' y2='98' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='74' y1='98' x2='174' y2='98' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='74' y1='98' x2='102' y2='28' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
                },
                {
                    "id": "koerperk3l1u_schwer_2",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Kanten hat diese Pyramide?",
                    "answers": [
                        "8",
                        "5",
                        "4",
                        "12"
                    ],
                    "correct": 0,
                    "explanation": "4 Kanten liegen unten am Quadrat, 4 Kanten gehen zur Spitze: 4 + 4 = 8 Kanten.",
                    "grafik": "<svg viewBox='0 0 180 150' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,128 130,128 102,28' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><polygon points='130,128 174,98 102,28' fill='rgba(167,139,250,0.12)' stroke='#a78bfa' stroke-width='2.5' stroke-linejoin='round'/><line x1='30' y1='128' x2='74' y2='98' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='74' y1='98' x2='174' y2='98' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='74' y1='98' x2='102' y2='28' stroke='#a78bfa' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
                },
                {
                    "id": "koerperk3l1u_schwer_3",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Körper hat 6 gleich große quadratische Flächen?",
                    "answers": [
                        "Würfel",
                        "Pyramide",
                        "Quadrat",
                        "Zylinder"
                    ],
                    "correct": 0,
                    "explanation": "Der Würfel hat 6 Flächen, und alle sind gleich große Quadrate. Ein Quadrat selbst ist kein Körper."
                },
                {
                    "id": "koerperk3l1u_schwer_4",
                    "category": "kurs_koerper_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Körper hat keine Ecken und keine Kanten?",
                    "answers": [
                        "Kugel",
                        "Zylinder",
                        "Kegel",
                        "Würfel"
                    ],
                    "correct": 0,
                    "explanation": "Die Kugel ist rundherum glatt. Der Zylinder hat 2 runde Kanten, der Kegel 1 Kante und eine Spitze."
                }
            ]
        },
        "test": [
            {
                "id": "koerperk3l1_test_1",
                "category": "kurs_koerper_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie heißt dieser Körper?",
                "answers": [
                    "Quader",
                    "Würfel",
                    "Rechteck",
                    "Zylinder"
                ],
                "correct": 0,
                "explanation": "Die Flächen sind Rechtecke, nicht alle gleich groß. Das ist ein Quader, wie ein Schuhkarton.",
                "grafik": "<svg viewBox='0 0 200 150' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='55,140 115,140 115,30 55,30' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2.5' stroke-linejoin='round'/><polygon points='55,30 115,30 145,8 85,8' fill='rgba(16,185,129,0.12)' stroke='#10b981' stroke-width='2.5' stroke-linejoin='round'/><polygon points='115,140 145,118 145,8 115,30' fill='rgba(16,185,129,0.18)' stroke='#10b981' stroke-width='2.5' stroke-linejoin='round'/><line x1='85' y1='118' x2='55' y2='140' stroke='#10b981' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='85' y1='118' x2='145' y2='118' stroke='#10b981' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='85' y1='118' x2='85' y2='8' stroke='#10b981' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
            },
            {
                "id": "koerperk3l1_test_2",
                "category": "kurs_koerper_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Flächen hat ein Quader?",
                "answers": [
                    "6",
                    "4",
                    "8",
                    "12"
                ],
                "correct": 0,
                "explanation": "Vorne und hinten, oben und unten, links und rechts: 2 + 2 + 2 = 6 Flächen.",
                "grafik": "<svg viewBox='0 0 220 130' style='width:100%;max-width:308px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,105 150,105 150,50 30,50' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='30,50 150,50 186,24 66,24' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='150,105 186,79 186,24 150,50' fill='rgba(56,189,248,0.18)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='66' y1='79' x2='30' y2='105' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='66' y1='79' x2='186' y2='79' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='66' y1='79' x2='66' y2='24' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
            },
            {
                "id": "koerperk3l1_test_3",
                "category": "kurs_koerper_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Dose Erbsen hat die Form von …",
                "answers": [
                    "einem Zylinder",
                    "einem Kegel",
                    "einem Kreis",
                    "einer Kugel"
                ],
                "correct": 0,
                "explanation": "Die Dose hat oben und unten einen Kreis und eine gebogene Fläche. Das ist ein Zylinder."
            },
            {
                "id": "koerperk3l1_test_4",
                "category": "kurs_koerper_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Flächen hat diese Pyramide?",
                "answers": [
                    "5",
                    "4",
                    "8",
                    "6"
                ],
                "correct": 0,
                "explanation": "4 Dreiecke an den Seiten und unten 1 Quadrat: 4 + 1 = 5 Flächen.",
                "grafik": "<svg viewBox='0 0 180 150' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,128 130,128 102,28' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><polygon points='130,128 174,98 102,28' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='30' y1='128' x2='74' y2='98' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='74' y1='98' x2='174' y2='98' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/><line x1='74' y1='98' x2='102' y2='28' stroke='#38bdf8' stroke-width='1.8' stroke-dasharray='5 4'/></svg>"
            },
            {
                "id": "koerperk3l1_test_5",
                "category": "kurs_koerper_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was hat ein Würfel genau 12-mal?",
                "answers": [
                    "Kanten",
                    "Ecken",
                    "Flächen",
                    "Spitzen"
                ],
                "correct": 0,
                "explanation": "Ein Würfel hat 12 Kanten. Ecken hat er 8, Flächen 6."
            },
            {
                "id": "koerperk3l1_test_6",
                "category": "kurs_koerper_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Gegenstand hat die Form eines Quaders?",
                "answers": [
                    "ein Schuhkarton",
                    "ein Fußball",
                    "eine Eistüte",
                    "eine Dose"
                ],
                "correct": 0,
                "explanation": "Ein Schuhkarton hat 6 rechteckige Flächen – er ist ein Quader. Ball = Kugel, Eistüte = Kegel, Dose = Zylinder."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "spiegeln_k3_l2",
        "kurs": "geometrie_k3",
        "order": 2,
        "icon": "🦋",
        "title": "Achsensymmetrie und Spiegeln",
        "kurz": "Spiegelachsen finden und Figuren spiegeln",
        "erklaerung": {
            "intro": "Eine Figur ist <b>achsensymmetrisch</b>, wenn du sie so falten kannst, dass beide Hälften genau aufeinanderpassen. Die Faltlinie heißt <b>Spiegelachse</b>. Beim <b>Spiegeln</b> auf Karopapier zählst du die Kästchen bis zur Achse. Das Spiegelbild liegt auf der anderen Seite, genauso weit weg.",
            "merksatz": "Der gespiegelte Punkt liegt auf der anderen Seite der Achse – gleich weit entfernt.",
            "beispiele": [
                "Das blaue Dreieck wird an der roten Achse gespiegelt. Jede Ecke hat rechts den gleichen Abstand zur Achse wie links.<svg viewBox='0 0 220 120' style='width:100%;max-width:308px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='10' x2='10' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='30' y1='10' x2='30' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='50' y1='10' x2='50' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='70' y1='10' x2='70' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='90' y1='10' x2='90' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='110' y1='10' x2='110' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='130' y1='10' x2='130' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='150' y1='10' x2='150' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='170' y1='10' x2='170' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='190' y1='10' x2='190' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='210' y1='10' x2='210' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='10' x2='210' y2='10' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='30' x2='210' y2='30' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='50' x2='210' y2='50' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='70' x2='210' y2='70' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='90' x2='210' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='110' x2='210' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><polygon points='30,90 90,90 90,30' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='110' y1='4' x2='110' y2='116' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/><polygon points='190,90 130,90 130,30' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2.5' stroke-linejoin='round'/></svg>",
                "A und H sind achsensymmetrisch. Das F hat keine Spiegelachse.<svg viewBox='0 0 250 110' style='width:100%;max-width:350px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='45' y='85' text-anchor='middle' font-size='64' font-weight='700' font-family='sans-serif' fill='#38bdf8'>A</text><line x1='45' y1='15' x2='45' y2='100' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/><text x='125' y='85' text-anchor='middle' font-size='64' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><line x1='125' y1='15' x2='125' y2='100' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/><text x='205' y='85' text-anchor='middle' font-size='64' font-weight='700' font-family='sans-serif' fill='#38bdf8'>F</text></svg>",
                "Ein Quadrat hat 4 Spiegelachsen, ein Rechteck 2, ein gleichseitiges Dreieck 3. Ein Kreis hat ganz viele."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "spiegelnk3l2u_leicht_1",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welcher Buchstabe ist achsensymmetrisch?",
                    "answers": [
                        "A",
                        "F",
                        "G",
                        "R"
                    ],
                    "correct": 0,
                    "explanation": "Das A kannst du in der Mitte senkrecht falten, dann passen beide Hälften. F, G und R haben keine Spiegelachse."
                },
                {
                    "id": "spiegelnk3l2u_leicht_2",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Du faltest das Herz an der roten Linie. Was passiert?",
                    "answers": [
                        "Beide Hälften decken sich",
                        "Eine Hälfte ist größer",
                        "Die Hälften sind schief",
                        "Ein Rest bleibt übrig"
                    ],
                    "correct": 0,
                    "explanation": "Das Herz ist achsensymmetrisch. Die rote Linie ist die Spiegelachse, beide Hälften passen genau aufeinander.",
                    "grafik": "<svg viewBox='0 0 140 140' style='width:100%;max-width:196px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M70,120 C20,85 10,55 30,35 C45,20 65,25 70,42 C75,25 95,20 110,35 C130,55 120,85 70,120 Z' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5'/><line x1='70' y1='8' x2='70' y2='132' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/></svg>"
                },
                {
                    "id": "spiegelnk3l2u_leicht_3",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wo liegt das Spiegelbild des orangen Punktes?",
                    "answers": [
                        "2 Kästchen rechts der Achse",
                        "4 Kästchen rechts der Achse",
                        "2 Kästchen links der Achse",
                        "1 Kästchen rechts der Achse"
                    ],
                    "correct": 0,
                    "explanation": "Der Punkt ist 2 Kästchen links der Achse. Sein Spiegelbild liegt 2 Kästchen rechts der Achse.",
                    "grafik": "<svg viewBox='0 0 180 100' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='10' x2='10' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='30' y1='10' x2='30' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='50' y1='10' x2='50' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='70' y1='10' x2='70' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='90' y1='10' x2='90' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='110' y1='10' x2='110' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='130' y1='10' x2='130' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='150' y1='10' x2='150' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='170' y1='10' x2='170' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='10' x2='170' y2='10' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='30' x2='170' y2='30' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='50' x2='170' y2='50' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='70' x2='170' y2='70' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='90' x2='170' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='90' y1='4' x2='90' y2='96' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/><circle cx='50' cy='50' r='6' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "spiegelnk3l2u_leicht_4",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie heißt die rote gestrichelte Linie?",
                    "answers": [
                        "Spiegelachse",
                        "Kante",
                        "Umfang",
                        "Seitenlinie"
                    ],
                    "correct": 0,
                    "explanation": "Faltest du das Haus an der roten Linie, passen beide Hälften aufeinander. Diese Linie heißt Spiegelachse.",
                    "grafik": "<svg viewBox='0 0 140 140' style='width:100%;max-width:196px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,125 110,125 110,65 70,20 30,65' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='70' y1='8' x2='70' y2='134' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "spiegelnk3l2u_mittel_1",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Das Rechteck wird gespiegelt. Wo landet die orange Ecke?",
                    "answers": [
                        "3 Kästchen rechts der Achse",
                        "2 Kästchen rechts der Achse",
                        "6 Kästchen rechts der Achse",
                        "3 Kästchen links der Achse"
                    ],
                    "correct": 0,
                    "explanation": "Die orange Ecke ist 3 Kästchen links der Achse. Also liegt ihr Bild 3 Kästchen rechts der Achse.",
                    "grafik": "<svg viewBox='0 0 220 120' style='width:100%;max-width:308px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='10' x2='10' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='30' y1='10' x2='30' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='50' y1='10' x2='50' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='70' y1='10' x2='70' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='90' y1='10' x2='90' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='110' y1='10' x2='110' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='130' y1='10' x2='130' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='150' y1='10' x2='150' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='170' y1='10' x2='170' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='190' y1='10' x2='190' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='210' y1='10' x2='210' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='10' x2='210' y2='10' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='30' x2='210' y2='30' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='50' x2='210' y2='50' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='70' x2='210' y2='70' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='90' x2='210' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='110' x2='210' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><polygon points='50,30 90,30 90,90 50,90' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><line x1='110' y1='4' x2='110' y2='116' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/><circle cx='50' cy='30' r='6' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "spiegelnk3l2u_mittel_2",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Spiegelachsen hat ein Rechteck?",
                    "answers": [
                        "2",
                        "4",
                        "1",
                        "3"
                    ],
                    "correct": 0,
                    "explanation": "Ein Rechteck hat 2 Spiegelachsen: eine senkrechte und eine waagerechte Mittellinie. Die Diagonalen sind keine.",
                    "grafik": "<svg viewBox='0 0 200 120' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,25 170,25 170,95 30,95' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2.5' stroke-linejoin='round'/></svg>"
                },
                {
                    "id": "spiegelnk3l2u_mittel_3",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Buchstabe ist NICHT achsensymmetrisch?",
                    "answers": [
                        "R",
                        "H",
                        "M",
                        "X"
                    ],
                    "correct": 0,
                    "explanation": "H, M und X kann man falten, sodass die Hälften passen. Beim R klappt das nicht."
                },
                {
                    "id": "spiegelnk3l2u_mittel_4",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Die Achse liegt waagerecht. Wo liegt das Spiegelbild?",
                    "answers": [
                        "2 Kästchen unter der Achse",
                        "2 Kästchen über der Achse",
                        "4 Kästchen unter der Achse",
                        "2 Kästchen rechts der Achse"
                    ],
                    "correct": 0,
                    "explanation": "Der Punkt ist 2 Kästchen über der Achse. Gespiegelt liegt er 2 Kästchen unter der Achse.",
                    "grafik": "<svg viewBox='0 0 180 140' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='10' x2='10' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='30' y1='10' x2='30' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='50' y1='10' x2='50' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='70' y1='10' x2='70' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='90' y1='10' x2='90' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='110' y1='10' x2='110' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='130' y1='10' x2='130' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='150' y1='10' x2='150' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='170' y1='10' x2='170' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='10' x2='170' y2='10' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='30' x2='170' y2='30' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='50' x2='170' y2='50' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='70' x2='170' y2='70' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='90' x2='170' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='110' x2='170' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='130' x2='170' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='4' y1='70' x2='176' y2='70' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/><circle cx='70' cy='30' r='6' fill='#f59e0b'/></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "spiegelnk3l2u_schwer_1",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Spiegelachsen hat ein Quadrat?",
                    "answers": [
                        "4",
                        "2",
                        "1",
                        "6"
                    ],
                    "correct": 0,
                    "explanation": "Ein Quadrat hat 4 Spiegelachsen: die senkrechte und die waagerechte Mittellinie und die beiden Diagonalen.",
                    "grafik": "<svg viewBox='0 0 140 140' style='width:100%;max-width:196px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,30 110,30 110,110 30,110' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/></svg>"
                },
                {
                    "id": "spiegelnk3l2u_schwer_2",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Spiegelachsen hat dieses gleichseitige Dreieck?",
                    "answers": [
                        "3",
                        "1",
                        "2",
                        "0"
                    ],
                    "correct": 0,
                    "explanation": "Von jeder Ecke zur Mitte der gegenüberliegenden Seite geht eine Spiegelachse. Das sind 3 Achsen.",
                    "grafik": "<svg viewBox='0 0 140 130' style='width:100%;max-width:196px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,115 120,115 70,28.4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2.5' stroke-linejoin='round'/></svg>"
                },
                {
                    "id": "spiegelnk3l2u_schwer_3",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ist die rote Linie eine Spiegelachse des Rechtecks?",
                    "answers": [
                        "Nein, gefaltet passt es nicht",
                        "Ja, beide Teile sind gleich",
                        "Ja, sie geht durch 2 Ecken",
                        "Nein, sie ist zu lang"
                    ],
                    "correct": 0,
                    "explanation": "Faltest du an der Diagonale, liegen die Ecken nicht aufeinander. Die beiden Teile sind gleich groß, decken sich aber nicht.",
                    "grafik": "<svg viewBox='0 0 200 120' style='width:100%;max-width:280px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='30,25 170,25 170,95 30,95' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2.5' stroke-linejoin='round'/><line x1='30' y1='95' x2='170' y2='25' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/></svg>"
                },
                {
                    "id": "spiegelnk3l2u_schwer_4",
                    "category": "kurs_spiegeln_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viele Spiegelachsen hat ein Kreis?",
                    "answers": [
                        "ganz viele",
                        "genau 4",
                        "genau 2",
                        "genau 1"
                    ],
                    "correct": 0,
                    "explanation": "Jede gerade Linie durch den Mittelpunkt ist eine Spiegelachse. Ein Kreis hat ganz viele davon.",
                    "grafik": "<svg viewBox='0 0 140 140' style='width:100%;max-width:196px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='70' cy='70' r='52' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2.5'/></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "spiegelnk3l2_test_1",
                "category": "kurs_spiegeln_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wo liegt das Spiegelbild des orangen Punktes?",
                "answers": [
                    "4 Kästchen links der Achse",
                    "4 Kästchen rechts der Achse",
                    "8 Kästchen links der Achse",
                    "3 Kästchen links der Achse"
                ],
                "correct": 0,
                "explanation": "Der Punkt ist 4 Kästchen rechts der Achse. Sein Spiegelbild liegt 4 Kästchen links der Achse.",
                "grafik": "<svg viewBox='0 0 220 100' style='width:100%;max-width:308px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='10' x2='10' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='30' y1='10' x2='30' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='50' y1='10' x2='50' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='70' y1='10' x2='70' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='90' y1='10' x2='90' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='110' y1='10' x2='110' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='130' y1='10' x2='130' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='150' y1='10' x2='150' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='170' y1='10' x2='170' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='190' y1='10' x2='190' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='210' y1='10' x2='210' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='10' x2='210' y2='10' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='30' x2='210' y2='30' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='50' x2='210' y2='50' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='70' x2='210' y2='70' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='90' x2='210' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='110' y1='4' x2='110' y2='96' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/><circle cx='190' cy='50' r='6' fill='#f59e0b'/></svg>"
            },
            {
                "id": "spiegelnk3l2_test_2",
                "category": "kurs_spiegeln_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Buchstabe ist achsensymmetrisch?",
                "answers": [
                    "M",
                    "F",
                    "G",
                    "R"
                ],
                "correct": 0,
                "explanation": "Das M hat eine senkrechte Spiegelachse in der Mitte. F, G und R haben keine."
            },
            {
                "id": "spiegelnk3l2_test_3",
                "category": "kurs_spiegeln_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Buchstabe hat zwei Spiegelachsen?",
                "answers": [
                    "H",
                    "A",
                    "M",
                    "F"
                ],
                "correct": 0,
                "explanation": "Das H kann man senkrecht und waagerecht falten. A und M haben nur eine Achse, F keine."
            },
            {
                "id": "spiegelnk3l2_test_4",
                "category": "kurs_spiegeln_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Figur ist achsensymmetrisch?",
                "answers": [
                    "Figur B",
                    "Figur A",
                    "Figur C",
                    "Figur D"
                ],
                "correct": 0,
                "explanation": "Figur B (das Haus) hat eine senkrechte Spiegelachse. Das schiefe Viereck A passt beim Falten nicht.",
                "grafik": "<svg viewBox='0 0 340 120' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='15,85 60,85 80,35 35,35' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><text x='47' y='112' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>A</text><polygon points='105,85 155,85 155,50 130,25 105,50' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><text x='130' y='112' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>B</text><polygon points='185,85 235,85 235,65 205,65 205,15 185,15' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><text x='210' y='112' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>C</text><polygon points='265,85 325,85 310,45 280,25' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2.5' stroke-linejoin='round'/><text x='295' y='112' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#94a3b8'>D</text></svg>"
            },
            {
                "id": "spiegelnk3l2_test_5",
                "category": "kurs_spiegeln_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Aylin spiegelt ein Quadrat. Was ändert sich?",
                "answers": [
                    "nur seine Lage",
                    "seine Größe",
                    "seine Form",
                    "seine Eckenzahl"
                ],
                "correct": 0,
                "explanation": "Beim Spiegeln bleiben Form und Größe gleich. Nur die Lage ändert sich."
            },
            {
                "id": "spiegelnk3l2_test_6",
                "category": "kurs_spiegeln_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wo liegt das Spiegelbild des orangen Punktes?",
                "answers": [
                    "3 Kästchen über der Achse",
                    "3 Kästchen unter der Achse",
                    "6 Kästchen über der Achse",
                    "3 Kästchen links der Achse"
                ],
                "correct": 0,
                "explanation": "Der Punkt ist 3 Kästchen unter der Achse. Gespiegelt liegt er 3 Kästchen über der Achse.",
                "grafik": "<svg viewBox='0 0 180 180' style='width:100%;max-width:251px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='10' y1='10' x2='10' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='30' y1='10' x2='30' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='50' y1='10' x2='50' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='70' y1='10' x2='70' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='90' y1='10' x2='90' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='110' y1='10' x2='110' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='130' y1='10' x2='130' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='150' y1='10' x2='150' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='170' y1='10' x2='170' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='10' x2='170' y2='10' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='30' x2='170' y2='30' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='50' x2='170' y2='50' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='70' x2='170' y2='70' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='90' x2='170' y2='90' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='110' x2='170' y2='110' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='130' x2='170' y2='130' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='150' x2='170' y2='150' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='10' y1='170' x2='170' y2='170' stroke='#94a3b8' stroke-opacity='0.35' stroke-width='1'/><line x1='4' y1='90' x2='176' y2='90' stroke='#f43f5e' stroke-width='3' stroke-dasharray='5 4'/><circle cx='110' cy='150' r='6' fill='#f59e0b'/></svg>"
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
