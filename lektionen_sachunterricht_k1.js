// Sachunterricht Klasse 1 - Tiere und Pflanzen, Jahreszeiten, Koerper, Verkehr
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/su/k1d1..k1d4.js.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "tiere_k1", title: "Tiere und Pflanzen", icon: "🐾", grade: 1, subject: "sachunterricht", beschreibung: "Bauernhof und Tierkinder, Tiere im Wald und im Winter, wie Pflanzen wachsen." },
        { id: "jahreszeiten_k1", title: "Jahreszeiten und Wetter", icon: "🌦️", grade: 1, subject: "sachunterricht", beschreibung: "Die vier Jahreszeiten, das Wetter und die passende Kleidung." },
        { id: "koerper_k1", title: "Mein Körper", icon: "🧒", grade: 1, subject: "sachunterricht", beschreibung: "Die fünf Sinne, gesund bleiben und was in unserem Körper steckt." },
        { id: "verkehr_k1", title: "Sicher unterwegs", icon: "🚦", grade: 1, subject: "sachunterricht", beschreibung: "Ampel und Zebrastreifen, der sichere Schulweg und wie man Hilfe holt." }
    ];
    const extraLektionen = [
    {
        id: "tier_k1_l1", kurs: "tiere_k1", order: 1, icon: "🐄",
        title: "Bauernhof und Tierkinder", kurz: "Kuh, Kalb, Küken",
        erklaerung: {
            intro: "Auf dem <b>Bauernhof</b> leben viele Tiere. Sie geben uns Milch, Eier und Wolle. Jedes Tier hat einen eigenen Namen für sein <b>Kind</b>: Die Kuh hat ein <b>Kalb</b>, das Huhn ein <b>Küken</b>.",
            beispiele: ["🐄 Kuh → Kalb",
                "🐑 Schaf → Lamm",
                "🐔 Huhn → Küken"],
            merksatz: "Kuh – Kalb, Pferd – Fohlen, Schaf – Lamm, Schwein – Ferkel, Huhn – Küken."
        },
        uebung: {
            leicht: [
                {
                    id: "tierk1l1_l1", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "🥛 Welches Tier gibt uns Milch?", answers: ["🐄 Kuh", "🐔 Huhn", "🐷 Schwein", "🐶 Hund"], correct: 0,
                    explanation: "Die Kuh gibt Milch."
                },
                {
                    id: "tierk1l1_l2", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "🥚 Welches Tier legt Eier?", answers: ["🐔 Huhn", "🐄 Kuh", "🐷 Schwein", "🐶 Hund"], correct: 0,
                    explanation: "Das Huhn legt Eier."
                },
                {
                    id: "tierk1l1_l3", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "Welches Tier gibt uns Wolle?", answers: ["🐑 Schaf", "🐔 Huhn", "🐷 Schwein", "🐄 Kuh"], correct: 0,
                    explanation: "Aus Schafwolle macht man Pullover."
                },
                {
                    id: "tierk1l1_l4", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "🐄 Wie heißt das Kind der Kuh?", answers: ["Kalb", "Fohlen", "Lamm", "Ferkel"], correct: 0,
                    explanation: "Die Kuh hat ein Kalb."
                }
            ],
            mittel: [
                {
                    id: "tierk1l1_m1", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🐷 Wie heißt das Kind vom Schwein?", answers: ["Ferkel", "Kalb", "Fohlen", "Küken"], correct: 0,
                    explanation: "Das Schwein hat Ferkel."
                },
                {
                    id: "tierk1l1_m2", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🐴 Wie heißt das Kind vom Pferd?", answers: ["Fohlen", "Ferkel", "Kalb", "Lamm"], correct: 0,
                    explanation: "Das Pferd hat ein Fohlen."
                },
                {
                    id: "tierk1l1_m3", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🐑 Wie heißt das Kind vom Schaf?", answers: ["Lamm", "Kalb", "Fohlen", "Ferkel"], correct: 0,
                    explanation: "Das Schaf hat ein Lamm."
                },
                {
                    id: "tierk1l1_m4", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🐶 Wie heißt das Kind vom Hund?", answers: ["Welpe", "Küken", "Lamm", "Fohlen"], correct: 0,
                    explanation: "Der Hund hat Welpen."
                }
            ],
            schwer: [
                {
                    id: "tierk1l1_s1", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Was schlüpft aus dem Hühnerei?", answers: ["🐣 Küken", "🐱 Kätzchen", "🐷 Ferkel", "🐶 Welpe"], correct: 0,
                    explanation: "Aus dem Ei schlüpft ein Küken."
                },
                {
                    id: "tierk1l1_s2", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Wer kräht morgens auf dem Bauernhof?", answers: ["🐓 Hahn", "🐄 Kuh", "🐷 Schwein", "🐑 Schaf"], correct: 0,
                    explanation: "Der Hahn kräht: Kikeriki!"
                },
                {
                    id: "tierk1l1_s3", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Was frisst eine Kuh?", answers: ["🌾 Gras und Heu", "🐟 Fisch", "🍖 Fleisch", "🍫 Schokolade"], correct: 0,
                    explanation: "Kühe fressen Gras und Heu."
                },
                {
                    id: "tierk1l1_s4", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Welches Tier lebt NICHT auf dem Bauernhof?", answers: ["🦁 Löwe", "🐄 Kuh", "🐷 Schwein", "🐔 Huhn"], correct: 0,
                    explanation: "Der Löwe lebt in der Savanne."
                }
            ]
        },
        test: [
                {
                    id: "tierk1l1_t1", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welches Tier kann auch Eier legen?", answers: ["🦆 Ente", "🐄 Kuh", "🐑 Schaf", "🐴 Pferd"], correct: 0,
                    explanation: "Enten legen Eier."
                },
                {
                    id: "tierk1l1_t2", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🐔 Wie heißt das Kind vom Huhn?", answers: ["Küken", "Kalb", "Ferkel", "Welpe"], correct: 0,
                    explanation: "Das Huhn hat Küken."
                },
                {
                    id: "tierk1l1_t3", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Von welchem Tier kommt auch Milch?", answers: ["🐐 Ziege", "🐔 Huhn", "🦆 Ente", "🐓 Hahn"], correct: 0,
                    explanation: "Es gibt auch Ziegenmilch."
                },
                {
                    id: "tierk1l1_t4", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🐱 Wie heißt das Kind der Katze?", answers: ["Kätzchen", "Welpe", "Fohlen", "Küken"], correct: 0,
                    explanation: "Die Katze hat Kätzchen."
                },
                {
                    id: "tierk1l1_t5", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Wo schlafen Kühe auf dem Bauernhof?", answers: ["im Stall", "im Nest", "im Teich", "im Baum"], correct: 0,
                    explanation: "Kühe schlafen im Stall."
                },
                {
                    id: "tierk1l1_t6", category: "kurs_tier_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welches Tier macht „Muh“?", answers: ["🐄 Kuh", "🐷 Schwein", "🐑 Schaf", "🐔 Huhn"], correct: 0,
                    explanation: "Die Kuh macht Muh."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "tier_k1_l2", kurs: "tiere_k1", order: 2, icon: "🦔",
        title: "Wald und Winter", kurz: "Winterschlaf und Zugvögel",
        erklaerung: {
            intro: "Im <b>Wald</b> leben Igel, Fuchs, Eichhörnchen und Specht. Im <b>Winter</b> ist es kalt und es gibt wenig Futter. Manche Tiere halten <b>Winterschlaf</b>. Manche Vögel fliegen in den warmen <b>Süden</b> – das sind <b>Zugvögel</b>.",
            beispiele: ["🦔 Igel – hält Winterschlaf",
                "🐿️ Eichhörnchen – versteckt Nüsse",
                "Storch – fliegt in den Süden"],
            merksatz: "Igel und Fledermaus halten Winterschlaf. Zugvögel fliegen im Herbst in den Süden."
        },
        uebung: {
            leicht: [
                {
                    id: "tierk1l2_l1", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "Welches Tier hält Winterschlaf?", answers: ["🦔 Igel", "🐶 Hund", "🐄 Kuh", "🐔 Huhn"], correct: 0,
                    explanation: "Der Igel schläft den ganzen Winter."
                },
                {
                    id: "tierk1l2_l2", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "Welches Tier hat Stacheln?", answers: ["🦔 Igel", "🐰 Hase", "🦊 Fuchs", "🐿️ Eichhörnchen"], correct: 0,
                    explanation: "Der Igel schützt sich mit Stacheln."
                },
                {
                    id: "tierk1l2_l3", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "🐿️ Was versteckt das Eichhörnchen für den Winter?", answers: ["🌰 Nüsse", "🍎 Äpfel", "🐟 Fische", "🥕 Möhren"], correct: 0,
                    explanation: "Es versteckt Nüsse als Vorrat."
                },
                {
                    id: "tierk1l2_l4", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "Welches Tier lebt im Wald?", answers: ["🦊 Fuchs", "🐄 Kuh", "🐷 Schwein", "🐑 Schaf"], correct: 0,
                    explanation: "Der Fuchs lebt im Wald."
                }
            ],
            mittel: [
                {
                    id: "tierk1l2_m1", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Was machen Zugvögel im Herbst?", answers: ["in den Süden fliegen", "Winterschlaf halten", "Nester im Schnee bauen", "ein Fell bekommen"], correct: 0,
                    explanation: "Im Süden ist es warm und es gibt Futter."
                },
                {
                    id: "tierk1l2_m2", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welches Tier fliegt nachts und schläft am Tag?", answers: ["🦇 Fledermaus", "🐦 Spatz", "🐝 Biene", "🐞 Marienkäfer"], correct: 0,
                    explanation: "Die Fledermaus jagt nachts."
                },
                {
                    id: "tierk1l2_m3", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welcher Baum hat auch im Winter grüne Nadeln?", answers: ["🌲 Tanne", "🌳 Eiche", "🍎 Apfelbaum", "🌰 Kastanie"], correct: 0,
                    explanation: "Die Tanne behält ihre Nadeln."
                },
                {
                    id: "tierk1l2_m4", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Was fällt im Herbst von den Laubbäumen?", answers: ["🍂 Blätter", "❄️ Schnee", "🌸 Blüten", "🍄 Pilze"], correct: 0,
                    explanation: "Im Herbst fallen die Blätter."
                }
            ],
            schwer: [
                {
                    id: "tierk1l2_s1", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Wo hält der Igel Winterschlaf?", answers: ["im Laubhaufen", "im Vogelnest", "im Teich", "auf dem Dach"], correct: 0,
                    explanation: "Im Laub ist es geschützt."
                },
                {
                    id: "tierk1l2_s2", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Welches Tier hält KEINEN Winterschlaf?", answers: ["Fuchs", "Igel", "Fledermaus", "Siebenschläfer"], correct: 0,
                    explanation: "Der Fuchs ist auch im Winter wach."
                },
                {
                    id: "tierk1l2_s3", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Was machen viele Tiere im Herbst?", answers: ["Futter sammeln", "Eier legen", "sich sonnen", "ein Sommerfell bekommen"], correct: 0,
                    explanation: "Sie sammeln Vorräte für den Winter."
                },
                {
                    id: "tierk1l2_s4", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Welcher Vogel klopft Löcher in Baumstämme?", answers: ["Specht", "Spatz", "Storch", "Schwan"], correct: 0,
                    explanation: "Der Specht klopft mit dem Schnabel."
                }
            ]
        },
        test: [
                {
                    id: "tierk1l2_t1", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welches Tier hält Winterschlaf?", answers: ["🦇 Fledermaus", "🦊 Fuchs", "🐗 Wildschwein", "🦌 Reh"], correct: 0,
                    explanation: "Fledermäuse schlafen im Winter."
                },
                {
                    id: "tierk1l2_t2", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welcher Vogel fliegt im Herbst in den Süden?", answers: ["Storch", "Spatz", "Taube", "Meise"], correct: 0,
                    explanation: "Der Storch ist ein Zugvogel."
                },
                {
                    id: "tierk1l2_t3", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Was frisst ein Eichhörnchen gern?", answers: ["🌰 Nüsse", "🐟 Fisch", "🍖 Fleisch", "🍬 Bonbons"], correct: 0,
                    explanation: "Eichhörnchen lieben Nüsse."
                },
                {
                    id: "tierk1l2_t4", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welches Tier lebt NICHT im Wald?", answers: ["🐧 Pinguin", "🦊 Fuchs", "🦉 Eule", "🦌 Reh"], correct: 0,
                    explanation: "Pinguine leben am kalten Meer."
                },
                {
                    id: "tierk1l2_t5", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Was macht ein Tier im Winterschlaf?", answers: ["es schläft lange", "es fliegt weg", "es baut ein Nest", "es sucht Futter"], correct: 0,
                    explanation: "Es schläft und spart Kraft."
                },
                {
                    id: "tierk1l2_t6", category: "kurs_tier_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🍂 In welcher Jahreszeit fallen die Blätter?", answers: ["Herbst", "Frühling", "Sommer", "Winter"], correct: 0,
                    explanation: "Im Herbst werden Blätter bunt und fallen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "tier_k1_l3", kurs: "tiere_k1", order: 3, icon: "🌱",
        title: "Pflanzen wachsen", kurz: "Samen, Wasser, Licht",
        erklaerung: {
            intro: "Aus einem kleinen <b>Samen</b> wächst eine Pflanze. Sie braucht <b>Wasser</b>, <b>Licht</b> und <b>Erde</b>. Eine Pflanze hat <b>Wurzeln</b>, einen <b>Stängel</b>, <b>Blätter</b> und oft eine <b>Blüte</b>.",
            beispiele: ["🌱 Samen → Keimling → Pflanze",
                "Die Wurzel holt Wasser aus der Erde",
                "🌻 Die Blüte ist oben an der Pflanze"],
            merksatz: "Pflanzen brauchen Wasser, Licht und Erde."
        },
        uebung: {
            leicht: [
                {
                    id: "tierk1l3_l1", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "🌱 Was braucht eine Pflanze zum Wachsen?", answers: ["Wasser und Licht", "Saft und Kekse", "nur Dunkelheit", "Milch und Zucker"], correct: 0,
                    explanation: "Pflanzen brauchen Wasser und Licht."
                },
                {
                    id: "tierk1l3_l2", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "Woraus wächst eine Pflanze?", answers: ["aus einem Samen", "aus einem Stein", "aus einem Ei", "aus Sand"], correct: 0,
                    explanation: "Aus dem Samen wächst die Pflanze."
                },
                {
                    id: "tierk1l3_l3", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "Welcher Teil der Pflanze steckt in der Erde?", answers: ["die Wurzel", "die Blüte", "das Blatt", "der Stängel"], correct: 0,
                    explanation: "Die Wurzel ist in der Erde."
                },
                {
                    id: "tierk1l3_l4", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "leicht", points: 10,
                    question: "🌻 Welche Farbe hat eine Sonnenblume?", answers: ["gelb", "blau", "schwarz", "lila"], correct: 0,
                    explanation: "Sonnenblumen blühen gelb."
                }
            ],
            mittel: [
                {
                    id: "tierk1l3_m1", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Was macht die Wurzel?", answers: ["holt Wasser aus der Erde", "macht bunte Blüten", "fängt kleine Fliegen", "macht das Licht an"], correct: 0,
                    explanation: "Die Wurzel trinkt für die Pflanze."
                },
                {
                    id: "tierk1l3_m2", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Was wird aus einer Blüte am Apfelbaum?", answers: ["🍎 ein Apfel", "🌰 eine Nuss", "🍐 eine Birne", "🍒 eine Kirsche"], correct: 0,
                    explanation: "Aus der Apfelblüte wird ein Apfel."
                },
                {
                    id: "tierk1l3_m3", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Wo wachsen Pilze gern?", answers: ["im Wald", "in der Wüste", "im Meer", "auf dem Eis"], correct: 0,
                    explanation: "Pilze mögen den feuchten Wald."
                },
                {
                    id: "tierk1l3_m4", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welche Blume blüht schon im Frühling?", answers: ["🌷 Tulpe", "🌻 Sonnenblume", "🌹 Rose", "🎃 Kürbis"], correct: 0,
                    explanation: "Die Tulpe blüht im Frühling."
                }
            ],
            schwer: [
                {
                    id: "tierk1l3_s1", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Woran erkennst du den giftigen Fliegenpilz?", answers: ["rot mit weißen Punkten", "ganz blau", "gelb mit Streifen", "durchsichtig"], correct: 0,
                    explanation: "Rot mit weißen Punkten. Aber viele giftige Pilze sehen harmlos aus – Pilze nie selbst pflücken oder essen!"
                },
                {
                    id: "tierk1l3_s2", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Was passiert mit einer Pflanze ohne Wasser?", answers: ["sie welkt", "sie wächst schneller", "sie blüht", "sie wird blau"], correct: 0,
                    explanation: "Ohne Wasser wird sie schlapp."
                },
                {
                    id: "tierk1l3_s3", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Was kommt zuerst aus dem Samen?", answers: ["ein Keimling", "eine Blüte", "eine Frucht", "ein Baum"], correct: 0,
                    explanation: "Zuerst kommt ein kleiner Keimling."
                },
                {
                    id: "tierk1l3_s4", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "schwer", points: 10,
                    question: "Was holen Bienen aus den Blüten?", answers: ["Nektar", "Wasser", "Erde", "Laub"], correct: 0,
                    explanation: "Aus Nektar machen Bienen Honig."
                }
            ]
        },
        test: [
                {
                    id: "tierk1l3_t1", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Was braucht eine Pflanze NICHT?", answers: ["Schokolade", "Regenwasser", "Sonnenlicht", "Blumenerde"], correct: 0,
                    explanation: "Pflanzen brauchen keine Schokolade."
                },
                {
                    id: "tierk1l3_t2", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welcher Teil der Pflanze ist oft bunt?", answers: ["die Blüte", "die Wurzel", "der Stängel", "die Erde"], correct: 0,
                    explanation: "Blüten sind oft bunt."
                },
                {
                    id: "tierk1l3_t3", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🐝 Was machen Bienen aus Nektar?", answers: ["Honig", "Milch", "Saft", "Käse"], correct: 0,
                    explanation: "Bienen machen Honig."
                },
                {
                    id: "tierk1l3_t4", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Woraus wächst ein Baum?", answers: ["aus einem Samen", "aus einem Stein", "aus Sand", "aus Glas"], correct: 0,
                    explanation: "Auch ein Baum wächst aus einem Samen."
                },
                {
                    id: "tierk1l3_t5", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "🌳 Was hält den Baum fest in der Erde?", answers: ["die Wurzeln", "die Blätter", "die Äste", "die Früchte"], correct: 0,
                    explanation: "Die Wurzeln halten ihn fest."
                },
                {
                    id: "tierk1l3_t6", category: "kurs_tier_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "tiere_pflanzen", difficulty: "mittel", points: 10,
                    question: "Welche Pflanze ist ein Baum?", answers: ["🌳 Eiche", "🌷 Tulpe", "🌻 Sonnenblume", "🌹 Rose"], correct: 0,
                    explanation: "Die Eiche ist ein Baum."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "jz_k1_l1", kurs: "jahreszeiten_k1", order: 1, icon: "🌷",
        title: "Die vier Jahreszeiten", kurz: "Frühling, Sommer, Herbst, Winter",
        erklaerung: {
            intro: "Ein Jahr hat <b>vier Jahreszeiten</b>: <b>Frühling</b>, <b>Sommer</b>, <b>Herbst</b> und <b>Winter</b>. Danach geht es wieder von vorne los.",
            beispiele: ["🌷 Frühling – alles blüht",
                "☀️ Sommer – es ist warm",
                "🍂 Herbst – die Blätter fallen",
                "❄️ Winter – es ist kalt"],
            merksatz: "Frühling – Sommer – Herbst – Winter."
        },
        uebung: {
            leicht: [
                {
                    id: "jzk1l1_l1", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "Wie viele Jahreszeiten hat ein Jahr?", answers: ["4", "2", "3", "12"], correct: 0,
                    explanation: "Frühling, Sommer, Herbst und Winter."
                },
                {
                    id: "jzk1l1_l2", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "❄️ In welcher Jahreszeit schneit es oft?", answers: ["Winter", "Sommer", "Frühling", "Herbst"], correct: 0,
                    explanation: "Schnee gibt es meist im Winter."
                },
                {
                    id: "jzk1l1_l3", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "☀️ In welcher Jahreszeit ist es am wärmsten?", answers: ["Sommer", "Winter", "Herbst", "Frühling"], correct: 0,
                    explanation: "Der Sommer ist am wärmsten."
                },
                {
                    id: "jzk1l1_l4", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "🌷 Wann blühen die ersten Blumen?", answers: ["im Frühling", "im Herbst", "im Winter", "im Sommer"], correct: 0,
                    explanation: "Im Frühling wacht die Natur auf."
                }
            ],
            mittel: [
                {
                    id: "jzk1l1_m1", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was kommt nach dem Sommer?", answers: ["Herbst", "Frühling", "Winter", "Sommer"], correct: 0,
                    explanation: "Nach dem Sommer kommt der Herbst."
                },
                {
                    id: "jzk1l1_m2", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was kommt nach dem Winter?", answers: ["Frühling", "Herbst", "Sommer", "Winter"], correct: 0,
                    explanation: "Nach dem Winter kommt der Frühling."
                },
                {
                    id: "jzk1l1_m3", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was kommt nach dem Herbst?", answers: ["Winter", "Sommer", "Frühling", "Herbst"], correct: 0,
                    explanation: "Nach dem Herbst kommt der Winter."
                },
                {
                    id: "jzk1l1_m4", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "🎃 In welcher Jahreszeit erntet man Kürbisse?", answers: ["Herbst", "Winter", "Frühling", "Sommer"], correct: 0,
                    explanation: "Kürbisse erntet man im Herbst."
                }
            ],
            schwer: [
                {
                    id: "jzk1l1_s1", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Welche Reihenfolge stimmt?", answers: ["Frühling, Sommer, Herbst", "Sommer, Frühling, Herbst", "Herbst, Sommer, Frühling", "Winter, Herbst, Sommer"], correct: 0,
                    explanation: "Frühling, Sommer, Herbst, Winter."
                },
                {
                    id: "jzk1l1_s2", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "🎄 In welcher Jahreszeit ist Weihnachten?", answers: ["Winter", "Sommer", "Frühling", "Herbst"], correct: 0,
                    explanation: "Weihnachten ist im Dezember, im Winter."
                },
                {
                    id: "jzk1l1_s3", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "🥚 In welcher Jahreszeit ist Ostern?", answers: ["Frühling", "Winter", "Sommer", "Herbst"], correct: 0,
                    explanation: "Ostern feiern wir im Frühling."
                },
                {
                    id: "jzk1l1_s4", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "In welcher Jahreszeit sind die Tage am längsten?", answers: ["Sommer", "Winter", "Herbst", "Frühling"], correct: 0,
                    explanation: "Im Sommer ist es lange hell."
                }
            ]
        },
        test: [
                {
                    id: "jzk1l1_t1", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was kommt nach dem Frühling?", answers: ["Sommer", "Winter", "Herbst", "Frühling"], correct: 0,
                    explanation: "Nach dem Frühling kommt der Sommer."
                },
                {
                    id: "jzk1l1_t2", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "⛄ Wann kann man einen Schneemann bauen?", answers: ["im Winter", "im Sommer", "im Frühling", "im Herbst"], correct: 0,
                    explanation: "Schnee gibt es im Winter."
                },
                {
                    id: "jzk1l1_t3", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Wann geht man oft ins Freibad?", answers: ["im Sommer", "im Winter", "im Herbst", "im Frühling"], correct: 0,
                    explanation: "Im Sommer ist es warm genug."
                },
                {
                    id: "jzk1l1_t4", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Wann bekommen die Bäume neue Blätter?", answers: ["im Frühling", "im Herbst", "im Winter", "im Sommer"], correct: 0,
                    explanation: "Im Frühling wachsen neue Blätter."
                },
                {
                    id: "jzk1l1_t5", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "In welcher Jahreszeit sind die Tage am kürzesten?", answers: ["Winter", "Sommer", "Frühling", "Herbst"], correct: 0,
                    explanation: "Im Winter wird es früh dunkel."
                },
                {
                    id: "jzk1l1_t6", category: "kurs_jz_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Nach dem Winter kommt wieder der …", answers: ["Frühling", "Sommer", "Herbst", "Winter"], correct: 0,
                    explanation: "Dann beginnt alles von vorn."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "jz_k1_l2", kurs: "jahreszeiten_k1", order: 2, icon: "🌧️",
        title: "Das Wetter", kurz: "Regen, Schnee, Gewitter",
        erklaerung: {
            intro: "Das <b>Wetter</b> ändert sich jeden Tag: Sonne, Regen, Wind, Schnee oder Gewitter. Mit einem <b>Thermometer</b> misst man, wie warm oder kalt es ist.",
            beispiele: ["🌧️ Regen kommt aus den Wolken",
                "⚡ Erst kommt der Blitz, dann der Donner",
                "🌈 Sonne und Regen zusammen – Regenbogen"],
            merksatz: "Ein Thermometer misst, wie warm es ist."
        },
        uebung: {
            leicht: [
                {
                    id: "jzk1l2_l1", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "🌧️ Woher kommt der Regen?", answers: ["aus den Wolken", "aus der Sonne", "aus dem Mond", "aus den Bäumen"], correct: 0,
                    explanation: "Regen fällt aus den Wolken."
                },
                {
                    id: "jzk1l2_l2", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "🌡️ Womit misst man, wie warm es ist?", answers: ["Thermometer", "Zollstock", "Küchenwaage", "Taschenuhr"], correct: 0,
                    explanation: "Das Thermometer misst die Wärme."
                },
                {
                    id: "jzk1l2_l3", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "❄️ Woraus besteht Schnee?", answers: ["aus Eis", "aus Watte", "aus Zucker", "aus Sand"], correct: 0,
                    explanation: "Schneeflocken sind aus Eis."
                },
                {
                    id: "jzk1l2_l4", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "⛄ Was passiert mit dem Schneemann, wenn es warm wird?", answers: ["er schmilzt", "er wächst", "er friert", "er läuft weg"], correct: 0,
                    explanation: "Bei Wärme schmilzt Schnee."
                }
            ],
            mittel: [
                {
                    id: "jzk1l2_m1", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "🌈 Wann sieht man einen Regenbogen?", answers: ["bei Sonne und Regen", "nur in der Nacht", "bei Schnee und Eis", "bei dichtem Nebel"], correct: 0,
                    explanation: "Die Sonne scheint durch die Regentropfen."
                },
                {
                    id: "jzk1l2_m2", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "⚡ Was hört man nach dem Blitz?", answers: ["Donner", "Musik", "ein Klingeln", "Vogelgesang"], correct: 0,
                    explanation: "Nach dem Blitz donnert es."
                },
                {
                    id: "jzk1l2_m3", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was ist Nebel?", answers: ["eine Wolke am Boden", "Rauch von einem Feuer", "heißer Dampf vom Topf", "ganz feiner Schnee"], correct: 0,
                    explanation: "Nebel ist eine Wolke ganz unten."
                },
                {
                    id: "jzk1l2_m4", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was passiert mit Pfützen, wenn die Sonne scheint?", answers: ["sie trocknen", "sie wachsen", "sie frieren", "sie werden bunt"], correct: 0,
                    explanation: "Die Sonne trocknet das Wasser."
                }
            ],
            schwer: [
                {
                    id: "jzk1l2_s1", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Was ist bei Gewitter gefährlich?", answers: ["unter einem Baum stehen", "drinnen im Haus bleiben", "im Auto sitzen bleiben", "die Fenster zumachen"], correct: 0,
                    explanation: "Bei Gewitter nie unter einen Baum!"
                },
                {
                    id: "jzk1l2_s2", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Was ist Hagel?", answers: ["Eiskörner aus den Wolken", "warmer Sommerregen", "Sand aus der Wüste", "Blütenstaub im Wind"], correct: 0,
                    explanation: "Hagel sind kleine Eiskugeln."
                },
                {
                    id: "jzk1l2_s3", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Was zeigt das Thermometer im Winter oft?", answers: ["kalte Temperaturen", "heiße Temperaturen", "die Uhrzeit", "das Datum"], correct: 0,
                    explanation: "Im Winter ist es kalt."
                },
                {
                    id: "jzk1l2_s4", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Was bringt der Wind zum Fliegen?", answers: ["einen Drachen", "einen Stein", "ein Haus", "einen Tisch"], correct: 0,
                    explanation: "Im Herbst lassen Kinder Drachen steigen."
                }
            ]
        },
        test: [
                {
                    id: "jzk1l2_t1", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Wo entstehen Regen und Schnee?", answers: ["in den Wolken", "in der Erde", "im Meer", "in der Sonne"], correct: 0,
                    explanation: "Regen und Schnee fallen aus Wolken."
                },
                {
                    id: "jzk1l2_t2", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "🌡️ Was misst ein Thermometer?", answers: ["wie warm es ist", "wie spät es ist", "wie schwer etwas ist", "wie lang etwas ist"], correct: 0,
                    explanation: "Es misst die Temperatur."
                },
                {
                    id: "jzk1l2_t3", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was siehst du zuerst bei einem Gewitter?", answers: ["den Blitz", "den Donner", "den Regenbogen", "den Schnee"], correct: 0,
                    explanation: "Licht ist schneller als Schall."
                },
                {
                    id: "jzk1l2_t4", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was trägt man, wenn es stark regnet?", answers: ["Regenjacke", "Badehose", "Sonnenhut", "Sandalen"], correct: 0,
                    explanation: "Die Regenjacke hält trocken."
                },
                {
                    id: "jzk1l2_t5", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Woraus besteht eine Wolke?", answers: ["aus Wassertröpfchen", "aus weißer Watte", "aus Rauch von Feuer", "aus Zuckerwatte"], correct: 0,
                    explanation: "Wolken sind winzige Wassertropfen."
                },
                {
                    id: "jzk1l2_t6", category: "kurs_jz_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Wie nennt man Wasser, das vom Himmel fällt?", answers: ["Regen", "Tau", "Nebel", "Dampf"], correct: 0,
                    explanation: "Regen fällt vom Himmel."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "jz_k1_l3", kurs: "jahreszeiten_k1", order: 3, icon: "🧣",
        title: "Richtig angezogen", kurz: "Kleidung für jedes Wetter",
        erklaerung: {
            intro: "Zu jedem Wetter passt andere <b>Kleidung</b>. Im Winter schützen Mütze, Schal und Handschuhe vor <b>Kälte</b>. Im Sommer schützen Sonnenhut und Sonnencreme vor der <b>Sonne</b>. Bei Regen helfen Regenjacke und Gummistiefel.",
            beispiele: ["❄️ Handschuhe, Schal, Mütze",
                "☀️ Sonnenhut und Sonnencreme",
                "🌧️ Regenjacke und Gummistiefel"],
            merksatz: "Kalt: Mütze, Schal, Handschuhe. Sonne: Hut und Sonnencreme. Regen: Regenjacke und Gummistiefel."
        },
        uebung: {
            leicht: [
                {
                    id: "jzk1l3_l1", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "❄️ Was ziehst du im Winter an?", answers: ["Handschuhe", "Badehose", "Sandalen", "Sonnenhut"], correct: 0,
                    explanation: "Handschuhe halten die Hände warm."
                },
                {
                    id: "jzk1l3_l2", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "☀️ Was schützt die Haut vor Sonnenbrand?", answers: ["Sonnencreme", "Handschuhe", "Gummistiefel", "Schal"], correct: 0,
                    explanation: "Sonnencreme schützt die Haut."
                },
                {
                    id: "jzk1l3_l3", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "🌧️ Was hilft gegen Regen?", answers: ["Regenschirm", "Sonnenbrille", "Badehose", "Strohhut"], correct: 0,
                    explanation: "Der Schirm hält den Regen ab."
                },
                {
                    id: "jzk1l3_l4", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "leicht", points: 10,
                    question: "Was schützt im Winter den Kopf?", answers: ["Mütze", "Sonnenbrille", "Socken", "Gürtel"], correct: 0,
                    explanation: "Die Mütze hält den Kopf warm."
                }
            ],
            mittel: [
                {
                    id: "jzk1l3_m1", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was ziehst du an, wenn es draußen heiß ist?", answers: ["ein T-Shirt", "einen Wintermantel", "dicke Stiefel", "einen Schal"], correct: 0,
                    explanation: "Im T-Shirt ist es luftig."
                },
                {
                    id: "jzk1l3_m2", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was gehört zu Regenwetter?", answers: ["Gummistiefel", "Sandalen", "Badehose", "Sonnenhut"], correct: 0,
                    explanation: "Gummistiefel halten die Füße trocken."
                },
                {
                    id: "jzk1l3_m3", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was trinkst du an heißen Tagen am besten?", answers: ["Wasser", "Kaffee", "Cola", "Sirup"], correct: 0,
                    explanation: "Wasser löscht den Durst am besten."
                },
                {
                    id: "jzk1l3_m4", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "☀️ Was schützt die Augen vor greller Sonne?", answers: ["Sonnenbrille", "Ohrenschützer", "Handschuhe", "Schal"], correct: 0,
                    explanation: "Die Sonnenbrille schützt die Augen."
                }
            ],
            schwer: [
                {
                    id: "jzk1l3_s1", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Wann braucht man Mütze und Handschuhe?", answers: ["wenn es kalt ist", "wenn es heiß ist", "im Schwimmbad", "beim Schlafen"], correct: 0,
                    explanation: "Sie schützen vor Kälte."
                },
                {
                    id: "jzk1l3_s2", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Was passt NICHT zum Winter?", answers: ["Badehose", "Schal", "Stiefel", "Mütze"], correct: 0,
                    explanation: "Die Badehose ist für den Sommer."
                },
                {
                    id: "jzk1l3_s3", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Was passt NICHT zum Sommer?", answers: ["Wintermantel", "Sonnenhut", "T-Shirt", "Sandalen"], correct: 0,
                    explanation: "Im Sommer ist ein Wintermantel zu warm."
                },
                {
                    id: "jzk1l3_s4", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "schwer", points: 10,
                    question: "Mittags ist die Sonne sehr stark. Was tust du?", answers: ["in den Schatten gehen", "länger in der Sonne liegen", "ohne Hut spielen", "keine Creme nehmen"], correct: 0,
                    explanation: "Im Schatten bist du geschützt."
                }
            ]
        },
        test: [
                {
                    id: "jzk1l3_t1", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "🧣 Wann trägst du einen Schal?", answers: ["im Winter", "im Sommer", "im Schwimmbad", "beim Sport im Sommer"], correct: 0,
                    explanation: "Der Schal wärmt den Hals."
                },
                {
                    id: "jzk1l3_t2", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was trägst du bei Regen an den Füßen?", answers: ["Gummistiefel", "Hausschuhe", "Sandalen", "nur Socken"], correct: 0,
                    explanation: "Gummistiefel sind wasserdicht."
                },
                {
                    id: "jzk1l3_t3", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was passt zu einem heißen Sommertag?", answers: ["Sonnenhut", "Wintermütze", "Handschuhe", "dicker Pullover"], correct: 0,
                    explanation: "Der Sonnenhut schützt den Kopf."
                },
                {
                    id: "jzk1l3_t4", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Warum trägt man im Winter eine Mütze?", answers: ["gegen die Kälte", "gegen den Durst", "damit man schneller läuft", "gegen Hunger"], correct: 0,
                    explanation: "Die Mütze hält warm."
                },
                {
                    id: "jzk1l3_t5", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Was nimmst du an einem heißen Tag mit?", answers: ["eine Wasserflasche", "einen Schlitten", "Handschuhe", "einen Schneeschieber"], correct: 0,
                    explanation: "Bei Hitze viel trinken."
                },
                {
                    id: "jzk1l3_t6", category: "kurs_jz_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "jahreszeiten", difficulty: "mittel", points: 10,
                    question: "Welche Kleidung hält bei Regen trocken?", answers: ["eine Regenjacke", "ein T-Shirt", "eine Badehose", "ein Sonnenhut"], correct: 0,
                    explanation: "Die Regenjacke ist wasserdicht."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "kp_k1_l1", kurs: "koerper_k1", order: 1, icon: "👀",
        title: "Die fünf Sinne", kurz: "Sehen, hören, riechen …",
        erklaerung: {
            intro: "Wir haben <b>fünf Sinne</b>: Mit den <b>Augen</b> sehen wir, mit den <b>Ohren</b> hören wir, mit der <b>Nase</b> riechen wir, mit der <b>Zunge</b> schmecken wir und mit der <b>Haut</b> fühlen wir.",
            beispiele: ["👀 Augen – sehen",
                "👂 Ohren – hören",
                "👃 Nase – riechen",
                "👅 Zunge – schmecken",
                "✋ Haut – fühlen"],
            merksatz: "Sehen, hören, riechen, schmecken, fühlen – das sind die fünf Sinne."
        },
        uebung: {
            leicht: [
                {
                    id: "kpk1l1_l1", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "👂 Womit hörst du?", answers: ["mit den Ohren", "mit den Augen", "mit der Nase", "mit der Zunge"], correct: 0,
                    explanation: "Wir hören mit den Ohren."
                },
                {
                    id: "kpk1l1_l2", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "👀 Womit siehst du?", answers: ["mit den Augen", "mit den Ohren", "mit der Nase", "mit den Füßen"], correct: 0,
                    explanation: "Wir sehen mit den Augen."
                },
                {
                    id: "kpk1l1_l3", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "👃 Womit riechst du?", answers: ["mit der Nase", "mit den Ohren", "mit den Augen", "mit den Haaren"], correct: 0,
                    explanation: "Wir riechen mit der Nase."
                },
                {
                    id: "kpk1l1_l4", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "👅 Womit schmeckst du?", answers: ["mit der Zunge", "mit den Ohren", "mit den Augen", "mit den Haaren"], correct: 0,
                    explanation: "Wir schmecken mit der Zunge."
                }
            ],
            mittel: [
                {
                    id: "kpk1l1_m1", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wie viele Sinne hat der Mensch?", answers: ["5", "2", "4", "10"], correct: 0,
                    explanation: "Sehen, hören, riechen, schmecken, fühlen."
                },
                {
                    id: "kpk1l1_m2", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Womit fühlst du, ob etwas warm oder kalt ist?", answers: ["mit der Haut", "mit den Ohren", "mit der Nase", "mit den Haaren"], correct: 0,
                    explanation: "Die Haut fühlt Wärme und Kälte."
                },
                {
                    id: "kpk1l1_m3", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "🌸 Welchen Sinn brauchst du für den Duft einer Blume?", answers: ["riechen", "hören", "schmecken", "sehen"], correct: 0,
                    explanation: "Düfte riecht man mit der Nase."
                },
                {
                    id: "kpk1l1_m4", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "🎵 Welchen Sinn brauchst du für Musik?", answers: ["hören", "riechen", "schmecken", "sehen"], correct: 0,
                    explanation: "Musik hört man mit den Ohren."
                }
            ],
            schwer: [
                {
                    id: "kpk1l1_s1", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "🍋 Womit merkst du, dass eine Zitrone sauer ist?", answers: ["mit der Zunge", "mit den Ohren", "mit den Augen", "mit den Haaren"], correct: 0,
                    explanation: "Sauer schmeckt man mit der Zunge."
                },
                {
                    id: "kpk1l1_s2", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Welchen Sinn nutzen blinde Menschen beim Lesen?", answers: ["fühlen", "riechen", "schmecken", "sehen"], correct: 0,
                    explanation: "Sie ertasten die Blindenschrift mit den Fingern."
                },
                {
                    id: "kpk1l1_s3", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Was schützt deine Augen vor Staub?", answers: ["Wimpern und Augenlider", "die Ohren", "die Haare auf dem Kopf", "die Zähne"], correct: 0,
                    explanation: "Wimpern und Lider halten Staub ab."
                },
                {
                    id: "kpk1l1_s4", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Womit tastest du in einer dunklen Kiste?", answers: ["mit den Händen", "mit den Ohren", "mit der Nase", "mit den Augen"], correct: 0,
                    explanation: "Im Dunkeln fühlst du mit den Händen."
                }
            ]
        },
        test: [
                {
                    id: "kpk1l1_t1", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "👀 Welchen Sinn brauchst du zum Malen?", answers: ["sehen", "hören", "riechen", "schmecken"], correct: 0,
                    explanation: "Zum Malen musst du sehen."
                },
                {
                    id: "kpk1l1_t2", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Womit schmeckst du, ob etwas süß ist?", answers: ["mit der Zunge", "mit der Haut", "mit den Ohren", "mit den Augen"], correct: 0,
                    explanation: "Süß schmeckt man mit der Zunge."
                },
                {
                    id: "kpk1l1_t3", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "🔔 Womit hörst du die Klingel?", answers: ["mit den Ohren", "mit der Nase", "mit der Zunge", "mit den Händen"], correct: 0,
                    explanation: "Geräusche hört man mit den Ohren."
                },
                {
                    id: "kpk1l1_t4", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Welcher Sinn gehört zur Nase?", answers: ["riechen", "sehen", "hören", "fühlen"], correct: 0,
                    explanation: "Mit der Nase riechen wir."
                },
                {
                    id: "kpk1l1_t5", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Welcher Sinn gehört zur Haut?", answers: ["fühlen", "schmecken", "sehen", "hören"], correct: 0,
                    explanation: "Mit der Haut fühlen wir."
                },
                {
                    id: "kpk1l1_t6", category: "kurs_kp_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was ist KEIN Sinn?", answers: ["rennen", "hören", "sehen", "riechen"], correct: 0,
                    explanation: "Rennen ist eine Bewegung, kein Sinn."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "kp_k1_l2", kurs: "koerper_k1", order: 2, icon: "🍏",
        title: "Gesund bleiben", kurz: "Zähne, Hände, Wasser",
        erklaerung: {
            intro: "Damit du <b>gesund</b> bleibst, hilft dir jeden Tag: <b>Zähne putzen</b> morgens und abends, <b>Hände waschen</b>, viel <b>Wasser</b> trinken, <b>Obst und Gemüse</b> essen, dich <b>bewegen</b> und genug <b>schlafen</b>.",
            beispiele: ["Zähne putzen: morgens und abends",
                "Hände waschen: vor dem Essen und nach dem Klo",
                "🥦 🍎 Obst und Gemüse jeden Tag"],
            merksatz: "Zähne putzen, Hände waschen, Wasser trinken, bewegen, schlafen."
        },
        uebung: {
            leicht: [
                {
                    id: "kpk1l2_l1", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Wie oft am Tag putzt du die Zähne?", answers: ["zweimal", "einmal im Monat", "nie", "nur sonntags"], correct: 0,
                    explanation: "Morgens und abends."
                },
                {
                    id: "kpk1l2_l2", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Wann wäschst du dir die Hände?", answers: ["vor dem Essen", "nur im Sommer", "nur sonntags", "nie"], correct: 0,
                    explanation: "Vor dem Essen – gegen Keime."
                },
                {
                    id: "kpk1l2_l3", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Was ist gesund?", answers: ["🍎 Apfel", "🍭 Lutscher", "🍬 Bonbon", "🍟 Pommes"], correct: 0,
                    explanation: "Obst ist gesund."
                },
                {
                    id: "kpk1l2_l4", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Welches Getränk ist am besten gegen Durst?", answers: ["Wasser", "Limo", "Kaffee", "Cola"], correct: 0,
                    explanation: "Wasser ist das beste Getränk."
                }
            ],
            mittel: [
                {
                    id: "kpk1l2_m1", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Warum brauchen wir Schlaf?", answers: ["damit der Körper sich erholt", "damit wir Hunger bekommen", "damit die Haare wachsen", "damit es dunkel wird"], correct: 0,
                    explanation: "Im Schlaf erholt sich der Körper."
                },
                {
                    id: "kpk1l2_m2", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wohin niest man am besten?", answers: ["in die Armbeuge", "in die Hand", "jemandem ins Gesicht", "auf den Tisch"], correct: 0,
                    explanation: "So verteilst du keine Keime."
                },
                {
                    id: "kpk1l2_m3", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Warum tut Bewegung gut?", answers: ["Muskeln werden stark", "die Haare werden länger", "die Zähne werden weiß", "man wird ganz klein"], correct: 0,
                    explanation: "Bewegung macht stark."
                },
                {
                    id: "kpk1l2_m4", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "🥦 Was sollte man jeden Tag essen?", answers: ["Obst und Gemüse", "nur Süßigkeiten", "nur Chips", "gar nichts"], correct: 0,
                    explanation: "Obst und Gemüse sind gesund."
                }
            ],
            schwer: [
                {
                    id: "kpk1l2_s1", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Wer schaut nach, ob deine Zähne gesund sind?", answers: ["der Zahnarzt", "der Bäcker", "der Briefträger", "der Friseur"], correct: 0,
                    explanation: "Der Zahnarzt prüft die Zähne."
                },
                {
                    id: "kpk1l2_s2", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Wie heißen die ersten Zähne von Kindern?", answers: ["Milchzähne", "Zuckerzähne", "Steinzähne", "Holzzähne"], correct: 0,
                    explanation: "Die ersten Zähne heißen Milchzähne."
                },
                {
                    id: "kpk1l2_s3", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Was macht viel Zucker mit den Zähnen?", answers: ["er macht Löcher", "er macht sie stark", "er macht sie weiß", "nichts"], correct: 0,
                    explanation: "Zucker kann Löcher machen."
                },
                {
                    id: "kpk1l2_s4", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Warum wäscht man die Hände mit Seife?", answers: ["gegen Keime", "damit sie duften", "damit sie nass sind", "weil es Spaß macht"], correct: 0,
                    explanation: "Seife spült Keime weg."
                }
            ]
        },
        test: [
                {
                    id: "kpk1l2_t1", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wann putzt du die Zähne?", answers: ["morgens und abends", "nur mittags", "nie", "nur am Wochenende"], correct: 0,
                    explanation: "Zweimal am Tag."
                },
                {
                    id: "kpk1l2_t2", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was ist ein gesundes Frühstück?", answers: ["Müsli mit Obst", "Schokolade", "Gummibärchen", "Chips"], correct: 0,
                    explanation: "Müsli mit Obst gibt Kraft."
                },
                {
                    id: "kpk1l2_t3", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wann wäschst du dir auch die Hände?", answers: ["nach dem Klo", "nur vorm Schlafen", "nur im Winter", "nie"], correct: 0,
                    explanation: "Nach dem Klo immer Hände waschen."
                },
                {
                    id: "kpk1l2_t4", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wie viel solltest du trinken?", answers: ["jeden Tag genug", "gar nichts", "nur im Winter", "nur ein Glas pro Woche"], correct: 0,
                    explanation: "Der Körper braucht jeden Tag Wasser."
                },
                {
                    id: "kpk1l2_t5", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was hilft dem Körper, gesund zu bleiben?", answers: ["draußen spielen", "nur fernsehen", "wenig schlafen", "nur Süßes essen"], correct: 0,
                    explanation: "Bewegung an der frischen Luft."
                },
                {
                    id: "kpk1l2_t6", category: "kurs_kp_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was tust du beim Husten?", answers: ["in die Armbeuge husten", "andere Kinder anhusten", "in die offene Hand", "ganz laut schreien"], correct: 0,
                    explanation: "So schützt du andere."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "kp_k1_l3", kurs: "koerper_k1", order: 3, icon: "❤️",
        title: "Was in mir steckt", kurz: "Herz, Lunge, Gehirn",
        erklaerung: {
            intro: "In deinem Körper arbeiten viele Teile zusammen. Das <b>Herz</b> pumpt das Blut. Die <b>Lunge</b> holt Luft. Das <b>Gehirn</b> denkt. Die <b>Knochen</b> geben dir Halt.",
            beispiele: ["❤️ Herz – pumpt das Blut",
                "Lunge – zum Atmen",
                "🧠 Gehirn – zum Denken"],
            merksatz: "Herz pumpt, Lunge atmet, Gehirn denkt, Knochen halten."
        },
        uebung: {
            leicht: [
                {
                    id: "kpk1l3_l1", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Was klopft in deiner Brust?", answers: ["das Herz", "der Magen", "die Nase", "das Knie"], correct: 0,
                    explanation: "Das Herz schlägt in der Brust."
                },
                {
                    id: "kpk1l3_l2", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "🧠 Womit denkst du?", answers: ["mit dem Gehirn", "mit dem Bauch", "mit den Füßen", "mit den Haaren"], correct: 0,
                    explanation: "Das Gehirn denkt."
                },
                {
                    id: "kpk1l3_l3", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Womit atmest du?", answers: ["mit der Lunge", "mit dem Magen", "mit dem Herz", "mit den Knochen"], correct: 0,
                    explanation: "Die Lunge holt die Luft."
                },
                {
                    id: "kpk1l3_l4", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "leicht", points: 10,
                    question: "Wie viele Zehen hast du an einem Fuß?", answers: ["5", "4", "6", "10"], correct: 0,
                    explanation: "Fünf Zehen an jedem Fuß."
                }
            ],
            mittel: [
                {
                    id: "kpk1l3_m1", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was gibt deinem Körper Halt?", answers: ["die Knochen", "die Haare", "die Fingernägel", "die Wimpern"], correct: 0,
                    explanation: "Die Knochen halten dich aufrecht."
                },
                {
                    id: "kpk1l3_m2", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wo liegt dein Gehirn?", answers: ["im Kopf", "im Bauch", "im Arm", "im Bein"], correct: 0,
                    explanation: "Das Gehirn ist im Kopf."
                },
                {
                    id: "kpk1l3_m3", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wohin kommt das Essen nach dem Schlucken?", answers: ["in den Magen", "in die Lunge", "in den Kopf", "in das Herz"], correct: 0,
                    explanation: "Es rutscht in den Magen."
                },
                {
                    id: "kpk1l3_m4", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was pumpt das Blut durch den Körper?", answers: ["das Herz", "die Lunge", "der Magen", "das Gehirn"], correct: 0,
                    explanation: "Das Herz ist eine Pumpe."
                }
            ],
            schwer: [
                {
                    id: "kpk1l3_s1", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Welches Gelenk ist in der Mitte vom Bein?", answers: ["das Knie", "der Ellenbogen", "das Handgelenk", "die Schulter"], correct: 0,
                    explanation: "Das Knie ist in der Mitte vom Bein."
                },
                {
                    id: "kpk1l3_s2", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Welches Gelenk ist in der Mitte vom Arm?", answers: ["der Ellenbogen", "das Knie", "der Knöchel", "die Hüfte"], correct: 0,
                    explanation: "Der Ellenbogen ist in der Mitte vom Arm."
                },
                {
                    id: "kpk1l3_s3", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Was passiert mit der Lunge beim Einatmen?", answers: ["sie füllt sich mit Luft", "sie wird ganz leer", "sie wird ganz klein", "sie hört auf zu atmen"], correct: 0,
                    explanation: "Beim Einatmen füllt sie sich."
                },
                {
                    id: "kpk1l3_s4", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "schwer", points: 10,
                    question: "Was schützt dein Gehirn?", answers: ["der Schädel", "die Mütze allein", "die Haare", "die Ohren"], correct: 0,
                    explanation: "Der Schädel ist ein harter Knochen."
                }
            ]
        },
        test: [
                {
                    id: "kpk1l3_t1", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was schlägt schneller, wenn du rennst?", answers: ["das Herz", "der Zahn", "das Ohr", "die Nase"], correct: 0,
                    explanation: "Beim Rennen schlägt das Herz schneller."
                },
                {
                    id: "kpk1l3_t2", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Womit kaust du das Essen?", answers: ["mit den Zähnen", "mit der Nase", "mit den Ohren", "mit den Fingern"], correct: 0,
                    explanation: "Die Zähne kauen."
                },
                {
                    id: "kpk1l3_t3", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wie viele Finger hast du an einer Hand?", answers: ["5", "4", "6", "10"], correct: 0,
                    explanation: "Fünf Finger an jeder Hand."
                },
                {
                    id: "kpk1l3_t4", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Wo ist dein Herz?", answers: ["in der Brust", "oben im Kopf", "unten im Bein", "in der Hand"], correct: 0,
                    explanation: "Das Herz ist in der Brust."
                },
                {
                    id: "kpk1l3_t5", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was brauchen die Muskeln, um stark zu werden?", answers: ["Bewegung", "Fernsehen", "Süßigkeiten", "Langeweile"], correct: 0,
                    explanation: "Bewegung macht Muskeln stark."
                },
                {
                    id: "kpk1l3_t6", category: "kurs_kp_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "koerper", difficulty: "mittel", points: 10,
                    question: "Was hält dich unter der Haut aufrecht?", answers: ["das Skelett", "die Kleidung", "das Bett", "die Luft"], correct: 0,
                    explanation: "Das Skelett sind alle Knochen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "vk_k1_l1", kurs: "verkehr_k1", order: 1, icon: "🚦",
        title: "Ampel und Zebrastreifen", kurz: "Rot stehen, Grün gehen",
        erklaerung: {
            intro: "An der <b>Ampel</b> gilt: <b>Rot heißt stehen</b>, <b>Grün heißt gehen</b> – aber pass auf <b>abbiegende Autos</b> auf. Am <b>Zebrastreifen</b> müssen Autos anhalten – trotzdem schaust du erst, ob sie wirklich stehen.",
            beispiele: ["🚦 Rot – stehen bleiben",
                "🚦 Grün – gehen",
                "Zebrastreifen – schauen, ob die Autos halten"],
            merksatz: "Rot – stehen. Grün – gehen, aber auf abbiegende Autos achten. Am Zebrastreifen: erst schauen, dann gehen."
        },
        uebung: {
            leicht: [
                {
                    id: "vkk1l1_l1", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "🚦 Was heißt Rot an der Fußgängerampel?", answers: ["stehen bleiben", "schnell gehen", "rüberrennen", "hüpfen und los"], correct: 0,
                    explanation: "Bei Rot bleibst du stehen."
                },
                {
                    id: "vkk1l1_l2", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "🚦 Was heißt Grün an der Fußgängerampel?", answers: ["gehen", "stehen bleiben", "umdrehen", "warten"], correct: 0,
                    explanation: "Bei Grün darfst du gehen – achte trotzdem auf abbiegende Autos."
                },
                {
                    id: "vkk1l1_l3", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "Wie sieht ein Zebrastreifen aus?", answers: ["weiße Streifen", "rote Punkte", "grüne Kreise", "blaue Sterne"], correct: 0,
                    explanation: "Weiße Streifen wie beim Zebra."
                },
                {
                    id: "vkk1l1_l4", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "Wo gehst du am sichersten über die Straße?", answers: ["an der Ampel", "zwischen Autos", "in einer Kurve", "hinter dem Bus"], correct: 0,
                    explanation: "An der Ampel ist es am sichersten."
                }
            ],
            mittel: [
                {
                    id: "vkk1l1_m1", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Mitten auf der Fahrbahn wird das Männchen rot. Was tust du?", answers: ["zügig weitergehen", "stehen bleiben", "umdrehen und rennen", "hinsetzen"], correct: 0,
                    explanation: "Zügig weitergehen, nicht rennen."
                },
                {
                    id: "vkk1l1_m2", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was tust du vor dem Zebrastreifen?", answers: ["schauen, ob die Autos halten", "einfach schnell losrennen", "die Augen fest zumachen", "rückwärts hinübergehen"], correct: 0,
                    explanation: "Erst schauen, dann gehen."
                },
                {
                    id: "vkk1l1_m3", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was bedeutet Gelb an der Autoampel?", answers: ["Achtung, gleich kommt Rot", "jetzt schneller fahren", "alle machen eine Pause", "alle Kinder dürfen gehen"], correct: 0,
                    explanation: "Nach Gelb kommt Rot."
                },
                {
                    id: "vkk1l1_m4", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wer darf am Zebrastreifen zuerst gehen?", answers: ["die Fußgänger", "die Autofahrer", "die Busfahrer", "die Radfahrer"], correct: 0,
                    explanation: "Fußgänger haben Vorrang."
                }
            ],
            schwer: [
                {
                    id: "vkk1l1_s1", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Warum wartest du bei Rot, auch wenn kein Auto kommt?", answers: ["weil es die Regel ist", "weil es langweilig ist", "weil es regnet", "weil die Ampel kaputt ist"], correct: 0,
                    explanation: "Rot heißt immer stehen – auch als Vorbild."
                },
                {
                    id: "vkk1l1_s2", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Was ist auf dem Licht der Fußgängerampel?", answers: ["ein Männchen", "ein Auto", "ein Fahrrad", "ein Hund"], correct: 0,
                    explanation: "Das Ampelmännchen."
                },
                {
                    id: "vkk1l1_s3", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Die Ampel ist aus. Was tust du?", answers: ["einen anderen Übergang suchen", "einfach schnell losrennen", "mit geschlossenen Augen gehen", "mitten auf der Straße warten"], correct: 0,
                    explanation: "Such einen anderen sicheren Übergang oder bitte einen Erwachsenen um Hilfe."
                },
                {
                    id: "vkk1l1_s4", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Ein Warnschild mit zwei Kindern bedeutet …", answers: ["Achtung, Kinder", "Parkplatz", "Tankstelle", "Spielplatz zu"], correct: 0,
                    explanation: "Hier sind oft Kinder unterwegs."
                }
            ]
        },
        test: [
                {
                    id: "vkk1l1_t1", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "🚦 Rotes Männchen an der Ampel heißt …", answers: ["stehen", "gehen", "rennen", "springen"], correct: 0,
                    explanation: "Rot heißt stehen."
                },
                {
                    id: "vkk1l1_t2", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "🚦 Grünes Männchen an der Ampel heißt …", answers: ["gehen", "stehen", "sitzen", "schlafen"], correct: 0,
                    explanation: "Grün heißt gehen."
                },
                {
                    id: "vkk1l1_t3", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wo überquerst du die Straße am besten?", answers: ["am Zebrastreifen", "zwischen parkenden Autos", "in der Kurve", "hinter einem Lkw"], correct: 0,
                    explanation: "Am Zebrastreifen oder an der Ampel."
                },
                {
                    id: "vkk1l1_t4", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Müssen Autos am Zebrastreifen anhalten?", answers: ["ja, für Fußgänger", "nein, sie fahren weiter", "nur in der Nacht", "nur am Sonntag"], correct: 0,
                    explanation: "Fußgänger haben dort Vorrang."
                },
                {
                    id: "vkk1l1_t5", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was tust du, bevor du losgehst?", answers: ["links und rechts schauen", "kurz die Augen zumachen", "ein Lied laut singen", "aufs Handy schauen"], correct: 0,
                    explanation: "Erst schauen, dann gehen."
                },
                {
                    id: "vkk1l1_t6", category: "kurs_vk_k1_l1", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Gelb an der Autoampel heißt …", answers: ["gleich kommt Rot", "schnell fahren", "alle dürfen gehen", "Pause"], correct: 0,
                    explanation: "Gelb warnt: gleich ist Rot."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "vk_k1_l2", kurs: "verkehr_k1", order: 2, icon: "🏫",
        title: "Mein Schulweg", kurz: "Links – rechts – links",
        erklaerung: {
            intro: "Auf dem Schulweg gilt: Immer auf dem <b>Gehweg</b> bleiben. Vor dem Überqueren <b>links – rechts – links</b> schauen. Nie zwischen <b>parkenden Autos</b> auf die Straße laufen. Im Dunkeln helfen <b>helle Kleidung</b> und <b>Reflektoren</b>.",
            beispiele: ["Gehweg – hier gehst du",
                "Links – rechts – links schauen",
                "Reflektoren leuchten im Dunkeln"],
            merksatz: "Links – rechts – links schauen, dann gehen."
        },
        uebung: {
            leicht: [
                {
                    id: "vkk1l2_l1", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "Wo gehst du auf dem Schulweg?", answers: ["auf dem Gehweg", "auf der Straße", "auf dem Radweg", "in der Mitte"], correct: 0,
                    explanation: "Auf dem Gehweg bist du sicher."
                },
                {
                    id: "vkk1l2_l2", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "Wie schaust du, bevor du über die Straße gehst?", answers: ["links, rechts, links", "nur hoch in die Luft", "gar nicht, einfach los", "nur nach hinten"], correct: 0,
                    explanation: "Links, rechts, links."
                },
                {
                    id: "vkk1l2_l3", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "🚗 Was tust du im Auto als Erstes?", answers: ["anschnallen", "Musik anmachen", "schlafen", "aufstehen"], correct: 0,
                    explanation: "Erst anschnallen, dann losfahren."
                },
                {
                    id: "vkk1l2_l4", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "Darfst du zwischen parkenden Autos auf die Straße?", answers: ["nein, das ist gefährlich", "ja, das ist erlaubt", "ja, wenn du schnell rennst", "ja, aber nur im Winter"], correct: 0,
                    explanation: "Dort sehen Autofahrer dich nicht."
                }
            ],
            mittel: [
                {
                    id: "vkk1l2_m1", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was hilft dir im Dunkeln, gesehen zu werden?", answers: ["helle Kleidung", "dunkle Kleidung", "eine Sonnenbrille", "leise sein"], correct: 0,
                    explanation: "Helle Kleidung sieht man besser."
                },
                {
                    id: "vkk1l2_m2", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was leuchtet im Licht der Autos?", answers: ["Reflektoren", "Stoffbeutel", "Holzknöpfe", "Schnürsenkel"], correct: 0,
                    explanation: "Reflektoren werfen das Licht zurück."
                },
                {
                    id: "vkk1l2_m3", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wo gehst du, wenn es keinen Gehweg gibt?", answers: ["ganz links am Rand", "in der Straßenmitte", "mal links, mal rechts", "auf der Mittellinie"], correct: 0,
                    explanation: "Links am Rand siehst du die Autos kommen."
                },
                {
                    id: "vkk1l2_m4", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wer hilft Kindern vor der Schule über die Straße?", answers: ["Schülerlotsen", "Bäcker", "Briefträger", "Gärtner"], correct: 0,
                    explanation: "Schülerlotsen helfen am Übergang."
                }
            ],
            schwer: [
                {
                    id: "vkk1l2_s1", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Ein Ball rollt auf die Straße. Was tust du?", answers: ["einen Erwachsenen holen", "sofort hinterherrennen", "die Augen zumachen", "laut rufen und rennen"], correct: 0,
                    explanation: "Nie hinterherrennen – hol dir Hilfe."
                },
                {
                    id: "vkk1l2_s2", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Warum ist es zwischen parkenden Autos gefährlich?", answers: ["Autofahrer sehen dich nicht", "die Autos sind schmutzig", "es ist zu eng zum Spielen", "es ist verboten zu stehen"], correct: 0,
                    explanation: "Du bist hinter den Autos versteckt."
                },
                {
                    id: "vkk1l2_s3", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Wo wartest du auf den Schulbus?", answers: ["an der Haltestelle", "mitten auf der Straße", "auf dem Radweg", "hinter dem Bus"], correct: 0,
                    explanation: "An der Haltestelle mit Abstand."
                },
                {
                    id: "vkk1l2_s4", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Wie verhältst du dich im Bus?", answers: ["ruhig sitzen", "herumrennen", "drängeln", "die Tür aufhalten"], correct: 0,
                    explanation: "Ruhig sitzen und festhalten."
                }
            ]
        },
        test: [
                {
                    id: "vkk1l2_t1", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wie schaust du vor dem Überqueren?", answers: ["links – rechts – links", "nur einmal nach rechts", "nur hoch zum Himmel", "gar nicht, einfach los"], correct: 0,
                    explanation: "Links, rechts, links."
                },
                {
                    id: "vkk1l2_t2", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was ist im Auto wichtig?", answers: ["anschnallen", "Fenster aufmachen", "laut sein", "Schuhe ausziehen"], correct: 0,
                    explanation: "Immer anschnallen."
                },
                {
                    id: "vkk1l2_t3", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was trägst du im Dunkeln am besten?", answers: ["eine helle Jacke", "eine schwarze Jacke", "eine Sonnenbrille", "eine dunkle Mütze"], correct: 0,
                    explanation: "Hell sieht man im Dunkeln."
                },
                {
                    id: "vkk1l2_t4", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wo steigst du aus dem Auto aus?", answers: ["auf der Gehweg-Seite", "auf der Straßenseite", "durchs Fenster", "im Fahren"], correct: 0,
                    explanation: "Auf der Seite zum Gehweg."
                },
                {
                    id: "vkk1l2_t5", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was machst du an der Bordsteinkante?", answers: ["anhalten und schauen", "schnell weiterlaufen", "auf einem Bein hüpfen", "die Augen zumachen"], correct: 0,
                    explanation: "Am Bordstein immer anhalten."
                },
                {
                    id: "vkk1l2_t6", category: "kurs_vk_k1_l2", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wozu sind Reflektoren am Ranzen?", answers: ["damit Autos dich sehen", "damit er leichter ist", "damit er schön klingt", "damit er wärmer ist"], correct: 0,
                    explanation: "So sieht man dich im Dunkeln."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "vk_k1_l3", kurs: "verkehr_k1", order: 3, icon: "🚒",
        title: "Hilfe holen", kurz: "112 und 110",
        erklaerung: {
            intro: "Im <b>Notfall</b> rufst du Hilfe: <b>112</b> für Feuerwehr und Krankenwagen, <b>110</b> für die Polizei. Sag, <b>wo</b> du bist und <b>was</b> passiert ist.",
            beispiele: ["🚒 Feuerwehr – 112",
                "🚑 Krankenwagen – 112",
                "🚓 Polizei – 110"],
            merksatz: "112 – Feuerwehr und Krankenwagen. 110 – Polizei."
        },
        uebung: {
            leicht: [
                {
                    id: "vkk1l3_l1", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "🚒 Welche Nummer rufst du, wenn es brennt?", answers: ["112", "110", "123", "911"], correct: 0,
                    explanation: "Feuerwehr: 112."
                },
                {
                    id: "vkk1l3_l2", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "🚓 Welche Nummer hat die Polizei?", answers: ["110", "112", "111", "100"], correct: 0,
                    explanation: "Polizei: 110."
                },
                {
                    id: "vkk1l3_l3", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "🚑 Wer bringt Verletzte ins Krankenhaus?", answers: ["der Krankenwagen", "der Müllwagen", "der Bus", "das Taxi"], correct: 0,
                    explanation: "Der Krankenwagen hilft Verletzten."
                },
                {
                    id: "vkk1l3_l4", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "leicht", points: 10,
                    question: "🔥 Wer löscht ein Feuer?", answers: ["die Feuerwehr", "die Post", "der Bäcker", "der Lehrer"], correct: 0,
                    explanation: "Die Feuerwehr löscht Brände."
                }
            ],
            mittel: [
                {
                    id: "vkk1l3_m1", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was ist am Notruf ganz wichtig?", answers: ["sagen, wo du bist", "ein Lied singen", "schnell auflegen", "flüstern"], correct: 0,
                    explanation: "Sag, wo du bist und was passiert ist."
                },
                {
                    id: "vkk1l3_m2", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Welche Fahrzeuge haben Blaulicht?", answers: ["Feuerwehr und Polizei", "Bus und Taxi", "Traktor und Bagger", "Fahrrad und Roller"], correct: 0,
                    explanation: "Blaulicht haben Einsatzfahrzeuge."
                },
                {
                    id: "vkk1l3_m3", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Ein Krankenwagen kommt mit Sirene. Was tust du?", answers: ["Platz machen", "auf die Straße laufen", "hinterherrennen", "stehen bleiben im Weg"], correct: 0,
                    explanation: "Er muss schnell durchkommen."
                },
                {
                    id: "vkk1l3_m4", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Der Feueralarm klingelt. Was tust du?", answers: ["ruhig mit der Klasse raus", "die Schultasche packen", "dich verstecken", "weiter malen"], correct: 0,
                    explanation: "Ruhig mit der Klasse rausgehen."
                }
            ],
            schwer: [
                {
                    id: "vkk1l3_s1", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Darf man den Notruf aus Spaß anrufen?", answers: ["nein, nie", "ja, immer", "ja, am Wochenende", "ja, zum Testen"], correct: 0,
                    explanation: "Der Notruf ist nur für echte Notfälle."
                },
                {
                    id: "vkk1l3_s2", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Wer hilft, wenn du dich verlaufen hast?", answers: ["die Polizei", "die Müllabfuhr", "der Schornsteinfeger", "der Gärtner"], correct: 0,
                    explanation: "Die Polizei hilft dir."
                },
                {
                    id: "vkk1l3_s3", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Du siehst Rauch aus einem Haus. Was tust du?", answers: ["112 rufen", "näher hingehen", "hineingehen", "Fotos machen"], correct: 0,
                    explanation: "Abstand halten und 112 rufen."
                },
                {
                    id: "vkk1l3_s4", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "schwer", points: 10,
                    question: "Was hat ein Feuerwehrauto?", answers: ["Leiter und Schlauch", "Kühlschrank und Herd", "Bett und Kissen", "Klavier und Geige"], correct: 0,
                    explanation: "Damit löscht und rettet die Feuerwehr."
                }
            ]
        },
        test: [
                {
                    id: "vkk1l3_t1", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wer kommt bei der Nummer 112?", answers: ["Feuerwehr oder Krankenwagen", "Bäcker oder Briefträger", "Busfahrer oder Taxifahrer", "Lehrer oder Hausmeister"], correct: 0,
                    explanation: "112 – Feuerwehr und Krankenwagen."
                },
                {
                    id: "vkk1l3_t2", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Wer kommt bei der Nummer 110?", answers: ["die Polizei", "die Feuerwehr", "der Arzt", "der Lehrer"], correct: 0,
                    explanation: "110 – Polizei."
                },
                {
                    id: "vkk1l3_t3", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "🚨 Was bedeutet Blaulicht mit Sirene?", answers: ["ein Notfall", "eine Party", "ein Geburtstag", "ein Feiertag"], correct: 0,
                    explanation: "Ein Einsatzfahrzeug muss schnell helfen."
                },
                {
                    id: "vkk1l3_t4", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was sagst du am Telefon im Notfall?", answers: ["wo und was passiert ist", "deine Lieblingsfarbe", "einen Witz", "gar nichts"], correct: 0,
                    explanation: "Wo ist es? Was ist passiert?"
                },
                {
                    id: "vkk1l3_t5", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Was tust du beim Feueralarm?", answers: ["ruhig rausgehen", "im Klo verstecken", "Spielzeug suchen", "weiter spielen"], correct: 0,
                    explanation: "Ruhig und schnell raus."
                },
                {
                    id: "vkk1l3_t6", category: "kurs_vk_k1_l3", area: "schule", grade: 1,
                    subject: "sachunterricht", topic: "verkehr", difficulty: "mittel", points: 10,
                    question: "Welche Nummer rufst du für einen Krankenwagen?", answers: ["112", "110", "100", "123"], correct: 0,
                    explanation: "Krankenwagen: 112."
                }
        ],
        bestehenAb: 0.75
    }
    ];
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        extraKurse.forEach(function (k) {
            if (!KURSE.some(function (x) { return x.id === k.id; })) KURSE.push(k);
        });
    }
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
    if (typeof window !== "undefined") {
        window.SACHUNTERRICHT_K1_KURSE = extraKurse;
        window.SACHUNTERRICHT_K1_LEKTIONEN = extraLektionen;
    }
})();
