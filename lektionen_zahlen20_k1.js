// Zahlen & Rechnen bis 20 - Klasse 1 Mathe
(function () {
    const extraKurse = [{"id": "zahlen20_k1", "title": "Zahlen & Rechnen bis 20", "icon": "🔢", "grade": 1, "subject": "mathe", "beschreibung": "Zahlen bis 20 auf dem Zahlenstrahl, vergleichen, Nachbarzahlen, plus und minus rechnen."}];
    const extraLektionen = [{
    "id": "zahlen20_k1_l1",
    "kurs": "zahlen20_k1",
    "order": 1,
    "icon": "🔢",
    "title": "Zahlen bis 20",
    "kurz": "Zahlenstrahl, vergleichen, Nachbarzahlen",
    "erklaerung": {
        "intro": "Der <b>Zahlenstrahl</b> zeigt Zahlen der Reihe nach: links sind sie klein, nach rechts werden sie größer. Mit <b>&lt;</b> (kleiner als), <b>&gt;</b> (größer als) und <b>=</b> (gleich) vergleicht man zwei Zahlen. Die Zahl davor heißt <b>Vorgänger</b>, die Zahl danach <b>Nachfolger</b>.",
        "beispiele": [
            "Auf dem Zahlenstrahl liegt die 9 zwischen der 8 und der 10.<svg viewBox='0 0 340 78' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20.0' y1='40' x2='326.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='334.0,40 324.0,34 324.0,46' fill='#38bdf8'/><line x1='26.0' y1='32' x2='26.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='26.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>4</text><line x1='55.2' y1='32' x2='55.2' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='55.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>5</text><line x1='84.4' y1='32' x2='84.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='84.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>6</text><line x1='113.6' y1='32' x2='113.6' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='113.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>7</text><line x1='142.8' y1='32' x2='142.8' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='142.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>8</text><line x1='172.0' y1='32' x2='172.0' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='172.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#f59e0b'>9</text><circle cx='172.0' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='201.2' y1='32' x2='201.2' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='201.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>10</text><line x1='230.4' y1='32' x2='230.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='230.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>11</text><line x1='259.6' y1='32' x2='259.6' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='259.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>12</text><line x1='288.8' y1='32' x2='288.8' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='288.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>13</text><line x1='318.0' y1='32' x2='318.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='318.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>14</text></svg>",
            "7 ist kleiner als 12, denn 7 steht weiter links auf dem Zahlenstrahl: 7 &lt; 12.<svg viewBox='0 0 340 78' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20.0' y1='40' x2='326.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='334.0,40 324.0,34 324.0,46' fill='#38bdf8'/><line x1='26.0' y1='32' x2='26.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='26.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>0</text><line x1='45.5' y1='32' x2='45.5' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='45.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>1</text><line x1='64.9' y1='32' x2='64.9' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='64.9' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>2</text><line x1='84.4' y1='32' x2='84.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='84.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>3</text><line x1='103.9' y1='32' x2='103.9' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='103.9' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>4</text><line x1='123.3' y1='32' x2='123.3' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='123.3' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>5</text><line x1='142.8' y1='32' x2='142.8' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='142.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>6</text><line x1='162.3' y1='32' x2='162.3' y2='48' stroke='#38bdf8' stroke-width='2'/><text x='162.3' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#38bdf8'>7</text><circle cx='162.3' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='181.7' y1='32' x2='181.7' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='181.7' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>8</text><line x1='201.2' y1='32' x2='201.2' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='201.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>9</text><line x1='220.7' y1='32' x2='220.7' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='220.7' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>10</text><line x1='240.1' y1='32' x2='240.1' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='240.1' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>11</text><line x1='259.6' y1='32' x2='259.6' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='259.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#f59e0b'>12</text><circle cx='259.6' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='279.1' y1='32' x2='279.1' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='279.1' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>13</text><line x1='298.5' y1='32' x2='298.5' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='298.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>14</text><line x1='318.0' y1='32' x2='318.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='318.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>15</text></svg>",
            "Die Nachbarn der 10 sind ihr Vorgänger 9 und ihr Nachfolger 11.<svg viewBox='0 0 340 78' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20.0' y1='40' x2='326.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='334.0,40 324.0,34 324.0,46' fill='#38bdf8'/><line x1='26.0' y1='32' x2='26.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='26.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>6</text><line x1='62.5' y1='32' x2='62.5' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='62.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>7</text><line x1='99.0' y1='32' x2='99.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='99.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>8</text><line x1='135.5' y1='32' x2='135.5' y2='48' stroke='#38bdf8' stroke-width='2'/><text x='135.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#38bdf8'>9</text><circle cx='135.5' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='172.0' y1='32' x2='172.0' y2='48' stroke='#fbbf24' stroke-width='2'/><text x='172.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#fbbf24'>10</text><circle cx='172.0' cy='40' r='7' fill='none' stroke='#fbbf24' stroke-width='2.5'/><line x1='208.5' y1='32' x2='208.5' y2='48' stroke='#38bdf8' stroke-width='2'/><text x='208.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#38bdf8'>11</text><circle cx='208.5' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='245.0' y1='32' x2='245.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='245.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>12</text><line x1='281.5' y1='32' x2='281.5' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='281.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>13</text><line x1='318.0' y1='32' x2='318.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='318.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>14</text></svg>"
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "zahlen20k1l1_l1",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "leicht",
                "points": 10,
                "question": "Auf welche Zahl zeigt der Kreis?",
                "answers": [
                    "8",
                    "10",
                    "7",
                    "9"
                ],
                "correct": 3,
                "explanation": "Der Kreis steht auf der 9.",
                "grafik": "<svg viewBox='0 0 340 78' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20.0' y1='40' x2='326.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='334.0,40 324.0,34 324.0,46' fill='#38bdf8'/><line x1='26.0' y1='32' x2='26.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='26.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>3</text><line x1='55.2' y1='32' x2='55.2' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='55.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>4</text><line x1='84.4' y1='32' x2='84.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='84.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>5</text><line x1='113.6' y1='32' x2='113.6' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='113.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>6</text><line x1='142.8' y1='32' x2='142.8' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='142.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>7</text><line x1='172.0' y1='32' x2='172.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='172.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>8</text><line x1='201.2' y1='32' x2='201.2' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='201.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#f59e0b'>9</text><circle cx='201.2' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='230.4' y1='32' x2='230.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='230.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>10</text><line x1='259.6' y1='32' x2='259.6' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='259.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>11</text><line x1='288.8' y1='32' x2='288.8' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='288.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>12</text><line x1='318.0' y1='32' x2='318.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='318.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>13</text></svg>"
            },
            {
                "id": "zahlen20k1l1_l2",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl ist größer: 6 oder 14?",
                "answers": [
                    "6",
                    "9",
                    "4",
                    "14"
                ],
                "correct": 3,
                "explanation": "14 steht weiter rechts auf dem Zahlenstrahl, also ist 14 größer."
            },
            {
                "id": "zahlen20k1l1_l3",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl kommt nach der 7?",
                "answers": [
                    "6",
                    "9",
                    "5",
                    "8"
                ],
                "correct": 3,
                "explanation": "Nach der 7 kommt ihr Nachfolger, die 8."
            },
            {
                "id": "zahlen20k1l1_l4",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "leicht",
                "points": 10,
                "question": "Welche Zahl kommt vor der 10?",
                "answers": [
                    "11",
                    "8",
                    "12",
                    "9"
                ],
                "correct": 3,
                "explanation": "Vor der 10 steht ihr Vorgänger, die 9."
            }
        ],
        "mittel": [
            {
                "id": "zahlen20k1l1_m1",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Zahl fehlt auf dem Zahlenstrahl?",
                "answers": [
                    "12",
                    "15",
                    "11",
                    "13"
                ],
                "correct": 3,
                "explanation": "Die Reihe zählt in Einerschritten: 11, 12, 13, 14 – es fehlt die 13.",
                "grafik": "<svg viewBox='0 0 340 78' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20.0' y1='40' x2='326.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='334.0,40 324.0,34 324.0,46' fill='#38bdf8'/><line x1='26.0' y1='32' x2='26.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='26.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>9</text><line x1='62.5' y1='32' x2='62.5' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='62.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>10</text><line x1='99.0' y1='32' x2='99.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='99.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>11</text><line x1='135.5' y1='32' x2='135.5' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='135.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>12</text><line x1='172.0' y1='32' x2='172.0' y2='48' stroke='#fbbf24' stroke-width='2'/><text x='172.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#fbbf24'>?</text><line x1='208.5' y1='32' x2='208.5' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='208.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>14</text><line x1='245.0' y1='32' x2='245.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='245.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>15</text><line x1='281.5' y1='32' x2='281.5' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='281.5' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>16</text><line x1='318.0' y1='32' x2='318.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='318.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>17</text></svg>"
            },
            {
                "id": "zahlen20k1l1_m2",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welches Zeichen passt? 8 __ 15",
                "answers": [
                    "=",
                    ">",
                    "≠",
                    "<"
                ],
                "correct": 3,
                "explanation": "8 ist kleiner als 15, deshalb passt das Zeichen <."
            },
            {
                "id": "zahlen20k1l1_m3",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was sind die beiden Nachbarn der 14?",
                "answers": [
                    "12 und 13",
                    "14 und 15",
                    "15 und 16",
                    "13 und 15"
                ],
                "correct": 3,
                "explanation": "Vorgänger und Nachfolger der 14 sind 13 und 15."
            },
            {
                "id": "zahlen20k1l1_m4",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche der drei Zahlen ist am größten: 12, 19, 16?",
                "answers": [
                    "12",
                    "16",
                    "10",
                    "19"
                ],
                "correct": 3,
                "explanation": "19 steht von den drei Zahlen am weitesten rechts auf dem Zahlenstrahl.",
                "grafik": "<svg viewBox='0 0 340 78' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20.0' y1='40' x2='326.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='334.0,40 324.0,34 324.0,46' fill='#38bdf8'/><line x1='26.0' y1='32' x2='26.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='26.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>10</text><line x1='55.2' y1='32' x2='55.2' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='55.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>11</text><line x1='84.4' y1='32' x2='84.4' y2='48' stroke='#38bdf8' stroke-width='2'/><text x='84.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#38bdf8'>12</text><circle cx='84.4' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='113.6' y1='32' x2='113.6' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='113.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>13</text><line x1='142.8' y1='32' x2='142.8' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='142.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>14</text><line x1='172.0' y1='32' x2='172.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='172.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>15</text><line x1='201.2' y1='32' x2='201.2' y2='48' stroke='#38bdf8' stroke-width='2'/><text x='201.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#38bdf8'>16</text><circle cx='201.2' cy='40' r='7' fill='none' stroke='#38bdf8' stroke-width='2.5'/><line x1='230.4' y1='32' x2='230.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='230.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>17</text><line x1='259.6' y1='32' x2='259.6' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='259.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>18</text><line x1='288.8' y1='32' x2='288.8' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='288.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#f59e0b'>19</text><circle cx='288.8' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='318.0' y1='32' x2='318.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='318.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>20</text></svg>"
            }
        ],
        "schwer": [
            {
                "id": "zahlen20k1l1_s1",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "schwer",
                "points": 10,
                "question": "Ordne von klein nach groß: 15, 7, 12",
                "answers": [
                    "15, 12, 7",
                    "12, 7, 15",
                    "7, 15, 12",
                    "7, 12, 15"
                ],
                "correct": 3,
                "explanation": "Von klein nach groß geordnet: 7, dann 12, dann 15."
            },
            {
                "id": "zahlen20k1l1_s2",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "schwer",
                "points": 10,
                "question": "Wie viele Zahlen liegen zwischen 6 und 11 (ohne 6 und 11 selbst)?",
                "answers": [
                    "3",
                    "5",
                    "6",
                    "4"
                ],
                "correct": 3,
                "explanation": "Zwischen 6 und 11 liegen 7, 8, 9 und 10 – das sind 4 Zahlen."
            },
            {
                "id": "zahlen20k1l1_s3",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welche Zahl ist der Nachfolger der markierten Zahl?",
                "answers": [
                    "17",
                    "20",
                    "16",
                    "19"
                ],
                "correct": 3,
                "explanation": "Die markierte Zahl ist 18, ihr Nachfolger ist 19.",
                "grafik": "<svg viewBox='0 0 340 78' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20.0' y1='40' x2='326.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='334.0,40 324.0,34 324.0,46' fill='#38bdf8'/><line x1='26.0' y1='32' x2='26.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='26.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>13</text><line x1='67.7' y1='32' x2='67.7' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='67.7' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>14</text><line x1='109.4' y1='32' x2='109.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='109.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>15</text><line x1='151.1' y1='32' x2='151.1' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='151.1' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>16</text><line x1='192.9' y1='32' x2='192.9' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='192.9' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>17</text><line x1='234.6' y1='32' x2='234.6' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='234.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#f59e0b'>18</text><circle cx='234.6' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='276.3' y1='32' x2='276.3' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='276.3' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>19</text><line x1='318.0' y1='32' x2='318.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='318.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>20</text></svg>"
            },
            {
                "id": "zahlen20k1l1_s4",
                "category": "kurs_zahlen20_k1_l1",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "schwer",
                "points": 10,
                "question": "Welche Aussage stimmt: 16 und 9?",
                "answers": [
                    "16 ist kleiner als 9",
                    "16 ist gleich 9",
                    "9 ist größer als 16",
                    "16 ist größer als 9"
                ],
                "correct": 3,
                "explanation": "16 steht weiter rechts auf dem Zahlenstrahl als 9, also ist 16 größer."
            }
        ]
    },
    "test": [
        {
            "id": "zahlen20k1l1_t1",
            "category": "kurs_zahlen20_k1_l1",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Auf welche Zahl zeigt der Kreis?",
            "answers": [
                "11",
                "13",
                "10",
                "12"
            ],
            "correct": 3,
            "explanation": "Der Kreis steht auf der 12.",
            "grafik": "<svg viewBox='0 0 340 78' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20.0' y1='40' x2='326.0' y2='40' stroke='#38bdf8' stroke-width='3' stroke-linecap='round'/><polygon points='334.0,40 324.0,34 324.0,46' fill='#38bdf8'/><line x1='26.0' y1='32' x2='26.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='26.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>6</text><line x1='55.2' y1='32' x2='55.2' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='55.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>7</text><line x1='84.4' y1='32' x2='84.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='84.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>8</text><line x1='113.6' y1='32' x2='113.6' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='113.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>9</text><line x1='142.8' y1='32' x2='142.8' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='142.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>10</text><line x1='172.0' y1='32' x2='172.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='172.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>11</text><line x1='201.2' y1='32' x2='201.2' y2='48' stroke='#f59e0b' stroke-width='2'/><text x='201.2' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#f59e0b'>12</text><circle cx='201.2' cy='40' r='7' fill='none' stroke='#f59e0b' stroke-width='2.5'/><line x1='230.4' y1='32' x2='230.4' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='230.4' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>13</text><line x1='259.6' y1='32' x2='259.6' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='259.6' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>14</text><line x1='288.8' y1='32' x2='288.8' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='288.8' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>15</text><line x1='318.0' y1='32' x2='318.0' y2='48' stroke='#e2e8f0' stroke-width='2'/><text x='318.0' y='66' text-anchor='middle' font-size='13' font-family='sans-serif' font-weight='700' fill='#e2e8f0'>16</text></svg>"
        },
        {
            "id": "zahlen20k1l1_t2",
            "category": "kurs_zahlen20_k1_l1",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl kommt nach der 15?",
            "answers": [
                "14",
                "17",
                "13",
                "16"
            ],
            "correct": 3,
            "explanation": "Nach der 15 kommt ihr Nachfolger, die 16."
        },
        {
            "id": "zahlen20k1l1_t3",
            "category": "kurs_zahlen20_k1_l1",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl kommt vor der 20?",
            "answers": [
                "18",
                "21",
                "17",
                "19"
            ],
            "correct": 3,
            "explanation": "Vor der 20 steht ihr Vorgänger, die 19."
        },
        {
            "id": "zahlen20k1l1_t4",
            "category": "kurs_zahlen20_k1_l1",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welches Zeichen passt? 17 __ 5",
            "answers": [
                "<",
                "=",
                "≠",
                ">"
            ],
            "correct": 3,
            "explanation": "17 ist größer als 5, deshalb passt das Zeichen >."
        },
        {
            "id": "zahlen20k1l1_t5",
            "category": "kurs_zahlen20_k1_l1",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl ist größer: 13 oder 8?",
            "answers": [
                "8",
                "10",
                "5",
                "13"
            ],
            "correct": 3,
            "explanation": "13 steht weiter rechts auf dem Zahlenstrahl als 8, also ist 13 größer."
        },
        {
            "id": "zahlen20k1l1_t6",
            "category": "kurs_zahlen20_k1_l1",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Welche Zahl fehlt? 15, 16, __, 18",
            "answers": [
                "14",
                "19",
                "20",
                "17"
            ],
            "correct": 3,
            "explanation": "Die Reihe zählt in Einerschritten, an der Stelle fehlt die 17."
        }
    ],
    "bestehenAb": 0.8
}, {
    "id": "zahlen20_k1_l2",
    "kurs": "zahlen20_k1",
    "order": 2,
    "icon": "➕",
    "title": "Plus und Minus bis 20",
    "kurz": "Rechnen ohne Übertrag, Textaufgaben",
    "erklaerung": {
        "intro": "<b>Plus</b> (+) bedeutet: es kommen Dinge dazu, die Menge wird größer. <b>Minus</b> (-) bedeutet: Dinge werden weggenommen, die Menge wird kleiner. Man rechnet oft über die <b>10</b>: 8 + 5 sind erst 8 + 2 = 10, dann noch 3 dazu: 10 + 3 = 13.",
        "beispiele": [
            "8 Punkte und 5 Punkte zusammen sind 13 Punkte: 8 + 5 = 13.<svg viewBox='0 0 200 90' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='24.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='44.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='64.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='84.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='104.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='124.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='144.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='164.0' cy='16.0' r='8' fill='#f59e0b'/><text x='95.0' y='48' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>+</text><circle cx='24.0' cy='60.0' r='8' fill='#38bdf8'/><circle cx='44.0' cy='60.0' r='8' fill='#38bdf8'/><circle cx='64.0' cy='60.0' r='8' fill='#38bdf8'/><circle cx='84.0' cy='60.0' r='8' fill='#38bdf8'/><circle cx='104.0' cy='60.0' r='8' fill='#38bdf8'/><text x='100.0' y='86' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>8 + 5 = 13</text></svg>",
            "Von 9 Punkten werden 4 weggenommen: 9 - 4 = 5 bleiben übrig.<svg viewBox='0 0 208 66' style='width:100%;max-width:208px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='24.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='44.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='64.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='84.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='104.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='124.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='144.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='164.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='184.0' cy='16.0' r='8' fill='#f59e0b'/><line x1='117.0' y1='9.0' x2='131.0' y2='23.0' stroke='#ef4444' stroke-width='2.5'/><line x1='117.0' y1='23.0' x2='131.0' y2='9.0' stroke='#ef4444' stroke-width='2.5'/><line x1='137.0' y1='9.0' x2='151.0' y2='23.0' stroke='#ef4444' stroke-width='2.5'/><line x1='137.0' y1='23.0' x2='151.0' y2='9.0' stroke='#ef4444' stroke-width='2.5'/><line x1='157.0' y1='9.0' x2='171.0' y2='23.0' stroke='#ef4444' stroke-width='2.5'/><line x1='157.0' y1='23.0' x2='171.0' y2='9.0' stroke='#ef4444' stroke-width='2.5'/><line x1='177.0' y1='9.0' x2='191.0' y2='23.0' stroke='#ef4444' stroke-width='2.5'/><line x1='177.0' y1='23.0' x2='191.0' y2='9.0' stroke='#ef4444' stroke-width='2.5'/><text x='104.0' y='62' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>9 - 4 = 5</text></svg>",
            "Rechengeschichte: Tom hat 6 Sticker. Er bekommt 7 dazu. Wie viele hat er jetzt? 6 + 7 = 13 Sticker."
        ]
    },
    "uebung": {
        "leicht": [
            {
                "id": "zahlen20k1l2_l1",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was ergibt 4 + 3?",
                "answers": [
                    "8",
                    "6",
                    "5",
                    "7"
                ],
                "correct": 3,
                "explanation": "4 + 3 = 7."
            },
            {
                "id": "zahlen20k1l2_l2",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was ergibt 10 + 6?",
                "answers": [
                    "15",
                    "17",
                    "14",
                    "16"
                ],
                "correct": 3,
                "explanation": "10 + 6 = 16."
            },
            {
                "id": "zahlen20k1l2_l3",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "leicht",
                "points": 10,
                "question": "Was ergibt 12 + 3?",
                "answers": [
                    "14",
                    "16",
                    "13",
                    "15"
                ],
                "correct": 3,
                "explanation": "12 + 3 = 15."
            },
            {
                "id": "zahlen20k1l2_l4",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "leicht",
                "points": 10,
                "question": "Wie viele Punkte sind es zusammen?",
                "answers": [
                    "9",
                    "6",
                    "10",
                    "8"
                ],
                "correct": 3,
                "explanation": "6 Punkte und 2 Punkte zusammen sind 6 + 2 = 8 Punkte.",
                "grafik": "<svg viewBox='0 0 200 90' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='24.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='44.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='64.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='84.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='104.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='124.0' cy='16.0' r='8' fill='#f59e0b'/><text x='95.0' y='48' font-size='15' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>+</text><circle cx='24.0' cy='60.0' r='8' fill='#38bdf8'/><circle cx='44.0' cy='60.0' r='8' fill='#38bdf8'/><text x='100.0' y='86' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>6 + 2 = 8</text></svg>"
            }
        ],
        "mittel": [
            {
                "id": "zahlen20k1l2_m1",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ergibt 9 - 3?",
                "answers": [
                    "5",
                    "7",
                    "8",
                    "6"
                ],
                "correct": 3,
                "explanation": "9 - 3 = 6."
            },
            {
                "id": "zahlen20k1l2_m2",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was ergibt 18 - 6?",
                "answers": [
                    "13",
                    "10",
                    "11",
                    "12"
                ],
                "correct": 3,
                "explanation": "18 - 6 = 12."
            },
            {
                "id": "zahlen20k1l2_m3",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Punkte bleiben übrig?",
                "answers": [
                    "4",
                    "6",
                    "3",
                    "5"
                ],
                "correct": 3,
                "explanation": "Von 9 Punkten werden 4 weggenommen: 9 - 4 = 5 bleiben übrig.",
                "grafik": "<svg viewBox='0 0 208 66' style='width:100%;max-width:208px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='24.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='44.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='64.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='84.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='104.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='124.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='144.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='164.0' cy='16.0' r='8' fill='#f59e0b'/><circle cx='184.0' cy='16.0' r='8' fill='#f59e0b'/><line x1='117.0' y1='9.0' x2='131.0' y2='23.0' stroke='#ef4444' stroke-width='2.5'/><line x1='117.0' y1='23.0' x2='131.0' y2='9.0' stroke='#ef4444' stroke-width='2.5'/><line x1='137.0' y1='9.0' x2='151.0' y2='23.0' stroke='#ef4444' stroke-width='2.5'/><line x1='137.0' y1='23.0' x2='151.0' y2='9.0' stroke='#ef4444' stroke-width='2.5'/><line x1='157.0' y1='9.0' x2='171.0' y2='23.0' stroke='#ef4444' stroke-width='2.5'/><line x1='157.0' y1='23.0' x2='171.0' y2='9.0' stroke='#ef4444' stroke-width='2.5'/><line x1='177.0' y1='9.0' x2='191.0' y2='23.0' stroke='#ef4444' stroke-width='2.5'/><line x1='177.0' y1='23.0' x2='191.0' y2='9.0' stroke='#ef4444' stroke-width='2.5'/><text x='104.0' y='62' text-anchor='middle' font-size='14' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>9 - 4 = 5</text></svg>"
            },
            {
                "id": "zahlen20k1l2_m4",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was muss man zu 7 dazuzählen, damit 12 herauskommt? 7 + __ = 12",
                "answers": [
                    "4",
                    "6",
                    "3",
                    "5"
                ],
                "correct": 3,
                "explanation": "7 + 5 = 12, also fehlen 5."
            }
        ],
        "schwer": [
            {
                "id": "zahlen20k1l2_s1",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "schwer",
                "points": 10,
                "question": "Was ergibt 8 + 5?",
                "answers": [
                    "11",
                    "14",
                    "12",
                    "13"
                ],
                "correct": 3,
                "explanation": "8 + 5 = 13. Erst 8 + 2 = 10, dann noch 3 dazu: 10 + 3 = 13."
            },
            {
                "id": "zahlen20k1l2_s2",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "schwer",
                "points": 10,
                "question": "Lea hat 9 Murmeln. Sie bekommt 6 dazu. Wie viele Murmeln hat sie jetzt?",
                "answers": [
                    "14",
                    "16",
                    "13",
                    "15"
                ],
                "correct": 3,
                "explanation": "9 + 6 = 15 Murmeln."
            },
            {
                "id": "zahlen20k1l2_s3",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "schwer",
                "points": 10,
                "question": "Ben hat 16 Bonbons. Er verschenkt 9. Wie viele bleiben ihm?",
                "answers": [
                    "8",
                    "6",
                    "5",
                    "7"
                ],
                "correct": 3,
                "explanation": "16 - 9 = 7 Bonbons bleiben übrig."
            },
            {
                "id": "zahlen20k1l2_s4",
                "category": "kurs_zahlen20_k1_l2",
                "area": "schule",
                "grade": 1,
                "subject": "mathe",
                "topic": "zahlen20",
                "difficulty": "schwer",
                "points": 10,
                "question": "Was ergibt 20 - 8?",
                "answers": [
                    "10",
                    "13",
                    "11",
                    "12"
                ],
                "correct": 3,
                "explanation": "20 - 8 = 12."
            }
        ]
    },
    "test": [
        {
            "id": "zahlen20k1l2_t1",
            "category": "kurs_zahlen20_k1_l2",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was ergibt 5 + 6?",
            "answers": [
                "9",
                "12",
                "10",
                "11"
            ],
            "correct": 3,
            "explanation": "5 + 6 = 11."
        },
        {
            "id": "zahlen20k1l2_t2",
            "category": "kurs_zahlen20_k1_l2",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was ergibt 15 - 7?",
            "answers": [
                "6",
                "9",
                "10",
                "8"
            ],
            "correct": 3,
            "explanation": "15 - 7 = 8."
        },
        {
            "id": "zahlen20k1l2_t3",
            "category": "kurs_zahlen20_k1_l2",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was ergibt 9 + 9?",
            "answers": [
                "16",
                "19",
                "17",
                "18"
            ],
            "correct": 3,
            "explanation": "9 + 9 = 18."
        },
        {
            "id": "zahlen20k1l2_t4",
            "category": "kurs_zahlen20_k1_l2",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Mia hat 14 Sticker und klebt 5 davon ein. Wie viele Sticker hat sie noch?",
            "answers": [
                "8",
                "10",
                "11",
                "9"
            ],
            "correct": 3,
            "explanation": "14 - 5 = 9 Sticker bleiben übrig."
        },
        {
            "id": "zahlen20k1l2_t5",
            "category": "kurs_zahlen20_k1_l2",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Paul sammelt 7 Kastanien, dann noch 8 mehr. Wie viele hat er insgesamt?",
            "answers": [
                "14",
                "16",
                "13",
                "15"
            ],
            "correct": 3,
            "explanation": "7 + 8 = 15 Kastanien."
        },
        {
            "id": "zahlen20k1l2_t6",
            "category": "kurs_zahlen20_k1_l2",
            "area": "schule",
            "grade": 1,
            "subject": "mathe",
            "topic": "zahlen20",
            "difficulty": "mittel",
            "points": 10,
            "question": "Was ergibt 20 - 12?",
            "answers": [
                "9",
                "6",
                "10",
                "8"
            ],
            "correct": 3,
            "explanation": "20 - 12 = 8."
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
