// ================================================================
// KLASSE 7 - PHYSIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K7_PHYSIK_QUESTIONS = [
  // --- OPTIK: LICHT, SCHATTEN, REFLEXION & LINSEN (001 - 025) ---
  {
    "id": "k7_ph_001",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie breitet sich Licht in einem gleichmäßigen (homogenen) Medium aus?",
    "answers": [
      "Spiralartig zum Zentrum hin",
      "Zickzackförmig nach oben hin",
      "Geradlinig nach allen Seiten",
      "Kreisförmig in Schlangenlinien"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lichtstrahlen breiten sich im homogenen Ausbreitungsraum stets geradlinig aus."
  },
  {
    "id": "k7_ph_002",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie hoch ist die Lichtgeschwindigkeit im luftleeren Raum (Vakuum) etwa?",
    "answers": [
      "Ca. 30.000 km pro Sekunde",
      "Ca. 300.000 km pro Sekunde",
      "Ca. 500.000 km pro Sekunde",
      "Ca. 150.000 km pro Sekunde"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Vakuum-Lichtgeschwindigkeit beträgt rund $300.000\\text{ km/s}$ ($3 \\cdot 10^8\\text{ m/s}$)."
  },
  {
    "id": "k7_ph_003",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man den dunklen Raum hinter einem Objekt bei zwei Lichtquellen?",
    "answers": [
      "Licht- und Dunkelbereich",
      "Voll- und Teilreflektor",
      "Spiegel- u. Brechungsraum",
      "Kern- und Halbschatten"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der von beiden Quellen verdeckte Bereich heißt Kernschatten, der nur von einer verdeckte Halbschatten."
  },
  {
    "id": "k7_ph_004",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Konstellation führt zu einer totalen Sonnenfinsternis auf der Erde?",
    "answers": [
      "Sonne steht zwischen Erde-Mond",
      "Mond steht zwischen Erde-Sonne",
      "Mond steht hinter der Erdbahn",
      "Erde steht zwischen Sonne-Mond"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Mond schiebt sich exakt zwischen Sonne u. Erde u. wirft seinen Kernschatten auf die Erde."
  },
  {
    "id": "k7_ph_005",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Konstellation führt zu einer Mondfinsternis?",
    "answers": [
      "Mond steht zwischen Erde-Sonne",
      "Sonne steht zwischen Erde-Mond",
      "Erde steht zwischen Sonne-Mond",
      "Erde steht hinter der Sonnenbahn"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Erde befindet sich zwischen Sonne u. Mond, sodass der Mond durch den Erdschatten wandert."
  },
  {
    "id": "k7_ph_006",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was besagt das optische Reflexionsgesetz an ebenen Spiegeln?",
    "answers": [
      "Einfallswinkel + Reflexion = 90°",
      "Einfallswinkel = Reflexionswinkel",
      "Einfallswinkel > Reflexionswinkel",
      "Einfallswinkel < Reflexionswinkel"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Einfallswinkel $\\alpha$ ist stets exakt gleich dem Reflexionswinkel $\\beta$ ($\\alpha = \\beta$)."
  },
  {
    "id": "k7_ph_007",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Bezüglich welcher Linie werden Einfallswinkel u. Reflexionswinkel gemessen?",
    "answers": [
      "Zum Senkrechten Einfallslot",
      "Zur Parallelen Spiegelfläche",
      "Zur Tangente der Lichtquelle",
      "Zum Horizontalen Lichtstrahl"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beide Winkel werden immer zum gedachten Einfallslot (90° zur Spiegeloberfläche) gemessen."
  },
  {
    "id": "k7_ph_008",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was für ein Bild entsteht beim Betrachten im ebenen Haushaltspiegel?",
    "answers": [
      "Reelles, umgekehrtes Bild",
      "Virtuelles, verdrehtes Bild",
      "Reelles, vergrößertes Bild",
      "Virtuelles, aufrechtes Bild"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ebene Spiegel erzeugen ein scheinbares (virtuelles), aufrechtes u. seitenvertauschtes Bild."
  },
  {
    "id": "k7_ph_009",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie bricht ein Lichtstrahl beim Übergang von Luft in Glas (dichteres Medium)?",
    "answers": [
      "Er wird überhaupt nicht gebrochen",
      "Er wird zum Lot hin gebrochen",
      "Er wird vom Lot weg gebrochen",
      "Er wird komplett reflektiert"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Übergang von optisch dünneren in optisch dichtere Medien bricht das Licht zum Lot hin."
  },
  {
    "id": "k7_ph_010",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie bricht ein Lichtstrahl beim Übergang von Glas in Luft (dünneres Medium)?",
    "answers": [
      "Er wird zum Lot hin gebrochen",
      "Er stoppt im Übergangsbereich",
      "Er verläuft völlig ungebrochen",
      "Er wird vom Lot weg gebrochen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Übergang von optisch dichteren in optisch dünnere Medien bricht Licht vom Lot weg."
  },
  {
    "id": "k7_ph_011",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche optische Eigenschaft besitzt eine Sammellinse (Konvexlinse)?",
    "answers": [
      "Rand dicker als in Mitte",
      "Mitte dicker als am Rand",
      "Beide Seiten ganz flach",
      "Brechung nur nach außen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sammellinsen sind in der Mitte dicker als am Rand u. bündeln paralleles Licht im Brennpunkt."
  },
  {
    "id": "k7_ph_012",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche optische Eigenschaft besitzt eine Zerstreuungslinse (Konkavlinse)?",
    "answers": [
      "Fokussiert Licht im Punkt",
      "Mitte dicker als am Rand",
      "Brechung nur zum Zentrum",
      "Mitte dünner als am Rand"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zerstreuungslinsen sind in der Mitte dünner u. lassen paralleles Licht auseinanderstreben."
  },
  {
    "id": "k7_ph_013",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man den Punkt, in dem eine Sammellinse parallele Lichtstrahlen vereint?",
    "answers": [
      "Der Mittelpunkt der Linse",
      "Der Schnittpunkt am Rand",
      "Der Reflexionspunkt F",
      "Der Brennpunkt (Fokus)"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Brennpunkt $F$ schneiden sich alle parallel zur optischen Achse einfallenden Lichtstrahlen."
  },
  {
    "id": "k7_ph_014",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was beschreibt die Brennweite $f$ einer Linsenkonstruktion?",
    "answers": [
      "Winkel der Lichtbrechung",
      "Durchmesser der Linsenfläche",
      "Abstand Linse bis Brennpunkt",
      "Dicke der Linse in der Mitte"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Brennweite $f$ misst die Distanz zwischen der Linsenmitte u. dem Brennpunkt $F$."
  },
  {
    "id": "k7_ph_015",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was für ein Bild erzeugt eine Sammellinse von weit entfernten Gegenständen?",
    "answers": [
      "Virtuelles, aufrechtes Bild",
      "Reelles, umgekehrtes Bild",
      "Reelles, unverändertes Bild",
      "Virtuelles, vergrößertes Bild"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Liegt der Gegenstand außerhalb der doppelten Brennweite, ist das erzeugte Bild reell u. umgekehrt."
  },
  {
    "id": "k7_ph_016",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche optische Aufgabe erfüllt die Pupille im menschlichen Auge?",
    "answers": [
      "Reguliert den Lichteinfall",
      "Bündelt Licht als Linse",
      "Wandelt Licht in Signale",
      "Schützt Auge vor Staub"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Pupille arbeitet wie eine Blende u. verändert ihre Weite je nach Helligkeit."
  },
  {
    "id": "k7_ph_017",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man die Fähigkeit des Auges, sich auf verschiedene Entfernungen einzustellen?",
    "answers": [
      "Die Reflexion Linse",
      "Die Dispersion Licht",
      "Die Akkommodation",
      "Die Adaptation Auge"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Akkommodation bezeichnet die Krümmungsänderung der Augenlinse zur Scharfstellung."
  },
  {
    "id": "k7_ph_018",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Auf welcher Struktur des Auges entsteht bei gesunder Sicht ein scharfes Bild?",
    "answers": [
      "Auf dem Sehnervenkopf",
      "Auf der Regenbogenhaut",
      "Auf der Netzhaut (Retina)",
      "Auf der Hornhaut vorn"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Sehzellen der Netzhaut wandeln das eintreffende Lichtbild in Nervenimpulse um."
  },
  {
    "id": "k7_ph_019",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Mit welcher Linsenart korrigiert man eine Kurzsichtigkeit des Auges?",
    "answers": [
      "Mit einer Vergrößerungslinse",
      "Mit einer Sammellinse",
      "Mit einer Zylinderlinse",
      "Mit einer Zerstreuungslinse"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kurzsichtige Augen fokussieren vor der Netzhaut; Zerstreuungslinsen verlegen den Punkt nach hinten."
  },
  {
    "id": "k7_ph_020",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Mit welcher Linsenart korrigiert man eine Weitsichtigkeit des Auges?",
    "answers": [
      "Mit einer Sammellinse",
      "Mit einer Lochblendenbrille",
      "Mit einer Planglasfolie",
      "Mit einer Zerstreuungslinse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Weitsichtige Augen fokussieren hinter der Netzhaut; Sammellinsen bündeln das Licht zusätzlich."
  },
  {
    "id": "k7_ph_021",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man die Aufspaltung von weißem Licht in Spektralfarben am Glasprisma?",
    "answers": [
      "Die Absorption der Farbe",
      "Die Totalreflexion Licht",
      "Die Polarisation Welle",
      "Die Dispersion (Streuung)"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dispersion bezeichnet die frequenzabhängige Brechung unterschiedlicher Lichtfarben."
  },
  {
    "id": "k7_ph_022",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Spektralfarbe wird beim Durchgang durch ein Glasprisma am stärksten gebrochen?",
    "answers": [
      "Die Farbe Rot",
      "Die Farbe Grün",
      "Die Farbe Violett",
      "Die Farbe Gelb"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kurzwellige, blau-violette Lichtstrahlen erfahren im Glas die stärkste Brechung."
  },
  {
    "id": "k7_ph_023",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Spektralfarbe wird beim Durchgang durch ein Prisma am schwächsten gebrochen?",
    "answers": [
      "Die Farbe Violett",
      "Die Farbe Cyan",
      "Die Farbe Blau",
      "Die Farbe Rot"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Langwelliges rotes Licht wird am schwächsten abgelenkt."
  },
  {
    "id": "k7_ph_024",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert mit dem Sehwinkel, wenn man sich einem Gegenstand nähert?",
    "answers": [
      "Sehwinkel bleibt konstant",
      "Sehwinkel wird kleiner",
      "Sehwinkel fällt auf Null",
      "Sehwinkel wird größer"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Je näher der Gegenstand am Auge liegt, desto größer wird der Sehwinkel u. das Bild auf der Netzhaut."
  },
  {
    "id": "k7_ph_025",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wann tritt Totalreflexion an einer Grenzfläche zweier Medien auf?",
    "answers": [
      "Dicht zu dünn ab Grenzwinkel",
      "Dünn zu dicht bei 0 Grad",
      "Bei jedem Einfallswinkel stets",
      "Nur im Vakuum ohne Medien"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Trifft Licht vom optisch dichteren auf das dünnere Medium oberhalb des Grenzwinkels, wird es komplett reflektiert."
  },

  // --- MECHANIK: DICHTE, KRÄFTE, DRUCK & AUFTRIEB (026 - 050) ---
  {
    "id": "k7_ph_026",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die physikalische Formel zur Berechnung der Dichte $\\rho$?",
    "answers": [
      "Formel: Dichte = Volumen / Masse",
      "Formel: Dichte = Masse / Volumen",
      "Formel: Dichte = Kraft / Fläche",
      "Formel: Dichte = Masse * Volumen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\rho = m / V$ (Dichte = Masse geteilt durch Volumen)."
  },
  {
    "id": "k7_ph_027",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Einheit nutzt man für die Dichte festes Material häufig im Alltag?",
    "answers": [
      "Einheit: Pascal pro Liter",
      "Einheit: g/cm³ oder kg/m³",
      "Einheit: Newton pro Meter",
      "Einheit: Joule pro Kubik"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gebräuchliche Dichteeinheiten sind Gramm pro Kubikzentimeter oder Kilogramm pro Kubikmeter."
  },
  {
    "id": "k7_ph_028",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie groß ist die Dichte von reinem flüssigen Wasser bei 4 °C exakt?",
    "answers": [
      "Dichte: 2,0 g/cm³",
      "Dichte: 1,0 g/cm³",
      "Dichte: 0,8 g/cm³",
      "Dichte: 1,5 g/cm³"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser besitzt bei 4 °C seine höchste Dichte von exakt $1{,}0\\text{ g/cm}^3$ ($1000\\text{ kg/m}^3$)."
  },
  {
    "id": "k7_ph_029",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was versteht man unter der Anomalie des Wassers?",
    "answers": [
      "Dichte sinkt bei Erwärmen",
      "Gefriert erst bei -20 °C",
      "Höchste Dichte bei 4 °C",
      "Siedet bereits bei 50 °C"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser dehnt sich unterhalb von 4 °C beim Abkühlen wieder aus, weshalb Eis oben schwimmt."
  },
  {
    "id": "k7_ph_030",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was unterscheidet die Masse $m$ grundsätzlich von der Gewichtskraft $F_g$?",
    "answers": [
      "Masse ändert sich Mond",
      "Gewicht misst in Gramm",
      "Masse überall konstant",
      "Gewichtskraft ist starr"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Masse $m$ bleibt überall gleich, die Gewichtskraft $F_g$ hängt vom örtlichen Schwerefeld ab."
  },
  {
    "id": "k7_ph_031",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie berechnet man die Gewichtskraft $F_g$ eines Körpers?",
    "answers": [
      "Formel: Fg = m / g",
      "Formel: Fg = m * g",
      "Formel: Fg = g / m",
      "Formel: Fg = m + g"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gewichtskraft = Masse mal Ortsfaktor ($F_g = m \\cdot g$)."
  },
  {
    "id": "k7_ph_032",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie groß ist der Ortsfaktor $g$ auf der Erdoberfläche im Durchschnitt?",
    "answers": [
      "Ortsfaktor: ca. 5,00 N/kg",
      "Ortsfaktor: ca. 15,0 N/kg",
      "Ortsfaktor: ca. 9,81 N/kg",
      "Ortsfaktor: ca. 1,62 N/kg"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Auf der Erde beträgt die Schwerefeldstärke im Schnitt $g \\approx 9{,}81\\text{ N/kg}$ (oft gerundet $10\\text{ N/kg}$)."
  },
  {
    "id": "k7_ph_033",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche SI-Einheit nutzt man zur Messung physikalischer Kräfte?",
    "answers": [
      "Einheit: Das Newton (N)",
      "Einheit: Das Pascal (Pa)",
      "Einheit: Das Joule (J)",
      "Einheit: Das Watt (W)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kräfte werden in der SI-Einheit Newton (N) gemessen."
  },
  {
    "id": "k7_ph_034",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Messgerät verwendet man im Physikunterricht zur Kraftmessung?",
    "answers": [
      "Der Schieblehre Bügel",
      "Die Balkenwaage Fein",
      "Das Barometer Messung",
      "Der Federkraftmesser"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Federkraftmesser nutzen die elastische Dehnung einer Schraubenfeder zur Kraftbestimmung."
  },
  {
    "id": "k7_ph_035",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was besagt das Hookesche Gesetz für elastische Federn?",
    "answers": [
      "Kraft proportional Masse",
      "Kraft quadratisch Weg",
      "Kraft unabhängig Weg",
      "Kraft proportional Weg"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Auslenkung $s$ einer Feder ist direkt proportional zur angreifenden Kraft $F$ ($F = D \\cdot s$)."
  },
  {
    "id": "k7_ph_036",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was kennzeichnet eine Feder mit einer sehr hohen Federkonstante $D$?",
    "answers": [
      "Sehr steife, harte Feder",
      "Sehr weiche, dünne Feder",
      "Sehr leichte Drahtfeder",
      "Sehr lange, biegsame Feder"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein hohes $D$ bedeutet, dass viel Kraft pro Zentimeter Auslenkung nötig ist (harte Feder)."
  },
  {
    "id": "k7_ph_037",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was besagt das Prinzip des Archimedes bezüglich der Auftriebskraft?",
    "answers": [
      "Auftrieb = verdrängte Masse",
      "Auftrieb = doppelte Masse",
      "Auftrieb = Druck am Boden",
      "Auftrieb = halbes Gewicht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Auftriebskraft ist genau so groß wie die Gewichtskraft der vom Körper verdrängten Flüssigkeitsmenge."
  },
  {
    "id": "k7_ph_038",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wann schwimmt ein fester Körper in einem flüssigen Medium?",
    "answers": [
      "Dichte Körper < Dichte Fl.",
      "Dichte Körper = Dichte Fl.",
      "Gewicht Körper = unendlich",
      "Dichte Körper > Dichte Fl."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist die Dichte des Körpers geringer als die der Flüssigkeit, schwimmt der Körper an der Oberfläche."
  },
  {
    "id": "k7_ph_039",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wann sinkt ein Körper in einer Flüssigkeit auf den Boden?",
    "answers": [
      "Dichte Körper > Dichte Fl.",
      "Volumen Körper = Null cm³",
      "Dichte Körper < Dichte Fl.",
      "Dichte Körper = Dichte Fl."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ist die Dichte des Körpers größer als die der Flüssigkeit, sinkt er zu Boden."
  },
  {
    "id": "k7_ph_040",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wann schwebt ein Körper völlig untergetaucht in einer Flüssigkeit?",
    "answers": [
      "Dichte Körper < Dichte Fl.",
      "Masse Körper = Null Gramm",
      "Dichte Körper = Dichte Fl.",
      "Dichte Körper > Dichte Fl."
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sind die Dichten von Körper u. Flüssigkeit identisch, bleibt der Körper in Schwebe."
  },
  {
    "id": "k7_ph_041",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die physikalische Formel zur Berechnung des Drucks $p$?",
    "answers": [
      "Formel: Druck = Kraft / Fläche",
      "Formel: Druck = Masse * Fläche",
      "Formel: Druck = Fläche / Kraft",
      "Formel: Druck = Kraft * Fläche"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$p = F / A$ (Druck ist senkrecht angreifende Kraft pro Flächeneinheit)."
  },
  {
    "id": "k7_ph_042",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche SI-Einheit wird für den physikalischen Druck genutzt?",
    "answers": [
      "Das Joule (1 J = 1 Nm/s)",
      "Das Watt (1 W = 1 J * s)",
      "Das Newton (1 N = 1 kg/m)",
      "Das Pascal (1 Pa = 1 N/m²)"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die SI-Einheit des Drucks ist das Pascal ($1\\text{ Pa} = 1\\text{ N/m}^2$)."
  },
  {
    "id": "k7_ph_043",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie verhält sich der Schweredruck in einer Flüssigkeit mit der Tiefe?",
    "answers": [
      "Er nimmt proportional ab",
      "Er nimmt proportional zu",
      "Er bleibt völlig gleich",
      "Er sinkt sprunghaft ab"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Je tiefer man taucht, desto höher ist die Last der darüber liegenden Flüssigkeitssäule ($p = \\rho \\cdot g \\cdot h$)."
  },
  {
    "id": "k7_ph_044",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie hoch ist der mittlere Luftdruck der Atmosphäre auf Meereshöhe etwa?",
    "answers": [
      "Ca. 2000 hPa (2,000 bar)",
      "Ca. 100 hPa (0,100 bar)",
      "Ca. 500 hPa (0,500 bar)",
      "Ca. 1013 hPa (1,013 bar)"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Normalluftdruck beträgt auf Meereshöhe etwa $1013\\text{ hPa} = 1{,}013\\text{ bar}$."
  },
  {
    "id": "k7_ph_045",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Warum sinkt man mit Schneeschuhen im tiefen Schnee viel weniger ein?",
    "answers": [
      "Große Fläche senkt Druck",
      "Kleine Fläche hebt Druck",
      "Schneeschuh hebt Schwerkraft",
      "Schneeschuh mindert Masse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Vergrößerung der Auftrittsfläche $A$ verteilt sich das Gewicht, der Druck $p$ sinkt."
  },
  {
    "id": "k7_ph_046",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie steht der Flüssigkeitsspiegel in verbundenen Gefäßen (kommunizierenden Röhren)?",
    "answers": [
      "In breiten Röhren höher",
      "Zufällig schwankend stets",
      "Überall exakt gleich hoch",
      "In dünnen Röhren höher"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In offen kommunizierenden Gefäßen steht eine homogene Flüssigkeit überall gleich hoch."
  },
  {
    "id": "k7_ph_047",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was beschreibt die physikalische Trägheit (1. Newtonsches Gesetz)?",
    "answers": [
      "Beharren im Zustand",
      "Ständige Beschleunigung",
      "Auflösung von Kräften",
      "Ständiges Verlangsamen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Körper verharren ohne äußere Gesamtkraft in Ruhe oder in geradlinig-gleichförmiger Bewegung."
  },
  {
    "id": "k7_ph_048",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Reibungsart wirkt zwischen zwei ruhenden Gegenständen, die verschoben werden sollen?",
    "answers": [
      "Die Rollreibung",
      "Die Haftreibung",
      "Die Gleitreibung",
      "Die Strömungsreibung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Haftreibung verhindert das Anrücken ruhender Körper u. ist meist größer als die Gleitreibung."
  },
  {
    "id": "k7_ph_049",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Reibungsart ist bei gleichen Materialien in der Regel am kleinsten?",
    "answers": [
      "Die Standreibung",
      "Die Rollreibung",
      "Die Gleitreibung",
      "Die Haftreibung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rollreibung (z. B. beim Kugellager) ist deutlich geringer als Gleit- oder Haftreibung."
  },
  {
    "id": "k7_ph_050",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche zwei grundlegenden Wirkungen kann eine Kraft auf einen Körper ausüben?",
    "answers": [
      "Verformung u. Bewegung",
      "Erwärmung u. Lichtabgabe",
      "Masseaufbau u. Zerfall",
      "Gewichtszunahme u. Schmelz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kräfte verformen Körper (elastisch/plastisch) oder ändern deren Bewegungszustand."
  },

  // --- MECHANIK: EINFACHE MASCHINEN, ARBEIT & LEISTUNG (051 - 075) ---
  {
    "id": "k7_ph_051",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was besagt die 'Goldene Regel der Mechanik'?",
    "answers": [
      "Weg sparen spart Kraft",
      "Arbeit wird verringert",
      "Kraft sparen spart Weg",
      "Kraft sparen kostet Weg"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Was man an Kraft spart, muss man an Weg zusetzen; die Arbeit $W$ bleibt idealerweise gleich."
  },
  {
    "id": "k7_ph_052",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die physikalische Formel für die mechanische Arbeit $W$?",
    "answers": [
      "Formel: Arbeit = Masse * Zeit",
      "Formel: Arbeit = Kraft / Weg",
      "Formel: Arbeit = Kraft * Weg",
      "Formel: Arbeit = Kraft * Zeit"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$W = F \\cdot s$ (Arbeit = Kraft mal Weg in Richtung der Kraft)."
  },
  {
    "id": "k7_ph_053",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche SI-Einheit nutzt man für die mechanische Arbeit?",
    "answers": [
      "Das Pascal (1 Pa = 1 N/m)",
      "Das Watt (1 W = 1 J * s)",
      "Das Newton (1 N = 1 kg/m)",
      "Das Joule (1 J = 1 Nm)"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Arbeit u. Energie werden in der Einheit Joule ($J$) angegeben ($1\\text{ J} = 1\\text{ N} \\cdot \\text{m}$)."
  },
  {
    "id": "k7_ph_054",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die Formel zur Berechnung der mechanischen Leistung $P$?",
    "answers": [
      "Formel: Leistung = Zeit / Arbeit",
      "Formel: Leistung = Arbeit / Zeit",
      "Formel: Leistung = Arbeit * Zeit",
      "Formel: Leistung = Kraft / Weg"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$P = W / t$ (Leistung ist Arbeit pro Zeitspanne)."
  },
  {
    "id": "k7_ph_055",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche SI-Einheit verwendet man für die mechanische u. elektrische Leistung?",
    "answers": [
      "Das Joule (1 J = 1 W * s)",
      "Das Watt (1 W = 1 J/s)",
      "Das Newton (1 N = 1 W/m)",
      "Das Pascal (1 Pa = 1 J/m²)"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Leistung misst man in Watt ($W$) ($1\\text{ W} = 1\\text{ Joule pro Sekunde}$)."
  },
  {
    "id": "k7_ph_056",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet das zweiseitige Hebelgesetz im Gleichgewichtszustand?",
    "answers": [
      "Formel: F1 / l1 = F2 / l2",
      "Formel: F1 * F2 = l1 * l2",
      "Formel: F1 + l1 = F2 + l2",
      "Formel: F1 * l1 = F2 * l2"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kraft mal Kraftarm = Last mal Lastarm ($F_1 \\cdot l_1 = F_2 \\cdot l_2$)."
  },
  {
    "id": "k7_ph_057",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was versteht man unter dem Lastarm an einem Hebel?",
    "answers": [
      "Abstand Last zu Drehpunkt",
      "Länge des gesamten Hebels",
      "Abstand Kraft zu Lastpunkt",
      "Abstand Boden zum Drehpunkt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Lastarm ist der senkrechte Abstand von der Angriffslinie der Lastkraft zum Drehpunkt."
  },
  {
    "id": "k7_ph_058",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was versteht man unter dem Kraftarm an einem Hebel?",
    "answers": [
      "Abstand Kraft zu Drehpunkt",
      "Abstand Last zu Kraftpunkt",
      "Höhe der Kraft über Boden",
      "Winkel des Hebels im Raum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kraftarm ist der senkrechte Abstand zwischen der angreifenden Kraft u. dem Drehpunkt."
  },
  {
    "id": "k7_ph_059",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Alltagswerkzeug funktioniert als zweiseitiger Hebel?",
    "answers": [
      "Der Nussknacker Metall",
      "Die Schubkarre Bau",
      "Die Pinzette Kosmetik",
      "Die Haushaltsschere"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei der Schere liegt der Drehpunkt in der Mitte zwischen den Griffen u. den Schneiden (zweiseitig)."
  },
  {
    "id": "k7_ph_060",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Alltagswerkzeug funktioniert als einseitiger Hebel?",
    "answers": [
      "Die Bau-Schubkarre",
      "Die Spielplatzwippe",
      "Die Balkenwaage Fein",
      "Der Hand-Zangenkopf"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei der Schubkarre liegt das Rad (Drehpunkt) ganz vorne, Last u. Kraft greifen auf derselben Seite an."
  },
  {
    "id": "k7_ph_061",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Wirkung erzielt eine feste Rolle (Umlenkrolle)?",
    "answers": [
      "Halbiert die Zuggkraft",
      "Viertelt die Zugkraft",
      "Ändert nur Kraftrichtung",
      "Halbiert den Seilweg"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Feste Rollen sparen keine Zugkraft, sondern lenken die Richtung bequem um."
  },
  {
    "id": "k7_ph_062",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Wirkung erzielt eine einzelne lose Rolle beim Heben einer Last?",
    "answers": [
      "Viertelt nötige Zugkraft",
      "Halbiert nötige Zugkraft",
      "Verdoppelt nötige Kraft",
      "Ändert nur Kraftrichtung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine lose Rolle verteilt die Last auf zwei tragende Seilstränge u. halbiert die erforderliche Kraft."
  },
  {
    "id": "k7_ph_063",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Flaschenzug mit 2 tragenden Seilen: Wie verhält sich Zugkraft $F$ u. Seilweg $s$?",
    "answers": [
      "Halbe Kraft, doppelter Weg",
      "Viertel Kraft, viertel Weg",
      "Halbe Kraft, halber Weg",
      "Doppelte Kraft, doppelter Weg"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Man benötigt nur die Hälfte der Kraft, muss dafür aber die doppelte Seillänge ziehen."
  },
  {
    "id": "k7_ph_064",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Flaschenzug mit 4 tragenden Seilen: Wie groß ist die nötige Zugkraft $F$?",
    "answers": [
      "Ein Halb der Lastkraft",
      "Ein Viertel der Lastkraft",
      "Gleich der vollen Lastkraft",
      "Ein Achtel der Lastkraft"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei 4 tragenden Seilsträngen beträgt die Zugkraft $F = F_{\\text{Last}} / 4$."
  },
  {
    "id": "k7_ph_065",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was bewirkt eine geneigte Rampe (schiefe Ebene) beim Hochziehen von Lasten?",
    "answers": [
      "Spart mechanische Arbeit",
      "Erhöht Kraft, verkürzt Weg",
      "Senkt Kraft u. verkürzt Weg",
      "Senkt Kraft, verlängert Weg"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Hangabtriebskraft ist kleiner als die Hubkraft, der Weg entlang der Ebene aber länger."
  },
  {
    "id": "k7_ph_066",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie ist der mechanische Wirkungsgrad $\\eta$ einer Maschine definiert?",
    "answers": [
      "Reibungsarbeit / Gesamt Weg",
      "Nutzarbeit / Zugeführte Ar.",
      "Zugeführte Ar. / Nutzarbeit",
      "Nutzarbeit * Zugeführte Ar."
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$\\eta = W_{\\text{nutz}} / W_{\\text{zu}}$ (stets kleiner als $1{,}0$ bzw. 100 %, da Reibungsverluste auftreten)."
  },
  {
    "id": "k7_ph_067",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die Formel zur Berechnung der Hubarbeit $W_{\\text{hub}}$?",
    "answers": [
      "Formel: Whub = F * h * g",
      "Formel: Whub = m * g / h",
      "Formel: Whub = m * g * h",
      "Formel: Whub = m * h / g"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$W_{\\text{hub}} = F_g \\cdot h = m \\cdot g \\cdot h$."
  },
  {
    "id": "k7_ph_068",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wann wird im physikalischen Sinne KEINE mechanische Arbeit verrichtet?",
    "answers": [
      "Tragen Kiste über Treppe",
      "Anheben Kiste vom Boden",
      "Schieben Kiste auf Boden",
      "Halten Kiste im Stehen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wer eine Kiste nur ruhend hält, legt keinen Weg zurück ($s = 0$), somit $W = 0$."
  },
  {
    "id": "k7_ph_069",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Ein Elektromotor verrichtet 200 J Arbeit in 4 Sekunden. Wie groß ist seine Leistung $P$?",
    "answers": [
      "Leistung: 200 Watt",
      "Leistung: 100 Watt",
      "Leistung: 800 Watt",
      "Leistung: 50 Watt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$P = W / t = 200\\text{ J} / 4\\text{ s} = 50\\text{ Watt}$."
  },
  {
    "id": "k7_ph_070",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Eine Masse von 5 kg wird um 2 m angehoben ($g = 10\\text{ N/kg}$). Wie viel Hubarbeit fällt an?",
    "answers": [
      "Arbeit beträgt: 50 Joule",
      "Arbeit beträgt: 200 Joule",
      "Arbeit beträgt: 100 Joule",
      "Arbeit beträgt: 10 Joule"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$W = m \\cdot g \\cdot h = 5\\text{ kg} \\cdot 10\\text{ N/kg} \\cdot 2\\text{ m} = 100\\text{ J}$."
  },
  {
    "id": "k7_ph_071",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man die aufgewendete Arbeit, um einen Körper zu beschleunigen?",
    "answers": [
      "Die Verformungsarbeit",
      "Die Beschleunigungsarbeit",
      "Die Reibungsarbeit Boden",
      "Die Spannarbeit Feder"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beschleunigungsarbeit erhöht die kinetische Energie (Bewegungsenergie) des Körpers."
  },
  {
    "id": "k7_ph_072",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Auf welchem physikalischen Prinzip beruht das Wellrad (Brunnenkurbel)?",
    "answers": [
      "Auf dem Reflexionsgesetz",
      "Auf dem Hebelgesetz",
      "Auf dem Auftriebsgesetz",
      "Auf der Wärmeleitung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Wellrad ist ein kontinuierlich rotierender ungleicharmiger Hebel."
  },
  {
    "id": "k7_ph_073",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Auf welchem Prinzip beruht die Funktionsweise einer Axt zum Holzspalten?",
    "answers": [
      "Auf dem Druck im Vakuum",
      "Auf der festen Rolle",
      "Auf dem Wellrad Prinzip",
      "Auf der Schiefen Ebene"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Keil entspricht zwei aneinandergefügten schiefen Ebenen, die Kräfte seitlich umlenken."
  },
  {
    "id": "k7_ph_074",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was besagt der Energieerhaltungssatz der Mechanik?",
    "answers": [
      "Gesamtenergie ist konstant",
      "Energie wird verbraucht",
      "Energie geht verloren",
      "Energie entsteht aus Null"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In abgeschlossenen Systemen kann Energie nur umgewandelt, aber nicht erzeugt oder vernichtet werden."
  },
  {
    "id": "k7_ph_075",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Energieform besitzt ein ausgelenktes Pendel am höchsten Umkehrpunkt?",
    "answers": [
      "Potenzielle Energie",
      "Elektrische Energie",
      "Chemische Energie",
      "Kinetische Energie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Am höchsten Punkt steht das Pendel kurz still u. besitzt maximale Höhenenergie (potenzielle Energie)."
  },

  // --- ELEKTRIZITÄTSLEHRE: STROM, SPANNUNG, WIDERSTAND & SCHALTUNGEN (076 - 100) ---
  {
    "id": "k7_ph_076",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was versteht man unter der elektrischen Stromstärke $I$?",
    "answers": [
      "Gesamte Energie im Kabel",
      "Hemmung des Flusses",
      "Druck der Elektronen",
      "Ladung pro Zeitspanne"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Stromstärke $I$ gibt an, wie viel elektrische Ladung $Q$ pro Sekunde durch den Querschnitt fließt."
  },
  {
    "id": "k7_ph_077",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche SI-Einheit wird für die elektrische Stromstärke genutzt?",
    "answers": [
      "Das Volt (Symbol: V)",
      "Das Ampere (Symbol: A)",
      "Das Ohm (Symbol: $\\Omega$)",
      "Das Watt (Symbol: W)"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Stromstärke misst man in Ampere ($A$)."
  },
  {
    "id": "k7_ph_078",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was beschreibt die elektrische Spannung $U$ in einem Stromkreis?",
    "answers": [
      "Bremse im Stromfluss",
      "Antrieb der Ladungen",
      "Menge der Elektronen",
      "Dicke der Kupferkabel"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Spannung $U$ ist das Maß für den Druck bzw. den Antrieb der freien Elektronen durch die Quelle."
  },
  {
    "id": "k7_ph_079",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche SI-Einheit wird für die elektrische Spannung verwendet?",
    "answers": [
      "Das Ampere (Symbol: A)",
      "Das Volt (Symbol: V)",
      "Das Joule (Symbol: J)",
      "Das Ohm (Symbol: $\\Omega$)"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die elektrische Spannung wird in Volt ($V$) angegeben."
  },
  {
    "id": "k7_ph_080",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was beschreibt der elektrische Widerstand $R$ eines Bauteils?",
    "answers": [
      "Antrieb der Ladung",
      "Geschwindigkeit Licht",
      "Kapazität des Akkus",
      "Hemmung des Stromflusses"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Widerstand $R$ gibt an, wie stark der Fluss der Elektronen im Leiter behindert wird."
  },
  {
    "id": "k7_ph_081",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche SI-Einheit nutzt man für den elektrischen Widerstand?",
    "answers": [
      "Das Volt (Symbol: V)",
      "Das Ampere (Symbol: A)",
      "Das Ohm (Symbol: $\\Omega$)",
      "Das Watt (Symbol: W)"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der elektrische Widerstand wird in Ohm ($\\Omega$) gemessen."
  },
  {
    "id": "k7_ph_082",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet das Ohmsche Gesetz für ohmsche Widerstände?",
    "answers": [
      "Formel: U = R + I",
      "Formel: U = R * I",
      "Formel: U = I / R",
      "Formel: U = R / I"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spannung = Widerstand mal Stromstärke ($U = R \\cdot I$ bzw. $R = U / I$)."
  },
  {
    "id": "k7_ph_083",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie muss ein Amperemeter zur Stromstärkemessung geschaltet werden?",
    "answers": [
      "In Reihe zum Verbraucher",
      "Zwischen Plus und Minus",
      "An ein isoliertes Kabel",
      "Parallel zum Verbraucher"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Strommessgerät (Amperemeter) muss direkt in Reihe in den Strompfad eingebaut werden."
  },
  {
    "id": "k7_ph_084",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie muss ein Voltmeter zur Spannungsmessung geschaltet werden?",
    "answers": [
      "Parallel zum Verbraucher",
      "Als Ersatz für den Leiter",
      "Direkt vor Schalter aus",
      "In Reihe zum Verbraucher"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spannungsmessgeräte (Voltmeter) misst man parallel über dem Bauteil ab."
  },
  {
    "id": "k7_ph_085",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was gilt für die Stromstärke $I$ an jeder Stelle einer einfachen Reihenschaltung?",
    "answers": [
      "Nimmt mit jedem Lamp ab",
      "Teilt sich an Verzweigung",
      "Wird nach Verbraucher 0",
      "Überall exakt gleich groß"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In einer unverzweigten Reihenschaltung ist die Stromstärke in jedem Abschnitt identisch ($I_{\\text{ges}} = I_1 = I_2$)."
  },
  {
    "id": "k7_ph_086",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was gilt für die elektrische Spannung $U$ an allen Zweigen einer Parallelschaltung?",
    "answers": [
      "Teilt sich auf Zweige auf",
      "Überall exakt gleich groß",
      "Ist im Hauptzweig Null",
      "Hängt ab von der Länge"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In einer Parallelschaltung liegt an jedem einzelnen Zweig die volle Quellenspannung an ($U_{\\text{ges}} = U_1 = U_2$)."
  },
  {
    "id": "k7_ph_087",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie berechnet man den Gesamtwiderstand $R_{\\text{ges}}$ zweier hintereinander geschalteter Widerstände?",
    "answers": [
      "Formel: 1/Rges = R1 + R2",
      "Formel: Rges = R1 * R2",
      "Formel: Rges = R1 + R2",
      "Formel: Rges = R1 / R2"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Reihenschaltung addieren sich die Einzelwiderstände ($R_{\\text{ges}} = R_1 + R_2$)."
  },
  {
    "id": "k7_ph_088",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert mit dem Gesamtwiderstand $R_{\\text{ges}}$, wenn man Widerstände parallel schaltet?",
    "answers": [
      "Er wird kleiner als kleinst",
      "Er entspricht der Summe",
      "Er bleibt völlig gleich",
      "Er wird größer als größt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Parallele Stränge öffnen zusätzliche Leitungswege, wodurch der Gesamtleitungswiderstand sinkt."
  },
  {
    "id": "k7_ph_089",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert in einer Reihenschaltung von Glühlampen, wenn eine Lampe durchbrennt?",
    "answers": [
      "Andere leuchten weiter",
      "Quelle brennt sofort aus",
      "Andere leuchten heller",
      "Alle Lampen gehen aus"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch den Ausfall wird der gesamte Stromkreis unterbrochen, alle Lampen erlöschen."
  },
  {
    "id": "k7_ph_090",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert in einer Parallelschaltung von Glühlampen, wenn eine Lampe ausfällt?",
    "answers": [
      "Andere leuchten weiter",
      "Spannung bricht ein 0V",
      "Alle Lampen gehen aus",
      "Stromstärke steigt stark"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die anderen Stromzweige bleiben geschlossen u. leuchten unbeeinflusst weiter."
  },
  {
    "id": "k7_ph_091",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die Formel zur Berechnung der elektrischen Leistung $P$?",
    "answers": [
      "Formel: P = U / I",
      "Formel: P = U * I",
      "Formel: P = U + I",
      "Formel: P = I / U"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektrische Leistung = Spannung mal Stromstärke ($P = U \\cdot I$)."
  },
  {
    "id": "k7_ph_092",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie berechnet man die verbrauchte elektrische Energie $E$ über die Zeit $t$?",
    "answers": [
      "Formel: E = P / t = U * I / t",
      "Formel: E = U * t / I",
      "Formel: E = P * t = U * I * t",
      "Formel: E = P + t"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektrische Energie ist Leistung mal Zeitspanne ($E = P \\cdot t$)."
  },
  {
    "id": "k7_ph_093",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Material zählt zu den hervorragenden elektrischen Leitern?",
    "answers": [
      "Dry-Kunststoff Hülle",
      "Gummi am Isolator",
      "Kupfermetall im Kabel",
      "Porzellan am Masten"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Metalle wie Kupfer, Silber u. Aluminium besitzen viele frei bewegliche Elektronen."
  },
  {
    "id": "k7_ph_094",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Material zählt zu den Nichtleitern (Isolatoren)?",
    "answers": [
      "Graphit im Bleistift",
      "Aluminiumdraht blank",
      "Eisenstange massiv",
      "PVC-Kunststoffmantel"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kunststoffe, Glas, Keramik u. Gummi leiten unter normalen Bedingungen keinen Strom."
  },
  {
    "id": "k7_ph_095",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was besagt die Knotenpunktregel (1. Kirchhoffsches Gesetz) in der Parallelschaltung?",
    "answers": [
      "Zufluss = Abfluss Strom",
      "Spannung verdoppelt sich",
      "Gesamtspannung = Null Volt",
      "Widerstände werden Null"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Summe der in einen Knoten einfließenden Stromstärken ist gleich der Summe der abfließenden Ströme."
  },
  {
    "id": "k7_ph_096",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was besagt die Maschenregel (2. Kirchhoffsches Gesetz) in der Reihenschaltung?",
    "answers": [
      "Spannung steigt im Kreis",
      "Teilstromstärken = Quelle",
      "Teilspannungen = Quelle",
      "Gesamtwiderstand = Null"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Summe aller Teilspannungen an den Bauteilen ist gleich der Gesamtspannung der Quelle."
  },
  {
    "id": "k7_ph_097",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert physikalisch bei einem ungewollten Kurzschluss im Stromkreis?",
    "answers": [
      "Spannung verdoppelt sich",
      "Widerstand hoch -> Strom 0",
      "Widerstand 0 -> Strom hoch",
      "Sicherung sperrt Spannung"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Widerstand bricht fast auf 0 zusammen, woraufhin die Stromstärke extrem ansteigt (Überhitzungsgefahr)."
  },
  {
    "id": "k7_ph_098",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Schutzfunktion erfüllt eine Schmelzsicherung in Elektrogeräten?",
    "answers": [
      "Kühlt den Verbraucher",
      "Trennt Strom bei Überlast",
      "Verdoppelt Stromstärke",
      "Erhöht die Spannung V"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei zu hohem Strom schmilzt der Draht u. unterbricht den Stromkreis sicher."
  },
  {
    "id": "k7_ph_099",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Hauptwirkung des elektrischen Stroms nutzt man bei einem Wasserkocher?",
    "answers": [
      "Die Wärmewirkung",
      "Die Lichtwirkung",
      "Die Chemische Wirkung",
      "Die Magnetwirkung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fließender Strom erwärmt den elektrischen Widerstandsdraht (Wärmewirkung)."
  },
  {
    "id": "k7_ph_100",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie hoch ist die effektiv anliegende Netzspannung an Steckdosen im deutschen Haushalt?",
    "answers": [
      "Spannung: 110 Volt AC",
      "Spannung: 230 Volt AC",
      "Spannung: 12 Volt DC",
      "Spannung: 400 Volt AC"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Standardmäßige Haushaltssteckdosen in Deutschland liefern $230\\text{ Volt}$ Wechselspannung."
  },



  // ================================================================
// KLASSE 7 - PHYSIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

  // --- MECHANIK (001 - 025) ---
  {
    "id": "k7_phy_001",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die internationale physikalische Einheit der Kraft?",
    "answers": [
      "Das Newton (N)",
      "Das Watt (W)",
      "Das Joule (J)",
      "Das Pascal (Pa)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die physikalische Kraft wird im Internationalen Einheitensystem in Newton (N) gemessen."
  },
  {
    "id": "k7_phy_002",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Formelzeichen verwendet man in der Physik standardmäßig für die Kraft?",
    "answers": [
      "Das Symbol F",
      "Das Symbol m",
      "Das Symbol V",
      "Das Symbol p"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kraft leitet sich vom englischen Wort 'Force' ab und hat das Formelzeichen F."
  },
  {
    "id": "k7_phy_003",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Messgerät nutzt man im Schullabor zur Bestimmung von Kräften?",
    "answers": [
      "Das Barometergerät",
      "Der Federkraftmesser",
      "Der Balkenwaagenarm",
      "Das Messzylinglas"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Federkraftmesser nutzt die Dehnung einer Schraubenfeder zur Kraftmessung."
  },
  {
    "id": "k7_phy_004",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die mathematische Formel zur Berechnung der Dichte $\\rho$ eines Körpers?",
    "answers": [
      "Dichte = Masse * Volumen",
      "Dichte = Volumen / Masse",
      "Dichte = Masse / Volumen",
      "Dichte = Kraft * Masse"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Dichte beschreibt den Quotient aus Masse m und Volumen V ($\\rho = m / V$)."
  },
  {
    "id": "k7_phy_005",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Standardeinheit wird für die Dichte fest fester Stoffe häufig genutzt?",
    "answers": [
      "Kilogramm mal Meter",
      "Gramm pro $cm^3$",
      "Newton pro $m^2$",
      "Joule pro Sekunde"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dichte wird oft in $g/cm^3$ oder $kg/m^3$ angegeben."
  },
  {
    "id": "k7_phy_006",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was unterscheidet die Masse eines Körpers von seiner Gewichtskraft?",
    "answers": [
      "Masse bleibt überall unverändert",
      "Gewichtskraft bleibt immer gleich",
      "Masse hängt vom Ort im All ab",
      "Gewichtskraft misst man in Gramm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Masse ist eine träge Körpereigenschaft (in kg), während die Gewichtskraft vom Ortsfaktor abhängt."
  },
  {
    "id": "k7_phy_007",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie groß ist der durchschnittliche Ortsfaktor $g$ auf der Erdoberfläche?",
    "answers": [
      "Ca. 9.81 N/kg",
      "Ca. 24.79 N/kg",
      "Ca. 1.62 N/kg",
      "Ca. 0.00 N/kg"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Erdbeschleunigungs- bzw. Ortsfaktor beträgt etwa $9,81\\,N/kg$ (oft gerundet auf $10\\,N/kg$)."
  },
  {
    "id": "k7_phy_008",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Reibungsart verhindert das Rutschen eines stehenden Autos am Hang?",
    "answers": [
      "Die Rollreibung",
      "Die Haftreibung",
      "Der Luftwiderstand",
      "Die Gleitreibung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Haftreibung wirkt zwischen ruhenden Körpern und verhindert ein Abreißen der Bewegung."
  },
  {
    "id": "k7_phy_009",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Reibungsart tritt auf, wenn ein Schlitten über eine Eisfläche gleitet?",
    "answers": [
      "Die Rollreibung",
      "Der Auftriebskraft",
      "Die Haftreibung",
      "Die Gleitreibung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sobald zwei Berührflächen aufeinander gleiten, wirkt die Gleitreibung."
  },
  {
    "id": "k7_phy_010",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie verhalten sich die drei Reibungsarten in ihrer Stärke zueinander?",
    "answers": [
      "Haft- > Gleit- > Roll-",
      "Alle sind exakt gleich",
      "Roll- > Gleit- > Haft-",
      "Gleit- > Haft- > Roll-"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Haftreibung ist am größten, gefolgt von der Gleitreibung; die Rollreibung ist am kleinsten."
  },
  {
    "id": "k7_phy_011",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche zwei grundlegenden Wirkungen kann eine Kraft auf einen Körper ausüben?",
    "answers": [
      "Verformung u. Bewegungsänderung",
      "Gewichtsverlust u. Auflösung",
      "Erwärmung u. Lichterscheinung",
      "Dichtezunahme u. Schmelzen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kräfte erkennt man an ihren Wirkungen: Sie können Körper verformen oder ihren Bewegungszustand ändern."
  },
  {
    "id": "k7_phy_012",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die allgemeine Formel für das Hebelgesetz im Gleichgewicht?",
    "answers": [
      "Kraft / Kraftarm = Last / Lastarm",
      "Kraft x Last = Kraftarm x Lastarm",
      "Kraft x Kraftarm = Last x Lastarm",
      "Kraft + Kraftarm = Last + Lastarm"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Am Hebel herrscht Gleichgewicht, wenn das Drehmoment links gleich dem Drehmoment rechts ist ($F_1 \\cdot l_1 = F_2 \\cdot l_2$)."
  },
  {
    "id": "k7_phy_013",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Werkzeug nutzt das Prinzip eines zweiseitigen Hebels?",
    "answers": [
      "Die Pinzette Hand",
      "Der Schubkarren",
      "Der Flaschenöffner",
      "Die Papierschere"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei einer Schere liegt der Drehpunkt zwischen den Angriffspunkten von Kraft u. Last (zweiseitiger Hebel)."
  },
  {
    "id": "k7_phy_014",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Alltagsgerät ist ein klassisches Beispiel für einen einseitigen Hebel?",
    "answers": [
      "Die Balkenwaage",
      "Der Schubkarren",
      "Die Kinderschaukel",
      "Die Wippe im Park"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Schubkarren liegen Last u. Zugkraft auf derselben Seite des Drehpunktes (Achse des Rades)."
  },
  {
    "id": "k7_phy_015",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welchen physikalischen Vorteil bietet eine feststehende Rolle?",
    "answers": [
      "Verringert nötigen Zugweg",
      "Halbiert nötige Zugkraft",
      "Verdoppelt die Nutzleistung",
      "Ändert die Kraftrichtung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine feste Rolle spart keine Kraft, ermöglicht aber ein bequemes Ziehen in eine andere Richtung."
  },
  {
    "id": "k7_phy_016",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welchen Vorteil bietet der Einsatz einer losen Rolle bei einem Hubvorgang?",
    "answers": [
      "Halbiert den Seilweg",
      "Halbiert die Zugkraft",
      "Ändert die Zugrichtung",
      "Spart mechanische Arbeit"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine lose Rolle verteilt die Last auf zwei Seilstücke, sodass nur noch die halbe Kraft aufgewendet werden muss."
  },
  {
    "id": "k7_phy_017",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die 'Goldene Regel der Mechanik'?",
    "answers": [
      "Weniger Kraft spart immer Arbeit",
      "Kraft mal Weg ist immer gleich Null",
      "Kraftersparnis fordert Wegzuwachs",
      "Mehr Weg bedeutet immer mehr Kraft"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Goldene Regel besagt: Was man an Kraft spart, muss man an Weg zusetzen ($W = F \\cdot s$ bleibt konstant)."
  },
  {
    "id": "k7_phy_018",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die internationale Einheit des physikalischen Drucks?",
    "answers": [
      "Das Newton (N)",
      "Das Watt (W)",
      "Das Pascal (Pa)",
      "Das Kelvin (K)"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Druck wird in Pascal (Pa) gemessen, wobei $1\\,Pa = 1\\,N/m^2$ entspricht."
  },
  {
    "id": "k7_phy_019",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie berechnet man den Druck $p$, der auf eine Fläche $A$ wirkt?",
    "answers": [
      "Druck = Kraft * Fläche",
      "Druck = Masse * Fläche",
      "Druck = Kraft / Fläche",
      "Druck = Fläche / Kraft"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Druck ergibt sich aus der senkrecht wirkenden Kraft geteilt durch die Fläche ($p = F / A$)."
  },
  {
    "id": "k7_phy_020",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Warum sinkt man mit Schneeschuhen im tiefen Schnee viel weniger ein?",
    "answers": [
      "Gewicht wird geringer im Schnee",
      "Kleine Fläche erhöht die Kraft",
      "Masse schrumpft beim Betreten",
      "Große Fläche verringert Druck"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch die große Auflagefläche der Schneeschuhe verteilt sich die Gewichtskraft, was den Druck auf den Schnee stark senkt."
  },
  {
    "id": "k7_phy_021",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie berechnet man die mechanische Hubarbeit $W$?",
    "answers": [
      "Arbeit = Kraft x Weg",
      "Arbeit = Kraft / Weg",
      "Arbeit = Masse / Zeit",
      "Arbeit = Druck x Masse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mechanische Arbeit wird verrichtet, wenn ein Körper durch eine Kraft F entlang eines Weges s bewegt wird ($W = F \\cdot s$)."
  },
  {
    "id": "k7_phy_022",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche physikalische Einheit besitzt die Arbeit und die Energie?",
    "answers": [
      "Das Pascal (Pa)",
      "Das Newton (N)",
      "Das Joule (J)",
      "Das Ampere (A)"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Arbeit u. Energie besitzen dieselbe Einheit: Joule (J) beziehungsweise Newtonmeter (Nm)."
  },
  {
    "id": "k7_phy_023",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die SI-Einheit für die physikalische Leistung $P$?",
    "answers": [
      "Das Volt (V)",
      "Das Watt (W)",
      "Das Joule (J)",
      "Das Ohm ($\\Omega$)"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Leistung misst verrichtete Arbeit pro Zeit und wird in Watt ($W = J/s$) angegeben."
  },
  {
    "id": "k7_phy_024",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die mathematische Formel der physikalischen Leistung?",
    "answers": [
      "Leistung = Zeit / Weg",
      "Leistung = Arbeit / Zeit",
      "Leistung = Kraft x Masse",
      "Leistung = Arbeit x Zeit"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Leistung $P$ ist der Quotient aus Arbeit $W$ und dafür benötigter Zeit $t$ ($P = W / t$)."
  },
  {
    "id": "k7_phy_025",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie verhält sich der Schwimmdruck (Schweredruck) in einer Flüssigkeit mit zunehmender Tiefe?",
    "answers": [
      "Er schwankt rein zufällig",
      "Er bleibt völlig konstant",
      "Er nimmt proportional zu",
      "Er nimmt proportional ab"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Je tiefer man in eine Flüssigkeit eintaucht, desto größer ist die darüber lastende Flüssigkeitssäule, weshalb der Druck steigt."
  },

  // --- OPTIK (026 - 050) ---
  {
    "id": "k7_phy_026",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie hoch ist die Lichtgeschwindigkeit im luftleeren Raum (Vakuum) etwa?",
    "answers": [
      "Ca. 340 m/s",
      "Ca. 300.000 m/s",
      "Ca. 3.000 km/h",
      "Ca. 300.000 km/s"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Licht breitet sich im Vakuum mit fast $300.000\\,km/s$ (exakt $299.792.458\\,m/s$) aus."
  },
  {
    "id": "k7_phy_027",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie breitet sich Licht in einem homogenen Medium (z. B. ruhender Luft) aus?",
    "answers": [
      "Geradlinig nach allen Seiten",
      "In kreisförmigen Bahnen",
      "Wellenförmig gezackt",
      "Stets nur nach oben"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In gleichmäßigen Stoffen breiten sich Lichtstrahlen streng geradlinig aus."
  },
  {
    "id": "k7_phy_028",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welcher der folgenden Körper ist eine Selbstleuchte (echte Lichtquelle)?",
    "answers": [
      "Der ebene Spiegel",
      "Der helle Vollmond",
      "Die brennende Kerze",
      "Die glänzende Alufolie"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Kerze erzeugt selbst Licht. Der Mond reflektiert nur das Sonnenlicht."
  },
  {
    "id": "k7_phy_029",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welcher der folgenden Himmelskörper ist ein beleuchteter Körper (keine Selbstleuchte)?",
    "answers": [
      "Ein ferner Fixstern",
      "Der Planet Jupiter",
      "Die leuchtende Sonne",
      "Eine leuchtende Polarsonne"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Planeten wie der Jupiter senden kein eigenes Licht aus, sondern werden von der Sonne angestrahlt."
  },
  {
    "id": "k7_phy_030",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet das grundlegende Reflexionsgesetz an ebenen Spiegeln?",
    "answers": [
      "Einfallswinkel = doppelte Reflexion",
      "Einfallswinkel + Reflexionswinkel = 90°",
      "Einfallswinkel = Reflexionswinkel",
      "Einfallswinkel > Reflexionswinkel"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Einfallswinkel $\\alpha$ ist stets genauso groß wie der Reflexionswinkel $\\beta$ ($\\alpha = \\beta$)."
  },
  {
    "id": "k7_phy_031",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Worauf bezieht sich die Winkelmessung beim Reflexionsgesetz?",
    "answers": [
      "Zur Spiegeloberfläche",
      "Zur Tischkante unten",
      "Zum Einfallslot",
      "Zum Lichtstrahlende"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Winkel werden in der Optik immer zwischen dem Lichtstrahl u. der Senkrechten (Einfallslot) gemessen."
  },
  {
    "id": "k7_phy_032",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Eigenschaften besitzt das Spiegelbild in einem ebenen Spiegel?",
    "answers": [
      "Seitenvertauscht u. gleich groß",
      "Seitenrichtig u. verkleinert",
      "Auf dem Kopf u. vergrößert",
      "Verzerrt u. unscharf immer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Bild im ebenen Spiegel ist ein virtuelles Bild: aufrecht, gleich groß, aber seitenvertauscht."
  },
  {
    "id": "k7_phy_033",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wann tritt die physikalische Erscheinung der Lichtbrechung auf?",
    "answers": [
      "Beim Treffen auf Alufolie",
      "Beim Schattenwurf Wand",
      "Beim Übergang zweier Medien",
      "Im völlig leeren Vakuum"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tritt Licht schräg von einem optischen Medium in ein anderes über (z. B. Luft in Glas), ändert sich die Ausbreitungsrichtung (Brechung)."
  },
  {
    "id": "k7_phy_034",
    "category": "k7_physik",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie bricht der Lichtstrahl beim Übergang vom dünneren Medium (Luft) in das optisch dichtere Medium (Glas)?",
    "answers": [
      "Gar nicht gebrochen",
      "Vom Einfallslot weg",
      "Zurück in die Luft",
      "Zum Einfallslot hin"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Übergang in ein optisch dichteres Medium wird der Lichtstrahl ZUM Lot HIN gebrochen."
  },
  {
    "id": "k7_phy_035",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie bricht der Lichtstrahl beim Übergang vom optisch dichteren Medium (Wasser) in das dünnere Medium (Luft)?",
    "answers": [
      "Parallel zum Glasrand",
      "Gar nicht gebrochen",
      "Vom Einfallslot weg",
      "Zum Einfallslot hin"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Übergang in ein optisch dünneres Medium wird der Strahl VOM Lot WEG gebrochen."
  },
  {
    "id": "k7_phy_036",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche äußere Form kennzeichnet eine optische Sammellinse (Konvexlinse)?",
    "answers": [
      "Völlig plan u. eben",
      "Hohl nach innen gewölbt",
      "Am Rand viel dicker",
      "In der Mitte dicker"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Sammellinse (Konvexlinse) ist in der Mitte dicker als an den Rändern u. bündelt einfallende Strahlen."
  },
  {
    "id": "k7_phy_037",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche äußere Form kennzeichnet eine Zerstreuungslinse (Konkavlinse)?",
    "answers": [
      "Völlig eben u. flach",
      "Kugelförmig rund",
      "In der Mitte dicker",
      "Am Rand viel dicker"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Zerstreuungslinse (Konkavlinse) ist in der Mitte dünner als am Rand u. lenkt Strahlen auseinander."
  },
  {
    "id": "k7_phy_038",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man den Punkt, in dem sich parallel zur optischen Achse einfallende Lichtstrahlen nach einer Sammellinse schneiden?",
    "answers": [
      "Der Polpunkt P",
      "Der Brennpunkt F",
      "Der Scheitelpunkt S",
      "Der Mittelpunkt M"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Brennpunkt (Fokus F) vereinigen sich die gebündelten Lichtstrahlen einer Sammellinse."
  },
  {
    "id": "k7_phy_039",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie bezeichnet man den Abstand zwischen der Linsenmitte und dem Brennpunkt?",
    "answers": [
      "Die Brennweite f",
      "Die Optikweite o",
      "Die Bildweite b",
      "Die Gegenstandsweite g"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Brennweite $f$ misst die Distanz von der Linsenebene bis zum Fokus."
  },
  {
    "id": "k7_phy_040",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wo entsteht bei einem gesunden menschlichen Auge das scharfe Bild der Umwelt?",
    "answers": [
      "Im Glaskörperraum",
      "Auf der Hornhaut",
      "Auf der Netzhaut",
      "In der Augenlinse"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Bild wird vom Linsensystem scharf fokussiert direkt auf die Netzhaut (Retina) projiziert."
  },
  {
    "id": "k7_phy_041",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welchem Linsentyp entspricht die biologische Augenlinse des Menschen?",
    "answers": [
      "Einer Sammellinse",
      "Einer Zerstreuungslinse",
      "Einem ebenen Glas",
      "Einem Hohlspiegel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Augenlinse ist eine elastische Sammellinse, die Lichtstrahlen bündeln kann."
  },
  {
    "id": "k7_phy_042",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Mit welchem Brillenlinsentyp wird eine Kurzsichtigkeit korrigiert?",
    "answers": [
      "Mit Sammellinsen",
      "Mit Zerstreuungslinsen",
      "Mit Fensterglaslinsen",
      "Mit Vergrößerungsglas"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Kurzsichtigkeit ist der Augapfel zu lang; eine Zerstreuungslinse verlegt den Brennpunkt nach hinten auf die Netzhaut."
  },
  {
    "id": "k7_phy_043",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Mit welchem Brillenlinsentyp wird eine Weitsichtigkeit korrigiert?",
    "answers": [
      "Mit Zerstreuungslinsen",
      "Mit Sammellinsen",
      "Mit Hohlspiegeln",
      "Mit getönten Gläsern"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Weitsichtigkeit liegt das Bild hinter der Netzhaut; eine Sammellinse bündelt das Licht stärker."
  },
  {
    "id": "k7_phy_044",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man die Zerlegung des weißen Sonnenlichts in Spektralfarben durch ein Glasprisma?",
    "answers": [
      "Die Absorption komplett",
      "Die Beugung am Gitter",
      "Die Dispersion / Brechung",
      "Die Reflexion an Wand"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unterschiedliche Farbanteile des Lichts werden im Glas unterschiedlich stark gebrochen (Dispersion)."
  },
  {
    "id": "k7_phy_045",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Farbe des sichtbaren Lichts wird beim Durchgang durch ein Prisma am stärksten gebrochen?",
    "answers": [
      "Das rote Licht",
      "Das gelbe Licht",
      "Das violette Licht",
      "Das grüne Licht"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kurzwelliges, blau-violettes Licht wird von Glas am stärksten abgelenkt, langwelliges rotes Licht am schwächsten."
  },
  {
    "id": "k7_phy_046",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Warum erscheint eine reife Tomate unter weißem Sonnenlicht rot?",
    "answers": [
      "Absorbiert rotes Licht",
      "Reflektiert rotes Licht",
      "Bricht nur blaues Licht",
      "Erzeugt rotes Licht"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Körper erscheinen in der Farbe, die sie reflektieren. Eine Tomate schluckt alle Farben außer Rot."
  },
  {
    "id": "k7_phy_047",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Bild erzeugt eine Lochkamera (Camera obscura) auf der Mattscheibe?",
    "answers": [
      "Umgekehrt u. seitenvertauscht",
      "Spiegelverkehrt u. riesig",
      "Aufrecht u. seitenrichtig",
      "Dreidimensional u. farblos"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wegen der geradlinigen Lichtausbreitung entsteht durch das kleine Loch ein auf dem Kopf stehendes, vertauschtes Bild."
  },
  {
    "id": "k7_phy_048",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was kennzeichnet den Bereich des 'Kernschattens' bei zwei Lichtquellen?",
    "answers": [
      "Hell erleuchteter Raum",
      "Kein Licht dringt hinein",
      "Farbiger Randbereich",
      "Teilweise beleuchtet noch"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kernschatten empfängt von KEINER der Lichtquellen direktes Licht."
  },
  {
    "id": "k7_phy_049",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Konstellation führt zu einer totalen Sonnenfinsternis auf der Erde?",
    "answers": [
      "Jupiter verdeckt die Sonne ganz",
      "Mond steht zwischen Erde u. Sonne",
      "Sonne steht zwischen Erde u. Mond",
      "Erde steht zwischen Mond u. Sonne"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei einer Sonnenfinsternis zieht der Mond genau zwischen Sonne u. Erde vorbei u. wirft seinen Schatten auf die Erde."
  },
  {
    "id": "k7_phy_050",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Konstellation führt zu einer Mondfinsternis?",
    "answers": [
      "Sonne steht zwischen Erde u. Mond",
      "Mond steht zwischen Sonne u. Erde",
      "Erde steht zwischen Sonne u. Mond",
      "Mars verdeckt den Mond komplett"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei einer Mondfinsternis bewegt sich der Vollmond durch den Schattenraum der Erde."
  },

  // --- ELEKTRIZITÄTSLEHRE (051 - 075) ---
  {
    "id": "k7_phy_051",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die internationale Einheit der elektrischen Stromstärke $I$?",
    "answers": [
      "Das Ampere (A)",
      "Das Ohm ($\\Omega$)",
      "Das Watt (W)",
      "Das Volt (V)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die elektrische Stromstärke wird in Ampere (A) gemessen."
  },
  {
    "id": "k7_phy_052",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die internationale Einheit der elektrischen Spannung $U$?",
    "answers": [
      "Das Volt (V)",
      "Das Joule (J)",
      "Das Ampere (A)",
      "Das Ohm ($\\Omega$)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die elektrische Spannung wird in Volt (V) angegeben."
  },
  {
    "id": "k7_phy_053",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die internationale Einheit des elektrischen Widerstands $R$?",
    "answers": [
      "Das Ohm ($\\Omega$)",
      "Das Hertz (Hz)",
      "Das Ampere (A)",
      "Das Volt (V)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der elektrische Widerstand wird nach Georg Simon Ohm in Ohm (Symbol $\\Omega$) gemessen."
  },
  {
    "id": "k7_phy_054",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Formelzeichen wird in der Physik für die elektrische Stromstärke genutzt?",
    "answers": [
      "Das Symbol P",
      "Das Symbol I",
      "Das Symbol R",
      "Das Symbol U"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Stromstärke trägt das Formelzeichen I (von engl. Intensität)."
  },
  {
    "id": "k7_phy_055",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Formelzeichen wird für den elektrischen Widerstand verwendet?",
    "answers": [
      "Das Symbol U",
      "Das Symbol I",
      "Das Symbol R",
      "Das Symbol W"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Widerstand hat das Formelzeichen R (engl. Resistance)."
  },
  {
    "id": "k7_phy_056",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet das bekannte Ohmsche Gesetz als mathematische Formel?",
    "answers": [
      "Spannung = Widerstand / Strom",
      "Spannung = Widerstand x Strom",
      "Widerstand = Spannung x Strom",
      "Strom = Spannung x Widerstand"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Ohmsche Gesetz lautet $U = R \\cdot I$ beziehungsweise $R = U / I$."
  },
  {
    "id": "k7_phy_057",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Elementarteilchen sind in einem metallischen Leiter für den Stromfluss verantwortlich?",
    "answers": [
      "Die schweren Neutronen",
      "Die neutralen Atome",
      "Die freien Elektronen",
      "Die festen Protonen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektrischer Strom in Metallen ist die gerichtete Bewegung leicht verschiebbarer freier Elektronen."
  },
  {
    "id": "k7_phy_058",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welches Material leitet den elektrischen Strom am besten?",
    "answers": [
      "Das Gummi Material",
      "Das Glas Material",
      "Das Holz Material",
      "Das Metal Kupfer"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Metalle wie Kupfer oder Silber sind hervorragende elektrische Leiter."
  },
  {
    "id": "k7_phy_059",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welcher der folgenden Stoffe ist ein elektrischer Nichtleiter (Isolator)?",
    "answers": [
      "Das Salzwasser",
      "Das Eisenmetall",
      "Das Aluminium",
      "Der Kunststoff"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kunststoffe besitzen keine freien Ladungsträger und leiten Strom nicht (Isolator)."
  },
  {
    "id": "k7_phy_060",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie wird ein Strommessgerät (Amperemeter) korrekt in den Stromkreis eingebaut?",
    "answers": [
      "Parallelschaltung dazu",
      "Direkt an Gegenpol",
      "Ohne Verbindung dazu",
      "Reihenschaltung im Kreis"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Amperemeter muss vom gesamten Strom durchflossen werden u. wird daher in Serie (Reihe) geschaltet."
  },
  {
    "id": "k7_phy_061",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie wird ein Spannungsmessgerät (Voltmeter) korrekt im Stromkreis geschaltet?",
    "answers": [
      "In der Hauptleitung",
      "Parallel zum Bauteil",
      "In Reihe zum Bauteil",
      "Vollständig getrennt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Voltmeter misst den Potenzialunterschied zwischen zwei Punkten u. wird parallel geschaltet."
  },
  {
    "id": "k7_phy_062",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Eigenschaft gilt für die elektrische Stromstärke in einer Reihenschaltung?",
    "answers": [
      "Wird nach hinten größer",
      "Überall exakt gleich groß",
      "Teilt sich gleichmäßig auf",
      "Ist am Schalter gleich 0"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In einem unverzweigten Stromkreis (Reihenschaltung) ist die Stromstärke an jeder Stelle identisch."
  },
  {
    "id": "k7_phy_063",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Eigenschaft gilt für die elektrische Spannung in einer Parallelschaltung?",
    "answers": [
      "Sinkt kontinuierlich ab",
      "An allen Zweigen gleich",
      "Verdoppelt sich pro Teil",
      "Teilt sich auf alle auf"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An allen parallelen Zweigen liegt jeweils die volle Quellspannung an."
  },
  {
    "id": "k7_phy_064",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert mit anderen Lampen in einer Reihenschaltung, wenn eine Lampe durchbrennt?",
    "answers": [
      "Andere leuchten weiter",
      "Andere leuchten heller",
      "Sicherung fliegt raus",
      "Alle Lampen gehen aus"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wird der Stromkreis an einer Stelle unterbrochen, fließt in der gesamten Reihenschaltung kein Strom mehr."
  },
  {
    "id": "k7_phy_065",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert mit anderen Geräten in einer Parallelschaltung, wenn ein Gerät ausgeschaltet wird?",
    "answers": [
      "Schalten sich alle aus",
      "Erhalten doppelten Strom",
      "Laufen ungestört weiter",
      "Brennen sofort durch"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Parallelschaltung (z. B. Haushaltsnetz) bleiben andere Stromkreise unabhängig betriebsbereit."
  },
  {
    "id": "k7_phy_066",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was versteht man unter einem gefährlichen elektrischen Kurzschluss?",
    "answers": [
      "Zu hoher Widerstand im Netz",
      "Unterbrechung des Schalters",
      "Plötzlicher Ausfall Batterie",
      "Verbindung ohne Widerstand"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Kurzschluss entsteht, wenn die Pole der Spannungsquelle ohne Nutz-Widerstand direkt verbunden werden, was extrem hohe Ströme erzeugt."
  },
  {
    "id": "k7_phy_067",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Sicherheitsaufgabe erfüllt eine Schmelzsicherung im Stromkreis?",
    "answers": [
      "Misst den genauen Verbrauch",
      "Unterbricht zu hohen Strom",
      "Erzeugt mehr elektrische Energie",
      "Erhöht die Netzspannung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Überlastung oder Kurzschluss schmilzt der Faden der Sicherung durch u. unterbricht den Stromkreis vor Bränden."
  },
  {
    "id": "k7_phy_068",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welcher physikalische Effekt wird bei einem elektrischen Herd oder Toaster genutzt?",
    "answers": [
      "Die chemische Wirkung",
      "Die Magnetwirkung des Stroms",
      "Die Lichtwirkung des Stroms",
      "Die Wärmewirkung des Stroms"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fließt Strom durch einen Widerstandsdraht, erwärmt sich dieser stark (Joulesche Wärme)."
  },
  {
    "id": "k7_phy_069",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Entdeckung machte Hans Christian Oersted bezüglich des elektrischen Stroms?",
    "answers": [
      "Erzeugt ein Magnetfeld",
      "Besteht aus Neutronen",
      "Ist im Vakuum schneller",
      "Macht Wasser zu Eis"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Oersted entdeckte, dass jeder stromdurchflossene Leiter von einem Magnetfeld umgeben ist."
  },
  {
    "id": "k7_phy_070",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie heißen die elektrisch negativ geladenen Hüllenteilchen eines Atoms?",
    "answers": [
      "Die Alphateilchen",
      "Die Elektronen",
      "Die Protonen",
      "Die Neutronen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektronen tragen eine negative Elementarladung u. bewegen sich in der Atomhülle."
  },
  {
    "id": "k7_phy_071",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie heißen die positiv geladenen Teilchen im Atomkern?",
    "answers": [
      "Die Neutronen",
      "Die Protonen",
      "Die Photonen",
      "Die Elektronen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Protonen tragen eine positive Elementarladung u. sitzen im Atomkern."
  },
  {
    "id": "k7_phy_072",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie verhalten sich zwei gleichnamige elektrische Ladungen (z. B. Plus u. Plus) zueinander?",
    "answers": [
      "Reagieren gar nicht",
      "Sie ziehen sich an",
      "Sie stoßen sich ab",
      "Sie neutralisieren sich"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichnamige Ladungen stoßen sich ab; ungleichnamige ziehen sich an."
  },
  {
    "id": "k7_phy_073",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie verhalten sich zwei ungleichnamige Ladungen (Plus u. Minus) zueinander?",
    "answers": [
      "Verharren ohne Kraft",
      "Sie ziehen sich an",
      "Sie stoßen sich ab",
      "Sie verpuffen sofort"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gegensätzliche Ladungen ziehen sich gegenseitig an."
  },
  {
    "id": "k7_phy_074",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was versteht man unter der Technischen Stromrichtung in der Elektrizitätslehre?",
    "answers": [
      "Völlig beliebig gewählt",
      "Von der Erde hoch",
      "Von Minus nach Plus",
      "Von Plus nach Minus"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Historisch festgelegt fließt der Strom technisch vom Pluspol zum Minuspol (obwohl die Elektronen real von Minus nach Plus fließen)."
  },
  {
    "id": "k7_phy_075",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche physikalische Größe beschreibt den Stromverbrauch eines elektrischen Geräts pro Sekunde?",
    "answers": [
      "Die elektrische Spannung $U$",
      "Die Kapazität $C$",
      "Die elektrische Leistung $P$",
      "Der Widerstand $R$"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die elektrische Leistung $P = U \\cdot I$ (in Watt) gibt an, wie viel Energie pro Zeit umgewandelt wird."
  },

  // --- WÄRMELEHRE & ENERGIE (076 - 100) ---
  {
    "id": "k7_phy_076",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Bei welcher Temperatur liegt der absolute Nullpunkt der Physik?",
    "answers": [
      "-273.15 °C (0 Kelvin)",
      "0 °C (273 Kelvin)",
      "-100 °C (173 Kelvin)",
      "-500 °C (-227 Kelvin)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei 0 Kelvin (ca. $-273,15\\,^\\circ C$) kommt jede Teilchenbewegung vollständig zum Stillstand."
  },
  {
    "id": "k7_phy_077",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert im Mikrokosmos mit den Teilchen eines Stoffes, wenn dieser erwärmt wird?",
    "answers": [
      "Schrumpfen im Durchmesser",
      "Werden spürbar schwerer",
      "Bewegen sich langsamer",
      "Bewegen sich schneller"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Temperatur ist ein Maß für die mittlere kinetische Energie der Teilchen. Höhere Temperatur = schnellere Eigenbewegung."
  },
  {
    "id": "k7_phy_078",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was passiert in der Regel mit den Abmessungen fester Körper beim Erwärmen?",
    "answers": [
      "Bleiben völlig unverändert",
      "Sie dehnen sich aus",
      "Sie verlieren Masse",
      "Sie ziehen sich zusammen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wegen der heftigeren Schwingungen benötigen die Teilchen mehr Platz; der Körper dehnt sich aus."
  },
  {
    "id": "k7_phy_079",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was beschreibt die physikalische 'Anomalie des Wassers'?",
    "answers": [
      "Größte Dichte bei +4 °C",
      "Dehnt sich beim Heizen nie aus",
      "Siedet bereits bei 50 °C",
      "Gefriert bei genau +10 °C"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser besitzt seine höchste Dichte bei $+4\\,^\\circ C$. Daher sinkt $+4\\,^\\circ C$ kühles Wasser am Seegrund nach unten."
  },
  {
    "id": "k7_phy_080",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Art der Wärmeübertragung findet vorwiegend in festen Metallstäben statt?",
    "answers": [
      "Die Wärmeströmung",
      "Die Wärmestrahlung",
      "Die Kondensation",
      "Die Wärmeleitung"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Festkörpern wird Wärme durch Stöße benachbarter Teilchen weitergegeben (Wärmeleitung)."
  },
  {
    "id": "k7_phy_081",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Art der Wärmeübertragung transportiert Wärme durch aufsteigende warme Luftschichten?",
    "answers": [
      "Die Wärmeströmung (Konvektion)",
      "Die feste Sublimation",
      "Die reine Wärmestrahlung",
      "Die direkte Wärmeleitung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Flüssigkeiten u. Gase transportieren Wärme durch Mitführen erwärmter Teilchen (Konvektion)."
  },
  {
    "id": "k7_phy_082",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Auf welche Weise gelangt die Wärme der Sonne durch das luftleere All zur Erde?",
    "answers": [
      "Durch Wärmeleitung",
      "Durch Wärmeströmung",
      "Durch Wärmestrahlung",
      "Durch Luftströmung"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wärmestrahlung benötigt keinen Materieträger u. breitet sich auch im Vakuum als elektromagnetische Welle aus."
  },
  {
    "id": "k7_phy_083",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man den Phasenübergang von fest zu flüssig?",
    "answers": [
      "Der Verdampfungsvorgang",
      "Der Erstarrungsvorgang",
      "Der Kondensationsvorgang",
      "Der Schmelzvorgang"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Übergang vom festen in den flüssigen Zustand heißt Schmelzen."
  },
  {
    "id": "k7_phy_084",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man den Phasenübergang von flüssig zu gasförmig am Siedepunkt?",
    "answers": [
      "Das Verdampfen",
      "Das Sublimieren",
      "Das Kondensieren",
      "Das Erstarren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wird eine Flüssigkeit bis zum Siedepunkt erhitzt, geht sie durch Verdampfen in den gasförmigen Zustand über."
  },
  {
    "id": "k7_phy_085",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man den Phasenübergang von gasförmig zu flüssig (z. B. Tröpfchen am kalten Glas)?",
    "answers": [
      "Das Verdampfen",
      "Das Sublimieren",
      "Das Kondensieren",
      "Das Gefrieren"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kühlt Gas ab, verflüssigt es sich wieder (Kondensation)."
  },
  {
    "id": "k7_phy_086",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man den direkten Phasenübergang von fest zu gasförmig (ohne zu schmelzen)?",
    "answers": [
      "Die Sublimation",
      "Die Resublimation",
      "Die Kondensation",
      "Die Verdampfung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sublimation ist der unmittelbare Übergang von fest nach gasförmig (z. B. Trockeneis)."
  },
  {
    "id": "k7_phy_087",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie nennt man den direkten Phasenübergang von gasförmig zu fest (z. B. Entstehung von Raureif)?",
    "answers": [
      "Die Resublimation",
      "Das Sieden",
      "Die Kondensation",
      "Die Sublimation"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kühlt Wasserdampf an kalten Oberflächen schlagartig ab u. wird direkt zu Eisblumen, nennt man dies Resublimation."
  },
  {
    "id": "k7_phy_088",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Worin unterscheidet sich Verdunstung von Verdampfung?",
    "answers": [
      "Geht stets mit Kochen einher",
      "Benötigt extrem hohe Temperaturen",
      "Findet unterhalb des Siedepunkts statt",
      "Tritt nur bei Metallen auf"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verdunstung geschieht langsam an der Oberfläche bei beliebigen Temperaturen unterhalb der Siedetemperatur."
  },
  {
    "id": "k7_phy_089",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet der fundamentale Energieerhaltungssatz der Physik?",
    "answers": [
      "Neue Energie entsteht aus dem Nichts",
      "Energie wird beim Nutzen vernichtet",
      "Gesamtenergie nimmt ständig ab",
      "Energie kann nur umgewandelt werden"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Energie kann weder erzeugt noch vernichtet werden; sie wird nur von einer Form in andere Formen umgewandelt."
  },
  {
    "id": "k7_phy_090",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Form von Energie besitzt ein gespannter Flachbogen vor dem Schuss?",
    "answers": [
      "Thermische Wärmeenergie",
      "Kinetische Bewegungsenergie",
      "Elektrische Feldenergie",
      "Potenzielle Spannenergie"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Verformung des Bogens wird elastische Spannenergie (potenzielle Energie) gespeichert."
  },
  {
    "id": "k7_phy_091",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Energieform besitzt ein fahrendes Motorrad auf ebenem Weg?",
    "answers": [
      "Potenzielle Lageenergie",
      "Kinetische Energie",
      "Elastische Spannenergie",
      "Chemische Kernenergie"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Körper in Bewegung besitzen kinetische Energie ($E_{kin} = \\frac{1}{2} m v^2$)."
  },
  {
    "id": "k7_phy_092",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Energieform besitzt ein auf einen Kran hochgezogener Betonblock?",
    "answers": [
      "Strahlungsenergie",
      "Potenzielle Lageenergie",
      "Kinetische Energie",
      "Thermische Energie"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Anheben in die Höhe $h$ erhält ein Körper potenzielle Lageenergie ($E_{pot} = m \\cdot g \\cdot h$)."
  },
  {
    "id": "k7_phy_093",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die mathematische Formel zur Berechnung der potenziellen Lageenergie?",
    "answers": [
      "Lageenergie = 0.5 x m x v^2",
      "Lageenergie = m x g x h",
      "Lageenergie = F / s",
      "Lageenergie = m / V"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die potenzielle Lageenergie berechnet sich aus Masse $m$, Ortsfaktor $g$ u. Höhe $h$ ($E_{pot} = m \\cdot g \\cdot h$)."
  },
  {
    "id": "k7_phy_094",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Wie lautet die mathematische Formel zur Berechnung der kinetischen Bewegungsenergie?",
    "answers": [
      "Bewegungsenergie = F x s",
      "Bewegungsenergie = P x t",
      "Bewegungsenergie = m x g x h",
      "Bewegungsenergie = 0.5 x m x v^2"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die kinetische Energie berechnet sich aus der halben Masse mal Quadrat der Geschwindigkeit ($E_{kin} = \\frac{1}{2} m v^2$)."
  },
  {
    "id": "k7_phy_095",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Warum platzen unentleerte Wasserrohre im Außenbereich bei starkem Frost im Winter?",
    "answers": [
      "Luftdruck steigt im Rohr",
      "Eis dehnt sich aus",
      "Rohrmetall schmilzt ab",
      "Wasser zieht sich stark zusammen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wegen der Dichteanomalie dehnt sich gefrierendes Wasser um ca. 9 % aus und sprengt das Rohr."
  },
  {
    "id": "k7_phy_096",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Auf welchem physikalischen Prinzip beruht ein Bimetallstreifen im Schalter?",
    "answers": [
      "Gleiche Metalledrehung",
      "Schmelzen einer Legierung",
      "Unterschiedliche Metalledrehung",
      "Verdampfung von Flüssigkeit"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei fest verbundene Metalle dehnen sich bei Erwärmung unterschiedlich stark aus, wodurch sich der Streifen verbiegt."
  },
  {
    "id": "k7_phy_097",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "In welchem Alltagsgerät sorgt ein Bimetallstreifen für die automatische Temperaturregelung?",
    "answers": [
      "Die Smartphone-Kamera",
      "Der Mikrowellenherd Raum",
      "Der LED-Fernseher Bild",
      "Das Bügeleisen Thermostat"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Bügeleisen oder Toastern unterbricht der verbogene Bimetallstreifen bei Erreichen der Zieltemperatur den Stromkreis."
  },
  {
    "id": "k7_phy_098",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Was beschreibt der Begriff des 'Wirkungsgrades' $\\eta$ einer Maschine?",
    "answers": [
      "Verhältnis Nutz- zu Zuenergie",
      "Verhältnis Druck zu Kraft",
      "Verhältnis Masse zu Volumen",
      "Verhältnis Arbeit zu Weg"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Wirkungsgrad $\\eta = E_{nutz} / E_{zugefuehrt}$ gibt an, welcher Anteil der zugeführten Energie tatsächlich genutzt wird."
  },
  {
    "id": "k7_phy_099",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Warum isoliert eine doppelwandige Thermoskanne mit evakuiertem Zwischenraum heiße Getränke hervorragend?",
    "answers": [
      "Vakuum absorbiert jede Wärme",
      "Luft im Vakuum leitet nicht",
      "Vakuum stoppt Leitung u. Strömung",
      "Spiegelglas kühlt den Inhalt"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Vakuum gibt es keine Teilchen, sodass Wärmeleitung u. Wärmeströmung unterbunden werden."
  },
  {
    "id": "k7_phy_100",
    "category": "k7_physik",
    "area": "schule",
    "grade": 7,
    "subject": "physik",
    "question": "Welche Energieumwandlung findet in einer Solarzelle (Fotovoltaik) statt?",
    "answers": [
      "Wärmeenergie in kinetische Energie",
      "Elektrische Energie in Lichtenergie",
      "Chemische Energie in Bewegung",
      "Lichtenergie in elektrische Energie"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Solarzellen wandeln einfallende Lichtstrahlung direkt in elektrische Energie um."
  },
  {"id":"k7ph101","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"a = Δv/Δt ist …","answers":["Geschwindigkeit","Beschleunigung","Kraft","Impuls"],"correct":1,"difficulty":"mittel","points":10,"explanation":"a."},
  {"id":"k7ph102","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"F = m·a","answers":["0","Newton 2","Newton 3","Energie"],"correct":1,"difficulty":"mittel","points":10,"explanation":"2. Gesetz."},
  {"id":"k7ph103","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Eₖ = ½mv²","answers":["kein Ergebnis","kinetisch","Lage","Leistung"],"correct":1,"difficulty":"mittel","points":10,"explanation":"kinetisch."},
  {"id":"k7ph104","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Eₚ = mgh","answers":["kein Ergebnis","Lageenergie","kinetisch","Impuls"],"correct":1,"difficulty":"mittel","points":10,"explanation":"potentiell."},
  {"id":"k7ph105","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"p = m·v","answers":["Kraft","Impuls","Druck","Leistung"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Impuls."},
  {"id":"k7ph106","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"v = f·λ","answers":["kein Ergebnis","Welle","nur Schall","nur Licht"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Welle."},
  {"id":"k7ph107","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"U = R·I","answers":["kein Ergebnis","Ohm","Kirchhoff","Faraday"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Ohm."},
  {"id":"k7ph108","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"P = U·I","answers":["kein Ergebnis","Leistung","Energie","Ladung"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Leistung."},
  {"id":"k7ph109","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Einheit Kraft?","answers":["J","N","W","V"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Newton."},
  {"id":"k7ph110","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"c ≈ …","answers":["340 m/s","3·10⁸ m/s","3 m/s","300 km/h"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Licht."},
  {"id":"k7ph111","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Schall braucht …","answers":["Vakuum","Medium","Licht","Magnete"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Medium."},
  {"id":"k7ph112","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"W = F·s","answers":["kein Ergebnis","Arbeit","Rotation","Gas"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Arbeit."},
  {"id":"k7ph113","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"p = F/A","answers":["kein Ergebnis","Druck","F·A","A/F"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Druck."},
  {"id":"k7ph114","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Ladung Einheit?","answers":["V","C","Ω","W"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Coulomb."},
  {"id":"k7ph115","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Induktion erzeugt …","answers":["Masse","Spannung","Wärme ohne Feld","Licht"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Spannung."},
  {"id":"k7ph116","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"α-Teilchen = …","answers":["Elektron","He-Kern","Photon","Neutron"],"correct":1,"difficulty":"mittel","points":10,"explanation":"α."},
  {"id":"k7ph117","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Halbwertszeit bis …","answers":["alles","Hälfte","nichts","¾"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Hälfte."},
  {"id":"k7ph118","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"η = Nutzen/Aufwand","answers":["kein Ergebnis","richtig","η>1","egal"],"correct":1,"difficulty":"mittel","points":10,"explanation":"richtig."},
  {"id":"k7ph119","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Auftrieb = Gewicht …","answers":["Körpers","verdrängter Flüssigkeit","Luft 0","Behälters"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Archimedes."},
  {"id":"k7ph120","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Zentripetal zum …","answers":["außen","Zentrum","tangential","zufällig"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Zentrum."},
  {"id":"k7ph121","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"E = h·f","answers":["kein Ergebnis","Photon","Schall","Impuls"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Photon."},
  {"id":"k7ph122","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Brechung zum Lot in … Medium","answers":["dünner","dichter","gleich","Metall"],"correct":1,"difficulty":"mittel","points":10,"explanation":"dichter."},
  {"id":"k7ph123","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Kondensator speichert …","answers":["Impuls","Ladung","Neutronen","Masse"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Ladung."},
  {"id":"k7ph124","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Trafo U ~ N","answers":["kein Ergebnis","richtig","unabhängig","nur I"],"correct":1,"difficulty":"mittel","points":10,"explanation":"richtig."},
  {"id":"k7ph125","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"0 K ≈ …","answers":["0 °C","−273 °C","100 °C","−100 °C"],"correct":1,"difficulty":"mittel","points":10,"explanation":"−273."},
  {"id":"k7ph126","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"f = 1/T","answers":["kein Ergebnis","richtig","f=T","f=2T"],"correct":1,"difficulty":"mittel","points":10,"explanation":"richtig."},
  {"id":"k7ph127","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Reibung … Bewegung","answers":["fördert","hemmt","löscht Masse","erzeugt Weg"],"correct":1,"difficulty":"mittel","points":10,"explanation":"hemmt."},
  {"id":"k7ph128","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Sicherung gegen …","answers":["Unterspannung","Überstrom","Magnet","Schall"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Überstrom."},
  {"id":"k7ph129","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"LED wandelt in …","answers":["Wärme nur","Licht","Schall","Druck"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Licht."},
  {"id":"k7ph130","category":"k7_physik","area":"schule","grade":7,"subject":"physik","topic":"erweiterung","question":"Energie wird …","answers":["vernichtet","umgewandelt","aus nichts","nur vernichtet"],"correct":1,"difficulty":"mittel","points":10,"explanation":"umgewandelt."}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K7_PHYSIK_QUESTIONS = K7_PHYSIK_QUESTIONS;
}