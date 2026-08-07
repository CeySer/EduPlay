// ============================================================
//  EduPlay Hub – Fragen rechtzeitig vorladen
//
//  Seit v9.0 lädt datenbanken_loader.js Fragen erst bei Bedarf.
//  Die Spielmodule greifen aber synchron über questionsForKey()
//  zu – die dürfen nicht ins Leere laufen.
//
//  Trick: Zwischen "Thema auswählen" und "Start drücken" liegt
//  immer mindestens ein Klick. Diese Lücke reicht, um die Datei
//  zu holen. Also wird geladen, sobald ein Auswahlfeld sich
//  ändert oder eine Ansicht mit Themenauswahl geöffnet wird –
//  nicht erst beim Start.
//
//  Zusätzlich sichert startQuiz() unten noch einmal ab, falls
//  jemand ohne Auswahl direkt loslegt (voreingestelltes Thema).
//
//  NEUES AUSWAHLFELD GEBAUT? Wenn seine ID auf "category" endet,
//  wird es automatisch erfasst. Sonst unten in ZUSATZ_FELDER
//  eintragen.
// ============================================================

(function () {
    'use strict';

    // Felder, deren ID nicht auf "category" endet.
    const ZUSATZ_FELDER = [
        'sub-category',
        'quiz-topic'
    ];

    function alleKategorieFelder() {
        const gefunden = [];
        const alle = document.querySelectorAll('select, input[type="hidden"]');

        Array.prototype.forEach.call(alle, function (feld) {
            const id = feld.id || '';
            if (!id) return;
            if (/category$/i.test(id) || ZUSATZ_FELDER.indexOf(id) !== -1) gefunden.push(feld);
        });
        return gefunden;
    }

    function vorladen(wert) {
        if (!wert || wert === 'alle') return;
        if (typeof ladeFragenFuer !== 'function') return;
        ladeFragenFuer(wert).catch(function () { /* Netz weg – der Start meldet es */ });
    }

    // ------------------------------------------------------------
    //  1. Auswahl geändert → laden
    //     Ein Listener am Dokument statt an jedem Feld, damit auch
    //     Felder erfasst werden, die erst später entstehen.
    // ------------------------------------------------------------
    document.addEventListener('change', function (e) {
        const feld = e.target;
        if (!feld || !feld.id) return;
        if (/category$/i.test(feld.id) || ZUSATZ_FELDER.indexOf(feld.id) !== -1) {
            vorladen(feld.value);
        }
    }, true);

    // ------------------------------------------------------------
    //  2. Ansicht geöffnet → aktuell eingestelltes Thema laden
    //     Fängt den Fall ab, dass niemand etwas umstellt und der
    //     voreingestellte Wert genommen wird.
    // ------------------------------------------------------------
    function ladeSichtbareAuswahl() {
        alleKategorieFelder().forEach(function (feld) {
            // offsetParent === null heißt: gerade nicht sichtbar
            if (feld.offsetParent === null && feld.type !== 'hidden') return;
            vorladen(feld.value);
        });
    }

    if (typeof window.switchView === 'function') {
        const original = window.switchView;
        window.switchView = function () {
            const rueckgabe = original.apply(this, arguments);
            setTimeout(ladeSichtbareAuswahl, 0);
            return rueckgabe;
        };
    } else {
        // switchView entsteht erst später – dann nachträglich umhängen.
        document.addEventListener('DOMContentLoaded', function () {
            if (typeof window.switchView !== 'function') return;
            const original = window.switchView;
            window.switchView = function () {
                const rueckgabe = original.apply(this, arguments);
                setTimeout(ladeSichtbareAuswahl, 0);
                return rueckgabe;
            };
        });
    }

    // ------------------------------------------------------------
    //  3. Letzte Absicherung um startQuiz()
    //     Sind die Fragen wider Erwarten noch nicht da, wird hier
    //     nachgeladen und danach erneut gestartet – mit kurzem
    //     Hinweis statt der Meldung "keine Fragen gefunden".
    // ------------------------------------------------------------
    function sichereStartAb() {
        if (typeof window.startQuiz !== 'function') return;
        if (window.startQuiz._abgesichert) return;

        const original = window.startQuiz;

        const ersatz = function () {
            const feld = document.getElementById('sub-category');
            const cat = feld && feld.value;

            if (cat && cat !== 'alle'
                && typeof istKategorieGeladen === 'function'
                && typeof ladeFragenFuer === 'function'
                && !istKategorieGeladen(cat)) {

                if (typeof showGlobalLoading === 'function') showGlobalLoading('Fragen werden geladen …');

                ladeFragenFuer(cat)
                    .then(function () {
                        if (typeof hideGlobalLoading === 'function') hideGlobalLoading(true);
                        original.call(window);
                    })
                    .catch(function () {
                        if (typeof hideGlobalLoading === 'function') hideGlobalLoading(true);
                        if (typeof showToast === 'function') {
                            showToast('Die Fragen ließen sich nicht laden – bist du online?', 'error');
                        }
                    });
                return;
            }

            return original.apply(this, arguments);
        };

        ersatz._abgesichert = true;
        window.startQuiz = ersatz;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', sichereStartAb);
    } else {
        sichereStartAb();
    }
})();
