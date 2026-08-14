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
      "Atmung ausschließlich Kiemen",
      "Legen von Eiern im Frühling",
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
      "Trägewarme Tiere",
      "Kaltblütige Tiere",
      "Wechselwarme Tiere",
      "Gleichwarme Tiere"
    ],
    "correct": 3,
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
      "Der erste Schneidezahn",
      "Der vierte Backenzahn",
      "Der hintere Weisheitszahn",
      "Der mittlere Eckzahn"
    ],
    "correct": 1,
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
      "Insektenfressergebiss",
      "Raubtiergebiss im Wald",
      "Allesfressergebiss Haus"
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
      "Der Blättermagen darin",
      "Der Netzmagen als Teil",
      "Der Labmagen als Endteil",
      "Der Pansen als Kammer"
    ],
    "correct": 3,
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
      "Drei Abschnitte",
      "Vier Abschnitte",
      "Fünf Abschnitte",
      "Zwei Abschnitte"
    ],
    "correct": 1,
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
      "Starre Wirbelsäule",
      "Verwachsene Knochen",
      "Fehlen von Rippen",
      "Biegsame Wirbelsäule"
    ],
    "correct": 3,
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
      "Hufgänger",
      "Spitzengänger",
      "Sohlengänger",
      "Zehengänger"
    ],
    "correct": 3,
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
      "Spitzengänger",
      "Sohlengänger",
      "Hufgänger",
      "Zehengänger"
    ],
    "correct": 1,
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
      "Sohlengänger im Wald",
      "Fersengänger im Feld",
      "Zehenspitzengänger",
      "Zehengänger auf Wiesen"
    ],
    "correct": 2,
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
      "Der Sehsinn weit",
      "Der Geruchssinn",
      "Der Tastsinn Haut",
      "Der Geschmackssinn"
    ],
    "correct": 1,
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
      "Die Pfotenballen",
      "Die Zungenborsten",
      "Die Ohrbüschel",
      "Die Schnurrhaare"
    ],
    "correct": 3,
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
      "Zur Kommunikation",
      "Aus reiner Aufregung",
      "Zur Wärmeregulierung",
      "Zum Schärfen Zähne"
    ],
    "correct": 2,
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
      "Der Gleitbeutler",
      "Das Flughörnchen",
      "Der Flugdrache",
      "Die Fledermaus"
    ],
    "correct": 3,
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
      "Mit Geruchsorganen",
      "Mit Infrarotlicht"
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
      "Ein Tracheennetz",
      "Die Haut",
      "Eine Lunge",
      "Eine Kieme"
    ],
    "correct": 2,
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
      "Dauerhafter Schlaf",
      "Sommerliches Fell"
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
      "Fehlen von Backenzähnen",
      "Lange Eckzähne oben",
      "Flache Reißzähne unten",
      "Meißelartige Schneidezähne"
    ],
    "correct": 3,
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
      "Das Faultier Wald",
      "Das Känguru Gras",
      "Der Koalabär Baum"
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
      "In den bunten Blüten",
      "In den grünen Blättern",
      "In den tiefen Wurzeln",
      "In den festen Samen"
    ],
    "correct": 1,
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
      "Carotin Stoff",
      "Chlorophyll",
      "Hämoglobin Blut",
      "Melanin Haut"
    ],
    "correct": 1,
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
      "Sauerstoff + Stickstoff",
      "Wasser + Kohlenstoffdioxid",
      "Wasserstoff + Ozonluft",
      "Zucker + Kohlensäure"
    ],
    "correct": 1,
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
      "Rohsalze Boden",
      "Kohlensäure",
      "Stickstoff gas",
      "Traubenzucker"
    ],
    "correct": 3,
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
      "Stickstoff gas",
      "Methangaz Luft",
      "Sauerstoff",
      "Kohlenstoffdioxid"
    ],
    "correct": 2,
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
      "Die Luftfeuchte",
      "Die Erdwärme tief",
      "Der Windzug kalt",
      "Das Sonnenlicht"
    ],
    "correct": 3,
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
      "Wurzelhaare Boden",
      "Leitbündel Holz",
      "Spaltöffnungen",
      "Porenzellkerne"
    ],
    "correct": 2,
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
      "Keine flüssigen Stoffe",
      "Wasser und Nährstoffe",
      "Nur reinen Sauerstoff",
      "Feste Erdkörner Sand"
    ],
    "correct": 1,
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
      "Das Kronblatt",
      "Der Blütenkelch"
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
      "Kelch, Krone, Blütengrund",
      "Staubbeutel, Faden, Polle",
      "Narbe, Griffel, Fruchtknoten",
      "Wurzel, Stängel, Keimling"
    ],
    "correct": 2,
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
      "Der Fruchtknoten",
      "Das Kronblatt",
      "Das Stempelorgan",
      "Das Staubblatt"
    ],
    "correct": 3,
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
      "Der Nektarsaft",
      "Die Samenanlage",
      "Der Blütenstaub",
      "Der Fruchtsaft"
    ],
    "correct": 2,
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
      "Fotosynthese",
      "Befruchtung",
      "Keimung Zeit"
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
      "Die Wurzelspitze",
      "Neues Kronblatt",
      "Neues Staubblatt",
      "Frucht mit Samen"
    ],
    "correct": 3,
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
      "Durch Selbstexplosion",
      "Durch das Wasser",
      "Durch den Wind",
      "Durch Ameisen"
    ],
    "correct": 2,
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
      "Durch den Wind",
      "Über Grundwasser",
      "Im Fell von Tieren",
      "Durch Wegschleudern"
    ],
    "correct": 2,
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
      "Licht, Erde, Stickstoff",
      "Wasser, Wärme, Sauerstoff",
      "Dünger, Licht, Kälte",
      "Schatten, Eis, CO2"
    ],
    "correct": 1,
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
      "Rosen und Tulpen",
      "Eichen u. Buchen",
      "Farne und Moose",
      "Äpfel u. Birnen"
    ],
    "correct": 2,
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
      "Schutz vor dem Wind",
      "Speicherung Stärke",
      "Anlocken von Insekten",
      "Aufnahme von Wasser"
    ],
    "correct": 2,
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
      "Etwa 50 Knochen",
      "Etwa 100 Knochen",
      "Etwa 200 Knochen",
      "Etwa 500 Knochen"
    ],
    "correct": 2,
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
      "Das Schulterblatt",
      "Das Becken unten",
      "Der Brustkorb",
      "Der Schädelknochen"
    ],
    "correct": 3,
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
      "Blutreinigung im Körper",
      "Verdauung der Nahrung",
      "Sauerstoffaufnahme Luft",
      "Stützung + Beweglichkeit"
    ],
    "correct": 3,
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
      "Das Gelenkfett",
      "Die Sehnenfaser",
      "Die Knochenhaut",
      "Die Bandscheiben"
    ],
    "correct": 3,
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
      "Niere und Leber",
      "Magen und Darm",
      "Gehirn und Augen",
      "Herz und Lunge"
    ],
    "correct": 3,
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
      "Das Sattelgelenk",
      "Das Drehgelenk",
      "Das Scharniergelenk"
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
      "Das Planargelenk",
      "Das Scharniergelenk",
      "Das Eigelenk Hand",
      "Das Kugelgelenk"
    ],
    "correct": 1,
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
      "Mit Nerven",
      "Mit Sehnen",
      "Mit Bändern",
      "Mit Knorpeln"
    ],
    "correct": 1,
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
      "Mit Sehnen",
      "Mit Muskeln",
      "Mit Bändern",
      "Mit Adern"
    ],
    "correct": 2,
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
      "Völlig unabhängig",
      "Als Mitspieler",
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
      "Der Wadenmuskel",
      "Der Deltamuskel",
      "Der Bizeps",
      "Der Trizeps"
    ],
    "correct": 2,
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
      "Der Rückenmuskel",
      "Der Trizeps",
      "Der Bizeps",
      "Der Brustmuskel"
    ],
    "correct": 1,
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
      "Eisen Blut",
      "Calzium",
      "Jod Drüse",
      "Vitamin C"
    ],
    "correct": 1,
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
      "Hautschicht",
      "Fettschicht",
      "Muskelschicht"
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
      "Spurenelemente",
      "Vitamine Schutz",
      "Kohlenhydrate",
      "Mineralstoffe"
    ],
    "correct": 2,
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
      "Pflanzenfette",
      "Traubenzucker",
      "Eiweiße (Proteine)",
      "Ballaststoffe"
    ],
    "correct": 2,
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
      "Erzeugung Wärme",
      "Schutz vor Infekten",
      "Aufbau von Knochen",
      "Förderung Verdauung"
    ],
    "correct": 3,
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
      "Im Speiserohr",
      "Im Dünndarm",
      "Im Magen unten"
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
      "Abbau von Eiweißen",
      "Zersetzung von Stärke",
      "Aufnahme von Wasser",
      "Spaltung von Fetten"
    ],
    "correct": 1,
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
      "Die Zitronensäure",
      "Die Essigsäure",
      "Die Kohlensäure",
      "Die Salzsäure"
    ],
    "correct": 3,
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
      "Im Blinddarm",
      "Im Dünndarm",
      "Im Magen oben",
      "Im Dickdarm"
    ],
    "correct": 1,
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
      "Spaltung Eiweiß",
      "Verdauung von Fett",
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
      "20 Zähne",
      "36 Zähne",
      "32 Zähne",
      "28 Zähne"
    ],
    "correct": 2,
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
      "32 Zähne",
      "24 Zähne",
      "20 Zähne",
      "16 Zähne"
    ],
    "correct": 2,
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
      "Die Knochenhaut",
      "Der Schenkelknochen"
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
      "Der Schneidezahn",
      "Der Fangzahn vorn",
      "Der Eckzahn vorn",
      "Der Backenzahn"
    ],
    "correct": 3,
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
      "Die Milz",
      "Der Magen",
      "Die Bauchspeicheldrüse"
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
      "Ein Biosphärenpark",
      "Eine Population",
      "Ein Waldgebiet",
      "Ein Ökosystem"
    ],
    "correct": 3,
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
      "Die Krautschicht",
      "Die Strauchschicht",
      "Die Wurzelschicht",
      "Die Moosschicht"
    ],
    "correct": 2,
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
      "Die Baumschicht",
      "Die Wurzelschicht",
      "Die Krautschicht",
      "Die Strauchschicht"
    ],
    "correct": 2,
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
      "Grüne Moose",
      "Kleine Sträucher",
      "Niedrige Farne",
      "Hohe Bäume"
    ],
    "correct": 3,
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
      "Der Waldkauz",
      "Der Waldpilz",
      "Die grüne Eiche",
      "Der Rotfuchs"
    ],
    "correct": 2,
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
      "Autotrophe",
      "Konsumenten",
      "Destruenten",
      "Produzenten"
    ],
    "correct": 1,
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
      "Vögel u. Käfer",
      "Pilze u. Bakterien",
      "Eichen u. Buchen",
      "Mäuse u. Hörnchen"
    ],
    "correct": 1,
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
      "Immergrüne Bäume",
      "Nadelbäume stets",
      "Tropenbäume stets",
      "Sommergrüne Bäume"
    ],
    "correct": 3,
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
      "Weiche Oberfläche",
      "Große Blattfläche",
      "Fehlen von Harz",
      "Dicke Wachsschicht"
    ],
    "correct": 3,
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
      "Die Holzbiene",
      "Der Buntspecht",
      "Das Eichhörnchen",
      "Der Eichelhäher"
    ],
    "correct": 1,
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
      "Naturnaher Waldbau",
      "Urwald ohne Eingriff",
      "Mischung vieler Arten",
      "Anbau nur einer Art"
    ],
    "correct": 3,
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
      "Gleicher Schädling",
      "Schnellerer Schlag",
      "Höhere Artenvielfalt",
      "Weniger Wurzelraum"
    ],
    "correct": 2,
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
      "Der Tannenzapfen",
      "Die Eichel",
      "Die Kastanie",
      "Die Buchecker"
    ],
    "correct": 1,
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
      "Der Bau",
      "Der Kessel",
      "Der Horst",
      "Der Kobel"
    ],
    "correct": 3,
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
      "Fünf Abschnitte",
      "Vier Abschnitte",
      "Zwei Abschnitte"
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
      "Zwölf Beine",
      "Sechs Beine",
      "Zehn Beine",
      "Acht Beine"
    ],
    "correct": 1,
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
      "Aus Knochen",
      "Aus Chitin",
      "Aus Knorpel",
      "Aus Kalk"
    ],
    "correct": 1,
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
      "Spinnen haben 6 Beine",
      "Spinnen haben 8 Beine",
      "Spinnen haben 4 Beine",
      "Spinnen haben 10 Beine"
    ],
    "correct": 1,
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
      "Zellteilungsprozess",
      "Keimungsentwicklung",
      "Vollständige Metamorphose",
      "Einfaches Wachstum"
    ],
    "correct": 2,
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
      "Das Ei",
      "Der Imago",
      "Die Puppe",
      "Die Larve"
    ],
    "correct": 2,
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
      "Die Biene",
      "Die Heuschrecke",
      "Der Käfer",
      "Der Schmetterling"
    ],
    "correct": 1,
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
      "Die Larve",
      "Die Nymphe",
      "Die Puppe",
      "Der Imago"
    ],
    "correct": 3,
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
      "Verteidigung des Stocks",
      "Eierlegen im Nest",
      "Honigsammeln draußen",
      "Bau der Waben"
    ],
    "correct": 1,
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
      "Krieger",
      "Drohnen",
      "Königinnen",
      "Arbeiterinnen"
    ],
    "correct": 1,
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
      "Durch Zirpen",
      "Durch Lautgesang",
      "Durch Schwänzeltanz",
      "Durch Lichtsignale"
    ],
    "correct": 2,
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
      "Bekämpfung Pilze",
      "Austrocknung Erde",
      "Fressen von Wurzeln"
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
      "Der Saugrüssel",
      "Die Raspelzunge",
      "Der Kauschnabel",
      "Die Zähne oben"
    ],
    "correct": 1,
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
  },
  {"id":"k6bi101","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Zellatmung findet vor allem in … statt.","answers":["Zellkern","Mitochondrien","Vakuole","Zellwand"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Mitochondrien.","topic":"erweiterung"},
  {"id":"k6bi102","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"DNA trägt …","answers":["Zucker nur","Erbinformation","Wasser","Eisen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Gene.","topic":"erweiterung"},
  {"id":"k6bi103","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Photosynthese Gleichung grob: CO₂ + H₂O + Licht →","answers":["nur CO₂","Zucker + O₂","N₂","Salz"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Glucose+Sauerstoff.","topic":"erweiterung"},
  {"id":"k6bi104","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Ökosystem See: abiotischer Faktor?","answers":["Fisch","Temperatur","Alge","Bakterium"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Temperatur.","topic":"erweiterung"},
  {"id":"k6bi105","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Verdauung Eiweiß beginnt im …","answers":["Mund stark","Magen","Dickdarm","Haut"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Magen.","topic":"erweiterung"},
  {"id":"k6bi106","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Hormone steuern u. a. …","answers":["nur Haare","Körperfunktionen","nur Knochenfarbe","Wetter"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Regulation.","topic":"erweiterung"},
  {"id":"k6bi107","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Immunsystem: Antikörper gegen …","answers":["Nährstoffe","Erreger/Antigene","Wasser","Sauerstoff"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Fremdstoffe.","topic":"erweiterung"},
  {"id":"k6bi108","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Evolution: Selektion bedeutet …","answers":["Zufall ohne Wirkung","Auswahl angepasster Merkmale","nur Mutation ohne Folge","Züchtung immer"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Auswahl.","topic":"erweiterung"},
  {"id":"k6bi109","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Bakterien: Prokaryoten heißen …","answers":["mit Zellkern","ohne echten Zellkern","Pflanzen","Tiere"],"correct":1,"difficulty":"mittel","points":10,"explanation":"kein Zellkern.","topic":"erweiterung"},
  {"id":"k6bi110","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Stoffkreislauf Kohlenstoff: CO₂ aus …","answers":["nur Steinen","Atmung/Verbrennung","nur Eis","nur Mond"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Atmung etc.","topic":"erweiterung"},
  {"id":"k6bi111","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Auge: Lichtempfindliche Schicht?","answers":["Hornhaut","Netzhaut","Linse nur","Lid"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Retina.","topic":"erweiterung"},
  {"id":"k6bi112","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Pubertät Hormone u. a. aus …","answers":["Leber nur","Keimdrüsen","Zähnen","Haaren"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Gonaden.","topic":"erweiterung"},
  {"id":"k6bi113","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Pilze: Zellwand oft mit …","answers":["Cellulose nur","Chitin","Knochen","Eisen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Chitin.","topic":"erweiterung"},
  {"id":"k6bi114","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Symbiose Beispiel?","answers":["Räuber-Beute","Flechte (Pilz+Alge)","Konkurrenz","Parasit immer schädlich"],"correct":1,"difficulty":"mittel","points":10,"explanation":"gegenseitig.","topic":"erweiterung"},
  {"id":"k6bi115","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Blut: rote Blutkörperchen transportieren …","answers":["Zucker nur","Sauerstoff","Knochen","Wasser nur"],"correct":1,"difficulty":"mittel","points":10,"explanation":"O₂.","topic":"erweiterung"},
  {"id":"k6bi116","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Genetik: dominantes Allel …","answers":["setzt sich phänotypisch durch","ist immer krank","verschwindet","ist DNA-frei"],"correct":0,"difficulty":"mittel","points":10,"explanation":"setzt sich durch.","topic":"erweiterung"},
  {"id":"k6bi117","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Umwelt: Invasive Art kann …","answers":["nur nützen","Ökosystem stören","nur Wetter ändern","Magnete erzeugen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Störung.","topic":"erweiterung"},
  {"id":"k6bi118","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Nervenzelle leitet …","answers":["Blut","elektrische Impulse","Luft","Knochen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Erregung.","topic":"erweiterung"},
  {"id":"k6bi119","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Photosynthese Ort: …","answers":["Mitochondrien","Chloroplasten","Zellkern","Ribosom"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Chloroplasten.","topic":"erweiterung"},
  {"id":"k6bi120","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Nahrungskette Länge begrenzt durch …","answers":["unendlich Energie","Energieverlust pro Stufe","nur Farbe","Mond"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Energieverlust.","topic":"erweiterung"},
  {"id":"k6bi121","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Antibiotikaresistenzen entstehen durch …","answers":["nur Sport","Selektion von Bakterien","Photosynthese","Magnetismus"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Selektion.","topic":"erweiterung"},
  {"id":"k6bi122","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Skelett: Gelenke ermöglichen …","answers":["nur Starrheit","Bewegung","Atmung nur","Verdauung"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Bewegung.","topic":"erweiterung"},
  {"id":"k6bi123","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Bestäubung ≠ Befruchtung: Bestäubung ist …","answers":["Kernverschmelzung","Pollenübertragung","Keimung","Photosynthese"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Pollen.","topic":"erweiterung"},
  {"id":"k6bi124","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Population = …","answers":["alle Arten","Individuen einer Art in Gebiet","nur Pflanzen","Klima"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Art in Raum.","topic":"erweiterung"},
  {"id":"k6bi125","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Hautfunktionen u. a. …","answers":["nur Farbe","Schutz/Temperatur/Sinn","nur Photosynthese","Knochenbildung"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Schutz etc.","topic":"erweiterung"},
  {"id":"k6bi126","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Viren: gelten als …","answers":["Zellen mit Kern","keine echten Zellen/obligat parasitär","Pflanzen","Bakterien"],"correct":1,"difficulty":"mittel","points":10,"explanation":"akaryotisch.","topic":"erweiterung"},
  {"id":"k6bi127","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Nachhaltige Fischerei achtet auf …","answers":["Überfischung","Bestandserhalt","nur Preis","nur Export"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Bestände.","topic":"erweiterung"},
  {"id":"k6bi128","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Zellteilung Mitose dient …","answers":["Geschlechtszellen meiosis","Wachstum/Erneuerung","nur Tod","nur Evolutionstheorie"],"correct":1,"difficulty":"mittel","points":10,"explanation":"somatisch.","topic":"erweiterung"},
  {"id":"k6bi129","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Sinnesorgan Zunge: …","answers":["Sehen","Schmecken","Hören","Gleichgewicht nur"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Geschmack.","topic":"erweiterung"},
  {"id":"k6bi130","category":"k6_biologie","area":"schule","grade":6,"subject":"biologie","question":"Biodiversität = …","answers":["eine Art","Vielfalt des Lebens","nur Klima","nur Städte"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Vielfalt.","topic":"erweiterung"}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K6_BIOLOGIE_QUESTIONS = K6_BIOLOGIE_QUESTIONS;
}

if (typeof window !== 'undefined') window.K6_BIOLOGIE_QUESTIONS = K6_BIOLOGIE_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K6_BIOLOGIE_QUESTIONS', K6_BIOLOGIE_QUESTIONS);
