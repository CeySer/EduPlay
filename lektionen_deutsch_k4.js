// Deutsch Klasse 4 - Faelle, Rechtschreibung, Satzglieder, Lesen
// 4 Kurse mit je 3 Lektionen - erzeugt aus /tmp/gs/d4_1..4.js.
// Die Themen (topic) entsprechen genau den Wissensfragen derselben Klasse, damit
// die Kurs-Empfehlung aus dem Wissen-Modus den passenden Kurs findet.
// Wird NACH lektionen.js geladen.
(function () {
    const extraKurse = [
        { id: "faelle_k4", title: "Die vier Fälle", icon: "🔢", grade: 4, subject: "deutsch", beschreibung: "Nominativ, Genitiv, Dativ, Akkusativ erfragen, Artikel im richtigen Fall, Zeitformen und Hilfsverben." },
        { id: "rechtschreib_k4", title: "Rechtschreibung Klasse 4", icon: "✍️", grade: 4, subject: "deutsch", beschreibung: "das oder dass, s – ss – ß, Großschreibung mit Signalwörtern und Kommas." },
        { id: "satzglieder_k4", title: "Satzglieder bestimmen", icon: "🔗", grade: 4, subject: "deutsch", beschreibung: "Subjekt, Prädikat, Dativ- und Akkusativobjekt, adverbiale Bestimmungen, Haupt- und Nebensatz." },
        { id: "lesen_k4", title: "Texte lesen und verstehen", icon: "📚", grade: 4, subject: "deutsch", beschreibung: "Sage, Märchen, Fabel und Bericht, Gedichte und Reimschemata, Redewendungen und Zusammenfassungen." }
    ];
    const extraLektionen = [
    {
        id: "vf_k4_l1", kurs: "faelle_k4", order: 1, icon: "📝",
        title: "Die vier Fälle erfragen", kurz: "Wer? Wessen? Wem? Wen?",
        erklaerung: {
            intro: "Nomen stehen in vier <b>Fällen</b>: 1. <b>Nominativ</b> – Wer oder was? 2. <b>Genitiv</b> – Wessen? 3. <b>Dativ</b> – Wem? 4. <b>Akkusativ</b> – Wen oder was? Am Artikel erkennst du den Fall: der Hund – des Hundes – dem Hund – den Hund.",
            beispiele: ["Der Hund bellt. – Wer? Nominativ",
                "das Fell des Hundes – Wessen? Genitiv",
                "Ich gebe dem Hund Futter. – Wem? Dativ",
                "Ich sehe den Hund. – Wen? Akkusativ"],
            merksatz: "Wer? – Wessen? – Wem? – Wen? = Nominativ, Genitiv, Dativ, Akkusativ."
        },
        uebung: {
            leicht: [
                {
                    id: "vfk4l1_l1", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Wie fragt man nach dem Nominativ?", answers: ["Wer oder was?", "Wem?", "Wessen?", "Wen oder was?"], correct: 0,
                    explanation: "Nominativ: Wer oder was?"
                },
                {
                    id: "vfk4l1_l2", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Wie fragt man nach dem Dativ?", answers: ["Wem?", "Wessen?", "Wer oder was?", "Wen oder was?"], correct: 0,
                    explanation: "Dativ: Wem?"
                },
                {
                    id: "vfk4l1_l3", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Welcher Fall antwortet auf 'Wessen?'", answers: ["Genitiv", "Dativ", "Akkusativ", "Nominativ"], correct: 0,
                    explanation: "Genitiv: Wessen?"
                },
                {
                    id: "vfk4l1_l4", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Wie viele Fälle gibt es im Deutschen?", answers: ["4", "2", "3", "6"], correct: 0,
                    explanation: "Vier Fälle."
                }
            ],
            mittel: [
                {
                    id: "vfk4l1_m1", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'den Ball' in 'Ich werfe den Ball'?", answers: ["Akkusativ", "Nominativ", "Dativ", "Genitiv"], correct: 0,
                    explanation: "Wen oder was werfe ich? Den Ball."
                },
                {
                    id: "vfk4l1_m2", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'der Lehrer' in 'Der Lehrer lacht'?", answers: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], correct: 0,
                    explanation: "Wer lacht? Der Lehrer."
                },
                {
                    id: "vfk4l1_m3", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'dem Opa' in 'Ich helfe dem Opa'?", answers: ["Dativ", "Akkusativ", "Nominativ", "Genitiv"], correct: 0,
                    explanation: "Wem helfe ich? Dem Opa."
                },
                {
                    id: "vfk4l1_m4", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'des Autos' in 'die Tür des Autos'?", answers: ["Genitiv", "Dativ", "Akkusativ", "Nominativ"], correct: 0,
                    explanation: "Wessen Tür? Die Tür des Autos."
                }
            ],
            schwer: [
                {
                    id: "vfk4l1_s1", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Welcher Fall ist der 4. Fall?", answers: ["Akkusativ", "Dativ", "Genitiv", "Nominativ"], correct: 0,
                    explanation: "Der 4. Fall ist der Akkusativ."
                },
                {
                    id: "vfk4l1_s2", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Welche Frage passt zu 'meinem Bruder' in 'Ich schreibe meinem Bruder'?", answers: ["Wem?", "Wen?", "Wessen?", "Wer?"], correct: 0,
                    explanation: "Wem schreibe ich? Meinem Bruder."
                },
                {
                    id: "vfk4l1_s3", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "In welchem Fall steht das Subjekt?", answers: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], correct: 0,
                    explanation: "Das Subjekt steht immer im Nominativ."
                },
                {
                    id: "vfk4l1_s4", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "In welchem Fall steht 'die Katze' in 'Ich streichle die Katze'?", answers: ["Akkusativ", "Nominativ", "Dativ", "Genitiv"], correct: 0,
                    explanation: "Wen streichle ich? Die Katze."
                }
            ]
        },
        test: [
                {
                    id: "vfk4l1_t1", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welcher Fall antwortet auf 'Wen oder was?'", answers: ["Akkusativ", "Dativ", "Genitiv", "Nominativ"], correct: 0,
                    explanation: "Akkusativ."
                },
                {
                    id: "vfk4l1_t2", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welcher Fall ist der 3. Fall?", answers: ["Dativ", "Genitiv", "Akkusativ", "Nominativ"], correct: 0,
                    explanation: "Der Dativ."
                },
                {
                    id: "vfk4l1_t3", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'den Kuchen' in 'Mia backt den Kuchen'?", answers: ["Akkusativ", "Dativ", "Nominativ", "Genitiv"], correct: 0,
                    explanation: "Was backt Mia? Den Kuchen."
                },
                {
                    id: "vfk4l1_t4", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Wie fragt man nach dem Genitiv?", answers: ["Wessen?", "Wem?", "Wen?", "Wer?"], correct: 0,
                    explanation: "Genitiv: Wessen?"
                },
                {
                    id: "vfk4l1_t5", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'Tom' in 'Tom spielt Fußball'?", answers: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], correct: 0,
                    explanation: "Wer spielt? Tom."
                },
                {
                    id: "vfk4l1_t6", category: "kurs_vf_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welchem Fall steht 'der Oma' in 'Ich danke der Oma'?", answers: ["Dativ", "Nominativ", "Genitiv", "Akkusativ"], correct: 0,
                    explanation: "Wem danke ich? Der Oma."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "vf_k4_l2", kurs: "faelle_k4", order: 2, icon: "🎯",
        title: "Artikel im richtigen Fall", kurz: "der – des – dem – den",
        erklaerung: {
            intro: "Der Artikel ändert sich mit dem Fall. Männlich: <b>der – des – dem – den</b>. Weiblich: <b>die – der – der – die</b>. Sächlich: <b>das – des – dem – das</b>. Auch <b>ein</b> und <b>mein</b> ändern sich: ein Hund, eines Hundes, einem Hund, einen Hund.",
            beispiele: ["Ich sehe den Mann. (Akkusativ)",
                "Ich helfe dem Kind. (Dativ)",
                "das Buch der Lehrerin (Genitiv)"],
            merksatz: "Männlich wechselt am meisten: der – des – dem – den."
        },
        uebung: {
            leicht: [
                {
                    id: "vfk4l2_l1", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Ergänze den Akkusativ: 'Ich sehe ___ Hund.'", answers: ["den", "der", "dem", "des"], correct: 0,
                    explanation: "Wen sehe ich? Den Hund."
                },
                {
                    id: "vfk4l2_l2", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Ergänze den Dativ: 'Ich helfe ___ Mann.'", answers: ["dem", "den", "der", "des"], correct: 0,
                    explanation: "Wem helfe ich? Dem Mann."
                },
                {
                    id: "vfk4l2_l3", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'Ich gebe ___ Katze Milch.' (Dativ)", answers: ["der", "die", "den", "das"], correct: 0,
                    explanation: "Weiblich im Dativ: der Katze."
                },
                {
                    id: "vfk4l2_l4", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ Vogel singt.' (Nominativ)", answers: ["Der", "Den", "Dem", "Des"], correct: 0,
                    explanation: "Wer singt? Der Vogel."
                }
            ],
            mittel: [
                {
                    id: "vfk4l2_m1", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Ich gehe mit dem Hund.", "Ich gehe mit den Hund.", "Ich gehe mit der Hund.", "Ich gehe mit des Hund."], correct: 0,
                    explanation: "Nach 'mit' steht der Dativ."
                },
                {
                    id: "vfk4l2_m2", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Das ist das Rad ___ Bruders.'", answers: ["meines", "meinem", "meinen", "mein"], correct: 0,
                    explanation: "Wessen Rad? Das Rad meines Bruders."
                },
                {
                    id: "vfk4l2_m3", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Er kauft ___ Pullover.'", answers: ["einen", "einem", "eines", "ein"], correct: 0,
                    explanation: "Was kauft er? Einen Pullover."
                },
                {
                    id: "vfk4l2_m4", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Ich schenke dem Kind ein Buch.", "Ich schenke das Kind ein Buch.", "Ich schenke den Kind ein Buch.", "Ich schenke des Kind ein Buch."], correct: 0,
                    explanation: "Wem schenke ich? Dem Kind."
                }
            ],
            schwer: [
                {
                    id: "vfk4l2_s1", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Wegen des Regens bleiben wir.", "Wegen dem Regens bleiben wir.", "Wegen den Regen bleiben wir.", "Wegen der Regen bleiben wir."], correct: 0,
                    explanation: "Nach 'wegen' steht der Genitiv."
                },
                {
                    id: "vfk4l2_s2", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'Ich danke ___ Lehrerin.'", answers: ["der", "die", "den", "das"], correct: 0,
                    explanation: "Danken braucht den Dativ: der Lehrerin."
                },
                {
                    id: "vfk4l2_s3", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'Wir warten auf ___ Bus.'", answers: ["den", "dem", "der", "des"], correct: 0,
                    explanation: "Worauf warten wir? Auf den Bus."
                },
                {
                    id: "vfk4l2_s4", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Welche Form ist Genitiv?", answers: ["des Baumes", "dem Baum", "den Baum", "der Baum"], correct: 0,
                    explanation: "Des Baumes – Wessen?"
                }
            ]
        },
        test: [
                {
                    id: "vfk4l2_t1", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Ich rufe ___ Freund an.'", answers: ["meinen", "meinem", "meines", "mein"], correct: 0,
                    explanation: "Wen rufe ich an? Meinen Freund."
                },
                {
                    id: "vfk4l2_t2", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Er spielt mit ___ Ball.'", answers: ["dem", "den", "der", "des"], correct: 0,
                    explanation: "Nach 'mit' steht der Dativ."
                },
                {
                    id: "vfk4l2_t3", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Das Fell ___ Katze ist weich.'", answers: ["der", "die", "den", "dem"], correct: 0,
                    explanation: "Wessen Fell? Das Fell der Katze."
                },
                {
                    id: "vfk4l2_t4", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Ich sehe einen Vogel.", "Ich sehe einem Vogel.", "Ich sehe eines Vogel.", "Ich sehe ein Vogel."], correct: 0,
                    explanation: "Wen sehe ich? Einen Vogel."
                },
                {
                    id: "vfk4l2_t5", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Sie hilft ___ Kind.'", answers: ["dem", "das", "den", "des"], correct: 0,
                    explanation: "Wem hilft sie? Dem Kind."
                },
                {
                    id: "vfk4l2_t6", category: "kurs_vf_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ Mädchen lacht.' (Nominativ)", answers: ["Das", "Dem", "Den", "Des"], correct: 0,
                    explanation: "Wer lacht? Das Mädchen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "vf_k4_l3", kurs: "faelle_k4", order: 3, icon: "⏰",
        title: "Zeitformen und Hilfsverben", kurz: "sein, haben, werden – Plusquamperfekt",
        erklaerung: {
            intro: "Die Hilfsverben <b>sein, haben, werden</b> helfen beim Bilden von Zeitformen. <b>Perfekt</b>: ich habe gespielt. <b>Plusquamperfekt</b> (Vorvergangenheit): ich hatte gespielt – etwas war schon vorher passiert. <b>Futur I</b>: ich werde spielen.",
            beispiele: ["Nachdem ich gegessen hatte, spielte ich.",
                "ich bin gelaufen – Perfekt",
                "ich war gelaufen – Plusquamperfekt"],
            merksatz: "hatte gegessen, war gegangen = Plusquamperfekt."
        },
        uebung: {
            leicht: [
                {
                    id: "vfk4l3_l1", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Welches Wort ist ein Hilfsverb?", answers: ["haben", "holen", "hören", "hüpfen"], correct: 0,
                    explanation: "Haben ist ein Hilfsverb."
                },
                {
                    id: "vfk4l3_l2", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Wie viele Hilfsverben lernst du in dieser Lektion?", answers: ["3", "2", "5", "10"], correct: 0,
                    explanation: "Sein, haben und werden."
                },
                {
                    id: "vfk4l3_l3", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "In welcher Zeitform steht 'ich hatte gelesen'?", answers: ["Plusquamperfekt", "Perfekt", "Präteritum", "Futur"], correct: 0,
                    explanation: "Hatte + gelesen ist Plusquamperfekt."
                },
                {
                    id: "vfk4l3_l4", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "leicht", points: 10,
                    question: "Welches Hilfsverb braucht das Futur?", answers: ["werden", "haben", "sein", "können"], correct: 0,
                    explanation: "Ich werde …"
                }
            ],
            mittel: [
                {
                    id: "vfk4l3_m1", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Plusquamperfekt von 'wir spielen'?", answers: ["wir hatten gespielt", "wir haben gespielt", "wir spielten", "wir werden spielen"], correct: 0,
                    explanation: "Hatten + gespielt."
                },
                {
                    id: "vfk4l3_m2", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welcher Zeitform steht 'Sie war gekommen'?", answers: ["Plusquamperfekt", "Perfekt", "Präteritum", "Futur"], correct: 0,
                    explanation: "War + gekommen ist Plusquamperfekt."
                },
                {
                    id: "vfk4l3_m3", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welcher Satz steht im Perfekt?", answers: ["Ich habe gelacht.", "Ich hatte gelacht.", "Ich lachte.", "Ich werde lachen."], correct: 0,
                    explanation: "Habe + gelacht ist Perfekt."
                },
                {
                    id: "vfk4l3_m4", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Partizip II von 'schreiben'?", answers: ["geschrieben", "geschreibt", "schrieb", "geschreiben"], correct: 0,
                    explanation: "Schreiben – geschrieben."
                }
            ],
            schwer: [
                {
                    id: "vfk4l3_s1", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Was passt? 'Nachdem er gegessen ___, ging er.'", answers: ["hatte", "hat", "wird", "ist"], correct: 0,
                    explanation: "Was vorher war, steht im Plusquamperfekt."
                },
                {
                    id: "vfk4l3_s2", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Welcher Satz steht im Futur?", answers: ["Ich werde dich anrufen.", "Ich habe dich angerufen.", "Ich rief dich an.", "Ich rufe dich an."], correct: 0,
                    explanation: "Werde + anrufen ist Futur."
                },
                {
                    id: "vfk4l3_s3", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Welche Zeitform nutzt man beim schriftlichen Erzählen meist?", answers: ["Präteritum", "Futur", "Plusquamperfekt", "Präsens"], correct: 0,
                    explanation: "Geschichten erzählt man meist im Präteritum."
                },
                {
                    id: "vfk4l3_s4", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "schwer", points: 10,
                    question: "Welches Hilfsverb passt? 'Ich ___ gerannt.'", answers: ["bin", "habe", "werde", "hatte"], correct: 0,
                    explanation: "Rennen bildet das Perfekt mit sein."
                }
            ]
        },
        test: [
                {
                    id: "vfk4l3_t1", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "In welcher Zeitform steht 'Wir werden reisen'?", answers: ["Futur", "Perfekt", "Präteritum", "Präsens"], correct: 0,
                    explanation: "Werden + reisen ist Futur."
                },
                {
                    id: "vfk4l3_t2", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist KEIN Hilfsverb?", answers: ["laufen", "sein", "haben", "werden"], correct: 0,
                    explanation: "Laufen ist ein Vollverb."
                },
                {
                    id: "vfk4l3_t3", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Präteritum von 'ich habe'?", answers: ["ich hatte", "ich hätte", "ich habte", "ich hab"], correct: 0,
                    explanation: "Haben – hatte."
                },
                {
                    id: "vfk4l3_t4", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welcher Satz steht im Plusquamperfekt?", answers: ["Er hatte geschlafen.", "Er hat geschlafen.", "Er schlief.", "Er wird schlafen."], correct: 0,
                    explanation: "Hatte + geschlafen."
                },
                {
                    id: "vfk4l3_t5", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Wie heißt das Partizip II von 'fahren'?", answers: ["gefahren", "gefahrt", "fuhr", "gefuhren"], correct: 0,
                    explanation: "Fahren – gefahren."
                },
                {
                    id: "vfk4l3_t6", category: "kurs_vf_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "grammatik_4faelle", difficulty: "mittel", points: 10,
                    question: "Welches Hilfsverb passt? 'Ich ___ gelacht.'", answers: ["habe", "bin", "werde", "war"], correct: 0,
                    explanation: "Lachen bildet das Perfekt mit haben."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rs_k4_l1", kurs: "rechtschreib_k4", order: 1, icon: "🔀",
        title: "das oder dass", kurz: "Die dieses-jenes-welches-Probe",
        erklaerung: {
            intro: "<b>das</b> ist Artikel (das Haus) oder Pronomen (Das stimmt. / Das Buch, das ich lese). Probe: Kannst du <b>dieses, jenes</b> oder <b>welches</b> einsetzen, schreibst du <b>das</b>. <b>dass</b> ist ein Bindewort und leitet einen Nebensatz ein: Ich weiß, <b>dass</b> du kommst. Vor dass steht ein Komma.",
            beispiele: ["Das Buch, das ich lese, ist toll.",
                "Ich hoffe, dass es schneit.",
                "Das ist schön."],
            merksatz: "Passt dieses, jenes oder welches – dann das. Sonst dass."
        },
        uebung: {
            leicht: [
                {
                    id: "rsk4l1_l1", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Ergänze: 'Ich glaube, ___ du recht hast.'", answers: ["dass", "das", "daß", "des"], correct: 0,
                    explanation: "Bindewort: dass."
                },
                {
                    id: "rsk4l1_l2", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Ergänze: '___ Auto ist rot.'", answers: ["Das", "Dass", "Daß", "Des"], correct: 0,
                    explanation: "Artikel: das Auto."
                },
                {
                    id: "rsk4l1_l3", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Welches Wort kann man für den Artikel 'das' einsetzen?", answers: ["dieses", "weil", "wenn", "und"], correct: 0,
                    explanation: "Dieses Auto – also das."
                },
                {
                    id: "rsk4l1_l4", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Was steht vor 'dass' meistens?", answers: ["ein Komma", "ein Punkt", "ein Fragezeichen", "nichts"], correct: 0,
                    explanation: "Vor dass steht ein Komma."
                }
            ],
            mittel: [
                {
                    id: "rsk4l1_m1", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Das Haus, ___ dort steht, ist alt.'", answers: ["das", "dass", "dem", "den"], correct: 0,
                    explanation: "Welches dort steht – also das."
                },
                {
                    id: "rsk4l1_m2", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Er sagt, ___ er müde ist.'", answers: ["dass", "das", "weil", "denn"], correct: 0,
                    explanation: "Bindewort: dass."
                },
                {
                    id: "rsk4l1_m3", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Ich weiß, dass du lachst.", "Ich weiß, das du lachst.", "Ich weiß dass, du lachst.", "Ich weiß das, du lachst."], correct: 0,
                    explanation: "Komma vor dass."
                },
                {
                    id: "rsk4l1_m4", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ ist mein Lieblingsbuch.'", answers: ["Das", "Dass", "Daß", "Des"], correct: 0,
                    explanation: "Dieses ist mein Lieblingsbuch – also das."
                }
            ],
            schwer: [
                {
                    id: "rsk4l1_s1", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'Ich hoffe, ___ das Wetter gut wird.'", answers: ["dass", "das", "des", "daß"], correct: 0,
                    explanation: "Bindewort: dass."
                },
                {
                    id: "rsk4l1_s2", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Ergänze: 'Das Lied, ___ wir singen, ist neu.'", answers: ["das", "dass", "den", "dem"], correct: 0,
                    explanation: "Welches wir singen – also das."
                },
                {
                    id: "rsk4l1_s3", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Welche Probe hilft bei 'das'?", answers: ["'welches' einsetzen", "Wort verlängern", "Silben klatschen", "Wort ableiten"], correct: 0,
                    explanation: "Passt welches, dieses oder jenes, schreibt man das."
                },
                {
                    id: "rsk4l1_s4", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Wie viele Fehler? 'Ich hoffe, das das Lied, dass ich mag, kommt.'", answers: ["2", "1", "0", "3"], correct: 0,
                    explanation: "Richtig: Ich hoffe, dass das Lied, das ich mag, kommt."
                }
            ]
        },
        test: [
                {
                    id: "rsk4l1_t1", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Weißt du, ___ heute Ferien sind?'", answers: ["dass", "das", "daß", "des"], correct: 0,
                    explanation: "Bindewort: dass."
                },
                {
                    id: "rsk4l1_t2", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Ergänze: '___ Mädchen spielt Geige.'", answers: ["Das", "Dass", "Dem", "Des"], correct: 0,
                    explanation: "Artikel: das Mädchen."
                },
                {
                    id: "rsk4l1_t3", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Bindewort?", answers: ["dass", "der Hund", "dieses Buch", "jenes Haus"], correct: 0,
                    explanation: "Dass verbindet Haupt- und Nebensatz."
                },
                {
                    id: "rsk4l1_t4", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Das Bild, ___ du gemalt hast, ist toll.'", answers: ["das", "dass", "den", "dem"], correct: 0,
                    explanation: "Welches du gemalt hast – also das."
                },
                {
                    id: "rsk4l1_t5", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Ergänze: 'Mama freut sich, ___ wir helfen.'", answers: ["dass", "das", "den", "des"], correct: 0,
                    explanation: "Bindewort: dass."
                },
                {
                    id: "rsk4l1_t6", category: "kurs_rs_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Was ist 'dass'?", answers: ["ein Bindewort", "ein Artikel", "ein Nomen", "ein Verb"], correct: 0,
                    explanation: "Dass ist eine Konjunktion (Bindewort)."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rs_k4_l2", kurs: "rechtschreib_k4", order: 2, icon: "🐍",
        title: "s, ss oder ß", kurz: "Kurz – ss, lang – ß",
        erklaerung: {
            intro: "Nach einem <b>kurzen</b> Selbstlaut schreibt man oft <b>ss</b>: Wasser, Kuss, Fluss. Nach einem <b>langen</b> Selbstlaut oder einem Doppellaut (<b>ei, au, eu</b>) schreibt man <b>ß</b>, wenn es scharf klingt: Straße, Fuß, heiß, draußen. Ein weich gesprochenes s bleibt <b>s</b>: Hase, Rose.",
            beispiele: ["Fluss – kurz → ss",
                "Fuß – lang → ß",
                "heiß – ei → ß",
                "Hase – weich → s"],
            merksatz: "Kurz – ss. Lang oder ei/au/eu – ß (scharf) oder s (weich)."
        },
        uebung: {
            leicht: [
                {
                    id: "rsk4l2_l1", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es? 'der Flu_'", answers: ["Fluss", "Fluß", "Flus", "Fluhs"], correct: 0,
                    explanation: "Kurzes u – ss."
                },
                {
                    id: "rsk4l2_l2", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es? 'die Stra_e'", answers: ["Straße", "Strasse", "Strase", "Strahse"], correct: 0,
                    explanation: "Langes a, scharfes s – ß."
                },
                {
                    id: "rsk4l2_l3", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Welches Wort schreibt man mit ß?", answers: ["Fuß", "Kuss", "Fass", "Biss"], correct: 0,
                    explanation: "Langes u – ß."
                },
                {
                    id: "rsk4l2_l4", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Welches Wort schreibt man mit ss?", answers: ["Wasser", "Grüßen", "Gruß", "Spaß"], correct: 0,
                    explanation: "Kurzes a – ss."
                }
            ],
            mittel: [
                {
                    id: "rsk4l2_m1", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es? 'hei_'", answers: ["heiß", "heiss", "heis", "heihs"], correct: 0,
                    explanation: "Nach ei – ß."
                },
                {
                    id: "rsk4l2_m2", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Warum schreibt man 'Kuss' mit ss?", answers: ["Der Vokal ist kurz.", "Der Vokal ist lang.", "Es ist ein Nomen.", "Es klingt weich."], correct: 0,
                    explanation: "Kurzer Vokal – ss."
                },
                {
                    id: "rsk4l2_m3", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es? 'drau_en'", answers: ["draußen", "drausen", "draussen", "drauhsen"], correct: 0,
                    explanation: "Nach au – ß."
                },
                {
                    id: "rsk4l2_m4", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist richtig?", answers: ["Schlüssel", "Schlüßel", "Schlüsel", "Schlühsel"], correct: 0,
                    explanation: "Kurzes ü – ss."
                }
            ],
            schwer: [
                {
                    id: "rsk4l2_s1", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Welches Wort schreibt man mit einfachem s?", answers: ["Hase", "Hass", "Maß", "Fass"], correct: 0,
                    explanation: "Weiches s – Hase."
                },
                {
                    id: "rsk4l2_s2", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Warum schreibt man 'Fuß' mit ß?", answers: ["Langer Vokal, scharfes s", "Kurzer Vokal", "Weil es ein Körperteil ist", "Weil es am Ende steht"], correct: 0,
                    explanation: "Langes u und scharfes s."
                },
                {
                    id: "rsk4l2_s3", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Wie heißt die Mehrzahl von 'Fluss'?", answers: ["Flüsse", "Flüße", "Flüsen", "Flusse"], correct: 0,
                    explanation: "Kurzes ü – ss."
                },
                {
                    id: "rsk4l2_s4", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Welches Wort ist richtig?", answers: ["groß", "gross", "gros", "grohs"], correct: 0,
                    explanation: "Langes o – ß."
                }
            ]
        },
        test: [
                {
                    id: "rsk4l2_t1", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es? 'der Spa_'", answers: ["Spaß", "Spass", "Spas", "Spahs"], correct: 0,
                    explanation: "Langes a – ß."
                },
                {
                    id: "rsk4l2_t2", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man mit ss?", answers: ["Tasse", "Soße", "Stoß", "Grieß"], correct: 0,
                    explanation: "Kurzes a – ss."
                },
                {
                    id: "rsk4l2_t3", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es? 'ich wei_'", answers: ["weiß", "weiss", "weis", "weihs"], correct: 0,
                    explanation: "Nach ei – ß."
                },
                {
                    id: "rsk4l2_t4", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist falsch geschrieben?", answers: ["Wasßer", "Wasser", "Straße", "Kasse"], correct: 0,
                    explanation: "Richtig ist Wasser."
                },
                {
                    id: "rsk4l2_t5", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort hat einen Doppellaut vor ß?", answers: ["beißen", "Nuss", "Maß", "Fluss"], correct: 0,
                    explanation: "Bei-ßen: ei ist ein Doppellaut."
                },
                {
                    id: "rsk4l2_t6", category: "kurs_rs_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es? 'die Na_e' (im Gesicht)", answers: ["Nase", "Nasse", "Naße", "Nahse"], correct: 0,
                    explanation: "Weiches s – Nase."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "rs_k4_l3", kurs: "rechtschreib_k4", order: 3, icon: "🔠",
        title: "Großschreibung und Kommas", kurz: "beim Spielen, etwas Neues",
        erklaerung: {
            intro: "Groß schreibt man Nomen, Satzanfänge, Namen und <b>nominalisierte</b> Wörter: Signalwörter wie <b>das, beim, zum, viel, etwas, nichts</b> machen Verben und Adjektive zu Nomen: das Lesen, beim Spielen, etwas Schönes. <b>Kommas</b> stehen bei Aufzählungen (Äpfel, Birnen und Pflaumen – vor 'und' kein Komma) und vor Nebensätzen mit weil, dass, wenn.",
            beispiele: ["beim Schwimmen",
                "etwas Gutes",
                "Ich bleibe, weil es regnet."],
            merksatz: "Signalwort davor – groß! Vor 'und' in Aufzählungen kein Komma."
        },
        uebung: {
            leicht: [
                {
                    id: "rsk4l3_l1", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Wie schreibt man es? 'Beim ___ bin ich schnell.' (laufen)", answers: ["Laufen", "laufen", "Laufenn", "lauffen"], correct: 0,
                    explanation: "Beim ist ein Signalwort."
                },
                {
                    id: "rsk4l3_l2", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Welches Wort schreibt man groß?", answers: ["das Schöne", "schön", "schöner", "am schönsten"], correct: 0,
                    explanation: "Das macht schön zum Nomen."
                },
                {
                    id: "rsk4l3_l3", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Wo steht ein Komma? 'Ich kaufe Brot Milch und Eier.'", answers: ["nach Brot", "nach Milch", "nach und", "nach kaufe"], correct: 0,
                    explanation: "Brot, Milch und Eier."
                },
                {
                    id: "rsk4l3_l4", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "leicht", points: 10,
                    question: "Was steht in einer Aufzählung vor 'und'?", answers: ["kein Komma", "immer ein Komma", "ein Punkt", "ein Doppelpunkt"], correct: 0,
                    explanation: "Vor und steht kein Komma."
                }
            ],
            mittel: [
                {
                    id: "rsk4l3_m1", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort ist ein Signalwort für Großschreibung?", answers: ["beim", "schnell", "laufen", "weil"], correct: 0,
                    explanation: "Beim Laufen, beim Essen …"
                },
                {
                    id: "rsk4l3_m2", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Ich bleibe, weil es regnet.", "Ich bleibe weil, es regnet.", "Ich bleibe weil es, regnet.", "Ich, bleibe weil es regnet."], correct: 0,
                    explanation: "Komma vor weil."
                },
                {
                    id: "rsk4l3_m3", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es? 'Ich wünsche dir alles ___.' (gut)", answers: ["Gute", "gute", "Guhte", "gutte"], correct: 0,
                    explanation: "Alles ist ein Signalwort: alles Gute."
                },
                {
                    id: "rsk4l3_m4", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man klein?", answers: ["schwimmen", "das Schwimmen", "beim Schwimmen", "zum Schwimmen"], correct: 0,
                    explanation: "Ohne Signalwort bleibt das Verb klein."
                }
            ],
            schwer: [
                {
                    id: "rsk4l3_s1", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Wie viele Kommas fehlen? 'Ich mag Hunde Katzen Pferde und Mäuse.'", answers: ["2", "3", "1", "4"], correct: 0,
                    explanation: "Hunde, Katzen, Pferde und Mäuse."
                },
                {
                    id: "rsk4l3_s2", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Wir haben viel Neues gelernt.", "Wir haben viel neues gelernt.", "Wir haben Viel Neues gelernt.", "wir haben viel Neues gelernt."], correct: 0,
                    explanation: "Viel ist ein Signalwort: viel Neues."
                },
                {
                    id: "rsk4l3_s3", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Welcher Satz braucht ein Komma?", answers: ["Ich weiß dass du kommst.", "Ich komme heute Abend.", "Du gehst morgen mit Mia.", "Komm bitte schnell her!"], correct: 0,
                    explanation: "Vor dass steht ein Komma."
                },
                {
                    id: "rsk4l3_s4", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "schwer", points: 10,
                    question: "Wie schreibt man es? 'Zum ___ brauchst du Farben.' (malen)", answers: ["Malen", "malen", "Mahlen", "mahlen"], correct: 0,
                    explanation: "Zum ist ein Signalwort. Mahlen ist etwas anderes!"
                }
            ]
        },
        test: [
                {
                    id: "rsk4l3_t1", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort schreibt man groß?", answers: ["das Lesen", "lesen", "gelesen", "beim lesen"], correct: 0,
                    explanation: "Das macht lesen zum Nomen."
                },
                {
                    id: "rsk4l3_t2", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wo steht das Komma? 'Ich lache weil du lustig bist.'", answers: ["vor weil", "nach weil", "nach du", "gar nicht"], correct: 0,
                    explanation: "Ich lache, weil du lustig bist."
                },
                {
                    id: "rsk4l3_t3", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man es? 'Es gibt nichts ___.' (neu)", answers: ["Neues", "neues", "Neuhes", "neuess"], correct: 0,
                    explanation: "Nichts ist ein Signalwort."
                },
                {
                    id: "rsk4l3_t4", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welche Wörter sind Signalwörter?", answers: ["das, beim, zum", "und, oder, aber", "weil, dass, wenn", "sehr, gern, oft"], correct: 0,
                    explanation: "Das, beim, zum machen Wörter zu Nomen."
                },
                {
                    id: "rsk4l3_t5", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Wie viele Kommas? 'Rot, Gelb und Blau sind Farben.'", answers: ["1", "2", "0", "3"], correct: 0,
                    explanation: "Nur nach Rot."
                },
                {
                    id: "rsk4l3_t6", category: "kurs_rs_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "rechtschreibung_k4", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Beim Essen spricht man nicht.", "Beim essen spricht man nicht.", "beim Essen spricht man nicht.", "Beim Essen Spricht man nicht."], correct: 0,
                    explanation: "Beim Essen – groß."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sk_k4_l1", kurs: "satzglieder_k4", order: 1, icon: "📌",
        title: "Subjekt, Prädikat, Objekte", kurz: "Wer? Wem? Wen?",
        erklaerung: {
            intro: "Satzglieder findest du mit der <b>Umstellprobe</b>. Das <b>Prädikat</b> ist das Verb – manchmal zweiteilig: Lisa <b>hat</b> gelacht, Tim <b>ruft</b> mich <b>an</b>. Das <b>Subjekt</b>: Wer oder was? Das <b>Akkusativobjekt</b>: Wen oder was? Das <b>Dativobjekt</b>: Wem?",
            beispiele: ["Der Opa | schenkt | dem Kind | einen Ball.",
                "Wem? dem Kind – Dativobjekt",
                "Wen oder was? einen Ball – Akkusativobjekt"],
            merksatz: "Wer? Subjekt. Wem? Dativobjekt. Wen oder was? Akkusativobjekt."
        },
        uebung: {
            leicht: [
                {
                    id: "skk4l1_l1", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Was ist das Akkusativobjekt in 'Ich lese ein Buch'?", answers: ["ein Buch", "Ich", "lese", "Buch lese"], correct: 0,
                    explanation: "Was lese ich? Ein Buch."
                },
                {
                    id: "skk4l1_l2", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Was ist das Dativobjekt in 'Er hilft seiner Mutter'?", answers: ["seiner Mutter", "Er", "hilft", "Mutter hilft"], correct: 0,
                    explanation: "Wem hilft er? Seiner Mutter."
                },
                {
                    id: "skk4l1_l3", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Was ist das Prädikat in 'Die Kinder singen ein Lied'?", answers: ["singen", "Die Kinder", "ein Lied", "Lied"], correct: 0,
                    explanation: "Singen ist das Verb."
                },
                {
                    id: "skk4l1_l4", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Was ist das Subjekt in 'Heute regnet es stark'?", answers: ["es", "Heute", "regnet", "stark"], correct: 0,
                    explanation: "Wer oder was regnet? Es."
                }
            ],
            mittel: [
                {
                    id: "skk4l1_m1", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist das Prädikat in 'Tim ruft mich morgen an'?", answers: ["ruft … an", "ruft", "an", "morgen"], correct: 0,
                    explanation: "Zweiteiliges Prädikat: ruft … an."
                },
                {
                    id: "skk4l1_m2", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Wie viele Satzglieder hat 'Lena | gibt | dem Hund | einen Knochen'?", answers: ["4", "3", "5", "6"], correct: 0,
                    explanation: "Subjekt, Prädikat, Dativ- und Akkusativobjekt."
                },
                {
                    id: "skk4l1_m3", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist das Dativobjekt in 'Ich schenke der Oma Blumen'?", answers: ["der Oma", "Blumen", "Ich", "schenke"], correct: 0,
                    explanation: "Wem schenke ich? Der Oma."
                },
                {
                    id: "skk4l1_m4", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist das Akkusativobjekt in 'Der Hund sucht seinen Ball'?", answers: ["seinen Ball", "Der Hund", "sucht", "Ball"], correct: 0,
                    explanation: "Was sucht der Hund? Seinen Ball."
                }
            ],
            schwer: [
                {
                    id: "skk4l1_s1", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Was ist das Prädikat in 'Mia hat den Kuchen gegessen'?", answers: ["hat … gegessen", "hat", "gegessen", "den Kuchen"], correct: 0,
                    explanation: "Zweiteilig: hat … gegessen."
                },
                {
                    id: "skk4l1_s2", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Welches Satzglied ist 'dem Lehrer' in 'Wir antworten dem Lehrer'?", answers: ["Dativobjekt", "Akkusativobjekt", "Subjekt", "Prädikat"], correct: 0,
                    explanation: "Wem antworten wir? Dem Lehrer."
                },
                {
                    id: "skk4l1_s3", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Was ist das Subjekt in 'Den Ball wirft der Junge'?", answers: ["der Junge", "Den Ball", "wirft", "Ball"], correct: 0,
                    explanation: "Wer wirft? Der Junge."
                },
                {
                    id: "skk4l1_s4", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Welches Satzglied fehlt? 'Ich gebe ___ das Heft.'", answers: ["Dativobjekt", "Akkusativobjekt", "Subjekt", "Prädikat"], correct: 0,
                    explanation: "Wem gebe ich das Heft? Das fehlt."
                }
            ]
        },
        test: [
                {
                    id: "skk4l1_t1", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Wie fragt man nach dem Akkusativobjekt?", answers: ["Wen oder was?", "Wem?", "Wessen?", "Wer oder was?"], correct: 0,
                    explanation: "Wen oder was?"
                },
                {
                    id: "skk4l1_t2", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist das Dativobjekt in 'Sie zeigt dem Gast den Weg'?", answers: ["dem Gast", "den Weg", "Sie", "zeigt"], correct: 0,
                    explanation: "Wem zeigt sie den Weg? Dem Gast."
                },
                {
                    id: "skk4l1_t3", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist das Akkusativobjekt in 'Sie zeigt dem Gast den Weg'?", answers: ["den Weg", "dem Gast", "Sie", "zeigt"], correct: 0,
                    explanation: "Was zeigt sie? Den Weg."
                },
                {
                    id: "skk4l1_t4", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist das Prädikat in 'Wir kaufen heute ein'?", answers: ["kaufen … ein", "kaufen heute", "heute ein", "Wir kaufen"], correct: 0,
                    explanation: "Zweiteilig: kaufen … ein."
                },
                {
                    id: "skk4l1_t5", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist das Subjekt in 'Morgen besucht uns die Tante'?", answers: ["die Tante", "uns", "Morgen", "besucht"], correct: 0,
                    explanation: "Wer besucht uns? Die Tante."
                },
                {
                    id: "skk4l1_t6", category: "kurs_sk_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Wie viele Satzglieder? 'Papa | repariert | mein Fahrrad.'", answers: ["3", "2", "4", "5"], correct: 0,
                    explanation: "Papa – repariert – mein Fahrrad."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sk_k4_l2", kurs: "satzglieder_k4", order: 2, icon: "🕰️",
        title: "Adverbiale Bestimmungen", kurz: "Wann? Wo? Wie? Warum?",
        erklaerung: {
            intro: "<b>Adverbiale Bestimmungen</b> sagen mehr über die Umstände: <b>Zeit</b> (Wann? Wie lange?), <b>Ort</b> (Wo? Wohin? Woher?), <b>Art und Weise</b> (Wie?) und <b>Grund</b> (Warum?).",
            beispiele: ["am Abend – Zeit",
                "im Garten – Ort",
                "sehr leise – Art und Weise",
                "wegen des Regens – Grund"],
            merksatz: "Wann, wo, wie, warum – die vier Umstandsangaben."
        },
        uebung: {
            leicht: [
                {
                    id: "skk4l2_l1", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Welche Frage passt zur Ortsangabe?", answers: ["Wo?", "Wann?", "Wie?", "Warum?"], correct: 0,
                    explanation: "Ort: Wo?"
                },
                {
                    id: "skk4l2_l2", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Welche Frage passt zur Zeitangabe?", answers: ["Wann?", "Wo?", "Wie?", "Wem?"], correct: 0,
                    explanation: "Zeit: Wann?"
                },
                {
                    id: "skk4l2_l3", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Was ist 'am Montag'?", answers: ["Zeitangabe", "Ortsangabe", "Subjekt", "Prädikat"], correct: 0,
                    explanation: "Wann? Am Montag."
                },
                {
                    id: "skk4l2_l4", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Was ist 'in der Küche'?", answers: ["Ortsangabe", "Zeitangabe", "Grundangabe", "Akkusativobjekt"], correct: 0,
                    explanation: "Wo? In der Küche."
                }
            ],
            mittel: [
                {
                    id: "skk4l2_m1", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welche Frage passt zu 'wegen der Hitze'?", answers: ["Warum?", "Wann?", "Wo?", "Wie?"], correct: 0,
                    explanation: "Grund: Warum?"
                },
                {
                    id: "skk4l2_m2", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist 'sehr schnell' in 'Er rennt sehr schnell'?", answers: ["Art und Weise", "Zeitangabe", "Ortsangabe", "Grundangabe"], correct: 0,
                    explanation: "Wie rennt er? Sehr schnell."
                },
                {
                    id: "skk4l2_m3", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welche Angabe steckt in 'seit drei Wochen'?", answers: ["Zeitangabe", "Ortsangabe", "Grundangabe", "Art und Weise"], correct: 0,
                    explanation: "Wie lange? Seit drei Wochen."
                },
                {
                    id: "skk4l2_m4", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welche Frage passt zu 'nach Berlin'?", answers: ["Wohin?", "Woher?", "Wann?", "Warum?"], correct: 0,
                    explanation: "Wohin? Nach Berlin."
                }
            ],
            schwer: [
                {
                    id: "skk4l2_s1", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Bestimme 'aus Angst' in 'Er schwieg aus Angst.'", answers: ["Grund", "Ort", "Zeit", "Art und Weise"], correct: 0,
                    explanation: "Warum schwieg er? Aus Angst."
                },
                {
                    id: "skk4l2_s2", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Wie viele Umstandsangaben? 'Morgen fahren wir mit dem Zug nach Köln.'", answers: ["3", "1", "2", "4"], correct: 0,
                    explanation: "Morgen (Zeit), mit dem Zug (Art und Weise), nach Köln (Ort)."
                },
                {
                    id: "skk4l2_s3", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Was ist 'vorsichtig' in 'Sie trägt die Vase vorsichtig'?", answers: ["Art und Weise", "Ortsangabe", "Zeitangabe", "Grundangabe"], correct: 0,
                    explanation: "Wie trägt sie die Vase? Vorsichtig."
                },
                {
                    id: "skk4l2_s4", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Welche Frage passt zu 'aus Italien'?", answers: ["Woher?", "Wohin?", "Wann?", "Wie?"], correct: 0,
                    explanation: "Woher? Aus Italien."
                }
            ]
        },
        test: [
                {
                    id: "skk4l2_t1", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist 'im Wald'?", answers: ["Ortsangabe", "Zeitangabe", "Grundangabe", "Subjekt"], correct: 0,
                    explanation: "Wo? Im Wald."
                },
                {
                    id: "skk4l2_t2", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welche Frage passt zu 'wegen des Regens'?", answers: ["Warum?", "Wo?", "Wann?", "Wem?"], correct: 0,
                    explanation: "Warum? Wegen des Regens."
                },
                {
                    id: "skk4l2_t3", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist 'heute Abend'?", answers: ["Zeitangabe", "Ortsangabe", "Grundangabe", "Dativobjekt"], correct: 0,
                    explanation: "Wann? Heute Abend."
                },
                {
                    id: "skk4l2_t4", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welche Frage passt zu 'mit großer Freude'?", answers: ["Wie?", "Wo?", "Wann?", "Wem?"], correct: 0,
                    explanation: "Art und Weise: Wie?"
                },
                {
                    id: "skk4l2_t5", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Bestimme 'in die Schule' in 'Ich gehe in die Schule.'", answers: ["Ortsangabe (Wohin?)", "Zeitangabe (Wann?)", "Grund (Warum?)", "Subjekt (Wer?)"], correct: 0,
                    explanation: "Wohin gehe ich? In die Schule."
                },
                {
                    id: "skk4l2_t6", category: "kurs_sk_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Wie heißen die Umstandsangaben noch?", answers: ["adverbiale Bestimmungen", "zweiteilige Prädikate", "nominale Subjekte", "bestimmte Artikel"], correct: 0,
                    explanation: "Adverbiale Bestimmungen."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "sk_k4_l3", kurs: "satzglieder_k4", order: 3, icon: "➡️",
        title: "Hauptsatz und Nebensatz", kurz: "weil, dass, wenn – Verb am Ende",
        erklaerung: {
            intro: "Ein <b>Hauptsatz</b> kann allein stehen, das Verb steht an 2. Stelle. Ein <b>Nebensatz</b> kann nicht allein stehen. Er beginnt oft mit <b>weil, dass, wenn, als, ob</b> – und das Verb steht <b>am Ende</b>. Zwischen Haupt- und Nebensatz steht ein <b>Komma</b>.",
            beispiele: ["Ich bleibe zu Hause, weil ich krank bin.",
                "Wenn es schneit, bauen wir einen Schneemann.",
                "Ich glaube, dass er kommt."],
            merksatz: "Nebensatz: Bindewort vorn, Verb hinten, Komma dazwischen."
        },
        uebung: {
            leicht: [
                {
                    id: "skk4l3_l1", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Wo steht das Verb im Nebensatz?", answers: ["am Ende", "an 2. Stelle", "am Anfang", "gar nicht"], correct: 0,
                    explanation: "Im Nebensatz steht das Verb am Ende."
                },
                {
                    id: "skk4l3_l2", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Welches Wort leitet oft einen Nebensatz ein?", answers: ["weil", "und", "Haus", "schnell"], correct: 0,
                    explanation: "Weil leitet einen Nebensatz ein."
                },
                {
                    id: "skk4l3_l3", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Was steht zwischen Haupt- und Nebensatz?", answers: ["ein Komma", "ein Punkt", "ein Fragezeichen", "nichts"], correct: 0,
                    explanation: "Ein Komma."
                },
                {
                    id: "skk4l3_l4", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "leicht", points: 10,
                    question: "Was ist der Nebensatz? 'Ich lache, weil du tanzt.'", answers: ["weil du tanzt", "Ich lache", "Ich lache, weil", "du"], correct: 0,
                    explanation: "Weil du tanzt – das Verb steht am Ende."
                }
            ],
            mittel: [
                {
                    id: "skk4l3_m1", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Ich gehe, weil ich müde bin.", "Ich gehe, weil ich bin müde.", "Ich gehe weil, ich müde bin.", "Ich gehe, weil bin ich müde."], correct: 0,
                    explanation: "Nach weil steht das Verb am Ende."
                },
                {
                    id: "skk4l3_m2", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist der Hauptsatz? 'Wenn es regnet, bleibe ich drin.'", answers: ["bleibe ich drin", "Wenn es regnet", "Wenn es", "regnet"], correct: 0,
                    explanation: "Wenn es regnet ist der Nebensatz."
                },
                {
                    id: "skk4l3_m3", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort passt? 'Ich weiß, ___ du recht hast.'", answers: ["dass", "weil", "und", "aber"], correct: 0,
                    explanation: "Ich weiß, dass …"
                },
                {
                    id: "skk4l3_m4", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Wo ist der Nebensatz? 'Als ich kam, schlief er.'", answers: ["Als ich kam", "schlief er", "er", "kam"], correct: 0,
                    explanation: "Als ich kam – Verb am Ende."
                }
            ],
            schwer: [
                {
                    id: "skk4l3_s1", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Wie viele Kommas fehlen? 'Ich hoffe dass du kommst weil es toll wird.'", answers: ["2", "1", "3", "0"], correct: 0,
                    explanation: "Ich hoffe, dass du kommst, weil es toll wird."
                },
                {
                    id: "skk4l3_s2", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Welcher Satz hat einen Nebensatz?", answers: ["Ich esse, weil es gut ist.", "Ich esse und trinke.", "Ich esse gern Nudeln.", "Ich esse, du trinkst."], correct: 0,
                    explanation: "Weil leitet einen Nebensatz ein."
                },
                {
                    id: "skk4l3_s3", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Welches Bindewort passt? '___ es dunkel wird, gehen wir heim.'", answers: ["Wenn", "Und", "Aber", "Denn"], correct: 0,
                    explanation: "Wenn es dunkel wird, …"
                },
                {
                    id: "skk4l3_s4", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "schwer", points: 10,
                    question: "Was stimmt über den Nebensatz?", answers: ["Er kann nicht allein stehen.", "Er steht immer vorn.", "Er hat kein Verb.", "Er endet mit Fragezeichen."], correct: 0,
                    explanation: "Ein Nebensatz braucht einen Hauptsatz."
                }
            ]
        },
        test: [
                {
                    id: "skk4l3_t1", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welches Wort leitet einen Nebensatz ein?", answers: ["wenn", "oder", "und", "aber"], correct: 0,
                    explanation: "Wenn."
                },
                {
                    id: "skk4l3_t2", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Wo steht das Verb im Aussagesatz (Hauptsatz)?", answers: ["an 2. Stelle", "am Ende", "ganz vorn", "gar nicht"], correct: 0,
                    explanation: "Im Aussage-Hauptsatz an 2. Stelle."
                },
                {
                    id: "skk4l3_t3", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was ist der Nebensatz? 'Ich frage, ob du mitkommst.'", answers: ["ob du mitkommst", "Ich frage", "Ich frage, ob", "mitkommst"], correct: 0,
                    explanation: "Ob du mitkommst."
                },
                {
                    id: "skk4l3_t4", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist richtig?", answers: ["Wenn es klingelt, gehen wir.", "Wenn es klingelt gehen wir.", "Wenn klingelt es, gehen wir.", "Wenn es, klingelt gehen wir."], correct: 0,
                    explanation: "Verb am Ende des Nebensatzes, dann Komma."
                },
                {
                    id: "skk4l3_t5", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was steht vor 'weil' meistens?", answers: ["ein Komma", "ein Punkt", "ein Doppelpunkt", "ein Ausrufezeichen"], correct: 0,
                    explanation: "Ein Komma."
                },
                {
                    id: "skk4l3_t6", category: "kurs_sk_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "satzglieder_k4", difficulty: "mittel", points: 10,
                    question: "Was kann allein als Satz stehen?", answers: ["Der Hund schläft.", "weil der Hund schläft", "dass der Hund schläft", "wenn der Hund schläft"], correct: 0,
                    explanation: "Ein Hauptsatz."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lt_k4_l1", kurs: "lesen_k4", order: 1, icon: "🐉",
        title: "Sage, Märchen, Fabel, Bericht", kurz: "Textsorten unterscheiden",
        erklaerung: {
            intro: "<b>Sagen</b> spielen an echten Orten und haben oft einen wahren Kern (Rattenfänger von Hameln, Loreley). <b>Märchen</b> spielen irgendwo und irgendwann („Es war einmal“). <b>Fabeln</b> haben sprechende Tiere und eine Lehre. Ein <b>Bericht</b> ist sachlich, steht in der Vergangenheit und beantwortet die W-Fragen.",
            beispiele: ["Der Rattenfänger von Hameln – Sage",
                "Frau Holle – Märchen",
                "Der Hase und der Igel – Fabel"],
            merksatz: "Sage: echter Ort. Märchen: es war einmal. Fabel: Tiere und Lehre. Bericht: sachlich."
        },
        uebung: {
            leicht: [
                {
                    id: "ltk4l1_l1", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Was ist typisch für eine Sage?", answers: ["ein echter Ort", "„Es war einmal“", "sprechende Möbel", "ein Reim am Ende"], correct: 0,
                    explanation: "Sagen spielen an echten Orten."
                },
                {
                    id: "ltk4l1_l2", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Wer kommt in Fabeln meist vor?", answers: ["sprechende Tiere", "Ritter", "Astronauten", "Roboter"], correct: 0,
                    explanation: "In Fabeln sprechen Tiere."
                },
                {
                    id: "ltk4l1_l3", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Welcher Text ist eine Sage?", answers: ["Der Rattenfänger von Hameln", "Rotkäppchen und der Wolf", "Der Fuchs und der Rabe", "Wie Bienen leben"], correct: 0,
                    explanation: "Hameln gibt es wirklich."
                },
                {
                    id: "ltk4l1_l4", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Was steht am Ende einer Fabel?", answers: ["eine Lehre", "ein Rezept", "eine Wegbeschreibung", "ein Rätsel"], correct: 0,
                    explanation: "Die Lehre."
                }
            ],
            mittel: [
                {
                    id: "ltk4l1_m1", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "In welcher Zeitform schreibt man einen Bericht?", answers: ["Präteritum", "Futur", "Präsens", "Plusquamperfekt"], correct: 0,
                    explanation: "Ein Bericht erzählt, was passiert ist – im Präteritum."
                },
                {
                    id: "ltk4l1_m2", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Wie ist ein Bericht geschrieben?", answers: ["sachlich und genau", "lustig und erfunden", "in Reimen", "mit Zaubersprüchen"], correct: 0,
                    explanation: "Sachlich und genau."
                },
                {
                    id: "ltk4l1_m3", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "In welcher Stadt spielt die Sage vom Rattenfänger?", answers: ["Hameln", "Bremen", "Köln", "Hamburg"], correct: 0,
                    explanation: "In Hameln."
                },
                {
                    id: "ltk4l1_m4", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Welches Märchen haben die Brüder Grimm aufgeschrieben?", answers: ["Hänsel und Gretel", "Harry Potter", "Pippi Langstrumpf", "Das Sams"], correct: 0,
                    explanation: "Hänsel und Gretel."
                }
            ],
            schwer: [
                {
                    id: "ltk4l1_s1", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Was hat eine Sage oft?", answers: ["einen wahren Kern", "immer ein Happy End", "einen Reim", "eine Gebrauchsanleitung"], correct: 0,
                    explanation: "Sagen haben oft einen wahren Kern."
                },
                {
                    id: "ltk4l1_s2", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Welche Lehre hat 'Der Hase und der Igel'?", answers: ["Hochmut kommt vor dem Fall.", "Wer schnell rennt, gewinnt.", "Igel sind immer langsam.", "Hasen sind sehr klug."], correct: 0,
                    explanation: "Der hochmütige Hase verliert."
                },
                {
                    id: "ltk4l1_s3", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Was gehört in einen Unfallbericht?", answers: ["Wer, was, wann, wo", "Gefühle und Witze", "Reime und Strophen", "Zauberei"], correct: 0,
                    explanation: "Die W-Fragen."
                },
                {
                    id: "ltk4l1_s4", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Wer war Till Eulenspiegel?", answers: ["ein Narr und Spaßmacher", "ein Ritter aus Köln", "ein König von Bayern", "ein berühmter Seefahrer"], correct: 0,
                    explanation: "Ein Schelm, der anderen Streiche spielt."
                }
            ]
        },
        test: [
                {
                    id: "ltk4l1_t1", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Wie beginnt ein Märchen oft?", answers: ["Es war einmal", "Am 3. Mai 2020", "Liebe Leser", "Heute in Köln"], correct: 0,
                    explanation: "Es war einmal …"
                },
                {
                    id: "ltk4l1_t2", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was ist eine Fabel?", answers: ["Tiergeschichte mit Lehre", "ein Zeitungsbericht", "ein Kochrezept", "ein Lexikonartikel"], correct: 0,
                    explanation: "Eine Tiergeschichte mit Lehre."
                },
                {
                    id: "ltk4l1_t3", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Welche Sage spielt am Rhein?", answers: ["Die Loreley", "Der Rattenfänger", "Rübezahl", "Der Klabautermann"], correct: 0,
                    explanation: "Die Loreley sitzt auf einem Felsen am Rhein."
                },
                {
                    id: "ltk4l1_t4", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was ist ein Sachtext?", answers: ["ein Text mit Fakten", "ein Text mit Zauberei", "ein Gedicht", "eine Fabel"], correct: 0,
                    explanation: "Sachtexte informieren."
                },
                {
                    id: "ltk4l1_t5", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was steht in einem Bericht NICHT?", answers: ["eigene Gefühle", "der Ort", "die Zeit", "die Beteiligten"], correct: 0,
                    explanation: "Ein Bericht bleibt sachlich."
                },
                {
                    id: "ltk4l1_t6", category: "kurs_lt_k4_l1", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Wer schrieb viele Märchen auf?", answers: ["die Brüder Grimm", "Wolfgang Goethe", "Ludwig Beethoven", "Albert Einstein"], correct: 0,
                    explanation: "Jacob und Wilhelm Grimm."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lt_k4_l2", kurs: "lesen_k4", order: 2, icon: "🖋️",
        title: "Gedichte", kurz: "Vers, Strophe, Reimschema",
        erklaerung: {
            intro: "Ein Gedicht besteht aus <b>Versen</b> (Zeilen) und <b>Strophen</b>. Reime folgen einem <b>Reimschema</b>: <b>aabb</b> (Paarreim), <b>abab</b> (Kreuzreim), <b>abba</b> (umarmender Reim). Gedichte nutzen <b>sprachliche Bilder</b>: Vergleiche mit 'wie' (schnell wie der Wind) oder Personifikationen (der Wind singt).",
            beispiele: ["Haus / Maus / Baum / Traum – aabb",
                "stark wie ein Bär – Vergleich",
                "Die Sonne lacht. – Personifikation"],
            merksatz: "aabb Paarreim, abab Kreuzreim, abba umarmender Reim."
        },
        uebung: {
            leicht: [
                {
                    id: "ltk4l2_l1", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Wie heißt eine Zeile in einem Gedicht?", answers: ["Vers", "Strophe", "Absatz", "Kapitel"], correct: 0,
                    explanation: "Eine Zeile ist ein Vers."
                },
                {
                    id: "ltk4l2_l2", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Wie heißt der Reim aabb?", answers: ["Paarreim", "Kreuzreim", "umarmender Reim", "Schüttelreim"], correct: 0,
                    explanation: "Je zwei Zeilen reimen sich: Paarreim."
                },
                {
                    id: "ltk4l2_l3", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Was reimt sich auf 'Wind'?", answers: ["Kind", "Wand", "Wald", "Wolf"], correct: 0,
                    explanation: "Wind – Kind."
                },
                {
                    id: "ltk4l2_l4", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Was ist ein Vergleich?", answers: ["stark wie ein Bär", "ein starker Bär", "der Bär ist stark", "Bären sind Tiere"], correct: 0,
                    explanation: "Vergleiche nutzen 'wie'."
                }
            ],
            mittel: [
                {
                    id: "ltk4l2_m1", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Welches Reimschema hat 'Sonne / Haus / Wonne / Maus'?", answers: ["abab", "aabb", "abba", "abcd"], correct: 0,
                    explanation: "Sonne–Wonne, Haus–Maus: Kreuzreim."
                },
                {
                    id: "ltk4l2_m2", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Welches Schema hat der umarmende Reim?", answers: ["abba", "aabb", "abab", "abcd"], correct: 0,
                    explanation: "Außen a, innen bb."
                },
                {
                    id: "ltk4l2_m3", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Woraus besteht eine Strophe?", answers: ["aus mehreren Versen", "aus einem Wort", "aus Bildern", "aus Kapiteln"], correct: 0,
                    explanation: "Mehrere Verse bilden eine Strophe."
                },
                {
                    id: "ltk4l2_m4", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was ist 'Der Mond ist wie eine Laterne'?", answers: ["ein Vergleich", "ein Reim", "eine Strophe", "ein Bericht"], correct: 0,
                    explanation: "Mit 'wie' – ein Vergleich."
                }
            ],
            schwer: [
                {
                    id: "ltk4l2_s1", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Welches Reimschema hat 'Baum / Stein / Bein / Traum'?", answers: ["abba", "abab", "aabb", "abcd"], correct: 0,
                    explanation: "Baum–Traum außen, Stein–Bein innen."
                },
                {
                    id: "ltk4l2_s2", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Was ist eine Personifikation?", answers: ["Dinge handeln wie Menschen", "ein Reim am Ende", "ein Wort in Großbuchstaben", "eine Zeile ohne Reim"], correct: 0,
                    explanation: "Dinge oder Tiere verhalten sich wie Menschen."
                },
                {
                    id: "ltk4l2_s3", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Was ist 'Der Wind singt ein Lied'?", answers: ["eine Personifikation", "ein Vergleich mit wie", "ein Paarreim am Ende", "ein sachlicher Bericht"], correct: 0,
                    explanation: "Der Wind singt wie ein Mensch."
                },
                {
                    id: "ltk4l2_s4", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Welcher Reim passt zu 'Licht / Gesicht / Baum / Traum'?", answers: ["Paarreim", "Kreuzreim", "umarmender Reim", "gar kein Reim"], correct: 0,
                    explanation: "aabb – Paarreim."
                }
            ]
        },
        test: [
                {
                    id: "ltk4l2_t1", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Wie heißt der Reim abab?", answers: ["Kreuzreim", "Paarreim", "umarmender Reim", "Stabreim"], correct: 0,
                    explanation: "Abab – Kreuzreim."
                },
                {
                    id: "ltk4l2_t2", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was reimt sich auf 'Schnee'?", answers: ["See", "Schuh", "Schal", "Stern"], correct: 0,
                    explanation: "Schnee – See."
                },
                {
                    id: "ltk4l2_t3", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was ist 'flink wie ein Wiesel'?", answers: ["ein Vergleich", "ein Reim", "eine Strophe", "ein Titel"], correct: 0,
                    explanation: "Mit 'wie' – ein Vergleich."
                },
                {
                    id: "ltk4l2_t4", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Woran erkennt man ein Gedicht oft?", answers: ["an Versen und Reimen", "an langen Tabellen", "an vielen Zahlen", "an bunten Fotos"], correct: 0,
                    explanation: "An Versen und Reimen."
                },
                {
                    id: "ltk4l2_t5", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Welches Reimschema hat 'Hund / Mund / Haus / Maus'?", answers: ["aabb", "abab", "abba", "abcd"], correct: 0,
                    explanation: "Paarreim."
                },
                {
                    id: "ltk4l2_t6", category: "kurs_lt_k4_l2", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was macht ein Gedicht lebendig?", answers: ["sprachliche Bilder", "viele Zahlen", "lange Tabellen", "Fremdwörter"], correct: 0,
                    explanation: "Bilder und Vergleiche."
                }
        ],
        bestehenAb: 0.75
    },
    {
        id: "lt_k4_l3", kurs: "lesen_k4", order: 3, icon: "🗨️",
        title: "Redewendungen und Zusammenfassen", kurz: "Bildhafte Sprache, das Wichtigste kurz",
        erklaerung: {
            intro: "Redewendungen sind <b>bildhaft</b>: „Die Katze aus dem Sack lassen“ heißt, ein Geheimnis verraten. Beim Lesen von Sachtexten hilft: Überschrift lesen, Absätze gliedern, <b>Schlüsselwörter</b> markieren und das Wichtigste in eigenen Worten <b>zusammenfassen</b> – kurz, sachlich, im <b>Präsens</b>.",
            beispiele: ["ins Fettnäpfchen treten – etwas Peinliches tun",
                "jemandem auf den Leim gehen – hereingelegt werden",
                "Schwein haben – Glück haben"],
            merksatz: "Zusammenfassung: kurz, sachlich, eigene Worte, Präsens."
        },
        uebung: {
            leicht: [
                {
                    id: "ltk4l3_l1", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Was bedeutet 'die Katze aus dem Sack lassen'?", answers: ["ein Geheimnis verraten", "eine Katze befreien", "einkaufen gehen", "laut miauen"], correct: 0,
                    explanation: "Man verrät ein Geheimnis."
                },
                {
                    id: "ltk4l3_l2", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Was bedeutet 'ins Fettnäpfchen treten'?", answers: ["etwas Peinliches tun", "in Butter treten", "kochen lernen", "fettig essen"], correct: 0,
                    explanation: "Man sagt oder tut etwas Unpassendes."
                },
                {
                    id: "ltk4l3_l3", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Was gehört in eine Zusammenfassung?", answers: ["das Wichtigste kurz", "jedes Detail", "eigene Meinung", "wörtliche Zitate"], correct: 0,
                    explanation: "Nur das Wichtigste."
                },
                {
                    id: "ltk4l3_l4", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "leicht", points: 10,
                    question: "Was bedeutet 'Schwein haben'?", answers: ["Glück haben", "ein Haustier haben", "schmutzig sein", "viel essen"], correct: 0,
                    explanation: "Schwein haben heißt Glück haben."
                }
            ],
            mittel: [
                {
                    id: "ltk4l3_m1", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'jemandem auf den Leim gehen'?", answers: ["hereingelegt werden", "kleben bleiben", "basteln", "jemandem folgen"], correct: 0,
                    explanation: "Man fällt auf einen Trick herein."
                },
                {
                    id: "ltk4l3_m2", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'etwas aus dem Ärmel schütteln'?", answers: ["etwas mühelos können", "Krümel ausschütteln", "zaubern", "Jacke waschen"], correct: 0,
                    explanation: "Man kann es ganz leicht."
                },
                {
                    id: "ltk4l3_m3", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Wozu helfen Absätze im Sachtext?", answers: ["den Text gliedern", "Wörter zählen", "Bilder malen", "Seiten umblättern"], correct: 0,
                    explanation: "Absätze teilen den Text in Sinnabschnitte."
                },
                {
                    id: "ltk4l3_m4", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'über den Berg sein'?", answers: ["es fast geschafft haben", "eine Wanderung machen", "in die Berge ziehen", "auf einem Gipfel stehen"], correct: 0,
                    explanation: "Das Schlimmste ist vorbei."
                }
            ],
            schwer: [
                {
                    id: "ltk4l3_s1", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'jemandem reinen Wein einschenken'?", answers: ["die Wahrheit sagen", "Wein servieren", "Durst haben", "feiern"], correct: 0,
                    explanation: "Man sagt ehrlich, wie es ist."
                },
                {
                    id: "ltk4l3_s2", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Was gehört NICHT in eine Zusammenfassung?", answers: ["eigene Meinung", "die Hauptfiguren", "das Wichtigste", "der Ort"], correct: 0,
                    explanation: "Eine Zusammenfassung bleibt sachlich."
                },
                {
                    id: "ltk4l3_s3", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'etwas an die große Glocke hängen'?", answers: ["es überall erzählen", "es laut läuten lassen", "es gut verstecken", "es schnell reparieren"], correct: 0,
                    explanation: "Man erzählt es allen."
                },
                {
                    id: "ltk4l3_s4", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "schwer", points: 10,
                    question: "Was bedeutet 'zwei Fliegen mit einer Klappe schlagen'?", answers: ["zwei Ziele auf einmal", "Fliegen fangen", "sehr wütend sein", "laut klatschen"], correct: 0,
                    explanation: "Man erledigt zwei Dinge auf einmal."
                }
            ]
        },
        test: [
                {
                    id: "ltk4l3_t1", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'jemandem die kalte Schulter zeigen'?", answers: ["ihn nicht beachten", "ihm die Schulter zeigen", "ganz schlimm frieren", "mit ihm Sport machen"], correct: 0,
                    explanation: "Man ignoriert jemanden."
                },
                {
                    id: "ltk4l3_t2", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'jemandem einen Korb geben'?", answers: ["ihm absagen", "ihm etwas schenken", "einkaufen gehen", "Ball spielen"], correct: 0,
                    explanation: "Man sagt Nein."
                },
                {
                    id: "ltk4l3_t3", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Wie schreibt man eine Zusammenfassung?", answers: ["kurz und sachlich", "lang und spannend", "mit Reimen", "mit vielen Witzen"], correct: 0,
                    explanation: "Kurz und sachlich."
                },
                {
                    id: "ltk4l3_t4", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'auf dem Holzweg sein'?", answers: ["sich irren", "im Wald wandern", "Holz sammeln", "auf der Straße gehen"], correct: 0,
                    explanation: "Man irrt sich."
                },
                {
                    id: "ltk4l3_t5", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was hilft beim Verstehen eines Sachtexts?", answers: ["Wichtiges markieren", "schnell umblättern", "Bilder überspringen", "laut singen"], correct: 0,
                    explanation: "Schlüsselwörter markieren."
                },
                {
                    id: "ltk4l3_t6", category: "kurs_lt_k4_l3", area: "schule", grade: 4,
                    subject: "deutsch", topic: "leseverstaendnis_k4", difficulty: "mittel", points: 10,
                    question: "Was bedeutet 'etwas übers Knie brechen'?", answers: ["etwas überstürzt tun", "sich das Knie verletzen", "Holz klein hacken", "sehr lange beten"], correct: 0,
                    explanation: "Man entscheidet zu schnell."
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
        window.DEUTSCH_K4_KURSE = extraKurse;
        window.DEUTSCH_K4_LEKTIONEN = extraLektionen;
    }
})();
