// ============================================================
// DATENBANKEN LOADER - VEREINFACHT & REPARIERT
// Version: 7.5
// ============================================================

(function() {
    console.log('🔥 datenbanken_loader.js wurde geladen!');
    
    // ALLE Skripte in der richtigen Reihenfolge
    // Entferne die, die nicht existieren oder Probleme machen
    const scripts = [
        // Wörter - KOMMENTIERE SIE AUS, WENN SIE FEHLEN!
        'fragen/words_kids.js',
        'fragen/words_adult.js',
        
        // Vokabeln
        'fragen/vocabulary.js?v=7.0',
        
        // Fragen - Allgemein
        'fragen/questions_school.js?v=7.0',
        'fragen/questions_beruf.js?v=7.0',
        // 'fragen/questions_kfz.js?v=7.0', // AUSKOMMENTIERT WEGEN DUPLIKAT
        'fragen/questions_fun.js?v=7.0',
        
        // Klasse 1
        'fragen/klasse1/questions_k1_mathe.js?v=7.0',
        'fragen/klasse1/questions_k1_deutsch.js?v=7.0',
        'fragen/klasse1/questions_k1_sachunterricht.js?v=7.0',
        
        // Klasse 2
        'fragen/klasse2/questions_k2_mathe.js?v=7.0',
        'fragen/klasse2/questions_k2_deutsch.js?v=7.0',
        'fragen/klasse2/questions_k2_sachunterricht.js?v=7.0',
        'fragen/klasse2/questions_k2_englisch.js?v=7.0', // KORREKTUR: Ordner prüfen!
        
        // Klasse 3
        'fragen/klasse3/questions_k3_mathe.js?v=7.0',
        'fragen/klasse3/questions_k3_deutsch.js?v=7.0',
        'fragen/klasse3/questions_k3_sachunterricht.js?v=7.0',
        'fragen/klasse3/questions_k3_englisch.js?v=7.0',
        
        // Klasse 4
        'fragen/klasse4/questions_k4_mathe.js?v=7.0',
        'fragen/klasse4/questions_k4_deutsch.js?v=7.0',
        'fragen/klasse4/questions_k4_sachunterricht.js?v=7.0',
        'fragen/klasse4/questions_k4_englisch.js?v=7.0',
        
        // Fun - Kinder
        'fragen/fun/kinder_anime.js?v=7.0',
        'fragen/fun/kinder_maerchen.js?v=7.0',
        'fragen/fun/kinder_tiere_natur.js?v=7.0',
        'fragen/fun/kinder_wissen.js?v=7.0',
        
        // Fun - Spaß (alle ohne export!)
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
        
        // Formeln
        'formula.js?v=7.0'
    ];
    
    let loaded = 0;
    let failed = 0;
    const total = scripts.length;
    
    function loadNext() {
        if (loaded >= total) {
            console.log(`✅ Alle ${total} Datenbanken geladen! (${failed} Fehler)`);
            
            // WICHTIG: Fragen aus allen Quellen zusammenführen
            mergeAllQuestions();
            
            // Prüfen, ob die Datenbanken da sind
            console.log('📊 GERMAN_WORDS_KIDS:', typeof GERMAN_WORDS_KIDS !== 'undefined' ? GERMAN_WORDS_KIDS.length + ' Wörter' : '❌ fehlt (optional)');
            console.log('📊 VOCABULARY_DATABASE:', typeof VOCABULARY_DATABASE !== 'undefined' ? '✅ vorhanden' : '❌ fehlt');
            console.log('📊 QUESTIONS_DATABASE:', typeof QUESTIONS_DATABASE !== 'undefined' ? QUESTIONS_DATABASE.length + ' Fragen' : '❌ fehlt');
            console.log('📊 FORMULA_DATABASE:', typeof FORMULA_DATABASE !== 'undefined' ? FORMULA_DATABASE.length + ' Formeln' : '❌ fehlt');
            
            // Event auslösen
            try {
                document.dispatchEvent(new CustomEvent('datenbanken-geladen'));
            } catch (e) {
                const event = document.createEvent('CustomEvent');
                event.initCustomEvent('datenbanken-geladen', true, true, null);
                document.dispatchEvent(event);
            }
            return;
        }
        
        const src = scripts[loaded];
        const fileName = src.split('/').pop();
        console.log(`📥 Lade ${fileName} (${loaded+1}/${total})`);
        
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = function() {
            loaded++;
            loadNext();
        };
        script.onerror = function() {
            console.warn(`⚠️ Konnte ${fileName} nicht laden! (404)`);
            failed++;
            loaded++;
            loadNext();
        };
        document.head.appendChild(script);
    }
    
    // ============================================================
    // FRAGEN ZUSAMMENFÜHREN
    // ============================================================
    function mergeAllQuestions() {
        console.log('🔗 Füge alle Fragen zusammen...');
        
        // Globale Datenbank initialisieren (falls nicht vorhanden)
        if (typeof window.QUESTIONS_DATABASE === 'undefined') {
            window.QUESTIONS_DATABASE = [];
        }
        
        // Alle möglichen Frage-Quellen durchgehen
        const sources = [
            'SCHOOL_QUESTIONS',
            'BERUFS_QUESTIONS',
            'FUN_QUESTIONS',
            'K1_MATHE_QUESTIONS',
            'K1_DEUTSCH_QUESTIONS',
            'K1_SACHUNTERRICHT_QUESTIONS',
            'K2_MATHE_QUESTIONS',
            'K2_DEUTSCH_QUESTIONS',
            'K2_SACHUNTERRICHT_QUESTIONS',
            'K2_ENGLISCH_QUESTIONS',
            'K3_MATHE_QUESTIONS',
            'K3_DEUTSCH_QUESTIONS',
            'K3_SACHUNTERRICHT_QUESTIONS',
            'K3_ENGLISCH_QUESTIONS',
            'K4_MATHE_QUESTIONS',
            'K4_DEUTSCH_QUESTIONS',
            'K4_SACHUNTERRICHT_QUESTIONS',
            'K4_ENGLISCH_QUESTIONS',
            'KINDER_ANIME_QUESTIONS',
            'KINDER_MAERCHEN_QUESTIONS',
            'KINDER_TIERE_NATUR_QUESTIONS',
            'KINDER_WISSEN_QUESTIONS',
            'SPASS_ALLGEMEIN_QUESTIONS',
            'SPASS_ERFINDUNGEN_QUESTIONS',
            'SPASS_ESSEN_QUESTIONS',
            'SPASS_HAUPTSTAEDTE_QUESTIONS',
            'SPASS_HAUPTSTAEDTE_EUROPA_QUESTIONS',
            'SPASS_MUSIK_QUESTIONS',
            'SPASS_NICE_TO_KNOW_QUESTIONS',
            'SPASS_RAETSEL_QUESTIONS',
            'SPASS_SCHAETZFRAGEN_QUESTIONS',
            'SPASS_SPORT_FILM_QUESTIONS',
            'SPASS_TIERE_QUESTIONS',
            'SPASS_UNGEWOEHNLICHES_QUESTIONS'
        ];
        
        let totalQuestions = 0;
        sources.forEach(name => {
            if (typeof window[name] !== 'undefined' && Array.isArray(window[name])) {
                window.QUESTIONS_DATABASE.push(...window[name]);
                totalQuestions += window[name].length;
                console.log(`  ✅ ${name}: ${window[name].length} Fragen`);
            } else if (typeof window[name] !== 'undefined') {
                console.log(`  ⚠️ ${name} ist kein Array, überspringe`);
            }
        });
        
        console.log(`📊 Insgesamt: ${totalQuestions} Fragen in QUESTIONS_DATABASE`);
        
        // Duplikate entfernen (optional)
        if (totalQuestions > 0) {
            const unique = new Map();
            window.QUESTIONS_DATABASE.forEach(q => {
                const key = q.question + '|' + (q.category || '');
                if (!unique.has(key)) {
                    unique.set(key, q);
                }
            });
            if (unique.size !== window.QUESTIONS_DATABASE.length) {
                console.log(`🧹 Duplikate entfernt: ${window.QUESTIONS_DATABASE.length} → ${unique.size}`);
                window.QUESTIONS_DATABASE = Array.from(unique.values());
            }
        }
    }
    
    // ============================================================
    // START
    // ============================================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNext);
    } else {
        loadNext();
    }
    
})();