// ================================================================
// KLASSE 9 - PHYSIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K9_PHYSIK_QUESTIONS = [
  // --- ELEKTRIZITÄTSLEHRE & INDUKTION (001 - 025) ---
  {
    "id": "k9_phy_001",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welches Phänomen entdeckte Michael Faraday im Jahr 1831?",
    "answers": [
      "Die Elektromagnetische Induktion",
      "Die Entdeckung des Elektromagnetismus",
      "Die Erfindung des Transformators",
      "Die Entdeckung der Radioaktivität"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Faraday entdeckte, dass eine sich ändernde Magnetfeldstärke in einer Spule eine elektrische Spannung induziert."
  },
  {
    "id": "k9_phy_002",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wann wird in einer Leiterschleife eine elektrische Spannung induziert?",
    "answers": [
      "Wenn sich Magnetfeld ändert",
      "Wenn Magnet im Raume ruht",
      "Wenn Strom durch Spule fließt",
      "Wenn Draht stark erwärmt wird"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Spannung wird genau dann induziert, wenn sich der vom Leiter umschlossene Magnetfluss zeitlich ändert."
  },
  {
    "id": "k9_phy_003",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was besagt die Lenzsche Regel bezüglich der Richtung des Induktionsstroms?",
    "answers": [
      "Wirkt Ursache entgegen",
      "Verstärkt eigene Ursache",
      "Verläuft stets waagerecht",
      "Ist unabhängig vom Pol"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Lenzsche Regel ist ein Energieerhaltungssatz: Der Induktionsstrom ist stets so gerichtet, dass er der Ursache seiner Entstehung entgegenwirkt."
  },
  {
    "id": "k9_phy_004",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche Funktion hat ein Wechselstrom-Generator im Kraftwerk?",
    "answers": [
      "Mechanische in elektrische Energie",
      "Elektrische in mechanische Energie",
      "Chemische in thermische Energie",
      "Thermische in atomare Energie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Generator wandelt mechanische Bewegungsenergie (Rotationsenergie) mittels Induktion in elektrische Energie um."
  },
  {
    "id": "k9_phy_005",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Aus welchen zwei Hauptkomponenten besteht ein einfacher Elektromotor oder Generator?",
    "answers": [
      "Stator und Rotor (Läufer)",
      "Anode und Kathode Polen",
      "Primär- und Sekundärspule",
      "Kondensator und Diode Bauteil"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Generator/Motor besteht aus dem feststehenden Teil (Stator) u. dem sich drehenden Teil (Rotor)."
  },
  {
    "id": "k9_phy_006",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Auf welchem Grundprinzip basiert die Funktion eines Transformators?",
    "answers": [
      "Gegenseitige Induktion Spulen",
      "Thermische Ausdehnung Stoffe",
      "Piezolektrischer Druckeffekt",
      "Elektrostatische Reibung Kraft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Transformator wandelt Wechselspannungen durch ein sich änderndes Magnetfeld im gemeinsamen Eisenkern um (Gegeninduktion)."
  },
  {
    "id": "k9_phy_007",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die Gleichung für das Spannungsverhältnis am idealen Transformator?",
    "answers": [
      "U1 / U2 = N1 / N2",
      "U1 / U2 = N2 / N1",
      "U1 * U2 = N1 * N2",
      "U1 - U2 = N1 - N2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Spannungsverhältnis ist direkt proportional zum Windungsverhältnis der Spulen ($U_1 / U_2 = N_1 / N_2$)."
  },
  {
    "id": "k9_phy_008",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie verhalten sich die Stromstärken $I_1$ u. $I_2$ am idealen Transformator im Verhältnis zu den Windungszahlen?",
    "answers": [
      "I1 / I2 = N2 / N1",
      "I1 / I2 = N1 / N2",
      "I1 * I2 = N1 * N2",
      "I1 - I2 = N2 - N1"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wegen der Leistungserhaltung ($P_1 = P_2 \\Rightarrow U_1 I_1 = U_2 I_2$) verhalten sich Stromstärken umgekehrt proportional zu Windungszahlen."
  },
  {
    "id": "k9_phy_009",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Funktioniert ein klassischer Transformator mit Gleichspannung (DC)?",
    "answers": [
      "Nein nur mit Wechselspannung",
      "Ja er funktioniert identisch",
      "Ja aber nur bei hoher Stärke",
      "Ja wenn Eisenkern fehlt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichstrom erzeugt ein konstantes Magnetfeld. Ohne Magnetfeldänderung findet keine Induktion in der Sekundärspule statt."
  },
  {
    "id": "k9_phy_010",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Warum wird elektrischer Strom über weite Strecken mit Hochspannung transportiert?",
    "answers": [
      "Verlustleistung im Draht sinkt",
      "Spannung wird dadurch sicherer",
      "Gleichstrom fließt schneller da",
      "Kabel werden dadurch leichter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei höherer Spannung sinkt die Stromstärke $I$. Wegen $P_{Verlust} = R I^2$ sinkt der Wärme-Verlust in den Leitungen drastisch."
  },
  {
    "id": "k9_phy_011",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche Frequenz besitzt die Wechselspannung im europäischen Stromnetz?",
    "answers": [
      "Frequenz: 50 Hertz (Hz)",
      "Frequenz: 60 Hertz (Hz)",
      "Frequenz: 100 Hertz (Hz)",
      "Frequenz: 12 Hertz (Hz)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das europäische Stromnetz arbeitet mit einer Netzfrequenz von $50\\,Hz$ (50 Schwingungen pro Sekunde)."
  },
  {
    "id": "k9_phy_012",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie groß ist der Effektivwert der Netzwechselspannung in deutschen Haushalten?",
    "answers": [
      "Spannung: 230 Volt",
      "Spannung: 110 Volt",
      "Spannung: 400 Volt",
      "Spannung: 12 Volt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Standard-Wechselspannung an der Haushaltssteckdose hat einen Effektivwert von $230\\,V$."
  },
  {
    "id": "k9_phy_013",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was beschreibt die Drei-Finger-Regel (Rechte-Hand-Regel) der Lorentzkraft?",
    "answers": [
      "Daumen=I, Zeigef.=B, Mittelf.=F",
      "Daumen=F, Zeigef.=I, Mittelf.=B",
      "Daumen=B, Zeigef.=F, Mittelf.=I",
      "Daumen=U, Zeigef.=R, Mittelf.=I"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ursache-Vermittlung-Wirkung: Daumen = Stromrichtung $I$, Zeigefinger = Magnetfeld $B$, Mittelfinger = Lorentzkraft $F$."
  },
  {
    "id": "k9_phy_014",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie nennt man die Kraft, die auf eine bewegte Ladung im Magnetfeld wirkt?",
    "answers": [
      "Die Lorentzkraft im Feld",
      "Die Zentripetalkraft Bahn",
      "Die Gravitationskraft Masse",
      "Die Coulombkraft Ladung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Kraft auf bewegte elektrische Ladungen im Magnetfeld heißt Lorentzkraft."
  },
  {
    "id": "k9_phy_015",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was passiert mit der Lorentzkraft, wenn sich eine Ladung PARALLEL zu den Magnetfeldlinien bewegt?",
    "answers": [
      "Kraft ist genau Null",
      "Kraft erreicht Maximum",
      "Ladung stoppt sofort ab",
      "Ladung kehrt Richtung um"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bewegen sich Ladungen parallel zum Magnetfeld, wirkt keine Lorentzkraft ($F_L = 0$)."
  },
  {
    "id": "k9_phy_016",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie heißen die Wirbelströme, die durch Induktion in massiven Metallkörpern entstehen u. Wärme erzeugen?",
    "answers": [
      "Foucaultsche Wirbelströme",
      "Coulombsche Ladungsströme",
      "Hertzsche Wellenströme",
      "Voltasche Kontaktströme"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wirbelströme (Foucault-Ströme) entstehen in ausgedehnten Leitern im Wechselfeld u. führen zu Erwärmung."
  },
  {
    "id": "k9_phy_017",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welches Haushaltsgerät nutzt Wirbelströme u. elektromagnetische Induktion gezielt zum Kochen?",
    "answers": [
      "Der Induktionsherd Kochen",
      "Der Mikrowellenherd Gerät",
      "Der elektrische Toaster",
      "Der Infrarot-Heizstrahler"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Induktionsherd erzeugt per Wechselfeld Wirbelströme im Metallboden des Topfes, die diesen direkt erwärmen."
  },
  {
    "id": "k9_phy_018",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Aus welchem Material besteht der Kern eines Transformators, um das Magnetfeld optimal zu bündeln?",
    "answers": [
      "Weicheisen / Eisenkern",
      "Reines Kupfer und Zink",
      "Aluminium und Kunststoff",
      "Gehärtetes Glas Material"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Weicheisen besitzt eine hohe magnetische Leitfähigkeit (Permeabilität) u. lässt sich leicht ummagnetisieren."
  },
  {
    "id": "k9_phy_019",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Warum besteht der Eisenkern eines Transformators aus isolierten gegeneinander geschichteten Blechen?",
    "answers": [
      "Wirbelströme zu verringern",
      "Gewicht des Trafos zu sparen",
      "Rosten des Eisens zu stoppen",
      "Kühlung mit Luft zu verbessern"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Lamellierung mit Isolierschichten unterbricht die Bahn der Wirbelströme u. reduziert Verlustwärme."
  },
  {
    "id": "k9_phy_020",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie berechnet man die elektrische Leistung $P$ im Gleichstromkreis aus Spannung $U$ u. Stromstärke $I$?",
    "answers": [
      "Leistung: P = U * I",
      "Leistung: P = U / I",
      "Leistung: P = I^2 * U",
      "Leistung: P = U + I"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die elektrische Leistung berechnet sich durch $P = U \\cdot I$ (Einheit Watt)."
  },
  {
    "id": "k9_phy_021",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die Einheit der elektrischen Arbeit $W_el$ auf Stromabrechnungen im Alltag?",
    "answers": [
      "Kilowattstunde (kWh)",
      "Kilojoule pro Stunde",
      "Ampere mal Sekunde",
      "Volt mal Ohm pro Tag"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Elektrische Energie/Arbeit wird im Alltag in Kilowattstunden ($1\\,kWh = 3,6 \\cdot 10^6\\,J$) gemessen."
  },
  {
    "id": "k9_phy_022",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche Schutzvorrichtung im Haushalt trennt bei zu hoher Stromstärke den Stromkreis automatisch ab?",
    "answers": [
      "Der Leitungsschutzschalter",
      "Der Fehlerstromschutzschalter",
      "Der Drehstromwandler Kasten",
      "Der Hauptsicherungsautomat"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Sicherungsautomat (Leitungsschutzschalter) schützt Kabel vor Überlastung u. Brandgefahr."
  },
  {
    "id": "k9_phy_023",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welcher Schutzschalter schützt Menschen vor lebensgefährlichen Körperströmen gegen Erde?",
    "answers": [
      "FI-Schutzschalter (RCD)",
      "Leitungsschutzschalter (LS)",
      "Die alte Schmelzsicherung",
      "Der zentrale Hauptschalter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der FI-Schutzschalter (Fehlerstrom-Schutzschalter) vergleicht hin- u. rückfließenden Strom u. schaltet bei Fehlerstrom in Millisekunden ab."
  },
  {
    "id": "k9_phy_024",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie nennt man die Polwender-Vorrichtung beim Gleichstrommotor, die die Stromrichtung im Rotor alle halbe Drehung umkehrt?",
    "answers": [
      "Der Kommutator Ring",
      "Der Rotor mit der Spule",
      "Die feste Statorwicklung",
      "Der Kondensator im Kreis"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kommutator (Polwender) sorgt dafür, dass die Drehrichtung der Lorentzkraft u. damit die Rotation erhalten bleibt."
  },
  {
    "id": "k9_phy_025",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welcher physikalische Zusammenhang beschreibt die Selbstinduktion in einer Spule?",
    "answers": [
      "Induziert Spannung in sich",
      "Erhöht Widerstand dauerhaft",
      "Vernichtet Ladungsträger",
      "Wandelt Strom in Licht um"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Änderung der Stromstärke in einer Spule erzeugt ein sich änderndes Magnetfeld, das in derselben Spule eine Gegenspannung induziert."
  },

  // --- MECHANIK: ENERGIE, ARBEIT, LEISTUNG & ERHALTUNGSSÄTZE (026 - 050) ---
  {
    "id": "k9_phy_026",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie ist die physikalische Arbeit $W$ bei konstanter Kraft in Wegrichtung definiert?",
    "answers": [
      "Arbeit = Kraft * Weg",
      "Arbeit = Masse * Weg",
      "Arbeit = Kraft / Zeit",
      "Arbeit = Masse * Beschleunigung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Arbeit ist das Produkt aus Kraft in Wegrichtung u. Wegstrecke ($W = F \\cdot s$)."
  },
  {
    "id": "k9_phy_027",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die SI-Einheit der mechanischen Energie u. Arbeit?",
    "answers": [
      "Einheit: Joule (J)",
      "Einheit: Watt (W)",
      "Einheit: Newton (N)",
      "Einheit: Pascal (Pa)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Energie u. Arbeit werden in der SI-Einheit Joule ($1\\,J = 1\\,N \\cdot m = 1\\,Ws$) angegeben."
  },
  {
    "id": "k9_phy_028",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie berechnet man die potenziellen Energie (Hubenergie) $E_{pot}$ eines Körpers der Masse $m$ in Höhe $h$?",
    "answers": [
      "E_pot = m * g * h",
      "E_pot = 0.5 * m * v^2",
      "E_pot = F * v",
      "E_pot = m * h / g"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Höhenenergie beträgt $E_{pot} = m \\cdot g \\cdot h$ ($g \\approx 9,81\\,m/s^2$)."
  },
  {
    "id": "k9_phy_029",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die Formel zur Berechnung der kinetischen Energie (Bewegungsenergie) $E_{kin}$?",
    "answers": [
      "E_kin = 0.5 * m * v^2",
      "E_kin = 0.5 * m^2 * v",
      "E_kin = 0.5 * m * a",
      "E_pot = 0.5 * m * g"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Bewegungsenergie eines Körpers berechnet sich nach der Formel $E_{kin} = \\frac{1}{2} m v^2$."
  },
  {
    "id": "k9_phy_030",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was besagt der Energieerhaltungssatz der Mechanik für abgeschlossene Systeme ohne Reibung?",
    "answers": [
      "Gesamtenergie ist konstant",
      "E_kin wird stets vernichtet",
      "E_pot wächst unendlich an",
      "Energie wird zu neuer Masse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Energie kann weder erzeugt noch vernichtet werden; sie wird nur von einer Form in andere Formen umgewandelt."
  },
  {
    "id": "k9_phy_031",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie ist die mechanische Leistung $P$ definiert?",
    "answers": [
      "Leistung = Arbeit / Zeit",
      "Leistung = Arbeit * Zeit",
      "Leistung = Kraft * Weg",
      "Leistung = Masse / Zeit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Leistung ist die pro Zeiteinheit verrichtete Arbeit ($P = \\frac{W}{t}$, Einheit Watt)."
  },
  {
    "id": "k9_phy_032",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die Goldene Regel der Mechanik?",
    "answers": [
      "Was an Kraft gespart wird...",
      "Was an Weg gespart wird...",
      "Arbeit wächst mit dem Weg...",
      "Kraft verdoppelt die Zeit..."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Goldene Regel besagt: 'Was man an Kraft spart, muss man an Weg zusetzen.' (Das Produkt $W = F \\cdot s$ bleibt konstant)."
  },
  {
    "id": "k9_phy_033",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie groß ist die Kraftersparnis bei einer einzelnen losen Rolle im Seilsystem?",
    "answers": [
      "Kraft wird halbiert (F/2)",
      "Kraft wird geviertelt (F/4)",
      "Kraft bleibt völlig gleich",
      "Kraft wird verdoppelt (F*2)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine lose Rolle verteilt die Last auf zwei Seilstücke, sodass sich die Zugkraft halbiert, der Zugweg aber verdoppelt."
  },
  {
    "id": "k9_phy_034",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet das Hebelgesetz für einen zweiseitigen Hebel im Gleichgewicht?",
    "answers": [
      "F1 * r1 = F2 * r2",
      "F1 / r1 = F2 / r2",
      "F1 + r1 = F2 + r2",
      "F1 * F2 = r1 * r2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichgewicht herrscht, wenn die Drehmomente links u. rechts gleich groß sind: $F_1 \\cdot r_1 = F_2 \\cdot r_2$."
  },
  {
    "id": "k9_phy_035",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie berechnet man den Wirkungsgrad $\\eta$ einer Maschine?",
    "answers": [
      "eta = E_nutz / E_zufuhr",
      "eta = E_zufuhr / E_nutz",
      "eta = E_nutz * E_zufuhr",
      "eta = E_zufuhr - E_nutz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Wirkungsgrad ist das Verhältnis von nutzbarer Energie zu zugeführter Energie (stets $\\eta \\le 1$ bzw. $\\le 100\\%$)."
  },
  {
    "id": "k9_phy_036",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Warum ist der Wirkungsgrad reeller Maschinen immer kleiner als 1 ($100\\%$)?",
    "answers": [
      "Verluste durch Reibung",
      "Energie wird vernichtet",
      "Masse geht verloren",
      "Schwerkraft wirkt entgegen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Reibung u. Wärmeableitung wird stets ein Teil der zugeführten Energie in nicht nutzbare Thermische Energie umgewandelt."
  },
  {
    "id": "k9_phy_037",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie ist der physikalische Impuls $p$ eines Körpers definiert?",
    "answers": [
      "Impuls: p = m * v",
      "Impuls: p = m * a",
      "Impuls: p = 0.5 * m * v^2",
      "Impuls: p = F * t^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Impuls (Bewegungsmenge) ist das Produkt aus Masse u. Geschwindigkeit ($p = m \\cdot v$, Einheit $kg \\cdot m/s$)."
  },
  {
    "id": "k9_phy_038",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was besagt der Impulserhaltungssatz?",
    "answers": [
      "Gesamtimpuls bleibt konstant",
      "Impuls geht in Wärme über",
      "Impuls wächst bei Stoß an",
      "Impuls hängt nur von Kraft ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In einem abgeschlossenen System ohne äußere Kräfte ist die Summe aller Impulse vor u. nach einem Stoß konstant."
  },
  {
    "id": "k9_phy_039",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was unterscheidet einen elastischen von einem unelastischen Stoß?",
    "answers": [
      "Elastisch verformt nicht dauerhaft",
      "Unelastisch erhält E_kin vollständig",
      "Elastisch verklebt beide Körper",
      "Unelastisch kennt keine Erhaltung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim elastischen Stoß bleibt die kinetische Energie erhalten; beim unelastischen Stoß wird $E_{kin}$ teilweise in Verformungs- u. Wärmeenergie umgewandelt."
  },
  {
    "id": "k9_phy_040",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie berechnet man den Druck $p$ einer Kraft $F$ auf die Fläche $A$?",
    "answers": [
      "Druck: p = F / A",
      "Druck: p = F * A",
      "Druck: p = A / F",
      "Druck: p = F * g * A"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Druck ist Kraft pro Flächeneinheit ($p = \\frac{F}{A}$, Einheit Pascal $1\\,Pa = 1\\,N/m^2$)."
  },
  {
    "id": "k9_phy_041",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die Schweredruck-Formel für den Druck in einer Flüssigkeit der Dichte $\\rho$ in Tiefe $h$?",
    "answers": [
      "p = rho * g * h",
      "p = rho * V * g",
      "p = m * g / h",
      "p = 0.5 * rho * h^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der hydrostatische Druck beträgt $p = \\rho \\cdot g \\cdot h$."
  },
  {
    "id": "k9_phy_042",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was besagt das Archimedische Prinzip für den Auftrieb $F_A$ in Flüssigkeiten?",
    "answers": [
      "Auftrieb = Gewicht der Verdrängung",
      "Auftrieb = Tiefe des Körpers",
      "Auftrieb = Gesamtmasse des Körpers",
      "Auftrieb = Fläche der Grundseite"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Auftriebskraft auf einen Körper ist genau so groß wie die Gewichtskraft der von ihm verdrängten Flüssigkeitsmenge ($F_A = \\rho_{Fl} \\cdot V_{Kör} \\cdot g$)."
  },
  {
    "id": "k9_phy_043",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wann schwimmt ein Körper in einer Flüssigkeit?",
    "answers": [
      "Dichte Körper < Dichte Flüssigkeit",
      "Dichte Körper > Dichte Flüssigkeit",
      "Dichte Körper = Dichte Flüssigkeit",
      "Unabhängig von jeglicher Dichte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Körper schwimmt, wenn seine mittlere Dichte kleiner ist als die Dichte der Flüssigkeit."
  },
  {
    "id": "k9_phy_044",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie breiten sich mechanische Wellen (z. B. Schallwellen in Luft) aus?",
    "answers": [
      "Schwingungen im Medium",
      "Transport von Stoffmasse",
      "Reine Lichtteilchenströme",
      "Elektromagnetische Felde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wellen transportieren Energie u. Impuls durch Schwingungen von Teilchen im Medium, aber keinen Stoff."
  },
  {
    "id": "k9_phy_045",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die Grundgleichung der Wellenlehre für die Ausbreitungsgeschwindigkeit $c$?",
    "answers": [
      "c = Lambda * f",
      "c = Lambda / f",
      "c = f / Lambda",
      "c = Lambda + f"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Ausbreitungsgeschwindigkeit ist das Produkt aus Wellenlänge $\\lambda$ u. Frequenz $f$ ($c = \\lambda \\cdot f$)."
  },
  {
    "id": "k9_phy_046",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was unterscheidet Transversalwellen von Longitudinalwellen?",
    "answers": [
      "Transversal schwingt senkrecht",
      "Longitudinal schwingt im Kreis",
      "Transversal schwingt parallel",
      "Longitudinal braucht kein Medium"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Transversalwellen schwingen Teilchen quer (senkrecht) zur Ausbreitungsrichtung; bei Longitudinalwellen längs (parallel)."
  },
  {
    "id": "k9_phy_047",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche Art von Welle ist eine Schallwelle in Luft?",
    "answers": [
      "Eine Longitudinalwelle",
      "Eine Transversalwelle",
      "Eine Lichtwelle Äther",
      "Eine Kreiswelle Wasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schall in Gasen u. Flüssigkeiten verbreitet sich als Längswelle (Longitudinalwelle durch Dichteunterschiede)."
  },
  {
    "id": "k9_phy_048",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie groß ist die Schallgeschwindigkeit in Luft bei Raumtemperatur etwa?",
    "answers": [
      "Geschwindigkeit: 340 m/s",
      "Geschwindigkeit: 300.000 km/s",
      "Geschwindigkeit: 1200 m/s",
      "Geschwindigkeit: 50 m/s"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Schallgeschwindigkeit in Luft beträgt bei $20^\\circ C$ etwa $343\\,m/s$ (ca. $1235\\,km/h$)."
  },
  {
    "id": "k9_phy_049",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was versteht man unter der Überlagerung zweier Wellen in der Physik?",
    "answers": [
      "Interferenz von Wellen",
      "Brechung an Grenzfläche",
      "Reflexion am Hindernis",
      "Beugung am Spaltöffnung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die ungestörte Überlagerung (Superposition) von zwei oder mehr Wellen nennt man Interferenz."
  },
  {
    "id": "k9_phy_050",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was beschreibt der Doppler-Effekt bei bewegten Schallquellen?",
    "answers": [
      "Frequenzänderung bei Bewegung",
      "Eine Verstärkung der Lautstärke",
      "Ein Echo von einer Felswand",
      "Verlangsamung der Schallwelle"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nähert sich die Quelle, stauchen sich die Wellen (höherer Ton); entfernt sie sich, dehnen sie sich (tieferer Ton)."
  },

  // --- WÄRMELEHRE & THERMODYNAMIK (051 - 075) ---
  {
    "id": "k9_phy_051",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was beschreibt die Temperatur eines Stoffes mikroskopisch?",
    "answers": [
      "Mittlere kinetische Energie",
      "Die Anzahl aller Elektronen",
      "Gesamte Masse aller Teilchen",
      "Dichte der Atome im Kristall"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Temperatur ist ein Maß für die durchschnittliche ungeordnete Bewegungsenergie der Atome/Moleküle."
  },
  {
    "id": "k9_phy_052",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wo liegt der absolute Nullpunkt der Temperatur auf der Celsius-Skala?",
    "answers": [
      "Temperatur: -273.15 Grad C",
      "Temperatur: 0 Grad C",
      "Temperatur: -100 Grad C",
      "Temperatur: -459.67 Grad C"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der absolute Nullpunkt ($0\\,K$) liegt exakt bei $-273,15^\\circ C$. Tiefer kann keine Temperatur sinken."
  },
  {
    "id": "k9_phy_053",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie rechnet man eine Temperatur von Celsius ($t$) in Kelvin ($T$) um?",
    "answers": [
      "T = t + 273.15",
      "T = t - 273.15",
      "T = t * 1.8 + 32",
      "T = t / 273.15"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zur Umrechnung addiert man $273,15$ zur Celsius-Temperatur ($T(K) = t(^\\circ C) + 273,15$)."
  },
  {
    "id": "k9_phy_054",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie berechnet man die Wärmeenergie $Q$, die zur Erwärmung der Masse $m$ um $\\Delta T$ nötig ist?",
    "answers": [
      "Q = c * m * Delta_T",
      "Q = c * m / Delta_T",
      "Q = m * g * Delta_T",
      "Q = c / (m * Delta_T)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Grundgleichung der Wärmelehre lautet $Q = c \\cdot m \\cdot \\Delta T$ ($c = $ spezifische Wärmekapazität)."
  },
  {
    "id": "k9_phy_055",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welcher Stoff besitzt unter den alltäglichen Stoffen eine besonders hohe spezifische Wärmekapazität ($c \\approx 4,18\\,kJ/(kg\\cdot K)$)?",
    "answers": [
      "Flüssiges Wasser Stoff",
      "Trockene Luft im Zimmer",
      "Ein Block aus reinem Eisen",
      "Ein Draht aus reinem Kupfer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser speichert Wärme hervorragend u. dient deshalb als Kühl- u. Heizungsmedium."
  },
  {
    "id": "k9_phy_056",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche drei Arten der Wärmeübertragung unterscheidet man?",
    "answers": [
      "Leitung, Strömung, Strahlung",
      "Reibung, Induktion, Welle",
      "Konvektion, Reflexion, Druck",
      "Absorption, Beugung, Brechung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wärme wird durch Wärmeleitung (Festkörper), Wärmeströmung/Konvektion (Fluide) u. Wärmestrahlung (Infrarot) übertragen."
  },
  {
    "id": "k9_phy_057",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche Wärmeübertragungsart benötigt als einzige KEIN Materiemedium u. funktioniert im Vakuum des Weltalls?",
    "answers": [
      "Die Wärmestrahlung",
      "Die Wärmeleitung",
      "Die Wärmeströmung",
      "Die Konvektion Gas"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wärmestrahlung besteht aus elektromagnetischen Wellen (Infrarot) u. breitet sich auch im Vakuum aus."
  },
  {
    "id": "k9_phy_058",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was beschreibt der Begriff 'Schmelzwärme'?",
    "answers": [
      "Energie für Phase von fest zu flüssig",
      "Energie zur Erwärmung um genau 1 Kelvin",
      "Der Wärmeverlust beim Erstarren des Stoffs",
      "Die Wärme die beim Sieden frei wird"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schmelzwärme ist die Energiemenge, die nötig ist, um einen Stoff am Schmelzpunkt ohne Temperaturerhöhung von fest zu flüssig zu schmelzen."
  },
  {
    "id": "k9_phy_059",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Warum bleibt die Temperatur beim Sieden von Wasser trotz ständiger Wärmezufuhr bei $100^\\circ C$ konstant?",
    "answers": [
      "Energie wird für Phasenübergang genutzt",
      "Das Wasser kann einfach nicht heißer werden",
      "Die Wärme entweicht sofort in die Luft",
      "Der Wasserdampf kühlt die Oberfläche ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die zugeführte Energie (Verdampfungswärme) wird zum Aufbrechen der Anziehungskräfte der Moleküle benötigt, nicht zur Erhöhung der kinetischen Energie."
  },
  {
    "id": "k9_phy_060",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie nennt man den direkten Phasenübergang von fest zu gasförmig unter Überspringen des flüssigen Zustands?",
    "answers": [
      "Die Sublimation Phase",
      "Die Resublimation Phase",
      "Die Kondensation Phase",
      "Die Verdampfung Phase"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sublimation ist der Übergang von fest direkt zu gasförmig (z. B. Trockeneis $CO_2$)."
  },
  {
    "id": "k9_phy_061",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was besagt der 1. Hauptsatz der Thermodynamik?",
    "answers": [
      "Satz der Energieerhaltung",
      "Wärme fließt nur von kalt zu heiß",
      "Der Nullpunkt ist erreichbar",
      "Entropie nimmt immer ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 1. Hauptsatz entspricht dem allgemeinen Energieerhaltungssatz: $\\Delta U = Q + W$."
  },
  {
    "id": "k9_phy_062",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was besagt der 2. Hauptsatz der Thermodynamik bezüglich des Wärmeflusses?",
    "answers": [
      "Wärme fließt von heiß zu kalt",
      "Wärme fließt von kalt zu heiß",
      "Wärme kann nicht transportiert werden",
      "Arbeit wird zu 100% ohne Verlust"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spontan fließt Wärme stets vom Körper höherer Temperatur zum Körper niedrigerer Temperatur."
  },
  {
    "id": "k9_phy_063",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was bezeichnet man als 'Perpetuum Mobile zweiter Art'?",
    "answers": [
      "Unmögliche Maschine 100% Wärme umwandelt",
      "Eine Maschine völlig ohne jegliche Reibung",
      "Ein Erzeuger von unendlich viel Energie",
      "Eine Uhr die nur mit Sonne angetrieben wird"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Perpetuum Mobile 2. Art würde Wärme ohne Temperaturdifferenz vollständig in Arbeit umwandeln, was dem 2. Hauptsatz widerspricht."
  },
  {
    "id": "k9_phy_064",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche vier Takt-Phasen durchläuft ein Viertakt-Ottomotor?",
    "answers": [
      "Ansaugen, Verdichten, Arbeiten, Ausstoßen",
      "Zünden, Drücken, Kühlen und Ausstoßen",
      "Einströmen, Erhitzen, Drehen und Kühlen",
      "Einspritzen, Verbrennen, Saugen und Blasen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die 4 Takte lauten: 1. Ansaugen, 2. Verdichten (Komprimieren), 3. Arbeiten (Expansion nach Zündung), 4. Ausstoßen."
  },
  {
    "id": "k9_phy_065",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was unterscheidet den Dieselmotor vom Ottomotor bezüglich der Zündung?",
    "answers": [
      "Selbstzündung durch hohe Kompression",
      "Zündung erfolgt durch eine Zündkerze",
      "Zündung durch eine Dauerflamme außen",
      "Es findet keine Verbrennung statt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Dieselmotor ist ein Selbstzündungs-Motor: Stark komprimierte Luft erhitzt sich so stark, dass der eingespritzte Kraftstoff spontan zündet."
  },
  {
    "id": "k9_phy_066",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was versteht man unter der Dichteanomalie des Wassers?",
    "answers": [
      "Größte Dichte bei 4 Grad C",
      "Gefriert erst bei minus 10 Grad",
      "Verkleinert Volumen beim Eis",
      "Dichte wächst linear mit Hitze"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wasser besitzt seine höchste Dichte bei $4^\\circ C$. Eis hat wegen der Kristallstruktur eine geringere Dichte u. schwimmt oben."
  },
  {
    "id": "k9_phy_067",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Warum frieren tiefere Seen im Winter von oben nach unten zu?",
    "answers": [
      "4 Grad C Wasser sinkt zum Grund",
      "Eis sinkt an den Boden ab",
      "Fische erwärmen das Grundwasser",
      "Sonne heizt den Seegrund auf"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das schwerste Wasser ($4^\\circ C$) sammelt sich am Grund, während kälteres Wasser u. Eis ($0^\\circ C$) oben schwimmen."
  },
  {
    "id": "k9_phy_068",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die thermische Längenausdehnungsformel für feste Stäbe der Länge $L_0$?",
    "answers": [
      "Delta_L = alpha * L0 * Delta_T",
      "Delta_L = alpha * L0 / Delta_T",
      "Delta_L = L0 * Delta_T / alpha",
      "Delta_L = alpha + L0 + Delta_T"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Längenänderung ist proportional zur Ursprungslänge $L_0$, Temperaturänderung $\\Delta T$ u. Längenausdehnungskoeffizienten $\\alpha$."
  },
  {
    "id": "k9_phy_069",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Warum verbaut man in Schienen u. Brücken Dehnungsfugen?",
    "answers": [
      "Verbiegen bei Hitze verhindern",
      "Gewicht der Brücke zu reduzieren",
      "Schall der Züge komplett zu dämpfen",
      "Schönere Optik zu erzeugen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Materialien dehnen sich bei Sommerhitze aus. Ohne Fugen würden Spannungen zum Verbiegen oder Brechen führen."
  },
  {
    "id": "k9_phy_070",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was beschreibt das Gay-Lussac-Gesetz für ein ideales Gas bei konstantem Druck ($p = const$)?",
    "answers": [
      "Volumen direkt proportional zu Temp",
      "Druck ist umgekehrt proportional zu Vol",
      "Das Volumen bleibt immer ganz konstant",
      "Die Temperatur sinkt stark bei Erwärmung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei konstantem Druck dehnt sich ein Gas proportional zur Kelvin-Temperatur aus ($V / T = const$)."
  },
  {
    "id": "k9_phy_071",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was beschreibt das Gesetz von Boyle-Mariotte bei konstanter Temperatur ($T = const$)?",
    "answers": [
      "p * V = constant",
      "p / V = constant",
      "p + V = constant",
      "p * T = constant"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei isothermer Zustandsänderung verhalten sich Druck u. Volumen umgekehrt proportional zueinander ($p \\cdot V = const$)."
  },
  {
    "id": "k9_phy_072",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die allgemeine thermische Zustandsgleichung idealer Gase?",
    "answers": [
      "p * V = n * R * T",
      "p * T = n * R * V",
      "p * V * T = R",
      "p / V = R * T"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die ideale Gasgleichung lautet $p \\cdot V = n \\cdot R \\cdot T$ ($R =$ universelle Gaskonstante)."
  },
  {
    "id": "k9_phy_073",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was passiert beim Verdampfen von Flüssigkeiten in Kühlschränken?",
    "answers": [
      "Entzieht Umgebung Wärme",
      "Gibt Wärme an Innenraum ab",
      "Erzeugt elektrische Spannung",
      "Erhöht Druck im Kühlraum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Kältemittel verdampft im Innenraum bei niedrigem Druck u. entzieht dem Kühlgut dazu Verdampfungswärme."
  },
  {
    "id": "k9_phy_074",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie nennt man die Wärmemenge, die ein brennbarer Stoff pro Masseneinheit bei vollständiger Verbrennung abgibt?",
    "answers": [
      "Der Heizwert / Brennwert",
      "Die spezifische Kapazität",
      "Die Verdampfungswärme",
      "Der Wirkungsgrad Kraft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Heizwert $H_i$ beschreibt die freigesetzte Energie pro Masse (z. B. in $MJ/kg$)."
  },
  {
    "id": "k9_phy_075",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was versteht man unter 'Entropie' in der Thermodynamik anschaulich?",
    "answers": [
      "Maß für Unordnung Systems",
      "Gesamte Energie im System",
      "Geschwindigkeit der Moleküle",
      "Temperaturunterschied innen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Entropie ist ein statistisches Maß für den Grad der Unordnung eines thermodynamischen Systems."
  },

  // --- ATOM- & KERNPHYSIK / RADIOAKTIVITÄT (076 - 100) ---
  {
    "id": "k9_phy_076",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Aus welchen Teilchen setzt sich der Atomkern (Nukleonen) zusammen?",
    "answers": [
      "Protonen und Neutronen",
      "Protonen und Elektronen",
      "Neutronen und Elektronen",
      "Nur aus Quarks und Licht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Kern besteht aus den positiv geladenen Protonen u. den neutralen Neutronen (zusammen Nukleonen)."
  },
  {
    "id": "k9_phy_077",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was gibt die Ordnungszahl (Kernladungszahl) $Z$ eines Elements im Periodensystem an?",
    "answers": [
      "Anzahl der Protonen",
      "Anzahl aller Neutronen",
      "Summe Protonen u. Neutronen",
      "Masse des Atoms in Gramm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Ordnungszahl $Z$ entspricht exakt der Anzahl der Protonen im Atomkern u. bestimmt das Element."
  },
  {
    "id": "k9_phy_078",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was unterscheidet Isotope desselben chemischen Elements voneinander?",
    "answers": [
      "Anzahl der Neutronen im Kern",
      "Die Anzahl der Protonen im Kern",
      "Anzahl der Elektronen in der Hülle",
      "Die gesamte elektrische Ladung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Isotope eines Elements besitzen die gleiche Protonenzahl, aber unterschiedliche Neutronenzahlen u. Massenzahlen."
  },
  {
    "id": "k9_phy_079",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Aus welchen Teilchen besteht ein Alpha-Strahlungsteilchen ($\\alpha$-Strahlung)?",
    "answers": [
      "Helium-4-Kern (2 p + 2 n)",
      "Ein schnelles Elektron e-",
      "Ein hochenergetisches Photon",
      "Ein einzelnes Neutron n"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alpha-Strahlung besteht aus zweifach positiv geladenen Helium-4-Kernen ($2$ Protonen + $2$ Neutronen)."
  },
  {
    "id": "k9_phy_080",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was sendet ein Atomkern bei der Beta-Minus-Strahlung ($\\beta^-$-Strahlung) aus?",
    "answers": [
      "Ein schnelles Elektron e-",
      "Ein Helium-4-Nukleid Kern",
      "Ein reines Lichtquant Photon",
      "Ein schweres Protonenpaar"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Beta-Minus-Zerfall wandelt sich ein Neutron im Kern in ein Proton, ein Elektron u. ein Antineutrino um. Das Elektron wird ausgesandt."
  },
  {
    "id": "k9_phy_081",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was für eine Natur besitzt die Gamma-Strahlung ($\\gamma$-Strahlung)?",
    "answers": [
      "Hochenergetische Elektromagnetische Welle",
      "Ein Strom aus schnell fliegenden Neutronen",
      "Eine Schallwelle mit sehr hoher Frequenz",
      "Ein Strom aus vielen geladenen Positronen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gamma-Strahlung ist energiereiche elektromagnetische Strahlung (Photonen) ohne Ruhemasse u. Ladung."
  },
  {
    "id": "k9_phy_082",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Womit lässt sich Alphastrahlung bereits wirksam abschirmen?",
    "answers": [
      "Ein einfaches Blatt Papier",
      "Mehrere Zentimeter dickes Blei",
      "Eine ziemlich dicke Betonschicht",
      "Nur eine spezielle Vakuumkammer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alpha-Teilchen haben wegen ihrer Masse u. Ladung eine geringe Reichweite u. werden schon durch Papier oder Haut gestoppt."
  },
  {
    "id": "k9_phy_083",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welches Material eignet sich zur wirksamen Abschirmung von intensiver Gammastrahlung?",
    "answers": [
      "Dicke Schichten Blei / Beton",
      "Ein ganz normales Kleidungsstück",
      "Eine sehr dünne Alufolienschicht",
      "Ein einfaches Holzbrett von 2cm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gammastrahlung besitzt hohe Durchdringungskraft u. benötigt dichte Abschirmmaterialien wie Blei u. Beton."
  },
  {
    "id": "k9_phy_084",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet die Definition der physikalischen Halbwertszeit $T_{1/2}$?",
    "answers": [
      "Zeit in der Hälfte zerfällt",
      "Zeit bis alle Kerne zerfallen",
      "Halbe Lebensdauer der Erde",
      "Zeitraum für 25% Zerfall"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Halbwertszeit ist die Zeitspanne, in der jeweils genau die Hälfte der radioaktiven Ausgangskerne zerfällt."
  },
  {
    "id": "k9_phy_085",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie viel Prozent einer radioaktiven Stoffmenge ist nach ZWEI Halbwertszeiten noch vorhanden?",
    "answers": [
      "Anteil: 25 Prozent (1/4)",
      "Anteil: 50 Prozent (1/2)",
      "Anteil: 12.5 Prozent (1/8)",
      "Anteil: 0 Prozent völlig"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach 1 Halbwertszeit verbleiben $50\\%$, nach 2 Halbwertszeiten zerfällt wiederum die Hälfte: $50\\% / 2 = 25\\%$."
  },
  {
    "id": "k9_phy_086",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welches Gerät dient zum Nachweis u. Zählen ionisierender Strahlungsvorgänge?",
    "answers": [
      "Das Geiger-Müller-Zählrohr",
      "Das elektrostatische Elektrometer",
      "Das Barometer für den Luftdruck",
      "Das Oszilloskop für die Spannung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Geiger-Müller-Zählrohr registriert durch Stoßionisation in einem Zählgas Alphateilchen, Betateilchen u. Gammastrahlung."
  },
  {
    "id": "k9_phy_087",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie nennt man die Maßeinheit Becquerel (Bq) in der Kernphysik?",
    "answers": [
      "Einheit der Aktivität (Zerfall/s)",
      "Einheit der Strahlendosis im Körper",
      "Einheit der Energie eines Protons",
      "Einheit der Halbwertszeit in Jahren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1\\,Becquerel (Bq) = 1\\,\\text{Kernzerfall pro Sekunde}$ misst die Aktivität einer radioaktiven Probe."
  },
  {
    "id": "k9_phy_088",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche Maßeinheit misst die biologische Äquivalentdosis der Strahlungswirkung auf den Menschen?",
    "answers": [
      "Einheit: Sievert (Sv)",
      "Einheit: Becquerel (Bq)",
      "Einheit: Gray (Gy)",
      "Einheit: Tesla (T)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Sievert ($Sv$ bzw. $mSv$) gewichtet die absorbierte Strahlendosis mit der biologischen Schadwirkung der jeweiligen Strahlungsart."
  },
  {
    "id": "k9_phy_089",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welcher Physiker entdeckte im Jahr 1895 die Röntgenstrahlung?",
    "answers": [
      "Wilhelm Conrad Röntgen",
      "Henri Becquerel Forscher",
      "Marie Curie Physikerin",
      "Ernest Rutherford"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Röntgen entdeckte die nach ihm benannten X-Strahlen (Röntgenstrahlung) in Würzburg."
  },
  {
    "id": "k9_phy_090",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was geschah 1938 bei der Entdeckung der Kernspaltung durch Otto Hahn u. Fritz Straßmann?",
    "answers": [
      "Uran-Kern spaltete Barium",
      "Fusion von Wasserstoff",
      "Erzeugung von Antimaterie",
      "Zerfall von Kohlenstoff C14"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Beschuss von Uranium-235 mit thermischen Neutronen spaltete sich der schwere Kern u. setzte Barium u. Energie frei."
  },
  {
    "id": "k9_phy_091",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welche Teilchen lösen die Kettenreaktion im Kernkraftwerk bei der Spaltung von Uranium-235 aus?",
    "answers": [
      "Freigesetzte Neutronen n",
      "Hochenergetische Protonen",
      "Schnelle Elektronen e-",
      "Gammastrahlung Quanten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pro Spaltung werden 2–3 neue Neutronen frei, die wiederum benachbarte U-235-Kerne spalten können."
  },
  {
    "id": "k9_phy_092",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welches Bauteil regelt die Kettenreaktion im Reaktor eines Kernkraftwerks durch Absorbieren von Neutronen?",
    "answers": [
      "Die Steuerstäbe / Regelstäbe",
      "Der Kühlturm des Kraftwerks",
      "Die Turbine im Wasserkreislauf",
      "Der Generator für Wechselstrom"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Steuerstäbe (z. B. aus Bor oder Cadmium) verabsortieren Neutronen u. regeln oder stoppen so die Kettenreaktion."
  },
  {
    "id": "k9_phy_093",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welcher Stoff dient im Leichtwasserreaktor als Moderator zum Abbremsen schneller Neutronen?",
    "answers": [
      "Gewöhnliches Wasser (H2O)",
      "Flüssiges geschmolzenes Blei",
      "Heliumgas unter hohem Druck",
      "Dicke Schichten aus Graphit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Moderator bremst schnelle Neutronen auf thermische Geschwindigkeiten ab, da nur langsame Neutronen U-235 effizient spalten."
  },
  {
    "id": "k9_phy_094",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie lautet Einsteins berühmte Gleichung zur Äquivalenz von Masse $m$ u. Energie $E$?",
    "answers": [
      "E = m * c^2",
      "E = 0.5 * m * c",
      "E = m * g * c",
      "E = m / c^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Einsteins Formel $E = m \\cdot c^2$ besagt, dass Masse u. Energie ineinander umgewandelt werden können ($c = $ Lichtgeschwindigkeit)."
  },
  {
    "id": "k9_phy_095",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was versteht man unter dem Begriff 'Massendefekt' bei Atomkernen?",
    "answers": [
      "Kern ist leichter als Bausteine",
      "Kern ist schwerer als Bausteine",
      "Verlust von Protonen bei Flug",
      "Elektronenmasse wird verbraucht"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Atomkern ist stets geringfügig leichter als die Summe seiner freien Einzel-Nukleonen. Die Differenz entspricht der Kernbindungsenergie."
  },
  {
    "id": "k9_phy_096",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welcher Prozess verschmilzt leichte Atomkerne zu schwereren (z. B. Wasserstoff zu Helium in der Sonne)?",
    "answers": [
      "Die Kernfusion Fusion",
      "Die Kernspaltung Fission",
      "Der Alphazerfall Prozess",
      "Die Radioaktive Verweisung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei der Kernfusion verschmelzen leichte Kerne unter enormer Hitze u. Druck u. setzen riesige Energiemengen frei."
  },
  {
    "id": "k9_phy_097",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Welches Schutzprinzip besagt die '4A-Regel' im Strahlenschutz?",
    "answers": [
      "Abstand, Abschirmung, Aufenthaltszeit, Aktivität meiden",
      "Analyse, Auswertung, Anpassung und komplette Abschaltung",
      "Absaugen, Abspülen, gründliches Anziehen, Abtransport",
      "Atmen, Arbeiten, ausgiebiges Abwarten und langes Ausruhen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die 4-A-Regeln des Strahlenschutzes: **A**bstand halten, **A**bschirmung nutzen, **A**ufenthaltszeit kurz halten, **A**ufnahme in Körper meiden."
  },
  {
    "id": "k9_phy_098",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Wie verhält sich die Dosisleistung einer Punktstrahlenquelle im Verhältnis zum Abstand $r$ (Abstandsgesetz)?",
    "answers": [
      "Sinkt mit 1 / r^2",
      "Sinkt linear mit 1 / r",
      "Bleibt völlig konstant",
      "Steigt quadratisch mit r^2"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Doppelter Abstand bedeutet ein Viertel der Dosisleistung ($1/r^2$-Gesetz)."
  },
  {
    "id": "k9_phy_099",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Mit welcher Methode kann man das Alter organischer Funde bis ca. 50.000 Jahre bestimmen?",
    "answers": [
      "Radiokohlenstoffmethode (C-14)",
      "Die Uran-Blei-Methode zur Analyse",
      "Die Kalium-Argon-Datierung",
      "Eine genaue Röntgenstrukturanalyse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die C-14-Methode nutzt den Zerfall des radioaktiven Kohlenstoffisotops $C-14$ (Halbwertszeit 5730 Jahre) in gestorbenen Organismen."
  },
  {
    "id": "k9_phy_0100",
    "category": "k9_physik",
    "area": "schule",
    "grade": 9,
    "subject": "physik",
    "question": "Was beschreibt die 'Nulleffekt- bzw. Untergrundstrahlung' im Alltag?",
    "answers": [
      "Natürliche Umgebungsstrahlung",
      "Strahlung durch das Smartphone",
      "Die Röntgenstrahlung beim Arzt",
      "Die Wärmestrahlung der Sonne"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Nullexistenz/Untergrundstrahlung setzt sich aus kosmischer Strahlung u. terrestrischer Strahlung natürlicher Vorkommen zusammen."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K9_PHYSIK_QUESTIONS = K9_PHYSIK_QUESTIONS;
}