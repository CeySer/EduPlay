// ============================================================
//  EduPlay Hub – Lernvideos
//  Eigener Bereich „Videos“ im Lernraum: Liste nach Klasse/Fach,
//  Player und Sprung zum passenden Kurs.
//  Die MP4-Dateien liegen in /videos/ und werden NICHT vom
//  Service Worker zwischengespeichert (Range-Anfragen, Größe).
// ============================================================
(function () {
    'use strict';

    const VIDEOS = [
        { id: "silben_k1", titel: "Silben klatschen", klasse: 1, fach: "deutsch", dauer: 42, kurs: "silben_k1" },
        { id: "anlaute_k1", titel: "Anlaute hören", klasse: 1, fach: "deutsch", dauer: 36, kurs: "anlaute_k1" },
        { id: "zehner_einer_k1", titel: "Zehner und Einer", klasse: 1, fach: "mathe", dauer: 37, kurs: "zahlen20_k1" },
        { id: "zahlenstrahl_k1", titel: "Plus und Minus am Zahlenstrahl", klasse: 1, fach: "mathe", dauer: 48, kurs: "plusrechnen_k1" },
        { id: "malnehmen_k2", titel: "Malnehmen heißt bündeln", klasse: 2, fach: "mathe", dauer: 40, kurs: "einmaleins_k2" },
        { id: "uhr_k2", titel: "Die Uhr lesen", klasse: 2, fach: "mathe", dauer: 41, kurs: "uhr_viertel_k2" },
        { id: "wortarten_k2", titel: "Nomen, Verben, Adjektive", klasse: 2, fach: "deutsch", dauer: 45, kurs: "wortarten_k2" },
        { id: "brueche_viertel_k3", titel: "Brüche: Was ist ein Viertel?", klasse: 3, fach: "mathe", dauer: 55, kurs: "brueche_k3" },
        { id: "schriftlich_addieren_k3", titel: "Schriftlich addieren", klasse: 3, fach: "mathe", dauer: 52, kurs: "schriftlich_k3" },
        { id: "himmelsrichtungen_k3", titel: "Die Himmelsrichtungen", klasse: 3, fach: "sachunterricht", dauer: 38, kurs: "karte_heimat_k3" },
        { id: "stromkreis_k3", titel: "Der Stromkreis", klasse: 3, fach: "sachunterricht", dauer: 45, kurs: "strom_k3" },
        { id: "das_dass_k4", titel: "das oder dass?", klasse: 4, fach: "deutsch", dauer: 53, kurs: "rechtschreib_k4" },
        // Welle 2
        { id: "farben_zahlen_en_k2", titel: "Farben und Zahlen auf Englisch", klasse: 2, fach: "englisch", dauer: 35, kurs: "farben_zahlen_en_k2" },
        { id: "geld_k2", titel: "Mit Geld rechnen", klasse: 2, fach: "mathe", dauer: 37, kurs: "groessen_k2" },
        { id: "jetzt_frueher_k3", titel: "Jetzt und früher – Zeitformen", klasse: 3, fach: "deutsch", dauer: 45, kurs: "zeitform_k3" },
        { id: "geteilt_k3", titel: "Geteilt rechnen", klasse: 3, fach: "mathe", dauer: 38, kurs: "einmaleins_k3" },
        { id: "vier_faelle_k4", titel: "Die vier Fälle", klasse: 4, fach: "deutsch", dauer: 54, kurs: "faelle_k4" },
        { id: "schriftlich_multiplizieren_k4", titel: "Schriftlich multiplizieren", klasse: 4, fach: "mathe", dauer: 47, kurs: "schriftlich_k4" },
        { id: "laengen_k4", titel: "Längen umrechnen", klasse: 4, fach: "mathe", dauer: 46, kurs: "groessen_k3k4" },
        { id: "toter_winkel_k4", titel: "Der tote Winkel", klasse: 4, fach: "sachunterricht", dauer: 45, kurs: "radfahren_k4" },
        // Welle 4
        { id: "zehnerfreunde_k1", titel: "Die Zehnerfreunde", klasse: 1, fach: "mathe", dauer: 36, kurs: "plusrechnen_k1" },
        { id: "formen_k1", titel: "Kreis, Dreieck, Viereck", klasse: 1, fach: "mathe", dauer: 37, kurs: "formen_k1" },
        { id: "fuenf_sinne_k1", titel: "Unsere fünf Sinne", klasse: 1, fach: "sachunterricht", dauer: 33, kurs: "koerper_k1" },
        { id: "jahreszeiten_k1", titel: "Die vier Jahreszeiten", klasse: 1, fach: "sachunterricht", dauer: 35, kurs: "jahreszeiten_k1" },
        { id: "zahlen_bis_100_k2", titel: "Zahlen bis 100", klasse: 2, fach: "mathe", dauer: 35, kurs: "zahlen100_k2" },
        { id: "uhr_viertel_k2", titel: "Viertel nach und Viertel vor", klasse: 2, fach: "mathe", dauer: 43, kurs: "uhr_viertel_k2" },
        { id: "wasserkreislauf_k2", titel: "Der Wasserkreislauf", klasse: 2, fach: "sachunterricht", dauer: 38, kurs: "stoffe_k2" },
        { id: "tiere_en_k2", titel: "Tiere auf Englisch", klasse: 2, fach: "englisch", dauer: 30, kurs: "tiere_en_k2" },
        { id: "schriftlich_subtrahieren_k3", titel: "Schriftlich subtrahieren", klasse: 3, fach: "mathe", dauer: 49, kurs: "schriftlich_k3" },
        { id: "ae_oder_e_k3", titel: "ä oder e? Ableiten hilft", klasse: 3, fach: "deutsch", dauer: 35, kurs: "rechtschreib_k3" },
        { id: "woertliche_rede_k3", titel: "Die wörtliche Rede", klasse: 3, fach: "deutsch", dauer: 35, kurs: "saetze_k3" },
        { id: "wochentage_en_k3", titel: "Die Wochentage auf Englisch", klasse: 3, fach: "englisch", dauer: 34, kurs: "wetter_en_k3" },
        { id: "umfang_flaeche_k4", titel: "Umfang und Fläche", klasse: 4, fach: "mathe", dauer: 47, kurs: "umfang_flaeche_k4" },
        { id: "koerper_en_k4", titel: "Körperteile auf Englisch", klasse: 4, fach: "englisch", dauer: 32, kurs: "koerper_kleidung_en_k4" },
        { id: "zahlen_million_k4", titel: "Zahlen bis zur Million", klasse: 4, fach: "mathe", dauer: 54, kurs: "zahlen1mio_k4" },
        { id: "brueche_alltag_k4", titel: "Brüche im Alltag", klasse: 4, fach: "mathe", dauer: 50, kurs: "brueche_k4" },
        { id: "satzglieder_k4", titel: "Objekte und adverbiale Bestimmungen", klasse: 4, fach: "deutsch", dauer: 49, kurs: "satzglieder_k4" },
        { id: "bundeslaender_k4", titel: "Die 16 Bundesländer", klasse: 4, fach: "sachunterricht", dauer: 47, kurs: "bundeslaender_k4" },
        { id: "uhrzeit_en_k4", titel: "What time is it? Die Uhrzeit auf Englisch", klasse: 4, fach: "englisch", dauer: 37, kurs: "schule_stadt_en_k4" },
        // Klasse 5
        { id: "bruchteile_k5", titel: "Bruchteile von Mengen", klasse: 5, fach: "mathe", dauer: 41, kurs: "bruchrechnen_k5" },
        { id: "brueche_addieren_k5", titel: "Gleichnamige Brüche addieren", klasse: 5, fach: "mathe", dauer: 45, kurs: "brueche_addieren_k5" },
        { id: "teiler_primzahlen_k5", titel: "Teiler und Primzahlen", klasse: 5, fach: "mathe", dauer: 44, kurs: "teiler_vielfache_k5" },
        { id: "winkelarten_k5", titel: "Winkelarten", klasse: 5, fach: "mathe", dauer: 42, kurs: "geometrie_grundlagen_k5" },
        { id: "achsensymmetrie_k5", titel: "Achsensymmetrie", klasse: 5, fach: "mathe", dauer: 43, kurs: "symmetrie_k5" },
        { id: "satzglieder_k5", titel: "Satzglieder bestimmen", klasse: 5, fach: "deutsch", dauer: 45, kurs: "satzglieder_k5" },
        { id: "kommasetzung_k5", titel: "Wann kommt ein Komma?", klasse: 5, fach: "deutsch", dauer: 44, kurs: "komma_k5" },
        { id: "s_ss_sz_k5", titel: "s, ss oder ß?", klasse: 5, fach: "deutsch", dauer: 45, kurs: "s_ss_sz_k5" },
        { id: "pronomen_praepositionen_k5", titel: "Pronomen und Präpositionen", klasse: 5, fach: "deutsch", dauer: 47, kurs: "wortarten_vertiefend_k5" },
        { id: "simple_present_k5", titel: "Simple Present – he, she, it", klasse: 5, fach: "englisch", dauer: 48, kurs: "simple_present_k5" },
        { id: "simple_past_k5", titel: "Simple Past – played, went, saw", klasse: 5, fach: "englisch", dauer: 47, kurs: "simple_past_k5" },
        { id: "plural_en_k5", titel: "Plural auf Englisch", klasse: 5, fach: "englisch", dauer: 48, kurs: "plural_regeln_k5" },
        { id: "brueche_erweitern_kuerzen_k5", titel: "Brüche erweitern und kürzen", klasse: 5, fach: "mathe", dauer: 40, kurs: "bruchrechnen_k5" },
        // Klasse 6
        { id: "dezimalzahlen_k6", titel: "Dezimalzahlen verstehen", klasse: 6, fach: "mathe", dauer: 48, kurs: "dezimalzahlen_k6" },
        { id: "dezimal_addieren_k6", titel: "Dezimalzahlen addieren", klasse: 6, fach: "mathe", dauer: 51, kurs: "dezimal_rechnen_k6" },
        { id: "dezimal_multiplizieren_k6", titel: "Dezimalzahlen multiplizieren", klasse: 6, fach: "mathe", dauer: 49, kurs: "dezimal_rechnen_k6" },
        { id: "brueche_multiplizieren_k6", titel: "Brüche multiplizieren", klasse: 6, fach: "mathe", dauer: 50, kurs: "bruchrechnen_k6" },
        { id: "negative_zahlen_k6", titel: "Negative Zahlen", klasse: 6, fach: "mathe", dauer: 39, kurs: "negative_zahlen_k6" },
        { id: "volumen_quader_k6", titel: "Volumen des Quaders", klasse: 6, fach: "mathe", dauer: 50, kurs: "koerper_volumen_k6" },
        { id: "adjektive_steigern_k6", titel: "Adjektive steigern", klasse: 6, fach: "deutsch", dauer: 43, kurs: "adjektive_steigern_k6" },
        { id: "nominalisierung_k6", titel: "Verben und Adjektive werden groß", klasse: 6, fach: "deutsch", dauer: 42, kurs: "grossschreibung_k6" },
        { id: "perfekt_plusquamperfekt_k6", titel: "Perfekt und Plusquamperfekt", klasse: 6, fach: "deutsch", dauer: 47, kurs: "zeitformen_k6" },
        { id: "present_perfect_k6", titel: "Present Perfect bilden", klasse: 6, fach: "englisch", dauer: 51, kurs: "present_perfect_k6" },
        { id: "comparison_k6", titel: "Comparison: bigger, more beautiful", klasse: 6, fach: "englisch", dauer: 45, kurs: "comparison_k6" },
        { id: "adverbs_k6", titel: "Adverbs: slow oder slowly?", klasse: 6, fach: "englisch", dauer: 47, kurs: "adverbs_k6" },
        // Klasse 7
        { id: "prozentrechnung_k7", titel: "Prozentrechnung", klasse: 7, fach: "mathe", dauer: 42, kurs: "prozentrechnung_k7" },
        { id: "zinsrechnung_k7", titel: "Zinsen berechnen", klasse: 7, fach: "mathe", dauer: 56, kurs: "zinsrechnung_k7" },
        { id: "gleichungen_waage_k7", titel: "Gleichungen lösen wie eine Waage", klasse: 7, fach: "mathe", dauer: 38, kurs: "terme_gleichungen_k7" },
        { id: "dreisatz_k7", titel: "Der Dreisatz", klasse: 7, fach: "mathe", dauer: 54, kurs: "zuordnungen_k7" },
        { id: "dreieck_trapez_k7", titel: "Fläche von Dreieck und Trapez", klasse: 7, fach: "mathe", dauer: 57, kurs: "flaechen_k7" },
        { id: "winkelsaetze_k7", titel: "Winkelsätze", klasse: 7, fach: "mathe", dauer: 46, kurs: "winkelsaetze_k7" },
        { id: "aktiv_passiv_k7", titel: "Aktiv und Passiv", klasse: 7, fach: "deutsch", dauer: 42, kurs: "aktiv_passiv_k7" },
        { id: "nebensatzarten_k7", titel: "Nebensatzarten", klasse: 7, fach: "deutsch", dauer: 44, kurs: "nebensatzarten_k7" },
        { id: "praepositionalobjekt_k7", titel: "Präpositionalobjekt oder adverbiale Bestimmung?", klasse: 7, fach: "deutsch", dauer: 52, kurs: "satzglieder_vertiefend_k7" },
        { id: "prepositions_k7", titel: "in, on, at – Prepositions of time and place", klasse: 7, fach: "englisch", dauer: 45, kurs: "prepositions_k7" },
        { id: "will_going_to_k7", titel: "will oder going to?", klasse: 7, fach: "englisch", dauer: 51, kurs: "future_k7" },
        { id: "past_present_perfect_k7", titel: "Simple Past oder Present Perfect?", klasse: 7, fach: "englisch", dauer: 56, kurs: "perfect_past_k7" }
    ];
    const FACH = {
        mathe: { icon: "🧮", label: "Mathematik" },
        deutsch: { icon: "📖", label: "Deutsch" },
        sachunterricht: { icon: "🌍", label: "Sachunterricht" },
        englisch: { icon: "🇬🇧", label: "Englisch" }
    };
    const FACH_ORDER = ["mathe", "deutsch", "sachunterricht", "englisch"];
    const SPEICHER = "eduplay_videos_gesehen";

    let filterKlasse = 0;       // 0 = alle
    let aktuellesVideo = null;

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }
    function gesehen() {
        try { return JSON.parse(localStorage.getItem(SPEICHER) || "{}") || {}; } catch (e) { return {}; }
    }
    function merkeGesehen(id) {
        try { const g = gesehen(); g[id] = 1; localStorage.setItem(SPEICHER, JSON.stringify(g)); } catch (e) { }
    }
    function dauerText(s) { return s < 60 ? s + " s" : Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0") + " min"; }
    function klasseVorschlag() {
        // Klasse des aktiven Spielers, falls bekannt – sonst alle zeigen
        try {
            const p = (typeof currentPlayer !== "undefined" && currentPlayer) ? currentPlayer : null;
            const k = p && Number(p.grade || p.klasse);
            if (k && VIDEOS.some(function (v) { return v.klasse === k; })) return k;
        } catch (e) { }
        return 0;
    }

    function chip(k, label) {
        const an = filterKlasse === k;
        return an
            ? '<button type="button" onclick="filterVideos(' + k + ')" class="px-4 py-2 rounded-full text-sm font-black text-white whitespace-nowrap shrink-0" style="background:linear-gradient(140deg,#ec4899,#f43f5e);">' + label + '</button>'
            : '<button type="button" onclick="filterVideos(' + k + ')" class="px-4 py-2 rounded-full text-sm font-black text-white whitespace-nowrap shrink-0 bg-white/5 border border-white/10">' + label + '</button>';
    }

    function karte(v, g) {
        const fertig = !!g[v.id];
        return '<button type="button" onclick="openVideo(\'' + v.id + '\')" class="w-full flex items-center gap-3 p-3 rounded-2xl text-left transition bg-white/5 hover:bg-white/10 border border-white/10">'
            + '<span class="shrink-0" style="position:relative;width:128px;height:72px;border-radius:12px;overflow:hidden;background:#fff8ec;display:block;">'
            + '<img src="videos/' + v.id + '.jpg" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">'
            + '<span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">'
            + '<span style="width:34px;height:34px;border-radius:999px;background:rgba(15,23,42,0.75);color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;">▶</span></span></span>'
            + '<span class="flex-1 min-w-0">'
            + '<span class="block font-black text-white text-sm">' + esc(v.titel) + '</span>'
            + '<span class="block text-xs text-gray-400 mt-1">Klasse ' + v.klasse + ' · ' + dauerText(v.dauer) + '</span></span>'
            + '<span class="shrink-0" style="font-size:18px;">' + (fertig ? "✅" : "") + '</span></button>';
    }

    function renderListe() {
        const wrap = document.getElementById("videos-liste");
        const chips = document.getElementById("videos-klassen");
        if (!wrap || !chips) return;
        const klassen = Array.from(new Set(VIDEOS.map(function (v) { return v.klasse; }))).sort();
        chips.innerHTML = chip(0, "Alle") + klassen.map(function (k) { return chip(k, "Klasse " + k); }).join("");
        const g = gesehen();
        const liste = VIDEOS.filter(function (v) { return !filterKlasse || v.klasse === filterKlasse; });
        const html = FACH_ORDER.map(function (f) {
            const imFach = liste.filter(function (v) { return v.fach === f; });
            if (!imFach.length) return "";
            const lab = FACH[f] || { icon: "🎬", label: f };
            return '<div class="space-y-2"><div class="text-sm font-black text-white px-1 pt-1">' + lab.icon + ' ' + esc(lab.label) + '</div>'
                + '<div class="space-y-2">' + imFach.map(function (v) { return karte(v, g); }).join("") + '</div></div>';
        }).join("");
        wrap.innerHTML = html || '<p class="text-center text-xs text-gray-400 py-3">Für diese Klasse gibt es noch keine Videos.</p>';
        const anz = document.getElementById("videos-anzahl");
        if (anz) anz.innerText = Object.keys(g).filter(function (id) { return VIDEOS.some(function (v) { return v.id === id; }); }).length + " von " + VIDEOS.length + " angesehen";
    }

    window.showVideos = function () {
        if (filterKlasse === 0 && !window._videosFilterGesetzt) filterKlasse = klasseVorschlag();
        renderListe();
        switchView("videos");
    };
    window.filterVideos = function (k) {
        filterKlasse = Number(k) || 0; window._videosFilterGesetzt = true; renderListe();
    };

    window.openVideo = function (id) {
        const v = VIDEOS.find(function (x) { return x.id === id; });
        if (!v) return;
        aktuellesVideo = v;
        const t = document.getElementById("video-titel");
        if (t) t.innerText = v.titel;
        const info = document.getElementById("video-info");
        const lab = FACH[v.fach] || { icon: "🎬", label: v.fach };
        if (info) info.innerText = lab.icon + " " + lab.label + " · Klasse " + v.klasse + " · " + dauerText(v.dauer);
        const el = document.getElementById("video-player");
        if (el) {
            el.pause();
            el.poster = "videos/" + v.id + ".jpg";
            el.src = "videos/" + v.id + ".mp4";
            el.load();
            // Autostart: openVideo läuft im Tipp-Handler, daher erlauben Browser den Ton
            const p = el.play();
            if (p && p.catch) p.catch(function () { /* blockiert: Nutzer tippt selbst auf Play */ });
        }
        const kursBtn = document.getElementById("video-kurs-btn");
        if (kursBtn) kursBtn.classList.toggle("hidden", !v.kurs);
        const naechstes = naechstesVideo(v);
        const nBtn = document.getElementById("video-next-btn");
        if (nBtn) {
            nBtn.classList.toggle("hidden", !naechstes);
            if (naechstes) nBtn.innerText = "▶ Nächstes: " + naechstes.titel;
        }
        switchView("video");
    };

    function naechstesVideo(v) {
        const gefiltert = VIDEOS.filter(function (x) { return !filterKlasse || x.klasse === filterKlasse; });
        // gleiche Reihenfolge wie in der Liste: nach Fach gruppiert
        const liste = FACH_ORDER.reduce(function (acc, f) {
            return acc.concat(gefiltert.filter(function (x) { return x.fach === f; }));
        }, []);
        const i = liste.indexOf(v);
        return i >= 0 && i < liste.length - 1 ? liste[i + 1] : null;
    }
    window.videoNaechstes = function () {
        const n = aktuellesVideo && naechstesVideo(aktuellesVideo);
        if (n) window.openVideo(n.id);
    };
    window.videoZumKurs = function () {
        const v = aktuellesVideo;
        if (!v || !v.kurs) return;
        const el = document.getElementById("video-player");
        if (el) el.pause();
        const laden = (typeof window.ladeLektionen === "function") ? window.ladeLektionen() : Promise.resolve();
        laden.then(function () {
            if (typeof window.openKurs === "function") window.openKurs(v.kurs);
        }, function () {
            if (typeof showToast === "function") showToast("Kurse konnten nicht geladen werden. Bitte Internet prüfen.", "error");
        });
    };
    window.videoZurueck = function () {
        const el = document.getElementById("video-player");
        if (el) el.pause();
        window.showVideos();
    };

    function verbindePlayer() {
        const el = document.getElementById("video-player");
        const view = document.getElementById("view-video");
        if (!el || !view || el._eduplay) return;
        el._eduplay = true;
        el.addEventListener("timeupdate", function () {
            if (aktuellesVideo && el.duration && el.currentTime / el.duration > 0.8) merkeGesehen(aktuellesVideo.id);
        });
        el.addEventListener("ended", function () { if (aktuellesVideo) merkeGesehen(aktuellesVideo.id); });
        // Hintergrundmusik pausieren, solange ein Video läuft
        el.addEventListener("play", function () { if (typeof stopBackgroundMusic === "function") stopBackgroundMusic(); });
        el.addEventListener("error", function () {
            if (el.getAttribute("src") && typeof showToast === "function") showToast("Video konnte nicht geladen werden. Bitte Internet prüfen.", "error");
        });
        // Video anhalten, sobald die Ansicht verlassen wird – egal auf welchem Weg
        new MutationObserver(function () {
            if (view.classList.contains("hidden")) {
                if (!el.paused) el.pause();
                if (typeof startBackgroundMusic === "function") startBackgroundMusic();
            }
        }).observe(view, { attributes: true, attributeFilter: ["class"] });
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", verbindePlayer);
    else verbindePlayer();

    window.EDUPLAY_VIDEOS = VIDEOS;
})();
