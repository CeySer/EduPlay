// ================================================================
// KLASSE 7 - BIOLOGIE (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K7_BIOLOGIE_QUESTIONS = [
  // --- ÖKOLOGIE & ÖKOSYSTEME (001 - 025) ---
  {
    "id": "k7_bio_001",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man unter der Biosphäre auf unserer Erde?",
    "answers": [
      "Nur der Erdmantel",
      "Gesamter Lebensraum",
      "Nur die Ozeanwelt",
      "Reine Atmosphäre"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Biosphäre umfasst alle von Lebewesen besiedelten Bereiche der Erde."
  },
  {
    "id": "k7_bio_002",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man unter abiotischen Umweltfaktoren?",
    "answers": [
      "Pflanzliche Fresser",
      "Belebte Organismen",
      "Unbelebte Einflüsse",
      "Menschliche Eingriffe"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Abiotische Faktoren sind physikalische/chemische Einflüsse wie Licht, Temperatur u. Wasser."
  },
  {
    "id": "k7_bio_003",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Element gehört zu den biotischen Umweltfaktoren?",
    "answers": [
      "Wassergehalt Boden",
      "Lichtintensität Tag",
      "Temperatur der Luft",
      "Fressfeinde im Wald"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Biotische Faktoren gehen von anderen Lebewesen aus (z. B. Feinde, Konkurrenten, Parasiten)."
  },
  {
    "id": "k7_bio_004",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie nennt man die unterste Schicht des Waldes direkt am Erdboden?",
    "answers": [
      "Die Moosschicht",
      "Die Baumschicht",
      "Die Strauchschicht",
      "Die Krautschicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Moosschicht bedeckt unmittelbar den Erdboden u. speichert Feuchtigkeit."
  },
  {
    "id": "k7_bio_005",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Waldschicht liegt direkt über der Moosschicht?",
    "answers": [
      "Die Strauchschicht",
      "Die Baumschicht",
      "Die Kronenschicht",
      "Die Krautschicht"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Krautschicht wachsen Gräser, Farnpflanzen u. Waldblumen."
  },
  {
    "id": "k7_bio_006",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Waldschicht besteht vorwiegend aus Gebüschen u. Nachwuchsbäumen?",
    "answers": [
      "Die Strauchschicht",
      "Die Moosschicht",
      "Die Wurzelschicht",
      "Die Krautschicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Strauchschicht bietet Vögeln u. Insekten Deckung u. Nahrung."
  },
  {
    "id": "k7_bio_007",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Schicht des Waldes erhält das meiste Sonnenlicht?",
    "answers": [
      "Die Strauchschicht",
      "Die Baumschicht",
      "Die Krautschicht",
      "Die Moosschicht"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Baumkronen fangen den Großteil des einfallenden Sonnenlichts ab."
  },
  {
    "id": "k7_bio_008",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man in der Ökologie unter einer Biozönose?",
    "answers": [
      "Unbelebter Raum",
      "Lebensgemeinschaft",
      "Reiner Mineralstoff",
      "Einzelner Organismus"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Biozönose ist die Gesamtheit aller lebenden Organismen in einem Lebensraum."
  },
  {
    "id": "k7_bio_009",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man in der Ökologie unter einem Biotop?",
    "answers": [
      "Pflanzengruppe",
      "Lebensgemeinschaft",
      "Tiergesellschaft",
      "Unbelebter Raum"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Biotop ist der unbelebte Lebensraum mit seinen abiotischen Umweltfaktoren."
  },
  {
    "id": "k7_bio_010",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Woraus setzt sich ein Ökosystem im Ganzen zusammen?",
    "answers": [
      "Nur Boden u. Wasser",
      "Nur Tiergemeinschaft",
      "Klima u. Wetterlage",
      "Biotop u. Biozönose"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Ökosystem ist die funktionelle Einheit aus Biotop (Raum) u. Biozönose (Gemeinschaft)."
  },
  {
    "id": "k7_bio_011",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche primäre Aufgabe erfüllen Destruenten im Wald?",
    "answers": [
      "Erzeugen Sauerstoff",
      "Zersetzen Biomasse",
      "Jagen Pflanzenfresser",
      "Speichern Sonnenlicht"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Destruenten bauen abgestorbene organische Substanz zu Mineralstoffen ab."
  },
  {
    "id": "k7_bio_012",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welcher Organismus gehört zu den Destruenten (Zersetzern)?",
    "answers": [
      "Fichte im Forst",
      "Regenwurm im Boden",
      "Reh auf der Wiese",
      "Rotfuchs im Wald"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Regenwürmer, Pilze u. Bakterien bauen pflanzliche Reste im Boden ab."
  },
  {
    "id": "k7_bio_013",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welcher Organismus zählt zu den Produzenten im Ökosystem?",
    "answers": [
      "Waldameise Erde",
      "Waldkauz Baum",
      "Grüne Laubpflanze",
      "Borkenkäfer Holz"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Grüne Pflanzen stellen durch Fotosynthese organische Stoffe her (Produzenten)."
  },
  {
    "id": "k7_bio_014",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man unter der Humusschicht im Waldboden?",
    "answers": [
      "Trockene Sandschicht",
      "Zersetzte Organik",
      "Reiner Felsgrund",
      "Wasserführender Kies"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Humus besteht aus oberflächlich abgebauten pflanzlichen u. tierischen Resten."
  },
  {
    "id": "k7_bio_015",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Merkmal unterscheidet Nadelbäume meist von Laubbäumen?",
    "answers": [
      "Sehr dicker Humus",
      "Breite Blattflächen",
      "Immergrüne Nadeln",
      "Herbstlicher Laubfall"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die meisten Nadelbäume behalten ihre festen, wachsüberzogenen Nadeln auch im Winter."
  },
  {
    "id": "k7_bio_016",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie nennt man das Herabsetzen von Körpertemperatur u. Herzschlag bei Säugern im Winter?",
    "answers": [
      "Der Winterschlaf",
      "Die Migration",
      "Die Winterruhe",
      "Der Sommerschlaf"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Winterschlaf sinkt die Körpertemperatur stark ab, um Energie zu sparen."
  },
  {
    "id": "k7_bio_017",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches heimische Tier hält einen echten Winterschlaf?",
    "answers": [
      "Eichhörnchen",
      "Der Braunbär",
      "Der Feldigel",
      "Die Waldmaus"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Igel u. Murmeltiere senken ihre Vitalfunktionen im Winterschlaf drastisch."
  },
  {
    "id": "k7_bio_018",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was unterscheidet die Winterruhe vom echten Winterschlaf?",
    "answers": [
      "Monatelanges Koma",
      "Kein Herzschlag mehr",
      "Regelmäßiges Erwachen",
      "Starke Unterkühlung"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tiere in Winterruhe unterbrechen ihren Schlaf öfter, um gefressene Vorräte zu nutzen."
  },
  {
    "id": "k7_bio_019",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Tier hält im Winter eine Winterruhe (keinen Winterschlaf)?",
    "answers": [
      "Die Murmeltiere",
      "Der Feldigel",
      "Eichhörnchen",
      "Die Fledermaus"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eichhörnchen wachen regelmäßig auf u. nutzen ihre im Herbst angelegten Vorräte."
  },
  {
    "id": "k7_bio_020",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie überwintern wechselwarme Tiere wie Amphibien u. Reptilien?",
    "answers": [
      "In Winterruhe",
      "In Kältestarre",
      "Im Winterschlaf",
      "Durch Zug in Süden"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wechselwarme Tiere erstarren bei sinkenden Außentemperaturen passiv."
  },
  {
    "id": "k7_bio_021",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches der folgenden Tiere gehört zu den gleichwarmen Lebewesen?",
    "answers": [
      "Flussbarsch Wasser",
      "Laubfrosch See",
      "Amsel im Garten",
      "Zauneidechse Sand"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vögel u. Säugetiere regulieren ihre Körpertemperatur unabhängig von der Umwelt."
  },
  {
    "id": "k7_bio_022",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was kennzeichnet wechselwarme Tiere (Poikilotherme) im Kern?",
    "answers": [
      "Hoher Stoffwechsel",
      "Konstante Wärme",
      "Fell zur Isolation",
      "Körper folgt Außen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ihre Körpertemperatur gleicht sich weitgehend der Umgebungstemperatur an."
  },
  {
    "id": "k7_bio_023",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was besagt die Bergmannsche Regel bei gleichwarmen Tieren?",
    "answers": [
      "Wärmer gleich größer",
      "Größe ist konstant",
      "Kälter gleich kleiner",
      "Kälter gleich größer"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In kälteren Gebieten verwandter Arten sind Individuen meist größer (günstigeres Volumen/Flächen-Verhältnis)."
  },
  {
    "id": "k7_bio_024",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was besagt die Allensche Regel bei gleichwarmen Tieren?",
    "answers": [
      "Klima ist egal",
      "Kälter große Organe",
      "Kälter kleine Organe",
      "Wärmer kleine Ohren"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In kälteren Regionen sind Körperanhänge (wie Ohren oder Schwanz) kleiner zur Wärmeeinsparung."
  },
  {
    "id": "k7_bio_025",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Baumart bildet von Natur aus die natürliche Vegetation Mitteleuropas?",
    "answers": [
      "Der Mangrovenwald",
      "Der Buchenmischwald",
      "Der reine Fichtenwald",
      "Der Kiefernforst"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ohne menschlichen Eingriff würden in Mitteleuropa weitgehend Buchenmischwälder stocken."
  },

  // --- FOTOSYNTHESE, ZELLATMUNG & STOFFKREISLÄUFE (026 - 050) ---
  {
    "id": "k7_bio_026",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "In welchen Zellorganellen der Pflanzenzelle findet die Fotosynthese statt?",
    "answers": [
      "In Chloroplasten",
      "In Mitochondrien",
      "Im Zellkern drin",
      "In Vakuolen drin"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Chloroplasten enthalten das Blattgrün Chlorophyll u. führen die Fotosynthese durch."
  },
  {
    "id": "k7_bio_027",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches grüne Pigment absorbiert die Sonnenenergie im Blatt?",
    "answers": [
      "Pigment Carotinoid",
      "Pigment Melanin",
      "Pigment Hämoglobin",
      "Pigment Chlorophyll"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Chlorophyll fängt das Licht für die chemische Energiewandlung ein."
  },
  {
    "id": "k7_bio_028",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche beiden Stoffe benötigt eine Pflanze als Ausgangsstoffe für Fotosynthese?",
    "answers": [
      "Ozon u. Mineralien",
      "Wasser u. CO2 Gas",
      "Sauerstoff u. Zucker",
      "Stickstoff u. Wasser"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser ($H_2O$) u. Kohlenstoffdioxid ($CO_2$) werden unter Licht umgesetzt."
  },
  {
    "id": "k7_bio_029",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche beiden Endprodukte entstehen bei der Fotosynthese?",
    "answers": [
      "Glucose u. Sauerstoff",
      "Stickstoff u. Stärke",
      "Methan u. Sauerstoff",
      "Wasser u. Kohlenstoff"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Es entstehen Traubenzucker (Glucose) u. gasförmiger Sauerstoff ($O_2$)."
  },
  {
    "id": "k7_bio_030",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Über welche Strukturen nehmen Pflanzen Kohlenstoffdioxid aus der Luft auf?",
    "answers": [
      "Über Spaltöffnungen",
      "Über Wurzelhaare",
      "Über die Blüten",
      "Über die Baumrinde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stomata (Spaltöffnungen) an der Blattunterseite regeln den Gasaustausch."
  },
  {
    "id": "k7_bio_031",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Über welche Zellstrukturen nehmen Landpflanzen Wasser aus dem Boden auf?",
    "answers": [
      "Über die Blüten",
      "Über Blattoberseite",
      "Über Wurzelhaare",
      "Über Spaltöffnungen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wurzelhaarzellen vergrößern die Oberfläche zur effizienten Wasseraufnahme."
  },
  {
    "id": "k7_bio_032",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "In welcher hochmolekularen Form speichern Pflanzen gebildeten Zucker kurzfristig?",
    "answers": [
      "Als Fetttropfen",
      "Als Stärkemehl",
      "Als Eiweißfaser",
      "Als Gelatine"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Glucose wird wasserunlöslich als Stärke im Blatt gelagert."
  },
  {
    "id": "k7_bio_033",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welcher Stoff lässt sich im Experiment mit Lugolscher Lösung (Jod-Kaliumjodid) nachweisen?",
    "answers": [
      "Nachweis von Fett",
      "Nachweis von Stärke",
      "Nachweis von Eiweiß",
      "Nachweis von Zucker"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lugolsche Lösung färbt Stärke charakteristisch dunkelblau bis schwarz."
  },
  {
    "id": "k7_bio_034",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man unter dem Begriff Zellatmung?",
    "answers": [
      "Aufbau von Stärke",
      "Abgabe von Ozon",
      "Abbau von Glucose",
      "Aufnahme von Wasser"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zellatmung baut Glucose unter Sauerstoffverbrauch ab u. setzt Energie frei."
  },
  {
    "id": "k7_bio_035",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wo findet die Zellatmung in Pflanzen- u. Tierzellen statt?",
    "answers": [
      "In Mitochondrien",
      "In der Vakuole",
      "In Zellwand drin",
      "In Chloroplasten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mitochondrien sind die Kraftwerke der Zelle für die Energiegewinnung."
  },
  {
    "id": "k7_bio_036",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Endprodukte entstehen bei der vollständigen Zellatmung?",
    "answers": [
      "Glucose u. Sauerstoff",
      "CO2, Wasser u. Energie",
      "Ozon u. Mineralien",
      "Stärke u. Stickstoff"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Glucose + Sauerstoff werden zu $CO_2$, $H_2O$ u. Energie (ATP) abgebaut."
  },
  {
    "id": "k7_bio_037",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Betreiben grüne Pflanzen auch in der Nacht Zellatmung?",
    "answers": [
      "Nur bei Vollmond",
      "Nein, nur am Tage",
      "Ja, kontinuierlich",
      "Nein, nie im Leben"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pflanzen benötigen auch nachts Energie u. atmen dauerhaft."
  },
  {
    "id": "k7_bio_038",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wann betreiben grüne Pflanzen Fotosynthese?",
    "answers": [
      "Nur bei Lichtzufuhr",
      "Tag u. Nacht lang",
      "Nur in Dunkelheit",
      "Nur im tiefen Winter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lichtenergie ist zwingende Voraussetzung für die Reaktion der Fotosynthese."
  },
  {
    "id": "k7_bio_039",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Gas geben grüne Pflanzen bei der Fotosynthese an die Umgebung ab?",
    "answers": [
      "Gas: Sauerstoff",
      "Gas: Methangas",
      "Gas: Kohlenstoff",
      "Gas: Stickstoff"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sauerstoff fällt als Nebenprodukt der Wasserspaltung an."
  },
  {
    "id": "k7_bio_040",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Gas entnehmen Pflanzen der Luft bei der Fotosynthese?",
    "answers": [
      "Edelgas Helium",
      "Stickstoffgas",
      "Reinen Sauerstoff",
      "Kohlenstoffdioxid"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kohlenstoffdioxid ($CO_2$) liefert den Kohlenstoffbaustein für Glucose."
  },
  {
    "id": "k7_bio_041",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man unter der 'Transpiration' bei Pflanzen?",
    "answers": [
      "Wasserverdunstung",
      "Nährstoffaufnahme",
      "Blütenbestäubung",
      "Samenverbreitung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Transpiration ist die regulierte Verdunstung von Wasser über die Blätter."
  },
  {
    "id": "k7_bio_042",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Leitgewebe transportiert Wasser u. Mineralien von den Wurzeln nach oben?",
    "answers": [
      "Die Oberhautzelle",
      "Die Rindenschicht",
      "Das Xylemgewebe",
      "Das Phloemgewebe"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Xylem leitet Wasser u. gelöste Mineralsalze aufwärts."
  },
  {
    "id": "k7_bio_043",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Leitgewebe transportiert im Blatt erzeugte Zuckerlösungen im Pflanzenkörper?",
    "answers": [
      "Die Wurzelhaare",
      "Das Phloemgewebe",
      "Das Xylemgewebe",
      "Die Spaltöffnung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Phloem (Siebteil) leitet organische Stoffe zu Verbrauchs- u. Speicherorten."
  },
  {
    "id": "k7_bio_044",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was beschreibt die autotrophe Ernährungsweise von Pflanzen?",
    "answers": [
      "Fremdversorgung",
      "Parasitäres Leben",
      "Fleischfressend",
      "Selbstversorgung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Autotrophie bedeutet, aus anorganischen Stoffen organische Nährstoffe selbst aufzubauen."
  },
  {
    "id": "k7_bio_045",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was beschreibt die heterotrophe Ernährungsweise von Tieren u. Pilzen?",
    "answers": [
      "Selbstversorgung",
      "Fotosynthetisch",
      "Anorganisch rein",
      "Fremdversorgung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Heterotrophe Organismen müssen bereits hergestellte organische Nahrung aufnehmen."
  },
  {
    "id": "k7_bio_046",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Gas bildet den Hauptbestandteil unserer Erdatmosphäre (ca. 78 %)?",
    "answers": [
      "Gas: Stickstoff",
      "Gas: Sauerstoff",
      "Gas: Argongas",
      "Gas: Kohlenstoff"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stickstoff macht rund 78 % des Luftvolumens aus."
  },
  {
    "id": "k7_bio_047",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie hoch ist der Sauerstoffanteil in unserer Atemluft etwa?",
    "answers": [
      "Anteil: ca. 21 %",
      "Anteil: ca. 10 %",
      "Anteil: ca. 78 %",
      "Anteil: ca. 50 %"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sauerstoff nimmt etwa 21 Vol.-% der Atmosphäre ein."
  },
  {
    "id": "k7_bio_048",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was bewirkt der natürliche Treibhauseffekt in der Atmosphäre?",
    "answers": [
      "Regenbildung Ozean",
      "Abkühlung Erde",
      "Erwärmung der Erde",
      "Auslöschung Licht"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Er hält Wärmestrahlung zurück u. ermöglicht überhaupt erst lebensfreundliche Temperaturen."
  },
  {
    "id": "k7_bio_049",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Gas gilt als Hauptverursacher des menschlich verstärkten Treibhauseffekts?",
    "answers": [
      "Reiner Stickstoff",
      "Sauerstoffgas",
      "Kohlenstoffdioxid",
      "Edelgas Argon"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$CO_2$-Emissionen durch Verbrennung fossiler Stoffe verstärken die Erwärmung."
  },
  {
    "id": "k7_bio_050",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Warum sind Wälder für das Weltklima als Kohlenstoffspeicher von großer Bedeutung?",
    "answers": [
      "Kühlen Ozeanwasser",
      "Stoppen Erdbeben",
      "Binden CO2 im Holz",
      "Erzeugen Methangas"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bäume entziehen der Atmosphäre $CO_2$ u. speichern Kohlenstoff dauerhaft in Holz u. Humus."
  },

  // --- NAHRUNGSKETTEN, NAHRUNGSNETZE & ÖKOLOGISCHE NISCHEN (051 - 075) ---
  {
    "id": "k7_bio_051",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie nennt man die erste Stufe einer Nahrungskette (z. B. grüne Pflanzen)?",
    "answers": [
      "Die Parasiten",
      "Die Destruenten",
      "Die Produzenten",
      "Die Konsumenten"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Produzenten stellen die organische Grundmasse für alle anderen Trophieebenen her."
  },
  {
    "id": "k7_bio_052",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie beurteilt man Pflanzenfresser (Herbivoren) in der Nahrungskette?",
    "answers": [
      "Die Produzenten",
      "Konsument 2. Ordnung",
      "Konsument 1. Ordnung",
      "Die Destruenten"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pflanzenfresser (Erstverbraucher) fressen direkt die Produzenten."
  },
  {
    "id": "k7_bio_053",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie beurteilt man Fleischfresser (Karnivoren), die Pflanzenfresser jagen?",
    "answers": [
      "Konsument 2. Ordnung",
      "Die Zersetzer",
      "Konsument 1. Ordnung",
      "Die Produzenten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fleischfresser (Zweitverbraucher) ernähren sich von Konsumenten 1. Ordnung."
  },
  {
    "id": "k7_bio_054",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wer steht am Ende einer Nahrungskette u. hat in der Regel keine Fressfeinde?",
    "answers": [
      "Der Krautfresser",
      "Der Endverbraucher",
      "Der Ersterzeuger",
      "Der Pflanzenkeim"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spitzenräuber (Apex-Prädatoren) bilden das Ende der Nahrungskette."
  },
  {
    "id": "k7_bio_055",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Warum spricht man in natürlichen Ökosystemen meist von Nahrungsnetzen?",
    "answers": [
      "Starre Reihenfolge",
      "Nur ein Seilfaden",
      "Keine Räuber da",
      "Vielfältige Bezüge"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tiere nutzen meist mehrere Nahrungsquellen, was komplexe Netze bildet."
  },
  {
    "id": "k7_bio_056",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was beschreibt das Modell einer ökologischen Nahrungspyramide?",
    "answers": [
      "Zunahme der Tiere",
      "Wachstum im Boden",
      "Abnahme der Biomasse",
      "Gleichbleibende Zahl"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Biomasse u. Individuenzahl nehmen von Stufe zu Stufe nach oben deutlich ab."
  },
  {
    "id": "k7_bio_057",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie viel Prozent der Energie wird etwa von einer Nahrungsebene zur nächsten weitergegeben?",
    "answers": [
      "Etwa 50 Prozent",
      "Etwa 90 Prozent",
      "Etwa 100 Prozent",
      "Etwa 10 Prozent"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Zehn-Prozent-Regel besagt, dass rund 90 % der Energie unterwegs verloren gehen."
  },
  {
    "id": "k7_bio_058",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was geschieht mit den 90 % der Energie, die nicht in Biomasse übergehen?",
    "answers": [
      "Wird zu Stärke",
      "Wird zu Gestein",
      "Verdoppelt Masse",
      "Wärme u. Atmung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Energie wird durch Baustoffwechsel, Bewegung u. Wärmabgabe verbraucht."
  },
  {
    "id": "k7_bio_059",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man unter einer ökologischen Nische?",
    "answers": [
      "Gesamtheit Ansprüche",
      "Höhle im Felsen",
      "Versteck im Laub",
      "Schlafplatz Baum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die ökologische Nische beschreibt alle Umweltansprüche u. Wechselbeziehungen einer Art."
  },
  {
    "id": "k7_bio_060",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was besagt das ökologische Konkurrenzausschlussprinzip?",
    "answers": [
      "Gleiche Nische teilt",
      "Beute frisst Jäger",
      "Gleiche Nische meidet",
      "Alle Tiere siegen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei Arten mit identischer Nische können nicht dauerhaft im selben Lebensraum koexistieren."
  },
  {
    "id": "k7_bio_061",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man in der Biologie unter einer Symbiose?",
    "answers": [
      "Reiner Kampf Ort",
      "Vorteil für beide",
      "Tötung von Wirt",
      "Schaden für einen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Symbiose ist das Zusammenleben zweier Arten zum wechselseitigen Nutzen."
  },
  {
    "id": "k7_bio_062",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Beispiel zeigt eine klassische Symbiose im Ökosystem Wald?",
    "answers": [
      "Borkenkäfer Baum",
      "Fuchs u. Feldmaus",
      "Pilz u. Baumwurzel",
      "Zecke u. Rehwild"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mykorrhiza: Der Pilz liefert Mineralien, der Baum liefert Zucker aus Fotosynthese."
  },
  {
    "id": "k7_bio_063",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was bezeichnet man als Parasitismus?",
    "answers": [
      "Vorteil für beide",
      "Gemeinsames Jagen",
      "Freundliche Hilfe",
      "Einseitiger Nutzen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Parasit lebt auf Kosten eines Wirts, ohne ihn meist sofort zu töten."
  },
  {
    "id": "k7_bio_064",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Tier ist ein typischer Ektoparasit (Außenparasit) bei Säugetieren?",
    "answers": [
      "Die Waldbienenart",
      "Der Waldregenwurm",
      "Die Holzbock-Zecke",
      "Der Marienkäfer"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zecken leben als Ektoparasiten außen auf der Haut von Wirbeltieren."
  },
  {
    "id": "k7_bio_065",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was kennzeichnet einen Endoparasiten im Gegensatz zum Ektoparasiten?",
    "answers": [
      "Lebt auf der Haut",
      "Frisst nur Pflanzen",
      "Jagt freie Beute",
      "Lebt im Wirtskörper"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Endoparasiten (wie Bandwürmer) leben im Inneren ihres Wirts."
  },
  {
    "id": "k7_bio_066",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Organstruktur dient Vögeln zur perfekten Anpassung an ihre Nahrung?",
    "answers": [
      "Flügelspannweite",
      "Schnabelformen",
      "Federfarben bunt",
      "Schwanzfedern"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Körner-, Insekten- u. Fleischfresser besitzen spezialisierte Schnabelformen."
  },
  {
    "id": "k7_bio_067",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man unter Mimikry im Tierreich?",
    "answers": [
      "Kältestarre Winter",
      "Täuschung von Feinden",
      "Samenverbreitung",
      "Winterschlaf im Bau"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mimikry ist das Nachahmen der Warnsignale wehrhafter oder giftiger Arten."
  },
  {
    "id": "k7_bio_068",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Beispiel zeigt eine klassische Mimikry?",
    "answers": [
      "Chamäleon im Baum",
      "Schwebfliege wie Wespe",
      "Stabschrecke als Ast",
      "Eule in der Nacht"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die harmlose Schwebfliege imitiert die gelb-schwarze Warnfärbung der Wespe."
  },
  {
    "id": "k7_bio_069",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was versteht man unter Mimese im Tierreich?",
    "answers": [
      "Giftabgabe im Kampf",
      "Nachahmen Warnfarben",
      "Tarnung als Objekt",
      "Totenstellreflex"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mimese bezeichnet eine Tarnung, bei der das Tier wie ein Gegenstand (Ast, Blatt) aussieht."
  },
  {
    "id": "k7_bio_070",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Beispiel zeigt eine Mimese?",
    "answers": [
      "Schwebfliege als Wespe",
      "Pfeilgiftfrosch Rot",
      "Stabschrecke als Zweig",
      "Marienkäfer mit Punkt"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Stabschrecke sieht aus wie ein kleiner Holzschössling."
  },
  {
    "id": "k7_bio_071",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welcher Umweltfaktor begrenzt nach dem Liebigschen Minimumgesetz das Wachstum?",
    "answers": [
      "Der knappste Faktor",
      "Der Lichtfaktor",
      "Der meiste Faktor",
      "Der Wärmefaktor"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der am stärksten im Minimum befindliche Nährstoff bestimmt die Wachstumsgrenze."
  },
  {
    "id": "k7_bio_072",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was beschreibt die Toleranzkurve eines Organismus?",
    "answers": [
      "Größe des Reviers",
      "Vitalität bei Faktor",
      "Alter des Tieres",
      "Wachstum im Jahr"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Toleranzkurve zeigt das Gedeihen einer Art in Abhängigkeit von einem Umweltfaktor."
  },
  {
    "id": "k7_bio_073",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie nennt man den Bereich der Toleranzkurve mit den besten Lebensbedingungen?",
    "answers": [
      "Das Minimum",
      "Das Maximum",
      "Das Optimum",
      "Das Pessimum"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Optimum erreicht die Vitalität u. Fortpflanzung den Höchstwert."
  },
  {
    "id": "k7_bio_074",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie nennt man Arten mit einem sehr engen Toleranzbereich gegenüber Umweltfaktoren?",
    "answers": [
      "Stenöke Arten",
      "Ubiquitäre Arten",
      "Euryöke Arten",
      "Dominante Arten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stenöke Organismen (z. B. Koala) vertragen nur geringe Schwankungen."
  },
  {
    "id": "k7_bio_075",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie nennt man Arten mit einem sehr weiten Toleranzbereich gegenüber Umweltfaktoren?",
    "answers": [
      "Endemische Arten",
      "Seltene Arten",
      "Stenöke Arten",
      "Euryöke Arten"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Euryöke Organismen (z. B. Wanderratte) kommen mit großen Schwankungen gut zurecht."
  },

  // --- MIKROBIOLOGIE, ZELLEN & ORGANE (076 - 100) ---
  {
    "id": "k7_bio_076",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Zellorganell gilt als Steuerzentrale u. enthält die Erbinformation (DNA)?",
    "answers": [
      "Die Vakuole",
      "Die Zellwand",
      "Das Ribosom",
      "Der Zellkern"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Zellkern (Nukleus) steuert die Stoffwechselprozesse u. verwahrt die DNA."
  },
  {
    "id": "k7_bio_077",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Zellstruktur besitzt NUR die Pflanzenzelle, aber NICHT die Tierzelle?",
    "answers": [
      "Der Zellkern",
      "Die Zellwand",
      "Das Mitochondrium",
      "Das Zytoplasma"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die starre Zellwand aus Zellulose verleiht pflanzlichen Zellen Stabilität."
  },
  {
    "id": "k7_bio_078",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wozu dient die große Zentralvakuole in einer pflanzlichen Zelle?",
    "answers": [
      "Erzeugt Glucose",
      "Speichert Zellsaft",
      "Baut Proteine ab",
      "Steuert Vererbung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Vakuole speichert Zellsaft, Abfallstoffe u. erzeugt den Zellinnendruck (Turgor)."
  },
  {
    "id": "k7_bio_079",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Organell bezeichnet man als Kraftwerk der Zelle?",
    "answers": [
      "Der Chloroplast",
      "Das Mitochondrium",
      "Der Zellkern",
      "Die Zellmembran"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mitochondrien gewinnen durch Zellatmung Energie."
  },
  {
    "id": "k7_bio_080",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Woraus besteht die feste Zellwand bei grünen Pflanzen hauptsächlich?",
    "answers": [
      "Aus Keratinfett",
      "Aus Zellulose",
      "Aus Chitinharz",
      "Aus Kalkstein"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zellulose bildet die stabilisierenden Gerüstfasern der pflanzlichen Zellwand."
  },
  {
    "id": "k7_bio_081",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Woraus besteht die Zellwand bei Pilzen hauptsächlich?",
    "answers": [
      "Aus Stärkemehl",
      "Aus Chitin",
      "Aus Keratin",
      "Aus Zellulose"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pilzzellwände bestehen im Gegensatz zu Pflanzen aus Chitin."
  },
  {
    "id": "k7_bio_082",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches einzellige Lebewesen bewegt sich im Wasser mithilfe vieler Wimpern fort?",
    "answers": [
      "Das Pantoffeltierchen",
      "Die Bäckerhefe",
      "Die Amöbe im Teich",
      "Das Augentierchen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Pantoffeltierchen (Paramecium) ist ein bekannter Wimperninfusor."
  },
  {
    "id": "k7_bio_083",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie bewegt sich eine Amöbe (Wechseltierchen) im Wasser fort?",
    "answers": [
      "Durch Geißeln lang",
      "Durch Wimpernhaare",
      "Durch Rückstoß",
      "Durch Scheinfüßchen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Amöben bilden veränderliche Plasmavorstülpungen (Pseudopodien/Scheinfüßchen)."
  },
  {
    "id": "k7_bio_084",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welcher Einzeller besitzt Chloroplasten u. kann sich sowohl autotroph als auch heterotroph ernähren?",
    "answers": [
      "Das Augentierchen",
      "Bakterienzelle",
      "Die Wechselamöbe",
      "Das Pantoffeltierchen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Euglena (Augentierchen) nutzt bei Licht Fotosynthese u. nimmt sonst gelöste Stoffe auf."
  },
  {
    "id": "k7_bio_085",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Organell dient Süßwassereinzellern zur Ausscheidung von überschüssigem Wasser?",
    "answers": [
      "Nahrungsvakuole",
      "Zellmund Öffnung",
      "Zellafter Punkt",
      "Pulsierende Vakuole"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die kontraktile (pulsierende) Vakuole pumpt eingedrungenes Wasser aktiv nach außen."
  },
  {
    "id": "k7_bio_086",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Hauptorgan nimmt Sauerstoff auf u. gibt Kohlenstoffdioxid ab?",
    "answers": [
      "Die Lunge",
      "Die Leber",
      "Der Magen",
      "Die Niere"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Lunge ist das zentral ausführende Atmungsorgan des Menschen."
  },
  {
    "id": "k7_bio_087",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "In welchen feinen Strukturen des Lungengewebes findet der Gasaustausch statt?",
    "answers": [
      "In den Lungenbläschen",
      "In den Bronchien",
      "Im Kehlkopfraum",
      "In der Luftröhre"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alveolen (Lungenbläschen) besitzen hauchdünne Wände zur Diffusion der Gase ins Blut."
  },
  {
    "id": "k7_bio_088",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welcher große Muskel trennt Brust- u. Bauchraum u. ist Hauptmuskel der Einatmung?",
    "answers": [
      "Der Rumpfmuskel",
      "Der Herzmuskel",
      "Der Bauchmuskel",
      "Das Zwerchfell"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Zwerchfell vergrößert beim Anspannen den Brustraum (Bauchatmung)."
  },
  {
    "id": "k7_bio_089",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Blutgefäße transportieren Blut vom Herzen weg in den Körper?",
    "answers": [
      "Die Venen",
      "Kapillaren",
      "Lymphgefäße",
      "Die Arterien"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Arterien leiten das Blut unter hohem Druck vom Herzen weg."
  },
  {
    "id": "k7_bio_090",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Blutgefäße führen das Blut aus den Organen zurück zum Herzen?",
    "answers": [
      "Aortabogen",
      "Kapillaren",
      "Die Arterien",
      "Die Venen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Venen transportieren das Blut zum Herzen zurück u. haben Venenklappen."
  },
  {
    "id": "k7_bio_091",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Zellen des Blutes sind für den Transport von Sauerstoff zuständig?",
    "answers": [
      "Das Blutplasma",
      "Die Blutplättchen",
      "Rote Blutkörperchen",
      "Weiße Blutkörperchen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Erythrozyten (rote Blutkörperchen) binden Sauerstoff an Hämoglobin."
  },
  {
    "id": "k7_bio_092",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Blutkörperchen dienen der Bekämpfung von Krankheitserregern?",
    "answers": [
      "Weiße Blutkörperchen",
      "Das Hämoglobin",
      "Die Blutplättchen",
      "Rote Blutkörperchen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Leukozyten (weiße Blutkörperchen) bilden das Immunsystem des Körpers."
  },
  {
    "id": "k7_bio_093",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Bestandteile des Blutes ermöglichen die Wundgerinnung?",
    "answers": [
      "Weiße Blutkörperchen",
      "Das Wundwasser",
      "Die Blutplättchen",
      "Rote Blutkörperchen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Thrombozyten (Blutplättchen) leiten bei Verletzungen die Blutgerinnung ein."
  },
  {
    "id": "k7_bio_094",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Organ zerkleinert Nahrung mechanisch u. weicht sie enzymatisch ein?",
    "answers": [
      "Der Magenraum",
      "Der Dickdarm",
      "Der Dünndarm",
      "Mundraum u. Zähne"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Mund erfolgt die mechanische Zerkleinerung u. Einspeichelung."
  },
  {
    "id": "k7_bio_095",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "In welchem Abschnitt des Verdauungstrakts werden die Hauptnährstoffe ins Blut aufgenommen?",
    "answers": [
      "Der Dünndarm",
      "Der Dickdarm",
      "Die Speiseröhre",
      "Der Magen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Darmzotten im Dünndarm resorbieren Nährstoffbausteine ins Blut."
  },
  {
    "id": "k7_bio_096",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welcher Abschnitt des Verdauungstrakts entzieht dem unverdaulichen Brei vor allem Wasser?",
    "answers": [
      "Der Dünndarm",
      "Der Mundraum",
      "Der Magen",
      "Der Dickdarm"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Dickdarm dickt den Darminhalt durch Wasserentzug zum Stuhl ein."
  },
  {
    "id": "k7_bio_097",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Organ bildet die Gallensaft-Flüssigkeit zur Fettverdauung?",
    "answers": [
      "Die Niere",
      "Die Leber",
      "Der Magen",
      "Die Milz"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Leber produziert Gallensaft, der Fette im Dünndarm emulgiert."
  },
  {
    "id": "k7_bio_098",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welches Enzym im Speichel spaltet Kohlenhydrate (Stärke) bereits im Mund?",
    "answers": [
      "Das Enzym Lactase",
      "Das Enzym Pepsin",
      "Das Enzym Amylase",
      "Das Enzym Lipase"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Speichel-Amylase baut Stärke zu Malzzucker (Maltose) ab."
  },
  {
    "id": "k7_bio_099",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Was schützt die Magenwand vor der Verätzung durch die eigene Magensäure?",
    "answers": [
      "Eine Knorpelschicht",
      "Eine Schleimhaut",
      "Eine Fettschicht",
      "Eine Hornschicht"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine dicke Schleimschicht isoliert die Magenwand gegen die Salzsäure."
  },
  {
    "id": "k7_bio_099_b",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Welche Hauptfunktion erfüllen die menschlichen Nieren im Körper?",
    "answers": [
      "Aufnahme von Sauerstoff",
      "Filterung des Blutes",
      "Verdauung von Fett",
      "Speicherung von Zucker"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nieren filtern Stoffwechselabfälle u. Überschüssiges Wasser aus dem Blut heraus."
  },
  {
    "id": "k7_bio_100",
    "category": "k7_biologie",
    "area": "schule",
    "grade": 7,
    "subject": "biologie",
    "question": "Wie nennt man die kleinste funktionelle u. lebende Bauheinheit von Organismen?",
    "answers": [
      "Das biologische Organ",
      "Die biologische Zelle",
      "Das Gewebestück",
      "Der Molekülbaustein"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Zelle ist die grundlegende Struktur- u. Funktionseinheit aller Lebewesen."
  },
  {"id":"k7bi101","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Photosynthese in …","answers":["Mitochondrien","Chloroplasten","Zellkern","Ribosomen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Chloroplasten."},
  {"id":"k7bi102","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"DNA-Base A paart mit …","answers":["G","T","C","U"],"correct":1,"difficulty":"mittel","points":10,"explanation":"T."},
  {"id":"k7bi103","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Mitose erzeugt …","answers":["Gameten","Körperzellen diploid","Mutationen","Viren"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Körperzellen."},
  {"id":"k7bi104","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Enzyme sind meist …","answers":["Lipide","Proteine","DNA","Zucker"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Proteine."},
  {"id":"k7bi105","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Ökosystem = …","answers":["nur Tiere","Lebewesen + Umwelt","nur Klima","nur Boden"],"correct":1,"difficulty":"mittel","points":10,"explanation":"System."},
  {"id":"k7bi106","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Antibiotika gegen …","answers":["Viren","Bakterien","Knochen","Allergie"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Bakterien."},
  {"id":"k7bi107","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Selektion wirkt auf …","answers":["Genotyp immer sichtbar","Fitness","Mode","Zufall"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Fitness."},
  {"id":"k7bi108","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Blut transportiert …","answers":["nur Wasser","O₂/Nährstoffe","Knochen","Licht"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Stoffe."},
  {"id":"k7bi109","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Nerven leiten …","answers":["Blut","Impulse","Luft","Knochen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Erregung."},
  {"id":"k7bi110","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Biodiversität = …","answers":["eine Art","Vielfalt","Klima","Städte"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Vielfalt."},
  {"id":"k7bi111","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Impfung aktiviert …","answers":["Verdauung","Immunsystem","Muskeln","Gehör"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Immun."},
  {"id":"k7bi112","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Zellatmung in …","answers":["Chloroplast","Mitochondrien","Zellwand","Vakuole"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Mitochondrien."},
  {"id":"k7bi113","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Art = …","answers":["beliebige Tiere","fortpflanzungsfähige Gruppe","Farbe","Größe"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Art."},
  {"id":"k7bi114","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Parasit … dem Wirt.","answers":["nützt","schadet","neutral","ersetzt"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Schaden."},
  {"id":"k7bi115","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Gene auf …","answers":["Blut","Chromosomen","Zähnen","Haaren"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Chromosomen."},
  {"id":"k7bi116","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Nachhaltigkeit: …","answers":["erschöpfen","Tragfähigkeit achten","nur Konsum","nur Wachstum"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Grenzen."},
  {"id":"k7bi117","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Haut schützt vor …","answers":["nur Kälte","Keimen u. a.","Schall","Magneten"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Schutz."},
  {"id":"k7bi118","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Bestäubung = …","answers":["Kernverschmelzung","Pollenübertragung","Keimung","Photosynthese"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Pollen."},
  {"id":"k7bi119","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Population = …","answers":["alle Arten","Art im Gebiet","Pflanzen","Klima"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Population."},
  {"id":"k7bi120","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Viren sind …","answers":["Zellen","keine vollständigen Zellen","Pflanzen","Bakterien"],"correct":1,"difficulty":"mittel","points":10,"explanation":"akaryotisch."},
  {"id":"k7bi121","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Nahrungskette start: …","answers":["Fleischfresser","Produzenten","Menschen","Pilze"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Pflanzen."},
  {"id":"k7bi122","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Insulin beeinflusst …","answers":["Hören","Blutzucker","Knochenfarbe","Haare"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Glucose."},
  {"id":"k7bi123","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Mutation = …","answers":["immer tödlich","DNA-Änderung","nur Phänotyp","Sport"],"correct":1,"difficulty":"mittel","points":10,"explanation":"DNA."},
  {"id":"k7bi124","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Symbiose: beide …","answers":["schaden","profitieren","neutral","parasitär"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Nutzen."},
  {"id":"k7bi125","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Lunge nimmt … auf.","answers":["CO₂","O₂","N₂","He"],"correct":1,"difficulty":"mittel","points":10,"explanation":"O₂."},
  {"id":"k7bi126","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Zellmembran ist …","answers":["starr","selektiv permeabel","dicht total","DNA"],"correct":1,"difficulty":"mittel","points":10,"explanation":"selektiv."},
  {"id":"k7bi127","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Insektenbeine: …","answers":["4","6","8","10"],"correct":1,"difficulty":"mittel","points":10,"explanation":"6."},
  {"id":"k7bi128","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Winterschlaf spart …","answers":["Licht","Energie","Wasser","Luft"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Energie."},
  {"id":"k7bi129","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Gentechnik greift in … ein.","answers":["Verhalten","Erbgut","Wetter","Sport"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Genom."},
  {"id":"k7bi130","category":"k7_biologie","area":"schule","grade":7,"subject":"biologie","topic":"erweiterung","question":"Artenschutz in situ = …","answers":["Zoo","im Lebensraum","Labor","Museum"],"correct":1,"difficulty":"mittel","points":10,"explanation":"vor Ort."}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K7_BIOLOGIE_QUESTIONS = K7_BIOLOGIE_QUESTIONS;
}