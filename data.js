// =======================================================
// FRAGEN-DATENBANK
// Aufbau: LERNEN (nach Klassenstufe 1-13 und Fach) ist strikt
// getrennt vom SPASS-Bereich. Die Faecher je Klasse richten sich
// nach den ueblichen Lehrplaenen der Bundeslaender (KMK-Rahmen).
// Hinweis: Lehrplaene sind Laendersache und unterscheiden sich
// im Detail - dies ist eine gaengige, gut uebertragbare Einteilung.
// =======================================================
const QUESTIONS_DATABASE = [
    // --- Hier kommen alle Schul-Fragen (Klasse 1-13) ---
    // Siehe separate Datei: school_questions.js
];

// =======================================================
// LEHRPLAN-STRUKTUR: welche Faecher gibt es in welcher Klasse
// =======================================================
const CURRICULUM = [
    { grade: 1, label: "Klasse 1", stufe: "Grundschule", subjects: [{ key: "k1_deutsch", label: "📖 Deutsch (Lesen & Schreiben)" }, { key: "k1_mathe", label: "🔢 Mathematik" }, { key: "k1_sachunterricht", label: "🌱 Sachunterricht" }] },
    { grade: 2, label: "Klasse 2", stufe: "Grundschule", subjects: [{ key: "k2_deutsch", label: "📖 Deutsch" }, { key: "k2_mathe", label: "🔢 Mathematik" }, { key: "k2_sachunterricht", label: "🌱 Sachunterricht" }] },
    { grade: 3, label: "Klasse 3", stufe: "Grundschule", subjects: [{ key: "k3_deutsch", label: "📖 Deutsch" }, { key: "k3_mathe", label: "🔢 Mathematik" }, { key: "k3_sachunterricht", label: "🌱 Sachunterricht" }, { key: "k3_englisch", label: "🇬🇧 Englisch" }, { key: "k3_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 4, label: "Klasse 4", stufe: "Grundschule", subjects: [{ key: "k4_deutsch", label: "📖 Deutsch (Grammatik)" }, { key: "k4_mathe", label: "🔢 Mathematik" }, { key: "k4_sachunterricht", label: "🌱 Sachunterricht" }, { key: "k4_englisch", label: "🇬🇧 Englisch" }, { key: "k4_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 5, label: "Klasse 5", stufe: "Sekundarstufe I", subjects: [{ key: "k5_deutsch", label: "📖 Deutsch" }, { key: "k5_mathe", label: "🔢 Mathematik" }, { key: "k5_englisch", label: "🇬🇧 Englisch" }, { key: "k5_biologie", label: "🧬 Biologie" }, { key: "k5_erdkunde", label: "🌍 Erdkunde" }, { key: "k5_politik", label: "🏛️ Politik & Gesellschaftslehre" }, { key: "k5_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 6, label: "Klasse 6", stufe: "Sekundarstufe I", subjects: [{ key: "k6_deutsch", label: "📖 Deutsch" }, { key: "k6_mathe", label: "🔢 Mathematik" }, { key: "k6_englisch", label: "🇬🇧 Englisch" }, { key: "k6_biologie", label: "🧬 Biologie" }, { key: "k6_physik", label: "⚡ Physik" }, { key: "k6_geschichte", label: "📜 Geschichte" }, { key: "k6_erdkunde", label: "🌍 Erdkunde" }, { key: "k6_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 7, label: "Klasse 7", stufe: "Sekundarstufe I", subjects: [{ key: "k7_deutsch", label: "📖 Deutsch" }, { key: "k7_mathe", label: "🔢 Mathematik" }, { key: "k7_englisch", label: "🇬🇧 Englisch" }, { key: "k7_biologie", label: "🧬 Biologie" }, { key: "k7_chemie", label: "⚗️ Chemie" }, { key: "k7_physik", label: "⚡ Physik" }, { key: "k7_geschichte", label: "📜 Geschichte" }, { key: "k7_erdkunde", label: "🌍 Erdkunde" }, { key: "k7_politik", label: "🏛️ Politik & Wirtschaft" }, { key: "k7_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 8, label: "Klasse 8", stufe: "Sekundarstufe I", subjects: [{ key: "k8_deutsch", label: "📖 Deutsch" }, { key: "k8_mathe", label: "🔢 Mathematik" }, { key: "k8_englisch", label: "🇬🇧 Englisch" }, { key: "k8_biologie", label: "🧬 Biologie" }, { key: "k8_chemie", label: "⚗️ Chemie" }, { key: "k8_physik", label: "⚡ Physik" }, { key: "k8_geschichte", label: "📜 Geschichte" }, { key: "k8_erdkunde", label: "🌍 Erdkunde" }, { key: "k8_politik", label: "🏛️ Politik & Wirtschaft" }, { key: "k8_informatik", label: "💻 Informatik & Medien" }, { key: "k8_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 9, label: "Klasse 9", stufe: "Sekundarstufe I", subjects: [{ key: "k9_deutsch", label: "📖 Deutsch" }, { key: "k9_mathe", label: "🔢 Mathematik" }, { key: "k9_englisch", label: "🇬🇧 Englisch" }, { key: "k9_biologie", label: "🧬 Biologie" }, { key: "k9_chemie", label: "⚗️ Chemie" }, { key: "k9_physik", label: "⚡ Physik" }, { key: "k9_geschichte", label: "📜 Geschichte" }, { key: "k9_erdkunde", label: "🌍 Erdkunde" }, { key: "k9_politik", label: "🏛️ Politik & Wirtschaft" }, { key: "k9_informatik", label: "💻 Informatik & Medien" }, { key: "k9_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 10, label: "Klasse 10", stufe: "Sekundarstufe I", subjects: [{ key: "k10_deutsch", label: "📖 Deutsch" }, { key: "k10_mathe", label: "🔢 Mathematik" }, { key: "k10_englisch", label: "🇬🇧 Englisch" }, { key: "k10_biologie", label: "🧬 Biologie" }, { key: "k10_chemie", label: "⚗️ Chemie" }, { key: "k10_physik", label: "⚡ Physik" }, { key: "k10_geschichte", label: "📜 Geschichte" }, { key: "k10_erdkunde", label: "🌍 Erdkunde" }, { key: "k10_politik", label: "🏛️ Politik & Wirtschaft" }, { key: "k10_informatik", label: "💻 Informatik & Medien" }, { key: "k10_tuerkisch", label: "🇹🇷 Türkisch (Herkunftssprache)" }] },
    { grade: 11, label: "Klasse 11", stufe: "Oberstufe", subjects: [{ key: "k11_deutsch", label: "📖 Deutsch" }, { key: "k11_mathe", label: "🔢 Mathematik" }, { key: "k11_englisch", label: "🇬🇧 Englisch" }, { key: "k11_biologie", label: "🧬 Biologie" }, { key: "k11_chemie", label: "⚗️ Chemie" }, { key: "k11_physik", label: "⚡ Physik" }, { key: "k11_geschichte", label: "📜 Geschichte" }, { key: "k11_sowi", label: "🏛️ Sozialwissenschaften" }, { key: "k11_informatik", label: "💻 Informatik" }] },
    { grade: 12, label: "Klasse 12", stufe: "Oberstufe", subjects: [{ key: "k12_deutsch", label: "📖 Deutsch" }, { key: "k12_mathe", label: "🔢 Mathematik" }, { key: "k12_englisch", label: "🇬🇧 Englisch" }, { key: "k12_biologie", label: "🧬 Biologie" }, { key: "k12_chemie", label: "⚗️ Chemie" }, { key: "k12_physik", label: "⚡ Physik" }, { key: "k12_geschichte", label: "📜 Geschichte" }, { key: "k12_sowi", label: "🏛️ Sozialwissenschaften" }, { key: "k12_informatik", label: "💻 Informatik" }] },
    { grade: 13, label: "Klasse 13", stufe: "Oberstufe", subjects: [{ key: "k13_deutsch", label: "📖 Deutsch (Abitur)" }, { key: "k13_mathe", label: "🔢 Mathematik (Abitur)" }, { key: "k13_englisch", label: "🇬🇧 Englisch (Abitur)" }, { key: "k13_biologie", label: "🧬 Biologie (Abitur)" }, { key: "k13_chemie", label: "⚗️ Chemie (Abitur)" }, { key: "k13_physik", label: "⚡ Physik (Abitur)" }, { key: "k13_geschichte", label: "📜 Geschichte (Abitur)" }, { key: "k13_sowi", label: "🏛️ Sozialwissenschaften (Abitur)" }, { key: "k13_informatik", label: "💻 Informatik (Abitur)" }] }
];

const BERUFSSCHULE = [
    { key: "beruf_kfz", label: "🔧 KFZ-Mechatronik" },
    { key: "beruf_elektro", label: "⚡ Elektroniker/in" },
    { key: "beruf_tischler", label: "🪵 Tischler/in" },
    { key: "beruf_industriemechaniker", label: "⚙️ Industriemechaniker/in" },
    { key: "beruf_fachinformatiker", label: "💻 Fachinformatiker/in" },
    { key: "beruf_buero", label: "📇 Kaufmann/-frau für Büromanagement" },
    { key: "beruf_verkaeufer", label: "🛒 Verkäufer/in & Einzelhandel" },
    { key: "beruf_pflege", label: "🩺 Pflegefachkraft" },
    { key: "beruf_friseur", label: "✂️ Friseur/in" }
];

// Spass-Kategorien - bewusst getrennt vom Lernbereich
const FUN_CATEGORIES = [
    { key: "spass_allgemein", label: "🏆 Allgemeinwissen" },
    { key: "spass_kleine", label: "🧸 Für die Kleinen (ganz leicht)" },
    { key: "spass_wuerdest_du", label: "🤔 Schätzfragen & Würdest du eher" },
    { key: "spass_nice_to_know", label: "✨ Nice to Know" },
    { key: "spass_welt", label: "🌍 Ungewöhnliches aus der Welt" },
    { key: "spass_sport_film", label: "🎬 Sport & Film" },
    { key: "spass_musik", label: "🎵 Musik" },
    { key: "spass_essen", label: "🍕 Essen & Trinken" },
    { key: "spass_tiere", label: "🐾 Tiere" },
    { key: "spass_laender", label: "🗺️ Länder & Flaggen" },
    { key: "spass_erfindungen", label: "💡 Erfindungen & Technik" },
    { key: "spass_raetsel", label: "🧩 Rätsel & Logik" },
    { key: "spass_humor", label: "😂 Schul- & Alltagshumor" },
    { key: "spass_beruf_humor", label: "🔧 Berufe mit Humor" }
];

// =======================================================
// VOKABEL-DATENBANK
// =======================================================
const VOCABULARY_DATABASE = {
    en: {
        k1: {
            label: "Klasse 1 · Meine ersten Wörter",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 1
                // Siehe separate Datei: vocabulary.js
            ]
        },
        k2: {
            label: "Klasse 2 · Körper, Farben & Kleidung",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 2
            ]
        },
        k3: {
            label: "Klasse 3 · Erste Wörter",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 3
            ]
        },
        k4: {
            label: "Klasse 4 · Familie, Haus & Alltag",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 4
            ]
        },
        k5: {
            label: "Klasse 5 · Körper, Zeit & Hobbys",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 5
            ]
        },
        k6: {
            label: "Klasse 6 · Alltag, Wetter & Kleidung",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 6
            ]
        },
        k7: {
            label: "Klasse 7 · Reisen, Stadt & Medien",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 7
            ]
        },
        k8: {
            label: "Klasse 8 · Umwelt, Technik & Gefühle",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 8
            ]
        },
        k9: {
            label: "Klasse 9 · Gesellschaft & Meinung",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 9
            ]
        },
        k10: {
            label: "Klasse 10 · Beruf, Wirtschaft & Diskussion",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 10
            ]
        },
        k11: {
            label: "Klasse 11 · Textarbeit & Analyse",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 11
            ]
        },
        k12: {
            label: "Klasse 12 · Globalisierung & Politik",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 12
            ]
        },
        k13: {
            label: "Klasse 13 · Abitur-Wortschatz",
            words: [
                // Hier kommen alle englischen Vokabeln für Klasse 13
            ]
        }
    },
    tr: {
        k1: {
            label: "Klasse 1 · İlk Kelimelerim (Meine ersten Wörter)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 1
            ]
        },
        k2: {
            label: "Klasse 2 · Vücut, Renkler ve Kıyafetler (Körper, Farben & Kleidung)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 2
            ]
        },
        k3: {
            label: "Klasse 3 · Temel Kelimeler (Grundwörter)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 3
            ]
        },
        k4: {
            label: "Klasse 4 · Okul & Ev (Schule & Haus)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 4
            ]
        },
        k5: {
            label: "Klasse 5 · Günlük Hayat (Alltag)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 5
            ]
        },
        k6: {
            label: "Klasse 6 · Hobiler & Doğa (Hobbys & Natur)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 6
            ]
        },
        k7: {
            label: "Klasse 7 · Şehir & Yolculuk (Stadt & Reisen)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 7
            ]
        },
        k8: {
            label: "Klasse 8 · Çevre & Medya (Umwelt & Medien)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 8
            ]
        },
        k9: {
            label: "Klasse 9 · Toplum & Meslek (Gesellschaft & Beruf)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 9
            ]
        },
        k10: {
            label: "Klasse 10 · Görüş & Politika (Meinung & Politik)",
            words: [
                // Hier kommen alle türkischen Vokabeln für Klasse 10
            ]
        }
    }
};

// =======================================================
// EXPORT (für verschiedene Umgebungen)
// =======================================================

// Für Browser (globale Variablen)
if (typeof window !== 'undefined') {
    window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
    window.CURRICULUM = CURRICULUM;
    window.BERUFSSCHULE = BERUFSSCHULE;
    window.FUN_CATEGORIES = FUN_CATEGORIES;
    window.VOCABULARY_DATABASE = VOCABULARY_DATABASE;
}

// Für Node.js (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QUESTIONS_DATABASE,
        CURRICULUM,
        BERUFSSCHULE,
        FUN_CATEGORIES,
        VOCABULARY_DATABASE
    };
}

// Für ES Modules (modern)
export {
    QUESTIONS_DATABASE,
    CURRICULUM,
    BERUFSSCHULE,
    FUN_CATEGORIES,
    VOCABULARY_DATABASE
};