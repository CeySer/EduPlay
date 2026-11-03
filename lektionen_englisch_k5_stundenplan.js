// Englisch Klasse 5 - Lektion "My timetable" (Stundenplan & Schulfächer)
// Hängt sich als 5. Lektion an den Kurs "themenwortschatz_k5" (lektionen.js).
// topic "school_vocab" = Wissensthema "🏫 Schulwortschatz" -> Kurs-Empfehlung passt.
// Wörter dazu: Vokabeln Klasse 5, Thema "timetable" (e05_204 bis e05_243).
// Wird NACH lektionen.js geladen.
(function () {
    function f(id, diff, question, answers, correct, explanation) {
        return {
            id: id, category: "kurs_wortschatz_k5_l5", area: "schule", grade: 5,
            subject: "englisch", topic: "school_vocab", difficulty: diff, points: 10,
            question: question, answers: answers, correct: correct, explanation: explanation
        };
    }
    const extraLektionen = [{
        id: "wortschatz_k5_l5",
        kurs: "themenwortschatz_k5",
        order: 5,
        icon: "🗓️",
        title: "My timetable",
        kurz: "Schulfächer, Wochentage und Uhrzeiten im Stundenplan",
        erklaerung: {
            intro: "Auf Englisch über den eigenen Stundenplan sprechen: welche <b>subjects</b> (Fächer) du hast, <b>wann</b> sie sind und wie du sie findest. Die meisten Fächer heißen ähnlich wie im Deutschen. Ein paar sind aber anders: <b>PE</b> ist Sport, <b>RE</b> ist Religion, <b>art</b> ist Kunst, <b>drama</b> ist Theater. Sprachen schreibt man immer groß: <b>German, English, French</b>.",
            beispiele: [
                "📚 Fächer: maths, German, English, French, art, music, PE, history, biology, geography, RE, politics, computer science.",
                "📅 Wochentag mit <b>on</b>: We have art <b>on Monday</b>. – Jeden Montag: <b>on Mondays</b>.",
                "⏰ Uhrzeit mit <b>at</b>: School starts <b>at eight o'clock</b>. – <b>half past nine</b> = halb zehn, <b>quarter past nine</b> = Viertel nach neun, <b>quarter to eleven</b> = Viertel vor elf.",
                "💬 What's your favourite subject? – My favourite subject is music. I'm <b>good at</b> maths. History is interesting."
            ],
            merksatz: "Tag mit on (on Monday), Uhrzeit mit at (at nine o'clock). Achtung: half past nine ist halb ZEHN!"
        },
        uebung: {
            leicht: [
                f("wsk5l5u_leicht_1", "leicht", "Was heißt „PE“ als Schulfach?", ["Physik", "Sport", "Politik", "Pause"], 1, "PE (physical education) ist das Fach Sport."),
                f("wsk5l5u_leicht_2", "leicht", "Wie heißt das Fach Kunst auf Englisch?", ["art", "craft", "paint", "music"], 0, "Kunst heißt art."),
                f("wsk5l5u_leicht_3", "leicht", "Was heißt „history“?", ["Biologie", "Erdkunde", "Geschichte", "Religion"], 2, "history ist Geschichte."),
                f("wsk5l5u_leicht_4", "leicht", "Wie sagt man „Lieblingsfach“?", ["favourite subject", "best lesson", "nice class", "love subject"], 0, "Lieblingsfach = favourite subject.")
            ],
            mittel: [
                f("wsk5l5u_mittel_1", "mittel", "Ergänze: „We have music ___ Friday.“", ["at", "in", "on", "to"], 2, "Vor Wochentagen steht on: on Friday."),
                f("wsk5l5u_mittel_2", "mittel", "Ergänze: „The break starts ___ ten o'clock.“", ["on", "at", "in", "by"], 1, "Vor Uhrzeiten steht at: at ten o'clock."),
                f("wsk5l5u_mittel_3", "mittel", "Welches Fach schreibt man auf Englisch groß?", ["maths", "art", "French", "music"], 2, "Sprachen schreibt man groß: French, German, English."),
                f("wsk5l5u_mittel_4", "mittel", "Was heißt „lunch break“?", ["Mittagspause", "Frühstück", "Freistunde", "Schulschluss"], 0, "lunch break ist die Mittagspause.")
            ],
            schwer: [
                f("wsk5l5u_schwer_1", "schwer", "Was heißt „half past nine“?", ["9:30 Uhr – halb zehn", "8:30 Uhr – halb neun", "9:15 Uhr", "9:45 Uhr"], 0, "half past nine = 30 Minuten nach neun = halb zehn."),
                f("wsk5l5u_schwer_2", "schwer", "Was bedeutet „We have PE on Mondays.“?", ["Wir haben nächsten Montag Sport.", "Wir haben montags Sport.", "Wir hatten am Montag Sport.", "Wir haben bis Montag Sport."], 1, "on Mondays (mit -s) heißt jeden Montag, also montags."),
                f("wsk5l5u_schwer_3", "schwer", "Welcher Satz ist richtig?", ["I'm good in maths.", "I'm good at maths.", "I'm good on maths.", "I good at maths."], 1, "gut in etwas = good at: I'm good at maths."),
                f("wsk5l5u_schwer_4", "schwer", "Was heißt „quarter to eleven“?", ["11:15 Uhr", "10:15 Uhr", "11:45 Uhr", "10:45 Uhr"], 3, "quarter to eleven = Viertel vor elf = 10:45 Uhr.")
            ]
        },
        test: [
            f("wsk5l5_test_1", "leicht", "Was heißt „RE“ als Schulfach?", ["Rechnen", "Religion", "Reiten", "Erdkunde"], 1, "RE (religious education) ist Religion."),
            f("wsk5l5_test_2", "leicht", "Wie heißt Informatik auf Englisch?", ["computer science", "computer art", "technology lesson", "IT club"], 0, "Informatik heißt computer science."),
            f("wsk5l5_test_3", "mittel", "Ergänze: „We have English ___ Tuesday ___ nine o'clock.“", ["at – on", "in – at", "on – at", "on – in"], 2, "Tag mit on, Uhrzeit mit at: on Tuesday at nine o'clock."),
            f("wsk5l5_test_4", "mittel", "Was ist eine „double lesson“?", ["eine Doppelstunde", "zwei Lehrer in einer Klasse", "eine Wiederholung", "eine Freistunde"], 0, "double lesson = Doppelstunde."),
            f("wsk5l5_test_5", "schwer", "„School finishes at quarter past one.“ – Wann ist Schulschluss?", ["12:45 Uhr", "13:30 Uhr", "13:15 Uhr", "13:45 Uhr"], 2, "quarter past one = Viertel nach eins = 13:15 Uhr."),
            f("wsk5l5_test_6", "schwer", "Wie fragst du nach dem Lieblingsfach?", ["What's your favourite subject?", "Which subject you like?", "What subject is favourite?", "Do you favourite a subject?"], 0, "Die feste Frage lautet: What's your favourite subject?")
        ],
        bestehenAb: 0.8
    }];
    if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
        extraLektionen.forEach(function (l) {
            if (!LEKTIONEN.some(function (x) { return x.id === l.id; })) LEKTIONEN.push(l);
        });
    }
    if (typeof KURSE !== "undefined" && Array.isArray(KURSE)) {
        const k = KURSE.find(function (x) { return x.id === "themenwortschatz_k5"; });
        if (k && k.beschreibung.indexOf("Stundenplan") === -1) {
            k.beschreibung = "Wichtige Wörter zu Schule, Stundenplan, Familie, Tagesablauf und Wohnort.";
        }
    }
})();
