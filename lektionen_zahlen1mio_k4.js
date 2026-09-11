// Zahlenraum bis 1 Million - Klasse 4 Mathe
(function () {
    const extraKurse = [{"id": "zahlen1mio_k4", "title": "Zahlenraum bis 1 Million", "icon": "🔢", "grade": 4, "subject": "mathe", "beschreibung": "Stellenwerte bis zur Million, Zahlenstrahl mit großen Schritten, Runden und Vergleichen großer Zahlen."}];
    const extraLektionen = [{
    "id": "zahlen1mio_k4_l1",
    "kurs": "zahlen1mio_k4",
    "order": 1,
    "icon": "🔢",
    "title": "Stellenwerte bis zur Million",
    "kurz": "Große Zahlen in Stellenwerte zerlegen",
    "erklaerung": {
        "intro": "Zahlen bis 1 Million haben mehr Stellen: <b>Hunderttausender (HT)</b>, <b>Zehntausender (ZT)</b>, <b>Tausender (T)</b>, <b>Hunderter (H)</b>, <b>Zehner (Z)</b> und <b>Einer (E)</b>. Jede Stelle rechts von einer anderen ist zehnmal kleiner. Die Stellenwerttafel zeigt jede Ziffer in ihrer eigenen Spalte.",
        "beispiele": [
            "Die Zahl 375200 in der Stellenwerttafel.<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>",
            "Die Ziffer 6 an der Hunderttausender-Stelle bedeutet 600000.<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>",
            "1 Million ist eine 1 mit sechs Nullen: 1000000.<svg viewBox='0 0 342.0 96.0' style='width:100%;max-width:342px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>M</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='315.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='294.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='315.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "zahlen1mio_k4l1_l1",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl zeigt die Stellenwerttafel?",
                "answers": [
                    "24050",
                    "20450",
                    "42500",
                    "24500"
                ],
                "correct": 3,
                "explanation": "Von links nach rechts gelesen zeigt die Tafel 24500.",
                "grafik": "<svg viewBox='0 0 246.0 96.0' style='width:100%;max-width:246px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_l2",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl zeigt die Stellenwerttafel?",
                "answers": [
                    "308000",
                    "380000",
                    "300800",
                    "30800"
                ],
                "correct": 0,
                "explanation": "Von links nach rechts gelesen zeigt die Tafel 308000.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_l3",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl zeigt die Stellenwerttafel?",
                "answers": [
                    "691000",
                    "619000",
                    "961000",
                    "916000"
                ],
                "correct": 0,
                "explanation": "Von links nach rechts gelesen zeigt die Tafel 691000.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_l4",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie viele Ziffern hat die Zahl, die die Tafel zeigt?",
                "answers": [
                    "4",
                    "7",
                    "5",
                    "6"
                ],
                "correct": 3,
                "explanation": "Die Tafel zeigt 6 Kästchen, also hat die Zahl 6 Ziffern: 503200.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            }
        ],
        "mittel": [
            {
                "id": "zahlen1mio_k4l1_m1",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Ziffer steht an der Stelle der Zehntausender?",
                "answers": [
                    "6",
                    "3",
                    "4",
                    "7"
                ],
                "correct": 3,
                "explanation": "Die orange markierte Stelle ist die Zehntausender-Stelle, dort steht die 7: 473600.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_m2",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Ziffer steht an der Stelle der Hunderttausender?",
                "answers": [
                    "2",
                    "8",
                    "5",
                    "6"
                ],
                "correct": 3,
                "explanation": "Die orange markierte Stelle ist die Hunderttausender-Stelle, dort steht die 6: 682950.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_m3",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Ziffer steht an der Stelle der Tausender?",
                "answers": [
                    "1",
                    "5",
                    "8",
                    "3"
                ],
                "correct": 3,
                "explanation": "Die orange markierte Stelle ist die Tausender-Stelle, dort steht die 3: 253180.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_m4",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Ziffer steht an der Stelle der Einer?",
                "answers": [
                    "4",
                    "9",
                    "0",
                    "7"
                ],
                "correct": 3,
                "explanation": "Die orange markierte Stelle ist die Einer-Stelle, dort steht die 7: 340407.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>7</text></svg>"
            }
        ],
        "schwer": [
            {
                "id": "zahlen1mio_k4l1_s1",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "schwer",
                "points": 10,
                "question": "Was bedeutet die markierte Ziffer 7 in der Zahl 572400?",
                "answers": [
                    "7 Tausender = 7000",
                    "7 Millionen = 7000000",
                    "7 Hunderttausender = 700000",
                    "7 Zehntausender = 70000"
                ],
                "correct": 3,
                "explanation": "Die 7 steht an der Zehntausender-Stelle, sie bedeutet also 7 Zehntausender = 70000.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_s2",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "schwer",
                "points": 10,
                "question": "Was bedeutet die markierte Ziffer 4 in der Zahl 486200?",
                "answers": [
                    "4 Tausender = 4000",
                    "4 Millionen = 4000000",
                    "4 Zehntausender = 40000",
                    "4 Hunderttausender = 400000"
                ],
                "correct": 3,
                "explanation": "Die 4 steht an der Hunderttausender-Stelle, sie bedeutet also 4 Hunderttausender = 400000.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_s3",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie zerlegt man 706040 in Stellenwerte?",
                "answers": [
                    "70000 + 6000 + 400",
                    "7000 + 60000 + 40",
                    "700000 + 6000 + 40",
                    "70000 + 600 + 40"
                ],
                "correct": 2,
                "explanation": "706040 = 7 Hunderttausender + 0 Zehntausender + 6 Tausender + 0 Hunderter + 4 Zehner + 0 Einer = 700000 + 6000 + 40.",
                "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>7</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l1_s4",
                "category": "kurs_zahlen1mio_k4_l1",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "schwer",
                "points": 10,
                "question": "Die Zahl 1000000 hat an welcher Stelle eine 1?",
                "answers": [
                    "Hunderttausender",
                    "Zehntausender",
                    "Hunderter",
                    "Millionen"
                ],
                "correct": 3,
                "explanation": "1000000 besteht aus 1 Million und sonst nur Nullen – die 1 steht an der Millionen-Stelle.",
                "grafik": "<svg viewBox='0 0 342.0 96.0' style='width:100%;max-width:342px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>M</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='315.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='294.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='315.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "zahlen1mio_k4l1_t1",
            "category": "kurs_zahlen1mio_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl zeigt die Stellenwerttafel?",
            "answers": [
                "150200",
                "125000",
                "102500",
                "120500"
            ],
            "correct": 3,
            "explanation": "Von links nach rechts gelesen zeigt die Tafel 120500.",
            "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l1_t2",
            "category": "kurs_zahlen1mio_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl zeigt die Stellenwerttafel?",
            "answers": [
                "940300",
                "934000",
                "903400",
                "930400"
            ],
            "correct": 3,
            "explanation": "Von links nach rechts gelesen zeigt die Tafel 930400.",
            "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l1_t3",
            "category": "kurs_zahlen1mio_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Ziffer steht an der Stelle der Hunderter?",
            "answers": [
                "2",
                "9",
                "6",
                "5"
            ],
            "correct": 3,
            "explanation": "Die orange markierte Stelle ist die Hunderter-Stelle, dort steht die 5: 629530.",
            "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>6</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l1_t4",
            "category": "kurs_zahlen1mio_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Ziffer steht an der Stelle der Zehntausender?",
            "answers": [
                "3",
                "8",
                "1",
                "4"
            ],
            "correct": 3,
            "explanation": "Die orange markierte Stelle ist die Zehntausender-Stelle, dort steht die 4: 341800.",
            "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>1</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>8</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l1_t5",
            "category": "kurs_zahlen1mio_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was bedeutet die markierte Ziffer 9 in der Zahl 293500?",
            "answers": [
                "9 Tausender = 9000",
                "9 Millionen = 9000000",
                "9 Hunderttausender = 900000",
                "9 Zehntausender = 90000"
            ],
            "correct": 3,
            "explanation": "Die 9 steht an der Zehntausender-Stelle, sie bedeutet also 9 Zehntausender = 90000.",
            "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>2</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(245,158,11,0.32)' stroke='#f59e0b' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>3</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l1_t6",
            "category": "kurs_zahlen1mio_k4_l1",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Wie zerlegt man 450900 in Stellenwerte?",
            "answers": [
                "45000 + 900",
                "400000 + 5000 + 900",
                "450000 + 900",
                "40000 + 5000 + 900"
            ],
            "correct": 2,
            "explanation": "450900 = 4 Hunderttausender + 5 Zehntausender + 0 Tausender + 9 Hunderter = 450000 + 900.",
            "grafik": "<svg viewBox='0 0 294.0 96.0' style='width:100%;max-width:294px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='27.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>HT</text><rect x='6.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='27.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>4</text><text x='75.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>ZT</text><rect x='54.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='75.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>5</text><text x='123.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>T</text><rect x='102.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='123.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='171.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>H</text><rect x='150.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='171.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>9</text><text x='219.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>Z</text><rect x='198.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='219.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text><text x='267.0' y='16' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#38bdf8'>E</text><rect x='246.0' y='22' width='42.0' height='42.0' rx='4' fill='rgba(56,189,248,0.28)' stroke='#38bdf8' stroke-width='2.5'/><text x='267.0' y='49.7' text-anchor='middle' font-size='21.0' font-weight='800' font-family='sans-serif' fill='#e5e7eb'>0</text></svg>"
        }
    ],
    "bestehenAb": 0.8
}, {
    "id": "zahlen1mio_k4_l2",
    "kurs": "zahlen1mio_k4",
    "order": 2,
    "icon": "📏",
    "title": "Zahlenstrahl, Runden & Vergleichen",
    "kurz": "Große Zahlen ablesen, runden und vergleichen",
    "erklaerung": {
        "intro": "Auf dem Zahlenstrahl bis 1 Million stehen die <b>Hunderttausenderzahlen</b> 100000, 200000 … 1000000 in gleichen Abständen. Beim <b>Runden</b> schaut man, welcher Wert näher liegt. Beim Vergleichen mit &lt;, &gt; und = schaut man zuerst auf die Hunderttausender, dann die Zehntausender und so weiter.",
        "beispiele": [
            "Die 500000 liegt genau in der Mitte des Zahlenstrahls.<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='102.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>200000</text><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='204.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>500000</text><circle cx='204.0' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>800000</text><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>",
            "240000 ist kleiner als 680000, denn 240000 steht weiter links: 240000 &lt; 680000.<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='115.6' y1='36' x2='115.6' y2='44' stroke='#38bdf8' stroke-width='2'/><text x='115.6' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#38bdf8'>240000</text><circle cx='115.6' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='265.2' y1='36' x2='265.2' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='265.2' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>680000</text><circle cx='265.2' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>",
            "436000 gerundet auf die nächsten Zehntausend: näher an 440000 als an 430000, also 440000.<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>420000</text><line x1='147.3' y1='32' x2='147.3' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='147.3' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>430000</text><line x1='215.3' y1='36' x2='215.3' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='215.3' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>436000</text><circle cx='215.3' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='260.7' y1='32' x2='260.7' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>450000</text></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "zahlen1mio_k4l2_l1",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "leicht",
                "points": 10,
                "question": "Auf welche Zahl zeigt der Kreis?",
                "answers": [
                    "400000",
                    "600000",
                    "300000",
                    "500000"
                ],
                "correct": 3,
                "explanation": "Der Kreis steht auf der 500000.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='102.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>200000</text><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='204.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>500000</text><circle cx='204.0' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>800000</text><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_l2",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl fehlt?",
                "answers": [
                    "500000",
                    "700000",
                    "800000",
                    "600000"
                ],
                "correct": 3,
                "explanation": "Die Hunderttausenderreihe zählt 400000, 500000, 600000, 700000 – es fehlt die 600000.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>300000</text><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='102.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>500000</text><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#fbbf24' stroke-width='2'/><text x='238.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#fbbf24'>?</text><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>700000</text><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>800000</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_l3",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl ist größer: 230000 oder 770000?",
                "answers": [
                    "230000",
                    "500000",
                    "300000",
                    "770000"
                ],
                "correct": 3,
                "explanation": "770000 steht weiter rechts auf dem Zahlenstrahl als 230000, also ist 770000 größer.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='112.2' y1='36' x2='112.2' y2='44' stroke='#38bdf8' stroke-width='2'/><text x='112.2' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#38bdf8'>230000</text><circle cx='112.2' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='238.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>600000</text><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='295.8' y1='36' x2='295.8' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='295.8' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>770000</text><circle cx='295.8' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_l4",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "leicht",
                "points": 10,
                "question": "Auf welche Zahl zeigt der Kreis?",
                "answers": [
                    "100000",
                    "300000",
                    "400000",
                    "200000"
                ],
                "correct": 3,
                "explanation": "Der Kreis steht auf der 200000.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='102.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>100000</text><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>200000</text><circle cx='170.0' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='238.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>300000</text><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>500000</text></svg>"
            }
        ],
        "mittel": [
            {
                "id": "zahlen1mio_k4l2_m1",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl fehlt in der Reihe 100000, 200000, __, 400000?",
                "answers": [
                    "250000",
                    "500000",
                    "350000",
                    "300000"
                ],
                "correct": 3,
                "explanation": "Die Hunderttausenderreihe zählt 100000, 200000, 300000, 400000 – es fehlt die 300000.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#fbbf24' stroke-width='2'/><text x='136.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#fbbf24'>?</text><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='238.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>600000</text><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>800000</text><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_m2",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "mittel",
                "points": 10,
                "question": "Runde 372000 auf die nächsten Zehntausend.",
                "answers": [
                    "380000",
                    "372000",
                    "360000",
                    "370000"
                ],
                "correct": 3,
                "explanation": "372000 liegt zwischen 370000 und 380000, aber näher an 370000 – gerundet also 370000.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>360000</text><line x1='147.3' y1='32' x2='147.3' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='36' x2='170.0' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>372000</text><circle cx='170.0' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='260.7' y1='32' x2='260.7' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='260.7' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>380000</text><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>390000</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_m3",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Zeichen passt? 520000 __ 250000",
                "answers": [
                    "=",
                    "<",
                    "≠",
                    ">"
                ],
                "correct": 3,
                "explanation": "520000 ist größer als 250000, deshalb passt das Zeichen >.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='90.7' y1='32' x2='90.7' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='90.7' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>100000</text><line x1='147.3' y1='32' x2='147.3' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='175.7' y1='36' x2='175.7' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='175.7' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>250000</text><circle cx='175.7' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='260.7' y1='32' x2='260.7' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='260.7' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='317.3' y1='32' x2='317.3' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='328.7' y1='36' x2='328.7' y2='44' stroke='#38bdf8' stroke-width='2'/><text x='328.7' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#38bdf8'>520000</text><circle cx='328.7' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_m4",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl fehlt in der Reihe 700000, __, 900000?",
                "answers": [
                    "750000",
                    "850000",
                    "950000",
                    "800000"
                ],
                "correct": 3,
                "explanation": "Die Hunderttausenderreihe zählt 700000, 800000, 900000 – es fehlt die 800000.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>600000</text><line x1='119.0' y1='32' x2='119.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='119.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>700000</text><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#fbbf24' stroke-width='2'/><text x='204.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#fbbf24'>?</text><line x1='289.0' y1='32' x2='289.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='289.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>900000</text><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
            }
        ],
        "schwer": [
            {
                "id": "zahlen1mio_k4l2_s1",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "schwer",
                "points": 10,
                "question": "Runde 845000 auf die nächsten Hunderttausend.",
                "answers": [
                    "840000",
                    "900000",
                    "845000",
                    "800000"
                ],
                "correct": 3,
                "explanation": "845000 liegt zwischen 800000 und 900000, aber näher an 800000 (Abstand 45000) als an 900000 (Abstand 55000) – gerundet also 800000.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>800000</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='102.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>820000</text><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='187.0' y1='36' x2='187.0' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='187.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>845000</text><circle cx='187.0' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='238.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>860000</text><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>880000</text><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>900000</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_s2",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "schwer",
                "points": 10,
                "question": "Ordne von klein nach groß: 620000, 260000, 510000",
                "answers": [
                    "620000, 510000, 260000",
                    "510000, 260000, 620000",
                    "620000, 260000, 510000",
                    "260000, 510000, 620000"
                ],
                "correct": 3,
                "explanation": "Von klein nach groß geordnet: 260000, dann 510000, dann 620000.",
                "grafik": "<svg viewBox='0 0 400 90' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='122.4' y1='36' x2='122.4' y2='44' stroke='#38bdf8' stroke-width='2'/><text x='122.4' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#38bdf8'>260000</text><circle cx='122.4' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='207.4' y1='36' x2='207.4' y2='44' stroke='#38bdf8' stroke-width='2'/><text x='207.4' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#38bdf8'>510000</text><circle cx='207.4' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='244.8' y1='36' x2='244.8' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='244.8' y='78' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>620000</text><circle cx='244.8' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>800000</text><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_s3",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welches Zeichen passt? 610000 __ 601000",
                "answers": [
                    "<",
                    "=",
                    "≠",
                    ">"
                ],
                "correct": 3,
                "explanation": "610000 ist größer als 601000, deshalb passt das Zeichen >.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>590000</text><line x1='147.3' y1='32' x2='147.3' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='158.7' y1='36' x2='158.7' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='158.7' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>601000</text><circle cx='158.7' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='260.7' y1='32' x2='260.7' y2='48' stroke='#38bdf8' stroke-width='2'/><text x='260.7' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#38bdf8'>610000</text><circle cx='260.7' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>620000</text></svg>"
            },
            {
                "id": "zahlen1mio_k4l2_s4",
                "category": "kurs_zahlen1mio_k4_l2",
                "area": "schule",
                "grade": 4,
                "subject": "mathe",
                "topic": "zahlen1mio",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viele Hunderttausender-Schritte liegen zwischen 100000 und 700000?",
                "answers": [
                    "4",
                    "5",
                    "7",
                    "6"
                ],
                "correct": 3,
                "explanation": "100000→200000→300000→400000→500000→600000→700000 sind 6 Schritte.",
                "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='102.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>200000</text><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#fbbf24' stroke-width='2'/><text x='272.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#fbbf24'>?</text><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
            }
        ]
    },
    "test": [
        {
            "id": "zahlen1mio_k4l2_t1",
            "category": "kurs_zahlen1mio_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Auf welche Zahl zeigt der Kreis?",
            "answers": [
                "600000",
                "800000",
                "500000",
                "700000"
            ],
            "correct": 3,
            "explanation": "Der Kreis steht auf der 700000.",
            "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='102.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>200000</text><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='272.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>700000</text><circle cx='272.0' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l2_t2",
            "category": "kurs_zahlen1mio_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl ist größer: 310000 oder 580000?",
            "answers": [
                "310000",
                "400000",
                "500000",
                "580000"
            ],
            "correct": 3,
            "explanation": "580000 steht weiter rechts auf dem Zahlenstrahl als 310000, also ist 580000 größer.",
            "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='139.4' y1='36' x2='139.4' y2='44' stroke='#38bdf8' stroke-width='2'/><text x='139.4' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#38bdf8'>310000</text><circle cx='139.4' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='231.2' y1='36' x2='231.2' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='231.2' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>580000</text><circle cx='231.2' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>800000</text><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l2_t3",
            "category": "kurs_zahlen1mio_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Runde 528000 auf die nächsten Zehntausend.",
            "answers": [
                "520000",
                "528000",
                "500000",
                "530000"
            ],
            "correct": 3,
            "explanation": "528000 liegt zwischen 520000 und 530000, aber näher an 530000 – gerundet also 530000.",
            "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>510000</text><line x1='147.3' y1='32' x2='147.3' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='147.3' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>520000</text><line x1='238.0' y1='36' x2='238.0' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='238.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>528000</text><circle cx='238.0' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='260.7' y1='32' x2='260.7' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>540000</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l2_t4",
            "category": "kurs_zahlen1mio_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welches Zeichen passt? 190000 __ 910000",
            "answers": [
                ">",
                "=",
                "≠",
                "<"
            ],
            "correct": 3,
            "explanation": "190000 ist kleiner als 910000, deshalb passt das Zeichen <.",
            "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='98.6' y1='36' x2='98.6' y2='44' stroke='#38bdf8' stroke-width='2'/><text x='98.6' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#38bdf8'>190000</text><circle cx='98.6' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='238.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>600000</text><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='343.4' y1='36' x2='343.4' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='343.4' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>910000</text><circle cx='343.4' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/></svg>"
        },
        {
            "id": "zahlen1mio_k4l2_t5",
            "category": "kurs_zahlen1mio_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl fehlt in der Reihe 400000, __, 600000?",
            "answers": [
                "450000",
                "550000",
                "650000",
                "500000"
            ],
            "correct": 3,
            "explanation": "Die Hunderttausenderreihe zählt 400000, 500000, 600000 – es fehlt die 500000.",
            "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>300000</text><line x1='119.0' y1='32' x2='119.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='119.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>400000</text><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#fbbf24' stroke-width='2'/><text x='204.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#fbbf24'>?</text><line x1='289.0' y1='32' x2='289.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='289.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>600000</text><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>700000</text></svg>"
        },
        {
            "id": "zahlen1mio_k4l2_t6",
            "category": "kurs_zahlen1mio_k4_l2",
            "area": "schule",
            "grade": 4,
            "subject": "mathe",
            "topic": "zahlen1mio",
            "difficulty": "mittel",
            "points": 10,
            "question": "Runde 962000 auf die nächsten Hunderttausend.",
            "answers": [
                "900000",
                "970000",
                "1000000",
                "960000"
            ],
            "correct": 2,
            "explanation": "962000 liegt zwischen 900000 und 1000000, aber näher an 1000000 – gerundet also 1000000.",
            "grafik": "<svg viewBox='0 0 400 78' style='width:100%;max-width:400px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='28.0' y1='40' x2='382.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='390.0,40 380.0,34 380.0,46' fill='#38bdf8'/><line x1='34.0' y1='32' x2='34.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='34.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>900000</text><line x1='68.0' y1='32' x2='68.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='102.0' y1='32' x2='102.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='102.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>920000</text><line x1='136.0' y1='32' x2='136.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='170.0' y1='32' x2='170.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='170.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>940000</text><line x1='204.0' y1='32' x2='204.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='238.0' y1='32' x2='238.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='244.8' y1='36' x2='244.8' y2='44' stroke='#f59e0b' stroke-width='2'/><text x='244.8' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#f59e0b'>962000</text><circle cx='244.8' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='272.0' y1='32' x2='272.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='306.0' y1='32' x2='306.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='306.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>980000</text><line x1='340.0' y1='32' x2='340.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><line x1='374.0' y1='32' x2='374.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='374.0' y='66' text-anchor='middle' font-size='11' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1000000</text></svg>"
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
