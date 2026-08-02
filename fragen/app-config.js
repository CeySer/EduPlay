// ============================================================
// DATENBANKEN ZUSAMMENFÜHREN
// ============================================================

// 1. Fragen aus den einzelnen Dateien zusammenführen
const QUESTIONS_DATABASE = [];

// === ALLGEMEINE FRAGEN ===
if (typeof SCHOOL_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SCHOOL_QUESTIONS); }
if (typeof BERUFS_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...BERUFS_QUESTIONS); }
if (typeof KFZ_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...KFZ_QUESTIONS); }

// === KLASSE 1 ===
if (typeof K1_MATHE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K1_MATHE_QUESTIONS); }
if (typeof K1_DEUTSCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K1_DEUTSCH_QUESTIONS); }
if (typeof K1_SACHUNTERRICHT_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K1_SACHUNTERRICHT_QUESTIONS); }

// === KLASSE 2 ===
if (typeof K2_MATHE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K2_MATHE_QUESTIONS); }
if (typeof K2_DEUTSCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K2_DEUTSCH_QUESTIONS); }
if (typeof K2_SACHUNTERRICHT_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K2_SACHUNTERRICHT_QUESTIONS); }
if (typeof K2_ENGLISCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K2_ENGLISCH_QUESTIONS); }

// === KLASSE 3 ===
if (typeof K3_MATHE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K3_MATHE_QUESTIONS); }
if (typeof K3_DEUTSCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K3_DEUTSCH_QUESTIONS); }
if (typeof K3_SACHUNTERRICHT_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K3_SACHUNTERRICHT_QUESTIONS); }
if (typeof K3_ENGLISCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K3_ENGLISCH_QUESTIONS); }

// === KLASSE 4 ===
if (typeof K4_MATHE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K4_MATHE_QUESTIONS); }
if (typeof K4_DEUTSCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K4_DEUTSCH_QUESTIONS); }
if (typeof K4_SACHUNTERRICHT_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K4_SACHUNTERRICHT_QUESTIONS); }
if (typeof K4_ENGLISCH_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...K4_ENGLISCH_QUESTIONS); }

// === FUN - KINDER ===
if (typeof KINDER_ANIME_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...KINDER_ANIME_QUESTIONS); }
if (typeof KINDER_MAERCHEN_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...KINDER_MAERCHEN_QUESTIONS); }
if (typeof KINDER_TIERE_NATUR_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...KINDER_TIERE_NATUR_QUESTIONS); }
if (typeof KINDER_WISSEN_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...KINDER_WISSEN_QUESTIONS); }

// === FUN - SPASS (ALLE EINZELN) ===
if (typeof SPASS_ALLGEMEIN_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_ALLGEMEIN_QUESTIONS); }
if (typeof SPASS_ERFINDUNGEN_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_ERFINDUNGEN_QUESTIONS); }
if (typeof SPASS_ESSEN_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_ESSEN_QUESTIONS); }
if (typeof SPASS_HAUPTSTAEDTE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_HAUPTSTAEDTE_QUESTIONS); }
if (typeof SPASS_HAUPTSTAEDTE_EUROPA_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_HAUPTSTAEDTE_EUROPA_QUESTIONS); }
if (typeof SPASS_MUSIK_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_MUSIK_QUESTIONS); }
if (typeof SPASS_NICE_TO_KNOW_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_NICE_TO_KNOW_QUESTIONS); }
if (typeof SPASS_RAETSEL_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_RAETSEL_QUESTIONS); }
if (typeof SPASS_SCHAETZFRAGEN_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_SCHAETZFRAGEN_QUESTIONS); }
if (typeof SPASS_SPORT_FILM_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_SPORT_FILM_QUESTIONS); }
if (typeof SPASS_TIERE_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_TIERE_QUESTIONS); }
if (typeof SPASS_UNGEWOEHNLICHES_QUESTIONS !== 'undefined') { QUESTIONS_DATABASE.push(...SPASS_UNGEWOEHNLICHES_QUESTIONS); }

// ============================================================
// VOKABELN - werden bereits von vocabulary.js geladen
// Die Variable VOCABULARY_DATABASE existiert bereits!
// ============================================================

// ============================================================
// WÖRTER FÜR BUCHSTABENSALAT ZUSAMMENFÜHREN
// ============================================================
const GERMAN_WORDS = [];
if (typeof GERMAN_WORDS_KIDS !== 'undefined') {
    GERMAN_WORDS.push(...GERMAN_WORDS_KIDS);
}
if (typeof GERMAN_WORDS_ADULT !== 'undefined') {
    GERMAN_WORDS.push(...GERMAN_WORDS_ADULT);
}

// ============================================================
// FORMELN - werden bereits von formula.js geladen
// Die Variable FORMULA_DATABASE existiert bereits!
// ============================================================

// ============================================================
// LOGGING
// ============================================================
console.log('📚 Daten geladen:');
console.log(`📖 Fragen: ${QUESTIONS_DATABASE.length}`);
console.log(`📝 Vokabeln: ${typeof VOCABULARY_DATABASE !== 'undefined' ? Object.keys(VOCABULARY_DATABASE).length : '?'} Sprachen`);
console.log(`🔤 Wörter: ${GERMAN_WORDS.length}`);
console.log(`🧮 Formeln: ${typeof FORMULA_DATABASE !== 'undefined' ? Object.keys(FORMULA_DATABASE).length : '?'} Kategorien`);

// ============================================================
//  DEBUG-FUNKTIONEN
// ============================================================
function debugDatabaseLoading() {
    console.log('🔍 Datenbank-Check:');
    console.log('QUESTIONS_DATABASE:', typeof QUESTIONS_DATABASE !== 'undefined' ? QUESTIONS_DATABASE.length : '❌ NICHT GELADEN');
    console.log('VOCABULARY_DATABASE:', typeof VOCABULARY_DATABASE !== 'undefined' ? Object.keys(VOCABULARY_DATABASE).length : '❌ NICHT GELADEN');
    console.log('GERMAN_WORDS:', typeof GERMAN_WORDS !== 'undefined' ? GERMAN_WORDS.length : '❌ NICHT GELADEN');
    console.log('FORMULA_DATABASE:', typeof FORMULA_DATABASE !== 'undefined' ? Object.keys(FORMULA_DATABASE).length : '❌ NICHT GELADEN');

    // Prüfe, ob die Datenbanken wirklich Arrays sind
    if (typeof QUESTIONS_DATABASE !== 'undefined' && Array.isArray(QUESTIONS_DATABASE)) {
        console.log('✅ Fragen geladen:', QUESTIONS_DATABASE.length, 'Fragen');
        if (QUESTIONS_DATABASE.length > 0) {
            console.log('📖 Beispiel-Frage:', QUESTIONS_DATABASE[0]);
        }
    } else {
        console.warn('⚠️ QUESTIONS_DATABASE ist kein Array oder nicht definiert!');
    }

    if (typeof VOCABULARY_DATABASE !== 'undefined') {
        console.log('✅ Vokabeln geladen');
        const firstLang = Object.keys(VOCABULARY_DATABASE)[0];
        if (firstLang) {
            const firstLevel = Object.keys(VOCABULARY_DATABASE[firstLang])[0];
            if (firstLevel && VOCABULARY_DATABASE[firstLang][firstLevel].words) {
                console.log('📝 Beispiel-Vokabel:', VOCABULARY_DATABASE[firstLang][firstLevel].words[0]);
            }
        }
    }

    if (typeof GERMAN_WORDS !== 'undefined' && Array.isArray(GERMAN_WORDS)) {
        console.log('✅ Wörter geladen:', GERMAN_WORDS.length, 'Wörter');
        if (GERMAN_WORDS.length > 0) {
            console.log('🔤 Beispiel-Wort:', GERMAN_WORDS[0]);
        }
    }

    if (typeof FORMULA_DATABASE !== 'undefined') {
        console.log('✅ Formeln geladen:', Object.keys(FORMULA_DATABASE).length, 'Kategorien');
    }
}

// Führe Debug-Check aus (wenn gewünscht)
// debugDatabaseLoading();