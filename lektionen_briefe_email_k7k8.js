// Briefe & E-Mails schreiben - Klasse 7/8 Deutsch
(function () {
    const extraKurse = [
        { id: "briefe_email_k7k8", title: "Briefe & E-Mails schreiben", icon: "📨", grade: 7, subject: "deutsch", beschreibung: "Formelle Briefe (Anfrage, Beschwerde, Terminabsage) und E-Mails richtig aufbauen und formulieren." }
    ];
    const extraLektionen = [
    {
        id: "briefk7_l1",
        kurs: "briefe_email_k7k8",
        order: 1,
        icon: "✉️",
        title: "Der formelle Brief",
        kurz: "Aufbau, Anrede und Ton eines formellen Briefs",
        erklaerung: {
            intro: "Ein <b>formeller Brief</b> schreibst du an Firmen, Ämter oder unbekannte Erwachsene – zum Beispiel eine <b>Anfrage</b>, eine <b>Beschwerde</b> oder eine <b>Terminabsage</b>. Er ist klar aufgebaut: Absender- und Empfängeranschrift, Datum, <b>Betreff</b>, <b>Anrede</b> (Sehr geehrte/r ...), der eigentliche Text, und der Schluss (Mit freundlichen Grüßen). Anders als bei Freunden schreibst du hier höflich und in der <b>Sie-Form</b>.",
            beispiele: [
                "📮 Oben: deine Adresse, darunter die des Empfängers, rechts das Datum.",
                "🏷️ Betreff: 'Anfrage zu Ihren Öffnungszeiten' – kurz und klar.",
                "👋 Anrede ohne Namen: 'Sehr geehrte Damen und Herren'.",
                "✍️ Schluss: 'Mit freundlichen Grüßen' plus Vor- und Nachname."
            ],
            merksatz: "Formeller Brief = Anschrift, Datum, Betreff, Anrede, sachlicher Text, freundlicher Schluss. Immer in der Sie-Form, ohne Umgangssprache."
        },
        uebung: {
            leicht: [
                { id: "briefk7l1_l1", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "leicht", points: 10,
                    question: "Wann schreibst du einen formellen Brief statt einer lockeren Nachricht?",
                    answers: ["Beim Schreiben an eine Freundin", "Beim Schreiben an eine Firma", "Beim Schreiben an die Oma", "Nie, Briefe sind immer locker"], correct: 1,
                    explanation: "An Firmen, Ämter oder unbekannte Erwachsene schreibt man förmlich – an Freunde und Familie locker." },
                { id: "briefk7l1_l2", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "leicht", points: 10,
                    question: "Was steht ganz oben im formellen Brief?",
                    answers: ["Anschriften oben", "Die Unterschrift", "Der Betreff allein", "Nur das Datum"], correct: 0,
                    explanation: "Zuerst deine eigene Adresse, darunter die des Empfängers." },
                { id: "briefk7l1_l3", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "leicht", points: 10,
                    question: "Welche Anrede passt, wenn du den Namen nicht kennst?",
                    answers: ["Hallo zusammen", "Liebe Leute alle", "Na, alles klar?", "Sehr geehrte Damen/Herren"], correct: 3,
                    explanation: "Ohne bekannten Namen ist das die Standardanrede im formellen Brief." },
                { id: "briefk7l1_l4", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "leicht", points: 10,
                    question: "Wie schließt du einen formellen Brief üblicherweise ab?",
                    answers: ["Mit freundlichen Grüßen", "Bis bald dann", "LG, bis dann", "Tschau, mach's gut"], correct: 0,
                    explanation: "'Mit freundlichen Grüßen' plus Name ist der Standardschluss." }
            ],
            mittel: [
                { id: "briefk7l1_m1", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "mittel", points: 10,
                    question: "Wofür ist die Betreffzeile im Brief da?",
                    answers: ["Sie ersetzt die Anrede", "Sie nennt kurz das Anliegen", "Sie zeigt das Wetter", "Sie ist reine Dekoration"], correct: 1,
                    explanation: "Der Betreff sagt in einer Zeile, worum es im Brief geht, z. B. 'Anfrage zu Öffnungszeiten'." },
                { id: "briefk7l1_m2", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "mittel", points: 10,
                    question: "Du beschwerst dich schriftlich über ein defektes Produkt. Welcher Ton passt?",
                    answers: ["Wütend und beleidigend", "Sachlich und klar begründet", "Sehr locker mit Emojis", "Gar keine Begründung nennen"], correct: 1,
                    explanation: "Auch bei Ärger bleibt ein formeller Brief sachlich – das wirkt überzeugender." },
                { id: "briefk7l1_m3", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "mittel", points: 10,
                    question: "Du willst einen Termin absagen. Was gehört unbedingt in den Brief?",
                    answers: ["Nur eine knappe Absage ohne Grund", "Absage, Grund und neuer Terminvorschlag", "Eine lange private Geschichte", "Gar kein Bezug zum Termin"], correct: 1,
                    explanation: "Höflich ist: absagen, kurz begründen und einen neuen Termin vorschlagen." },
                { id: "briefk7l1_m4", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "mittel", points: 10,
                    question: "Welcher Satz ist im formellen Brief angemessen formuliert?",
                    answers: ["Ich bitte Sie höflich um Auskunft.", "Sag mir mal schnell Bescheid.", "Meldet euch, sonst gibt's Ärger.", "Kein Bock mehr zu warten."], correct: 0,
                    explanation: "Höflich und im Sie-Stil formuliert, ohne Umgangssprache." }
            ],
            schwer: [
                { id: "briefk7l1_s1", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "schwer", points: 10,
                    question: "Warum wird im formellen Brief meist 'Sie' statt 'du' verwendet?",
                    answers: ["Weil 'du' falsch geschrieben ist", "Weil 'Sie' Respekt und Distanz zeigt", "Weil 'Sie' einfach kürzer ist", "Weil es keinen Unterschied macht"], correct: 1,
                    explanation: "Die Höflichkeitsform 'Sie' zeigt Respekt gegenüber einer unbekannten oder offiziellen Person." },
                { id: "briefk7l1_s2", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "schwer", points: 10,
                    question: "Ein Leserbrief an eine Zeitung ist ein Beispiel für welche Brief-Art?",
                    answers: ["Einen formellen Meinungsbrief", "Eine private SMS", "Eine reine Bewerbung", "Einen Liebesbrief"], correct: 0,
                    explanation: "Ein Leserbrief ist formell aufgebaut, äußert aber eine persönliche Meinung zu einem Thema." },
                { id: "briefk7l1_s3", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "schwer", points: 10,
                    question: "Was unterscheidet eine Anfrage von einer Beschwerde im formellen Brief?",
                    answers: ["Anfrage fragt, Beschwerde kritisiert", "Beide sind inhaltlich identisch", "Eine Anfrage braucht keine Anrede", "Eine Beschwerde braucht keinen Betreff"], correct: 0,
                    explanation: "Eine Anfrage bittet um Information, eine Beschwerde weist auf ein Problem hin – beide bleiben aber sachlich." },
                { id: "briefk7l1_s4", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "schwer", points: 10,
                    question: "Warum sollte ein formeller Brief kurz und klar strukturiert sein?",
                    answers: ["Damit es schnell verstanden wird", "Weil lange Briefe verboten sind", "Weil Papier ziemlich teuer ist", "Weil sonst die Post ihn nicht annimmt"], correct: 0,
                    explanation: "Ein klar gegliederter Brief mit kurzen Absätzen wird schneller und besser verstanden." }
            ]
        },
        test: [
            { id: "briefk7l1_t1", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "leicht", points: 10,
                question: "Wo steht im formellen Brief das Datum?",
                answers: ["Rechts oben im Brief", "Immer ganz unten", "Nie im Brief", "Nur im Betreff"], correct: 0,
                explanation: "Das Datum steht üblicherweise rechtsbündig oben, nahe der eigenen Adresse." },
            { id: "briefk7l1_t2", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "leicht", points: 10,
                question: "Welche Anrede ist zu locker für einen formellen Brief?",
                answers: ["Sehr geehrte Frau Bauer", "Sehr geehrter Herr Klein", "Hey Frau Bauer", "Sehr geehrte Damen/Herren"], correct: 2,
                explanation: "'Hey' ist Umgangssprache und passt nicht in einen formellen Brief." },
            { id: "briefk7l1_t3", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "mittel", points: 10,
                question: "Was macht die Betreffzeile für den Leser einfacher?",
                answers: ["Er erkennt sofort das Thema", "Er muss den ganzen Brief lesen", "Er kennt sofort den Absender", "Er erfährt das Wetter"], correct: 0,
                explanation: "Eine gute Betreffzeile nennt das Thema in wenigen Worten." },
            { id: "briefk7l1_t4", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "mittel", points: 10,
                question: "Welcher Satz passt zu einer höflichen Beschwerde?",
                answers: ["Das Gerät funktioniert leider nicht.", "Euer Gerät ist totaler Schrott!", "Das interessiert mich nicht mehr.", "Ich schreibe einfach mal wieder."], correct: 0,
                explanation: "Sachlich formuliert, ohne Beleidigung – so wird die Beschwerde ernst genommen." },
            { id: "briefk7l1_t5", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "schwer", points: 10,
                question: "Warum passt 'Sie' besser als 'du' in einer Beschwerde an eine Firma?",
                answers: ["Weil es Distanz und Respekt zeigt", "Weil 'du' grammatisch falsch ist", "Weil Firmen kein 'du' verstehen", "Es gibt keinen Unterschied"], correct: 0,
                explanation: "Die Höflichkeitsform zeigt Respekt, auch wenn man sich beschwert." },
            { id: "briefk7l1_t6", category: "kurs_brief_k7_l1", area: "schule", grade: 7, subject: "deutsch", topic: "brief", difficulty: "schwer", points: 10,
                question: "Was ist das Hauptziel eines formellen Briefs?",
                answers: ["Das Anliegen klar zu vermitteln", "Möglichst viele Emojis zu verwenden", "Den Empfänger zu unterhalten", "Möglichst lang zu wirken"], correct: 0,
                explanation: "Ein formeller Brief soll das Anliegen klar, sachlich und höflich rüberbringen." }
        ],
        bestehenAb: 0.8
    },
    {
        id: "briefk7_l2",
        kurs: "briefe_email_k7k8",
        order: 2,
        icon: "📧",
        title: "E-Mails schreiben",
        kurz: "Betreff, Anrede und Ton in schulischen und beruflichen E-Mails",
        erklaerung: {
            intro: "Eine <b>E-Mail</b> braucht keine Anschriften im Text, dafür aber eine klare <b>Betreffzeile</b> – sie zeigt sofort, worum es geht. Anrede und Schluss bleiben bei offiziellen E-Mails höflich, aber etwas kürzer als im Brief: 'Sehr geehrte Frau ...' und 'Viele Grüße' oder 'Mit freundlichen Grüßen'. <b>Chat-Abkürzungen</b> wie 'lol' oder 'cu' gehören dort nicht hin, und vor dem Absenden lohnt sich immer ein kurzer Rechtschreib- und Empfänger-Check.",
            beispiele: [
                "🏷️ Betreff: 'Frage zur Hausaufgabe' – kurz und eindeutig.",
                "👋 Anrede: 'Sehr geehrte Frau Kramer' statt 'Hi!'.",
                "✅ Vor dem Senden: Rechtschreibung und Empfänger nochmal prüfen."
            ],
            merksatz: "E-Mail = klare Betreffzeile, höfliche Anrede, kurzer sachlicher Text, freundlicher Schluss – keine Chat-Abkürzungen, immer vor dem Senden gegenlesen."
        },
        uebung: {
            leicht: [
                { id: "briefk7l2_l1", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "leicht", points: 10,
                    question: "Was braucht eine E-Mail unbedingt, damit der Empfänger sofort weiß, worum es geht?",
                    answers: ["Eine Betreffzeile", "Ein Anhang", "Ein Emoji", "Eine Unterschrift"], correct: 0,
                    explanation: "Die Betreffzeile zeigt schon in der Übersicht, worum es in der E-Mail geht." },
                { id: "briefk7l2_l2", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "leicht", points: 10,
                    question: "Welche Anrede passt in einer E-Mail an eine Lehrkraft?",
                    answers: ["Hi, alles klar?", "Sehr geehrte Frau Kramer", "Was geht ab?", "Servus, Frau Kramer"], correct: 1,
                    explanation: "In E-Mails an Lehrkräfte oder Erwachsene bleibt die Anrede höflich und formell." },
                { id: "briefk7l2_l3", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "leicht", points: 10,
                    question: "Was solltest du in einer offiziellen E-Mail vermeiden?",
                    answers: ["Vollständige Sätze", "Eine klare Betreffzeile", "Chat-Abkürzungen wie 'lol'", "Eine höfliche Anrede"], correct: 2,
                    explanation: "Chat-Abkürzungen wirken in offiziellen E-Mails unpassend und unprofessionell." },
                { id: "briefk7l2_l4", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "leicht", points: 10,
                    question: "Wie schließt du eine offizielle E-Mail meistens ab?",
                    answers: ["Mit freundlichen Grüßen", "Mit 'Bis später'", "Ganz ohne Gruß", "Mit einem Smiley"], correct: 0,
                    explanation: "Ein freundlicher, aber sachlicher Gruß passt zum Ende einer offiziellen E-Mail." }
            ],
            mittel: [
                { id: "briefk7l2_m1", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "mittel", points: 10,
                    question: "Worin unterscheidet sich eine E-Mail meistens vom klassischen Brief?",
                    answers: ["Sie braucht keine Anschrift im Text", "Sie darf keine Anrede haben", "Sie braucht keinen Betreff", "Sie ist immer länger als ein Brief"], correct: 0,
                    explanation: "Bei E-Mails stehen Absender und Empfänger im E-Mail-Programm, nicht im Text – dafür ist die Betreffzeile wichtig." },
                { id: "briefk7l2_m2", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "mittel", points: 10,
                    question: "Bevor du eine wichtige E-Mail abschickst, solltest du …",
                    answers: ["sie nochmal auf Fehler durchlesen", "sie einfach sofort löschen", "den Betreff leer lassen", "viele Ausrufezeichen einfügen"], correct: 0,
                    explanation: "Rechtschreibung und Empfänger vor dem Absenden prüfen – ein Fehler lässt sich danach nicht mehr zurückholen." },
                { id: "briefk7l2_m3", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "mittel", points: 10,
                    question: "Was gehört zu einer klar aufgebauten E-Mail?",
                    answers: ["Betreff, Anrede, kurzer Text, Gruß", "Nur ein einziges langes Wort", "Ein Text ganz ohne Absätze", "Nur Bilder ohne Text"], correct: 0,
                    explanation: "Auch E-Mails folgen einem klaren Aufbau: Betreff, Anrede, Text in Absätzen, Gruß." },
                { id: "briefk7l2_m4", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "mittel", points: 10,
                    question: "Du hängst eine Datei an deine E-Mail an. Was solltest du im Text erwähnen?",
                    answers: ["Dass ein Anhang dabei ist", "Gar nichts dazu schreiben", "Nur den Dateinamen in Großbuchstaben", "Den Anhang mehrfach doppelt anhängen"], correct: 0,
                    explanation: "Ein kurzer Hinweis im Text hilft dem Empfänger, den Anhang richtig einzuordnen." }
            ],
            schwer: [
                { id: "briefk7l2_s1", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "schwer", points: 10,
                    question: "Warum ist eine leere oder unklare Betreffzeile ein Problem?",
                    answers: ["Der Empfänger übersieht die Mail leicht", "E-Mail-Programme akzeptieren das nie", "Der Betreff wird automatisch ausgefüllt", "Es ist kein Problem, Betreff ist unwichtig"], correct: 0,
                    explanation: "Eine unklare Betreffzeile führt dazu, dass die E-Mail in der Flut untergeht oder ignoriert wird." },
                { id: "briefk7l2_s2", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "schwer", points: 10,
                    question: "Du antwortest auf eine E-Mail-Kette mit vielen Empfängern. Worauf solltest du achten?",
                    answers: ["Ob wirklich alle die Antwort sehen sollen", "Dass möglichst viele Leute mitlesen", "Dass der Betreff gelöscht wird", "Dass du niemanden mehr anschreibst"], correct: 0,
                    explanation: "'Allen antworten' sollte man bewusst wählen – nicht jede Antwort ist für die ganze Gruppe gedacht." },
                { id: "briefk7l2_s3", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "schwer", points: 10,
                    question: "Warum bleibt eine E-Mail an eine Firma trotz kürzerem Format formell?",
                    answers: ["Weil sie an eine offizielle Stelle geht", "Weil E-Mails technisch länger sein müssen", "Weil Firmen keine kurzen Texte lesen", "Weil das gesetzlich vorgeschrieben ist"], correct: 0,
                    explanation: "Der Empfänger entscheidet über den Ton, nicht das Format – an Firmen bleibt man höflich und sachlich." },
                { id: "briefk7l2_s4", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "schwer", points: 10,
                    question: "Was ist der wichtigste Unterschied zwischen einer privaten Chat-Nachricht und einer offiziellen E-Mail?",
                    answers: ["Die E-Mail bleibt höflich und klar", "Die E-Mail darf keine Anrede haben", "Der Chat braucht immer einen Betreff", "Es gibt keinen echten Unterschied"], correct: 0,
                    explanation: "Offizielle E-Mails folgen den Regeln höflicher, klarer Schriftsprache – ganz anders als der lockere Chat-Ton." }
            ]
        },
        test: [
            { id: "briefk7l2_t1", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "leicht", points: 10,
                question: "Warum ist die Betreffzeile bei E-Mails wichtig?",
                answers: ["Sie zeigt sofort das Thema der Mail", "Sie ersetzt den Anhang", "Sie ist nur Dekoration", "Sie ersetzt die Anrede"], correct: 0,
                explanation: "Der Betreff hilft, die E-Mail schnell einzuordnen, auch im vollen Postfach." },
            { id: "briefk7l2_t2", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "leicht", points: 10,
                question: "Welcher Ausdruck passt nicht in eine offizielle E-Mail?",
                answers: ["Sehr geehrte Frau Kohl", "Mit freundlichen Grüßen", "cu, bin dann mal weg", "Ich wollte fragen, ob ..."], correct: 2,
                explanation: "'cu' ist eine Chat-Abkürzung und passt nicht in eine offizielle E-Mail." },
            { id: "briefk7l2_t3", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "mittel", points: 10,
                question: "Was solltest du vor dem Absenden einer wichtigen E-Mail prüfen?",
                answers: ["Rechtschreibung und Empfänger", "Nur die genaue Uhrzeit", "Ob ein Emoji dabei ist", "Ob der Betreff leer ist"], correct: 0,
                explanation: "Ein kurzer Check schützt vor peinlichen Fehlern, die sich nicht zurückholen lassen." },
            { id: "briefk7l2_t4", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "mittel", points: 10,
                question: "Du hängst eine Datei an. Was ist sinnvoll?",
                answers: ["Im Text kurz erwähnen, was im Anhang ist", "Den Anhang unerwähnt lassen", "Den Betreff dafür leer lassen", "Die Datei mehrfach anhängen"], correct: 0,
                explanation: "Ein Hinweis im Text erklärt, was der Anhang enthält und warum er wichtig ist." },
            { id: "briefk7l2_t5", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "schwer", points: 10,
                question: "Warum sollte man bei 'Allen antworten' vorsichtig sein?",
                answers: ["Nicht jede Antwort ist für alle gedacht", "Das Programm erlaubt es sonst nicht", "Der Betreff geht sonst verloren", "Es gibt dabei keine Regeln zu beachten"], correct: 0,
                explanation: "Wer gedankenlos 'Allen antworten' klickt, schickt private Antworten oft ungewollt an viele Leute." },
            { id: "briefk7l2_t6", category: "kurs_brief_k7_l2", area: "schule", grade: 8, subject: "deutsch", topic: "email", difficulty: "schwer", points: 10,
                question: "Was unterscheidet eine offizielle E-Mail am meisten von einer Chat-Nachricht an Freunde?",
                answers: ["Höflicher, klarer Ton ohne Abkürzungen", "Die Anzahl der Wörter im Betreff", "Die Farbe der Schriftart", "Es gibt keinen Unterschied"], correct: 0,
                explanation: "Offizielle E-Mails bleiben höflich und klar formuliert, ganz anders als der lockere Chat-Ton unter Freunden." }
        ],
        bestehenAb: 0.8
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
})();
