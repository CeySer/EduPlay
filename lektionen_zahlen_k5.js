// Große Zahlen und Rechengesetze - Klasse 5 Mathe
(function () {
    const extraKurse = [{"id": "zahlen_rechengesetze_k5", "title": "Große Zahlen und Rechengesetze", "icon": "🔢", "grade": 5, "subject": "mathe", "beschreibung": "Große Zahlen bis zur Billion lesen und runden sowie mit Rechengesetzen geschickt rechnen."}];
    const extraLektionen = [
    {
        "id": "zahlen_k5_l1",
        "kurs": "zahlen_rechengesetze_k5",
        "order": 1,
        "icon": "🔢",
        "title": "Große Zahlen und Runden",
        "kurz": "Bis zur Billion lesen, runden und vergleichen",
        "erklaerung": {
            "intro": "Große Zahlen liest du in <b>Dreiergruppen</b> von rechts: Einer, <b>Tausender</b>, <b>Millionen</b>, <b>Milliarden</b>, <b>Billionen</b>. Jede neue Gruppe ist 1000-mal so groß: 1 Million = 1000 Tausend, 1 Milliarde = 1000 Millionen, 1 Billion = 1000 Milliarden. Beim <b>Runden</b> schaust du nur auf die Ziffer rechts neben der <b>Rundungsstelle</b>: 0 bis 4 heißt abrunden, 5 bis 9 heißt aufrunden.",
            "merksatz": "Große Zahlen in Dreiergruppen lesen – und beim Runden entscheidet nur die Ziffer direkt rechts von der Rundungsstelle.",
            "beispiele": [
                "3 405 020 000 in der Stellenwerttafel: drei Milliarden vierhundertfünf Millionen zwanzigtausend.<svg viewBox='0 0 335 74' style='width:100%;max-width:335px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Milliarden</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>3</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><text x='100' y='60' font-size='17' fill='#e5e7eb'>4</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='126' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>5</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><text x='183' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='209' y='60' font-size='17' fill='#e5e7eb'>2</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>0</text><rect x='253' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='253' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='292' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='266' y='34' font-size='10' fill='#38bdf8'>H</text><text x='266' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='279' y1='39' x2='279' y2='69' stroke='#38bdf8'/><text x='292' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='292' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='305' y1='39' x2='305' y2='69' stroke='#38bdf8'/><text x='318' y='34' font-size='10' fill='#38bdf8'>E</text><text x='318' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>",
                "Am Zahlenstrahl von 0 bis 10 Millionen ist jeder Strich 1 Million wert. Der Pfeil zeigt auf 7 000 000.<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='35' x2='170.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='170' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 Mio</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 Mio</text><line x1='229.2' y1='8' x2='229.2' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='229.2,38 224.2,30 234.2,30' fill='#f59e0b'/></svg>",
                "4 386 500 auf Tausender runden: Rechts neben der Tausenderziffer 6 steht eine 5, also aufrunden: 4 387 000. Vorgänger von 5 000 000 ist 4 999 999, Nachfolger ist 5 000 001."
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "zahlenk5l1u_leicht_1",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Zahl zeigt die Stellenwerttafel?",
                    "answers": [
                        "52 307 000",
                        "5 230 700",
                        "52 370 000",
                        "520 307 000"
                    ],
                    "correct": 0,
                    "explanation": "Von links gelesen: 52 Millionen, 307 Tausend und 0 Einer – also 52 307 000. Leere Stellen rechts musst du mit Nullen füllen.",
                    "grafik": "<svg viewBox='0 0 252 74' style='width:100%;max-width:252px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='43' y='60' font-size='17' fill='#e5e7eb'>5</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>2</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><text x='100' y='60' font-size='17' fill='#e5e7eb'>3</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><text x='126' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='126' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>7</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><text x='183' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='209' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>"
                },
                {
                    "id": "zahlenk5l1u_leicht_2",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Nullen hat die Zahl eine Million?",
                    "answers": [
                        "6",
                        "3",
                        "9",
                        "12"
                    ],
                    "correct": 0,
                    "explanation": "Eine Million ist 1 000 000: zwei Dreiergruppen mit je drei Nullen, also 6 Nullen."
                },
                {
                    "id": "zahlenk5l1u_leicht_3",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was ist der Nachfolger von 2 999 999?",
                    "answers": [
                        "3 000 000",
                        "2 999 998",
                        "3 000 001",
                        "30 000 000"
                    ],
                    "correct": 0,
                    "explanation": "Der Nachfolger ist um 1 größer: 2 999 999 + 1 = 3 000 000. 2 999 998 wäre der Vorgänger."
                },
                {
                    "id": "zahlenk5l1u_leicht_4",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Eine Stadt hat 6 481 000 Einwohner. Runde auf Millionen.",
                    "answers": [
                        "6 000 000",
                        "7 000 000",
                        "6 500 000",
                        "6 480 000"
                    ],
                    "correct": 0,
                    "explanation": "Rechts neben der Millionenziffer 6 steht eine 4. Bei 0 bis 4 wird abgerundet: 6 000 000.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='35' x2='170.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 Mio</text><text x='170' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6,5 Mio</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 Mio</text><line x1='164.4' y1='8' x2='164.4' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='164.4,38 159.4,30 169.4,30' fill='#f59e0b'/></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "zahlenk5l1u_mittel_1",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl zeigt der Pfeil?",
                    "answers": [
                        "2 600 000",
                        "2 060 000",
                        "2 006 000",
                        "2 700 000"
                    ],
                    "correct": 0,
                    "explanation": "Von 2 Mio bis 3 Mio sind es 10 Schritte, jeder ist 100 000 wert. Der Pfeil steht beim 6. Strich: 2 600 000.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 Mio</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 Mio</text><line x1='199.6' y1='8' x2='199.6' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='199.6,38 194.6,30 204.6,30' fill='#f59e0b'/></svg>"
                },
                {
                    "id": "zahlenk5l1u_mittel_2",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schreibe als Zahl: zwölf Millionen vierzigtausendacht.",
                    "answers": [
                        "12 040 008",
                        "12 400 008",
                        "12 040 800",
                        "1 240 008"
                    ],
                    "correct": 0,
                    "explanation": "12 Millionen | 040 Tausend | 008 Einer. In jede Dreiergruppe gehören genau drei Ziffern: 12 040 008."
                },
                {
                    "id": "zahlenk5l1u_mittel_3",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Zahl ist am größten?",
                    "answers": [
                        "1 002 300 400",
                        "987 654 321",
                        "999 999 999",
                        "1 000 999 999"
                    ],
                    "correct": 0,
                    "explanation": "Die Zahlen mit 10 Stellen sind größer als die mit 9 Stellen. Von beiden ist 1 002 300 400 größer, weil an der Millionenstelle 2 statt 0 steht."
                },
                {
                    "id": "zahlenk5l1u_mittel_4",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 7 849 951 auf Hunderter.",
                    "answers": [
                        "7 850 000",
                        "7 849 900",
                        "7 850 951",
                        "7 849 950"
                    ],
                    "correct": 0,
                    "explanation": "Rechts neben der Hunderterziffer 9 steht eine 5, also aufrunden. Aus 7 849 900 wird 7 850 000, die Stellen dahinter werden 0."
                }
            ],
            "schwer": [
                {
                    "id": "zahlenk5l1u_schwer_1",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Zahl zeigt die Stellenwerttafel?",
                    "answers": [
                        "2 040 000 500 000",
                        "2 400 000 500 000",
                        "204 000 500 000",
                        "2 040 000 050 000"
                    ],
                    "correct": 0,
                    "explanation": "2 Billionen | 040 Milliarden | 000 Millionen | 500 Tausend | 000 Einer: zusammen 2 040 000 500 000.",
                    "grafik": "<svg viewBox='0 0 366 74' style='width:100%;max-width:366px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='26' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='26' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='17' y='16' font-size='10' fill='#e5e7eb'>Bio</text><text x='17' y='34' font-size='10' fill='#38bdf8'>E</text><text x='17' y='60' font-size='17' fill='#e5e7eb'>2</text><rect x='35' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='35' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='74' y='16' font-size='10' fill='#e5e7eb'>Milliarden</text><text x='48' y='34' font-size='10' fill='#38bdf8'>H</text><text x='48' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='61' y1='39' x2='61' y2='69' stroke='#38bdf8'/><text x='74' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='74' y='60' font-size='17' fill='#e5e7eb'>4</text><line x1='87' y1='39' x2='87' y2='69' stroke='#38bdf8'/><text x='100' y='34' font-size='10' fill='#38bdf8'>E</text><text x='100' y='60' font-size='17' fill='#e5e7eb'>0</text><rect x='118' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='118' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='157' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='131' y='34' font-size='10' fill='#38bdf8'>H</text><text x='131' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='144' y1='39' x2='144' y2='69' stroke='#38bdf8'/><text x='157' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='157' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='170' y1='39' x2='170' y2='69' stroke='#38bdf8'/><text x='183' y='34' font-size='10' fill='#38bdf8'>E</text><text x='183' y='60' font-size='17' fill='#e5e7eb'>0</text><rect x='201' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='201' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='240' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='214' y='34' font-size='10' fill='#38bdf8'>H</text><text x='214' y='60' font-size='17' fill='#e5e7eb'>5</text><line x1='227' y1='39' x2='227' y2='69' stroke='#38bdf8'/><text x='240' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='240' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='253' y1='39' x2='253' y2='69' stroke='#38bdf8'/><text x='266' y='34' font-size='10' fill='#38bdf8'>E</text><text x='266' y='60' font-size='17' fill='#e5e7eb'>0</text><rect x='284' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='284' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='323' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='297' y='34' font-size='10' fill='#38bdf8'>H</text><text x='297' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='310' y1='39' x2='310' y2='69' stroke='#38bdf8'/><text x='323' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='323' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='336' y1='39' x2='336' y2='69' stroke='#38bdf8'/><text x='349' y='34' font-size='10' fill='#38bdf8'>E</text><text x='349' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>"
                },
                {
                    "id": "zahlenk5l1u_schwer_2",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was ist der Vorgänger von 4 000 000 000?",
                    "answers": [
                        "3 999 999 999",
                        "4 000 000 001",
                        "3 999 999 990",
                        "4 999 999 999"
                    ],
                    "correct": 0,
                    "explanation": "Der Vorgänger ist um 1 kleiner: 4 000 000 000 − 1 = 3 999 999 999. Alle Neunen entstehen, weil du über jede Stelle zurück musst."
                },
                {
                    "id": "zahlenk5l1u_schwer_3",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Runde 14 499 999 auf Millionen.",
                    "answers": [
                        "14 000 000",
                        "15 000 000",
                        "14 500 000",
                        "10 000 000"
                    ],
                    "correct": 0,
                    "explanation": "Rechts neben der Millionenziffer 4 steht eine 4, also abrunden: 14 000 000. Wer erst auf Hunderttausender und dann weiter rundet (Kettenrunden), kommt falsch auf 15 000 000."
                },
                {
                    "id": "zahlenk5l1u_schwer_4",
                    "category": "kurs_zahlen_k5_l1",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "natuerliche_zahlen",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Der Strahl geht von 0 bis 2 Milliarden. Welche Zahl zeigt der Pfeil?",
                    "answers": [
                        "750 000 000",
                        "300 000 000",
                        "600 000 000",
                        "75 000 000"
                    ],
                    "correct": 0,
                    "explanation": "2 Milliarden sind in 8 gleiche Schritte geteilt, jeder ist 250 Millionen wert. 3 Schritte sind 750 000 000.",
                    "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='59.0' y1='38' x2='59.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='96.0' y1='38' x2='96.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='133.0' y1='38' x2='133.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='38' x2='170.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='207.0' y1='38' x2='207.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='244.0' y1='38' x2='244.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='281.0' y1='38' x2='281.0' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 Mrd</text><line x1='133.0' y1='8' x2='133.0' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='133.0,38 128.0,30 138.0,30' fill='#f59e0b'/></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "zahlenk5l1_test_1",
                "category": "kurs_zahlen_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "natuerliche_zahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welchen Wert hat die orange markierte Ziffer?",
                "answers": [
                    "80 000 000",
                    "8 000 000",
                    "800 000 000",
                    "80 000"
                ],
                "correct": 0,
                "explanation": "Die 8 steht an der Zehnmillionen-Stelle (Z bei Millionen). Ihr Wert ist 8 · 10 000 000 = 80 000 000.",
                "grafik": "<svg viewBox='0 0 335 74' style='width:100%;max-width:335px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><g text-anchor='middle' font-family='sans-serif' font-weight='700'><rect x='4' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='4' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='43' y='16' font-size='10' fill='#e5e7eb'>Milliarden</text><text x='17' y='34' font-size='10' fill='#38bdf8'>H</text><line x1='30' y1='39' x2='30' y2='69' stroke='#38bdf8'/><text x='43' y='34' font-size='10' fill='#38bdf8'>Z</text><line x1='56' y1='39' x2='56' y2='69' stroke='#38bdf8'/><text x='69' y='34' font-size='10' fill='#38bdf8'>E</text><text x='69' y='60' font-size='17' fill='#e5e7eb'>6</text><rect x='87' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='87' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='126' y='16' font-size='10' fill='#e5e7eb'>Millionen</text><text x='100' y='34' font-size='10' fill='#38bdf8'>H</text><text x='100' y='60' font-size='17' fill='#e5e7eb'>3</text><line x1='113' y1='39' x2='113' y2='69' stroke='#38bdf8'/><rect x='114' y='40' width='24' height='28' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='126' y='34' font-size='10' fill='#f59e0b'>Z</text><text x='126' y='60' font-size='17' fill='#e5e7eb'>8</text><line x1='139' y1='39' x2='139' y2='69' stroke='#38bdf8'/><text x='152' y='34' font-size='10' fill='#38bdf8'>E</text><text x='152' y='60' font-size='17' fill='#e5e7eb'>2</text><rect x='170' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='170' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='209' y='16' font-size='10' fill='#e5e7eb'>Tausender</text><text x='183' y='34' font-size='10' fill='#38bdf8'>H</text><text x='183' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='196' y1='39' x2='196' y2='69' stroke='#38bdf8'/><text x='209' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='209' y='60' font-size='17' fill='#e5e7eb'>1</text><line x1='222' y1='39' x2='222' y2='69' stroke='#38bdf8'/><text x='235' y='34' font-size='10' fill='#38bdf8'>E</text><text x='235' y='60' font-size='17' fill='#e5e7eb'>5</text><rect x='253' y='4' width='78' height='16' rx='3' fill='rgba(167,139,250,0.25)'/><rect x='253' y='39' width='78' height='30' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='292' y='16' font-size='10' fill='#e5e7eb'>Einer</text><text x='266' y='34' font-size='10' fill='#38bdf8'>H</text><text x='266' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='279' y1='39' x2='279' y2='69' stroke='#38bdf8'/><text x='292' y='34' font-size='10' fill='#38bdf8'>Z</text><text x='292' y='60' font-size='17' fill='#e5e7eb'>0</text><line x1='305' y1='39' x2='305' y2='69' stroke='#38bdf8'/><text x='318' y='34' font-size='10' fill='#38bdf8'>E</text><text x='318' y='60' font-size='17' fill='#e5e7eb'>0</text></g></svg>"
            },
            {
                "id": "zahlenk5l1_test_2",
                "category": "kurs_zahlen_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "natuerliche_zahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schreibe als Zahl: dreihundert Millionen fünftausend.",
                "answers": [
                    "300 005 000",
                    "300 050 000",
                    "305 000 000",
                    "3 005 000"
                ],
                "correct": 0,
                "explanation": "300 Millionen | 005 Tausend | 000 Einer. Die Fünf gehört in die Tausendergruppe an die letzte Stelle: 300 005 000."
            },
            {
                "id": "zahlenk5l1_test_3",
                "category": "kurs_zahlen_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "natuerliche_zahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Eine Stadt hat 584 763 Einwohner. Runde auf Zehntausender.",
                "answers": [
                    "580 000",
                    "590 000",
                    "585 000",
                    "600 000"
                ],
                "correct": 0,
                "explanation": "Rechts neben der Zehntausenderziffer 8 steht eine 4, also abrunden: 580 000. Kettenrunden über 585 000 führt falsch zu 590 000."
            },
            {
                "id": "zahlenk5l1_test_4",
                "category": "kurs_zahlen_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "natuerliche_zahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl zeigt der Pfeil?",
                "answers": [
                    "47 000 000",
                    "4 700 000",
                    "470 000 000",
                    "48 000 000"
                ],
                "correct": 0,
                "explanation": "Von 40 Mio bis 50 Mio sind 10 Schritte zu je 1 Million. Der Pfeil steht beim 7. Strich: 47 000 000.",
                "grafik": "<svg viewBox='0 0 340 76' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='44' x2='330' y2='44' stroke='#38bdf8' stroke-width='2'/><polygon points='334,44 326,40 326,48' fill='#38bdf8'/><line x1='22.0' y1='35' x2='22.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='51.6' y1='38' x2='51.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='81.2' y1='38' x2='81.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='110.8' y1='38' x2='110.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='140.4' y1='38' x2='140.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='170.0' y1='35' x2='170.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><line x1='199.6' y1='38' x2='199.6' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='229.2' y1='38' x2='229.2' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='258.8' y1='38' x2='258.8' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='288.4' y1='38' x2='288.4' y2='50' stroke='#38bdf8' stroke-width='2'/><line x1='318.0' y1='35' x2='318.0' y2='53' stroke='#e5e7eb' stroke-width='2'/><text x='22' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>40 Mio</text><text x='170' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>45 Mio</text><text x='318' y='68' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>50 Mio</text><line x1='229.2' y1='8' x2='229.2' y2='32' stroke='#f59e0b' stroke-width='2.5'/><polygon points='229.2,38 224.2,30 234.2,30' fill='#f59e0b'/></svg>"
            },
            {
                "id": "zahlenk5l1_test_5",
                "category": "kurs_zahlen_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "natuerliche_zahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl ist kleiner als 5 100 000?",
                "answers": [
                    "5 099 999",
                    "5 100 001",
                    "5 101 000",
                    "5 110 000"
                ],
                "correct": 0,
                "explanation": "Alle Zahlen haben 7 Stellen. An der Hunderttausenderstelle hat nur 5 099 999 eine 0 statt einer 1 – sie ist kleiner."
            },
            {
                "id": "zahlenk5l1_test_6",
                "category": "kurs_zahlen_k5_l1",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "natuerliche_zahlen",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ist der Vorgänger von einer Milliarde?",
                "answers": [
                    "999 999 999",
                    "1 000 000 001",
                    "99 999 999",
                    "999 999 990"
                ],
                "correct": 0,
                "explanation": "Eine Milliarde ist 1 000 000 000. Um 1 kleiner ist 999 999 999 – die größte Zahl mit 9 Stellen."
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "rechges_k5_l2",
        "kurs": "zahlen_rechengesetze_k5",
        "order": 2,
        "icon": "🧮",
        "title": "Rechengesetze und Rechenvorteile",
        "kurz": "Punkt vor Strich, Klammern und geschickt rechnen",
        "erklaerung": {
            "intro": "Bei längeren Aufgaben gilt: <b>Klammern zuerst</b>, dann <b>Punkt vor Strich</b> (· und : vor + und −), sonst von links nach rechts. Das <b>Kommutativgesetz</b> (Vertauschungsgesetz) erlaubt bei + und · das Tauschen: 25 · 17 · 4 = 25 · 4 · 17. Mit dem <b>Assoziativgesetz</b> (Verbindungsgesetz) setzt du Klammern beliebig, mit dem <b>Distributivgesetz</b> (Verteilungsgesetz) zerlegst du: 6 · 23 = 6 · 20 + 6 · 3. Bei − und : darfst du nicht tauschen.",
            "merksatz": "Klammern zuerst, dann Punkt vor Strich – und bei + und · darfst du geschickt tauschen und zusammenfassen.",
            "beispiele": [
                "Rechenbaum zu 4 + 3 · 5: Erst wird 3 · 5 = 15 gerechnet, dann 4 + 15 = 19. Falsch wäre 7 · 5 = 35.<svg viewBox='0 0 240 183' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='156.7' y1='87' x2='101.7' y2='113' stroke='#94a3b8' stroke-width='1.5'/><line x1='46.7' y1='34' x2='101.7' y2='113' stroke='#94a3b8' stroke-width='1.5'/><line x1='193.3' y1='34' x2='156.7' y2='61' stroke='#94a3b8' stroke-width='1.5'/><line x1='120.0' y1='34' x2='156.7' y2='61' stroke='#94a3b8' stroke-width='1.5'/><rect x='26.7' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='46.6667' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='100.0' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='120' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='173.3' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='193.333' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><circle cx='156.7' cy='74' r='13' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='156.667' y='80' text-anchor='middle' font-size='17' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>·</text><circle cx='101.7' cy='126' r='13' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='101.667' y='132' text-anchor='middle' font-size='17' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>+</text><line x1='101.7' y1='139' x2='101.7' y2='151' stroke='#94a3b8' stroke-width='1.5'/><rect x='77.7' y='151' width='48' height='28' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><text x='101.667' y='171' text-anchor='middle' font-size='16' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>19</text></svg>",
                "Geschickt rechnen: 25 · 17 · 4 = 25 · 4 · 17 = 100 · 17 = 1 700. Tauschen (Kommutativgesetz) und neu zusammenfassen (Assoziativgesetz) spart Arbeit.",
                "Distributivgesetz am Rechteck: 6 · 23 = 6 · 20 + 6 · 3 = 120 + 18 = 138.<svg viewBox='0 0 330 114' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='26' width='241.7' height='80' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='281.7' y='26' width='36.3' height='80' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='160.87' y='18' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#38bdf8'>20</text><text x='299.87' y='18' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#10b981'>3</text><text x='28' y='71' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='160.87' y='71' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 · 20</text><text x='299.87' y='71' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 · 3</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "rechgesk5l2u_leicht_1",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viel ist 5 + 4 · 6?",
                    "answers": [
                        "29",
                        "54",
                        "15",
                        "26"
                    ],
                    "correct": 0,
                    "explanation": "Punkt vor Strich: Erst 4 · 6 = 24, dann 5 + 24 = 29. Wer von links rechnet, bekommt falsch 9 · 6 = 54."
                },
                {
                    "id": "rechgesk5l2u_leicht_2",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welches Gesetz zeigt 7 + 12 = 12 + 7?",
                    "answers": [
                        "Kommutativgesetz",
                        "Assoziativgesetz",
                        "Distributivgesetz",
                        "Punkt vor Strich"
                    ],
                    "correct": 0,
                    "explanation": "Die Zahlen werden vertauscht, das Ergebnis bleibt gleich. Das ist das Kommutativgesetz (Vertauschungsgesetz)."
                },
                {
                    "id": "rechgesk5l2u_leicht_3",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viel ist (8 + 2) · 6?",
                    "answers": [
                        "60",
                        "20",
                        "16",
                        "48"
                    ],
                    "correct": 0,
                    "explanation": "Klammern zuerst: 8 + 2 = 10, dann 10 · 6 = 60. Ohne Klammer wäre es 8 + 12 = 20."
                },
                {
                    "id": "rechgesk5l2u_leicht_4",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Der Rechenbaum gehört zu 20 − 4 · 3. Was kommt unten ins Kästchen?",
                    "answers": [
                        "8",
                        "48",
                        "12",
                        "16"
                    ],
                    "correct": 0,
                    "explanation": "Im Baum wird zuerst 4 · 3 = 12 gerechnet, dann 20 − 12 = 8. Von links gerechnet käme falsch 16 · 3 = 48 heraus.",
                    "grafik": "<svg viewBox='0 0 240 183' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='156.7' y1='87' x2='101.7' y2='113' stroke='#94a3b8' stroke-width='1.5'/><line x1='46.7' y1='34' x2='101.7' y2='113' stroke='#94a3b8' stroke-width='1.5'/><line x1='193.3' y1='34' x2='156.7' y2='61' stroke='#94a3b8' stroke-width='1.5'/><line x1='120.0' y1='34' x2='156.7' y2='61' stroke='#94a3b8' stroke-width='1.5'/><rect x='26.7' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='46.6667' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>20</text><rect x='100.0' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='120' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='173.3' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='193.333' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><circle cx='156.7' cy='74' r='13' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='156.667' y='80' text-anchor='middle' font-size='17' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>·</text><circle cx='101.7' cy='126' r='13' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='101.667' y='132' text-anchor='middle' font-size='17' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>−</text><line x1='101.7' y1='139' x2='101.7' y2='151' stroke='#94a3b8' stroke-width='1.5'/><rect x='77.7' y='151' width='48' height='28' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><text x='101.667' y='171' text-anchor='middle' font-size='16' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>?</text></svg>"
                }
            ],
            "mittel": [
                {
                    "id": "rechgesk5l2u_mittel_1",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel ist 25 · 23 · 4? Tipp: Vertausche geschickt.",
                    "answers": [
                        "2 300",
                        "230",
                        "23 000",
                        "2 030"
                    ],
                    "correct": 0,
                    "explanation": "Tausche: 25 · 4 · 23 = 100 · 23 = 2 300. Das Kommutativgesetz erlaubt das Tauschen beim Malnehmen."
                },
                {
                    "id": "rechgesk5l2u_mittel_2",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Term passt zu diesem Rechenbaum?",
                    "answers": [
                        "(12 + 8) · 5",
                        "12 + 8 · 5",
                        "12 · (8 + 5)",
                        "12 · 8 + 5"
                    ],
                    "correct": 0,
                    "explanation": "Im Baum werden zuerst 12 und 8 addiert, dann wird mit 5 multipliziert. Dafür braucht man die Klammer: (12 + 8) · 5.",
                    "grafik": "<svg viewBox='0 0 240 183' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='193.3' y1='34' x2='138.3' y2='113' stroke='#94a3b8' stroke-width='1.5'/><line x1='83.3' y1='87' x2='138.3' y2='113' stroke='#94a3b8' stroke-width='1.5'/><line x1='120.0' y1='34' x2='83.3' y2='61' stroke='#94a3b8' stroke-width='1.5'/><line x1='46.7' y1='34' x2='83.3' y2='61' stroke='#94a3b8' stroke-width='1.5'/><rect x='26.7' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='46.6667' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>12</text><rect x='100.0' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='120' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>8</text><circle cx='83.3' cy='74' r='13' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='83.3333' y='80' text-anchor='middle' font-size='17' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>+</text><rect x='173.3' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='193.333' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><circle cx='138.3' cy='126' r='13' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='138.333' y='132' text-anchor='middle' font-size='17' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>·</text><line x1='138.3' y1='139' x2='138.3' y2='151' stroke='#94a3b8' stroke-width='1.5'/><rect x='114.3' y='151' width='48' height='28' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><text x='138.333' y='171' text-anchor='middle' font-size='16' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>?</text></svg>"
                },
                {
                    "id": "rechgesk5l2u_mittel_3",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie kannst du 7 · 48 geschickt rechnen?",
                    "answers": [
                        "7 · 50 − 7 · 2",
                        "7 · 50 − 2",
                        "7 · 40 + 8",
                        "7 · 4 + 7 · 8"
                    ],
                    "correct": 0,
                    "explanation": "48 = 50 − 2, also 7 · 48 = 7 · 50 − 7 · 2 = 350 − 14 = 336. Beim Distributivgesetz wird jede Zahl in der Klammer mit 7 multipliziert."
                },
                {
                    "id": "rechgesk5l2u_mittel_4",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel ist 100 − (30 + 20)?",
                    "answers": [
                        "50",
                        "90",
                        "150",
                        "70"
                    ],
                    "correct": 0,
                    "explanation": "Klammer zuerst: 30 + 20 = 50, dann 100 − 50 = 50. Wer die Klammer übersieht, rechnet 100 − 30 + 20 = 90."
                }
            ],
            "schwer": [
                {
                    "id": "rechgesk5l2u_schwer_1",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Wie viel ist 36 : 4 + 5 · 2?",
                    "answers": [
                        "19",
                        "28",
                        "8",
                        "14"
                    ],
                    "correct": 0,
                    "explanation": "Punkt vor Strich: 36 : 4 = 9 und 5 · 2 = 10, dann 9 + 10 = 19. Von links gerechnet käme falsch (9 + 5) · 2 = 28 heraus."
                },
                {
                    "id": "rechgesk5l2u_schwer_2",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Welche Gleichung ist falsch?",
                    "answers": [
                        "20 − 5 = 5 − 20",
                        "20 + 5 = 5 + 20",
                        "4 · 5 = 5 · 4",
                        "(2 · 3) · 4 = 2 · (3 · 4)"
                    ],
                    "correct": 0,
                    "explanation": "Beim Minus darfst du nicht tauschen: 20 − 5 = 15, aber 5 − 20 geht in den natürlichen Zahlen gar nicht. Bei + und · gilt das Tauschen."
                },
                {
                    "id": "rechgesk5l2u_schwer_3",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Das Rechteck zeigt 8 · 35. Welche Rechnung passt?",
                    "answers": [
                        "8 · 30 + 8 · 5",
                        "8 · 30 + 5",
                        "8 · 3 + 8 · 5",
                        "8 + 30 · 5"
                    ],
                    "correct": 0,
                    "explanation": "35 = 30 + 5. Beide Teile werden mit 8 multipliziert: 8 · 30 + 8 · 5 = 240 + 40 = 280.",
                    "grafik": "<svg viewBox='0 0 330 114' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='26' width='238.3' height='80' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='278.3' y='26' width='39.7' height='80' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='159.143' y='18' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#38bdf8'>30</text><text x='298.143' y='18' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#10b981'>5</text><text x='28' y='71' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text></svg>"
                },
                {
                    "id": "rechgesk5l2u_schwer_4",
                    "category": "kurs_rechges_k5_l2",
                    "area": "schule",
                    "grade": 5,
                    "subject": "mathe",
                    "topic": "rechengesetze",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Jonas rechnet 48 − 8 · 5 so wie im Heft. Was hat er falsch gemacht?",
                    "answers": [
                        "Er hat zuerst subtrahiert",
                        "Er hat falsch multipliziert",
                        "Er hat falsch subtrahiert",
                        "Er hat nichts falsch gemacht"
                    ],
                    "correct": 0,
                    "explanation": "Jonas hat erst 48 − 8 gerechnet. Richtig ist Punkt vor Strich: 8 · 5 = 40, dann 48 − 40 = 8.",
                    "grafik": "<svg viewBox='0 0 220 98' style='width:100%;max-width:220px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='4' y='4' width='212' height='90' rx='6' fill='rgba(148,163,184,0.12)' stroke='#94a3b8' stroke-width='1.5'/><text x='24' y='30' text-anchor='start' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>48 − 8 · 5</text><text x='24' y='56' text-anchor='start' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>= 40 · 5</text><text x='24' y='82' text-anchor='start' font-size='17' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>= 200</text></svg>"
                }
            ]
        },
        "test": [
            {
                "id": "rechgesk5l2_test_1",
                "category": "kurs_rechges_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "rechengesetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel ist 6 + 4 · 8?",
                "answers": [
                    "38",
                    "80",
                    "18",
                    "32"
                ],
                "correct": 0,
                "explanation": "Punkt vor Strich: 4 · 8 = 32, dann 6 + 32 = 38. Von links gerechnet käme falsch 10 · 8 = 80 heraus."
            },
            {
                "id": "rechgesk5l2_test_2",
                "category": "kurs_rechges_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "rechengesetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welcher Term passt zu diesem Rechenbaum?",
                "answers": [
                    "3 · (9 − 4)",
                    "3 · 9 − 4",
                    "(9 − 4) + 3",
                    "3 − 9 · 4"
                ],
                "correct": 0,
                "explanation": "Im Baum wird zuerst 9 − 4 gerechnet und das Ergebnis mit 3 multipliziert. Dafür braucht man die Klammer: 3 · (9 − 4).",
                "grafik": "<svg viewBox='0 0 240 183' style='width:100%;max-width:240px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='156.7' y1='87' x2='101.7' y2='113' stroke='#94a3b8' stroke-width='1.5'/><line x1='46.7' y1='34' x2='101.7' y2='113' stroke='#94a3b8' stroke-width='1.5'/><line x1='193.3' y1='34' x2='156.7' y2='61' stroke='#94a3b8' stroke-width='1.5'/><line x1='120.0' y1='34' x2='156.7' y2='61' stroke='#94a3b8' stroke-width='1.5'/><rect x='26.7' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='46.6667' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='100.0' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='120' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>9</text><rect x='173.3' y='8' width='40' height='26' rx='5' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><text x='193.333' y='27' text-anchor='middle' font-size='15' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><circle cx='156.7' cy='74' r='13' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='156.667' y='80' text-anchor='middle' font-size='17' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>−</text><circle cx='101.7' cy='126' r='13' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='1.5'/><text x='101.667' y='132' text-anchor='middle' font-size='17' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>·</text><line x1='101.7' y1='139' x2='101.7' y2='151' stroke='#94a3b8' stroke-width='1.5'/><rect x='77.7' y='151' width='48' height='28' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><text x='101.667' y='171' text-anchor='middle' font-size='16' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>?</text></svg>"
            },
            {
                "id": "rechgesk5l2_test_3",
                "category": "kurs_rechges_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "rechengesetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Gesetz nutzt du bei (17 + 25) + 75 = 17 + (25 + 75)?",
                "answers": [
                    "Assoziativgesetz",
                    "Kommutativgesetz",
                    "Distributivgesetz",
                    "Punkt vor Strich"
                ],
                "correct": 0,
                "explanation": "Die Reihenfolge bleibt, nur die Klammer wird versetzt. Das ist das Assoziativgesetz (Verbindungsgesetz)."
            },
            {
                "id": "rechgesk5l2_test_4",
                "category": "kurs_rechges_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "rechengesetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel ist 4 · 19 · 25?",
                "answers": [
                    "1 900",
                    "190",
                    "19 000",
                    "1 090"
                ],
                "correct": 0,
                "explanation": "Tausche geschickt: 4 · 25 · 19 = 100 · 19 = 1 900."
            },
            {
                "id": "rechgesk5l2_test_5",
                "category": "kurs_rechges_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "rechengesetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel ist 9 · 102? Tipp: Zerlege 102.",
                "answers": [
                    "918",
                    "911",
                    "9 018",
                    "902"
                ],
                "correct": 0,
                "explanation": "9 · 102 = 9 · 100 + 9 · 2 = 900 + 18 = 918. Die 2 muss auch mit 9 multipliziert werden."
            },
            {
                "id": "rechgesk5l2_test_6",
                "category": "kurs_rechges_k5_l2",
                "area": "schule",
                "grade": 5,
                "subject": "mathe",
                "topic": "rechengesetze",
                "difficulty": "mittel",
                "points": 10,
                "question": "Mia kauft 3 Hefte zu je 2 € und 4 Stifte zu je 1 €. Welcher Term passt?",
                "answers": [
                    "3 · 2 + 4 · 1",
                    "3 + 2 · 4 + 1",
                    "(3 + 2) · (4 + 1)",
                    "3 · (2 + 4) · 1"
                ],
                "correct": 0,
                "explanation": "Hefte kosten 3 · 2 €, Stifte 4 · 1 €. Wegen Punkt vor Strich brauchst du keine Klammer: 3 · 2 + 4 · 1 = 10 €.",
                "grafik": "<svg viewBox='0 0 320 80' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='14' y='14' width='26' height='34' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><line x1='19' y1='24' x2='35' y2='24' stroke='#38bdf8' stroke-width='1.2'/><rect x='48' y='14' width='26' height='34' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><line x1='53' y1='24' x2='69' y2='24' stroke='#38bdf8' stroke-width='1.2'/><rect x='82' y='14' width='26' height='34' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='1.5'/><line x1='87' y1='24' x2='103' y2='24' stroke='#38bdf8' stroke-width='1.2'/><text x='62' y='70' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>je 2 €</text><rect x='185' y='10' width='8' height='34' rx='2' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><polygon points='185,44 193,44 189,52' fill='#f59e0b'/><rect x='219' y='10' width='8' height='34' rx='2' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><polygon points='219,44 227,44 223,52' fill='#f59e0b'/><rect x='253' y='10' width='8' height='34' rx='2' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><polygon points='253,44 261,44 257,52' fill='#f59e0b'/><rect x='287' y='10' width='8' height='34' rx='2' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><polygon points='287,44 295,44 291,52' fill='#f59e0b'/><text x='243' y='70' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>je 1 €</text></svg>"
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
