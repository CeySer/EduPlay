// Category: Essen & Trinken
// Target: eduPlay Hub Web App
// Total Questions: 120 (Balanced index distribution)

const SPASS_ESSEN_QUESTIONS = [
    {
        "id": "q_es_001",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das weltberühmte Gerichts 'Sushi' ursprünglich?",
        "answers": [
            "Japan",
            "China",
            "Korea",
            "Thailand"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍣 Sushi entwickelte sich in Japan aus einer Methode zur Konservierung von Fisch in gesäuertem Reis."
    },
    {
        "id": "q_es_002",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches ist das teuerste Gewürz der Welt (gemessen am Kilopreis)?",
        "answers": [
            "Vanille",
            "Safran",
            "Kardamom",
            "Zimt"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🌸 Safran wird aus den getrockneten Stempelfäden einer Krokusart per Hand gewonnen (ca. 150.000 Blüten pro Kilo)."
    },
    {
        "id": "q_es_003",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Frucht gehört botanisch gesehen zu den Beeren?",
        "answers": [
            "Erdbeeren",
            "Himbeeren",
            "Bananen",
            "Mandarinen"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍌 Botanisch gesehen sind Bananen, Tomaten und Gurken echten Beeren, während Erdbeeren Sammelnussfrüchte sind."
    },
    {
        "id": "q_es_004",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchen Grundzutaten besteht eine klassische italienische Sauce Hollandaise vorwiegend?",
        "answers": [
            "Sahne und Mehlschwitze",
            "Olivenöl und Knoblauch",
            "Milch und Frischkäse",
            "Eigelb und flüssige Butter"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧈 Hollandaise ist eine warme aufgeschlagene Emulsion aus Eigelb und geschmolzener Butter."
    },
    {
        "id": "q_es_005",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Bohne wird Schokolade hergestellt?",
        "answers": [
            "Kakaobohne",
            "Kaffeebohne",
            "Sojabohne",
            "Tonkabohne"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍫 Schokolade wird aus den fermentierten und gerösteten Samen des Kakaobaums gewonnen."
    },
    {
        "id": "q_es_006",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "In welchem Land hat das traditionelle Reisgericht 'Paella' seinen Ursprung?",
        "answers": [
            "Mexiko",
            "Spanien",
            "Portugal",
            "Italien"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥘 Die Paella stammt ursprünglich aus der Region Valencia an der Ostküste Spaniens."
    },
    {
        "id": "q_es_007",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie nennt man die Einheit, in der die Schärfe von Paprika- und Chilisorten gemessen wird?",
        "answers": [
            "Brix",
            "Joule",
            "Scoville",
            "Biqual"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌶️ Die Scoville-Skala zeigt den Gehalt an Capsaicin in Chilis an."
    },
    {
        "id": "q_es_008",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Getränk wird nach dem Reinheitsgebot von 1516 nur aus Wasser, Gerstenmalz und Hopfen gebraut?",
        "answers": [
            "Whisky",
            "Cider",
            "Met",
            "Bier"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍺 Das bayerische Reinheitsgebot ist eine der ältesten Lebensmittelverordnungen der Welt."
    },
    {
        "id": "q_es_009",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das knusprige Hefegebäck 'Croissant' ursprünglich?",
        "answers": [
            "Österreich",
            "Frankreich",
            "Schweiz",
            "Belgien"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🥐 Das Kipferl stammt aus Österreich und wurde erst im 19. Jahrhundert in Frankreich zum berühmten Croissant verfeinert."
    },
    {
        "id": "q_es_0010",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Käse trägt die geschützte Herkunftsbezeichnung 'Parmigiano Reggiano'?",
        "answers": [
            "Pecorino",
            "Parmesan",
            "Gorgonzola",
            "Grana Padano"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧀 Echter Parmesan darf nur in bestimmten Provinzen Norditaliens nach strengen Regeln hergestellt werden."
    },
    {
        "id": "q_es_011",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was beschreibt der Begriff 'al dente' bei der Zubereitung von Pasta?",
        "answers": [
            "Sehr weich durchgekocht",
            "In Salzwasser mariniert",
            "Bissfest gekocht",
            "Überbacken mit Käse"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍝 'Al dente' ist italienisch und bedeutet wörtlich 'für den Zahn'."
    },
    {
        "id": "q_es_012",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Pflanze wird der Süßstoff für echten Rohrzucker gewonnen?",
        "answers": [
            "Zuckerrübe",
            "Ahornbaum",
            "Agave",
            "Zuckerrohr"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌾 Zuckerrohr ist ein tropisches Süßgras, das bis zu 6 Meter hoch wachsen kann."
    },
    {
        "id": "q_es_013",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Tee entsteht durch die vollständige Fermentierung (Oxidation) der Teeblätter?",
        "answers": [
            "Schwarzer Tee",
            "Grüner Tee",
            "Weißer Tee",
            "Kamillentee"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "☕ Schwarzer Tee oxidiert vollständig, während Grüner Tee unfermentiert bleibt."
    },
    {
        "id": "q_es_014",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Lebensmittels schimmelt bei richtiger Lagerung niemals und verdirbt nicht?",
        "answers": [
            "Vollmilch",
            "Echter Bienenhonig",
            "Hartkäse",
            "Marmelade"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍯 Honig hat einen sehr geringen Wassergehalt und hohen Zuckergehalt, weshalb Bakterien nicht überleben."
    },
    {
        "id": "q_es_015",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Nuß ist die Hauptzutat für die Herstellung von klassischem Lübecker Marzipan?",
        "answers": [
            "Haselnuss",
            "Cashew",
            "Mandel",
            "Walnuss"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌰 Marzipan besteht aus gemahlenen Mandeln und Zucker."
    },
    {
        "id": "q_es_016",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Geschmacksrichtung gilt neben süß, sauer, salzig und bitter als die 'fünfte' Geschmacksart?",
        "answers": [
            "Scharf",
            "Fettig",
            "Aromatisch",
            "Umami (würzig/herzhaft)"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍜 Umami beschreibt den herzhaften Geschmack von Glutamat (z. B. in Brühe, Reifekäse, Fleisch)."
    },
    {
        "id": "q_es_017",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem südamerikanischen Land stammte die Kartoffel ursprünglich, bevor sie nach Europa gebracht wurde?",
        "answers": [
            "Peru / den Anden",
            "Brasilien",
            "Argentinien",
            "Mexiko"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥔 In den südamerikanischen Anden nutzten die Inka Kartoffeln schon vor Jahrtausenden."
    },
    {
        "id": "q_es_018",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie nennt man das Kochen im Vakuumbeutel bei niedriger und präziser Temperatur im Wasserbad?",
        "answers": [
            "Flambieren",
            "Sous-vide",
            "Blanchieren",
            "Pochieren"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥩 'Sous-vide' kommt aus dem Französischen und bedeutet 'unter Vakuum'."
    },
    {
        "id": "q_es_019",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches italienische Dessert besteht aus Löffelbiskuits, Espresso, Mascarpone und Kakaopulver?",
        "answers": [
            "Panna Cotta",
            "Cannoli",
            "Tiramisu",
            "Zabaione"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍨 'Tiramisù' bedeutet übersetzt 'Zieh mich hoch' oder 'Richte mich auf'."
    },
    {
        "id": "q_es_020",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Pflanze wird das feingemahlene grüne Matchapulver gewonnen?",
        "answers": [
            "Mate-Strauch",
            "Brennnessel",
            "Ginkgo",
            "Grüntee-Blättern (Tencha)"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍵 Für Matcha werden beschattete Teeblätter langsam auf Steinmühlen zu feinstem Pulver gemahlen."
    },
    {
        "id": "q_es_021",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Meeresgetier wird für das traditionelle Gericht 'Calamari Fritti' frittiert?",
        "answers": [
            "Tintenfisch",
            "Garnelen",
            "Muscheln",
            "Hummer"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🦑 Calamari sind Tintenfischringe in einer knusprigen Panade."
    },
    {
        "id": "q_es_022",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie heißt der bekannte mexikanische Dip, der hauptsächlich aus zerdrückter Avocado gefertigt wird?",
        "answers": [
            "Salsa Verde",
            "Guacamole",
            "Salsa Roja",
            "Pico de Gallo"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥑 Echte Guacamole wird mit Avocado, Limettensaft, Koriander und Salz angerührt."
    },
    {
        "id": "q_es_023",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Getreide bildet die Hauptzutat für echtes Pumpernickel-Brot?",
        "answers": [
            "Weizen",
            "Dinkel",
            "Roggen (Schrot & Vollkorn)",
            "Gerste"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍞 Pumpernickel wird aus Roggenschrot hergestellt und über viele Stunden bei mildem Dampf gebacken."
    },
    {
        "id": "q_es_024",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Land konsumiert pro Kopf die meiste Schokolade weltweit?",
        "answers": [
            "Belgien",
            "Deutschland",
            "USA",
            "Schweiz"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🇨🇭 Mit über 10 Kilo Schokolade pro Kopf und Jahr führen die Schweizer die Weltspitze an."
    },
    {
        "id": "q_es_025",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Schimmelpilz wird der französische Edelpilzkäse Roquefort hergestellt?",
        "answers": [
            "Penicillium roqueforti",
            "Penicillium camemberti",
            "Aspergillus niger",
            "Saccharomyces"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🧀 Roquefort reift in den Höhlen von Roquefort-sur-Soulzon aus Schafsmilch."
    },
    {
        "id": "q_es_026",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Heißgetränk entsteht durch das Mischen von Espresso und aufgeschäumter Milch im Verhältnis 1:1?",
        "answers": [
            "Latte Macchiato",
            "Cappuccino",
            "Espresso Macchiato",
            "Americano"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "☕ Ein Cappuccino besteht zu gleichen Teilen aus Espresso und heißem Milchschaum."
    },
    {
        "id": "q_es_027",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Fisch gilt in Japan als Delikatesse, kann aber bei falscher Zubereitung durch Toxin tödlich wirken?",
        "answers": [
            "Thunfisch",
            "Lachs",
            "Kugelfisch (Fugu)",
            "Aal"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐡 Fugu enthält Tetrodotoxin. Nur lizensierte Köche dürfen den Fisch ausnehmen."
    },
    {
        "id": "q_es_028",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Frucht wird wegen ihres extrem stechenden Geruchs in vielen asiatischen Hotels und U-Bahnen verboten?",
        "answers": [
            "Jackfrucht",
            "Papaya",
            "Drachenfrucht",
            "Durian (Stinkfrucht)"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍈 Die Durian schmeckt süß und cremig, verströmt aber einen enorm gewöhnungsbedürftigen Geruch."
    },
    {
        "id": "q_es_029",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem pflanzlichen Produkt wird Tofu gewonnen?",
        "answers": [
            "Sojamilch",
            "Reismilch",
            "Kokosmilch",
            "Mandelmilch"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌱 Tofu entsteht durch Gerinnen von Sojamilch ähnlich wie Käse aus Tiermilch."
    },
    {
        "id": "q_es_030",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Bundesland gilt als die Heimat der berühmten Weißwurst?",
        "answers": [
            "Baden-Württemberg",
            "Bayern",
            "Hessen",
            "Sachsen"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥨 Die Münchner Weißwurst gehört traditionell mit süßem Senf und Brezn auf den Frühstückstisch."
    },
    {
        "id": "q_es_031",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Gewürz wird aus der getrockneten Rinde eines tropischen Baumes gewonnen?",
        "answers": [
            "Muskat",
            "Anis",
            "Zimt",
            "Nelke"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🪵 Zimtstangen sind die eingerollte Innenrinde des Zimtbaums."
    },
    {
        "id": "q_es_032",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was für eine Speise ist Kimchi, der kulinarische Stolz Koreas?",
        "answers": [
            "Gedämpfter Reisfeingebäck",
            "Scharfe Fischsuppe",
            "Gebratenes Rindfleisch",
            "Fermentierter Chinakohl mit Gewürzen"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥬 Kimchi ist durch Milchsäuregärung haltbar gemachter Kohl mit Knoblauch und Chili."
    },
    {
        "id": "q_es_033",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchen zwei Zutaten besteht eine klassische Vinaigrette im Grundrezept?",
        "answers": [
            "Essig und Öl",
            "Mayonnaise und Ketchup",
            "Zitrone und Joghurt",
            "Senf und Sahne"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥗 Eine klassische Vinaigrette wird im Verhältnis 1 Teil Essig zu 3 Teilen Öl emulgiert."
    },
    {
        "id": "q_es_034",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Beere gibt dem alkoholischen Wacholdergetränk 'Gin' seinen charakteristischen Geschmack?",
        "answers": [
            "Preiselbeere",
            "Wacholderbeere",
            "Johannisbeere",
            "Hunderose"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍸 Gin verdankt sein Aroma den Zapfenbeeren des Wacholderstrauchs."
    },
    {
        "id": "q_es_035",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was versteht man unter dem Vorgang des 'Flambierens' in der Küche?",
        "answers": [
            "Einfrieren bei minus 80 Grad",
            "Scharfes Anbraten in Erdnussöl",
            "Entzünden von hochprozentigem Alkohol auf Speisen",
            "Garen in Salzkruste"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔥 Beim Flambieren verdampft der Alkohol und hinterlässt das Aroma der Spirituose."
    },
    {
        "id": "q_es_036",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das berühmte Nationalgericht 'Poutine' (Fritten mit Käse und Bratensauce)?",
        "answers": [
            "USA",
            "Belgien",
            "Irland",
            "Kanada"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🇨🇦 Poutine entstand in der Provinz Québec in den 1950er-Jahren."
    },
    {
        "id": "q_es_037",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Pilz wächst unterirdisch an Baumwurzeln und wird mit ausgebildeten Schweinen oder Hunden gesucht?",
        "answers": [
            "Trüffel",
            "Pfifferling",
            "Steinpilz",
            "Morchel"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍄 Trüffel sind extrem teure Edelpilze, die unter der Erde wachsen."
    },
    {
        "id": "q_es_038",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Hauptzutat verleiht der marokkanischen Suppe 'Harira' und vielen indischen Dals ihre Konsistenz?",
        "answers": [
            "Nudeln",
            "Linsen und Kichererbsen",
            "Kartoffeln",
            "Kürbis"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍲 Hülsenfrüchte wie Linsen und Kichererbsen liefern reichlich Pflanzeneiweiß."
    },
    {
        "id": "q_es_039",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das köstliche Dessert 'Panna Cotta'?",
        "answers": [
            "Frankreich",
            "Spanien",
            "Italien",
            "Griechenland"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍮 'Panna Cotta' bedeutet übersetzt 'gekochte Sahne'."
    },
    {
        "id": "q_es_040",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Nährstoffgruppe liefert dem menschlichen Körper mit ca. 9 kcal pro Gramm die meiste Energie?",
        "answers": [
            "Kohlenhydrate",
            "Proteine",
            "Ballaststoffe",
            "Fette"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥑 Fett hat mehr als doppelt so viele Kalorien pro Gramm wie Proteine oder Kohlenhydrate (jeweils ca. 4 kcal/g)."
    },
    {
        "id": "q_es_041",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Nuss wird der beliebte italienische Brotaufstrich 'Nutella' hauptsächlich gefertigt?",
        "answers": [
            "Haselnuss",
            "Erdnuss",
            "Mandel",
            "Walnuss"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌰 Nutella enthält Kakao und geröstete Haselnüsse."
    },
    {
        "id": "q_es_042",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "In welcher Stadt wurde 1949 die berühmte deutsche 'Currywurst' von Herta Heuwer erfunden?",
        "answers": [
            "Hamburg",
            "Berlin",
            "Bochum",
            "München"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌭 Herta Heuwer meldete die Chillsauce 'Chillup' 1949 in Berlin zum Patent an."
    },
    {
        "id": "q_es_043",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Öl hat einen sehr hohen Rauchpunkt und eignet sich besonders gut zum scharfen Anbraten?",
        "answers": [
            "Natives Olivenöl extra",
            "Leinöl",
            "Erdnussöl / Raffiniertes Öl",
            "Walnussöl"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍳 Raffinierte Öle halten hohen Temperaturen stand, während Leinsam- und Walnussöl kalt genutzt werden."
    },
    {
        "id": "q_es_044",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Gewürz verleiht indischem Gelb-Curry seine charakteristische leuchtend gelbe Farbe?",
        "answers": [
            "Kreuzkümmel",
            "Koriander",
            "Cayennepfeffer",
            "Kurkuma (Gelbwurz)"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "💛 Kurkuma enthält den natürlichen Farbstoff Curcumin."
    },
    {
        "id": "q_es_045",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was beschreibt der Sommelier-Begriff 'Tannine' bei Rotwein?",
        "answers": [
            "Pflanzliche Gerbstoffe aus der Traubenschale",
            "Der Gesamtzuckergehalt im Fass",
            "Der Kohlensäuregehalt",
            "Der Alkoholgehalt in Prozent"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍷 Tannine sorgen für ein trockenes, zusammenziehendes Gefühl im Mund."
    },
    {
        "id": "q_es_046",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Getreide werden traditionell italienische Gnocchi NICHT hergestellt?",
        "answers": [
            "Hartweizen",
            "Gnocchi sind aus Kartoffeln",
            "Maisgrieß",
            "Dinkelmehl"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥔 Klassische Gnocchi bestehen aus gekochten Kartoffeln, Mehl und Ei."
    },
    {
        "id": "q_es_047",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches alkoholfreie Erfrischungsgetränk erfand der Apotheker John Pemberton 1886 in Atlanta?",
        "answers": [
            "Pepsi",
            "Fanta",
            "Coca-Cola",
            "7Up"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥤 Pemberton entwickelte Coca-Cola ursprünglich als Sirup gegen Kopfschmerzen."
    },
    {
        "id": "q_es_048",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was ist Wasabi, das scharfe grüne Paste-Gewürz beim Sushi?",
        "answers": [
            "Grüne Chilisorte",
            "Zerdrückte Avocadokern-Paste",
            "Gefärbter Senf",
            "Japanischer Meerrettich"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌿 Echter Wasabi wird aus dem Wurzelstock des Wassermeerrettichs gewonnen."
    },
    {
        "id": "q_es_049",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Käse schmilzt hervorragend und wird traditionell für Schweizer Käsefondue genutzt?",
        "answers": [
            "Gruyère und Appenzeller",
            "Gouda und Tilsiter",
            "Camembert und Brie",
            "Feta und Halloumi"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧀 Schweizer Fondue beruht meist auf würzigem Gruyère (AOP) und Vacherin oder Appenzeller."
    },
    {
        "id": "q_es_050",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was für eine Speise ist ein Miso-Soup Hauptbestandteil der japanischen Küche?",
        "answers": [
            "Gedämpfte Ente",
            "Suppe aus fermentierter Sojabohnenpaste",
            "Ein Reis-Dessert",
            "Ein roher Fischsalat"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥣 Miso wird aus Sojabohnen, Salz und Kōji-Pilzkulturen hergestellt."
    },
    {
        "id": "q_es_051",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land kommt der sprudelnde Schaumwein 'Prosecco'?",
        "answers": [
            "Frankreich",
            "Spanien",
            "Italien",
            "Deutschland"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥂 Prosecco ist eine geschützte Herkunftsbezeichnung aus Nordostitalien."
    },
    {
        "id": "q_es_052",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Pflanze wird der mexikanische Schnaps Tequila gebrannt?",
        "answers": [
            "Kaktus",
            "Zuckerrohr",
            "Mais",
            "Blaue Agave"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌵 Tequila wird aus dem Herz der blauen Weber-Agave gewonnen."
    },
    {
        "id": "q_es_053",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher rote Farbstoff in Tomaten wirkt als starkes Antioxidans?",
        "answers": [
            "Lycopin",
            "Karotin",
            "Chlorophyll",
            "Anthocyan"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🍅 Lycopin ist ein Carotinoid, das Tomaten ihre rote Farbe verleiht."
    },
    {
        "id": "q_es_054",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie heißen die kleinen bunten Baisers aus Mandelmehl und Puderzucker aus Frankreich?",
        "answers": [
            "Muffins",
            "Macarons",
            "Eclairs",
            "Profiteroles"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧁 Macarons sind ein französisches Gebäck aus Eischnee, Puderzucker und Mandelmehl."
    },
    {
        "id": "q_es_055",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Obst enthält das Enzym 'Papain', das Fleisch besonders zart machen kann?",
        "answers": [
            "Ananas",
            "Kiwi",
            "Papaya",
            "Mango"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥭 Papain spaltet Eiweißketten auf und wird als natürlicher Weichmacher genutzt."
    },
    {
        "id": "q_es_056",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was ist die Hauptzutat von Hummus, dem beliebten orientaIischen Brotaufstrich?",
        "answers": [
            "Linsen",
            "Ackerbohnen",
            "Erdnüsse",
            "Kichererbsen"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧆 Hummus wird aus pürierten Kichererbsen, Sesammus (Tahina), Olivenöl und Zitronensaft gemacht."
    },
    {
        "id": "q_es_057",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Land produzierte 2022 weltweit das meiste Olivenöl?",
        "answers": [
            "Spanien",
            "Italien",
            "Griechenland",
            "Tunesien"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🫒 Spanien stellt fast die Hälfte des weltweiten Olivenöls her."
    },
    {
        "id": "q_es_058",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Fleisch wird ein echtes 'Wiener Schnitzel' im Original zubereitet?",
        "answers": [
            "Schweinefleisch",
            "Kalbfleisch",
            "Putenfleisch",
            "Rindfleisch"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥩 Ein echtes Wiener Schnitzel muss laut Lebensmittelrecht aus Kalbfleisch bestehen (sonst: 'Schnitzel Wiener Art')."
    },
    {
        "id": "q_es_059",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Zutat verleiht dem Hefeteig beim Backen seine Elastizität und Gaskraft?",
        "answers": [
            "Stärke",
            "Laktose",
            "Gluten (Klebereiweiß)",
            "Fruktose"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍞 Gluten bildet im Teig ein elastisches Netz, das die Gärgase der Hefe einfängt."
    },
    {
        "id": "q_es_060",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches erfrischende Heiß- oder Kaltgetränk wird aus den Blättern der Ilex-Pflanze in Südamerika getrunken?",
        "answers": [
            "Rooibos-Tee",
            "Karkadeh",
            "Chai",
            "Mate-Tee"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧉 Yerba Mate wird traditionell aus einer Kalabasse mit einem Metallstrohhalm (Bombilla) getrunken."
    },
    {
        "id": "q_es_061",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie heißt die traditionelle vietnamesische Nudelsuppe mit Kräutern und Rind- oder Hühnerfleisch?",
        "answers": [
            "Pho",
            "Ramen",
            "Roti",
            "Tom Yum"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍜 Phở ist das Nationalgericht Vietnams und wird oft schon zum Frühstück gegessen."
    },
    {
        "id": "q_es_062",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt der cremige Weißschimmelkäse 'Camembert'?",
        "answers": [
            "Schweiz",
            "Frankreich",
            "Italien",
            "Niederlande"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧀 Camembert stammt aus dem gleichnamigen Dorf in der Normandie."
    },
    {
        "id": "q_es_063",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Gewürz besteht aus den getrockneten Blütenknospen des Gewürznelkenbaums?",
        "answers": [
            "Piment",
            "Kardamom",
            "Nelke",
            "Sternanis"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🕯️ Gewürznelken sind die ungeöffneten Blütenknospen des Nelkenbaums."
    },
    {
        "id": "q_es_064",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Region Frankreichs muss ein Schaumwein stammen, um 'Champagner' genannt zu werden?",
        "answers": [
            "Bordeaux",
            "Bourgogne",
            "Alsace",
            "Champagne"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍾 Nur Schaumweine aus der Weinbauregion Champagne dürfen die Bezeichnung Champagner tragen."
    },
    {
        "id": "q_es_065",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Vitamin bildet der menschliche Körper mithilfe von Sonnenlicht in der Haut?",
        "answers": [
            "Vitamin D",
            "Vitamin C",
            "Vitamin B12",
            "Vitamin A"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "☀️ Vitamin D3 wird durch UV-B-Strahlung in der Haut synthetisiert."
    },
    {
        "id": "q_es_066",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was ist die Hauptzutat der griechischen Vorspeise 'Tzatziki' neben Knoblauch?",
        "answers": [
            "Feta und Tomaten",
            "Griechischer Joghurt und Gurke",
            "Kichererbsen und Öl",
            "Aubergine und Zwiebeln"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥒 Tzatziki besteht aus entwässertem Joghurt, Raspelgurken, Knoblauch und Olivenöl."
    },
    {
        "id": "q_es_067",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Frucht hat die Kerne auf der Außenseite ihrer Haut liegen?",
        "answers": [
            "Himbeere",
            "Feige",
            "Erdbeere",
            "Kiwi"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍓 Die gelben Körnchen auf der Erdbeere sind die eigentlichen Früchte (Nüsschen)."
    },
    {
        "id": "q_es_068",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Getreide wird die klassische italienische Polenta hergestellt?",
        "answers": [
            "Weizengrieß",
            "Dinkelgrieß",
            "Gerstengrieß",
            "Maisgrieß"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌽 Polenta ist ein fester oder breiiger Maisgrießbrei."
    },
    {
        "id": "q_es_069",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was versteht man unter 'Blanchieren' in der Profiküche?",
        "answers": [
            "Kurzes Kochen in kochendem Wasser mit anschließendem Eisbad",
            "Langes Schmoren im geschlossenen Topf",
            "Überbacken im Ofen bei Oberhitze",
            "Einlegen in Essigsud"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥦 Blanchieren erhält die knackige Farbe und Struktur von Gemüse."
    },
    {
        "id": "q_es_070",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Nussart ähnelt die Cashewnuss botanisch nicht, weil sie an einer Scheinfrucht wächst?",
        "answers": [
            "Erdnuss-Strauch",
            "Cashew-Apfel",
            "Kokospalme",
            "Kakaobaum"
        ],
        "correct": 1,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🍎 Der Cashewkern ist der Samen des Cashew-Apfels, einer verdickten Fruchtform."
    },
    {
        "id": "q_es_071",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie nennt man den süßen Sirup, der in Kanada traditionell aus Baumsaft gewonnen wird?",
        "answers": [
            "Zuckerrübensirup",
            "Agavendicksaft",
            "Ahornsirup",
            "Rattansirup"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍁 Ahornsirup wird im Frühjahr durch Anzapfen des Zucker-Ahorns gewonnen."
    },
    {
        "id": "q_es_072",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das scharfe Fleischgericht 'Chili con Carne' ursprünglich?",
        "answers": [
            "Mexiko",
            "Brasilien",
            "Spanien",
            "USA (Texas)"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🤠 Chili con Carne ist ein Tex-Mex-Gericht aus dem US-Bundesstaat Texas."
    },
    {
        "id": "q_es_073",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Gemüsesorte liefert die Grundzutat für das süß-säuerliche Sauerkraut?",
        "answers": [
            "Weißkohl",
            "Rotkohl",
            "Wirsing",
            "Blumenkohl"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥬 Sauerkraut entsteht durch Milchsäuregärung von feingehobeltem Weißkohl."
    },
    {
        "id": "q_es_074",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Meeresgetränk oder -lebensmittel wird in Japan als 'Nori' bezeichnet?",
        "answers": [
            "Gedämpfter Tintenfisch",
            "Getrocknete Rotalgenblätter",
            "Roher Thunfisch",
            "Seetang-Essig"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍱 Nori-Blätter werden zum Wickeln von Sushi-Rollen (Maki) verwendet."
    },
    {
        "id": "q_es_075",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Pflanzenteil wird echter Vanillezucker beziehungsweise das Vanillearoma gewonnen?",
        "answers": [
            "Baumrinde",
            "Blütenblatt",
            "Orchideen-Kapselblatt (Schote)",
            "Wurzelknolle"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍦 Die Echte Vanille ist eine kletternde Orchideenart."
    },
    {
        "id": "q_es_076",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Schafskäse reift traditionell in Salzlake und ist ein Wahrzeichen der griechischen Küche?",
        "answers": [
            "Halloumi",
            "Manouri",
            "Gouda",
            "Feta"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧀 Feta darf seit 2002 nur in Griechenland aus Schafs- und Ziegenmilch erzeugt werden."
    },
    {
        "id": "q_es_077",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie heißt der italienische Ausdruck für Speiseeis auf Milch- oder Fruchtbasis?",
        "answers": [
            "Gelato",
            "Sorbet",
            "Granita",
            "Parfait"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍨 Gelato unterscheidet sich von US-Ice-Cream durch geringeren Fettgehalt und weniger Luftaufschlag."
    },
    {
        "id": "q_es_078",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Cocktail besteht aus Weißem Rum, Limettensaft, Minze, Zucker und Soda?",
        "answers": [
            "Caipirinha",
            "Mojito",
            "Pina Colada",
            "Daiquiri"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍹 Der Mojito ist ein kubanischer Klassiker."
    },
    {
        "id": "q_es_079",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Bohne wird der beliebte Brotaufstrich Erdnussbutter gefertigt?",
        "answers": [
            "Baumnuss",
            "Cashewnuss",
            "Erdnuss (Hülsenfrucht)",
            "Kakaobohne"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥜 Die Erdnuss ist botanisch gesehen keine Nuss, sondern eine Hülsenfrucht."
    },
    {
        "id": "q_es_080",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches chemische Element sorgt beim Backen mit Backpulver für das Aufgehen des Teigs?",
        "answers": [
            "Sauerstoff",
            "Stickstoff",
            "Wasserstoff",
            "Kohlendioxid (CO2)"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍰 Natron reagiert mit Säure im Backpulver zu CO2-Gasbläschen."
    },
    {
        "id": "q_es_081",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das Gericht 'Haggis' (gefüllter Schafsmagen)?",
        "answers": [
            "Schottland",
            "Irland",
            "Wales",
            "England"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Haggis ist die schottische Nationalspeise aus Innereien, Hafermehl und Gewürzen."
    },
    {
        "id": "q_es_082",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher rote Farbstoff 'E120' in manchen Lebensmitteln wird aus Schildläusen gewonnen?",
        "answers": [
            "Betanin",
            "Karmin",
            "Carotin",
            "Curcumin"
        ],
        "correct": 1,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🐞 Echtes Karmin wird aus getrockneten weiblichen Cochenille-Schildläusen extrahiert."
    },
    {
        "id": "q_es_083",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie nennt man die Zubereitung von Rinderfilet in einem Mantel aus Pilzfarce und Blätterteig?",
        "answers": [
            "Chateaubriand",
            "Boeuf Bourguignon",
            "Filet Wellington",
            "Rindergeschnetzeltes"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥩 Filet Wellington ist ein Klassiker der Festtagsküche."
    },
    {
        "id": "q_es_084",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Öl wird traditionell für die Zubereitung von echtem Pesto Genovese verwendet?",
        "answers": [
            "Sonnenblumenöl",
            "Rapsöl",
            "Sesamöl",
            "Olivenöl extra vergine"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌿 Pesto Genovese besteht aus Basilikum, Pinienkernen, Parmesan/Pecorino, Knoblauch und feinstem Olivenöl."
    },
    {
        "id": "q_es_085",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Nuss wird das kostbare Speiseöl hergestellt, das oft zu Feldsalat gereicht wird?",
        "answers": [
            "Walnuss",
            "Kokosnuss",
            "Erdnuss",
            "Kastanien"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥗 Walnussöl besitzt ein intensiv nussiges Aroma und viele Omega-3-Fettsäuren."
    },
    {
        "id": "q_es_086",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Getreide wird der mexikanische Fladen namens 'Tortilla' im Original hergestellt?",
        "answers": [
            "Weizen",
            "Mais",
            "Reis",
            "Gerste"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🌽 Traditionelle mexikanische Tortillas bestehen aus nixtamalisiertem Maisteig (Masa)."
    },
    {
        "id": "q_es_087",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Frucht wird auch als 'Chinesische Stachelbeere' bezeichnet?",
        "answers": [
            "Lychee",
            "Kaki",
            "Kiwi",
            "Passionsfrucht"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥝 Die Kiwi stammt ursprünglich aus China und erhielt in Neuseeland ihren heutigen Namen."
    },
    {
        "id": "q_es_088",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das würzige Pfannengericht 'Nasi Goreng'?",
        "answers": [
            "Indien",
            "Japan",
            "Vietnam",
            "Indonesien"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍚 'Nasi Goreng' bedeutet auf Indonesisch wörtlich 'gebratener Reis'."
    },
    {
        "id": "q_es_089",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was beschreibt die 'Maillard-Reaktion' beim Kochen und Braten?",
        "answers": [
            "Die Bräunung und Komplexbildung von Aminosäuren und Zucker",
            "Das Schmelzen von Fett bei niedriger Hitze",
            "Das Gerinnen von Eiklar in kochendem Wasser",
            "Die Gärung von Fruchtzucker zu Alkohol"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🥩 Die Maillard-Reaktion erzeugt die Röstaromen bei gebratenem Fleisch, Brot und Kaffee."
    },
    {
        "id": "q_es_090",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Zutat verleiht dem italienischen Gericht 'Risotto al Nero di Seppia' seine schwarze Farbe?",
        "answers": [
            "Schwarzer Sesam",
            "Sepia-Tinte vom Tintenfisch",
            "Aktivkohle",
            "Dunkle Sojasauce"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🦑 Die Tinte des Tintenfischs gibt dem Reis ein intensiv meeresfrisches Aroma und dunkle Farbe."
    },
    {
        "id": "q_es_091",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches alkoholfreie Heißgetränk schützt laut Studien durch Flavonoide die Herz-Kreislauf-Gesundheit?",
        "answers": [
            "Zuckerlimonade",
            "Energie-Drinks",
            "Grüner Tee / Kakao",
            "Eistee aus Konzentrat"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍵 Grüner Tee enthält reichlich Polyphenole und Antioxidantien."
    },
    {
        "id": "q_es_092",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie nennt man die Zubereitung von Milch, bei der Fküssigkeit unter Druck homgenisiert und keimfrei erhitzt wird?",
        "answers": [
            "Fermentieren",
            "Destillieren",
            "Kondensieren",
            "Pasteurisieren / UHT-Erhitzung"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥛 Louis Pasteur erfand die Schonreimung durch kurzes Erhitzen."
    },
    {
        "id": "q_es_093",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Gewürz ziert die Schale der Muskatnuss und wird als 'Muskatblüte' bezeichnet?",
        "answers": [
            "Macis",
            "Anis",
            "Piment",
            "Kardamom"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🌺 Macis ist der getrocknete Samenmantel der Muskatnuss."
    },
    {
        "id": "q_es_094",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Meeresgetier gilt in der gehobenen Küche als rohe Delikatesse aus der Schale?",
        "answers": [
            "Miesmuschel",
            "Auster",
            "Garnele",
            "Jakobsmuschel"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🦪 Austern werden oft lebend schlachtfrisch mit etwas Zitrone geschlürft."
    },
    {
        "id": "q_es_095",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das süße Gebäck 'Trdelník' (Baumkuchen-Variante auf der Rolle)?",
        "answers": [
            "Italien",
            "Spanien",
            "Tschechien / Slowakei",
            "Griechenland"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥮 Trdelník wird um Holzrollen gewickelt über offenem Feuer gebacken."
    },
    {
        "id": "q_es_096",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie nennt man das japanische Panermehl aus weißem Rindenbrot ohne Kruste?",
        "answers": [
            "Tempura",
            "Katsu",
            "Pico",
            "Panko"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍤 Panko-Flocken sind grober als Paniermehl und machen Frittiertes extrem knusprig."
    },
    {
        "id": "q_es_097",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Bundesland ist berühmt für 'Thüringer Rostbratwurst'?",
        "answers": [
            "Thüringen",
            "Sachsen",
            "Bayern",
            "Brandenburg"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌭 Die Thüringer Rostbratwurst hat eine jahrhundertealte Tradition mit Kümmel und Majoran."
    },
    {
        "id": "q_es_098",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Pflanzensaft gibt dem Trendgetränk 'Bubble Tea' seine perlenartige Textur (Tapioka)?",
        "answers": [
            "Kartoffelstärke",
            "Maniok-Wurzelstärke",
            "Maisstärke",
            "Sojamehl"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧋 Tapioka-Perlen werden aus der gestärkten Wurzel der Maniokpflanze hergestellt."
    },
    {
        "id": "q_es_099",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Pflanzenteil wird der aromatische Kümmel gewonnen?",
        "answers": [
            "Wurzel",
            "Blatt",
            "Samen / Früchte",
            "Rinde"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌿 Echter Kümmel gehört zu den Doldenblütlern."
    },
    {
        "id": "q_es_100",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Cocktailslassiker aus Brasilien besteht aus Cachaça, Limette, Rohrfeinzucker und Crushed Ice?",
        "answers": [
            "Margarita",
            "Piña Colada",
            "Pisco Sour",
            "Caipirinha"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍹 Caipirinha wird mit dem brasilianischen Zuckerrohrschnaps Cachaça gemixt."
    },
    {
        "id": "q_es_101",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Gewürz verleiht dem indischen Teering-Getränk 'Chai' seine Schärfe?",
        "answers": [
            "Ingwer und Pfeffer",
            "Muskat und Senf",
            "Chili und Wasabi",
            "Paprika und Oregano"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "☕ Masala Chai enthält meist Kardamom, Zimt, Nelken, Ingwer und Pfefferkörner."
    },
    {
        "id": "q_es_102",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie nennt man die Technik, Schokolade langsam unter Rühren abzukühlen und zu erwärmen, um Glanz zu erzeugen?",
        "answers": [
            "Karamelisieren",
            "Temperieren",
            "Kandieren",
            "Conchieren"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍫 Beim Temperieren bildet die Kakaobutter stabile Fettkristalle für den perfekten 'Knack'."
    },
    {
        "id": "q_es_103",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Getreide ist glutenfrei und eignet sich für Menschen mit Zöliakie?",
        "answers": [
            "Weizen und Gerste",
            "Dinkel und Roggen",
            "Reis und Mais",
            "Grünkern und Emmer"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌾 Reis, Mais, Hirse, Buchweizen und Quinoa enthalten von Natur aus kein Gluten."
    },
    {
        "id": "q_es_104",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches fette Öl wird aus dem Fruchtfleisch der Olivenfrucht gepresst?",
        "answers": [
            "Kürbiskernöl",
            "Traubenkernöl",
            "Sesamöl",
            "Olivenöl"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🫒 Olivenöl gehört zu den tragenden Säulen der gesunden Mittelmeer-Diät."
    },
    {
        "id": "q_es_105",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das deftige Nationalgericht 'Gulasch'?",
        "answers": [
            "Ungarn",
            "Österreich",
            "Tschechien",
            "Polen"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🇭🇺 Das ungarische 'Gulyás' war ursprünglich eine Suppe der Rinderhirten."
    },
    {
        "id": "q_es_106",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was versteht man unter 'Sauerteig' beim Brotbacken?",
        "answers": [
            "In Essig getränkter Hefeteig",
            "Teig mit einer Symbiose aus Milchsäurebakterien und Hefen",
            "Teig aus reiner Zitronensäure",
            "Abgestandener Brotteig"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍞 Sauerteig macht Roggenmehl backfähig und verleiht dem Brot ein aromatisches Aroma."
    },
    {
        "id": "q_es_107",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das berühmte Gericht 'Tacos'?",
        "answers": [
            "Spanien",
            "Peru",
            "Mexiko",
            "Argentinien"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌮 Tacos sind kleine Mais-Fladen mit verschiedenen Füllungen aus Fleisch, Bohnen und Salsa."
    },
    {
        "id": "q_es_108",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Pilz wird auch als 'König der Pilze' bezeichnet und hat eine feste braune Kappe?",
        "answers": [
            "Champignon",
            "Austernpilz",
            "Pfifferling",
            "Steinpilz"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍄 Der Steinpilz hat ein festes, nussiges Fleisch und ist in der Küche hochbegehrt."
    },
    {
        "id": "q_es_109",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche rote Frucht galt früher fälschlicherweise als 'Paradiesapfel' oder 'Liebesapfel'?",
        "answers": [
            "Tomate",
            "Erdbeere",
            "Granatapfel",
            "Aronia"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🍅 In Österreich wird die Tomate heute noch als 'Par paradeiser' bezeichnet."
    },
    {
        "id": "q_es_110",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammen die gefüllten Teigtaschen namens 'Pierogi'?",
        "answers": [
            "Italien",
            "Polen",
            "China",
            "Türkei"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥟 Pierogi sind traditionelle polnische Teigtaschen mit Kartoffeln, Quark oder Fleisch."
    },
    {
        "id": "q_es_111",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches fette Säureprofil zeichnet Olivenöl und Avocados besonders positiv aus?",
        "answers": [
            "Gesättigte Transfettsäuren",
            "Reine Cholesterinfette",
            "Einfach ungesättigte Fettsäuren",
            "Mehrfach gehärtete Fette"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥑 Einfach ungesättigte Fettsäuren wirken sich günstig auf den Cholesterinspiegel aus."
    },
    {
        "id": "q_es_112",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Wie nennt man die feinen Fäden aus Eiklar und Puderzucker auf Kuchen wie dem Zitronenbaiser?",
        "answers": [
            "Ganache",
            "Fondant",
            "Marzipan",
            "Baiser (Meringue)"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥧 Baiser entsteht aus steif geschlagenem Eiweiß und Zucker."
    },
    {
        "id": "q_es_113",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Land stammt das frittierte Teiggebäck 'Churros', das oft in heiße Schokolade getunkt wird?",
        "answers": [
            "Spanien",
            "Mexiko",
            "Italien",
            "Frankreich"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍫 Churros sind langgezogene Brandteig-Stangen aus Spanien."
    },
    {
        "id": "q_es_114",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welche Kaffeeart zeichnet sich durch feine Säure, komplexe Aromen und Anbau in Höhenlagen aus?",
        "answers": [
            "Robusta",
            "Arabica",
            "Liberica",
            "Excelsa"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "☕ Coffea Arabica stellt etwa 60% der weltweiten Kaffeeproduktion dar."
    },
    {
        "id": "q_es_115",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welcher Käse stammt aus den Niederlanden und ist nach einer Stadt in Südholland benannt?",
        "answers": [
            "Edamer",
            "Maasdammer",
            "Gouda",
            "Leerdammer"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧀 Gouda wird seit dem Mittelalter in der holländischen Stadt Gouda gehandelt."
    },
    {
        "id": "q_es_116",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Was beschreibt der Begriff 'Sommelier'?",
        "answers": [
            "Ein Chefkoch für Fischgerichte",
            "Ein Patissier für Schokoladen",
            "Ein Spezialist für Frischfleisch",
            "Ein ausgebildeter Weinexperte in der Gastronomie"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍷 Der Sommelier berät Gäste im Restaurant bezüglich der passenden Weinbegleitung."
    },
    {
        "id": "q_es_117",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welchem Meeresfisch wird der klassische norwegische Räucherlachs gewonnen?",
        "answers": [
            "Atlantischer Lachs",
            "Pazifischer Wildlachs",
            "Kabeljau",
            "Makrele"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐟 Atlantischer Lachs (Salmo salar) ist der klassische Speisefisch."
    },
    {
        "id": "q_es_118",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Gewürz gibt dem Glühwein und Pfefferkuchen seinen weihnachtlichen Duft?",
        "answers": [
            "Koriander und Oregano",
            "Sternanis, Nelken und Zimt",
            "Thymian und Rosmarin",
            "Senfkörner und Dill"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎄 Diese klassischen Weihnachtsgewürze verleihen Gebäck und Glühwein ihren Charakter."
    },
    {
        "id": "q_es_119",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Welches Süßungsmittel wird aus der Kaktus-ähnlichen Pflanze Agave gewonnen?",
        "answers": [
            "Ahornsirup",
            "Melasse",
            "Agavendicksaft",
            "Birnendicksaft"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌵 Agavendicksaft hat eine hohe Süßkraft und löst sich leicht in kalten Getränken."
    },
    {
        "id": "q_es_120",
        "category": "spass_essen",
        "area": "spass",
        "subject": "essen_trinken",
        "question": "Aus welcher Bohne wird der beliebte Schokoladen-Brotaufstrich gefertigt?",
        "answers": [
            "Kaffeebohne",
            "Sojabohne",
            "Mungbohne",
            "Kakaobohne"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍫 Kakaobohnen sind der Rohstoff für Kakao, Kakaobutter und Schokolade."
    }
];

if (typeof window !== 'undefined') {
    if (!window.FUN_QUESTIONS) {
        window.FUN_QUESTIONS = [];
    }
    window.FUN_QUESTIONS = window.FUN_QUESTIONS.concat(SPASS_ESSEN_QUESTIONS);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SPASS_ESSEN_QUESTIONS;
}
