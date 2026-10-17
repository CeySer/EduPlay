// Dezimalzahlen runden/ordnen + periodische Dezimalzahlen und Prozente - Klasse 6 Mathe
(function () {
    const extraKurse = [];
    const extraLektionen = [
    {
        "id": "dez_k6_l2",
        "kurs": "dezimalzahlen_k6",
        "order": 2,
        "icon": "📍",
        "title": "Dezimalzahlen runden und ordnen",
        "kurz": "Stellenwerttafel, Zahlenstrahl, Ordnen und Größen",
        "erklaerung": {
            "intro": "In der <b>Stellenwerttafel</b> stehen rechts vom Komma die <b>Zehntel</b> (z), <b>Hundertstel</b> (h) und <b>Tausendstel</b> (t). Auf dem <b>Zahlenstrahl</b> teilst du die Strecke von 0 bis 1 in 10 Zehntel – jedes Zehntel teilt sich wieder in 10 Hundertstel. Beim <b>Ordnen</b> hängst du Nullen an, bis alle Zahlen gleich viele Nachkommastellen haben. Dann vergleichst du Stelle für Stelle.",
            "merksatz": "Die längere Zahl ist nicht automatisch größer: 0,5 = 0,50 ist größer als 0,45.",
            "beispiele": [
                "🗂️ Die Zahl <b>4,206</b> in der Stellenwerttafel:<svg viewBox='0 0 320 114' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='10' width='54' height='30' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8'/><text x='57' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>E</text><rect x='30' y='46' width='54' height='40' rx='5' fill='none' stroke='#38bdf8'/><text x='57' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4</text><rect x='104' y='10' width='54' height='30' rx='5' fill='rgba(16,185,129,0.3)' stroke='#10b981'/><text x='131' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>z</text><rect x='104' y='46' width='54' height='40' rx='5' fill='none' stroke='#10b981'/><text x='131' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2</text><rect x='164' y='10' width='54' height='30' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b'/><text x='191' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>h</text><rect x='164' y='46' width='54' height='40' rx='5' fill='none' stroke='#f59e0b'/><text x='191' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><rect x='224' y='10' width='54' height='30' rx='5' fill='rgba(167,139,250,0.25)' stroke='#a78bfa'/><text x='251' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>t</text><rect x='224' y='46' width='54' height='40' rx='5' fill='none' stroke='#a78bfa'/><text x='251' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>6</text><text x='93' y='80' text-anchor='middle' font-size='26' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>,</text><text x='160' y='106' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>E = Einer · z = Zehntel · h = Hundertstel · t = Tausendstel</text></svg>",
                "📍 Auf dem Zahlenstrahl liegt 0,5 rechts von 0,45 – also ist 0,5 größer:<svg viewBox='0 0 360 96' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='15' y1='60' x2='347' y2='60' stroke='#e5e7eb' stroke-width='2'/><path d='M349,60 l-8,-4 v8 z' fill='#e5e7eb'/><line x1='25.0' y1='51' x2='25.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='40.5' y1='55' x2='40.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='56.0' y1='51' x2='56.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='71.5' y1='55' x2='71.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='87.0' y1='51' x2='87.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='102.5' y1='55' x2='102.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='118.0' y1='51' x2='118.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='133.5' y1='55' x2='133.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='149.0' y1='51' x2='149.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='164.5' y1='55' x2='164.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='180.0' y1='51' x2='180.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='195.5' y1='55' x2='195.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='211.0' y1='51' x2='211.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='226.5' y1='55' x2='226.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='242.0' y1='51' x2='242.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='257.5' y1='55' x2='257.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='273.0' y1='51' x2='273.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='288.5' y1='55' x2='288.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='304.0' y1='51' x2='304.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='319.5' y1='55' x2='319.5' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='335.0' y1='51' x2='335.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><text x='25' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>0</text><text x='180' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>0,5</text><text x='335' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>1</text><circle cx='164.5' cy='60' r='5' fill='#f59e0b'/><text x='164.5' y='44' text-anchor='middle' font-size='13' font-weight='700' fill='#f59e0b' font-family='sans-serif'>0,45</text><circle cx='180.0' cy='60' r='5' fill='#38bdf8'/><text x='180' y='44' text-anchor='middle' font-size='13' font-weight='700' fill='#38bdf8' font-family='sans-serif'></text></svg>",
                "⚖️ Ordnen mit Nullen: 0,5 → <b>0,500</b> · 0,45 → <b>0,450</b> · 0,405 → <b>0,405</b>. Also: 0,405 &lt; 0,45 &lt; 0,5",
                "🔄 Runden auf Hundertstel: 6,284 → die 4 ist kleiner als 5 → <b>6,28</b>. Auf Zehntel: 6,284 → die 8 ist ≥ 5 → <b>6,3</b>",
                "📏 Größen: 2,05 m = <b>2 m 5 cm</b> (nicht 50 cm!) · 1,5 kg = <b>1 kg 500 g</b> · 0,75 l = 750 ml"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "dezk6l2u_leicht_1",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Zahl steht in der Stellenwerttafel?",
                    "answers": [
                        "3,047",
                        "3,47",
                        "30,47",
                        "3,407"
                    ],
                    "correct": 0,
                    "explanation": "Einer 3, Zehntel 0, Hundertstel 4, Tausendstel 7 – das ist 3,047. Die Null bei den Zehnteln darf man nicht weglassen.",
                    "grafik": "<svg viewBox='0 0 320 114' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='10' width='54' height='30' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8'/><text x='57' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>E</text><rect x='30' y='46' width='54' height='40' rx='5' fill='none' stroke='#38bdf8'/><text x='57' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3</text><rect x='104' y='10' width='54' height='30' rx='5' fill='rgba(16,185,129,0.3)' stroke='#10b981'/><text x='131' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>z</text><rect x='104' y='46' width='54' height='40' rx='5' fill='none' stroke='#10b981'/><text x='131' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><rect x='164' y='10' width='54' height='30' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b'/><text x='191' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>h</text><rect x='164' y='46' width='54' height='40' rx='5' fill='none' stroke='#f59e0b'/><text x='191' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4</text><rect x='224' y='10' width='54' height='30' rx='5' fill='rgba(167,139,250,0.25)' stroke='#a78bfa'/><text x='251' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>t</text><rect x='224' y='46' width='54' height='40' rx='5' fill='none' stroke='#a78bfa'/><text x='251' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>7</text><text x='93' y='80' text-anchor='middle' font-size='26' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>,</text><text x='160' y='106' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>E = Einer · z = Zehntel · h = Hundertstel · t = Tausendstel</text></svg>"
                },
                {
                    "id": "dezk6l2u_leicht_2",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Zahl zeigt der Pfeil auf dem Zahlenstrahl?",
                    "answers": [
                        "0,7",
                        "0,07",
                        "0,8",
                        "0,6"
                    ],
                    "correct": 0,
                    "explanation": "Von 0 bis 1 sind es 10 Schritte, jeder Schritt ist 0,1. Der Pfeil steht beim 7. Strich nach der 0, also bei 0,7.",
                    "grafik": "<svg viewBox='0 0 360 96' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='15' y1='60' x2='347' y2='60' stroke='#e5e7eb' stroke-width='2'/><path d='M349,60 l-8,-4 v8 z' fill='#e5e7eb'/><line x1='25.0' y1='51' x2='25.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='56.0' y1='55' x2='56.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='87.0' y1='55' x2='87.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='118.0' y1='55' x2='118.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='149.0' y1='55' x2='149.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='180.0' y1='55' x2='180.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='211.0' y1='55' x2='211.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='242.0' y1='55' x2='242.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='273.0' y1='55' x2='273.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='304.0' y1='55' x2='304.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='335.0' y1='51' x2='335.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><text x='25' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>0</text><text x='335' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>1</text><path d='M242.0,54 l-6,-12 h12 z' fill='#f59e0b'/><line x1='242.0' y1='42' x2='242.0' y2='28' stroke='#f59e0b' stroke-width='3'/></svg>"
                },
                {
                    "id": "dezk6l2u_leicht_3",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Tausendstel sind so viel wie 1 Hundertstel?",
                    "answers": [
                        "10",
                        "100",
                        "1000",
                        "1"
                    ],
                    "correct": 0,
                    "explanation": "1 Hundertstel = 0,01 = 0,010. Das sind 10 Tausendstel, denn jede Stelle ist 10-mal so viel wie die rechts daneben."
                },
                {
                    "id": "dezk6l2u_leicht_4",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Beutel Kartoffeln wiegt 2,5 kg. Wie viel Gramm sind das?",
                    "answers": [
                        "2500 g",
                        "250 g",
                        "2050 g",
                        "25 g"
                    ],
                    "correct": 0,
                    "explanation": "1 kg = 1000 g, also 2,5 kg = 2000 g + 500 g = 2500 g. Die 5 steht bei den Zehnteln, das sind 500 g."
                }
            ],
            "mittel": [
                {
                    "id": "dezk6l2u_mittel_1",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Elif sagt: „0,38 ist größer als 0,4, weil 38 mehr als 4 ist.“ Hat sie recht?",
                    "answers": [
                        "Nein, 0,4 = 0,40 ist mehr",
                        "Ja, 38 ist mehr als 4",
                        "Nein, beide sind gleich groß",
                        "Ja, mehr Stellen = größer"
                    ],
                    "correct": 0,
                    "explanation": "Hängt man eine Null an, sieht man es: 0,40 sind 40 Hundertstel, 0,38 nur 38 Hundertstel. Also ist 0,4 größer."
                },
                {
                    "id": "dezk6l2u_mittel_2",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 7,348 auf Hundertstel.",
                    "answers": [
                        "7,35",
                        "7,34",
                        "7,3",
                        "7,4"
                    ],
                    "correct": 0,
                    "explanation": "Bei den Hundertsteln steht die 4, dahinter eine 8. Weil 8 ≥ 5 ist, rundest du auf: 7,35."
                },
                {
                    "id": "dezk6l2u_mittel_3",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl zeigt der Pfeil? Der Zahlenstrahl geht von 2,3 bis 2,4.",
                    "answers": [
                        "2,36",
                        "2,306",
                        "2,6",
                        "2,37"
                    ],
                    "correct": 0,
                    "explanation": "Zwischen 2,3 und 2,4 liegen 10 Hundertstel-Schritte. Der Pfeil steht beim 6. Strich, also bei 2,36.",
                    "grafik": "<svg viewBox='0 0 360 96' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='15' y1='60' x2='347' y2='60' stroke='#e5e7eb' stroke-width='2'/><path d='M349,60 l-8,-4 v8 z' fill='#e5e7eb'/><line x1='25.0' y1='51' x2='25.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='56.0' y1='55' x2='56.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='87.0' y1='55' x2='87.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='118.0' y1='55' x2='118.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='149.0' y1='55' x2='149.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='180.0' y1='51' x2='180.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='211.0' y1='55' x2='211.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='242.0' y1='55' x2='242.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='273.0' y1='55' x2='273.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='304.0' y1='55' x2='304.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='335.0' y1='51' x2='335.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><text x='25' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>2,3</text><text x='335' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>2,4</text><path d='M211.0,54 l-6,-12 h12 z' fill='#38bdf8'/><line x1='211.0' y1='42' x2='211.0' y2='28' stroke='#38bdf8' stroke-width='3'/></svg>"
                },
                {
                    "id": "dezk6l2u_mittel_4",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ordne von klein nach groß: 0,3 / 0,25 / 0,305",
                    "answers": [
                        "0,25 < 0,3 < 0,305",
                        "0,3 < 0,25 < 0,305",
                        "0,305 < 0,3 < 0,25",
                        "0,25 < 0,305 < 0,3"
                    ],
                    "correct": 0,
                    "explanation": "Mit Nullen aufgefüllt: 0,250 &lt; 0,300 &lt; 0,305. Also 0,25 &lt; 0,3 &lt; 0,305."
                }
            ],
            "schwer": [
                {
                    "id": "dezk6l2u_schwer_1",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Noah springt 3,08 m weit. Wie viel ist das in m und cm?",
                    "answers": [
                        "3 m 8 cm",
                        "3 m 80 cm",
                        "30 m 8 cm",
                        "3 m 0,8 cm"
                    ],
                    "correct": 0,
                    "explanation": "Die 0 steht bei den Zehnteln (Dezimeter), die 8 bei den Hundertsteln (Zentimeter). Also 3 m 8 cm – nicht 80 cm."
                },
                {
                    "id": "dezk6l2u_schwer_2",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Zahl liegt zwischen 1,29 und 1,3?",
                    "answers": [
                        "1,295",
                        "1,35",
                        "1,209",
                        "1,28"
                    ],
                    "correct": 0,
                    "explanation": "Schreibe 1,3 als 1,300 und 1,29 als 1,290. Dazwischen liegt zum Beispiel 1,295.",
                    "grafik": "<svg viewBox='0 0 360 96' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='15' y1='60' x2='347' y2='60' stroke='#e5e7eb' stroke-width='2'/><path d='M349,60 l-8,-4 v8 z' fill='#e5e7eb'/><line x1='25.0' y1='51' x2='25.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='35.3' y1='55' x2='35.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='45.7' y1='55' x2='45.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='56.0' y1='55' x2='56.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='66.3' y1='55' x2='66.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='76.7' y1='55' x2='76.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='87.0' y1='55' x2='87.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='97.3' y1='55' x2='97.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='107.7' y1='55' x2='107.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='118.0' y1='55' x2='118.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='128.3' y1='51' x2='128.3' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='138.7' y1='55' x2='138.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='149.0' y1='55' x2='149.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='159.3' y1='55' x2='159.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='169.7' y1='55' x2='169.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='180.0' y1='55' x2='180.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='190.3' y1='55' x2='190.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='200.7' y1='55' x2='200.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='211.0' y1='55' x2='211.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='221.3' y1='55' x2='221.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='231.7' y1='51' x2='231.7' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='242.0' y1='55' x2='242.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='252.3' y1='55' x2='252.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='262.7' y1='55' x2='262.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='273.0' y1='55' x2='273.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='283.3' y1='55' x2='283.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='293.7' y1='55' x2='293.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='304.0' y1='55' x2='304.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='314.3' y1='55' x2='314.3' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='324.7' y1='55' x2='324.7' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='335.0' y1='51' x2='335.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><text x='25' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>1,28</text><text x='128.333' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>1,29</text><text x='231.667' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>1,30</text><text x='335' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>1,31</text><circle cx='128.3' cy='60' r='5' fill='#f59e0b'/><text x='128.333' y='44' text-anchor='middle' font-size='13' font-weight='700' fill='#f59e0b' font-family='sans-serif'></text><circle cx='231.7' cy='60' r='5' fill='#f59e0b'/><text x='231.667' y='44' text-anchor='middle' font-size='13' font-weight='700' fill='#f59e0b' font-family='sans-serif'></text></svg>"
                },
                {
                    "id": "dezk6l2u_schwer_3",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welches Paket ist am schwersten?",
                    "answers": [
                        "0,8 kg",
                        "750 g",
                        "0,085 kg",
                        "0,79 kg"
                    ],
                    "correct": 0,
                    "explanation": "In Gramm: 0,8 kg = 800 g, 0,79 kg = 790 g, 0,085 kg = 85 g. 800 g ist am meisten."
                },
                {
                    "id": "dezk6l2u_schwer_4",
                    "category": "kurs_dez_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Runde 9,96 auf Zehntel.",
                    "answers": [
                        "10,0",
                        "9,9",
                        "9,10",
                        "9,0"
                    ],
                    "correct": 0,
                    "explanation": "Hinter der 9 bei den Zehnteln steht eine 6, also wird aufgerundet. 9,9 + 0,1 = 10,0 – es gibt einen Übertrag."
                }
            ]
        },
        "test": [
            {
                "id": "dezk6l2_test_1",
                "category": "kurs_dez_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl zeigt der Pfeil? Der Zahlenstrahl geht von 0 bis 0,1.",
                "answers": [
                    "0,04",
                    "0,4",
                    "0,004",
                    "0,05"
                ],
                "correct": 0,
                "explanation": "Von 0 bis 0,1 sind es 10 Schritte zu je 0,01. Der Pfeil steht beim 4. Strich, also bei 0,04.",
                "grafik": "<svg viewBox='0 0 360 96' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='15' y1='60' x2='347' y2='60' stroke='#e5e7eb' stroke-width='2'/><path d='M349,60 l-8,-4 v8 z' fill='#e5e7eb'/><line x1='25.0' y1='51' x2='25.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><line x1='56.0' y1='55' x2='56.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='87.0' y1='55' x2='87.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='118.0' y1='55' x2='118.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='149.0' y1='55' x2='149.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='180.0' y1='55' x2='180.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='211.0' y1='55' x2='211.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='242.0' y1='55' x2='242.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='273.0' y1='55' x2='273.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='304.0' y1='55' x2='304.0' y2='65' stroke='#94a3b8' stroke-width='1'/><line x1='335.0' y1='51' x2='335.0' y2='69' stroke='#e5e7eb' stroke-width='1.6'/><text x='25' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>0</text><text x='335' y='86' text-anchor='middle' font-size='13' fill='#e5e7eb' font-family='sans-serif'>0,1</text><path d='M149.0,54 l-6,-12 h12 z' fill='#10b981'/><line x1='149.0' y1='42' x2='149.0' y2='28' stroke='#10b981' stroke-width='3'/></svg>"
            },
            {
                "id": "dezk6l2_test_2",
                "category": "kurs_dez_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 4,682 auf Hundertstel.",
                "answers": [
                    "4,68",
                    "4,69",
                    "4,7",
                    "4,6"
                ],
                "correct": 0,
                "explanation": "Hinter der 8 (Hundertstel) steht eine 2. Weil 2 &lt; 5 ist, rundest du ab: 4,68."
            },
            {
                "id": "dezk6l2_test_3",
                "category": "kurs_dez_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ist die größte?",
                "answers": [
                    "0,6",
                    "0,59",
                    "0,599",
                    "0,5999"
                ],
                "correct": 0,
                "explanation": "Vergleiche die Zehntel: 0,6 hat 6 Zehntel, alle anderen nur 5. Mehr Stellen machen eine Zahl nicht größer."
            },
            {
                "id": "dezk6l2_test_4",
                "category": "kurs_dez_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ein Brett ist 1,07 m lang. Wie viele Zentimeter sind das?",
                "answers": [
                    "107 cm",
                    "170 cm",
                    "1007 cm",
                    "10,7 cm"
                ],
                "correct": 0,
                "explanation": "1 m = 100 cm. 1,07 m = 100 cm + 7 cm = 107 cm."
            },
            {
                "id": "dezk6l2_test_5",
                "category": "kurs_dez_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde die Zahl aus der Stellenwerttafel auf Hundertstel.",
                "answers": [
                    "2,55",
                    "2,54",
                    "2,5",
                    "2,6"
                ],
                "correct": 0,
                "explanation": "Die Zahl ist 2,547. Hinter der 4 (Hundertstel) steht eine 7, also rundest du auf: 2,55.",
                "grafik": "<svg viewBox='0 0 320 114' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='10' width='54' height='30' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8'/><text x='57' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>E</text><rect x='30' y='46' width='54' height='40' rx='5' fill='none' stroke='#38bdf8'/><text x='57' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2</text><rect x='104' y='10' width='54' height='30' rx='5' fill='rgba(16,185,129,0.3)' stroke='#10b981'/><text x='131' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>z</text><rect x='104' y='46' width='54' height='40' rx='5' fill='none' stroke='#10b981'/><text x='131' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><rect x='164' y='10' width='54' height='30' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b'/><text x='191' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>h</text><rect x='164' y='46' width='54' height='40' rx='5' fill='none' stroke='#f59e0b'/><text x='191' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4</text><rect x='224' y='10' width='54' height='30' rx='5' fill='rgba(167,139,250,0.25)' stroke='#a78bfa'/><text x='251' y='31' text-anchor='middle' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>t</text><rect x='224' y='46' width='54' height='40' rx='5' fill='none' stroke='#a78bfa'/><text x='251' y='74' text-anchor='middle' font-size='22' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>7</text><text x='93' y='80' text-anchor='middle' font-size='26' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>,</text><text x='160' y='106' text-anchor='middle' font-size='10' fill='#94a3b8' font-family='sans-serif'>E = Einer · z = Zehntel · h = Hundertstel · t = Tausendstel</text></svg>"
            },
            {
                "id": "dezk6l2_test_6",
                "category": "kurs_dez_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Ordne von leicht nach schwer: 1,5 kg / 1,05 kg / 1,45 kg",
                "answers": [
                    "1,05 < 1,45 < 1,5",
                    "1,5 < 1,05 < 1,45",
                    "1,05 < 1,5 < 1,45",
                    "1,45 < 1,05 < 1,5"
                ],
                "correct": 0,
                "explanation": "Mit Nullen: 1,05 – 1,45 – 1,50. Also 1,05 kg &lt; 1,45 kg &lt; 1,5 kg."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "brdz_k6_l2",
        "kurs": "brueche_dezimal_k6",
        "order": 2,
        "icon": "💯",
        "title": "Periodische Dezimalzahlen und Prozente",
        "kurz": "Abbrechend oder periodisch – und 1/4 = 0,25 = 25 %",
        "erklaerung": {
            "intro": "Teilst du den Zähler durch den Nenner, hört die Rechnung manchmal auf: 1/8 = 0,125 ist eine <b>abbrechende</b> Dezimalzahl. Bei 1/3 = 0,333… wiederholt sich die 3 ohne Ende – das ist eine <b>periodische</b> Dezimalzahl, die 3 heißt <b>Periode</b>. Wir schreiben die Periode mit drei Punkten (im Heft auch mit einem Strich über der Periode). <b>Prozent</b> heißt „von Hundert“: 0,25 = 25/100 = 25 %.",
            "merksatz": "Hat der gekürzte Nenner nur die Primfaktoren 2 und 5, bricht die Dezimalzahl ab – sonst ist sie periodisch.",
            "beispiele": [
                "➗ 1/3 = 1 ÷ 3 = <b>0,333…</b> · 1/6 = <b>0,1666…</b> · 2/11 = <b>0,1818…</b>",
                "🔍 Nenner prüfen: 20 = 2 · 2 · 5 → <b>abbrechend</b> (7/20 = 0,35) · 12 = 2 · 2 · 3 → <b>periodisch</b> (wegen der 3)",
                "💯 1/2 = 0,5 = <b>50 %</b> · 1/4 = 0,25 = <b>25 %</b> · 1/5 = 0,2 = <b>20 %</b> · 1/10 = 0,1 = <b>10 %</b>",
                "🥧 Schulweg der Klasse 6a im Kreisdiagramm:<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M90,80 L90.0,18.0 A62,62 0 0 1 90.0,142.0 Z' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='125.96' y='85' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1/2</text><path d='M90,80 L90.0,142.0 A62,62 0 0 1 28.0,80.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='64.5724' y='110.428' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1/4</text><path d='M90,80 L28.0,80.0 A62,62 0 0 1 90.0,18.0 Z' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><text x='64.5724' y='59.5724' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1/4</text><rect x='174' y='39' width='14' height='14' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8'/><text x='196' y='51' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>Fahrrad 50 %</text><rect x='174' y='63' width='14' height='14' rx='3' fill='rgba(245,158,11,0.3)' stroke='#f59e0b'/><text x='196' y='75' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>Bus 25 %</text><rect x='174' y='87' width='14' height='14' rx='3' fill='rgba(16,185,129,0.3)' stroke='#10b981'/><text x='196' y='99' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>zu Fuß 25 %</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "brdzk6l2u_leicht_1",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Dezimalzahl gehört zu 1/9?",
                    "answers": [
                        "0,111…",
                        "0,9",
                        "0,19",
                        "0,1"
                    ],
                    "correct": 0,
                    "explanation": "1 ÷ 9 = 0,111… – es bleibt immer der Rest 1, darum wiederholt sich die 1 ohne Ende."
                },
                {
                    "id": "brdzk6l2u_leicht_2",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viel Prozent des Kreises sind gefärbt?",
                    "answers": [
                        "75 %",
                        "34 %",
                        "43 %",
                        "25 %"
                    ],
                    "correct": 0,
                    "explanation": "Drei Viertel des Kreises sind gefärbt: 3/4 = 0,75 = 75/100 = 75 %. 25 % ist der weiße Teil.",
                    "grafik": "<svg viewBox='0 0 180 160' style='width:100%;max-width:180px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M90,80 L90.0,18.0 A62,62 0 1 1 28.0,80.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><path d='M90,80 L28.0,80.0 A62,62 0 0 1 90.0,18.0 Z' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='2'/></svg>"
                },
                {
                    "id": "brdzk6l2u_leicht_3",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Ein Kästchen ist gefärbt. Wie viel Prozent sind das?",
                    "answers": [
                        "1 %",
                        "10 %",
                        "0,1 %",
                        "100 %"
                    ],
                    "correct": 0,
                    "explanation": "Das Feld hat 100 Kästchen. 1 von 100 ist 1/100 = 0,01 = 1 %.",
                    "grafik": "<svg viewBox='0 0 170 158' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='10' width='13' height='13' fill='rgba(244,63,94,0.75)'/><line x1='20' y1='10' x2='20' y2='140' stroke='#94a3b8' stroke-width='1.5'/><line x1='20' y1='10' x2='150' y2='10' stroke='#94a3b8' stroke-width='1.5'/><line x1='33' y1='10' x2='33' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='23' x2='150' y2='23' stroke='#94a3b8' stroke-width='0.6'/><line x1='46' y1='10' x2='46' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='36' x2='150' y2='36' stroke='#94a3b8' stroke-width='0.6'/><line x1='59' y1='10' x2='59' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='49' x2='150' y2='49' stroke='#94a3b8' stroke-width='0.6'/><line x1='72' y1='10' x2='72' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='62' x2='150' y2='62' stroke='#94a3b8' stroke-width='0.6'/><line x1='85' y1='10' x2='85' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='75' x2='150' y2='75' stroke='#94a3b8' stroke-width='0.6'/><line x1='98' y1='10' x2='98' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='88' x2='150' y2='88' stroke='#94a3b8' stroke-width='0.6'/><line x1='111' y1='10' x2='111' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='101' x2='150' y2='101' stroke='#94a3b8' stroke-width='0.6'/><line x1='124' y1='10' x2='124' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='114' x2='150' y2='114' stroke='#94a3b8' stroke-width='0.6'/><line x1='137' y1='10' x2='137' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='127' x2='150' y2='127' stroke='#94a3b8' stroke-width='0.6'/><line x1='150' y1='10' x2='150' y2='140' stroke='#94a3b8' stroke-width='1.5'/><line x1='20' y1='140' x2='150' y2='140' stroke='#94a3b8' stroke-width='1.5'/><text x='85' y='158' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>100 Kästchen = das Ganze</text></svg>"
                },
                {
                    "id": "brdzk6l2u_leicht_4",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Zahl ist eine abbrechende Dezimalzahl?",
                    "answers": [
                        "0,375",
                        "0,333…",
                        "0,1666…",
                        "0,1818…"
                    ],
                    "correct": 0,
                    "explanation": "0,375 hört nach der dritten Stelle auf. Die anderen Zahlen haben eine Periode, die sich endlos wiederholt."
                }
            ],
            "mittel": [
                {
                    "id": "brdzk6l2u_mittel_1",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Bruch ergibt eine periodische Dezimalzahl?",
                    "answers": [
                        "1/12",
                        "1/8",
                        "1/5",
                        "1/20"
                    ],
                    "correct": 0,
                    "explanation": "12 = 2 · 2 · 3. Wegen der 3 ist 1/12 = 0,08333… periodisch. 8, 5 und 20 haben nur die Faktoren 2 und 5."
                },
                {
                    "id": "brdzk6l2u_mittel_2",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie schreibt man 3/11 als Dezimalzahl?",
                    "answers": [
                        "0,2727…",
                        "0,311",
                        "0,3333…",
                        "0,2626…"
                    ],
                    "correct": 0,
                    "explanation": "3 ÷ 11 = 0,272727… – die Periode ist 27. 0,3333… wäre 3/9, nicht 3/11."
                },
                {
                    "id": "brdzk6l2u_mittel_3",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel Prozent der Klasse 6c fahren mit dem Bus (orange)?",
                    "answers": [
                        "12,5 %",
                        "18 %",
                        "8 %",
                        "1,25 %"
                    ],
                    "correct": 0,
                    "explanation": "Der orange Teil ist halb so groß wie ein Viertel, also 1/8 des Kreises: 1 ÷ 8 = 0,125 = 12,5 %.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M90,80 L90.0,18.0 A62,62 0 0 1 90.0,142.0 Z' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><path d='M90,80 L90.0,142.0 A62,62 0 0 1 46.2,123.8 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><path d='M90,80 L46.2,123.8 A62,62 0 0 1 90.0,18.0 Z' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><rect x='174' y='39' width='14' height='14' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8'/><text x='196' y='51' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>Fahrrad</text><rect x='174' y='63' width='14' height='14' rx='3' fill='rgba(245,158,11,0.3)' stroke='#f59e0b'/><text x='196' y='75' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>Bus</text><rect x='174' y='87' width='14' height='14' rx='3' fill='rgba(16,185,129,0.3)' stroke='#10b981'/><text x='196' y='99' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>zu Fuß</text></svg>"
                },
                {
                    "id": "brdzk6l2u_mittel_4",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel Prozent sind 3/5?",
                    "answers": [
                        "60 %",
                        "35 %",
                        "30 %",
                        "53 %"
                    ],
                    "correct": 0,
                    "explanation": "3/5 = 6/10 = 60/100 = 60 %. Erweitere auf den Nenner 100.",
                    "grafik": "<svg viewBox='0 0 320 84' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='15' width='56.0' height='40' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='76.0' y='15' width='56.0' height='40' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='132.0' y='15' width='56.0' height='40' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='188.0' y='15' width='56.0' height='40' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='1.5'/><rect x='244.0' y='15' width='56.0' height='40' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='1.5'/><text x='20' y='75' text-anchor='middle' font-size='12' fill='#94a3b8' font-family='sans-serif'>0 %</text><text x='300' y='75' text-anchor='middle' font-size='12' fill='#94a3b8' font-family='sans-serif'>100 %</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "brdzk6l2u_schwer_1",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ist 9/25 als Dezimalzahl abbrechend?",
                    "answers": [
                        "Ja, denn 25 = 5 · 5",
                        "Nein, denn 9 = 3 · 3",
                        "Nein, denn 25 ist nicht 10",
                        "Ja, denn 9 ist ungerade"
                    ],
                    "correct": 0,
                    "explanation": "Es kommt nur auf den Nenner an: 25 = 5 · 5 hat nur den Faktor 5. 9/25 = 36/100 = 0,36."
                },
                {
                    "id": "brdzk6l2u_schwer_2",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Bruch ergibt eine abbrechende Dezimalzahl?",
                    "answers": [
                        "3/12",
                        "1/12",
                        "5/6",
                        "2/3"
                    ],
                    "correct": 0,
                    "explanation": "Erst kürzen: 3/12 = 1/4 = 0,25. Bei 1/12, 5/6 und 2/3 bleibt eine 3 im Nenner – sie sind periodisch."
                },
                {
                    "id": "brdzk6l2u_schwer_3",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welcher Bruch passt zum grünen Teil (Schwimmen)?",
                    "answers": [
                        "1/4",
                        "1/25",
                        "2/5",
                        "3/4"
                    ],
                    "correct": 0,
                    "explanation": "45 % + 30 % = 75 %. Für Schwimmen bleiben 100 % − 75 % = 25 % = 25/100 = 1/4.",
                    "grafik": "<svg viewBox='0 0 300 160' style='width:100%;max-width:300px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M90,80 L90.0,18.0 A62,62 0 0 1 109.2,139.0 Z' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='125.517' y='79.3746' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>45 %</text><path d='M90,80 L109.2,139.0 A62,62 0 0 1 28.0,80.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='68.8632' y='114.092' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>30 %</text><path d='M90,80 L28.0,80.0 A62,62 0 0 1 90.0,18.0 Z' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><text x='64.5724' y='59.5724' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>?</text><rect x='174' y='39' width='14' height='14' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8'/><text x='196' y='51' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>Fußball</text><rect x='174' y='63' width='14' height='14' rx='3' fill='rgba(245,158,11,0.3)' stroke='#f59e0b'/><text x='196' y='75' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>Basketball</text><rect x='174' y='87' width='14' height='14' rx='3' fill='rgba(16,185,129,0.3)' stroke='#10b981'/><text x='196' y='99' text-anchor='start' font-size='13' fill='#e5e7eb' font-family='sans-serif'>Schwimmen</text></svg>"
                },
                {
                    "id": "brdzk6l2u_schwer_4",
                    "category": "kurs_brdz_k6_l2",
                    "area": "schule",
                    "grade": 6,
                    "subject": "mathe",
                    "topic": "dezimalzahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie schreibt man 5/6 als Dezimalzahl?",
                    "answers": [
                        "0,8333…",
                        "0,8383…",
                        "0,8333",
                        "0,56"
                    ],
                    "correct": 0,
                    "explanation": "5 ÷ 6 = 0,8333… – nach 0,8 bleibt immer der Rest 2, darum wiederholt sich die 3. Ohne Punkte wäre die Zahl abbrechend."
                }
            ]
        },
        "test": [
            {
                "id": "brdzk6l2_test_1",
                "category": "kurs_brdz_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Prozent sind 0,7?",
                "answers": [
                    "70 %",
                    "7 %",
                    "0,7 %",
                    "700 %"
                ],
                "correct": 0,
                "explanation": "0,7 = 70/100 = 70 %. Im Hunderterfeld sind 70 Kästchen gefärbt.",
                "grafik": "<svg viewBox='0 0 170 158' style='width:100%;max-width:170px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='10' width='91' height='130' fill='rgba(56,189,248,0.55)'/><line x1='20' y1='10' x2='20' y2='140' stroke='#94a3b8' stroke-width='1.5'/><line x1='20' y1='10' x2='150' y2='10' stroke='#94a3b8' stroke-width='1.5'/><line x1='33' y1='10' x2='33' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='23' x2='150' y2='23' stroke='#94a3b8' stroke-width='0.6'/><line x1='46' y1='10' x2='46' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='36' x2='150' y2='36' stroke='#94a3b8' stroke-width='0.6'/><line x1='59' y1='10' x2='59' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='49' x2='150' y2='49' stroke='#94a3b8' stroke-width='0.6'/><line x1='72' y1='10' x2='72' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='62' x2='150' y2='62' stroke='#94a3b8' stroke-width='0.6'/><line x1='85' y1='10' x2='85' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='75' x2='150' y2='75' stroke='#94a3b8' stroke-width='0.6'/><line x1='98' y1='10' x2='98' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='88' x2='150' y2='88' stroke='#94a3b8' stroke-width='0.6'/><line x1='111' y1='10' x2='111' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='101' x2='150' y2='101' stroke='#94a3b8' stroke-width='0.6'/><line x1='124' y1='10' x2='124' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='114' x2='150' y2='114' stroke='#94a3b8' stroke-width='0.6'/><line x1='137' y1='10' x2='137' y2='140' stroke='#94a3b8' stroke-width='0.6'/><line x1='20' y1='127' x2='150' y2='127' stroke='#94a3b8' stroke-width='0.6'/><line x1='150' y1='10' x2='150' y2='140' stroke='#94a3b8' stroke-width='1.5'/><line x1='20' y1='140' x2='150' y2='140' stroke='#94a3b8' stroke-width='1.5'/><text x='85' y='158' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>100 Kästchen = das Ganze</text></svg>"
            },
            {
                "id": "brdzk6l2_test_2",
                "category": "kurs_brdz_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Dezimalzahl gehört zu 2/3?",
                "answers": [
                    "0,666…",
                    "0,23",
                    "0,6",
                    "0,333…"
                ],
                "correct": 0,
                "explanation": "2 ÷ 3 = 0,666… – die 6 wiederholt sich ohne Ende. 0,333… ist nur 1/3."
            },
            {
                "id": "brdzk6l2_test_3",
                "category": "kurs_brdz_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Prozent des Kreises sind orange?",
                "answers": [
                    "37,5 %",
                    "3,8 %",
                    "30 %",
                    "62,5 %"
                ],
                "correct": 0,
                "explanation": "3 von 8 Teilen sind orange: 3/8 = 3 ÷ 8 = 0,375 = 37,5 %. 62,5 % ist der weiße Teil.",
                "grafik": "<svg viewBox='0 0 180 160' style='width:100%;max-width:180px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><path d='M90,80 L90.0,18.0 A62,62 0 0 1 133.8,36.2 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><path d='M90,80 L133.8,36.2 A62,62 0 0 1 152.0,80.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><path d='M90,80 L152.0,80.0 A62,62 0 0 1 133.8,123.8 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><path d='M90,80 L133.8,123.8 A62,62 0 0 1 90.0,142.0 Z' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='2'/><path d='M90,80 L90.0,142.0 A62,62 0 0 1 46.2,123.8 Z' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='2'/><path d='M90,80 L46.2,123.8 A62,62 0 0 1 28.0,80.0 Z' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='2'/><path d='M90,80 L28.0,80.0 A62,62 0 0 1 46.2,36.2 Z' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='2'/><path d='M90,80 L46.2,36.2 A62,62 0 0 1 90.0,18.0 Z' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='2'/></svg>"
            },
            {
                "id": "brdzk6l2_test_4",
                "category": "kurs_brdz_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Bei welchem Nenner ist der gekürzte Bruch periodisch?",
                "answers": [
                    "15",
                    "25",
                    "16",
                    "40"
                ],
                "correct": 0,
                "explanation": "15 = 3 · 5 enthält die 3, darum ist z. B. 1/15 periodisch. 25, 16 und 40 haben nur 2 und 5 als Faktoren."
            },
            {
                "id": "brdzk6l2_test_5",
                "category": "kurs_brdz_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zeile ist richtig?",
                "answers": [
                    "3/4 = 0,75 = 75 %",
                    "3/4 = 0,34 = 34 %",
                    "3/4 = 0,7 = 70 %",
                    "3/4 = 0,75 = 7,5 %"
                ],
                "correct": 0,
                "explanation": "3 ÷ 4 = 0,75 und 0,75 = 75/100 = 75 %."
            },
            {
                "id": "brdzk6l2_test_6",
                "category": "kurs_brdz_k6_l2",
                "area": "schule",
                "grade": 6,
                "subject": "mathe",
                "topic": "dezimalzahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Aussage stimmt für 1/3 = 0,333…?",
                "answers": [
                    "Die 3 wiederholt sich endlos",
                    "Nach 0,333 hört die Zahl auf",
                    "1/3 ist genau gleich 0,3",
                    "1/3 ist genau gleich 33 %"
                ],
                "correct": 0,
                "explanation": "Bei 1 ÷ 3 bleibt immer der Rest 1, darum geht die 3 endlos weiter. 0,3 und 33 % sind nur gerundet."
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
