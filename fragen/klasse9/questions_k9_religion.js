// ================================================================
// KLASSE 9 - RELIGION / RELIGIONSLEHRE (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K9_RELIGION_QUESTIONS = [
  // --- WELTRELIGIONEN IM VERGLEICH & INTERRELIGIÖSER DIALOG (001 - 025) ---
  {
    "id": "k9_rel_001",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche drei Weltreligionen werden aufgrund ihres gemeinsamen Stammvaters als 'abrahamitische Religionen' bezeichnet?",
    "answers": [
      "Judentum, Christentum, Islam",
      "Buddhismus, Hinduismus, Islam",
      "Judentum, Baha'i, Daoismus",
      "Christentum, Hinduismus, Shintoismus"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Judentum, Christentum u. Islam berufen sich allesamt auf den einen Gott Abrahams u. teilen gemeinsame Wurzeln."
  },
  {
    "id": "k9_rel_002",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie heißt die heilige Schrift des Judentums, die dem Alten Testament der Christen entspricht?",
    "answers": [
      "Die jüdische Tanach (Thora)",
      "Der Koran des Propheten",
      "Die Veden der Weisheit",
      "Das Buch des Aufwachsens"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Tanach besteht aus Thora (Weisung), Nevi'im (Propheten) u. Ketuvim (Schriften)."
  },
  {
    "id": "k9_rel_003",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreiben die 'Fünf Säulen' im Islam?",
    "answers": [
      "Grundpflichten des muslimischen Lebens",
      "Fünf Hauptmoscheen in Mekka",
      "Fünf Gebote des Propheten Moses",
      "Fünf heilige Bücher der Scharia"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Fünf Säulen (Glaubensbekenntnis, Gebet, Almosen, Fasten, Wallfahrt) bilden das Fundament der islamischen Praxis."
  },
  {
    "id": "k9_rel_004",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie nennt man die Wallfahrt nach Mekka, die jeder Muslim einmal im Leben nach Möglichkeit antreten sollte?",
    "answers": [
      "Die Pilgerfahrt Haddsch",
      "Das Fastenfest Ramadan",
      "Das Gebet Schahada",
      "Die Abgabe der Zakat"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Haddsch ist die fünfte Säule des Islam u. führt Gläubige zur Kaaba in Mekka."
  },
  {
    "id": "k9_rel_005",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher historische Religionsstifter lehrte den 'Achtfachen Pfad' zur Überwindung des Leidens?",
    "answers": [
      "Siddhartha Gautama (Buddha)",
      "Mahavira der Jainist",
      "Laozi der Philosoph",
      "Konfuzius der Meister"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Siddhartha Gautama gelangte als 'Buddha' (der Erleuchtete) zur Erkenntnis u. veründete die Vier Edlen Wahrheiten."
  },
  {
    "id": "k9_rel_006",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Nirwana' im Buddhismus?",
    "answers": [
      "Erlöschen aller Begierden u. Leiden",
      "Ein paradiesischer Garten im Himmel",
      "Wiedergeburt als mächtiges Wesen",
      "Reines Verbrennen des Körpers"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nirwana bedeutet wörtlich 'Erlöschen' – das Austreten aus dem Kreislauf der Wiedergeburten (Samsara)."
  },
  {
    "id": "k9_rel_007",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter dem 'Karma'-Prinzip im Hinduismus u. Buddhismus?",
    "answers": [
      "Ursache u. Wirkung aller Taten",
      "Macht der Göttinnen u. Götter",
      "Ein festgelegtes Schicksal Gott",
      "Ein Ritual zur Sündenvergebung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Karma besagt, dass jede Handlung Folgen für das jetzige oder ein zukünftiges Leben hat."
  },
  {
    "id": "k9_rel_008",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie nennt man den unendlichen Kreislauf von Geburt, Tod u. Wiedergeburt in östlichen Religionen?",
    "answers": [
      "Der Kreislauf Samsara",
      "Das Zustand des Nirwana",
      "Die Lehre des Dharma",
      "Das Konzept des Atman"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Samsara bezeichnet das Dasein im ewigen Rad der Wiedergeburten, aus dem die Erleuchtung befreien soll."
  },
  {
    "id": "k9_rel_009",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Heilige Schrift gilt im Hinduismus als älteste u. grundlegendste Gesetzessammlung?",
    "answers": [
      "Die vier Veden Schriften",
      "Die Sprüche der Thora",
      "Das Evangelium Matthäus",
      "Die Suren des Korans"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Veden (wörtlich: Wissen) sind eine Sammlung von Hymnen, Riten u. philosophischen Texten des Hinduismus."
  },
  {
    "id": "k9_rel_010",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher wöchentliche Ruhetag wird im Judentum von Freitagabend bis Samstagabend gefeiert?",
    "answers": [
      "Der Feiertag Schabbat",
      "Der Sonntag der Kirche",
      "Der Freitag im Islam",
      "Das Pessach-Fest Juda"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Schabbat erinnert an die Ruhe Gottes am siebten Tag der Schöpfung u. ist der jüdische Ruhetag."
  },
  {
    "id": "k9_rel_011",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was bedeutet der Begriff 'Monotheismus'?",
    "answers": [
      "Glaube an nur einen Gott",
      "Verehrung vieler Götter",
      "Ablehnung jeglicher Religion",
      "Glaube an die Naturkräfte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Monotheismus bezeichnet den Glauben an einen einzigen, universellen Gott (z. B. Judentum, Christentum, Islam)."
  },
  {
    "id": "k9_rel_012",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Polytheismus'?",
    "answers": [
      "Glaube an mehrere Götter",
      "Glaube an das eine Sein",
      "Reiner Ahnenkult der Ahnen",
      "Verehrung des Herrschers"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Polytheismus ist der Glaube an eine Vielzahl von Göttern (wie im antiken Griechenland oder Ägypten)."
  },
  {
    "id": "k9_rel_013",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was ist das Hauptanliegen der christlichen 'Ökumene'?",
    "answers": [
      "Einheit u. Dialog der Kirchen",
      "Vereinigung aller Weltreligionen",
      "Missionierung fremder Völker",
      "Trennung von Kirche u. Staat"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ökumene bezeichnet die Zusammenarbeit u. das Streben nach der Einheit aller christlichen Konfessionen."
  },
  {
    "id": "k9_rel_014",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Interreligiöser Dialog'?",
    "answers": [
      "Gespräch verschiedener Religionen",
      "Streit zwischen zwei Konfessionen",
      "Debatte zwischen Wissenschaft u. Kirche",
      "Gebet innerhalb einer Kirchengemeinde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Interreligiöser Dialog sucht das friedliche Gespräch u. das gegenseitige Verstehen zwischen Vertretern unterschiedlicher Religionen."
  },
  {
    "id": "k9_rel_015",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Rolle nimmt Jesus von Nazaret im Islam (als 'Isa ibn Maryam') ein?",
    "answers": [
      "Ein hochverehrter Prophet Gottes",
      "Der göttliche Sohn Allahs",
      "Ein Gegner des Propheten",
      "Keine Bedeutung im Koran"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Islam gilt Jesus (Isa) als ein bedeutender Prophet u. Messias, jedoch nicht als Sohn Gottes."
  },
  {
    "id": "k9_rel_016",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie heißt der jüdische Begriff für die Speisegesetze, die erlaubte u. verbotene Nahrung regeln?",
    "answers": [
      "Das Gebot der Kaschrut (koscher)",
      "Die Pflicht Halal zu essen",
      "Das Prinzip des Vegetarismus",
      "Das Gebot der Abstinenz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Koscher bedeutet nach den jüdischen Speisegesetzen tauglich; u. a. werden fleischige u. milchige Speisen getrennt."
  },
  {
    "id": "k9_rel_017",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches arabische Wort bezeichnet im Islam Dinge u. Handlungen, die nach religiösem Recht erlaubt sind?",
    "answers": [
      "Der Begriff 'Halal' (erlaubt)",
      "Der Begriff 'Haram' (verboten)",
      "Der Begriff 'Koscher' (tauglich)",
      "Der Begriff 'Sura' (Kapitel)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Halal bezeichnet alle nach islamischem Recht gestatteten Dinge u. Handlungen (im Gegensatz zu Haram)."
  },
  {
    "id": "k9_rel_018",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher katholische Kirchenrat (1962–1965) öffnete die Kirche für den Dialog mit der modernen Welt u. anderen Religionen?",
    "answers": [
      "Das Zweite Vatikanische Konzil",
      "Das Konzil von Trient 1545",
      "Das Erste Vatikanische Konzil",
      "Der Erlass von Nikaia 325"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Zweite Vatikanum erneuerte die katholische Kirche u. betonte in der Erklärung 'Nostra Aetate' die Wertschätzung anderer Religionen."
  },
  {
    "id": "k9_rel_019",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche gemeinsame Grundüberzeugung teilt das 'Projekt Weltethos' von Hans Küng für alle Religionen?",
    "answers": [
      "Die Goldene Regel des Handelns",
      "Die Pflicht zur Taufe aller Menschen",
      "Die Verehrung der gleichen Bilder",
      "Die Abschaffung aller Tempel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Weltethos beruht auf gemeinsamen ethischen Werten aller Religionen, wie der Goldenen Regel u. der Verpflichtung zur Gewaltlosigkeit."
  },
  {
    "id": "k9_rel_020",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was feiert das jüdische Pessach-Fest?",
    "answers": [
      "Befreiung des Volkes aus Ägypten",
      "Empfang der zehn Gebote Sinai",
      "Erschaffung der Erde in 6 Tagen",
      "Wiedereinweihung des Tempels"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pessach erinnert an den Auszug (Exodus) der Israeliten aus der ägyptischen Sklaverei."
  },
  {
    "id": "k9_rel_021",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher Monat im islamischen Kalender ist der heilige Fastenmonat?",
    "answers": [
      "Der Fastenmonat Ramadan",
      "Der Monat Muharram Jahresbeginn",
      "Der Monat Dhu l-Hiddscha",
      "Der Festmonat Schawwal"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Ramadan fasten Muslime von der Morgendämmerung bis zum Sonnenuntergang (Enthaltsamkeit von Essen u. Trinken)."
  },
  {
    "id": "k9_rel_022",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie nennt man im Judentum die religiöse Mündigkeitsfeier für Jungen mit 13 Jahren?",
    "answers": [
      "Die Feier Bar Mizwa",
      "Die Feier Bat Mizwa",
      "Das Fest der Beschneidung",
      "Die christliche Konfirmation"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bar Mizwa ('Sohn der Pflicht') markiert die religiöse Volljährigkeit; für Mädchen heißt die Feier Bat Mizwa."
  },
  {
    "id": "k9_rel_023",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Dreiheit von Hauptgöttern (Trimurti) prägt das Gottesbild im Hinduismus?",
    "answers": [
      "Brahma, Vishnu und Shiva",
      "Zeus, Poseidon u. Hades",
      "Ganesha, Hanuman u. Indra",
      "Osiris, Isis und Horus"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Trimurti symbolisiert die kosmischen Funktionen: Schöpfung (Brahma), Erhaltung (Vishnu) u. Zerstörung/Erneuerung (Shiva)."
  },
  {
    "id": "k9_rel_024",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter dem Begriff 'Fundamentalismus' in Religionen?",
    "answers": [
      "Starres Festhalten an Texten",
      "Offenheit für moderne Theorien",
      "Freie Auslegung der Heiligtümer",
      "Friedlicher Dialog der Völker"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Fundamentalismus fordert die wörtliche Auslegung heiliger Texte u. lehnt moderne, kritische Hinterfragungen ab."
  },
  {
    "id": "k9_rel_025",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches Grundrecht schützt die Glaubens- u. Gewissensfreiheit in Deutschland (Artikel 4 Grundgesetz)?",
    "answers": [
      "Recht auf freie Religionsausübung",
      "Pflicht zum Beitritt einer Kirche",
      "Verbot jeglicher Religion im Staat",
      "Recht auf Gründung einer Sekte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Art. 4 GG garantiert die Unverletzlichkeit der Religion, des Bekenntnisses u. die ungestörte Religionsausübung."
  },

  // --- BIBEL, EXEGESE & KIRCHENGESCHICHTE (026 - 050) ---
  {
    "id": "k9_rel_026",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "In welchen Hauptsprachen wurden die Bücher des Alten u. Neuen Testaments ursprünglich verfasst?",
    "answers": [
      "Hebräisch u. Altgriechisch (Koine)",
      "Latein u. Altarabisch",
      "Aramäisch u. Altdeutsch",
      "Ägyptisch u. Griechisch"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Alte Testament wurde größtenteils auf Hebräisch (wenig Aramäisch) verfasst, das Neue Testament auf Griechisch."
  },
  {
    "id": "k9_rel_027",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Historisch-kritische Methode' in der Bibelexegese?",
    "answers": [
      "Wissenschaftliche Auslegung der Texte",
      "Wörtlicher Glaube an jeden Satz",
      "Kritik an der Bibel als Lüge",
      "Verbot des Lesens ohne Priester"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die historisch-kritische Methode untersucht biblische Texte in ihrem geschichtlichen Entstehungskontext u. mit wissenschaftlichen Mitteln."
  },
  {
    "id": "k9_rel_028",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie heißen die vier Evangelisten im Neuen Testament?",
    "answers": [
      "Matthäus, Markus, Lukas, Johannes",
      "Petrus, Paulus, Jakobus, Johannes",
      "Mose, David, Salomo, Jesaja",
      "Abraham, Isaak, Jakob, Josef"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die vier Evangelien berichten vom Leben, Wirken, Tod u. der Auferstehung Jesu von Nazaret."
  },
  {
    "id": "k9_rel_029",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches Ereignis am 31. Oktober 1517 leitete die evangelische Reformation in Deutschland ein?",
    "answers": [
      "Thesenanschlag von Martin Luther",
      "Verbrennung der päpstlichen Bulle",
      "Übersetzung des Neuen Testaments",
      "Der Augsburger Religionsfrieden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Martin Luther veröffentlichte seine 95 Thesen gegen den Ablasshandel u. löste damit die Reformationsbewegung aus."
  },
  {
    "id": "k9_rel_030",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche vier reformatorischen Grundsätze ('Solae') fassen Luthers Theologie zusammen?",
    "answers": [
      "Sola scriptura, fide, gratia, Christus",
      "Sola ecclesia, papa, fide, scriptura",
      "Sola Maria, Christus, gratia, opera",
      "Sola ratio, natura, fide, scriptura"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Allein die Schrift (scriptura), allein der Glaube (fide), allein die Gnade (gratia), allein Christus."
  },
  {
    "id": "k9_rel_031",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wo übersetzte Martin Luther 1522 das Neue Testament ins Deutsche?",
    "answers": [
      "Auf der Wartburg bei Eisenach",
      "Im Kloster zum Heiligen Grab",
      "Auf dem Reichstag zu Worms",
      "In der Stadt Wittenberg"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Als 'Junker Jörg' getarnt übersetzte Luther auf der Wartburg das Neue Testament in ein verständliches Deutsch ('dem Volk aufs Maul schauen')."
  },
  {
    "id": "k9_rel_032",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was regelte der Augsburger Religionsfrieden von 1555 mit der Formel 'Cuius regio, eius religio'?",
    "answers": [
      "Landesherr bestimmt die Religion",
      "Gleichberechtigung aller Bürger",
      "Verbot des protestantischen Glaubens",
      "Freie Wahl der Kirche für jeden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wer das Land beherrscht, bestimmt auch die Konfession (Katholisch oder Lutherisch) seiner Untertanen."
  },
  {
    "id": "k9_rel_033",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche protestantische Bewegung leistete im Nationalsozialismus Widerstand gegen die Gleichschaltung der Kirche ('Deutsche Christen')?",
    "answers": [
      "Die Bekennende Kirche (BK)",
      "Der Bund Evangelischer Jugend",
      "Die Christliche Volksfront",
      "Der Ökumenische Rat Berlin"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Bekennende Kirche wendete sich in der Barmer Theologischen Erklärung (1934) gegen den Einfluss der NS-Ideologie auf die Kirche."
  },
  {
    "id": "k9_rel_034",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher evangelische Theologe u. Widerstandskämpfer wurde kurz vor Kriegsende 1945 im KZ Flossenbürg hingerichtet?",
    "answers": [
      "Dietrich Bonhoeffer Pfarrer",
      "Martin Niemöller Pastor",
      "Karl Barth Theologe",
      "Paul Schneider Pfarrer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dietrich Bonhoeffer beteiligte sich am aktiven Widerstand gegen Hitler u. hinterließ bedeutende theologische Werke ('Widerstand u. Ergebung')."
  },
  {
    "id": "k9_rel_035",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher katholische Bischof von Münster wandte sich in seinen Predigten 1941 öffentlich gegen die NS-'Euthanasie' (Morde an Kranken)?",
    "answers": [
      "Clemens August Graf von Galen",
      "Bernhard Lichtenberg Dompropst",
      "Michael von Faulhaber Kardinal",
      "Alfred Delp Jesuitenpater"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bischof von Galen ('Der Löwe von Münster') klagte die Morde an behinderten u. psychisch kranken Menschen öffentlich an."
  },
  {
    "id": "k9_rel_036",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches Dokument unterzeichnete der Vatikan 1933 mit dem Deutschen Reich zur Sicherung katholischer Einrichtungen?",
    "answers": [
      "Das Reichskonkordat 1933",
      "Der Lateranvertrag von Rom",
      "Die Barmer Erklärung 1934",
      "Der Vertrag von Versailles"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Reichskonkordat sicherte katholische Schulen u. Vereine zu, verpflichtete den Klerus jedoch zur Enthaltsamkeit von Parteipolitik."
  },
  {
    "id": "k9_rel_037",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt die 'Zwei-Reiche-Lehre' Martin Luthers?",
    "answers": [
      "Unterscheidung Welt u. Gottestreich",
      "Trennung von Himmel u. Hölle",
      "Gleichheit aller Staaten der Erde",
      "Herrschaft von Papst u. Kaiser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gott regiert die Welt auf zwei Weisen: geistlich durch das Evangelium (Glaubensreich) u. weltlich durch Gesetz u. Obrigkeit (Weltliches Reich)."
  },
  {
    "id": "k9_rel_038",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie nennt man die Entstehung u. Ausbreitung der katholischen Reformbewegung als Antwort auf die Reformation?",
    "answers": [
      "Gegenreformation / Kath. Reform",
      "Die Zeit der Kreuzzüge",
      "Das Zeitalter der Aufklärung",
      "Die Scholastik des Mittelalters"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Konzil von Trient (1545–1563) erneuerte die katholische Kirche u. grenzte sich zugleich scharf vom Protestantismus ab."
  },
  {
    "id": "k9_rel_039",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter den 'Apokryphen' im Kontext der Bibel?",
    "answers": [
      "Schriften außerhalb des Kanons",
      "Unlesbare alte Schriftrollen",
      "Die vier Evangelien der Kirche",
      "Fälschungen von Ketzern"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Apokryphen sind religiöse Schriften aus der biblischen Zeit, die nicht in den offiziellen biblischen Kanon aufgenommen wurden."
  },
  {
    "id": "k9_rel_040",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Synoptische Evangelien'?",
    "answers": [
      "Matthäus, Markus u. Lukas",
      "Die Evangelien Markus u. Johannes",
      "Alle vier Evangelien zusammen",
      "Die Briefe des Apostels Paulus"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Matthäus, Markus u. Lukas weisen starke Ähnlichkeiten auf u. können in einer Zusammenschau ('Synopse') gelesen werden."
  },
  {
    "id": "k9_rel_041",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Hypothese erklärt die Übereinstimmungen von Matthäus u. Lukas durch Markus u. eine verlorene Quelle?",
    "answers": [
      "Zwei-Quellen-Theorie",
      "Drei-Kanon-Hypothese",
      "Vier-Evangelisten-Modell",
      "Einfluss der Apokryphen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Zwei-Quellen-Theorie besagt, dass Matthäus u. Lukas das Markusevangelium u. eine mündliche 'Logienquelle Q' nutzten."
  },
  {
    "id": "k9_rel_042",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was kennzeichnet die 'Propheten' im Alten Testament?",
    "answers": [
      "Mahnende Sprachrohre Gottes",
      "Könige von Israel u. Juda",
      "Priester am Tempel in Jerusalem",
      "Wahrsager für die Zukunft"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Biblische Propheten (z. B. Amos, Jesaja) blickten nicht primär in die Zukunft, sondern klagten gesellschaftliches Unrecht an u. riefen zur Umkehr auf."
  },
  {
    "id": "k9_rel_043",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches Gleichnis Jesu veranschaulicht die radikale Nächstenliebe ohne Ansehen der Person oder Herkunft?",
    "answers": [
      "Gleichnis vom barmherzigen Samariter",
      "Gleichnis vom verlorenen Sohn",
      "Gleichnis vom Senfkorn im Garten",
      "Gleichnis von den Arbeitern im Weinberg"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein ausgerechnet verachteter Samariter hilft dem Überfallenen, während Priester u. Levit vorübergehen."
  },
  {
    "id": "k9_rel_044",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie nennt man die zentrale Predigt Jesu im Matthäusevangelium (Kapitel 5–7), die die Seligpreisungen enthält?",
    "answers": [
      "Die Bergpredigt Jesu",
      "Die Feldrede am See",
      "Die Abschiedsrede vor dem Tod",
      "Die Tempelrede in Jerusalem"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Bergpredigt gilt als die Kernunterweisung Jesu zur Ethik der Feindesliebe u. Gewalttätigkeit."
  },
  {
    "id": "k9_rel_045",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches Sakrament verbindet fast alle christlichen Konfessionen als Zeichen der Aufnahme in die Gemeinschaft?",
    "answers": [
      "Das Sakrament der Taufe",
      "Das Sakrament der Firmung/Konfirmation",
      "Das Sakrament der Beichte",
      "Das Sakrament der Krankensalbung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Taufe mit Wasser auf den Namen Gottes (Vater, Sohn, Heiliger Geist) ist das grundlegende christliche Sakrament."
  },
  {
    "id": "k9_rel_046",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie viele Sakramente kennt die katholische Kirche im Vergleich zur evangelischen Kirche?",
    "answers": [
      "Katholisch 7, Evangelisch 2",
      "Katholisch 3, Evangelisch 7",
      "Katholisch 10, Evangelisch 5",
      "Beide Kirchen kennen 7"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die katholische Kirche kennt 7 Sakramente; die evangelische Kirche nur 2 (Taufe u. Abendmahl), da nur diese direkt von Jesus eingesetzt wurden."
  },
  {
    "id": "k9_rel_047",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt die Pfingstgeschichte in der Apostelgeschichte der Bibel?",
    "answers": [
      "Ausschüttung des Heiligen Geistes",
      "Auferstehung Jesu vom Tod",
      "Himmelfahrt Jesu in den Himmel",
      "Kreuzigung Jesu vor Jerusalem"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pfingsten gilt als der 'Geburtstag der Kirche', an dem der Heilige Geist auf die Jünger herabkam."
  },
  {
    "id": "k9_rel_048",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Bedeutung hat der Völkerapostel Paulus für die Entwicklung des frühen Christentums?",
    "answers": [
      "Öffnung des Glaubens für Heiden",
      "Gründung der Stadt Rom als Zentrum",
      "Verfassen der ersten Genese",
      "Verschmelzung mit dem Islam"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Paulus befreite das Christentum von den jüdischen Ritualgesetzen für Nichtjuden (Heiden) u. trug zur weltweiten Verbreitung bei."
  },
  {
    "id": "k9_rel_049",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter dem Begriff 'Kanon' in Bezug auf die Bibel?",
    "answers": [
      "Sammlung verbindlicher Bücher",
      "Ein Musikstück in der Kirche",
      "Ein Verteidigungsbau der Kirche",
      "Die Auslegung durch den Papst"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der biblische Kanon ist die von der Kirche als heilige u. normativ anerkannte Sammlung biblischer Schriften."
  },
  {
    "id": "k9_rel_050",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches Jahr markiert die große Kirchenspaltung (Morgenländisches Schisma) zwischen West- u. Ostkirche?",
    "answers": [
      "Das Jahr 1054 n. Chr.",
      "Das Jahr 1517 n. Chr.",
      "Das Jahr 313 n. Chr.",
      "Das Jahr 800 n. Chr."
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "1054 trennten sich die römisch-katholische Westkirche u. die orthodoxe Ostkirche endgültig."
  },

  // --- CHRISTLICHE ETHIK, BIOETHIK & ANTHROPOLOGIE (051 - 075) ---
  {
    "id": "k9_rel_051",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was besagt die Lehre von der 'Gottesebenbildlichkeit' des Menschen (Gen 1,27)?",
    "answers": [
      "Jeder Mensch besitzt Würde",
      "Der Mensch sieht aus wie Gott",
      "Menschen sind unfehlbar rein",
      "Nur Könige spiegeln Gott"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da jeder Mensch als Bild Gottes erschaffen ist, besitzt er eine unantastbare Würde unabhängig von Leistung oder Nutzen."
  },
  {
    "id": "k9_rel_052",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches ethische Grundprinzip fordert die 'Goldene Regel'?",
    "answers": [
      "Behandle andere wie dich selbst",
      "Auge um Auge, Zahn um Zahn",
      "Der Stärkere setzt sich durch",
      "Tue nur das, was dir nutzt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Alles nun, was ihr wollt, dass euch die Menschen tun sollen, das tut ihnen auch!' (Mt 7,12)."
  },
  {
    "id": "k9_rel_053",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der christliche Begriff der 'Nächstenliebe' (Agape)?",
    "answers": [
      "Uneigennützige Zuwendung zum MENSCHEN",
      "Liebe nur zu Freunden u. Familie",
      "Romantische Gefühlsliebe Partner",
      "Glaube an den eigenen Erfolg"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Agape ist die bedingungslose, uneigennützige Liebe, die sich besonders Bedürftigen u. Fremden zuwendet."
  },
  {
    "id": "k9_rel_054",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht die christliche Ethik unter dem Auftrag zur 'Bewahrung der Schöpfung'?",
    "answers": [
      "Verantwortung für Umwelt u. Natur",
      "Erforschung des Weltalls Technik",
      "Ausbeutung aller Rohstoffe Erde",
      "Bebauung der gesamten Erde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Mensch soll die Erde nicht ausbeuten, sondern als Treuhänder Gottes pflegen u. schützen ('bebauen u. bewahren')."
  },
  {
    "id": "k9_rel_055",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was unterscheidet 'Aktive Sterbehilfe' von 'Passiver Sterbehilfe'?",
    "answers": [
      "Gezielte Tötung vs. Verzicht auf Behandlung",
      "Gabe von Schmerzmitteln vs. Koma",
      "Begleitung zu Hause vs. im Heim",
      "Sterben im Alter vs. bei Unfall"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Aktive Sterbehilfe verabreicht gezielt tödliche Mittel; passive Sterbehilfe lässt das Sterben durch Verzicht auf lebensverlängernde Maßnahmen zu."
  },
  {
    "id": "k9_rel_056",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt die Arbeit von 'Hospizen' u. der 'Palliativmedizin'?",
    "answers": [
      "Würdevolles Leben bis zuletzt ermöglichen",
      "Beschleunigung des Sterbeprozesses",
      "Heilung unheilbarer Krankheiten",
      "Isolierung von Schwerkranken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Hospizbewegung u. Palliativmedizin lindern Schmerzen u. begleiten Sterbende menschlich u. ganzheitlich."
  },
  {
    "id": "k9_rel_057",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher ethische Begriff steht für das Recht des Patienten, über medizinische Eingriffe selbst zu entscheiden?",
    "answers": [
      "Das Prinzip der Autonomie",
      "Der Grundsatz der Fürsorge",
      "Das Gebot der Sparsamkeit",
      "Der Zwang zur Behandlung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Patientenautonomie bedeutet, dass jeder einwilligungsfähige Mensch nach Aufklärung selbst über seinen Körper u. Therapien entscheidet."
  },
  {
    "id": "k9_rel_058",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter 'Präimplantationsdiagnostik' (PID) in der Bioethik?",
    "answers": [
      "Gen-Untersuchung von Embryonen",
      "Untersuchung der Schwangeren Blut",
      "Ultraschall im 3. Monat Schwanger",
      "Behandlung von Unfruchtbarkeit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "PID untersucht im Reagenzglas gezeugte Embryonen vor dem Einpflanzen in die Gebärmutter auf Erbkrankheiten."
  },
  {
    "id": "k9_rel_059",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt die 'Soziallehre' der katholischen Kirche?",
    "answers": [
      "Lehre von Gerechtigkeit u. Wohlfahrt",
      "Vorschriften für den Gottesdienst",
      "Geschichte des Papsttums in Rom",
      "Regeln für die Mönchsorden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Katholische Soziallehre basiert auf Prinzipien wie Personalität, Solidarität, Subsidiarität u. Gemeinwohl."
  },
  {
    "id": "k9_rel_060",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welches Sozialprinzip fordert das Einstehen der Starken für die Schwachen in der Gesellschaft?",
    "answers": [
      "Das Prinzip der Solidarität",
      "Das Prinzip der Konkurrenz",
      "Das Prinzip der Subsidiarität",
      "Das Prinzip der Sparsamkeit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Solidarität betont die gegenseitige Verantwortung u. Zusammengehörigkeit aller Mitglieder einer Gesellschaft."
  },
  {
    "id": "k9_rel_061",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was bedeutet der Begriff 'Sünde' im ursprünglichen theologischen Sinn?",
    "answers": [
      "Getrenntsein von Gott u. Nächsten",
      "Verstoß gegen staatliche Gesetze",
      "Ein ungeschickter Fehler im Alltag",
      "Böse Gedanken ohne Folgen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sünde (wörtlich: Absonderung) bezeichnet den Beziehungsabbruch u. die Entfremdung des Menschen von Gott u. den Mitmenschen."
  },
  {
    "id": "k9_rel_062",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Vergebung' in der christlichen Beziehungsethik?",
    "answers": [
      "Neuanfang durch Erlassen von Schuld",
      "Bestrafung des Täters vor Gericht",
      "Vergessen der erlittenen Tat",
      "Rechtfertigung des Unrechts"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Vergebung überwindet den Teufelskreis von Rache u. Vergeltung u. ermöglicht Versöhnung u. Neuanfang."
  },
  {
    "id": "k9_rel_063",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Haltung forderte Jesus in der Bergpredigt gegenüber Feinden?",
    "answers": [
      "Feindesliebe u. Gebet für sie",
      "Hass u. Vergeltung nach Recht",
      "Ausweichung u. Flucht ins Ausland",
      "Gerechte gerichtliche Strafe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "'Liebt eure Feinde und betet für die, die euch verfolgen' (Mt 5,44) durchbricht Spirale der Gewalt."
  },
  {
    "id": "k9_rel_064",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter 'Pazifismus'?",
    "answers": [
      "Grundsatzentscheidung gegen Gewalt",
      "Recht auf Verteidigungskrieg",
      "Bündnis von Militärstaaten",
      "Aufrüstung zur Abschreckung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pazifismus lehnt Krieg u. jegliche Anwendung militärischer Gewalt aus Gewissensgründen ab."
  },
  {
    "id": "k9_rel_065",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt die Doktrin des 'Gerechten Friedens' in der modernen evangelischen Ethik?",
    "answers": [
      "Gewaltfreie Konfliktlösung u. Recht",
      "Erlaubnis von Angriffskriegen",
      "Dauerhafte Aufrüstung aller Staaten",
      "Unterwerfung unter Diktatoren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der 'Gerechte Friede' setzt auf Abwendung von Not, Menschenrechtsschutz, Rechtsordnung u. zivile Konfliktbearbeitung."
  },
  {
    "id": "k9_rel_066",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher Arzt u. Theologe prägte das ethische Prinzip der 'Ehrfurcht vor dem Leben'?",
    "answers": [
      "Albert Schweitzer Forscher",
      "Maximilian Kolbe Pater",
      "Martin Luther King Pastor",
      "Romero Oscar Erzbischof"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Albert Schweitzer lehrte: 'Ich bin Leben, das leben will, inmitten von Leben, das leben will.'"
  },
  {
    "id": "k9_rel_067",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher US-amerikanische Bürgerrechtler u. Pastor kämpfte gewaltlos gegen die Rassentrennung?",
    "answers": [
      "Martin Luther King Jr.",
      "Malcolm X Bürgerrechtler",
      "Nelson Mandela Afrika",
      "Desmond Tutu Bischof"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "King führte den gewaltlosen Widerstand der Bürgerrechtsbewegung u. berief sich dabei auf das Evangelium ('I Have a Dream')."
  },
  {
    "id": "k9_rel_068",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher katholische Pater opferte im KZ Auschwitz sein Leben für einen Familienvater?",
    "answers": [
      "Maximilian Kolbe Pater",
      "Rupert Mayer Jesuitenpater",
      "Titus Brandsma Ordensmann",
      "Karl Leisner Priester"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pater Kolbe ging freiwillig für den Mitgefangenen Franciszek Gajowniczek in den Hungerbunker."
  },
  {
    "id": "k9_rel_069",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was bedeutet der Begriff 'Konziliarer Prozess' für Frieden, Gerechtigkeit u. Bewahrung der Schöpfung?",
    "answers": [
      "Weltweite kirchliche Initiative",
      "Prozess gegen Abtrünnige",
      "Wahl des päpstlichen Stuhls",
      "Bau von Öko-Kirchen weltweit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Seit den 1980er-Jahren arbeiten christliche Kirchen weltweit gemeinsam an Zukunftsfragen der Menschheit."
  },
  {
    "id": "k9_rel_070",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Haltung vertritt die 'Befreiungstheologie' in Lateinamerika?",
    "answers": [
      "Option für die Armen u. Unterdrückten",
      "Unterstützung reicher Diktaturen",
      "Rückzug aus allen weltlichen Fragen",
      "Reine Konzentration auf den Himmel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Befreiungstheologie sieht im Evangelium den Auftrag, ungerechte gesellschaftliche u. wirtschaftliche Strukturen zu verändern."
  },
  {
    "id": "k9_rel_071",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher Erzbischof von San Salvador wurde 1980 wegen seines Einsatzes für die Armen am Altar erschossen?",
    "answers": [
      "Oscar Romero Erzbischof",
      "Helder Camara Bischof",
      "Gustavo Gutiérrez Theologe",
      "Leonardo Boff Theologe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Oscar Romero klagte die Gräueltaten des Militärregimes an u. wurde als Märtyrer der Befreiungstheologie ermordet."
  },
  {
    "id": "k9_rel_072",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter 'Gewissensentscheidung' in der christlichen Ethik?",
    "answers": [
      "Innere Stimme zur Prüfung des Guten",
      "Befolgen aller staatlichen Gesetze",
      "Entscheidung nach Mehrheit der Gruppe",
      "Handeln nach reinem Vorteil"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Gewissen ist die letzte innere Instanz des Menschen, die Handlungen an ethischen Maßstäben u. Gottes Geboten prüft."
  },
  {
    "id": "k9_rel_073",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Gerechtigkeit' (Mischpat) im Alten Testament?",
    "answers": [
      "Schutz der Wehrlosen u. Armen",
      "Reines Vergeltungsrecht Vor Gericht",
      "Gleichheit aller Besitzverhältnisse",
      "Bestrafung aller Sünder sofort"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Biblische Gerechtigkeit bedeutet Beziehungs- u. Gemeinschaftstreue, die sich besonders im Schutz der Witwen, Waisen u. Fremden zeigt."
  },
  {
    "id": "k9_rel_074",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Bedeutung hat das 'Sabbatjahr' (Schmita) im biblischen Recht?",
    "answers": [
      "Ruhejahr für Land u. Schuldenerlass",
      "Jahr der Feierlichkeiten im Tempel",
      "Fastenjahr für alle Bürger",
      "Jahr des Krieges gegen Feinde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Alle sieben Jahre sollte das Land ruhen, Unfreie freigelassen u. Armen Schulden erlassen werden."
  },
  {
    "id": "k9_rel_075",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was kennzeichnet ein 'ethisches Dilemma'?",
    "answers": [
      "Pflichtenkollision ohne ideale Lösung",
      "Klarer Verstoß gegen Gesetz",
      "Einfache Entscheidung zwischen Gut u. Böse",
      "Meinungsverschiedenheit zweier Menschen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In einem Dilemma stehen mehrere ethische Prinzipien so im Konflikt, dass jede Wahl eine Schuld oder Verletzung mit sich bringt."
  },

  // --- GOTTESBILDER, THEODIZEE & SINNFRAGEN (076 - 100) ---
  {
    "id": "k9_rel_076",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt das philosophisch-theologische Problem der 'Theodizee'?",
    "answers": [
      "Güte Gottes u. Leid in der Welt",
      "Frage nach der Erschaffung Welt",
      "Beweis der Auferstehung Jesu",
      "Streit um das Papsttum in Rom"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wie kann ein allmächtiger u. allgütiger Gott das schreckliche Leid in der Welt zulassen? (Gottgerechtigkeit)."
  },
  {
    "id": "k9_rel_077",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher Philosoph prägte 1710 den Begriff 'Theodizee' in seiner gleichnamigen Schrift?",
    "answers": [
      "Gottfried Wilhelm Leibniz",
      "Immanuel Kant Philosoph",
      "Arthur Schopenhauer Denker",
      "Friedrich Nietzsche Denker"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Leibniz versuchte zu zeigen, dass unsere Welt trotz allen Leids 'die beste aller möglichen Welten' sei."
  },
  {
    "id": "k9_rel_078",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche biblische Gestalt im Alten Testament leidet ohne eigene Schuld u. hadert mit Gott?",
    "answers": [
      "Der Dulder Hiob (Ijob)",
      "König David von Israel",
      "Der Prophet Jona im Fisch",
      "Der Stammvater Abraham"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Buch Hiob verhandelt das Rätsel des Leids des Gerechten u. die Unbegreiflichkeit Gottes."
  },
  {
    "id": "k9_rel_079",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was antwortet die Bibel im Buch Hiob auf die Frage nach dem Grund des Leidens?",
    "answers": [
      "Gott ist unbegreiflich groß",
      "Leid ist immer Strafe für Sünde",
      "Es gibt keinen Gott im Himmel",
      "Teufel ist mächtiger als Gott"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gott entzieht sich einfachen Erklärungen; der Mensch kann den Weltenplan u. das Leid nicht vollständig begreifen."
  },
  {
    "id": "k9_rel_080",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was unterscheidet den 'Atheismus' vom 'Agnostizismus'?",
    "answers": [
      "Leugnung Gottes vs. Nichtwissen",
      "Glaube an Gott vs. Ablehnung",
      "Glaube an Natur vs. an Kirche",
      "Zweifel am Papst vs. an der Bibel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Atheismus verneint die Existenz Gottes; Agnostizismus erklärt, dass man über Gottes Existenz nichts wissen oder beweisen kann."
  },
  {
    "id": "k9_rel_081",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher Denker bezeichnete Religion als 'Opium des Volkes' zur Vertröstung im Elend?",
    "answers": [
      "Karl Marx Ökonom",
      "Ludwig Feuerbach Philosoph",
      "Sigmund Freud Psychologe",
      "Friedrich Nietzsche Denker"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Karl Marx sah in der Religion eine gesellschaftliche Illusion, die Menschen über ihr reales Elend hinwegtröstet."
  },
  {
    "id": "k9_rel_082",
    "category": "k9_religion",
    "area": "schule",
    "grade": "9",
    "subject": "religion",
    "question": "Welcher Religionskritiker erklärte Gott als eine Wunschprojektion des Menschen (Projektionstheorie)?",
    "answers": [
      "Ludwig Feuerbach Philosoph",
      "Karl Marx Ökonom",
      "Jean-Paul Sartre Denker",
      "Charles Darwin Forscher"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Feuerbach behauptete: 'Gott ist das aufgedeckte Innere des Menschen' – der Mensch projiziert seine Sehnsüchte in den Himmel."
  },
  {
    "id": "k9_rel_083",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Wie deutete Sigmund Freud den Gottesglauben aus psychoanalytischer Sicht?",
    "answers": [
      "Kindliche Wunsch- u. Vater-Illusion",
      "Angeborener biologischer Reflex",
      "Höchste Stufe menschlicher Reife",
      "Reine Täuschung durch Priester"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Freud sah im Glauben an Gott die Sehnsucht nach einem schützenden Vater u. eine unbewusste Neurose."
  },
  {
    "id": "k9_rel_084",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welcher Philosoph verkündete die Parole 'Gott ist tot' u. forderte den 'Übermenschen'?",
    "answers": [
      "Friedrich Nietzsche Denker",
      "Arthur Schopenhauer Denker",
      "Jean-Paul Sartre Denker",
      "Immanuel Kant Philosoph"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nietzsche kritisierte die christliche Moral als 'Sklavenmoral' u. rief das Ende des christlichen Gottesbildes aus."
  },
  {
    "id": "k9_rel_085",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt das Bild vom 'mitleidenden Gott' (Dorothee Sölle) als Antwort auf die Auschwitz-Erfahrung?",
    "answers": [
      "Gott leidet mit den Opfern mit",
      "Gott wollte die Vernichtung",
      "Gott hat alle Macht verloren",
      "Gott greift mit Wundern ein"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sölle u. andere Nachkriegstheologen verabschiedeten sich vom Bild des unbeweglichen Herrschers u. sahen Gott im Mitleiden mit den Gequälten."
  },
  {
    "id": "k9_rel_086",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was bedeutet die Aussage 'Gott ist dreifaltig' (Trinität) im christlichen Glauben?",
    "answers": [
      "Ein Gott in drei Personen",
      "Drei verschiedene Götter",
      "Gott in drei Welten",
      "Gott, Engel u. Menschen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der eine Gott offenbart sich christlich in drei Personen: als Vater (Schöpfer), Sohn (Erlöser) u. Heiliger Geist (Tröster)."
  },
  {
    "id": "k9_rel_087",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Anthropomorphismus' in Bezug auf Gottesbilder?",
    "answers": [
      "Menschgestaltige Vorstellung Gottes",
      "Wissenschaftliche Gottesbeweise",
      "Ablehnung jeglicher Bilder Gott",
      "Verehrung von Gott in Tieren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Anthropomorphismus bedeutet, Gott menschliche Gestalt, Gefühle oder Handlungen zuzuschreiben (z. B. 'Gottes Hand')."
  },
  {
    "id": "k9_rel_088",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Warum verbietet das Bilderverbot im Dekalog (2. Gebot) feste Darstellungen Gottes?",
    "answers": [
      "Gott lässt sich nicht festlegen",
      "Gott hat kein Gesicht für Menschen",
      "Farben u. Steine sind unrein",
      "Nur der Papst darf Gott malen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Bilderverbot schützt die Geheimnishaftigkeit u. Unverfügbarkeit Gottes vor menschlicher Vereinnahmung u. Götzendienst."
  },
  {
    "id": "k9_rel_089",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der christliche Begriff 'Auferstehung der Toten' im Unterschied zur Seelenwanderung?",
    "answers": [
      "Ganzheitliche Neuschöpfung bei Gott",
      "Wiedergeburt in neuem Erdenkörper",
      "Weiterleben in Erinnerung der Welt",
      "Fortbestehen als unsterblicher Geist"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Auferstehung hofft auf die Errettung der ganzen Person (Leib u. Seele) durch Gottes Liebe über den Tod hinaus."
  },
  {
    "id": "k9_rel_090",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht die christliche Eschatologie unter dem Begriff 'Reich Gottes'?",
    "answers": [
      "Gottes gerechte Zukunft u. Gegenwart",
      "Ein Staat auf der Landkarte",
      "Das Gebäude der Kirche vor Ort",
      "Ein Ort im Weltall hinter Sternen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Reich Gottes ist Gottes Herrschaft der Liebe u. Gerechtigkeit, die mit Jesus angebrochen ist u. vollendet werden wird."
  },
  {
    "id": "k9_rel_091",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Bedeutung hat das 'Kreuz' als zentrales christliches Symbol?",
    "answers": [
      "Tod u. Siehe der Auferstehung",
      "Reines Zeichen für Trauer Tod",
      "Symbol für Macht der Kirche",
      "Zeichen für Gottes Zorn Sünde"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Kreuz erinnert an das Leiden u. Sterben Jesu, steht aber zugleich für die Hoffnung auf Erlösung u. Auferstehung."
  },
  {
    "id": "k9_rel_092",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt das Phänomen des 'Sektenwesens' oder von 'Jugendreligionen'?",
    "answers": [
      "Totalitäre Führung u. Isolation",
      "Offener Dialog mit der Welt",
      "Freie Wahl der Bekenntnisse",
      "Demokratische Wahl der Leiter"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Problematische Gruppierungen zeichnen sich oft durch Schwarz-Weiß-Denken, Abhängigkeit vom Führer u. Ausstiegsschwierigkeiten aus."
  },
  {
    "id": "k9_rel_093",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was kennzeichnet eine 'Destruktive Kultgruppe' (Sekte)?",
    "answers": [
      "Gefühlsmäßige Ausbeutung u. Druck",
      "Förderung von eigenem Denken",
      "Unterstützung von Familienkontakten",
      "Volle Transparenz aller Finanzen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Typisch sind Kontrolle, Entfremdung von Angehörigen, finanzielle Ausbeutung u. Anspruch auf die alleinige Wahrheit."
  },
  {
    "id": "k9_rel_094",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Säkularisierung' in der modernen Gesellschaft?",
    "answers": [
      "Rückgang religiöser Bindungen",
      "Zunahme von Kirchenbeitritten",
      "Pflicht zum Kirchenbesuch",
      "Einführung von Staatsreligionen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Säkularisierung bezeichnet den Bedeutungsverlust von Religion u. Kirche in Staat, Kultur u. individuellem Leben."
  },
  {
    "id": "k9_rel_095",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter 'Panchronismus' oder 'Deismus'?",
    "answers": [
      "Gott erschuf Welt, greift nicht ein",
      "Gott leitet jeden Tag direkt",
      "Alles in der Natur ist Gott",
      "Gott existiert nur im Gehirn"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Deismus hat Gott die Welt wie ein Uhrmacher erschaffen, überlässt sie aber seitdem ihren eigenen Gesetzen."
  },
  {
    "id": "k9_rel_096",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der 'Pantheismus'?",
    "answers": [
      "Gott u. Universum sind eins",
      "Gott lebt hoch im Himmel",
      "Es gibt unendlich viele Götter",
      "Gott offenbart sich nur im Wort"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Pantheismus lehrt, dass Gott u. Natur/Weltall identisch sind ('Alles ist Gott')."
  },
  {
    "id": "k9_rel_097",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Funktion haben 'Mythen' in den Religionen der Welt?",
    "answers": [
      "Deutung von Grundfragen des Lebens",
      "Historisch genaue Berichte",
      "Wissenschaftliche Erklärungen",
      "Erfundene Lügengeschichten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mythen erzählen in bildhafter Sprache von Schöpfung, Sinn, Schuld u. Verheißung u. deuten das menschliche Dasein."
  },
  {
    "id": "k9_rel_098",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was versteht man unter 'Fundamentaltheologie'?",
    "answers": [
      "Verantwortung des Glaubens vor Vernunft",
      "Ausbildung von Kirchenvorständen",
      "Bauen des Fundaments von Kirchen",
      "Wörtliches Lesen aller Texte"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Fundamentaltheologie begründet die Vernünftigkeit u. Glaubwürdigkeit des christlichen Glaubens gegenüber der Welt."
  },
  {
    "id": "k9_rel_099",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Was beschreibt der Begriff 'Transzendenz' im Gegensatz zur 'Immanenz'?",
    "answers": [
      "Das die Welt Übersteigende",
      "Die rein diesseitige Welt",
      "Das logisch Begreifbare",
      "Das innere Gefühl des Menschen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Transzendenz meint das, was außerhalb oder jenseits der erfahrbaren Welt u. Vernunft liegt (das Göttliche)."
  },
  {
    "id": "k9_rel_0100",
    "category": "k9_religion",
    "area": "schule",
    "grade": 9,
    "subject": "religion",
    "question": "Welche Bedeutung hat die 'Eschatologie' in der christlichen Theologie?",
    "answers": [
      "Lehre von den letzten Dingen (Hoffnung)",
      "Lehre von den Sakramenten Kirche",
      "Erforschung der Urkirche Roms",
      "Lehre von den Geboten Gottes"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eschatologie befasst sich mit den 'letzten Dingen' (Tod, Gericht, Vollendung der Welt u. Hoffnung auf das ewige Leben)."
  }
];

// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K9_RELIGION_QUESTIONS = K9_RELIGION_QUESTIONS;
}