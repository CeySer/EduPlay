// ============================================================
//  KARTEIKASTEN (Lernkartei mit 5 Fächern, Leitner-System)
//  Stapel: Kleines 1×1, 1×1 geteilt, Englisch-Vokabeln (Klasse/Thema).
//  Richtig → ein Fach weiter, falsch → zurück in Fach 1.
//  Fach 1 täglich, 2 alle 2 Tage, 3 alle 4, 4 alle 8, 5 alle 16 Tage.
//  Daten im Profil: kartei { k: {karte: [fach, faelligTag]}, decks: [],
//  tag: {d, n, neu, xp, fertig} }, karteiPflicht (von den Eltern).
// ============================================================
(function () {
    "use strict";

    const ABSTAND = [0, 1, 2, 4, 8, 16];
    const NEU_PRO_TAG = 10;
    const XP_PRO_TAG = 30;

    function e(s) { return (typeof esc === "function") ? esc(s) : String(s == null ? "" : s); }
    function heute() { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); }
    function sfx(n) { try { if (typeof SFX !== "undefined" && SFX[n]) SFX[n](); } catch (x) { } }
    function mischen(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
    function ich() { return (typeof currentPlayer !== "undefined") ? currentPlayer : null; }
    function speichern() { if (typeof savePlayerProgress === "function") savePlayerProgress(); }

    function daten(p) {
        p = p || ich();
        if (!p) return { k: {}, decks: [], tag: {} };
        if (!p.kartei || typeof p.kartei !== "object") p.kartei = {};
        const d = p.kartei;
        d.k = d.k || {}; d.decks = Array.isArray(d.decks) ? d.decks : []; d.tag = d.tag || {};
        if (d.tag.d !== heute()) d.tag = { d: heute(), n: 0, neu: 0, xp: 0, fertig: false };
        return d;
    }

    // ---------------- Stapel ----------------
    function vokSet(klasse) { return (typeof VOCABULARY_DATABASE !== "undefined" && VOCABULARY_DATABASE.en) ? VOCABULARY_DATABASE.en["k" + klasse] : null; }
    function deckInfo(id) {
        if (id === "1x1") return { titel: "Kleines 1×1", icon: "✖️" };
        if (id === "1x1g") return { titel: "1×1 geteilt", icon: "➗" };
        const m = String(id).match(/^vok:(\d+)(?::(.+))?$/);
        if (m) {
            const set = vokSet(m[1]);
            const th = m[2] && set && set.themen ? set.themen[m[2]] : "";
            return { titel: "Englisch Kl. " + m[1] + (th ? " · " + th : ""), icon: "🇬🇧" };
        }
        return { titel: id, icon: "🗂️" };
    }
    function deckKarten(id) {
        const out = [];
        if (id === "1x1") { for (let a = 2; a <= 10; a++) for (let b = 1; b <= 10; b++) out.push("x" + a + "_" + b); }
        else if (id === "1x1g") { for (let a = 2; a <= 10; a++) for (let b = 1; b <= 10; b++) out.push("g" + a + "_" + b); }
        else {
            const m = String(id).match(/^vok:(\d+)(?::(.+))?$/);
            const set = m && vokSet(m[1]);
            if (set) set.words.forEach(function (w) { if (!m[2] || w.thema === m[2]) out.push("v:" + w.id); });
        }
        return out;
    }
    let _vokIndex = null;
    function vokWort(id) {
        if (!_vokIndex) {
            _vokIndex = {};
            if (typeof VOCABULARY_DATABASE !== "undefined" && VOCABULARY_DATABASE.en)
                Object.keys(VOCABULARY_DATABASE.en).forEach(function (k) { (VOCABULARY_DATABASE.en[k].words || []).forEach(function (w) { _vokIndex[w.id] = w; }); });
        }
        return _vokIndex[id];
    }
    // Karte → {art, frage, antwort, extra}
    function karte(key) {
        let m = key.match(/^x(\d+)_(\d+)$/);
        if (m) return { art: "zahl", frage: m[1] + " · " + m[2], l: +m[1] * +m[2] };
        m = key.match(/^g(\d+)_(\d+)$/);
        if (m) return { art: "zahl", frage: (+m[1] * +m[2]) + " : " + m[1], l: +m[2] };
        if (key.indexOf("v:") === 0) {
            const w = vokWort(key.slice(2));
            if (!w) return null;
            return { art: "wort", frage: w.de, antwort: w.foreign, formen: w.formen || "", satz: w.satz || "" };
        }
        return null;
    }

    function zaehlen(p) {
        const d = daten(p), t = heute(), faecher = [0, 0, 0, 0, 0, 0];
        let faellig = 0;
        const imStapel = {};
        d.decks.forEach(function (dk) { deckKarten(dk).forEach(function (k) { imStapel[k] = true; }); });
        Object.keys(d.k).forEach(function (k) {
            if (!imStapel[k]) return;
            const v = d.k[k]; faecher[v[0]]++;
            if (v[1] <= t) faellig++;
        });
        const neuOffen = Object.keys(imStapel).filter(function (k) { return !d.k[k]; }).length;
        const neuHeute = Math.min(Math.max(0, NEU_PRO_TAG - (d.tag.neu || 0)), neuOffen);
        return { faecher: faecher, faellig: faellig, neuHeute: neuHeute, neuOffen: neuOffen, gesamt: Object.keys(imStapel).length };
    }
    function deckStand(p, dk) {
        const d = daten(p), t = heute(); let sitzt = 0, faellig = 0, drin = 0;
        const ks = deckKarten(dk);
        ks.forEach(function (k) { const v = d.k[k]; if (!v) return; drin++; if (v[0] >= 5) sitzt++; if (v[1] <= t) faellig++; });
        return { n: ks.length, drin: drin, sitzt: sitzt, faellig: faellig };
    }
    window.karteiFaellig = function (p) { const d = daten(p); return d.decks.length ? (zaehlen(p).faellig + zaehlen(p).neuHeute) : 0; };

    // ---------------- Ansicht ----------------
    const CSS = `
    .kk-fach{flex:1;border-radius:14px;padding:10px 4px;text-align:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
    .kk-fach b{display:block;font-size:22px;font-weight:900}
    .kk-fach span{font-size:10px;font-weight:800;opacity:.75}
    .kk-karte{min-height:210px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;border-radius:24px;padding:22px;background:linear-gradient(160deg,rgba(255,255,255,.1),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.14)}
    .kk-frage{font-size:40px;font-weight:900;line-height:1.15}
    .kk-antwort{font-size:34px;font-weight:900;color:#6ee7b7}
    `;
    const HTML = `
    <div id="view-kartei" class="view hidden space-y-4">
      <div id="kk-home" class="space-y-4">
        <div class="flex items-center justify-between gap-2">
          <button class="btn-secondary text-sm py-2.5 px-4" onclick="switchView('lernen')">Zurück</button>
          <span class="text-sm font-bold text-gray-400">🗂️ Karteikasten</span>
          <span style="width:64px"></span>
        </div>
        <div id="kk-heute"></div>
        <div class="glass-card p-4 space-y-2">
          <div class="text-xs font-bold text-gray-400">Deine 5 Fächer</div>
          <div id="kk-faecher" class="flex gap-2"></div>
          <p class="text-[11px] text-gray-500">Richtig → ein Fach weiter. Falsch → zurück in Fach 1. Je weiter hinten, desto seltener kommt die Karte.</p>
        </div>
        <div id="kk-decks" class="space-y-2"></div>
        <div class="glass-card p-4 space-y-2">
          <div class="text-sm font-black">➕ Stapel hinzufügen</div>
          <div class="grid grid-cols-2 gap-2">
            <button class="btn-secondary text-sm py-2.5" onclick="karteiDeckAdd('1x1')">✖️ Kleines 1×1</button>
            <button class="btn-secondary text-sm py-2.5" onclick="karteiDeckAdd('1x1g')">➗ 1×1 geteilt</button>
          </div>
          <div class="flex gap-2">
            <select id="kk-vok-kl" class="input-modern text-sm" style="max-width:120px" onchange="karteiThemen()"></select>
            <select id="kk-vok-th" class="input-modern text-sm flex-1"></select>
          </div>
          <button class="btn-secondary w-full text-sm py-2.5" onclick="karteiDeckAddVok()">🇬🇧 Vokabeln hinzufügen</button>
        </div>
      </div>
      <div id="kk-play" class="hidden space-y-3">
        <div class="flex items-center justify-between gap-2">
          <button class="btn-secondary text-sm py-2 px-3" onclick="karteiBeenden()">Beenden</button>
          <span id="kk-info" class="text-sm font-black text-amber-300"></span>
          <span id="kk-fachinfo" class="text-xs font-black text-gray-400"></span>
        </div>
        <div class="kr-bar"><div id="kk-bar" style="width:0%"></div></div>
        <div id="kk-karte" class="kk-karte"></div>
        <div id="kk-aktion"></div>
      </div>
      <div id="kk-ende" class="hidden space-y-4"></div>
    </div>`;

    function einbauen() {
        if (document.getElementById("view-kartei")) return;
        const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
        const ref = document.getElementById("view-lernen") || document.querySelector(".view");
        if (ref) ref.insertAdjacentHTML("afterend", HTML);
        // Knopf im Lernen-Bereich (hinter Kopfrechnen)
        const kb = document.querySelector("#view-lernen button[onclick=\"kopfOeffnen()\"]");
        if (kb && !document.getElementById("kk-lernen-btn")) {
            kb.insertAdjacentHTML("afterend", `<button id="kk-lernen-btn" onclick="karteiOeffnen()"
                class="w-full flex items-center gap-4 p-5 rounded-2xl text-white text-left shadow-lg transition hover:scale-[1.02]"
                style="background:linear-gradient(140deg,#14b8a6,#6366f1);">
                <span class="text-3xl shrink-0">🗂️</span>
                <span><span class="block text-base font-black">Karteikasten <span class="text-[10px] bg-white/20 rounded-full px-2 py-0.5 align-middle">NEU</span></span>
                <span id="kk-lernen-sub" class="block text-xs font-bold text-teal-100/80">1×1 und Vokabeln sicher auswendig lernen</span></span>
            </button>`);
        }
        dashEinbauen();
    }

    function zeige(id) { ["kk-home", "kk-play", "kk-ende"].forEach(function (x) { const el = document.getElementById(x); if (el) el.classList.toggle("hidden", x !== id); }); }

    function karteiOeffnen() {
        einbauen();
        if (!ich()) return showToast("Bitte zuerst deinen Spieler wählen!", "error");
        switchView("kartei");
        home();
    }

    function faecherHtml(z) {
        const farben = ["", "#f43f5e", "#f97316", "#eab308", "#22c55e", "#14b8a6"];
        const name = ["", "täglich", "2 Tage", "4 Tage", "8 Tage", "sitzt"];
        let h = "";
        for (let f = 1; f <= 5; f++) h += `<div class="kk-fach" style="border-color:${farben[f]}55"><span>Fach ${f}</span><b style="color:${farben[f]}">${z.faecher[f]}</b><span>${name[f]}</span></div>`;
        return h;
    }

    function home() {
        zeige("kk-home");
        const d = daten(), z = zaehlen();
        const box = document.getElementById("kk-heute");
        const p = ich();
        if (!d.decks.length) {
            box.innerHTML = `<div class="glass-card-glow p-5 text-center space-y-2"><div class="text-5xl">🗂️</div>
                <div class="text-lg font-black">Dein Karteikasten ist noch leer</div>
                <p class="text-sm text-gray-300">Füge unten einen Stapel hinzu, z. B. das Kleine 1×1 oder Vokabeln deiner Klasse. Jeden Tag kommen bis zu ${NEU_PRO_TAG} neue Karten dazu.</p></div>`;
        } else {
            const offen = z.faellig + z.neuHeute;
            box.innerHTML = offen
                ? `<div class="glass-card-glow p-5 space-y-3 text-center">
                    <div class="text-sm font-bold text-gray-300">Heute dran${p && p.karteiPflicht ? " · ⭐ Aufgabe von deinen Eltern" : ""}</div>
                    <div class="text-4xl font-black">${z.faellig} <span class="text-base text-gray-400">fällig</span> + ${z.neuHeute} <span class="text-base text-gray-400">neu</span></div>
                    <button onclick="karteiStart()" class="btn-primary w-full text-center" style="background:linear-gradient(140deg,#14b8a6,#6366f1);">▶ Jetzt lernen</button></div>`
                : `<div class="glass-card-glow p-5 text-center space-y-2"><div class="text-5xl">✅</div>
                    <div class="text-lg font-black">Für heute alles geschafft!</div>
                    <p class="text-sm text-gray-300">Morgen warten neue Karten auf dich.</p>
                    <button onclick="karteiStart(true)" class="btn-secondary w-full text-center text-sm">🔁 Trotzdem üben (Fach 1–2)</button></div>`;
        }
        document.getElementById("kk-faecher").innerHTML = faecherHtml(z);
        document.getElementById("kk-decks").innerHTML = d.decks.map(function (dk) {
            const i = deckInfo(dk), s = deckStand(null, dk), pr = s.n ? Math.round(s.sitzt / s.n * 100) : 0;
            return `<div class="glass-card p-3 flex items-center gap-3">
                <span class="text-2xl">${i.icon}</span>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-black truncate">${e(i.titel)}</div>
                  <div class="text-[11px] text-gray-400">${s.drin}/${s.n} Karten im Kasten · ${s.sitzt} sitzen${s.faellig ? " · " + s.faellig + " fällig" : ""}</div>
                  <div class="kr-bar mt-1"><div style="width:${pr}%"></div></div>
                </div>
                <button class="btn-secondary text-xs py-1.5 px-2" title="Stapel entfernen" onclick="karteiDeckWeg('${e(dk)}')">✕</button>
            </div>`;
        }).join("");
        // Vokabel-Auswahl
        const kl = document.getElementById("kk-vok-kl");
        if (kl && !kl.options.length) {
            let h = ""; for (let k = 1; k <= 10; k++) if (vokSet(k)) h += `<option value="${k}">Kl. ${k}</option>`;
            kl.innerHTML = h;
            const g = Number(p && (typeof playerGrade === "function" ? playerGrade(p) : p.grade)) || 5;
            if (vokSet(Math.min(10, Math.max(1, g)))) kl.value = String(Math.min(10, Math.max(1, g)));
            karteiThemen();
        }
    }
    function karteiThemen() {
        const k = (document.getElementById("kk-vok-kl") || {}).value, set = vokSet(k), sel = document.getElementById("kk-vok-th");
        if (!sel) return;
        let h = `<option value="">Alle Themen (${set ? set.words.length : 0})</option>`;
        if (set && set.themen) Object.keys(set.themen).forEach(function (t) {
            const n = set.words.filter(function (w) { return w.thema === t; }).length;
            h += `<option value="${t}">${e(set.themen[t])} (${n})</option>`;
        });
        sel.innerHTML = h;
    }
    function karteiDeckAdd(id) {
        const d = daten();
        if (d.decks.indexOf(id) !== -1) return showToast("Dieser Stapel ist schon in deinem Kasten.", "info");
        // Ein ganzer Klassen-Stapel ersetzt einzelne Themen-Stapel derselben Klasse (und umgekehrt)
        const m = String(id).match(/^vok:(\d+)(?::.+)?$/);
        if (m && d.decks.indexOf("vok:" + m[1]) !== -1) return showToast("Die ganze Klasse ist schon im Kasten.", "info");
        if (m && id === "vok:" + m[1]) d.decks = d.decks.filter(function (x) { return x.indexOf("vok:" + m[1] + ":") !== 0; });
        d.decks.push(id);
        speichern(); sfx("tap");
        showToast("🗂️ " + deckInfo(id).titel + " ist im Kasten!", "success");
        home(); hubKarte();
    }
    function karteiDeckAddVok() {
        const k = document.getElementById("kk-vok-kl").value, t = document.getElementById("kk-vok-th").value;
        karteiDeckAdd("vok:" + k + (t ? ":" + t : ""));
    }
    async function karteiDeckWeg(id) {
        const ok = (typeof appConfirm === "function")
            ? await appConfirm("Stapel „" + deckInfo(id).titel + "“ aus dem Kasten nehmen? Der Lernstand bleibt gespeichert, falls du ihn wieder hinzufügst.", { titel: "Stapel entfernen", icon: "🗂️", okText: "Entfernen", abbrechenText: "Behalten" })
            : true;
        if (!ok) return;
        const d = daten(); d.decks = d.decks.filter(function (x) { return x !== id; });
        speichern(); home(); hubKarte();
    }

    // ---------------- Lernen ----------------
    let sp = null;
    function karteiStart(extra) {
        const d = daten(), t = heute();
        const alle = {}; d.decks.forEach(function (dk) { deckKarten(dk).forEach(function (k) { alle[k] = true; }); });
        let faellig = Object.keys(alle).filter(function (k) { return d.k[k] && (extra ? d.k[k][0] <= 2 : d.k[k][1] <= t); });
        let neu = [];
        if (!extra) {
            const frei = Math.max(0, NEU_PRO_TAG - (d.tag.neu || 0));
            // neue Karten der Reihe nach (1×1 reihenweise, Vokabeln in Listenreihenfolge)
            // gleichmäßig aus allen Stapeln (1×1 reihenweise, Vokabeln in Listenreihenfolge)
            const proDeck = d.decks.map(function (dk) { return deckKarten(dk).filter(function (k) { return !d.k[k]; }); });
            const schon = {};
            for (let r = 0; neu.length < frei && proDeck.some(function (l) { return l.length > r; }); r++) {
                proDeck.forEach(function (l) { const k = l[r]; if (k && !schon[k] && neu.length < frei) { schon[k] = true; neu.push(k); } });
            }
        }
        faellig = mischen(faellig).sort(function (a, b) { return d.k[a][0] - d.k[b][0]; });
        const q = faellig.concat(mischen(neu)).filter(function (k) { return karte(k); });
        if (!q.length) return showToast("Gerade ist nichts fällig. 🎉", "info");
        sp = { q: q, i: 0, ok: 0, falsch: 0, nochmal: {}, neu: {}, extra: !!extra, aufstieg: 0 };
        neu.forEach(function (k) { sp.neu[k] = true; });
        zeige("kk-play");
        zeigeKarte();
    }
    function zeigeKarte() {
        if (!sp) return;
        if (sp.i >= sp.q.length) return fertig();
        const key = sp.q[sp.i], k = karte(key), d = daten(), v = d.k[key];
        sp.key = key; sp.k = k; sp.eingabe = ""; sp.gezeigt = false; sp.sperre = false;
        document.getElementById("kk-info").innerText = (sp.i + 1) + " / " + sp.q.length;
        document.getElementById("kk-fachinfo").innerText = sp.neu[key] && !v ? "✨ neue Karte" : "Fach " + (v ? v[0] : 1);
        document.getElementById("kk-bar").style.width = (sp.i / sp.q.length * 100) + "%";
        const kb = document.getElementById("kk-karte"), ak = document.getElementById("kk-aktion");
        if (k.art === "zahl") {
            kb.innerHTML = `<div class="kk-frage">${e(k.frage)} =</div><div id="kk-input" class="kr-input" style="min-width:160px">&nbsp;</div><div id="kk-fb" class="text-sm font-bold" style="min-height:20px"></div>`;
            ak.innerHTML = `<div class="kr-pad">
              <button onclick="karteiTaste('7')">7</button><button onclick="karteiTaste('8')">8</button><button onclick="karteiTaste('9')">9</button><button onclick="karteiTaste('del')">⌫</button>
              <button onclick="karteiTaste('4')">4</button><button onclick="karteiTaste('5')">5</button><button onclick="karteiTaste('6')">6</button><button class="kr-ok" onclick="karteiTaste('ok')">OK</button>
              <button onclick="karteiTaste('1')">1</button><button onclick="karteiTaste('2')">2</button><button onclick="karteiTaste('3')">3</button>
              <span></span><button onclick="karteiTaste('0')">0</button><button onclick="karteiTaste('skip')" style="font-size:13px">weiß nicht</button></div>`;
        } else {
            kb.innerHTML = `<div class="text-[11px] font-black text-gray-400 uppercase tracking-wider">Was heißt …</div><div class="kk-frage">${e(k.frage)}</div><div id="kk-rueck"></div>`;
            ak.innerHTML = `<button onclick="karteiUmdrehen()" class="btn-primary w-full text-center" style="background:linear-gradient(140deg,#14b8a6,#6366f1);">🔄 Umdrehen</button>
                <p class="text-[11px] text-gray-500 text-center mt-2">Sag die Antwort erst laut oder im Kopf – dann umdrehen.</p>`;
        }
    }
    function karteiUmdrehen() {
        if (!sp || sp.gezeigt) return;
        sp.gezeigt = true;
        const k = sp.k;
        document.getElementById("kk-rueck").innerHTML = `<div class="kk-antwort">${e(k.antwort)}</div>`
            + (k.formen ? `<div class="text-sm font-black text-amber-300">${e(k.formen)}</div>` : "")
            + (k.satz ? `<div class="text-sm italic text-gray-300">„${e(k.satz)}“</div>` : "");
        document.getElementById("kk-aktion").innerHTML = `<div class="grid grid-cols-2 gap-2">
            <button onclick="karteiBewerten(false)" class="btn-secondary w-full text-center py-3" style="border-color:rgba(244,63,94,.5)">❌ Nicht gewusst</button>
            <button onclick="karteiBewerten(true)" class="btn-primary w-full text-center py-3" style="background:linear-gradient(140deg,#10b981,#059669);">✅ Gewusst</button></div>`;
    }
    function karteiTaste(t) {
        if (!sp || sp.sperre || sp.k.art !== "zahl") return;
        const inp = document.getElementById("kk-input");
        if (t === "del") sp.eingabe = sp.eingabe.slice(0, -1);
        else if (t === "skip") return pruefeZahl(true);
        else if (t === "ok") return pruefeZahl(false);
        else if (sp.eingabe.length < 4) sp.eingabe += t;
        inp.innerText = sp.eingabe || " ";
        if (sp.eingabe && Number(sp.eingabe) === sp.k.l) pruefeZahl(false);
    }
    function pruefeZahl(skip) {
        if (!skip && sp.eingabe === "") return;
        const ok = !skip && Number(sp.eingabe) === sp.k.l;
        sp.sperre = true;
        const inp = document.getElementById("kk-input"), fb = document.getElementById("kk-fb");
        inp.className = "kr-input " + (ok ? "ok" : "falsch");
        if (!ok) { inp.innerText = sp.k.l; fb.innerText = sp.k.frage + " = " + sp.k.l; }
        bewerten(ok, ok ? 450 : 1600);
    }
    function karteiBewerten(ok) { if (!sp || sp.sperre) return; sp.sperre = true; bewerten(ok, 150); }
    function bewerten(ok, warte) {
        const d = daten(), key = sp.key, t = heute();
        const wiederholung = !!sp.nochmal[key];
        if (!wiederholung) {
            const alt = d.k[key];
            if (!alt) d.tag.neu = (d.tag.neu || 0) + 1;
            const fach = alt ? alt[0] : 1;
            if (ok) {
                const nf = Math.min(5, Math.max(1, fach + 1));
                if (!sp.extra) { d.k[key] = [nf, t + ABSTAND[nf] * (fach >= 5 ? 2 : 1)]; if (nf > fach) sp.aufstieg++; }
                else if (!alt) d.k[key] = [1, t + 1];
            } else {
                d.k[key] = [1, t + 1];
            }
            d.tag.n = (d.tag.n || 0) + 1;
        }
        if (ok) {
            sp.ok++; sfx("correct");
            if (!wiederholung && (d.tag.xp || 0) < XP_PRO_TAG) { d.tag.xp = (d.tag.xp || 0) + 1; if (typeof addXP === "function") addXP(1); }
        } else {
            sp.falsch++; sfx("wrong");
            if (!wiederholung) { sp.nochmal[key] = true; sp.q.push(key); }   // am Ende der Runde noch einmal
        }
        if (sp.i % 8 === 7) speichern();
        setTimeout(function () { if (!sp) return; sp.i++; zeigeKarte(); }, warte);
    }
    function fertig() {
        const s = sp; sp = null;
        const d = daten(), z = zaehlen();
        if (!s.extra && z.faellig === 0) d.tag.fertig = true;
        speichern();
        zeige("kk-ende");
        if (typeof confetti === "function" && s.ok >= 5) { try { confetti(); } catch (x) { } }
        sfx("win");
        document.getElementById("kk-ende").innerHTML = `
            <div class="glass-card-glow p-6 text-center space-y-3">
              <div class="text-6xl">${s.falsch ? "💪" : "🏆"}</div>
              <h2 class="text-2xl font-black">${z.faellig ? "Runde geschafft!" : "Für heute fertig!"}</h2>
              <div class="text-sm text-gray-300">${s.ok} richtig · ${s.falsch} zum Wiederholen${s.aufstieg ? " · " + s.aufstieg + " Karten ein Fach weiter" : ""}</div>
              <div class="flex gap-2">${faecherHtml(z)}</div>
            </div>
            <button onclick="karteiOeffnen()" class="btn-primary w-full text-center">⬅ Zum Karteikasten</button>`;
        hubKarte();
    }
    function karteiBeenden() { if (sp) { sp = null; speichern(); } home(); hubKarte(); }

    // ---------------- Startseite (Aufgaben-Karte) ----------------
    function hubKarte() {
        const p = ich(); if (!p) return;
        const ziel = document.getElementById("pending-lesson-card");
        let box = document.getElementById("kartei-heute-card");
        if (!box && ziel) { box = document.createElement("div"); box.id = "kartei-heute-card"; ziel.insertAdjacentElement("afterend", box); }
        if (!box) return;
        const d = daten(p), z = zaehlen(p), offen = d.decks.length ? z.faellig + z.neuHeute : 0;
        const sub = document.getElementById("kk-lernen-sub");
        if (sub) sub.innerText = offen ? "Heute " + offen + " Karten dran" : "1×1 und Vokabeln sicher auswendig lernen";
        if (!offen && p.karteiPflicht && d.decks.length) {
            box.innerHTML = `<div class="glass-card p-3 text-sm font-bold text-emerald-300 flex items-center gap-2"><span class="text-xl">✅</span> Karteikasten für heute erledigt</div>`;
            return;
        }
        if (!offen && !(p.karteiPflicht && !d.decks.length)) { box.innerHTML = ""; return; }
        const pflicht = !!p.karteiPflicht;
        box.innerHTML = `<div class="glass-card-glow p-4 text-white flex items-center gap-3" style="background:linear-gradient(135deg,rgba(20,184,166,.2),rgba(99,102,241,.12));border-color:rgba(20,184,166,.3)">
            <span class="text-3xl">🗂️</span>
            <div class="flex-1"><div class="font-black">${pflicht ? "⭐ " : ""}Karteikasten: ${offen ? offen + " Karten heute" : "noch leer"}</div>
            <div class="text-[11px] opacity-80">${pflicht ? "Tägliche Aufgabe von deinen Eltern" : "Ein paar Minuten am Tag reichen"}</div></div>
            <button onclick="karteiOeffnen()" class="btn-primary text-sm py-2 px-3" style="background:linear-gradient(140deg,#14b8a6,#6366f1);">Los</button></div>`;
    }

    // ---------------- Eltern-Dashboard ----------------
    function dashEinbauen() {
        if (document.getElementById("dash-kartei-card")) return;
        const vor = document.getElementById("dash-kopf-card") || ((document.getElementById("dash-kurszuw-body") || {}).closest ? document.getElementById("dash-kurszuw-body").closest(".glass-card") : null);
        if (!vor) return;
        vor.insertAdjacentHTML("afterend", `
        <div id="dash-kartei-card" class="glass-card overflow-hidden">
            <button type="button" onclick="karteiDashToggle()" class="w-full px-4 py-4 flex items-center justify-between hover:bg-white/5 transition">
                <span class="text-base font-black text-teal-300">🗂️ Karteikasten</span>
                <span id="dash-kartei-arrow" class="text-gray-400 transition-transform">▼</span>
            </button>
            <div id="dash-kartei-body" class="hidden px-4 pb-4 space-y-2"></div>
        </div>`);
    }
    function dashKey() { return (document.getElementById("dash-test-profile") || {}).value || (typeof activePlayerKey !== "undefined" ? activePlayerKey : ""); }
    function karteiDashToggle() {
        const b = document.getElementById("dash-kartei-body"), a = document.getElementById("dash-kartei-arrow");
        const auf = b.classList.contains("hidden");
        b.classList.toggle("hidden", !auf);
        if (a) a.style.transform = auf ? "rotate(180deg)" : "";
        if (auf) karteiDashRender();
    }
    function karteiDashRender() {
        const b = document.getElementById("dash-kartei-body"); if (!b || b.classList.contains("hidden")) return;
        const key = dashKey(), p = (typeof ALL_PROFILES !== "undefined") ? ALL_PROFILES[key] : null;
        if (!p) { b.innerHTML = `<p class="text-xs text-gray-400">Kein Kind ausgewählt.</p>`; return; }
        const d = daten(p), z = zaehlen(p);
        const decks = d.decks.map(function (dk) { const i = deckInfo(dk), s = deckStand(p, dk); return `<div class="flex justify-between text-xs"><span>${i.icon} ${e(i.titel)}</span><span class="text-gray-400">${s.sitzt}/${s.n} sitzen</span></div>`; }).join("");
        b.innerHTML = `<p class="text-[11px] text-gray-500">Lernkartei mit 5 Fächern für ${e(p.name || "das Kind")}. Heute gelernt: ${d.tag.n || 0} Karten.</p>
            <div class="flex gap-2">${faecherHtml(z)}</div>
            <div class="space-y-1">${decks || '<p class="text-xs text-gray-400">Noch keine Stapel. Das Kind fügt sie unter Lernen → Karteikasten hinzu – oder hier:</p>'}</div>
            <div class="grid grid-cols-2 gap-2">
              <button class="btn-secondary text-xs py-2" onclick="karteiDashDeck('1x1')">+ Kleines 1×1</button>
              <button class="btn-secondary text-xs py-2" onclick="karteiDashDeck('vok')">+ Vokabeln seiner Klasse</button>
            </div>
            <label class="flex items-center gap-2 text-sm font-bold cursor-pointer pt-1">
              <input type="checkbox" class="w-4 h-4 accent-teal-500" ${p.karteiPflicht ? "checked" : ""} onchange="karteiDashPflicht(this.checked)">
              ⭐ Tägliche Aufgabe: Karteikasten jeden Tag erledigen
            </label>`;
    }
    function profilPatch(key, patch) {
        if (typeof currentParentUser === "undefined" || !currentParentUser) return;
        db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(key).set(patch, { merge: true })
            .catch(function (er) { if (typeof handleError === "function") handleError("kartei", er, "Konnte nicht gespeichert werden."); });
    }
    function karteiDashPflicht(an) {
        const key = dashKey(), p = ALL_PROFILES[key]; if (!p) return;
        p.karteiPflicht = !!an;
        if (ich() && activePlayerKey === key) ich().karteiPflicht = !!an;
        profilPatch(key, { karteiPflicht: !!an });
        showToast(an ? "Karteikasten ist jetzt tägliche Aufgabe." : "Tägliche Aufgabe aufgehoben.", "success");
        hubKarte();
    }
    function karteiDashDeck(art) {
        const key = dashKey(), p = ALL_PROFILES[key]; if (!p) return;
        const d = daten(p);
        let id = "1x1";
        if (art === "vok") {
            const g = Number(typeof playerGrade === "function" ? playerGrade(p) : p.grade) || 5;
            id = "vok:" + Math.min(10, Math.max(1, g));
            if (!vokSet(id.slice(4))) return showToast("Für diese Klasse gibt es keine Vokabeln.", "error");
        }
        if (d.decks.indexOf(id) === -1) d.decks.push(id);
        profilPatch(key, { kartei: { decks: d.decks } });
        showToast("🗂️ " + deckInfo(id).titel + " hinzugefügt.", "success");
        karteiDashRender();
    }

    // Startseiten-Karte immer mit der Aufgaben-Karte aktualisieren
    function haken() {
        if (typeof window.renderAufgabenKarte === "function" && !window.renderAufgabenKarte._kk) {
            const r0 = window.renderAufgabenKarte;
            window.renderAufgabenKarte = function () { const x = r0.apply(this, arguments); try { hubKarte(); } catch (er) { } return x; };
            window.renderAufgabenKarte._kk = true;
        }
        if (typeof window.kopfDashRender === "function" && !window.kopfDashRender._kk) {
            const d0 = window.kopfDashRender;
            window.kopfDashRender = function () { const x = d0.apply(this, arguments); try { dashEinbauen(); karteiDashRender(); } catch (er) { } return x; };
            window.kopfDashRender._kk = true;
        }
    }
    function start() { einbauen(); haken(); }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
    else start();

    Object.assign(window, {
        karteiOeffnen: karteiOeffnen, karteiStart: karteiStart, karteiTaste: karteiTaste, karteiUmdrehen: karteiUmdrehen,
        karteiBewerten: karteiBewerten, karteiBeenden: karteiBeenden, karteiDeckAdd: karteiDeckAdd, karteiDeckAddVok: karteiDeckAddVok,
        karteiDeckWeg: karteiDeckWeg, karteiThemen: karteiThemen, karteiDashToggle: karteiDashToggle, karteiDashRender: karteiDashRender,
        karteiDashPflicht: karteiDashPflicht, karteiDashDeck: karteiDashDeck, karteiHubKarte: hubKarte
    });
})();
