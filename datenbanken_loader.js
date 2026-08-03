// ============================================================
// DATENBANKEN LOADER
// Version: 7.8
// ============================================================

(function () {
    console.log('🔥 datenbanken_loader.js v7.8');

    const scripts = [
        // Wörter
        'fragen/words_kids.js?v=7.8',
        'fragen/words_adult.js?v=7.8',

        // Vokabeln
        'fragen/vocabulary.js?v=7.8',

        // Schule
        'fragen/questions_school.js?v=7.8',

        // Beruf – Meta + Einzelgruppen + KFZ
        'fragen/questions_beruf.js?v=7.8',
        'fragen/beruf/beruf_elektro.js?v=7.8',
        'fragen/beruf/beruf_tischler.js?v=7.8',
        'fragen/beruf/beruf_industriemechaniker.js?v=7.8',
        'fragen/beruf/beruf_fachinformatiker.js?v=7.8',
        'fragen/beruf/beruf_buero.js?v=7.8',
        'fragen/beruf/beruf_verkaeufer.js?v=7.8',
        'fragen/beruf/beruf_pflege.js?v=7.8',
        'fragen/beruf/beruf_friseur.js?v=7.8',
        'fragen/questions_kfz.js?v=7.8',

        // Fun – Meta (nur FUN_CATEGORIES)
        'fragen/questions_fun.js?v=7.8',

        // Klasse 1–4
        'fragen/klasse1/questions_k1_mathe.js?v=7.8',
        'fragen/klasse1/questions_k1_deutsch.js?v=7.8',
        'fragen/klasse1/questions_k1_sachunterricht.js?v=7.8',
        'fragen/klasse2/questions_k2_mathe.js?v=7.8',
        'fragen/klasse2/questions_k2_deutsch.js?v=7.8',
        'fragen/klasse2/questions_k2_sachunterricht.js?v=7.8',
        'fragen/klasse2/questions_k2_englisch.js?v=7.8',
        'fragen/klasse3/questions_k3_mathe.js?v=7.8',
        'fragen/klasse3/questions_k3_deutsch.js?v=7.8',
        'fragen/klasse3/questions_k3_sachunterricht.js?v=7.8',
        'fragen/klasse3/questions_k3_englisch.js?v=7.8',
        'fragen/klasse4/questions_k4_mathe.js?v=7.8',
        'fragen/klasse4/questions_k4_deutsch.js?v=7.8',
        'fragen/klasse4/questions_k4_sachunterricht.js?v=7.8',
        'fragen/klasse4/questions_k4_englisch.js?v=7.8',

        // Fun – Kinder
        'fragen/fun/kinder_anime.js?v=7.8',
        'fragen/fun/kinder_maerchen.js?v=7.8',
        'fragen/fun/kinder_tiere_natur.js?v=7.8',
        'fragen/fun/kinder_wissen.js?v=7.8',

        // Fun – Spaß (Einzeldateien)
        'fragen/fun/spass_allgemein.js?v=7.8',
        'fragen/fun/spass_kleine.js?v=7.8',
        'fragen/fun/spass_wuerdest_du.js?v=7.8',
        'fragen/fun/spass_nice_to_know.js?v=7.8',
        'fragen/fun/spass_ungewoehnliches.js?v=7.8',
        'fragen/fun/spass_sport_film.js?v=7.8',
        'fragen/fun/spass_musik.js?v=7.8',
        'fragen/fun/spass_essen.js?v=7.8',
        'fragen/fun/spass_tiere.js?v=7.8',
        'fragen/fun/spass_laender.js?v=7.8',
        'fragen/fun/spass_erfindungen.js?v=7.8',
        'fragen/fun/spass_raetsel.js?v=7.8',
        'fragen/fun/spass_humor.js?v=7.8',
        'fragen/fun/spass_beruf_humor.js?v=7.8',
        'fragen/fun/spass_hauptstaedte.js?v=7.8',
        'fragen/fun/spass_hauptstaedte_europa.js?v=7.8',
        'fragen/fun/spass_schaetzfragen.js?v=7.8',

        // Formeln
        'formula.js?v=7.8'
    ];

    // Alle Array-Quellen, die in QUESTIONS_DATABASE landen
    const questionSources = [
        'SCHOOL_QUESTIONS',
        // Beruf
        'BERUF_ELEKTRO_QUESTIONS',
        'BERUF_TISCHLER_QUESTIONS',
        'BERUF_INDUSTRIEMECHANIKER_QUESTIONS',
        'BERUF_FACHINFORMATIKER_QUESTIONS',
        'BERUF_BUERO_QUESTIONS',
        'BERUF_VERKAEUFER_QUESTIONS',
        'BERUF_PFLEGE_QUESTIONS',
        'BERUF_FRISEUR_QUESTIONS',
        'KFZ_QUESTIONS',
        // Klasse 1–4
        'K1_MATHE_QUESTIONS', 'K1_DEUTSCH_QUESTIONS', 'K1_SACHUNTERRICHT_QUESTIONS',
        'K2_MATHE_QUESTIONS', 'K2_DEUTSCH_QUESTIONS', 'K2_SACHUNTERRICHT_QUESTIONS', 'K2_ENGLISCH_QUESTIONS',
        'K3_MATHE_QUESTIONS', 'K3_DEUTSCH_QUESTIONS', 'K3_SACHUNTERRICHT_QUESTIONS', 'K3_ENGLISCH_QUESTIONS',
        'K4_MATHE_QUESTIONS', 'K4_DEUTSCH_QUESTIONS', 'K4_SACHUNTERRICHT_QUESTIONS', 'K4_ENGLISCH_QUESTIONS',
        // Fun
        'KINDER_ANIME_QUESTIONS',
        'KINDER_MAERCHEN_QUESTIONS',
        'KINDER_TIERE_NATUR_QUESTIONS',
        'KINDER_WISSEN_QUESTIONS',
        'SPASS_ALLGEMEIN_QUESTIONS',
        'SPASS_KLEINE_QUESTIONS',
        'SPASS_WUERDEST_DU_QUESTIONS',
        'SPASS_NICE_TO_KNOW_QUESTIONS',
        'SPASS_UNGEWOEHNLICHES_QUESTIONS',
        'SPASS_SPORT_FILM_QUESTIONS',
        'SPASS_MUSIK_QUESTIONS',
        'SPASS_ESSEN_QUESTIONS',
        'SPASS_TIERE_QUESTIONS',
        'SPASS_LAENDER_QUESTIONS',
        'SPASS_ERFINDUNGEN_QUESTIONS',
        'SPASS_RAETSEL_QUESTIONS',
        'SPASS_HUMOR_QUESTIONS',
        'SPASS_BERUF_HUMOR_QUESTIONS',
        'SPASS_HAUPTSTAEDTE_QUESTIONS',
        'SPASS_HAUPTSTAEDTE_EUROPA_QUESTIONS',
        'SPASS_SCHAETZFRAGEN_QUESTIONS'
    ];

    let loaded = 0;
    let failed = 0;
    const total = scripts.length;

    function resolveArray(name) {
        if (typeof window[name] !== 'undefined' && Array.isArray(window[name])) return window[name];
        try {
            var arr = Function('return (typeof ' + name + ' !== "undefined" && Array.isArray(' + name + ')) ? ' + name + ' : null')();
            return arr;
        } catch (e) {
            return null;
        }
    }

    function mergeAllQuestions() {
        console.log('🔗 Füge Fragen zusammen…');

        var target = null;
        try {
            if (typeof QUESTIONS_DATABASE !== 'undefined' && Array.isArray(QUESTIONS_DATABASE)) {
                target = QUESTIONS_DATABASE;
            }
        } catch (e) { /* ignore */ }
        if (!target) {
            if (!Array.isArray(window.QUESTIONS_DATABASE)) window.QUESTIONS_DATABASE = [];
            target = window.QUESTIONS_DATABASE;
        }
        target.length = 0;

        var totalQ = 0;
        questionSources.forEach(function (name) {
            var arr = resolveArray(name);
            if (arr && arr.length) {
                for (var i = 0; i < arr.length; i++) target.push(arr[i]);
                totalQ += arr.length;
                console.log('  ✅ ' + name + ': ' + arr.length);
            }
        });

        // Duplikate (Frage+Kategorie)
        var unique = new Map();
        target.forEach(function (q) {
            var key = (q.question || '') + '|' + (q.category || '');
            if (!unique.has(key)) unique.set(key, q);
        });
        if (unique.size !== target.length) {
            console.log('🧹 Duplikate: ' + target.length + ' → ' + unique.size);
            target.length = 0;
            unique.forEach(function (q) { target.push(q); });
        }

        window.QUESTIONS_DATABASE = target;
        console.log('📊 QUESTIONS_DATABASE: ' + target.length + ' Fragen');

        // KFZ-Debug
        var kfz = target.filter(function (q) { return q.category === 'beruf_kfz'; });
        console.log('🔧 KFZ (beruf_kfz): ' + kfz.length + ' Fragen');
        if (typeof BERUFSSCHULE !== 'undefined') {
            console.log('📋 BERUFSSCHULE keys:', BERUFSSCHULE.map(function (s) { return s.key; }).join(', '));
        }

        try {
            document.dispatchEvent(new CustomEvent('datenbanken-geladen', { detail: { count: target.length } }));
        } catch (e) { /* ignore */ }
    }

    function loadNext() {
        if (loaded >= total) {
            console.log('✅ Skripte geladen (' + failed + ' Fehler)');
            mergeAllQuestions();
            return;
        }
        var src = scripts[loaded];
        var fileName = src.split('/').pop().split('?')[0];
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = function () {
            loaded++;
            loadNext();
        };
        script.onerror = function () {
            console.warn('⚠️ 404: ' + fileName);
            failed++;
            loaded++;
            loadNext();
        };
        document.head.appendChild(script);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNext);
    } else {
        loadNext();
    }
})();
