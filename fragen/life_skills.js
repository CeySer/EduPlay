const LIFE_SKILLS_DATABASE = [

    // ============================================================
    // 🩹 ERSTE HILFE & GESUNDHEIT
    // ============================================================

    {
        id: "ls001",
        category: "erste_hilfe",
        question: "Was tust du zuerst, wenn sich jemand tief in den Finger schneidet?",
        answers: [
            "Wunde mit klarem Wasser ausspülen",
            "Ein Pflaster aufkleben, auch wenn es stark blutet",
            "Wunde sofort mit einem sauberen Tuch abdecken und Druck ausüben"
        ],
        correct: 2,
        explanation: "Bei einer stark blutenden Wunde ist Druck die wichtigste Sofortmaßnahme. Danach die Wunde vorsichtig reinigen und einen Verband anlegen. Bei tiefen oder stark blutenden Wunden sofort den Notruf wählen.",
        tags: ["blutung", "notfall"]
    },
    {
        id: "ls002",
        category: "erste_hilfe",
        question: "Was ist die häufigste Ursache für Nasenbluten und was tust du dagegen?",
        answers: [
            "Zu trockene Luft oder starkes Schnäuzen → Kopf in den Nacken legen",
            "Eine Verletzung der Nasenscheidewand → Eis auf die Stirn legen",
            "Trockene Nasenschleimhäute oder ein Schlag → Kopf leicht nach vorne beugen und die Nasenflügel zudrücken"
        ],
        correct: 2,
        explanation: "Bei Nasenbluten den Kopf nicht in den Nacken legen (Blut läuft in den Rachen!), sondern leicht nach vorne beugen und die Nasenflügel für etwa 10 Minuten zusammendrücken. Bei anhaltendem Bluten oder nach einem Schlag auf die Nase zum Arzt.",
        tags: ["blutung", "notfall"]
    },
    {
        id: "ls003",
        category: "erste_hilfe",
        question: "Was ist bei einem Sonnenstich die wichtigste Sofortmaßnahme?",
        answers: [
            "Viel Wasser trinken und die Person in die Sonne setzen",
            "Die Person in den Schatten legen, Kopf hochlagern und kalte Umschläge auf Stirn und Nacken machen",
            "Paracetamol geben und die Person zum Durchschlafen hinlegen"
        ],
        correct: 1,
        explanation: "Ein Sonnenstich ist eine Reizung der Hirnhäute durch Überhitzung des Kopfes. Schatten, Ruhe, kalte Umschläge und viel Trinken sind entscheidend. Bei Bewusstseinstrübung oder starkem Erbrechen sofort den Notruf rufen.",
        tags: ["hitze", "notfall"]
    },
    {
        id: "ls004",
        category: "erste_hilfe",
        question: "Wie behandelst du eine oberflächliche Verbrennung (z. B. am Herd)?",
        answers: [
            "Die verbrannte Stelle sofort mit Eis oder kaltem Wasser kühlen – aber nicht länger als 10 Minuten",
            "Die Stelle mit Butter oder Öl einreiben und mit einem Pflaster abdecken",
            "Die verbrannte Stelle unter fließendes kaltes Wasser halten (10–15 Minuten) und danach einen sterilen Verband anlegen"
        ],
        correct: 2,
        explanation: "Bei Verbrennungen ist sofortiges, aber nicht übertriebenes Kühlen (max. 15 Minuten) mit lauwarmem Wasser wichtig. Eis oder Butter sind tabu – sie verschlimmern die Schädigung. Blasenpflaster erst nach dem Abheilen der Wunde verwenden.",
        tags: ["verbrennung", "notfall"]
    },

    // ============================================================
    // 💰 FINANZEN & STEUERN
    // ============================================================

    {
        id: "ls005",
        category: "finanzen",
        question: "Was ist der Unterschied zwischen Brutto- und Nettogehalt?",
        answers: [
            "Brutto ist das Gehalt nach Abzügen, Netto ist das Gehalt vor Abzügen",
            "Brutto ist das Gehalt vor Abzügen, Netto ist das Gehalt nach Abzügen von Steuern und Sozialversicherungen",
            "Brutto und Netto sind dasselbe – nur verschiedene Namen"
        ],
        correct: 1,
        explanation: "Brutto ist das vereinbarte Gehalt – davon werden Steuern (Lohnsteuer) und Sozialabgaben (Rente, Kranken-, Pflege-, Arbeitslosenversicherung) abgezogen. Netto ist das, was auf deinem Konto ankommt.",
        tags: ["gehalt", "steuern"]
    },
    {
        id: "ls006",
        category: "finanzen",
        question: "Was ist eine Steuererklärung und warum ist sie für Arbeitnehmer in Deutschland wichtig?",
        answers: [
            "Die Steuererklärung ist eine Pflicht für jeden Arbeitnehmer – du kannst damit unter Umständen zu viel gezahlte Steuern zurückholen.",
            "Die Steuererklärung ist nur für Selbstständige relevant, Arbeitnehmer müssen sie nicht abgeben.",
            "Die Steuererklärung ist ein Antrag auf Steuerermäßigung, den du jedes Jahr beim Finanzamt einreichst – nur Selbstständige müssen sie abgeben."
        ],
        correct: 0,
        explanation: "Arbeitnehmer können freiwillig eine Steuererklärung abgeben (bei bestimmten Einkünften ist sie Pflicht). Wer mehr Werbungskosten hat (z. B. Fahrtkosten, Arbeitsmittel) als der Pauschbetrag, bekommt Geld vom Finanzamt zurück. Programme wie Buhl (WISO Steuer) oder Elster helfen dabei.",
        tags: ["steuern", "geld"]
    },
    {
        id: "ls007",
        category: "finanzen",
        question: "Warum ist es wichtig, regelmäßig seine Kontoauszüge zu prüfen?",
        answers: [
            "Nur um den Kontostand zu kennen",
            "Um unberechtigte Abbuchungen oder Fehlbuchungen frühzeitig zu erkennen und zurückzubuchen zu lassen",
            "Das ist nur für Selbstständige wichtig – Privatpersonen brauchen das nicht"
        ],
        correct: 1,
        explanation: "Fehler passieren – sowohl bei Abbuchungen (z. B. zu hoher Betrag, doppelte Abbuchung) als auch bei Lastschriften, die du nicht autorisiert hast. Wer schnell reagiert, kann Geld zurückholen.",
        tags: ["konto", "geld"]
    },

    // ============================================================
    // 🏠 WOHNEN & HAUSHALT
    // ============================================================

    {
        id: "ls008",
        category: "wohnen",
        question: "Was ist beim Bohren in eine Wand zu beachten?",
        answers: [
            "Einfach losbohren – die Wand ist stabil genug",
            "Vorher mit einem Leitungssucher prüfen, ob Strom- oder Wasserleitungen in der Wand verlaufen",
            "Die Wand vorher anfeuchten, damit der Bohrer nicht überhitzt"
        ],
        correct: 1,
        explanation: "Ein Leitungssucher (oder ein einfacher Stud-Sensor) zeigt dir, wo Stromkabel oder Wasserrohre in der Wand liegen. Ein falscher Bohrer kann im schlimmsten Fall einen Stromschlag oder einen Wasserschaden verursachen.",
        tags: ["heimwerken", "sicherheit"]
    },
    {
        id: "ls009",
        category: "wohnen",
        question: "Was bedeuten die Pflegesymbole auf Kleidungsetiketten?",
        answers: [
            "Ein Waschbecken-Symbol bedeutet 'nur in die Reinigung geben'",
            "Ein Dreieck-Symbol bedeutet 'nicht bleichen'",
            "Ein Bügeleisen-Symbol bedeutet 'nicht heiß bügeln'"
        ],
        correct: 1,
        explanation: "Das Dreieck steht für 'Bleichen' – wenn es durchgestrichen ist, darf das Kleidungsstück nicht gebleicht werden. Das Waschbeckensymbol gibt die Waschtemperatur an, das Bügeleisen die maximale Bügeltemperatur.",
        tags: ["kleidung", "haushalt"]
    },

    // ============================================================
    // 🗣️ KOMMUNIKATION & BÜRO
    // ============================================================

    {
        id: "ls010",
        category: "kommunikation",
        question: "Wie schreibt man eine höfliche Beschwerde-E-Mail?",
        answers: [
            "Den Ärger lautstark formulieren – der Empfänger soll merken, wie aufgebracht du bist",
            "Sachlich und klar das Problem schildern, den gewünschten Lösungsvorschlag nennen und um eine Rückmeldung bitten",
            "Nur das Problem nennen – den Rest regelt der Empfänger"
        ],
        correct: 1,
        explanation: "Eine gute Beschwerde ist sachlich, klar und lösungsorientiert. Nenne das Problem, deine Erwartung und eine Frist für die Antwort. Bleibe freundlich – so erreichst du mehr als mit Wut.",
        tags: ["email", "beschwerde"]
    },

    // ============================================================
    // 🏃 SPORT & BEWEGUNG
    // ============================================================

    {
        id: "ls011",
        category: "sport",
        question: "Warum ist regelmäßige Bewegung für die Gesundheit wichtig?",
        answers: [
            "Nur um Muskelaufbau zu betreiben – ohne Sport werden Muskeln zu Fett",
            "Bewegung stärkt das Herz-Kreislauf-System, hilft beim Stressabbau und kann vor vielen Zivilisationskrankheiten schützen",
            "Sport ist nur wichtig für junge Menschen – ab 50 reicht Spazierengehen"
        ],
        correct: 1,
        explanation: "Regelmäßige Bewegung senkt das Risiko für Herz-Kreislauf-Erkrankungen, Diabetes, Übergewicht und stärkt die geistige Gesundheit. Schon 30 Minuten Bewegung pro Tag haben große Effekte – unabhängig vom Alter.",
        tags: ["gesundheit", "fitness"]
    },
    {
        id: "ls012",
        category: "sport",
        question: "Was passiert, wenn du beim Fußball den Ball absichtlich mit der Hand berührst?",
        answers: [
            "Das ist erlaubt – aber nur im eigenen Strafraum",
            "Das ist ein Foul – der Gegner bekommt einen Freistoß oder Elfmeter, wenn es im Strafraum war",
            "Das ist immer ein Tor für den Gegner"
        ],
        correct: 1,
        explanation: "Absichtliches Handspiel ist ein Regelverstoß. Der Schiedsrichter entscheidet auf Freistoß – im Strafraum gibt es Elfmeter. Nur der Torwart darf den Ball im Strafraum mit den Händen berühren.",
        tags: ["fußball", "regeln"]
    },

    // ============================================================
    // ⚖️ GESETZE & ALLTAG
    // ============================================================

    {
        id: "ls013",
        category: "gesetze",
        question: "Was ist die DSGVO und warum ist sie für deine Daten wichtig?",
        answers: [
            "Die DSGVO ist ein Gesetz, das Unternehmen vorschreibt, deine Daten zu schützen und dich über deren Nutzung zu informieren – du hast ein Recht auf Auskunft und Löschung.",
            "Die DSGVO ist ein Gesetz, das nur für Unternehmen gilt – Privatpersonen sind davon nicht betroffen.",
            "Die DSGVO ist ein Gesetz, das es Unternehmen erlaubt, deine Daten zu sammeln und zu verkaufen."
        ],
        correct: 0,
        explanation: "Die DSGVO (Datenschutz-Grundverordnung) gibt dir als Verbraucher starke Rechte: Unternehmen müssen dich informieren, welche Daten sie speichern und wofür. Du hast das Recht auf Löschung deiner Daten und kannst Einsicht verlangen.",
        tags: ["datenschutz", "rechte"]
    },

    // ============================================================
    // 🌍 NACHHALTIGKEIT & UMWELT
    // ============================================================

    {
        id: "ls014",
        category: "nachhaltigkeit",
        question: "Warum ist es wichtig, den Müll zu trennen?",
        answers: [
            "Nur um die Müllabfuhr zu entlasten",
            "Damit wertvolle Rohstoffe recycelt werden können und weniger Abfall in der Natur landet",
            "Das ist nur in Deutschland wichtig – im Ausland ist Mülltrennung nicht relevant"
        ],
        correct: 1,
        explanation: "Mülltrennung ermöglicht Recycling – so werden Rohstoffe wie Glas, Papier, Kunststoffe und Metalle wiederverwertet, was Energie und Ressourcen spart und die Umwelt schont.",
        tags: ["umwelt", "recycling"]
    }
];