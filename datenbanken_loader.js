// ============================================================
// DATENBANKEN LOADER
// Version: 9.0 – Fragen werden erst bei Bedarf geladen
//
// Vorher: 71 Dateien (3,1 MB) beim Start, nacheinander, davon
// 11 ins Leere (404). Ein Zweitklässler lud Oberstufen-Chemie mit.
//
// Jetzt zweistufig:
//   1. Start – nur was das Menü braucht: Lehrplan, Kategorien,
//      Wörter, Vokabeln, Formeln. Rund 600 KB.
//   2. Bei Bedarf – die Fragendatei zur gewählten Kategorie,
//      nachgeschlagen im Verzeichnis (fragen/manifest.js).
//
// Der Service Worker legt jede geladene Datei ab: beim zweiten
// Mal ist sie sofort da, auch ohne Netz.
//
// ÖFFENTLICHE FUNKTIONEN (für die Spiel-Module):
//   await ladeFragenFuer('k1_mathe')      – eine Kategorie
//   await ladeFragenFuer('topic:k1_mathe:addition')
//   await ladeFragenFuer('subject:mathe') – Fach über alle Klassen
//   await ladeFragenFuer(['k1_mathe','k2_mathe'])
//
// Alle sind gefahrlos mehrfach aufrufbar – was schon da ist,
// wird nicht erneut geholt.
// ============================================================

(function () {
    'use strict';

    const V = '9.0';
    console.log('🔥 datenbanken_loader.js v' + V + ' (Laden bei Bedarf)');

    // ------------------------------------------------------------
    //  BEIM START – ohne das geht das Menü nicht
    // ------------------------------------------------------------
    // questions_school.js liefert CURRICULUM, also den kompletten
    // Menübaum. Die Datei enthält zusätzlich Fragen für Klasse 6–13
    // und ist deshalb mit 320 KB der dickste Brocken hier. Sie ließe
    // sich aufteilen (Lehrplan raus, Fragen bleiben) – dann wären es
    // nur noch rund 20 KB. Eigener Arbeitsschritt.
    const START_DATEIEN = [
        'fragen/manifest.js',
        'fragen/questions_school.js',   // CURRICULUM – Menübaum
        'fragen/questions_fun.js',      // FUN_CATEGORIES
        'fragen/questions_beruf.js',    // BERUFSSCHULE
        'fragen/words_kids.js',         // Wort-Rätsel
        'fragen/words_kids_themes.js',
        'fragen/words_adult.js',
        'fragen/vocabulary.js',         // Vokabel-Duell
        'formula.js'
    ];

    // Diese Namen liefern beim Start bereits Fragen mit.
    const START_QUELLEN = ['SCHOOL_QUESTIONS'];

    // ------------------------------------------------------------
    //  Zustand
    // ------------------------------------------------------------
    const geladeneDateien = {};      // datei -> true
    const laufendeLadungen = {};     // datei -> Promise
    const eingemischt = {};          // Variablenname -> true
    let zielCache = null;

    // Fragen-Dateien können sich selbst anmelden (ältere Bauart).
    const REGISTRIERT = [];
    window.registerQuestions = function (name, arr) {
        if (!Array.isArray(arr) || !arr.length) {
            console.warn('⚠️ registerQuestions: ' + name + ' ist leer oder kein Array');
            return;
        }
        REGISTRIERT.push({ name: name, arr: arr });
        try { window[name] = arr; } catch (e) { /* egal */ }
    };

    // ------------------------------------------------------------
    //  QUESTIONS_DATABASE finden
    //
    //  Liegt als const in app-config.js und ist damit NICHT über
    //  window erreichbar. app-config.js wird außerdem später geladen
    //  als diese Datei – deshalb wird erst beim ersten Schreiben
    //  gesucht und die Referenz dann behalten.
    // ------------------------------------------------------------
    function ziel() {
        if (zielCache) return zielCache;
        try {
            const ausConst = Function(
                'return (typeof QUESTIONS_DATABASE !== "undefined" && Array.isArray(QUESTIONS_DATABASE)) ? QUESTIONS_DATABASE : null'
            )();
            if (ausConst) { zielCache = ausConst; window.QUESTIONS_DATABASE = ausConst; return zielCache; }
        } catch (e) { /* weiter unten */ }

        if (!Array.isArray(window.QUESTIONS_DATABASE)) window.QUESTIONS_DATABASE = [];
        zielCache = window.QUESTIONS_DATABASE;
        return zielCache;
    }

    function holeArray(name) {
        if (Array.isArray(window[name])) return window[name];
        try {
            return Function(
                'return (typeof ' + name + ' !== "undefined" && Array.isArray(' + name + ')) ? ' + name + ' : null'
            )();
        } catch (e) {
            return null;
        }
    }

    // Fragen anhängen, ohne Doppelte. Der Schlüssel ist derselbe wie
    // früher beim Zusammenführen: Fragetext + Kategorie.
    const bekannteFragen = new Set();

    function mischeEin(name) {
        if (eingemischt[name]) return 0;
        const arr = holeArray(name);
        if (!arr || !arr.length) return 0;

        eingemischt[name] = true;
        const zielArr = ziel();
        let neu = 0;

        for (let i = 0; i < arr.length; i++) {
            const q = arr[i];
            if (!q) continue;
            const schluessel = (q.question || '') + '|' + (q.category || '');
            if (bekannteFragen.has(schluessel)) continue;
            bekannteFragen.add(schluessel);
            zielArr.push(q);
            neu++;
        }
        return neu;
    }

    // ------------------------------------------------------------
    //  Eine Datei laden (jede nur einmal, parallel erlaubt)
    // ------------------------------------------------------------
    function ladeDatei(pfad) {
        if (geladeneDateien[pfad]) return Promise.resolve(true);
        if (laufendeLadungen[pfad]) return laufendeLadungen[pfad];

        const p = new Promise(function (fertig) {
            const s = document.createElement('script');
            s.src = pfad + (pfad.indexOf('?') === -1 ? '?v=' + V : '');
            s.async = true;
            s.onload = function () {
                geladeneDateien[pfad] = true;
                delete laufendeLadungen[pfad];
                fertig(true);
            };
            s.onerror = function () {
                console.warn('⚠️ Nicht ladbar: ' + pfad);
                geladeneDateien[pfad] = true;   // nicht endlos wiederholen
                delete laufendeLadungen[pfad];
                fertig(false);
            };
            document.head.appendChild(s);
        });

        laufendeLadungen[pfad] = p;
        return p;
    }

    // ------------------------------------------------------------
    //  Verzeichnis durchsuchen
    // ------------------------------------------------------------
    function verzeichnis() {
        return Array.isArray(window.FRAGEN_VERZEICHNIS) ? window.FRAGEN_VERZEICHNIS : [];
    }

    // Welche Dateien liefern diese Kategorien?
    function dateienFuerKategorien(kategorien) {
        const gesucht = {};
        kategorien.forEach(function (k) { if (k) gesucht[k] = true; });

        return verzeichnis().filter(function (e) {
            return (e.kat || []).some(function (k) { return gesucht[k]; });
        });
    }

    // Bei "subject:mathe" ist die Kategorie unbekannt – gesucht wird
    // über den Namen. k7_mathematik und k6_mathe sollen beide passen.
    function dateienFuerFach(fach) {
        const f = String(fach || '').toLowerCase();
        if (!f) return [];
        return verzeichnis().filter(function (e) {
            return (e.kat || []).some(function (k) {
                const rest = String(k).replace(/^k\d+_/, '');
                return rest.indexOf(f) === 0 || f.indexOf(rest) === 0;
            });
        });
    }

    // ------------------------------------------------------------
    //  ÖFFENTLICH: Fragen für einen Schlüssel bereitstellen
    // ------------------------------------------------------------
    window.ladeFragenFuer = function (schluessel) {
        if (!schluessel) return Promise.resolve(0);

        let eintraege = [];

        if (Array.isArray(schluessel)) {
            const flach = [];
            schluessel.forEach(function (k) {
                const s = String(k);
                if (s.indexOf('vocab:') === 0) return;          // Vokabeln liegen schon vor
                flach.push(s.indexOf('topic:') === 0 ? s.split(':')[1] : s);
            });
            eintraege = dateienFuerKategorien(flach);

        } else {
            const s = String(schluessel);

            if (s.indexOf('topic:') === 0) {
                eintraege = dateienFuerKategorien([s.split(':')[1]]);
            } else if (s.indexOf('subject:') === 0) {
                eintraege = dateienFuerFach(s.slice('subject:'.length));
            } else if (s.indexOf('vocab:') === 0) {
                return Promise.resolve(0);
            } else {
                eintraege = dateienFuerKategorien([s]);
            }
        }

        const offen = eintraege.filter(function (e) { return !geladeneDateien[e.datei]; });
        if (!offen.length) {
            // Schon da – trotzdem einmischen, falls die Datei geladen
            // wurde, bevor QUESTIONS_DATABASE existierte.
            let n = 0;
            eintraege.forEach(function (e) { n += mischeEin(e.name); });
            return Promise.resolve(n);
        }

        console.log('📥 Lade ' + offen.length + ' Fragendatei(en) für "' + schluessel + '"');

        return Promise.all(offen.map(function (e) { return ladeDatei(e.datei); }))
            .then(function () {
                let neu = 0;
                eintraege.forEach(function (e) { neu += mischeEin(e.name); });

                REGISTRIERT.forEach(function (r) { neu += mischeEin(r.name); });

                if (neu) {
                    console.log('  ✅ ' + neu + ' Fragen dazu (gesamt ' + ziel().length + ')');
                    try {
                        document.dispatchEvent(new CustomEvent('fragen-nachgeladen', {
                            detail: { neu: neu, gesamt: ziel().length }
                        }));
                    } catch (e2) { /* egal */ }
                }
                return neu;
            });
    };

    // Alles laden – für den Eltern-Bereich (Testerstellung, Statistik),
    // wo über den gesamten Bestand gesucht wird. Bewusst getrennt,
    // damit es nicht versehentlich beim Start passiert.
    window.ladeAlleFragen = function () {
        const alle = verzeichnis();
        const offen = alle.filter(function (e) { return !geladeneDateien[e.datei]; });
        if (!offen.length) return Promise.resolve(0);

        console.log('📥 Lade den gesamten Fragenbestand (' + offen.length + " Dateien) …");
        return Promise.all(offen.map(function (e) { return ladeDatei(e.datei); }))
            .then(function () {
                let neu = 0;
                alle.forEach(function (e) { neu += mischeEin(e.name); });
                REGISTRIERT.forEach(function (r) { neu += mischeEin(r.name); });
                console.log('  ✅ Gesamt: ' + ziel().length + ' Fragen');
                try {
                    document.dispatchEvent(new CustomEvent('fragen-nachgeladen', {
                        detail: { neu: neu, gesamt: ziel().length, alle: true }
                    }));
                } catch (e) { /* egal */ }
                return neu;
            });
    };

    // Wie viele Fragen gäbe es zu dieser Kategorie? Beantwortet sich
    // aus dem Verzeichnis, ohne etwas zu laden – für Menü-Anzeigen.
    // Ohne das stünde im Menü überall "0", weil beim Aufbau noch
    // nichts geladen ist.
    window.fragenAnzahlLaut = function (schluessel) {
        if (!schluessel) return 0;
        const s = String(schluessel);

        let treffer;
        if (s.indexOf('subject:') === 0) {
            treffer = dateienFuerFach(s.slice('subject:'.length));
        } else if (s.indexOf('topic:') === 0) {
            // Unterthemen stehen nicht im Verzeichnis – erst nach dem
            // Laden zählbar. 0 heißt hier "noch unbekannt", nicht "keine".
            return 0;
        } else {
            treffer = dateienFuerKategorien([s]);
        }

        return treffer.reduce(function (summe, e) { return summe + (e.n || 0); }, 0);
    };

    window.istKategorieGeladen = function (kategorie) {
        const e = dateienFuerKategorien([kategorie]);
        return e.length > 0 && e.every(function (x) { return geladeneDateien[x.datei]; });
    };

    // ------------------------------------------------------------
    //  Startvorgang
    // ------------------------------------------------------------
    function selbsttest() {
        const bestand = {};
        verzeichnis().forEach(function (e) {
            (e.kat || []).forEach(function (k) { bestand[k] = (bestand[k] || 0) + (e.n || 0); });
        });

        const ohneFragen = [];
        if (typeof CURRICULUM !== 'undefined' && Array.isArray(CURRICULUM)) {
            CURRICULUM.forEach(function (g) {
                (g.subjects || []).forEach(function (s) {
                    // SCHOOL_QUESTIONS deckt viele Kategorien direkt ab –
                    // die zählen als vorhanden, auch ohne eigene Datei.
                    if (!bestand[s.key]) ohneFragen.push(g.label + ' · ' + s.label + ' (' + s.key + ')');
                });
            });
        }

        const imVerzeichnis = verzeichnis().length;
        console.log('📚 Verzeichnis: ' + imVerzeichnis + ' Fragendateien vorgemerkt');

        if (!imVerzeichnis) {
            console.error('❌ fragen/manifest.js fehlt oder ist leer – es lassen sich keine Fragen nachladen!');
        }
        if (ohneFragen.length) {
            console.warn('📭 Im Menü, aber keine eigene Fragendatei (' + ohneFragen.length + '):\n   '
                + ohneFragen.slice(0, 20).join('\n   ')
                + (ohneFragen.length > 20 ? '\n   … und ' + (ohneFragen.length - 20) + ' weitere' : ''));
        }
    }

    function starte() {
        Promise.all(START_DATEIEN.map(ladeDatei)).then(function () {
            let n = 0;
            START_QUELLEN.forEach(function (name) { n += mischeEin(name); });
            REGISTRIERT.forEach(function (r) { n += mischeEin(r.name); });

            console.log('📊 Beim Start bereit: ' + ziel().length + ' Fragen');
            selbsttest();

            try {
                document.dispatchEvent(new CustomEvent('datenbanken-geladen', {
                    detail: { count: ziel().length }
                }));
            } catch (e) { /* egal */ }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', starte);
    } else {
        starte();
    }
})();
