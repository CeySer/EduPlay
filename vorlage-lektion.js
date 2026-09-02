/* ============================================================
   VORLAGE für eine neue Lektion – EduPlay Hub
   ------------------------------------------------------------
   1. Diesen Block kopieren
   2. In lektionen.js ans Ende des LEKTIONEN-Arrays einfügen
      (direkt vor dem  ];  das vor "ZUSTAND & HILFSFUNKTIONEN" steht)
   3. Komma nicht vergessen: der bisher letzte Eintrag hat keins
   4. Passenden Eintrag ins KURSE-Array oben ergänzen (siehe unten)
   5. node pruefe-lektionen.js  laufen lassen
   ============================================================ */


/* ---------- 1. KURSE-Eintrag (ans Ende des KURSE-Arrays) ----------

    { id: "phrasal_verbs_k10", title: "Phrasal Verbs", icon: "🔗", grade: 10, subject: "englisch",
      beschreibung: "give up, find out, look after – und wohin das Pronomen gehört." }

------------------------------------------------------------------- */


/* ---------- 2. LEKTIONS-Eintrag (ans Ende des LEKTIONEN-Arrays) ---------- */
    {
        id: "phras_k10_l1",
        kurs: "phrasal_verbs_k10",
        order: 1,
        icon: "🔗",
        title: "Häufige Phrasal Verbs",
        kurz: "give up, find out, look after",
        erklaerung: {
            intro: "Ein <b>Phrasal Verb</b> ist ein Verb plus kleines Wort – und die Bedeutung ändert sich dabei komplett. <b>give</b> heißt geben, <b>give up</b> heißt aufgeben.",
            beispiele: [
                "🔗 give up = aufgeben · find out = herausfinden · look after = sich kümmern um",
                "🔢 turn down = ablehnen oder leiser stellen. Der Zusammenhang entscheidet.",
                "⚠️ Wörtlich übersetzen führt in die Irre: look after heißt nicht nachschauen."
            ],
            merksatz: "Verb + Partikel = neue Bedeutung. Nicht Wort für Wort übersetzen, sondern als Einheit lernen."
        },
        uebung: {
            leicht: [
                { id: "phrask10l1u_leicht_1", category: "kurs_phras_k10_l1", area: "schule", grade: 10, subject: "englisch", topic: "phrasal_verbs", difficulty: "leicht", points: 10,
                    question: "Was heißt give up?",
                    answers: ["aufgeben", "aufstehen", "abgeben", "angeben"], correct: 0,
                    explanation: "give up heißt aufgeben: He gave up smoking last year." }

                /* --- hier Frage 2 bis 4 nach demselben Muster, mit Komma getrennt --- */
            ],
            mittel: [
                /* 4 Fragen */
            ],
            schwer: [
                /* 4 Fragen */
            ]
        },
        test: [
            /* 6 Fragen, gemischte difficulty: leicht / mittel / schwer */
        ],
        bestehenAb: 0.8
    }


/* ============================================================
   CHECKLISTE vor dem Einfügen
   ------------------------------------------------------------
   [ ] 18 Fragen: 4 leicht + 4 mittel + 4 schwer + 6 test
   [ ] Jede ID einmalig in der ganzen Datei
   [ ] category = "kurs_" + Lektions-ID, bei JEDER Frage
   [ ] correct: 0 – die richtige Antwort steht immer vorne
   [ ] 4 Antworten, keine doppelt, keine zwei mit gleichem Wert
   [ ] Längenunterschied unter 15 Zeichen
       Trick: erst die drei falschen schreiben, dann die richtige
   [ ] Kein Distraktor, den man ohne Wissen ausschließen kann
   [ ] explanation: 1-2 ganze Sätze mit Beispiel, keine Stichworte
   [ ] node pruefe-lektionen.js  meldet 0 Fehler, 0 Warnungen
   [ ] index.html ?v= und sw.js CACHE hochgezählt
   ============================================================ */
