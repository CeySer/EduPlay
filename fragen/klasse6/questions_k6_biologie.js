// ================================================================
// KLASSE 6 - BIOLOGIE (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K6_BIOLOGIE_QUESTIONS = [
  // --- SÄUGETIERE & LEBENSWEISEN (001 - 020) ---
  {
    "id": "k6_bio_001",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was ist ein Hauptmerkmal aller Säugetiere?",
    "answers": [
      "Säugen der Jungen mit Milch",
      "Legen von Eiern im Frühling",
      "Atmung ausschließlich Kiemen",
      "Konstante Schuppenhaut Leib"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Säugetier-Mütter ernähren ihren Nachwuchs mit körpereigener Milch."
  },
  {
    "id": "k6_bio_002",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißen Tiere mit gleichbleibender Körpertemperatur?",
    "answers": [
      "Gleichwarme Tiere",
      "Wechselwarme Tiere",
      "Kaltblütige Tiere",
      "Trägewarme Tiere"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Säugetiere und Vögel halten ihre Körpertemperatur stets konstant."
  },
  {
    "id": "k6_bio_003",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Zahn dient beim Hund als Reißzahn?",
    "answers": [
      "Der vierte Backenzahn",
      "Der erste Schneidezahn",
      "Der mittlere Eckzahn",
      "Der hintere Weisheitszahn"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der vierte Backenzahn im Oberkiefer bildet mit dem ersten im Unterkiefer die Schere."
  },
  {
    "id": "k6_bio_004",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Zu welcher Gebissform gehört das Rindergebiss?",
    "answers": [
      "Pflanzenfressergebiss",
      "Raubtiergebiss im Wald",
      "Allesfressergebiss Haus",
      "Insektenfressergebiss"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rinder besitzen breite Mahlzähne zum Zermahlen von Pflanzenfasern."
  },
  {
    "id": "k6_bio_005",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Magenabschnitt beim Rind ist der größte?",
    "answers": [
      "Der Pansen als Kammer",
      "Der Netzmagen als Teil",
      "Der Blättermagen darin",
      "Der Labmagen als Endteil"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Pansen fasst bis zu 200 Liter und dient als Gärkammer."
  },
  {
    "id": "k6_bio_006",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie viele Magenabschnitte besitzt ein Wiederkäuer?",
    "answers": [
      "Vier Abschnitte",
      "Zwei Abschnitte",
      "Drei Abschnitte",
      "Fünf Abschnitte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pansen, Netzmagen, Blättermagen und Labmagen bilden das System."
  },
  {
    "id": "k6_bio_007",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was zeichnet das Skelett der Katze aus?",
    "answers": [
      "Biegsame Wirbelsäule",
      "Starre Wirbelsäule",
      "Fehlen von Rippen",
      "Verwachsene Knochen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die gelenkige Wirbelsäule ermöglicht der Katze extrem weite Sprünge."
  },
  {
    "id": "k6_bio_008",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie nennt man Tiere, die auf Zehen schleichen wie Katzen?",
    "answers": [
      "Zehengänger",
      "Sohlengänger",
      "Spitzengänger",
      "Hufgänger"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Katzen treten nur mit den Zehen auf, was leises Schleichen ermöglicht."
  },
  {
    "id": "k6_bio_009",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie nennt man Tiere, die mit der ganzen Sohle auftreten?",
    "answers": [
      "Sohlengänger",
      "Zehengänger",
      "Spitzengänger",
      "Hufgänger"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bären und Menschen setzen die gesamte Fußsohle beim Gehen auf."
  },
  {
    "id": "k6_bio_010",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie nennt man Tiere wie das Pferd bezüglich der Fußung?",
    "answers": [
      "Zehenspitzengänger",
      "Sohlengänger im Wald",
      "Fersengänger im Feld",
      "Zehengänger auf Wiesen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pferde laufen auf der gelaufenen Spitze der mittleren Zehe (Huf)."
  },
  {
    "id": "k6_bio_011",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Sinn ist beim Hund besonders stark entwickelt?",
    "answers": [
      "Der Geruchssinn",
      "Der Sehsinn weit",
      "Der Geschmackssinn",
      "Der Tastsinn Haut"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Hunde besitzen bis zu 300 Millionen Riechzellen (Mensch ca. 6 Mio)."
  },
  {
    "id": "k6_bio_012",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was dient der Katze zur Orientierung im Dunkeln?",
    "answers": [
      "Die Schnurrhaare",
      "Die Zungenborsten",
      "Die Pfotenballen",
      "Die Ohrbüschel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vibrissen (Schnurrhaare) erfassen kleinste Luftströmungen und Hindernisse."
  },
  {
    "id": "k6_bio_013",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Warum hecheln Hunde bei großer Hitze?",
    "answers": [
      "Zur Wärmeregulierung",
      "Zur Kommunikation",
      "Zum Schärfen Zähne",
      "Aus reiner Aufregung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da Hunde kaum Schweißdrüsen haben, kühlen sie sich durch Verdunstung beim Hecheln."
  },
  {
    "id": "k6_bio_014",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Säugetier kann aktiv fliegen?",
    "answers": [
      "Die Fledermaus",
      "Das Flughörnchen",
      "Der Gleitbeutler",
      "Der Flugdrache"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fledermäuse sind die einzigen Säugetiere mit aktivem Schlagflug."
  },
  {
    "id": "k6_bio_015",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie orientieren sich Fledermäuse in der Nacht?",
    "answers": [
      "Mit Ultraschall",
      "Mit Wärmesensoren",
      "Mit Infrarotlicht",
      "Mit Geruchsorganen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sie senden Hochfrequenzlaute aus und werten das Echo aus."
  },
  {
    "id": "k6_bio_016",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Organ dient Walen zum Atmen?",
    "answers": [
      "Eine Lunge",
      "Eine Kieme",
      "Die Haut",
      "Ein Tracheennetz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wale sind Säugetiere und atmen Luft durch ihre Lungen über das Blasloch."
  },
  {
    "id": "k6_bio_017",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was schützt Säugetiere im Winter vor Kälte?",
    "answers": [
      "Dichtes Winterfell",
      "Dicke Hornschicht",
      "Sommerliches Fell",
      "Dauerhafter Schlaf"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Unterwolle im Winterfell schließt isolierende Luftpolster ein."
  },
  {
    "id": "k6_bio_018",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Tier gehört botanisch/zoologisch zu den Nagetieren?",
    "answers": [
      "Das Meerschweinchen",
      "Der Rotfuchs Wald",
      "Der Feldhase Feld",
      "Der Maulwurf Erde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Meerschweinchen sind Nagetiere (Hasen gehören zu den Hasenartigen)."
  },
  {
    "id": "k6_bio_019",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was charakterisiert das Gebiss von Nagetieren?",
    "answers": [
      "Meißelartige Schneidezähne",
      "Lange Eckzähne oben",
      "Fehlen von Backenzähnen",
      "Flache Reißzähne unten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nagezähne wachsen lebenslang nach und schärfen sich selbst."
  },
  {
    "id": "k6_bio_020",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches ungewöhnliche Säugetier legt Eier?",
    "answers": [
      "Das Schnabeltier",
      "Das Känguru Gras",
      "Der Koalabär Baum",
      "Das Faultier Wald"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schnabeltiere sind Ursäuger, die Eier legen und die Jungen danach säugen."
  },

  // --- PFLANZEN, AUFBAU & FOTOSYNTHESE (021 - 040) ---
  {
    "id": "k6_bio_021",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Teil der Pflanze nimmt Wasser aus dem Boden auf?",
    "answers": [
      "Die Wurzel im Boden",
      "Der Stängel im Wind",
      "Das Blütendach oben",
      "Das Grünblatt oben"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wurzelhaare vergrößern die Oberfläche zur Wasseraufnahme."
  },
  {
    "id": "k6_bio_022",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wo findet bei Pflanzen vorrangig die Fotosynthese statt?",
    "answers": [
      "In den grünen Blättern",
      "In den tiefen Wurzeln",
      "In den bunten Blüten",
      "In den festen Samen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Blätter enthalten die meisten Chloroplasten für die Fotosynthese."
  },
  {
    "id": "k6_bio_023",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Farbstoff macht Blätter grün?",
    "answers": [
      "Chlorophyll",
      "Carotin Stoff",
      "Hämoglobin Blut",
      "Melanin Haut"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Chlorophyll absorbiert Sonnenlicht für die Energieumwandlung."
  },
  {
    "id": "k6_bio_024",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Stoffe benötigt die Pflanze für die Fotosynthese?",
    "answers": [
      "Wasser + Kohlenstoffdioxid",
      "Sauerstoff + Stickstoff",
      "Zucker + Kohlensäure",
      "Wasserstoff + Ozonluft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus $H_2O$ und $CO_2$ entsteht mit Lichtenergie Traubenzucker."
  },
  {
    "id": "k6_bio_025",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Produkt entsteht als Baustein bei der Fotosynthese?",
    "answers": [
      "Traubenzucker",
      "Kohlensäure",
      "Stickstoff gas",
      "Rohsalze Boden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Glucose (Traubenzucker) dient der Pflanze als Energielieferant und Baustoff."
  },
  {
    "id": "k6_bio_026",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Gas geben Pflanzen bei der Fotosynthese ab?",
    "answers": [
      "Sauerstoff",
      "Kohlenstoffdioxid",
      "Stickstoff gas",
      "Methangaz Luft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sauerstoff entsteht als Abfallprodukt der Fotosynthese."
  },
  {
    "id": "k6_bio_027",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Energiequelle treibt die Fotosynthese an?",
    "answers": [
      "Das Sonnenlicht",
      "Die Erdwärme tief",
      "Der Windzug kalt",
      "Die Luftfeuchte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lichtenergie wird in chemische Energie umgewandelt."
  },
  {
    "id": "k6_bio_028",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißen die Öffnungen in Blättern zum Gasaustausch?",
    "answers": [
      "Spaltöffnungen",
      "Wurzelhaare Boden",
      "Leitbündel Holz",
      "Porenzellkerne"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stomata (Spaltöffnungen) regulieren die Transpiration und den Gasaustausch."
  },
  {
    "id": "k6_bio_029",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was transportieren Leitbündel im Stängel der Pflanze?",
    "answers": [
      "Wasser und Nährstoffe",
      "Nur reinen Sauerstoff",
      "Keine flüssigen Stoffe",
      "Feste Erdkörner Sand"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Xylem leitet Wasser nach oben, Phloem Nährstoffe nach unten."
  },
  {
    "id": "k6_bio_030",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißt der weibliche Teil der Blüte?",
    "answers": [
      "Das Stempelorgan",
      "Das Staubblatt",
      "Der Blütenkelch",
      "Das Kronblatt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Stempel ist das weibliche Fortpflanzungsorgan."
  },
  {
    "id": "k6_bio_031",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Aus welchen drei Teilen besteht der Stempel der Blüte?",
    "answers": [
      "Narbe, Griffel, Fruchtknoten",
      "Kelch, Krone, Blütengrund",
      "Staubbeutel, Faden, Polle",
      "Wurzel, Stängel, Keimling"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Oben sitzt die klebrige Narbe, darunter der Griffel u. der Fruchtknoten."
  },
  {
    "id": "k6_bio_032",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißt der männliche Teil der Blüte?",
    "answers": [
      "Das Staubblatt",
      "Das Stempelorgan",
      "Das Kronblatt",
      "Der Fruchtknoten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Staubblatt besteht aus Staubfaden und Staubbeutel."
  },
  {
    "id": "k6_bio_033",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was befindet sich im Staubbeutel der Blüte?",
    "answers": [
      "Der Blütenstaub",
      "Der Nektarsaft",
      "Die Samenanlage",
      "Der Fruchtsaft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Staubbeutel wird der Pollen (Blütenstaub) gebildet."
  },
  {
    "id": "k6_bio_034",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie nennt man die Übertragung von Pollen auf die Narbe?",
    "answers": [
      "Bestäubung",
      "Befruchtung",
      "Keimung Zeit",
      "Fotosynthese"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bestäubung geschieht durch Insekten oder den Wind."
  },
  {
    "id": "k6_bio_035",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was entsteht nach der Befruchtung aus dem Fruchtknoten?",
    "answers": [
      "Frucht mit Samen",
      "Neues Kronblatt",
      "Neues Staubblatt",
      "Die Wurzelspitze"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus dem Fruchtknoten entwickelt sich die Frucht (z. B. der Apfel)."
  },
  {
    "id": "k6_bio_036",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie verbreiten sich die Samen des Löwenzahns?",
    "answers": [
      "Durch den Wind",
      "Durch das Wasser",
      "Durch Selbstexplosion",
      "Durch Ameisen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kleine Schirmchen lassen die Samen im Wind fliegen."
  },
  {
    "id": "k6_bio_037",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie verbreiten sich Klettenfrüchte?",
    "answers": [
      "Im Fell von Tieren",
      "Durch den Wind",
      "Durch Wegschleudern",
      "Über Grundwasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Haken an den Früchten verfangen sich im Fell vorübergehender Tiere."
  },
  {
    "id": "k6_bio_038",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was braucht ein Samen zwingend zum Keimen?",
    "answers": [
      "Wasser, Wärme, Sauerstoff",
      "Dünger, Licht, Kälte",
      "Licht, Erde, Stickstoff",
      "Schatten, Eis, CO2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Licht brauchen die meisten Keimlinge erst, wenn grüne Blätter sprießen."
  },
  {
    "id": "k6_bio_039",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Pflanzen vermehren sich über Sporen?",
    "answers": [
      "Farne und Moose",
      "Rosen und Tulpen",
      "Eichen u. Buchen",
      "Äpfel u. Birnen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sporenpflanzen bilden weder Blüten noch klassische Samen aus."
  },
  {
    "id": "k6_bio_040",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was ist die Hauptaufgabe bunter Blütenblätter?",
    "answers": [
      "Anlocken von Insekten",
      "Aufnahme von Wasser",
      "Schutz vor dem Wind",
      "Speicherung Stärke"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Farbe und Duft signalisieren Bestäubern das Vorhandensein von Nektar."
  },

  // --- DER MENSCH: SKELETT & MUSKELN (041 - 055) ---
  {
    "id": "k6_bio_041",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie viele Knochen hat das Skelett des Menschen etwa?",
    "answers": [
      "Etwa 200 Knochen",
      "Etwa 100 Knochen",
      "Etwa 500 Knochen",
      "Etwa 50 Knochen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der menschliche Körper besteht aus rund 206 Knochen."
  },
  {
    "id": "k6_bio_042",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Knochen schützt das menschliche Gehirn?",
    "answers": [
      "Der Schädelknochen",
      "Der Brustkorb",
      "Das Becken unten",
      "Das Schulterblatt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schädelknochen umschließen das empfindliche Gehirn."
  },
  {
    "id": "k6_bio_043",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Aufgabe hat die Wirbelsäule beim Menschen?",
    "answers": [
      "Stützung + Beweglichkeit",
      "Blutreinigung im Körper",
      "Sauerstoffaufnahme Luft",
      "Verdauung der Nahrung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ihre doppel-S-Form trägt den Körper u. dämpft Stöße ab."
  },
  {
    "id": "k6_bio_044",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was befindet sich zwischen den Wirbelkörpern als Puffer?",
    "answers": [
      "Die Bandscheiben",
      "Die Knochenhaut",
      "Die Sehnenfaser",
      "Das Gelenkfett"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Knorpelige Bandscheiben verhindern ein Aneinanderreiben der Wirbel."
  },
  {
    "id": "k6_bio_045",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Organe schützt der Brustkorb?",
    "answers": [
      "Herz und Lunge",
      "Magen und Darm",
      "Niere und Leber",
      "Gehirn und Augen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rippen u. Brustbein bilden den Schutzraum für Herz und Lungenflügel."
  },
  {
    "id": "k6_bio_046",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Gelenktyp ermöglicht Bewegung in alle Richtungen?",
    "answers": [
      "Das Kugelgelenk",
      "Das Scharniergelenk",
      "Das Sattelgelenk",
      "Das Drehgelenk"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schulter- und Hüftgelenke sind Kugelgelenke."
  },
  {
    "id": "k6_bio_047",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Gelenktyp befindet sich im Ellenbogen?",
    "answers": [
      "Das Scharniergelenk",
      "Das Kugelgelenk",
      "Das Eigelenk Hand",
      "Das Planargelenk"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Scharniergelenke erlauben nur Beugen u. Strecken in einer Ebene."
  },
  {
    "id": "k6_bio_048",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Womit sind Muskeln an den Knochen befestigt?",
    "answers": [
      "Mit Sehnen",
      "Mit Bändern",
      "Mit Knorpeln",
      "Mit Nerven"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sehnen übertragen die Muskelkraft auf das Skelett."
  },
  {
    "id": "k6_bio_049",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Womit sind Knochen in einem Gelenk verbunden?",
    "answers": [
      "Mit Bändern",
      "Mit Sehnen",
      "Mit Muskeln",
      "Mit Adern"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gelenkbänder stabilisieren die Verbindung der Knochen."
  },
  {
    "id": "k6_bio_050",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie arbeiten Beuger und Strecker am Arm zusammen?",
    "answers": [
      "Als Gegenspieler",
      "Als Mitspieler",
      "Völlig unabhängig",
      "Niemals zeitgleich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spannt sich ein Muskel an, muss sein Gegenspieler erschlaffen."
  },
  {
    "id": "k6_bio_051",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißt der Muskel auf der Vorderseite des Oberarms?",
    "answers": [
      "Der Bizeps",
      "Der Trizeps",
      "Der Deltamuskel",
      "Der Wadenmuskel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Bizeps beugt das Armgelenk."
  },
  {
    "id": "k6_bio_052",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißt der Streckmuskel auf der Armrückseite?",
    "answers": [
      "Der Trizeps",
      "Der Bizeps",
      "Der Brustmuskel",
      "Der Rückenmuskel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Trizeps streckt das Armgelenk wieder."
  },
  {
    "id": "k6_bio_053",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Mineralstoff macht Knochen fest und stabil?",
    "answers": [
      "Calzium",
      "Eisen Blut",
      "Jod Drüse",
      "Vitamin C"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Calziumlagert sich in der Knochenmatrix ein."
  },
  {
    "id": "k6_bio_054",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wo werden beim Menschen rote Blutkörperchen gebildet?",
    "answers": [
      "Im Knochenmark",
      "In den Muskeln",
      "In der Knochenhaut",
      "In den Sehnen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das rote Knochenmark bildet kontinuierlich neue Blutzellen."
  },
  {
    "id": "k6_bio_055",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was verhindert Reibung an den Gelenkflächen?",
    "answers": [
      "Knorpelschicht",
      "Fettschicht",
      "Muskelschicht",
      "Hautschicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gelenkknorpel u. Gelenkschmiere vermindern die Reibung."
  },

  // --- ERNÄHRUNG, VERDAUUNG & ZÄHNE (056 - 070) ---
  {
    "id": "k6_bio_056",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Nährstoff dient als Hauptenergielieferant?",
    "answers": [
      "Kohlenhydrate",
      "Vitamine Schutz",
      "Mineralstoffe",
      "Spurenelemente"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zucker u. Stärke (Kohlenhydrate) liefern schnell verfgbare Energie."
  },
  {
    "id": "k6_bio_057",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Nährstoff ist für den Muskelaufbau nötig?",
    "answers": [
      "Eiweiße (Proteine)",
      "Traubenzucker",
      "Pflanzenfette",
      "Ballaststoffe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Proteine dienen als Zellbausteine im Körper."
  },
  {
    "id": "k6_bio_058",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Aufgabe haben Ballaststoffe in der Nahrung?",
    "answers": [
      "Förderung Verdauung",
      "Aufbau von Knochen",
      "Erzeugung Wärme",
      "Schutz vor Infekten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pflanzliche Fasern regend die Darmbewegung an."
  },
  {
    "id": "k6_bio_059",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wo beginnt die Verdauung der Nahrung?",
    "answers": [
      "Im Mundraum",
      "Im Magen unten",
      "Im Dünndarm",
      "Im Speiserohr"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Enzyme im Speichel spalten Stärke bereits beim Kauen auf."
  },
  {
    "id": "k6_bio_060",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Funktion hat der Speichel im Mund?",
    "answers": [
      "Zersetzung von Stärke",
      "Spaltung von Fetten",
      "Abbau von Eiweißen",
      "Aufnahme von Wasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Enzym Amylase wandelt Stärke in Zucker um."
  },
  {
    "id": "k6_bio_061",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie wird Nahrung in der Speiseröhre befördert?",
    "answers": [
      "Durch Muskelwellen",
      "Durch Schwerkraft",
      "Durch Luftdruck",
      "Durch Flüssigkeit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Peristaltik transportiert Speisen selbst im Kopfstand abwärts."
  },
  {
    "id": "k6_bio_062",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Säure zersetzt die Nahrung im Magen?",
    "answers": [
      "Die Salzsäure",
      "Die Essigsäure",
      "Die Zitronensäure",
      "Die Kohlensäure"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Magensalzsäure tötet Krankheitserreger u. denaturiert Eiweiße."
  },
  {
    "id": "k6_bio_063",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "In welchem Organ gelangen Nährstoffe ins Blut?",
    "answers": [
      "Im Dünndarm",
      "Im Magen oben",
      "Im Dickdarm",
      "Im Blinddarm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Darmzotten im Dünndarm nehmen die Bausteine auf."
  },
  {
    "id": "k6_bio_064",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was ist die Hauptaufgabe des Dickdarms?",
    "answers": [
      "Entzug von Wasser",
      "Verdauung von Fett",
      "Spaltung Eiweiß",
      "Aufnahme Zucker"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Dickdarm entzieht dem Verdauungsbrei Restwasser."
  },
  {
    "id": "k6_bio_065",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie viele Zähne hat das bleibende Gebiss vollzählig?",
    "answers": [
      "32 Zähne",
      "20 Zähne",
      "28 Zähne",
      "36 Zähne"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Inklusive 4 Weisheitszähnen umfasst das Erwachsenengebiss 32 Zähne."
  },
  {
    "id": "k6_bio_066",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie viele Zähne hat das Milchgebiss beim Kind?",
    "answers": [
      "20 Zähne",
      "32 Zähne",
      "16 Zähne",
      "24 Zähne"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Milchgebiss besteht aus 20 Zähnen."
  },
  {
    "id": "k6_bio_067",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißt die härteste Substanz im Körper?",
    "answers": [
      "Der Zahnschmelz",
      "Das Zahnbein",
      "Der Schenkelknochen",
      "Die Knochenhaut"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zahnschmelz schützt die Zähne als extrem harte Hülle."
  },
  {
    "id": "k6_bio_068",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was greift den Schmelz bei Kariesbildung an?",
    "answers": [
      "Bakteriensäuren",
      "Reines Wasser",
      "Frische Salze",
      "Speichelenzyme"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bakterien wandeln Zucker in Säuren um, die Minerale herauslösen."
  },
  {
    "id": "k6_bio_069",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welcher Zahn zermahlt die Nahrung im Mund?",
    "answers": [
      "Der Backenzahn",
      "Der Schneidezahn",
      "Der Eckzahn vorn",
      "Der Fangzahn vorn"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Backenzähne haben breite Kauflächen."
  },
  {
    "id": "k6_bio_070",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Organ produziert Gallensaft zur Fettverdauung?",
    "answers": [
      "Die Leber",
      "Die Bauchspeicheldrüse",
      "Der Magen",
      "Die Milz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Galle wird von der Leber erzeugt und in der Gallenblase gespeichert."
  },

  // --- ÖKOSYSTEM WALD & BÄUME (071 - 085) ---
  {
    "id": "k6_bio_071",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie nennt man das Gefüge aus Biotop u. Biozönose?",
    "answers": [
      "Ein Ökosystem",
      "Eine Population",
      "Ein Biosphärenpark",
      "Ein Waldgebiet"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Ökosystem vereint Lebensraum und Lebewesen."
  },
  {
    "id": "k6_bio_072",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was bildet die unterste Schicht im Stockwerkbau des Waldes?",
    "answers": [
      "Die Wurzelschicht",
      "Die Moosschicht",
      "Die Krautschicht",
      "Die Strauchschicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unter der Erde erstreckt sich die Wurzelschicht."
  },
  {
    "id": "k6_bio_073",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Schicht liegt direkt über der Moosschicht?",
    "answers": [
      "Die Krautschicht",
      "Die Strauchschicht",
      "Die Baumschicht",
      "Die Wurzelschicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gräser, Farne u. Blumen bilden die Krautschicht."
  },
  {
    "id": "k6_bio_074",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Pflanzen bilden das oberste Stockwerk des Waldes?",
    "answers": [
      "Hohe Bäume",
      "Kleine Sträucher",
      "Niedrige Farne",
      "Grüne Moose"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Kronen der Bäume bilden die Baumschicht."
  },
  {
    "id": "k6_bio_075",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wer gehört zu den Produzenten im Wald?",
    "answers": [
      "Die grüne Eiche",
      "Der Rotfuchs",
      "Der Waldkauz",
      "Der Waldpilz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pflanzen produzieren Biomasse durch Fotosynthese."
  },
  {
    "id": "k6_bio_076",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Rolle spielen Tiere in der Nahrungskette?",
    "answers": [
      "Konsumenten",
      "Produzenten",
      "Destruenten",
      "Autotrophe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tiere verbrauchen Organisches (Konsumenten)."
  },
  {
    "id": "k6_bio_077",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wer zersetzt Laub u. totes Holz im Wald zu Humus?",
    "answers": [
      "Pilze u. Bakterien",
      "Eichen u. Buchen",
      "Mäuse u. Hörnchen",
      "Vögel u. Käfer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Destruenten bauen organisches Material wieder ab."
  },
  {
    "id": "k6_bio_078",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie nennt man Bäume, die im Herbst ihr Laub werfen?",
    "answers": [
      "Sommergrüne Bäume",
      "Immergrüne Bäume",
      "Nadelbäume stets",
      "Tropenbäume stets"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unsere heimischen Laubbäume tragen nur im Sommer Laub."
  },
  {
    "id": "k6_bio_079",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was schützt Nadeln vor Austrocknung im Winter?",
    "answers": [
      "Dicke Wachsschicht",
      "Große Blattfläche",
      "Fehlen von Harz",
      "Weiche Oberfläche"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Wachsschicht (Cuticula) mindert die Verdunstung."
  },
  {
    "id": "k6_bio_080",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Tier zimmert Höhlen in Baumstämme?",
    "answers": [
      "Der Buntspecht",
      "Der Eichelhäher",
      "Die Holzbiene",
      "Das Eichhörnchen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spechte schaffen wichtigen Wohnraum für viele Nachmieter."
  },
  {
    "id": "k6_bio_081",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie schadet der Borkenkäfer Nadelbäumen?",
    "answers": [
      "Fraßgänge in Rinde",
      "Fressen von Wurzeln",
      "Ablutschen Blätter",
      "Bohren in Samen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Larven unterbrechen d. Saftstrom unter der Rinde."
  },
  {
    "id": "k6_bio_082",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Was versteht man unter einer Monokultur im Forst?",
    "answers": [
      "Anbau nur einer Art",
      "Mischung vieler Arten",
      "Urwald ohne Eingriff",
      "Naturnaher Waldbau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bestände aus nur einer Baumart sind anfällig für Schädlinge."
  },
  {
    "id": "k6_bio_083",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Warum sind Mischwälder stabiler als Reineichenwälder?",
    "answers": [
      "Höhere Artenvielfalt",
      "Gleicher Schädling",
      "Weniger Wurzelraum",
      "Schnellerer Schlag"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vielfalt schützt vor großflächigen Totalausfällen."
  },
  {
    "id": "k6_bio_084",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Frucht reift an einer Eiche?",
    "answers": [
      "Die Eichel",
      "Die Buchecker",
      "Die Kastanie",
      "Der Tannenzapfen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eicheln dienen z. B. Eichhörnchen u. Hähern als Nahrung."
  },
  {
    "id": "k6_bio_085",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie nennt man das kugelige Nest des Eichhörnchens?",
    "answers": [
      "Der Kobel",
      "Der Horst",
      "Der Bau",
      "Der Kessel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kobel sind aus Zweigen gebaute, isolierte Kugeln."
  },

  // --- INSEKTEN, ENTWICKLUNG & WIRBELLOSE (086 - 100) ---
  {
    "id": "k6_bio_086",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "In wie viele Körperabschnitte gliedert sich ein Insekt?",
    "answers": [
      "Drei Abschnitte",
      "Zwei Abschnitte",
      "Vier Abschnitte",
      "Fünf Abschnitte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kopf, Brustabschnitt u. Hinterleib bilden die Dreigliederung."
  },
  {
    "id": "k6_bio_087",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie viele Beine besitzen ausgewachsene Insekten?",
    "answers": [
      "Sechs Beine",
      "Acht Beine",
      "Zehn Beine",
      "Zwölf Beine"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Insekten tragen 3 Paar Beine (6 Beine) am Bruststück."
  },
  {
    "id": "k6_bio_088",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Woraus besteht das Außenskelett der Insekten?",
    "answers": [
      "Aus Chitin",
      "Aus Kalk",
      "Aus Knochen",
      "Aus Knorpel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das harten Chitinpanzer-Skelett schützt den Körper."
  },
  {
    "id": "k6_bio_089",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Womit atmen Insekten?",
    "answers": [
      "Mit Tracheen",
      "Mit Lungen",
      "Mit Kiemen",
      "Mit der Haut"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tracheen sind verzweigte Luftröhren im Körperinneren."
  },
  {
    "id": "k6_bio_090",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie unterscheiden sich Spinnen von Insekten bei Beinen?",
    "answers": [
      "Spinnen haben 8 Beine",
      "Spinnen haben 6 Beine",
      "Spinnen haben 10 Beine",
      "Spinnen haben 4 Beine"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spinnentiere zeichnen sich stets durch 8 Laufbeine aus."
  },
  {
    "id": "k6_bio_091",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißt der Wandel von der Raupe zum Schmetterling?",
    "answers": [
      "Vollständige Metamorphose",
      "Einfaches Wachstum",
      "Zellteilungsprozess",
      "Keimungsentwicklung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ei -> Raupe -> Puppe -> Falter nennt man vollständige Metamorphose."
  },
  {
    "id": "k6_bio_092",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Entwicklungsstadium liegt vor dem Schmetterling?",
    "answers": [
      "Die Puppe",
      "Das Ei",
      "Die Larve",
      "Der Imago"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Puppenhülle findet der komplette Umbau statt."
  },
  {
    "id": "k6_bio_093",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Insekt macht eine unvollständige Verwandlung durch?",
    "answers": [
      "Die Heuschrecke",
      "Der Käfer",
      "Die Biene",
      "Der Schmetterling"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Heuschreckenhäutungen verlaufen ohne Puppenstadium."
  },
  {
    "id": "k6_bio_094",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie nennt man das ausgewachsene Insekt fachlich?",
    "answers": [
      "Der Imago",
      "Die Larve",
      "Die Puppe",
      "Die Nymphe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Imago belehrt das geschlechtsreife Endstadium."
  },
  {
    "id": "k6_bio_095",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welche Aufgabe hat die Bienenkönigin im Volk?",
    "answers": [
      "Eierlegen im Nest",
      "Honigsammeln draußen",
      "Verteidigung des Stocks",
      "Bau der Waben"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Königin sichert den Fortbestand des gesamten Volkes."
  },
  {
    "id": "k6_bio_096",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie heißen die männlichen Bienen?",
    "answers": [
      "Drohnen",
      "Arbeiterinnen",
      "Königinnen",
      "Krieger"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Drohnen dienen ausschließlich der Begattung von Jungköniginnen."
  },
  {
    "id": "k6_bio_097",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie teilen Bienen Entfernungen zu Futterquellen mit?",
    "answers": [
      "Durch Schwänzeltanz",
      "Durch Lautgesang",
      "Durch Zirpen",
      "Durch Lichtsignale"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Tanz auf den Waben zeigt Richtung u. Distanz zur Quelle an."
  },
  {
    "id": "k6_bio_098",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wozu dient der Regenwurm dem Erdboden?",
    "answers": [
      "Lockerung u. Humus",
      "Fressen von Wurzeln",
      "Austrocknung Erde",
      "Bekämpfung Pilze"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Regenwürmer belüften den Boden u. produzieren fruchtbaren Wurmhumus."
  },
  {
    "id": "k6_bio_099",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Welches Organ dient Schnecken zur Nahrungsaufnahme?",
    "answers": [
      "Die Raspelzunge",
      "Der Kauschnabel",
      "Die Zähne oben",
      "Der Saugrüssel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Radula (Raspelzunge) schabt Pflanzenteile ab."
  },
  {
    "id": "k6_bio_100",
    "category": "k6_biologie",
    "area": "schule",
    "grade": 6,
    "subject": "biologie",
    "question": "Wie schützen sich Landschnecken vor Vertrocknung?",
    "answers": [
      "Schleimabsonderung",
      "Schnelles Rennen",
      "Erdgrafen graben",
      "Schalenabwurf"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schleim u. das Schneckenhaus verringern den Wasserverlust extrem."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K6_BIOLOGIE_QUESTIONS = K6_BIOLOGIE_QUESTIONS;
}

if (typeof window !== 'undefined') window.K6_BIOLOGIE_QUESTIONS = K6_BIOLOGIE_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K6_BIOLOGIE_QUESTIONS', K6_BIOLOGIE_QUESTIONS);
