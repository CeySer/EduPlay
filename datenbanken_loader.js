// ============================================================
// DATENBANKEN LOADER
// Lädt alle Datenbank-Dateien dynamisch
// Version: 7.0
// ============================================================

(function() {
    console.log('📚 Lade alle Datenbanken...');
    
    // Liste aller zu ladenden Skripte
    const scripts = [
        // ============================================================
        // WÖRTER FÜR BUCHSTABENSALAT
        // ============================================================
        'words_kids.js?v=7.0',
        'words_adult.js?v=7.0',
        
        // ============================================================
        // VOKABELN
        // ============================================================
        'fragen/vocabulary.js?v=7.0',
        
        // ============================================================
        // FRAGEN - ALLGEMEIN
        // ============================================================
        'fragen/questions_school.js?v=7.0',
        'fragen/questions_beruf.js?v=7.0',
        'fragen/questions_kfz.js?v=7.0',
        'fragen/questions_fun.js?v=7.0',
        
        // ============================================================
        // KLASSE 1
        // ============================================================
        'fragen/klasse1/questions_k1_mathe.js?v=7.0',
        'fragen/klasse1/questions_k1_deutsch.js?v=7.0',
        'fragen/klasse1/questions_k1_sachunterricht.js?v=7.0',
        
        // ============================================================
        // KLASSE 2
        // ============================================================
        'fragen/klasse2/questions_k2_mathe.js?v=7.0',
        'fragen/klasse2/questions_k2_deutsch.js?v=7.0',
        'fragen/klasse2/questions_k2_sachunterricht.js?v=7.0',
        'fragen/lasse2/questions_k2_englisch.js?v=7.0',
        
        // ============================================================
        // KLASSE 3
        // ============================================================
        'fragen/klasse3/questions_k3_mathe.js?v=7.0',
        'fragen/klasse3/questions_k3_deutsch.js?v=7.0',
        'fragen/klasse3/questions_k3_sachunterricht.js?v=7.0',
        'fragen/klasse3/questions_k3_englisch.js?v=7.0',
        
        // ============================================================
        // KLASSE 4
        // ============================================================
        'fragen/klasse4/questions_k4_mathe.js?v=7.0',
        'fragen/klasse4/questions_k4_deutsch.js?v=7.0',
        'fragen/klasse4/questions_k4_sachunterricht.js?v=7.0',
        'fragen/klasse4/questions_k4_englisch.js?v=7.0',
        
        // ============================================================
        // FUN - KINDER
        // ============================================================
        'fragen/fun/kinder_anime.js?v=7.0',
        'fragen/fun/kinder_maerchen.js?v=7.0',
        'fragen/fun/kinder_tiere_natur.js?v=7.0',
        'fragen/fun/kinder_wissen.js?v=7.0',
        
        // ============================================================
        // FUN - SPASS
        // ============================================================
        'fragen/fun/spass_allgemein.js',
        'fragen/fun/spass_erfindungen.js?v=7.0',
        'fragen/fun/spass_essen.js?v=7.0',
        'fragen/fun/spass_hauptstaedte.js?v=7.0',
        'fragen/fun/spass_hauptstaedte_europa.js?v=7.0',
        'fragen/fun/spass_musik.js?v=7.0',
        'fragen/fun/spass_nice_to_know.js?v=7.0',
        'fragen/fun/spass_raetsel.js?v=7.0',
        'fragen/fun/spass_schaetzfragen.js?v=7.0',
        'fragen/fun/spass_sport_film.js?v=7.0',
        'fragen/fun/spass_tiere.js?v=7.0',
        'fragen/fun/spass_ungewoehnliches.js?v=7.0',
        
        // ============================================================
        // FORMELN
        // ============================================================
        'formula.js?v=7.0'
    ];
    
    // ============================================================
    // LADE-LOGIK
    // ============================================================
    let loaded = 0;
    let failed = 0;
    const total = scripts.length;
    let allLoaded = false;
    
    function loadNext() {
        if (loaded >= total) {
            allLoaded = true;
            console.log(`✅ Alle ${total} Datenbanken geladen! (${failed} Fehler)`);
            
            // Event auslösen, dass alle Datenbanken bereit sind
            try {
                document.dispatchEvent(new CustomEvent('datenbanken-geladen'));
            } catch (e) {
                // Fallback für ältere Browser
                const event = document.createEvent('CustomEvent');
                event.initCustomEvent('datenbanken-geladen', true, true, null);
                document.dispatchEvent(event);
            }
            
            // Prüfen, ob alle wichtigen Datenbanken da sind
            checkDatabaseIntegrity();
            return;
        }
        
        const src = scripts[loaded];
        const fileName = src.split('/').pop();
        console.log(`📥 Lade ${fileName} (${loaded+1}/${total})`);
        
        const script = document.createElement('script');
        script.src = src;
        script.async = false; // Wichtig: Nacheinander laden, da Abhängigkeiten bestehen
        script.onload = function() {
            loaded++;
            loadNext();
        };
        script.onerror = function() {
            console.warn(`⚠️ Konnte ${fileName} nicht laden!`);
            failed++;
            loaded++;
            loadNext();
        };
        document.head.appendChild(script);
    }
    
    // ============================================================
    // INTEGRITÄTS-CHECK
    // ============================================================
    function checkDatabaseIntegrity() {
        console.log('🔍 Prüfe Datenbank-Integrität...');
        
        const checks = [];
        
        // Wörter prüfen
        if (typeof GERMAN_WORDS_KIDS !== 'undefined') {
            checks.push('✅ GERMAN_WORDS_KIDS: ' + GERMAN_WORDS_KIDS.length + ' Wörter');
        } else {
            checks.push('❌ GERMAN_WORDS_KIDS fehlt!');
        }
        
        if (typeof GERMAN_WORDS_ADULT !== 'undefined') {
            checks.push('✅ GERMAN_WORDS_ADULT: ' + GERMAN_WORDS_ADULT.length + ' Wörter');
        } else {
            checks.push('❌ GERMAN_WORDS_ADULT fehlt!');
        }
        
        // Vokabeln prüfen
        if (typeof VOCABULARY_DATABASE !== 'undefined') {
            const languages = Object.keys(VOCABULARY_DATABASE);
            checks.push('✅ VOCABULARY_DATABASE: ' + languages.length + ' Sprachen (' + languages.join(', ') + ')');
        } else {
            checks.push('❌ VOCABULARY_DATABASE fehlt!');
        }
        
        // Fragen prüfen
        if (typeof QUESTIONS_DATABASE !== 'undefined') {
            checks.push('✅ QUESTIONS_DATABASE: ' + QUESTIONS_DATABASE.length + ' Fragen');
        } else {
            checks.push('❌ QUESTIONS_DATABASE fehlt! (wird später aus den Einzeldateien zusammengebaut)');
        }
        
        // Formeln prüfen
        if (typeof FORMULA_DATABASE !== 'undefined') {
            checks.push('✅ FORMULA_DATABASE: ' + FORMULA_DATABASE.length + ' Formeln');
        } else {
            checks.push('❌ FORMULA_DATABASE fehlt!');
        }
        
        // Ergebnisse anzeigen
        console.log('📊 Integritäts-Check:');
        checks.forEach(msg => console.log('  ' + msg));
        
        // Eventuell fehlende Datenbanken melden
        const missing = checks.filter(c => c.startsWith('❌'));
        if (missing.length > 0) {
            console.warn('⚠️ Es fehlen ' + missing.length + ' Datenbank(en)!');
            // Trotzdem weitermachen - die App wird versuchen, damit umzugehen
        } else {
            console.log('✅ Alle Datenbanken sind vollständig! 🎉');
        }
    }
    
    // ============================================================
    // START
    // ============================================================
    
    // Warten, bis das DOM bereit ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNext);
    } else {
        loadNext();
    }
    
})();