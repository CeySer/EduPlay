// ================================================================
// KLASSE 6 - PHYSIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K6_PHYSIK_QUESTIONS = [
  // --- STROMKREISE & ELEKTRIZITÄT (001 - 020) ---
  {
    "id": "k6_ph_001",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was ist eine Voraussetzung dafür, dass elektrischer Strom fließt?",
    "answers": [
      "Geschlossener Stromkreis",
      "Unterbrochener Drahtweg",
      "Isolierter Kunststoffring",
      "Offener Schalter im Raum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Strom kann nur in einem unterbrechungsfrei geschlossenen Kreis fließen."
  },
  {
    "id": "k6_ph_002",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welcher Stoff leitet den elektrischen Strom gut?",
    "answers": [
      "Kupferdraht",
      "Plastikrohr",
      "Holzstock",
      "Glaskugel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Metalle wie Kupfer sind hervorragende elektrische Leiter."
  },
  {
    "id": "k6_ph_003",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches Material leitet den elektrischen Strom NICHT?",
    "answers": [
      "Gummihülle",
      "Silberdraht",
      "Eisennagel",
      "Alufolie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gummi ist ein Nichtleiter (Isolator)."
  },
  {
    "id": "k6_ph_004",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Aufgabe hat eine Batterie im Stromkreis?",
    "answers": [
      "Energielieferant",
      "Stromunterbrecher",
      "Lichtverstärker",
      "Wärmeisolator"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Batterie stellt die nötige elektrische Spannung bereit."
  },
  {
    "id": "k6_ph_005",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Aufgabe hat ein Schalter im Stromkreis?",
    "answers": [
      "Kreis unterbrechen",
      "Spannung erzeugen",
      "Strom verdoppeln",
      "Widerstand messen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Schalter öffnet oder schließt den Stromkreis gezielt."
  },
  {
    "id": "k6_ph_006",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert in einer Reihenschaltung, wenn eine Lampe kaputtgeht?",
    "answers": [
      "Alle Lampen gehen aus",
      "Andere leuchten heller",
      "Nichts verändertsich",
      "Batterie wird geladen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Reihe ist der Stromkreis bei einem Defekt komplett unterbrochen."
  },
  {
    "id": "k6_ph_007",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert in einer Parallelschaltung, wenn eine Lampe ausfällt?",
    "answers": [
      "Rest leuchtet weiter",
      "Alle gehen sofort aus",
      "Spannung bricht ein",
      "Kabel schmelzen ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Parallelschaltung bleiben die anderen Pfade geschlossen."
  },
  {
    "id": "k6_ph_008",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Wirkung des Stroms nutzt ein Toaster?",
    "answers": [
      "Wärmewirkung",
      "Lichtwirkung",
      "Magnetwirkung",
      "Chemiewirkung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der elektrische Strom erwärmt die Heizdrähte im Toaster."
  },
  {
    "id": "k6_ph_009",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Wirkung des Stroms nutzt eine Glühlampe hauptsächlich?",
    "answers": [
      "Lichtwirkung",
      "Schallwirkung",
      "Druckwirkung",
      "Kraftwirkung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Hauptzweck der Glühlampe ist die Erzeugung von Licht."
  },
  {
    "id": "k6_ph_010",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Wirkung zeigt sich um einen stromdurchflossenen Draht?",
    "answers": [
      "Magnetwirkung",
      "Schallwirkung",
      "Lichtbrechung",
      "Geruchswirkung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jeder stromdurchflossene Leiter baut ein Magnetfeld auf."
  },
  {
    "id": "k6_ph_011",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "In welcher Einheit wird die elektrische Spannung angegeben?",
    "answers": [
      "Volt",
      "Watt",
      "Meter",
      "Lamm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die elektrische Spannung misst man in Volt (V)."
  },
  {
    "id": "k6_ph_012",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "In welcher Einheit wird die elektrische Stromstärke gemessen?",
    "answers": [
      "Ampere",
      "Newton",
      "Pascal",
      "Joule"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die elektrische Stromstärke wird in Ampere (A) angegeben."
  },
  {
    "id": "k6_ph_013",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was ist ein Kurzschluss im Stromkreis?",
    "answers": [
      "Weg ohne Widerstand",
      "Weg mit hohem Kabel",
      "Sehr langer Drahtweg",
      "Schwache Batterie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Kurzschluss entsteht, wenn die Pole fast ohne Widerstand verbunden werden."
  },
  {
    "id": "k6_ph_014",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wovor schützt eine Sicherung im Haushalt?",
    "answers": [
      "Zu hohem Stromfluss",
      "Zu kleiner Spannung",
      "Dunkeln Lampenlicht",
      "Kaltem Kaffeewasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sicherungen unterbrechen den Kreis bei Überlastung oder Kurzschluss."
  },
  {
    "id": "k6_ph_015",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Warum ist Wasser im Haushalt im Umgang mit Strom gefährlich?",
    "answers": [
      "Leitet Strom sehr gut",
      "Löscht Strom komplett",
      "Kühlt Kabel sehr stark",
      "Macht Strom langsam"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Leitungswasser enthält Salze u. leitet Strom gut -> Stromschlaggefahr."
  },
  {
    "id": "k6_ph_016",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Teilchen bewegen sich beim Stromfluss in Metallen?",
    "answers": [
      "Elektronen",
      "Moleküle",
      "Neutronen",
      "Protonen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektrischer Strom in Metallen ist eine gerichtete Bewegung freier Elektronen."
  },
  {
    "id": "k6_ph_017",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Pole besitzt eine einfache Flachbatterie?",
    "answers": [
      "Plus u. Minus",
      "Nord u. Süd",
      "Ost u. West",
      "Oben u. Unten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichstromquellen besitzen einen Pluspol und einen Minuspol."
  },
  {
    "id": "k6_ph_018",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was beschreibt ein Schaltplan in der Physik?",
    "answers": [
      "Grafisches Symbolbild",
      "Buntes Farbfoto Gerät",
      "Gedruckte Textskizze",
      "Echte Bauteile-Kiste"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Schaltplan stellt Stromkreise vereinfacht mit genormten Symbolen dar."
  },
  {
    "id": "k6_ph_019",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches Symbol steht im Schaltplan für eine Glühlampe?",
    "answers": [
      "Kreis mit einem X",
      "Einfaches Rechteck",
      "Zwei parallele Striche",
      "Zickzack-Linie kurz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Kreis mit einem 'X' darin symbolisiert ein Leuchtmittel."
  },
  {
    "id": "k6_ph_020",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man wiederaufladbare Batterien?",
    "answers": [
      "Akkumulatoren",
      "Isolatoren",
      "Kondensatoren",
      "Generatoren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Akkus (Akkumulatoren) können mehrfach geladen werden."
  },

  // --- LICHT, SCHATTEN & OPTIK (021 - 040) ---
  {
    "id": "k6_ph_021",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie breitet sich Licht im gleichmäßigen Raum aus?",
    "answers": [
      "Geradlinig nach allen Seiten",
      "In Schlangenlinien Vorwärts",
      "Nur in großen Zickzack-Kurven",
      "Immer kreisförmig Gebogen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Licht breitet sich in einem homogenen Medium geradlinig aus."
  },
  {
    "id": "k6_ph_022",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was ist eine natürliche Lichtquelle?",
    "answers": [
      "Die Sonne",
      "Eine Kerze",
      "Eine Lampe",
      "Der Spiegl"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Sonne erzeugt ihr Licht selbst und ist eine natürliche Lichtquelle."
  },
  {
    "id": "k6_ph_023",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Warum leuchtet der Mond am Nachthimmel?",
    "answers": [
      "Reflektiert Sonnenlicht",
      "Erzeugt selbst das Licht",
      "Brennt durch Gasmischung",
      "Nimmt Erdwärme glühend auf"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Mond ist kein Selbstleuchter, er reflektiert das Licht der Sonne."
  },
  {
    "id": "k6_ph_024",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wann entsteht ein Schattenraum?",
    "answers": [
      "Licht trifft auf Hindernis",
      "Licht geht durch Glas durch",
      "Licht trifft auf den Spiegel",
      "Licht wird stark gesammelt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein undurchsichtiger Körper blockiert das Licht, dahinter entsteht Schatten."
  },
  {
    "id": "k6_ph_025",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man den dunklen Schattenbereich bei zwei Lichtquellen?",
    "answers": [
      "Kernschatten",
      "Halbschatten",
      "Lichtschatten",
      "Randschatten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Kernschatten trifft von keiner der Lichtquellen Licht ein."
  },
  {
    "id": "k6_ph_026",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man den schwächeren Schattenbereich bei zwei Lichtquellen?",
    "answers": [
      "Halbschatten",
      "Kernschatten",
      "Vollschatten",
      "Hauptschatten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Halbschatten trifft noch Licht von mindestens einer Lichtquelle ein."
  },
  {
    "id": "k6_ph_027",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert bei einer Sonnenfinsternis?",
    "answers": [
      "Mond zwischen Sonne u. Erde",
      "Erde zwischen Sonne u. Mond",
      "Sonne zwischen Erde u. Mond",
      "Mond schaltet Licht aus"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Mond schiebt sich vor die Sonne und wirft seinen Schatten auf die Erde."
  },
  {
    "id": "k6_ph_028",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert bei einer Mondfinsternis?",
    "answers": [
      "Erde zwischen Sonne u. Mond",
      "Mond zwischen Sonne u. Erde",
      "Sonne wirft Schatten weg",
      "Erde dreht sich nicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Erde steht zwischen Sonne u. Mond u. wirft ihren Schatten auf den Mond."
  },
  {
    "id": "k6_ph_029",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie lautet das Reflexionsgesetz am ebenen Spiegel?",
    "answers": [
      "Einfallswinkel = Ausfallswinkel",
      "Einfallswinkel doppelt so groß",
      "Ausfallswinkel ist immer 90°",
      "Licht wird komplett aufgesaugt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Einfallswinkel $\\alpha$ ist stets gleich dem Reflexionswinkel $\\beta$."
  },
  {
    "id": "k6_ph_030",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was für ein Bild erzeugt ein ebener Wasserspiegel?",
    "answers": [
      "Seitenverkehrtes Bild",
      "Vergrößertes Realbild",
      "Verkleinertes Realbild",
      "Auf dem Kopf Stehendes"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Spiegelbild ist virtuell, gleich groß und seitlich vertauscht."
  },
  {
    "id": "k6_ph_031",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welcher Gegenstand bündelt Lichtstrahlen in einem Punkt?",
    "answers": [
      "Sammellinse",
      "Zerstreuungslinse",
      "Ebene Glasscheibe",
      "Mattes Pappschild"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sammellinsen (Konvexlinsen) bündeln parallel einfallendes Licht im Brennpunkt."
  },
  {
    "id": "k6_ph_032",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man den Punkt, in dem sich gebündelte Lichtstrahlen treffen?",
    "answers": [
      "Brennpunkt",
      "Mittelpunkt",
      "Schattenpunkt",
      "Spiegelpunkt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Fokus (Brennpunkt) treffen sich die gebündelten Lichtstrahlen."
  },
  {
    "id": "k6_ph_033",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert mit Licht beim Übergang von Luft in Wasser?",
    "answers": [
      "Es wird gebrochen",
      "Es verschwindet komplett",
      "Es wird doppelt so schnell",
      "Es wird zu festem Stoff"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An der Grenzfläche zweier Medien ändert das Licht seine Richtung (Lichtbrechung)."
  },
  {
    "id": "k6_ph_034",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches optische Phänomen erzeugt einen Regenbogen?",
    "answers": [
      "Brechung u. Spiegelung",
      "Reine Schattenbildung",
      "Absorption im Nebel",
      "Vollständige Erwärmung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sonnenlicht wird in Wassertropfen gebrochen, reflektiert und in Farben zerlegt."
  },
  {
    "id": "k6_ph_035",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Spektralfarben gehören zum weißen Sonnenlicht?",
    "answers": [
      "Regenbogenfarben",
      "Nur Schwarz u. Weiß",
      "Nur Braun u. Grau",
      "Ausschließlich Gelb"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Weißes Licht setzt sich aus den Spektralfarben (Rot bis Violett) zusammen."
  },
  {
    "id": "k6_ph_036",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man ein dreieckiges Glasprisma zur Lichtzerlegung?",
    "answers": [
      "Optisches Prisma",
      "Ebenes Spiegelglas",
      "Sammellinsenblock",
      "Hohlspiegelschale"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Prisma zerlegt weißes Licht in seine spektralen Farbanteile."
  },
  {
    "id": "k6_ph_037",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches Organ beim Menschen nimmt Lichtreize auf?",
    "answers": [
      "Das Auge",
      "Das Ohr",
      "Die Haut",
      "Die Nase"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Netzhaut im Auge besitzt lichtempfindliche Sinneszellen."
  },
  {
    "id": "k6_ph_038",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welcher Teil des Auges reguliert den Lichteinfall?",
    "answers": [
      "Die Pupille",
      "Die Netzhaut",
      "Der Sehnerv",
      "Der Glaskörper"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Regenbogenhaut (Iris) passt die Öffnung der Pupille der Helligkeit an."
  },
  {
    "id": "k6_ph_039",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was für ein Bild entsteht in einer Lochkamera?",
    "answers": [
      "Kopfstehend u. verkehrt",
      "Aufrecht u. vergrößert",
      "Dreidimensional u. klar",
      "Nur ein weißer Fleck"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch die geradlinige Lichtausbreitung steht das Bild der Lochkamera auf dem Kopf."
  },
  {
    "id": "k6_ph_040",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Brillenlinse korrigiert Kurzsichtigkeit?",
    "answers": [
      "Zerstreuungslinse",
      "Sammellinse dick",
      "Ebene Glasscheibe",
      "Farbfilterlinse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Zerstreuungslinse (Konkavlinse) korrigiert die Kurzsichtigkeit."
  },

  // --- SCHALL & AKUSTIK (041 - 060) ---
  {
    "id": "k6_ph_041",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie entsteht Schall physikalisch?",
    "answers": [
      "Durch Schwingungen",
      "Durch Lichtstrahlen",
      "Durch Erwärmung Luft",
      "Durch Magnetkräfte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schall entsteht immer durch mechanische Schwingungen eines Schallerzeugers."
  },
  {
    "id": "k6_ph_042",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Worin kann sich Schall NICHT ausbreiten?",
    "answers": [
      "Im Vakuum (Luftleer)",
      "In frischer Luftraum",
      "In kaltem Wasserraum",
      "In festem Metallstab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schall benötigt zwingend Teilchen als Trägermedium; im Vakuum herrscht Stille."
  },
  {
    "id": "k6_ph_043",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie hoch ist die Schallgeschwindigkeit in der Luft etwa?",
    "answers": [
      "Etwa 340 m pro Sekunde",
      "Etwa 300.000 km pro Sek",
      "Etwa 10 m pro Sekunde",
      "Etwa 1.500 m pro Sekunde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schall legt in der Luft rund 340 Meter pro Sekunde zurück."
  },
  {
    "id": "k6_ph_044",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wo breitet sich Schall schneller aus: in Luft oder in Wasser?",
    "answers": [
      "Im Wasser schneller",
      "In der Luft schneller",
      "Beide exakt gleich",
      "Im Wasser gar nicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In dichteren Medien wie Wasser breitet sich Schall mit ca. 1.500 m/s schneller aus."
  },
  {
    "id": "k6_ph_045",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wovon hängt die Lautstärke eines Tones ab?",
    "answers": [
      "Schwingungsweite (Amplitude)",
      "Anzahl der Töne pro Sekunde",
      "Länge der Schallwelle Meter",
      "Farbe des Schallerzeugers"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine größere Schwingungsweite (Amplitude) bedeutet größere Lautstärke."
  },
  {
    "id": "k6_ph_046",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wovon hängt die Höhe eines Tones ab?",
    "answers": [
      "Frequenz der Schwingung",
      "Große Amplitude der Welle",
      "Länge des Hörrohrs Raum",
      "Temperatur der Luftmasse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Je höher die Frequenz (Schwingungen pro Sekunde), desto höher der Ton."
  },
  {
    "id": "k6_ph_047",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "In welcher Einheit misst man die Frequenz?",
    "answers": [
      "Hertz",
      "Decibel",
      "Meter",
      "Newton"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Schwingungsanzahl pro Sekunde wird in Hertz (Hz) gemessen."
  },
  {
    "id": "k6_ph_048",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "In welcher Einheit gibt man den Schalldruckpegel (Lautstärke) an?",
    "answers": [
      "Dezibel",
      "Hertz",
      "Pascal",
      "Joule"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lautstärke bzw. Schalldruck wird in Dezibel (dB) gemessen."
  },
  {
    "id": "k6_ph_049",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie entsteht ein Echo im Gebirge?",
    "answers": [
      "Schall wird reflektiert",
      "Schall wird verschluckt",
      "Schall wird erwärmt",
      "Schall wird gestoppt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wände reflektieren den Schall; das Echo gelangt zeitversetzt zurück."
  },
  {
    "id": "k6_ph_050",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches Organ nimmt beim Menschen Schallwellen auf?",
    "answers": [
      "Das Ohr",
      "Das Auge",
      "Die Haut",
      "Die Zunge"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Trommelfell im Ohr wird durch Schallwellen in Schwingung versetzt."
  },
  {
    "id": "k6_ph_051",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welcher Teil des Ohres gerät als Erster in Schwingung?",
    "answers": [
      "Das Trommelfell",
      "Die Hörschnecke",
      "Der Sehnervkanal",
      "Die Steigbügeln"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Schall trifft durch den Gehörgang direkt auf das Trommelfell."
  },
  {
    "id": "k6_ph_052",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie heißen die drei Gehörknöchelchen im Mittelohr?",
    "answers": [
      "Hammer, Amboss, Steigbügel",
      "Kopf, Rumpf, Oberschenkel",
      "Speiche, Elle, Schulterblatt",
      "Finger, Zehe, Wirbelknochen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Hammer, Amboss und Steigbügel übertragen u. verstärken die Schwingung."
  },
  {
    "id": "k6_ph_053",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert bei ständiger Lärmbelastung über 85 dB?",
    "answers": [
      "Gehörschädigung droht",
      "Sehkraft steigt an",
      "Schall wird leiser",
      "Blutdruck fällt ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dauerlärm schädigt die empfindlichen Haars Sinneszellen in der Hörschnecke."
  },
  {
    "id": "k6_ph_054",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man Töne mit Frequenzen oberhalb des menschlichen Hörbereichs?",
    "answers": [
      "Ultraschall",
      "Infraschall",
      "Mittelton",
      "Superklang"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Frequenzen über 20.000 Hz bezeichnet man als Ultraschall."
  },
  {
    "id": "k6_ph_055",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Tiere nutzen Ultraschall zur Beutesuche?",
    "answers": [
      "Fledermäuse",
      "Ameisenhaufen",
      "Regenwürmer",
      "Stubenfliegen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fledermäuse u. Delfine orientieren sich perfekt mittels Ultraschall-Echolot."
  },
  {
    "id": "k6_ph_056",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie klingt eine Saite, wenn man sie stärker spannt?",
    "answers": [
      "Der Ton wird höher",
      "Der Ton wird tiefer",
      "Klang bleibt gleich",
      "Saite wird stumm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Höhere Spannung lässt die Saite schneller schwingen -> höherer Ton."
  },
  {
    "id": "k6_ph_057",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie klingt eine lange dicke Saite im Vergleich zu einer kurzen dünnen?",
    "answers": [
      "Klingt wesentlich tiefer",
      "Klingt wesentlich höher",
      "Beide klingen identisch",
      "Gibt gar keinen Ton ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dicke, lange Saiten schwingen langsamer und erzeugen tiefere Töne."
  },
  {
    "id": "k6_ph_058",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was nutzt man an Instrumenten zur Schallverstärkung?",
    "answers": [
      "Resonanzkörper",
      "Sammellinsenglas",
      "Isolierschaumstoff",
      "Bleigewicht unten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der hohle Holzkörper (z. B. Gitarrenkorpus) schwingt mit und verstärkt den Schall."
  },
  {
    "id": "k6_ph_059",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Warum sieht man den Blitz vor dem Donner?",
    "answers": [
      "Licht ist viel schneller",
      "Schall ist viel schneller",
      "Donner entsteht später",
      "Blitz ist viel näher"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Licht ($300.000\\text{ km/s}$) breitet sich fast instantan aus, Schall ($340\\text{ m/s}$) braucht Zeit."
  },
  {
    "id": "k6_ph_060",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Das Gewitter ist 3 Sekunden nach dem Blitz zu hören. Wie weit ist es weg?",
    "answers": [
      "Etwa 1 Kilometer",
      "Etwa 3 Kilometer",
      "Etwa 100 Meter weit",
      "Etwa 10 Kilometer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schall legt in 3 Sekunden etwa 1.000 m ($3\\times 340\\text{ m}$) zurück."
  },

  // --- WÄRME & THERMOPHYSIK (061 - 080) ---
  {
    "id": "k6_ph_061",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Womit misst man die Temperatur genau?",
    "answers": [
      "Mit einem Thermometer",
      "Mit einem Barometer",
      "Mit einem Hygrometer",
      "Mit einem Voltmeter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Thermometer dient der quantitativen Temperaturmessung."
  },
  {
    "id": "k6_ph_062",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "In welcher Einheit gibt man die Temperatur in Deutschland meist an?",
    "answers": [
      "Grad Celsius",
      "Grad Fahrenheit",
      "Kelvin Maßzahl",
      "Meter pro Grad"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Alltag nutzen wir die Celsius-Skala (°C)."
  },
  {
    "id": "k6_ph_063",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Bei welcher Temperatur siedet reines Wasser bei Normaldruck?",
    "answers": [
      "100 Grad Celsius",
      "0 Grad Celsius",
      "50 Grad Celsius",
      "200 Grad Celsius"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "100 °C bildet den Siedepunkt von reinem Wasser."
  },
  {
    "id": "k6_ph_064",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Bei welcher Temperatur schmilzt Eis zu flüssigem Wasser?",
    "answers": [
      "0 Grad Celsius",
      "100 Grad Celsius",
      "-10 Grad Celsius",
      "10 Grad Celsius"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "0 °C bildet den Schmelzpunkt von Eis."
  },
  {
    "id": "k6_ph_065",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert mit den meisten Stoffen, wenn man sie erwärmt?",
    "answers": [
      "Sie dehnen sich aus",
      "Sie ziehen sich zusammen",
      "Masse wird verdoppelt",
      "Farbe wird ganz schwarz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wärme erhöht die Teilchenbewegung, der Stoff dehnt sich aus."
  },
  {
    "id": "k6_ph_066",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was beschreibt die Anomalie des Wassers?",
    "answers": [
      "Größte Dichte bei 4 °C",
      "Gefriert erst bei 100 °C",
      "Dehnt sich nie richtig aus",
      "Wird bei Wärme immer schwerer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser besitzt bei 4 °C seine höchste Dichte und sinkt nach unten."
  },
  {
    "id": "k6_ph_067",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Warum frieren Seen von oben nach unten zu?",
    "answers": [
      "Dichteanomalie Wasser",
      "Fische heizen am Grund",
      "Sonne wärmt den Boden",
      "Eis ist schwerer Wasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "4 °C warmes Wasser sammelt sich am Grund, kälteres Eis schwimmt oben."
  },
  {
    "id": "k6_ph_068",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man den Übergang von flüssig zu gasförmig?",
    "answers": [
      "Verdampfen",
      "Kondensieren",
      "Erstarrung",
      "Sublimieren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Sieden/Verdampfen wird Flüssigkeit zu Gas."
  },
  {
    "id": "k6_ph_069",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man den Übergang von gasförmig zu flüssig?",
    "answers": [
      "Kondensieren",
      "Verdampfen",
      "Schmelzen",
      "Gefrieren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasserdampf kondensiert an kalten Scheiben zu Wassertropfen."
  },
  {
    "id": "k6_ph_070",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man den Übergang von fest direkt zu gasförmig?",
    "answers": [
      "Sublimieren",
      "Kondensieren",
      "Verflüssigen",
      "Erstarren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beispiel Trockeneis: Der feste Stoff geht direkt in den gasförmigen Zustand über."
  },
  {
    "id": "k6_ph_071",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches Metall leitet Wärme besonders gut?",
    "answers": [
      "Kupfer",
      "Holzstoff",
      "Styropor",
      "Korkmasse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Metalle wie Kupfer oder Silber sind hervorragende Wärmeleiter."
  },
  {
    "id": "k6_ph_072",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches Material ist ein schlechter Wärmeleiter (Dämmstoff)?",
    "answers": [
      "Styropor",
      "Aluminium",
      "Eisendraht",
      "Kupferrohr"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Styropor schließt viel Luft ein und dämmt Wärme ausgezeichnet."
  },
  {
    "id": "k6_ph_073",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie gelangt die Wärme der Sonne zur Erde?",
    "answers": [
      "Durch Wärmestrahlung",
      "Durch Wärmeleitung",
      "Durch Wärmeströmung",
      "Durch Schallwellen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wärmestrahlung benötigt im Gegensatz zur Leitung kein Trägermedium."
  },
  {
    "id": "k6_ph_074",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was versteht man unter Wärmeströmung (Konvektion)?",
    "answers": [
      "Wärmetransport mit Stoff",
      "Wärme geht durch Metall",
      "Strahlung ohne Teilchen",
      "Abkühlung im Vakuum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Warme Flüssigkeiten oder Gase steigen auf und transportieren Wärme mit."
  },
  {
    "id": "k6_ph_075",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Warum steigen Heißluftballons in den Himmel auf?",
    "answers": [
      "Warme Luft ist leichter",
      "Warme Luft ist schwerer",
      "Kaltluft zieht sie hoch",
      "Wind drückt von unten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Erwärmte Luft dehnt sich aus, hat eine geringere Dichte u. steigt auf."
  },
  {
    "id": "k6_ph_076",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Warum haben Thermoskannen eine verspiegelte Innenwand?",
    "answers": [
      "Reflektiert Wärmestrahl",
      "Leitet Wärme rasch ab",
      "Macht das Wasser klar",
      "Schützt Kanne vor Bruch"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Spiegelung wirft Wärmestrahlung ins Innere zurück."
  },
  {
    "id": "k6_ph_077",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Warum gibt man Lücken (Fugen) in Brückenbauteile?",
    "answers": [
      "Platz für Ausdehnung",
      "Sparen von Material",
      "Ablauf von Regenwasser",
      "Schutz vor Gegenwind"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Brücken dehnen sich im Sommer aus; Dehnungsfugen verhindern Schäden."
  },
  {
    "id": "k6_ph_078",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was besteht aus zwei zusammengeschweißten unterschiedlichen Metallen?",
    "answers": [
      "Ein Bimetallstreifen",
      "Ein Schmelzsicherung",
      "Ein Isolierglaskörper",
      "Ein Hohlspiegelglas"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da sich die Metalle unterschiedlich ausdehnen, biegt sich der Bimetallstreifen bei Erwärmung."
  },
  {
    "id": "k6_ph_079",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches Gas nutzen moderne Flüssigkeitsthermometer statt Quecksilber meist?",
    "answers": [
      "Gefärbter Alkohol",
      "Reines Flusswasser",
      "Dickes Pflanzenöl",
      "Zuckersirup Masse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gefärbter Alkohol ist ungiftig u. dehnt sich gleichmäßig aus."
  },
  {
    "id": "k6_ph_080",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was versteht man unter der Teilchenbewegung im Modell der Wärme?",
    "answers": [
      "Wärme ist Bewegung",
      "Teilchen stehen still",
      "Teilchen werden groß",
      "Teilchen schmelzen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Je höher die Temperatur, desto schneller bewegen sich die Teilchen."
  },

  // --- MAGNETISMUS & KOMPASS (081 - 100) ---
  {
    "id": "k6_ph_081",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welche Stoffe werden von einem Magneten angezogen?",
    "answers": [
      "Eisen, Nickel, Kobalt",
      "Kupfer, Gold, Silber",
      "Holz, Plastik, Glas",
      "Aluminium u. Gummi"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eisen, Nickel u. Kobalt zählen zu den ferromagnetischen Stoffen."
  },
  {
    "id": "k6_ph_082",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie heißen die beiden Enden eines Magneten?",
    "answers": [
      "Nord- u. Südpol",
      "Plus- u. Minuspol",
      "Ost- u. Westpol",
      "Oben- u. Untenpol"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Magnet hat stets einen Nordpol und einen Südpol."
  },
  {
    "id": "k6_ph_083",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert, wenn man zwei gleiche Magnetpole zusammenführt?",
    "answers": [
      "Sie stoßen sich ab",
      "Sie ziehen sich an",
      "Sie schmelzen sofort",
      "Nichts passiert je"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichnamige Pole (Nord-Nord oder Süd-Süd) stoßen sich ab."
  },
  {
    "id": "k6_ph_084",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert, wenn man zwei ungleichnamige Magnetpole zusammenführt?",
    "answers": [
      "Sie ziehen sich an",
      "Sie stoßen sich ab",
      "Sie verlieren Kraft",
      "Sie werden heiß"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ungleichnamige Pole (Nord u. Süd) ziehen sich gegenseitig an."
  },
  {
    "id": "k6_ph_085",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was passiert, wenn man einen Stabmagneten in der Mitte zerbricht?",
    "answers": [
      "Zwei neue Magnete",
      "Ein Pol verschwindet",
      "Verliert alle Kraft",
      "Wird zu reinem Eisen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Jedes Bruchstück bildet wieder sofort einen Nord- und einen Südpol aus."
  },
  {
    "id": "k6_ph_086",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man den Raum um einen Magneten, in dem Kräfte wirken?",
    "answers": [
      "Magnetfeld",
      "Schattenraum",
      "Schallwelle",
      "Stromkreis"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Magnetfeld wirken magnetische Anziehungs- u. Abstoßungskräfte."
  },
  {
    "id": "k6_ph_087",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Womit kann man Magnetfeldlinien sichtbar machen?",
    "answers": [
      "Mit Eisenfeilspänen",
      "Mit kleinem Sandkorn",
      "Mit Holzsägemehl",
      "Mit Wassertropfen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eisenfeilspäne ordnen sich entlang der Magnetfeldlinien an."
  },
  {
    "id": "k6_ph_088",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wo ist die Magnetkraft bei einem Stabmagneten am stärksten?",
    "answers": [
      "An den beiden Polen",
      "Exakt in der Mitte",
      "Nur auf der Oberseite",
      "Überall absolut gleich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An den Polen ist die Feldliniendichte u. damit die Kraft am höchsten."
  },
  {
    "id": "k6_ph_089",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Worauf richtet sich eine freidrehbare Kompassnadel aus?",
    "answers": [
      "Erdmagnetfeld",
      "Nächste Sonnenlicht",
      "Der geograf. Äquator",
      "Nächste Strommasten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Kompassnadel richtet sich am Magnetfeld der Erde aus."
  },
  {
    "id": "k6_ph_090",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welcher magnetische Pol der Erde liegt nahe dem geografischen Nordpol?",
    "answers": [
      "Magnetischer Südpol",
      "Magnetischer Nordpol",
      "Der Pluspol der Erde",
      "Der Minuspol der Erde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da der Nordpol der Nadel nach Norden zeigt, liegt dort magnetisch gesehen ein Südpol."
  },
  {
    "id": "k6_ph_091",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Woraus besteht ein einfacher Elektromagnet?",
    "answers": [
      "Spule mit Eisenkern",
      "Plastikrohr mit Wasser",
      "Glaskugel mit Kupfer",
      "Holzstab mit Schnur"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Elektromagnet besteht aus einer Drahtspule u. einem Eisenkern."
  },
  {
    "id": "k6_ph_092",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was ist der größte Vorteil eines Elektromagneten?",
    "answers": [
      "An- u. ausschaltbar",
      "Braucht nie Energie",
      "Geht niemals kaputt",
      "Zieht auch Glas an"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schaltet man den Strom ab, erlischt das Magnetfeld des Elektromagneten."
  },
  {
    "id": "k6_ph_093",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie kann man die Kraft eines Elektromagneten verstärken?",
    "answers": [
      "Mehr Windungen Draht",
      "Weniger Strom nutzen",
      "Eisenkern weglassen",
      "Kabel stark kühlen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mehr Windungen u. höhere Stromstärke verstärken das Magnetfeld."
  },
  {
    "id": "k6_ph_094",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wo werden Elektromagnete im Alltag eingesetzt?",
    "answers": [
      "In Schrottplatzkranen",
      "In einfachen Fenstern",
      "In Holzschneidebretten",
      "In Plastikflaschen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schrottplatzkrane heben Eisenlasten mittels Elektromagneten u. lassen sie per Schalter fallen."
  },
  {
    "id": "k6_ph_095",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie nennt man Dauerverstärker-Magnete aus Spezialmaterial?",
    "answers": [
      "Permanentmagnete",
      "Elektromagnete",
      "Wechseleisenpole",
      "Gleichstromringe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Permanentmagnete behalten ihre magnetischen Eigenschaften dauerhaft."
  },
  {
    "id": "k6_ph_096",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie kann ein Permanentmagnet seine Wirkung verlieren?",
    "answers": [
      "Starke Erschütterung",
      "Lagerung im Dunkeln",
      "Eintauchen in Wasser",
      "Anheben von Holzstück"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Starke Schläge oder hohe Hitze bringen die Elementarmagnete durcheinander."
  },
  {
    "id": "k6_ph_097",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Wie heißen die unendlich kleinen Magnetbereiche im Eisenmodell?",
    "answers": [
      "Elementarmagnete",
      "Atombausteine Kern",
      "Elektronenringe",
      "Molekülverbände"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im unmagnetisierten Eisen liegen die Elementarmagnete ungeordnet vor."
  },
  {
    "id": "k6_ph_098",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Was geschieht beim Magnetisieren eines Eisennagels?",
    "answers": [
      "Ordnen der Bereiche",
      "Erzeugung neuer Stoffe",
      "Aufladen mit Atomen",
      "Erhitzen des Metalls"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein äußerer Magnet richtet die ungeordneten Elementarmagnete parallel aus."
  },
  {
    "id": "k6_ph_099",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welcher Himmelskörper schützt die Erde vor kosmischer Strahlung durch sein Feld?",
    "answers": [
      "Das Erdmagnetfeld",
      "Der Erdatmosphärenring",
      "Das Ozonloch oben",
      "Der Wolkengürtel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Erdmagnetfeld lenkt geladene Teilchen des Sonnenwinds ab."
  },
  {
    "id": "k6_ph_100",
    "category": "k6_physik",
    "area": "schule",
    "grade": 6,
    "subject": "physik",
    "question": "Welches Leuchtphänomen entsteht, wenn Sonnenwind am Erdmagnetfeld abgelenkt wird?",
    "answers": [
      "Das Polarlicht",
      "Der Regenbogen",
      "Die Fata Morgana",
      "Das Gewitterleuchten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An den Polen treten die Teilchen in die Atmosphäre u. erzeugen Polarlichter (Aurora)."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K6_PHYSIK_QUESTIONS = K6_PHYSIK_QUESTIONS;
}

if (typeof window !== 'undefined') window.K6_PHYSIK_QUESTIONS = K6_PHYSIK_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K6_PHYSIK_QUESTIONS', K6_PHYSIK_QUESTIONS);
