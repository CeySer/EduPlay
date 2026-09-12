// Schriftliche Rechenverfahren - Klasse 3 Mathe
(function () {
    const extraKurse = [{"id": "schriftlich_k3", "title": "Schriftliche Rechenverfahren", "icon": "✏️", "grade": 3, "subject": "mathe", "beschreibung": "Schriftliche Addition und Subtraktion: Zahlen stellenrichtig untereinander schreiben, mit Übertrag und Entbündeln rechnen."}];
    const extraLektionen = [{
    "id": "schriftlich_k3_l1",
    "kurs": "schriftlich_k3",
    "order": 1,
    "icon": "➕",
    "title": "Schriftliche Addition",
    "kurz": "Zwei- und dreistellige Zahlen schriftlich addieren, mit Übertrag",
    "erklaerung": {
        "intro": "Bei der <b>schriftlichen Addition</b> schreibst du beide Zahlen stellenrichtig untereinander: Einer unter Einer, Zehner unter Zehner, Hunderter unter Hunderter. Du rechnest spaltenweise von rechts (Einer) nach links. Ist eine Spaltensumme 10 oder mehr, schreibst du nur die letzte Ziffer und <b>trägst</b> den Rest als kleine 1 zur nächsten Spalte <b>über</b>.",
        "beispiele": [
            "234 + 58: Einer 4+8=12 → 2 schreiben, 1 übertragen. Zehner 3+5+1=9. Hunderter 2+0=2. Ergebnis: 292.<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>",
            "47 + 38: Einer 7+8=15 → 5 schreiben, 1 übertragen. Zehner 4+3+1=8. Ergebnis: 85.<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>",
            "256 + 187: Einer 6+7=13 → 3, Übertrag 1. Zehner 5+8+1=14 → 4, Übertrag 1. Hunderter 2+1+1=4. Ergebnis: 443.<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "schrk3l1_l1",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 23 + 45",
                "answers": [
                    "68",
                    "78",
                    "58",
                    "69"
                ],
                "correct": 0,
                "explanation": "23 + 45 = 68. In der Einerspalte ergibt 3 + 5 = 8, kein Übertrag nötig.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_l2",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 142 + 31",
                "answers": [
                    "173",
                    "183",
                    "163",
                    "174"
                ],
                "correct": 0,
                "explanation": "142 + 31 = 173. In der Einerspalte ergibt 2 + 1 = 3, kein Übertrag nötig.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_l3",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 214 + 52",
                "answers": [
                    "266",
                    "276",
                    "256",
                    "267"
                ],
                "correct": 0,
                "explanation": "214 + 52 = 266. In der Einerspalte ergibt 4 + 2 = 6, kein Übertrag nötig.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_l4",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 61 + 27",
                "answers": [
                    "88",
                    "98",
                    "78",
                    "89"
                ],
                "correct": 0,
                "explanation": "61 + 27 = 88. In der Einerspalte ergibt 1 + 7 = 8, kein Übertrag nötig.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ],
        "mittel": [
            {
                "id": "schrk3l1_m1",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 47 + 38",
                "answers": [
                    "85",
                    "95",
                    "75",
                    "86"
                ],
                "correct": 0,
                "explanation": "47 + 38 = 85. In der Einerspalte ergibt 7 + 8 = 15, du schreibst 5 und trägst 1 Zehner über.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_m2",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 234 + 58",
                "answers": [
                    "292",
                    "302",
                    "282",
                    "293"
                ],
                "correct": 0,
                "explanation": "234 + 58 = 292. In der Einerspalte ergibt 4 + 8 = 12, du schreibst 2 und trägst 1 Zehner über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_m3",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 156 + 27",
                "answers": [
                    "183",
                    "193",
                    "173",
                    "184"
                ],
                "correct": 0,
                "explanation": "156 + 27 = 183. In der Einerspalte ergibt 6 + 7 = 13, du schreibst 3 und trägst 1 Zehner über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_m4",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 129 + 64",
                "answers": [
                    "193",
                    "203",
                    "183",
                    "194"
                ],
                "correct": 0,
                "explanation": "129 + 64 = 193. In der Einerspalte ergibt 9 + 4 = 13, du schreibst 3 und trägst 1 Zehner über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ],
        "schwer": [
            {
                "id": "schrk3l1_s1",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 256 + 187",
                "answers": [
                    "443",
                    "453",
                    "433",
                    "444"
                ],
                "correct": 0,
                "explanation": "256 + 187 = 443. In der Einerspalte ergibt 6 + 7 = 13, du schreibst 3 und trägst 1 Zehner über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_s2",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 348 + 276",
                "answers": [
                    "624",
                    "634",
                    "614",
                    "625"
                ],
                "correct": 0,
                "explanation": "348 + 276 = 624. In der Einerspalte ergibt 8 + 6 = 14, du schreibst 4 und trägst 1 Zehner über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_s3",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 495 + 368",
                "answers": [
                    "863",
                    "873",
                    "853",
                    "864"
                ],
                "correct": 0,
                "explanation": "495 + 368 = 863. In der Einerspalte ergibt 5 + 8 = 13, du schreibst 3 und trägst 1 Zehner über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l1_s4",
                "category": "kurs_schriftlich_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_add",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 587 + 346",
                "answers": [
                    "933",
                    "943",
                    "923",
                    "934"
                ],
                "correct": 0,
                "explanation": "587 + 346 = 933. In der Einerspalte ergibt 7 + 6 = 13, du schreibst 3 und trägst 1 Zehner über.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "schrk3l1_t1",
            "category": "kurs_schriftlich_k3_l1",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_add",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 245 + 137",
            "answers": [
                "382",
                "392",
                "372",
                "383"
            ],
            "correct": 0,
            "explanation": "245 + 137 = 382. In der Einerspalte ergibt 5 + 7 = 12, du schreibst 2 und trägst 1 Zehner über.",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l1_t2",
            "category": "kurs_schriftlich_k3_l1",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_add",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 328 + 295",
            "answers": [
                "623",
                "633",
                "613",
                "624"
            ],
            "correct": 0,
            "explanation": "328 + 295 = 623. In der Einerspalte ergibt 8 + 5 = 13, du schreibst 3 und trägst 1 Zehner über.",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l1_t3",
            "category": "kurs_schriftlich_k3_l1",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_add",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 54 + 23",
            "answers": [
                "77",
                "87",
                "67",
                "78"
            ],
            "correct": 0,
            "explanation": "54 + 23 = 77. In der Einerspalte ergibt 4 + 3 = 7, kein Übertrag nötig.",
            "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l1_t4",
            "category": "kurs_schriftlich_k3_l1",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_add",
            "difficulty": "mittel",
            "points": 10,
            "question": "Ben sammelt 236 Sticker, Mia sammelt 158 Sticker. Wie viele haben sie zusammen?",
            "answers": [
                "394",
                "404",
                "384",
                "395"
            ],
            "correct": 0,
            "explanation": "236 + 158 = 394. In der Einerspalte ergibt 6 + 8 = 14, du schreibst 4 und trägst 1 Zehner über.",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l1_t5",
            "category": "kurs_schriftlich_k3_l1",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_add",
            "difficulty": "mittel",
            "points": 10,
            "question": "Bei 47 + 38 rechnest du zuerst 7 + 8 = 15. Was machst du damit?",
            "answers": [
                "5 schreiben, 1 übertragen",
                "15 einfach hinschreiben",
                "1 schreiben, 5 übertragen",
                "Die 15 ignorieren"
            ],
            "correct": 0,
            "explanation": "Bei einer Summe über 9 schreibst du nur die letzte Ziffer in die Spalte und trägst den Rest zur nächsten Spalte über: 15 → 5 schreiben, 1 übertragen.",
            "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l1_t6",
            "category": "kurs_schriftlich_k3_l1",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_add",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 189 + 246",
            "answers": [
                "435",
                "445",
                "425",
                "436"
            ],
            "correct": 0,
            "explanation": "189 + 246 = 435. In der Einerspalte ergibt 9 + 6 = 15, du schreibst 5 und trägst 1 Zehner über.",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>+</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        }
    ],
    "bestehenAb": 0.8
}, {
    "id": "schriftlich_k3_l2",
    "kurs": "schriftlich_k3",
    "order": 2,
    "icon": "➖",
    "title": "Schriftliche Subtraktion",
    "kurz": "Zwei- und dreistellige Zahlen schriftlich subtrahieren, mit Entbündeln",
    "erklaerung": {
        "intro": "Bei der <b>schriftlichen Subtraktion</b> schreibst du die kleinere Zahl stellenrichtig unter die größere. Du rechnest von rechts (Einer) nach links. Reicht eine Ziffer oben nicht aus, <b>leihst</b> du dir einen Zehner von der Nachbarspalte (auch <b>Entbündeln</b> genannt) – dort wird dann vor dem Rechnen 1 abgezogen.",
        "beispiele": [
            "62 − 38: Einer 2 reicht nicht für −8, leihe einen Zehner: 12−8=4. Zehner 6−1−3=2. Ergebnis: 24.<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>",
            "163 − 48: Einer 3 reicht nicht für −8, leihe: 13−8=5. Zehner 6−1−4=1. Hunderter 1. Ergebnis: 115.<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>",
            "403 − 178: Einer 3 reicht nicht, leihe: 13−8=5. Zehner 0 reicht auch nicht, leihe: 9−7=2. Hunderter 4−1−1=2. Ergebnis: 225.<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "schrk3l2_l1",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 68 − 23",
                "answers": [
                    "45",
                    "55",
                    "35",
                    "46"
                ],
                "correct": 0,
                "explanation": "68 − 23 = 45. In der Einerspalte rechnest du 8 − 3, ohne zu leihen.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_l2",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 156 − 34",
                "answers": [
                    "122",
                    "132",
                    "112",
                    "123"
                ],
                "correct": 0,
                "explanation": "156 − 34 = 122. In der Einerspalte rechnest du 6 − 4, ohne zu leihen.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_l3",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 279 − 45",
                "answers": [
                    "234",
                    "244",
                    "224",
                    "235"
                ],
                "correct": 0,
                "explanation": "279 − 45 = 234. In der Einerspalte rechnest du 9 − 5, ohne zu leihen.",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_l4",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "leicht",
                "points": 10,
                "question": "Rechne schriftlich: 87 − 52",
                "answers": [
                    "35",
                    "45",
                    "25",
                    "36"
                ],
                "correct": 0,
                "explanation": "87 − 52 = 35. In der Einerspalte rechnest du 7 − 2, ohne zu leihen.",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ],
        "mittel": [
            {
                "id": "schrk3l2_m1",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 62 − 38",
                "answers": [
                    "24",
                    "34",
                    "14",
                    "25"
                ],
                "correct": 0,
                "explanation": "62 − 38 = 24. In der Einerspalte reicht 2 nicht für −8, du leihst dir einen Zehner (Entbündeln).",
                "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_m2",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 163 − 48",
                "answers": [
                    "115",
                    "125",
                    "105",
                    "116"
                ],
                "correct": 0,
                "explanation": "163 − 48 = 115. In der Einerspalte reicht 3 nicht für −8, du leihst dir einen Zehner (Entbündeln).",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_m3",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 246 − 19",
                "answers": [
                    "227",
                    "237",
                    "217",
                    "228"
                ],
                "correct": 0,
                "explanation": "246 − 19 = 227. In der Einerspalte reicht 6 nicht für −9, du leihst dir einen Zehner (Entbündeln).",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_m4",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "mittel",
                "points": 10,
                "question": "Rechne schriftlich: 352 − 27",
                "answers": [
                    "325",
                    "335",
                    "315",
                    "326"
                ],
                "correct": 0,
                "explanation": "352 − 27 = 325. In der Einerspalte reicht 2 nicht für −7, du leihst dir einen Zehner (Entbündeln).",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ],
        "schwer": [
            {
                "id": "schrk3l2_s1",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 403 − 178",
                "answers": [
                    "225",
                    "235",
                    "215",
                    "226"
                ],
                "correct": 0,
                "explanation": "403 − 178 = 225. In der Einerspalte reicht 3 nicht für −8, du leihst dir einen Zehner (Entbündeln).",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_s2",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 512 − 378",
                "answers": [
                    "134",
                    "144",
                    "124",
                    "135"
                ],
                "correct": 0,
                "explanation": "512 − 378 = 134. In der Einerspalte reicht 2 nicht für −8, du leihst dir einen Zehner (Entbündeln).",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_s3",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 700 − 256",
                "answers": [
                    "444",
                    "454",
                    "434",
                    "445"
                ],
                "correct": 0,
                "explanation": "700 − 256 = 444. In der Einerspalte reicht 0 nicht für −6, du leihst dir einen Zehner (Entbündeln).",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            },
            {
                "id": "schrk3l2_s4",
                "category": "kurs_schriftlich_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "schriftlich_sub",
                "difficulty": "schwer",
                "points": 10,
                "question": "Rechne schriftlich: 605 − 347",
                "answers": [
                    "258",
                    "268",
                    "248",
                    "259"
                ],
                "correct": 0,
                "explanation": "605 − 347 = 258. In der Einerspalte reicht 5 nicht für −7, du leihst dir einen Zehner (Entbündeln).",
                "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "schrk3l2_t1",
            "category": "kurs_schriftlich_k3_l2",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_sub",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 94 − 37",
            "answers": [
                "57",
                "67",
                "47",
                "58"
            ],
            "correct": 0,
            "explanation": "94 − 37 = 57. In der Einerspalte reicht 4 nicht für −7, du leihst dir einen Zehner (Entbündeln).",
            "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l2_t2",
            "category": "kurs_schriftlich_k3_l2",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_sub",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 326 − 159",
            "answers": [
                "167",
                "177",
                "157",
                "168"
            ],
            "correct": 0,
            "explanation": "326 − 159 = 167. In der Einerspalte reicht 6 nicht für −9, du leihst dir einen Zehner (Entbündeln).",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l2_t3",
            "category": "kurs_schriftlich_k3_l2",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_sub",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 800 − 435",
            "answers": [
                "365",
                "375",
                "355",
                "366"
            ],
            "correct": 0,
            "explanation": "800 − 435 = 365. In der Einerspalte reicht 0 nicht für −5, du leihst dir einen Zehner (Entbündeln).",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l2_t4",
            "category": "kurs_schriftlich_k3_l2",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_sub",
            "difficulty": "mittel",
            "points": 10,
            "question": "Eine Schulbibliothek hat 452 Bücher. 168 werden ausgeliehen. Wie viele Bücher sind noch da?",
            "answers": [
                "284",
                "294",
                "274",
                "285"
            ],
            "correct": 0,
            "explanation": "452 − 168 = 284. In der Einerspalte reicht 2 nicht für −8, du leihst dir einen Zehner (Entbündeln).",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l2_t5",
            "category": "kurs_schriftlich_k3_l2",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_sub",
            "difficulty": "mittel",
            "points": 10,
            "question": "Bei 62 − 38 reicht die 2 in der Einerspalte nicht für −8. Was machst du?",
            "answers": [
                "Einen Zehner leihen: 12 − 8",
                "Einfach 8 − 2 rechnen",
                "Die Aufgabe geht nicht",
                "Eine 0 ergänzen"
            ],
            "correct": 0,
            "explanation": "Reicht eine Ziffer nicht aus, leihst du dir einen Zehner von der nächsten Spalte: aus der 2 wird eine 12, dafür hat die Zehnerspalte einen weniger.",
            "grafik": "<svg viewBox='0 0 109.0 94.0' style='width:100%;max-width:109px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='30.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='47.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8</text><line x1='2' y1='86.0' x2='107.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
        },
        {
            "id": "schrk3l2_t6",
            "category": "kurs_schriftlich_k3_l2",
            "area": "schule",
            "grade": 3,
            "subject": "mathe",
            "topic": "schriftlich_sub",
            "difficulty": "mittel",
            "points": 10,
            "question": "Rechne schriftlich: 143 − 76",
            "answers": [
                "67",
                "77",
                "57",
                "68"
            ],
            "correct": 0,
            "explanation": "143 − 76 = 67. In der Einerspalte reicht 3 nicht für −6, du leihst dir einen Zehner (Entbündeln).",
            "grafik": "<svg viewBox='0 0 146.0 94.0' style='width:100%;max-width:146px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='47.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>H</text><text x='84.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Z</text><text x='121.0' y='15.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>E</text><rect x='30.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='47.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1</text><rect x='67.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='84.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4</text><rect x='104.0' y='18.0' width='34.0' height='32.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2'/><text x='121.0' y='35.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='15.0' y='70.0' text-anchor='middle' font-size='24' font-weight='800' font-family='sans-serif' fill='#94a3b8'>−</text><rect x='67.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='84.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7</text><rect x='104.0' y='52.0' width='34.0' height='32.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2'/><text x='121.0' y='69.0' text-anchor='middle' dominant-baseline='middle' font-size='19' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6</text><line x1='2' y1='86.0' x2='144.0' y2='86.0' stroke='#e5e7eb' stroke-width='2.5' stroke-linecap='round'/></svg>"
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
