// Neue Mathekurse: K2 Daten & Messen, K4 große Zahlen (28.11.2026)
(function () {
    const extraKurse = [{"id": "daten_messen_k2", "title": "Daten und Messen", "icon": "📊", "grade": 2, "subject": "mathe", "beschreibung": "Strichlisten, Säulendiagramme und mit dem Lineal messen."}, {"id": "grosse_zahlen_k4", "title": "Rechnen mit großen Zahlen", "icon": "🔢", "grade": 4, "subject": "mathe", "beschreibung": "Kopfrechnen mit Nullen und schriftlich mal mit zweistelligen Zahlen."}];
    const extraLektionen = [
 {
  "id": "dm_k2_l1",
  "kurs": "daten_messen_k2",
  "order": 1,
  "icon": "📊",
  "title": "Strichlisten und Diagramme",
  "kurz": "Zählen mit Strichen, Säulen lesen",
  "erklaerung": {
   "intro": "Mit einer <b>Strichliste</b> zählst du schnell: Jeder Strich ist eins, der <b>fünfte Strich</b> geht quer durch die vier – so siehst du Fünferbündel. In einem <b>Säulendiagramm</b> zeigt die Höhe der Säule, wie viele es sind. Die höchste Säule ist am meisten.",
   "merksatz": "Vier Striche, der fünfte quer – Säule hoch = viel.",
   "beispiele": [
    "<svg viewBox='0 0 150 80' style='width:100%;max-width:300px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='102' y1='15' x2='102' y2='65' stroke='#1e293b' stroke-width='4'/></svg>7 = ein Fünferbündel und 2",
    "<svg viewBox='0 0 220 80' style='width:100%;max-width:320px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='102' y1='15' x2='102' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='114' y1='15' x2='114' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='126' y1='15' x2='126' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='84' y1='55' x2='134' y2='22' stroke='#1e293b' stroke-width='4'/></svg>10 = zwei Fünferbündel",
    "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='86' width='50' height='84' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🍎</text><rect x='110' y='128' width='50' height='42' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🍌</text><rect x='180' y='58' width='50' height='112' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🍓</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>Erdbeeren sind am beliebtesten"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "dmk2l1u_leicht_1",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Striche sind das?",
     "answers": [
      "4",
      "6",
      "5",
      "3"
     ],
     "correct": 2,
     "explanation": "Ein Fünferbündel.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 150 80' style='width:100%;max-width:300px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "dmk2l1u_leicht_2",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Striche sind das?",
     "answers": [
      "6",
      "8",
      "7",
      "5"
     ],
     "correct": 2,
     "explanation": "5 + 2.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 150 80' style='width:100%;max-width:300px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='102' y1='15' x2='102' y2='65' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "dmk2l1u_leicht_3",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Striche sind das?",
     "answers": [
      "2",
      "4",
      "5",
      "3"
     ],
     "correct": 3,
     "explanation": "Drei Einzelstriche.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 80 80' style='width:100%;max-width:160px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "dmk2l1u_leicht_4",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Frucht mögen die meisten?",
     "answers": [
      "🍎",
      "🍓",
      "🍌",
      "alle gleich"
     ],
     "correct": 1,
     "explanation": "Höchste Säule.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='86' width='50' height='84' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🍎</text><rect x='110' y='128' width='50' height='42' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🍌</text><rect x='180' y='58' width='50' height='112' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🍓</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
    },
    {
     "id": "dmk2l1u_leicht_5",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie macht man den 5. Strich?",
     "answers": [
      "ganz lang",
      "quer durch die vier",
      "als Kreis",
      "gar nicht"
     ],
     "correct": 1,
     "explanation": "Fünferbündel.",
     "topic": "daten_messen"
    }
   ],
   "mittel": [
    {
     "id": "dmk2l1u_mittel_1",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Striche sind das?",
     "answers": [
      "9",
      "11",
      "10",
      "8"
     ],
     "correct": 2,
     "explanation": "Zwei Fünferbündel.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 220 80' style='width:100%;max-width:320px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='102' y1='15' x2='102' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='114' y1='15' x2='114' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='126' y1='15' x2='126' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='84' y1='55' x2='134' y2='22' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "dmk2l1u_mittel_2",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Striche sind das?",
     "answers": [
      "11",
      "13",
      "12",
      "10"
     ],
     "correct": 2,
     "explanation": "10 + 2.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 220 80' style='width:100%;max-width:320px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='102' y1='15' x2='102' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='114' y1='15' x2='114' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='126' y1='15' x2='126' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='84' y1='55' x2='134' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='160' y1='15' x2='160' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='172' y1='15' x2='172' y2='65' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "dmk2l1u_mittel_3",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Kinder mögen 🍌?",
     "answers": [
      "2",
      "4",
      "3",
      "6"
     ],
     "correct": 2,
     "explanation": "Säule bis 3.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='86' width='50' height='84' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🍎</text><rect x='110' y='128' width='50' height='42' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🍌</text><rect x='180' y='58' width='50' height='112' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🍓</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
    },
    {
     "id": "dmk2l1u_mittel_4",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Tier wurde am wenigsten gewählt?",
     "answers": [
      "🐶",
      "🐟",
      "🐱",
      "gleich"
     ],
     "correct": 1,
     "explanation": "Niedrigste Säule.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='72' width='50' height='98' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🐶</text><rect x='110' y='100' width='50' height='70' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🐱</text><rect x='180' y='142' width='50' height='28' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🐟</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
    },
    {
     "id": "dmk2l1u_mittel_5",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Kinder mögen 🐶 mehr als 🐱?",
     "answers": [
      "1",
      "3",
      "2",
      "12"
     ],
     "correct": 2,
     "explanation": "7 − 5.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='72' width='50' height='98' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🐶</text><rect x='110' y='100' width='50' height='70' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🐱</text><rect x='180' y='142' width='50' height='28' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🐟</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
    }
   ],
   "schwer": [
    {
     "id": "dmk2l1u_schwer_1",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Striche sind das?",
     "answers": [
      "13",
      "15",
      "12",
      "14"
     ],
     "correct": 3,
     "explanation": "10 + 4.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 220 80' style='width:100%;max-width:320px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='102' y1='15' x2='102' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='114' y1='15' x2='114' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='126' y1='15' x2='126' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='84' y1='55' x2='134' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='160' y1='15' x2='160' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='172' y1='15' x2='172' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='184' y1='15' x2='184' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='196' y1='15' x2='196' y2='65' stroke='#1e293b' stroke-width='4'/></svg>"
    },
    {
     "id": "dmk2l1u_schwer_2",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Kinder haben insgesamt abgestimmt?",
     "answers": [
      "14",
      "13",
      "7",
      "15"
     ],
     "correct": 0,
     "explanation": "7 + 5 + 2.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='72' width='50' height='98' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🐶</text><rect x='110' y='100' width='50' height='70' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🐱</text><rect x='180' y='142' width='50' height='28' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🐟</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
    },
    {
     "id": "dmk2l1u_schwer_3",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Fünferbündel hat die Zahl 15?",
     "answers": [
      "2",
      "3",
      "5",
      "1"
     ],
     "correct": 1,
     "explanation": "15 = 3 · 5.",
     "topic": "daten_messen"
    },
    {
     "id": "dmk2l1u_schwer_4",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Kinder mögen 🍓 mehr als 🍌?",
     "answers": [
      "4",
      "11",
      "3",
      "5"
     ],
     "correct": 3,
     "explanation": "8 − 3 = 5.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='86' width='50' height='84' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🍎</text><rect x='110' y='128' width='50' height='42' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🍌</text><rect x='180' y='58' width='50' height='112' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🍓</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
    },
    {
     "id": "dmk2l1u_schwer_5",
     "category": "kurs_dm_k2_l1",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wofür ist eine Strichliste gut?",
     "answers": [
      "um schnell zu zählen",
      "zum Malen",
      "zum Rechnen mit mal",
      "zum Messen"
     ],
     "correct": 0,
     "explanation": "Zählen.",
     "topic": "daten_messen"
    }
   ]
  },
  "test": [
   {
    "id": "dmk2l1_test_1",
    "category": "kurs_dm_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Striche sind das?",
    "answers": [
     "5",
     "7",
     "4",
     "6"
    ],
    "correct": 3,
    "explanation": "5 + 1.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 150 80' style='width:100%;max-width:300px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/></svg>"
   },
   {
    "id": "dmk2l1_test_2",
    "category": "kurs_dm_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Striche sind das?",
    "answers": [
     "9",
     "8",
     "10",
     "4"
    ],
    "correct": 0,
    "explanation": "5 + 4.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 150 80' style='width:100%;max-width:300px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='102' y1='15' x2='102' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='114' y1='15' x2='114' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='126' y1='15' x2='126' y2='65' stroke='#1e293b' stroke-width='4'/></svg>"
   },
   {
    "id": "dmk2l1_test_3",
    "category": "kurs_dm_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Striche sind das?",
    "answers": [
     "10",
     "11",
     "12",
     "6"
    ],
    "correct": 1,
    "explanation": "10 + 1.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 220 80' style='width:100%;max-width:320px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='15' x2='20' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='32' y1='15' x2='32' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='44' y1='15' x2='44' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='56' y1='15' x2='56' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='14' y1='55' x2='64' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='90' y1='15' x2='90' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='102' y1='15' x2='102' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='114' y1='15' x2='114' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='126' y1='15' x2='126' y2='65' stroke='#1e293b' stroke-width='4'/><line x1='84' y1='55' x2='134' y2='22' stroke='#1e293b' stroke-width='4'/><line x1='160' y1='15' x2='160' y2='65' stroke='#1e293b' stroke-width='4'/></svg>"
   },
   {
    "id": "dmk2l1_test_4",
    "category": "kurs_dm_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Farbe ist am beliebtesten?",
    "answers": [
     "🔵",
     "🔴",
     "🟢",
     "gleich"
    ],
    "correct": 1,
    "explanation": "Höchste Säule.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='114' width='50' height='56' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🔵</text><rect x='110' y='44' width='50' height='126' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🔴</text><rect x='180' y='86' width='50' height='84' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🟢</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
   },
   {
    "id": "dmk2l1_test_5",
    "category": "kurs_dm_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Kinder mögen 🟢?",
    "answers": [
     "5",
     "4",
     "9",
     "6"
    ],
    "correct": 3,
    "explanation": "Säule bis 6.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='114' width='50' height='56' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🔵</text><rect x='110' y='44' width='50' height='126' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🔴</text><rect x='180' y='86' width='50' height='84' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🟢</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
   },
   {
    "id": "dmk2l1_test_6",
    "category": "kurs_dm_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele mögen 🔴 mehr als 🔵?",
    "answers": [
     "4",
     "13",
     "3",
     "5"
    ],
    "correct": 3,
    "explanation": "9 − 4.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='114' width='50' height='56' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🔵</text><rect x='110' y='44' width='50' height='126' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🔴</text><rect x='180' y='86' width='50' height='84' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🟢</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
   },
   {
    "id": "dmk2l1_test_7",
    "category": "kurs_dm_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was zeigt die höchste Säule?",
    "answers": [
     "am meisten",
     "am wenigsten",
     "nichts",
     "die Farbe"
    ],
    "correct": 0,
    "explanation": "Höhe = Anzahl.",
    "topic": "daten_messen"
   },
   {
    "id": "dmk2l1_test_8",
    "category": "kurs_dm_k2_l1",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Kinder haben abgestimmt?",
    "answers": [
     "18",
     "20",
     "19",
     "9"
    ],
    "correct": 2,
    "explanation": "4 + 9 + 6.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 270 205' style='width:100%;max-width:270px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='114' width='50' height='56' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='65.0' y='195' text-anchor='middle' font-size='26'>🔵</text><rect x='110' y='44' width='50' height='126' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='135.0' y='195' text-anchor='middle' font-size='26'>🔴</text><rect x='180' y='86' width='50' height='84' fill='#60a5fa' stroke='#1e3a8a' stroke-width='2'/><text x='205.0' y='195' text-anchor='middle' font-size='26'>🟢</text><text x='22' y='176' text-anchor='end' font-size='14' fill='#64748b'>0</text><line x1='28' y1='170' x2='250' y2='170' stroke='#e2e8f0'/><text x='22' y='148' text-anchor='end' font-size='14' fill='#64748b'>2</text><line x1='28' y1='142' x2='250' y2='142' stroke='#e2e8f0'/><text x='22' y='120' text-anchor='end' font-size='14' fill='#64748b'>4</text><line x1='28' y1='114' x2='250' y2='114' stroke='#e2e8f0'/><text x='22' y='92' text-anchor='end' font-size='14' fill='#64748b'>6</text><line x1='28' y1='86' x2='250' y2='86' stroke='#e2e8f0'/><text x='22' y='64' text-anchor='end' font-size='14' fill='#64748b'>8</text><line x1='28' y1='58' x2='250' y2='58' stroke='#e2e8f0'/><text x='22' y='36' text-anchor='end' font-size='14' fill='#64748b'>10</text><line x1='28' y1='30' x2='250' y2='30' stroke='#e2e8f0'/></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "dm_k2_l2",
  "kurs": "daten_messen_k2",
  "order": 2,
  "icon": "📏",
  "title": "Mit dem Lineal messen",
  "kurz": "Bei der 0 anfangen!",
  "erklaerung": {
   "intro": "Mit dem <b>Lineal</b> misst du Längen in <b>Zentimetern (cm)</b>. Wichtig: Leg das Lineal so an, dass der Strich bei der <b>0</b> am Anfang liegt – nicht am Rand des Lineals! Dann liest du am Ende ab. <b>100 cm = 1 m</b>. Ein Finger ist etwa 1 cm breit.",
   "merksatz": "Bei der 0 anlegen – am Ende ablesen.",
   "beispiele": [
    "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='20' y='4' width='120' height='12' rx='6' fill='#f97316'/></svg>Der Strich ist 4 cm lang.",
    "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='20' y='4' width='210' height='12' rx='6' fill='#f97316'/></svg>7 cm",
    "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📏</text></svg>100 cm = 1 m"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "dmk2l2u_leicht_1",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie lang ist der orange Strich?",
     "answers": [
      "3 cm",
      "2 cm",
      "4 cm",
      "30 cm"
     ],
     "correct": 0,
     "explanation": "Von 0 bis 3.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='20' y='4' width='90' height='12' rx='6' fill='#f97316'/></svg>"
    },
    {
     "id": "dmk2l2u_leicht_2",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie lang ist der orange Strich?",
     "answers": [
      "4 cm",
      "6 cm",
      "50 cm",
      "5 cm"
     ],
     "correct": 3,
     "explanation": "Von 0 bis 5.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='20' y='4' width='150' height='12' rx='6' fill='#f97316'/></svg>"
    },
    {
     "id": "dmk2l2u_leicht_3",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wo legst du das Lineal an?",
     "answers": [
      "bei der 0",
      "am Rand des Lineals",
      "bei der 1",
      "irgendwo"
     ],
     "correct": 0,
     "explanation": "Bei der 0.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📏</text></svg>"
    },
    {
     "id": "dmk2l2u_leicht_4",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie lang ist der orange Strich?",
     "answers": [
      "7 cm",
      "9 cm",
      "8 cm",
      "80 cm"
     ],
     "correct": 2,
     "explanation": "Von 0 bis 8.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='20' y='4' width='240' height='12' rx='6' fill='#f97316'/></svg>"
    },
    {
     "id": "dmk2l2u_leicht_5",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie breit ist ein Finger ungefähr?",
     "answers": [
      "1 m",
      "1 cm",
      "10 cm",
      "1 mm"
     ],
     "correct": 1,
     "explanation": "Etwa 1 cm.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>☝️</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "dmk2l2u_mittel_1",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie lang ist der orange Strich?",
     "answers": [
      "6 cm",
      "4 cm",
      "5 cm",
      "2 cm"
     ],
     "correct": 1,
     "explanation": "Von 2 bis 6 sind 4 cm.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='80' y='4' width='120' height='12' rx='6' fill='#f97316'/></svg>"
    },
    {
     "id": "dmk2l2u_mittel_2",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie lang ist der orange Strich?",
     "answers": [
      "4 cm",
      "3 cm",
      "7 cm",
      "1 cm"
     ],
     "correct": 1,
     "explanation": "Von 1 bis 4.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='50' y='4' width='90' height='12' rx='6' fill='#f97316'/></svg>"
    },
    {
     "id": "dmk2l2u_mittel_3",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele cm sind 1 m?",
     "answers": [
      "100 cm",
      "10 cm",
      "1000 cm",
      "50 cm"
     ],
     "correct": 0,
     "explanation": "1 m = 100 cm.",
     "topic": "daten_messen"
    },
    {
     "id": "dmk2l2u_mittel_4",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Was misst man besser mit dem Meterstab?",
     "answers": [
      "einen Radiergummi",
      "die Länge eines Zimmers",
      "eine Ameise",
      "einen Stift"
     ],
     "correct": 1,
     "explanation": "Lange Dinge.",
     "topic": "daten_messen"
    },
    {
     "id": "dmk2l2u_mittel_5",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Länge passt zu einem Bleistift?",
     "answers": [
      "17 m",
      "1 cm",
      "17 cm",
      "170 cm"
     ],
     "correct": 2,
     "explanation": "Etwa 17 cm.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>✏️</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "dmk2l2u_schwer_1",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie lang ist der orange Strich?",
     "answers": [
      "8 cm",
      "3 cm",
      "5 cm",
      "6 cm"
     ],
     "correct": 2,
     "explanation": "Von 3 bis 8.",
     "topic": "daten_messen",
     "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='110' y='4' width='150' height='12' rx='6' fill='#f97316'/></svg>"
    },
    {
     "id": "dmk2l2u_schwer_2",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Tim misst ab dem Rand des Lineals und liest 6 cm ab. Was ist das Problem?",
     "answers": [
      "Nichts.",
      "Das Lineal ist zu kurz.",
      "Er hat nicht bei der 0 angelegt.",
      "Er hätte in m messen müssen."
     ],
     "correct": 2,
     "explanation": "Der Rand ist nicht die 0.",
     "topic": "daten_messen"
    },
    {
     "id": "dmk2l2u_schwer_3",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Strich ist 4 cm, ein anderer 7 cm. Wie viel länger ist der zweite?",
     "answers": [
      "11 cm",
      "3 cm",
      "4 cm",
      "2 cm"
     ],
     "correct": 1,
     "explanation": "7 − 4.",
     "topic": "daten_messen"
    },
    {
     "id": "dmk2l2u_schwer_4",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele cm sind 1 m und 20 cm?",
     "answers": [
      "120 cm",
      "21 cm",
      "102 cm",
      "1020 cm"
     ],
     "correct": 0,
     "explanation": "100 + 20.",
     "topic": "daten_messen"
    },
    {
     "id": "dmk2l2u_schwer_5",
     "category": "kurs_dm_k2_l2",
     "area": "schule",
     "grade": 2,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist länger: 90 cm oder 1 m?",
     "answers": [
      "90 cm",
      "1 m",
      "gleich",
      "kann man nicht sagen"
     ],
     "correct": 1,
     "explanation": "1 m = 100 cm.",
     "topic": "daten_messen"
    }
   ]
  },
  "test": [
   {
    "id": "dmk2l2_test_1",
    "category": "kurs_dm_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie lang ist der orange Strich?",
    "answers": [
     "5 cm",
     "7 cm",
     "60 cm",
     "6 cm"
    ],
    "correct": 3,
    "explanation": "0 bis 6.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='20' y='4' width='180' height='12' rx='6' fill='#f97316'/></svg>"
   },
   {
    "id": "dmk2l2_test_2",
    "category": "kurs_dm_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie lang ist der orange Strich?",
    "answers": [
     "3 cm",
     "1 cm",
     "2 cm",
     "5 cm"
    ],
    "correct": 2,
    "explanation": "3 bis 5.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='110' y='4' width='60' height='12' rx='6' fill='#f97316'/></svg>"
   },
   {
    "id": "dmk2l2_test_3",
    "category": "kurs_dm_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo legst du das Lineal an?",
    "answers": [
     "am Rand",
     "bei der 10",
     "bei der 0",
     "in der Mitte"
    ],
    "correct": 2,
    "explanation": "0.",
    "topic": "daten_messen"
   },
   {
    "id": "dmk2l2_test_4",
    "category": "kurs_dm_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele cm sind 1 m?",
    "answers": [
     "10",
     "1000",
     "100",
     "60"
    ],
    "correct": 2,
    "explanation": "100.",
    "topic": "daten_messen"
   },
   {
    "id": "dmk2l2_test_5",
    "category": "kurs_dm_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie lang ist der orange Strich?",
    "answers": [
     "9 cm",
     "8 cm",
     "10 cm",
     "90 cm"
    ],
    "correct": 0,
    "explanation": "0 bis 9.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 340 80' style='width:100%;max-width:340px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='20' width='320' height='50' fill='#fef3c7' stroke='#92400e' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='45' stroke='#92400e' stroke-width='2'/><text x='20' y='64' text-anchor='middle' font-size='14'>0</text><line x1='35' y1='20' x2='35' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='50' y1='20' x2='50' y2='45' stroke='#92400e' stroke-width='2'/><text x='50' y='64' text-anchor='middle' font-size='14'>1</text><line x1='65' y1='20' x2='65' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='80' y1='20' x2='80' y2='45' stroke='#92400e' stroke-width='2'/><text x='80' y='64' text-anchor='middle' font-size='14'>2</text><line x1='95' y1='20' x2='95' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='110' y1='20' x2='110' y2='45' stroke='#92400e' stroke-width='2'/><text x='110' y='64' text-anchor='middle' font-size='14'>3</text><line x1='125' y1='20' x2='125' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='140' y1='20' x2='140' y2='45' stroke='#92400e' stroke-width='2'/><text x='140' y='64' text-anchor='middle' font-size='14'>4</text><line x1='155' y1='20' x2='155' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='170' y1='20' x2='170' y2='45' stroke='#92400e' stroke-width='2'/><text x='170' y='64' text-anchor='middle' font-size='14'>5</text><line x1='185' y1='20' x2='185' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='200' y1='20' x2='200' y2='45' stroke='#92400e' stroke-width='2'/><text x='200' y='64' text-anchor='middle' font-size='14'>6</text><line x1='215' y1='20' x2='215' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='230' y1='20' x2='230' y2='45' stroke='#92400e' stroke-width='2'/><text x='230' y='64' text-anchor='middle' font-size='14'>7</text><line x1='245' y1='20' x2='245' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='260' y1='20' x2='260' y2='45' stroke='#92400e' stroke-width='2'/><text x='260' y='64' text-anchor='middle' font-size='14'>8</text><line x1='275' y1='20' x2='275' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='290' y1='20' x2='290' y2='45' stroke='#92400e' stroke-width='2'/><text x='290' y='64' text-anchor='middle' font-size='14'>9</text><line x1='305' y1='20' x2='305' y2='34' stroke='#92400e' stroke-width='1.5'/><line x1='320' y1='20' x2='320' y2='45' stroke='#92400e' stroke-width='2'/><text x='320' y='64' text-anchor='middle' font-size='14'>10</text><rect x='20' y='4' width='270' height='12' rx='6' fill='#f97316'/></svg>"
   },
   {
    "id": "dmk2l2_test_6",
    "category": "kurs_dm_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Länge passt zu einer Tür?",
    "answers": [
     "2 cm",
     "2 m",
     "20 cm",
     "20 m"
    ],
    "correct": 1,
    "explanation": "Etwa 2 m.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚪</text></svg>"
   },
   {
    "id": "dmk2l2_test_7",
    "category": "kurs_dm_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was misst du in cm?",
    "answers": [
     "ein Heft",
     "den Schulweg",
     "einen Fluss",
     "eine Autobahn"
    ],
    "correct": 0,
    "explanation": "Kurze Dinge.",
    "topic": "daten_messen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📓</text></svg>"
   },
   {
    "id": "dmk2l2_test_8",
    "category": "kurs_dm_k2_l2",
    "area": "schule",
    "grade": 2,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist kürzer: 50 cm oder 1 m?",
    "answers": [
     "1 m",
     "gleich",
     "kann man nicht sagen",
     "50 cm"
    ],
    "correct": 3,
    "explanation": "50 < 100.",
    "topic": "daten_messen"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "gz_k4_l1",
  "kurs": "grosse_zahlen_k4",
  "order": 1,
  "icon": "🧠",
  "title": "Kopfrechnen mit großen Zahlen",
  "kurz": "Nullen geschickt nutzen",
  "erklaerung": {
   "intro": "Große Zahlen mit Nullen rechnest du wie kleine: <b>3 000 + 4 000</b> ist wie 3 + 4 = 7, also <b>7 000</b>. Beim Malnehmen zählst du die Nullen dazu: <b>30 · 200 = 6 000</b> (3 · 2 = 6, drei Nullen). Beim Teilen streichst du gleich viele Nullen: <b>8 000 : 400 = 80 : 4 = 20</b>.",
   "merksatz": "Erst ohne Nullen rechnen – dann Nullen anhängen.",
   "beispiele": [
    "3 000 + 4 000 = 7 000",
    "30 · 200 = 6 000 (3 · 2 = 6 + drei Nullen)",
    "8 000 : 400 = 80 : 4 = 20"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gzk4l1u_leicht_1",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "3 000 + 4 000 =",
     "answers": [
      "700",
      "70 000",
      "34 000",
      "7 000"
     ],
     "correct": 3,
     "explanation": "3 + 4 = 7.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_leicht_2",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "9 000 − 5 000 =",
     "answers": [
      "400",
      "40 000",
      "4 000",
      "14 000"
     ],
     "correct": 2,
     "explanation": "9 − 5 = 4.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_leicht_3",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "20 · 3 =",
     "answers": [
      "23",
      "600",
      "6",
      "60"
     ],
     "correct": 3,
     "explanation": "2 · 3 = 6, eine Null.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_leicht_4",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "50 000 + 20 000 =",
     "answers": [
      "70 000",
      "7 000",
      "700 000",
      "52 000"
     ],
     "correct": 0,
     "explanation": "5 + 2.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_leicht_5",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "4 000 : 2 =",
     "answers": [
      "200",
      "20 000",
      "2 000",
      "4 002"
     ],
     "correct": 2,
     "explanation": "4 : 2 = 2.",
     "topic": "grosse_zahlen"
    }
   ],
   "mittel": [
    {
     "id": "gzk4l1u_mittel_1",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "30 · 200 =",
     "answers": [
      "6 000",
      "600",
      "60 000",
      "230"
     ],
     "correct": 0,
     "explanation": "3 · 2 = 6, drei Nullen.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_mittel_2",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "12 000 + 8 000 =",
     "answers": [
      "20 000",
      "2 000",
      "200 000",
      "19 000"
     ],
     "correct": 0,
     "explanation": "12 + 8.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_mittel_3",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "400 · 5 =",
     "answers": [
      "200",
      "2 000",
      "20 000",
      "405"
     ],
     "correct": 1,
     "explanation": "4 · 5 = 20, zwei Nullen.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_mittel_4",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "60 000 : 3 =",
     "answers": [
      "20 000",
      "2 000",
      "200 000",
      "18 000"
     ],
     "correct": 0,
     "explanation": "6 : 3 = 2.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_mittel_5",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "100 000 − 30 000 =",
     "answers": [
      "7 000",
      "70 000",
      "97 000",
      "130 000"
     ],
     "correct": 1,
     "explanation": "100 − 30.",
     "topic": "grosse_zahlen"
    }
   ],
   "schwer": [
    {
     "id": "gzk4l1u_schwer_1",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "8 000 : 400 =",
     "answers": [
      "2",
      "200",
      "20",
      "2 000"
     ],
     "correct": 2,
     "explanation": "80 : 4.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_schwer_2",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "70 · 700 =",
     "answers": [
      "49 000",
      "4 900",
      "490 000",
      "770"
     ],
     "correct": 0,
     "explanation": "7 · 7 = 49, drei Nullen.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_schwer_3",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "250 000 + 750 000 =",
     "answers": [
      "100 000",
      "900 000",
      "10 000 000",
      "1 000 000"
     ],
     "correct": 3,
     "explanation": "250 + 750 = 1000 Tausend.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l1u_schwer_4",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Stadion hat 45 000 Plätze. 38 000 sind besetzt. Wie viele frei?",
     "answers": [
      "8 000",
      "83 000",
      "7 000",
      "17 000"
     ],
     "correct": 2,
     "explanation": "45 − 38.",
     "topic": "grosse_zahlen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🏟️</text></svg>"
    },
    {
     "id": "gzk4l1u_schwer_5",
     "category": "kurs_gz_k4_l1",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "900 000 : 300 =",
     "answers": [
      "300",
      "3 000",
      "30 000",
      "30"
     ],
     "correct": 1,
     "explanation": "9 000 : 3.",
     "topic": "grosse_zahlen"
    }
   ]
  },
  "test": [
   {
    "id": "gzk4l1_test_1",
    "category": "kurs_gz_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "6 000 + 3 000 =",
    "answers": [
     "900",
     "90 000",
     "9 000",
     "63 000"
    ],
    "correct": 2,
    "explanation": "6 + 3.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l1_test_2",
    "category": "kurs_gz_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "80 000 − 50 000 =",
    "answers": [
     "30 000",
     "3 000",
     "300 000",
     "130 000"
    ],
    "correct": 0,
    "explanation": "8 − 5.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l1_test_3",
    "category": "kurs_gz_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "40 · 30 =",
    "answers": [
     "120",
     "12 000",
     "70",
     "1 200"
    ],
    "correct": 3,
    "explanation": "4 · 3 = 12, zwei Nullen.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l1_test_4",
    "category": "kurs_gz_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "9 000 : 3 =",
    "answers": [
     "300",
     "30 000",
     "3 000",
     "6 000"
    ],
    "correct": 2,
    "explanation": "9 : 3.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l1_test_5",
    "category": "kurs_gz_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "500 · 6 =",
    "answers": [
     "300",
     "30 000",
     "506",
     "3 000"
    ],
    "correct": 3,
    "explanation": "5 · 6 = 30.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l1_test_6",
    "category": "kurs_gz_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "6 000 : 200 =",
    "answers": [
     "3",
     "30",
     "300",
     "3 000"
    ],
    "correct": 1,
    "explanation": "60 : 2.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l1_test_7",
    "category": "kurs_gz_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "35 000 + 15 000 =",
    "answers": [
     "5 000",
     "50 000",
     "40 000",
     "500 000"
    ],
    "correct": 1,
    "explanation": "35 + 15.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l1_test_8",
    "category": "kurs_gz_k4_l1",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ein Auto kostet 20 000 €. Was kosten 3 Autos?",
    "answers": [
     "60 000 €",
     "6 000 €",
     "600 000 €",
     "23 000 €"
    ],
    "correct": 0,
    "explanation": "2 · 3 = 6.",
    "topic": "grosse_zahlen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚗</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "gz_k4_l2",
  "kurs": "grosse_zahlen_k4",
  "order": 2,
  "icon": "✖️",
  "title": "Schriftlich mal mit zwei Stellen",
  "kurz": "Zwei Zeilen – dann addieren",
  "erklaerung": {
   "intro": "Bei <b>34 · 12</b> rechnest du in zwei Zeilen: Erst <b>34 · 1</b> (das ist 34 · 10) – das Ergebnis rückt eine Stelle nach links: <b>340</b>. Dann <b>34 · 2 = 68</b>. Zum Schluss <b>addieren</b>: 340 + 68 = <b>408</b>. Mit dem Überschlag prüfst du: 30 · 10 = 300 – passt ungefähr.",
   "merksatz": "Zehner-Zeile, Einer-Zeile, dann addieren – Überschlag zur Probe.",
   "beispiele": [
    "34 · 12 = 340 + 68 = 408",
    "25 · 13 = 250 + 75 = 325",
    "Überschlag: 34 · 12 ≈ 30 · 10 = 300"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gzk4l2u_leicht_1",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "12 · 11 =",
     "answers": [
      "122",
      "142",
      "23",
      "132"
     ],
     "correct": 3,
     "explanation": "120 + 12.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_leicht_2",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "21 · 12 =",
     "answers": [
      "242",
      "252",
      "232",
      "33"
     ],
     "correct": 1,
     "explanation": "210 + 42.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_leicht_3",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was rechnest du bei 34 · 12 zuerst?",
     "answers": [
      "34 + 12",
      "34 · 10 (bzw. 34 · 1 eine Stelle verschoben)",
      "3 · 1",
      "4 · 2 allein"
     ],
     "correct": 1,
     "explanation": "Zehner-Zeile.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_leicht_4",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "13 · 10 =",
     "answers": [
      "130",
      "13",
      "1300",
      "23"
     ],
     "correct": 0,
     "explanation": "Null anhängen.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_leicht_5",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was machst du zum Schluss?",
     "answers": [
      "subtrahieren",
      "nichts",
      "teilen",
      "die Teilergebnisse addieren"
     ],
     "correct": 3,
     "explanation": "Addieren.",
     "topic": "grosse_zahlen"
    }
   ],
   "mittel": [
    {
     "id": "gzk4l2u_mittel_1",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "34 · 12 =",
     "answers": [
      "348",
      "418",
      "408",
      "398"
     ],
     "correct": 2,
     "explanation": "340 + 68.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_mittel_2",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "25 · 13 =",
     "answers": [
      "325",
      "315",
      "335",
      "275"
     ],
     "correct": 0,
     "explanation": "250 + 75.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_mittel_3",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Überschlag passt zu 48 · 21?",
     "answers": [
      "40 · 20 = 800",
      "50 · 20 = 1 000",
      "50 · 30 = 1 500",
      "48 + 21"
     ],
     "correct": 1,
     "explanation": "Runden.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_mittel_4",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "16 · 15 =",
     "answers": [
      "230",
      "250",
      "240",
      "31"
     ],
     "correct": 2,
     "explanation": "160 + 80.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_mittel_5",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "23 · 14 =",
     "answers": [
      "312",
      "322",
      "332",
      "92"
     ],
     "correct": 1,
     "explanation": "230 + 92.",
     "topic": "grosse_zahlen"
    }
   ],
   "schwer": [
    {
     "id": "gzk4l2u_schwer_1",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "47 · 23 =",
     "answers": [
      "1 081",
      "1 071",
      "1 091",
      "981"
     ],
     "correct": 0,
     "explanation": "940 + 141.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_schwer_2",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "125 · 12 =",
     "answers": [
      "1 500",
      "1 400",
      "1 250",
      "1 600"
     ],
     "correct": 0,
     "explanation": "1 250 + 250.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_schwer_3",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ben rechnet 36 · 21 = 1 512. Was zeigt der Überschlag 40 · 20 = 800?",
     "answers": [
      "Es stimmt genau.",
      "Es ist zu klein.",
      "Das Ergebnis ist viel zu groß.",
      "Man kann es nicht prüfen."
     ],
     "correct": 2,
     "explanation": "Richtig: 756.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_schwer_4",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "52 · 31 =",
     "answers": [
      "1 602",
      "1 612",
      "1 562",
      "1 712"
     ],
     "correct": 1,
     "explanation": "1 560 + 52.",
     "topic": "grosse_zahlen"
    },
    {
     "id": "gzk4l2u_schwer_5",
     "category": "kurs_gz_k4_l2",
     "area": "schule",
     "grade": 4,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Eine Klasse sammelt 24 Wochen lang jede Woche 15 €. Wie viel?",
     "answers": [
      "360 €",
      "340 €",
      "39 €",
      "350 €"
     ],
     "correct": 0,
     "explanation": "240 + 120.",
     "topic": "grosse_zahlen",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🐷</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "gzk4l2_test_1",
    "category": "kurs_gz_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "11 · 14 =",
    "answers": [
     "144",
     "164",
     "154",
     "25"
    ],
    "correct": 2,
    "explanation": "140 + 14.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l2_test_2",
    "category": "kurs_gz_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "22 · 13 =",
    "answers": [
     "286",
     "276",
     "296",
     "35"
    ],
    "correct": 0,
    "explanation": "220 + 66.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l2_test_3",
    "category": "kurs_gz_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "31 · 12 =",
    "answers": [
     "362",
     "382",
     "43",
     "372"
    ],
    "correct": 3,
    "explanation": "310 + 62.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l2_test_4",
    "category": "kurs_gz_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "45 · 12 =",
    "answers": [
     "540",
     "530",
     "550",
     "57"
    ],
    "correct": 0,
    "explanation": "450 + 90.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l2_test_5",
    "category": "kurs_gz_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Überschlag passt zu 29 · 31?",
    "answers": [
     "20 · 30 = 600",
     "30 · 30 = 900",
     "30 · 40 = 1 200",
     "29 + 31"
    ],
    "correct": 1,
    "explanation": "Runden.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l2_test_6",
    "category": "kurs_gz_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "18 · 16 =",
    "answers": [
     "278",
     "288",
     "298",
     "34"
    ],
    "correct": 1,
    "explanation": "180 + 108.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l2_test_7",
    "category": "kurs_gz_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was rechnest du zuletzt?",
    "answers": [
     "Nullen streichen",
     "teilen",
     "die Zeilen addieren",
     "nichts"
    ],
    "correct": 2,
    "explanation": "Addieren.",
    "topic": "grosse_zahlen"
   },
   {
    "id": "gzk4l2_test_8",
    "category": "kurs_gz_k4_l2",
    "area": "schule",
    "grade": 4,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ein Bus hat 52 Plätze. Wie viele haben 12 Busse?",
    "answers": [
     "614",
     "634",
     "624",
     "64"
    ],
    "correct": 2,
    "explanation": "520 + 104.",
    "topic": "grosse_zahlen",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
