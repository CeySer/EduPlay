// Sachaufgaben + Bruchteile - Klasse 4 Mathe
// Neuer Kurs sachaufgaben_k4 (2 Lektionen) + Lektion bruch_k4_l2 fuer den bestehenden Kurs brueche_k4.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [{"id": "sachaufgaben_k4", "title": "Sachaufgaben clever lösen", "icon": "🧩", "grade": 4, "subject": "mathe", "beschreibung": "Überschlagen, Lösungsplan, mehrschrittige Aufgaben mit Geld und Preistabellen, rückwärts rechnen und Ergebnisse prüfen."}];
    const extraLektionen = [
        {
            "id": "sach_k4_l1",
            "kurs": "sachaufgaben_k4",
            "order": 1,
            "icon": "🧭",
            "title": "Überschlagen und Lösungsplan",
            "kurz": "Erst planen, dann rechnen – und mit dem Überschlag prüfen",
            "erklaerung": {
                "intro": "Bevor du rechnest, machst du einen <b>Lösungsplan</b>: Was weiß ich? Was ist gesucht? Welche <b>Rechenart</b> passt? Mit einem <b>Überschlag</b> rundest du die Zahlen und rechnest grob im Kopf. So merkst du schnell, ob dein genaues Ergebnis stimmen kann. Bei Geld gilt: <b>1 € = 100 ct</b>.",
                "merksatz": "Erst lesen und planen, dann rechnen – und mit dem Überschlag prüfen.",
                "beispiele": [
                    "Der Lösungsplan in vier Schritten:<svg viewBox='0 0 280 170' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='8' width='240' height='32' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='34' y='29' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1. Lesen</text><text x='248' y='29' text-anchor='end' font-size='12' font-family='sans-serif' fill='#94a3b8'>Was weiß ich?</text><rect x='20' y='48' width='240' height='32' rx='6' fill='rgba(167,139,250,0.25)' stroke='#a78bfa' stroke-width='2'/><text x='34' y='69' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2. Planen</text><text x='248' y='69' text-anchor='end' font-size='12' font-family='sans-serif' fill='#94a3b8'>Was ist gesucht?</text><rect x='20' y='88' width='240' height='32' rx='6' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='34' y='109' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3. Rechnen</text><text x='248' y='109' text-anchor='end' font-size='12' font-family='sans-serif' fill='#94a3b8'>Überschlag!</text><rect x='20' y='128' width='240' height='32' rx='6' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><text x='34' y='149' text-anchor='start' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4. Antwort</text><text x='248' y='149' text-anchor='end' font-size='12' font-family='sans-serif' fill='#94a3b8'>Satz schreiben</text></svg>",
                    "Überschlag: 398 · 5 ≈ 400 · 5 = 2000. Genau gerechnet: 398 · 5 = 1990. Das liegt nah bei 2000 – passt!",
                    "Lea kauft 3 Hefte zu je 1,20 €. Gesucht ist der Gesamtpreis, also mal rechnen: 3 · 1,20 € = 3,60 € = 360 ct.<svg viewBox='0 0 260 72' style='width:100%;max-width:338px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='15.5' y='14' width='66' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='22.5' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='48.5' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Heft</text><text x='48.5' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,20 €</text><rect x='97.0' y='14' width='66' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='104.0' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='130.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Heft</text><text x='130.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,20 €</text><rect x='178.5' y='14' width='66' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='185.5' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='211.5' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Heft</text><text x='211.5' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,20 €</text></svg>"
                ]
            },
            "uebung": {
                "leicht": [
                    {
                        "id": "sachk4l1u_leicht_1",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Wie überschlägst du 49 · 6 am besten?",
                        "answers": [
                            "50 · 6 = 300",
                            "40 · 6 = 240",
                            "49 · 10 = 490",
                            "50 · 10 = 500"
                        ],
                        "correct": 0,
                        "explanation": "Du rundest 49 auf 50 und rechnest 50 · 6 = 300. Die 6 ist schon einfach, die lässt du stehen."
                    },
                    {
                        "id": "sachk4l1u_leicht_2",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Ein Buch kostet 8 €. Ben kauft 7 Bücher. Welche Rechenart passt?",
                        "answers": [
                            "Malrechnen",
                            "Plusrechnen",
                            "Minusrechnen",
                            "Teilen"
                        ],
                        "correct": 0,
                        "explanation": "7 Bücher zu je 8 € heißt 7-mal 8 €, also 7 · 8 € = 56 €. Mit 8 + 7 würdest du nur die Zahlen zusammenzählen."
                    },
                    {
                        "id": "sachk4l1u_leicht_3",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Wie viel Cent sind 3,50 €?",
                        "answers": [
                            "350 ct",
                            "35 ct",
                            "3050 ct",
                            "305 ct"
                        ],
                        "correct": 0,
                        "explanation": "1 € = 100 ct, also 3 € = 300 ct. Dazu kommen 50 ct: 300 ct + 50 ct = 350 ct.",
                        "grafik": "<svg viewBox='0 0 210 80' style='width:100%;max-width:273px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='40' r='18' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='40' y='44' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 €</text><circle cx='84' cy='40' r='18' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='84' y='44' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 €</text><circle cx='128' cy='40' r='18' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='128' y='44' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 €</text><circle cx='170' cy='40' r='16' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='170' y='44' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>50 ct</text></svg>"
                    },
                    {
                        "id": "sachk4l1u_leicht_4",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Mia hat 20 € und kauft ein Buch für 13 €. Was ist gesucht?",
                        "answers": [
                            "Wie viel Geld übrig ist",
                            "Wie viel das Buch kostet",
                            "Wie viel Mia zuerst hat",
                            "Wie viel beides zusammen ist"
                        ],
                        "correct": 0,
                        "explanation": "Der Buchpreis und Mias Geld stehen schon da. Gesucht ist der Rest: 20 € − 13 € = 7 €."
                    }
                ],
                "mittel": [
                    {
                        "id": "sachk4l1u_mittel_1",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Ben rechnet 612 + 289 = 1001. Was zeigt der Überschlag 600 + 300 = 900?",
                        "answers": [
                            "Das Ergebnis ist zu groß",
                            "Das Ergebnis stimmt",
                            "Das Ergebnis ist zu klein",
                            "Er hätte teilen müssen"
                        ],
                        "correct": 0,
                        "explanation": "Der Überschlag ergibt etwa 900, Ben hat aber über 1000. Genau ist 612 + 289 = 901, also ist sein Ergebnis zu groß."
                    },
                    {
                        "id": "sachk4l1u_mittel_2",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Ein Stadion hat 48 750 Plätze. Runde auf Tausender.",
                        "answers": [
                            "49 000",
                            "48 000",
                            "50 000",
                            "48 800"
                        ],
                        "correct": 0,
                        "explanation": "Die Hunderterstelle ist 7, also wird aufgerundet: 48 750 ≈ 49 000."
                    },
                    {
                        "id": "sachk4l1u_mittel_3",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Ein Fahrrad kostet 289 €. Ein Verein kauft 4 Stück. Welcher Überschlag passt?",
                        "answers": [
                            "300 · 4 = 1200",
                            "200 · 4 = 800",
                            "300 + 4 = 304",
                            "290 · 40 = 11600"
                        ],
                        "correct": 0,
                        "explanation": "289 rundest du auf 300. 4 Fahrräder heißt mal 4: 300 · 4 = 1200 €. Genau sind es 1156 €.",
                        "grafik": "<svg viewBox='0 0 320 72' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='11.2' y='14' width='66' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='18.2' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='44.2' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Fahrrad</text><text x='44.2' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>289 €</text><rect x='88.4' y='14' width='66' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='95.4' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='121.4' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Fahrrad</text><text x='121.4' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>289 €</text><rect x='165.6' y='14' width='66' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='172.6' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='198.6' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Fahrrad</text><text x='198.6' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>289 €</text><rect x='242.8' y='14' width='66' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='249.8' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='275.8' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Fahrrad</text><text x='275.8' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>289 €</text></svg>"
                    },
                    {
                        "id": "sachk4l1u_mittel_4",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Jonas hat 5 € und kauft ein Eis für 1,30 €. Wie viel Geld bleibt ihm?",
                        "answers": [
                            "3,70 €",
                            "4,70 €",
                            "3,30 €",
                            "6,30 €"
                        ],
                        "correct": 0,
                        "explanation": "5,00 € − 1,30 € = 3,70 €. Probe: 3,70 € + 1,30 € = 5,00 €.",
                        "grafik": "<svg viewBox='0 0 178 72' style='width:100%;max-width:231px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='19' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='49.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Eis</text><text x='49.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,30 €</text><rect x='102' y='19' width='64' height='34' rx='4' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><rect x='107' y='24' width='54' height='24' rx='2' fill='none' stroke='#10b981' stroke-width='1' stroke-dasharray='3 2'/><text x='134.0' y='41.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text></svg>"
                    }
                ],
                "schwer": [
                    {
                        "id": "sachk4l1u_schwer_1",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Ein Zoo hatte 386 000 Gäste, im Jahr danach 414 000. Wie viele sind das zusammen?",
                        "answers": [
                            "800 000",
                            "700 000",
                            "790 000",
                            "8 000 000"
                        ],
                        "correct": 0,
                        "explanation": "386 000 + 414 000 = 800 000. Es gibt Überträge bei den Tausendern und bei den Zehntausendern."
                    },
                    {
                        "id": "sachk4l1u_schwer_2",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Finn kauft 3 Hefte zu je 2 € und zahlt mit 10 €. Was rechnest du zuerst?",
                        "answers": [
                            "3 · 2 € = 6 €",
                            "10 € − 3 € = 7 €",
                            "10 € − 2 € = 8 €",
                            "3 € + 2 € = 5 €"
                        ],
                        "correct": 0,
                        "explanation": "Zuerst brauchst du den Gesamtpreis: 3 · 2 € = 6 €. Danach rechnest du den Rest: 10 € − 6 € = 4 €."
                    },
                    {
                        "id": "sachk4l1u_schwer_3",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Überschlage 3580 : 6. Welches Ergebnis ist ungefähr richtig?",
                        "answers": [
                            "etwa 600",
                            "etwa 60",
                            "etwa 6000",
                            "etwa 500"
                        ],
                        "correct": 0,
                        "explanation": "3580 ist ungefähr 3600, und 3600 : 6 = 600. Genau ergibt 3580 : 6 etwas weniger als 600."
                    },
                    {
                        "id": "sachk4l1u_schwer_4",
                        "category": "kurs_sach_k4_l1",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "4 Brötchen kosten zusammen 1,80 €. Was kostet 1 Brötchen?",
                        "answers": [
                            "45 ct",
                            "40 ct",
                            "4,50 €",
                            "1,76 €"
                        ],
                        "correct": 0,
                        "explanation": "1,80 € sind 180 ct. 180 ct : 4 = 45 ct. Probe: 4 · 45 ct = 180 ct.",
                        "grafik": "<svg viewBox='0 0 160 72' style='width:100%;max-width:208px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='35.0' y='14' width='90' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='54.0' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='80.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>4 Brötchen</text><text x='80.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,80 €</text></svg>"
                    }
                ]
            },
            "test": [
                {
                    "id": "sachk4l1_test_1",
                    "category": "kurs_sach_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Überschlage 198 · 4. Welches Ergebnis ist ungefähr richtig?",
                    "answers": [
                        "etwa 800",
                        "etwa 400",
                        "etwa 80",
                        "etwa 8000"
                    ],
                    "correct": 0,
                    "explanation": "198 ist fast 200, und 200 · 4 = 800. Genau sind es 792."
                },
                {
                    "id": "sachk4l1_test_2",
                    "category": "kurs_sach_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Elif hat 50 € und kauft Schuhe für 32,50 €. Wie viel bleibt übrig?",
                    "answers": [
                        "17,50 €",
                        "18,50 €",
                        "27,50 €",
                        "82,50 €"
                    ],
                    "correct": 0,
                    "explanation": "50,00 € − 32,50 € = 17,50 €. Probe: 17,50 € + 32,50 € = 50,00 €.",
                    "grafik": "<svg viewBox='0 0 178 72' style='width:100%;max-width:231px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='19' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='49.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Schuhe</text><text x='49.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>32,50 €</text><rect x='102' y='19' width='64' height='34' rx='4' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><rect x='107' y='24' width='54' height='24' rx='2' fill='none' stroke='#10b981' stroke-width='1' stroke-dasharray='3 2'/><text x='134.0' y='41.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>50 €</text></svg>"
                },
                {
                    "id": "sachk4l1_test_3",
                    "category": "kurs_sach_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ein Bäcker backt 6 Bleche mit je 35 Brötchen. Welche Rechnung passt?",
                    "answers": [
                        "6 · 35",
                        "35 + 6",
                        "35 − 6",
                        "35 : 6"
                    ],
                    "correct": 0,
                    "explanation": "6 Bleche mit je 35 Brötchen heißt 6-mal 35: 6 · 35 = 210 Brötchen.",
                    "grafik": "<svg viewBox='0 0 306 106' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='14' y='12' width='84' height='36' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='56' y='35' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#e5e7eb'>35 Brötchen</text><rect x='110' y='12' width='84' height='36' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='152' y='35' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#e5e7eb'>35 Brötchen</text><rect x='206' y='12' width='84' height='36' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='248' y='35' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#e5e7eb'>35 Brötchen</text><rect x='14' y='58' width='84' height='36' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='56' y='81' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#e5e7eb'>35 Brötchen</text><rect x='110' y='58' width='84' height='36' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='152' y='81' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#e5e7eb'>35 Brötchen</text><rect x='206' y='58' width='84' height='36' rx='5' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='248' y='81' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#e5e7eb'>35 Brötchen</text></svg>"
                },
                {
                    "id": "sachk4l1_test_4",
                    "category": "kurs_sach_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Runde 563 820 auf Zehntausender.",
                    "answers": [
                        "560 000",
                        "570 000",
                        "600 000",
                        "564 000"
                    ],
                    "correct": 0,
                    "explanation": "Die Tausenderstelle ist 3, also wird abgerundet: 563 820 ≈ 560 000.",
                    "grafik": "<svg viewBox='0 0 320 80' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='40' x2='290' y2='40' stroke='#38bdf8' stroke-width='2'/><line x1='30.0' y1='30' x2='30.0' y2='50' stroke='#38bdf8' stroke-width='1.5'/><line x1='56.0' y1='35' x2='56.0' y2='45' stroke='#38bdf8' stroke-width='1.5'/><line x1='82.0' y1='35' x2='82.0' y2='45' stroke='#38bdf8' stroke-width='1.5'/><line x1='108.0' y1='35' x2='108.0' y2='45' stroke='#38bdf8' stroke-width='1.5'/><line x1='134.0' y1='35' x2='134.0' y2='45' stroke='#38bdf8' stroke-width='1.5'/><line x1='160.0' y1='30' x2='160.0' y2='50' stroke='#38bdf8' stroke-width='1.5'/><line x1='186.0' y1='35' x2='186.0' y2='45' stroke='#38bdf8' stroke-width='1.5'/><line x1='212.0' y1='35' x2='212.0' y2='45' stroke='#38bdf8' stroke-width='1.5'/><line x1='238.0' y1='35' x2='238.0' y2='45' stroke='#38bdf8' stroke-width='1.5'/><line x1='264.0' y1='35' x2='264.0' y2='45' stroke='#38bdf8' stroke-width='1.5'/><line x1='290.0' y1='30' x2='290.0' y2='50' stroke='#38bdf8' stroke-width='1.5'/><text x='30' y='68' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>560 000</text><text x='160.0' y='68' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>565 000</text><text x='290' y='68' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>570 000</text><path d='M123.3,16 L135.3,16 L129.3,28 Z' fill='#f59e0b'/><text x='129.3' y='12' text-anchor='middle' font-size='11' font-weight='700' font-family='sans-serif' fill='#f59e0b'>563 820</text></svg>"
                },
                {
                    "id": "sachk4l1_test_5",
                    "category": "kurs_sach_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Lea rechnet 412 · 3 = 836. Was zeigt der Überschlag 400 · 3 = 1200?",
                    "answers": [
                        "Ihr Ergebnis ist zu klein",
                        "Ihr Ergebnis stimmt",
                        "Ihr Ergebnis ist zu groß",
                        "Sie muss plus rechnen"
                    ],
                    "correct": 0,
                    "explanation": "Der Überschlag ergibt etwa 1200, Lea hat nur 836. Genau ist 412 · 3 = 1236, also ist ihr Ergebnis zu klein."
                },
                {
                    "id": "sachk4l1_test_6",
                    "category": "kurs_sach_k4_l1",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel Euro sind 750 ct?",
                    "answers": [
                        "7,50 €",
                        "75 €",
                        "0,75 €",
                        "750 €"
                    ],
                    "correct": 0,
                    "explanation": "100 ct = 1 €, also sind 700 ct = 7 €. Dazu 50 ct: 7,50 €."
                }
            ],
            "bestehenAb": 0.8
        },
        {
            "id": "sach_k4_l2",
            "kurs": "sachaufgaben_k4",
            "order": 2,
            "icon": "🪜",
            "title": "Mehrschrittige Aufgaben",
            "kurz": "Schritt für Schritt rechnen, rückwärts rechnen, Ergebnis prüfen",
            "erklaerung": {
                "intro": "Viele Sachaufgaben brauchen <b>mehrere Rechenschritte</b>. Rechne Schritt für Schritt und schreibe jedes <b>Zwischenergebnis</b> auf. Kennst du das Ende und suchst den Anfang, hilft <b>Rückwärtsrechnen</b> mit der Umkehraufgabe. Zum Schluss <b>prüfst</b> du: Passt das Ergebnis zur Frage?",
                "merksatz": "Zwischenergebnisse aufschreiben, Antwortsatz schreiben, Ergebnis prüfen.",
                "beispiele": [
                    "Ben kauft 2 Hefte zu je 1,50 € und einen Stift für 2,20 €. Er zahlt mit 10 €. 1. Schritt: 2 · 1,50 € = 3,00 €. 2. Schritt: 3,00 € + 2,20 € = 5,20 €. 3. Schritt: 10,00 € − 5,20 € = 4,80 € Rückgeld.<svg viewBox='0 0 346 72' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='19' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='49.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Heft</text><text x='49.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,50 €</text><rect x='96' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='103' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='133.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Heft</text><text x='133.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,50 €</text><rect x='180' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='187' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='217.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Stift</text><text x='217.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,20 €</text><rect x='270' y='19' width='64' height='34' rx='4' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><rect x='275' y='24' width='54' height='24' rx='2' fill='none' stroke='#10b981' stroke-width='1' stroke-dasharray='3 2'/><text x='302.0' y='41.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text></svg>",
                    "Klassenfahrt: Der Bus kostet 360 € für 24 Kinder. Dazu kommen 6 € Eintritt pro Kind. 360 € : 24 = 15 €, dann 15 € + 6 € = 21 € pro Kind.",
                    "Rückwärts: Noah gibt 13 € aus und hat dann noch 7 €. Rechne rückwärts mit der Umkehraufgabe: 7 € + 13 € = 20 €. Er hatte vorher 20 €.<svg viewBox='0 0 202 76' style='width:100%;max-width:263px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='30' width='56' height='34' rx='6' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='38.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='107' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>− 13 €</text><line x1='70' y1='47' x2='126' y2='47' stroke='#a78bfa' stroke-width='2'/><path d='M124,42 L132,47 L124,52 Z' fill='#a78bfa'/><rect x='136' y='30' width='56' height='34' rx='6' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><text x='164.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7 €</text></svg>"
                ]
            },
            "uebung": {
                "leicht": [
                    {
                        "id": "sachk4l2u_leicht_1",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Mia kauft 2 Hefte zu je 3 €. Sie zahlt mit 10 €. Wie viel bekommt sie zurück?",
                        "answers": [
                            "4 €",
                            "7 €",
                            "6 €",
                            "5 €"
                        ],
                        "correct": 0,
                        "explanation": "Erst der Preis: 2 · 3 € = 6 €. Dann das Rückgeld: 10 € − 6 € = 4 €.",
                        "grafik": "<svg viewBox='0 0 262 72' style='width:100%;max-width:341px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='19' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='49.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Heft</text><text x='49.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text><rect x='96' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='103' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='133.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Heft</text><text x='133.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text><rect x='186' y='19' width='64' height='34' rx='4' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><rect x='191' y='24' width='54' height='24' rx='2' fill='none' stroke='#10b981' stroke-width='1' stroke-dasharray='3 2'/><text x='218.0' y='41.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text></svg>"
                    },
                    {
                        "id": "sachk4l2u_leicht_2",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Finn hat 8 € ausgegeben. Jetzt hat er noch 12 €. Wie viel hatte er vorher?",
                        "answers": [
                            "20 €",
                            "4 €",
                            "12 €",
                            "8 €"
                        ],
                        "correct": 0,
                        "explanation": "Rückwärts rechnen: Das Ausgeben machst du mit Plus rückgängig. 12 € + 8 € = 20 €.",
                        "grafik": "<svg viewBox='0 0 202 76' style='width:100%;max-width:263px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='30' width='56' height='34' rx='6' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='38.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='107' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>− 8 €</text><line x1='70' y1='47' x2='126' y2='47' stroke='#a78bfa' stroke-width='2'/><path d='M124,42 L132,47 L124,52 Z' fill='#a78bfa'/><rect x='136' y='30' width='56' height='34' rx='6' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><text x='164.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>12 €</text></svg>"
                    },
                    {
                        "id": "sachk4l2u_leicht_3",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Schau in die Tabelle: Was kosten 1 Apfel und 1 Banane zusammen?",
                        "answers": [
                            "75 ct",
                            "70 ct",
                            "95 ct",
                            "65 ct"
                        ],
                        "correct": 0,
                        "explanation": "Apfel 40 ct, Banane 35 ct: 40 ct + 35 ct = 75 ct.",
                        "grafik": "<svg viewBox='0 0 190 140' style='width:100%;max-width:247px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='170' height='24' fill='rgba(56,189,248,0.25)'/><rect x='10' y='10' width='170' height='120' fill='none' stroke='#38bdf8' stroke-width='1.5'/><line x1='10' y1='34' x2='180' y2='34' stroke='#38bdf8' stroke-width='1'/><line x1='10' y1='58' x2='180' y2='58' stroke='#38bdf8' stroke-width='1'/><line x1='10' y1='82' x2='180' y2='82' stroke='#38bdf8' stroke-width='1'/><line x1='10' y1='106' x2='180' y2='106' stroke='#38bdf8' stroke-width='1'/><line x1='100' y1='10' x2='100' y2='130' stroke='#38bdf8' stroke-width='1'/><text x='55.0' y='26.0' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Obst</text><text x='140.0' y='26.0' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Preis</text><text x='55.0' y='50.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Apfel</text><text x='140.0' y='50.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>40 ct</text><text x='55.0' y='74.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Banane</text><text x='140.0' y='74.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>35 ct</text><text x='55.0' y='98.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Birne</text><text x='140.0' y='98.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>55 ct</text><text x='55.0' y='122.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Kiwi</text><text x='140.0' y='122.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>30 ct</text></svg>"
                    },
                    {
                        "id": "sachk4l2u_leicht_4",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Wie prüfst du 63 : 7 = 9 am besten?",
                        "answers": [
                            "9 · 7 = 63",
                            "63 + 7 = 70",
                            "63 − 9 = 54",
                            "9 + 7 = 16"
                        ],
                        "correct": 0,
                        "explanation": "Die Umkehraufgabe von Teilen ist Malnehmen: 9 · 7 = 63. Also stimmt 63 : 7 = 9."
                    }
                ],
                "mittel": [
                    {
                        "id": "sachk4l2u_mittel_1",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Für die Klassenfahrt zahlen 24 Kinder je 15 €. Wie viel Geld ist das?",
                        "answers": [
                            "360 €",
                            "240 €",
                            "39 €",
                            "350 €"
                        ],
                        "correct": 0,
                        "explanation": "24 · 15 € = 24 · 10 € + 24 · 5 € = 240 € + 120 € = 360 €."
                    },
                    {
                        "id": "sachk4l2u_mittel_2",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "2 Erwachsene und 3 Kinder gehen ins Schwimmbad. Was zahlen sie?",
                        "answers": [
                            "30 €",
                            "35 €",
                            "13 €",
                            "65 €"
                        ],
                        "correct": 0,
                        "explanation": "Erwachsene: 2 · 9 € = 18 €. Kinder: 3 · 4 € = 12 €. Zusammen: 18 € + 12 € = 30 €.",
                        "grafik": "<svg viewBox='0 0 210 92' style='width:100%;max-width:273px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='190' height='24' fill='rgba(56,189,248,0.25)'/><rect x='10' y='10' width='190' height='72' fill='none' stroke='#38bdf8' stroke-width='1.5'/><line x1='10' y1='34' x2='200' y2='34' stroke='#38bdf8' stroke-width='1'/><line x1='10' y1='58' x2='200' y2='58' stroke='#38bdf8' stroke-width='1'/><line x1='120' y1='10' x2='120' y2='82' stroke='#38bdf8' stroke-width='1'/><text x='65.0' y='26.0' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Schwimmbad</text><text x='160.0' y='26.0' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Eintritt</text><text x='65.0' y='50.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Kind</text><text x='160.0' y='50.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>4 €</text><text x='65.0' y='74.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Erwachsene</text><text x='160.0' y='74.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>9 €</text></svg>"
                    },
                    {
                        "id": "sachk4l2u_mittel_3",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Elif denkt sich eine Zahl. Sie nimmt sie mal 4 und erhält 48. Wie heißt die Zahl?",
                        "answers": [
                            "12",
                            "192",
                            "44",
                            "52"
                        ],
                        "correct": 0,
                        "explanation": "Rückwärts rechnen: Die Umkehrung von mal 4 ist geteilt durch 4. 48 : 4 = 12.",
                        "grafik": "<svg viewBox='0 0 202 76' style='width:100%;max-width:263px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='30' width='56' height='34' rx='6' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='38.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='107' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>· 4</text><line x1='70' y1='47' x2='126' y2='47' stroke='#a78bfa' stroke-width='2'/><path d='M124,42 L132,47 L124,52 Z' fill='#a78bfa'/><rect x='136' y='30' width='56' height='34' rx='6' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><text x='164.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>48</text></svg>"
                    },
                    {
                        "id": "sachk4l2u_mittel_4",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Noah kauft 3 Kugeln Eis zu je 1,20 € und zahlt mit 5 €. Wie viel bekommt er zurück?",
                        "answers": [
                            "1,40 €",
                            "3,80 €",
                            "3,60 €",
                            "2,60 €"
                        ],
                        "correct": 0,
                        "explanation": "Erst der Preis: 3 · 1,20 € = 3,60 €. Dann das Rückgeld: 5,00 € − 3,60 € = 1,40 €.",
                        "grafik": "<svg viewBox='0 0 178 72' style='width:100%;max-width:231px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='19' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='49.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>1 Kugel</text><text x='49.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,20 €</text><rect x='102' y='19' width='64' height='34' rx='4' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><rect x='107' y='24' width='54' height='24' rx='2' fill='none' stroke='#10b981' stroke-width='1' stroke-dasharray='3 2'/><text x='134.0' y='41.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text></svg>"
                    }
                ],
                "schwer": [
                    {
                        "id": "sachk4l2u_schwer_1",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Was zahlt ein Kind für die Klassenfahrt? Schau dir das Bild an.",
                        "answers": [
                            "23 €",
                            "15 €",
                            "428 €",
                            "36 €"
                        ],
                        "correct": 0,
                        "explanation": "Bus pro Kind: 420 € : 28 = 15 €. Dazu der Eintritt: 15 € + 8 € = 23 €.",
                        "grafik": "<svg viewBox='0 0 300 116' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='14' y='22' width='120' height='50' rx='8' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><rect x='24' y='30' width='18' height='14' rx='2' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='50' y='30' width='18' height='14' rx='2' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='76' y='30' width='18' height='14' rx='2' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='102' y='30' width='18' height='14' rx='2' fill='none' stroke='#38bdf8' stroke-width='1.5'/><circle cx='38' cy='74' r='7' fill='#0f172a' stroke='#38bdf8' stroke-width='2'/><circle cx='110' cy='74' r='7' fill='#0f172a' stroke='#38bdf8' stroke-width='2'/><text x='74' y='64' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Bus: 420 €</text><rect x='156' y='14' width='128' height='44' rx='7' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><circle cx='163' cy='21' r='2' fill='none' stroke='#10b981' stroke-width='1.2'/><text x='220.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Eintritt</text><text x='220.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 € pro Kind</text><text x='150' y='104' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>28 Kinder teilen sich den Bus.</text></svg>"
                    },
                    {
                        "id": "sachk4l2u_schwer_2",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Lea gibt 15 € aus, dann bekommt sie 10 €. Nun hat sie 30 €. Was hatte sie zuerst?",
                        "answers": [
                            "35 €",
                            "55 €",
                            "25 €",
                            "5 €"
                        ],
                        "correct": 0,
                        "explanation": "Rückwärts mit Umkehraufgaben: 30 € − 10 € = 20 €, dann 20 € + 15 € = 35 €. Probe: 35 − 15 + 10 = 30.",
                        "grafik": "<svg viewBox='0 0 328 76' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='30' width='56' height='34' rx='6' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='38.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='107' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>− 15 €</text><line x1='70' y1='47' x2='126' y2='47' stroke='#a78bfa' stroke-width='2'/><path d='M124,42 L132,47 L124,52 Z' fill='#a78bfa'/><rect x='136' y='30' width='56' height='34' rx='6' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><text x='164.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>…</text><text x='233' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>+ 10 €</text><line x1='196' y1='47' x2='252' y2='47' stroke='#a78bfa' stroke-width='2'/><path d='M250,42 L258,47 L250,52 Z' fill='#a78bfa'/><rect x='262' y='30' width='56' height='34' rx='6' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><text x='290.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>30 €</text></svg>"
                    },
                    {
                        "id": "sachk4l2u_schwer_3",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Mama geht mit 2 Kindern ins Kino. Jedes Kind bekommt Popcorn. Was kostet alles?",
                        "answers": [
                            "29 €",
                            "32 €",
                            "23 €",
                            "26 €"
                        ],
                        "correct": 0,
                        "explanation": "Mama 11 €, Kinder 2 · 6 € = 12 €, Popcorn 2 · 3 € = 6 €. Zusammen: 11 € + 12 € + 6 € = 29 €.",
                        "grafik": "<svg viewBox='0 0 210 116' style='width:100%;max-width:273px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='190' height='24' fill='rgba(56,189,248,0.25)'/><rect x='10' y='10' width='190' height='96' fill='none' stroke='#38bdf8' stroke-width='1.5'/><line x1='10' y1='34' x2='200' y2='34' stroke='#38bdf8' stroke-width='1'/><line x1='10' y1='58' x2='200' y2='58' stroke='#38bdf8' stroke-width='1'/><line x1='10' y1='82' x2='200' y2='82' stroke='#38bdf8' stroke-width='1'/><line x1='120' y1='10' x2='120' y2='106' stroke='#38bdf8' stroke-width='1'/><text x='65.0' y='26.0' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Kino</text><text x='160.0' y='26.0' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Preis</text><text x='65.0' y='50.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Kind</text><text x='160.0' y='50.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>6 €</text><text x='65.0' y='74.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Erwachsene</text><text x='160.0' y='74.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>11 €</text><text x='65.0' y='98.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Popcorn</text><text x='160.0' y='98.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>3 €</text></svg>"
                    },
                    {
                        "id": "sachk4l2u_schwer_4",
                        "category": "kurs_sach_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "schriftliche_multiplikation_division",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Finn rechnet: 6 Karten zu je 2,50 € kosten 150 €. Was stimmt?",
                        "answers": [
                            "Richtig wären 15 €",
                            "Das Ergebnis stimmt",
                            "Richtig wären 8,50 €",
                            "Richtig wären 1500 €"
                        ],
                        "correct": 0,
                        "explanation": "Überschlag: 6 · 3 € = 18 €, also kann 150 € nicht stimmen. Genau: 6 · 2,50 € = 15 €. Finn hat das Komma vergessen."
                    }
                ]
            },
            "test": [
                {
                    "id": "sachk4l2_test_1",
                    "category": "kurs_sach_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Ben kauft 4 Stifte zu je 2 € und zahlt mit 20 €. Wie viel bekommt er zurück?",
                    "answers": [
                        "12 €",
                        "18 €",
                        "8 €",
                        "14 €"
                    ],
                    "correct": 0,
                    "explanation": "Erst der Preis: 4 · 2 € = 8 €. Dann das Rückgeld: 20 € − 8 € = 12 €.",
                    "grafik": "<svg viewBox='0 0 178 72' style='width:100%;max-width:231px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='19' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='49.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>1 Stift</text><text x='49.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 €</text><rect x='102' y='19' width='64' height='34' rx='4' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><rect x='107' y='24' width='54' height='24' rx='2' fill='none' stroke='#10b981' stroke-width='1' stroke-dasharray='3 2'/><text x='134.0' y='41.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text></svg>"
                },
                {
                    "id": "sachk4l2_test_2",
                    "category": "kurs_sach_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "26 Kinder fahren in den Zoo. Der Eintritt kostet 7 € pro Kind. Wie viel ist das?",
                    "answers": [
                        "182 €",
                        "33 €",
                        "142 €",
                        "172 €"
                    ],
                    "correct": 0,
                    "explanation": "26 · 7 € = 20 · 7 € + 6 · 7 € = 140 € + 42 € = 182 €."
                },
                {
                    "id": "sachk4l2_test_3",
                    "category": "kurs_sach_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Aylin verdoppelt ihr Taschengeld und hat jetzt 18 €. Wie viel hatte sie vorher?",
                    "answers": [
                        "9 €",
                        "36 €",
                        "16 €",
                        "20 €"
                    ],
                    "correct": 0,
                    "explanation": "Verdoppeln heißt mal 2. Rückwärts rechnest du geteilt durch 2: 18 € : 2 = 9 €.",
                    "grafik": "<svg viewBox='0 0 202 76' style='width:100%;max-width:263px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='30' width='56' height='34' rx='6' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><text x='38.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='107' y='22' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#a78bfa'>· 2</text><line x1='70' y1='47' x2='126' y2='47' stroke='#a78bfa' stroke-width='2'/><path d='M124,42 L132,47 L124,52 Z' fill='#a78bfa'/><rect x='136' y='30' width='56' height='34' rx='6' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><text x='164.0' y='52.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>18 €</text></svg>"
                },
                {
                    "id": "sachk4l2_test_4",
                    "category": "kurs_sach_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Schau in die Tabelle: Was kosten 3 Brezeln?",
                    "answers": [
                        "1,95 €",
                        "1,85 €",
                        "68 ct",
                        "1,05 €"
                    ],
                    "correct": 0,
                    "explanation": "3 · 65 ct = 195 ct. Das sind 1,95 €.",
                    "grafik": "<svg viewBox='0 0 210 116' style='width:100%;max-width:273px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='190' height='24' fill='rgba(56,189,248,0.25)'/><rect x='10' y='10' width='190' height='96' fill='none' stroke='#38bdf8' stroke-width='1.5'/><line x1='10' y1='34' x2='200' y2='34' stroke='#38bdf8' stroke-width='1'/><line x1='10' y1='58' x2='200' y2='58' stroke='#38bdf8' stroke-width='1'/><line x1='10' y1='82' x2='200' y2='82' stroke='#38bdf8' stroke-width='1'/><line x1='120' y1='10' x2='120' y2='106' stroke='#38bdf8' stroke-width='1'/><text x='65.0' y='26.0' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Bäckerei</text><text x='160.0' y='26.0' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>Preis</text><text x='65.0' y='50.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Brezel</text><text x='160.0' y='50.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>65 ct</text><text x='65.0' y='74.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Brötchen</text><text x='160.0' y='74.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>35 ct</text><text x='65.0' y='98.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>Croissant</text><text x='160.0' y='98.0' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#e5e7eb'>90 ct</text></svg>"
                },
                {
                    "id": "sachk4l2_test_5",
                    "category": "kurs_sach_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Lea hat 10 €. Sie kauft Brot für 2,40 € und Milch für 1,10 €. Wie viel bleibt ihr?",
                    "answers": [
                        "6,50 €",
                        "3,50 €",
                        "7,60 €",
                        "7,50 €"
                    ],
                    "correct": 0,
                    "explanation": "Erst zusammen: 2,40 € + 1,10 € = 3,50 €. Dann der Rest: 10,00 € − 3,50 € = 6,50 €.",
                    "grafik": "<svg viewBox='0 0 262 72' style='width:100%;max-width:341px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='19' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='49.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Brot</text><text x='49.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,40 €</text><rect x='96' y='14' width='74' height='44' rx='7' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='103' cy='21' r='2' fill='none' stroke='#f59e0b' stroke-width='1.2'/><text x='133.0' y='34' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>Milch</text><text x='133.0' y='50' text-anchor='middle' font-size='14' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,10 €</text><rect x='186' y='19' width='64' height='34' rx='4' fill='rgba(16,185,129,0.3)' stroke='#10b981' stroke-width='2'/><rect x='191' y='24' width='54' height='24' rx='2' fill='none' stroke='#10b981' stroke-width='1' stroke-dasharray='3 2'/><text x='218.0' y='41.0' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text></svg>"
                },
                {
                    "id": "sachk4l2_test_6",
                    "category": "kurs_sach_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "schriftliche_multiplikation_division",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "8 Tickets kosten je 12 €. Welches Ergebnis passt zum Überschlag 8 · 10 = 80?",
                    "answers": [
                        "96 €",
                        "960 €",
                        "20 €",
                        "9,60 €"
                    ],
                    "correct": 0,
                    "explanation": "96 € liegt nah bei 80 € und ist genau richtig: 8 · 12 € = 96 €. Die anderen Zahlen sind viel zu groß oder zu klein."
                }
            ],
            "bestehenAb": 0.8
        },
        {
            "id": "bruch_k4_l2",
            "kurs": "brueche_k4",
            "order": 2,
            "icon": "🍰",
            "title": "Bruchteile von Mengen und Größen",
            "kurz": "Halbe, Drittel, Viertel und Zehntel von Geld, Gewicht, Zeit und Mengen",
            "erklaerung": {
                "intro": "Ein Bruch kann ein Teil von einer <b>Menge</b> oder einer <b>Größe</b> sein. Für 1/4 von 20 € teilst du 20 € in 4 gleiche Teile: 20 € : 4 = 5 €. Für <b>drei Viertel</b> nimmst du drei solche Teile. Je mehr Teile ein Ganzes hat, desto <b>kleiner</b> ist jedes Teil.",
                "merksatz": "Durch den Nenner teilen, dann mit dem Zähler malnehmen.",
                "beispiele": [
                    "Ein Viertel von 20 €: 20 € : 4 = 5 €.<svg viewBox='0 0 260 76' style='width:100%;max-width:338px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='30' width='55.0' height='34' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='75.0' y='30' width='55.0' height='34' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='130.0' y='30' width='55.0' height='34' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='185.0' y='30' width='55.0' height='34' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='20' y='30' width='220' height='34' fill='none' stroke='#38bdf8' stroke-width='2'/><text x='47.5' y='52' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='102.5' y='52' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='157.5' y='52' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='212.5' y='52' text-anchor='middle' font-size='12' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='130' y='20' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>20 € in 4 gleiche Teile</text></svg>",
                    "Drei Viertel von 1 kg: 1000 g : 4 = 250 g, dann 3 · 250 g = 750 g.<svg viewBox='0 0 160 140' style='width:100%;max-width:208px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='64' r='46' fill='none' stroke='#38bdf8' stroke-width='2'/><path d='M80,64 L80.0,18.0 A46,46 0 0 1 126.0,64.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><path d='M80,64 L126.0,64.0 A46,46 0 0 1 80.0,110.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><path d='M80,64 L80.0,110.0 A46,46 0 0 1 34.0,64.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><path d='M80,64 L34.0,64.0 A46,46 0 0 1 80.0,18.0 Z' fill='none' stroke='#38bdf8' stroke-width='1.5'/><text x='80' y='128' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>3/4 von 1 kg</text></svg>",
                    "Eine Stunde hat 60 min. Eine Viertelstunde: 60 min : 4 = 15 min. Eine Dreiviertelstunde: 3 · 15 min = 45 min.<svg viewBox='0 0 160 158' style='width:100%;max-width:208px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='70' r='46' fill='none' stroke='#38bdf8' stroke-width='2.5'/><path d='M80,70 L80.0,27.0 A43,43 0 1 1 37.0,70.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><line x1='80.0' y1='32.0' x2='80.0' y2='24.0' stroke='#e5e7eb' stroke-width='2'/><line x1='100.5' y1='34.49' x2='103.0' y2='30.16' stroke='#e5e7eb' stroke-width='1'/><line x1='115.51' y1='49.5' x2='119.84' y2='47.0' stroke='#e5e7eb' stroke-width='1'/><line x1='118.0' y1='70.0' x2='126.0' y2='70.0' stroke='#e5e7eb' stroke-width='2'/><line x1='115.51' y1='90.5' x2='119.84' y2='93.0' stroke='#e5e7eb' stroke-width='1'/><line x1='100.5' y1='105.51' x2='103.0' y2='109.84' stroke='#e5e7eb' stroke-width='1'/><line x1='80.0' y1='108.0' x2='80.0' y2='116.0' stroke='#e5e7eb' stroke-width='2'/><line x1='59.5' y1='105.51' x2='57.0' y2='109.84' stroke='#e5e7eb' stroke-width='1'/><line x1='44.49' y1='90.5' x2='40.16' y2='93.0' stroke='#e5e7eb' stroke-width='1'/><line x1='42.0' y1='70.0' x2='34.0' y2='70.0' stroke='#e5e7eb' stroke-width='2'/><line x1='44.49' y1='49.5' x2='40.16' y2='47.0' stroke='#e5e7eb' stroke-width='1'/><line x1='59.5' y1='34.49' x2='57.0' y2='30.16' stroke='#e5e7eb' stroke-width='1'/><text x='80.0' y='17.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>12</text><text x='137.0' y='74.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>3</text><text x='80.0' y='131.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>6</text><text x='23.0' y='74.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>9</text><circle cx='80' cy='70' r='3' fill='#e5e7eb'/><text x='80' y='148' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>Dreiviertelstunde</text></svg>"
                ]
            },
            "uebung": {
                "leicht": [
                    {
                        "id": "bruchk4l2u_leicht_1",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Wie viel ist 1/4 von 24 €?",
                        "answers": [
                            "6 €",
                            "4 €",
                            "12 €",
                            "96 €"
                        ],
                        "correct": 0,
                        "explanation": "1/4 heißt: in 4 gleiche Teile teilen. 24 € : 4 = 6 €.",
                        "grafik": "<svg viewBox='0 0 260 76' style='width:100%;max-width:338px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='30' width='55.0' height='34' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='75.0' y='30' width='55.0' height='34' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='130.0' y='30' width='55.0' height='34' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='185.0' y='30' width='55.0' height='34' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='20' y='30' width='220' height='34' fill='none' stroke='#38bdf8' stroke-width='2'/><text x='130.0' y='20' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>24 €</text></svg>"
                    },
                    {
                        "id": "bruchk4l2u_leicht_2",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Welcher Bruchteil der Kreise ist orange?",
                        "answers": [
                            "1/4",
                            "1/2",
                            "1/3",
                            "1/6"
                        ],
                        "correct": 0,
                        "explanation": "Es sind 8 Kreise, 2 davon sind orange. 2 von 8 ist dasselbe wie 1 von 4, also 1/4.",
                        "grafik": "<svg viewBox='0 0 124 68' style='width:100%;max-width:161px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='23.0' cy='21.0' r='9' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='49.0' cy='21.0' r='9' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='2'/><circle cx='75.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='101.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='23.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='49.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='75.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='101.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/></svg>"
                    },
                    {
                        "id": "bruchk4l2u_leicht_3",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Wie viele Minuten hat eine Viertelstunde?",
                        "answers": [
                            "15 Minuten",
                            "25 Minuten",
                            "30 Minuten",
                            "4 Minuten"
                        ],
                        "correct": 0,
                        "explanation": "Eine Stunde hat 60 Minuten. 60 : 4 = 15, also hat eine Viertelstunde 15 Minuten.",
                        "grafik": "<svg viewBox='0 0 160 140' style='width:100%;max-width:208px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='70' r='46' fill='none' stroke='#38bdf8' stroke-width='2.5'/><path d='M80,70 L80.0,27.0 A43,43 0 0 1 123.0,70.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><line x1='80.0' y1='32.0' x2='80.0' y2='24.0' stroke='#e5e7eb' stroke-width='2'/><line x1='100.5' y1='34.49' x2='103.0' y2='30.16' stroke='#e5e7eb' stroke-width='1'/><line x1='115.51' y1='49.5' x2='119.84' y2='47.0' stroke='#e5e7eb' stroke-width='1'/><line x1='118.0' y1='70.0' x2='126.0' y2='70.0' stroke='#e5e7eb' stroke-width='2'/><line x1='115.51' y1='90.5' x2='119.84' y2='93.0' stroke='#e5e7eb' stroke-width='1'/><line x1='100.5' y1='105.51' x2='103.0' y2='109.84' stroke='#e5e7eb' stroke-width='1'/><line x1='80.0' y1='108.0' x2='80.0' y2='116.0' stroke='#e5e7eb' stroke-width='2'/><line x1='59.5' y1='105.51' x2='57.0' y2='109.84' stroke='#e5e7eb' stroke-width='1'/><line x1='44.49' y1='90.5' x2='40.16' y2='93.0' stroke='#e5e7eb' stroke-width='1'/><line x1='42.0' y1='70.0' x2='34.0' y2='70.0' stroke='#e5e7eb' stroke-width='2'/><line x1='44.49' y1='49.5' x2='40.16' y2='47.0' stroke='#e5e7eb' stroke-width='1'/><line x1='59.5' y1='34.49' x2='57.0' y2='30.16' stroke='#e5e7eb' stroke-width='1'/><text x='80.0' y='17.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>12</text><text x='137.0' y='74.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>3</text><text x='80.0' y='131.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>6</text><text x='23.0' y='74.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>9</text><circle cx='80' cy='70' r='3' fill='#e5e7eb'/></svg>"
                    },
                    {
                        "id": "bruchk4l2u_leicht_4",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "leicht",
                        "points": 10,
                        "question": "Wie viel ist 1/10 von 50 €?",
                        "answers": [
                            "5 €",
                            "10 €",
                            "40 €",
                            "500 €"
                        ],
                        "correct": 0,
                        "explanation": "1/10 heißt: in 10 gleiche Teile teilen. 50 € : 10 = 5 €."
                    }
                ],
                "mittel": [
                    {
                        "id": "bruchk4l2u_mittel_1",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Wie viel ist 3/4 von 2 kg?",
                        "answers": [
                            "1500 g",
                            "500 g",
                            "750 g",
                            "1000 g"
                        ],
                        "correct": 0,
                        "explanation": "2 kg = 2000 g. 2000 g : 4 = 500 g, und 3 · 500 g = 1500 g.",
                        "grafik": "<svg viewBox='0 0 160 140' style='width:100%;max-width:208px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='64' r='46' fill='none' stroke='#38bdf8' stroke-width='2'/><path d='M80,64 L80.0,18.0 A46,46 0 0 1 126.0,64.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><path d='M80,64 L126.0,64.0 A46,46 0 0 1 80.0,110.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><path d='M80,64 L80.0,110.0 A46,46 0 0 1 34.0,64.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><path d='M80,64 L34.0,64.0 A46,46 0 0 1 80.0,18.0 Z' fill='none' stroke='#38bdf8' stroke-width='1.5'/><text x='80' y='128' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>2 kg</text></svg>"
                    },
                    {
                        "id": "bruchk4l2u_mittel_2",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Wie viele Minuten hat eine halbe Stunde?",
                        "answers": [
                            "30 Minuten",
                            "50 Minuten",
                            "20 Minuten",
                            "15 Minuten"
                        ],
                        "correct": 0,
                        "explanation": "Eine Stunde hat 60 Minuten. Die Hälfte davon: 60 : 2 = 30 Minuten.",
                        "grafik": "<svg viewBox='0 0 160 140' style='width:100%;max-width:208px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='70' r='46' fill='none' stroke='#38bdf8' stroke-width='2.5'/><path d='M80,70 L80.0,27.0 A43,43 0 0 1 80.0,113.0 Z' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><line x1='80.0' y1='32.0' x2='80.0' y2='24.0' stroke='#e5e7eb' stroke-width='2'/><line x1='100.5' y1='34.49' x2='103.0' y2='30.16' stroke='#e5e7eb' stroke-width='1'/><line x1='115.51' y1='49.5' x2='119.84' y2='47.0' stroke='#e5e7eb' stroke-width='1'/><line x1='118.0' y1='70.0' x2='126.0' y2='70.0' stroke='#e5e7eb' stroke-width='2'/><line x1='115.51' y1='90.5' x2='119.84' y2='93.0' stroke='#e5e7eb' stroke-width='1'/><line x1='100.5' y1='105.51' x2='103.0' y2='109.84' stroke='#e5e7eb' stroke-width='1'/><line x1='80.0' y1='108.0' x2='80.0' y2='116.0' stroke='#e5e7eb' stroke-width='2'/><line x1='59.5' y1='105.51' x2='57.0' y2='109.84' stroke='#e5e7eb' stroke-width='1'/><line x1='44.49' y1='90.5' x2='40.16' y2='93.0' stroke='#e5e7eb' stroke-width='1'/><line x1='42.0' y1='70.0' x2='34.0' y2='70.0' stroke='#e5e7eb' stroke-width='2'/><line x1='44.49' y1='49.5' x2='40.16' y2='47.0' stroke='#e5e7eb' stroke-width='1'/><line x1='59.5' y1='34.49' x2='57.0' y2='30.16' stroke='#e5e7eb' stroke-width='1'/><text x='80.0' y='17.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>12</text><text x='137.0' y='74.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>3</text><text x='80.0' y='131.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>6</text><text x='23.0' y='74.0' text-anchor='middle' font-size='11' font-family='sans-serif' fill='#94a3b8'>9</text><circle cx='80' cy='70' r='3' fill='#e5e7eb'/></svg>"
                    },
                    {
                        "id": "bruchk4l2u_mittel_3",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Zwei gleich große Kuchen: Ist 1/3 oder 1/5 eines Kuchens mehr?",
                        "answers": [
                            "1/3",
                            "1/5",
                            "beide gleich",
                            "kommt drauf an"
                        ],
                        "correct": 0,
                        "explanation": "Beim gleichen Ganzen gilt: Je weniger Teile, desto größer jedes Teil. Drittel sind größer als Fünftel."
                    },
                    {
                        "id": "bruchk4l2u_mittel_4",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "mittel",
                        "points": 10,
                        "question": "Ein Seil ist 12 m lang. Finn schneidet 1/3 ab. Wie lang ist das Stück?",
                        "answers": [
                            "4 m",
                            "3 m",
                            "6 m",
                            "9 m"
                        ],
                        "correct": 0,
                        "explanation": "1/3 heißt: in 3 gleiche Teile teilen. 12 m : 3 = 4 m.",
                        "grafik": "<svg viewBox='0 0 260 76' style='width:100%;max-width:338px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='30' width='73.33' height='34' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='93.33' y='30' width='73.33' height='34' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='166.67' y='30' width='73.33' height='34' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='20' y='30' width='220' height='34' fill='none' stroke='#38bdf8' stroke-width='2'/><text x='130.0' y='20' text-anchor='middle' font-size='12' font-family='sans-serif' fill='#94a3b8'>Seil: 12 m</text></svg>"
                    }
                ],
                "schwer": [
                    {
                        "id": "bruchk4l2u_schwer_1",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Wie viel ist 3/4 von 40 €?",
                        "answers": [
                            "30 €",
                            "10 €",
                            "120 €",
                            "20 €"
                        ],
                        "correct": 0,
                        "explanation": "Erst teilen: 40 € : 4 = 10 €. Dann mal 3: 3 · 10 € = 30 €."
                    },
                    {
                        "id": "bruchk4l2u_schwer_2",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Wie viel sind 2/5 von 1 m?",
                        "answers": [
                            "40 cm",
                            "20 cm",
                            "25 cm",
                            "50 cm"
                        ],
                        "correct": 0,
                        "explanation": "1 m = 100 cm. 100 cm : 5 = 20 cm, und 2 · 20 cm = 40 cm."
                    },
                    {
                        "id": "bruchk4l2u_schwer_3",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "In der Klasse sind 24 Kinder. 3/8 kommen mit dem Rad. Wie viele sind das?",
                        "answers": [
                            "9 Kinder",
                            "3 Kinder",
                            "8 Kinder",
                            "15 Kinder"
                        ],
                        "correct": 0,
                        "explanation": "24 : 8 = 3, also ist 1/8 gleich 3 Kinder. 3/8 sind 3 · 3 = 9 Kinder.",
                        "grafik": "<svg viewBox='0 0 228 94' style='width:100%;max-width:296px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='23.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='49.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='75.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='101.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='127.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='153.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='179.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='205.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='23.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='49.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='75.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='101.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='127.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='153.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='179.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='205.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='23.0' cy='73.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='49.0' cy='73.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='75.0' cy='73.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='101.0' cy='73.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='127.0' cy='73.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='153.0' cy='73.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='179.0' cy='73.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='205.0' cy='73.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/></svg>"
                    },
                    {
                        "id": "bruchk4l2u_schwer_4",
                        "category": "kurs_bruch_k4_l2",
                        "area": "schule",
                        "grade": 4,
                        "subject": "mathe",
                        "topic": "brueche",
                        "difficulty": "schwer",
                        "points": 10,
                        "question": "Welche Zeit ist am längsten?",
                        "answers": [
                            "3/4 Stunde",
                            "2/3 Stunde",
                            "1/2 Stunde",
                            "35 Minuten"
                        ],
                        "correct": 0,
                        "explanation": "3/4 Stunde = 45 min, 2/3 Stunde = 40 min, 1/2 Stunde = 30 min. Also ist 3/4 Stunde am längsten."
                    }
                ]
            },
            "test": [
                {
                    "id": "bruchk4l2_test_1",
                    "category": "kurs_bruch_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "brueche",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel ist 1/2 von 3 kg?",
                    "answers": [
                        "1500 g",
                        "150 g",
                        "6000 g",
                        "1050 g"
                    ],
                    "correct": 0,
                    "explanation": "3 kg = 3000 g. Die Hälfte davon: 3000 g : 2 = 1500 g."
                },
                {
                    "id": "bruchk4l2_test_2",
                    "category": "kurs_bruch_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "brueche",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Wie viel ist 1/10 von 1 kg?",
                    "answers": [
                        "100 g",
                        "10 g",
                        "1 g",
                        "900 g"
                    ],
                    "correct": 0,
                    "explanation": "1 kg = 1000 g. 1000 g : 10 = 100 g."
                },
                {
                    "id": "bruchk4l2_test_3",
                    "category": "kurs_bruch_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "brueche",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Film: eine Dreiviertelstunde. Werbung: eine Viertelstunde. Wie lange zusammen?",
                    "answers": [
                        "1 Stunde",
                        "45 Minuten",
                        "1/2 Stunde",
                        "2 Stunden"
                    ],
                    "correct": 0,
                    "explanation": "45 Minuten + 15 Minuten = 60 Minuten. Das ist genau 1 Stunde."
                },
                {
                    "id": "bruchk4l2_test_4",
                    "category": "kurs_bruch_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "brueche",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Welcher Bruchteil des Streifens ist orange?",
                    "answers": [
                        "3/10",
                        "3/7",
                        "7/10",
                        "1/3"
                    ],
                    "correct": 0,
                    "explanation": "Der Streifen hat 10 gleiche Teile, 3 davon sind orange. Das sind 3/10.",
                    "grafik": "<svg viewBox='0 0 300 68' style='width:100%;max-width:360px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='20.0' y='14' width='26.0' height='40' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='46.0' y='14' width='26.0' height='40' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='72.0' y='14' width='26.0' height='40' fill='rgba(245,158,11,0.3)' stroke='#f59e0b' stroke-width='1.5'/><rect x='98.0' y='14' width='26.0' height='40' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='124.0' y='14' width='26.0' height='40' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='150.0' y='14' width='26.0' height='40' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='176.0' y='14' width='26.0' height='40' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='202.0' y='14' width='26.0' height='40' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='228.0' y='14' width='26.0' height='40' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='254.0' y='14' width='26.0' height='40' fill='none' stroke='#38bdf8' stroke-width='1.5'/><rect x='20' y='14' width='260' height='40' fill='none' stroke='#38bdf8' stroke-width='2'/></svg>"
                },
                {
                    "id": "bruchk4l2_test_5",
                    "category": "kurs_bruch_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "brueche",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Mia hat 16 Murmeln. Sie verschenkt 1/4 davon. Wie viele behält sie?",
                    "answers": [
                        "12 Murmeln",
                        "4 Murmeln",
                        "8 Murmeln",
                        "15 Murmeln"
                    ],
                    "correct": 0,
                    "explanation": "1/4 von 16 sind 16 : 4 = 4 Murmeln. Sie behält 16 − 4 = 12 Murmeln.",
                    "grafik": "<svg viewBox='0 0 228 68' style='width:100%;max-width:296px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><circle cx='23.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='49.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='75.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='101.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='127.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='153.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='179.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='205.0' cy='21.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='23.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='49.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='75.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='101.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='127.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='153.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='179.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/><circle cx='205.0' cy='47.0' r='9' fill='rgba(56,189,248,0.25)' stroke='#38bdf8' stroke-width='2'/></svg>"
                },
                {
                    "id": "bruchk4l2_test_6",
                    "category": "kurs_bruch_k4_l2",
                    "area": "schule",
                    "grade": 4,
                    "subject": "mathe",
                    "topic": "brueche",
                    "difficulty": "mittel",
                    "points": 10,
                    "question": "Gleich große Tafeln: Lea isst 1/4, Jonas isst 1/8. Wer isst weniger?",
                    "answers": [
                        "Jonas",
                        "Lea",
                        "beide gleich",
                        "Man weiß es nicht"
                    ],
                    "correct": 0,
                    "explanation": "Achtel sind kleiner als Viertel, weil die Tafel in mehr Teile geteilt ist. Jonas isst also weniger."
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
