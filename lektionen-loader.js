// ============================================================
//  LEKTIONEN-LOADER
//  Die Kurs-Dateien sind zusammen rund 2 MB. Früher hingen sie als
//  <script src> in index.html und mussten fertig geladen und geparst
//  sein, bevor überhaupt etwas auf dem Bildschirm erschien.
//
//  Jetzt lädt diese Datei sie nach:
//   - kurz nach dem Start im Leerlauf (der Nutzer merkt nichts davon)
//   - spätestens beim ersten Antippen von "Kurse"
//
//  Alle Stellen in app-config.js, app-ui.js, quiz-core.js und
//  family-dashboard.js prüfen bereits mit typeof, ob KURSE/LEKTIONEN
//  da sind – sie laufen also auch vorher fehlerfrei.
// ============================================================
(function () {
    "use strict";

    // Reihenfolge zählt: lektionen.js legt KURSE und LEKTIONEN an,
    // die Zusatzdateien hängen danach nur noch an.
    var DATEIEN = [
        "lektionen.js?v=3.13",
        "lektionen_formen_k1k2.js?v=4",
        "lektionen_grundschule_k1k4.js?v=4",
        "lektionen_grundschule_k1k4_teil2.js?v=4",
        "lektionen_einmaleins_k3.js?v=3",
        "lektionen_uhr_fuenf_k2.js?v=3",
        "lektionen_grundschule_k1k4_teil3.js?v=3",
        "lektionen_englisch_zeiten.js?v=2",
        "lektionen_bewerbung_k9k10.js?v=2"
    ];

    var laufend = null;

    function ladeDatei(src) {
        return new Promise(function (fertig, fehler) {
            var s = document.createElement("script");
            s.src = src;
            s.onload = function () { fertig(); };
            s.onerror = function () { fehler(new Error("Konnte " + src + " nicht laden")); };
            document.head.appendChild(s);
        });
    }

    // Lädt alle Kurs-Dateien der Reihe nach. Mehrfache Aufrufe teilen
    // sich denselben Ladevorgang.
    function ladeLektionen() {
        if (laufend) return laufend;
        laufend = DATEIEN.reduce(function (kette, src) {
            return kette.then(function () { return ladeDatei(src); });
        }, Promise.resolve()).then(function () {
            window.LEKTIONEN_GELADEN = true;
            try { document.dispatchEvent(new CustomEvent("lektionen-geladen")); } catch (e) { }
        })["catch"](function (e) {
            laufend = null;   // beim nächsten Versuch neu probieren
            console.warn("Lektionen konnten nicht geladen werden:", e);
            throw e;
        });
        return laufend;
    }
    window.ladeLektionen = ladeLektionen;

    // Platzhalter für den Menüpunkt "Kurse". Sobald lektionen.js geladen
    // ist, überschreibt deren eigene Funktion diesen Platzhalter.
    function showKurseStub() {
        // Zwei-Argument-Form: ein Fehler INNERHALB von showKurse() landet nicht
        // im Fehlerzweig, sondern bleibt sichtbar. Der Fehlerzweig gilt nur
        // dem Nachladen selbst.
        ladeLektionen().then(function () {
            if (typeof window.showKurse === "function" && window.showKurse !== showKurseStub) {
                window.showKurse();
            }
        }, function () {
            if (typeof showToast === "function") {
                showToast("Kurse konnten nicht geladen werden. Bitte Internet prüfen.");
            }
        });
    }
    window.showKurse = showKurseStub;

    // Im Leerlauf nachladen, damit die Daten da sind, bevor jemand sie braucht.
    function vorladen() {
        if (typeof window.requestIdleCallback === "function") {
            window.requestIdleCallback(function () { ladeLektionen(); }, { timeout: 4000 });
        } else {
            setTimeout(ladeLektionen, 1500);
        }
    }
    if (document.readyState === "complete") vorladen();
    else window.addEventListener("load", vorladen);
})();
