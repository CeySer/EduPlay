// Category: Erfindungen & Technik
// Target: eduPlay Hub Web App
// Total Questions: 120 (Balanced index distribution)

const SPASS_ERFINDUNGEN_QUESTIONS = [
    {
        "id": "q_er_001",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand um 1440 den Buchdruck mit beweglichen Metalllettern in Europa?",
        "answers": [
            "Johannes Gutenberg",
            "Albrecht Dürer",
            "Nikolaus Kopernikus",
            "Martin Luther"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📖 Johannes Gutenberg revolutionierte die Buchherstellung in Mainz mit gießbaren Metalllettern."
    },
    {
        "id": "q_er_002",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Ingenieur meldete 1886 das erste praktische Automobil mit Verbrennungsmotor zum Patent an?",
        "answers": [
            "Gottlieb Daimler",
            "Carl Benz",
            "Wilhelm Maybach",
            "Henry Ford"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚗 Der 'Benz Patent-Motorwagen Nummer 1' gilt als die Geburtsstunde des modernen Automobils."
    },
    {
        "id": "q_er_003",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer wird offiziell als Erfinder des Telefons patentiert (1876)?",
        "answers": [
            "Philipp Reis",
            "Thomas Edison",
            "Alexander Graham Bell",
            "Nikola Tesla"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📞 Bell erhielt 1876 das US-Patent für das Telefon, obwohl auch Philipp Reis und Antonio Meucci wichtige Vorarbeiten leisteten."
    },
    {
        "id": "q_er_004",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher schwedische Chemiker erfand das Dynamit und stiftete den nach ihm benannten Preis?",
        "answers": [
            "Svante Arrhenius",
            "Jöns Jakob Berzelius",
            "Anders Celsius",
            "Alfred Nobel"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧨 Alfred Nobel erfand 1867 den stabilen Sprengstoff Dynamit und verfügte im Testament die Gründung der Nobelpreise."
    },
    {
        "id": "q_er_005",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer entdeckte 1895 in Würzburg die nach ihm benannten Röntgenstrahlen?",
        "answers": [
            "Wilhelm Conrad Röntgen",
            "Max Planck",
            "Albert Einstein",
            "Heinrich Hertz"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🩻 Röntgen erhielt für die Entdeckung der X-Strahlen 1901 den allerersten Nobelpreis für Physik."
    },
    {
        "id": "q_er_006",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher britische Erfinder verbesserte die Dampfmaschine entscheidend und gab der Leistungseinheit ihren Namen?",
        "answers": [
            "George Stephenson",
            "James Watt",
            "Isambard Kingdom Brunel",
            "Thomas Newcomen"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "⚙️ James Watt entwickelte die separate Kondensatorkammer, was die Dampfmaschine effizient und universell einsetzbar machte."
    },
    {
        "id": "q_er_007",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Brüder führten 1903 in Kitty Hawk den ersten gesteuerten Motorflug der Geschichte durch?",
        "answers": [
            "Brüder Montgolfier",
            "Brüder Lumière",
            "Brüder Wright (Wilbur & Orville)",
            "Brüder Dassault"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "✈️ Der Wright Flyer stieg am 17. Dezember 1903 erstmals für 12 Sekunden aus eigener Kraft in die Luft."
    },
    {
        "id": "q_er_008",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Erfinder baute 1941 mit dem 'Z3' den ersten vollautomatischen, programmgesteuerten Rechner der Welt?",
        "answers": [
            "Alan Turing",
            "Charles Babbage",
            "John von Neumann",
            "Konrad Zuse"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "💻 Der Z3 arbeitete mit Relais und gilt als der erste funktionstüchtige Computer der Welt."
    },
    {
        "id": "q_er_009",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer entwickelte 1989 am Kernforschungszentrum CERN die Grundlagen für das World Wide Web (WWW)?",
        "answers": [
            "Tim Berners-Lee",
            "Steve Jobs",
            "Bill Gates",
            "Vint Cerf"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌐 Tim Berners-Lee erfand HTML, HTTP und den ersten Webbrowser, um den Informationsaustausch zu erleichtern."
    },
    {
        "id": "q_er_010",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher schottische Bakteriologe entdeckte 1928 durch Zufall das Antibiotikum Penicillin?",
        "answers": [
            "Robert Koch",
            "Alexander Fleming",
            "Louis Pasteur",
            "Paul Ehrlich"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧫 Schimmelpilze der Gattung Penicillium hatten Flemings Staphylokokken-Kulturen abgetötet."
    },
    {
        "id": "q_er_011",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Ingenieur erfand den nach ihm benannten hocheffizienten Selbstzündungsmotor?",
        "answers": [
            "Nicolaus Otto",
            "Felix Wankel",
            "Rudolf Diesel",
            "Wilhelm Maybach"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚜 Rudolf Diesel patentierte seinen Motor 1892; er zündet Kraftstoff allein durch Verdichtungswärme."
    },
    {
        "id": "q_er_012",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Schweizer Ingenieur erfand den Klettverschluss nach dem Vorbild von Klettenfrüchten im Hundefell?",
        "answers": [
            "Carl Elsener",
            "Jacques Piccard",
            "Ferdinand Sauerbruch",
            "George de Mestral"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "👟 George de Mestral erfand 1941 das Prinzip von Bionik-Haken und Schlaufen (Velcro)."
    },
    {
        "id": "q_er_013",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches deutsche Forschungsinstitut spielte die Hauptrolle bei der Entwicklung des MP3-Audioformats?",
        "answers": [
            "Fraunhofer-Institut",
            "Max-Planck-Institut",
            "Leibniz-Gemeinschaft",
            "Helmholtz-Zentrum"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🎵 Unter Leitung von Karlheinz Brandenburg wurde am Fraunhofer IIS das MP3-Kompressionsverfahren erfunden."
    },
    {
        "id": "q_er_014",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher italienische Physiker erfand um 1800 die erste chemische Batterie ('Voltasche Säule')?",
        "answers": [
            "Luigi Galvani",
            "Alessandro Volta",
            "Guglielmo Marconi",
            "Enrico Fermi"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔋 Die Voltasche Säule aus Zink- und Kupferscheiben war die erste kontinuierliche Stromquelle."
    },
    {
        "id": "q_er_015",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wie heißt der Wikingerkönig, nach dessen Monogramm-Runen die Drahtlos-Technologie 'Bluetooth' benannt wurde?",
        "answers": [
            "Ragnar Lodbrok",
            "Erik der Rote",
            "Harald Blauzahn (Blåtand)",
            "Sven Gabelbart"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "ᛒ Das Bluetooth-Logo setzt sich aus den nordischen Runen Hagall (ᛉ) und Bjarkan (ᛒ) zusammen."
    },
    {
        "id": "q_er_016",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "In welchem alten Kulturvolk wurde das Papier aus Pflanzenfasern um 100 n. Chr. von Ts'ai Lun erfunden?",
        "answers": [
            "Ägypten",
            "Griechenland",
            "Mesopotamien",
            "China"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📜 In China wurde Papier aus Maulbeerbaumrinde, Hanf und Alttextilien geschöpft."
    },
    {
        "id": "q_er_017",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Erfinder erfand 1817 die 'Laufmaschine' (Draisine), den Vorläufer des Fahrrads?",
        "answers": [
            "Karl Drais",
            "Michaux",
            "Starley",
            "Gottlieb Daimler"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚲 Karl Drais erfand das erste zweirädrige Lenkfahrzeug ohne Pedale in Mannheim."
    },
    {
        "id": "q_er_018",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Dresdner Hausfrau erfand 1908 den Kaffeefilter aus Löschpapier?",
        "answers": [
            "Kathreiner",
            "Melitta Bentz",
            "Henriette Davidis",
            "Maria Telkes"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "☕ Melitta Bentz durchlöcherte den Boden eines Messingtopfes und legte Löschpapier aus dem Schulheft ihres Sohnes ein."
    },
    {
        "id": "q_er_019",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher ungarische Journalist erfand den modernen Kugelschreiber mit rollender Metallkugel?",
        "answers": [
            "Marcel Bich",
            "John Loud",
            "László Bíró",
            "Slavoljub Penkala"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🖊️ Bíró entwickelte 1938 eine zähe Druckertinte, die über eine bewegliche Kugel dokumentenecht auftrug."
    },
    {
        "id": "q_er_020",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Küchengerät wurde durch Zufall entdeckt, als ein Radaringenieur ein geschmolzenes Schokobrot bemerkte?",
        "answers": [
            "Toaster",
            "Induktionskochfeld",
            "Heißluftfriteuse",
            "Mikrowellenherd"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍿 Percy Spencer bemerkte 1945, dass das Radar-Magnetron Schokolade in seiner Tasche schmelzen ließ."
    },
    {
        "id": "q_er_021",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1752 den Blitzableiter zum Schutz von Gebäuden?",
        "answers": [
            "Benjamin Franklin",
            "Thomas Edison",
            "Michael Faraday",
            "Nikola Tesla"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "⚡ Benjamin Franklin wies mit seinem Drachenexperiment nach, dass Blitze elektrische Entladungen sind."
    },
    {
        "id": "q_er_022",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher serbisch-amerikanische Erfinder entwickelte das Wechselstromsystem und die Induktionsmotoren?",
        "answers": [
            "Thomas Edison",
            "Nikola Tesla",
            "George Westinghouse",
            "Samuel Morse"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "⚡ Tesla setzte sich im 'Stromkrieg' mit seinem effizienten Wechselstrom gegen Edisons Gleichstrom durch."
    },
    {
        "id": "q_er_023",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Amerikanerin erfand 1903 den mechanischen Scheibenwischer für Automobile?",
        "answers": [
            "Ada Lovelace",
            "Bertha Benz",
            "Mary Anderson",
            "Marie Curie"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🚗 Mary Anderson beobachtete Straßenbahnfahrer bei Schneeregen und patentierte den handbetriebenen Scheibenwischer."
    },
    {
        "id": "q_er_024",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche berühmte Erfindung stammt von Ferdinand Graf von Zeppelin?",
        "answers": [
            "Der Helikopter",
            "Das Strahlflugzeug",
            "Der Heißluftballon",
            "Das starrwandige Lenkluftschiff"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎈 Zeppelin baute ab 1899 riesige Luftschiffe mit Aluminiumgerüst und Gaszellen."
    },
    {
        "id": "q_er_025",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Erfinder erfand 1958 den spreizbaren Kunststoffdübel (Fischer-Dübel)?",
        "answers": [
            "Artur Fischer",
            "Hugo Fischer",
            "Ferdinand Porsche",
            "Robert Bosch"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧱 Artur Fischer hielt über 1.100 Patente und erfand den grau-roten S-Dübel aus Nylon."
    },
    {
        "id": "q_er_026",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Brüder führten 1783 in Paris die erste bemannte Fahrt mit einem Heißluftballon durch?",
        "answers": [
            "Brüder Wright",
            "Brüder Montgolfier (Joseph & Étienne)",
            "Brüder Lumière",
            "Brüder Grimm"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎈 Die 'Montgolfière' stieg mit heißer Luft über Paris auf."
    },
    {
        "id": "q_er_027",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1837 das nach ihm benannte Morsealphabet und den elektrischen Telegrafen?",
        "answers": [
            "Alexander Graham Bell",
            "Thomas Edison",
            "Samuel Morse",
            "Heinrich Hertz"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📻 Morse entwickelte einen Code aus kurzen und langen Signalen (Punkten und Strichen)."
    },
    {
        "id": "q_er_028",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher englische Mathematikerin gilt durch ihre Arbeit an Babages 'Analytical Engine' als erste Programmiererin?",
        "answers": [
            "Grace Hopper",
            "Marie Curie",
            "Lise Meitner",
            "Ada Lovelace"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "💻 Ada Lovelace schrieb 1843 den ersten Algorithmus zur Berechnung von Bernoulli-Zahlen."
    },
    {
        "id": "q_er_029",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche berühmte Erfindung von Emil Berliner löste den Edison-Phonographenwalzen-Standard ab?",
        "answers": [
            "Grammophon und Schallplatte",
            "Tonbandgerät",
            "Kompaktkassette",
            "Radiogerät"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🎵 Emil Berliner erfand 1887 die flache Schallplatte und das Grammophon für Vervielfältigungen."
    },
    {
        "id": "q_er_030",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Physiker wies 1886 experimentell die von Maxwell vorhergesagten elektromagnetischen Wellen nach?",
        "answers": [
            "Max Planck",
            "Heinrich Hertz",
            "Albert Einstein",
            "Wilhelm Röntgen"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📻 Ihm zu Ehren ist die Frequenz-Einheit Hertz (Hz) benannt."
    },
    {
        "id": "q_er_031",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung von Chester Carlson ermöglichte ab 1938 moderne Fotokopiergeräte?",
        "answers": [
            "Offsetdruck",
            "Thermodruck",
            "Elektrofotografie (Xerografie)",
            "Laser-Gravur"
        ],
        "correct": 2,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🖨️ Carlson erfand das trockene Kopierverfahren, aus dem das Unternehmen Xerox hervorging."
    },
    {
        "id": "q_er_032",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher französische Chemiker entwickelte die Erwärmungsmethode zur Abtötung von Keimen in Milch und Wein?",
        "answers": [
            "Robert Koch",
            "Antoine Lavoisier",
            "Claude Bernard",
            "Louis Pasteur"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥛 Das 'Pasteurisieren' schützt flüssige Lebensmittel vor schnellem Verderben."
    },
    {
        "id": "q_er_033",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher US-Computerpionier erfand 1964 die erste hölzerne Computer-Maus?",
        "answers": [
            "Douglas Engelbart",
            "Alan Kay",
            "Steve Wozniak",
            "Bill Gates"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🖱️ Engelbart stellte 1968 in der 'Mother of All Demos' Maus, Hyperlinks und Fenstertechnik vor."
    },
    {
        "id": "q_er_034",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1971 die E-Mail und wählte das '@'-Zeichen als Trenner zwischen Name und Host?",
        "answers": [
            "Vint Cerf",
            "Ray Tomlinson",
            "Tim Berners-Lee",
            "Bob Kahn"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📧 Tomlinson verschickte die erste netzwerkübergreifende E-Mail im ARPANET."
    },
    {
        "id": "q_er_035",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Niederländer und welcher US-Konzern entwickelten gemeinsam 1982 die 'Compact Disc' (CD)?",
        "answers": [
            "Grundig und Telefunken",
            "Apple und Microsoft",
            "Philips und Sony",
            "Panasonic und Pioneer"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "💿 Die digitale optische Speicherscheibe revoluionierte die Musikindustrie."
    },
    {
        "id": "q_er_036",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Techniker entwickelte 1876 den ersten Viertakt-Gasmotor als Prototyp?",
        "answers": [
            "Rudolf Diesel",
            "Gottlieb Daimler",
            "Carl Benz",
            "Nicolaus Otto"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🏎️ Der 'Ottomotor' arbeitet nach dem Prinzip: Ansaugen, Verdichten, Arbeiten, Ausstoßen."
    },
    {
        "id": "q_er_037",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Unternehmen brachte 1989 den legendären tragbaren 'Game Boy' auf den Markt?",
        "answers": [
            "Nintendo",
            "Sega",
            "Atari",
            "Sony"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎮 Der von Gunpei Yokoi entwickelte Game Boy wurde weltweit über 118 Millionen Mal verkauft."
    },
    {
        "id": "q_er_038",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung verdanken wir dem schottischen Arzt René Laennec 1816?",
        "answers": [
            "Das Fieberthermometer",
            "Das Stethoskop",
            "Die Spritze",
            "Der Blutdruckmesser"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🩺 Laennec rollte ein Papierrohr auf, um Herzgeräusche von Patientinnen genauer zu hören."
    },
    {
        "id": "q_er_039",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Navigationssystem basiert auf einem Netz von mindestens 24 US-Satelliten im All?",
        "answers": [
            "Galileo",
            "Glonass",
            "GPS (Global Positioning System)",
            "BeiDou"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🛰️ GPS berechnet durch Signallaufzeiten von Satelliten weltweit exakte Standortpositionen."
    },
    {
        "id": "q_er_040",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung erzeugte 1960 durch Theodore Maiman erstmals gebündeltes, monochromes Licht?",
        "answers": [
            "Röntgenröhre",
            "LED",
            "Lichtwellenleiter",
            "Laser"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🔦 LASER steht für 'Light Amplification by Stimulated Emission of Radiation'."
    },
    {
        "id": "q_er_041",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher englische Naturforscher erfand 1796 den ersten funktionierenden Impfstoff (gegen Pocken)?",
        "answers": [
            "Edward Jenner",
            "Louis Pasteur",
            "Robert Koch",
            "Alexander Fleming"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "💉 Jenner nutzte milde Kuhpockenviren, um Menschen gegen die tödlichen echten Pocken zu immunisieren."
    },
    {
        "id": "q_er_042",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung ermöglichte 1804 George Stephenson mit der Lokomotive 'Rocket'?",
        "answers": [
            "Das Dampfschiff",
            "Die kommerzielle Dampfeisenbahn",
            "Das Automobil",
            "Die Seilbahn"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚂 Stephensons Rocket setzte Maßstäbe für den modernen Schienenverkehr."
    },
    {
        "id": "q_er_043",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Chemiker erfand 1903 die Thermoskanne (Vakuum-Isolierflasche)?",
        "answers": [
            "James Dewar",
            "Justus von Liebig",
            "Reinhold Burger",
            "Carl von Linde"
        ],
        "correct": 2,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "☕ Burger entwickelte das doppelwandige Glasgefäß von Dewar zu einer alltagstauglichen Thermosflasche weiter."
    },
    {
        "id": "q_er_044",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer meldete 1879 ein kohlefadenbasiertes Patent für die kommerziell nutzbare Glühbirne an?",
        "answers": [
            "Heinrich Goebel",
            "Joseph Swan",
            "Nikola Tesla",
            "Thomas Alva Edison"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "💡 Edison verbesserte die Lebensdauer des Kohlefadens und baute ein ganzes Stromnetz auf."
    },
    {
        "id": "q_er_045",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher finnische Student veröffentlichte 1991 den quelloffenen Betriebssystem-Kernel 'Linux'?",
        "answers": [
            "Linus Torvalds",
            "Richard Stallman",
            "Steve Wozniak",
            "Ken Thompson"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐧 Linux bildet heute das Herzstück von Android, Supercomputern und Millionen Servern."
    },
    {
        "id": "q_er_046",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Physiker erfand 1904 das Telemobiloskop, den Vorläufer des Radars?",
        "answers": [
            "Robert Watson-Watt",
            "Christian Hülsmeyer",
            "Ferdinand Braun",
            "Heinrich Hertz"
        ],
        "correct": 1,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "📡 Hülsmeyer nutzte reflektierte Funkwellen zur Erkennung von Schiffen im Nebel."
    },
    {
        "id": "q_er_047",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung verdanken wir den Chemikern Spencer Silver und Arthur Fry (3M) aus dem Jahr 1977?",
        "answers": [
            "Tesafilm",
            "Sekundenkleber",
            "Post-it Klebezettel",
            "Uhu-Klebestift"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📝 Ein schwach haftender Klebstoff wurde zufällig erfunden und als entfernbarer Merkzettel zum WeltHit."
    },
    {
        "id": "q_er_048",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1895 die Kinematografie (Filmkamera und Projektor) und veranstaltete die erste Kino-Vorführung?",
        "answers": [
            "Thomas Edison",
            "Georges Méliès",
            "Max Skladanowsky",
            "Brüder Lumière (Auguste & Louis)"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎬 Die Brüder Lumière zeigten 1895 im Grand Café in Paris Kurzfilme vor Publikum."
    },
    {
        "id": "q_er_049",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher US-amerikanische Erfinder entwickelte den Sicherheitsrasierer mit auswechselbarer Klinge?",
        "answers": [
            "King Camp Gillette",
            "Jacob Schick",
            "Wilkinson",
            "Braun"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🪒 Gillette erfand 1901 dünne, billig gestanzte Einwegklingen."
    },
    {
        "id": "q_er_050",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Bauteil entwickelte Felix Wankel in den 1950er-Jahren als kolbenlosen Verbrennungsmotor?",
        "answers": [
            "Boxermotor",
            "Rotationskolbenmotor (Wankelmotor)",
            "Sternmotor",
            "Gasmotor"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🚗 Der Wankelmotor hat einen kreisförmig rotierenden Läufer anstelle von Auf-und-Ab-Kolben."
    },
    {
        "id": "q_er_051",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1809 die Konservendose zur Haltbarmachung von Verpflegung für Napoleons Armee?",
        "answers": [
            "Louis Pasteur",
            "Justus von Liebig",
            "Nicolas Appert / Peter Durand",
            "Henri Nestlé"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥫 Appert erfand das Hitzesterilisieren in Gläsern; Durand patentierte die Weißblechdose."
    },
    {
        "id": "q_er_052",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher italienische Physiker erfand 1643 das Quecksilber-Barometer zur Luftdruckmessung?",
        "answers": [
            "Galileo Galilei",
            "Blaise Pascal",
            "Christiaan Huygens",
            "Evangelista Torricelli"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🌡️ Torricelli bewies mit der Quecksilbersäule die Existenz des atmosphärischen Luftdrucks."
    },
    {
        "id": "q_er_053",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Verfahren zur industriellen Ammoniak-Herstellung erfanden Fritz Haber und Carl Bosch?",
        "answers": [
            "Haber-Bosch-Verfahren",
            "Ostwald-Verfahren",
            "Kontaktverfahren",
            "Solvay-Verfahren"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🌱 Das Haber-Bosch-Verfahren erzeugt Kunstdünger und ernährt bis heute Milliarden Menschen."
    },
    {
        "id": "q_er_054",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung revolutionierte ab 1984 das Prototyping und wird als '3D-Druck' bezeichnet?",
        "answers": [
            "Faser-Laser",
            "Stereolithografie (Chuck Hull)",
            "CNC-Fräsen",
            "Spritzguss"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🖨️ Chuck Hull patentierte 1984 den schichtweisen Aufbau von Objekten mittels UV-Laser und Harz."
    },
    {
        "id": "q_er_055",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher tschechische Schriftsteller prägte 1920 in seinem Theaterstück 'R.U.R.' das Wort 'Roboter'?",
        "answers": [
            "Isaac Asimov",
            "Stanisław Lem",
            "Karel Čapek",
            "Arthur C. Clarke"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🤖 Das Wort stammt vom slawischen 'robota' für Fronarbeit oder Zwangsarbeit ab."
    },
    {
        "id": "q_er_056",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1901 den elektrischen Staubsauger mit Saugmotor auf Rädern?",
        "answers": [
            "James Dyson",
            "William Hoover",
            "Carl Miele",
            "Hubert Cecil Booth"
        ],
        "correct": 3,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🧹 Booths erste Staubsauger 'Puffing Billy' waren so riesig, dass sie von Pferden gezogen wurden."
    },
    {
        "id": "q_er_057",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung von Robert Watson-Watt half Großbritannien 1940 bei der Luftschlacht um England?",
        "answers": [
            "Chain Home Radar-System",
            "Sonar-System",
            "Abhör-Enigma",
            "Düsentriebwerk"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📡 Das britische Radarnetz warnte frühzeitig vor anfliegenden feindlichen Flugzeugformationen."
    },
    {
        "id": "q_er_058",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche US-Erfinderin patentierte 1886 die erste mechanische Geschirrspülmaschine?",
        "answers": [
            "Melitta Bentz",
            "Josephine Cochrane",
            "Ruth Handler",
            "Ada Lovelace"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍽️ Cochrane wollte ihr feines Porzellan vor dem Zerbrechen beim Handspülen schützen."
    },
    {
        "id": "q_er_059",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Niederländer gilt durch die Verbesserung des Mikroskops als 'Vater der Mikrobiologie'?",
        "answers": [
            "Robert Hooke",
            "Zacharias Janssen",
            "Antoni van Leeuwenhoek",
            "Christiaan Huygens"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🔬 Leeuwenhoek schliff winzige Hochleistungs-Linsen und entdeckte erstmals Bakterien und Protozoen."
    },
    {
        "id": "q_er_060",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches erste unbemannte künstliche Raumfahrzeug schickte die Sowjetunion 1957 ins All?",
        "answers": [
            "Wostok 1",
            "Explorer 1",
            "Salyut 1",
            "Sputnik 1"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🛰️ Der Piepsender von Sputnik 1 läutete das Zeitalter der Raumfahrt ein."
    },
    {
        "id": "q_er_061",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Arzt erfand 1931 das Elektronenmikroskop (Nobelpreis 1986)?",
        "answers": [
            "Ernst Ruska",
            "Max Knoll",
            "Robert Koch",
            "Paul Ehrlich"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🔬 Elektronenstrahlen ermöglichen millionenfache Vergrößerungen weit über Lichtmikroskope hinaus."
    },
    {
        "id": "q_er_062",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1938 das Teflon (Polytetrafluorethylen) bei DuPont durch Zufall?",
        "answers": [
            "Wallace Carothers",
            "Roy Plunkett",
            "Charles Goodyear",
            "Leo Baekeland"
        ],
        "correct": 1,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🍳 Plunkett erforschte Kältemittel; das weiße Teflon erwies sich als extrem hitze- und reibungsbeständig."
    },
    {
        "id": "q_er_063",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher belgisch-amerikanische Chemiker erfand 1907 den ersten voll-synthetischen Kunststoff 'Bakelit'?",
        "answers": [
            "Hermann Staudinger",
            "Fritz Hofmann",
            "Leo Baekeland",
            "Otto Bayer"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📞 Bakelit war hitzebeständig, isolierend und formte Gehäuse für Telefone und Radios."
    },
    {
        "id": "q_er_064",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung revolutionierte 1839 die Gummiverarbeitung durch Vulkanisation?",
        "answers": [
            "John Dunlop",
            "Edouard Michelin",
            "Robert William Thomson",
            "Charles Goodyear"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🛞 Durch Erhitzen von Kautschuk mit Schwefel entstand elastischer, nicht klebender Gummi."
    },
    {
        "id": "q_er_065",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer meldete 1888 das Patent für den pneumatischen Luftreifen für Fahrräder an?",
        "answers": [
            "John Boyd Dunlop",
            "Charles Goodyear",
            "André Michelin",
            "Karl Benz"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚲 Dunlop wollte seinem Sohn das Dreiradfahren auf Pflastersteinen komfortabler machen."
    },
    {
        "id": "q_er_066",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches optische Gerät erfand Hans Lippershey 1608 und Galileo Galilei nutzte es für Sternenbeobachtungen?",
        "answers": [
            "Mikroskop",
            "Fernrohr (Teleskop)",
            "Sextant",
            "Prisma"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔭 Galilei entdeckte mit dem Fernrohr die vier größten Jupitermonde."
    },
    {
        "id": "q_er_067",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Erfinder baute 1900 das erste funktionstüchtige Hybridauto ('Lohner-Porsche')?",
        "answers": [
            "Henry Ford",
            "Ransom Eli Olds",
            "Ferdinand Porsche",
            "Gottlieb Daimler"
        ],
        "correct": 2,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🏎️ Der Lohner-Porsche besaß Radnaben-Elektromotoren und einen Benzingenerator."
    },
    {
        "id": "q_er_068",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche französische Tiefsee-Legende erfand 1943 zusammen mit Émile Gagnan den Lungenautomaten (Aqua-Lung)?",
        "answers": [
            "Auguste Piccard",
            "Jules Verne",
            "Robert Ballard",
            "Jacques-Yves Cousteau"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥽 Das Aqua-Lung ermöglichte Tauchern freies Atmen unter Wasser ohne Schlauchverbindung."
    },
    {
        "id": "q_er_069",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1913 das Fließband für die Automobilproduktion (Ford Modell T)?",
        "answers": [
            "Henry Ford",
            "Olds",
            "Walter Chrysler",
            "Alfred Sloan"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🏭 Die Fließbandfertigung senkte die Bauzeit der 'Tin Lizzie' drastisch von 12 Stunden auf 93 Minuten."
    },
    {
        "id": "q_er_070",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher US-Pionier erfand 1831 den mechanischen Mähdrescher / Balkenmäher?",
        "answers": [
            "John Deere",
            "Cyrus McCormick",
            "Eli Whitney",
            "Robert Fulton"
        ],
        "correct": 1,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🌾 Die McCormick-Getreidemähmaschine mechanisierte die Landwirtschaft weltweit."
    },
    {
        "id": "q_er_071",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung verdanken wir Eli Whitney aus dem Jahr 1793?",
        "answers": [
            "Die Nähmaschine",
            "Die Spinnmaschine",
            "Die Baumwoll-Entkernungsmaschine (Cotton Gin)",
            "Die Dampfwebstuhlanlage"
        ],
        "correct": 2,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🧵 Die Cotton Gin trennte Baumwollfasern blitzschnell von Samen."
    },
    {
        "id": "q_er_072",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1846 die Doppelsteppstich-Nähmaschine mit Öhrnadel?",
        "answers": [
            "Balthasar Krems",
            "Josef Madersperger",
            "Walter Hunt",
            "Elias Howe / Isaac Singer"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🪡 Howe patentierte das Prinzip der Nadel mit dem Öhr an der Spitze."
    },
    {
        "id": "q_er_073",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Bauteil entwickelte Gabriel Fahrenheit 1714 zur präzisen Temperaturmessung?",
        "answers": [
            "Quecksilber-Thermometer",
            "Alkohol-Thermometer",
            "Bimetall-Streifen",
            "Infrarot-Sensor"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌡️ Fahrenheit nutzte Quecksilber wegen dessen gleichmäßiger Wärmeausdehnung."
    },
    {
        "id": "q_er_074",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Kommunikationskabel wurde 1858 erstmals erfolgreich durch den Atlantik verlegt?",
        "answers": [
            "Glaskabel für Telefon",
            "Transatlantisches Telegrafenkabel",
            "Koaxialkabel für TV",
            "Stromkabel"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🌐 Cyrus Field organisierte das Kabelprojekt zwischen Irland und Neufundland."
    },
    {
        "id": "q_er_075",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1906 den Trioden-Verstärker (Audion-Röhre) für die Rundfunktechnik?",
        "answers": [
            "John Ambrose Fleming",
            "Guglielmo Marconi",
            "Lee de Forest",
            "Edwin Armstrong"
        ],
        "correct": 2,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "📻 Die Elektronenröhre ermöglichte erst die Verstärkung von Radio- und Telefonsignalen."
    },
    {
        "id": "q_er_076",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Element wählten Robert Bunsen und Gustav Kirchhoff für ihre Spektralanalyse?",
        "answers": [
            "Lötlampe",
            "Petroleumlampe",
            "Gaslicht",
            "Bunsenbrenner"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔥 Der Bunsenbrenner erzeugt eine heiß fast rußfreie Flamme zur Stoffanalyse."
    },
    {
        "id": "q_er_077",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Unternehmen erfand 1963 die Audio-Kompaktkassette (MC)?",
        "answers": [
            "Philips",
            "Sony",
            "Maxell",
            "TDK"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📻 Lou Ottens leitete das Team bei Philips, das die Musikkassette zum Weltstandard machte."
    },
    {
        "id": "q_er_078",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1979 den legendären mobilen Kassettenabspieler 'Walkman'?",
        "answers": [
            "Panasonic",
            "Sony (Akio Morita & Nobutoshi Kihara)",
            "Aiwa",
            "Toshiba"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎧 Der Walkman veränderte den Musikgenuss unterwegs von Grund auf."
    },
    {
        "id": "q_er_079",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Wissenschaftlerinnen erhielten 2020 den Chemie-Nobelpreis für die CRISPR-Cas9 Gen-Schere?",
        "answers": [
            "Rosalind Franklin & Marie Curie",
            "Françoise Barré-Sinoussi",
            "Emmanuelle Charpentier & Jennifer Doudna",
            "Tu Youyou"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧬 CRISPR-Cas9 ermöglicht präzises Schneiden und Editieren von DNA-Sequenzen."
    },
    {
        "id": "q_er_080",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher schwedische Erfinder erfand 1959 den Drei-Punkt-Sicherheitsgurt für Volvo?",
        "answers": [
            "Alfred Nobel",
            "Gustaf de Laval",
            "John Ericsson",
            "Nils Bohlin"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🛡️ Volvo stellte das Patent kostenlos allen Autoherstellern zur Verfügung, um Leben zu retten."
    },
    {
        "id": "q_er_081",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche deutsche Erfindung verhinderte ab 1978 das Blockieren der Räder bei Vollbremsungen?",
        "answers": [
            "ABS (Anti-Blockier-System)",
            "ESP",
            "ASR",
            "Airbag"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🛑 Das gemeinsam von Bosch und Mercedes-Benz serienreife ABS hält Fahrzeuge lenkbar."
    },
    {
        "id": "q_er_082",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher britische Ingenieur baute 1937 das erste funktionstüchtige Strahltriebwerk (Düsenjet)?",
        "answers": [
            "Hans von Ohain",
            "Frank Whittle",
            "Wernher von Braun",
            "Willy Messerschmitt"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "✈️ Whittle in Großbritannien und Hans von Ohain in Deutschland erfanden das Strahltriebwerk unabhängig voneinander."
    },
    {
        "id": "q_er_083",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer baute 1939 das erste strahlgetriebene Flugzeug der Welt (Heinkel He 178)?",
        "answers": [
            "Frank Whittle & Boeing",
            "Messerschmitt & Junkers",
            "Hans von Ohain & Ernst Heinkel",
            "Igor Sikorsky"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "✈️ Die Heinkel He 178 flog am 27. August 1939 als erstes Düsenflugzeug der Welt."
    },
    {
        "id": "q_er_084",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Erste-Hilfe-Gerät gibt bei Herzflimmern gezielte Stromstöße ab und rettet Leben?",
        "answers": [
            "Herzschrittmacher",
            "Beatmungsgerät",
            "EKG-Gerät",
            "Defibrillator (AED)"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "❤️ Automatische Externe Defibrillatoren leiten Laien Schritt für Schritt durch die Rettung."
    },
    {
        "id": "q_er_085",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Technologie erfand Nick Holonyak 1962 als Halbleiter-Lichtquelle?",
        "answers": [
            "LED (Lichtemittierende Diode)",
            "Laserdiode",
            "OLED",
            "Glimmlampe"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "💡 Holonyak entwickelte bei General Electric die erste praktisch nutzbare rote LED."
    },
    {
        "id": "q_er_086",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Erfinder gilt durch sein Patent von 1893 als Erfinder des Reißverschlusses?",
        "answers": [
            "Elias Howe",
            "Whitcomb Judson / Gideon Sundbäck",
            "Isaac Singer",
            "Levi Strauss"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "Zipper: Judson erfand den 'Klemmöffner'; Sundbäck perfektionierte ihn 1913 zum heutigen Reißverschluss."
    },
    {
        "id": "q_er_087",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1849 die Sicherheitsnadel aus einem einzelnen Stück Messingdraht?",
        "answers": [
            "Elias Howe",
            "Charles Goodyear",
            "Walter Hunt",
            "Christopher Sholes"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧷 Hunt verkaufte das Patent für 400 Dollar, um eine Schuld zu begleichen."
    },
    {
        "id": "q_er_088",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche deutsche Firma erfand 1936 den durchsichtigen Klebefilm 'Tesafilm'?",
        "answers": [
            "Henkel",
            "3M",
            "Uhu",
            "Beiersdorf (Hugo Kirchberg)"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📦 Hugo Kirchberg erfand den Abroller und gab dem Film den Namen Tesa."
    },
    {
        "id": "q_er_089",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Erste-Hilfe-Instrument zur Herztätigkeitsmessung entwickelte Willem Einthoven (Nobelpreis 1924)?",
        "answers": [
            "Elektrokardiogramm (EKG)",
            "Elektroenzephalogramm (EEG)",
            "Röntgengerät",
            "Pulsoximeter"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🫀 Einthoven zeichnete mit dem Saitengalvanometer die elektrischen Herzimpulse auf."
    },
    {
        "id": "q_er_090",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1958 den ersten implantierbaren Herzschrittmacher in Schweden?",
        "answers": [
            "Wilson Greatbatch",
            "Rune Elmqvist & Åke Senning",
            "Paul Zoll",
            "Willem Einthoven"
        ],
        "correct": 1,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "❤️ Der schwedische Patient Arne Larsson lebte dank Schrittmacher noch über 40 Jahre."
    },
    {
        "id": "q_er_091",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Bildgebungsverfahren erfanden Godfrey Hounsfield und Allan Cormack (Nobelpreis 1979)?",
        "answers": [
            "Magnetresonanztomographie (MRT)",
            "Ultraschall",
            "Computertomographie (CT)",
            "PET-Scan"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧠 Das CT berechnet aus Röntgenstrahlen detaillierte Querschnittsbilder des Körpers."
    },
    {
        "id": "q_er_092",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Schotte erfand 1823 die wasserdichte Regenbekleidung aus Kautschuk?",
        "answers": [
            "Thomas Burberry",
            "John Barbour",
            "Charles Goodyear",
            "Charles Macintosh"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧥 Nach ihm sind die klassischen Regenmäntel ('Macintosh') benannt."
    },
    {
        "id": "q_er_093",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Unternehmen stellte 1976 den ersten betriebsbereiten Personal Computer 'Apple I' vor?",
        "answers": [
            "Apple (Steve Wozniak & Steve Jobs)",
            "IBM",
            "Commodore",
            "Microsoft"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "💻 Wozniak entwickelte die Platine in der elterlichen Garage von Steve Jobs."
    },
    {
        "id": "q_er_094",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Heimcomputer-Modell von Commodore wurde ab 1982 der meistverkaufte Computer der Welt?",
        "answers": [
            "Amiga 500",
            "Commodore 64 (C64)",
            "Atari 2600",
            "Sinclair ZX Spectrum"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🕹️ Der C64 verkaufte sich schätzungsweise über 12 bis 17 Millionen Mal."
    },
    {
        "id": "q_er_095",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Standard-Schnittstellensystem erfanden Intel und andere Konzerne 1996 für Zubehör?",
        "answers": [
            "FireWire",
            "Thunderbolt",
            "USB (Universal Serial Bus)",
            "SCSI"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔌 USB ersetzte Dutzende unhandlicher Steckverbindungen an Computern."
    },
    {
        "id": "q_er_096",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Erste-Hilfe-Mittel erfand der Amerikaner Earle Dickson 1920 für Johnson & Johnson?",
        "answers": [
            "Der Wundverband",
            "Desinfektionsspray",
            "Heftpflaster ohne Wundauflage",
            "Das Pflaster (BAND-AID)"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🩹 Dickson erfand fertige Verbandstreifen für seine Frau, die sich beim Kochen oft schnitt."
    },
    {
        "id": "q_er_097",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche bahnbrechende Erfindung ermöglichte ab 1947 bei Bell Labs den Ersatz klobiger Elektronenröhren?",
        "answers": [
            "Transistor",
            "Mikroprozessor",
            "Kondensator",
            "Integrierter Schaltkreis"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📻 Bardeen, Brattain und Shockley erhielten für die Erfindung des Transistors den Nobelpreis."
    },
    {
        "id": "q_er_098",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher US-Konzern stellte 1971 den ersten kommerziellen Mikroprozessor 'Intel 4004' her?",
        "answers": [
            "AMD",
            "Intel",
            "IBM",
            "Texas Instruments"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "💻 Der Intel 4004 vereinte erstmals eine komplette CPU auf einem einzigen Siliziumchip."
    },
    {
        "id": "q_er_099",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer baute 1672 das erste Spiegelteleskop (Reflektor), um Farbfehler von Linsen zu vermeiden?",
        "answers": [
            "Galileo Galilei",
            "Johannes Kepler",
            "Isaac Newton",
            "William Herschel"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🔭 Newton nutzte einen geschliffenen Metallspiegel zur Lichtbündelung."
    },
    {
        "id": "q_er_100",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Erfinder baute 1769 den ersten fahrbaren Dampfwagen (Fardier) der Welt?",
        "answers": [
            "James Watt",
            "Carl Benz",
            "George Stephenson",
            "Nicholas Cugnot"
        ],
        "correct": 3,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🚗 Cugnots dreirädriger Dampfwagen sollte schwere Kanonen transportieren."
    },
    {
        "id": "q_er_101",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher US-Wissenschaftler prägte 1956 auf der Dartmouth-Konferenz den Begriff 'Künstliche Intelligenz'?",
        "answers": [
            "John McCarthy",
            "Marvin Minsky",
            "Alan Turing",
            "Claude Shannon"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧠 McCarthy legte den Grundstein für die akademische Forschung der Artificial Intelligence."
    },
    {
        "id": "q_er_102",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Jahr gilt mit dem Start des ersten 'iPhone' durch Steve Jobs als Wendepunkt der Smartphone-Ära?",
        "answers": [
            "2001",
            "2007",
            "2004",
            "2010"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📱 Das iPhone kombinierte iPod, Telefon und mobilen Internet-Browser mit Multi-Touch."
    },
    {
        "id": "q_er_103",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Schweizer Unternehmen erfand 1937 den löslich gemachten Pulverkaffee ('Nescafé')?",
        "answers": [
            "Jacobs",
            "Tchibo",
            "Nestlé (Max Morgenthaler)",
            "Illy"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "☕ Morgenthaler erfand eine Methode, Kaffeextrakt haltbar in löslicher Pulverform zu trocknen."
    },
    {
        "id": "q_er_104",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Werkzeug erfand der deutsche Chemiker Justus von Liebig zur Fleischextrakt-Nutzung?",
        "answers": [
            "Maggi-Würze",
            "Knorr-Suppenwürfel",
            "Pektin",
            "Liebigs Fleischextrakt / Brühwürfel-Vorläufer"
        ],
        "correct": 3,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🍲 Liebig entwickelte ein Verfahren zur haltbaren Konzentration von Rindfleischextrakt."
    },
    {
        "id": "q_er_105",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Deutsche erfand 1895 die verflüssigte Luft durch das Linde-Verfahren?",
        "answers": [
            "Carl von Linde",
            "Justus von Liebig",
            "Fritz Haber",
            "Walther Nernst"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "❄️ Das Linde-Verfahren ermöglichte moderne Kältetechnik und die TIEF-Kühlung."
    },
    {
        "id": "q_er_106",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher Schotte erfand 1888 die Druckluft-Bereifung neu und gründete ein Weltunternehmen?",
        "answers": [
            "Charles Goodyear",
            "John Boyd Dunlop",
            "Édouard Michelin",
            "Firestone"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🛞 Dunlop erfand den Luftreifen unabhängig vom vergessenen Patent Thomson."
    },
    {
        "id": "q_er_0107",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1827 die ersten funktionierenden Reibzündhölzer (Streichhölzer)?",
        "answers": [
            "Gustav Kammerer",
            "Robert Bunsen",
            "John Walker",
            "Michael Faraday"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🕯️ Walkers Zündhölzer entflammten durch Reiben an Sandpapier."
    },
    {
        "id": "q_er_108",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche deutsche Erfindung von Otto Hahn, Lise Meitner und Fritz Straßmann schütterte 1938 die Welt?",
        "answers": [
            "Entdeckung der Radioaktivität",
            "Erfindung des Lasers",
            "Entdeckung der Röntgenstrahlung",
            "Entdeckung der Kernspaltung von Uran"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "⚛️ Sie wiesen nach, dass Uranatome durch Neutronenbeschuss gespalten werden können."
    },
    {
        "id": "q_er_109",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher russische Flugpionier erfand 1939 den ersten modernen Hubschrauber mit Heckrotor (VS-300)?",
        "answers": [
            "Igor Sikorsky",
            "Heinrich Focke",
            "Etienne Oehmichen",
            "Juan de la Cierva"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🚁 Sikorskys Heckrotor-Konstruktion ist bis heute die Standardbauweise für Helikopter."
    },
    {
        "id": "q_er_110",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher britische Mathematiker knäckte im Zweiten Weltkrieg die Enigma-Maschine in Bletchley Park?",
        "answers": [
            "John von Neumann",
            "Alan Turing",
            "Gordon Welchman",
            "Tommy Flowers"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧩 Turing entwickelte die 'Bombe'-Kryptomaschine und gilt als Vater der theoretischen Informatik."
    },
    {
        "id": "q_er_111",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches Jahr markiert den Erstflug der Überschall-Passagiermaschine 'Concorde'?",
        "answers": [
            "1955",
            "1976",
            "1969",
            "1981"
        ],
        "correct": 2,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "✈️ Die Concorde flog mit doppelter Schallgeschwindigkeit (Mach 2) über den Atlantik."
    },
    {
        "id": "q_er_112",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher deutsche Techniker erfand 1861 das erste funktionierende Telefon, dessen Satz 'Das Pferd frisst keinen Gurkensalat' lautete?",
        "answers": [
            "Alexander Graham Bell",
            "Werner von Siemens",
            "Heinrich Hertz",
            "Philipp Reis"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📞 Reis demonstrierte seine 'Fernsprecheinrichtung' 1861 dem Physikalischen Verein in Frankfurt."
    },
    {
        "id": "q_er_113",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche deutsche Erfindung begründete 1847 die moderne Elektrotechnik (Zeigertelegraf)?",
        "answers": [
            "Werner von Siemens & Johann Georg Halske",
            "Robert Bosch",
            "Carl Zeiss",
            "Emil Rathenau"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "⚡ Siemens verbesserte den Telegrafen und gründete das Weltunternehmen Siemens & Halske."
    },
    {
        "id": "q_er_114",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1816 den Heißluftmotor (Stirlingmotor) als sichere Alternative zur Dampfmaschine?",
        "answers": [
            "James Watt",
            "Robert Stirling",
            "Rudolf Diesel",
            "Sadi Carnot"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "⚙️ Der Stirlingmotor arbeitet mit geschlossener Gasfüllung durch externe Erwärmung."
    },
    {
        "id": "q_er_115",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher US-Pionier erfand 1844 das Verfahren der Vulkanisation von Kautschuk?",
        "answers": [
            "John Dunlop",
            "Thomas Hancock",
            "Charles Goodyear",
            "B.F. Goodrich"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🛞 Goodyear tropfte Kautschuk und Schwefel versehentlich auf einen heißen Ofen."
    },
    {
        "id": "q_er_116",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Schauspielerin erfand im Zweiten Weltkrieg das Frequenzsprungverfahren, die Basis für WLAN & Bluetooth?",
        "answers": [
            "Marlene Dietrich",
            "Grace Kelly",
            "Audrey Hepburn",
            "Hedy Lamarr"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📻 Hedy Lamarr entwickelte mit George Antheil eine funkgesteuerte Torpedolenkung."
    },
    {
        "id": "q_er_117",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welche Erfindung revolutionierte ab 1973 durch Paul Lauterbur und Peter Mansfield die strahlenfreie Körperdiagnostik?",
        "answers": [
            "Magnetresonanztomographie (MRT / Kernspin)",
            "Computertomographie (CT)",
            "Ultraschall",
            "Röntgen"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧲 Das MRT nutzt starke Magnetfelder und Radioimpedanzwellen ohne Röntgenstrahlung."
    },
    {
        "id": "q_er_118",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welcher amerikanische Erfinder meldete 1851 das Patent für den Revolver mit drehbarer Trommel an?",
        "answers": [
            "Oliver Winchester",
            "Samuel Colt",
            "Eliphalet Remington",
            "Daniel Wesson"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔫 Samuel Colt erfand den Mechanismus, der nach jedem Schuss die Trommel automatisch weiterdrehte."
    },
    {
        "id": "q_er_119",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Wer erfand 1908 das Glasverfahren zur Herstellung von durchsichtigem Cellophan?",
        "answers": [
            "Leo Baekeland",
            "Otto Bayer",
            "Jacques E. Brandenberger",
            "Roy Plunkett"
        ],
        "correct": 2,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🍬 Der Schweizer Chemiker erfand die durchsichtige Verpackungsfolie aus Zellulose."
    },
    {
        "id": "q_er_120",
        "category": "spass_erfindungen",
        "area": "spass",
        "subject": "erfindungen",
        "question": "Welches bahnbrechende Weltraumteleskop schickte die NASA 1990 in eine Erdumlaufbahn?",
        "answers": [
            "James Webb-Teleskop",
            "Kepler-Teleskop",
            "Spitzer-Teleskop",
            "Hubble-Weltraumteleskop"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔭 Hubble lieferte dank der Position außerhalb der Erdatmosphäre gestochen scharfe Bilder des Universums."
    }
];

if (typeof window !== 'undefined') {
    if (!window.FUN_QUESTIONS) {
        window.FUN_QUESTIONS = [];
    }
    window.FUN_QUESTIONS = window.FUN_QUESTIONS.concat(SPASS_ERFINDUNGEN_QUESTIONS);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SPASS_ERFINDUNGEN_QUESTIONS;
}
