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
      "Unterbrochener Drahtweg",
      "Offener Schalter im Raum",
      "Isolierter Kunststoffring",
      "Geschlossener Stromkreis"
    ],
    "correct": 3,
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
      "Plastikrohr",
      "Kupferdraht",
      "Holzstock",
      "Glaskugel"
    ],
    "correct": 1,
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
      "Alufolie",
      "Eisennagel",
      "Silberdraht"
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
      "Wärmeisolator",
      "Lichtverstärker",
      "Stromunterbrecher",
      "Energielieferant"
    ],
    "correct": 3,
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
      "Strom verdoppeln",
      "Spannung erzeugen",
      "Kreis unterbrechen",
      "Widerstand messen"
    ],
    "correct": 2,
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
      "Nichts verändertsich",
      "Batterie wird geladen",
      "Andere leuchten heller",
      "Alle Lampen gehen aus"
    ],
    "correct": 3,
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
      "Kabel schmelzen ab",
      "Spannung bricht ein",
      "Alle gehen sofort aus",
      "Rest leuchtet weiter"
    ],
    "correct": 3,
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
      "Lichtwirkung",
      "Chemiewirkung",
      "Magnetwirkung",
      "Wärmewirkung"
    ],
    "correct": 3,
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
      "Schallwirkung",
      "Druckwirkung",
      "Lichtwirkung",
      "Kraftwirkung"
    ],
    "correct": 2,
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
      "Geruchswirkung",
      "Magnetwirkung",
      "Lichtbrechung",
      "Schallwirkung"
    ],
    "correct": 1,
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
      "Meter",
      "Lamm",
      "Watt",
      "Volt"
    ],
    "correct": 3,
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
      "Joule",
      "Pascal",
      "Newton"
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
      "Weg mit hohem Kabel",
      "Sehr langer Drahtweg",
      "Schwache Batterie",
      "Weg ohne Widerstand"
    ],
    "correct": 3,
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
      "Dunkeln Lampenlicht",
      "Zu hohem Stromfluss",
      "Zu kleiner Spannung",
      "Kaltem Kaffeewasser"
    ],
    "correct": 1,
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
      "Macht Strom langsam",
      "Löscht Strom komplett",
      "Leitet Strom sehr gut",
      "Kühlt Kabel sehr stark"
    ],
    "correct": 2,
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
      "Moleküle",
      "Protonen",
      "Elektronen",
      "Neutronen"
    ],
    "correct": 2,
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
      "Gedruckte Textskizze",
      "Echte Bauteile-Kiste",
      "Buntes Farbfoto Gerät",
      "Grafisches Symbolbild"
    ],
    "correct": 3,
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
      "Isolatoren",
      "Akkumulatoren",
      "Generatoren",
      "Kondensatoren"
    ],
    "correct": 1,
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
      "Nur in großen Zickzack-Kurven",
      "In Schlangenlinien Vorwärts",
      "Geradlinig nach allen Seiten",
      "Immer kreisförmig Gebogen"
    ],
    "correct": 2,
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
      "Eine Lampe",
      "Die Sonne",
      "Eine Kerze",
      "Der Spiegl"
    ],
    "correct": 1,
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
      "Brennt durch Gasmischung",
      "Nimmt Erdwärme glühend auf",
      "Reflektiert Sonnenlicht",
      "Erzeugt selbst das Licht"
    ],
    "correct": 2,
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
      "Licht trifft auf den Spiegel",
      "Licht geht durch Glas durch",
      "Licht wird stark gesammelt",
      "Licht trifft auf Hindernis"
    ],
    "correct": 3,
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
      "Lichtschatten",
      "Halbschatten",
      "Kernschatten",
      "Randschatten"
    ],
    "correct": 2,
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
      "Hauptschatten",
      "Kernschatten",
      "Vollschatten",
      "Halbschatten"
    ],
    "correct": 3,
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
      "Mond schaltet Licht aus",
      "Mond zwischen Sonne u. Erde",
      "Erde zwischen Sonne u. Mond",
      "Sonne zwischen Erde u. Mond"
    ],
    "correct": 1,
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
      "Erde dreht sich nicht",
      "Erde zwischen Sonne u. Mond",
      "Sonne wirft Schatten weg",
      "Mond zwischen Sonne u. Erde"
    ],
    "correct": 1,
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
      "Licht wird komplett aufgesaugt",
      "Einfallswinkel = Ausfallswinkel",
      "Einfallswinkel doppelt so groß",
      "Ausfallswinkel ist immer 90°"
    ],
    "correct": 1,
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
      "Auf dem Kopf Stehendes",
      "Verkleinertes Realbild",
      "Vergrößertes Realbild"
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
      "Ebene Glasscheibe",
      "Sammellinse",
      "Zerstreuungslinse",
      "Mattes Pappschild"
    ],
    "correct": 1,
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
      "Es wird doppelt so schnell",
      "Es wird gebrochen",
      "Es wird zu festem Stoff",
      "Es verschwindet komplett"
    ],
    "correct": 1,
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
      "Vollständige Erwärmung",
      "Absorption im Nebel",
      "Brechung u. Spiegelung",
      "Reine Schattenbildung"
    ],
    "correct": 2,
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
      "Nur Braun u. Grau",
      "Regenbogenfarben",
      "Ausschließlich Gelb",
      "Nur Schwarz u. Weiß"
    ],
    "correct": 1,
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
      "Sammellinsenblock",
      "Hohlspiegelschale",
      "Ebenes Spiegelglas"
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
      "Die Haut",
      "Das Ohr",
      "Die Nase",
      "Das Auge"
    ],
    "correct": 3,
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
      "Der Sehnerv",
      "Die Netzhaut",
      "Die Pupille",
      "Der Glaskörper"
    ],
    "correct": 2,
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
      "Dreidimensional u. klar",
      "Kopfstehend u. verkehrt",
      "Aufrecht u. vergrößert",
      "Nur ein weißer Fleck"
    ],
    "correct": 1,
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
      "Farbfilterlinse",
      "Zerstreuungslinse",
      "Sammellinse dick",
      "Ebene Glasscheibe"
    ],
    "correct": 1,
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
      "Durch Erwärmung Luft",
      "Durch Magnetkräfte",
      "Durch Schwingungen",
      "Durch Lichtstrahlen"
    ],
    "correct": 2,
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
      "In festem Metallstab",
      "In kaltem Wasserraum"
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
      "Etwa 300.000 km pro Sek",
      "Etwa 340 m pro Sekunde",
      "Etwa 1.500 m pro Sekunde",
      "Etwa 10 m pro Sekunde"
    ],
    "correct": 1,
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
      "Im Wasser gar nicht",
      "In der Luft schneller",
      "Im Wasser schneller",
      "Beide exakt gleich"
    ],
    "correct": 2,
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
      "Anzahl der Töne pro Sekunde",
      "Schwingungsweite (Amplitude)",
      "Länge der Schallwelle Meter",
      "Farbe des Schallerzeugers"
    ],
    "correct": 1,
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
      "Große Amplitude der Welle",
      "Länge des Hörrohrs Raum",
      "Frequenz der Schwingung",
      "Temperatur der Luftmasse"
    ],
    "correct": 2,
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
      "Newton",
      "Hertz",
      "Decibel",
      "Meter"
    ],
    "correct": 1,
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
      "Pascal",
      "Joule",
      "Dezibel",
      "Hertz"
    ],
    "correct": 2,
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
      "Schall wird verschluckt",
      "Schall wird reflektiert",
      "Schall wird gestoppt",
      "Schall wird erwärmt"
    ],
    "correct": 1,
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
      "Die Haut",
      "Das Auge",
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
      "Der Sehnervkanal",
      "Das Trommelfell",
      "Die Steigbügeln",
      "Die Hörschnecke"
    ],
    "correct": 1,
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
      "Blutdruck fällt ab",
      "Sehkraft steigt an",
      "Gehörschädigung droht",
      "Schall wird leiser"
    ],
    "correct": 2,
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
      "Superklang",
      "Infraschall",
      "Mittelton",
      "Ultraschall"
    ],
    "correct": 3,
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
      "Stubenfliegen",
      "Fledermäuse",
      "Ameisenhaufen",
      "Regenwürmer"
    ],
    "correct": 1,
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
      "Gibt gar keinen Ton ab",
      "Klingt wesentlich höher",
      "Beide klingen identisch"
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
      "Isolierschaumstoff",
      "Resonanzkörper",
      "Bleigewicht unten",
      "Sammellinsenglas"
    ],
    "correct": 1,
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
      "Blitz ist viel näher",
      "Schall ist viel schneller",
      "Donner entsteht später"
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
      "Etwa 10 Kilometer",
      "Etwa 100 Meter weit",
      "Etwa 3 Kilometer",
      "Etwa 1 Kilometer"
    ],
    "correct": 3,
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
      "Mit einem Hygrometer",
      "Mit einem Voltmeter",
      "Mit einem Thermometer",
      "Mit einem Barometer"
    ],
    "correct": 2,
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
      "Kelvin Maßzahl",
      "Meter pro Grad",
      "Grad Fahrenheit",
      "Grad Celsius"
    ],
    "correct": 3,
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
      "200 Grad Celsius",
      "100 Grad Celsius",
      "50 Grad Celsius",
      "0 Grad Celsius"
    ],
    "correct": 1,
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
      "Farbe wird ganz schwarz",
      "Sie dehnen sich aus",
      "Sie ziehen sich zusammen",
      "Masse wird verdoppelt"
    ],
    "correct": 1,
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
      "Gefriert erst bei 100 °C",
      "Dehnt sich nie richtig aus",
      "Größte Dichte bei 4 °C",
      "Wird bei Wärme immer schwerer"
    ],
    "correct": 2,
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
      "Eis ist schwerer Wasser",
      "Fische heizen am Grund",
      "Sonne wärmt den Boden",
      "Dichteanomalie Wasser"
    ],
    "correct": 3,
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
      "Erstarrung",
      "Kondensieren",
      "Verdampfen",
      "Sublimieren"
    ],
    "correct": 2,
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
      "Verdampfen",
      "Gefrieren",
      "Kondensieren",
      "Schmelzen"
    ],
    "correct": 2,
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
      "Erstarren",
      "Sublimieren",
      "Verflüssigen",
      "Kondensieren"
    ],
    "correct": 1,
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
      "Styropor",
      "Holzstoff",
      "Korkmasse",
      "Kupfer"
    ],
    "correct": 3,
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
      "Eisendraht",
      "Aluminium",
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
      "Durch Wärmeströmung",
      "Durch Wärmeleitung",
      "Durch Schallwellen",
      "Durch Wärmestrahlung"
    ],
    "correct": 3,
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
      "Strahlung ohne Teilchen",
      "Wärme geht durch Metall",
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
      "Kaltluft zieht sie hoch",
      "Warme Luft ist leichter",
      "Warme Luft ist schwerer",
      "Wind drückt von unten"
    ],
    "correct": 1,
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
      "Leitet Wärme rasch ab",
      "Reflektiert Wärmestrahl",
      "Schützt Kanne vor Bruch",
      "Macht das Wasser klar"
    ],
    "correct": 1,
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
      "Schutz vor Gegenwind",
      "Ablauf von Regenwasser",
      "Platz für Ausdehnung",
      "Sparen von Material"
    ],
    "correct": 2,
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
      "Ein Hohlspiegelglas",
      "Ein Isolierglaskörper",
      "Ein Schmelzsicherung",
      "Ein Bimetallstreifen"
    ],
    "correct": 3,
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
      "Reines Flusswasser",
      "Gefärbter Alkohol",
      "Zuckersirup Masse",
      "Dickes Pflanzenöl"
    ],
    "correct": 1,
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
      "Teilchen schmelzen",
      "Teilchen werden groß"
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
      "Aluminium u. Gummi",
      "Holz, Plastik, Glas",
      "Eisen, Nickel, Kobalt",
      "Kupfer, Gold, Silber"
    ],
    "correct": 2,
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
      "Oben- u. Untenpol",
      "Nord- u. Südpol",
      "Ost- u. Westpol",
      "Plus- u. Minuspol"
    ],
    "correct": 1,
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
      "Sie ziehen sich an",
      "Nichts passiert je",
      "Sie stoßen sich ab",
      "Sie schmelzen sofort"
    ],
    "correct": 2,
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
      "Sie verlieren Kraft",
      "Sie ziehen sich an",
      "Sie werden heiß",
      "Sie stoßen sich ab"
    ],
    "correct": 1,
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
      "Verliert alle Kraft",
      "Zwei neue Magnete",
      "Wird zu reinem Eisen",
      "Ein Pol verschwindet"
    ],
    "correct": 1,
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
      "Schallwelle",
      "Schattenraum",
      "Stromkreis",
      "Magnetfeld"
    ],
    "correct": 3,
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
      "Überall absolut gleich",
      "An den beiden Polen",
      "Nur auf der Oberseite",
      "Exakt in der Mitte"
    ],
    "correct": 1,
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
      "Nächste Sonnenlicht",
      "Der geograf. Äquator",
      "Nächste Strommasten",
      "Erdmagnetfeld"
    ],
    "correct": 3,
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
      "Magnetischer Nordpol",
      "Der Minuspol der Erde",
      "Der Pluspol der Erde",
      "Magnetischer Südpol"
    ],
    "correct": 3,
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
      "Plastikrohr mit Wasser",
      "Holzstab mit Schnur",
      "Glaskugel mit Kupfer",
      "Spule mit Eisenkern"
    ],
    "correct": 3,
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
      "Braucht nie Energie",
      "An- u. ausschaltbar",
      "Zieht auch Glas an",
      "Geht niemals kaputt"
    ],
    "correct": 1,
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
      "Eisenkern weglassen",
      "Kabel stark kühlen",
      "Weniger Strom nutzen",
      "Mehr Windungen Draht"
    ],
    "correct": 3,
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
      "In Holzschneidebretten",
      "In Plastikflaschen",
      "In einfachen Fenstern",
      "In Schrottplatzkranen"
    ],
    "correct": 3,
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
      "Elektromagnete",
      "Permanentmagnete",
      "Gleichstromringe",
      "Wechseleisenpole"
    ],
    "correct": 1,
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
      "Anheben von Holzstück",
      "Starke Erschütterung",
      "Lagerung im Dunkeln",
      "Eintauchen in Wasser"
    ],
    "correct": 1,
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
      "Molekülverbände",
      "Elektronenringe",
      "Atombausteine Kern"
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
      "Erhitzen des Metalls",
      "Ordnen der Bereiche",
      "Aufladen mit Atomen",
      "Erzeugung neuer Stoffe"
    ],
    "correct": 1,
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
      "Das Ozonloch oben",
      "Das Erdmagnetfeld",
      "Der Wolkengürtel",
      "Der Erdatmosphärenring"
    ],
    "correct": 1,
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
      "Das Gewitterleuchten",
      "Der Regenbogen",
      "Das Polarlicht",
      "Die Fata Morgana"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An den Polen treten die Teilchen in die Atmosphäre u. erzeugen Polarlichter (Aurora)."
  },
  {"id":"k6ph101","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Geschwindigkeit v = …","answers":["s×t","s/t","t/s","s+t"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Weg/Zeit.","topic":"erweiterung"},
  {"id":"k6ph102","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Einheit Kraft?","answers":["Joule","Newton","Watt","Ohm"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Newton.","topic":"erweiterung"},
  {"id":"k6ph103","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Dichte = …","answers":["m×V","m/V","V/m","m+V"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Masse/Volumen.","topic":"erweiterung"},
  {"id":"k6ph104","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Energieerhaltung: Energie wird …","answers":["vernichtet","umgewandelt","nur erzeugt aus nichts","nur vernichtet"],"correct":1,"difficulty":"mittel","points":10,"explanation":"umgewandelt.","topic":"erweiterung"},
  {"id":"k6ph105","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Wärmeübertragung Leitung = …","answers":["Strahlung","Kontakt im Stoff","Konvektion Strömung","Schall"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Wärmeleitung.","topic":"erweiterung"},
  {"id":"k6ph106","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Stromkreis: Spannung Einheit?","answers":["Ampere","Volt","Ohm","Watt"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Volt.","topic":"erweiterung"},
  {"id":"k6ph107","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Ohm‘sches Gesetz: U = …","answers":["R/I","R×I","I/R","R+I"],"correct":1,"difficulty":"mittel","points":10,"explanation":"U=R·I.","topic":"erweiterung"},
  {"id":"k6ph108","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Magnet: Feldlinien verlaufen außerhalb …","answers":["S→N","N→S","zufällig","nur kreis"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Nord nach Süd.","topic":"erweiterung"},
  {"id":"k6ph109","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Licht: Reflexion Einfallswinkel = …","answers":["90° immer","Ausfallswinkel","0°","Brechung"],"correct":1,"difficulty":"mittel","points":10,"explanation":"gleich.","topic":"erweiterung"},
  {"id":"k6ph110","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Schall braucht …","answers":["Vakuum","Medium","nur Licht","nur Magnete"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Medium.","topic":"erweiterung"},
  {"id":"k6ph111","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Arbeit W = …","answers":["F/s","F×s","F+s","s/F"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Kraft×Weg.","topic":"erweiterung"},
  {"id":"k6ph112","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Leistung P = …","answers":["W×t","W/t","t/W","W+t"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Arbeit/Zeit.","topic":"erweiterung"},
  {"id":"k6ph113","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Druck p = …","answers":["F×A","F/A","A/F","F+A"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Kraft/Fläche.","topic":"erweiterung"},
  {"id":"k6ph114","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Aggregatzustand: verdampfen = …","answers":["fest→flüssig","flüssig→gasförmig","gas→fest","fest→gas direkt immer"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Sieden/Verdampfen.","topic":"erweiterung"},
  {"id":"k6ph115","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Trägheit: Körper bleibt …","answers":["immer beschleunigt","im Zustand ohne Kraft","ohne Masse","ohne Energie"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Trägheitsgesetz.","topic":"erweiterung"},
  {"id":"k6ph116","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Energie kinetisch hängt ab von …","answers":["nur Farbe","Masse und Geschwindigkeit","nur Volumen","nur Temperatur"],"correct":1,"difficulty":"mittel","points":10,"explanation":"½mv².","topic":"erweiterung"},
  {"id":"k6ph117","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Isolator Beispiel?","answers":["Kupfer","Kunststoff","Eisen","Silber"],"correct":1,"difficulty":"mittel","points":10,"explanation":"schlecht leitend.","topic":"erweiterung"},
  {"id":"k6ph118","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Kurzschluss: Widerstand sehr …","answers":["groß","klein","unendlich","gleich Spannung"],"correct":1,"difficulty":"mittel","points":10,"explanation":"sehr klein.","topic":"erweiterung"},
  {"id":"k6ph119","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Linsentyp sammelnd: …","answers":["Zerstreuungslinse","Konvexlinse","Plane","Spiegel nur"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Konvex.","topic":"erweiterung"},
  {"id":"k6ph120","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Einheit Energie?","answers":["Newton","Joule","Ampere","Kelvin"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Joule.","topic":"erweiterung"},
  {"id":"k6ph121","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Temperatur absolut 0 K ≈ …","answers":["0 °C","−273 °C","100 °C","−100 °C"],"correct":1,"difficulty":"mittel","points":10,"explanation":"−273,15 °C.","topic":"erweiterung"},
  {"id":"k6ph122","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Schwingung Periode T ist …","answers":["Frequenz","Dauer einer Schwingung","Amplitude","Lautstärke"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Periodendauer.","topic":"erweiterung"},
  {"id":"k6ph123","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Frequenz f = …","answers":["T","1/T","T²","2T"],"correct":1,"difficulty":"mittel","points":10,"explanation":"1/T.","topic":"erweiterung"},
  {"id":"k6ph124","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Gravitation wirkt …","answers":["nur auf Eisen","zwischen Massen","nur auf der Erde","nur im Wasser"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Massen.","topic":"erweiterung"},
  {"id":"k6ph125","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Hebel: Last × Lastarm = …","answers":["Kraft nur","Kraft × Kraftarm","Masse","Zeit"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Gleichgewicht.","topic":"erweiterung"},
  {"id":"k6ph126","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Spiegelbild: links/rechts …","answers":["oben/unten vertauscht immer","scheint vertauscht","Farbe ändert","Größe immer 2×"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Spiegelung.","topic":"erweiterung"},
  {"id":"k6ph127","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Elektrische Leistung P = …","answers":["U/I","U×I","U+I","I/U"],"correct":1,"difficulty":"mittel","points":10,"explanation":"U·I.","topic":"erweiterung"},
  {"id":"k6ph128","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Reibung … Bewegung oft …","answers":["fördert immer","hemmt","löscht Masse","erzeugt Weg"],"correct":1,"difficulty":"mittel","points":10,"explanation":"hemmt.","topic":"erweiterung"},
  {"id":"k6ph129","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Aggregat: schmelzen bei …","answers":["Siedepunkt","Schmelzpunkt","0 K","Zufall"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Schmelzpunkt.","topic":"erweiterung"},
  {"id":"k6ph130","category":"k6_physik","area":"schule","grade":6,"subject":"physik","question":"Sicherungen schützen vor …","answers":["zu kleiner Spannung","Überstrom","Magnetfeldern nützlich","Schall"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Überstrom.","topic":"erweiterung"}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K6_PHYSIK_QUESTIONS = K6_PHYSIK_QUESTIONS;
}

if (typeof window !== 'undefined') window.K6_PHYSIK_QUESTIONS = K6_PHYSIK_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K6_PHYSIK_QUESTIONS', K6_PHYSIK_QUESTIONS);
