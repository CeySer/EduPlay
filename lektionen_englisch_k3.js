// Englisch Klasse 3 - Familie/Gefuehle, Wetter/Zeit, Essen/Kleidung, Haus/Stadt, Saetze
// 5 Kurse mit je 3 Lektionen - erzeugt aus /tmp/en3/d1..d5.js.
// Klasse 3 hatte vorher keinen Englisch-Kurs.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "familie_en_k3", title: "Familie, Freunde, Gefühle", icon: "👪", grade: 3, subject: "englisch", beschreibung: "Familienwörter, Gefühle ausdrücken und sich selbst und Freunde beschreiben." },
        { id: "wetter_en_k3", title: "Wetter, Tage, Jahreszeiten", icon: "⛅", grade: 3, subject: "englisch", beschreibung: "Das Wetter beschreiben, Wochentage, Monate und Jahreszeiten auf Englisch." },
        { id: "essen_kleidung_en_k3", title: "Essen, Kleidung, Farben", icon: "👕", grade: 3, subject: "englisch", beschreibung: "Essen und Trinken, Kleidung und sagen, was man mag und was nicht." },
        { id: "haus_stadt_en_k3", title: "Zuhause und in der Stadt", icon: "🏠", grade: 3, subject: "englisch", beschreibung: "Zimmer und Möbel, sagen wo etwas ist, Orte in der Stadt." },
        { id: "saetze_en_k3", title: "Englische Sätze bauen", icon: "💬", grade: 3, subject: "englisch", beschreibung: "am, is, are – have got und has got – like und likes, can und Fragen." }
    ];
    const extraLektionen = [
    {
        id: "enfa_k3_l1", kurs: "familie_en_k3", order: 1, icon: "👵",
        title: "Meine Familie", kurz: "aunt, uncle, cousin, parents …",
        erklaerung: {
            intro: "Die Familie: <b>mother</b>/<b>mum</b> (Mutter), <b>father</b>/<b>dad</b> (Vater), <b>parents</b> (Eltern), <b>sister</b>, <b>brother</b>, <b>grandmother</b> (Oma), <b>grandfather</b> (Opa), <b>aunt</b> (Tante), <b>uncle</b> (Onkel), <b>cousin</b> (Cousin oder Cousine), <b>son</b> (Sohn) und <b>daughter</b> (Tochter).",
            beispiele: ["This is my aunt. – Das ist meine Tante.",
                "I have got two cousins. – Ich habe zwei Cousins.",
                "My parents are nice. – Meine Eltern sind nett."],
            merksatz: "My mum's sister is my aunt. My dad's brother is my uncle."
        },
        uebung: {
            leicht: [
                {
                    id: "enfak3l1_l1", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'aunt'?", answers: ["Tante", "Onkel", "Oma", "Cousine"], correct: 0,
                    explanation: "Aunt heißt Tante."
                },
                {
                    id: "enfak3l1_l2", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'uncle'?", answers: ["Onkel", "Tante", "Opa", "Vater"], correct: 0,
                    explanation: "Uncle heißt Onkel."
                },
                {
                    id: "enfak3l1_l3", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Eltern' auf Englisch?", answers: ["parents", "children", "friends", "cousins"], correct: 0,
                    explanation: "Eltern heißt parents."
                },
                {
                    id: "enfak3l1_l4", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'grandfather'?", answers: ["Großvater", "Großmutter", "Urgroßvater", "Stiefvater"], correct: 0,
                    explanation: "Grandfather heißt Großvater – kurz grandpa."
                }
            ],
            mittel: [
                {
                    id: "enfak3l1_m1", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Tochter' auf Englisch?", answers: ["daughter", "son", "sister", "grandmother"], correct: 0,
                    explanation: "Tochter heißt daughter, Sohn heißt son."
                },
                {
                    id: "enfak3l1_m2", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'son'?", answers: ["Sohn", "Sonne", "Bruder", "Onkel"], correct: 0,
                    explanation: "Son heißt Sohn. Die Sonne heißt sun!"
                },
                {
                    id: "enfak3l1_m3", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Die Schwester deiner Mutter heißt auf Englisch …", answers: ["aunt", "uncle", "cousin", "sister"], correct: 0,
                    explanation: "Die Schwester von Mum ist deine aunt."
                },
                {
                    id: "enfak3l1_m4", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Das Kind deines Onkels heißt auf Englisch …", answers: ["cousin", "nephew", "brother", "uncle"], correct: 0,
                    explanation: "Die Kinder von Tante und Onkel sind deine cousins."
                }
            ],
            schwer: [
                {
                    id: "enfak3l1_s1", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I have got two brothers'?", answers: ["Ich habe zwei Brüder.", "Ich bin zwei Brüder.", "Ich habe zwei Schwestern.", "Meine Brüder sind zwei."], correct: 0,
                    explanation: "I have got heißt ich habe."
                },
                {
                    id: "enfak3l1_s2", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Wie heißt die Mehrzahl von 'child'?", answers: ["children", "childs", "childes", "childen"], correct: 0,
                    explanation: "Ein Kind: child – mehrere Kinder: children."
                },
                {
                    id: "enfak3l1_s3", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'my grandparents'?", answers: ["meine Großeltern", "meine Eltern", "meine Enkel", "meine Urgroßeltern"], correct: 0,
                    explanation: "Grandparents sind Großeltern: Oma und Opa."
                },
                {
                    id: "enfak3l1_s4", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Ich bin ein Einzelkind.' auf Englisch?", answers: ["I am an only child.", "I am a lonely child.", "I have one child.", "I am the one child."], correct: 0,
                    explanation: "Einzelkind heißt only child."
                }
            ]
        },
        test: [
                {
                    id: "enfak3l1_t1", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'mother'?", answers: ["Mutter", "Vater", "Tochter", "Tante"], correct: 0,
                    explanation: "Mother heißt Mutter."
                },
                {
                    id: "enfak3l1_t2", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Onkel' auf Englisch?", answers: ["uncle", "aunt", "ankle", "cousin"], correct: 0,
                    explanation: "Onkel heißt uncle. Ankle ist der Knöchel!"
                },
                {
                    id: "enfak3l1_t3", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'This is my grandmother'?", answers: ["Das ist meine Oma.", "Das ist meine Mama.", "Das ist meine Tante.", "Das ist mein Opa."], correct: 0,
                    explanation: "Grandmother heißt Oma."
                },
                {
                    id: "enfak3l1_t4", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Der Bruder deines Vaters heißt auf Englisch …", answers: ["uncle", "aunt", "grandfather", "cousin"], correct: 0,
                    explanation: "Der Bruder von Dad ist dein uncle."
                },
                {
                    id: "enfak3l1_t5", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'daughter'?", answers: ["Tochter", "Sohn", "Enkelin", "Tante"], correct: 0,
                    explanation: "Daughter heißt Tochter."
                },
                {
                    id: "enfak3l1_t6", category: "kurs_enfa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Welches Wort gehört NICHT zur Familie?", answers: ["teacher", "sister", "grandma", "cousin"], correct: 0,
                    explanation: "Teacher ist die Lehrerin oder der Lehrer."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enfa_k3_l2", kurs: "familie_en_k3", order: 2, icon: "😊",
        title: "Wie fühlst du dich?", kurz: "happy, sad, angry, scared …",
        erklaerung: {
            intro: "Gefühle auf Englisch: <b>happy</b> (froh), <b>sad</b> (traurig), <b>angry</b> (wütend), <b>tired</b> (müde), <b>scared</b> (ängstlich), <b>bored</b> (gelangweilt), <b>hungry</b> (hungrig), <b>thirsty</b> (durstig). Frage: <b>How are you?</b> – <b>I'm happy.</b> Über andere: <b>He is sad. She is angry.</b>",
            beispiele: ["I'm scared of spiders. – Ich habe Angst vor Spinnen.",
                "She is very happy. – Sie ist sehr froh.",
                "Are you tired? – Bist du müde?"],
            merksatz: "I'm happy. You are sad. He is angry. She is tired."
        },
        uebung: {
            leicht: [
                {
                    id: "enfak3l2_l1", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'angry'?", answers: ["wütend", "traurig", "müde", "froh"], correct: 0,
                    explanation: "Angry heißt wütend."
                },
                {
                    id: "enfak3l2_l2", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'tired'?", answers: ["müde", "wütend", "hungrig", "krank"], correct: 0,
                    explanation: "Tired heißt müde."
                },
                {
                    id: "enfak3l2_l3", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "😊 Wie fühlt sich das Kind auf Englisch?", answers: ["happy", "sad", "angry", "scared"], correct: 0,
                    explanation: "Das Kind lacht – es ist happy."
                },
                {
                    id: "enfak3l2_l4", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'traurig' auf Englisch?", answers: ["sad", "glad", "bad", "mad"], correct: 0,
                    explanation: "Traurig heißt sad."
                }
            ],
            mittel: [
                {
                    id: "enfak3l2_m1", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'scared'?", answers: ["ängstlich", "gelangweilt", "wütend", "überrascht"], correct: 0,
                    explanation: "Scared heißt ängstlich – I'm scared heißt Ich habe Angst."
                },
                {
                    id: "enfak3l2_m2", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'bored'?", answers: ["gelangweilt", "beschäftigt", "fröhlich", "müde"], correct: 0,
                    explanation: "Bored heißt gelangweilt."
                },
                {
                    id: "enfak3l2_m3", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich habe Durst.' auf Englisch?", answers: ["I'm thirsty.", "I'm thirty.", "I have thirst.", "I'm hungry."], correct: 0,
                    explanation: "Durstig heißt thirsty. Thirty ist die Zahl 30!"
                },
                {
                    id: "enfak3l2_m4", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "😠 Wie fühlt sich das Kind auf Englisch?", answers: ["angry", "happy", "bored", "hungry"], correct: 0,
                    explanation: "Das Kind ist wütend – angry."
                }
            ],
            schwer: [
                {
                    id: "enfak3l2_s1", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'She is scared of dogs'?", answers: ["Sie hat Angst vor Hunden.", "Sie mag Hunde sehr.", "Sie ist ein Hund.", "Sie spielt gern mit Hunden."], correct: 0,
                    explanation: "Scared of heißt Angst haben vor."
                },
                {
                    id: "enfak3l2_s2", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["He is tired.", "He are tired.", "He am tired.", "He be tired."], correct: 0,
                    explanation: "Bei he, she, it heißt es is."
                },
                {
                    id: "enfak3l2_s3", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Wie fragst du 'Bist du hungrig?' auf Englisch?", answers: ["Are you hungry?", "Is you hungry?", "Do you hungry?", "Am you hungry?"], correct: 0,
                    explanation: "Bei you heißt es are – in der Frage steht are vorn."
                },
                {
                    id: "enfak3l2_s4", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I'm not hungry'?", answers: ["Ich habe keinen Hunger.", "Ich habe großen Hunger.", "Ich bin nicht müde.", "Ich habe keinen Durst."], correct: 0,
                    explanation: "Not heißt nicht."
                }
            ]
        },
        test: [
                {
                    id: "enfak3l2_t1", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'happy'?", answers: ["froh", "traurig", "wütend", "müde"], correct: 0,
                    explanation: "Happy heißt froh oder glücklich."
                },
                {
                    id: "enfak3l2_t2", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'hungrig' auf Englisch?", answers: ["hungry", "angry", "happy", "thirsty"], correct: 0,
                    explanation: "Hungrig heißt hungry."
                },
                {
                    id: "enfak3l2_t3", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "😢 Wie fühlt sich das Kind auf Englisch?", answers: ["sad", "happy", "angry", "bored"], correct: 0,
                    explanation: "Das Kind weint – es ist sad."
                },
                {
                    id: "enfak3l2_t4", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'We are happy'?", answers: ["Wir sind froh.", "Wir sind traurig.", "Ihr seid froh.", "Sie ist froh."], correct: 0,
                    explanation: "We heißt wir."
                },
                {
                    id: "enfak3l2_t5", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["They are bored.", "They is bored.", "They am bored.", "They be bored."], correct: 0,
                    explanation: "Bei they heißt es are."
                },
                {
                    id: "enfak3l2_t6", category: "kurs_enfa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich bin nicht traurig.' auf Englisch?", answers: ["I'm not sad.", "I'm sad not.", "I not am sad.", "Not I'm sad."], correct: 0,
                    explanation: "Not steht nach am: I'm not sad."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enfa_k3_l3", kurs: "familie_en_k3", order: 3, icon: "🙋",
        title: "Ich und meine Freunde", kurz: "sich vorstellen, he und she",
        erklaerung: {
            intro: "So stellst du dich vor: <b>My name is Lena. I'm nine years old. I live in Berlin.</b> Über einen Freund: <b>This is my friend Tom. He is funny.</b> Über eine Freundin: <b>She has got long hair.</b>",
            beispiele: ["I'm nine years old. – Ich bin neun Jahre alt.",
                "She has got blue eyes. – Sie hat blaue Augen.",
                "He is my best friend. – Er ist mein bester Freund."],
            merksatz: "he = er (für Jungen), she = sie (für Mädchen). He is … / She is …"
        },
        uebung: {
            leicht: [
                {
                    id: "enfak3l3_l1", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'friend'?", answers: ["Freund", "Feind", "Fremder", "Freitag"], correct: 0,
                    explanation: "Friend heißt Freund oder Freundin."
                },
                {
                    id: "enfak3l3_l2", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'I'm nine years old'?", answers: ["Ich bin neun Jahre alt.", "Ich bin neunzehn Jahre alt.", "Ich habe neun Jahre.", "Ich bin nicht alt."], correct: 0,
                    explanation: "Nine heißt neun, years old heißt Jahre alt."
                },
                {
                    id: "enfak3l3_l3", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Für ein Mädchen sagst du auf Englisch …", answers: ["she", "he", "they", "we"], correct: 0,
                    explanation: "Für ein Mädchen sagst du she."
                },
                {
                    id: "enfak3l3_l4", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "leicht", points: 10,
                    question: "Was heißt 'funny'?", answers: ["lustig", "fies", "faul", "freundlich"], correct: 0,
                    explanation: "Funny heißt lustig."
                }
            ],
            mittel: [
                {
                    id: "enfak3l3_m1", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'He has got short hair'?", answers: ["Er hat kurze Haare.", "Er hat lange Haare.", "Sie hat kurze Haare.", "Er hat keine Haare."], correct: 0,
                    explanation: "Short heißt kurz, long heißt lang."
                },
                {
                    id: "enfak3l3_m2", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'best friend'?", answers: ["bester Freund", "bester Feind", "großer Bruder", "neuer Freund"], correct: 0,
                    explanation: "Best friend heißt bester Freund oder beste Freundin."
                },
                {
                    id: "enfak3l3_m3", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich wohne in Köln.' auf Englisch?", answers: ["I live in Cologne.", "I love in Cologne.", "I life in Cologne.", "I leave in Cologne."], correct: 0,
                    explanation: "Wohnen heißt live. Köln heißt auf Englisch Cologne."
                },
                {
                    id: "enfak3l3_m4", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'nice'?", answers: ["nett", "neu", "nass", "nie"], correct: 0,
                    explanation: "Nice heißt nett oder schön."
                }
            ],
            schwer: [
                {
                    id: "enfak3l3_s1", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["She has got blue eyes.", "She have got blue eyes.", "She has got eyes blue.", "She is got blue eyes."], correct: 0,
                    explanation: "Bei she heißt es has got, und die Farbe steht vor dem Nomen."
                },
                {
                    id: "enfak3l3_s2", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'tall'?", answers: ["groß", "klein", "dick", "laut"], correct: 0,
                    explanation: "Tall heißt groß – für Menschen und Bäume."
                },
                {
                    id: "enfak3l3_s3", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Where do you live'?", answers: ["Wo wohnst du?", "Wo bist du?", "Wie lebst du?", "Wann kommst du?"], correct: 0,
                    explanation: "Where heißt wo, live heißt wohnen."
                },
                {
                    id: "enfak3l3_s4", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "schwer", points: 10,
                    question: "Was heißt 'My friend is very kind'?", answers: ["Mein Freund ist sehr nett.", "Mein Freund ist ein Kind.", "Mein Freund ist sehr klein.", "Mein Kind ist sehr nett."], correct: 0,
                    explanation: "Das englische Wort kind heißt freundlich, nett – nicht Kind!"
                }
            ]
        },
        test: [
                {
                    id: "enfak3l3_t1", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Freundin' auf Englisch?", answers: ["friend", "girl", "sister", "neighbour"], correct: 0,
                    explanation: "Freund und Freundin heißen beide friend."
                },
                {
                    id: "enfak3l3_t2", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Für einen Jungen sagst du auf Englisch …", answers: ["he", "she", "it", "they"], correct: 0,
                    explanation: "Für einen Jungen sagst du he."
                },
                {
                    id: "enfak3l3_t3", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'She is ten years old'?", answers: ["Sie ist zehn Jahre alt.", "Sie ist zwei Jahre alt.", "Er ist zehn Jahre alt.", "Sie hat zehn Jahre."], correct: 0,
                    explanation: "She heißt sie, ten heißt zehn."
                },
                {
                    id: "enfak3l3_t4", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'long hair'?", answers: ["lange Haare", "kurze Haare", "lange Hasen", "blonde Haare"], correct: 0,
                    explanation: "Long heißt lang, hair heißt Haare."
                },
                {
                    id: "enfak3l3_t5", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Er ist lustig.' auf Englisch?", answers: ["He is funny.", "She is funny.", "He is sunny.", "He are funny."], correct: 0,
                    explanation: "Er heißt he, lustig heißt funny."
                },
                {
                    id: "enfak3l3_t6", category: "kurs_enfa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "family_feelings", difficulty: "mittel", points: 10,
                    question: "Was heißt 'small'?", answers: ["klein", "schmal", "langsam", "groß"], correct: 0,
                    explanation: "Small heißt klein."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enwe_k3_l1", kurs: "wetter_en_k3", order: 1, icon: "☀️",
        title: "Das Wetter", kurz: "sunny, rainy, windy, cloudy …",
        erklaerung: {
            intro: "<b>What's the weather like?</b> heißt Wie ist das Wetter? Antwort: <b>It's sunny</b> (sonnig), <b>rainy</b> (regnerisch), <b>windy</b> (windig), <b>cloudy</b> (bewölkt), <b>snowy</b> (verschneit), <b>foggy</b> (neblig), <b>hot</b> (heiß), <b>cold</b> (kalt), <b>warm</b> (warm).",
            beispiele: ["It's sunny and hot. – Es ist sonnig und heiß.",
                "It's cold and windy. – Es ist kalt und windig.",
                "It's raining. – Es regnet."],
            merksatz: "sun → sunny, rain → rainy, wind → windy, cloud → cloudy, snow → snowy."
        },
        uebung: {
            leicht: [
                {
                    id: "enwek3l1_l1", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'cloudy'?", answers: ["bewölkt", "sonnig", "windig", "regnerisch"], correct: 0,
                    explanation: "Cloud ist die Wolke – cloudy heißt bewölkt."
                },
                {
                    id: "enwek3l1_l2", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'windy'?", answers: ["windig", "sonnig", "kalt", "nass"], correct: 0,
                    explanation: "Windy heißt windig."
                },
                {
                    id: "enwek3l1_l3", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "☀️ Wie ist das Wetter auf Englisch?", answers: ["It's sunny.", "It's rainy.", "It's snowy.", "It's windy."], correct: 0,
                    explanation: "Die Sonne scheint – it's sunny."
                },
                {
                    id: "enwek3l1_l4", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'kalt' auf Englisch?", answers: ["cold", "hot", "cool", "warm"], correct: 0,
                    explanation: "Kalt heißt cold. Cool heißt kühl."
                }
            ],
            mittel: [
                {
                    id: "enwek3l1_m1", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "🌧️ Wie ist das Wetter auf Englisch?", answers: ["It's rainy.", "It's sunny.", "It's foggy.", "It's hot."], correct: 0,
                    explanation: "Es regnet – it's rainy."
                },
                {
                    id: "enwek3l1_m2", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'What's the weather like'?", answers: ["Wie ist das Wetter?", "Wie warm ist es?", "Magst du das Wetter?", "Wo ist das Wetter?"], correct: 0,
                    explanation: "Hier heißt like nicht mögen: What's … like? heißt Wie ist …?"
                },
                {
                    id: "enwek3l1_m3", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'hot'?", answers: ["heiß", "Hut", "kalt", "hoch"], correct: 0,
                    explanation: "Hot heißt heiß."
                },
                {
                    id: "enwek3l1_m4", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "❄️ Wie ist das Wetter auf Englisch?", answers: ["It's snowy.", "It's sunny.", "It's windy.", "It's foggy."], correct: 0,
                    explanation: "Es schneit – it's snowy."
                }
            ],
            schwer: [
                {
                    id: "enwek3l1_s1", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Welches Wort passt? 'It's ___ today. Take an umbrella!'", answers: ["rainy", "sunny", "hot", "dry"], correct: 0,
                    explanation: "Einen Regenschirm (umbrella) braucht man, wenn es regnet."
                },
                {
                    id: "enwek3l1_s2", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Was heißt 'It's foggy'?", answers: ["Es ist neblig.", "Es ist frostig.", "Es ist feucht.", "Es ist windig."], correct: 0,
                    explanation: "Fog ist der Nebel – foggy heißt neblig."
                },
                {
                    id: "enwek3l1_s3", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Aus 'sun' wird das Wetterwort …", answers: ["sunny", "suny", "sunnie", "Sunday"], correct: 0,
                    explanation: "Das n wird verdoppelt: sun → sunny."
                },
                {
                    id: "enwek3l1_s4", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Es ist warm und sonnig.' auf Englisch?", answers: ["It's warm and sunny.", "It's warm and snowy.", "It's cold and sunny.", "It's warm and rainy."], correct: 0,
                    explanation: "Warm bleibt warm, sonnig heißt sunny."
                }
            ]
        },
        test: [
                {
                    id: "enwek3l1_t1", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'sunny'?", answers: ["sonnig", "sandig", "windig", "bewölkt"], correct: 0,
                    explanation: "Sunny heißt sonnig."
                },
                {
                    id: "enwek3l1_t2", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'windig' auf Englisch?", answers: ["windy", "window", "wind", "winter"], correct: 0,
                    explanation: "Windig heißt windy. Window ist das Fenster!"
                },
                {
                    id: "enwek3l1_t3", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "⛅ Wie ist das Wetter auf Englisch?", answers: ["It's cloudy.", "It's snowy.", "It's stormy.", "It's foggy."], correct: 0,
                    explanation: "Wolken vor der Sonne – it's cloudy."
                },
                {
                    id: "enwek3l1_t4", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'It's cold and windy'?", answers: ["Es ist kalt und windig.", "Es ist warm und windig.", "Es ist kalt und nass.", "Es ist kalt und sonnig."], correct: 0,
                    explanation: "Cold heißt kalt, windy heißt windig."
                },
                {
                    id: "enwek3l1_t5", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Welches Wetterwort passt? 'It's ___. Let's build a snowman!'", answers: ["snowy", "sunny", "hot", "rainy"], correct: 0,
                    explanation: "Für einen Schneemann braucht man Schnee – snowy."
                },
                {
                    id: "enwek3l1_t6", category: "kurs_enwe_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'rainbow'?", answers: ["Regenbogen", "Regenschirm", "Regenwurm", "Regentropfen"], correct: 0,
                    explanation: "Rain heißt Regen, bow heißt Bogen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enwe_k3_l2", kurs: "wetter_en_k3", order: 2, icon: "📅",
        title: "Die Wochentage", kurz: "Monday bis Sunday",
        erklaerung: {
            intro: "Die Wochentage: <b>Monday</b> (Montag), <b>Tuesday</b> (Dienstag), <b>Wednesday</b> (Mittwoch), <b>Thursday</b> (Donnerstag), <b>Friday</b> (Freitag), <b>Saturday</b> (Samstag), <b>Sunday</b> (Sonntag). Wochentage schreibt man auf Englisch immer groß. <b>today</b> = heute, <b>tomorrow</b> = morgen, <b>yesterday</b> = gestern, <b>weekend</b> = Wochenende.",
            beispiele: ["On Monday I go to school. – Am Montag gehe ich zur Schule.",
                "Today is Friday. – Heute ist Freitag.",
                "See you tomorrow! – Bis morgen!"],
            merksatz: "Monday, Tuesday, Wednesday, Thursday, Friday – dann das weekend: Saturday und Sunday!"
        },
        uebung: {
            leicht: [
                {
                    id: "enwek3l2_l1", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Tuesday'?", answers: ["Dienstag", "Donnerstag", "Mittwoch", "Montag"], correct: 0,
                    explanation: "Tuesday heißt Dienstag."
                },
                {
                    id: "enwek3l2_l2", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Wednesday'?", answers: ["Mittwoch", "Montag", "Dienstag", "Donnerstag"], correct: 0,
                    explanation: "Wednesday heißt Mittwoch. Man spricht es wie Wensdei."
                },
                {
                    id: "enwek3l2_l3", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Samstag' auf Englisch?", answers: ["Saturday", "Sunday", "Thursday", "Tuesday"], correct: 0,
                    explanation: "Samstag heißt Saturday."
                },
                {
                    id: "enwek3l2_l4", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'today'?", answers: ["heute", "morgen", "gestern", "Tag"], correct: 0,
                    explanation: "Today heißt heute."
                }
            ],
            mittel: [
                {
                    id: "enwek3l2_m1", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Thursday'?", answers: ["Donnerstag", "Dienstag", "Freitag", "Samstag"], correct: 0,
                    explanation: "Thursday heißt Donnerstag."
                },
                {
                    id: "enwek3l2_m2", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Welcher Tag kommt nach 'Monday'?", answers: ["Tuesday", "Thursday", "Sunday", "Wednesday"], correct: 0,
                    explanation: "Nach Montag kommt Dienstag – Tuesday."
                },
                {
                    id: "enwek3l2_m3", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'tomorrow'?", answers: ["morgen", "gestern", "heute", "übermorgen"], correct: 0,
                    explanation: "Tomorrow heißt morgen."
                },
                {
                    id: "enwek3l2_m4", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'weekend'?", answers: ["Wochenende", "Wochentag", "Werktag", "Wochenmitte"], correct: 0,
                    explanation: "Week heißt Woche, end heißt Ende."
                }
            ],
            schwer: [
                {
                    id: "enwek3l2_s1", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Welcher Tag kommt vor 'Friday'?", answers: ["Thursday", "Saturday", "Tuesday", "Wednesday"], correct: 0,
                    explanation: "Vor Freitag kommt Donnerstag – Thursday."
                },
                {
                    id: "enwek3l2_s2", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Welche Tage sind das 'weekend'?", answers: ["Saturday and Sunday", "Friday and Saturday", "Sunday and Monday", "Monday and Friday"], correct: 0,
                    explanation: "Das Wochenende sind Samstag und Sonntag."
                },
                {
                    id: "enwek3l2_s3", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig geschrieben?", answers: ["See you on Monday!", "See you on monday!", "See you at Monday!", "See you in Monday!"], correct: 0,
                    explanation: "Wochentage schreibt man groß und sagt on Monday."
                },
                {
                    id: "enwek3l2_s4", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Was heißt 'yesterday'?", answers: ["gestern", "morgen", "heute", "vorgestern"], correct: 0,
                    explanation: "Yesterday heißt gestern."
                }
            ]
        },
        test: [
                {
                    id: "enwek3l2_t1", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Freitag' auf Englisch?", answers: ["Friday", "Sunday", "Monday", "Saturday"], correct: 0,
                    explanation: "Freitag heißt Friday."
                },
                {
                    id: "enwek3l2_t2", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Sunday'?", answers: ["Sonntag", "Samstag", "Montag", "Freitag"], correct: 0,
                    explanation: "Sunday heißt Sonntag."
                },
                {
                    id: "enwek3l2_t3", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Welcher Tag kommt nach 'Saturday'?", answers: ["Sunday", "Monday", "Friday", "Thursday"], correct: 0,
                    explanation: "Nach Samstag kommt Sonntag – Sunday."
                },
                {
                    id: "enwek3l2_t4", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Today is Wednesday'?", answers: ["Heute ist Mittwoch.", "Heute ist Montag.", "Morgen ist Mittwoch.", "Gestern war Mittwoch."], correct: 0,
                    explanation: "Today heißt heute, Wednesday heißt Mittwoch."
                },
                {
                    id: "enwek3l2_t5", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Bis morgen!' auf Englisch?", answers: ["See you tomorrow!", "See you today!", "Good morning!", "See you yesterday!"], correct: 0,
                    explanation: "Bis morgen heißt See you tomorrow!"
                },
                {
                    id: "enwek3l2_t6", category: "kurs_enwe_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Wie viele 'days' hat eine 'week'?", answers: ["7", "5", "10", "12"], correct: 0,
                    explanation: "Eine Woche hat sieben Tage."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enwe_k3_l3", kurs: "wetter_en_k3", order: 3, icon: "🍂",
        title: "Monate und Jahreszeiten", kurz: "spring, summer, autumn, winter",
        erklaerung: {
            intro: "Die Jahreszeiten (<b>seasons</b>): <b>spring</b> (Frühling), <b>summer</b> (Sommer), <b>autumn</b> (Herbst), <b>winter</b> (Winter). Die Monate: <b>January, February, March, April, May, June, July, August, September, October, November, December</b> – auch sie schreibt man groß.",
            beispiele: ["In summer it's hot. – Im Sommer ist es heiß.",
                "My birthday is in May. – Mein Geburtstag ist im Mai.",
                "In autumn the leaves fall. – Im Herbst fallen die Blätter."],
            merksatz: "spring – summer – autumn – winter. Monate und Wochentage immer groß!"
        },
        uebung: {
            leicht: [
                {
                    id: "enwek3l3_l1", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'summer'?", answers: ["Sommer", "Winter", "Herbst", "Frühling"], correct: 0,
                    explanation: "Summer heißt Sommer."
                },
                {
                    id: "enwek3l3_l2", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Herbst' auf Englisch?", answers: ["autumn", "August", "winter", "spring"], correct: 0,
                    explanation: "Herbst heißt autumn. In Amerika sagt man auch fall."
                },
                {
                    id: "enwek3l3_l3", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "Was heißt 'spring' als Jahreszeit?", answers: ["Frühling", "Sommer", "Weihnachten", "Herbst"], correct: 0,
                    explanation: "Spring heißt Frühling."
                },
                {
                    id: "enwek3l3_l4", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "leicht", points: 10,
                    question: "⛄ In welcher Jahreszeit baust du einen 'snowman'?", answers: ["winter", "summer", "spring", "autumn"], correct: 0,
                    explanation: "Schnee gibt es im Winter."
                }
            ],
            mittel: [
                {
                    id: "enwek3l3_m1", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Welcher Monat kommt nach 'March'?", answers: ["April", "May", "June", "February"], correct: 0,
                    explanation: "Nach März kommt April."
                },
                {
                    id: "enwek3l3_m2", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Dezember' auf Englisch?", answers: ["December", "November", "October", "September"], correct: 0,
                    explanation: "Dezember heißt December."
                },
                {
                    id: "enwek3l3_m3", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "In welcher Jahreszeit ist es am heißesten? (Englisch)", answers: ["summer", "winter", "autumn", "spring"], correct: 0,
                    explanation: "Am heißesten ist es im Sommer – summer."
                },
                {
                    id: "enwek3l3_m4", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Juli' auf Englisch?", answers: ["July", "June", "May", "January"], correct: 0,
                    explanation: "Juli heißt July, Juni heißt June."
                }
            ],
            schwer: [
                {
                    id: "enwek3l3_s1", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Was heißt 'My birthday is in May'?", answers: ["Mein Geburtstag ist im Mai.", "Mein Geburtstag ist im März.", "Mein Geburtstag ist heute.", "Ich habe im Mai Ferien."], correct: 0,
                    explanation: "Birthday heißt Geburtstag, May heißt Mai."
                },
                {
                    id: "enwek3l3_s2", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Welcher Monat ist der erste im Jahr?", answers: ["January", "December", "June", "March"], correct: 0,
                    explanation: "Das Jahr beginnt mit January."
                },
                {
                    id: "enwek3l3_s3", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Wie viele 'months' hat ein Jahr?", answers: ["12", "10", "7", "4"], correct: 0,
                    explanation: "Ein Jahr hat zwölf Monate."
                },
                {
                    id: "enwek3l3_s4", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig geschrieben?", answers: ["My birthday is in June.", "My birthday is in june.", "My Birthday is in june.", "my birthday is in June."], correct: 0,
                    explanation: "Monate schreibt man groß, birthday klein."
                }
            ]
        },
        test: [
                {
                    id: "enwek3l3_t1", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'autumn'?", answers: ["Herbst", "Frühling", "August", "Winter"], correct: 0,
                    explanation: "Autumn heißt Herbst."
                },
                {
                    id: "enwek3l3_t2", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Frühling' auf Englisch?", answers: ["spring", "summer", "string", "season"], correct: 0,
                    explanation: "Frühling heißt spring."
                },
                {
                    id: "enwek3l3_t3", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Welcher Monat kommt vor 'September'?", answers: ["August", "October", "July", "November"], correct: 0,
                    explanation: "Vor September kommt August."
                },
                {
                    id: "enwek3l3_t4", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'In summer it's hot'?", answers: ["Im Sommer ist es heiß.", "Im Winter ist es heiß.", "Im Sommer ist es kalt.", "Im Herbst ist es heiß."], correct: 0,
                    explanation: "Summer heißt Sommer, hot heißt heiß."
                },
                {
                    id: "enwek3l3_t5", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "Was heißt 'seasons'?", answers: ["Jahreszeiten", "Wochentage", "Monate", "Sonnenstunden"], correct: 0,
                    explanation: "Seasons sind die vier Jahreszeiten."
                },
                {
                    id: "enwek3l3_t6", category: "kurs_enwe_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "weather_seasons", difficulty: "mittel", points: 10,
                    question: "In welchem Monat ist Weihnachten? (Englisch)", answers: ["December", "November", "January", "October"], correct: 0,
                    explanation: "Weihnachten ist im Dezember – December."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enek_k3_l1", kurs: "essen_kleidung_en_k3", order: 1, icon: "🍎",
        title: "Essen und Trinken", kurz: "bread, cheese, juice …",
        erklaerung: {
            intro: "Essen (<b>food</b>) und Trinken (<b>drinks</b>): <b>apple</b>, <b>banana</b>, <b>pear</b> (Birne), <b>strawberry</b> (Erdbeere), <b>bread</b> (Brot), <b>cheese</b> (Käse), <b>egg</b> (Ei), <b>carrot</b> (Möhre), <b>milk</b> (Milch), <b>juice</b> (Saft), <b>water</b> (Wasser). Gemüse heißt <b>vegetables</b>.",
            beispiele: ["an apple – ein Apfel",
                "a glass of milk – ein Glas Milch",
                "bread and cheese – Brot und Käse"],
            merksatz: "I like apples. I don't like carrots. – Ich mag Äpfel. Ich mag keine Möhren."
        },
        uebung: {
            leicht: [
                {
                    id: "enekk3l1_l1", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "Was heißt 'bread'?", answers: ["Brot", "Bart", "Brett", "Butter"], correct: 0,
                    explanation: "Bread heißt Brot."
                },
                {
                    id: "enekk3l1_l2", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "🧀 Wie heißt das auf Englisch?", answers: ["cheese", "chips", "cherry", "chicken"], correct: 0,
                    explanation: "Käse heißt cheese."
                },
                {
                    id: "enekk3l1_l3", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "Was heißt 'juice'?", answers: ["Saft", "Suppe", "Soße", "Sahne"], correct: 0,
                    explanation: "Juice heißt Saft."
                },
                {
                    id: "enekk3l1_l4", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "🥚 Wie heißt das auf Englisch?", answers: ["egg", "eye", "ear", "end"], correct: 0,
                    explanation: "Das Ei heißt egg."
                }
            ],
            mittel: [
                {
                    id: "enekk3l1_m1", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Möhre' auf Englisch?", answers: ["carrot", "cabbage", "parrot", "potato"], correct: 0,
                    explanation: "Möhre heißt carrot. Parrot ist ein Papagei!"
                },
                {
                    id: "enekk3l1_m2", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'a glass of water'?", answers: ["ein Glas Wasser", "eine Flasche Wasser", "ein Glas Milch", "ein Glas Saft"], correct: 0,
                    explanation: "Glass heißt Glas, water heißt Wasser."
                },
                {
                    id: "enekk3l1_m3", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'strawberry'?", answers: ["Erdbeere", "Himbeere", "Strohhalm", "Blaubeere"], correct: 0,
                    explanation: "Strawberry heißt Erdbeere."
                },
                {
                    id: "enekk3l1_m4", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "🍞 Wie heißt das auf Englisch?", answers: ["bread", "butter", "cake", "brown"], correct: 0,
                    explanation: "Das Brot heißt bread."
                }
            ],
            schwer: [
                {
                    id: "enekk3l1_s1", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I don't like fish'?", answers: ["Ich mag keinen Fisch.", "Ich mag Fisch.", "Ich esse gern Fisch.", "Ich habe keinen Fisch."], correct: 0,
                    explanation: "I don't like heißt ich mag nicht."
                },
                {
                    id: "enekk3l1_s2", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Wie heißt die Mehrzahl von 'cherry'?", answers: ["cherries", "cherrys", "cherryes", "cherris"], correct: 0,
                    explanation: "Nach einem Mitlaut wird y zu ies: cherry → cherries."
                },
                {
                    id: "enekk3l1_s3", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Kann ich bitte Wasser haben?' auf Englisch?", answers: ["Can I have water, please?", "Can I water, please?", "I can have water, please?", "Have I water, please?"], correct: 0,
                    explanation: "Höflich fragen: Can I have …, please?"
                },
                {
                    id: "enekk3l1_s4", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Was heißt 'vegetables'?", answers: ["Gemüse", "Obst", "Getränke", "Gewürze"], correct: 0,
                    explanation: "Vegetables heißt Gemüse."
                }
            ]
        },
        test: [
                {
                    id: "enekk3l1_t1", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Milch' auf Englisch?", answers: ["milk", "meal", "mild", "melon"], correct: 0,
                    explanation: "Milch heißt milk."
                },
                {
                    id: "enekk3l1_t2", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'pear'?", answers: ["Birne", "Bär", "Pfirsich", "Paar"], correct: 0,
                    explanation: "Pear heißt Birne. Der Bär heißt bear!"
                },
                {
                    id: "enekk3l1_t3", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "🥕 Wie heißt das auf Englisch?", answers: ["carrot", "potato", "tomato", "onion"], correct: 0,
                    explanation: "Die Möhre heißt carrot."
                },
                {
                    id: "enekk3l1_t4", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'breakfast'?", answers: ["Frühstück", "Mittagessen", "Abendessen", "Nachtisch"], correct: 0,
                    explanation: "Breakfast heißt Frühstück."
                },
                {
                    id: "enekk3l1_t5", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I like bananas'?", answers: ["Ich mag Bananen.", "Ich habe Bananen.", "Ich esse Bananen.", "Ich kaufe Bananen."], correct: 0,
                    explanation: "Like heißt mögen."
                },
                {
                    id: "enekk3l1_t6", category: "kurs_enek_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Getränk?", answers: ["juice", "cheese", "bread", "carrot"], correct: 0,
                    explanation: "Juice (Saft) kann man trinken."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enek_k3_l2", kurs: "essen_kleidung_en_k3", order: 2, icon: "👗",
        title: "Kleidung", kurz: "T-shirt, trousers, dress …",
        erklaerung: {
            intro: "Kleidung (<b>clothes</b>): <b>T-shirt</b>, <b>jumper</b> (Pullover), <b>trousers</b> (Hose), <b>skirt</b> (Rock), <b>dress</b> (Kleid), <b>jacket</b> (Jacke), <b>shoes</b> (Schuhe), <b>socks</b> (Socken), <b>cap</b> (Kappe, Schirmmütze), <b>hat</b> (Hut). <b>Trousers</b> ist immer Mehrzahl: <b>My trousers are blue.</b>",
            beispiele: ["a blue dress – ein blaues Kleid",
                "my new shoes – meine neuen Schuhe",
                "She is wearing a skirt. – Sie trägt einen Rock."],
            merksatz: "I'm wearing a red T-shirt. – Ich trage ein rotes T-Shirt."
        },
        uebung: {
            leicht: [
                {
                    id: "enekk3l2_l1", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "👗 Wie heißt das auf Englisch?", answers: ["dress", "skirt", "shirt", "shoes"], correct: 0,
                    explanation: "Das Kleid heißt dress."
                },
                {
                    id: "enekk3l2_l2", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "Was heißt 'skirt'?", answers: ["Rock", "Hemd", "Schal", "Mütze"], correct: 0,
                    explanation: "Skirt heißt Rock."
                },
                {
                    id: "enekk3l2_l3", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "👟 Wie heißt das auf Englisch?", answers: ["shoe", "sock", "hat", "glove"], correct: 0,
                    explanation: "Der Schuh heißt shoe."
                },
                {
                    id: "enekk3l2_l4", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "Was heißt 'socks'?", answers: ["Socken", "Schuhe", "Stöcke", "Hosen"], correct: 0,
                    explanation: "Socks heißt Socken."
                }
            ],
            mittel: [
                {
                    id: "enekk3l2_m1", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Pullover' auf Englisch?", answers: ["jumper", "jacket", "trousers", "dress"], correct: 0,
                    explanation: "In England heißt der Pullover jumper."
                },
                {
                    id: "enekk3l2_m2", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'trousers'?", answers: ["Hose", "Schuhe", "Rock", "Jacke"], correct: 0,
                    explanation: "Trousers heißt Hose."
                },
                {
                    id: "enekk3l2_m3", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "🧦 Wie heißt das auf Englisch?", answers: ["socks", "shoes", "boots", "gloves"], correct: 0,
                    explanation: "Socken heißen socks."
                },
                {
                    id: "enekk3l2_m4", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich trage eine Kappe.' auf Englisch?", answers: ["I'm wearing a cap.", "I'm carrying a cap.", "I'm wearing a cup.", "I'm washing a cap."], correct: 0,
                    explanation: "Kleidung tragen heißt wear. Cup ist eine Tasse!"
                }
            ],
            schwer: [
                {
                    id: "enekk3l2_s1", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["My trousers are blue.", "My trousers is blue.", "My trouser are blue.", "My trousers am blue."], correct: 0,
                    explanation: "Trousers ist Mehrzahl – also are."
                },
                {
                    id: "enekk3l2_s2", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Was heißt 'clothes'?", answers: ["Kleidung", "Wolken", "Schuhe", "Kleiderbügel"], correct: 0,
                    explanation: "Clothes heißt Kleidung. Wolken heißen clouds!"
                },
                {
                    id: "enekk3l2_s3", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Sie trägt ein gelbes Kleid.' auf Englisch?", answers: ["She is wearing a yellow dress.", "She is wearing a dress yellow.", "She wearing a yellow dress.", "She is wear a yellow dress."], correct: 0,
                    explanation: "She is wearing … und die Farbe steht vor dem Nomen."
                },
                {
                    id: "enekk3l2_s4", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Was heißt 'hat'?", answers: ["Hut", "Haar", "Hemd", "Handschuh"], correct: 0,
                    explanation: "Hat heißt Hut."
                }
            ]
        },
        test: [
                {
                    id: "enekk3l2_t1", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Rock' (Kleidung) auf Englisch?", answers: ["skirt", "rock", "shirt", "sock"], correct: 0,
                    explanation: "Der Rock heißt skirt. Das englische Wort rock heißt Felsen!"
                },
                {
                    id: "enekk3l2_t2", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "👕 Wie heißt das auf Englisch?", answers: ["T-shirt", "jumper", "skirt", "jacket"], correct: 0,
                    explanation: "Das heißt auch auf Englisch T-shirt."
                },
                {
                    id: "enekk3l2_t3", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'shoes'?", answers: ["Schuhe", "Socken", "Shorts", "Schals"], correct: 0,
                    explanation: "Shoes heißt Schuhe."
                },
                {
                    id: "enekk3l2_t4", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Jacke' auf Englisch?", answers: ["jacket", "jumper", "dress", "cap"], correct: 0,
                    explanation: "Jacke heißt jacket."
                },
                {
                    id: "enekk3l2_t5", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'my new socks'?", answers: ["meine neuen Socken", "meine neuen Schuhe", "meine alten Socken", "mein neuer Rock"], correct: 0,
                    explanation: "New heißt neu, socks heißt Socken."
                },
                {
                    id: "enekk3l2_t6", category: "kurs_enek_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "🎩 Wie heißt das auf Englisch?", answers: ["hat", "cap", "hut", "head"], correct: 0,
                    explanation: "Der Hut heißt hat. Das englische Wort hut heißt Hütte!"
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enek_k3_l3", kurs: "essen_kleidung_en_k3", order: 3, icon: "🎨",
        title: "Mögen und Lieblingsfarben", kurz: "I like, I don't like, favourite",
        erklaerung: {
            intro: "Mit <b>I like</b> sagst du, was du magst, mit <b>I don't like</b>, was du nicht magst. Frage: <b>Do you like pizza?</b> – <b>Yes, I do.</b> oder <b>No, I don't.</b> Lieblings-: <b>My favourite colour is green.</b>",
            beispiele: ["I like red. – Ich mag Rot.",
                "I don't like grey. – Ich mag Grau nicht.",
                "What's your favourite colour? – Was ist deine Lieblingsfarbe?"],
            merksatz: "Do you like …? – Yes, I do. / No, I don't."
        },
        uebung: {
            leicht: [
                {
                    id: "enekk3l3_l1", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "Was heißt 'I like pizza'?", answers: ["Ich mag Pizza.", "Ich backe Pizza.", "Ich habe Pizza.", "Ich sehe Pizza."], correct: 0,
                    explanation: "Like heißt mögen."
                },
                {
                    id: "enekk3l3_l2", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "Welche Farbe ist 'pink'?", answers: ["rosa", "lila", "rot", "braun"], correct: 0,
                    explanation: "Pink heißt rosa."
                },
                {
                    id: "enekk3l3_l3", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "Was heißt 'favourite'?", answers: ["Lieblings-", "farbig", "berühmt", "fröhlich"], correct: 0,
                    explanation: "Favourite heißt Lieblings-: favourite colour = Lieblingsfarbe."
                },
                {
                    id: "enekk3l3_l4", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "leicht", points: 10,
                    question: "Wie antwortest du auf 'Do you like cats?' mit Ja?", answers: ["Yes, I do.", "Yes, I like.", "Yes, I am.", "Yes, I can."], correct: 0,
                    explanation: "Auf Do you …? antwortest du Yes, I do."
                }
            ],
            mittel: [
                {
                    id: "enekk3l3_m1", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I don't like tomatoes'?", answers: ["Ich mag keine Tomaten.", "Ich mag Tomaten.", "Ich habe keine Tomaten.", "Ich esse Tomaten."], correct: 0,
                    explanation: "Don't like heißt mag nicht."
                },
                {
                    id: "enekk3l3_m2", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Wie antwortest du auf 'Do you like milk?' mit Nein?", answers: ["No, I don't.", "No, I not.", "No, I am not.", "No, I doesn't."], correct: 0,
                    explanation: "Auf Do you …? antwortest du No, I don't."
                },
                {
                    id: "enekk3l3_m3", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Welche Farbe entsteht aus 'red' und 'white'?", answers: ["pink", "purple", "orange", "brown"], correct: 0,
                    explanation: "Rot und Weiß ergeben Rosa – pink."
                },
                {
                    id: "enekk3l3_m4", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'What's your favourite colour'?", answers: ["Was ist deine Lieblingsfarbe?", "Welche Farbe hat dein Pulli?", "Magst du bunte Farben?", "Welche Farbe ist das?"], correct: 0,
                    explanation: "Favourite colour heißt Lieblingsfarbe."
                }
            ],
            schwer: [
                {
                    id: "enekk3l3_s1", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Welche Farbe entsteht aus 'red' und 'yellow'?", answers: ["orange", "green", "purple", "brown"], correct: 0,
                    explanation: "Rot und Gelb ergeben Orange."
                },
                {
                    id: "enekk3l3_s2", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["I don't like carrots.", "I not like carrots.", "I doesn't like carrots.", "I no like carrots."], correct: 0,
                    explanation: "Verneinung mit don't: I don't like …"
                },
                {
                    id: "enekk3l3_s3", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Do you like ice cream'?", answers: ["Magst du Eis?", "Hast du Eis?", "Isst du Eis?", "Möchtest du Eis?"], correct: 0,
                    explanation: "Do you like …? heißt Magst du …? Möchtest du heißt Would you like."
                },
                {
                    id: "enekk3l3_s4", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Mein Lieblingsessen ist Pizza.' auf Englisch?", answers: ["My favourite food is pizza.", "My favourite pizza is food.", "I favourite food is pizza.", "My like food is pizza."], correct: 0,
                    explanation: "Lieblingsessen heißt favourite food."
                }
            ]
        },
        test: [
                {
                    id: "enekk3l3_t1", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I like blue'?", answers: ["Ich mag Blau.", "Ich bin blau.", "Ich habe Blau.", "Ich male blau."], correct: 0,
                    explanation: "Like heißt mögen, blue heißt blau."
                },
                {
                    id: "enekk3l3_t2", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Welche Farbe entsteht aus 'blue' und 'red'?", answers: ["purple", "green", "orange", "yellow"], correct: 0,
                    explanation: "Blau und Rot ergeben Lila – purple."
                },
                {
                    id: "enekk3l3_t3", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I love chocolate'?", answers: ["Ich liebe Schokolade.", "Ich esse Schokolade.", "Ich kaufe Schokolade.", "Ich teile Schokolade."], correct: 0,
                    explanation: "Love heißt lieben."
                },
                {
                    id: "enekk3l3_t4", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich mag keine Spinnen.' auf Englisch?", answers: ["I don't like spiders.", "I like spiders.", "I doesn't like spiders.", "I not like spiders."], correct: 0,
                    explanation: "Bei I heißt die Verneinung don't."
                },
                {
                    id: "enekk3l3_t5", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Wie antwortest du auf 'Do you like rain?' mit Nein?", answers: ["No, I don't.", "No, I doesn't.", "No, I'm not.", "No, I can't."], correct: 0,
                    explanation: "Auf Do you …? antwortest du No, I don't."
                },
                {
                    id: "enekk3l3_t6", category: "kurs_enek_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "food_clothes", difficulty: "mittel", points: 10,
                    question: "Was heißt 'colour'?", answers: ["Farbe", "Kohle", "Kleidung", "Bild"], correct: 0,
                    explanation: "Colour heißt Farbe. In Amerika schreibt man color."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enhs_k3_l1", kurs: "haus_stadt_en_k3", order: 1, icon: "🛏️",
        title: "Die Zimmer", kurz: "kitchen, bedroom, bathroom …",
        erklaerung: {
            intro: "Im Haus (<b>house</b>): <b>kitchen</b> (Küche), <b>bedroom</b> (Schlafzimmer), <b>bathroom</b> (Badezimmer), <b>living room</b> (Wohnzimmer), <b>stairs</b> (Treppe), <b>garden</b> (Garten). Mein eigenes Zimmer: <b>my room</b>. Oben heißt <b>upstairs</b>, unten <b>downstairs</b>.",
            beispiele: ["I sleep in the bedroom. – Ich schlafe im Schlafzimmer.",
                "Mum is in the kitchen. – Mama ist in der Küche.",
                "We play in the garden. – Wir spielen im Garten."],
            merksatz: "bed → bedroom, bath → bathroom, live → living room."
        },
        uebung: {
            leicht: [
                {
                    id: "enhsk3l1_l1", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'living room'?", answers: ["Wohnzimmer", "Kinderzimmer", "Esszimmer", "Badezimmer"], correct: 0,
                    explanation: "Living room heißt Wohnzimmer."
                },
                {
                    id: "enhsk3l1_l2", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Küche' auf Englisch?", answers: ["kitchen", "chicken", "kitten", "garden"], correct: 0,
                    explanation: "Küche heißt kitchen. Chicken ist ein Hähnchen, kitten ein Kätzchen!"
                },
                {
                    id: "enhsk3l1_l3", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'house'?", answers: ["Haus", "Hose", "Maus", "Hof"], correct: 0,
                    explanation: "House heißt Haus."
                },
                {
                    id: "enhsk3l1_l4", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "In welchem Zimmer schläfst du? (Englisch)", answers: ["bedroom", "bathroom", "kitchen", "hall"], correct: 0,
                    explanation: "Bed ist das Bett – geschlafen wird im bedroom."
                }
            ],
            mittel: [
                {
                    id: "enhsk3l1_m1", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Wo badest oder duschst du? (Englisch)", answers: ["bathroom", "bedroom", "living room", "kitchen"], correct: 0,
                    explanation: "Bath ist die Badewanne – also bathroom."
                },
                {
                    id: "enhsk3l1_m2", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'stairs'?", answers: ["Treppe", "Stern", "Stuhl", "Stall"], correct: 0,
                    explanation: "Stairs heißt Treppe. Stern heißt star."
                },
                {
                    id: "enhsk3l1_m3", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Mum is in the kitchen'?", answers: ["Mama ist in der Küche.", "Mama ist im Garten.", "Mama kocht Hähnchen.", "Mama ist im Schlafzimmer."], correct: 0,
                    explanation: "Kitchen heißt Küche."
                },
                {
                    id: "enhsk3l1_m4", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'garden'?", answers: ["Garten", "Garage", "Gardine", "Karton"], correct: 0,
                    explanation: "Garden heißt Garten."
                }
            ],
            schwer: [
                {
                    id: "enhsk3l1_s1", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'upstairs'?", answers: ["oben", "unten", "draußen", "drinnen"], correct: 0,
                    explanation: "Upstairs heißt oben – die Treppe hoch."
                },
                {
                    id: "enhsk3l1_s2", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'My room is small'?", answers: ["Mein Zimmer ist klein.", "Mein Zimmer ist groß.", "Mein Raum ist schmal.", "Mein Zimmer ist schön."], correct: 0,
                    explanation: "Small heißt klein."
                },
                {
                    id: "enhsk3l1_s3", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Wir haben einen Garten.' auf Englisch?", answers: ["We have got a garden.", "We has got a garden.", "We are a garden.", "We have got a garage."], correct: 0,
                    explanation: "Bei we heißt es have got."
                },
                {
                    id: "enhsk3l1_s4", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'downstairs'?", answers: ["unten", "oben", "draußen", "hinten"], correct: 0,
                    explanation: "Downstairs heißt unten – die Treppe runter."
                }
            ]
        },
        test: [
                {
                    id: "enhsk3l1_t1", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'bathroom'?", answers: ["Badezimmer", "Schlafzimmer", "Wohnzimmer", "Küche"], correct: 0,
                    explanation: "Bathroom heißt Badezimmer."
                },
                {
                    id: "enhsk3l1_t2", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Schlafzimmer' auf Englisch?", answers: ["bedroom", "bathroom", "living room", "hall"], correct: 0,
                    explanation: "Schlafzimmer heißt bedroom."
                },
                {
                    id: "enhsk3l1_t3", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "🏠 Wie heißt das auf Englisch?", answers: ["house", "horse", "mouse", "hose"], correct: 0,
                    explanation: "Das Haus heißt house."
                },
                {
                    id: "enhsk3l1_t4", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I'm in my room'?", answers: ["Ich bin in meinem Zimmer.", "Ich bin in meinem Haus.", "Ich bin im Garten.", "Ich bin in meiner Schule."], correct: 0,
                    explanation: "Room heißt Zimmer."
                },
                {
                    id: "enhsk3l1_t5", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'window'?", answers: ["Fenster", "Wind", "Winter", "Tür"], correct: 0,
                    explanation: "Window heißt Fenster."
                },
                {
                    id: "enhsk3l1_t6", category: "kurs_enhs_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Tür' auf Englisch?", answers: ["door", "floor", "window", "wall"], correct: 0,
                    explanation: "Tür heißt door. Floor ist der Fußboden."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enhs_k3_l2", kurs: "haus_stadt_en_k3", order: 2, icon: "🛋️",
        title: "Möbel und wo?", kurz: "on, in, under, next to …",
        erklaerung: {
            intro: "Möbel: <b>bed</b> (Bett), <b>table</b> (Tisch), <b>chair</b> (Stuhl), <b>sofa</b>, <b>cupboard</b> (Schrank), <b>lamp</b> (Lampe). Wo ist etwas? <b>in</b> (in), <b>on</b> (auf), <b>under</b> (unter), <b>next to</b> (neben), <b>behind</b> (hinter), <b>in front of</b> (vor), <b>between</b> (zwischen).",
            beispiele: ["The book is on the table. – Das Buch ist auf dem Tisch.",
                "The dog is under the bed. – Der Hund ist unter dem Bett.",
                "The lamp is next to the sofa. – Die Lampe ist neben dem Sofa."],
            merksatz: "The cat is on the bed. The ball is under the table."
        },
        uebung: {
            leicht: [
                {
                    id: "enhsk3l2_l1", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'chair'?", answers: ["Stuhl", "Tisch", "Schrank", "Sessel"], correct: 0,
                    explanation: "Chair heißt Stuhl."
                },
                {
                    id: "enhsk3l2_l2", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'table'?", answers: ["Tisch", "Tablette", "Tafel", "Teller"], correct: 0,
                    explanation: "Table heißt Tisch."
                },
                {
                    id: "enhsk3l2_l3", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'on'?", answers: ["auf", "unter", "neben", "in"], correct: 0,
                    explanation: "On heißt auf."
                },
                {
                    id: "enhsk3l2_l4", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'under'?", answers: ["unter", "über", "neben", "hinter"], correct: 0,
                    explanation: "Under heißt unter."
                }
            ],
            mittel: [
                {
                    id: "enhsk3l2_m1", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'The cat is on the bed'?", answers: ["Die Katze ist auf dem Bett.", "Die Katze ist unter dem Bett.", "Die Katze ist im Bett.", "Die Katze ist neben dem Bett."], correct: 0,
                    explanation: "On heißt auf."
                },
                {
                    id: "enhsk3l2_m2", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'next to'?", answers: ["neben", "nächste", "hinter", "zwischen"], correct: 0,
                    explanation: "Next to heißt neben."
                },
                {
                    id: "enhsk3l2_m3", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Schrank' auf Englisch?", answers: ["cupboard", "cup", "carpet", "curtain"], correct: 0,
                    explanation: "Schrank heißt cupboard. Carpet ist ein Teppich, curtain ein Vorhang."
                },
                {
                    id: "enhsk3l2_m4", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'behind'?", answers: ["hinter", "vor", "neben", "über"], correct: 0,
                    explanation: "Behind heißt hinter."
                }
            ],
            schwer: [
                {
                    id: "enhsk3l2_s1", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Der Ball ist unter dem Tisch: 'The ball is ___ the table.'", answers: ["under", "on", "in", "behind"], correct: 0,
                    explanation: "Unter heißt under."
                },
                {
                    id: "enhsk3l2_s2", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'The lamp is next to the sofa'?", answers: ["Die Lampe ist neben dem Sofa.", "Die Lampe ist auf dem Sofa.", "Die Lampe ist hinter dem Sofa.", "Die Lampe ist unter dem Sofa."], correct: 0,
                    explanation: "Next to heißt neben."
                },
                {
                    id: "enhsk3l2_s3", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Das Buch ist im Schrank.' auf Englisch?", answers: ["The book is in the cupboard.", "The book is on the cupboard.", "The book is in the cup.", "The book is at the cupboard."], correct: 0,
                    explanation: "In heißt in, Schrank heißt cupboard."
                },
                {
                    id: "enhsk3l2_s4", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'between'?", answers: ["zwischen", "hinter", "gegenüber", "neben"], correct: 0,
                    explanation: "Between heißt zwischen."
                }
            ]
        },
        test: [
                {
                    id: "enhsk3l2_t1", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'bed'?", answers: ["Bett", "Bad", "Beet", "Boden"], correct: 0,
                    explanation: "Bed heißt Bett."
                },
                {
                    id: "enhsk3l2_t2", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'in front of'?", answers: ["vor", "hinter", "neben", "auf"], correct: 0,
                    explanation: "In front of heißt vor."
                },
                {
                    id: "enhsk3l2_t3", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'unter' auf Englisch?", answers: ["under", "over", "on", "behind"], correct: 0,
                    explanation: "Unter heißt under."
                },
                {
                    id: "enhsk3l2_t4", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'The dog is behind the door'?", answers: ["Der Hund ist hinter der Tür.", "Der Hund ist vor der Tür.", "Der Hund ist an der Tür.", "Der Hund ist neben der Tür."], correct: 0,
                    explanation: "Behind heißt hinter."
                },
                {
                    id: "enhsk3l2_t5", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'lamp'?", answers: ["Lampe", "Lamm", "Lappen", "Land"], correct: 0,
                    explanation: "Lamp heißt Lampe. Lamm heißt lamb."
                },
                {
                    id: "enhsk3l2_t6", category: "kurs_enhs_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'auf' auf Englisch?", answers: ["on", "in", "under", "of"], correct: 0,
                    explanation: "Auf heißt on."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "enhs_k3_l3", kurs: "haus_stadt_en_k3", order: 3, icon: "🏙️",
        title: "In der Stadt", kurz: "shop, library, station …",
        erklaerung: {
            intro: "In der Stadt (<b>town</b>): <b>school</b> (Schule), <b>park</b>, <b>shop</b> (Laden), <b>supermarket</b>, <b>library</b> (Bücherei), <b>station</b> (Bahnhof), <b>hospital</b> (Krankenhaus), <b>swimming pool</b> (Schwimmbad), <b>cinema</b> (Kino), <b>church</b> (Kirche), <b>street</b> (Straße).",
            beispiele: ["I go to school. – Ich gehe zur Schule.",
                "The park is big. – Der Park ist groß.",
                "We go to the swimming pool. – Wir gehen ins Schwimmbad."],
            merksatz: "Library heißt Bücherei – nicht Labor! Station heißt Bahnhof."
        },
        uebung: {
            leicht: [
                {
                    id: "enhsk3l3_l1", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'library'?", answers: ["Bücherei", "Labor", "Lieferung", "Lehrerzimmer"], correct: 0,
                    explanation: "Library heißt Bücherei."
                },
                {
                    id: "enhsk3l3_l2", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'shop'?", answers: ["Laden", "Schaf", "Schuppen", "Schiff"], correct: 0,
                    explanation: "Shop heißt Laden. Schaf heißt sheep, Schiff heißt ship."
                },
                {
                    id: "enhsk3l3_l3", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'street'?", answers: ["Straße", "Streit", "Stern", "Strand"], correct: 0,
                    explanation: "Street heißt Straße."
                },
                {
                    id: "enhsk3l3_l4", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "leicht", points: 10,
                    question: "Was heißt 'Krankenhaus' auf Englisch?", answers: ["hospital", "hotel", "house", "hairdresser"], correct: 0,
                    explanation: "Krankenhaus heißt hospital."
                }
            ],
            mittel: [
                {
                    id: "enhsk3l3_m1", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'station'?", answers: ["Bahnhof", "Stadion", "Stadt", "Strand"], correct: 0,
                    explanation: "Station heißt Bahnhof."
                },
                {
                    id: "enhsk3l3_m2", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Schwimmbad' auf Englisch?", answers: ["swimming pool", "swimming school", "sweet pool", "pool table"], correct: 0,
                    explanation: "Schwimmbad heißt swimming pool."
                },
                {
                    id: "enhsk3l3_m3", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I go to the park'?", answers: ["Ich gehe in den Park.", "Ich parke das Auto.", "Ich bin im Park.", "Ich gehe aus dem Park."], correct: 0,
                    explanation: "Go to heißt gehen zu oder in."
                },
                {
                    id: "enhsk3l3_m4", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Wo kaufst du Brot? (Englisch)", answers: ["at the baker's", "at the library", "at the station", "at the hospital"], correct: 0,
                    explanation: "Brot gibt es beim Bäcker – at the baker's."
                }
            ],
            schwer: [
                {
                    id: "enhsk3l3_s1", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Where is the station'?", answers: ["Wo ist der Bahnhof?", "Wie weit ist der Bahnhof?", "Wann fährt der Zug?", "Ist das der Bahnhof?"], correct: 0,
                    explanation: "Where heißt wo."
                },
                {
                    id: "enhsk3l3_s2", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'church'?", answers: ["Kirche", "Kirsche", "Kino", "Küche"], correct: 0,
                    explanation: "Church heißt Kirche. Kirsche heißt cherry."
                },
                {
                    id: "enhsk3l3_s3", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'Kino' auf Englisch?", answers: ["cinema", "theatre", "kitchen", "circus"], correct: 0,
                    explanation: "Kino heißt cinema. Theatre ist das Theater."
                },
                {
                    id: "enhsk3l3_s4", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "schwer", points: 10,
                    question: "Was heißt 'I live in a small town'?", answers: ["Ich wohne in einer Kleinstadt.", "Ich wohne in einer Großstadt.", "Ich wohne in einem Turm.", "Ich liebe kleine Städte."], correct: 0,
                    explanation: "Small town heißt kleine Stadt."
                }
            ]
        },
        test: [
                {
                    id: "enhsk3l3_t1", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'school'?", answers: ["Schule", "Schal", "Stuhl", "Schaukel"], correct: 0,
                    explanation: "School heißt Schule."
                },
                {
                    id: "enhsk3l3_t2", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Bücherei' auf Englisch?", answers: ["library", "bookshop", "laboratory", "lorry"], correct: 0,
                    explanation: "Bücherei heißt library. Ein bookshop verkauft Bücher."
                },
                {
                    id: "enhsk3l3_t3", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'bridge'?", answers: ["Brücke", "Brille", "Brief", "Burg"], correct: 0,
                    explanation: "Bridge heißt Brücke."
                },
                {
                    id: "enhsk3l3_t4", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Bahnhof' auf Englisch?", answers: ["station", "stadium", "street", "stable"], correct: 0,
                    explanation: "Bahnhof heißt station."
                },
                {
                    id: "enhsk3l3_t5", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'We go to the swimming pool'?", answers: ["Wir gehen ins Schwimmbad.", "Wir gehen schwimmen lernen.", "Wir gehen zum Spielplatz.", "Wir gehen in die Schule."], correct: 0,
                    explanation: "Swimming pool heißt Schwimmbad."
                },
                {
                    id: "enhsk3l3_t6", category: "kurs_enhs_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "home_town", difficulty: "mittel", points: 10,
                    question: "Was heißt 'playground'?", answers: ["Spielplatz", "Sportplatz", "Parkplatz", "Spielzeug"], correct: 0,
                    explanation: "Play heißt spielen, ground heißt Boden oder Platz."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "ensa_k3_l1", kurs: "saetze_en_k3", order: 1, icon: "🗣️",
        title: "I am, you are, he is", kurz: "Das Wort sein: to be",
        erklaerung: {
            intro: "Das Wort <b>sein</b> heißt auf Englisch <b>to be</b>: <b>I am</b> (ich bin), <b>you are</b> (du bist), <b>he/she/it is</b> (er/sie/es ist), <b>we are</b> (wir sind), <b>they are</b> (sie sind). Kurzformen: <b>I'm, you're, he's, she's, it's</b>.",
            beispiele: ["I am nine. – Ich bin neun.",
                "She is my sister. – Sie ist meine Schwester.",
                "We are friends. – Wir sind Freunde."],
            merksatz: "I am – you are – he, she, it is – we are – they are."
        },
        uebung: {
            leicht: [
                {
                    id: "ensak3l1_l1", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was passt? 'I ___ nine years old.'", answers: ["am", "is", "are", "be"], correct: 0,
                    explanation: "Bei I heißt es am."
                },
                {
                    id: "ensak3l1_l2", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was passt? 'She ___ my sister.'", answers: ["is", "am", "are", "be"], correct: 0,
                    explanation: "Bei she heißt es is."
                },
                {
                    id: "ensak3l1_l3", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was passt? 'We ___ friends.'", answers: ["are", "is", "am", "be"], correct: 0,
                    explanation: "Bei we heißt es are."
                },
                {
                    id: "ensak3l1_l4", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was ist die Kurzform von 'I am'?", answers: ["I'm", "Im", "I'am", "Iam"], correct: 0,
                    explanation: "Das a fällt weg, dafür kommt ein Apostroph: I'm."
                }
            ],
            mittel: [
                {
                    id: "ensak3l1_m1", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'You ___ my best friend.'", answers: ["are", "is", "am", "be"], correct: 0,
                    explanation: "Bei you heißt es are."
                },
                {
                    id: "ensak3l1_m2", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'Tom and Lisa ___ at school.'", answers: ["are", "is", "am", "be"], correct: 0,
                    explanation: "Zwei Personen sind they – also are."
                },
                {
                    id: "ensak3l1_m3", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'The dog ___ hungry.'", answers: ["is", "are", "am", "be"], correct: 0,
                    explanation: "The dog ist it – also is."
                },
                {
                    id: "ensak3l1_m4", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Sie sind in der Küche.' (mehrere) auf Englisch?", answers: ["They are in the kitchen.", "They is in the kitchen.", "She is in the kitchen.", "Them are in the kitchen."], correct: 0,
                    explanation: "Mehrere Personen: they are."
                }
            ],
            schwer: [
                {
                    id: "ensak3l1_s1", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["It is a big house.", "It are a big house.", "It am a big house.", "It be a big house."], correct: 0,
                    explanation: "Bei it heißt es is."
                },
                {
                    id: "ensak3l1_s2", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Wie heißt die Verneinung von 'I am happy'?", answers: ["I am not happy.", "I not am happy.", "I amn't happy.", "I don't am happy."], correct: 0,
                    explanation: "Not kommt nach am: I am not."
                },
                {
                    id: "ensak3l1_s3", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Wie lautet die Frage zu 'You are tired.'?", answers: ["Are you tired?", "Am you tired?", "Is you tired?", "Do you are tired?"], correct: 0,
                    explanation: "In der Frage tauschen you und are die Plätze."
                },
                {
                    id: "ensak3l1_s4", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Was passt? '___ you from Germany?'", answers: ["Are", "Is", "Am", "Do"], correct: 0,
                    explanation: "Fragen mit you beginnen hier mit Are."
                }
            ]
        },
        test: [
                {
                    id: "ensak3l1_t1", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'He ___ my brother.'", answers: ["is", "are", "am", "be"], correct: 0,
                    explanation: "Bei he heißt es is."
                },
                {
                    id: "ensak3l1_t2", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'I ___ not tired.'", answers: ["am", "is", "are", "be"], correct: 0,
                    explanation: "Bei I heißt es am."
                },
                {
                    id: "ensak3l1_t3", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was ist die Kurzform von 'she is'?", answers: ["she's", "shes", "she'is", "s'he"], correct: 0,
                    explanation: "Das i fällt weg: she's."
                },
                {
                    id: "ensak3l1_t4", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'My parents ___ nice.'", answers: ["are", "is", "am", "be"], correct: 0,
                    explanation: "My parents sind they – also are."
                },
                {
                    id: "ensak3l1_t5", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["We are in class 3.", "We is in class 3.", "We am in class 3.", "Us are in class 3."], correct: 0,
                    explanation: "Bei we heißt es are."
                },
                {
                    id: "ensak3l1_t6", category: "kurs_ensa_k3_l1", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Es ist kalt.' auf Englisch?", answers: ["It is cold.", "It are cold.", "Is it cold.", "It am cold."], correct: 0,
                    explanation: "Es ist heißt it is."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "ensa_k3_l2", kurs: "saetze_en_k3", order: 2, icon: "🎁",
        title: "have got und has got", kurz: "Das Wort haben",
        erklaerung: {
            intro: "<b>haben</b> heißt <b>have got</b>: <b>I have got</b> (ich habe), <b>you have got</b>, <b>we/they have got</b>. Bei <b>he, she, it</b> wird daraus <b>has got</b>: <b>She has got a cat.</b> Kurz: <b>I've got, she's got</b>. Verneinung: <b>I haven't got a dog.</b>",
            beispiele: ["I have got a sister. – Ich habe eine Schwester.",
                "He has got a bike. – Er hat ein Fahrrad.",
                "We haven't got a car. – Wir haben kein Auto."],
            merksatz: "I, you, we, they have got – he, she, it has got."
        },
        uebung: {
            leicht: [
                {
                    id: "ensak3l2_l1", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was passt? 'I ___ got a dog.'", answers: ["have", "has", "am", "is"], correct: 0,
                    explanation: "Bei I heißt es have got."
                },
                {
                    id: "ensak3l2_l2", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was passt? 'She ___ got a cat.'", answers: ["has", "have", "is", "are"], correct: 0,
                    explanation: "Bei she heißt es has got."
                },
                {
                    id: "ensak3l2_l3", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was heißt 'He has got a bike'?", answers: ["Er hat ein Fahrrad.", "Er ist ein Fahrrad.", "Er will ein Fahrrad.", "Sie hat ein Fahrrad."], correct: 0,
                    explanation: "He has got heißt er hat."
                },
                {
                    id: "ensak3l2_l4", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was passt? 'We ___ got a big garden.'", answers: ["have", "has", "are", "is"], correct: 0,
                    explanation: "Bei we heißt es have got."
                }
            ],
            mittel: [
                {
                    id: "ensak3l2_m1", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'My brother ___ got a new ball.'", answers: ["has", "have", "is", "are"], correct: 0,
                    explanation: "My brother ist he – also has got."
                },
                {
                    id: "ensak3l2_m2", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'I haven't got a pet'?", answers: ["Ich habe kein Haustier.", "Ich habe ein Haustier.", "Ich will ein Haustier.", "Ich bin kein Haustier."], correct: 0,
                    explanation: "Haven't got heißt habe nicht oder habe kein."
                },
                {
                    id: "ensak3l2_m3", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was ist die Kurzform von 'I have got'?", answers: ["I've got", "I's got", "Iv got", "I have'got"], correct: 0,
                    explanation: "Ha fällt weg: I've got."
                },
                {
                    id: "ensak3l2_m4", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Wir haben zwei Katzen.' auf Englisch?", answers: ["We have got two cats.", "We has got two cats.", "We are got two cats.", "We have two cat."], correct: 0,
                    explanation: "Bei we heißt es have got, und Mehrzahl: cats."
                }
            ],
            schwer: [
                {
                    id: "ensak3l2_s1", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["It has got four legs.", "It have got four legs.", "It is got four legs.", "It has get four legs."], correct: 0,
                    explanation: "Bei it heißt es has got."
                },
                {
                    id: "ensak3l2_s2", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Was passt? 'Tom and Mia ___ got a rabbit.'", answers: ["have", "has", "is", "are"], correct: 0,
                    explanation: "Zwei Personen sind they – also have got."
                },
                {
                    id: "ensak3l2_s3", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Wie fragst du 'Hast du einen Bruder?' auf Englisch?", answers: ["Have you got a brother?", "Has you got a brother?", "Are you got a brother?", "Got you a brother?"], correct: 0,
                    explanation: "In der Frage steht have vorn: Have you got …?"
                },
                {
                    id: "ensak3l2_s4", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Wie antwortest du auf 'Have you got a pet?' mit Nein?", answers: ["No, I haven't.", "No, I hasn't.", "No, I don't got.", "No, I am not."], correct: 0,
                    explanation: "Kurze Antwort: No, I haven't."
                }
            ]
        },
        test: [
                {
                    id: "ensak3l2_t1", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'He ___ got blue eyes.'", answers: ["has", "have", "is", "are"], correct: 0,
                    explanation: "Bei he heißt es has got."
                },
                {
                    id: "ensak3l2_t2", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'You ___ got a nice room.'", answers: ["have", "has", "is", "am"], correct: 0,
                    explanation: "Bei you heißt es have got."
                },
                {
                    id: "ensak3l2_t3", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'She hasn't got a sister'?", answers: ["Sie hat keine Schwester.", "Sie hat eine Schwester.", "Sie ist keine Schwester.", "Er hat keine Schwester."], correct: 0,
                    explanation: "Hasn't got heißt hat kein."
                },
                {
                    id: "ensak3l2_t4", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was ist die Kurzform von 'she has got'?", answers: ["she's got", "she've got", "shes got", "she has'got"], correct: 0,
                    explanation: "Ha fällt weg: she's got."
                },
                {
                    id: "ensak3l2_t5", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Wie antwortest du auf 'Has she got a dog?' mit Ja?", answers: ["Yes, she has.", "Yes, she have.", "Yes, she is.", "Yes, she got."], correct: 0,
                    explanation: "Kurze Antwort: Yes, she has."
                },
                {
                    id: "ensak3l2_t6", category: "kurs_ensa_k3_l2", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Ich habe einen Hamster.' auf Englisch?", answers: ["I have got a hamster.", "I has got a hamster.", "I am got a hamster.", "I have got hamster."], correct: 0,
                    explanation: "Bei I heißt es have got – und das a nicht vergessen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "ensa_k3_l3", kurs: "saetze_en_k3", order: 3, icon: "❓",
        title: "likes, can und Fragen", kurz: "he likes, I can, Do you …?",
        erklaerung: {
            intro: "Bei <b>he, she, it</b> bekommt das Tunwort ein <b>-s</b>: <b>I like</b> – <b>she likes</b>, <b>I play</b> – <b>he plays</b>. <b>can</b> (kann) bleibt immer gleich: <b>I can swim, she can swim</b>. Nicht können: <b>can't</b>. Fragen: <b>Do you like …?</b>, <b>Does she like …?</b>, <b>Can you …?</b>",
            beispiele: ["She likes cats. – Sie mag Katzen.",
                "He can't swim. – Er kann nicht schwimmen.",
                "Can you ride a bike? – Kannst du Rad fahren?"],
            merksatz: "he, she, it – das -s muss mit! Aber: can bleibt can."
        },
        uebung: {
            leicht: [
                {
                    id: "ensak3l3_l1", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was passt? 'She ___ apples.'", answers: ["likes", "like", "liking", "is like"], correct: 0,
                    explanation: "Bei she bekommt like ein s: likes."
                },
                {
                    id: "ensak3l3_l2", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was passt? 'I ___ football.'", answers: ["play", "plays", "playing", "am play"], correct: 0,
                    explanation: "Bei I bleibt play ohne s."
                },
                {
                    id: "ensak3l3_l3", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was heißt 'I can swim'?", answers: ["Ich kann schwimmen.", "Ich will schwimmen.", "Ich muss schwimmen.", "Ich gehe schwimmen."], correct: 0,
                    explanation: "Can heißt kann."
                },
                {
                    id: "ensak3l3_l4", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "leicht", points: 10,
                    question: "Was heißt 'can't'?", answers: ["kann nicht", "kann gut", "will nicht", "darf"], correct: 0,
                    explanation: "Can't ist kurz für cannot – kann nicht."
                }
            ],
            mittel: [
                {
                    id: "ensak3l3_m1", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'He ___ to school every day.'", answers: ["goes", "go", "going", "gos"], correct: 0,
                    explanation: "Bei he wird go zu goes."
                },
                {
                    id: "ensak3l3_m2", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'Lisa can ___ very fast.'", answers: ["run", "runs", "running", "to run"], correct: 0,
                    explanation: "Nach can steht das Tunwort ohne s: can run."
                },
                {
                    id: "ensak3l3_m3", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Kannst du singen?' auf Englisch?", answers: ["Can you sing?", "Are you can sing?", "Do you can sing?", "Can you singing?"], correct: 0,
                    explanation: "In der Frage steht can vorn: Can you sing?"
                },
                {
                    id: "ensak3l3_m4", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? '___ you like pizza?'", answers: ["Do", "Does", "Are", "Is"], correct: 0,
                    explanation: "Fragen mit you: Do you like …?"
                }
            ],
            schwer: [
                {
                    id: "ensak3l3_s1", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["My dad likes coffee.", "My dad like coffee.", "My dad liking coffee.", "My dad is like coffee."], correct: 0,
                    explanation: "My dad ist he – also likes."
                },
                {
                    id: "ensak3l3_s2", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Was passt? '___ your sister like music?'", answers: ["Does", "Do", "Is", "Are"], correct: 0,
                    explanation: "Bei he, she, it fragt man mit Does."
                },
                {
                    id: "ensak3l3_s3", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["He can play the piano.", "He cans play the piano.", "He can plays the piano.", "He can to play the piano."], correct: 0,
                    explanation: "Can bekommt nie ein s, und danach steht das Tunwort ohne s."
                },
                {
                    id: "ensak3l3_s4", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "schwer", points: 10,
                    question: "Wie antwortest du auf 'Can you swim?' mit Nein?", answers: ["No, I can't.", "No, I don't.", "No, I not can.", "No, I am not."], correct: 0,
                    explanation: "Kurze Antwort: No, I can't."
                }
            ]
        },
        test: [
                {
                    id: "ensak3l3_t1", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'Tom ___ ice cream.'", answers: ["likes", "like", "liking", "is like"], correct: 0,
                    explanation: "Tom ist he – also likes."
                },
                {
                    id: "ensak3l3_t2", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'We ___ in Berlin.'", answers: ["live", "lives", "living", "is live"], correct: 0,
                    explanation: "Bei we bleibt live ohne s."
                },
                {
                    id: "ensak3l3_t3", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'She can't dance'?", answers: ["Sie kann nicht tanzen.", "Sie kann gut tanzen.", "Sie will nicht tanzen.", "Sie tanzt sehr gern."], correct: 0,
                    explanation: "Can't heißt kann nicht."
                },
                {
                    id: "ensak3l3_t4", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was passt? 'My cat ___ milk.'", answers: ["drinks", "drink", "drinking", "is drink"], correct: 0,
                    explanation: "My cat ist it – also drinks."
                },
                {
                    id: "ensak3l3_t5", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Was heißt 'Do you like dogs'?", answers: ["Magst du Hunde?", "Hast du Hunde?", "Siehst du Hunde?", "Möchtest du Hunde?"], correct: 0,
                    explanation: "Do you like …? heißt Magst du …?"
                },
                {
                    id: "ensak3l3_t6", category: "kurs_ensa_k3_l3", area: "schule", grade: 3,
                    subject: "englisch", topic: "sentences", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Can you ride a bike?", "Can you rides a bike?", "Do you can ride a bike?", "You can a bike ride?"], correct: 0,
                    explanation: "Frage mit can: Can you ride …?"
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
        window.ENGLISCH_K3_KURSE = extraKurse;
        window.ENGLISCH_K3_LEKTIONEN = extraLektionen;
    }
})();
