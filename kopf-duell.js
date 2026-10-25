// ============================================================
//  KOPFRECHEN-DUELL (60-Sekunden-Sprint)
//  Live-Duell (jeder am eigenen Handy) und TV-Modus (Fernseher zeigt
//  das Rennen, Handys rechnen). Jeder rechnet in SEINER Stufe aus dem
//  Kopfrechen-Trainer (window.KOPF_STUFEN), Punkte = richtige Aufgaben.
//  Firestore-Felder je Spieler: kopfStufe, score, kRichtig, kFalsch,
//  kFertig, kSpaet. Am Dokument: sprintId, sprintTs.
//  Die 60 Sekunden laufen auf jedem Gerät lokal ab dem Startsignal –
//  dadurch stören falsch gehende Uhren nicht.
// ============================================================
(function () {
    "use strict";

    const DAUER = 60;          // Sekunden
    const VORLAUF = 3000;      // 3-2-1
    const NACHLAUF = 8000;     // so lange wartet der Host höchstens auf Nachzügler
    const SCHREIB_MS = 1000;   // Zwischenstand höchstens 1× pro Sekunde senden
    const SPAET_MS = 20000;    // wer so spät dazukommt, spielt erst nächste Runde
    const MIX = ["k4_gross", "k5_quadrat", "k5_bruch", "k5_tricks", "k6_dezimal", "k7_prozent", "k7_negativ", "k7_potenz", "k7_gleichung"];
    const MIX_STUFE = { id: "duell_mix", kl: 8, icon: "🔥", titel: "Profi-Mix (ab Kl. 7)" };
    // Modus „Ziel“: Jeder rechnet ohne Zeitdruck, bis er 10 richtig hat. Die Runde
    // endet erst, wenn alle 10 haben (Notbremse nach 10 Minuten). Reihenfolge
    // des Ankommens bestimmt die Platzierung.
    const ZIEL = 10;
    const ZIEL_MAX = 600;      // Sekunden
    const ZIEL_PUNKTE = [15, 12, 10, 8, 6];
    let gewaehlterModus = "zeit";
    try { if (localStorage.getItem("eduplayKopfDuellModus") === "ziel") gewaehlterModus = "ziel"; } catch (x) { }
    function istZiel(data) { return !!(data && data.kModus === "ziel"); }
    function dauerVon(data) { return istZiel(data) ? ZIEL_MAX : DAUER; }
    function mmss(ms) { const s = Math.max(0, Math.round(ms / 1000)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
    function modusSetzen(m) {
        gewaehlterModus = m === "ziel" ? "ziel" : "zeit";
        try { localStorage.setItem("eduplayKopfDuellModus", gewaehlterModus); } catch (x) { }
        document.querySelectorAll(".kd-modus-cb").forEach(function (cb) { cb.checked = gewaehlterModus === "ziel"; });
        // Offene Live-Lobby (ich bin Gastgeber, noch nicht gestartet): Modus gleich mitteilen
        try {
            if (typeof liveDuelRef !== "undefined" && liveDuelRef && typeof isLiveDuelCreator !== "undefined" && isLiveDuelCreator && typJetzt() === "kopf") {
                liveDuelRef.update({ kModus: gewaehlterModus }).catch(function () { });
            }
            if (typeof tvGameRef !== "undefined" && tvGameRef && typeof isTVHost !== "undefined" && isTVHost) {
                tvGameRef.get().then(function (d) {
                    if (d.exists && d.data().mode === "kopf" && d.data().status !== "playing") tvGameRef.update({ kModus: gewaehlterModus }).catch(function () { });
                }).catch(function () { });
            }
        } catch (x) { }
        sfx("tap");
    }
    function modusHtml() {
        return `<label class="flex items-start gap-2.5 text-left cursor-pointer" style="background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.35);border-radius:14px;padding:10px 12px">
            <input type="checkbox" class="kd-modus-cb w-5 h-5 shrink-0 mt-0.5" ${gewaehlterModus === "ziel" ? "checked" : ""} onchange="KopfDuell.modus(this.checked ? 'ziel' : 'zeit')">
            <span><span class="block text-sm font-black text-emerald-300">🎯 Ohne Zeitdruck: Wer zuerst 10 richtig hat</span>
            <span class="block text-[11px] text-gray-300">Alle rechnen, bis jeder 10 richtige Aufgaben hat. Wer zuerst fertig ist, gewinnt.</span></span></label>`;
    }

    function ichKey() { return (typeof activePlayerKey !== "undefined" && activePlayerKey) || ""; }
    function e(s) { return (typeof esc === "function") ? esc(s) : String(s == null ? "" : s); }
    function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
    function zahl(n) {
        const s = (Math.round(n * 1000) / 1000).toString().replace(".", ",");
        return s.replace("-", "−");
    }
    function sfx(n) { try { if (typeof SFX !== "undefined" && SFX[n]) SFX[n](); } catch (x) { } }

    // ---------------- Stufen ----------------
    function alleStufen() { return (window.KOPF_STUFEN || []).concat([MIX_STUFE]); }
    function stufe(id) { return alleStufen().find(function (s) { return s.id === id; }); }
    function kurz(id) { const s = stufe(id); return s ? s.icon + " " + s.titel : "🧮"; }
    function gen(id) {
        const echt = id === "duell_mix" ? pick(MIX) : id;
        const s = stufe(echt) || stufe("k2_1x1");
        const a = s.gen(0);
        a.st = s.id;
        return a;
    }
    function standardStufe() {
        try {
            const m = localStorage.getItem("eduplayKopfDuellStufe:" + (ichKey() || ""));
            if (m && stufe(m)) return m;
        } catch (x) { }
        const g = klasseVon(typeof currentPlayer !== "undefined" ? currentPlayer : null);
        // Bewusst eine Stufe unter dem Klassenziel – im Sprint zählt Tempo.
        if (!g) return "k1_20";
        return ({ 1: "k1_10", 2: "k1_20", 3: "k2_1x1", 4: "k3_mix", 5: "k4_zehner", 6: "k5_quadrat" })[g] || "duell_mix";
    }
    // Klasse wie im Rest der App; ohne Klasse grob aus dem Alter (7 Jahre ≈ Kl. 1).
    function klasseVon(p) {
        if (!p) return 0;
        if (p.profileRole === "eltern") return 13;
        let g = (typeof playerGrade === "function") ? (playerGrade(p) || 0) : (parseInt(p.grade, 10) || 0);
        if (g) return g;
        let alter = 0;
        if (p.birthday && typeof ageFromBirthday === "function") alter = ageFromBirthday(p.birthday) || 0;
        if (!alter && p.ageType !== "klasse") alter = parseInt(p.age, 10) || 0;
        if (alter) return Math.max(1, Math.min(13, alter - 6));
        return 0;
    }
    // Eine Stufe leichter (für den Vorschlag nach einem schweren Sprint)
    function leichter(id) {
        if (id === "duell_mix") return "k6_dezimal";
        const l = window.KOPF_STUFEN || [];
        const i = l.findIndex(function (s) { return s.id === id; });
        return i > 0 ? l[i - 1].id : null;
    }
    function merkeStufe(id) {
        try { localStorage.setItem("eduplayKopfDuellStufe:" + (ichKey() || ""), id); } catch (x) { }
    }
    function optionen(sel) {
        return alleStufen().map(function (s) {
            return `<option value="${s.id}" ${s.id === sel ? "selected" : ""}>${s.kl <= 7 ? "Kl. " + s.kl + " · " : ""}${e(s.icon + " " + s.titel)}</option>`;
        }).join("");
    }

    function aktiveSpieler(data) {
        const pl = data.players || {};
        return Object.keys(pl).filter(function (k) {
            const p = pl[k];
            if (!p || p.pending || p.kSpaet === data.sprintId) return false;
            return p.kFertig || (typeof istAnwesend === "function" ? istAnwesend(p) : true);
        });
    }

    // ---------------- Stufenwahl im Warteraum ----------------
    let lobbyRef = null, lobbyKey = "";
    function stufeWaehlen(id) {
        if (!stufe(id) || !lobbyRef || !ichKey()) return;
        merkeStufe(id);
        lobbyRef.update({ ["players." + ichKey() + ".kopfStufe"]: id }).catch(function () { });
        sfx("tap");
    }
    function stufenwahlHtml(data, idSel) {
        const me = (data.players || {})[ichKey()] || {};
        const andere = Object.keys(data.players || {}).map(function (k) {
            const p = data.players[k];
            return `<div class="flex justify-between gap-2 text-xs"><span class="font-bold text-white truncate">${e(p.name)}</span><span class="text-gray-300 text-right">${e(kurz(p.kopfStufe))}</span></div>`;
        }).join("");
        const aktuell = me.kopfStufe || standardStufe();
        const st = stufe(aktuell);
        return `<div style="border:2px solid rgba(245,158,11,.45);background:rgba(245,158,11,.08);border-radius:16px;padding:12px" class="space-y-2">
              <div class="text-xs font-bold text-amber-300">🧮 Deine Stufe – jeder rechnet auf seinem Niveau</div>
              <div style="font-size:20px;font-weight:900;color:#fff">${e(kurz(aktuell))}${st && st.kl <= 7 ? `<span style="font-size:12px;color:#fcd34d;font-weight:800"> · Kl. ${st.kl}</span>` : ""}</div>
              <select id="${idSel}" class="input-modern font-bold text-sm" onchange="KopfDuell.stufeWaehlen(this.value)">${optionen(aktuell)}</select>
              <div class="text-[11px] text-gray-300">Zu schwer oder zu leicht? Hier vor dem Start ändern.</div>
            </div>
            <div class="space-y-1 pt-1">${andere}</div>
            ${data.createdBy && data.createdBy === ichKey() ? modusHtml() : ""}
            <p class="text-[11px] text-gray-400">${istZiel(data) ? "🎯 Ohne Zeitdruck – alle rechnen, bis jeder " + ZIEL + " richtig hat. Wer zuerst fertig ist, gewinnt." : "60 Sekunden – wer die meisten Aufgaben richtig hat, gewinnt."}</p>`;
    }
    function standardSetzen(data, ref) {
        const me = (data.players || {})[ichKey()];
        if (me && !me.kopfStufe && ref) {
            ref.update({ ["players." + ichKey() + ".kopfStufe"]: standardStufe() }).catch(function () { });
        }
    }
    // Live-Duell-Warteraum: Kasten unter der Spielerliste
    function lobby(data, ref, listEl) {
        let box = document.getElementById("kd-lobby");
        if (data.type !== "kopf") { if (box) box.classList.add("hidden"); return; }
        if (!box && listEl) {
            box = document.createElement("div");
            box.id = "kd-lobby";
            box.className = "glass-card p-4 space-y-2";
            listEl.insertAdjacentElement("afterend", box);
        }
        if (!box) return;
        box.classList.remove("hidden");
        lobbyRef = ref;
        standardSetzen(data, ref);
        const key = (data.kModus || "") + JSON.stringify(Object.keys(data.players || {}).sort().map(function (k) { return [k, data.players[k].name, data.players[k].kopfStufe]; }));
        const sel = document.getElementById("kd-stufe-sel");
        if (key === lobbyKey && sel) return;
        if (sel && document.activeElement === sel) return;
        lobbyKey = key;
        box.innerHTML = stufenwahlHtml(data, "kd-stufe-sel");
    }

    // ---------------- Start / Ende (Host) ----------------
    async function starten(ref) {
        if (!ref) return;
        const snap = await ref.get();
        if (!snap.exists) return;
        const players = snap.data().players || {};
        Object.keys(players).forEach(function (k) {
            const p = players[k];
            p.score = 0; p.kRichtig = 0; p.kFalsch = 0; p.kFertig = false; p.kSpaet = null; p.kAufgabe = ""; p.kZeit = null;
            p.pending = false; p.hasAnswered = false; p.coinsClaimed = false; p.lastRoundPoints = 0;
        });
        const kdUpd = (typeof sicherPlayersUpdate === "function") ? function (u) { return sicherPlayersUpdate(ref, u); } : function (u) { return ref.update(u); };
        await kdUpd({
            status: "playing",
            sprintId: "s" + Date.now().toString(36),
            sprintTs: Date.now(),
            kModus: gewaehlterModus,
            dauer: gewaehlterModus === "ziel" ? ZIEL_MAX : DAUER,
            answerDeadline: null,
            players: players
        });
    }

    let hostSprint = null, hostFertigGesendet = "", hostTimer = null;
    function hostPruefen(data, ref) {
        if (!ref || data.status !== "playing") return;
        if (!hostSprint || hostSprint.id !== data.sprintId) {
            hostSprint = { id: data.sprintId, ende: Date.now() + VORLAUF + dauerVon(data) * 1000 };
        }
        const aktiv = aktiveSpieler(data);
        const alleFertig = aktiv.length > 0 && aktiv.every(function (k) { return data.players[k].kFertig; });
        const spaet = Date.now() > hostSprint.ende + NACHLAUF;
        if ((alleFertig || spaet) && hostFertigGesendet !== data.sprintId) {
            hostFertigGesendet = data.sprintId;
            const upd = { status: "finished", kEnde: Date.now() };
            if (istZiel(data)) {
                // Punkte nach Reihenfolge des Ankommens; wer es nicht geschafft hat, bekommt seine richtigen
                const pl = data.players || {};
                const fertig = aktiv.filter(function (k) { return pl[k].kZeit && (pl[k].kRichtig || 0) >= ZIEL; })
                    .sort(function (a, b) { return pl[a].kZeit - pl[b].kZeit; });
                aktiv.forEach(function (k) {
                    const i = fertig.indexOf(k);
                    upd["players." + k + ".score"] = i >= 0 ? (ZIEL_PUNKTE[i] || 5) : Math.min(ZIEL - 1, pl[k].kRichtig || 0);
                });
            }
            setTimeout(function () {
                ref.update(upd).catch(function () { hostFertigGesendet = ""; });
            }, alleFertig ? 1200 : 0);
        }
    }
    function hostTimerStarten(ref) {
        if (hostTimer) return;
        hostTimer = setInterval(function () {
            if (!hostSprint || !ref) return;
            if (Date.now() > hostSprint.ende + NACHLAUF && hostFertigGesendet !== hostSprint.id) {
                ref.get().then(function (d) { if (d.exists) hostPruefen(d.data(), ref); }).catch(function () { });
            }
        }, 1000);
    }

    // ---------------- Spielen am Handy ----------------
    let sp = null, tick = null;

    function padHtml() {
        return `<div class="kr-pad">
          <button onclick="KopfDuell.taste('7')">7</button><button onclick="KopfDuell.taste('8')">8</button><button onclick="KopfDuell.taste('9')">9</button><button onclick="KopfDuell.taste('del')">⌫</button>
          <button onclick="KopfDuell.taste('4')">4</button><button onclick="KopfDuell.taste('5')">5</button><button onclick="KopfDuell.taste('6')">6</button><button class="kr-ok" onclick="KopfDuell.taste('ok')">OK</button>
          <button onclick="KopfDuell.taste('1')">1</button><button onclick="KopfDuell.taste('2')">2</button><button onclick="KopfDuell.taste('3')">3</button>
          <button id="kd-key-minus" onclick="KopfDuell.taste('-')">−</button><button onclick="KopfDuell.taste('0')">0</button><button id="kd-key-komma" onclick="KopfDuell.taste(',')">,</button><button onclick="KopfDuell.taste('skip')" style="font-size:14px">weiter</button>
        </div>`;
    }
    function spielHtml(mitBoard) {
        return `<div id="kd-root" class="space-y-3">
            ${mitBoard ? `<div id="kd-board" class="glass-card p-3 space-y-1.5"></div>` : ""}
            <div class="flex items-center justify-between gap-2">
              <span id="kd-stufe" class="text-xs font-bold text-gray-400 truncate"></span>
              <span class="text-sm font-black text-emerald-300" id="kd-score">✓ 0</span>
              <span id="kd-zeit" class="text-lg font-black text-amber-300 min-w-[3rem] text-right"></span>
            </div>
            <div class="kr-bar"><div id="kd-bar" style="width:100%"></div></div>
            <div class="glass-card p-5 space-y-3" style="position:relative">
              <div id="kd-task" class="kr-task"></div>
              <div id="kd-input" class="kr-input">&nbsp;</div>
              <div id="kd-feedback" class="text-center text-sm font-bold" style="min-height:20px"></div>
              <div id="kd-overlay" style="position:absolute;inset:0;border-radius:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(10,14,30,.92);font-weight:900;text-align:center;padding:12px"></div>
            </div>
            ${padHtml()}
        </div>`;
    }
    const tvVorher = {};
    let tvNachzeichnen = null;
    function boardHtml(data, gross) {
        const pl = data.players || {};

        const ziel = istZiel(data) && data.status === "playing";
        const wert = function (k) { return ziel ? (pl[k].kRichtig || 0) : (pl[k].score || 0); };
        const keys = Object.keys(pl).filter(function (k) { return !pl[k].pending; })
            .sort(function (a, b) {
                if (ziel) {
                    const fa = pl[a].kZeit && wert(a) >= ZIEL, fb = pl[b].kZeit && wert(b) >= ZIEL;
                    if (fa && fb) return pl[a].kZeit - pl[b].kZeit;
                    if (fa !== fb) return fa ? -1 : 1;
                }
                return wert(b) - wert(a);
            });
        const max = ziel ? ZIEL : Math.max(1, ...keys.map(function (k) { return pl[k].score || 0; }));
        const medals = ["🥇", "🥈", "🥉"];
        return keys.map(function (k, i) {
            const p = pl[k], ich = k === ichKey() && !gross;
            const w = Math.min(100, Math.round((wert(k) / max) * 100));
            const rang = ziel ? i : keys.filter(function (x) { return (pl[x].score || 0) > (p.score || 0); }).length;
            const fs = gross ? "clamp(16px,2.6vw,30px)" : "13px";
            let blitz = "", aufgabeHtml = "";
            if (gross) {
                const id = data.sprintId + ":" + k;
                const v = tvVorher[id] || { r: p.kRichtig || 0, f: p.kFalsch || 0 };
                let bis = v.bis || 0, farbe = v.farbe || "";
                if ((p.kRichtig || 0) > v.r) { farbe = "rgba(16,185,129,.4)"; bis = Date.now() + 900; }
                else if ((p.kFalsch || 0) > v.f) { farbe = "rgba(239,68,68,.4)"; bis = Date.now() + 900; }
                tvVorher[id] = { r: p.kRichtig || 0, f: p.kFalsch || 0, bis: bis, farbe: farbe };
                if (Date.now() < bis) blitz = "background:" + farbe + ";";
                const t = (!p.kFertig && data.status === "playing" && p.kAufgabe) ? e(String(p.kAufgabe)).replace(/-/g, "−") + (/\?/.test(String(p.kAufgabe)) ? "" : " = ?") : (p.kFertig ? "fertig ✓" : "");
                aufgabeHtml = `<span style="flex:0 0 22%;text-align:center;font-size:.72em;font-weight:800;color:#c7d2fe;background:rgba(255,255,255,.06);border-radius:10px;padding:.25em .4em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t || "&nbsp;"}</span>`;
            }
            return `<div style="${blitz}transition:background .35s;display:flex;align-items:center;gap:${gross ? 14 : 8}px;font-size:${fs};font-weight:800;border-radius:12px;${gross ? "padding:.15em .3em" : ""}">
                <span style="width:${gross ? 2.2 : 1.6}em;text-align:center">${wert(k) > 0 && rang < 3 ? medals[rang] : (rang + 1) + "."}</span>
                <span style="flex:0 0 ${gross ? "28%" : "34%"};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;${ich ? "color:#fcd34d" : ""}">${e(p.name)}${gross ? `<span style="display:block;font-size:.55em;opacity:.65;font-weight:700">${e(kurz(p.kopfStufe))}</span>` : ""}</span>
                ${aufgabeHtml}
                <span style="flex:1;height:${gross ? 26 : 10}px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden"><span style="display:block;height:100%;width:${w}%;background:linear-gradient(90deg,#10b981,#f59e0b);transition:width .4s"></span></span>
                <span style="min-width:2.2em;text-align:right;color:#6ee7b7;white-space:nowrap">${ziel ? (p.kZeit && wert(k) >= ZIEL ? "✓ " + mmss(p.kZeit) : wert(k) + "/" + ZIEL) : (p.score || 0) + (p.kFertig ? " ✓" : "")}</span>
            </div>`;
        }).join("");
    }

    function stopp() {
        if (tick) { clearInterval(tick); tick = null; }
        if (sp && sp.schreibTimer) clearTimeout(sp.schreibTimer);
        sp = null;
        if (hostTimer) { clearInterval(hostTimer); hostTimer = null; }
    }

    function senden(final) {
        if (!sp || !sp.ref) return;
        const k = sp.key, upd = {};
        upd["players." + k + ".score"] = sp.richtig;
        upd["players." + k + ".kRichtig"] = sp.richtig;
        upd["players." + k + ".kFalsch"] = sp.falsch;
        upd["players." + k + ".kAufgabe"] = (!final && sp.aufgabe) ? String(sp.aufgabe.t) : "";
        if (final) upd["players." + k + ".kFertig"] = true;
        if (final && sp.ziel && sp.zeit) upd["players." + k + ".kZeit"] = sp.zeit;
        sp.letztesSenden = Date.now();
        sp.ref.update(upd).catch(function () { });
    }
    function zwischenstand() {
        if (!sp || sp.schreibTimer) return;
        const warte = Math.max(0, SCHREIB_MS - (Date.now() - (sp.letztesSenden || 0)));
        sp.schreibTimer = setTimeout(function () { if (!sp) return; sp.schreibTimer = null; if (!sp.fertig) senden(false); }, warte);
    }

    function el(id) { return document.getElementById(id); }
    function overlay(html) {
        const o = el("kd-overlay"); if (!o) return;
        if (html) { o.innerHTML = html; o.style.display = "flex"; } else { o.style.display = "none"; }
    }

    function naechste() {
        if (!sp) return;
        let a, n = 0;
        do { a = gen(sp.stufe); n++; } while (n < 8 && sp.letzte && a.t === sp.letzte);
        sp.letzte = a.t; sp.aufgabe = a; sp.eingabe = ""; sp.sperre = false;
        const t = el("kd-task"); if (t) { t.innerText = window.KOPF_FRAGE ? KOPF_FRAGE(a.t) : a.t + " ="; t.style.fontSize = a.t.length > 24 ? "26px" : (a.t.length > 15 ? "32px" : ""); }
        const inp = el("kd-input"); if (inp) { inp.className = "kr-input"; inp.innerHTML = "&nbsp;"; }
        const fb = el("kd-feedback"); if (fb) fb.innerText = "";
        const minus = a.l < 0 || a.st === "k7_negativ";
        const komma = String(a.l).indexOf(".") !== -1 || a.st === "k6_dezimal" || a.st === "k7_prozent" || a.st === "k6_umwandeln";
        const km = el("kd-key-minus"), kk = el("kd-key-komma");
        if (km) km.style.visibility = minus ? "visible" : "hidden";
        if (kk) kk.style.visibility = komma ? "visible" : "hidden";
        zwischenstand();
    }
    function wert(s) { if (!s || s === "-" || s === ",") return NaN; return Number(s.replace(",", ".")); }
    function zeigeEingabe() { const i = el("kd-input"); if (i) i.innerText = sp.eingabe ? sp.eingabe.replace("-", "−") : " "; }

    function laeuft() { return sp && !sp.fertig && Date.now() >= sp.start && Date.now() < sp.ende; }

    function taste(k) {
        if (!laeuft() || sp.sperre || !sp.aufgabe) return;
        if (k === "del") { sp.eingabe = sp.eingabe.slice(0, -1); return zeigeEingabe(); }
        if (k === "skip") return pruefen(true);
        if (k === "ok") return pruefen(false);
        if (k === "-") { sp.eingabe = sp.eingabe.charAt(0) === "-" ? sp.eingabe.slice(1) : "-" + sp.eingabe; return zeigeEingabe(); }
        if (k === ",") { if (sp.eingabe.indexOf(",") === -1) sp.eingabe += (sp.eingabe && sp.eingabe !== "-" ? "," : "0,"); return zeigeEingabe(); }
        if (sp.eingabe.replace(/[-,]/g, "").length >= 7) return;
        sp.eingabe += k;
        zeigeEingabe();
        if (Math.abs(wert(sp.eingabe) - sp.aufgabe.l) < 1e-9 && zahl(sp.aufgabe.l).replace("−", "-") === sp.eingabe) pruefen(false);
    }
    function pruefen(skip) {
        if (!laeuft() || sp.sperre) return;
        if (!skip && sp.eingabe === "") return;
        const a = sp.aufgabe, ok = !skip && Math.abs(wert(sp.eingabe) - a.l) < 1e-9;
        sp.sperre = true;
        const inp = el("kd-input"), fb = el("kd-feedback");
        if (ok) {
            sp.richtig++;
            if (inp) inp.className = "kr-input ok";
            sfx("correct");
        } else {
            sp.falsch++;
            if (inp) { inp.className = "kr-input falsch"; inp.innerText = zahl(a.l); }
            if (fb) fb.innerText = window.KOPF_LOESUNG ? KOPF_LOESUNG(a.t, a.l) : a.t + " = " + zahl(a.l);
            sfx("wrong");
        }
        const sc = el("kd-score"); if (sc) sc.innerText = sp.ziel ? "✓ " + sp.richtig + "/" + ZIEL : "✓ " + sp.richtig;
        if (sp.ziel && sp.richtig >= ZIEL) {
            sp.fertig = true;
            sp.zeit = Date.now() - sp.start;
            if (sp.schreibTimer) { clearTimeout(sp.schreibTimer); sp.schreibTimer = null; }
            senden(true);
            sfx("correct");
            const bar = el("kd-bar"); if (bar) bar.style.width = "100%";
            overlay(`<div style="font-size:44px">🎉</div><div style="font-size:22px">Geschafft!</div><div style="font-size:15px;margin-top:6px;color:#6ee7b7">${ZIEL} richtig in ${mmss(sp.zeit)}</div><div style="font-size:12px;opacity:.7;margin-top:8px">Warte auf die anderen …</div>`);
            return;
        }
        zwischenstand();
        setTimeout(function () { if (laeuft()) naechste(); }, ok ? 220 : (sp.ziel ? 2000 : 1000));
    }

    function ticken() {
        if (!sp) return;
        const now = Date.now();
        const z = el("kd-zeit"), bar = el("kd-bar");
        if (now < sp.start) {
            overlay(`<div style="font-size:15px;opacity:.8">Gleich geht's los!</div><div style="font-size:72px;line-height:1">${Math.ceil((sp.start - now) / 1000)}</div>`);
            if (z) z.innerText = sp.ziel ? "🎯 " + ZIEL : DAUER + "s";
            return;
        }
        if (now < sp.ende) {
            if (!sp.gestartet) { sp.gestartet = true; overlay(""); naechste(); sfx("tap"); }
            if (sp.ziel) {
                if (z) { z.innerText = mmss(now - sp.start); z.style.color = ""; }
                if (bar) bar.style.width = Math.min(100, sp.richtig / ZIEL * 100) + "%";
                return;
            }
            const rest = sp.ende - now;
            if (z) { z.innerText = Math.ceil(rest / 1000) + "s"; z.style.color = rest <= 5000 ? "#fb7185" : ""; }
            if (bar) bar.style.width = (rest / (DAUER * 10)) + "%";
            return;
        }
        if (!sp.fertig) {
            sp.fertig = true;
            if (sp.schreibTimer) { clearTimeout(sp.schreibTimer); sp.schreibTimer = null; }
            senden(true);
            sfx("timeUp");
            if (z) z.innerText = "⏰";
            if (bar) bar.style.width = "0%";
            overlay(`<div style="font-size:44px">⏰</div><div style="font-size:22px">Zeit um!</div><div style="font-size:15px;margin-top:6px;color:#6ee7b7">${sp.richtig} richtig · ${sp.falsch} falsch</div><div style="font-size:12px;opacity:.7;margin-top:8px">Warte auf die anderen …</div>`);
        }
    }

    // Gemeinsamer Einstieg für Live-Duell und TV-Handy.
    // setHtml(html) setzt den Spielbereich; mitBoard: Rangliste auf dem Handy zeigen.
    function spielerRender(data, ref, setHtml, mitBoard) {
        const me = (data.players || {})[ichKey()];
        if (!me) return;
        if (me.pending || me.kSpaet === data.sprintId) {
            if (!sp || sp.id !== "warte:" + data.sprintId) {
                stopp();
                sp = { id: "warte:" + data.sprintId, fertig: true };
                setHtml(`<div class="glass-card p-8 text-center space-y-3"><div class="text-6xl">⏳</div><h2 class="text-xl font-black">Du bist dabei!</h2><p class="text-sm text-gray-400">Der Sprint läuft schon. In der nächsten Runde rechnest du mit.</p><div id="kd-board" class="space-y-1.5 text-left pt-2"></div></div>`);
            }
            const b0 = el("kd-board"); if (b0) b0.innerHTML = boardHtml(data, false);
            return;
        }
        if (!sp || sp.id !== data.sprintId) {
            stopp();
            const spaet = data.sprintTs && (Date.now() - data.sprintTs) > SPAET_MS && !me.kRichtig && !me.kFertig;
            if (spaet) {
                ref.update({ ["players." + ichKey() + ".kSpaet"]: data.sprintId }).catch(function () { });
                sp = { id: "warte:" + data.sprintId, fertig: true };
                setHtml(`<div class="glass-card p-8 text-center space-y-3"><div class="text-6xl">⏳</div><h2 class="text-xl font-black">Du bist dabei!</h2><p class="text-sm text-gray-400">Der Sprint läuft schon. In der nächsten Runde rechnest du mit.</p></div>`);
                return;
            }
            const start = Date.now() + VORLAUF;
            sp = {
                id: data.sprintId, ref: ref, key: ichKey(), stufe: me.kopfStufe || standardStufe(),
                start: start, ende: start + dauerVon(data) * 1000, richtig: 0, falsch: 0, eingabe: "",
                aufgabe: null, sperre: false, fertig: false, gestartet: false, ziel: istZiel(data)
            };
            if (!me.kopfStufe) ref.update({ ["players." + ichKey() + ".kopfStufe"]: sp.stufe }).catch(function () { });
            if (!me.kFertig && (me.kRichtig || me.kFalsch) && data.sprintTs) {
                sp.richtig = me.kRichtig || 0; sp.falsch = me.kFalsch || 0;
                const soll = data.sprintTs + VORLAUF + dauerVon(data) * 1000;
                sp.start = sp.ziel ? data.sprintTs + VORLAUF : Date.now();
                sp.ende = Math.max(Date.now() + 1000, Math.min(soll, Date.now() + dauerVon(data) * 1000));
            }
            if (me.kFertig) { sp.fertig = true; sp.richtig = me.kRichtig || 0; sp.falsch = me.kFalsch || 0; sp.start = sp.ende = 0; }
            setHtml(spielHtml(mitBoard));
            const st = el("kd-stufe"); if (st) st.innerText = kurz(sp.stufe);
            if (sp.fertig) overlay(`<div style="font-size:22px">✅ Fertig!</div><div style="font-size:15px;margin-top:6px;color:#6ee7b7">${sp.richtig} richtig${me.kZeit ? " in " + mmss(me.kZeit) : ""}</div>`);
            else { ticken(); tick = setInterval(ticken, 100); }
        }
        const b = el("kd-board"); if (b) b.innerHTML = boardHtml(data, false);
    }

    // ---------------- Live-Duell ----------------
    function liveRender(data, ref, istHost) {
        if (data.status !== "playing") return;
        spielerRender(data, ref, function (h) {
            const c = document.getElementById("live-duel-play-content"); if (c) c.innerHTML = h;
        }, true);
        const s = document.getElementById("live-duel-status");
        if (s) s.innerText = "🧮 Kopfrechen-Sprint";
        const cd = document.getElementById("live-duel-countdown"); if (cd) cd.innerText = "";
        const fr = document.getElementById("live-duel-force-resolve"); if (fr) fr.classList.add("hidden");
        if (istHost) {
            if (!hostSprint || hostSprint.id !== data.sprintId) {
                hostSprint = { id: data.sprintId, ende: (sp && sp.id === data.sprintId && sp.ende) ? sp.ende : Date.now() + VORLAUF + dauerVon(data) * 1000 };
            }
            hostPruefen(data, ref);
            hostTimerStarten(ref);
        }
    }

    // ---------------- TV: Fernseher ----------------
    let tvSprintId = "";
    function tvHost(data, ref, setHtml) {
        if (tvSprintId !== data.sprintId) {
            tvSprintId = data.sprintId;
            const dauerMs = dauerVon(data) * 1000;
            const soll = data.sprintTs ? data.sprintTs + VORLAUF + dauerMs : 0;
            hostSprint = { id: data.sprintId, ende: (soll && Math.abs(soll - Date.now()) < dauerMs + 60000) ? soll : Date.now() + VORLAUF + dauerMs, dauerMs: dauerMs, ziel: istZiel(data) };
            setHtml(`<div style="min-height:100vh;padding:3vh 4vw;color:#fff;display:flex;flex-direction:column;gap:2.5vh">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:16px">
                  <div style="font-size:clamp(22px,3.6vw,46px);font-weight:900">🧮 Kopfrechen-Duell</div>
                  <div style="display:flex;align-items:center;gap:16px">
                    <div id="kd-tv-zeit" style="font-size:clamp(34px,6vw,80px);font-weight:900;color:#fcd34d"></div>
                    <button onclick="appConfirmSwitch('TV-Spiel endet für alle.','Spiel verlassen?',null,function(){leaveTVGame(true);})" class="tv-show-exit" title="Spiel beenden">✕</button>
                  </div>
                </div>
                <div style="font-size:clamp(13px,1.7vw,20px);color:#a5b4fc;font-weight:700">${istZiel(data) ? "🎯 Ohne Zeitdruck: Jeder rechnet in seiner Stufe, bis er " + ZIEL + " richtig hat. Wer kommt zuerst ins Ziel?" : "Jeder rechnet auf seinem Handy – in seiner eigenen Stufe. Wer schafft die meisten?"}</div>
                <div id="kd-tv-rows" style="display:flex;flex-direction:column;gap:2vh"></div>
            </div>`);
            if (hostTimer) { clearInterval(hostTimer); hostTimer = null; }
            hostTimer = setInterval(function () {
                const z = document.getElementById("kd-tv-zeit");
                if (!hostSprint) return;
                const now = Date.now(), start = hostSprint.ende - (hostSprint.dauerMs || DAUER * 1000);
                if (z) z.innerText = now < start ? "⏳ " + Math.ceil((start - now) / 1000)
                    : hostSprint.ziel ? "⏱ " + mmss(now - start)
                    : now < hostSprint.ende ? Math.ceil((hostSprint.ende - now) / 1000) + "s" : "⏰";
                if (now > hostSprint.ende + NACHLAUF && hostFertigGesendet !== hostSprint.id) {
                    ref.get().then(function (d) { if (d.exists) hostPruefen(d.data(), ref); }).catch(function () { });
                }
            }, 250);
        }
        const rows = document.getElementById("kd-tv-rows");
        if (rows) rows.innerHTML = boardHtml(data, true);
        // Aufblitzen nach knapp 1 s wieder ausblenden, auch wenn gerade kein Update kommt
        if (tvNachzeichnen) clearTimeout(tvNachzeichnen);
        tvNachzeichnen = setTimeout(function () {
            const r2 = document.getElementById("kd-tv-rows");
            if (r2) r2.innerHTML = boardHtml(data, true);
        }, 950);
        hostPruefen(data, ref);
    }

    // ---------------- TV: Handy ----------------
    const geclaimt = new Set();
    let tvWarteKey = "";
    function tvSpieler(data, myData, ref, setHtml) {
        if (data.status === "waiting") {
            if (sp) stopp();
            lobbyRef = ref;
            standardSetzen(data, ref);
            const key = "w:" + (data.kModus || "") + ":" + (myData.kopfStufe || "") + ":" + Object.keys(data.players || {}).map(function (k) { return k + (data.players[k].kopfStufe || ""); }).join(",");
            const sel = document.getElementById("kd-tv-stufe-sel");
            if (key === tvWarteKey && sel) return;
            if (sel && document.activeElement === sel) return;
            tvWarteKey = key;
            setHtml(`<div class="glass-card-glow p-6 mt-6 space-y-3 text-center"><div class="text-6xl">🙌</div><h2 class="text-2xl font-black text-emerald-400">Du bist drin!</h2><p class="text-sm text-white font-bold">Gleich startet das Kopfrechen-Duell.</p><div class="text-left space-y-2">${stufenwahlHtml(data, "kd-tv-stufe-sel")}</div></div>`);
            return;
        }
        tvWarteKey = "";
        if (data.status === "playing") {
            spielerRender(data, ref, setHtml, false);
            return;
        }
        if (data.status === "finished") {
            if (sp && !sp.fertig) senden(true);
            stopp();
            const ck = ref.id + ":" + data.sprintId + ":" + ichKey();
            if (!myData.coinsClaimed && !geclaimt.has(ck)) {
                geclaimt.add(ck);
                if (typeof addXP === "function") addXP(myData.score || 0);
                ref.update({ ["players." + ichKey() + ".coinsClaimed"]: true }).catch(function () { });
            }
            nachSprint(data, ref);
            const key = "f:" + data.sprintId + ":" + (myData.score || 0);
            if (tvWarteKey === key) return;
            tvWarteKey = key;
            setHtml(`<div class="glass-card-glow p-8 text-center mt-8 space-y-3"><div class="text-6xl">🏆</div><h2 class="text-2xl font-black text-yellow-400">Sprint beendet!</h2><p class="text-lg font-bold">${myData.kRichtig || 0} richtig · ${myData.kFalsch || 0} falsch</p><p class="text-xl text-white font-bold bg-white/5 p-3 rounded-xl inline-block">+ ${myData.score || 0} XP</p><p class="text-xs text-gray-400">Schau auf den Fernseher! Eine neue Runde startet hier automatisch.</p><button onclick="leaveTVGame()" class="btn-secondary w-full text-center text-sm">Zurück ins Menü</button></div>`);
        }
    }

    // ---------------- Nach dem Sprint: leichtere Stufe vorschlagen ----------------
    const vorgeschlagen = {};
    function nachSprint(data, ref) {
        try {
            const me = (data.players || {})[ichKey()];
            if (!me || !ref || !data.sprintId || vorgeschlagen[data.sprintId]) return;
            vorgeschlagen[data.sprintId] = 1;
            const r = me.kRichtig || 0, f = me.kFalsch || 0;
            const schwer = r <= 3 || (f >= 3 && f > r);
            const neu = leichter(me.kopfStufe || standardStufe());
            if (!schwer || !neu) return;
            setTimeout(async function () {
                const text = `Das war knifflig (${r} richtig, ${f} falsch). Nächste Runde mit „${kurz(neu)}“ rechnen?`;
                const ok = (typeof appConfirm === "function")
                    ? await appConfirm(text, { titel: "Etwas leichter?", icon: "🧮", okText: "Ja, leichter", abbrechenText: "Nein, so lassen" })
                    : confirm(text);
                if (!ok) return;
                merkeStufe(neu);
                ref.update({ ["players." + ichKey() + ".kopfStufe"]: neu }).catch(function () { });
                if (typeof showToast === "function") showToast("Nächste Runde: " + kurz(neu), "success");
            }, 1800);
        } catch (x) { }
    }
    // Live-Duell: Ergebnis-Anzeige kommt aus live-duel.js – dort einhängen.
    function ergebnisWickeln() {
        const r0 = window.renderLiveDuelFinalResult;
        if (typeof r0 !== "function" || r0._kd) return;
        const neu = function (data) {
            const r = r0.apply(this, arguments);
            if (data && data.type === "kopf" && typeof liveDuelRef !== "undefined" && liveDuelRef) nachSprint(data, liveDuelRef);
            return r;
        };
        neu._kd = true;
        window.renderLiveDuelFinalResult = neu;
    }
    ergebnisWickeln();

    // ---------------- Einbau in die Oberfläche ----------------
    function einbauen() {
        // Menü-Knopf unter den Live-Duellen
        const wr = document.querySelector("button[onclick=\"openLiveDuelSetup('wortraten')\"]");
        if (wr && !document.getElementById("kd-menu-btn")) {
            const b = document.createElement("button");
            b.id = "kd-menu-btn";
            b.setAttribute("onclick", "openLiveDuelSetup('kopf')");
            b.className = "w-full p-4 rounded-2xl text-white font-black shadow-lg text-sm flex items-center justify-center gap-2 transition hover:scale-[1.02] mt-3";
            b.style.background = "linear-gradient(135deg,#f59e0b,#ef4444)";
            b.innerHTML = '<span class="text-2xl">🧮</span> Kopfrechen-Duell <span class="text-xs font-bold opacity-80">· 60 Sek.</span>';
            wr.parentElement.insertAdjacentElement("afterend", b);
        }
        // Optionen im Live-Duell-Setup
        const q = document.getElementById("live-duel-quiz-options");
        if (q && !document.getElementById("live-duel-kopf-options")) {
            const d = document.createElement("div");
            d.id = "live-duel-kopf-options";
            d.className = "hidden space-y-2 text-center";
            d.innerHTML = `<div class="text-5xl">🧮</div>
                <p class="text-sm font-bold text-white">60 Sekunden – so viele Aufgaben wie möglich.</p>
                <p class="text-xs text-gray-400">Jeder wählt im Warteraum seine eigene Stufe aus dem Kopfrechen-Trainer. So haben Klein und Groß die gleiche Chance.</p>
                ${modusHtml()}`;
            q.insertAdjacentElement("afterend", d);
        }
        // TV-Modus: vierter Knopf + Optionen
        const tw = document.getElementById("tvmode-wortraten");
        if (tw && !document.getElementById("tvmode-kopf")) {
            const b = document.createElement("button");
            b.id = "tvmode-kopf";
            b.setAttribute("onclick", "setTVHostMode('kopf')");
            b.textContent = "🧮 Kopfrechnen";
            tw.insertAdjacentElement("afterend", b);
            const w = document.getElementById("tv-wortraten-mode-options");
            if (w) {
                const d = document.createElement("div");
                d.id = "tv-kopf-mode-options";
                d.className = "hidden space-y-2 mb-2";
                d.innerHTML = `<p class="text-sm text-white font-bold">🧮 60-Sekunden-Sprint</p>
                    <p class="text-xs text-gray-400">Jeder rechnet auf seinem Handy in seiner eigenen Stufe. Der Fernseher zeigt das Rennen live.</p>
                    ${modusHtml()}`;
                w.insertAdjacentElement("afterend", d);
            }
        }
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", einbauen);
    else einbauen();

    // ---------------- Live-Duell: Erstellen / Starten / Neue Runde ----------------
    function typJetzt() { return (typeof liveDuelType !== "undefined") ? liveDuelType : ""; }
    async function erstellen() {
        if (!currentPlayer || !ichKey()) return showToast("Bitte zuerst oben deinen Spieler auswählen!", "error");
        if (typeof ensureProfileSessionLock === "function" && !(await ensureProfileSessionLock(true))) return;
        const ref = liveDuelCollectionRef().doc();
        const lobbyData = {
            type: "kopf", status: "waiting", dauer: DAUER, kModus: gewaehlterModus, createdBy: ichKey(),
            createdByName: currentPlayer.name, createdAt: Date.now(), hostLastSeen: Date.now(), players: {}
        };
        lobbyData.players[ichKey()] = {
            name: currentPlayer.name, score: 0, hasAnswered: false, lastAnswer: null, word: "",
            coinsClaimed: false, kopfStufe: standardStufe()
        };
        try {
            await ref.set(lobbyData);
            liveDuelRef = ref;
            isLiveDuelCreator = true;
            liveDuelResolving = false;
            liveDuelRenderKey = "";
            liveDuelResolvedRoundKey = "";
            maybeStartHostHeartbeat();
            subscribeLiveDuel();
        } catch (er) { handleError("kopfDuellErstellen", er, "Das Duell konnte nicht erstellt werden."); }
    }
    function wickeln() {
        if (typeof window.createLiveDuel !== "function" || window.createLiveDuel._kd) return;
        const c0 = window.createLiveDuel, s0 = window.startLiveDuelRound, r0 = window.restartLiveDuel;
        window.createLiveDuel = function () { return typJetzt() === "kopf" ? erstellen() : c0.apply(this, arguments); };
        window.createLiveDuel._kd = true;
        window.startLiveDuelRound = function () {
            if (typJetzt() !== "kopf") return s0.apply(this, arguments);
            starten(liveDuelRef).catch(function (er) { handleError("kopfDuellStart", er, "Start hat nicht geklappt."); });
        };
        window.restartLiveDuel = async function () {
            if (typJetzt() !== "kopf" || !liveDuelRef) return r0.apply(this, arguments);
            try {
                await starten(liveDuelRef);
                showToast("Neuer Sprint – alle sind dabei! 🧮");
            } catch (er) { handleError("kopfDuellNeu", er, "Die neue Runde konnte nicht gestartet werden."); }
        };
    }
    wickeln();

    // ---------------- Online-Lobby mit Code (auch für Freunde/Gäste) ----------------
    function codeEinbauen() {
        const bv = document.getElementById("coded-type-vokabel");
        if (bv && !document.getElementById("coded-type-kopf")) {
            const b = document.createElement("button");
            b.id = "coded-type-kopf";
            b.setAttribute("onclick", "setCodedLobbyType('kopf')");
            b.textContent = "🧮 Rechnen";
            bv.insertAdjacentElement("afterend", b);
        }
        const vo = document.getElementById("coded-lobby-vokabel-options");
        if (vo && !document.getElementById("coded-lobby-kopf-options")) {
            const d = document.createElement("div");
            d.id = "coded-lobby-kopf-options";
            d.className = "hidden space-y-2 text-center";
            d.innerHTML = `<div class="text-4xl">🧮</div>
                <p class="text-sm font-bold text-white">60-Sekunden-Kopfrechen-Sprint</p>
                <p class="text-xs text-gray-400">Jeder wählt im Warteraum seine eigene Stufe. Wer die meisten Aufgaben richtig hat, gewinnt.</p>
                ${modusHtml()}`;
            vo.insertAdjacentElement("afterend", d);
        }
        if (typeof window.setCodedLobbyType === "function" && !window.setCodedLobbyType._kd) {
            const t0 = window.setCodedLobbyType;
            window.setCodedLobbyType = function (type) {
                t0.apply(this, arguments);
                const k = document.getElementById("coded-type-kopf"), o = document.getElementById("coded-lobby-kopf-options");
                if (k) k.classList.toggle("active", type === "kopf");
                if (o) o.classList.toggle("hidden", type !== "kopf");
                const mode = document.getElementById("coded-lobby-mode");
                const modeBox = mode && mode.parentElement;
                if (modeBox) modeBox.classList.toggle("hidden", type === "kopf");
            };
            window.setCodedLobbyType._kd = true;
        }
        if (typeof window.createCodedLobby === "function" && !window.createCodedLobby._kd) {
            const c0 = window.createCodedLobby;
            window.createCodedLobby = function () {
                const k = document.getElementById("coded-type-kopf");
                return (k && k.classList.contains("active")) ? codeErstellen() : c0.apply(this, arguments);
            };
            window.createCodedLobby._kd = true;
        }
    }
    async function codeErstellen() {
        if (!currentParentUser) return showToast("Bitte zuerst einloggen.", "error");
        if (!currentPlayer || !ichKey()) return showToast("Bitte zuerst oben deinen Spieler auswählen!", "error");
        if (typeof reserveAndCreateLobby !== "function") return showToast("Online-Lobby gerade nicht verfügbar.", "error");
        const name = (currentPlayer.name && String(currentPlayer.name).trim()) || "Gastgeber";
        const players = {};
        players[ichKey()] = { name: name, score: 0, hasAnswered: false, lastAnswer: null, word: "", coinsClaimed: false, kopfStufe: standardStufe() };
        if (typeof showGlobalLoading === "function") showGlobalLoading("Lobby wird erstellt …");
        try {
            const res = await reserveAndCreateLobby(function (code) {
                return {
                    type: "kopf", mode: "versus", isCoded: true, status: "waiting", dauer: DAUER, kModus: gewaehlterModus,
                    createdBy: ichKey(), createdByName: name, players: players, code: code,
                    createdAt: Date.now(), hostLastSeen: Date.now(),
                    hostUid: (typeof auth !== "undefined" && auth.currentUser && auth.currentUser.uid) || null
                };
            });
            liveDuelType = "kopf";
            liveDuelRef = res.ref;
            isLiveDuelCreator = true;
            liveDuelResolving = false;
            liveDuelRenderKey = "";
            maybeStartHostHeartbeat();
            if (typeof merkeLobby === "function") merkeLobby(res.code);
            subscribeLiveDuel();
            showToast("Lobby erstellt! Code: " + res.code);
            setTimeout(function () { if (typeof inviteFriends === "function") inviteFriends(); }, 400);
        } catch (er) {
            handleError("kopfDuellCode", er, "Die Lobby konnte nicht erstellt werden.");
        } finally {
            if (typeof hideGlobalLoading === "function") hideGlobalLoading(true);
        }
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", codeEinbauen);
    else codeEinbauen();

    window.KopfDuell = {
        stufeWaehlen: stufeWaehlen, taste: taste, lobby: lobby, starten: starten, stopp: stopp,
        liveRender: liveRender, tvHost: tvHost, tvSpieler: tvSpieler, kurz: kurz,
        modus: modusSetzen, _modus: function () { return gewaehlterModus; },
        _gen: gen, _stufen: alleStufen, _standard: standardStufe, _klasse: klasseVon, _leichter: leichter
    };
})();
