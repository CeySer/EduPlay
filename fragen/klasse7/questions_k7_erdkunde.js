// ================================================================
// KLASSE 7 - ERDKUNDE (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K7_ERDKUNDE_QUESTIONS = [
  // --- KLIMA- & VEGETATIONSZONEN DER ERDE (001 - 025) ---
  {
    "id": "k7_ek_001",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Merkmale kennzeichnen das Tageszeitenklima in den inneren Tropen?",
    "answers": [
      "Schwankung am Tag höher",
      "Frost in der Nacht stets",
      "Kälte im Sommer dauerhaft",
      "Schwankung im Jahr höher"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In den Tropen sind die Temperaturschwankungen zwischen Tag u. Nacht größer als die Unterschiede zwischen den Monaten."
  },
  {
    "id": "k7_ek_002",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter dem Begriff 'Passatzirkulation'?",
    "answers": [
      "Tropisches Windsystem",
      "Polarer Kaltluftstrom",
      "Lokaler Bergwind Abend",
      "Meeresströmung Pazifik"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Passatzirkulation ist ein weltumspannendes Windsystem zwischen den Wendekreisen u. dem Äquator."
  },
  {
    "id": "k7_ek_003",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "In welche Richtung weht der Nordostpassat auf der Nordhalbkugel?",
    "answers": [
      "Von Nordwest nach Südost",
      "Von Nordost nach Südwest",
      "Von Südwest nach Nordost",
      "Von Südost nach Nordwest"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Winde werden nach der Richtung benannt, aus der sie kommen (aus Nordost wehend nach Südwest)."
  },
  {
    "id": "k7_ek_004",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt die Innertropische Konvergenzzone (ITC)?",
    "answers": [
      "Tiefdruckgürtel Äquator",
      "Wüstengürtel der Erde",
      "Kältezone der Antarktis",
      "Hochdruckgebiet Pole"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An der ITC treffen die Passatwinde am Äquator zusammen u. steigen durch Erwärmung auf."
  },
  {
    "id": "k7_ek_005",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Wüstenart entsteht im Bereich der subtropischen Hochdruckgürtel?",
    "answers": [
      "Die Binnenlandwüste",
      "Die Wendekreiswüste",
      "Die Regenschattenwüste",
      "Die Küstenwüste kalt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Absinkende Luftmassen erwärmen sich u. verhindern Wolkenbildung, wodurch Wendekreiswüsten entstehen."
  },
  {
    "id": "k7_ek_006",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Wüstenart entsteht durch kalte Meeresströmungen an Westküsten?",
    "answers": [
      "Die Eiswüste Nord",
      "Die Küstenwüste",
      "Die Binnenlandwüste",
      "Die Wendekreiswüste"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kalte Meeresströmungen kühlen die Luft ab; es entsteht Nebel, aber kein Regen (z. B. Atacama, Namib)."
  },
  {
    "id": "k7_ek_007",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie heißen die drei typischen Savannentypen von feucht nach trocken?",
    "answers": [
      "Feucht-, Trocken-, Dorn",
      "Gras-, Wald-, Strauchzone",
      "Steppe-, Wüste-, Tundra",
      "Dorn-, Trocken-, Feucht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mit zunehmender Entfernung vom Äquator folgen Feuchtsavanne, Trockensavanne u. Dornsavanne."
  },
  {
    "id": "k7_ek_008",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie zeichnet sich das Klima der Feuchtsavanne im Jahresverlauf aus?",
    "answers": [
      "2 bis 4 Monate Regenzeit",
      "Ganzjährig voller Frost",
      "Keine Regenzeit im Jahr",
      "7 bis 9 Monate Regenzeit"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Feuchtsavannen besitzen eine lange Regenzeit von 7 bis 9 Monaten u. hohe Grasbestände."
  },
  {
    "id": "k7_ek_009",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie zeichnet sich das Klima der Dornsavanne im Jahresverlauf aus?",
    "answers": [
      "Ganzjährig hohe Regen",
      "2 bis 4 Monate Regenzeit",
      "Keine Trockenzeit vorhanden",
      "7 bis 9 Monate Regenzeit"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dornsavannen weisen nur kurze Regenzeiten von 2 bis 4 Monaten u. dornige Sträucher auf."
  },
  {
    "id": "k7_ek_010",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt das Phänomen der Desertifikation?",
    "answers": [
      "Vereisung von Bergen",
      "Überflutung von Küsten",
      "Aufforstung von Wald",
      "Ausbreitung von Wüsten"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Desertifikation ist die Verschlechterung der Böden in trockenen Regionen durch Übernutzung u. Klimawandel."
  },
  {
    "id": "k7_ek_011",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wo liegt der tropische Regenwald größtenteils auf unserer Erde?",
    "answers": [
      "In der gemäßigten Zone",
      "Entlang des Äquators",
      "Am nördlichen Polarkreis",
      "An den Wendekreisen nur"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der tropische Regenwald erstreckt sich rund um den Äquator in Südamerika, Afrika u. Südostasien."
  },
  {
    "id": "k7_ek_012",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Eigenschaft besitzt der Nährstoffkreislauf im tropischen Regenwald?",
    "answers": [
      "Keine Nährstoffe vorhanden",
      "Aufnahme in der Biomass",
      "Speicherung tief im Boden",
      "Nährstoffe in Felsen drin"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Boden ist nährstoffarm; fast alle Nährstoffe zirkulieren direkt in der lebenden Biomasse."
  },
  {
    "id": "k7_ek_013",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man die traditionelle, nachhaltige Feldbauform der indigenen Regenwaldbewohner?",
    "answers": [
      "Wanderfeldbau (Shifting)",
      "Intensiver Plantagenanbau",
      "Bewässerter Terrassenbau",
      "Mechanisierter Ackerbau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Wanderfeldbau (Shifting Cultivation) werden kleine Flächen gerodet, kurz genutzt u. dann wieder ruhen gelassen."
  },
  {
    "id": "k7_ek_014",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter dem 'Stockwerkbau' des tropischen Regenwaldes?",
    "answers": [
      "Schichtung der Pflanzen",
      "Stufen im Gebirgshang",
      "Schichten im Ackerboden",
      "Bauen von Holzhäusern"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Regenwald gliedert sich von Krautschicht über Strauch- u. Kronenschicht bis zu den Urwaldriesen."
  },
  {
    "id": "k7_ek_015",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Klima- u. Vegetationszone schließt nördlich an die gemäßigte Zone an?",
    "answers": [
      "Die Subtropische Übergangszone",
      "Die Boreal- / Polarsektor",
      "Der Äquatoriale Feuchtgürtel",
      "Die Mediterrane Klimazone"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nördlich folgt die subpolare u. polare Zone mit Taiga (borealem Nadelwald) u. Tundra."
  },
  {
    "id": "k7_ek_016",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was bezeichnet man als 'Taiga' in der Geographie?",
    "answers": [
      "Baumlose Kältesteppe",
      "Borealer Nadelwald",
      "Subtropische Matorral",
      "Tropischer Feuchtwald"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Taiga ist die russische Bezeichnung für die ausgedehnten borealen Nadelwälder Amerikas u. Eurasiens."
  },
  {
    "id": "k7_ek_017",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was bezeichnet man als 'Tundra' in der Geographie?",
    "answers": [
      "Trockene Steppenzone",
      "Feuchtwarmer Regenwald",
      "Dichter Nadelwaldgürtel",
      "Baumlose Kältesteppe"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Tundra ist die baumfreie Vegetation der Subpolarzone mit Flechten, Moosen u. Zwergsträuchern."
  },
  {
    "id": "k7_ek_018",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter dem Begriff 'Permafrostboden'?",
    "answers": [
      "Kein Eis im Boden",
      "Immer sommerlich heiß",
      "Nur im Winter eisig",
      "Dauerhaft gefroren"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Permafrostböden bleiben ab einer gewissen Tiefe das ganze Jahr über gefroren."
  },
  {
    "id": "k7_ek_019",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Eigenschaft kennzeichnet das maritime (ozeanische) Klima?",
    "answers": [
      "Ganzjährig ohne Regen",
      "Extreme Hitze im Juli",
      "Milde Winter, kühle Sommer",
      "Kalte Winter, heiße Sommer"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Meer wirkt als Wärmespeicher, was die Jahrestemperaturschwankungen deutlich ausgleicht."
  },
  {
    "id": "k7_ek_020",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Eigenschaft kennzeichnet das kontinentale Klima im Landesinneren?",
    "answers": [
      "Hohe Niederschläge stets",
      "Kalte Winter, heiße Sommer",
      "Ganzjährig konstant 20°C",
      "Milde Winter, kühle Sommer"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wegen fehlendem Meereseinfluss sind die Temperaturunterschiede zwischen Sommer u. Winter sehr groß."
  },
  {
    "id": "k7_ek_021",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt ein humider Klimazustand in einem Klimadiagramm?",
    "answers": [
      "Niederschlag = 0 mm stets",
      "Niederschlag < Verdunstung",
      "Niederschlag > Verdunstung",
      "Temperatur unter 0 Grad"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Humid (feucht) bedeutet, dass mehr Niederschlag fällt, als im selben Zeitraum verdunsten kann."
  },
  {
    "id": "k7_ek_022",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt ein arider Klimazustand in einem Klimadiagramm?",
    "answers": [
      "Niederschlag < Verdunstung",
      "Niederschlag > Verdunstung",
      "Gefrierpunkt im Sommer",
      "Niederschlag sehr hoch"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Arid (trocken) bedeutet, dass die potentielle Verdunstung höher ist als die Niederschlagsmenge."
  },
  {
    "id": "k7_ek_023",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welcher Breitengrad markiert den nördlichen Wendekreis?",
    "answers": [
      "90 Grad Nordpol",
      "0 Grad Äquator",
      "66,5 Grad Nord",
      "23,5 Grad Nord"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der nördliche Wendekreis (Wendekreis des Krebses) liegt bei ca. 23,5° nördlicher Breite."
  },
  {
    "id": "k7_ek_024",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Folgen hat die Neigung der Erdachse (23,5°) bei der Erdumkreisung?",
    "answers": [
      "Entstehung Jahreszeiten",
      "Entstehung Tag u. Nacht",
      "Entstehung von Ebbe/Flut",
      "Entstehung von Vulkanen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch die geneigte Achse verändert sich der Einstrahlungswinkel der Sonne im Jahresverlauf."
  },
  {
    "id": "k7_ek_025",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter der Oase in Wüstengebieten?",
    "answers": [
      "Salzsee ohne Leben",
      "Reiner Dünensandhaufen",
      "Felsformation hoch",
      "Vegetation mit Wasser"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Oase ist ein vegetationsreicher Ort in der Wüste mit gesicherter Wasserversorgung."
  },

  // --- PLATTENTEKTONIK: VULKANE, ERDBEBEN & GEBIRGSBILDUNG (026 - 050) ---
  {
    "id": "k7_ek_026",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wer begründete 1912 die wissenschaftliche Theorie der Kontinentalverschiebung?",
    "answers": [
      "James Cook Seefahrer",
      "Alfred Wegener",
      "Alexander Humboldt",
      "Charles Darwin"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der deutsche Meteorologe u. Geowissenschaftler Alfred Wegener postulierte das Driften der Kontinente."
  },
  {
    "id": "k7_ek_027",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie hieß der Urkontinent, der vor rund 250 Mio. Jahren alle Landmassen vereinte?",
    "answers": [
      "Der Kontinent Gondwana",
      "Der Kontinent Atlantis",
      "Der Kontinent Laurasia",
      "Der Kontinent Pangaea"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pangaea (Griechisch für 'alles Land') brach später in Gondwana u. Laurasia auseinander."
  },
  {
    "id": "k7_ek_028",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Woraus besteht die äußere starre Hülle unserer Erde (Lithosphäre)?",
    "answers": [
      "Nur aus Erdkern Eisen",
      "Nur aus flüssiger Lava",
      "Nur aus ozeanischer Kruste",
      "Erdkruste u. Oberer Mantel"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Lithosphäre setzt sich aus der Erdkruste u. dem obersten festen Teil des Erdmantels zusammen."
  },
  {
    "id": "k7_ek_029",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Kräfte im zähflüssigen Erdmantel treiben die Plattenbewegung an?",
    "answers": [
      "Die Gezeitenkräfte Mond",
      "Konvektionsströmungen",
      "Magnetische Feldlinien",
      "Winde der Atmosphäre"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Hitze im Erdinneren erzeugt vertikale Konvektionsströme aus geschmolzenem Gestein."
  },
  {
    "id": "k7_ek_030",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man eine Plattengrenze, an der sich zwei Platten voneinander wegbewegen?",
    "answers": [
      "Konvergierende Grenze",
      "Subduktionszone Rand",
      "Divergierende Grenze",
      "Transformstörung Zone"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Divergierend bedeutet auseinanderdriften (z. B. am Mittelatlantischen Rücken)."
  },
  {
    "id": "k7_ek_031",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man eine Plattengrenze, an der zwei Platten aufeinander prallen?",
    "answers": [
      "Transformstörung Zone",
      "Divergierende Grenze",
      "Konvergierende Grenze",
      "Seafloor-Spreading Ort"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konvergieren heißt aufeinander zubewegen, was zur Faltung oder Subduktion führt."
  },
  {
    "id": "k7_ek_032",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man eine Plattengrenze, an der Platten seitlich aneinander vorbeigleiten?",
    "answers": [
      "Kollisionszone Berg",
      "Divergenzzone Naht",
      "Subduktionszone Tief",
      "Transformstörung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Transformstörungen (z. B. San-Andreas-Graben) führen oft zu starken Verhaken u. Erdbeben."
  },
  {
    "id": "k7_ek_033",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man in der Geologie unter dem Begriff 'Subduktion'?",
    "answers": [
      "Hebung eines Gebirges",
      "Aufbrechen eines Grabens",
      "Aufschmelzen von Eis",
      "Abtauchen einer Platte"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die schwerere ozeanische Platte taucht unter die leichtere kontinentale Platte ab."
  },
  {
    "id": "k7_ek_034",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Oberflächenform entsteht am Meeresboden im Bereich einer Subduktionszone?",
    "answers": [
      "Der Tiefseegraben",
      "Das unterseeische Plateau",
      "Der Mittelozeanische Rücken",
      "Die flache Koralleninsel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch das Abtauchen der Kruste entstehen kilometertiefe Rinnen im Ozean (z. B. Marianengraben)."
  },
  {
    "id": "k7_ek_035",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie entstand das Himalayagebirge tektonisch im Laufe der Erdgeschichte?",
    "answers": [
      "Kollision Indien-Asien",
      "Auseinanderdriften Pazifik",
      "Vulkanismus im Atlantik",
      "Absinken von Europa"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der indische Kontinent krachte auf die eurasische Platte u. faltete das Gebirge hoch."
  },
  {
    "id": "k7_ek_036",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie unterscheidet sich geschmolzenes Gestein unterhalb u. oberhalb der Erdoberfläche?",
    "answers": [
      "Unten Lava, oben Magma",
      "Beides heißt Granitgestein",
      "Unten Magma, oben Lava",
      "Beides wird Lava genannt"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Solange sich die Gesteinsschmelze im Erdinneren befindet, heißt sie Magma; tritt sie aus, Lava."
  },
  {
    "id": "k7_ek_037",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was kennzeichnet einen Schichtvulkan (Stratovulkan) im Aussehen u. Verhalten?",
    "answers": [
      "Flach u. sehr ruhig fließend",
      "Breit ohne Kraterform",
      "Rund wie eine Kuppel",
      "Steil u. explosionsartig"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schichtvulkane haben zähflüssige Lava, wechseln Asche u. Lava ab u. brennen explosiv."
  },
  {
    "id": "k7_ek_038",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was kennzeichnet einen Schildvulkan im Aussehen u. Verhalten?",
    "answers": [
      "Steil u. explosionsartig",
      "Flach u. dünnflüssig",
      "Enge Aschekegelspitze",
      "Keine Lavaförderung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schildvulkane (z. B. auf Hawaii) fördern sehr dünnflüssige Lava, die breit u. flach ausfließt."
  },
  {
    "id": "k7_ek_039",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man den Pazifischen Vulkangürtel mit extrem vielen aktiven Vulkanen?",
    "answers": [
      "Atlantischer Bebengraben",
      "Pazifischer Feuerring",
      "Gürtel der Geysirfelder",
      "Alpiner Vulkanbogen Süd"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 'Ring of Fire' umschließt den Pazifik an den Rändern mehrerer abtauchender Platten."
  },
  {
    "id": "k7_ek_040",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man den Punkt im Erdinneren, an dem ein Erdbeben entsteht?",
    "answers": [
      "Das Vulkanzentrum",
      "Das Hypozentrum",
      "Das Epizentrum",
      "Der Seismograph"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Hypozentrum (Bebenherd) liegt unter der Erde; das Epizentrum senkrecht darüber an der Oberfläche."
  },
  {
    "id": "k7_ek_041",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man den Punkt an der Erdoberfläche direkt über dem Erdbebenherd?",
    "answers": [
      "Das Hypozentrum",
      "Der Kraterrand",
      "Die Störungsnaht",
      "Das Epizentrum"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Am Epizentrum richtet das Beben an der Oberfläche in der Regel die stärksten Schäden an."
  },
  {
    "id": "k7_ek_042",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Mit welchem Instrument zeichnet man Erdbebenwellen wissenschaftlich auf?",
    "answers": [
      "Das Thermometer Grad",
      "Der Seismograph",
      "Das Barometer Luft",
      "Der Anemometer Wind"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Seismograph (Seismometer) misst Erschütterungen der Erdkruste hochpräzise."
  },
  {
    "id": "k7_ek_043",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Auf welcher geläufigen Skala wird die Stärke (Magnitude) von Erdbeben angegeben?",
    "answers": [
      "Die Richterskala",
      "Die Kelvin-Skala",
      "Die Beaufortskala",
      "Die Celsius-Skala"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die von Charles Richter entwickelte Skala misst die freigesetzte Energie im Hypozentrum."
  },
  {
    "id": "k7_ek_044",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie entsteht eine verheerende Flutwelle (Tsunami) im Ozean?",
    "answers": [
      "Starker Orkan an der Küste",
      "Seebeben hebt Meeresboden",
      "Ebbe- u. Flutwechsel im Meer",
      "Schmelzendes Packeis Pol"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Plötzliche vertikale Verschiebungen der Erdkruste unter dem Meer versetzen riesige Wassermassen in Schwingung."
  },
  {
    "id": "k7_ek_045",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was zählt zu den endogenen Kräften unseres Erdkörpers?",
    "answers": [
      "Gletscherschliff im Eis",
      "Vulkanismus u. Tektonik",
      "Starke Temperaturverwitterung",
      "Wind- u. Wassererosion Tal"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Endogene Kräfte wirken aus dem Erdinneren heraus (Magmatismus, Erdbeben, Plattenbewegung)."
  },
  {
    "id": "k7_ek_046",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was zählt zu den exogenen Kräften an der Erdoberfläche?",
    "answers": [
      "Magma im Erdmantel",
      "Erbeben im Untergrund",
      "Wind u. Regenwasser",
      "Plattenkollisionen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Exogene Kräfte wirken von außen durch Sonne, Wasser, Wind u. Eis formend auf das Relief ein."
  },
  {
    "id": "k7_ek_047",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man den Abtrag u. Transport von Gestein u. Boden durch Wasser oder Wind?",
    "answers": [
      "Der Begriff Subduktion",
      "Der Begriff Eruption",
      "Der Begriff Evaporation",
      "Der Begriff Erosion"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Erosion ist die physikalische Abtragung von Boden u. Gestein durch fließende Medien."
  },
  {
    "id": "k7_ek_048",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie entsteht ein sogenannter Hotspot (Heißer Fleck) mitten in einer Platte?",
    "answers": [
      "Zusammenstoß Platten",
      "Wirbelsturm im Meer",
      "Auseinanderbrechen Land",
      "Ortsfester Magmastrom"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Plume fördert schmelzheißes Magma aus der Tiefe an immer dieselbe Stelle unter der wandernden Kruste."
  },
  {
    "id": "k7_ek_049",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welches europäische Inselland entstand durch Vulkanismus am Mittelatlantischen Rücken?",
    "answers": [
      "Inselstaat Sizilien",
      "Inselstaat Irland",
      "Inselstaat Island",
      "Inselstaat Zypern"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Island liegt direkt auf dem Nahtbereich der amerikanischen u. eurasischen Platte."
  },
  {
    "id": "k7_ek_050",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was entsteht, wenn ein Einsturzkrater eines Vulkans sich mit Wasser füllt?",
    "answers": [
      "Eine Oase in Sand",
      "Eine Caldera See",
      "Ein Tiefseegraben",
      "Ein Geysir Becken"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stürzt die geleerte Magmakammer in sich zusammen, bildet sich eine kesselförmige Caldera."
  },

  // --- RESSOURCEN, ENERGIE & KLIMAWANDEL (051 - 075) ---
  {
    "id": "k7_ek_051",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Energieträger zählen zu den fossilen Brennstoffen?",
    "answers": [
      "Wind, Sonne u. Wasser",
      "Biomasse u. Brennholz",
      "Geothermie u. Uranerz",
      "Kohle, Erdöl, Erdgas"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fossile Energieträger entstanden vor Millionen Jahren aus abgestorbenen Pflanzen u. Tieren."
  },
  {
    "id": "k7_ek_052",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Energiequelle zählt zu den regenerativen (erneuerbaren) Energien?",
    "answers": [
      "Das Steinkohleöl",
      "Die Windenergie",
      "Das Erdgas im Boden",
      "Das Uranerz Atom"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Erneuerbare Energien (Sonnenlicht, Windkraft, Wasserkraft) erneuern sich natürlich."
  },
  {
    "id": "k7_ek_053",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter dem Begriff 'Geothermie'?",
    "answers": [
      "Kraft aus Flusswasser",
      "Wärme aus der Erde",
      "Energie aus Biogas",
      "Strom aus Sonnenlicht"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Geothermie nutzt die im zugänglichen Teil der Erdkruste gespeicherte Wärmeenergie."
  },
  {
    "id": "k7_ek_054",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt der anthropogene Klimawandel?",
    "answers": [
      "Kühlung durch die Sonne",
      "Menschlich verursacht",
      "Natürlicher Klimazyklus",
      "Vulkanischer Ascheflug"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Anthropogen bedeutet durch den Menschen verursacht (z. B. Ausstoß von Treibhausgasen)."
  },
  {
    "id": "k7_ek_055",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welches Gas entsteht vermehrt bei der Verdauung von Rinderbeständen u. in Reisfeldern?",
    "answers": [
      "Treibhausgas Methan",
      "Reiner Sauerstoffanteil",
      "Giftiges Kohlenmonoxid",
      "Seltenes Edelgas Argon"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Methan ($CH_4$) ist ein besonders wirksames Treibhausgas in der Erdatmosphäre."
  },
  {
    "id": "k7_ek_056",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Folge hat der global steigende Meeresspiegel für flache Inselstaaten?",
    "answers": [
      "Überflutung von Land",
      "Wachstum von Klippen",
      "Austrocknen von Meeren",
      "Zunahme von Inselflächen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Abschmelzen von Festlandseis u. die Ausdehnung des Wassers bedrohen tief liegende Küsten."
  },
  {
    "id": "k7_ek_057",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter dem Begriff 'Ökologischer Fußabdruck'?",
    "answers": [
      "Schuhgröße im Schnitt",
      "Fläche des Gartens",
      "Ressourcenverbrauch",
      "Strecke beim Wandern"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Er gibt an, wie viel Biokapazität der Erde eine Person oder ein Land zur Bedarfsdeckung beansprucht."
  },
  {
    "id": "k7_ek_058",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter 'Virtuellem Wasser'?",
    "answers": [
      "Eis aus dem Kühlschrank",
      "Regenwasser in Wolken oben",
      "Wasser im Computerspiel",
      "Verbrauch bei Produktion"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Virtuelles Wasser bezeichnet die gesamte Menge an Wasser, die zur Herstellung eines Produkts aufwendet wird."
  },
  {
    "id": "k7_ek_059",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie viel Liter virtuelles Wasser stecken etwa in der Herstellung einer einzigen Jeans?",
    "answers": [
      "Ca. 15 bis 25 Liter",
      "Ca. 8.000 bis 10.000 L",
      "Ca. 150 bis 250 Liter",
      "Ca. 40.000 bis 60.000 L"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Baumwollanbau u. Jeansfärbung erfordern rund $8.000$ bis $10.000\\text{ Liter}$ Wasser pro Stück."
  },
  {
    "id": "k7_ek_060",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was ist die Hauptursache für das Abschmelzen von Inlandeis in Grönland u. der Antarktis?",
    "answers": [
      "Zunahme von Schnee",
      "Erwärmung der Luft",
      "Fehlende Sonnenglut",
      "Vulkane unter dem Eis"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gestiegene globale Durchschnittstemperaturen führen zum verstärkten Schmelzen großer Eisschilde."
  },
  {
    "id": "k7_ek_061",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt der Begriff 'Fracking' bei der Rohstoffförderung?",
    "answers": [
      "Filtern von Sand",
      "Sammeln mit Schiffen",
      "Abbau im Hochofen",
      "Spaltung mit Druck"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Hydraulic Fracturing bricht tiefes Gestein unter hohem Flüssigkeitsdruck auf, um Gas u. Öl zu lösen."
  },
  {
    "id": "k7_ek_062",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welches Abbauverfahren nutzt man zur Gewinnung von Braunkohle im Rheinischen Revier?",
    "answers": [
      "Die Tiefbohrung",
      "Das Meeresfiltern",
      "Der Untertagebau",
      "Der Tagebau"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Braunkohle liegt oberflächennah u. wird mit Schaufelradbaggern in riesigen Tagebauen gefördert."
  },
  {
    "id": "k7_ek_063",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Folge hat der Tagebau für die bewohnten Ortschaften im Abbaugebiet?",
    "answers": [
      "Wachstum der Wälder",
      "Schutz der Naturparks",
      "Umsiedlung von Dörfern",
      "Bau von Wolkenkratzern"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Für die großen Flächen der Tagebaue müssen Dörfer abgebaggert u. Bewohner umgesiedelt werden."
  },
  {
    "id": "k7_ek_064",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter der 'Rekultivierung' abgebaggerter Tagebauflächen?",
    "answers": [
      "Wiederherstellung Natur",
      "Verkauf an Konzerne dort",
      "Flutung mit Bauschutt",
      "Bauen neuer Fabriken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rekultivierung gestaltet genutzte Bergbauflächen in Wälder, Ackerland oder Seenlandschaften um."
  },
  {
    "id": "k7_ek_065",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welches Umweltproblem entsteht durch riesige Mengen Plastikmüll in Ozeanen?",
    "answers": [
      "Starke Kühlung der Meere",
      "Bildung von Mikroplastik",
      "Wachsende Korallenriffe",
      "Reinigung des Meerwassers"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Plastik zerfällt langsam in winzige Partikel (Mikroplastik), die von Meeresorganismen aufgenommen werden."
  },
  {
    "id": "k7_ek_066",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt das Prinzip der Nachaltigkeit (Dreiecks-Modell)?",
    "answers": [
      "Staat, der Markt u. Verbraucher",
      "Geld, Macht u. Reichtum",
      "Wind, Sonne u. Wasserkraft",
      "Ökologie, Ökonomie, Soziales"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nachhaltiges Handeln vereinbart Umweltschutz (Ökologie), Wirtschaft (Ökonomie) u. soziale Gerechtigkeit."
  },
  {
    "id": "k7_ek_067",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Energieform wandeln Photovoltaikanlagen auf Häuserdächern um?",
    "answers": [
      "Sonnenlicht in Strom",
      "Biomasse in Heizgas",
      "Erdwärme in Kälteluft",
      "Windkraft in Warmwasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Solarzellen wandeln auftreffendes Sonnenlicht direkt in elektrische Energie um."
  },
  {
    "id": "k7_ek_068",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Energieform nutzen Solarthermieanlagen auf Hausdächern?",
    "answers": [
      "Erdwärme für Kühlluft",
      "Sonnenlicht für Strom pur",
      "Sonnenlicht für Warmwasser",
      "Windenergie für Warmwasser"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Solarthermiekollektoren erwärmen eine Trägerflüssigkeit direkt zur Erzeugung von Brauchwasser u. Heizung."
  },
  {
    "id": "k7_ek_069",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Warum bezeichnet man Erdöl u. Erdgas als endliche Ressourcen?",
    "answers": [
      "Neubildung dauert zu lang",
      "Werden nie ganz verbraucht",
      "Entstehen jeden Tag neu",
      "Kommen direkt aus der Sonne"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ihre Bildungsdauer beträgt Millionen Jahre, weshalb die weltweiten Vorkommen begrenzt sind."
  },
  {
    "id": "k7_ek_070",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter dem Begriff 'Synergie' beim Umweltschutz?",
    "answers": [
      "Gegenseitige Behinderung",
      "Reine Zeitverschwendung",
      "Positive Zusammenwirkung",
      "Verlust aller Ressourcen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Synergie beschreibt das Zusammenwirken von Maßnahmen, das einen Nutzen stiftet."
  },
  {
    "id": "k7_ek_071",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt die Treibhausgassenke in der Geographie?",
    "answers": [
      "Schlot eines Vulkans",
      "Quelle von CO2 Gas",
      "Speicher von CO2 Gas",
      "Fabrik für Abgase"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ökosysteme wie Wälder oder Moore nehmen $CO_2$ auf u. binden den Kohlenstoff langfristig."
  },
  {
    "id": "k7_ek_072",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welches Gas entsteht in Biogasanlagen durch Vergärung organischer Abfälle?",
    "answers": [
      "Biogas mit Methan",
      "Reiner Sauerstoff",
      "Edelgas Krypton",
      "Kohlensäure flüssig"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bakterien bauen Gülle u. Pflanzenmasse zu Methangas ab, das energetisch genutzt wird."
  },
  {
    "id": "k7_ek_073",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter der 'Versiegelung' von Böden?",
    "answers": [
      "Bewässern mit Flusswasser",
      "Pflügen des Ackerbodens",
      "Bebauung mit Asphalt",
      "Düngen mit viel Nitrat"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Teeren u. Bebauen kann Regenwasser nicht mehr einsickern, was das Hochwasserrisiko erhöht."
  },
  {
    "id": "k7_ek_074",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Auswirkung hat die Abholzung der tropischen Regenwälder auf das Erdklima?",
    "answers": [
      "Zunahme von Eisschild",
      "Freisetzung von CO2",
      "Abkühlung der Luft",
      "Senkung von CO2 Wert"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Brandrodung u. Verrottung setzen im Holz gebundenen Kohlenstoff als $CO_2$ frei."
  },
  {
    "id": "k7_ek_075",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man die weltweite Vereinbarung zum Klimaschutz aus dem Jahr 2015?",
    "answers": [
      "Das Kopenhagener Abkommen",
      "Das Pariser Abkommen",
      "Das Berliner Protokoll",
      "Das New Yorker Abkommen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Pariser Abkommen zielt darauf ab, die globale Erwärmung auf möglichst 1,5 °C zu begrenzen."
  },

  // --- LANDWIRTSCHAFT, TOURISMUS & GLOBALE DISPARITÄTEN (076 - 100) ---
  {
    "id": "k7_ek_076",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was kennzeichnet die intensive Sonderkultur im Almeria-Gewächshausgürtel (Spanien)?",
    "answers": [
      "Anbau unter Plastik",
      "Forstwirtschaft Holz",
      "Ökologischer Landbau",
      "Reiner Regenanbau"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Almería erstreckt sich ein riesiges Plastikmeer für den ganzjährigen Export-Gemüseanbau."
  },
  {
    "id": "k7_ek_077",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welches Grundwasserproblem entsteht durch künstliche Bewässerung in trockenen Regionen?",
    "answers": [
      "Zunahme von Süßwasser",
      "Kühlung der Erdkruste",
      "Absinken u. Versalzung",
      "Anstieg des Grundwassers"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Übermäßige Entnahme lässt den Grundwasserspiegel sinken; Verdunstung führt zur Versalzung der Böden."
  },
  {
    "id": "k7_ek_078",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter Plantagenwirtschaft in den Tropen?",
    "answers": [
      "Bio-Mischkultur Wald",
      "Großflächiger Anbau",
      "Kleine Subsistenzfelder",
      "Reine Viehzucht im Stall"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Plantagen sind agrarische Großbetriebe, die Monokulturen (z. B. Ölpalmen, Bananen) für den Export anbauen."
  },
  {
    "id": "k7_ek_079",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was bezeichnet man als 'Monokultur' in der Landwirtschaft?",
    "answers": [
      "Regelmäßige Brache",
      "Dauerhafter Einzanbau",
      "Vielfältiger Fruchtwechsel",
      "Biologischer Mischanbau"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Auf einer Fläche wird über Jahre hinweg nur eine einzige Nutzpflanzenart angebaut."
  },
  {
    "id": "k7_ek_080",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was bedeutet der Begriff 'Subsistenzwirtschaft' (Eigenbedarfswirtschaft)?",
    "answers": [
      "Export von Rohstoffen ins Ausland",
      "Verkauf auf dem Weltmarkt",
      "Gewinnmaximierung der Firma",
      "Produktion zum Selbstbedarf"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Landwirtschaftliche Güter werden ausschließlich für die Selbstversorgung der eigenen Familie angebaut."
  },
  {
    "id": "k7_ek_081",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt der Begriff 'Massentourismus'?",
    "answers": [
      "Einzelne Abenteuerreisen",
      "Urlaub vieler Menschen",
      "Wissenschaftsreisen Pol",
      "Nachhaltiger Wandersport"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konzentration sehr vieler Urlauber zur gleichen Zeit an bestimmten Zielorten (z. B. Kuesten)."
  },
  {
    "id": "k7_ek_082",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt das Konzept des 'Sanften Tourismus' (Ökotourismus)?",
    "answers": [
      "Möglichst billiger Flug",
      "Bau riesiger Betonenklaven",
      "Ganzjähriger Massenurlaub",
      "Umweltschonender Urlaub"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sanfter Tourismus nimmt Rücksicht auf die Umwelt u. unterstützt die lokale Bevölkerung nachhaltig."
  },
  {
    "id": "k7_ek_083",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche negative Umweltfolge hat der Wintersport-Tourismus in den Alpen?",
    "answers": [
      "Schutz der Berghänge",
      "Erosion durch Pistenbau",
      "Rückgang von Kunstschnee",
      "Zunahme von Gletscherbereich"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rodungen u. Planierungen für Skipisten lockern den Boden u. fördern Rutschungen u. Lawinen."
  },
  {
    "id": "k7_ek_084",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter regionalen Disparitäten?",
    "answers": [
      "Verbindung von Straßen",
      "Gleiches Einkommen alle",
      "Gleiches Klima weltweit",
      "Ungleichheiten Räume"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Regionale Disparitäten bezeichnen Abweichungen in Lebensbedingungen u. Wirtschaftskraft zwischen Regionen."
  },
  {
    "id": "k7_ek_085",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Mit welchem Kennwert (Index) misst die UN den Entwicklungsstand von Ländern?",
    "answers": [
      "Der Gini-Koeffizient rein",
      "Der HDI (Human Dev Index)",
      "Der Big-Mac-Index Geld",
      "Der KOF-Globalisierungsindex"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Human Development Index vereinigt Lebenserwartung, Schulbildung u. Pro-Kopf-Einkommen."
  },
  {
    "id": "k7_ek_086",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was besagt das Bruttoinlandsprodukt (BIP) einer Volkswirtschaft?",
    "answers": [
      "Gesamte Anzahl Einwohner",
      "Wert aller Waren/Dienste",
      "Höhe der Staatsschulden",
      "Fläche des Staates km²"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das BIP misst den Gesamtwert aller Güter u. Dienstleistungen, die in einem Jahr hergestellt wurden."
  },
  {
    "id": "k7_ek_087",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter dem Prozess der 'Globalisierung'?",
    "answers": [
      "Bau von Grenzen u. Mauern",
      "Rückzug auf eigene Region",
      "Weltweite Verflechtung",
      "Stopp des Welthandels"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Globalisierung bezeichnet die zunehmende weltweite Vernetzung in Wirtschaft, Politik u. Kultur."
  },
  {
    "id": "k7_ek_088",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was zeichnet Schwellenländer (Newly Industrialized Countries) aus?",
    "answers": [
      "Rasche Industrialisierung",
      "Höchster HDI weltweit",
      "Keine Industrie vorhanden",
      "Reine Subsistenzwirtschaft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schwellenländer befinden sich im Übergang vom Agrarstaat zum modernen Industrie- u. Dienstleistungsstaat."
  },
  {
    "id": "k7_ek_089",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was zeichnet den Fairsystem-Handel ('Fair Trade') aus?",
    "answers": [
      "Verbot aller Importe",
      "Gerechte Erzeugerpreise",
      "Möglichst billiger Einkauf",
      "Vollständige Steuerfreiheit"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fairer Handel garantiert Kleinbauern Mindestpreise u. pranger Ausbeutung u. Kinderarbeit an."
  },
  {
    "id": "k7_ek_090",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt der Begriff 'Urbanisierung' in der Stadtgeographie?",
    "answers": [
      "Wachstum der Waldflächen",
      "Ausbreitung der Städte",
      "Abbau aller alten Wohnungen",
      "Rückzug der Leute aufs Dorf"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Urbanisierung bezeichnet die Verstädterung, d. h. die Zunahme der Stadtbevölkerung gegenüber dem Land."
  },
  {
    "id": "k7_ek_091",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man Millionen-Städte mit mehr als 10 Millionen Einwohnern?",
    "answers": [
      "Begriff: Megacities",
      "Begriff: Kleinstädte",
      "Begriff: Satellitenstädte",
      "Begriff: Historische Orte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Städte mit über 10 Millionen Bewohnern bezeichnet die Geographie als Megacities (z. B. Tokio)."
  },
  {
    "id": "k7_ek_092",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt die Landflucht (Land-Stadt-Migration) in Entwicklungsräumen?",
    "answers": [
      "Umzug Dorf in die Stadt",
      "Flucht über die Grenzen",
      "Umzug Stadt auf das Land",
      "Urlaub im Ausland"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Menschen verlassen ländliche Räume wegen Armut u. hoffen in den Städten auf Arbeit u. Versorgung."
  },
  {
    "id": "k7_ek_093",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Wie nennt man elend geschaffene Hüttensiedlungen am Rande von Megacities?",
    "answers": [
      "Industrieparks Groß",
      "Suburbs mit Gärten",
      "Reichenviertel Park",
      "Slums oder Favelas"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Informelle Siedlungen ohne sauberes Wasser, Abwasserkanal u. feste Bausubstanz heißen Slums."
  },
  {
    "id": "k7_ek_094",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was bezeichnet man als 'Verlagerung von Arbeitsplätzen' (Outsourcing)?",
    "answers": [
      "Bau heimischer Betriebe",
      "Vergabe ins Ausland",
      "Verbot von Importen",
      "Einstellung von Arbeit"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unternehmen verlagern Fertigungen in Niedriglohnländer, um Produktionskosten einzusparen."
  },
  {
    "id": "k7_ek_095",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter Sonderwirtschaftszonen in Schwellenländern?",
    "answers": [
      "Zonen komplett ohne Strom",
      "Gebiete für Investoren",
      "Geschützte Naturparkgebiete",
      "Bereiche nur fürs Militär"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sonderwirtschaftszonen bieten ausländischen Firmen Vergünstigungen wie Steuerfreiheit u. geringe Zölle."
  },
  {
    "id": "k7_ek_096",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Welche Agrarform prägt das Mittelmeergebiet (Mediterrane Landwirtschaft)?",
    "answers": [
      "Rentiere u. Gerste",
      "Oliven, Wein, Zitrus",
      "Weizen u. Zuckerrüben",
      "Reis u. Baumwolle"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Typische Kulturen sind sommerdürreresistente Nutzpflanzen wie Olivenbäume, Weinreben u. Zitrusfrüchte."
  },
  {
    "id": "k7_ek_097",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was beschreibt die 'Sonderkultur' in der Landwirtschaft?",
    "answers": [
      "Viehhaltung im engen Stall",
      "Arbeitsintensiver Anbau",
      "Großer Getreideanbau eben",
      "Forstwirtschaft im Wald"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sonderkulturen (Obst, Gemuese, Wein, Hopfen) erfordern hohe Investitionen u. viel Pflege pro Fläche."
  },
  {
    "id": "k7_ek_098",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter der 'Strukturförderung' benachteiligter Regionen?",
    "answers": [
      "Schließung von Schulen",
      "Abzug aller Firmen",
      "Gezielte Finanzhilfe",
      "Erhöhung der Steuern"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Staatliche Gelder fließen in Straßen, Datennetze u. Gewerbeparks, um Rückstände auszugleichen."
  },
  {
    "id": "k7_ek_099",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was versteht man unter einer Monostruktur in einer Wirtschaftsregion?",
    "answers": [
      "Keine Firmen im Land",
      "Vollständiger Bio-Anbau",
      "Ausrichtung ein Zweig",
      "Vielfalt vieler Branchen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Region hängt fast ausschließlich von einer einzigen Branche ab (z. B. Bergbau oder Tourismus)."
  },
  {
    "id": "k7_ek_100",
    "category": "k7_erdkunde",
    "area": "schule",
    "grade": 7,
    "subject": "erdkunde",
    "question": "Was ist das Hauptziel einer nachhaltigen Stadtentwicklung?",
    "answers": [
      "Lebensqualität u. Umwelt",
      "Verdopplung des Lärmpegels",
      "Bau maximaler Autostraßen",
      "Abriss historischer Bauten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nachhaltige Stadtplanung verbindet Grünflächen, öffentlichen Nahverkehr u. Energieeffizienz."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K7_ERDKUNDE_QUESTIONS = K7_ERDKUNDE_QUESTIONS;
}