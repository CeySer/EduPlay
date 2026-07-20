const QUESTIONS_DATABASE = [
    { category: "eng_grammatik_5_6", question: "He ___ to school every day.", answers: ["go", "goes", "going"], correct: 1, explanation: "💡 Simple Present: Bei 'he, she, it' muss das 's' mit! (He goes)" },
    { category: "deutsch_uebungsheft", question: "Welches Wort ist richtig großgeschrieben?", answers: ["hund", "Hund", "HUnD"], correct: 1, explanation: "💡 Regel: Nomen schreibt man immer groß!" },
    { category: "klasse2_mathe", question: "Was ist 25 + 14?", answers: ["35", "38", "39"], correct: 2, explanation: "💡 20+10=30, 5+4=9. Ergibt 39!" },
    { category: "kfz", question: "Zahnriemenwechsel: Was darfst du nicht tun, während das Absteckwerkzeug angebracht ist?", answers: ["Wasserpumpe lösen", "Motor durchdrehen", "Riemen abnehmen"], correct: 1, explanation: "💡 Sonst droht ein Motorschaden!" }
];

const VOCABULARY_DATABASE = {
    en: {
        basics: { 
            label: "🧸 Basis (Grundschule)", 
            words: [
                {de:"Null",foreign:"zero"}, {de:"Eins",foreign:"one"}, {de:"Zwei",foreign:"two"},
                {de:"Hund",foreign:"dog"}, {de:"Schule",foreign:"school"}
            ] 
        }
    },
    tr: {
        basics: { 
            label: "🧸 Temel Kelimeler", 
            words: [
                {de:"Null",foreign:"sıfır"}, {de:"Eins",foreign:"bir"}, {de:"Zwei",foreign:"iki"},
                {de:"Hund",foreign:"köpek"}
            ] 
        }
    }
};