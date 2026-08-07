// ================================================================
// KLASSE 9 - INFORMATIK (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K9_INFORMATIK_QUESTIONS = [
  // --- ALGORITHMEN, KONTROLLSTRUKTUREN & PROGRAMMIERUNG (001 - 025) ---
  {
    "id": "k9_inf_001",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt der Begriff 'Algorithmus' in der Informatik?",
    "answers": [
      "Eindeutige Handlungsvorschrift zur Problemlösung",
      "Reiner physikalischer Aufbau eines Prozessors",
      "Spezielle Art von Computerspielen im Netz",
      "Kabelverbindung zwischen zwei Computern"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Algorithmus ist eine präzise, schrittweise Anweisung zur Lösung einer Klasse von Problemen."
  },
  {
    "id": "k9_inf_002",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche drei grundlegenden Kontrollstrukturen nutzt die strukturierte Programmierung?",
    "answers": [
      "Sequenz, Selektion und Iteration",
      "Eingabe, Verarbeitung und Ausgabe",
      "Variable, Konstante und Funktion",
      "Klasse, Objekt und Methode"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alle Algorithmen lassen sich aus Abfolge (Sequenz), Verzweigung (Selektion) u. Wiederholung (Iteration) aufbauen."
  },
  {
    "id": "k9_inf_003",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter einer 'Variable' in einer Programmiersprache?",
    "answers": [
      "Namentlich benannter Speicherplatz für Werte",
      "Unveränderbare Konstante im Quellcode",
      "Grafisches Element auf der Benutzeroberfläche",
      "Netzwerkprotokoll zur Datenübertragung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Variable ist ein Platzhalter im Arbeitsspeicher, dessen Inhalt während des Programmlaufs verändert werden kann."
  },
  {
    "id": "k9_inf_004",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welcher Datentyp speichert logische Wahrheitswerte (true/false)?",
    "answers": [
      "Der Datentyp Boolean (bool)",
      "Der Datentyp Integer (int)",
      "Der Datentyp String (str)",
      "Der Datentyp Float (float)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein boolescher Wert (Boolean) kann exakt einen von zwei Zuständen annehmen: wahr (true) oder falsch (false)."
  },
  {
    "id": "k9_inf_005",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Schleife wird verwendet, wenn die Anzahl der Durchläufe im Voraus bekannt ist?",
    "answers": [
      "Die zählergesteuerte For-Schleife",
      "Die bedingte While-Schleife",
      "Die unendliche Repeat-Schleife",
      "Die rekursive Aufruf-Schleife"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "For-Schleifen nutzen einen Zähler u. eignen sich ideal, wenn die Anzahl der Durchläufe feststeht."
  },
  {
    "id": "k9_inf_006",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was zeichnet eine Kopf-gesteuerte Schleife (while-Schleife) aus?",
    "answers": [
      "Prüfung der Bedingung VOR dem Durchlauf",
      "Mindestens ein garantierter Durchlauf",
      "Feste Anzahl von exakt 10 Durchläufen",
      "Ausführung nur bei falscher Bedingung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei der while-Schleife wird die Bedingung vor dem Schleifenrumpf geprüft. Ist sie zu Beginn falsch, wird der Rumpf nie ausgeführt."
  },
  {
    "id": "k9_inf_007",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt der Begriff 'Endlosschleife'?",
    "answers": [
      "Schleife, deren Abbruchbedingung nie eintritt",
      "Schleife, die maximal einmal durchläuft",
      "Schleife mit einer festen Zählvariable",
      "Schleife zur Berechnung von Kreisflächen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Endlosschleife läuft ununterbrochen weiter, da die Abbruchbedingung niemals erfüllt wird."
  },
  {
    "id": "k9_inf_008",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche logische Verknüpfung verlangt, dass BEIDE Bedingungen wahr sind?",
    "answers": [
      "Die Und-Verknüpfung (AND)",
      "Die Oder-Verknüpfung (OR)",
      "Die Nicht-Verknüpfung (NOT)",
      "Die Exklusiv-Oder-Verknüpfung (XOR)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die logische UND-Operation liefert nur dann den Wert wahr, wenn alle verknüpften Teilaussagen wahr sind."
  },
  {
    "id": "k9_inf_009",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wann liefert eine logische ODER-Verknüpfung (OR) den Wert wahr?",
    "answers": [
      "Wenn mindestens eine Bedingung wahr ist",
      "Ausschließlich wenn beide Bedingungen wahr sind",
      "Nur wenn beide Bedingungen falsch sind",
      "Wenn genau die erste Bedingung falsch ist"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim logischen ODER reicht es aus, wenn mindestens eine der Bedingungen erfüllt ist."
  },
  {
    "id": "k9_inf_010",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter einer 'Funktion' oder 'Methode' in der Programmierung?",
    "answers": [
      "Wiederverwendbarer Teilcode mit Name",
      "Spezieller Typ von Monitor-Bildschirmen",
      "Befehl zum Herunterfahren des PCs",
      "Anzahl der Pixel auf einem Display"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Funktionen bündeln zusammengehörige Anweisungen unter einem Namen u. können mehrfach aufgerufen werden."
  },
  {
    "id": "k9_inf_011",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt der Begriff 'Parameter' bei einer Funktion?",
    "answers": [
      "Übergabewert an eine Funktion",
      "Rückgabewert nach der Berechnung",
      "Name der Funktion im Quellcode",
      "Fehlermeldung bei der Ausführung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Parameter sind Variablen, die einer Funktion beim Aufruf übergeben werden, damit diese mit konkreten Werten arbeitet."
  },
  {
    "id": "k9_inf_012",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was bewirkt das Schlüsselwort 'return' am Ende einer Funktion?",
    "answers": [
      "Beendet Funktion u. gibt Wert zurück",
      "Startet das gesamte Programm neu",
      "Löscht alle Variablen im Speicher",
      "Wiederholt die Funktion endlos"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mit 'return' bricht die Ausführung der Funktion ab u. das Ergebnis wird an den Aufrufer zurückgegeben."
  },
  {
    "id": "k9_inf_013",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter einem 'Array' oder einer 'Liste'?",
    "answers": [
      "Datenstruktur für mehrere Werte",
      "Einzelne Zahl im Arbeitsspeicher",
      "Befehl zum Speichern einer Datei",
      "Spezielle Tastatur für Programmierer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Array speichert eine geordnete Sammlung von Elementen unter einer einzigen Variablenadresse."
  },
  {
    "id": "k9_inf_014",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Mit welchem Index greift man in fast allen Programmiersprachen auf das ERSTE Element eines Arrays zu?",
    "answers": [
      "Mit dem Index 0 (null)",
      "Mit dem Index 1 (eins)",
      "Mit dem Index -1 (minus eins)",
      "Mit dem Begriff 'first'"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In den meisten Sprachen (Java, Python, C++, JS) beginnt die Zählung von Array-Indizes bei 0 (Zero-based indexing)."
  },
  {
    "id": "k9_inf_015",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt ein 'Syntaxfehler' in einem Programm?",
    "answers": [
      "Verstoß gegen Grammatikregeln des Codes",
      "Falsches rechnerisches Ergebnis im Ausflug",
      "Ausfall der Hardware während des Laufzeit",
      "Internetverbindungsabbruch im Programm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Syntaxfehler entstehen, wenn der Code nicht den formalen Sprachregeln entspricht (z. B. fehlende Klammer/Semikolon)."
  },
  {
    "id": "k9_inf_016",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was ist ein 'logischer Fehler' (Laufzeitfehler) beim Programmieren?",
    "answers": [
      "Programm läuft, liefert aber falsche Ergebnisse",
      "Der Compiler verweigert den Start komplett",
      "Der Bildschirm bleibt von Beginn an schwarz",
      "Tastatureingaben werden nicht erkannt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Code ist formal korrekt geschrieben, aber der Denkfehler im Algorithmus führt zu einem falschen Resultat."
  },
  {
    "id": "k9_inf_017",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter dem Begriff 'Debugging'?",
    "answers": [
      "Systematische Suche u. Behebung von Fehlern",
      "Installieren eines neuen Betriebssystems",
      "Reinigung der Lüfter im Computergehäuse",
      "Übersetzen von Quellcode in Grafikdateien"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Debugging bezeichnet das Finden u. Beseitigen von Fehlern (Bugs) im Programmcode."
  },
  {
    "id": "k9_inf_018",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was tut ein 'Compiler'?",
    "answers": [
      "Übersetzt Quellcode komplett in Maschinencode",
      "Führt Zeile für Zeile direkt im Browser aus",
      "Überprüft die Rechtschreibung in Dokumenten",
      "Schützt den PC vor Viren aus dem Netzwerk"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Compiler übersetzt das gesamte Programm von einer Höheren Programmiersprache in Maschinensprache vor der Ausführung."
  },
  {
    "id": "k9_inf_019",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wie unterscheidet sich ein 'Interpreter' von einem 'Compiler'?",
    "answers": [
      "Liest u. führt Code Zeile für Zeile aus",
      "Erstellt immer eine feste exe-Datei",
      "Arbeitet deutlich schneller als ein Compiler",
      "Benötigt keinen Quelltext zur Arbeit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Interpreter übersetzt u. führt den Quellcode Schritt für Schritt während der Laufzeit aus (z. B. Python, JavaScript)."
  },
  {
    "id": "k9_inf_020",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt das Prinzip der 'Suchen u. Sortieren'-Algorithmen?",
    "answers": [
      "Standardaufgaben zum Verarbeiten von Daten",
      "Spezielle Funktionen zum Zeichnen von Bildern",
      "Protokolle zur Verschlüsselung von Mails",
      "Methoden zum Komprimieren von Videos"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Suchen (z. B. Binäre Suche) u. Sortieren (z. B. Bubble Sort) sind fundamentale Algorithmen der Informatik."
  },
  {
    "id": "k9_inf_021",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wie arbeitet der einfache Sortieralgorithmus 'Bubblesort'?",
    "answers": [
      "Vergleicht u. tauscht benachbarte Elemente",
      "Teilt das Array in vier gleich große Teile",
      "Sucht zufällig nach der richtigen Ordnung",
      "Sortiert Elemente nach ihrer Speicheradresse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bubblesort vergleicht wiederholt aufeinanderfolgende Paare u. tauscht sie, bis größere Elemente wie Blasen nach oben steigen."
  },
  {
    "id": "k9_inf_022",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Voraussetzung für die Nutzung der schnellen 'Binären Suche' ist...?",
    "answers": [
      "Dass die Datenliste sortiert vorliegt",
      "Dass die Liste nur aus Zahlen besteht",
      "Dass der Computer einen Grafikprozessor hat",
      "Dass höchstens 10 Elemente vorhanden sind"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Binäre Suche halbiert den Suchraum in jedem Schritt, funktioniert aber zwingend nur auf bereits sortierten Daten."
  },
  {
    "id": "k9_inf_023",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was ist Pseudocode?",
    "answers": [
      "Halbformale Mischung aus Sprache u. Code",
      "Eine echte, lauffähige Programmiersprache",
      "Ein fehlerhafter Computercode im System",
      "Verschlüsselter Text für Datenbanken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pseudocode dient der Entwurfsdarstellung von Algorithmen unabhängig von einer konkreten Programmiersprache."
  },
  {
    "id": "k9_inf_024",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was stellt ein Programmablaufplan (PAP / Flussdiagramm) dar?",
    "answers": [
      "Grafische Darstellung eines Algorithmus",
      "Umsatzstatistik einer IT-Firma",
      "Netzwerkverbindung aller Server",
      "Schaltplan einer Computer-Platine"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein PAP veranschaulicht den Ablauf eines Programms mithilfe genormter Symbole (Rechteck, Raute, Pfeile)."
  },
  {
    "id": "k9_inf_025",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Form hat das Entscheidungssymbol (für Verzweigungen) in einem Flussdiagramm?",
    "answers": [
      "Eine Raute (Rhombus)",
      "Ein einfaches Rechteck",
      "Ein perfekter Kreis",
      "Ein spitzes Dreieck"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In Ablaufplänen werden Bedingungen immer in Rauten dargestellt, von denen Ja- u. Nein-Pfeile abgehen."
  },

  // --- DATEN, CODIERUNG & INFORMATIONSTHEORIE (026 - 050) ---
  {
    "id": "k9_inf_026",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was ist ein 'Bit' in der Informatik?",
    "answers": [
      "Kleinste Informationseinheit (0 oder 1)",
      "Eine Gruppe von genau 8 Zeichen",
      "Ein Bauteil auf der Grafikkarte",
      "Ein Befehl zum Löschen von Dateien"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bit (Binary Digit) ist die kleinste digitale Speichereinheit u. nimmt den Wert 0 oder 1 an."
  },
  {
    "id": "k9_inf_027",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Aus wie vielen Bits besteht exakt ein 'Byte'?",
    "answers": [
      "Aus exakt 8 Bits",
      "Aus exakt 10 Bits",
      "Aus exakt 16 Bits",
      "Aus exakt 100 Bits"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Byte fasst 8 Bits zusammen u. kann $2^8 = 256$ verschiedene Zustände darstellen."
  },
  {
    "id": "k9_inf_028",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Zahlenbasis nutzt das Dualsystem (Binärsystem)?",
    "answers": [
      "Die Basis 2 (Ziffern 0 u. 1)",
      "Die Basis 10 (Ziffern 0 bis 9)",
      "Die Basis 16 (Ziffern 0 bis F)",
      "Die Basis 8 (Ziffern 0 bis 7)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Binärsystem beruht auf der Basis 2 u. nutzt ausschließlich die Ziffern 0 u. 1."
  },
  {
    "id": "k9_inf_029",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welcher Dezimalzahl entspricht die Binärzahl 1011?",
    "answers": [
      "Der Dezimalzahl 11",
      "Der Dezimalzahl 9",
      "Der Dezimalzahl 13",
      "Der Dezimalzahl 7"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1 \cdot 8 + 0 \cdot 4 + 1 \cdot 2 + 1 \cdot 1 = 8 + 0 + 2 + 1 = 11$."
  },
  {
    "id": "k9_inf_030",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wie wird die Dezimalzahl 6 im Binärsystem dargestellt?",
    "answers": [
      "Als Binärzahl 110",
      "Als Binärzahl 101",
      "Als Binärzahl 011",
      "Als Binärzahl 111"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$4 + 2 + 0 = 1 \cdot 4 + 1 \cdot 2 + 0 \cdot 1 \rightarrow 110_2$."
  },
  {
    "id": "k9_inf_031",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Zahlenbasis verwendet das Hexadezimalsystem?",
    "answers": [
      "Basis 16 (Ziffern 0-9 u. A-F)",
      "Basis 10 (Ziffern 0 bis 9)",
      "Basis 2 (Ziffern 0 u. 1)",
      "Basis 12 (Ziffern 0 bis B)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Hexadezimalsystem hat 16 Zeichen: 0 bis 9 sowie A(10), B(11), C(12), D(13), E(14), F(15)."
  },
  {
    "id": "k9_inf_032",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welchem Dezimalwert entspricht der Buchstabe 'A' im Hexadezimalsystem?",
    "answers": [
      "Dem Wert 10",
      "Dem Wert 11",
      "Dem Wert 15",
      "Dem Wert 100"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "A steht für 10, B für 11, C für 12, D für 13, E für 14 u. F für 15."
  },
  {
    "id": "k9_inf_033",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Warum wird das Hexadezimalsystem in der Informatik häufig verwendet?",
    "answers": [
      "Kompakte Darstellung langer Binärzahlen",
      "Computer rechnen intern damit schneller",
      "Vermeidung von negativen Zahlen im Code",
      "Schutz vor Computerviren u. Blicken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Je 4 Bits (Nibble) lassen sich exakt durch eine einzige Hexadezimalziffer übersichtlich zusammenfassen."
  },
  {
    "id": "k9_inf_034",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wofür steht die Abkürzung 'ASCII' bei der Textcodierung?",
    "answers": [
      "American Standard Code for Information Interchange",
      "Advanced System Code for Internet Integration",
      "Automated Standard Computer Interface Interchange",
      "All Standard Characters In Information"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "ASCII ist eine 7-Bit-Zeichenkodierung zur Darstellung von lateinischen Buchstaben, Zahlen u. Satzzeichen."
  },
  {
    "id": "k9_inf_035",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Warum reicht der klassische ASCII-Code für weltweiten Text nicht aus?",
    "answers": [
      "Kann nur 128 Zeichen darstellen",
      "Funktioniert nur auf Apple-Geräten",
      "Kann keine Zahlen u. Kommas speichern",
      "Ist für moderne Monitore zu langsam"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mit 7 Bit ($2^7 = 128$) fehlen Sonderzeichen, Umlaute (ä, ö, ü) u. nicht-lateinische Schriften (Chinesisch, Arabisch)."
  },
  {
    "id": "k9_inf_036",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welcher moderne Standard ermöglicht die Codierung nahezu aller Schriftzeichen u. Emojis weltweit?",
    "answers": [
      "Der Unicode-Standard (z. B. UTF-8)",
      "Der erweiterte ASCII-Code 8-Bit",
      "Das globale Morse-Code-System",
      "Das HTML-Farbcode-Raster"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Unicode stellt über eine Million Zeichenplätze bereit u. deckt weltweite Alphabete u. Emojis ab."
  },
  {
    "id": "k9_inf_037",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wie wird eine Pixelgrafik (Rastergrafik) im Speicher dargestellt?",
    "answers": [
      "Raster aus Farbpunkten (Pixeln)",
      "Mathematische Vektoren u. Linien",
      "Sammlung von Text-Dateien",
      "3D-Modelle aus Dreiecken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Pixelgrafiken (z. B. BMP, PNG, JPG) wird das Bild in ein Gitter aus Bildpunkten mit Farbwerten zerlegt."
  },
  {
    "id": "k9_inf_038",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt das RGB-Farbmodell zur Darstellung von Farben auf Bildschirmen?",
    "answers": [
      "Mischung aus Rot, Grün und Blau",
      "Mischung aus Rosa, Gelb u. Braun",
      "Mischung aus Schwarz u. Weiß",
      "Mischung aus Cyan, Magenta u. Gelb"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "RGB nutzt die additive Farbmischung von Licht in Rot, Grün u. Blau (Werte meist 0 bis 255 pro Kanal)."
  },
  {
    "id": "k9_inf_039",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welcher Farbe entspricht der RGB-Hexadezimalcode '#FF0000'?",
    "answers": [
      "Einem reinen Rot",
      "Einem reinen Grün",
      "Einem reinen Blau",
      "Der Farbe Schwarz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "#FF0000 bedeutet: Rot auf Maximum (FF=255), Grün auf 00, Blau auf 00."
  },
  {
    "id": "k9_inf_040",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Farbe ergibt sich bei der Mischung aller drei RGB-Kanäle auf Maximum (#FFFFFF)?",
    "answers": [
      "Ein leuchtendes Weiß",
      "Ein tiefes Schwarz",
      "Ein neutrales Grau",
      "Ein dunkles Braun"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Additive Farbmischung aller Lichtfarben in voller Intensität ergibt Weiß."
  },
  {
    "id": "k9_inf_041",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was unterscheidet eine 'Vektorgrafik' von einer 'Pixelgrafik'?",
    "answers": [
      "Verlustfrei skalierbar durch Formeln",
      "Besteht aus einzelnen Bildpunkten",
      "Benötigt immer mehr Speicherkapazität",
      "Kann keine Farben aufweisen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vektorgrafiken (z. B. SVG) speichern mathematische Objekte (Linien, Kreise) u. lassen sich ohne Qualitätsverlust vergrößern."
  },
  {
    "id": "k9_inf_042",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter 'Abtastung' (Sampling) bei der Digitalisierung von Tonaufnahmen?",
    "answers": [
      "Messung der Ton-Schwingung in Intervallen",
      "Löschen von Nebengeräuschen im Raum",
      "Verstärkung des Basses bei Musik",
      "Kompression der MP3-Datei auf Disc"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Sampling wird die kontinuierliche analoge Schallwelle in festen Zeitabständen gemessen u. digitalisiert."
  },
  {
    "id": "k9_inf_043",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was ist das Hauptziel von 'Datenkompression'?",
    "answers": [
      "Reduzierung des Speicherbedarfs",
      "Erhöhung der Bildschirmauflösung",
      "Verschlüsselung sensibler Daten",
      "Beschleunigung von Virenscans"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kompression reduziert die Dateigröße zur effizienteren Speicherung u. schnelleren Übertragung im Netz."
  },
  {
    "id": "k9_inf_044",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was unterscheidet 'verlustfreie' von 'verlustbehafteter' Kompression?",
    "answers": [
      "Verlustfrei stellt Original exakt wieder her",
      "Verlustbehaftet vergrößert die Datei leicht",
      "Verlustfrei funktioniert nur bei MP3s",
      "Verlustbehaftet löscht den Dateinamen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verlustfreie Verfahren (ZIP, PNG) stellen die Daten exakt wieder her; verlustbehaftete (MP3, JPG) entfernen unmerkliche Details."
  },
  {
    "id": "k9_inf_045",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wie funktioniert die einfache Lauflängencodierung (Run-Length Encoding)?",
    "answers": [
      "Ersetzt gleiche Folgen durch Anzahl u. Wert",
      "Löscht jedes zweite Zeichen im Text",
      "Verschlüsselt Wörter mit einem Passwort",
      "Ordnet Buchstaben nach dem Alphabet"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wiederholungen (z. B. 'AAAAA') werden als Zahl u. Zeichen gespeichert ('5A'), was Platz spart."
  },
  {
    "id": "k9_inf_046",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welches Präfix steht für $1024$ Bytes (bzw. $1000$ Bytes im Dezimalsystem)?",
    "answers": [
      "Das Präfix Kilo (KiloByte / KB)",
      "Das Präfix Mega (MegaByte / MB)",
      "Das Präfix Giga (GigaByte / GB)",
      "Das Präfix Tera (TeraByte / TB)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "1 KiloByte (KB) entspricht 1.000 Bytes (in Binärpräfixen $1 \text{ KiB} = 1024 \text{ Bytes}$)."
  },
  {
    "id": "k9_inf_047",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wie viele MegaByte (MB) ergeben ungefähr einen GigaByte (GB)?",
    "answers": [
      "Ungefähr 1000 MegaByte",
      "Ungefähr 100 MegaByte",
      "Ungefähr 10 MegaByte",
      "Ungefähr 10000 MegaByte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "$1 \text{ GB} = 1000 \text{ MB}$ (bzw. $1024 \text{ MiB}$ im Binärsystem)."
  },
  {
    "id": "k9_inf_048",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt der Begriff 'Abtastrate' (Hz) bei Audioaufnahmen?",
    "answers": [
      "Anzahl der Messungen pro Sekunde",
      "Maximale Lautstärke des Mikrofons",
      "Länge des aufgenommenen Musikstücks",
      "Anzahl der Lautsprecher im Raum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Abtastrate (z. B. $44,1 \text{ kHz}$ bei CDs) gibt an, wie oft pro Sekunde das Audiosignal gemessen wird."
  },
  {
    "id": "k9_inf_049",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welches Dateiformat wird typischerweise für verlustbehaftete komprimierte Bilder genutzt?",
    "answers": [
      "Das Format JPEG (.jpg)",
      "Das Format PNG (.png)",
      "Das Format BMP (.bmp)",
      "Das Format Text (.txt)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "JPEG komprimiert Fotos verlustbehaftet u. erreicht dadurch sehr kleine Dateigrößen."
  },
  {
    "id": "k9_inf_050",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welches Dateiformat unterstützt verlustfreie Kompression u. Transparenzen in Bildern?",
    "answers": [
      "Das Format PNG (.png)",
      "Das Format JPEG (.jpg)",
      "Das Format MP3 (.mp3)",
      "Das Format AVI (.avi)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "PNG (Portable Network Graphics) bietet verlustfreie Kompression u. transparente Hintergründe (Alpha-Kanal)."
  },

  // --- RECHNERARCHITEKTUR, NETZWERKE & INTERNET (051 - 075) ---
  {
    "id": "k9_inf_051",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt das grundlegende EVA-Prinzip der Datenverarbeitung?",
    "answers": [
      "Eingabe -> Verarbeitung -> Ausgabe",
      "Einheit -> Verbindung -> Ausführung",
      "Energie -> Verbrauch -> Abschaltung",
      "Empfang -> Verteiler -> Anzeige"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das EVA-Prinzip ist das Grundschema der Datenverarbeitung: Daten eingeben, verarbeiten u. ausgeben."
  },
  {
    "id": "k9_inf_052",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Komponente gehört zur 'Eingabe' im EVA-Prinzip?",
    "answers": [
      "Die Computer-Tastatur",
      "Der Monitor-Bildschirm",
      "Der Lautsprecher am PC",
      "Der Tintenstrahldrucker"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tastatur, Maus u. Mikrofon führen dem System Daten zu (Eingabegeräte)."
  },
  {
    "id": "k9_inf_053",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Hardware-Komponente ist das 'Gehirn' des Computers u. führt Befehle aus?",
    "answers": [
      "Der Prozessor (CPU)",
      "Der Arbeitsspeicher (RAM)",
      "Die Festplatte (SSD)",
      "Das Netzteil im PC"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die CPU (Central Processing Unit) verarbeitet Befehle u. steuert die Rechenabläufe."
  },
  {
    "id": "k9_inf_054",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was zeichnet den Arbeitsspeicher (RAM) eines Computers aus?",
    "answers": [
      "Flüchtiger u. sehr schneller Speicher",
      "Dauerhafter Speicher für das Betriebssystem",
      "Optischer Speicher auf einer Disc",
      "Langsamer Speicher im Internet"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der RAM (Random Access Memory) speichert Daten flüchtig: Bei Ausschalten des Stroms gehen alle Inhalte verloren."
  },
  {
    "id": "k9_inf_055",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welcher Speicher behält seine Daten auch nach dem Ausschalten des Rechners dauerhaft?",
    "answers": [
      "Die Festplatte (SSD / HDD)",
      "Der Arbeitsspeicher (RAM)",
      "Der Cache des Prozessors",
      "Der Register-Speicher der CPU"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Festplatten (HDD) u. Solid State Drives (SSD) sind nicht-flüchtige Massenspeicher."
  },
  {
    "id": "k9_inf_056",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was ist die Hauptaufgabe eines Betriebssystems (z. B. Windows, Linux, macOS)?",
    "answers": [
      "Verwaltung der Hardware u. Programme",
      "Verschlüsselung aller Online-Einkäufe",
      "Herstellung von Mikroprozessoren",
      "Bereitstellung von Internetseiten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Betriebssystem steuert die Hardwareressourcen u. bildet die Schnittstelle zwischen Benutzer u. Software."
  },
  {
    "id": "k9_inf_057",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter einem 'Computernetzwerk'?",
    "answers": [
      "Verbindung von Geräten zum Datenaustausch",
      "Eine Sammlung von Kabeln im PC-Gehäuse",
      "Ein Antivirenprogramm für Netzwerke",
      "Ein spezieller Typ von Hauptprozessor"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Netzwerk koppelt mehrere autonome Rechnersysteme zum gemeinsamen Nutzen von Daten u. Ressourcen."
  },
  {
    "id": "k9_inf_058",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wofür steht die Abkürzung 'LAN' bei Netzwerken?",
    "answers": [
      "Local Area Network (Lokales Netz)",
      "Large Access Network (Großnetz)",
      "Logical Application Node",
      "Link Access Navigation"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein LAN beschränkt sich auf einen kleineren räumlichen Bereich (z. B. Wohnung, Schule, Büro)."
  },
  {
    "id": "k9_inf_059",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wofür steht die Abkürzung 'WLAN'?",
    "answers": [
      "Wireless Local Area Network",
      "Wide Local Application Node",
      "Web Linked Access Network",
      "World Local Area Network"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "WLAN bezeichnet ein drahtloses, lokales Funknetzwerk."
  },
  {
    "id": "k9_inf_060",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Eigenschaft zeichnet eine 'IP-Adresse' aus?",
    "answers": [
      "Eindeutige Adresse im Netzwerk",
      "Veränderbarer Name der Festplatte",
      "Seriennummer der Computermaus",
      "Passwort für den WLAN-Zugang"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die IP-Adresse dient der eindeutigen Adressierung u. Erreichbarkeit von Geräten in Internet-Protokoll-Netzen."
  },
  {
    "id": "k9_inf_061",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Aus wie vielen Abschnitten (Oktetten) besteht eine klassische IPv4-Adresse (z. B. 192.168.1.1)?",
    "answers": [
      "Aus 4 durch Punkte getrennten Zahlen",
      "Aus 6 durch Bindestriche getrennten Zeichen",
      "Aus 2 durch Doppelpunkt getrennten Zahlen",
      "Aus 8 durch Komma getrennten Abschnitten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "IPv4-Adressen bestehen aus 32 Bits, aufgeteilt in 4 Bytes (Zahlen von 0 bis 255), getrennt durch Punkte."
  },
  {
    "id": "k9_inf_062",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Warum wird der neue Standard 'IPv6' schrittweise eingeführt?",
    "answers": [
      "IPv4-Adressen sind knapp geworden",
      "IPv4 funktioniert nicht mit WLAN",
      "IPv6 beschleunigt das Tippen von Mails",
      "IPv4 kann keine Bilder übertragen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "IPv6 nutzt 128-Bit-Adressen u. bietet extrem viele Adressen, da die knapp 4.3 Milliarden IPv4-Adressen aufgebraucht sind."
  },
  {
    "id": "k9_inf_063",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was ist die Hauptaufgabe des 'DNS' (Domain Name System) im Internet?",
    "answers": [
      "Übersetzt Namen in IP-Adressen",
      "Sichert Server vor Hackern ab",
      "Speichert Passwörter von Nutzern",
      "Verbindet Rechner mit Stromkabeln"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das DNS funktioniert wie ein Telefonbuch des Internets: Es wandelt lesbare Namen (z. B. wikipedia.org) in IP-Adressen um."
  },
  {
    "id": "k9_inf_064",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt das 'Client-Server-Prinzip'?",
    "answers": [
      "Client fordert an, Server antwortet",
      "Zwei Rechner tauschen zufällig Rollen",
      "Server druckt Dokumente für Clients aus",
      "Client speichert alle Daten des Netzwerks"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Client (z. B. Webbrowser) sendet eine Anfrage (Request), die der Server bearbeitet u. beantwortet (Response)."
  },
  {
    "id": "k9_inf_065",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welches Protokoll überträgt Webseiten verschlüsselt u. sicher im Browser?",
    "answers": [
      "Das HTTPS-Protokoll",
      "Das unverschlüsselte HTTP",
      "Das FTP-Datei-Protokoll",
      "Das SMTP-E-Mail-Protokoll"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "HTTPS (Hypertext Transfer Protocol Secure) verschlüsselt die Verbindung zwischen Browser u. Webserver mittels TLS/SSL."
  },
  {
    "id": "k9_inf_066",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wofür steht die Abkürzung 'URL'?",
    "answers": [
      "Uniform Resource Locator",
      "Universal Router Link",
      "United Resource Network",
      "User Reception Language"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine URL identifiziert u. lokalisiert eine Ressource (z. B. Webseite) im Internet."
  },
  {
    "id": "k9_inf_067",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Sprache wird zur Strukturierung von Inhalten auf Webseiten genutzt?",
    "answers": [
      "Die Auszeichnungssprache HTML",
      "Die Programmiersprache C++",
      "Die Datenbanksprache SQL",
      "Die Maschinensprache Assembler"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "HTML (Hypertext Markup Language) legt die Grundstruktur u. Inhalte (Texte, Bilder, Links) einer Webseite fest."
  },
  {
    "id": "k9_inf_068",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wofür nutzt man 'CSS' bei der Entwicklung von Webseiten?",
    "answers": [
      "Gestaltung u. Layout (Design)",
      "Speicherung in Datenbanken",
      "Sicherheitsübermittlung der IP",
      "Berechnung von komplexen Formeln"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "CSS (Cascading Style Sheets) steuert das optische Aussehen (Farben, Schriften, Layout) der HTML-Elemente."
  },
  {
    "id": "k9_inf_069",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Aufgabe erfüllt ein 'Router' im Heimnetzwerk?",
    "answers": [
      "Leitet Datenpakete zwischen Netzen weiter",
      "Kühlt die Komponenten im Gehäuse ab",
      "Speichert Dateien dauerhaft auf Disks",
      "Erstellt Sicherungskopien von Fotos"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Router verbindet verschiedene Netzwerke (z. B. das heimische LAN mit dem Internet) u. leitet Daten zielgerichtet weiter."
  },
  {
    "id": "k9_inf_070",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter 'Paketvermittlung' im Internet?",
    "answers": [
      "Daten werden in Pakete zerlegt u. gesendet",
      "Verschicken von echten Paketen per Post",
      "Gleichzeitiges Laden aller Webseiten",
      "Speichern von Daten auf USB-Sticks"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Große Dateien werden in kleine Datenpakete aufgeteilt, einzeln über das Netz geroutet u. am Ziel wieder zusammengesetzt."
  },
  {
    "id": "k9_inf_071",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wofür steht die Abkürzung 'MAC-Adresse' bei einer Netzwerkkarte?",
    "answers": [
      "Eindeutige physikalische Hardware-Adresse",
      "Spezielle IP-Adresse von Apple-Geräten",
      "Name des angemeldeten Benutzers",
      "Geschwindigkeit der Kabelverbindung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die MAC-Adresse (Media Access Control) ist weltweit einmalig fest in das Netzwerkgerät eingebrannt."
  },
  {
    "id": "k9_inf_072",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt der Begriff 'Ping' bei Netzwerken?",
    "answers": [
      "Diagnose zur Messung der Antwortzeit",
      "Ton bei Ankunft einer neuen E-Mail",
      "Name eines unverschlüsselten Servers",
      "Befehl zum Beenden des Browsers"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ping prüft, ob ein anderer Rechner im Netz erreichbar ist u. misst die Latenzzeit (Verzögerung)."
  },
  {
    "id": "k9_inf_073",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter dem Begriff 'Cloud Computing'?",
    "answers": [
      "Nutzung von IT-Diensten über das Internet",
      "Berechnung von Wetterdaten am PC",
      "Kühlung von Rechenzentren durch Wasser",
      "Drahtloser Datenversand via Bluetooth"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Cloud Computing stellt Speicherplatz, Rechenleistung oder Software flexibel als Dienstleistung über das Netz bereit."
  },
  {
    "id": "k9_inf_074",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welches Protokoll regelt den zuverlässigen Versand von E-Mails zwischen Servern?",
    "answers": [
      "Das SMTP-Protokoll",
      "Das HTTP-Web-Protokoll",
      "Das DHCP-Netz-Protokoll",
      "Das IP-Verbindungs-System"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "SMTP (Simple Mail Transfer Protocol) dient der Übertragung u. dem Weiterleiten von E-Mails im Netz."
  },
  {
    "id": "k9_inf_075",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welches Protokoll wird verwendet, um E-Mails von einem Server abzurufen u. auf dem Server zu belassen?",
    "answers": [
      "Das IMAP-Protokoll",
      "Das POP3-Protokoll alte Art",
      "Das FTP-Datei-System",
      "Das DNS-Auflösungs-System"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "IMAP synchronisiert Mails u. Ordner direkt auf dem Server, sodass man mit mehreren Geräten zugreifen kann."
  },

  // --- DATENSCHUTZ, KRYPTOGRAPHIE & GESELLSCHAFT (076 - 100) ---
  {
    "id": "k9_inf_076",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt der Begriff 'Kryptographie'?",
    "answers": [
      "Wissenschaft von der Ver- u. Entschlüsselung",
      "Erforschung der Geschichte von Rechnern",
      "Programmierung von grafischen Spielen",
      "Herstellung von Mikrochips aus Silizium"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kryptographie befasst sich mit Methoden zum Schutz von Daten durch Verschlüsselung."
  },
  {
    "id": "k9_inf_077",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wie funktioniert die historische 'Cäsar-Verschlüsselung'?",
    "answers": [
      "Verschiebt Buchstaben um festen Wert im Alphabet",
      "Vertauscht die Reihenfolge der Wörter im Satz",
      "Ersetzt alle Konsonanten durch Binärzahlen",
      "Kehrt den gesamten Text rückwärts um"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Cäsar-Chiffre ist eine einfache monoalphabetische Substitution, bei der jeder Buchstabe um k Stellen verschoben wird."
  },
  {
    "id": "k9_inf_078",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was kennzeichnet eine 'symmetrische Verschlüsselung'?",
    "answers": [
      "Gleicher Schlüssel zum Ver- u. Entschlüsseln",
      "Zwei unterschiedliche Schlüssel im System",
      "Funktioniert völlig ohne Schlüssel",
      "Verschlüsselung nur für Zahlen gültig"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei symmetrischer Verschlüsselung nutzen Sender u. Empfänger denselben geheimen Schlüssel."
  },
  {
    "id": "k9_inf_079",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wie arbeitet ein 'asymmetrisches Verschlüsselungsverfahren' (Public-Key-Kryptographie)?",
    "answers": [
      "Öffentlicher Schlüssel zum Ver-, privater zum Entschlüsseln",
      "Sender u. Empfänger nutzen exakt denselben Schlüssel",
      "Schlüssel ändert sich alle 10 Sekunden automatisch",
      "Entschlüsselung ist nur beim Anbieter möglich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Asymmetrische Verfahren nutzen ein Schlüsselpaar: Den Public Key zum Ver- u. den Private Key zum Entschlüsseln."
  },
  {
    "id": "k9_inf_080",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Wofür dient eine 'Digitale Signatur' bei elektronischen Dokumenten?",
    "answers": [
      "Nachweis der Echtheit u. Unverfälschtheit",
      "Automatische Korrektur von Rechtschreibung",
      "Kompression von großen PDF-Dateien",
      "Verbergen des Autors vor Behörden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die digitale Signatur sichert die Authentizität des Absenders u. schützt vor unbemerkten Änderungen."
  },
  {
    "id": "k9_inf_081",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter einer 'Hashfunktion' (z. B. SHA-256)?",
    "answers": [
      "Erzeugt eindeutigen Wert fester Länge (Prüfsumme)",
      "Verschlüsselt Bilder in Text-Dateien",
      "Löscht alte Daten sicher von der Festplatte",
      "Überträgt Dateien per Kabel im Netzwerk"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Hashfunktion wandelt beliebige Datenmengen in einen eindeutigen Fingerabdruck (Hashwert) fester Länge um."
  },
  {
    "id": "k9_inf_082",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt das Grundrecht auf 'Informationelle Selbstbestimmung'?",
    "answers": [
      "Recht selbst zu bestimmen, wer welche Daten erfährt",
      "Pflicht zur Freigabe aller Daten an den Staat",
      "Recht auf kostenlosen Internetzugang für alle",
      "Erlaubnis zum Verkauf fremder Fotos online"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus dem Urteil des Bundesverfassungsgerichts (1983): Der Einzelne darf grundsätzlich selbst entscheiden, wer welche seiner Daten nutzt."
  },
  {
    "id": "k9_inf_083",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Daten gelten rechtlich als 'personenbezogene Daten'?",
    "answers": [
      "Alle Angaben, die sich auf eine Person beziehen",
      "Ausschließlich das Geburtsdatum u. Gewicht",
      "Nur geheime Passwörter u. PIN-Nummern",
      "Ausschließlich die IP-Adresse des Servers"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Personenbezogen sind alle Daten, über die eine natürliche Person identifiziert werden kann (Name, Adresse, E-Mail, Standort)."
  },
  {
    "id": "k9_inf_084",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was bezeichnet der Begriff 'Phishing'?",
    "answers": [
      "Betrügerischer Versuch, vertrauliche Daten zu erlangen",
      "Suchen nach Dateien im Betriebssystem",
      "Automatisches Herunterladen von Updates",
      "Reinigung der Tastatur mit Spezial-Sprays"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Phishing täuscht durch gefälschte Mails oder Webseiten Vertrauenswürdigkeit vor, um Passwörter oder Bankdaten abzugreifen."
  },
  {
    "id": "k9_inf_085",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt eine 'Firewall' in einem Computernetzwerk?",
    "answers": [
      "Sicherheitsbarriere zur Filterung von Netzwerkdaten",
      "Physikalischer Brandschutz im Serverraum",
      "Spezielle Software zur Grafikbeschleunigung",
      "Hardware-Kabel zur Hochgeschwindigkeitsübertragung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Firewall überwacht den Datenverkehr u. blockiert unerlaubte Zugriffe von außen auf das System."
  },
  {
    "id": "k9_inf_086",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter 'Malware'?",
    "answers": [
      "Sammelbegriff für Schadsoftware (Viren, Trojaner)",
      "Fehlerhafte Bauteile im Prozessor",
      "Software zum Erstellen von Malereien",
      "Kostenlose Testversionen von Programmen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Malware (Malicious Software) umfasst Viren, Würmer, Trojaner, Ransomware u. Spyware."
  },
  {
    "id": "k9_inf_087",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was ist die tückische Eigenschaft eines 'Trojanischen Pferdes' (Trojaner)?",
    "answers": [
      "Täuscht nützliche Funktion vor, schadet heimlich",
      "Blockiert den Bildschirm durch echte Werbung",
      "Löscht sich nach der Installation sofort selbst",
      "Verdoppelt die Rechengeschwindigkeit des PCs"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Trojaner tarnen sich als nutzbringendes Programm, führen im Hintergrund jedoch Schadfunktionen aus."
  },
  {
    "id": "k9_inf_088",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was zeichnet Erpressungs-Software (Ransomware) aus?",
    "answers": [
      "Verschlüsselt Daten u. fordert Lösegeld",
      "Sendet spamartig E-Mails an Freunde",
      "Schaltet den Monitor nach 5 Minuten ab",
      "Löscht alle Druckertreiber auf dem System"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ransomware sperrt den Zugriff auf das System oder die Dateien u. fordert Geld für die Freischaltung."
  },
  {
    "id": "k9_inf_089",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Welche Eigenschaften machen ein Passwort besonders sicher?",
    "answers": [
      "Länge, Kombination aus Groß/Klein, Zahlen u. Zeichen",
      "Nutzung des eigenen Geburtsdatums mit Namen",
      "Einfache Buchstabenfolgen wie 'abc12345'",
      "Kurze Wörter aus dem Standard-Wörterbuch"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sichere Passwörter nutzen ausreichend Länge (mind. 12 Zeichen) u. eine zufällige Mischung verschiedener Zeichenarten."
  },
  {
    "id": "k9_inf_090",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt das Prinzip der 'Zwei-Faktor-Authentifizierung' (2FA)?",
    "answers": [
      "Anmeldung mit zwei unabhängigen Nachweisen",
      "Eingabe des Passworts in zwei verschiedenen Feldern",
      "Anmeldung von zwei Personen gleichzeitig am Rechner",
      "Speichern von Passwörtern auf zwei Festplatten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "2FA kombiniert zwei Faktoren aus Wissen (Passwort), Besitz (Smartphone/Token) oder Biometrie (Fingerabdruck)."
  },
  {
    "id": "k9_inf_091",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was regelt das 'Urheberrecht' bei Software u. digitalen Inhalten?",
    "answers": [
      "Schutz geistigen Eigentums vor unbefugtem Kopieren",
      "Pflicht zur kostenlosen Veröffentlichung aller Daten",
      "Recht auf Verteilung gekaufter Spiele an alle Freunde",
      "Garantie auf fehlerfreie Funktion von Programmen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Urheberrecht schützt die Werke von Entwicklern u. Künstlern vor unrechtmäßiger Vervielfältigung u. Verbreitung."
  },
  {
    "id": "k9_inf_092",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was kennzeichnet 'Open-Source-Software'?",
    "answers": [
      "Quellcode ist öffentlich einsehbar u. veränderbar",
      "Software darf nur von Behörden genutzt werden",
      "Software läuft ohne Betriebssystem direkt am PC",
      "Quellcode ist als strenges Geheimnis geschützt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Open Source gewährt jedem das Recht, den Quellcode einzusehen, zu verändern u. weiterzuverbreiten (z. B. Linux, Firefox)."
  },
  {
    "id": "k9_inf_093",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter 'Creative Commons'-Lizenzen (CC)?",
    "answers": [
      "Standardisierte Lizenzverträge zur Nutzung von Werken",
      "Spezielle Steuergesetze für digitale Medienfirmen",
      "Prüfzertifikate für besonders schnelle Server",
      "Software zur Verwaltung von Kundenkonten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "CC-Lizenzen erlauben Urhebern, der Öffentlichkeit einfach u. klar Nutzungsrechte an ihren Werken einzuräumen."
  },
  {
    "id": "k9_inf_094",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt der Begriff 'Denial of Service' (DoS / DDoS-Angriff)?",
    "answers": [
      "Überlastung eines Servers durch massenhafte Anfragen",
      "Löschen von Inhalten auf der Festplatte des Opfers",
      "Spionieren von Kameraaufnahmen über das Internet",
      "Kopieren von Datenbanken ohne Berechtigung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein DDoS-Angriff flutet ein System gleichzeitig von vielen Rechnern mit Anfragen, bis es zusammenbricht."
  },
  {
    "id": "k9_inf_095",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter 'Man-in-the-Middle'-Angriffen?",
    "answers": [
      "Angreifer schaltet sich geheim in die Verbindung ein",
      "Physischer Diebstahl des Hauptprozessors im Raum",
      "Zerstörung des Internet-Kabelverteilers vor dem Haus",
      "Abfangen von Mails direkt im Papierkorb"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Angreifer steht unbemerkt zwischen zwei Kommunikationspartnern u. kann Nachrichten mitlesen oder verändern."
  },
  {
    "id": "k9_inf_096",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter 'Maschinellem Lernen' als Teilbereich der KI?",
    "answers": [
      "Systeme erkennen Muster u. lernen aus Daten",
      "Roboter bauen eigenständig Computer zusammen",
      "Programme korrigieren ihre Syntaxfehler selbst",
      "Prozessoren werden durch Software schneller getaktet"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Maschinellen Lernen lernen Algorithmen auf Basis von Trainingsdaten eigenständig Regeln u. Muster."
  },
  {
    "id": "k9_inf_097",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was ist das Grundprinzip eines 'Künstlichen Neuronalen Netzes'?",
    "answers": [
      "Nachempfindung biologischer Gehirnstrukturen",
      "Verbindung von Computern mit echten Nerven",
      "Speicherung von Daten in organischen Flüssigkeiten",
      "Netzwerkkabel aus hochleitfähigem Biomaterial"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Neuronale Netze bestehen aus vernetzten mathematischen Knoten (Neuronen), die nach dem Vorbild des Gehirns arbeiten."
  },
  {
    "id": "k9_inf_098",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was beschreibt das Phänomen des 'Filterblasen'-Effekts durch KI-Algorithmen?",
    "answers": [
      "Nutzer sehen primär Inhalte, die sie bestätigen",
      "Löschen von ungewünschten Spam-E-Mails im Postfach",
      "Automatische Sperrung von unseriösen Webseiten",
      "Schutz von persönlichen Profilen vor Werbeanzeigen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Algorithmen filtern Informationen nach Vorlieben des Nutzers, sodass dieser kaum noch abweichende Meinungen sieht."
  },
  {
    "id": "k9_inf_099",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter 'Deepfakes'?",
    "answers": [
      "Täuschend echte, per KI gefälschte Medien",
      "Fehlgeschlagene Suchanfragen im Deep Web",
      "Versteckte Schadprogramme in Dateianhängen",
      "Gefälschte IP-Adressen im lokalen Netzwerk"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Deepfakes nutzen KI-Techniken zur Manipulation von Bildern, Videos oder Tonaufnahmen, um Personen Dinge sagen/tun zu lassen, die nie stattfanden."
  },
  {
    "id": "k9_inf_0100",
    "category": "k9_informatik",
    "area": "schule",
    "grade": 9,
    "subject": "informatik",
    "question": "Was versteht man unter 'Digitale Nachhaltigkeit' (Green IT)?",
    "answers": [
      "Ressourcenschonende Herstellung u. Nutzung von IT",
      "Anpflanzen von Bäumen durch IT-Konzerne",
      "Recycling von altem Papier in IT-Büros",
      "Löschen von alten Dateien zur Stromeinsparung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Green IT umfasst umwelt- u. ressourcenschonende Ansätze über den gesamten Lebenszyklus von IT-Systemen."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K9_INFORMATIK_QUESTIONS = K9_INFORMATIK_QUESTIONS;
}