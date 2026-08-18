// ================================================================
// KLASSE 6 - MUSIK & KUNST (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K6_MUSIK_KUNST_QUESTIONS = [
  // --- MUSIK: NOTENLEHRE, RHYTHMUS & TAKT (001 - 015) ---
  {
    "id": "k6_mk_001",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie viele Viertelnoten passen exakt in einen $4/4$-Takt?",
    "answers": [
      "Genau acht Noten",
      "Genau drei Noten",
      "Genau zwei Noten",
      "Genau vier Noten"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein $4/4$-Takt besteht aus vier Viertelschlägen."
  },
  {
    "id": "k6_mk_002",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie viele Achtelnoten entsprechen dem Wert einer einzigen Viertelnote?",
    "answers": [
      "Acht Achtelnoten",
      "Zwei Achtelnoten",
      "Drei Achtelnoten",
      "Vier Achtelnoten"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Viertelnote lässt sich in zwei gleich lange Achtelnoten unterteilen."
  },
  {
    "id": "k6_mk_003",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den gebräuchlichsten Notenschlüssel für hohe Töne?",
    "answers": [
      "Der Sopranschlüssel",
      "Der Violinschlüssel",
      "Der Baritonschlüssel",
      "Der Mezzoschlüssel"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Violinschlüssel (G-Schlüssel) legt die Note g' auf der zweiten Linie fest."
  },
  {
    "id": "k6_mk_004",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Notenschlüssel wird meist für tiefe Töne (z. B. Cello, Bass) genutzt?",
    "answers": [
      "Der Sopranschlüssel",
      "Der Rhythmusschlüssel",
      "Der Violinschlüssel",
      "Der Bassschlüssel"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Bassschlüssel (F-Schlüssel) kennzeichnet tiefe Tonlagen."
  },
  {
    "id": "k6_mk_005",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bewirkt ein Kreuz-Vorzeichen ($\\sharp$) vor einer Note?",
    "answers": [
      "Verdoppelt die Note",
      "Macht die Note stumm",
      "Erhöht um Halbton",
      "Erniedrigt Halbton"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Kreuz-Vorzeichen ($\\sharp$) erhöht den Ton um einen Halbtonschritt (z. B. C zu C#)."
  },
  {
    "id": "k6_mk_006",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bewirkt ein B-Vorzeichen ($\\flat$) vor einer Note?",
    "answers": [
      "Erhöht um Halbton",
      "Erniedrigt Halbton",
      "Kürzt den Notenwert",
      "Verlängert den Ton"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein B-Vorzeichen ($\\flat$) erniedrigt den Ton um einen Halbtonschritt (z. B. H zu B)."
  },
  {
    "id": "k6_mk_007",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Zeichen hebt ein vorheriges Vorzeichen ($\\sharp$ oder $\\flat$) wieder auf?",
    "answers": [
      "Das Staccatozeichen",
      "Das Haltebogenzeichen",
      "Das Auflösungszeichen",
      "Das Wiederholungszeichen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Auflösungszeichen stellt den ursprünglichen Stammton wieder her."
  },
  {
    "id": "k6_mk_008",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Aus wie vielen Notenlinien besteht das herkömmliche Notensystem?",
    "answers": [
      "Aus 5 Linien",
      "Aus 3 Linien",
      "Aus 4 Linien",
      "Aus 6 Linien"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Notensystem besitzt fünf waagerechte Linien und vier Zwischenräume."
  },
  {
    "id": "k6_mk_009",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den Abstand zwischen zwei Tönen in der Musiklehre?",
    "answers": [
      "Das Intervall",
      "Der Kammerton",
      "Die Tonleiter",
      "Der Halbton"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Tonabstand zwischen zwei Tönen heißt Intervall (z. B. Terz, Quint, Oktave)."
  },
  {
    "id": "k6_mk_010",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den Abstand von acht Tonstufen (z. B. von c' bis c'')?",
    "answers": [
      "Eine Quart",
      "Eine Sekunde",
      "Eine Oktave",
      "Eine Quinte"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Oktave umfasst acht Tonstufen einer Tonleiter."
  },
  {
    "id": "k6_mk_011",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeutet ein Punkt direkt rechts neben einer Note (z. B. punktierte Halbe)?",
    "answers": [
      "Ton wird doppelt laut",
      "Ton wird sehr kurz",
      "Wert wird halbiert",
      "Wert um Hälfte mehr"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Punkt verlängert die Note um die Hälfte ihres eigenen Wertes."
  },
  {
    "id": "k6_mk_012",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Takt ist ein typischer Walzertakt?",
    "answers": [
      "Der 2/4-Takt",
      "Der 4/4-Takt",
      "Der 6/8-Takt",
      "Der 3/4-Takt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Walzer tanzt klassisch im beschwingten $3/4$-Takt."
  },
  {
    "id": "k6_mk_013",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den Zusammenklang von mindestens drei verschiedenen Tönen?",
    "answers": [
      "Eine Tonleiter",
      "Einen Akkord",
      "Einen Taktstrich",
      "Ein Intervall"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Drei oder mehr gleichzeitig erklingende Töne bilden einen Akkord (Dreiklang)."
  },
  {
    "id": "k6_mk_014",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was trennt im Notensystem zwei aufeinanderfolgende Takte voneinander?",
    "answers": [
      "Das Vorzeichen",
      "Die Notenfahne",
      "Der Haltebogen",
      "Der Taktstrich"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Senkrechte Taktstriche unterteilen das Notensystem in einzelne Takte."
  },
  {
    "id": "k6_mk_015",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie viele Halbe Noten ergeben zusammen den Wert einer Ganzen Note?",
    "answers": [
      "Acht Halbe Noten",
      "Zwei Halbe Noten",
      "Drei Halbe Noten",
      "Vier Halbe Noten"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Ganze Note teilt sich in zwei Halbe Noten auf."
  },

  // --- MUSIK: INSTRUMENTENKUNDE & KLANGERZEUGUNG (016 - 030) ---
  {
    "id": "k6_mk_016",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Zu welcher Instrumentenfamilie gehört die Querflöte?",
    "answers": [
      "Zu Schlaginstrumenten",
      "Zu Streichern",
      "Zu Blechbläsern",
      "Zu Holzbläsern"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Trotz ihres Metallkörpers zählt die Querflöte historisch u. baulich zu den Holzbläsern."
  },
  {
    "id": "k6_mk_017",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Instrument ist das kleinste u. höchste der Streicherfamilie?",
    "answers": [
      "Der Kontrabass",
      "Die Bratsche (Viola)",
      "Das Violoncello",
      "Die Violine (Geige)"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Violine besitzt die kürzesten Saiten und klingt am höchsten."
  },
  {
    "id": "k6_mk_018",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches ist das tiefste Streichinstrument im klassischen Orchester?",
    "answers": [
      "Der Kontrabass",
      "Die Viola Bratsche",
      "Das Violoncello",
      "Die Violine Geige"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der großgebaute Kontrabass erzeugt die tiefsten Streichertöne."
  },
  {
    "id": "k6_mk_019",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Zu welcher Instrumentengruppe gehört die Trompete?",
    "answers": [
      "Zu Blechbläsern",
      "Zu Zupfinstrumenten",
      "Zu Tasteninstrumenten",
      "Zu Holzbläsern"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Trompete wird durch Kesselmundstück u. Lippenschwingung bei Blechbläsern eingeordnet."
  },
  {
    "id": "k6_mk_020",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Blasinstrument verändert Töne durch einen ausziehbaren Zug?",
    "answers": [
      "Das Waldhorn",
      "Die Trompete",
      "Die Posaune",
      "Die Tuba Bass"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Zugposaune verlängert das Rohr stufenlos durch den Posaunenzug."
  },
  {
    "id": "k6_mk_021",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Aus welchem Material bestehen die Saiten einer klassischen Gitarre meist?",
    "answers": [
      "Reines Holzfaser",
      "Dicker Kunststoff",
      "Gepresstes Silber",
      "Nylon oder Stahl"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Konzertgitarren nutzen Nylon-, Westerngitarren Stahlsaiten."
  },
  {
    "id": "k6_mk_022",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man Schlaginstrumente, die bestimmte Tonhöhen spielen können?",
    "answers": [
      "Stimmbare Percussion",
      "Ungestimmte Trommeln",
      "Reine Rhythmusgeräte",
      "Klanglose Rasseln"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pauken, Xylophone u. Glockenspiele erzeugen exakte Tonhöhen."
  },
  {
    "id": "k6_mk_023",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Aus welchem Material bestehen die Platten eines Xylophons?",
    "answers": [
      "Aus Glassteinen",
      "Aus Plastikrohr",
      "Aus Hartholz",
      "Aus Metall guss"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Xylon' ist griechisch für Holz; das Xylophon hat Holzklangstäbe."
  },
  {
    "id": "k6_mk_024",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Tasteninstrument bringt Saiten durch kleine Hämmerchen zum Klingen?",
    "answers": [
      "Die Kirchenorgel",
      "Das Klavier (Flügel)",
      "Das Cembalo (Kiel-Zupf)",
      "Das Akkordeon (Balg)"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tastendruck löst beim Klavier einen Hammeranschlag auf die Saite aus."
  },
  {
    "id": "k6_mk_025",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie erzeugt die Orgel ihre Töne?",
    "answers": [
      "Hämmer auf Saiten",
      "Zupfen von Drähten",
      "Monomembran Schlag",
      "Wind durch Pfeifen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gebläseluft (Wind) strömt durch hölzerne u. metallene Orgelpfeifen."
  },
  {
    "id": "k6_mk_026",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Holzblasinstrument nutzt ein Doppelrohrblatt zur Klangerzeugung?",
    "answers": [
      "Die Oboe (Fagott)",
      "Die Klarinette (Rohr)",
      "Das Saxophon (Blech)",
      "Die Blockflöte Holz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Oboe und Fagott erzeugen Töne durch zwei gegeneinander schwingende Schilfrohrblätter."
  },
  {
    "id": "k6_mk_027",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Warum gehört das Saxophon trotz Messingkörper zu den Holzbläsern?",
    "answers": [
      "Erfindung in Holz",
      "Holz-Rohrblatt Mund",
      "Klang wie Flöte",
      "Bauform der Klappen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ausschlaggebend ist das einfache Schilfrohrblatt am Mundstück."
  },
  {
    "id": "k6_mk_028",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man das Haarbündel an einem Streichbogen für Geigen?",
    "answers": [
      "Nylonschnur dick",
      "Ross-Pferdehaare",
      "Feines Kunstleder",
      "Kupferdraht fein"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bögen werden traditionell mit präparierten Schweifhaaren von Schimmeln bespannt."
  },
  {
    "id": "k6_mk_029",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Womit reibt man die Bogenhaare ein, damit sie auf Saiten haften?",
    "answers": [
      "Mit Speiseöl fett",
      "Mit Wachs-Creme",
      "Mit Kreide-Pulver",
      "Mit Kolophonium"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kolophonium (Baumharz) sorgt für den nötigen Grip auf der Saite."
  },
  {
    "id": "k6_mk_030",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches ist das größte u. tiefste Blechblasinstrument?",
    "answers": [
      "Die Posaune",
      "Die Tuba",
      "Die Trompete",
      "Das Waldhorn"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Tuba bildet das tiefe Fundament im Blechbläsersatz."
  },

  // --- MUSIK: DYNAMIK, TEMPO & FACHBEGRIFFE (031 - 040) ---
  {
    "id": "k6_mk_031",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeutet das Dynamikzeichen $p$ (piano) in Noten?",
    "answers": [
      "Sehr laut spielen",
      "Laut spielen",
      "Mäßig laut spielen",
      "Leise spielen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Piano ($p$) steht für eine leise Lautstärke."
  },
  {
    "id": "k6_mk_032",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeutet das Dynamikzeichen $f$ (forte) in Noten?",
    "answers": [
      "Laut spielen",
      "Langsam werden",
      "Sehr leise spielen",
      "Leise spielen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Forte ($f$) bedeutet kräftig u. laut zu musizieren."
  },
  {
    "id": "k6_mk_033",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeutet der Begriff 'crescendo' in einem Musikstück?",
    "answers": [
      "Allmählich lauter",
      "Sofort anhalten",
      "Allmählich leiser",
      "Schneller werden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Crescendo bedeutet schrittweise Zunahme der Lautstärke."
  },
  {
    "id": "k6_mk_034",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeutet der Begriff 'decrescendo' (oder diminuendo)?",
    "answers": [
      "Allmählich lauter",
      "Allmählich leiser",
      "Sehr schnell werden",
      "Langsam ausklingen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Decrescendo bedeutet kontinuierliche Abnahme der Lautstärke."
  },
  {
    "id": "k6_mk_035",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Tempobezeichnung steht für ein schnelles, heiteres Tempo?",
    "answers": [
      "Adagio",
      "Andante",
      "Largo",
      "Allegro"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Allegro verlangt ein rasches, lebhaftes Tempo."
  },
  {
    "id": "k6_mk_036",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Tempobezeichnung beschreibt ein ruhiges Gehtempo?",
    "answers": [
      "Presto",
      "Vivace",
      "Allegro",
      "Andante"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Andante leitet sich vom italienischen 'andare' (gehen) ab."
  },
  {
    "id": "k6_mk_037",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeutet die Spielanweisung 'staccato' (Punkte über Noten)?",
    "answers": [
      "Gebunden u. weich",
      "Sehr laut akzent",
      "Langgezogen halten",
      "Kurz u. getrennt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Staccato verlangt eine abgehackte, kurze Spielweise Töne."
  },
  {
    "id": "k6_mk_038",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeutet die Spielanweisung 'legato' (Bogen über Noten)?",
    "answers": [
      "Kurz u. zackig",
      "Sehr laut spielen",
      "Gebunden spielen",
      "Langsamer werden"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Legato verbindet Töne nahtlos miteinander."
  },
  {
    "id": "k6_mk_039",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man das Gerät, das durch gleichmäßiges Ticken das Tempo angibt?",
    "answers": [
      "Das Metronom",
      "Das Diktafon",
      "Das Stimmgerät",
      "Das Grammophon"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Metronom schlägt den Takt in Beats per Minute (BPM) exakt vor."
  },
  {
    "id": "k6_mk_040",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeutet die Abkürzung $mf$ (mezzoforte)?",
    "answers": [
      "Sehr laut spielen",
      "Mäßig laut spielen",
      "Sehr leise spielen",
      "Mäßig leise spielen"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mezzoforte liegt genau zwischen piano und forte."
  },

  // --- MUSIK: KOMPONISTEN & WERKANALYSE (041 - 050) ---
  {
    "id": "k6_mk_041",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Wunderknabe der Wiener Klassik komponierte 'Die Zauberflöte'?",
    "answers": [
      "L. van Beethoven",
      "Antonio Vivaldi",
      "W. A. Mozart",
      "J. S. Bach"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wolfgang Amadeus Mozart schrieb die weltberühmte Oper 1791."
  },
  {
    "id": "k6_mk_042",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher taube Komponist schuf die 9. Sinfonie mit der 'Ode an die Freude'?",
    "answers": [
      "Joseph Haydn Wien",
      "Franz P. Schubert",
      "Wolfgang A. Mozart",
      "L. van Beethoven"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beethoven vollendete seine epochale 9. Sinfonie trotz Gehörlosigkeit."
  },
  {
    "id": "k6_mk_043",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Barock-Komponist schuf das Werk 'Die vier Jahreszeiten'?",
    "answers": [
      "J. S. Bach",
      "Claudio Monteverdi",
      "G. F. Händel",
      "Antonio Vivaldi"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vivaldi stellte Frühlings- u. Winterklänge in Violinonzerten dar."
  },
  {
    "id": "k6_mk_044",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Barock-Meister schuf die 'Brandenburgischen Konzerte'?",
    "answers": [
      "L. van Beethoven",
      "Franz Liszt",
      "W. A. Mozart",
      "Johann S. Bach"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bach gilt als der Vollender der Barockmusik u. der Kontrapunktik."
  },
  {
    "id": "k6_mk_045",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher französische Komponist schuf 'Der Karneval der Tiere'?",
    "answers": [
      "Camille Saint-Saëns",
      "Maurice Ravel Werk",
      "Claude Debussy Musik",
      "Georges Bizet Oper"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der zoologischen Fantasie vertonen Instrumente Löwen, Schwäne u. Elefanten."
  },
  {
    "id": "k6_mk_046",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Werk von Prokofjew stellt Personen als Instrumente dar?",
    "answers": [
      "Peter und der Wolf",
      "Hänsel und Gretel",
      "Die Bilder Ausstellung",
      "Der Nussknacker"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Peter wird z. B. von den Streichern u. der Wolf vom Waldhorn vertont."
  },
  {
    "id": "k6_mk_047",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wer leitet ein großes Orchester mit dem Taktstock?",
    "answers": [
      "Der Konzertmeister",
      "Der Regisseur",
      "Der Intendant",
      "Der Dirigent"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Dirigent gibt Einsatz, Tempo u. Dynamik des Orchesters vor."
  },
  {
    "id": "k6_mk_048",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den ersten Geiger eines Orchesters?",
    "answers": [
      "Erster Solist Geige",
      "Der Bogenführer",
      "Konzertmeister",
      "Der Orchesterchef"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Konzertmeister sitzt links vorne u. stimmt das Ensemble ein."
  },
  {
    "id": "k6_mk_049",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was versteht man unter 'Programmmusik'?",
    "answers": [
      "Musik ohne Taktart",
      "Musik aus dem Computer",
      "Musik erzählt Story",
      "Reine Tanzmusik pur"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Programmmusik beschreibt konkrete Szenen, Geschichten oder Naturphänomene."
  },
  {
    "id": "k6_mk_050",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Komponist schuf das Ballett 'Der Nussknacker'?",
    "answers": [
      "Igor Strawinsky Werk",
      "Dmitri Schostakowitsch",
      "P. I. Tschaikowski",
      "Modest Mussorgski Bild"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Tschaikowski ist weltberühmt für Ballette wie Schwanensee u. Nussknacker."
  },

  // --- KUNST: FARBENLEHRE & FARBKONTRASTE (051 - 065) ---
  {
    "id": "k6_mk_051",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche drei Farben nennt man Primärfarben (Grundfarben)?",
    "answers": [
      "Gelb, Rot u. Blau",
      "Braun, Pink u. Cyan",
      "Schwarz, Weiß u. Grau",
      "Grün, Orange, Violett"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gelb, Rot (Magenta) u. Blau (Cyan) lassen sich nicht aus anderen Farben mischen."
  },
  {
    "id": "k6_mk_052",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Sekundärfarbe entsteht aus dem Mischen von Gelb und Blau?",
    "answers": [
      "Die Farbe Violett",
      "Die Farbe Grün",
      "Die Farbe Orange",
      "Die Farbe Braun"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gelb und Blau ergeben im Farbkreis das Sekundärgrün."
  },
  {
    "id": "k6_mk_053",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Sekundärfarbe entsteht beim Mischen von Rot und Gelb?",
    "answers": [
      "Die Farbe Orange",
      "Die Farbe Grün",
      "Die Farbe Violett",
      "Die Farbe Rosa"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rot und Gelb ergeben die Sekundärfarbe Orange."
  },
  {
    "id": "k6_mk_054",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Sekundärfarbe entsteht beim Mischen von Blau und Rot?",
    "answers": [
      "Die Farbe Orangerot",
      "Die Farbe Grasgrün",
      "Die Farbe Violett",
      "Die Farbe Kastanie"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Blau und Rot ergeben zusammen Violett."
  },
  {
    "id": "k6_mk_055",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wo liegen Komplementärfarben im Farbkreis zueinander?",
    "answers": [
      "Direkt gegenüber",
      "Immer ganz innen",
      "Nebeneinander eng",
      "Zufällig verteilt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Komplementärfarben stehen sich im Farbkreis exakt gegenüber (z. B. Rot & Grün)."
  },
  {
    "id": "k6_mk_056",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Farbpaar bildet einen Komplementärkontrast?",
    "answers": [
      "Gelb und Orange",
      "Schwarz u. Braun",
      "Blau und Violett",
      "Rot und Grün"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rot und Grün verstärken sich gegenseitig in ihrer Leuchtkraft."
  },
  {
    "id": "k6_mk_057",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Farben empfindet der Mensch emotional als 'warme Farben'?",
    "answers": [
      "Grün, Violett, Blau",
      "Blau, Türkis, Grau",
      "Schwarz u. Weiß",
      "Gelb, Orange, Rot"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gelb-, Orange- u. Rot-Töne erinnern an Sonne u. Feuer."
  },
  {
    "id": "k6_mk_058",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Farben empfindet man typischerweise als 'kalte Farben'?",
    "answers": [
      "Rot, Orange, Gelbton",
      "Blau, Cyan, Türkis",
      "Braun und Hellgelb",
      "Rosa, Gold und Ocker"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Blautöne u. kühle Grüntöne erinnern an Eis, Wasser u. Schatten."
  },
  {
    "id": "k6_mk_059",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den Stimmungs-Gegensatz zwischen warmen u. kalten Tönen?",
    "answers": [
      "Quantitätskontrast",
      "Simultankontrast",
      "Qualitätskontrast",
      "Warm-Kalt-Kontrast"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Warm-Kalt-Kontrast erzeugt Räumlichkeit u. Empfindungen im Bild."
  },
  {
    "id": "k6_mk_060",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was versteht man unter den 'unbunten Farben'?",
    "answers": [
      "Rot, Gelb u. Blau",
      "Schwarz u. Weiß",
      "Neon-Töne im Bild",
      "Pastell-Mischung"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schwarz, Weiß u. die Grautöne dazwischen bezeichnet man als unbunt."
  },
  {
    "id": "k6_mk_061",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was passiert, wenn man eine Farbe mit Weiß aufhellt?",
    "answers": [
      "Farbe wird schmutzig",
      "Farbe wird dunkler",
      "Farbe wird leuchtend",
      "Pastellton entsteht"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mischen mit Weiß erhöht den Hellwert u. erzeugt zarte Pastelltöne."
  },
  {
    "id": "k6_mk_062",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was passiert, wenn man zwei Komplementärfarben zu gleichen Teilen mischt?",
    "answers": [
      "Ein Leuchtgelb",
      "Ein Reinschwarz",
      "Gleiches Reinweiß",
      "Ein Graubraunton"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Komplementärfarben heben sich in der Mischung auf u. ergeben gebrochene Graubraintöne."
  },
  {
    "id": "k6_mk_063",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man die Leuchtkraft u. Reinheit einer Farbe?",
    "answers": [
      "Die Farb-Trübung",
      "Der Farb-Schatten",
      "Der Komplementärwert",
      "Die Farbintensität"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Intensive, ungemischte Farben besitzen eine hohe Farbsättigung."
  },
  {
    "id": "k6_mk_064",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Utensil nutzen Künstler zum Anmischen von Farben?",
    "answers": [
      "Der Linolschnitt",
      "Die Zeichenfeder",
      "Die Farbpalette",
      "Das Skizzenbuch"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Auf der Palette werden Farben bereitgestellt u. abgemischt."
  },
  {
    "id": "k6_mk_065",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Mischeigenschaft besitzen Deckfarben aus dem Malkasten?",
    "answers": [
      "Glänzend metallisch",
      "Deckend (Deckkraft)",
      "Vollständig wasserfest",
      "Transparent klar"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Deckfarben lassen mit wenig Wasser aufgetragen den Untergrund nicht durchscheinen."
  },

  // --- KUNST: PERSPEKTIVE & RAUMDARSTELLUNG (066 - 075) ---
  {
    "id": "k6_mk_066",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man die Trennlinie zwischen Erde u. Himmel im Bild?",
    "answers": [
      "Die Vertikallinie",
      "Die Horizontlinie",
      "Die Fluchtliniengruppe",
      "Die Grundlinie unten"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Horizontlinie liegt auf der Augenhöhe des Betrachters."
  },
  {
    "id": "k6_mk_067",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den Punkt auf dem Horizont, wo Linien zusammenlaufen?",
    "answers": [
      "Der Fluchtpunkt",
      "Der Augenpunkt",
      "Der Mittelpunkt",
      "Der Schattenpunkt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Zentralperspektive laufen alle Tiefenlinien im Fluchtpunkt zusammen."
  },
  {
    "id": "k6_mk_068",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie verändern sich Dinge im Bild, je weiter sie entfernt sind?",
    "answers": [
      "Bleiben ganz genau gleich",
      "Werden größer dargestellt",
      "Werden ständig viel größer",
      "Werden kleiner dargestellt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Größenverkleinerung erzeugt im zweidimensionalen Bild Tiefenwirkung."
  },
  {
    "id": "k6_mk_069",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was beschreibt das Raumprinzip der 'Überlappung' (Verdeckung)?",
    "answers": [
      "Bilder werden nur gemalt",
      "Dinge liegen nebeneinander",
      "Farben werden viel dunkler",
      "Vorderes verdeckt Hintern"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Verdeckt ein Gegenstand einen anderen teilweise, erscheint er weiter vorne."
  },
  {
    "id": "k6_mk_070",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man eine Ansicht von sehr hoch oben?",
    "answers": [
      "Die Zentralperspektive",
      "Die Froschperspektive",
      "Die Normale Augenhöhe",
      "Die Vogelperspektive"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aus der Vogelperspektive blickt der Betrachter von oben herab."
  },
  {
    "id": "k6_mk_071",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man einen extrem tiefen Blickwinkel von unten nach oben?",
    "answers": [
      "Normalperspektive",
      "Panoramaansicht",
      "Froschperspektive",
      "Vogelperspektive"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Froschperspektive lässt Dinge mächtig u. riesig wirken."
  },
  {
    "id": "k6_mk_072",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was verändert sich bei der 'Luft- u. Farbperspektive' im Hintergrund?",
    "answers": [
      "Kontraste werden viel schärfer",
      "Farben verblassen / bläulich",
      "Farben werden ganz knallrot",
      "Farben werden tiefschwarz alle"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Luftschichten wirken weit entfernte Berge hell, kühler u. bläulicher."
  },
  {
    "id": "k6_mk_073",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Ebene im Bild liegt dem Betrachter am nächsten?",
    "answers": [
      "Der Mittelgrund",
      "Der Vordergrund",
      "Der Hintergrund",
      "Der Fluchtpunkt"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Bild gliedert sich in Vordergrund, Mittelgrund u. Hintergrund."
  },
  {
    "id": "k6_mk_074",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie verhält sich der Eigenschatten bei beleuchteten Körpern?",
    "answers": [
      "Auf der Lichtzugewandten",
      "Gibt nie Eigenschatten",
      "Auf der Lichtabgewandten",
      "Immer genau drunter"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die abgewandte Seite eines Gegenstands liegt im Eigenschatten."
  },
  {
    "id": "k6_mk_075",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den Schatten, den ein Körper auf den Boden wirft?",
    "answers": [
      "Der Halbschatten sanft",
      "Der Eigenschatten Form",
      "Der Schlagschatten",
      "Der Kernschatten dunkel"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Schlagschatten fällt auf angrenzende Flächen oder den Boden."
  },

  // --- KUNST: GRAFIK, ZEICHNUNG & DRUCKTECHNIKEN (076 - 085) ---
  {
    "id": "k6_mk_076",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Bleistift ist weich u. eignet sich gut für schattierte Zeichnungen?",
    "answers": [
      "Ein B-Bleistift (z. B. 2B)",
      "Ein H-Bleistift (z. B. 2H)",
      "Ein HB-Bleistift normal",
      "Ein F-Bleistift hart"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'B' steht für 'black' (weich u. dunkler Abrieb); 'H' steht für 'hard'."
  },
  {
    "id": "k6_mk_077",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man das Zeichnen von dicht nebeneinanderliegenden parallelen Linien?",
    "answers": [
      "Die Frottage",
      "Die Schraffur",
      "Die Decoupage",
      "Die Collage"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch Parallelschraffur oder Kreuzschraffur entstehen Grauwerte u. Schatten."
  },
  {
    "id": "k6_mk_078",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Zu welcher Druckart gehört der klassische Linolschnitt?",
    "answers": [
      "Zum Hochdruck",
      "Zum Flachdruck",
      "Zum Siebdruck",
      "Zum Tiefdruck"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Hochdruck drucken die erhabenen, stehengebliebenen Flächen."
  },
  {
    "id": "k6_mk_079",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Womit schneidet man Muster in die Linolplatte beim Linolschnitt?",
    "answers": [
      "Mit einer Radiernadel",
      "Mit Linolschnitt-Messer",
      "Mit dem Pinselstiel dick",
      "Mit einer Scheren-Klinge"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mit U- u. V-förmigen Schnittwerkzeugen schneidet man Vertiefungen."
  },
  {
    "id": "k6_mk_080",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Teil der Druckplatte druckt beim Hochdruck?",
    "answers": [
      "Der ganze Rand nur",
      "Eingeschnittene Linien",
      "Erhabene Stellen",
      "Die Rückseite allein"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Walze trägt Farbe auf die ungeschnittenen, hochstehenden Teile auf."
  },
  {
    "id": "k6_mk_081",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man ein Kunstwerk, das aus aufgeklebten Materialien gefertigt ist?",
    "answers": [
      "Eine Gravur",
      "Eine Plastik",
      "Eine Collage",
      "Eine Radierung"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zeitungsausschnitte, Fotos u. Stoffe werden zur Collage zusammengefügt."
  },
  {
    "id": "k6_mk_082",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man die Technik des Durchreibens von Oberflächenstrukturen?",
    "answers": [
      "Die Frottage",
      "Die Drip-Art",
      "Die Lithografie",
      "Die Montage"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Papier wird auf Münzen oder Holz gelegt u. mit Bleistift durchgerieben."
  },
  {
    "id": "k6_mk_083",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was versteht man unter einer 'Skizze'?",
    "answers": [
      "Ein gedruckter Schnitt",
      "Flüchtige Vorzeichnung",
      "Eine große Wandplastik",
      "Ein fertiges Ölgemälde"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Skizze erfasst schnell u. vereinfacht erste Ideen u. Formen."
  },
  {
    "id": "k6_mk_084",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wozu dient Fixativ-Spray bei Kohle- oder Pastellzeichnungen?",
    "answers": [
      "Macht das Bild glänzend",
      "Löscht die Striche aus",
      "Färbt das Bild dunkel",
      "Verhindert Verwischen"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fixativ versiegelt lose Pigmente von Kohle u. Kreide auf dem Papier."
  },
  {
    "id": "k6_mk_085",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was ist das Merkmal einer Plastik (z. B. aus Ton) im Vergleich zum Bild?",
    "answers": [
      "Zweidimensional Flach",
      "Dreidimensional Raum",
      "Nur gezeichnet Stift",
      "Verwendet nur Farbe"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Skulpturen u. Plastiken besitzen Höhe, Breite u. Tiefe im Raum."
  },

  // --- KUNST: KUNSTGESCHICHTE & BILDANALYSE (086 - 100) ---
  {
    "id": "k6_mk_086",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Renaissance-Künstler malte das weltberühmte Bild der 'Mona Lisa'?",
    "answers": [
      "Leonardo da Vinci",
      "Albrecht Dürer Werk",
      "Michelangelo Buonarroti",
      "Raffael Sanzio Bilder"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Porträt der Mona Lisa hängt im Louvre in Paris."
  },
  {
    "id": "k6_mk_087",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Künstler malte die 'Sternennacht' u. 'Sonnenblumen' mit dickem Strich?",
    "answers": [
      "Pablo Picasso Werke",
      "Vincent van Gogh",
      "Salvador Dalí Bilder",
      "Claude Monet Gemälde"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Van Gogh ist berühmt für seinen leidenschaftlichen u. dynamischen Farbauftrag."
  },
  {
    "id": "k6_mk_088",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Impressionist malte wiederholt Seerosen in seinem Garten in Giverny?",
    "answers": [
      "Edgar Degas",
      "Paul Cézanne",
      "Claude Monet",
      "Auguste Renoir"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Monet hielt Lichtreflexe u. Naturmomente in seinen Seerosenbildern fest."
  },
  {
    "id": "k6_mk_089",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher spanische Maler erfand zusammen mit Braque den Kubismus?",
    "answers": [
      "Pablo Picasso",
      "Joan Miró",
      "Salvador Dalí",
      "Francisco Goya"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Kubismus zerlegten Künstler Formen in geometrische Bausteine u. Würfel."
  },
  {
    "id": "k6_mk_090",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welcher Expressionist zeichnete die berühmten 'Blauen Pferde'?",
    "answers": [
      "Franz Marc",
      "Paul Klee",
      "August Macke",
      "Wassily Kandinsky"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Franz Marc nutzte blaue Farben als Symbol für Geistiges u. Natur."
  },
  {
    "id": "k6_mk_091",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was versteht man unter 'Gegenstandsloser Kunst' (Abstraktion)?",
    "answers": [
      "Genaue Landschaft",
      "Fotografische Treue",
      "Keine echten Dinge",
      "Abbild von Personen"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Abstrakte Kunst arbeitet mit reinen Formen u. Farben ohne reale Gegenstände."
  },
  {
    "id": "k6_mk_092",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man ein Bildnis der eigenen Person des Künstlers?",
    "answers": [
      "Landschaftsbild",
      "Genregemälde",
      "Stillleben",
      "Selbstporträt"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Selbstporträt stellt sich der Künstler mit Blick im Spiegel selbst dar."
  },
  {
    "id": "k6_mk_093",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was zeigt ein 'Stillleben' in der Malerei?",
    "answers": [
      "Tanzende Menschen",
      "Wilde Schlachten",
      "Unbewegte Objekte",
      "Stürmische Meere"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Arangements von Früchten, Blumen, Gläsern u. Gebrauchsgegenständen."
  },
  {
    "id": "k6_mk_094",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Epoche der Antike schuf ideale Marmorstatuen in Griechenland?",
    "answers": [
      "Das Gotik Zeitalter",
      "Griechische Klassik",
      "Das Barock Zeitalter",
      "Die Romanik Epoche"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Antike bildete menschliche Körper anatomisch perfekt u. ebenmäßig ab."
  },
  {
    "id": "k6_mk_095",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was bedeuten die Felszeichnungen aus der Steinzeit?",
    "answers": [
      "Karten von Städten",
      "Geschriebene Gesetze",
      "Schulnoten-Tabellen",
      "Jagdszenen & Rituale"
    ],
    "correct": 3,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Höhlenmalereien bildeten Beutetiere, Handabdrücke u. Jagdszenen ab."
  },
  {
    "id": "k6_mk_096",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welche Bauform kennzeichnet gotische Kathedralen im Mittelalter?",
    "answers": [
      "Flache Holzdeckenbauten",
      "Runde Mosaikkuppeln",
      "Spitzbögen u. Fenster",
      "Niedrige Erdwallbauten"
    ],
    "correct": 2,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spitzbögen u. bunte Glasfenster strebten steil nach oben dem Himmel entgegen."
  },
  {
    "id": "k6_mk_097",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Was versteht man unter dem Begriff 'Pop-Art'?",
    "answers": [
      "Kunst aus Alltagskultur",
      "Reine Altar-Malerei alt",
      "Dunkle Höhlenkunst früh",
      "Klassische Marmorbüsten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pop-Art (z. B. Andy Warhol) nutzt Werbung, Comics u. Konsumgüter als Motive."
  },
  {
    "id": "k6_mk_098",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man ein Kunstwerk, das direkt auf eine Wand gemalt wird?",
    "answers": [
      "Eine kleine Miniatur",
      "Das Wandfresko",
      "Ein Tafelbild klein",
      "Eine große Skulptur"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Fresko wird auf den frischen feuchten Wandputz aufgetragen."
  },
  {
    "id": "k6_mk_099",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Wie nennt man den geordneten Aufbau der Bildelemente in einem Kunstwerk?",
    "answers": [
      "Die Farbgrundierung",
      "Die Bildkomposition",
      "Die Pigmentierung",
      "Das Passepartout"
    ],
    "correct": 1,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Komposition regelt Anordnung, Linienführung u. Gewichtung im Bild."
  },
  {
    "id": "k6_mk_100",
    "category": "k6_musik_kunst",
    "area": "schule",
    "grade": 6,
    "subject": "musik_kunst",
    "question": "Welches Hilfsmittel hält eine Leinwand beim Malen auf Augenhöhe?",
    "answers": [
      "Die Staffelei",
      "Der Pinselbecher",
      "Der Malerkasten",
      "Der Spannrahmen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Holzstaffelei trägt u. fixiert den Bildträger während des Malens."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K6_MUSIK_KUNST_QUESTIONS = K6_MUSIK_KUNST_QUESTIONS;
}

if (typeof window !== 'undefined') window.K6_MUSIK_KUNST_QUESTIONS = K6_MUSIK_KUNST_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('K6_MUSIK_KUNST_QUESTIONS', K6_MUSIK_KUNST_QUESTIONS);
