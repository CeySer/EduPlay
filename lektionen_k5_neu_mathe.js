// Neue Mathekurse Klasse 5: Koordinaten, Geraden, Umfang/Fläche, schriftlich (28.11.2026)
(function () {
    const extraKurse = [{"id": "koordinaten_k5", "title": "Koordinatensystem", "icon": "📍", "grade": 5, "subject": "mathe", "beschreibung": "Punkte ablesen und eintragen, Figuren im Koordinatensystem."}, {"id": "geraden_k5", "title": "Geraden, Strecken, Abstand", "icon": "📐", "grade": 5, "subject": "mathe", "beschreibung": "Strecke, Strahl, Gerade, senkrecht, parallel und Abstand."}, {"id": "umfang_flaeche_k5", "title": "Umfang und Flächeninhalt", "icon": "⬛", "grade": 5, "subject": "mathe", "beschreibung": "Rechteck und Quadrat, Flächeneinheiten umrechnen."}, {"id": "schriftlich_k5", "title": "Schriftlich rechnen", "icon": "✍️", "grade": 5, "subject": "mathe", "beschreibung": "Schriftlich multiplizieren und dividieren – auch durch zweistellige Zahlen."}];
    const extraLektionen = [
 {
  "id": "ko_k5_l1",
  "kurs": "koordinaten_k5",
  "order": 1,
  "icon": "📍",
  "title": "Punkte ablesen",
  "kurz": "Erst x (rechts), dann y (hoch)",
  "erklaerung": {
   "intro": "Ein <b>Koordinatensystem</b> hat zwei Achsen: die <b>x-Achse</b> (waagerecht) und die <b>y-Achse</b> (senkrecht). Sie treffen sich im <b>Ursprung (0|0)</b>. Ein Punkt wird so angegeben: <b>P(3|2)</b> – erst <b>3 nach rechts</b> (x), dann <b>2 nach oben</b> (y). Merke: <b>Erst gehen, dann fliegen!</b>",
   "merksatz": "P(x|y): erst nach rechts gehen, dann nach oben fliegen.",
   "beispiele": [
    "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='132' cy='166' r='6' fill='#f97316'/><text x='140' y='158' font-size='16' font-weight='700' fill='#c2410c'>A</text></svg>A(3|2)",
    "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='64' cy='98' r='6' fill='#f97316'/><text x='72' y='90' font-size='16' font-weight='700' fill='#c2410c'>B</text><circle cx='200' cy='200' r='6' fill='#f97316'/><text x='208' y='192' font-size='16' font-weight='700' fill='#c2410c'>C</text></svg>B(1|4), C(5|1)",
    "Ursprung: O(0|0)"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "kok5l1u_leicht_1",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Koordinaten hat A?",
     "answers": [
      "A(2|3)",
      "A(3|3)",
      "A(3|2)",
      "A(2|2)"
     ],
     "correct": 2,
     "explanation": "3 nach rechts, 2 nach oben.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='132' cy='166' r='6' fill='#f97316'/><text x='140' y='158' font-size='16' font-weight='700' fill='#c2410c'>A</text></svg>"
    },
    {
     "id": "kok5l1u_leicht_2",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Koordinaten hat B?",
     "answers": [
      "B(4|1)",
      "B(1|1)",
      "B(4|4)",
      "B(1|4)"
     ],
     "correct": 3,
     "explanation": "1 rechts, 4 hoch.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='64' cy='98' r='6' fill='#f97316'/><text x='72' y='90' font-size='16' font-weight='700' fill='#c2410c'>B</text></svg>"
    },
    {
     "id": "kok5l1u_leicht_3",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was gibt man zuerst an?",
     "answers": [
      "den y-Wert (nach oben)",
      "den x-Wert (nach rechts)",
      "egal",
      "den größeren Wert"
     ],
     "correct": 1,
     "explanation": "Erst gehen, dann fliegen.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l1u_leicht_4",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt der Punkt (0|0)?",
     "answers": [
      "Ursprung",
      "Ende",
      "Mitte",
      "Achse"
     ],
     "correct": 0,
     "explanation": "Ursprung.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l1u_leicht_5",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Koordinaten hat C?",
     "answers": [
      "C(5|1)",
      "C(1|5)",
      "C(5|5)",
      "C(4|1)"
     ],
     "correct": 0,
     "explanation": "5 rechts, 1 hoch.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='200' cy='200' r='6' fill='#f97316'/><text x='208' y='192' font-size='16' font-weight='700' fill='#c2410c'>C</text></svg>"
    }
   ],
   "mittel": [
    {
     "id": "kok5l1u_mittel_1",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Koordinaten hat D?",
     "answers": [
      "D(3|0)",
      "D(0|0)",
      "D(0|3)",
      "D(3|3)"
     ],
     "correct": 2,
     "explanation": "Auf der y-Achse: x = 0.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='30' cy='132' r='6' fill='#f97316'/><text x='38' y='124' font-size='16' font-weight='700' fill='#c2410c'>D</text></svg>"
    },
    {
     "id": "kok5l1u_mittel_2",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Koordinaten hat E?",
     "answers": [
      "E(4|0)",
      "E(0|4)",
      "E(4|4)",
      "E(1|4)"
     ],
     "correct": 0,
     "explanation": "Auf der x-Achse: y = 0.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='166' cy='234' r='6' fill='#f97316'/><text x='174' y='226' font-size='16' font-weight='700' fill='#c2410c'>E</text></svg>"
    },
    {
     "id": "kok5l1u_mittel_3",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Punkt liegt auf der x-Achse?",
     "answers": [
      "P(0|5)",
      "P(5|5)",
      "P(5|0)",
      "P(1|1)"
     ],
     "correct": 2,
     "explanation": "y = 0.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l1u_mittel_4",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Punkt hat die Koordinaten (2|5)?",
     "answers": [
      "F",
      "G",
      "H",
      "keiner"
     ],
     "correct": 0,
     "explanation": "2 rechts, 5 hoch.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='98' cy='64' r='6' fill='#f97316'/><text x='106' y='56' font-size='16' font-weight='700' fill='#c2410c'>F</text><circle cx='200' cy='166' r='6' fill='#f97316'/><text x='208' y='158' font-size='16' font-weight='700' fill='#c2410c'>G</text><circle cx='98' cy='166' r='6' fill='#f97316'/><text x='106' y='158' font-size='16' font-weight='700' fill='#c2410c'>H</text></svg>"
    },
    {
     "id": "kok5l1u_mittel_5",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie heißt die waagerechte Achse?",
     "answers": [
      "y-Achse",
      "x-Achse",
      "z-Achse",
      "Hochachse"
     ],
     "correct": 1,
     "explanation": "Waagerecht = x.",
     "topic": "koordinaten"
    }
   ],
   "schwer": [
    {
     "id": "kok5l1u_schwer_1",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "A(1|1), B(4|1), C(4|3). Welcher Punkt D macht daraus ein Rechteck?",
     "answers": [
      "D(1|3)",
      "D(3|1)",
      "D(4|4)",
      "D(1|4)"
     ],
     "correct": 0,
     "explanation": "Gleiche x wie A, gleiche y wie C.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='64' cy='200' r='6' fill='#f97316'/><text x='72' y='192' font-size='16' font-weight='700' fill='#c2410c'>A</text><circle cx='166' cy='200' r='6' fill='#f97316'/><text x='174' y='192' font-size='16' font-weight='700' fill='#c2410c'>B</text><circle cx='166' cy='132' r='6' fill='#f97316'/><text x='174' y='124' font-size='16' font-weight='700' fill='#c2410c'>C</text></svg>"
    },
    {
     "id": "kok5l1u_schwer_2",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie weit ist es von A(1|2) nach B(5|2)?",
     "answers": [
      "3 Einheiten",
      "5 Einheiten",
      "4 Einheiten",
      "7 Einheiten"
     ],
     "correct": 2,
     "explanation": "5 − 1 = 4.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l1u_schwer_3",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Punkt liegt genau zwischen (0|2) und (6|2)?",
     "answers": [
      "(2|3)",
      "(3|3)",
      "(6|1)",
      "(3|2)"
     ],
     "correct": 3,
     "explanation": "Mitte von 0 und 6 ist 3.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l1u_schwer_4",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Kästchen nach oben liegt P(2|5) über Q(2|1)?",
     "answers": [
      "3",
      "4",
      "5",
      "6"
     ],
     "correct": 1,
     "explanation": "5 − 1.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l1u_schwer_5",
     "category": "kurs_ko_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Quadrat hat A(0|0), B(3|0), C(3|3). Wo liegt D?",
     "answers": [
      "D(0|3)",
      "D(3|0)",
      "D(0|0)",
      "D(3|3)"
     ],
     "correct": 0,
     "explanation": "Viertes Eck.",
     "topic": "koordinaten"
    }
   ]
  },
  "test": [
   {
    "id": "kok5l1_test_1",
    "category": "kurs_ko_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Koordinaten hat A?",
    "answers": [
     "A(3|4)",
     "A(4|3)",
     "A(4|4)",
     "A(3|3)"
    ],
    "correct": 1,
    "explanation": "4 rechts, 3 hoch.",
    "topic": "koordinaten",
    "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='166' cy='132' r='6' fill='#f97316'/><text x='174' y='124' font-size='16' font-weight='700' fill='#c2410c'>A</text></svg>"
   },
   {
    "id": "kok5l1_test_2",
    "category": "kurs_ko_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Koordinaten hat B?",
    "answers": [
     "B(6|2)",
     "B(2|6)",
     "B(2|2)",
     "B(6|6)"
    ],
    "correct": 1,
    "explanation": "2 rechts, 6 hoch.",
    "topic": "koordinaten",
    "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='98' cy='30' r='6' fill='#f97316'/><text x='106' y='22' font-size='16' font-weight='700' fill='#c2410c'>B</text></svg>"
   },
   {
    "id": "kok5l1_test_3",
    "category": "kurs_ko_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Wert steht in P(x|y) vorne?",
    "answers": [
     "y",
     "beide",
     "x",
     "keiner"
    ],
    "correct": 2,
    "explanation": "x zuerst.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l1_test_4",
    "category": "kurs_ko_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Koordinaten hat der Ursprung?",
    "answers": [
     "(1|1)",
     "(0|1)",
     "(0|0)",
     "(1|0)"
    ],
    "correct": 2,
    "explanation": "Ursprung.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l1_test_5",
    "category": "kurs_ko_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Punkt liegt auf der y-Achse?",
    "answers": [
     "Q(0|4)",
     "Q(4|0)",
     "Q(4|4)",
     "Q(2|1)"
    ],
    "correct": 0,
    "explanation": "x = 0.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l1_test_6",
    "category": "kurs_ko_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Koordinaten hat C?",
    "answers": [
     "C(6|0)",
     "C(0|6)",
     "C(6|6)",
     "C(5|0)"
    ],
    "correct": 0,
    "explanation": "Auf der x-Achse.",
    "topic": "koordinaten",
    "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='234' cy='234' r='6' fill='#f97316'/><text x='242' y='226' font-size='16' font-weight='700' fill='#c2410c'>C</text></svg>"
   },
   {
    "id": "kok5l1_test_7",
    "category": "kurs_ko_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie weit ist es von (2|1) nach (2|5)?",
    "answers": [
     "3 Einheiten",
     "5 Einheiten",
     "6 Einheiten",
     "4 Einheiten"
    ],
    "correct": 3,
    "explanation": "5 − 1.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l1_test_8",
    "category": "kurs_ko_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie heißt die senkrechte Achse?",
    "answers": [
     "x-Achse",
     "Ursprung",
     "Gerade",
     "y-Achse"
    ],
    "correct": 3,
    "explanation": "Senkrecht = y.",
    "topic": "koordinaten"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "ko_k5_l2",
  "kurs": "koordinaten_k5",
  "order": 2,
  "icon": "🔷",
  "title": "Figuren im Koordinatensystem",
  "kurz": "Punkte verbinden, Figuren erkennen",
  "erklaerung": {
   "intro": "Verbindet man Punkte im Koordinatensystem, entstehen <b>Figuren</b>. A(1|1), B(5|1), C(5|4), D(1|4) ergeben ein <b>Rechteck</b> mit 4 Kästchen Breite und 3 Kästchen Höhe. Seitenlängen bestimmst du, indem du die <b>Differenz</b> der x-Werte (waagerecht) oder y-Werte (senkrecht) berechnest.",
   "merksatz": "Waagerechte Seite: x-Werte abziehen. Senkrechte Seite: y-Werte abziehen.",
   "beispiele": [
    "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='64' cy='200' r='6' fill='#f97316'/><text x='72' y='192' font-size='16' font-weight='700' fill='#c2410c'>A</text><circle cx='200' cy='200' r='6' fill='#f97316'/><text x='208' y='192' font-size='16' font-weight='700' fill='#c2410c'>B</text><circle cx='200' cy='98' r='6' fill='#f97316'/><text x='208' y='90' font-size='16' font-weight='700' fill='#c2410c'>C</text><circle cx='64' cy='98' r='6' fill='#f97316'/><text x='72' y='90' font-size='16' font-weight='700' fill='#c2410c'>D</text></svg>Rechteck 4 × 3",
    "Seite AB: 5 − 1 = 4",
    "Seite BC: 4 − 1 = 3"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "kok5l2u_leicht_1",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Figur ergeben A(1|1), B(5|1), C(5|4), D(1|4)?",
     "answers": [
      "Dreieck",
      "Rechteck",
      "Kreis",
      "Fünfeck"
     ],
     "correct": 1,
     "explanation": "4 rechte Winkel.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='64' cy='200' r='6' fill='#f97316'/><text x='72' y='192' font-size='16' font-weight='700' fill='#c2410c'>A</text><circle cx='200' cy='200' r='6' fill='#f97316'/><text x='208' y='192' font-size='16' font-weight='700' fill='#c2410c'>B</text><circle cx='200' cy='98' r='6' fill='#f97316'/><text x='208' y='90' font-size='16' font-weight='700' fill='#c2410c'>C</text><circle cx='64' cy='98' r='6' fill='#f97316'/><text x='72' y='90' font-size='16' font-weight='700' fill='#c2410c'>D</text></svg>"
    },
    {
     "id": "kok5l2u_leicht_2",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie lang ist AB bei A(1|1), B(5|1)?",
     "answers": [
      "5",
      "6",
      "1",
      "4"
     ],
     "correct": 3,
     "explanation": "5 − 1.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_leicht_3",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Figur ergeben A(1|1), B(4|1), C(1|4)?",
     "answers": [
      "Viereck",
      "Quadrat",
      "Dreieck",
      "Kreis"
     ],
     "correct": 2,
     "explanation": "Drei Punkte.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='64' cy='200' r='6' fill='#f97316'/><text x='72' y='192' font-size='16' font-weight='700' fill='#c2410c'>A</text><circle cx='166' cy='200' r='6' fill='#f97316'/><text x='174' y='192' font-size='16' font-weight='700' fill='#c2410c'>B</text><circle cx='64' cy='98' r='6' fill='#f97316'/><text x='72' y='90' font-size='16' font-weight='700' fill='#c2410c'>C</text></svg>"
    },
    {
     "id": "kok5l2u_leicht_4",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie lang ist BC bei B(5|1), C(5|4)?",
     "answers": [
      "3",
      "4",
      "5",
      "1"
     ],
     "correct": 0,
     "explanation": "4 − 1.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_leicht_5",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Ecken hat ein Viereck?",
     "answers": [
      "3",
      "4",
      "5",
      "6"
     ],
     "correct": 1,
     "explanation": "Vier.",
     "topic": "koordinaten"
    }
   ],
   "mittel": [
    {
     "id": "kok5l2u_mittel_1",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Figur ergeben A(1|1), B(4|1), C(4|4), D(1|4)?",
     "answers": [
      "Quadrat",
      "Rechteck (nicht quadratisch)",
      "Dreieck",
      "Raute"
     ],
     "correct": 0,
     "explanation": "Alle Seiten 3.",
     "topic": "koordinaten",
     "grafik": "<svg viewBox='0 0 268 268' style='width:100%;max-width:260px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='30' y2='234' stroke='#e2e8f0'/><line x1='30' y1='30' x2='234' y2='30' stroke='#e2e8f0'/><text x='30' y='252' text-anchor='middle' font-size='13'>0</text><text x='20' y='239' text-anchor='end' font-size='13'>0</text><line x1='64' y1='30' x2='64' y2='234' stroke='#e2e8f0'/><line x1='30' y1='64' x2='234' y2='64' stroke='#e2e8f0'/><text x='64' y='252' text-anchor='middle' font-size='13'>1</text><text x='20' y='205' text-anchor='end' font-size='13'>1</text><line x1='98' y1='30' x2='98' y2='234' stroke='#e2e8f0'/><line x1='30' y1='98' x2='234' y2='98' stroke='#e2e8f0'/><text x='98' y='252' text-anchor='middle' font-size='13'>2</text><text x='20' y='171' text-anchor='end' font-size='13'>2</text><line x1='132' y1='30' x2='132' y2='234' stroke='#e2e8f0'/><line x1='30' y1='132' x2='234' y2='132' stroke='#e2e8f0'/><text x='132' y='252' text-anchor='middle' font-size='13'>3</text><text x='20' y='137' text-anchor='end' font-size='13'>3</text><line x1='166' y1='30' x2='166' y2='234' stroke='#e2e8f0'/><line x1='30' y1='166' x2='234' y2='166' stroke='#e2e8f0'/><text x='166' y='252' text-anchor='middle' font-size='13'>4</text><text x='20' y='103' text-anchor='end' font-size='13'>4</text><line x1='200' y1='30' x2='200' y2='234' stroke='#e2e8f0'/><line x1='30' y1='200' x2='234' y2='200' stroke='#e2e8f0'/><text x='200' y='252' text-anchor='middle' font-size='13'>5</text><text x='20' y='69' text-anchor='end' font-size='13'>5</text><line x1='234' y1='30' x2='234' y2='234' stroke='#e2e8f0'/><line x1='30' y1='234' x2='234' y2='234' stroke='#e2e8f0'/><text x='234' y='252' text-anchor='middle' font-size='13'>6</text><text x='20' y='35' text-anchor='end' font-size='13'>6</text><line x1='30' y1='234' x2='246' y2='234' stroke='#1e293b' stroke-width='2.5'/><line x1='30' y1='234' x2='30' y2='18' stroke='#1e293b' stroke-width='2.5'/><text x='250' y='239' font-size='14' font-style='italic'>x</text><text x='26' y='14' font-size='14' font-style='italic'>y</text><circle cx='64' cy='200' r='6' fill='#f97316'/><text x='72' y='192' font-size='16' font-weight='700' fill='#c2410c'>A</text><circle cx='166' cy='200' r='6' fill='#f97316'/><text x='174' y='192' font-size='16' font-weight='700' fill='#c2410c'>B</text><circle cx='166' cy='98' r='6' fill='#f97316'/><text x='174' y='90' font-size='16' font-weight='700' fill='#c2410c'>C</text><circle cx='64' cy='98' r='6' fill='#f97316'/><text x='72' y='90' font-size='16' font-weight='700' fill='#c2410c'>D</text></svg>"
    },
    {
     "id": "kok5l2u_mittel_2",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Umfang des Rechtecks A(0|0), B(4|0), C(4|2), D(0|2)?",
     "answers": [
      "8",
      "6",
      "12",
      "10"
     ],
     "correct": 2,
     "explanation": "4 + 2 + 4 + 2.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_mittel_3",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wo liegt die vierte Ecke? A(2|1), B(5|1), C(5|5)",
     "answers": [
      "D(5|2)",
      "D(1|5)",
      "D(2|2)",
      "D(2|5)"
     ],
     "correct": 3,
     "explanation": "x von A, y von C.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_mittel_4",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Kästchen hat das Rechteck A(0|0), B(3|0), C(3|2), D(0|2)?",
     "answers": [
      "6",
      "5",
      "10",
      "8"
     ],
     "correct": 0,
     "explanation": "3 · 2.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_mittel_5",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welche Seiten sind parallel bei A(1|1), B(5|1), C(5|4), D(1|4)?",
     "answers": [
      "AB und BC",
      "BC und CD",
      "AB und CD",
      "keine"
     ],
     "correct": 2,
     "explanation": "Beide waagerecht.",
     "topic": "koordinaten"
    }
   ],
   "schwer": [
    {
     "id": "kok5l2u_schwer_1",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Spiegelt man A(2|3) an der y-Achse (gedacht nach links), welchen x-Wert hat das Bild?",
     "answers": [
      "2",
      "−2",
      "3",
      "−3"
     ],
     "correct": 1,
     "explanation": "Spiegeln: Vorzeichen von x.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_schwer_2",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welcher Punkt liegt NICHT auf der Geraden durch (1|2) und (5|2)?",
     "answers": [
      "(3|3)",
      "(3|2)",
      "(0|2)",
      "(6|2)"
     ],
     "correct": 0,
     "explanation": "Alle anderen haben y = 2.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_schwer_3",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Rechteck hat A(1|1) und C(6|4) als gegenüberliegende Ecken. Wie groß ist seine Fläche in Kästchen?",
     "answers": [
      "12",
      "20",
      "16",
      "15"
     ],
     "correct": 3,
     "explanation": "5 · 3.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_schwer_4",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Verschiebe A(2|3) um 3 nach rechts. Neuer Punkt?",
     "answers": [
      "(2|6)",
      "(5|6)",
      "(3|5)",
      "(5|3)"
     ],
     "correct": 3,
     "explanation": "x + 3.",
     "topic": "koordinaten"
    },
    {
     "id": "kok5l2u_schwer_5",
     "category": "kurs_ko_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Verschiebe B(4|1) um 2 nach oben. Neuer Punkt?",
     "answers": [
      "(6|1)",
      "(4|3)",
      "(4|2)",
      "(2|1)"
     ],
     "correct": 1,
     "explanation": "y + 2.",
     "topic": "koordinaten"
    }
   ]
  },
  "test": [
   {
    "id": "kok5l2_test_1",
    "category": "kurs_ko_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Figur ergeben A(0|0), B(6|0), C(6|3), D(0|3)?",
    "answers": [
     "Quadrat",
     "Dreieck",
     "Rechteck",
     "Raute"
    ],
    "correct": 2,
    "explanation": "6 × 3.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l2_test_2",
    "category": "kurs_ko_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie lang ist AB bei A(2|1), B(6|1)?",
    "answers": [
     "8",
     "3",
     "4",
     "5"
    ],
    "correct": 2,
    "explanation": "6 − 2.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l2_test_3",
    "category": "kurs_ko_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie lang ist BC bei B(6|1), C(6|5)?",
    "answers": [
     "4",
     "5",
     "6",
     "1"
    ],
    "correct": 0,
    "explanation": "5 − 1.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l2_test_4",
    "category": "kurs_ko_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wo liegt D? A(1|2), B(4|2), C(4|6)",
    "answers": [
     "D(6|1)",
     "D(1|6)",
     "D(4|1)",
     "D(1|4)"
    ],
    "correct": 1,
    "explanation": "Viertes Eck.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l2_test_5",
    "category": "kurs_ko_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Kästchen hat das Rechteck A(0|0), B(4|0), C(4|3), D(0|3)?",
    "answers": [
     "7",
     "14",
     "10",
     "12"
    ],
    "correct": 3,
    "explanation": "4 · 3.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l2_test_6",
    "category": "kurs_ko_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Umfang von A(0|0), B(3|0), C(3|3), D(0|3)?",
    "answers": [
     "9",
     "12",
     "6",
     "16"
    ],
    "correct": 1,
    "explanation": "4 · 3.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l2_test_7",
    "category": "kurs_ko_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Verschiebe P(1|1) um 4 nach rechts.",
    "answers": [
     "(1|5)",
     "(5|5)",
     "(4|1)",
     "(5|1)"
    ],
    "correct": 3,
    "explanation": "x + 4.",
    "topic": "koordinaten"
   },
   {
    "id": "kok5l2_test_8",
    "category": "kurs_ko_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welche Figur ergeben drei Punkte, die nicht auf einer Linie liegen?",
    "answers": [
     "Viereck",
     "Dreieck",
     "Kreis",
     "Strecke"
    ],
    "correct": 1,
    "explanation": "Drei Ecken.",
    "topic": "koordinaten"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "gs_k5_l1",
  "kurs": "geraden_k5",
  "order": 1,
  "icon": "📏",
  "title": "Strecke, Strahl, Gerade",
  "kurz": "Mit oder ohne Ende?",
  "erklaerung": {
   "intro": "Eine <b>Strecke</b> hat <b>zwei Endpunkte</b> (AB) – man kann sie messen. Ein <b>Strahl</b> (Halbgerade) hat <b>einen Anfangspunkt</b> und geht unendlich weiter. Eine <b>Gerade</b> hat <b>keinen</b> Anfang und kein Ende. Geraden bezeichnet man mit kleinen Buchstaben (g, h), Strecken mit ihren Endpunkten (<b>AB</b>).",
   "merksatz": "Strecke: 2 Enden. Strahl: 1 Anfang. Gerade: kein Ende.",
   "beispiele": [
    "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='60' x2='210' y2='60' stroke='#2563eb' stroke-width='5'/><circle cx='30' cy='60' r='6' fill='#1e293b'/><circle cx='210' cy='60' r='6' fill='#1e293b'/><text x='22' y='40' font-size='16'>A</text><text x='206' y='40' font-size='16'>B</text></svg>Strecke AB",
    "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='60' x2='230' y2='60' stroke='#2563eb' stroke-width='5'/><polygon points='238,60 222,52 222,68' fill='#2563eb'/><circle cx='30' cy='60' r='6' fill='#1e293b'/><text x='22' y='40' font-size='16'>A</text></svg>Strahl ab A",
    "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='60' x2='226' y2='60' stroke='#2563eb' stroke-width='5'/><polygon points='6,60 22,52 22,68' fill='#2563eb'/><polygon points='234,60 218,52 218,68' fill='#2563eb'/></svg>Gerade g"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gsk5l1u_leicht_1",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das?",
     "answers": [
      "ein Strahl",
      "eine Strecke",
      "eine Gerade",
      "ein Kreis"
     ],
     "correct": 1,
     "explanation": "Zwei Endpunkte.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='60' x2='210' y2='60' stroke='#2563eb' stroke-width='5'/><circle cx='30' cy='60' r='6' fill='#1e293b'/><circle cx='210' cy='60' r='6' fill='#1e293b'/><text x='22' y='40' font-size='16'>A</text><text x='206' y='40' font-size='16'>B</text></svg>"
    },
    {
     "id": "gsk5l1u_leicht_2",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das?",
     "answers": [
      "eine Strecke",
      "ein Strahl",
      "ein Winkel",
      "eine Gerade"
     ],
     "correct": 3,
     "explanation": "Kein Ende.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='60' x2='226' y2='60' stroke='#2563eb' stroke-width='5'/><polygon points='6,60 22,52 22,68' fill='#2563eb'/><polygon points='234,60 218,52 218,68' fill='#2563eb'/></svg>"
    },
    {
     "id": "gsk5l1u_leicht_3",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was ist das?",
     "answers": [
      "eine Strecke",
      "eine Gerade",
      "ein Strahl",
      "ein Punkt"
     ],
     "correct": 2,
     "explanation": "Ein Anfang.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='60' x2='230' y2='60' stroke='#2563eb' stroke-width='5'/><polygon points='238,60 222,52 222,68' fill='#2563eb'/><circle cx='30' cy='60' r='6' fill='#1e293b'/><text x='22' y='40' font-size='16'>A</text></svg>"
    },
    {
     "id": "gsk5l1u_leicht_4",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele Endpunkte hat eine Strecke?",
     "answers": [
      "1",
      "2",
      "0",
      "unendlich"
     ],
     "correct": 1,
     "explanation": "Zwei.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l1u_leicht_5",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was kann man messen?",
     "answers": [
      "eine Gerade",
      "einen Strahl",
      "alle drei",
      "eine Strecke"
     ],
     "correct": 3,
     "explanation": "Nur die Strecke hat eine Länge.",
     "topic": "geraden"
    }
   ],
   "mittel": [
    {
     "id": "gsk5l1u_mittel_1",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Endpunkte hat eine Gerade?",
     "answers": [
      "1",
      "0",
      "2",
      "3"
     ],
     "correct": 1,
     "explanation": "Kein Ende.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l1u_mittel_2",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie bezeichnet man eine Gerade meist?",
     "answers": [
      "mit zwei großen Punkten AB",
      "mit einer Zahl",
      "gar nicht",
      "mit kleinem Buchstaben, z. B. g"
     ],
     "correct": 3,
     "explanation": "g, h …",
     "topic": "geraden"
    },
    {
     "id": "gsk5l1u_mittel_3",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Lichtstrahl einer Taschenlampe ist mathematisch …",
     "answers": [
      "eine Strecke",
      "ein Strahl",
      "eine Gerade",
      "ein Kreis"
     ],
     "correct": 1,
     "explanation": "Anfang, kein Ende.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🔦</text></svg>"
    },
    {
     "id": "gsk5l1u_mittel_4",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie bezeichnet man die Strecke zwischen A und B?",
     "answers": [
      "g",
      "A",
      "ab",
      "AB"
     ],
     "correct": 3,
     "explanation": "AB.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l1u_mittel_5",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele Geraden gehen durch zwei Punkte?",
     "answers": [
      "keine",
      "zwei",
      "unendlich viele",
      "genau eine"
     ],
     "correct": 3,
     "explanation": "Genau eine.",
     "topic": "geraden"
    }
   ],
   "schwer": [
    {
     "id": "gsk5l1u_schwer_1",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Geraden gehen durch einen Punkt?",
     "answers": [
      "eine",
      "zwei",
      "keine",
      "unendlich viele"
     ],
     "correct": 3,
     "explanation": "In alle Richtungen.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l1u_schwer_2",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele Strecken gibt es zwischen den Punkten A, B und C?",
     "answers": [
      "3",
      "2",
      "6",
      "1"
     ],
     "correct": 0,
     "explanation": "AB, BC, AC.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l1u_schwer_3",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Zwei Geraden schneiden sich. Wie viele Schnittpunkte?",
     "answers": [
      "2",
      "0",
      "unendlich viele",
      "1"
     ],
     "correct": 3,
     "explanation": "Einer.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l1u_schwer_4",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist richtig?",
     "answers": [
      "Eine Gerade ist ein Teil einer Strecke.",
      "Ein Strahl hat zwei Enden.",
      "Eine Strecke ist ein Teil einer Geraden.",
      "Eine Gerade ist messbar."
     ],
     "correct": 2,
     "explanation": "Teil.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l1u_schwer_5",
     "category": "kurs_gs_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist ein Strahl auch?",
     "answers": [
      "eine Doppelgerade",
      "eine Kurve",
      "eine Halbgerade",
      "ein Kreis"
     ],
     "correct": 2,
     "explanation": "Halbgerade.",
     "topic": "geraden"
    }
   ]
  },
  "test": [
   {
    "id": "gsk5l1_test_1",
    "category": "kurs_gs_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist das?",
    "answers": [
     "eine Strecke",
     "ein Strahl",
     "eine Gerade",
     "eine Kurve"
    ],
    "correct": 0,
    "explanation": "Zwei Enden.",
    "topic": "geraden",
    "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='60' x2='210' y2='60' stroke='#2563eb' stroke-width='5'/><circle cx='30' cy='60' r='6' fill='#1e293b'/><circle cx='210' cy='60' r='6' fill='#1e293b'/><text x='22' y='40' font-size='16'>A</text><text x='206' y='40' font-size='16'>B</text></svg>"
   },
   {
    "id": "gsk5l1_test_2",
    "category": "kurs_gs_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist das?",
    "answers": [
     "ein Strahl",
     "eine Strecke",
     "eine Gerade",
     "ein Kreis"
    ],
    "correct": 0,
    "explanation": "Ein Anfang.",
    "topic": "geraden",
    "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='60' x2='230' y2='60' stroke='#2563eb' stroke-width='5'/><polygon points='238,60 222,52 222,68' fill='#2563eb'/><circle cx='30' cy='60' r='6' fill='#1e293b'/><text x='22' y='40' font-size='16'>A</text></svg>"
   },
   {
    "id": "gsk5l1_test_3",
    "category": "kurs_gs_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist das?",
    "answers": [
     "eine Strecke",
     "ein Strahl",
     "ein Punkt",
     "eine Gerade"
    ],
    "correct": 3,
    "explanation": "Kein Ende.",
    "topic": "geraden",
    "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='14' y1='60' x2='226' y2='60' stroke='#2563eb' stroke-width='5'/><polygon points='6,60 22,52 22,68' fill='#2563eb'/><polygon points='234,60 218,52 218,68' fill='#2563eb'/></svg>"
   },
   {
    "id": "gsk5l1_test_4",
    "category": "kurs_gs_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was hat keinen Endpunkt?",
    "answers": [
     "die Gerade",
     "die Strecke",
     "der Strahl",
     "alle"
    ],
    "correct": 0,
    "explanation": "Gerade.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l1_test_5",
    "category": "kurs_gs_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was kann man messen?",
    "answers": [
     "die Gerade",
     "den Strahl",
     "die Strecke",
     "keins"
    ],
    "correct": 2,
    "explanation": "Strecke.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l1_test_6",
    "category": "kurs_gs_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Geraden gehen durch zwei Punkte?",
    "answers": [
     "eine",
     "zwei",
     "keine",
     "viele"
    ],
    "correct": 0,
    "explanation": "Eine.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l1_test_7",
    "category": "kurs_gs_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viele Strecken zwischen A, B, C?",
    "answers": [
     "3",
     "2",
     "4",
     "6"
    ],
    "correct": 0,
    "explanation": "AB, BC, AC.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l1_test_8",
    "category": "kurs_gs_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie bezeichnet man eine Gerade?",
    "answers": [
     "mit Zahl",
     "mit AB",
     "mit kleinem Buchstaben",
     "gar nicht"
    ],
    "correct": 2,
    "explanation": "g.",
    "topic": "geraden"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "gs_k5_l2",
  "kurs": "geraden_k5",
  "order": 2,
  "icon": "⊥",
  "title": "Senkrecht, parallel, Abstand",
  "kurz": "Zeichen ⊥ und ∥, kürzester Weg",
  "erklaerung": {
   "intro": "Zwei Geraden sind <b>senkrecht</b> (orthogonal) zueinander, wenn sie einen <b>rechten Winkel</b> bilden: <b>g ⊥ h</b>. Sie sind <b>parallel</b>, wenn sie überall gleich weit voneinander entfernt sind: <b>g ∥ h</b>. Der <b>Abstand</b> eines Punktes zu einer Geraden ist die Länge der <b>senkrechten</b> Verbindung – der kürzeste Weg.",
   "merksatz": "⊥ = senkrecht, ∥ = parallel. Abstand = senkrecht messen.",
   "beispiele": [
    "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='220' y2='100' stroke='#2563eb' stroke-width='5'/><line x1='120' y1='10' x2='120' y2='110' stroke='#2563eb' stroke-width='5'/><rect x='120' y='76' width='24' height='24' fill='none' stroke='#f97316' stroke-width='3'/><circle cx='126' cy='82' r='0'/></svg>g ⊥ h",
    "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='35' x2='220' y2='35' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='90' x2='220' y2='90' stroke='#2563eb' stroke-width='5'/><text x='224' y='40' font-size='15'>g</text><text x='224' y='95' font-size='15'>h</text></svg>g ∥ h",
    "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='220' y2='100' stroke='#2563eb' stroke-width='5'/><circle cx='120' cy='30' r='6' fill='#f97316'/><text x='130' y='28' font-size='16'>P</text><line x1='120' y1='30' x2='120' y2='100' stroke='#f97316' stroke-width='3' stroke-dasharray='6 5'/></svg>Abstand von P zur Geraden"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "gsk5l2u_leicht_1",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie liegen g und h zueinander?",
     "answers": [
      "senkrecht",
      "parallel",
      "schneidend schräg",
      "gleich"
     ],
     "correct": 1,
     "explanation": "Gleicher Abstand.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='35' x2='220' y2='35' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='90' x2='220' y2='90' stroke='#2563eb' stroke-width='5'/><text x='224' y='40' font-size='15'>g</text><text x='224' y='95' font-size='15'>h</text></svg>"
    },
    {
     "id": "gsk5l2u_leicht_2",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie liegen die Geraden zueinander?",
     "answers": [
      "parallel",
      "senkrecht",
      "gar nicht",
      "gleich"
     ],
     "correct": 1,
     "explanation": "Rechter Winkel.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='220' y2='100' stroke='#2563eb' stroke-width='5'/><line x1='120' y1='10' x2='120' y2='110' stroke='#2563eb' stroke-width='5'/><rect x='120' y='76' width='24' height='24' fill='none' stroke='#f97316' stroke-width='3'/><circle cx='126' cy='82' r='0'/></svg>"
    },
    {
     "id": "gsk5l2u_leicht_3",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Zeichen bedeutet 'senkrecht'?",
     "answers": [
      "∥",
      "=",
      "⊥",
      "≈"
     ],
     "correct": 2,
     "explanation": "⊥.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l2u_leicht_4",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welches Zeichen bedeutet 'parallel'?",
     "answers": [
      "∥",
      "⊥",
      "≠",
      "<"
     ],
     "correct": 0,
     "explanation": "∥.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l2u_leicht_5",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie groß ist der Winkel zwischen senkrechten Geraden?",
     "answers": [
      "45°",
      "180°",
      "60°",
      "90°"
     ],
     "correct": 3,
     "explanation": "Rechter Winkel.",
     "topic": "geraden"
    }
   ],
   "mittel": [
    {
     "id": "gsk5l2u_mittel_1",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie misst man den Abstand eines Punktes zu einer Geraden?",
     "answers": [
      "senkrecht zur Geraden",
      "schräg",
      "waagerecht immer",
      "entlang der Geraden"
     ],
     "correct": 0,
     "explanation": "Kürzester Weg.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='220' y2='100' stroke='#2563eb' stroke-width='5'/><circle cx='120' cy='30' r='6' fill='#f97316'/><text x='130' y='28' font-size='16'>P</text><line x1='120' y1='30' x2='120' y2='100' stroke='#f97316' stroke-width='3' stroke-dasharray='6 5'/></svg>"
    },
    {
     "id": "gsk5l2u_mittel_2",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Haben parallele Geraden einen Schnittpunkt?",
     "answers": [
      "ja, einen",
      "ja, zwei",
      "nein",
      "unendlich viele"
     ],
     "correct": 2,
     "explanation": "Nie.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l2u_mittel_3",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "g ⊥ h und h ⊥ k. Wie liegen g und k?",
     "answers": [
      "senkrecht",
      "parallel",
      "schräg",
      "gleich lang"
     ],
     "correct": 1,
     "explanation": "Beide senkrecht zu h.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l2u_mittel_4",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wo findest du parallele Linien?",
     "answers": [
      "bei einem Kreuz",
      "bei einem Kreis",
      "bei einem Stern",
      "bei den Linien im Heft"
     ],
     "correct": 3,
     "explanation": "Heftlinien.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📓</text></svg>"
    },
    {
     "id": "gsk5l2u_mittel_5",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welches Geodreieck-Teil hilft beim senkrechten Zeichnen?",
     "answers": [
      "die Spitze",
      "die Rückseite",
      "die Mittellinie",
      "das Loch"
     ],
     "correct": 2,
     "explanation": "Mittellinie.",
     "topic": "geraden",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📐</text></svg>"
    }
   ],
   "schwer": [
    {
     "id": "gsk5l2u_schwer_1",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist der Abstand zweier paralleler Geraden?",
     "answers": [
      "die Länge der Geraden",
      "unendlich",
      "die Länge einer senkrechten Verbindung",
      "0"
     ],
     "correct": 2,
     "explanation": "Senkrecht messen.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l2u_schwer_2",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "P liegt auf der Geraden g. Wie groß ist sein Abstand zu g?",
     "answers": [
      "0",
      "1",
      "unendlich",
      "90"
     ],
     "correct": 0,
     "explanation": "Er liegt drauf.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l2u_schwer_3",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Rechteck hat wie viele Paare paralleler Seiten?",
     "answers": [
      "1",
      "2",
      "4",
      "0"
     ],
     "correct": 1,
     "explanation": "Zwei Paare.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l2u_schwer_4",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Welches Viereck hat genau ein Paar paralleler Seiten?",
     "answers": [
      "Quadrat",
      "Trapez",
      "Rechteck",
      "Raute"
     ],
     "correct": 1,
     "explanation": "Trapez.",
     "topic": "geraden"
    },
    {
     "id": "gsk5l2u_schwer_5",
     "category": "kurs_gs_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was heißt 'orthogonal'?",
     "answers": [
      "parallel",
      "senkrecht",
      "schräg",
      "gebogen"
     ],
     "correct": 1,
     "explanation": "Fachwort.",
     "topic": "geraden"
    }
   ]
  },
  "test": [
   {
    "id": "gsk5l2_test_1",
    "category": "kurs_gs_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Zeichen für senkrecht?",
    "answers": [
     "⊥",
     "∥",
     "=",
     "≠"
    ],
    "correct": 0,
    "explanation": "⊥.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l2_test_2",
    "category": "kurs_gs_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Zeichen für parallel?",
    "answers": [
     "⊥",
     "∥",
     "<",
     "≈"
    ],
    "correct": 1,
    "explanation": "∥.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l2_test_3",
    "category": "kurs_gs_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie liegen die Geraden?",
    "answers": [
     "senkrecht",
     "parallel",
     "schräg",
     "gleich"
    ],
    "correct": 0,
    "explanation": "90°.",
    "topic": "geraden",
    "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='220' y2='100' stroke='#2563eb' stroke-width='5'/><line x1='120' y1='10' x2='120' y2='110' stroke='#2563eb' stroke-width='5'/><rect x='120' y='76' width='24' height='24' fill='none' stroke='#f97316' stroke-width='3'/><circle cx='126' cy='82' r='0'/></svg>"
   },
   {
    "id": "gsk5l2_test_4",
    "category": "kurs_gs_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie liegen g und h?",
    "answers": [
     "parallel",
     "senkrecht",
     "gekreuzt",
     "gleich"
    ],
    "correct": 0,
    "explanation": "Parallel.",
    "topic": "geraden",
    "grafik": "<svg viewBox='0 0 250 120' style='width:100%;max-width:250px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='35' x2='220' y2='35' stroke='#2563eb' stroke-width='5'/><line x1='20' y1='90' x2='220' y2='90' stroke='#2563eb' stroke-width='5'/><text x='224' y='40' font-size='15'>g</text><text x='224' y='95' font-size='15'>h</text></svg>"
   },
   {
    "id": "gsk5l2_test_5",
    "category": "kurs_gs_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie misst man den Abstand Punkt–Gerade?",
    "answers": [
     "schräg",
     "waagerecht",
     "senkrecht",
     "beliebig"
    ],
    "correct": 2,
    "explanation": "Senkrecht.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l2_test_6",
    "category": "kurs_gs_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Haben parallele Geraden Schnittpunkte?",
    "answers": [
     "ja",
     "nein",
     "zwei",
     "manchmal"
    ],
    "correct": 1,
    "explanation": "Nie.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l2_test_7",
    "category": "kurs_gs_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie viel Grad hat ein rechter Winkel?",
    "answers": [
     "180°",
     "45°",
     "100°",
     "90°"
    ],
    "correct": 3,
    "explanation": "90°.",
    "topic": "geraden"
   },
   {
    "id": "gsk5l2_test_8",
    "category": "kurs_gs_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welches Viereck hat genau ein Paar paralleler Seiten?",
    "answers": [
     "Quadrat",
     "Trapez",
     "Rechteck",
     "Raute"
    ],
    "correct": 1,
    "explanation": "Trapez.",
    "topic": "geraden"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "uf_k5_l1",
  "kurs": "umfang_flaeche_k5",
  "order": 1,
  "icon": "⬛",
  "title": "Umfang und Fläche von Rechteck und Quadrat",
  "kurz": "u = 2·a + 2·b, A = a·b",
  "erklaerung": {
   "intro": "Der <b>Umfang</b> ist die Länge des Randes: Rechteck <b>u = 2·a + 2·b</b>, Quadrat <b>u = 4·a</b>. Der <b>Flächeninhalt</b> sagt, wie viele Einheitsquadrate hineinpassen: Rechteck <b>A = a·b</b>, Quadrat <b>A = a·a</b>. Umfang in <b>cm</b>, Fläche in <b>cm²</b>!",
   "merksatz": "Umfang: alles drumherum (cm). Fläche: Länge mal Breite (cm²).",
   "beispiele": [
    "<svg viewBox='0 0 190 116' style='width:100%;max-width:228px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='20' x2='20' y2='86' stroke='#93c5fd'/><line x1='42' y1='20' x2='42' y2='86' stroke='#93c5fd'/><line x1='64' y1='20' x2='64' y2='86' stroke='#93c5fd'/><line x1='86' y1='20' x2='86' y2='86' stroke='#93c5fd'/><line x1='108' y1='20' x2='108' y2='86' stroke='#93c5fd'/><line x1='130' y1='20' x2='130' y2='86' stroke='#93c5fd'/><line x1='20' y1='20' x2='130' y2='20' stroke='#93c5fd'/><line x1='20' y1='42' x2='130' y2='42' stroke='#93c5fd'/><line x1='20' y1='64' x2='130' y2='64' stroke='#93c5fd'/><line x1='20' y1='86' x2='130' y2='86' stroke='#93c5fd'/><rect x='20' y='20' width='110' height='66' fill='#dbeafe55' stroke='#1e3a8a' stroke-width='3'/><text x='75.0' y='106' text-anchor='middle' font-size='15'>5 cm</text><text x='138' y='58.0' font-size='15'>3 cm</text></svg>u = 2·5 + 2·3 = 16 cm, A = 5·3 = 15 cm²",
    "<svg viewBox='0 0 168 138' style='width:100%;max-width:201px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='20' x2='20' y2='108' stroke='#93c5fd'/><line x1='42' y1='20' x2='42' y2='108' stroke='#93c5fd'/><line x1='64' y1='20' x2='64' y2='108' stroke='#93c5fd'/><line x1='86' y1='20' x2='86' y2='108' stroke='#93c5fd'/><line x1='108' y1='20' x2='108' y2='108' stroke='#93c5fd'/><line x1='20' y1='20' x2='108' y2='20' stroke='#93c5fd'/><line x1='20' y1='42' x2='108' y2='42' stroke='#93c5fd'/><line x1='20' y1='64' x2='108' y2='64' stroke='#93c5fd'/><line x1='20' y1='86' x2='108' y2='86' stroke='#93c5fd'/><line x1='20' y1='108' x2='108' y2='108' stroke='#93c5fd'/><rect x='20' y='20' width='88' height='88' fill='#dbeafe55' stroke='#1e3a8a' stroke-width='3'/><text x='64.0' y='128' text-anchor='middle' font-size='15'>4 cm</text><text x='116' y='69.0' font-size='15'>4 cm</text></svg>Quadrat: u = 16 cm, A = 16 cm²",
    "Einheiten: cm für u, cm² für A"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ufk5l1u_leicht_1",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie groß ist die Fläche?",
     "answers": [
      "15 cm²",
      "16 cm²",
      "8 cm²",
      "15 cm"
     ],
     "correct": 0,
     "explanation": "5 · 3.",
     "topic": "umfang_flaeche",
     "grafik": "<svg viewBox='0 0 190 116' style='width:100%;max-width:228px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='20' x2='20' y2='86' stroke='#93c5fd'/><line x1='42' y1='20' x2='42' y2='86' stroke='#93c5fd'/><line x1='64' y1='20' x2='64' y2='86' stroke='#93c5fd'/><line x1='86' y1='20' x2='86' y2='86' stroke='#93c5fd'/><line x1='108' y1='20' x2='108' y2='86' stroke='#93c5fd'/><line x1='130' y1='20' x2='130' y2='86' stroke='#93c5fd'/><line x1='20' y1='20' x2='130' y2='20' stroke='#93c5fd'/><line x1='20' y1='42' x2='130' y2='42' stroke='#93c5fd'/><line x1='20' y1='64' x2='130' y2='64' stroke='#93c5fd'/><line x1='20' y1='86' x2='130' y2='86' stroke='#93c5fd'/><rect x='20' y='20' width='110' height='66' fill='#dbeafe55' stroke='#1e3a8a' stroke-width='3'/><text x='75.0' y='106' text-anchor='middle' font-size='15'>5 cm</text><text x='138' y='58.0' font-size='15'>3 cm</text></svg>"
    },
    {
     "id": "ufk5l1u_leicht_2",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie groß ist der Umfang?",
     "answers": [
      "15 cm",
      "8 cm",
      "16 cm²",
      "16 cm"
     ],
     "correct": 3,
     "explanation": "2·5 + 2·3.",
     "topic": "umfang_flaeche",
     "grafik": "<svg viewBox='0 0 190 116' style='width:100%;max-width:228px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='20' x2='20' y2='86' stroke='#93c5fd'/><line x1='42' y1='20' x2='42' y2='86' stroke='#93c5fd'/><line x1='64' y1='20' x2='64' y2='86' stroke='#93c5fd'/><line x1='86' y1='20' x2='86' y2='86' stroke='#93c5fd'/><line x1='108' y1='20' x2='108' y2='86' stroke='#93c5fd'/><line x1='130' y1='20' x2='130' y2='86' stroke='#93c5fd'/><line x1='20' y1='20' x2='130' y2='20' stroke='#93c5fd'/><line x1='20' y1='42' x2='130' y2='42' stroke='#93c5fd'/><line x1='20' y1='64' x2='130' y2='64' stroke='#93c5fd'/><line x1='20' y1='86' x2='130' y2='86' stroke='#93c5fd'/><rect x='20' y='20' width='110' height='66' fill='#dbeafe55' stroke='#1e3a8a' stroke-width='3'/><text x='75.0' y='106' text-anchor='middle' font-size='15'>5 cm</text><text x='138' y='58.0' font-size='15'>3 cm</text></svg>"
    },
    {
     "id": "ufk5l1u_leicht_3",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welche Formel gilt für die Rechteckfläche?",
     "answers": [
      "A = a + b",
      "A = 2·a + 2·b",
      "A = a · b",
      "A = 4·a"
     ],
     "correct": 2,
     "explanation": "Länge mal Breite.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_leicht_4",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Quadrat mit a = 6 cm: Umfang?",
     "answers": [
      "36 cm",
      "12 cm",
      "24 cm²",
      "24 cm"
     ],
     "correct": 3,
     "explanation": "4 · 6.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_leicht_5",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "In welcher Einheit gibt man Flächen an?",
     "answers": [
      "cm",
      "kg",
      "cm²",
      "ml"
     ],
     "correct": 2,
     "explanation": "Quadratzentimeter.",
     "topic": "umfang_flaeche"
    }
   ],
   "mittel": [
    {
     "id": "ufk5l1u_mittel_1",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Quadrat mit a = 7 cm: Fläche?",
     "answers": [
      "28 cm²",
      "49 cm²",
      "14 cm²",
      "49 cm"
     ],
     "correct": 1,
     "explanation": "7 · 7.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_mittel_2",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Rechteck 8 cm × 5 cm: Umfang?",
     "answers": [
      "40 cm",
      "13 cm",
      "26 cm²",
      "26 cm"
     ],
     "correct": 3,
     "explanation": "16 + 10.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_mittel_3",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Rechteck 12 m × 4 m: Fläche?",
     "answers": [
      "48 m²",
      "32 m²",
      "16 m²",
      "48 m"
     ],
     "correct": 0,
     "explanation": "12 · 4.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_mittel_4",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Rechteck hat A = 24 cm² und a = 6 cm. Wie lang ist b?",
     "answers": [
      "18 cm",
      "6 cm",
      "3 cm",
      "4 cm"
     ],
     "correct": 3,
     "explanation": "24 : 6.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_mittel_5",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Ein Quadrat hat u = 20 cm. Wie lang ist eine Seite?",
     "answers": [
      "5 cm",
      "4 cm",
      "10 cm",
      "80 cm"
     ],
     "correct": 0,
     "explanation": "20 : 4.",
     "topic": "umfang_flaeche"
    }
   ],
   "schwer": [
    {
     "id": "ufk5l1u_schwer_1",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Quadrat hat A = 64 cm². Wie groß ist der Umfang?",
     "answers": [
      "16 cm",
      "32 cm",
      "64 cm",
      "8 cm"
     ],
     "correct": 1,
     "explanation": "a = 8, u = 32.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_schwer_2",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Rechteck mit u = 30 cm und a = 10 cm. Wie lang ist b?",
     "answers": [
      "5 cm",
      "20 cm",
      "10 cm",
      "3 cm"
     ],
     "correct": 0,
     "explanation": "30 − 20 = 10, : 2.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_schwer_3",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Zimmer ist 5 m lang und 4 m breit. Teppich kostet 12 € pro m². Preis?",
     "answers": [
      "180 €",
      "216 €",
      "108 €",
      "240 €"
     ],
     "correct": 3,
     "explanation": "20 m² · 12 €.",
     "topic": "umfang_flaeche",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🛋️</text></svg>"
    },
    {
     "id": "ufk5l1u_schwer_4",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was passiert mit der Fläche, wenn man beide Seiten eines Rechtecks verdoppelt?",
     "answers": [
      "Sie verdoppelt sich.",
      "Sie wird 4-mal so groß.",
      "Sie bleibt gleich.",
      "Sie halbiert sich."
     ],
     "correct": 1,
     "explanation": "2 · 2 = 4.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l1u_schwer_5",
     "category": "kurs_uf_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "L-förmige Fläche: Rechteck 6 × 4 minus Rechteck 2 × 2. Fläche?",
     "answers": [
      "20 cm²",
      "24 cm²",
      "16 cm²",
      "28 cm²"
     ],
     "correct": 0,
     "explanation": "24 − 4.",
     "topic": "umfang_flaeche"
    }
   ]
  },
  "test": [
   {
    "id": "ufk5l1_test_1",
    "category": "kurs_uf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie groß ist die Fläche?",
    "answers": [
     "16 cm",
     "8 cm²",
     "12 cm²",
     "16 cm²"
    ],
    "correct": 3,
    "explanation": "4 · 4.",
    "topic": "umfang_flaeche",
    "grafik": "<svg viewBox='0 0 168 138' style='width:100%;max-width:201px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='20' x2='20' y2='108' stroke='#93c5fd'/><line x1='42' y1='20' x2='42' y2='108' stroke='#93c5fd'/><line x1='64' y1='20' x2='64' y2='108' stroke='#93c5fd'/><line x1='86' y1='20' x2='86' y2='108' stroke='#93c5fd'/><line x1='108' y1='20' x2='108' y2='108' stroke='#93c5fd'/><line x1='20' y1='20' x2='108' y2='20' stroke='#93c5fd'/><line x1='20' y1='42' x2='108' y2='42' stroke='#93c5fd'/><line x1='20' y1='64' x2='108' y2='64' stroke='#93c5fd'/><line x1='20' y1='86' x2='108' y2='86' stroke='#93c5fd'/><line x1='20' y1='108' x2='108' y2='108' stroke='#93c5fd'/><rect x='20' y='20' width='88' height='88' fill='#dbeafe55' stroke='#1e3a8a' stroke-width='3'/><text x='64.0' y='128' text-anchor='middle' font-size='15'>4 cm</text><text x='116' y='69.0' font-size='15'>4 cm</text></svg>"
   },
   {
    "id": "ufk5l1_test_2",
    "category": "kurs_uf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Rechteck 6 cm × 3 cm: Umfang?",
    "answers": [
     "18 cm",
     "18 cm²",
     "9 cm",
     "36 cm"
    ],
    "correct": 0,
    "explanation": "12 + 6.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l1_test_3",
    "category": "kurs_uf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Rechteck 6 cm × 3 cm: Fläche?",
    "answers": [
     "18 cm",
     "18 cm²",
     "9 cm²",
     "36 cm²"
    ],
    "correct": 1,
    "explanation": "6 · 3.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l1_test_4",
    "category": "kurs_uf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Quadrat a = 9 cm: Fläche?",
    "answers": [
     "36 cm²",
     "81 cm²",
     "18 cm²",
     "81 cm"
    ],
    "correct": 1,
    "explanation": "9 · 9.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l1_test_5",
    "category": "kurs_uf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Quadrat a = 9 cm: Umfang?",
    "answers": [
     "81 cm",
     "18 cm",
     "36 cm²",
     "36 cm"
    ],
    "correct": 3,
    "explanation": "4 · 9.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l1_test_6",
    "category": "kurs_uf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "A = 35 cm², a = 7 cm. b?",
    "answers": [
     "28 cm",
     "5 cm",
     "6 cm",
     "4 cm"
    ],
    "correct": 1,
    "explanation": "35 : 7.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l1_test_7",
    "category": "kurs_uf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Formel für den Rechteckumfang?",
    "answers": [
     "u = 2·a + 2·b",
     "u = a · b",
     "u = a + b",
     "u = 4·a·b"
    ],
    "correct": 0,
    "explanation": "Zweimal beide Seiten.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l1_test_8",
    "category": "kurs_uf_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Fläche in …",
    "answers": [
     "cm",
     "m",
     "cm²",
     "km"
    ],
    "correct": 2,
    "explanation": "cm².",
    "topic": "umfang_flaeche"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "uf_k5_l2",
  "kurs": "umfang_flaeche_k5",
  "order": 2,
  "icon": "🔄",
  "title": "Flächeneinheiten umrechnen",
  "kurz": "mm², cm², dm², m² – Umrechnungszahl 100",
  "erklaerung": {
   "intro": "Flächeneinheiten: <b>mm², cm², dm², m², a (Ar), ha (Hektar), km²</b>. Die <b>Umrechnungszahl ist 100</b> (nicht 10!): 1 cm² = <b>100 mm²</b>, 1 dm² = 100 cm², 1 m² = 100 dm², 1 a = 100 m², 1 ha = 100 a, 1 km² = 100 ha. Denn ein Quadrat mit 1 cm Seite enthält 10 · 10 = 100 Quadrate mit 1 mm Seite.",
   "merksatz": "Bei Flächen immer mal oder geteilt durch 100.",
   "beispiele": [
    "1 cm² = 100 mm² (10 · 10)",
    "1 m² = 100 dm² = 10 000 cm²",
    "1 ha = 100 a = 10 000 m² (ein Fußballfeld ≈ 0,7 ha)"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "ufk5l2u_leicht_1",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele mm² sind 1 cm²?",
     "answers": [
      "100 mm²",
      "10 mm²",
      "1000 mm²",
      "1 mm²"
     ],
     "correct": 0,
     "explanation": "10 · 10.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_leicht_2",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele cm² sind 1 dm²?",
     "answers": [
      "10 cm²",
      "1000 cm²",
      "100 cm²",
      "50 cm²"
     ],
     "correct": 2,
     "explanation": "100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_leicht_3",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele dm² sind 1 m²?",
     "answers": [
      "100 dm²",
      "10 dm²",
      "1000 dm²",
      "1 dm²"
     ],
     "correct": 0,
     "explanation": "100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_leicht_4",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie heißt die Umrechnungszahl bei Flächen?",
     "answers": [
      "100",
      "10",
      "1000",
      "60"
     ],
     "correct": 0,
     "explanation": "100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_leicht_5",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie viele m² sind 1 a (Ar)?",
     "answers": [
      "100 m²",
      "10 m²",
      "1000 m²",
      "10 000 m²"
     ],
     "correct": 0,
     "explanation": "100.",
     "topic": "umfang_flaeche"
    }
   ],
   "mittel": [
    {
     "id": "ufk5l2u_mittel_1",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "3 cm² = ? mm²",
     "answers": [
      "30 mm²",
      "3000 mm²",
      "3 mm²",
      "300 mm²"
     ],
     "correct": 3,
     "explanation": "3 · 100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_mittel_2",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "500 cm² = ? dm²",
     "answers": [
      "50 dm²",
      "5 dm²",
      "0,5 dm²",
      "5000 dm²"
     ],
     "correct": 1,
     "explanation": "500 : 100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_mittel_3",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele cm² sind 1 m²?",
     "answers": [
      "100 cm²",
      "1000 cm²",
      "100 000 cm²",
      "10 000 cm²"
     ],
     "correct": 3,
     "explanation": "100 · 100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_mittel_4",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie viele a sind 1 ha?",
     "answers": [
      "10 a",
      "1000 a",
      "1 a",
      "100 a"
     ],
     "correct": 3,
     "explanation": "100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_mittel_5",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "2 m² = ? dm²",
     "answers": [
      "20 dm²",
      "200 dm²",
      "2000 dm²",
      "2 dm²"
     ],
     "correct": 1,
     "explanation": "2 · 100.",
     "topic": "umfang_flaeche"
    }
   ],
   "schwer": [
    {
     "id": "ufk5l2u_schwer_1",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "1 ha = ? m²",
     "answers": [
      "10 000 m²",
      "1000 m²",
      "100 m²",
      "100 000 m²"
     ],
     "correct": 0,
     "explanation": "100 · 100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_schwer_2",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "4 dm² 25 cm² = ? cm²",
     "answers": [
      "4025 cm²",
      "42,5 cm²",
      "4250 cm²",
      "425 cm²"
     ],
     "correct": 3,
     "explanation": "400 + 25.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_schwer_3",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Was ist größer: 3 m² oder 250 dm²?",
     "answers": [
      "250 dm²",
      "gleich",
      "kann man nicht sagen",
      "3 m²"
     ],
     "correct": 3,
     "explanation": "3 m² = 300 dm².",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_schwer_4",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Wie viele ha ist 1 km²?",
     "answers": [
      "10 ha",
      "1000 ha",
      "1 ha",
      "100 ha"
     ],
     "correct": 3,
     "explanation": "100.",
     "topic": "umfang_flaeche"
    },
    {
     "id": "ufk5l2u_schwer_5",
     "category": "kurs_uf_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Garten hat 5 a. Wie viele m²?",
     "answers": [
      "50 m²",
      "5000 m²",
      "5 m²",
      "500 m²"
     ],
     "correct": 3,
     "explanation": "5 · 100.",
     "topic": "umfang_flaeche",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🌳</text></svg>"
    }
   ]
  },
  "test": [
   {
    "id": "ufk5l2_test_1",
    "category": "kurs_uf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "1 cm² = ? mm²",
    "answers": [
     "10",
     "100",
     "1000",
     "1"
    ],
    "correct": 1,
    "explanation": "100.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l2_test_2",
    "category": "kurs_uf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "1 m² = ? dm²",
    "answers": [
     "10",
     "1000",
     "50",
     "100"
    ],
    "correct": 3,
    "explanation": "100.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l2_test_3",
    "category": "kurs_uf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "7 cm² = ? mm²",
    "answers": [
     "70",
     "700",
     "7000",
     "17"
    ],
    "correct": 1,
    "explanation": "7 · 100.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l2_test_4",
    "category": "kurs_uf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "800 dm² = ? m²",
    "answers": [
     "8",
     "80",
     "0,8",
     "800"
    ],
    "correct": 0,
    "explanation": "800 : 100.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l2_test_5",
    "category": "kurs_uf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "1 a = ? m²",
    "answers": [
     "100",
     "10",
     "1000",
     "10 000"
    ],
    "correct": 0,
    "explanation": "100.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l2_test_6",
    "category": "kurs_uf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "1 ha = ? a",
    "answers": [
     "100",
     "10",
     "1000",
     "1"
    ],
    "correct": 0,
    "explanation": "100.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l2_test_7",
    "category": "kurs_uf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Umrechnungszahl bei Flächen?",
    "answers": [
     "100",
     "10",
     "1000",
     "60"
    ],
    "correct": 0,
    "explanation": "100.",
    "topic": "umfang_flaeche"
   },
   {
    "id": "ufk5l2_test_8",
    "category": "kurs_uf_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was ist größer: 1 m² oder 90 dm²?",
    "answers": [
     "90 dm²",
     "gleich",
     "1 m²",
     "kann man nicht sagen"
    ],
    "correct": 2,
    "explanation": "100 dm² > 90 dm².",
    "topic": "umfang_flaeche"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "sr_k5_l1",
  "kurs": "schriftlich_k5",
  "order": 1,
  "icon": "✖️",
  "title": "Schriftlich multiplizieren",
  "kurz": "Mehrstellig mal mehrstellig",
  "erklaerung": {
   "intro": "Beim schriftlichen Multiplizieren rechnest du die erste Zahl mit <b>jeder Ziffer</b> der zweiten Zahl mal – von links nach rechts – und schreibst jedes Ergebnis <b>eine Stelle weiter rechts</b>. Zum Schluss <b>addierst</b> du alle Zeilen. Beispiel 213 · 24: 213 · 2 = 426 (versetzt), 213 · 4 = 852 → 4260 + 852 = <b>5112</b>. Überschlag: 200 · 25 = 5000 ✓.",
   "merksatz": "Jede Ziffer einzeln, versetzt schreiben, addieren, Überschlag!",
   "beispiele": [
    "213 · 24 = 4260 + 852 = 5112",
    "Überschlag: 200 · 25 = 5000",
    "125 · 32 = 3750 + 250 = 4000"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "srk5l1u_leicht_1",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "23 · 12 =",
     "answers": [
      "266",
      "286",
      "35",
      "276"
     ],
     "correct": 3,
     "explanation": "230 + 46.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_leicht_2",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "41 · 21 =",
     "answers": [
      "851",
      "861",
      "871",
      "62"
     ],
     "correct": 1,
     "explanation": "820 + 41.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_leicht_3",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was machst du zum Schluss?",
     "answers": [
      "subtrahieren",
      "die Zeilen addieren",
      "teilen",
      "nichts"
     ],
     "correct": 1,
     "explanation": "Addieren.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_leicht_4",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "32 · 13 =",
     "answers": [
      "406",
      "416",
      "426",
      "45"
     ],
     "correct": 1,
     "explanation": "320 + 96.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_leicht_5",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Welcher Überschlag passt zu 48 · 21?",
     "answers": [
      "50 · 20 = 1000",
      "40 · 20 = 800",
      "50 · 30 = 1500",
      "48 + 21"
     ],
     "correct": 0,
     "explanation": "Runden.",
     "topic": "schriftlich_k5"
    }
   ],
   "mittel": [
    {
     "id": "srk5l1u_mittel_1",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "213 · 24 =",
     "answers": [
      "5012",
      "5212",
      "5112",
      "4260"
     ],
     "correct": 2,
     "explanation": "4260 + 852.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_mittel_2",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "125 · 32 =",
     "answers": [
      "3750",
      "4250",
      "4000",
      "3900"
     ],
     "correct": 2,
     "explanation": "3750 + 250.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_mittel_3",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "304 · 15 =",
     "answers": [
      "4500",
      "4650",
      "3420",
      "4560"
     ],
     "correct": 3,
     "explanation": "3040 + 1520.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_mittel_4",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "76 · 43 =",
     "answers": [
      "3168",
      "3368",
      "3268",
      "3048"
     ],
     "correct": 2,
     "explanation": "3040 + 228.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_mittel_5",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Welcher Überschlag passt zu 398 · 51?",
     "answers": [
      "300 · 50 = 15 000",
      "400 · 50 = 20 000",
      "400 · 60 = 24 000",
      "398 + 51"
     ],
     "correct": 1,
     "explanation": "Runden.",
     "topic": "schriftlich_k5"
    }
   ],
   "schwer": [
    {
     "id": "srk5l1u_schwer_1",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "467 · 38 =",
     "answers": [
      "17 746",
      "17 646",
      "17 846",
      "16 746"
     ],
     "correct": 0,
     "explanation": "14 010 + 3736.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_schwer_2",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "1205 · 24 =",
     "answers": [
      "28 820",
      "29 920",
      "24 100",
      "28 920"
     ],
     "correct": 3,
     "explanation": "24 100 + 4820.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_schwer_3",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Lea rechnet 512 · 31 = 1872. Was zeigt der Überschlag 500 · 30 = 15 000?",
     "answers": [
      "Es stimmt.",
      "Es ist zu groß.",
      "Man kann es nicht prüfen.",
      "Sie hat eine Zeile nicht versetzt."
     ],
     "correct": 3,
     "explanation": "Richtig: 15 872.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l1u_schwer_4",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ein Kino hat 24 Reihen mit je 36 Plätzen. Wie viele Plätze?",
     "answers": [
      "864",
      "854",
      "764",
      "60"
     ],
     "correct": 0,
     "explanation": "720 + 144.",
     "topic": "schriftlich_k5",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🎬</text></svg>"
    },
    {
     "id": "srk5l1u_schwer_5",
     "category": "kurs_sr_k5_l1",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "250 · 48 =",
     "answers": [
      "10 000",
      "12 500",
      "11 500",
      "12 000"
     ],
     "correct": 3,
     "explanation": "10 000 + 2000.",
     "topic": "schriftlich_k5"
    }
   ]
  },
  "test": [
   {
    "id": "srk5l1_test_1",
    "category": "kurs_sr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "31 · 22 =",
    "answers": [
     "672",
     "692",
     "53",
     "682"
    ],
    "correct": 3,
    "explanation": "620 + 62.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l1_test_2",
    "category": "kurs_sr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "142 · 13 =",
    "answers": [
     "1836",
     "1856",
     "1846",
     "1420"
    ],
    "correct": 2,
    "explanation": "1420 + 426.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l1_test_3",
    "category": "kurs_sr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "205 · 34 =",
    "answers": [
     "6870",
     "7070",
     "6150",
     "6970"
    ],
    "correct": 3,
    "explanation": "6150 + 820.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l1_test_4",
    "category": "kurs_sr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "88 · 25 =",
    "answers": [
     "2100",
     "2000",
     "2200",
     "2300"
    ],
    "correct": 2,
    "explanation": "1760 + 440.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l1_test_5",
    "category": "kurs_sr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Welcher Überschlag passt zu 61 · 49?",
    "answers": [
     "60 · 40 = 2400",
     "60 · 50 = 3000",
     "70 · 50 = 3500",
     "61 + 49"
    ],
    "correct": 1,
    "explanation": "Runden.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l1_test_6",
    "category": "kurs_sr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was schreibst du bei jeder neuen Zeile?",
    "answers": [
     "ganz links",
     "eine Stelle weiter rechts",
     "gleich darunter",
     "gar nicht"
    ],
    "correct": 1,
    "explanation": "Versetzt.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l1_test_7",
    "category": "kurs_sr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ein Buch hat 128 Seiten. Wie viele Seiten haben 15 Bücher?",
    "answers": [
     "1820",
     "1280",
     "1920",
     "2020"
    ],
    "correct": 2,
    "explanation": "1280 + 640.",
    "topic": "schriftlich_k5",
    "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>📚</text></svg>"
   },
   {
    "id": "srk5l1_test_8",
    "category": "kurs_sr_k5_l1",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "27 · 27 =",
    "answers": [
     "719",
     "739",
     "729",
     "549"
    ],
    "correct": 2,
    "explanation": "540 + 189.",
    "topic": "schriftlich_k5"
   }
  ],
  "bestehenAb": 0.8
 },
 {
  "id": "sr_k5_l2",
  "kurs": "schriftlich_k5",
  "order": 2,
  "icon": "➗",
  "title": "Schriftlich dividieren",
  "kurz": "Auch durch zweistellige Zahlen",
  "erklaerung": {
   "intro": "Beim schriftlichen Dividieren gehst du <b>Stelle für Stelle</b>: Wie oft passt der Divisor in die erste(n) Ziffer(n)? Ergebnis notieren, <b>malnehmen, abziehen, nächste Ziffer herunterholen</b>. Bei <b>zweistelligen</b> Divisoren hilft ein Überschlag: 864 : 24 → wie oft passt 24 in 86? ≈ 3-mal (72), Rest 14, 144 : 24 = 6 → <b>36</b>. Probe: 36 · 24 = 864 ✓.",
   "merksatz": "Teilen – mal – minus – runterholen. Probe mit Mal!",
   "beispiele": [
    "936 : 4 = 234",
    "864 : 24 = 36 (86 : 24 ≈ 3, 144 : 24 = 6)",
    "Probe: 36 · 24 = 864"
   ]
  },
  "uebung": {
   "leicht": [
    {
     "id": "srk5l2u_leicht_1",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "936 : 4 =",
     "answers": [
      "233",
      "244",
      "234",
      "324"
     ],
     "correct": 2,
     "explanation": "9:4=2 R1, 13:4=3 R1, 16:4=4.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_leicht_2",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "845 : 5 =",
     "answers": [
      "168",
      "169",
      "179",
      "196"
     ],
     "correct": 1,
     "explanation": "8:5=1 R3, 34:5=6 R4, 45:5=9.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_leicht_3",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Wie prüfst du 672 : 4 = 168?",
     "answers": [
      "168 + 4",
      "672 · 4",
      "168 · 4 = 672",
      "672 − 4"
     ],
     "correct": 2,
     "explanation": "Probe mit Mal.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_leicht_4",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "728 : 7 =",
     "answers": [
      "14",
      "140",
      "114",
      "104"
     ],
     "correct": 3,
     "explanation": "Die 0 nicht vergessen!",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_leicht_5",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "leicht",
     "points": 5,
     "question": "Was machst du nach dem Abziehen?",
     "answers": [
      "aufhören",
      "addieren",
      "die nächste Ziffer herunterholen",
      "von vorn anfangen"
     ],
     "correct": 2,
     "explanation": "Runterholen.",
     "topic": "schriftlich_k5"
    }
   ],
   "mittel": [
    {
     "id": "srk5l2u_mittel_1",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "864 : 24 =",
     "answers": [
      "34",
      "36",
      "38",
      "26"
     ],
     "correct": 1,
     "explanation": "72 + 144.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_mittel_2",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "540 : 12 =",
     "answers": [
      "44",
      "45",
      "54",
      "35"
     ],
     "correct": 1,
     "explanation": "48, Rest 6 → 60 : 12 = 5.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_mittel_3",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "975 : 25 =",
     "answers": [
      "38",
      "29",
      "39",
      "49"
     ],
     "correct": 2,
     "explanation": "25 · 39 = 975.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_mittel_4",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "Wie oft passt 32 ungefähr in 100?",
     "answers": [
      "2-mal",
      "3-mal",
      "4-mal",
      "30-mal"
     ],
     "correct": 1,
     "explanation": "3 · 32 = 96.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_mittel_5",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "mittel",
     "points": 10,
     "question": "1248 : 16 =",
     "answers": [
      "68",
      "88",
      "78",
      "76"
     ],
     "correct": 2,
     "explanation": "16 · 78 = 1248.",
     "topic": "schriftlich_k5"
    }
   ],
   "schwer": [
    {
     "id": "srk5l2u_schwer_1",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "2856 : 34 =",
     "answers": [
      "82",
      "86",
      "84",
      "74"
     ],
     "correct": 2,
     "explanation": "34 · 84 = 2856.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_schwer_2",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "7215 : 15 =",
     "answers": [
      "471",
      "491",
      "481",
      "418"
     ],
     "correct": 2,
     "explanation": "15 · 481 = 7215.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_schwer_3",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "6048 : 48 =",
     "answers": [
      "124",
      "126",
      "136",
      "116"
     ],
     "correct": 1,
     "explanation": "48 · 126 = 6048.",
     "topic": "schriftlich_k5"
    },
    {
     "id": "srk5l2u_schwer_4",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "850 Schüler fahren mit Bussen zu 50 Plätzen. Wie viele Busse?",
     "answers": [
      "16",
      "17",
      "18",
      "15"
     ],
     "correct": 1,
     "explanation": "850 : 50.",
     "topic": "schriftlich_k5",
     "grafik": "<svg viewBox='0 0 122 93' style='width:100%;max-width:122px;height:auto;display:block;margin:6px auto' xmlns='http://www.w3.org/2000/svg'><text x='61' y='73' text-anchor='middle' font-size='72'>🚌</text></svg>"
    },
    {
     "id": "srk5l2u_schwer_5",
     "category": "kurs_sr_k5_l2",
     "area": "schule",
     "grade": 5,
     "subject": "mathe",
     "difficulty": "schwer",
     "points": 15,
     "question": "Ben rechnet 4515 : 15 = 31. Was ist falsch?",
     "answers": [
      "Nichts.",
      "Richtig ist 310.",
      "Er hat eine 0 vergessen – richtig ist 301.",
      "Richtig ist 3001."
     ],
     "correct": 2,
     "explanation": "15 · 301 = 4515.",
     "topic": "schriftlich_k5"
    }
   ]
  },
  "test": [
   {
    "id": "srk5l2_test_1",
    "category": "kurs_sr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "848 : 4 =",
    "answers": [
     "202",
     "221",
     "212",
     "211"
    ],
    "correct": 2,
    "explanation": "8:4, 4:4, 8:4.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l2_test_2",
    "category": "kurs_sr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "756 : 6 =",
    "answers": [
     "126",
     "116",
     "136",
     "125"
    ],
    "correct": 0,
    "explanation": "6 · 126.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l2_test_3",
    "category": "kurs_sr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "612 : 3 =",
    "answers": [
     "24",
     "204",
     "214",
     "240"
    ],
    "correct": 1,
    "explanation": "0 nicht vergessen.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l2_test_4",
    "category": "kurs_sr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "624 : 26 =",
    "answers": [
     "24",
     "23",
     "26",
     "22"
    ],
    "correct": 0,
    "explanation": "26 · 24 = 624.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l2_test_5",
    "category": "kurs_sr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "1176 : 14 =",
    "answers": [
     "82",
     "86",
     "84",
     "74"
    ],
    "correct": 2,
    "explanation": "14 · 84.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l2_test_6",
    "category": "kurs_sr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Wie prüfst du 900 : 36 = 25?",
    "answers": [
     "25 + 36",
     "900 · 36",
     "900 − 25",
     "25 · 36 = 900"
    ],
    "correct": 3,
    "explanation": "Probe.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l2_test_7",
    "category": "kurs_sr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Ein Seil von 2400 cm wird in 32 gleiche Stücke geteilt. Wie lang ist ein Stück?",
    "answers": [
     "75 cm",
     "70 cm",
     "80 cm",
     "65 cm"
    ],
    "correct": 0,
    "explanation": "2400 : 32.",
    "topic": "schriftlich_k5"
   },
   {
    "id": "srk5l2_test_8",
    "category": "kurs_sr_k5_l2",
    "area": "schule",
    "grade": 5,
    "subject": "mathe",
    "difficulty": "mittel",
    "points": 10,
    "question": "Was holst du nach dem Abziehen herunter?",
    "answers": [
     "das Ergebnis",
     "die nächste Ziffer",
     "den Divisor",
     "nichts"
    ],
    "correct": 1,
    "explanation": "Nächste Ziffer.",
    "topic": "schriftlich_k5"
   }
  ],
  "bestehenAb": 0.8
 }
];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) extraKurse.forEach(function (k) { if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k); });
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) extraLektionen.forEach(function (l) { if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l); });
})();
