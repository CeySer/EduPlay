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
        { id: "das_dass_k4", titel: "das oder dass?", klasse: 4, fach: "deutsch", dauer: 53, kurs: "rechtschreib_k4" }
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
        el.addEventListener("error", function () {
            if (el.getAttribute("src") && typeof showToast === "function") showToast("Video konnte nicht geladen werden. Bitte Internet prüfen.", "error");
        });
        // Video anhalten, sobald die Ansicht verlassen wird – egal auf welchem Weg
        new MutationObserver(function () {
            if (view.classList.contains("hidden") && !el.paused) el.pause();
        }).observe(view, { attributes: true, attributeFilter: ["class"] });
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", verbindePlayer);
    else verbindePlayer();

    window.EDUPLAY_VIDEOS = VIDEOS;
})();
