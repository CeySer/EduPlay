// ============================================================
// DATENBANKEN LOADER – Mobile-optimiert (2-Phasen)
// Phase 1: Kern (Wörter, Vokabeln, Schule, Meta) – parallel
// Phase 2: Rest (Klassen, Fun, Beruf) – idle / nach Start
// ============================================================

(function () {
    console.log('🔥 datenbanken_loader.js v8.1 (parallel + deferred)');

    // Phase 1: nötig für Menü / häufige Spiele
    const coreScripts = [
        'fragen/words_kids.js?v=7.8',
        'fragen/words_kids_themes.js?v=1.0',
        'fragen/words_adult.js?v=8.0',
        'fragen/vocabulary.js?v=7.8',
        'fragen/questions_school.js?v=8.0',
        'fragen/questions_beruf.js?v=8.0',
        'fragen/questions_fun.js?v=7.8'
    ];

    // Phase 2: kann nach First Paint nachladen
    const deferredScripts = [
        'fragen/beruf/beruf_elektro.js?v=8.0',
        'fragen/beruf/beruf_tischler.js?v=8.0',
        'fragen/beruf/beruf_industriemechaniker.js?v=8.0',
        'fragen/beruf/beruf_fachinformatiker.js?v=8.0',
        'fragen/beruf/beruf_buero.js?v=8.0',
        'fragen/beruf/beruf_verkaeufer.js?v=8.0',
        'fragen/beruf/beruf_pflege.js?v=8.0',
        'fragen/beruf/beruf_friseur.js?v=8.0',
        'fragen/beruf/beruf_kfz.js?v=8.0',
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
        'fragen/klasse4/questions_k4_deutsch.js?v=8.0',
        'fragen/klasse4/questions_k4_sachunterricht.js?v=8.1',
        'fragen/klasse4/questions_k4_englisch.js?v=7.8',
        'fragen/klasse4/questions_k5_mathe.js?v=7.8',
        'fragen/klasse4/questions_k5_deutsch.js?v=8.0',
        'fragen/klasse4/questions_k5_erdkunde.js?v=8.1',
        'fragen/klasse4/questions_k5_englisch.js?v=7.8',
        'fragen/klasse4/questions_k4_biologie.js?v=8.0',
        'fragen/klasse4/questions_k4_politik.js?v=8.1',
        'fragen/fun/kinder_anime.js?v=7.8',
        'fragen/fun/kinder_maerchen.js?v=7.8',
        'fragen/fun/kinder_tiere_natur.js?v=7.8',
        'fragen/fun/kinder_wissen.js?v=7.8',
        'fragen/fun/spass_allgemein.js?v=8.0',
        'fragen/fun/spass_kleine.js?v=8.0',
        'fragen/fun/spass_wuerdest_du.js?v=8.0',
        'fragen/fun/spass_nice_to_know.js?v=8.0',
        'fragen/fun/spass_ungewoehnliches.js?v=8.0',
        'fragen/fun/spass_sport_film.js?v=8.0',
        'fragen/fun/spass_musik.js?v=8.0',
        'fragen/fun/spass_essen.js?v=8.0',
        'fragen/fun/spass_tiere.js?v=8.0',
        'fragen/fun/spass_laender.js?v=8.0',
        'fragen/fun/spass_erfindungen.js?v=8.0',
        'fragen/fun/spass_raetsel.js?v=8.0',
        'fragen/fun/spass_humor.js?v=7.8',
        'fragen/fun/spass_beruf_humor.js?v=8.0',
        'fragen/fun/spass_hauptstaedte.js?v=7.8',
        'fragen/fun/spass_hauptstaedte_europa.js?v=7.8',
        'fragen/fun/spass_schaetzfragen.js?v=8.1'
        // formula.js bewusst nicht – Feature ausgeblendet
    ];

    const questionSources = [
        'SCHOOL_QUESTIONS',
        'BERUF_ELEKTRO_QUESTIONS',
        'BERUF_TISCHLER_QUESTIONS',
        'BERUF_INDUSTRIEMECHANIKER_QUESTIONS',
        'BERUF_FACHINFORMATIKER_QUESTIONS',
        'BERUF_BUERO_QUESTIONS',
        'BERUF_VERKAEUFER_QUESTIONS',
        'BERUF_PFLEGE_QUESTIONS',
        'BERUF_FRISEUR_QUESTIONS',
        'BERUF_KFZ_QUESTIONS',
        'K1_MATHE_QUESTIONS', 'K1_DEUTSCH_QUESTIONS', 'K1_SACHUNTERRICHT_QUESTIONS',
        'K2_MATHE_QUESTIONS', 'K2_DEUTSCH_QUESTIONS', 'K2_SACHUNTERRICHT_QUESTIONS', 'K2_ENGLISCH_QUESTIONS',
        'K3_MATHE_QUESTIONS', 'K3_DEUTSCH_QUESTIONS', 'K3_SACHUNTERRICHT_QUESTIONS', 'K3_ENGLISCH_QUESTIONS',
        'K4_MATHE_QUESTIONS', 'K4_DEUTSCH_QUESTIONS', 'K4_SACHUNTERRICHT_QUESTIONS', 'K4_ENGLISCH_QUESTIONS',
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

    function loadScript(src) {
        return new Promise(function (resolve) {
            var s = document.createElement('script');
            s.src = src;
            s.async = true;
            s.onload = function () { resolve(true); };
            s.onerror = function () {
                console.warn('⚠️ 404:', src.split('/').pop().split('?')[0]);
                resolve(false);
            };
            document.head.appendChild(s);
        });
    }

    // Parallel in Batches (max. 6), mobilfreundlich
    function loadBatch(list, batchSize) {
        batchSize = batchSize || 6;
        var i = 0;
        function next() {
            if (i >= list.length) return Promise.resolve();
            var chunk = list.slice(i, i + batchSize);
            i += batchSize;
            return Promise.all(chunk.map(loadScript)).then(next);
        }
        return next();
    }

    function resolveArray(name) {
        if (typeof window[name] !== 'undefined' && Array.isArray(window[name])) return window[name];
        try {
            return Function('return (typeof ' + name + ' !== "undefined" && Array.isArray(' + name + ')) ? ' + name + ' : null')();
        } catch (e) {
            return null;
        }
    }

    function mergeAllQuestions() {
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
            }
        });

        var unique = new Map();
        target.forEach(function (q) {
            var key = (q.question || '') + '|' + (q.category || '');
            if (!unique.has(key)) unique.set(key, q);
        });
        if (unique.size !== target.length) {
            target.length = 0;
            unique.forEach(function (q) { target.push(q); });
        }

        window.QUESTIONS_DATABASE = target;
        console.log('📊 QUESTIONS_DATABASE:', target.length, 'Fragen');

        try {
            document.dispatchEvent(new CustomEvent('datenbanken-geladen', { detail: { count: target.length } }));
        } catch (e) { /* ignore */ }
    }

    function whenIdle(fn) {
        if (typeof requestIdleCallback === 'function') {
            requestIdleCallback(fn, { timeout: 2500 });
        } else {
            setTimeout(fn, 400);
        }
    }

    function start() {
        var t0 = performance.now ? performance.now() : Date.now();
        loadBatch(coreScripts, 6).then(function () {
            mergeAllQuestions();
            console.log('⚡ Kern-Datenbanken bereit in', Math.round((performance.now ? performance.now() : Date.now()) - t0), 'ms');
            whenIdle(function () {
                loadBatch(deferredScripts, 6).then(function () {
                    mergeAllQuestions();
                    console.log('✅ Alle Datenbanken geladen');
                });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
