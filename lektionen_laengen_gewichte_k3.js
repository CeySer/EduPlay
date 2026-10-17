// Längen und Gewichte - Klasse 3 Mathe
(function () {
    const extraKurse = [
    {
        "id": "laengen_gewichte_k3",
        "title": "Längen und Gewichte",
        "icon": "📏",
        "grade": 3,
        "subject": "mathe",
        "beschreibung": "Längen in km, m, cm und mm sowie Gewichte in kg und g schätzen, messen, wiegen und umrechnen."
    }
];
    const extraLektionen = [
    {
        "id": "laenge_k3_l1",
        "kurs": "laengen_gewichte_k3",
        "order": 1,
        "icon": "📏",
        "title": "Längen: km, m, cm, mm",
        "kurz": "Längen schätzen, messen und umrechnen",
        "erklaerung": {
            "intro": "Längen misst du in <b>Kilometer (km)</b>, <b>Meter (m)</b>, <b>Zentimeter (cm)</b> und <b>Millimeter (mm)</b>. Merke dir <b>Stützpunkte</b>: Eine Tür ist etwa 2 m hoch, ein Finger etwa 1 cm breit, ein Fingernagel etwa 1 mm dick. 1 km gehst du in etwa 15 Minuten. Beim <b>Messen</b> legst du das Lineal immer an der 0 an.",
            "merksatz": "1 km = 1000 m, 1 m = 100 cm und 1 cm = 10 mm.",
            "beispiele": [
                "Stützpunkte zum Schätzen: Tür und Finger.<svg viewBox='0 0 340 156' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='14' width='56' height='112' rx='3' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='3'/><circle cx='78' cy='72' r='3.5' fill='#f59e0b'/><line x1='104' y1='16' x2='104' y2='124' stroke='#38bdf8' stroke-width='2'/><polygon points='104,12 99,22 109,22' fill='#38bdf8'/><polygon points='104,128 99,118 109,118' fill='#38bdf8'/><text x='58' y='146' text-anchor='middle' font-size='12' fill='#94a3b8' font-family='sans-serif'>Tür</text><text x='132' y='76' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>≈ 2 m</text><rect x='225' y='40' width='30' height='86' rx='15' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='3'/><rect x='231' y='46' width='18' height='18' rx='6' fill='none' stroke='#a78bfa' stroke-width='1.5'/><line x1='225' y1='24' x2='255' y2='24' stroke='#10b981' stroke-width='2'/><line x1='225' y1='18' x2='225' y2='30' stroke='#10b981' stroke-width='2'/><line x1='255' y1='18' x2='255' y2='30' stroke='#10b981' stroke-width='2'/><text x='300' y='28' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>≈ 1 cm</text><text x='240' y='146' text-anchor='middle' font-size='12' fill='#94a3b8' font-family='sans-serif'>Finger breit</text></svg>",
                "Kommaschreibweise: 1,25 m = 1 m 25 cm = 125 cm. Und 3,05 m = 3 m 5 cm.",
                "Der Stift reicht von 0 bis 7. Er ist 7 cm lang.<svg viewBox='0 0 340 108' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='22' width='192' height='16' rx='2' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><polygon points='212,22 230,30 212,38' fill='rgba(245,158,11,0.35)' stroke='#f59e0b' stroke-width='2'/><line x1='20' y1='42' x2='20' y2='56' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/><line x1='230' y1='42' x2='230' y2='56' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/><rect x='10' y='56' width='320' height='46' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 56v14M50 56v14M80 56v14M110 56v14M140 56v14M170 56v14M200 56v14M230 56v14M260 56v14M290 56v14M320 56v14' stroke='#e5e7eb' stroke-width='1.4'/><path d='M35 56v10M65 56v10M95 56v10M125 56v10M155 56v10M185 56v10M215 56v10M245 56v10M275 56v10M305 56v10' stroke='#e5e7eb' stroke-width='1'/><path d='M23 56v6M26 56v6M29 56v6M32 56v6M38 56v6M41 56v6M44 56v6M47 56v6M53 56v6M56 56v6M59 56v6M62 56v6M68 56v6M71 56v6M74 56v6M77 56v6M83 56v6M86 56v6M89 56v6M92 56v6M98 56v6M101 56v6M104 56v6M107 56v6M113 56v6M116 56v6M119 56v6M122 56v6M128 56v6M131 56v6M134 56v6M137 56v6M143 56v6M146 56v6M149 56v6M152 56v6M158 56v6M161 56v6M164 56v6M167 56v6M173 56v6M176 56v6M179 56v6M182 56v6M188 56v6M191 56v6M194 56v6M197 56v6M203 56v6M206 56v6M209 56v6M212 56v6M218 56v6M221 56v6M224 56v6M227 56v6M233 56v6M236 56v6M239 56v6M242 56v6M248 56v6M251 56v6M254 56v6M257 56v6M263 56v6M266 56v6M269 56v6M272 56v6M278 56v6M281 56v6M284 56v6M287 56v6M293 56v6M296 56v6M299 56v6M302 56v6M308 56v6M311 56v6M314 56v6M317 56v6' stroke='#e5e7eb' stroke-width='0.8'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='86'>0</text><text x='50' y='86'>1</text><text x='80' y='86'>2</text><text x='110' y='86'>3</text><text x='140' y='86'>4</text><text x='170' y='86'>5</text><text x='200' y='86'>6</text><text x='230' y='86'>7</text><text x='260' y='86'>8</text><text x='290' y='86'>9</text><text x='320' y='86'>10</text></g><text x='320' y='98' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "laengek3l1u_leicht_1",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Welche Einheit passt? Eine Tür ist etwa 2 … hoch.",
                    "answers": [
                        "m",
                        "cm",
                        "km",
                        "mm"
                    ],
                    "correct": 0,
                    "explanation": "Eine Tür ist etwa 2 m hoch. 2 cm wären so klein wie ein Daumennagel, 2 km ein langer Spaziergang.",
                    "grafik": "<svg viewBox='0 0 200 152' style='width:100%;max-width:200px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='14' width='70' height='130' rx='3' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='3'/><rect x='50' y='24' width='50' height='45' rx='2' fill='none' stroke='#f59e0b' stroke-width='1.5'/><rect x='50' y='80' width='50' height='54' rx='2' fill='none' stroke='#f59e0b' stroke-width='1.5'/><circle cx='98' cy='78' r='4' fill='#f59e0b'/><line x1='10' y1='146' x2='190' y2='146' stroke='#94a3b8' stroke-width='2'/><line x1='135' y1='16' x2='135' y2='142' stroke='#38bdf8' stroke-width='2'/><polygon points='135,12 130,22 140,22' fill='#38bdf8'/><polygon points='135,146 130,136 140,136' fill='#38bdf8'/><text x='165' y='84' text-anchor='middle' font-size='16' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 ?</text></svg>"
                },
                {
                    "id": "laengek3l1u_leicht_2",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Zentimeter hat 1 Meter?",
                    "answers": [
                        "100 cm",
                        "10 cm",
                        "1000 cm",
                        "60 cm"
                    ],
                    "correct": 0,
                    "explanation": "1 m = 100 cm. Das kannst du dir mit einem Meterstab merken: Er hat 100 Zentimeter-Striche."
                },
                {
                    "id": "laengek3l1u_leicht_3",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie lang ist der Stift?",
                    "answers": [
                        "6 cm",
                        "7 cm",
                        "5 cm",
                        "6 mm"
                    ],
                    "correct": 0,
                    "explanation": "Der Stift beginnt bei 0 und endet bei 6. Er ist also 6 cm lang. Zähle die Abstände, nicht die Striche.",
                    "grafik": "<svg viewBox='0 0 340 108' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='22' width='162' height='16' rx='2' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><polygon points='182,22 200,30 182,38' fill='rgba(245,158,11,0.35)' stroke='#f59e0b' stroke-width='2'/><line x1='20' y1='42' x2='20' y2='56' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/><line x1='200' y1='42' x2='200' y2='56' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/><rect x='10' y='56' width='320' height='46' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 56v14M50 56v14M80 56v14M110 56v14M140 56v14M170 56v14M200 56v14M230 56v14M260 56v14M290 56v14M320 56v14' stroke='#e5e7eb' stroke-width='1.4'/><path d='M35 56v10M65 56v10M95 56v10M125 56v10M155 56v10M185 56v10M215 56v10M245 56v10M275 56v10M305 56v10' stroke='#e5e7eb' stroke-width='1'/><path d='M23 56v6M26 56v6M29 56v6M32 56v6M38 56v6M41 56v6M44 56v6M47 56v6M53 56v6M56 56v6M59 56v6M62 56v6M68 56v6M71 56v6M74 56v6M77 56v6M83 56v6M86 56v6M89 56v6M92 56v6M98 56v6M101 56v6M104 56v6M107 56v6M113 56v6M116 56v6M119 56v6M122 56v6M128 56v6M131 56v6M134 56v6M137 56v6M143 56v6M146 56v6M149 56v6M152 56v6M158 56v6M161 56v6M164 56v6M167 56v6M173 56v6M176 56v6M179 56v6M182 56v6M188 56v6M191 56v6M194 56v6M197 56v6M203 56v6M206 56v6M209 56v6M212 56v6M218 56v6M221 56v6M224 56v6M227 56v6M233 56v6M236 56v6M239 56v6M242 56v6M248 56v6M251 56v6M254 56v6M257 56v6M263 56v6M266 56v6M269 56v6M272 56v6M278 56v6M281 56v6M284 56v6M287 56v6M293 56v6M296 56v6M299 56v6M302 56v6M308 56v6M311 56v6M314 56v6M317 56v6' stroke='#e5e7eb' stroke-width='0.8'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='86'>0</text><text x='50' y='86'>1</text><text x='80' y='86'>2</text><text x='110' y='86'>3</text><text x='140' y='86'>4</text><text x='170' y='86'>5</text><text x='200' y='86'>6</text><text x='230' y='86'>7</text><text x='260' y='86'>8</text><text x='290' y='86'>9</text><text x='320' y='86'>10</text></g><text x='320' y='98' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
                },
                {
                    "id": "laengek3l1u_leicht_4",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viele Millimeter hat 1 Zentimeter?",
                    "answers": [
                        "10 mm",
                        "100 mm",
                        "1000 mm",
                        "1 mm"
                    ],
                    "correct": 0,
                    "explanation": "1 cm = 10 mm. Auf dem Lineal siehst du zwischen zwei Zentimeter-Zahlen 10 kleine Abstände."
                }
            ],
            "mittel": [
                {
                    "id": "laengek3l1u_mittel_1",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viele Meter sind 3 km?",
                    "answers": [
                        "3000 m",
                        "300 m",
                        "30 m",
                        "3 m"
                    ],
                    "correct": 0,
                    "explanation": "1 km = 1000 m. Also sind 3 km = 3 · 1000 m = 3000 m."
                },
                {
                    "id": "laengek3l1u_mittel_2",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schreibe 1,25 m in m und cm.",
                    "answers": [
                        "1 m 25 cm",
                        "1 m 2 cm",
                        "12 m 5 cm",
                        "1 m 250 cm"
                    ],
                    "correct": 0,
                    "explanation": "Vor dem Komma stehen die Meter, nach dem Komma die Zentimeter. 1,25 m = 1 m 25 cm."
                },
                {
                    "id": "laengek3l1u_mittel_3",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie lang ist der Nagel?",
                    "answers": [
                        "4 cm 5 mm",
                        "4 cm 6 mm",
                        "5 cm 5 mm",
                        "45 cm"
                    ],
                    "correct": 0,
                    "explanation": "Der Nagel endet 5 kleine Striche nach der 4. Er ist 4 cm 5 mm lang, das sind 45 mm.",
                    "grafik": "<svg viewBox='0 0 340 108' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='18' width='5' height='24' fill='#94a3b8'/><polygon points='25,27 147,27 155,30 147,33 25,33' fill='#94a3b8'/><line x1='20' y1='42' x2='20' y2='56' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/><line x1='155' y1='42' x2='155' y2='56' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/><rect x='10' y='56' width='320' height='46' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 56v14M50 56v14M80 56v14M110 56v14M140 56v14M170 56v14M200 56v14M230 56v14M260 56v14M290 56v14M320 56v14' stroke='#e5e7eb' stroke-width='1.4'/><path d='M35 56v10M65 56v10M95 56v10M125 56v10M155 56v10M185 56v10M215 56v10M245 56v10M275 56v10M305 56v10' stroke='#e5e7eb' stroke-width='1'/><path d='M23 56v6M26 56v6M29 56v6M32 56v6M38 56v6M41 56v6M44 56v6M47 56v6M53 56v6M56 56v6M59 56v6M62 56v6M68 56v6M71 56v6M74 56v6M77 56v6M83 56v6M86 56v6M89 56v6M92 56v6M98 56v6M101 56v6M104 56v6M107 56v6M113 56v6M116 56v6M119 56v6M122 56v6M128 56v6M131 56v6M134 56v6M137 56v6M143 56v6M146 56v6M149 56v6M152 56v6M158 56v6M161 56v6M164 56v6M167 56v6M173 56v6M176 56v6M179 56v6M182 56v6M188 56v6M191 56v6M194 56v6M197 56v6M203 56v6M206 56v6M209 56v6M212 56v6M218 56v6M221 56v6M224 56v6M227 56v6M233 56v6M236 56v6M239 56v6M242 56v6M248 56v6M251 56v6M254 56v6M257 56v6M263 56v6M266 56v6M269 56v6M272 56v6M278 56v6M281 56v6M284 56v6M287 56v6M293 56v6M296 56v6M299 56v6M302 56v6M308 56v6M311 56v6M314 56v6M317 56v6' stroke='#e5e7eb' stroke-width='0.8'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='86'>0</text><text x='50' y='86'>1</text><text x='80' y='86'>2</text><text x='110' y='86'>3</text><text x='140' y='86'>4</text><text x='170' y='86'>5</text><text x='200' y='86'>6</text><text x='230' y='86'>7</text><text x='260' y='86'>8</text><text x='290' y='86'>9</text><text x='320' y='86'>10</text></g><text x='320' y='98' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
                },
                {
                    "id": "laengek3l1u_mittel_4",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welche Länge ist am größten?",
                    "answers": [
                        "3 m",
                        "250 cm",
                        "2 m 90 cm",
                        "2800 mm"
                    ],
                    "correct": 0,
                    "explanation": "Rechne alles in cm um: 3 m = 300 cm, 2 m 90 cm = 290 cm, 2800 mm = 280 cm. 300 cm ist am größten.",
                    "grafik": "<svg viewBox='0 0 140 130' style='width:100%;max-width:140px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='120' height='22' rx='4' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='70' y='26' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3 m</text><rect x='10' y='40' width='120' height='22' rx='4' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='70' y='56' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>250 cm</text><rect x='10' y='70' width='120' height='22' rx='4' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='70' y='86' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2 m 90 cm</text><rect x='10' y='100' width='120' height='22' rx='4' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='70' y='116' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2800 mm</text></svg>"
                }
            ],
            "schwer": [
                {
                    "id": "laengek3l1u_schwer_1",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Lea legt zwei Bänder aneinander. Wie lang sind sie zusammen?",
                    "answers": [
                        "2 m 20 cm",
                        "1 m 20 cm",
                        "2 m 40 cm",
                        "2 m 12 cm"
                    ],
                    "correct": 0,
                    "explanation": "40 cm + 80 cm = 120 cm = 1 m 20 cm. Dazu kommt 1 m: zusammen 2 m 20 cm.",
                    "grafik": "<svg viewBox='0 0 326 96' style='width:100%;max-width:326px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='30' width='182' height='22' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='111' y='22' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>1 m 40 cm</text><rect x='202' y='30' width='104' height='22' rx='3' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='254' y='22' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>80 cm</text><path d='M20,60 v8 H306 v-8' fill='none' stroke='#94a3b8' stroke-width='1.5'/><text x='163' y='86' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>zusammen: ?</text></svg>"
                },
                {
                    "id": "laengek3l1u_schwer_2",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Noahs Schulweg ist 1 km 300 m lang. Wie viele Meter sind das?",
                    "answers": [
                        "1300 m",
                        "1030 m",
                        "130 m",
                        "13 000 m"
                    ],
                    "correct": 0,
                    "explanation": "1 km = 1000 m. 1000 m + 300 m = 1300 m."
                },
                {
                    "id": "laengek3l1u_schwer_3",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Schätze: Wie hoch ist ein Klassenzimmer?",
                    "answers": [
                        "3 m",
                        "30 m",
                        "30 cm",
                        "3 km"
                    ],
                    "correct": 0,
                    "explanation": "Ein Klassenzimmer ist etwas höher als eine Tür (etwa 2 m). Also passt etwa 3 m."
                },
                {
                    "id": "laengek3l1u_schwer_4",
                    "category": "kurs_laenge_k3_l1",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Elif hat 2 m Band. Sie schneidet 65 cm ab. Wie viel bleibt übrig?",
                    "answers": [
                        "1 m 35 cm",
                        "1 m 45 cm",
                        "2 m 65 cm",
                        "1 m 65 cm"
                    ],
                    "correct": 0,
                    "explanation": "2 m = 200 cm. 200 cm − 65 cm = 135 cm = 1 m 35 cm."
                }
            ]
        },
        "test": [
            {
                "id": "laengek3l1_test_1",
                "category": "kurs_laenge_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie lang ist die Schraube?",
                "answers": [
                    "5 cm",
                    "7 cm",
                    "6 cm",
                    "5 mm"
                ],
                "correct": 0,
                "explanation": "Die Schraube beginnt bei 2 und endet bei 7. Also ist sie 7 cm − 2 cm = 5 cm lang.",
                "grafik": "<svg viewBox='0 0 340 108' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='80' y='20' width='10' height='20' rx='2' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><polygon points='90,25 220,25 230,30 220,35 90,35' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><line x1='94' y1='25' x2='98' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='102' y1='25' x2='106' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='110' y1='25' x2='114' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='118' y1='25' x2='122' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='126' y1='25' x2='130' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='134' y1='25' x2='138' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='142' y1='25' x2='146' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='150' y1='25' x2='154' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='158' y1='25' x2='162' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='166' y1='25' x2='170' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='174' y1='25' x2='178' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='182' y1='25' x2='186' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='190' y1='25' x2='194' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='198' y1='25' x2='202' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='206' y1='25' x2='210' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='214' y1='25' x2='218' y2='35' stroke='#a78bfa' stroke-width='1.2'/><line x1='80' y1='42' x2='80' y2='56' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/><line x1='230' y1='42' x2='230' y2='56' stroke='#94a3b8' stroke-width='1' stroke-dasharray='2,2'/><rect x='10' y='56' width='320' height='46' rx='4' fill='rgba(245,158,11,0.15)' stroke='#f59e0b' stroke-width='2'/><path d='M20 56v14M50 56v14M80 56v14M110 56v14M140 56v14M170 56v14M200 56v14M230 56v14M260 56v14M290 56v14M320 56v14' stroke='#e5e7eb' stroke-width='1.4'/><path d='M35 56v10M65 56v10M95 56v10M125 56v10M155 56v10M185 56v10M215 56v10M245 56v10M275 56v10M305 56v10' stroke='#e5e7eb' stroke-width='1'/><path d='M23 56v6M26 56v6M29 56v6M32 56v6M38 56v6M41 56v6M44 56v6M47 56v6M53 56v6M56 56v6M59 56v6M62 56v6M68 56v6M71 56v6M74 56v6M77 56v6M83 56v6M86 56v6M89 56v6M92 56v6M98 56v6M101 56v6M104 56v6M107 56v6M113 56v6M116 56v6M119 56v6M122 56v6M128 56v6M131 56v6M134 56v6M137 56v6M143 56v6M146 56v6M149 56v6M152 56v6M158 56v6M161 56v6M164 56v6M167 56v6M173 56v6M176 56v6M179 56v6M182 56v6M188 56v6M191 56v6M194 56v6M197 56v6M203 56v6M206 56v6M209 56v6M212 56v6M218 56v6M221 56v6M224 56v6M227 56v6M233 56v6M236 56v6M239 56v6M242 56v6M248 56v6M251 56v6M254 56v6M257 56v6M263 56v6M266 56v6M269 56v6M272 56v6M278 56v6M281 56v6M284 56v6M287 56v6M293 56v6M296 56v6M299 56v6M302 56v6M308 56v6M311 56v6M314 56v6M317 56v6' stroke='#e5e7eb' stroke-width='0.8'/><g font-size='11' fill='#e5e7eb' font-family='sans-serif' text-anchor='middle'><text x='20' y='86'>0</text><text x='50' y='86'>1</text><text x='80' y='86'>2</text><text x='110' y='86'>3</text><text x='140' y='86'>4</text><text x='170' y='86'>5</text><text x='200' y='86'>6</text><text x='230' y='86'>7</text><text x='260' y='86'>8</text><text x='290' y='86'>9</text><text x='320' y='86'>10</text></g><text x='320' y='98' text-anchor='end' font-size='9' fill='#94a3b8' font-family='sans-serif'>cm</text></svg>"
            },
            {
                "id": "laengek3l1_test_2",
                "category": "kurs_laenge_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viele Zentimeter sind 4 m?",
                "answers": [
                    "400 cm",
                    "40 cm",
                    "4000 cm",
                    "4 cm"
                ],
                "correct": 0,
                "explanation": "1 m = 100 cm. Also sind 4 m = 4 · 100 cm = 400 cm."
            },
            {
                "id": "laengek3l1_test_3",
                "category": "kurs_laenge_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Schreibe 4 m 7 cm mit Komma.",
                "answers": [
                    "4,07 m",
                    "4,7 m",
                    "40,7 m",
                    "4,007 m"
                ],
                "correct": 0,
                "explanation": "Nach dem Komma stehen bei Metern immer zwei Stellen für die Zentimeter: 7 cm schreibst du als 07. Also 4,07 m."
            },
            {
                "id": "laengek3l1_test_4",
                "category": "kurs_laenge_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Einheit passt? Eine Ameise ist etwa 4 … lang.",
                "answers": [
                    "mm",
                    "cm",
                    "m",
                    "km"
                ],
                "correct": 0,
                "explanation": "Eine Ameise ist sehr klein, nur wenige Millimeter. 4 cm wären so lang wie ein kleiner Finger."
            },
            {
                "id": "laengek3l1_test_5",
                "category": "kurs_laenge_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Welche Reihe ist richtig sortiert, von kurz nach lang?",
                "answers": [
                    "8 mm, 8 cm, 8 m",
                    "8 cm, 8 mm, 8 m",
                    "8 m, 8 cm, 8 mm",
                    "8 mm, 8 m, 8 cm"
                ],
                "correct": 0,
                "explanation": "Millimeter sind am kleinsten, dann kommen Zentimeter, dann Meter. Also 8 mm, 8 cm, 8 m."
            },
            {
                "id": "laengek3l1_test_6",
                "category": "kurs_laenge_k3_l1",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Finn geht zur Schule und wieder zurück. Wie weit geht er insgesamt?",
                "answers": [
                    "1 km 200 m",
                    "1 km 20 m",
                    "12 km",
                    "120 m"
                ],
                "correct": 0,
                "explanation": "600 m + 600 m = 1200 m. 1000 m sind 1 km, also 1 km 200 m.",
                "grafik": "<svg viewBox='0 0 340 110' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='20,50 45,28 70,50' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><rect x='26' y='50' width='38' height='32' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><rect x='40' y='64' width='10' height='18' fill='#f59e0b'/><text x='45' y='100' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>Zuhause</text><rect x='262' y='36' width='60' height='46' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><line x1='292' y1='36' x2='292' y2='16' stroke='#10b981' stroke-width='2'/><polygon points='292,16 306,20 292,24' fill='#f43f5e'/><rect x='274' y='48' width='12' height='10' fill='none' stroke='#10b981' stroke-width='1.5'/><rect x='298' y='48' width='12' height='10' fill='none' stroke='#10b981' stroke-width='1.5'/><text x='292' y='100' text-anchor='middle' font-size='11' fill='#94a3b8' font-family='sans-serif'>Schule</text><line x1='80' y1='52' x2='246' y2='52' stroke='#38bdf8' stroke-width='2.5'/><polygon points='254,52 244,47 244,57' fill='#38bdf8'/><text x='165' y='44' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>hin: 600 m</text><line x1='86' y1='72' x2='252' y2='72' stroke='#a78bfa' stroke-width='2.5' stroke-dasharray='6,4'/><polygon points='78,72 88,67 88,77' fill='#a78bfa'/><text x='165' y='90' text-anchor='middle' font-size='12' fill='#e5e7eb' font-family='sans-serif'>zurück: 600 m</text></svg>"
            }
        ],
        "bestehenAb": 0.8
    },
    {
        "id": "gewicht_k3_l2",
        "kurs": "laengen_gewichte_k3",
        "order": 2,
        "icon": "⚖️",
        "title": "Gewichte: kg und g",
        "kurz": "Gewichte schätzen, wiegen und umrechnen",
        "erklaerung": {
            "intro": "Gewichte misst du in <b>Kilogramm (kg)</b> und <b>Gramm (g)</b>. Stützpunkte: Ein Apfel wiegt etwa 150 g, eine Tüte Mehl 1 kg, ein Schulranzen etwa 4 kg. Mit einer <b>Waage</b> kannst du Gewichte genau bestimmen. Sehr schwere Dinge wie Autos wiegt man in <b>Tonnen (t)</b>: 1 t = 1000 kg.",
            "merksatz": "1 kg = 1000 g, also ist 1,5 kg = 1 kg 500 g = 1500 g.",
            "beispiele": [
                "Die Balkenwaage ist im Gleichgewicht: 1 kg Mehl wiegt so viel wie 500 g + 500 g.<svg viewBox='0 0 320 162' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='160,48 140,150 180,150' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='110' y1='154' x2='210' y2='154' stroke='#38bdf8' stroke-width='3'/><line x1='40' y1='48' x2='280' y2='48' stroke='#e5e7eb' stroke-width='4'/><circle cx='160' cy='48' r='5' fill='#f59e0b'/><polygon points='160,36 155,26 165,26' fill='#10b981'/><line x1='70' y1='48' x2='20' y2='118' stroke='#94a3b8' stroke-width='1.5'/><line x1='70' y1='48' x2='120' y2='118' stroke='#94a3b8' stroke-width='1.5'/><path d='M10,118 H130 L118,128 H22 Z' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><rect x='40' y='80' width='60' height='38' rx='3' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='70' y='104' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>Mehl</text><line x1='250' y1='48' x2='200' y2='118' stroke='#94a3b8' stroke-width='1.5'/><line x1='250' y1='48' x2='300' y2='118' stroke='#94a3b8' stroke-width='1.5'/><path d='M190,118 H310 L298,128 H202 Z' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><path d='M218,88 H242 L248,118 H212 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='1.5'/><rect x='225' y='82' width='10' height='6' rx='2' fill='#f59e0b'/><text x='230' y='108' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>500 g</text><path d='M258,88 H282 L288,118 H252 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='1.5'/><rect x='265' y='82' width='10' height='6' rx='2' fill='#f59e0b'/><text x='270' y='108' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>500 g</text></svg>",
                "Umrechnen: 1 kg 250 g = 1000 g + 250 g = 1250 g. Und 2 kg 50 g = 2050 g.",
                "Diese Waage zeigt 400 g an. Jeder kleine Strich bedeutet 100 g.<svg viewBox='0 0 260 216' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='202' width='140' height='10' rx='3' fill='#94a3b8'/><rect x='124' y='192' width='12' height='10' fill='#94a3b8'/><circle cx='130' cy='116' r='76' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='3'/><line x1='78.4' y1='167.6' x2='87.6' y2='158.4' stroke='#e5e7eb' stroke-width='2'/><text x='65.7' y='184.3' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='60.6' y1='138.6' x2='66.3' y2='136.7' stroke='#e5e7eb' stroke-width='1.2'/><line x1='57.9' y1='104.6' x2='70.7' y2='106.6' stroke='#e5e7eb' stroke-width='2'/><text x='40.1' y='105.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>200</text><line x1='70.9' y1='73.1' x2='75.8' y2='76.6' stroke='#e5e7eb' stroke-width='1.2'/><line x1='96.9' y1='51.0' x2='102.8' y2='62.5' stroke='#e5e7eb' stroke-width='2'/><text x='88.7' y='38.9' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>400</text><line x1='130.0' y1='43.0' x2='130.0' y2='49.0' stroke='#e5e7eb' stroke-width='1.2'/><line x1='163.1' y1='51.0' x2='157.2' y2='62.5' stroke='#e5e7eb' stroke-width='2'/><text x='171.3' y='38.9' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>600</text><line x1='189.1' y1='73.1' x2='184.2' y2='76.6' stroke='#e5e7eb' stroke-width='1.2'/><line x1='202.1' y1='104.6' x2='189.3' y2='106.6' stroke='#e5e7eb' stroke-width='2'/><text x='219.9' y='105.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>800</text><line x1='199.4' y1='138.6' x2='193.7' y2='136.7' stroke='#e5e7eb' stroke-width='1.2'/><line x1='181.6' y1='167.6' x2='172.4' y2='158.4' stroke='#e5e7eb' stroke-width='2'/><text x='194.3' y='184.3' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1000</text><text x='130' y='156' text-anchor='middle' font-size='12' fill='#94a3b8' font-family='sans-serif'>Gramm</text><line x1='130' y1='116' x2='99.1' y2='55.4' stroke='#f43f5e' stroke-width='3' stroke-linecap='round'/><circle cx='130' cy='116' r='6' fill='#f43f5e'/></svg>"
            ]
        },
        "uebung": {
            "leicht": [
                {
                    "id": "gewichtk3l2u_leicht_1",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie viel Gramm sind 1 kg?",
                    "answers": [
                        "1000 g",
                        "100 g",
                        "10 g",
                        "10 000 g"
                    ],
                    "correct": 0,
                    "explanation": "1 kg = 1000 g. „Kilo“ bedeutet tausend."
                },
                {
                    "id": "gewichtk3l2u_leicht_2",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was wiegt ein Apfel ungefähr?",
                    "answers": [
                        "150 g",
                        "150 kg",
                        "15 kg",
                        "1500 g"
                    ],
                    "correct": 0,
                    "explanation": "Ein Apfel wiegt etwa 150 g. 1500 g wären schon so schwer wie 10 Äpfel."
                },
                {
                    "id": "gewichtk3l2u_leicht_3",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Was zeigt die Waage an?",
                    "answers": [
                        "300 g",
                        "350 g",
                        "200 g",
                        "400 g"
                    ],
                    "correct": 0,
                    "explanation": "Der Zeiger steht genau in der Mitte zwischen 200 und 400. Jeder kleine Strich bedeutet 100 g, also 300 g.",
                    "grafik": "<svg viewBox='0 0 260 216' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='202' width='140' height='10' rx='3' fill='#94a3b8'/><rect x='124' y='192' width='12' height='10' fill='#94a3b8'/><circle cx='130' cy='116' r='76' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='3'/><line x1='78.4' y1='167.6' x2='87.6' y2='158.4' stroke='#e5e7eb' stroke-width='2'/><text x='65.7' y='184.3' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='60.6' y1='138.6' x2='66.3' y2='136.7' stroke='#e5e7eb' stroke-width='1.2'/><line x1='57.9' y1='104.6' x2='70.7' y2='106.6' stroke='#e5e7eb' stroke-width='2'/><text x='40.1' y='105.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>200</text><line x1='70.9' y1='73.1' x2='75.8' y2='76.6' stroke='#e5e7eb' stroke-width='1.2'/><line x1='96.9' y1='51.0' x2='102.8' y2='62.5' stroke='#e5e7eb' stroke-width='2'/><text x='88.7' y='38.9' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>400</text><line x1='130.0' y1='43.0' x2='130.0' y2='49.0' stroke='#e5e7eb' stroke-width='1.2'/><line x1='163.1' y1='51.0' x2='157.2' y2='62.5' stroke='#e5e7eb' stroke-width='2'/><text x='171.3' y='38.9' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>600</text><line x1='189.1' y1='73.1' x2='184.2' y2='76.6' stroke='#e5e7eb' stroke-width='1.2'/><line x1='202.1' y1='104.6' x2='189.3' y2='106.6' stroke='#e5e7eb' stroke-width='2'/><text x='219.9' y='105.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>800</text><line x1='199.4' y1='138.6' x2='193.7' y2='136.7' stroke='#e5e7eb' stroke-width='1.2'/><line x1='181.6' y1='167.6' x2='172.4' y2='158.4' stroke='#e5e7eb' stroke-width='2'/><text x='194.3' y='184.3' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1000</text><text x='130' y='156' text-anchor='middle' font-size='12' fill='#94a3b8' font-family='sans-serif'>Gramm</text><line x1='130' y1='116' x2='75.0' y2='76.0' stroke='#f43f5e' stroke-width='3' stroke-linecap='round'/><circle cx='130' cy='116' r='6' fill='#f43f5e'/></svg>"
                },
                {
                    "id": "gewichtk3l2u_leicht_4",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "leicht",
                    "points": 10,
                    "question": "Wie schwer ist ein Schulranzen ungefähr?",
                    "answers": [
                        "4 kg",
                        "4 g",
                        "40 kg",
                        "400 g"
                    ],
                    "correct": 0,
                    "explanation": "Ein gepackter Schulranzen wiegt etwa 4 kg. 40 kg wären so schwer wie ein großes Kind."
                }
            ],
            "mittel": [
                {
                    "id": "gewichtk3l2u_mittel_1",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Die Waage ist im Gleichgewicht. Wie schwer ist das Paket?",
                    "answers": [
                        "750 g",
                        "700 g",
                        "570 g",
                        "75 g"
                    ],
                    "correct": 0,
                    "explanation": "Auf der rechten Seite liegen 500 g + 200 g + 50 g = 750 g. Das Paket wiegt also auch 750 g.",
                    "grafik": "<svg viewBox='0 0 320 162' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='160,48 140,150 180,150' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='110' y1='154' x2='210' y2='154' stroke='#38bdf8' stroke-width='3'/><line x1='40' y1='48' x2='280' y2='48' stroke='#e5e7eb' stroke-width='4'/><circle cx='160' cy='48' r='5' fill='#f59e0b'/><polygon points='160,36 155,26 165,26' fill='#10b981'/><line x1='70' y1='48' x2='20' y2='118' stroke='#94a3b8' stroke-width='1.5'/><line x1='70' y1='48' x2='120' y2='118' stroke='#94a3b8' stroke-width='1.5'/><path d='M10,118 H130 L118,128 H22 Z' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><rect x='40' y='80' width='60' height='38' rx='3' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='70' y='104' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>?</text><line x1='250' y1='48' x2='200' y2='118' stroke='#94a3b8' stroke-width='1.5'/><line x1='250' y1='48' x2='300' y2='118' stroke='#94a3b8' stroke-width='1.5'/><path d='M190,118 H310 L298,128 H202 Z' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><path d='M198,88 H222 L228,118 H192 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='1.5'/><rect x='205' y='82' width='10' height='6' rx='2' fill='#f59e0b'/><text x='210' y='108' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>500 g</text><path d='M238,88 H262 L268,118 H232 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='1.5'/><rect x='245' y='82' width='10' height='6' rx='2' fill='#f59e0b'/><text x='250' y='108' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>200 g</text><path d='M278,88 H302 L308,118 H272 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='1.5'/><rect x='285' y='82' width='10' height='6' rx='2' fill='#f59e0b'/><text x='290' y='108' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 g</text></svg>"
                },
                {
                    "id": "gewichtk3l2u_mittel_2",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel Gramm sind 1,5 kg?",
                    "answers": [
                        "1500 g",
                        "150 g",
                        "1050 g",
                        "15 g"
                    ],
                    "correct": 0,
                    "explanation": "1,5 kg = 1 kg 500 g. 1000 g + 500 g = 1500 g."
                },
                {
                    "id": "gewichtk3l2u_mittel_3",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel Gramm sind 1 kg 250 g?",
                    "answers": [
                        "1250 g",
                        "1025 g",
                        "12 500 g",
                        "125 g"
                    ],
                    "correct": 0,
                    "explanation": "1 kg = 1000 g. 1000 g + 250 g = 1250 g."
                },
                {
                    "id": "gewichtk3l2u_mittel_4",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welches Gewicht ist am schwersten?",
                    "answers": [
                        "2 kg",
                        "1900 g",
                        "1 kg 950 g",
                        "1,2 kg"
                    ],
                    "correct": 0,
                    "explanation": "Rechne alles in g um: 2 kg = 2000 g, 1 kg 950 g = 1950 g, 1,2 kg = 1200 g. 2000 g ist am meisten."
                }
            ],
            "schwer": [
                {
                    "id": "gewichtk3l2u_schwer_1",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Mia kauft ein. Wie schwer ist alles zusammen?",
                    "answers": [
                        "1750 g",
                        "751 g",
                        "1650 g",
                        "1 kg 75 g"
                    ],
                    "correct": 0,
                    "explanation": "1 kg = 1000 g. 1000 g + 500 g + 250 g = 1750 g.",
                    "grafik": "<svg viewBox='0 0 340 86' style='width:100%;max-width:340px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='100' height='66' rx='8' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='60' y='36' text-anchor='middle' font-size='13' fill='#94a3b8' font-family='sans-serif'>Mehl</text><text x='60' y='60' text-anchor='middle' font-size='16' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 kg</text><rect x='120' y='10' width='100' height='66' rx='8' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='2'/><text x='170' y='36' text-anchor='middle' font-size='13' fill='#94a3b8' font-family='sans-serif'>Zucker</text><text x='170' y='60' text-anchor='middle' font-size='16' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>500 g</text><rect x='230' y='10' width='100' height='66' rx='8' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='280' y='36' text-anchor='middle' font-size='13' fill='#94a3b8' font-family='sans-serif'>Butter</text><text x='280' y='60' text-anchor='middle' font-size='16' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>250 g</text></svg>"
                },
                {
                    "id": "gewichtk3l2u_schwer_2",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Im Sack sind 3 kg Kartoffeln. Ben nimmt 800 g heraus. Wie viel bleibt?",
                    "answers": [
                        "2200 g",
                        "2800 g",
                        "3800 g",
                        "2300 g"
                    ],
                    "correct": 0,
                    "explanation": "3 kg = 3000 g. 3000 g − 800 g = 2200 g."
                },
                {
                    "id": "gewichtk3l2u_schwer_3",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Was zeigt die Waage an?",
                    "answers": [
                        "2 kg 500 g",
                        "2 kg 50 g",
                        "3 kg 500 g",
                        "25 kg"
                    ],
                    "correct": 0,
                    "explanation": "Der Zeiger steht in der Mitte zwischen 2 und 3. Die Hälfte von 1 kg sind 500 g, also 2 kg 500 g.",
                    "grafik": "<svg viewBox='0 0 260 216' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='202' width='140' height='10' rx='3' fill='#94a3b8'/><rect x='124' y='192' width='12' height='10' fill='#94a3b8'/><circle cx='130' cy='116' r='76' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='3'/><line x1='78.4' y1='167.6' x2='87.6' y2='158.4' stroke='#e5e7eb' stroke-width='2'/><text x='65.7' y='184.3' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='60.6' y1='138.6' x2='66.3' y2='136.7' stroke='#e5e7eb' stroke-width='1.2'/><line x1='57.9' y1='104.6' x2='70.7' y2='106.6' stroke='#e5e7eb' stroke-width='2'/><text x='40.1' y='105.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1</text><line x1='70.9' y1='73.1' x2='75.8' y2='76.6' stroke='#e5e7eb' stroke-width='1.2'/><line x1='96.9' y1='51.0' x2='102.8' y2='62.5' stroke='#e5e7eb' stroke-width='2'/><text x='88.7' y='38.9' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>2</text><line x1='130.0' y1='43.0' x2='130.0' y2='49.0' stroke='#e5e7eb' stroke-width='1.2'/><line x1='163.1' y1='51.0' x2='157.2' y2='62.5' stroke='#e5e7eb' stroke-width='2'/><text x='171.3' y='38.9' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>3</text><line x1='189.1' y1='73.1' x2='184.2' y2='76.6' stroke='#e5e7eb' stroke-width='1.2'/><line x1='202.1' y1='104.6' x2='189.3' y2='106.6' stroke='#e5e7eb' stroke-width='2'/><text x='219.9' y='105.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>4</text><line x1='199.4' y1='138.6' x2='193.7' y2='136.7' stroke='#e5e7eb' stroke-width='1.2'/><line x1='181.6' y1='167.6' x2='172.4' y2='158.4' stroke='#e5e7eb' stroke-width='2'/><text x='194.3' y='184.3' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>5</text><text x='130' y='156' text-anchor='middle' font-size='12' fill='#94a3b8' font-family='sans-serif'>Kilogramm</text><line x1='130' y1='116' x2='130.0' y2='48.0' stroke='#f43f5e' stroke-width='3' stroke-linecap='round'/><circle cx='130' cy='116' r='6' fill='#f43f5e'/></svg>"
                },
                {
                    "id": "gewichtk3l2u_schwer_4",
                    "category": "kurs_gewicht_k3_l2",
                    "area": "schule",
                    "grade": 3,
                    "subject": "mathe",
                    "topic": "groessen_geometrie_k3",
                    "difficulty": "schwer",
                    "points": 10,
                    "question": "Ein kleines Auto wiegt etwa 1 t. Wie viel Kilogramm sind das?",
                    "answers": [
                        "1000 kg",
                        "100 kg",
                        "10 kg",
                        "1000 g"
                    ],
                    "correct": 0,
                    "explanation": "1 t (Tonne) = 1000 kg. Tonnen benutzt man für sehr schwere Dinge wie Autos."
                }
            ]
        },
        "test": [
            {
                "id": "gewichtk3l2_test_1",
                "category": "kurs_gewicht_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Gramm sind 3 kg?",
                "answers": [
                    "3000 g",
                    "300 g",
                    "30 g",
                    "3 g"
                ],
                "correct": 0,
                "explanation": "1 kg = 1000 g. Also sind 3 kg = 3 · 1000 g = 3000 g."
            },
            {
                "id": "gewichtk3l2_test_2",
                "category": "kurs_gewicht_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Die Waage ist im Gleichgewicht. Wie schwer ist der Käse?",
                "answers": [
                    "1250 g",
                    "1205 g",
                    "1 kg 25 g",
                    "251 g"
                ],
                "correct": 0,
                "explanation": "Rechts liegen 1 kg + 200 g + 50 g. Das sind 1000 g + 250 g = 1250 g.",
                "grafik": "<svg viewBox='0 0 320 162' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><polygon points='160,48 140,150 180,150' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><line x1='110' y1='154' x2='210' y2='154' stroke='#38bdf8' stroke-width='3'/><line x1='40' y1='48' x2='280' y2='48' stroke='#e5e7eb' stroke-width='4'/><circle cx='160' cy='48' r='5' fill='#f59e0b'/><polygon points='160,36 155,26 165,26' fill='#10b981'/><line x1='70' y1='48' x2='20' y2='118' stroke='#94a3b8' stroke-width='1.5'/><line x1='70' y1='48' x2='120' y2='118' stroke='#94a3b8' stroke-width='1.5'/><path d='M10,118 H130 L118,128 H22 Z' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><rect x='40' y='80' width='60' height='38' rx='3' fill='rgba(16,185,129,0.25)' stroke='#10b981' stroke-width='2'/><text x='70' y='104' text-anchor='middle' font-size='13' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>?</text><line x1='250' y1='48' x2='200' y2='118' stroke='#94a3b8' stroke-width='1.5'/><line x1='250' y1='48' x2='300' y2='118' stroke='#94a3b8' stroke-width='1.5'/><path d='M190,118 H310 L298,128 H202 Z' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><path d='M198,88 H222 L228,118 H192 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='1.5'/><rect x='205' y='82' width='10' height='6' rx='2' fill='#f59e0b'/><text x='210' y='108' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1 kg</text><path d='M238,88 H262 L268,118 H232 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='1.5'/><rect x='245' y='82' width='10' height='6' rx='2' fill='#f59e0b'/><text x='250' y='108' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>200 g</text><path d='M278,88 H302 L308,118 H272 Z' fill='rgba(245,158,11,0.25)' stroke='#f59e0b' stroke-width='1.5'/><rect x='285' y='82' width='10' height='6' rx='2' fill='#f59e0b'/><text x='290' y='108' text-anchor='middle' font-size='10' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>50 g</text></svg>"
            },
            {
                "id": "gewichtk3l2_test_3",
                "category": "kurs_gewicht_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Wie viel Gramm sind 3 kg 80 g?",
                "answers": [
                    "3080 g",
                    "3800 g",
                    "380 g",
                    "3008 g"
                ],
                "correct": 0,
                "explanation": "3 kg = 3000 g. 3000 g + 80 g = 3080 g."
            },
            {
                "id": "gewichtk3l2_test_4",
                "category": "kurs_gewicht_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was zeigt die Waage an?",
                "answers": [
                    "700 g",
                    "750 g",
                    "650 g",
                    "800 g"
                ],
                "correct": 0,
                "explanation": "Der Zeiger steht auf dem Strich zwischen 600 und 800. Jeder kleine Strich bedeutet 100 g, also 700 g.",
                "grafik": "<svg viewBox='0 0 260 216' style='width:100%;max-width:260px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='202' width='140' height='10' rx='3' fill='#94a3b8'/><rect x='124' y='192' width='12' height='10' fill='#94a3b8'/><circle cx='130' cy='116' r='76' fill='rgba(56,189,248,0.12)' stroke='#38bdf8' stroke-width='3'/><line x1='78.4' y1='167.6' x2='87.6' y2='158.4' stroke='#e5e7eb' stroke-width='2'/><text x='65.7' y='184.3' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>0</text><line x1='60.6' y1='138.6' x2='66.3' y2='136.7' stroke='#e5e7eb' stroke-width='1.2'/><line x1='57.9' y1='104.6' x2='70.7' y2='106.6' stroke='#e5e7eb' stroke-width='2'/><text x='40.1' y='105.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>200</text><line x1='70.9' y1='73.1' x2='75.8' y2='76.6' stroke='#e5e7eb' stroke-width='1.2'/><line x1='96.9' y1='51.0' x2='102.8' y2='62.5' stroke='#e5e7eb' stroke-width='2'/><text x='88.7' y='38.9' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>400</text><line x1='130.0' y1='43.0' x2='130.0' y2='49.0' stroke='#e5e7eb' stroke-width='1.2'/><line x1='163.1' y1='51.0' x2='157.2' y2='62.5' stroke='#e5e7eb' stroke-width='2'/><text x='171.3' y='38.9' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>600</text><line x1='189.1' y1='73.1' x2='184.2' y2='76.6' stroke='#e5e7eb' stroke-width='1.2'/><line x1='202.1' y1='104.6' x2='189.3' y2='106.6' stroke='#e5e7eb' stroke-width='2'/><text x='219.9' y='105.8' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>800</text><line x1='199.4' y1='138.6' x2='193.7' y2='136.7' stroke='#e5e7eb' stroke-width='1.2'/><line x1='181.6' y1='167.6' x2='172.4' y2='158.4' stroke='#e5e7eb' stroke-width='2'/><text x='194.3' y='184.3' text-anchor='middle' font-size='12' font-weight='700' fill='#e5e7eb' font-family='sans-serif'>1000</text><text x='130' y='156' text-anchor='middle' font-size='12' fill='#94a3b8' font-family='sans-serif'>Gramm</text><line x1='130' y1='116' x2='185.0' y2='76.0' stroke='#f43f5e' stroke-width='3' stroke-linecap='round'/><circle cx='130' cy='116' r='6' fill='#f43f5e'/></svg>"
            },
            {
                "id": "gewichtk3l2_test_5",
                "category": "kurs_gewicht_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Was wiegt ungefähr 1 kg?",
                "answers": [
                    "eine Tüte Mehl",
                    "eine Erdbeere",
                    "ein Fahrradhelm",
                    "ein Fahrrad"
                ],
                "correct": 0,
                "explanation": "Eine Tüte Mehl wiegt 1 kg. Eine Erdbeere wiegt nur wenige Gramm, ein Fahrrad viele Kilogramm."
            },
            {
                "id": "gewichtk3l2_test_6",
                "category": "kurs_gewicht_k3_l2",
                "area": "schule",
                "grade": 3,
                "subject": "mathe",
                "topic": "groessen_geometrie_k3",
                "difficulty": "mittel",
                "points": 10,
                "question": "Aylin kauft 2 Pakete Nudeln zu je 500 g und 1,5 kg Kartoffeln. Wie schwer ist alles?",
                "answers": [
                    "2 kg 500 g",
                    "2 kg",
                    "2 kg 50 g",
                    "2 kg 5 g"
                ],
                "correct": 0,
                "explanation": "2 · 500 g = 1000 g = 1 kg. 1 kg + 1,5 kg = 2,5 kg = 2 kg 500 g."
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
