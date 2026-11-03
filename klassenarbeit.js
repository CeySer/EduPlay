// ============================================================
//  KLASSENARBEIT VORBEREITEN
//  Kind wählt Fach (Englisch/Mathe/Deutsch), Klasse und Stoff
//  (Vokabel-Themen und/oder Wissens-Themen). Üben füllt den
//  Bereit-Balken; ab 80 % gibt es die Probearbeit mit Note 1–6.
//  Ein Eintrag „sitzt“, wenn er 2× hintereinander richtig war
//  (Vokabeln: 1× Auswahl, 1× selbst geschrieben).
//  Daten im Profil: arbeiten [{id, fach, kl, name, vok[], top[],
//  items[], st{key: 0..3}, versuche[{d, note, p}], lohnTag}]
// ============================================================
(function () {
    "use strict";

    const BEREIT_AB = 80;
    const RUNDE_N = 15;
    const PROBE_N = 30;
    const PRO_THEMA = 20;           // max. Fragen je Wissens-Thema
    const LOHN = [0, 30, 20, 10, 5, 0, 0];
    const FAECHER = {
        englisch: { name: "Englisch", icon: "🇬🇧", farbe: "#3b82f6" },
        mathe: { name: "Mathe", icon: "🔢", farbe: "#f59e0b" },
        deutsch: { name: "Deutsch", icon: "📖", farbe: "#ef4444" }
    };

    function e(s) { return (typeof esc === "function") ? esc(s) : String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
    function sfx(n) { try { if (typeof SFX !== "undefined" && SFX[n]) SFX[n](); } catch (x) { } }
    function mischen(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
    function ich() { return (typeof currentPlayer !== "undefined") ? currentPlayer : null; }
    function speichern() { if (typeof savePlayerProgress === "function") savePlayerProgress(); }
    function heuteStr() { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
    function el(id) { return document.getElementById(id); }
    function toast(t, art) { if (typeof showToast === "function") showToast(t, art || "info"); }

    function liste(p) {
        p = p || ich();
        if (!p) return [];
        if (!Array.isArray(p.arbeiten)) p.arbeiten = [];
        return p.arbeiten;
    }
    function finde(id, p) { return liste(p).find(function (a) { return a.id === id; }); }

    // ---------------- Daten-Quellen ----------------
    function vokSet(kl) { return (typeof VOCABULARY_DATABASE !== "undefined" && VOCABULARY_DATABASE.en) ? VOCABULARY_DATABASE.en["k" + kl] : null; }
    let _vok = null;
    function vokWort(id) {
        if (!_vok) {
            _vok = {};
            if (typeof VOCABULARY_DATABASE !== "undefined" && VOCABULARY_DATABASE.en)
                Object.keys(VOCABULARY_DATABASE.en).forEach(function (k) { (VOCABULARY_DATABASE.en[k].words || []).forEach(function (w) { _vok[w.id] = w; }); });
        }
        return _vok[id];
    }
    function canon(t) { return (typeof canonTopic === "function") ? canonTopic(t) : String(t || "").toLowerCase(); }
    function topicName(t) {
        if (typeof TOPIC_LABELS !== "undefined" && TOPIC_LABELS[t]) return TOPIC_LABELS[t];
        let n = t.charAt(0).toUpperCase() + t.slice(1).replace(/_/g, " ");
        if (/ae|oe|ue/.test(n) && !/[a-z]+ (verbs|words|tense)/i.test(n)) n = n.replace(/ae/g, "ä").replace(/oe/g, "ö").replace(/ue/g, "ü");
        return n;
    }
    function sortName(x) { return x.replace(/^[^A-Za-zÄÖÜäöü]+/, "").toLowerCase(); }
    // Lektionsfragen selbst einsammeln (nicht aus einem evtl. zu früh gefüllten Zwischenspeicher)
    function lektionsFragen() {
        const out = [];
        if (typeof LEKTIONEN === "undefined" || !Array.isArray(LEKTIONEN)) return out;
        LEKTIONEN.forEach(function (l) {
            const u = l.uebung || {};
            [].concat(Array.isArray(u) ? u : [].concat(u.leicht || [], u.mittel || [], u.schwer || []), l.test || []).forEach(function (q) {
                if (q && q.id && q.question && Array.isArray(q.answers) && q.answers.length >= 2) out.push(q);
            });
        });
        return out;
    }
    function fragenFuer(kl, fach) {
        const kat = "k" + kl + "_" + fach;
        const db = (typeof QUESTIONS_DATABASE !== "undefined" ? QUESTIONS_DATABASE : []).filter(function (q) { return q && q.id && q.category === kat && q.topic; });
        const lek = lektionsFragen().filter(function (q) { return Number(q.grade) === Number(kl) && String(q.subject) === fach && q.topic; });
        const seen = {}, out = [];
        db.concat(lek).forEach(function (q) { if (seen[q.id]) return; seen[q.id] = 1; out.push(q); });
        return out;
    }
    let _q = null;
    function frage(id) {
        if (!_q) {
            _q = {};
            (typeof QUESTIONS_DATABASE !== "undefined" ? QUESTIONS_DATABASE : []).forEach(function (q) { if (q && q.id) _q[q.id] = q; });
            lektionsFragen().forEach(function (q) { if (!_q[q.id]) _q[q.id] = q; });
        }
        return _q[id];
    }
    function laden(fach, kl) {
        _q = null; _vok = null;
        const ps = [];
        if (typeof ladeLektionen === "function") ps.push(ladeLektionen().catch(function () { }));
        if (typeof ladeFragenFuer === "function") ps.push(Promise.resolve(ladeFragenFuer("k" + kl + "_" + fach)).catch(function () { }));
        return Promise.all(ps).then(function () { _q = null; });
    }
    function themenAngebot(fach, kl) {
        const vok = [], top = [];
        if (fach === "englisch") {
            const ls = listen(kl);
            Object.keys(ls).forEach(function (t) { vok.push({ id: "liste:" + t, label: ls[t].label, n: ls[t].ids.length }); });
            const s = vokSet(kl);
            if (s && s.themen) Object.keys(s.themen).forEach(function (t) {
                const n = s.words.filter(function (w) { return w.thema === t; }).length;
                if (n) vok.push({ id: t, label: s.themen[t], n: n });
            });
        }
        const z = {};
        fragenFuer(kl, fach).forEach(function (q) { const t = canon(q.topic); if (t) z[t] = (z[t] || 0) + 1; });
        Object.keys(z).filter(function (t) { return z[t] >= 5; }).sort(function (a, b) { return sortName(topicName(a)).localeCompare(sortName(topicName(b)), "de"); })
            .forEach(function (t) { top.push({ id: t, label: topicName(t), n: z[t] }); });
        return { vok: vok, top: top };
    }

    // ---------------- Stand ----------------
    function bereit(a) {
        if (!a || !a.items || !a.items.length) return 0;
        let s = 0;
        a.items.forEach(function (k) { s += Math.min(2, (a.st && a.st[k]) || 0); });
        return Math.round(s / (2 * a.items.length) * 100);
    }
    function titel(a) {
        if (a.name) return a.name;
        const f = FAECHER[a.fach] || {};
        return (f.name || a.fach) + " Kl. " + a.kl;
    }
    function listen(kl) {
        return (typeof VOCABULARY_LISTEN !== "undefined" && VOCABULARY_LISTEN.en && VOCABULARY_LISTEN.en["k" + kl]) || {};
    }
    function stoffText(a) {
        const s = vokSet(a.kl), teile = [], ls = listen(a.kl);
        (a.vok || []).forEach(function (t) {
            if (t.indexOf("liste:") === 0) { const l = ls[t.slice(6)]; teile.push(l ? l.label.replace(/^\S+\s/, "") : t); }
            else teile.push((s && s.themen && s.themen[t]) || t);
        });
        (a.top || []).forEach(function (t) { teile.push(topicName(t)); });
        return teile.join(" · ");
    }
    function letzteNote(a) { const v = a.versuche || []; return v.length ? v[v.length - 1] : null; }

    // ---------------- Antworten prüfen ----------------
    function norm(s) {
        return String(s || "").toLowerCase().normalize("NFC")
            .replace(/[’`´]/g, "'").replace(/\(.*?\)/g, " ")
            .replace(/[.,!?;:"“”„]/g, " ").replace(/^\s*(to|a|an|the)\s+/, "")
            .replace(/\s+/g, " ").trim();
    }
    function abstand(a, b) {
        if (Math.abs(a.length - b.length) > 1) return 2;
        const d = []; for (let i = 0; i <= a.length; i++) { d[i] = [i]; }
        for (let j = 1; j <= b.length; j++) d[0][j] = j;
        for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        return d[a.length][b.length];
    }
    // 1 = richtig, 0.5 = kleiner Schreibfehler, 0 = falsch
    function pruefeText(eingabe, w) {
        const ein = norm(eingabe);
        if (!ein) return 0;
        const ok = [w.foreign].concat(w.alt || []).map(norm);
        if (ok.indexOf(ein) !== -1) return 1;
        if (ok.some(function (o) { return o.replace(/'/g, "") === ein.replace(/'/g, ""); })) return 1;
        if (ok.some(function (o) { return o.length >= 5 && abstand(o, ein) === 1; })) return 0.5;
        return 0;
    }

    // ---------------- Aufgaben bauen ----------------
    function vokAblenker(a, w, feld) {
        const pool = [];
        (a.items || []).forEach(function (k) { if (k.indexOf("v:") === 0) { const x = vokWort(k.slice(2)); if (x && x.id !== w.id) pool.push(x); } });
        if (pool.length < 6) { const s = vokSet(a.kl); if (s) s.words.forEach(function (x) { if (x.id !== w.id) pool.push(x); }); }
        const gesehen = {}; gesehen[norm(w[feld])] = 1;
        const out = [];
        mischen(pool).forEach(function (x) { const n = norm(x[feld]); if (out.length < 3 && !gesehen[n]) { gesehen[n] = 1; out.push(x[feld]); } });
        return out;
    }
    function mc(frageText, richtig, falsche, extra) {
        const ant = mischen([richtig].concat(falsche));
        return Object.assign({ typ: "mc", frage: frageText, antworten: ant, richtig: ant.indexOf(richtig) }, extra || {});
    }
    function lueckenSatz(w) {
        if (!w.satz || w.foreign.length < 2) return null;
        const re = new RegExp("\\b" + w.foreign.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[.?!]$/, "") + "\\b", "i");
        if (!re.test(w.satz) || /^(I|a)$/i.test(w.foreign)) return null;
        return w.satz.replace(re, "_____");
    }
    function aufgabe(a, key, modus) {
        if (key.indexOf("v:") === 0) {
            const w = vokWort(key.slice(2)); if (!w) return null;
            const st = (a.st && a.st[key]) || 0;
            let art;
            if (modus === "probe") { const r = Math.random(); art = r < 0.4 ? "schreiben" : (r < 0.7 && lueckenSatz(w) ? "luecke" : "en_de"); }
            else art = st >= 1 ? "schreiben" : (Math.random() < 0.5 ? "en_de" : "de_en");
            if (art === "luecke") return { typ: "text", key: key, w: w, frage: "Ergänze den Satz (" + w.de + "):", satz: lueckenSatz(w) };
            if (art === "schreiben") return { typ: "text", key: key, w: w, frage: "Schreib auf Englisch:", gross: w.de };
            if (art === "de_en") return mc("Was heißt das auf Englisch?", w.foreign, vokAblenker(a, w, "foreign"), { key: key, gross: w.de, w: w });
            return mc("Was heißt das auf Deutsch?", w.de, vokAblenker(a, w, "de"), { key: key, gross: w.foreign, w: w });
        }
        const q = frage(key.slice(2)); if (!q) return null;
        const r = q.answers[q.correct];
        const ant = mischen(q.answers.slice());
        return { typ: "mc", key: key, frage: q.question, antworten: ant, richtig: ant.indexOf(r), erkl: q.explanation || "" };
    }
    function loesungText(t) {
        if (t.typ === "text") return t.w.foreign;
        return t.antworten[t.richtig];
    }

    // ---------------- Ansicht ----------------
    const CSS = `
    .ka-bar{height:12px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}
    .ka-bar>div{height:100%;border-radius:999px;background:linear-gradient(90deg,#f59e0b,#22c55e);transition:width .5s}
    .ka-chip{padding:8px 14px;border-radius:999px;font-weight:800;font-size:13px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:inherit}
    .ka-chip.on{background:rgba(99,102,241,.35);border-color:#818cf8}
    .ka-th{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);cursor:pointer}
    .ka-th input{width:18px;height:18px;accent-color:#6366f1}
    .ka-ant{width:100%;text-align:left;padding:14px 16px;border-radius:16px;font-weight:800;background:rgba(255,255,255,.07);border:2px solid rgba(255,255,255,.1);color:inherit}
    .ka-ant.ok{background:rgba(16,185,129,.25);border-color:#10b981}
    .ka-ant.nein{background:rgba(244,63,94,.22);border-color:#f43f5e}
    .ka-ant.wahl{background:rgba(99,102,241,.3);border-color:#818cf8}
    .ka-gross{font-size:30px;font-weight:900;line-height:1.2;text-align:center}
    .ka-note{font-size:72px;font-weight:900;line-height:1}
    `;
    const HTML = `
    <div id="view-arbeit" class="view hidden space-y-4">
      <div id="ka-home" class="space-y-4"></div>
      <div id="ka-neu" class="hidden space-y-4"></div>
      <div id="ka-play" class="hidden space-y-3">
        <div class="flex items-center justify-between gap-2">
          <button class="btn-secondary text-sm py-2 px-3" onclick="arbeitAbbrechen()">Beenden</button>
          <span id="ka-info" class="text-sm font-black text-amber-300"></span>
          <span id="ka-zeit" class="text-xs font-black text-gray-400"></span>
        </div>
        <div class="kr-bar ka-bar"><div id="ka-fort" style="width:0%"></div></div>
        <div id="ka-karte" class="glass-card p-5 space-y-4"></div>
      </div>
      <div id="ka-ende" class="hidden space-y-4"></div>
    </div>`;

    function einbauen() {
        if (el("view-arbeit")) return;
        const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
        const ref = el("view-lernen") || document.querySelector(".view");
        if (ref) ref.insertAdjacentHTML("afterend", HTML);
        knopf();
        dashEinbauen();
    }
    function knopf() {
        if (el("ka-lernen-btn")) return;
        const vor = el("lernen-gruppe-schule") || el("kk-lernen-btn") || document.querySelector("#view-lernen button[onclick=\"kopfOeffnen()\"]");
        if (!vor) return;
        vor.insertAdjacentHTML("afterend", `<button id="ka-lernen-btn" onclick="arbeitOeffnen()"
            class="w-full flex items-center gap-4 p-5 rounded-2xl text-white text-left shadow-lg transition hover:scale-[1.02]"
            style="background:linear-gradient(140deg,#f43f5e,#f59e0b);">
            <span class="text-3xl shrink-0">📝</span>
            <span><span class="block text-base font-black">Klassenarbeit</span>
            <span id="ka-lernen-sub" class="block text-xs font-bold text-amber-100/80">Stoff üben, bis du bereit bist – dann Probearbeit mit Note</span></span>
        </button>`);
    }
    function zeige(id) { ["ka-home", "ka-neu", "ka-play", "ka-ende"].forEach(function (x) { const n = el(x); if (n) n.classList.toggle("hidden", x !== id); }); }
    function kopf(titelText, zurueck) {
        return `<div class="flex items-center justify-between gap-2">
          <button class="btn-secondary text-sm py-2.5 px-4" onclick="${zurueck}">Zurück</button>
          <span class="text-sm font-bold text-gray-400">${titelText}</span><span style="width:64px"></span></div>`;
    }

    function arbeitOeffnen() {
        einbauen();
        if (!ich()) return toast("Bitte zuerst deinen Spieler wählen!", "error");
        stoppeUhr(); sp = null;
        switchView("arbeit");
        home();
    }

    function home() {
        zeige("ka-home");
        const l = liste();
        const karten = l.map(function (a) {
            const f = FAECHER[a.fach] || {}, b = bereit(a), ln = letzteNote(a), offen = b >= BEREIT_AB;
            return `<div class="glass-card p-4 space-y-3">
              <div class="flex items-start gap-3">
                <span class="text-3xl">${f.icon || "📝"}</span>
                <div class="flex-1 min-w-0">
                  <div class="font-black">${e(titel(a))}</div>
                  <div class="text-[11px] text-gray-400 truncate">${e(stoffText(a))}</div>
                </div>
                ${ln ? `<div class="text-center"><div class="text-[10px] text-gray-400 font-bold">Probe</div><div class="text-2xl font-black" style="color:${notenFarbe(ln.note)}">${ln.note}</div></div>` : ""}
              </div>
              <div>
                <div class="flex justify-between text-xs font-bold mb-1"><span>Bereit für die Arbeit</span><span>${b} %</span></div>
                <div class="ka-bar"><div style="width:${b}%"></div></div>
                <div class="text-[11px] text-gray-500 mt-1">${offen ? "✅ Du bist bereit – schreib die Probearbeit!" : "Ab " + BEREIT_AB + " % wird die Probearbeit frei."}</div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <button class="btn-primary text-sm py-2.5" onclick="arbeitUeben('${a.id}')">🎯 Üben</button>
                <button class="btn-secondary text-sm py-2.5" style="${offen ? "" : "opacity:.5"}" onclick="arbeitProbe('${a.id}')">${offen ? "📝" : "🔒"} Probearbeit</button>
              </div>
              <button class="text-[11px] text-gray-500 underline w-full" onclick="arbeitLoeschen('${a.id}')">Arbeit ist geschrieben – entfernen</button>
            </div>`;
        }).join("");
        el("ka-home").innerHTML = kopf("📝 Klassenarbeit", "switchView('lernen')") +
            (l.length ? "" : `<div class="glass-card-glow p-5 text-center space-y-2"><div class="text-5xl">📝</div>
                <div class="text-lg font-black">Bald eine Klassenarbeit?</div>
                <p class="text-sm text-gray-300">Wähle Fach und Stoff. Du übst, bis der Balken voll ist – dann schreibst du eine Probearbeit und bekommst eine Note wie in der Schule.</p></div>`) +
            karten +
            `<button class="btn-primary w-full text-center" onclick="arbeitNeu()">➕ Neue Arbeit vorbereiten</button>`;
    }
    function notenFarbe(n) { return ["", "#22c55e", "#84cc16", "#eab308", "#f97316", "#ef4444", "#dc2626"][n] || "#fff"; }

    // ---------------- Neue Arbeit ----------------
    let neu = null;
    function arbeitNeu() {
        const p = ich();
        let kl = Number(typeof playerGrade === "function" ? playerGrade(p) : p && p.grade) || 5;
        kl = Math.min(10, Math.max(1, kl));
        neu = { fach: "englisch", kl: kl, vok: {}, top: {} };
        zeige("ka-neu");
        neuZeichnen(true);
    }
    function neuZeichnen(laed) {
        const box = el("ka-neu");
        const fachChips = Object.keys(FAECHER).map(function (f) {
            return `<button class="ka-chip ${neu.fach === f ? "on" : ""}" onclick="arbeitFach('${f}')">${FAECHER[f].icon} ${FAECHER[f].name}</button>`;
        }).join("");
        let klOpt = ""; for (let k = 1; k <= 10; k++) klOpt += `<option value="${k}" ${k === neu.kl ? "selected" : ""}>Klasse ${k}</option>`;
        box.innerHTML = kopf("Neue Arbeit", "arbeitOeffnen()") + `
          <div class="glass-card p-4 space-y-3">
            <div class="text-sm font-black">1. Fach</div>
            <div class="flex flex-wrap gap-2">${fachChips}</div>
            <select class="input-modern text-sm" onchange="arbeitKlasse(this.value)">${klOpt}</select>
          </div>
          <div class="glass-card p-4 space-y-3">
            <div class="text-sm font-black">2. Was kommt dran?</div>
            <div id="ka-stoff" class="space-y-2"><p class="text-sm text-gray-400">⏳ Themen werden geladen …</p></div>
          </div>
          <div class="glass-card p-4 space-y-2">
            <div class="text-sm font-black">3. Name (freiwillig)</div>
            <input id="ka-name" class="input-modern text-sm" maxlength="40" placeholder="z. B. Englisch Unit 1">
          </div>
          <button class="btn-primary w-full text-center" onclick="arbeitAnlegen()">✅ Arbeit anlegen</button>`;
        if (laed) laden(neu.fach, neu.kl).then(stoffZeichnen);
        else stoffZeichnen();
    }
    function stoffZeichnen() {
        const box = el("ka-stoff"); if (!box || !neu) return;
        const ang = themenAngebot(neu.fach, neu.kl);
        const reihe = function (art, t) {
            const an = neu[art][t.id] ? "checked" : "";
            return `<label class="ka-th"><input type="checkbox" ${an} onchange="arbeitThema('${art}','${t.id}',this.checked)">
              <span class="flex-1 text-sm font-bold">${e(t.label)}</span><span class="text-[11px] text-gray-400">${t.n}</span></label>`;
        };
        let h = "";
        if (ang.vok.length) h += `<div class="text-xs font-bold text-indigo-300 pt-1">📒 Vokabeln</div>` + ang.vok.map(function (t) { return reihe("vok", t); }).join("");
        if (ang.top.length) h += `<div class="text-xs font-bold text-indigo-300 pt-2">${neu.fach === "englisch" ? "📚 Grammatik & Themen" : "📚 Themen"}</div>` + ang.top.map(function (t) { return reihe("top", t); }).join("");
        box.innerHTML = h || `<p class="text-sm text-gray-400">Für ${FAECHER[neu.fach].name} in Klasse ${neu.kl} gibt es noch keine Themen. Wähle eine andere Klasse oder ein anderes Fach.</p>`;
    }
    function arbeitFach(f) { neu.fach = f; neu.vok = {}; neu.top = {}; neuZeichnen(true); }
    function arbeitKlasse(k) { neu.kl = Number(k); neu.vok = {}; neu.top = {}; laden(neu.fach, neu.kl).then(stoffZeichnen); el("ka-stoff").innerHTML = '<p class="text-sm text-gray-400">⏳ Themen werden geladen …</p>'; }
    function arbeitThema(art, t, an) { if (an) neu[art][t] = 1; else delete neu[art][t]; }
    function arbeitAnlegen() {
        const vok = Object.keys(neu.vok), top = Object.keys(neu.top);
        if (!vok.length && !top.length) return toast("Bitte mindestens ein Thema ankreuzen.", "error");
        const items = [];
        const s = vokSet(neu.kl);
        if (s) s.words.forEach(function (w) { if (vok.indexOf(w.thema) !== -1) items.push("v:" + w.id); });
        const ls = listen(neu.kl);
        vok.forEach(function (t) {
            if (t.indexOf("liste:") !== 0 || !ls[t.slice(6)]) return;
            ls[t.slice(6)].ids.forEach(function (id) { if (vokWort(id) && items.indexOf("v:" + id) === -1) items.push("v:" + id); });
        });
        const alle = fragenFuer(neu.kl, neu.fach);
        top.forEach(function (t) {
            mischen(alle.filter(function (q) { return canon(q.topic) === t; })).slice(0, PRO_THEMA).forEach(function (q) { items.push("q:" + q.id); });
        });
        if (items.length < 5) return toast("Zu wenig Stoff – bitte mehr Themen ankreuzen.", "error");
        const a = {
            id: "a" + Date.now().toString(36), fach: neu.fach, kl: neu.kl,
            name: ((el("ka-name") || {}).value || "").trim().slice(0, 40),
            vok: vok, top: top, items: items, st: {}, versuche: [], erstellt: Date.now()
        };
        liste().push(a);
        speichern();
        neu = null;
        sfx("tap");
        toast("📝 Arbeit angelegt – " + items.length + " Aufgaben zum Üben.", "success");
        home();
    }
    function arbeitLoeschen(id) {
        const weg = function () {
            const p = ich(); p.arbeiten = liste().filter(function (a) { return a.id !== id; });
            speichern(); home(); hubKarte();
        };
        if (typeof appConfirm === "function") appConfirm("Diese Arbeit aus der Liste entfernen? Der Übungsstand geht dabei verloren.", { titel: "Arbeit entfernen?", icon: "📝", okText: "Entfernen", abbrechenText: "Behalten" }).then(function (ok) { if (ok) weg(); });
        else if (confirm("Arbeit entfernen?")) weg();
    }

    // ---------------- Üben & Probearbeit ----------------
    let sp = null, uhr = null;
    function stoppeUhr() { if (uhr) { clearInterval(uhr); uhr = null; } }
    function arbeitUeben(id) {
        const a = finde(id); if (!a) return;
        laden(a.fach, a.kl).then(function () {
            const st = a.st || {};
            const gruppe = function (f) { return mischen(a.items.filter(f)); };
            const reihe = gruppe(function (k) { return !st[k]; })
                .concat(gruppe(function (k) { return st[k] === 1; }))
                .concat(gruppe(function (k) { return st[k] >= 2; }));
            const keys = reihe.slice(0, RUNDE_N);
            const tasks = keys.map(function (k) { return aufgabe(a, k, "ueben"); }).filter(Boolean);
            if (!tasks.length) return toast("Die Aufgaben konnten nicht geladen werden. Bitte Internet prüfen.", "error");
            sp = { modus: "ueben", a: a, tasks: tasks, i: 0, ok: 0, start: Date.now(), vorher: bereit(a) };
            zeige("ka-play"); naechste();
        });
    }
    function arbeitProbe(id) {
        const a = finde(id); if (!a) return;
        if (bereit(a) < BEREIT_AB) return toast("🔒 Erst ab " + BEREIT_AB + " % bereit. Übe noch ein bisschen – du schaffst das!", "info");
        laden(a.fach, a.kl).then(function () {
            const keys = mischen(a.items).slice(0, PROBE_N);
            const tasks = keys.map(function (k) { return aufgabe(a, k, "probe"); }).filter(Boolean);
            if (tasks.length < 5) return toast("Die Aufgaben konnten nicht geladen werden. Bitte Internet prüfen.", "error");
            sp = { modus: "probe", a: a, tasks: tasks, i: 0, start: Date.now(), antworten: [] };
            zeige("ka-play");
            stoppeUhr();
            uhr = setInterval(zeitAnzeigen, 1000); zeitAnzeigen();
            naechste();
        });
    }
    function zeitAnzeigen() {
        const z = el("ka-zeit"); if (!z || !sp) return;
        if (sp.modus !== "probe") { z.innerText = ""; return; }
        const s = Math.floor((Date.now() - sp.start) / 1000);
        z.innerText = "⏱ " + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
    }
    function naechste() {
        if (!sp) return;
        if (sp.i >= sp.tasks.length) return sp.modus === "probe" ? probeEnde() : uebenEnde();
        const t = sp.tasks[sp.i];
        sp.sperre = false;
        el("ka-info").innerText = (sp.modus === "probe" ? "📝 Probearbeit · " : "🎯 Üben · ") + (sp.i + 1) + " / " + sp.tasks.length;
        el("ka-fort").style.width = (sp.i / sp.tasks.length * 100) + "%";
        zeitAnzeigen();
        let h = `<div class="text-sm font-bold text-gray-300" style="white-space:pre-line">${e(t.frage)}</div>`;
        if (t.gross) h += `<div class="ka-gross">${e(t.gross)}</div>`;
        if (t.satz) h += `<div class="text-lg font-bold text-center leading-snug">${e(t.satz)}</div>`;
        if (t.typ === "mc") {
            h += `<div class="space-y-2">` + t.antworten.map(function (x, i) { return `<button class="ka-ant" id="ka-a${i}" onclick="arbeitWahl(${i})">${e(x)}</button>`; }).join("") + `</div>`;
        } else {
            h += `<input id="ka-ein" class="input-modern text-xl font-bold text-center w-full" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Englisch eingeben …" onkeydown="if(event.key==='Enter')arbeitText()">
                  <button class="btn-primary w-full text-center" onclick="arbeitText()">Fertig ✔</button>`;
        }
        h += `<div id="ka-fb"></div>`;
        el("ka-karte").innerHTML = h;
        const inp = el("ka-ein"); if (inp) setTimeout(function () { try { inp.focus(); } catch (x) { } }, 50);
    }
    function arbeitWahl(i) {
        if (!sp || sp.sperre) return;
        const t = sp.tasks[sp.i];
        werte(t, i === t.richtig ? 1 : 0, i);
    }
    function arbeitText() {
        if (!sp || sp.sperre) return;
        const t = sp.tasks[sp.i], v = (el("ka-ein") || {}).value || "";
        if (!v.trim()) return toast("Bitte eine Antwort eingeben.", "info");
        werte(t, pruefeText(v, t.w), v);
    }
    function werte(t, punkte, eingabe) {
        sp.sperre = true;
        const a = sp.a; a.st = a.st || {};
        if (sp.modus === "probe") {
            sp.antworten.push({ t: t, p: punkte, ein: eingabe });
            if (t.typ === "mc") { const b = el("ka-a" + eingabe); if (b) b.classList.add("wahl"); }
            sp.i++;
            setTimeout(naechste, 250);
            return;
        }
        // Üben: sofort Rückmeldung
        const alt = a.st[t.key] || 0;
        if (punkte >= 1) { a.st[t.key] = Math.min(3, alt + 1); sp.ok++; sfx("correct"); }
        else { a.st[t.key] = 0; sfx("wrong"); }
        if (t.typ === "mc") {
            const r = el("ka-a" + t.richtig); if (r) r.classList.add("ok");
            if (eingabe !== t.richtig) { const f = el("ka-a" + eingabe); if (f) f.classList.add("nein"); }
        }
        const fb = el("ka-fb");
        let text = punkte >= 1 ? "✅ Richtig!" : (punkte > 0 ? "✏️ Fast! Achte auf die Schreibweise:" : "❌ Richtig wäre:");
        if (punkte < 1 && t.typ === "text") text += ` <b>${e(t.w.foreign)}</b>`;
        if (punkte < 1 && t.typ === "mc") text += ` <b>${e(t.antworten[t.richtig])}</b>`;
        const zusatz = t.w && t.w.satz ? `<div class="text-xs text-gray-400 mt-1">💬 ${e(t.w.satz)}</div>` : (t.erkl ? `<div class="text-xs text-gray-400 mt-1">💡 ${e(t.erkl)}</div>` : "");
        fb.innerHTML = `<div class="p-3 rounded-xl text-sm font-bold" style="background:${punkte >= 1 ? "rgba(16,185,129,.15)" : "rgba(244,63,94,.12)"}">${text}${zusatz}</div>
            <button class="btn-primary w-full text-center mt-3" onclick="arbeitWeiter()">Weiter ➜</button>`;
        speichern();
    }
    function arbeitWeiter() { if (!sp) return; sp.i++; naechste(); }

    function uebenEnde() {
        const a = sp.a, b = bereit(a), plus = b - sp.vorher;
        const s = sp; sp = null;
        speichern();
        if (s.ok && typeof addXP === "function") addXP(Math.min(10, s.ok));
        zeige("ka-ende");
        const frei = b >= BEREIT_AB;
        el("ka-ende").innerHTML = `
          <div class="glass-card-glow p-6 text-center space-y-3">
            <div class="text-6xl">${frei ? "🏆" : "💪"}</div>
            <h2 class="text-2xl font-black">${s.ok} von ${s.tasks.length} richtig</h2>
            <div class="ka-bar"><div style="width:${b}%"></div></div>
            <div class="text-sm font-bold">Bereit: ${b} %${plus > 0 ? ` <span class="text-emerald-300">(+${plus})</span>` : ""}</div>
            <div class="text-sm text-gray-300">${frei ? "Die Probearbeit ist frei! 🎉" : "Noch " + (BEREIT_AB - b) + " % bis zur Probearbeit."}</div>
          </div>
          <button class="btn-primary w-full text-center" onclick="arbeitUeben('${a.id}')">🎯 Weiter üben</button>
          ${frei ? `<button class="btn-secondary w-full text-center" onclick="arbeitProbe('${a.id}')">📝 Probearbeit schreiben</button>` : ""}
          <button class="btn-secondary w-full text-center" onclick="arbeitOeffnen()">⬅ Zur Übersicht</button>`;
        hubKarte();
    }
    function note(prozent) {
        if (prozent >= 92) return 1; if (prozent >= 81) return 2; if (prozent >= 67) return 3;
        if (prozent >= 50) return 4; if (prozent >= 30) return 5; return 6;
    }
    const NOTEN_TEXT = ["", "sehr gut", "gut", "befriedigend", "ausreichend", "mangelhaft", "ungenügend"];
    function probeEnde() {
        stoppeUhr();
        const s = sp; sp = null;
        const a = s.a; a.st = a.st || {};
        let pkt = 0;
        s.antworten.forEach(function (x) {
            pkt += x.p;
            if (x.p >= 1) a.st[x.t.key] = Math.min(3, ((a.st[x.t.key]) || 0) + 1);
            else a.st[x.t.key] = 0;
        });
        const max = s.antworten.length, prozent = Math.round(pkt / max * 100), n = note(prozent);
        const sek = Math.round((Date.now() - s.start) / 1000);
        a.versuche = (a.versuche || []).concat([{ d: heuteStr(), note: n, p: prozent }]).slice(-10);
        let lohn = 0;
        if (a.lohnTag !== heuteStr()) { lohn = LOHN[n] || 0; a.lohnTag = heuteStr(); }
        speichern();
        if (lohn && typeof addXP === "function") addXP(lohn);
        if (n <= 2 && typeof confetti === "function") confetti();
        sfx(n <= 3 ? "win" : "tap");
        const fehler = s.antworten.filter(function (x) { return x.p < 1; });
        const fehlerHtml = fehler.map(function (x) {
            const t = x.t;
            const fr = t.satz ? t.satz : (t.gross ? t.gross : t.frage);
            const deins = t.typ === "mc" ? t.antworten[x.ein] : x.ein;
            return `<div class="p-3 rounded-xl text-sm space-y-1" style="background:rgba(255,255,255,.05)">
                <div class="font-bold">${e(fr)}</div>
                <div class="text-xs"><span class="text-rose-300">Du: ${e(deins || "–")}</span>${x.p > 0 ? " (halber Punkt)" : ""}</div>
                <div class="text-xs text-emerald-300">Richtig: ${e(loesungText(t))}</div></div>`;
        }).join("");
        zeige("ka-ende");
        el("ka-ende").innerHTML = `
          <div class="glass-card-glow p-6 text-center space-y-2">
            <div class="text-sm font-bold text-gray-300">Deine Note</div>
            <div class="ka-note" style="color:${notenFarbe(n)}">${n}</div>
            <div class="text-lg font-black">${NOTEN_TEXT[n]}</div>
            <div class="text-sm text-gray-300">${(Math.round(pkt * 2) / 2).toString().replace(".", ",")} von ${max} Punkten · ${prozent} % · ${Math.floor(sek / 60)}:${String(sek % 60).padStart(2, "0")} Min.</div>
            ${lohn ? `<div class="text-sm font-bold text-amber-300">+${lohn} Coins</div>` : ""}
          </div>
          ${fehler.length ? `<div class="glass-card p-4 space-y-2"><div class="text-sm font-black">📌 Das solltest du noch üben (${fehler.length})</div>${fehlerHtml}
             <p class="text-[11px] text-gray-500">Diese Aufgaben kommen beim nächsten Üben zuerst dran.</p></div>`
            : `<div class="glass-card p-4 text-center text-sm font-bold text-emerald-300">Alles richtig – super vorbereitet! 🌟</div>`}
          <button class="btn-primary w-full text-center" onclick="arbeitUeben('${a.id}')">🎯 Fehler üben</button>
          <button class="btn-secondary w-full text-center" onclick="arbeitOeffnen()">⬅ Zur Übersicht</button>`;
        hubKarte();
    }
    function arbeitAbbrechen() {
        if (sp && sp.modus === "probe" && typeof appConfirm === "function") {
            return appConfirm("Probearbeit abbrechen? Sie wird nicht gewertet.", { titel: "Abbrechen?", icon: "📝", okText: "Abbrechen", abbrechenText: "Weiterschreiben" })
                .then(function (ok) { if (ok) { stoppeUhr(); sp = null; home(); } });
        }
        stoppeUhr(); sp = null; speichern(); home(); hubKarte();
    }

    // ---------------- Startseite & Lernen-Knopf ----------------
    function hubKarte() {
        const p = ich(); if (!p) return;
        const l = liste(p);
        const sub = el("ka-lernen-sub");
        if (sub) {
            if (!l.length) sub.innerText = "Stoff üben, bis du bereit bist – dann Probearbeit mit Note";
            else sub.innerText = l.map(function (a) { return titel(a) + ": " + bereit(a) + " %"; }).slice(0, 2).join(" · ");
        }
    }

    // ---------------- Eltern-Dashboard ----------------
    function dashEinbauen() {
        if (el("dash-arbeit-card")) return;
        const vor = el("dash-kartei-card") || el("dash-kopf-card");
        if (!vor) return;
        vor.insertAdjacentHTML("afterend", `
        <div id="dash-arbeit-card" class="glass-card overflow-hidden">
            <button type="button" onclick="arbeitDashToggle()" class="w-full px-4 py-4 flex items-center justify-between hover:bg-white/5 transition">
                <span class="text-base font-black text-amber-300">📝 Klassenarbeiten</span>
                <span id="dash-arbeit-arrow" class="text-gray-400 transition-transform">▼</span>
            </button>
            <div id="dash-arbeit-body" class="hidden px-4 pb-4 space-y-2"></div>
        </div>`);
    }
    function dashKey() { return (el("dash-test-profile") || {}).value || (typeof activePlayerKey !== "undefined" ? activePlayerKey : ""); }
    function arbeitDashToggle() {
        const b = el("dash-arbeit-body"), a = el("dash-arbeit-arrow");
        const auf = b.classList.contains("hidden");
        b.classList.toggle("hidden", !auf);
        if (a) a.style.transform = auf ? "rotate(180deg)" : "";
        if (auf) arbeitDashRender();
    }
    function arbeitDashRender() {
        const b = el("dash-arbeit-body"); if (!b || b.classList.contains("hidden")) return;
        const key = dashKey(), p = (typeof ALL_PROFILES !== "undefined") ? ALL_PROFILES[key] : null;
        if (!p) { b.innerHTML = `<p class="text-xs text-gray-400">Kein Kind ausgewählt.</p>`; return; }
        const l = Array.isArray(p.arbeiten) ? p.arbeiten : [];
        b.innerHTML = l.length ? l.map(function (a) {
            const bb = bereit(a), v = a.versuche || [];
            const noten = v.length ? v.map(function (x) { return `<span title="${e(x.d)} · ${x.p} %" style="color:${notenFarbe(x.note)}">${x.note}</span>`; }).join(" ") : "–";
            return `<div class="p-3 rounded-xl space-y-1" style="background:rgba(255,255,255,.05)">
                <div class="flex justify-between text-sm font-bold"><span>${(FAECHER[a.fach] || {}).icon || "📝"} ${e(titel(a))}</span><span>${bb} %</span></div>
                <div class="ka-bar"><div style="width:${bb}%"></div></div>
                <div class="text-[11px] text-gray-400">${e(stoffText(a))}</div>
                <div class="text-xs font-bold">Probearbeiten: ${noten}</div></div>`;
        }).join("") : `<p class="text-xs text-gray-400">${e(p.name || "Das Kind")} bereitet gerade keine Klassenarbeit vor. Das geht unter Lernen → 📝 Klassenarbeit.</p>`;
    }

    function haken() {
        if (typeof window.renderAufgabenKarte === "function" && !window.renderAufgabenKarte._ka) {
            const r0 = window.renderAufgabenKarte;
            window.renderAufgabenKarte = function () { const x = r0.apply(this, arguments); try { knopf(); hubKarte(); } catch (er) { } return x; };
            window.renderAufgabenKarte._ka = true;
        }
        if (typeof window.kopfDashRender === "function" && !window.kopfDashRender._ka) {
            const d0 = window.kopfDashRender;
            window.kopfDashRender = function () { const x = d0.apply(this, arguments); try { dashEinbauen(); arbeitDashRender(); } catch (er) { } return x; };
            window.kopfDashRender._ka = true;
        }
    }
    function start() { einbauen(); haken(); }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
    else start();

    Object.assign(window, {
        arbeitOeffnen: arbeitOeffnen, arbeitNeu: arbeitNeu, arbeitFach: arbeitFach, arbeitKlasse: arbeitKlasse,
        arbeitThema: arbeitThema, arbeitAnlegen: arbeitAnlegen, arbeitLoeschen: arbeitLoeschen,
        arbeitUeben: arbeitUeben, arbeitProbe: arbeitProbe, arbeitWahl: arbeitWahl, arbeitText: arbeitText,
        arbeitWeiter: arbeitWeiter, arbeitAbbrechen: arbeitAbbrechen,
        arbeitDashToggle: arbeitDashToggle, arbeitDashRender: arbeitDashRender,
        _arbeitTest: { bereit: bereit, note: note, pruefeText: pruefeText, finde: finde, sp: function () { return sp; } }
    });
})();
