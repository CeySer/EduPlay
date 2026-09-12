// Schriftliches Rechnen - Klasse 4 Mathe
(function () {
    const extraKurse = [{"id": "schriftlich_k4", "title": "Schriftliches Rechnen", "icon": "📝", "grade": 4, "subject": "mathe", "beschreibung": "Schriftliche Multiplikation und Division: mehrstellige Zahlen mal bzw. durch eine einstellige Zahl rechnen, mit Übertrag und Rest."}];
    const extraLektionen = [{
    "id": "schriftlich_k4_l1",
    "kurs": "schriftlich_k4",
    "order": 1,
    "icon": "✖️",
    "title": "Schriftliche Multiplikation",
    "kurz": "Mehrstellige Zahl mal einstellige Zahl schriftlich rechnen",
    "erklaerung": {
        "intro": "Bei der <b>schriftlichen Multiplikation</b> mit einer einstelligen Zahl schreibst du beide Zahlen mit dem Malzeichen dazwischen. Du rechnest bei den <b>Einern</b> los: Einer-Ziffer mal die einstellige Zahl. Ist das Ergebnis 10 oder mehr, schreibst du die letzte Ziffer und <b>trägst</b> den Rest zur nächsten Spalte über – genau wie bei der Addition. Danach die Zehner, dann die Hunderter.",
        "beispiele": [
            "24 × 3: Einer 4×3=12 → 2 schreiben, 1 übertragen. Zehner 2×3+1=7. Ergebnis: 72.<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>",
            "56 × 3: Einer 6×3=18 → 8 schreiben, 1 übertragen. Zehner 5×3+1=16 → 6, Übertrag 1. Hunderter 1. Ergebnis: 168.<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>",
            "236 × 4: Einer 6×4=24 → 4, Übertrag 2. Zehner 3×4+2=14 → 4, Übertrag 1. Hunderter 2×4+1=9. Ergebnis: 944.<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "schrk4l1_l1",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 12 × 3",
                "answers": [
                    "36",
                    "46",
                    "26",
                    "37"
                ],
                "correct": 0,
                "explanation": "12 × 3 = 36. Du beginnst bei den Einern: 2 × 3 = 6, kein Übertrag nötig.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_l2",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 21 × 4",
                "answers": [
                    "84",
                    "94",
                    "74",
                    "85"
                ],
                "correct": 0,
                "explanation": "21 × 4 = 84. Du beginnst bei den Einern: 1 × 4 = 4, kein Übertrag nötig.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_l3",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 32 × 3",
                "answers": [
                    "96",
                    "106",
                    "86",
                    "97"
                ],
                "correct": 0,
                "explanation": "32 × 3 = 96. Du beginnst bei den Einern: 2 × 3 = 6, kein Übertrag nötig.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_l4",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 41 × 2",
                "answers": [
                    "82",
                    "92",
                    "72",
                    "83"
                ],
                "correct": 0,
                "explanation": "41 × 2 = 82. Du beginnst bei den Einern: 1 × 2 = 2, kein Übertrag nötig.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ],
        "mittel": [
            {
                "id": "schrk4l1_m1",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 24 × 3",
                "answers": [
                    "72",
                    "82",
                    "62",
                    "73"
                ],
                "correct": 0,
                "explanation": "24 × 3 = 72. Du beginnst bei den Einern: 4 × 3 = 12, du schreibst 2 und trägst 1 über.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_m2",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 27 × 3",
                "answers": [
                    "81",
                    "91",
                    "71",
                    "82"
                ],
                "correct": 0,
                "explanation": "27 × 3 = 81. Du beginnst bei den Einern: 7 × 3 = 21, du schreibst 1 und trägst 2 über.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_m3",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 34 × 4",
                "answers": [
                    "136",
                    "146",
                    "126",
                    "137"
                ],
                "correct": 0,
                "explanation": "34 × 4 = 136. Du beginnst bei den Einern: 4 × 4 = 16, du schreibst 6 und trägst 1 über.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_m4",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 56 × 3",
                "answers": [
                    "168",
                    "178",
                    "158",
                    "169"
                ],
                "correct": 0,
                "explanation": "56 × 3 = 168. Du beginnst bei den Einern: 6 × 3 = 18, du schreibst 8 und trägst 1 über.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ],
        "schwer": [
            {
                "id": "schrk4l1_s1",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 236 × 4",
                "answers": [
                    "944",
                    "954",
                    "934",
                    "945"
                ],
                "correct": 0,
                "explanation": "236 × 4 = 944. Du beginnst bei den Einern: 6 × 4 = 24, du schreibst 4 und trägst 2 über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_s2",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 358 × 3",
                "answers": [
                    "1074",
                    "1084",
                    "1064",
                    "1075"
                ],
                "correct": 0,
                "explanation": "358 × 3 = 1074. Du beginnst bei den Einern: 8 × 3 = 24, du schreibst 4 und trägst 2 über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_s3",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 427 × 6",
                "answers": [
                    "2562",
                    "2572",
                    "2552",
                    "2563"
                ],
                "correct": 0,
                "explanation": "427 × 6 = 2562. Du beginnst bei den Einern: 7 × 6 = 42, du schreibst 2 und trägst 4 über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk4l1_s4",
                "category": "kurs_schriftlich_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_mult",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 589 × 5",
                "answers": [
                    "2945",
                    "2955",
                    "2935",
                    "2946"
                ],
                "correct": 0,
                "explanation": "589 × 5 = 2945. Du beginnst bei den Einern: 9 × 5 = 45, du schreibst 5 und trägst 4 über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "schrk4l1_t1",
            "category": "kurs_schriftlich_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_mult",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 45 × 3",
            "answers": [
                "135",
                "145",
                "125",
                "136"
            ],
            "correct": 0,
            "explanation": "45 × 3 = 135. Du beginnst bei den Einern: 5 × 3 = 15, du schreibst 5 und trägst 1 über.",
            "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk4l1_t2",
            "category": "kurs_schriftlich_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_mult",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 63 × 4",
            "answers": [
                "252",
                "262",
                "242",
                "253"
            ],
            "correct": 0,
            "explanation": "63 × 4 = 252. Du beginnst bei den Einern: 3 × 4 = 12, du schreibst 2 und trägst 1 über.",
            "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk4l1_t3",
            "category": "kurs_schriftlich_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_mult",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 128 × 3",
            "answers": [
                "384",
                "394",
                "374",
                "385"
            ],
            "correct": 0,
            "explanation": "128 × 3 = 384. Du beginnst bei den Einern: 8 × 3 = 24, du schreibst 4 und trägst 2 über.",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk4l1_t4",
            "category": "kurs_schriftlich_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_mult",
            "difficulty": "mittel",
            "points": 10,
            "question": "Eine Kiste hat 124 Äpfel. Wie viele Äpfel sind in 3 Kisten?",
            "answers": [
                "372",
                "382",
                "362",
                "373"
            ],
            "correct": 0,
            "explanation": "124 × 3 = 372. Du beginnst bei den Einern: 4 × 3 = 12, du schreibst 2 und trägst 1 über.",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk4l1_t5",
            "category": "kurs_schriftlich_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_mult",
            "difficulty": "mittel",
            "points": 10,
            "question": "Bei 24 × 3 rechnest du zuerst die Einer: 4 × 3 = 12. Was machst du?",
            "answers": [
                "2 schreiben, 1 übertragen",
                "12 einfach hinschreiben",
                "1 schreiben, 2 übertragen",
                "Die 12 ignorieren"
            ],
            "correct": 0,
            "explanation": "Ist das Teilergebnis der Einerspalte 10 oder mehr, schreibst du nur die letzte Ziffer und trägst den Rest zur Zehnerspalte über: 12 → 2 schreiben, 1 übertragen.",
            "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk4l1_t6",
            "category": "kurs_schriftlich_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_mult",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 342 × 2",
            "answers": [
                "684",
                "694",
                "674",
                "685"
            ],
            "correct": 0,
            "explanation": "342 × 2 = 684. Du beginnst bei den Einern: 2 × 2 = 4, kein Übertrag nötig.",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        }
    ],
    "bestehenAb": 0.8
}, {
    "id": "schriftlich_k4_l2",
    "kurs": "schriftlich_k4",
    "order": 2,
    "icon": "➗",
    "title": "Schriftliche Division",
    "kurz": "Mehrstellige Zahl durch einstellige Zahl schriftlich teilen, mit Rest",
    "erklaerung": {
        "intro": "Bei der <b>schriftlichen Division</b> durch eine einstellige Zahl beginnst du <b>links</b> mit der höchsten Stelle. Du schaust, wie oft die Teiler-Zahl hineinpasst, schreibst diese Zahl als Ergebnis-Ziffer und rechnest den Rest zur nächsten Ziffer weiter. Bleibt am Ende etwas übrig, ist das der <b>Rest</b> (z. B. „23 R 3“).",
        "beispiele": [
            "84 : 4: 4 passt 2-mal in die 8 (Zehner), Rest 0. 4 passt 1-mal in die 4 (Einer). Ergebnis: 21.<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>",
            "936 : 4: 4 passt 2-mal in die 9, Rest 1. Die 1 wird mit der nächsten Ziffer 3 zu 13: 4 passt 3-mal, Rest 1. Die 1 wird mit der 6 zu 16: 4 passt 4-mal. Ergebnis: 234.<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>",
            "95 : 4: 4 passt 2-mal in die 9, Rest 1. Die 1 wird mit der 5 zu 15: 4 passt 3-mal, Rest 3. Ergebnis: 23 Rest 3.<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "schrk4l2_l1",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 84 : 4",
                "answers": [
                    "21",
                    "31",
                    "11",
                    "22"
                ],
                "correct": 0,
                "explanation": "84 : 4 = 21. Du beginnst links: 4 passt 2mal in die erste Ziffer 8.",
                "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
            },
            {
                "id": "schrk4l2_l2",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 96 : 3",
                "answers": [
                    "32",
                    "42",
                    "22",
                    "33"
                ],
                "correct": 0,
                "explanation": "96 : 3 = 32. Du beginnst links: 3 passt 3mal in die erste Ziffer 9.",
                "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text></svg>"
            },
            {
                "id": "schrk4l2_l3",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 48 : 2",
                "answers": [
                    "24",
                    "34",
                    "14",
                    "25"
                ],
                "correct": 0,
                "explanation": "48 : 2 = 24. Du beginnst links: 2 passt 2mal in die erste Ziffer 4.",
                "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text></svg>"
            },
            {
                "id": "schrk4l2_l4",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 55 : 5",
                "answers": [
                    "11",
                    "21",
                    "1",
                    "12"
                ],
                "correct": 0,
                "explanation": "55 : 5 = 11. Du beginnst links: 5 passt 1mal in die erste Ziffer 5.",
                "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text></svg>"
            }
        ],
        "mittel": [
            {
                "id": "schrk4l2_m1",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 936 : 4",
                "answers": [
                    "234",
                    "244",
                    "224",
                    "235"
                ],
                "correct": 0,
                "explanation": "936 : 4 = 234. Du beginnst links: 4 passt 2mal in die erste Ziffer 9.",
                "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
            },
            {
                "id": "schrk4l2_m2",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 848 : 4",
                "answers": [
                    "212",
                    "222",
                    "202",
                    "213"
                ],
                "correct": 0,
                "explanation": "848 : 4 = 212. Du beginnst links: 4 passt 2mal in die erste Ziffer 8.",
                "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
            },
            {
                "id": "schrk4l2_m3",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 693 : 3",
                "answers": [
                    "231",
                    "241",
                    "221",
                    "232"
                ],
                "correct": 0,
                "explanation": "693 : 3 = 231. Du beginnst links: 3 passt 2mal in die erste Ziffer 6.",
                "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text></svg>"
            },
            {
                "id": "schrk4l2_m4",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 936 : 6",
                "answers": [
                    "156",
                    "166",
                    "146",
                    "157"
                ],
                "correct": 0,
                "explanation": "936 : 6 = 156. Du beginnst links: 6 passt 1mal in die erste Ziffer 9.",
                "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text></svg>"
            }
        ],
        "schwer": [
            {
                "id": "schrk4l2_s1",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 95 : 4 (mit Rest)",
                "answers": [
                    "23 R 3",
                    "24 R 3",
                    "22 R 3",
                    "23 R 4"
                ],
                "correct": 0,
                "explanation": "95 : 4 = 23 Rest 3. Du beginnst links: 4 passt 2mal in die erste Ziffer 9.",
                "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
            },
            {
                "id": "schrk4l2_s2",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 77 : 5 (mit Rest)",
                "answers": [
                    "15 R 2",
                    "16 R 2",
                    "14 R 2",
                    "15 R 3"
                ],
                "correct": 0,
                "explanation": "77 : 5 = 15 Rest 2. Du beginnst links: 5 passt 1mal in die erste Ziffer 7.",
                "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text></svg>"
            },
            {
                "id": "schrk4l2_s3",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 100 : 6 (mit Rest)",
                "answers": [
                    "16 R 4",
                    "17 R 4",
                    "15 R 4",
                    "16 R 5"
                ],
                "correct": 0,
                "explanation": "100 : 6 = 16 Rest 4. Du beginnst links: 6 passt nicht in die erste Ziffer 1, du nimmst die ersten beiden Ziffern zusammen.",
                "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text></svg>"
            },
            {
                "id": "schrk4l2_s4",
                "category": "kurs_schriftlich_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "schriftlich_div",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 250 : 8 (mit Rest)",
                "answers": [
                    "31 R 2",
                    "32 R 2",
                    "30 R 2",
                    "31 R 3"
                ],
                "correct": 0,
                "explanation": "250 : 8 = 31 Rest 2. Du beginnst links: 8 passt nicht in die erste Ziffer 2, du nimmst die ersten beiden Ziffern zusammen.",
                "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "schrk4l2_t1",
            "category": "kurs_schriftlich_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_div",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 72 : 6",
            "answers": [
                "12",
                "22",
                "2",
                "13"
            ],
            "correct": 0,
            "explanation": "72 : 6 = 12. Du beginnst links: 6 passt 1mal in die erste Ziffer 7.",
            "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text></svg>"
        },
        {
            "id": "schrk4l2_t2",
            "category": "kurs_schriftlich_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_div",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 91 : 7",
            "answers": [
                "13",
                "23",
                "3",
                "14"
            ],
            "correct": 0,
            "explanation": "91 : 7 = 13. Du beginnst links: 7 passt 1mal in die erste Ziffer 9.",
            "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text></svg>"
        },
        {
            "id": "schrk4l2_t3",
            "category": "kurs_schriftlich_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_div",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 500 : 4",
            "answers": [
                "125",
                "135",
                "115",
                "126"
            ],
            "correct": 0,
            "explanation": "500 : 4 = 125. Du beginnst links: 4 passt 1mal in die erste Ziffer 5.",
            "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
        },
        {
            "id": "schrk4l2_t4",
            "category": "kurs_schriftlich_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_div",
            "difficulty": "mittel",
            "points": 10,
            "question": "312 Bonbons werden gleichmäßig auf 4 Kinder verteilt. Wie viele bekommt jedes Kind?",
            "answers": [
                "78",
                "88",
                "68",
                "79"
            ],
            "correct": 0,
            "explanation": "312 : 4 = 78. Du beginnst links: 4 passt nicht in die erste Ziffer 3, du nimmst die ersten beiden Ziffern zusammen.",
            "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
        },
        {
            "id": "schrk4l2_t5",
            "category": "kurs_schriftlich_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_div",
            "difficulty": "mittel",
            "points": 10,
            "question": "Bei 936 : 4 schaust du zuerst, wie oft die 4 in die 9 passt. Wie oft passt sie?",
            "answers": [
                "2-mal",
                "4-mal",
                "9-mal",
                "3-mal"
            ],
            "correct": 0,
            "explanation": "4 passt 2-mal in die 9 (2 × 4 = 8), denn 3 × 4 = 12 wäre schon zu viel.",
            "grafik": "<svg viewBox='0 0 184.0 58.0' style='width:100%;max-width:184px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='91.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='74.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='91.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='128.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='142.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='159.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
        },
        {
            "id": "schrk4l2_t6",
            "category": "kurs_schriftlich_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "schriftlich_div",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 85 : 4 (mit Rest)",
            "answers": [
                "21 R 1",
                "22 R 1",
                "20 R 1",
                "21 R 2"
            ],
            "correct": 0,
            "explanation": "85 : 4 = 21 Rest 1. Du beginnst links: 4 passt 2mal in die erste Ziffer 8.",
            "grafik": "<svg viewBox='0 0 147.0 58.0' style='width:100%;max-width:147px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='17.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><rect x='0.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='17.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='54.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='37.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='54.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='91.0' y='43.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>:</text><rect x='105.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='122.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text></svg>"
        }
    ],
    "bestehenAb": 0.8
}];
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
})();
