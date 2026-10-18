// ============================================================
//  KOPFRECHEN-TRAINER
//  Aufgaben werden erzeugt (nicht aus Listen), das Kind tippt die
//  Lösung auf einem Zahlenfeld. Modi: Blitzrunde (60 s), Übungsrunde
//  (20 Aufgaben), Fehler wiederholen. Fortschritt: Rekorde, Sterne,
//  1×1-Übersicht. Eltern: zuweisen, per Link schicken, Übersicht.
//  Daten im Profil: kopfrechnen {rekorde, sterne, reihen, fehler},
//  kopfTag {tag, coins}, pendingKopfrechnen [], kopfNotices [].
// ============================================================
(function () {
    "use strict";

    const BLITZ_SEK = 60;
    const RUNDE_N = 20;
    const COINS_PRO_TAG = 40;
    const REKORD_BONUS = 5;

    function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
    function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    function zahl(n) {
        // Anzeige mit Dezimalkomma und echtem Minus
        let s = (Math.round(n * 1000) / 1000).toString().replace(".", ",");
        return s.replace("-", "−");
    }
    function e(s) { return (typeof esc === "function") ? esc(s) : String(s); }

    // ---------------- Stufen ----------------
    // gen(reihe) liefert {t: Anzeige, l: Lösung (Zahl), r: Reihe für die 1×1-Übersicht}
    const STUFEN = [
        { id: "k1_10", kl: 1, icon: "🍎", titel: "Plus & Minus bis 10", gen: function () {
            if (Math.random() < 0.5) { const a = rnd(0, 9), b = rnd(1, 10 - a); return { t: a + " + " + b, l: a + b }; }
            const a = rnd(2, 10), b = rnd(1, a); return { t: a + " − " + b, l: a - b };
        } },
        { id: "k1_20", kl: 1, icon: "🔟", titel: "Plus & Minus bis 20", gen: function () {
            if (Math.random() < 0.5) { const a = rnd(3, 9), b = rnd(11 - a, 9); return { t: a + " + " + b, l: a + b }; }
            const c = rnd(11, 18), b = rnd(c - 9, 9); return { t: c + " − " + b, l: c - b };
        } },
        { id: "k2_doppel", kl: 2, icon: "👯", titel: "Verdoppeln & Halbieren", gen: function () {
            if (Math.random() < 0.5) { const n = pick([rnd(2, 25), rnd(10, 50)]); return { t: "Das Doppelte von " + n, l: 2 * n }; }
            const n = 2 * pick([rnd(1, 25), rnd(10, 50)]); return { t: "Die Hälfte von " + n, l: n / 2 };
        } },
        { id: "k2_nachbar", kl: 2, icon: "↔️", titel: "Vorgänger & Nachfolger", gen: function () {
            const t = rnd(0, 3), ueber = Math.random() < 0.35;
            if (t === 0) { const n = ueber ? rnd(1, 9) * 10 - 1 : rnd(1, 98); return { t: "Nachfolger von " + n, l: n + 1 }; }
            if (t === 1) { const n = ueber ? rnd(1, 10) * 10 : rnd(2, 99); return { t: "Vorgänger von " + n, l: n - 1 }; }
            let n = rnd(11, 99); if (n % 10 === 0) n++;
            return t === 2 ? { t: "Zehner davor von " + n, l: Math.floor(n / 10) * 10 } : { t: "Zehner danach von " + n, l: Math.floor(n / 10) * 10 + 10 };
        } },
        { id: "k2_100", kl: 2, icon: "💯", titel: "Plus & Minus bis 100", gen: function () {
            const t = rnd(0, 3);
            if (t === 0) { const a = rnd(11, 89), b = rnd(2, 9); return a + b <= 100 ? { t: a + " + " + b, l: a + b } : { t: a + " − " + b, l: a - b }; }
            if (t === 1) { const a = rnd(2, 8) * 10, b = rnd(1, 9 - a / 10) * 10; return { t: a + " + " + b, l: a + b }; }
            if (t === 2) { const a = rnd(20, 99), b = rnd(11, a - 1); return { t: a + " − " + b, l: a - b }; }
            const a = rnd(11, 60), b = rnd(11, 100 - a); return { t: a + " + " + b, l: a + b };
        } },
        { id: "k2_1x1", kl: 2, icon: "✖️", titel: "Kleines 1×1", reihen: [2, 3, 4, 5, 6, 7, 8, 9, 10], gen: function (r) {
            const a = r || rnd(2, 10), b = rnd(1, 10);
            return { t: Math.random() < 0.5 ? a + " · " + b : b + " · " + a, l: a * b, r: a };
        } },
        { id: "k3_geteilt", kl: 3, icon: "➗", titel: "Geteilt (1×1 umgekehrt)", reihen: [2, 3, 4, 5, 6, 7, 8, 9, 10], gen: function (r) {
            const a = r || rnd(2, 10), b = rnd(1, 10);
            return { t: (a * b) + " : " + a, l: b, r: a };
        } },
        { id: "k3_mix", kl: 3, icon: "🔀", titel: "1×1 gemischt (mal & geteilt)", reihen: [2, 3, 4, 5, 6, 7, 8, 9, 10], gen: function (r) {
            const a = r || rnd(2, 10), b = rnd(1, 10);
            if (Math.random() < 0.5) return { t: Math.random() < 0.5 ? a + " · " + b : b + " · " + a, l: a * b, r: a };
            return { t: (a * b) + " : " + a, l: b, r: a };
        } },
        { id: "k3_1000", kl: 3, icon: "🏔️", titel: "Plus & Minus bis 1000", gen: function () {
            const t = rnd(0, 3);
            if (t === 0) { const a = rnd(10, 80) * 10, b = rnd(1, 9) * 10; return a + b <= 1000 ? { t: a + " + " + b, l: a + b } : { t: a + " − " + b, l: a - b }; }
            if (t === 1) { const a = rnd(1, 8) * 100, b = rnd(1, 9 - a / 100) * 100; return { t: a + " + " + b, l: a + b }; }
            if (t === 2) { const a = rnd(10, 99) * 10 + rnd(0, 5), b = rnd(6, 9); return { t: a + " − " + b, l: a - b }; }
            const a = rnd(100, 890), b = rnd(3, 9); return { t: a + " + " + b, l: a + b };
        } },
        { id: "k4_gross", kl: 4, icon: "🧱", titel: "Großes 1×1", reihen: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], gen: function (r) {
            const a = r || rnd(11, 20), b = rnd(2, 10);
            return Math.random() < 0.7 ? { t: a + " · " + b, l: a * b } : { t: (a * b) + " : " + b, l: a };
        } },
        { id: "k4_zehner", kl: 4, icon: "🔢", titel: "Mal & geteilt mit Zehnern", gen: function () {
            const t = rnd(0, 3), x = rnd(2, 9), y = rnd(2, 9);
            if (t === 0) return { t: (x * 10) + " · " + y, l: x * y * 10 };
            if (t === 1) return { t: (x * 100) + " · " + y, l: x * y * 100 };
            if (t === 2) return { t: (x * y * 10) + " : " + y, l: x * 10 };
            return { t: (x * y * 100) + " : " + y, l: x * 100 };
        } },
        { id: "k5_quadrat", kl: 5, icon: "⬛", titel: "Quadratzahlen", gen: function () {
            const n = rnd(2, 20);
            return Math.random() < 0.6 ? { t: n + "²", l: n * n } : { t: "√" + (n * n), l: n };
        } },
        { id: "k5_bruch", kl: 5, icon: "🍰", titel: "Bruchteile im Kopf", gen: function () {
            const d = pick([2, 3, 4, 5, 6, 8, 10]), k = rnd(2, 12);
            const gt = function (x, y) { return y ? gt(y, x % y) : x; };
            let z = rnd(1, d - 1); while (gt(z, d) !== 1) z = rnd(1, d - 1);
            return { t: z + "/" + d + " von " + (d * k), l: z * k };
        } },
        { id: "k6_dezimal", kl: 6, icon: "🔣", titel: "Dezimalzahlen im Kopf", gen: function () {
            const t = rnd(0, 3);
            if (t === 0) { const a = rnd(1, 9), b = rnd(1, 9); return { t: zahl(a / 10) + " + " + zahl(b / 10), l: (a + b) / 10 }; }
            if (t === 1) { const a = rnd(11, 99), b = rnd(1, 9) * 5; return { t: zahl(a / 100) + " + " + zahl(b / 100), l: (a + b) / 100 }; }
            if (t === 2) { const a = rnd(11, 999), f = pick([10, 100]); return { t: zahl(a / 100) + " · " + f, l: a * f / 100 }; }
            const a = rnd(11, 99); return { t: a + " : 10", l: a / 10 };
        } },
        { id: "k7_prozent", kl: 7, icon: "💯", titel: "Prozent im Kopf", gen: function () {
            const p = pick([10, 50, 25, 20, 5, 1, 75]);
            const basis = { 10: 10, 50: 2, 25: 4, 20: 5, 5: 20, 1: 100, 75: 4 }[p];
            const g = basis * rnd(2, p === 1 ? 9 : 30);
            return { t: p + " % von " + g, l: g * p / 100 };
        } },
        { id: "k7_negativ", kl: 7, icon: "🌡️", titel: "Negative Zahlen", gen: function () {
            const t = rnd(0, 2), a = rnd(-15, 15), b = rnd(-15, 15);
            const kl = function (n) { return n < 0 ? "(" + zahl(n) + ")" : zahl(n); };
            if (t === 0) return { t: zahl(a) + " + " + kl(b), l: a + b };
            if (t === 1) return { t: zahl(a) + " − " + kl(b), l: a - b };
            const x = rnd(-9, 9) || 2, y = rnd(-9, 9) || -3; return { t: zahl(x) + " · " + kl(y), l: x * y };
        } }
    ];
    function stufe(id) { return STUFEN.find(function (s) { return s.id === id; }); }
    function stufenTitel(id, reihe) {
        const s = stufe(id); if (!s) return "Kopfrechnen";
        return s.titel + (reihe ? " · " + reihe + "er-Reihe" : "");
    }

    // ---------------- Profil-Daten ----------------
    function daten(p) {
        p = p || currentPlayer;
        if (!p) return { rekorde: {}, sterne: {}, reihen: {}, fehler: [] };
        if (!p.kopfrechnen) p.kopfrechnen = {};
        const d = p.kopfrechnen;
        d.rekorde = d.rekorde || {}; d.sterne = d.sterne || {}; d.reihen = d.reihen || {}; d.fehler = d.fehler || [];
        return d;
    }
    function offeneKopfrechnen(p) { return (p && Array.isArray(p.pendingKopfrechnen)) ? p.pendingKopfrechnen.filter(function (x) { return x && x.id; }) : []; }
    window.offeneKopfrechnen = offeneKopfrechnen;

    function speichern() { if (typeof savePlayerProgress === "function") savePlayerProgress(); }

    function coinsGeben(n) {
        if (!currentPlayer || !(n > 0)) return 0;
        const heute = new Date().toISOString().slice(0, 10);
        if (!currentPlayer.kopfTag || currentPlayer.kopfTag.tag !== heute) currentPlayer.kopfTag = { tag: heute, coins: 0 };
        const rest = Math.max(0, COINS_PRO_TAG - currentPlayer.kopfTag.coins);
        const g = Math.min(n, rest);
        if (g > 0) {
            currentPlayer.kopfTag.coins += g;
            if (typeof addXP === "function") addXP(g);
        }
        return g;
    }

    // ---------------- Styles + Ansicht ----------------
    const CSS = `
    .kr-chip{padding:6px 12px;border-radius:999px;font-weight:800;font-size:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);color:inherit}
    .kr-chip.on{background:rgba(16,185,129,.25);border-color:rgba(16,185,129,.6)}
    .kr-stufe{width:100%;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);text-align:left;color:inherit}
    .kr-stufe:active{transform:scale(.99)}
    .kr-task{font-size:44px;font-weight:900;text-align:center;letter-spacing:.5px;min-height:60px;line-height:1.2}
    .kr-input{font-size:36px;font-weight:900;text-align:center;min-height:52px;border-radius:14px;background:rgba(255,255,255,.07);border:2px solid rgba(255,255,255,.12);padding:4px 10px}
    .kr-input.ok{border-color:#10b981;background:rgba(16,185,129,.18)}
    .kr-input.falsch{border-color:#f43f5e;background:rgba(244,63,94,.18)}
    .kr-pad{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
    .kr-pad button{font-size:24px;font-weight:900;padding:14px 0;border-radius:14px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.1);color:inherit;touch-action:manipulation}
    .kr-pad button:active{background:rgba(255,255,255,.2)}
    .kr-pad .kr-ok{background:linear-gradient(140deg,#10b981,#059669);color:#fff;grid-row:span 2}
    .kr-bar{height:8px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden}
    .kr-bar>div{height:100%;background:linear-gradient(90deg,#10b981,#f59e0b);transition:width .25s linear}
    .kr-grid{display:grid;grid-template-columns:repeat(9,1fr);gap:5px}
    .kr-zelle{border-radius:10px;padding:6px 0;text-align:center;font-weight:900;font-size:13px}
    .kr-schritt{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:14px;background:rgba(255,255,255,.07);font-size:20px;font-weight:900;opacity:0;transform:translateY(8px);animation:krEin .4s ease forwards}
    .kr-schritt:last-child{background:rgba(16,185,129,.2);border:1px solid rgba(16,185,129,.45)}
    .kr-schritt-nr{flex:0 0 26px;height:26px;border-radius:99px;background:rgba(245,158,11,.3);font-size:13px;display:flex;align-items:center;justify-content:center}
    @keyframes krEin{to{opacity:1;transform:none}}
    `;

    const HTML = `
    <div id="view-kopfrechnen" class="view hidden space-y-4">
      <div id="kr-home" class="space-y-4">
        <div class="flex items-center justify-between gap-2">
          <button class="btn-secondary text-sm py-2.5 px-4" onclick="switchView('lernen')">Zurück</button>
          <span class="text-sm font-bold text-gray-400">🧮 Kopfrechnen</span>
          <span style="width:64px"></span>
        </div>
        <div id="kr-challenge-box"></div>
        <div class="glass-card p-4 space-y-3">
          <div class="text-xs font-bold text-gray-400">Klasse</div>
          <div id="kr-klassen" class="flex flex-wrap gap-2"></div>
        </div>
        <div id="kr-stufen" class="space-y-2"></div>
        <div id="kr-fehler-box"></div>
        <div id="kr-1x1-box"></div>
        <div id="kr-tricks-box"></div>
      </div>

      <div id="kr-modus" class="hidden space-y-4">
        <div class="flex items-center justify-between gap-2">
          <button class="btn-secondary text-sm py-2.5 px-4" onclick="kopfZeigeHome()">Zurück</button>
          <span id="kr-modus-titel" class="text-sm font-bold text-gray-300 text-right"></span>
        </div>
        <div id="kr-reihen-box" class="glass-card p-4 space-y-2 hidden">
          <div class="text-xs font-bold text-gray-400">Welche Reihe?</div>
          <div id="kr-reihen" class="flex flex-wrap gap-2"></div>
        </div>
        <button id="kr-trick-btn" onclick="kopfTrickAnsehen()" class="w-full flex items-center gap-3 p-4 rounded-2xl text-left glass-card hidden">
          <span class="text-2xl">💡</span><span><span class="block text-sm font-black">Trick ansehen</span><span id="kr-trick-btn-text" class="block text-[11px] text-gray-400"></span></span>
        </button>
        <button onclick="kopfStart('blitz')" class="w-full flex items-center gap-4 p-5 rounded-2xl text-white text-left shadow-lg" style="background:linear-gradient(140deg,#f59e0b,#ef4444);">
          <span class="text-3xl">⚡</span><span><span class="block text-base font-black">Blitzrunde</span><span id="kr-rekord-text" class="block text-xs font-bold opacity-80">60 Sekunden – so viele wie möglich</span></span>
        </button>
        <button onclick="kopfStart('runde')" class="w-full flex items-center gap-4 p-5 rounded-2xl text-white text-left shadow-lg" style="background:linear-gradient(140deg,#10b981,#0ea5e9);">
          <span class="text-3xl">🎯</span><span><span class="block text-base font-black">Übungsrunde</span><span id="kr-sterne-text" class="block text-xs font-bold opacity-80">20 Aufgaben in Ruhe</span></span>
        </button>
      </div>

      <div id="kr-trick" class="hidden space-y-4">
        <div class="glass-card-glow p-5 space-y-3 text-center">
          <div id="kr-trick-kopf"></div>
          <p id="kr-trick-text" class="text-sm text-gray-200 text-left leading-relaxed"></p>
          <div id="kr-trick-schritte" class="space-y-2 text-left"></div>
        </div>
        <button id="kr-trick-ueben" onclick="kopfTrickUeben()" class="btn-primary w-full text-center">🎯 Trick üben (5 Aufgaben)</button>
        <button id="kr-trick-weiter" onclick="kopfTrickWeiter()" class="btn-secondary w-full text-center"></button>
      </div>

      <div id="kr-play" class="hidden space-y-3">
        <div class="flex items-center justify-between gap-2">
          <button class="btn-secondary text-sm py-2 px-3" onclick="kopfAbbrechen()">Beenden</button>
          <span id="kr-play-info" class="text-sm font-black text-amber-300"></span>
          <span id="kr-play-score" class="text-sm font-black text-emerald-300"></span>
        </div>
        <div class="kr-bar"><div id="kr-bar" style="width:100%"></div></div>
        <div class="glass-card p-5 space-y-3">
          <div id="kr-task" class="kr-task"></div>
          <div id="kr-input" class="kr-input">&nbsp;</div>
          <div id="kr-feedback" class="text-center text-sm font-bold" style="min-height:20px;white-space:pre-line"></div>
        </div>
        <div class="kr-pad">
          <button onclick="kopfTaste('7')">7</button><button onclick="kopfTaste('8')">8</button><button onclick="kopfTaste('9')">9</button><button onclick="kopfTaste('del')">⌫</button>
          <button onclick="kopfTaste('4')">4</button><button onclick="kopfTaste('5')">5</button><button onclick="kopfTaste('6')">6</button><button class="kr-ok" onclick="kopfTaste('ok')">OK</button>
          <button onclick="kopfTaste('1')">1</button><button onclick="kopfTaste('2')">2</button><button onclick="kopfTaste('3')">3</button>
          <button id="kr-key-minus" onclick="kopfTaste('-')">−</button><button onclick="kopfTaste('0')">0</button><button id="kr-key-komma" onclick="kopfTaste(',')">,</button><button onclick="kopfTaste('skip')" style="font-size:14px">weiter</button>
        </div>
      </div>

      <div id="kr-result" class="hidden space-y-4">
        <div class="glass-card-glow p-6 text-center space-y-3">
          <div id="kr-res-emoji" class="text-6xl">🎉</div>
          <h2 id="kr-res-titel" class="text-2xl font-black"></h2>
          <div id="kr-res-text" class="text-sm text-gray-300"></div>
          <div id="kr-res-extra" class="text-sm font-bold text-amber-300"></div>
        </div>
        <button id="kr-res-weiter" onclick="kopfNachTrick()" class="btn-primary w-full text-center hidden">▶ Jetzt die richtige Runde</button>
        <button onclick="kopfNochmal()" class="btn-primary w-full text-center">🔄 Nochmal</button>
        <button id="kr-res-share" onclick="kopfHerausfordern()" class="btn-secondary w-full text-center">📤 Freunde herausfordern</button>
        <button onclick="kopfZeigeHome()" class="btn-secondary w-full text-center">⬅ Zur Übersicht</button>
      </div>
    </div>`;

    function einbauen() {
        if (document.getElementById("view-kopfrechnen")) return;
        const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
        const ref = document.getElementById("view-lernen");
        if (!ref) return;
        ref.insertAdjacentHTML("afterend", HTML);
        document.addEventListener("keydown", function (ev) {
            const v = document.getElementById("view-kopfrechnen");
            const play = document.getElementById("kr-play");
            if (!v || v.classList.contains("hidden") || !play || play.classList.contains("hidden")) return;
            if (/^[0-9]$/.test(ev.key)) kopfTaste(ev.key);
            else if (ev.key === "Enter") kopfTaste("ok");
            else if (ev.key === "Backspace") kopfTaste("del");
            else if (ev.key === "," || ev.key === ".") kopfTaste(",");
            else if (ev.key === "-") kopfTaste("-");
            else return;
            ev.preventDefault();
        });
        dashboardEinbauen();
    }


    // ---------------- Tricks ----------------
    // passt(stufe, reihe) → gehört der Trick zu dieser Auswahl?
    // schritte: Beispiel Schritt für Schritt. hint(a): kurzer Tipp bei Fehlern.
    function zweiFaktoren(a) {
        const m = String(a.t).match(/^(\d+) · (\d+)$/);
        return m ? [Number(m[1]), Number(m[2])] : null;
    }
    function anderer(a) { const f = zweiFaktoren(a); if (!f || !a.r) return null; return f[0] === a.r ? f[1] : f[0]; }
    const TRICKS = [
        { id: "verliebt", icon: "💕", titel: "Verliebte Zahlen",
          passt: function (st) { return st === "k1_10"; },
          text: "Diese Paare ergeben zusammen genau 10. Wer sie kennt, rechnet blitzschnell.",
          schritte: ["1 + 9,  2 + 8,  3 + 7", "4 + 6,  5 + 5", "10 − 3 = ? → die Verliebte von 3 ist 7"],
          hint: function () { return "Verliebte Zahlen: 1+9, 2+8, 3+7, 4+6, 5+5"; } },
        { id: "zehner", icon: "🔟", titel: "Über die 10 springen",
          passt: function (st) { return st === "k1_20"; },
          text: "Rechne erst bis zur 10, dann den Rest. Beim Minus genauso – erst runter bis 10.",
          schritte: ["8 + 5", "8 + 2 = 10", "10 + 3 = 13"],
          hint: function (a) {
              let m = a.t.match(/^(\d+) \+ (\d+)$/);
              if (m) { const x = +m[1], y = +m[2], z = 10 - x; return "Erst bis 10: " + x + " + " + z + " = 10, dann + " + (y - z); }
              m = a.t.match(/^(\d+) − (\d+)$/);
              if (m) { const x = +m[1], y = +m[2], z = x - 10; return "Erst bis 10: " + x + " − " + z + " = 10, dann − " + (y - z); }
              return null;
          } },
        { id: "nachbarn", icon: "↔️", titel: "Vorgänger und Nachfolger",
          passt: function (st) { return st === "k2_nachbar"; },
          text: "Vorgänger = 1 weniger, Nachfolger = 1 mehr. Achtung bei 9 und 0 am Ende: Dann ändert sich der Zehner! Nachbarzehner sind die Zehnerzahlen links und rechts.",
          schritte: ["Nachfolger von 39", "39 + 1: nach der 9 kommt ein neuer Zehner", "= 40"],
          hint: function (a) {
              let m = a.t.match(/^Nachfolger von (\d+)$/);
              if (m) return +m[1] % 10 === 9 ? "Nach der 9 kommt ein neuer Zehner: " + m[1] + " + 1" : m[1] + " + 1";
              m = a.t.match(/^Vorgänger von (\d+)$/);
              if (m) return +m[1] % 10 === 0 ? "Vor der 0 wird der Zehner kleiner: " + m[1] + " − 1" : m[1] + " − 1";
              m = a.t.match(/^Zehner (davor|danach) von (\d+)$/);
              if (m) { const z = Math.floor(+m[2] / 10) * 10; return m[2] + " liegt zwischen " + z + " und " + (z + 10); }
              return null;
          } },
        { id: "doppel", icon: "👯", titel: "Zehner und Einer getrennt",
          passt: function (st) { return st === "k2_doppel"; },
          text: "Verdopple (oder halbiere) Zehner und Einer einzeln und zähle zusammen.",
          schritte: ["Doppelte von 36", "30 → 60   und   6 → 12", "60 + 12 = 72"],
          hint: function (a) {
              let m = a.t.match(/Doppelte von (\d+)/);
              if (m) { const n = +m[1], z = Math.floor(n / 10) * 10, e1 = n % 10; return z ? z + " → " + 2 * z + " und " + e1 + " → " + 2 * e1 : null; }
              m = a.t.match(/Hälfte von (\d+)/);
              if (m) { const n = +m[1], z = Math.floor(n / 20) * 20, r = n - z; return z && r ? "Hälfte von " + z + " = " + z / 2 + ", Hälfte von " + r + " = " + r / 2 : null; }
              return null;
          } },
        { id: "zehnerzuerst", icon: "🪜", titel: "Erst Zehner, dann Einer",
          passt: function (st) { return st === "k2_100" || st === "k3_1000"; },
          text: "Zerlege die zweite Zahl: erst die Zehner (oder Hunderter) dazu, dann den Rest.",
          schritte: ["47 + 25", "47 + 20 = 67", "67 + 5 = 72"],
          hint: function (a) {
              const m = a.t.match(/^(\d+) ([+−]) (\d+)$/);
              if (!m) return null;
              const x = +m[1], y = +m[3], gross = Math.floor(y / 10) * 10, rest = y - gross;
              if (!gross || !rest) return null;
              const z1 = m[2] === "+" ? x + gross : x - gross;
              return x + " " + m[2] + " " + gross + " = " + z1 + ", dann " + m[2] + " " + rest;
          } },
        { id: "r2", icon: "✌️", titel: "2er-Reihe: verdoppeln",
          passt: function (st, r) { return r === 2 && st !== "k3_geteilt"; },
          text: "2 mal eine Zahl ist einfach das Doppelte.", schritte: ["2 · 7", "7 + 7", "= 14"],
          hint: function (a) { const b = anderer(a); return b ? "2 · " + b + " = " + b + " + " + b : null; } },
        { id: "r4", icon: "🍀", titel: "4er-Reihe: doppelt verdoppeln",
          passt: function (st, r) { return r === 4 && st !== "k3_geteilt"; },
          text: "Verdopple die Zahl – und dann noch einmal.", schritte: ["4 · 7", "Doppelt: 14", "Nochmal doppelt: 28"],
          hint: function (a) { const b = anderer(a); return b ? b + " → " + 2 * b + " → " + 4 * b : null; } },
        { id: "r8", icon: "🐙", titel: "8er-Reihe: dreimal verdoppeln",
          passt: function (st, r) { return r === 8 && st !== "k3_geteilt"; },
          text: "Verdopple dreimal hintereinander: ×2, ×2, ×2.", schritte: ["8 · 6", "6 → 12 → 24", "→ 48"],
          hint: function (a) { const b = anderer(a); return b ? b + " → " + 2 * b + " → " + 4 * b + " → " + 8 * b : null; } },
        { id: "r5", icon: "🖐️", titel: "5er-Reihe: die Hälfte von 10",
          passt: function (st, r) { return r === 5 && st !== "k3_geteilt"; },
          text: "Rechne erst 10 mal, dann nimm die Hälfte.", schritte: ["5 · 8", "10 · 8 = 80", "Hälfte: 40"],
          hint: function (a) { const b = anderer(a); return b ? "10 · " + b + " = " + 10 * b + ", die Hälfte ist " + 5 * b : null; } },
        { id: "r9", icon: "🙌", titel: "9er-Reihe: 10 mal minus 1 mal",
          passt: function (st, r) { return r === 9 && st !== "k3_geteilt"; },
          text: "9 · n ist fast 10 · n – nur einmal n weniger. Fingertrick: Klappe den n-ten Finger ein, links stehen die Zehner, rechts die Einer.",
          schritte: ["9 · 6", "10 · 6 = 60", "60 − 6 = 54"],
          hint: function (a) { const b = anderer(a); return b ? "10 · " + b + " − " + b + " = " + 10 * b + " − " + b : null; } },
        { id: "r10", icon: "🔟", titel: "10er-Reihe: eine Null dran",
          passt: function (st, r) { return r === 10 && st !== "k3_geteilt"; },
          text: "Mal 10 heißt: hänge eine 0 an.", schritte: ["10 · 7", "7 und eine 0", "= 70"],
          hint: function (a) { const b = anderer(a); return b ? b + " mit einer 0 dran" : null; } },
        { id: "nachbar", icon: "🤝", titel: "3er, 6er, 7er: Nachbaraufgaben",
          passt: function (st, r) { return (r === 3 || r === 6 || r === 7) && st !== "k3_geteilt"; },
          text: "Nutze Aufgaben, die du schon kannst: 2 mal und 5 mal. Dann ein bisschen dazu.",
          schritte: ["7 · 6", "5 · 6 = 30   und   2 · 6 = 12", "30 + 12 = 42"],
          hint: function (a) {
              const b = anderer(a); if (!b) return null;
              if (a.r === 3) return "2 · " + b + " + " + b + " = " + 2 * b + " + " + b;
              if (a.r === 6) return "5 · " + b + " + " + b + " = " + 5 * b + " + " + b;
              return "5 · " + b + " + 2 · " + b + " = " + 5 * b + " + " + 2 * b;
          } },
        { id: "kern", icon: "🗝️", titel: "Kernaufgaben als Schlüssel",
          passt: function (st, r) { return st === "k2_1x1" && !r; },
          text: "1 mal, 2 mal, 5 mal und 10 mal kannst du schnell. Alle anderen Aufgaben leitest du davon ab.",
          schritte: ["6 · 7", "5 · 7 = 35", "35 + 7 = 42"],
          hint: function (a) { return null; } },
        { id: "umkehr", icon: "🔄", titel: "Geteilt: die Umkehraufgabe",
          passt: function (st) { return st === "k3_geteilt" || st === "k3_mix"; },
          text: "Frag dich: Welche Zahl mal den Teiler ergibt die große Zahl? Das ist dein 1×1 rückwärts.",
          schritte: ["42 : 7 = ?", "? · 7 = 42", "6 · 7 = 42 → also 6"],
          hint: function (a) { const m = a.t.match(/^(\d+) : (\d+)$/); return m ? "Denk rückwärts: ? · " + m[2] + " = " + m[1] : null; } },
        { id: "zerlegen", icon: "🧩", titel: "Großes 1×1: zerlegen",
          passt: function (st) { return st === "k4_gross"; },
          text: "Zerlege die große Zahl in 10 und den Rest, rechne beides und zähle zusammen.",
          schritte: ["14 · 6", "10 · 6 = 60   und   4 · 6 = 24", "60 + 24 = 84"],
          hint: function (a) {
              const m = a.t.match(/^(\d+) · (\d+)$/); if (!m) return null;
              const x = +m[1], y = +m[2]; return "10 · " + y + " + " + (x - 10) + " · " + y + " = " + 10 * y + " + " + (x - 10) * y;
          } },
        { id: "nullen", icon: "🙈", titel: "Nullen abdecken",
          passt: function (st) { return st === "k4_zehner"; },
          text: "Deck die Nullen ab, rechne mit den kleinen Zahlen und häng die Nullen wieder an.",
          schritte: ["30 · 7", "3 · 7 = 21", "eine Null dran: 210"],
          hint: function (a) {
              const m = a.t.match(/^(\d+) ([·:]) (\d+)$/); if (!m) return null;
              const x = m[1], nul = x.match(/0+$/); if (!nul) return null;
              if (m[2] === "·") return "Ohne Nullen: " + x.replace(/0+$/, "") + " · " + m[3] + ", dann " + nul[0].length + " Null(en) dran";
              let k = nul[0].length, vorn = x.slice(0, x.length - k);
              while (k > 0 && Number(vorn) % Number(m[3]) !== 0) { vorn += "0"; k--; }
              return "Deck " + k + " Null(en) ab: " + vorn + " : " + m[3] + " = " + Number(vorn) / Number(m[3]) + ", dann " + k + " Null(en) dran";
          } },
        { id: "quadrat", icon: "⬛", titel: "Quadratzahlen mit 5 am Ende",
          passt: function (st) { return st === "k5_quadrat"; },
          text: "Endet die Zahl auf 5: Nimm die Zehnerziffer mal ihren Nachfolger und hänge 25 an. Für √ fragst du: Welche Zahl mal sich selbst?",
          schritte: ["15²", "1 · 2 = 2", "25 anhängen: 225"],
          hint: function (a) {
              const m = a.t.match(/^(\d+)²$/);
              if (m && +m[1] % 10 === 5) { const z = Math.floor(+m[1] / 10); return z + " · " + (z + 1) + " = " + z * (z + 1) + ", dann 25 dran"; }
              if (m) return m[1] + " · " + m[1];
              const w = a.t.match(/^√(\d+)$/); return w ? "Welche Zahl mal sich selbst ist " + w[1] + "?" : null;
          } },
        { id: "bruchteil", icon: "🍰", titel: "Erst teilen, dann malnehmen",
          passt: function (st) { return st === "k5_bruch"; },
          text: "Teile durch den Nenner (unten) – so bekommst du ein Teil. Dann mal den Zähler (oben).",
          schritte: ["3/4 von 32", "32 : 4 = 8", "8 · 3 = 24"],
          hint: function (a) {
              const m = a.t.match(/^(\d+)\/(\d+) von (\d+)$/); if (!m) return null;
              const t = +m[3] / +m[2]; return m[3] + " : " + m[2] + " = " + t + ", dann · " + m[1];
          } },
        { id: "komma", icon: "↔️", titel: "Komma wandern lassen",
          passt: function (st) { return st === "k6_dezimal"; },
          text: "Mal 10: Komma 1 Stelle nach rechts. Mal 100: 2 Stellen. Durch 10: 1 Stelle nach links. Beim Plus: Zehntel zu Zehnteln, Hundertstel zu Hundertsteln.",
          schritte: ["2,35 · 10", "Komma 1 nach rechts", "= 23,5"],
          hint: function (a) {
              if (/· 10$/.test(a.t)) return "Mal 10: Komma 1 Stelle nach rechts";
              if (/· 100$/.test(a.t)) return "Mal 100: Komma 2 Stellen nach rechts";
              if (/: 10$/.test(a.t)) return "Durch 10: Komma 1 Stelle nach links";
              return "Zehntel zu Zehnteln: 0,7 + 0,5 = 12 Zehntel = 1,2";
          } },
        { id: "prozent", icon: "💯", titel: "Prozent-Abkürzungen",
          passt: function (st) { return st === "k7_prozent"; },
          text: "10 % = durch 10. 5 % = die Hälfte von 10 %. 50 % = die Hälfte. 25 % = ein Viertel. 1 % = durch 100.",
          schritte: ["15 % von 80", "10 % = 8   und   5 % = 4", "8 + 4 = 12"],
          hint: function (a) {
              const m = a.t.match(/^(\d+) % von (\d+)$/); if (!m) return null;
              const p = +m[1], g = +m[2];
              return { 10: "durch 10", 50: "die Hälfte", 25: "ein Viertel: durch 4", 20: "durch 5", 5: "10 % (= " + zahl(g / 10) + ") halbieren", 1: "durch 100", 75: "ein Viertel (" + zahl(g / 4) + ") mal 3" }[p] || null;
          } },
        { id: "negativ", icon: "🌡️", titel: "Negative Zahlen am Thermometer",
          passt: function (st) { return st === "k7_negativ"; },
          text: "Stell dir ein Thermometer vor: Plus geht hoch, Minus geht runter. Minus einer Minuszahl wird zu Plus. Beim Malnehmen: gleiche Vorzeichen → plus, verschiedene → minus.",
          schritte: ["3 − (−5)", "Minus minus wird plus", "3 + 5 = 8"],
          hint: function (a) {
              if (/− \(−/.test(a.t)) return "Minus minus wird plus";
              if (/\+ \(−/.test(a.t)) return "Plus minus wird minus";
              if (/·/.test(a.t)) return "Gleiche Vorzeichen → plus, verschiedene → minus";
              return "Am Thermometer: hoch bei Plus, runter bei Minus";
          } }
    ];
    function trickFuer(st, r) {
        return TRICKS.find(function (t) { return r && t.passt(st, r) && /^r\d|nachbar/.test(t.id); })
            || TRICKS.find(function (t) { return t.passt(st, r || 0); }) || null;
    }
    function trickHint(a, st) {
        if (/^\d+ : \d+$/.test(a.t) && st !== "k4_zehner") st = "k3_geteilt";
        const t = trickFuer(st || "", a.r || 0) || (a.r ? trickFuer("k2_1x1", a.r) : null);
        if (!t) return null;
        try { return (t.hint && t.hint(a)) || null; } catch (er) { return null; }
    }

    let trickDanach = null;
    function zeigeTrick(t, modusDanach) {
        const d = daten();
        d.tricks = d.tricks || {};
        if (!d.tricks[t.id]) { d.tricks[t.id] = Date.now(); speichern(); }
        trickDanach = modusDanach || null;
        zeigeTeil("kr-trick");
        document.getElementById("kr-trick-kopf").innerHTML = `<div style="font-size:52px">${t.icon}</div><h2 class="text-xl font-black text-amber-300">${e(t.titel)}</h2>`;
        document.getElementById("kr-trick-text").innerText = t.text;
        const box = document.getElementById("kr-trick-schritte");
        box.innerHTML = t.schritte.map(function (z, i) {
            return `<div class="kr-schritt" style="animation-delay:${0.35 + i * 0.7}s"><span class="kr-schritt-nr">${i + 1}</span>${e(z)}</div>`;
        }).join("");
        const weiter = document.getElementById("kr-trick-weiter");
        weiter.innerText = modusDanach ? (modusDanach === "blitz" ? "Überspringen – Blitzrunde starten ⚡" : "Überspringen – Runde starten 🎯") : "Zurück";
        document.getElementById("kr-trick-ueben").classList.toggle("hidden", !akt.stufe);
    }
    function kopfTrickAnsehen() {
        const t = trickFuer(akt.stufe, akt.reihe); if (t) zeigeTrick(t, null);
    }
    function kopfTrickWeiter() {
        if (trickDanach) { const m = trickDanach; trickDanach = null; kopfStart(m, true); }
        else if (akt.stufe) { zeigeTeil("kr-modus"); modusAnzeigen(); }
        else kopfZeigeHome();
    }
    function kopfTrickUeben() { kopfStart("trick", true); }
    function kopfTrickSammlung(id) {
        const t = TRICKS.find(function (x) { return x.id === id; }); if (!t) return;
        akt.stufe = null; zeigeTrick(t, null);
    }
    function tricksHtml() {
        const d = daten(), ids = Object.keys(d.tricks || {});
        const alle = TRICKS.length;
        if (!ids.length) return "";
        return `<div class="glass-card p-4 space-y-2">
            <div class="text-sm font-black">💡 Meine Tricks <span class="text-xs text-gray-400">${ids.length} von ${alle}</span></div>
            <div class="flex flex-wrap gap-2">${TRICKS.filter(function (t) { return d.tricks[t.id]; }).map(function (t) {
                return `<button class="kr-chip" onclick="kopfTrickSammlung('${t.id}')">${t.icon} ${e(t.titel)}</button>`; }).join("")}</div>
        </div>`;
    }

    // ---------------- Startseite ----------------
    let gewKlasse = null;
    let akt = { stufe: null, reihe: 0, ziel: 0, aufgabeId: null };

    function zeigeTeil(id) {
        ["kr-home", "kr-modus", "kr-trick", "kr-play", "kr-result"].forEach(function (x) {
            const el = document.getElementById(x); if (el) el.classList.toggle("hidden", x !== id);
        });
    }

    function sterneText(n) { return n ? "⭐".repeat(n) + "☆".repeat(3 - n) : "☆☆☆"; }

    function kopfOeffnen() {
        einbauen();
        if (gewKlasse === null) {
            const g = Number(currentPlayer && currentPlayer.grade) || 3;
            gewKlasse = Math.max(1, Math.min(7, g));
        }
        akt.ziel = 0; akt.aufgabeId = null;
        switchView("kopfrechnen");
        kopfZeigeHome();
    }

    function kopfZeigeHome() {
        stoppeTimer();
        zeigeTeil("kr-home");
        const d = daten();
        const kl = document.getElementById("kr-klassen");
        kl.innerHTML = [1, 2, 3, 4, 5, 6, 7].map(function (k) {
            return `<button class="kr-chip ${k === gewKlasse ? "on" : ""}" onclick="kopfKlasse(${k})">${k}${k === 7 ? "+" : ""}</button>`;
        }).join("");
        const liste = STUFEN.filter(function (s) { return s.kl === gewKlasse || (gewKlasse >= 2 && s.kl === gewKlasse - 1); });
        document.getElementById("kr-stufen").innerHTML = liste.map(function (s) {
            const rek = d.rekorde[s.id] || 0, st = d.sterne[s.id] || 0;
            return `<button class="kr-stufe" onclick="kopfStufe('${s.id}')">
                <span style="font-size:28px">${s.icon}</span>
                <span style="flex:1;min-width:0"><span class="block font-black text-sm">${e(s.titel)}</span>
                <span class="block text-[11px] text-gray-400">Klasse ${s.kl}${rek ? " · Rekord ⚡ " + rek : ""}</span></span>
                <span class="text-xs">${sterneText(st)}</span></button>`;
        }).join("");
        const fb = document.getElementById("kr-fehler-box");
        fb.innerHTML = d.fehler.length ? `<button onclick="kopfStart('fehler')" class="w-full flex items-center gap-4 p-4 rounded-2xl text-white text-left" style="background:linear-gradient(140deg,#8b5cf6,#ec4899);">
            <span class="text-2xl">🔁</span><span><span class="block font-black">Fehler wiederholen</span><span class="block text-xs opacity-80">${d.fehler.length} Aufgabe${d.fehler.length === 1 ? "" : "n"} zum Üben</span></span></button>` : "";
        document.getElementById("kr-1x1-box").innerHTML = einmaleinsHtml(currentPlayer, true);
        document.getElementById("kr-tricks-box").innerHTML = tricksHtml();
        const cb = document.getElementById("kr-challenge-box");
        if (cb) cb.innerHTML = "";
    }

    // 1×1-Übersicht (Kind und Eltern)
    function reihenStatus(p, r) {
        const s = (daten(p).reihen[r] || "");
        if (!s.length) return { f: "rgba(148,163,184,.18)", t: "–", q: null };
        const ok = s.split("").filter(function (c) { return c === "1"; }).length, q = ok / s.length;
        if (s.length >= 12 && q >= 0.9) return { f: "rgba(16,185,129,.45)", t: "✓", q: q };
        if (q < 0.7) return { f: "rgba(244,63,94,.40)", t: Math.round(q * 100) + "%", q: q };
        return { f: "rgba(245,158,11,.40)", t: Math.round(q * 100) + "%", q: q };
    }
    function einmaleinsHtml(p, kind) {
        if (!p) return "";
        const zellen = [2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (r) {
            const st = reihenStatus(p, r);
            const klick = kind ? ` onclick="kopfReiheUeben(${r})" style="background:${st.f};cursor:pointer"` : ` style="background:${st.f}"`;
            return `<div class="kr-zelle"${klick}><div>${r}er</div><div style="font-size:10px;opacity:.85">${st.t}</div></div>`;
        }).join("");
        return `<div class="glass-card p-4 space-y-2">
            <div class="text-sm font-black">📊 ${kind ? "Mein" : ""} 1×1</div>
            <div class="kr-grid">${zellen}</div>
            <div class="text-[10px] text-gray-400">Grün = sitzt (90 % richtig) · Gelb = fast · Rot = üben${kind ? " · Tippe eine Reihe an" : ""}</div>
        </div>`;
    }
    window.kopfEinmaleinsHtml = einmaleinsHtml;

    function kopfKlasse(k) { gewKlasse = k; kopfZeigeHome(); }
    function kopfReiheUeben(r) { akt.reihe = r; kopfStufe("k3_mix", r); }

    function kopfStufe(id, reihe) {
        const s = stufe(id); if (!s) return;
        akt.stufe = id; akt.ziel = 0; akt.aufgabeId = null;
        akt.reihe = reihe || (s.reihen && s.reihen.indexOf(akt.reihe) !== -1 ? akt.reihe : 0);
        zeigeTeil("kr-modus");
        modusAnzeigen();
    }
    function modusAnzeigen() {
        const s = stufe(akt.stufe), d = daten(), key = schluessel();
        document.getElementById("kr-modus-titel").innerText = s.icon + " " + s.titel;
        const rb = document.getElementById("kr-reihen-box");
        rb.classList.toggle("hidden", !s.reihen);
        if (s.reihen) {
            document.getElementById("kr-reihen").innerHTML = [0].concat(s.reihen).map(function (r) {
                return `<button class="kr-chip ${r === akt.reihe ? "on" : ""}" onclick="kopfReihe(${r})">${r ? r + "er" : "gemischt"}</button>`;
            }).join("");
        }
        const tr = trickFuer(akt.stufe, akt.reihe), tb = document.getElementById("kr-trick-btn");
        tb.classList.toggle("hidden", !tr);
        if (tr) document.getElementById("kr-trick-btn-text").innerText = tr.icon + " " + tr.titel;
        document.getElementById("kr-rekord-text").innerText = "60 Sekunden – so viele wie möglich" + (d.rekorde[key] ? " · Rekord: " + d.rekorde[key] : "");
        document.getElementById("kr-sterne-text").innerText = RUNDE_N + " Aufgaben in Ruhe · " + sterneText(d.sterne[key] || 0);
    }
    function kopfReihe(r) { akt.reihe = r; modusAnzeigen(); }
    function schluessel() { return akt.stufe + (akt.reihe ? ":" + akt.reihe : ""); }

    // ---------------- Spiel ----------------
    let sp = null, timer = null;
    function stoppeTimer() { if (timer) { clearInterval(timer); timer = null; } }

    function neueAufgabe() {
        if (sp.modus === "fehler") {
            if (!sp.fehlerListe.length) return null;
            const f = sp.fehlerListe.shift();
            return { t: f.t, l: f.l, r: f.r, fe: f };
        }
        const s = stufe(sp.stufe);
        let a, n = 0;
        do { a = s.gen(sp.reihe || 0); n++; } while (n < 8 && sp.letzte && a.t === sp.letzte);
        sp.letzte = a.t;
        return a;
    }

    function kopfStart(modus, ohneTrick) {
        einbauen();
        stoppeTimer();
        const d = daten();
        if (modus === "fehler" && !d.fehler.length) return kopfZeigeHome();
        if (!ohneTrick && (modus === "blitz" || modus === "runde")) {
            const t = trickFuer(akt.stufe, akt.reihe);
            if (t && !(d.tricks && d.tricks[t.id])) return zeigeTrick(t, modus);
        }
        if (modus === "trick") nachTrickModus = trickDanach || nachTrickModus || "runde";
        sp = {
            modus: modus, stufe: akt.stufe, reihe: akt.reihe, richtig: 0, falsch: 0, nr: 0,
            start: Date.now(), ende: modus === "blitz" ? Date.now() + BLITZ_SEK * 1000 : 0,
            eingabe: "", aufgabe: null, sperre: false, falschListe: [],
            fehlerListe: modus === "fehler" ? d.fehler.slice(0, RUNDE_N) : null
        };
        if (modus === "fehler") sp.gesamt = sp.fehlerListe.length;
        else sp.gesamt = modus === "blitz" ? 0 : (modus === "trick" ? 5 : RUNDE_N);
        zeigeTeil("kr-play");
        const inf = document.getElementById("kr-play-info");
        inf.innerText = modus === "blitz" ? "⚡ " + BLITZ_SEK + " s" : (modus === "fehler" ? "🔁 Fehler" : (modus === "trick" ? "💡 1 / " : "🎯 1 / ") + sp.gesamt);
        naechste();
        if (modus === "blitz") {
            timer = setInterval(function () {
                const v = document.getElementById("view-kopfrechnen");
                if (!sp || !v || v.classList.contains("hidden")) { stoppeTimer(); sp = null; return; }
                const rest = Math.max(0, sp.ende - Date.now());
                document.getElementById("kr-bar").style.width = (rest / (BLITZ_SEK * 10)) + "%";
                document.getElementById("kr-play-info").innerText = "⚡ " + Math.ceil(rest / 1000) + " s";
                if (rest <= 0) { stoppeTimer(); fertig(); }
            }, 200);
        }
    }

    function naechste() {
        if (sp.modus !== "blitz" && sp.nr >= sp.gesamt) return fertig();
        sp.aufgabe = neueAufgabe();
        if (!sp.aufgabe) return fertig();
        sp.nr++; sp.eingabe = ""; sp.sperre = false; sp.t0 = Date.now(); sp.tippGezeigt = false;
        document.getElementById("kr-task").innerText = sp.aufgabe.t + " =";
        const inp = document.getElementById("kr-input"); inp.className = "kr-input"; inp.innerHTML = "&nbsp;";
        document.getElementById("kr-feedback").innerText = "";
        document.getElementById("kr-play-score").innerText = "✓ " + sp.richtig;
        if (sp.modus !== "blitz") {
            document.getElementById("kr-play-info").innerText = (sp.modus === "fehler" ? "🔁 " : sp.modus === "trick" ? "💡 " : "🎯 ") + sp.nr + " / " + sp.gesamt;
            document.getElementById("kr-bar").style.width = ((sp.nr - 1) / sp.gesamt * 100) + "%";
        }
        const brauchtMinus = sp.aufgabe.l < 0 || sp.stufe === "k7_negativ";
        const brauchtKomma = String(sp.aufgabe.l).indexOf(".") !== -1 || sp.stufe === "k6_dezimal" || sp.stufe === "k7_prozent";
        document.getElementById("kr-key-minus").style.visibility = brauchtMinus ? "visible" : "hidden";
        document.getElementById("kr-key-komma").style.visibility = brauchtKomma ? "visible" : "hidden";
    }

    function wert(s) {
        if (!s || s === "-" || s === ",") return NaN;
        return Number(s.replace(",", "."));
    }
    function zeigeEingabe() {
        const inp = document.getElementById("kr-input");
        inp.innerText = sp.eingabe ? sp.eingabe.replace("-", "−") : " ";
    }

    function kopfTaste(k) {
        if (!sp || sp.sperre) return;
        if (k === "del") { sp.eingabe = sp.eingabe.slice(0, -1); return zeigeEingabe(); }
        if (k === "skip") return pruefen(true);
        if (k === "ok") return pruefen(false);
        if (k === "-") { sp.eingabe = sp.eingabe.charAt(0) === "-" ? sp.eingabe.slice(1) : "-" + sp.eingabe; return zeigeEingabe(); }
        if (k === ",") { if (sp.eingabe.indexOf(",") === -1) sp.eingabe += (sp.eingabe && sp.eingabe !== "-" ? "," : "0,"); return zeigeEingabe(); }
        if (sp.eingabe.replace(/[-,]/g, "").length >= 7) return;
        sp.eingabe += k;
        zeigeEingabe();
        // Richtig getippt? Dann sofort weiter (spart einen Tipp, verrät nichts)
        if (Math.abs(wert(sp.eingabe) - sp.aufgabe.l) < 1e-9 && zahl(sp.aufgabe.l).replace("−", "-") === sp.eingabe) pruefen(false);
    }

    function merkeReihe(r, ok) {
        if (!r || r < 2 || r > 10) return;
        const d = daten();
        d.reihen[r] = ((d.reihen[r] || "") + (ok ? "1" : "0")).slice(-20);
    }
    function merkeFehler(a) {
        const d = daten();
        d.fehler = d.fehler.filter(function (f) { return f.t !== a.t; });
        d.fehler.unshift({ t: a.t, l: a.l, r: a.r || 0, n: 0 });
        d.fehler = d.fehler.slice(0, 30);
    }

    function pruefen(uebersprungen) {
        if (!sp || !sp.aufgabe || sp.sperre) return;
        if (!uebersprungen && sp.eingabe === "") return;
        const a = sp.aufgabe;
        const ok = !uebersprungen && Math.abs(wert(sp.eingabe) - a.l) < 1e-9;
        sp.sperre = true;
        const inp = document.getElementById("kr-input"), fb = document.getElementById("kr-feedback");
        if (ok) {
            sp.richtig++;
            inp.className = "kr-input ok";
            fb.innerText = "";
            if (typeof SFX !== "undefined" && SFX.correct) SFX.correct();
            if (a.fe) {
                a.fe.n = (a.fe.n || 0) + 1;
                const d = daten();
                if (a.fe.n >= 2) d.fehler = d.fehler.filter(function (f) { return f.t !== a.fe.t; });
            }
        } else {
            sp.falsch++;
            sp.falschListe.push(a);
            inp.className = "kr-input falsch";
            inp.innerText = zahl(a.l);
            const tipp = trickHint(a, sp.stufe);
            fb.innerText = (uebersprungen ? "Lösung: " + a.t + " = " + zahl(a.l) : "Richtig ist " + zahl(a.l)) + (tipp ? "\n💡 " + tipp : "");
            sp.tippGezeigt = !!tipp;
            if (typeof SFX !== "undefined" && SFX.wrong) SFX.wrong();
            merkeFehler(a);
            if (a.fe) a.fe.n = 0;
        }
        merkeReihe(a.r, ok);
        setTimeout(function () {
            if (!sp) return;
            if (sp.modus === "blitz" && Date.now() >= sp.ende) return;
            naechste();
        }, ok ? 280 : (sp.tippGezeigt ? 2600 : 1300));
    }

    function kopfAbbrechen() {
        stoppeTimer();
        sp = null;
        speichern();
        kopfZeigeHome();
    }

    function fertig() {
        stoppeTimer();
        if (!sp) return;
        const s = sp; sp = null;
        const d = daten();
        const key = s.stufe + (s.reihe ? ":" + s.reihe : "");
        const sek = Math.round((Date.now() - s.start) / 1000);
        let titel = "Geschafft!", emoji = "🎉", text = "", extra = [];
        if (s.modus === "blitz") {
            const alt = d.rekorde[key] || 0;
            text = s.richtig + " richtig in " + BLITZ_SEK + " Sekunden" + (s.falsch ? " · " + s.falsch + " falsch" : "");
            if (s.richtig > alt) {
                d.rekorde[key] = s.richtig;
                if (alt > 0) { titel = "Neuer Rekord!"; emoji = "🏆"; const b = coinsGeben(REKORD_BONUS); if (b) extra.push("+" + b + " Rekord-Bonus"); }
                else { titel = "Erster Rekord!"; emoji = "⚡"; }
                if (typeof confetti === "function") confetti();
            } else { titel = s.richtig + " Aufgaben!"; emoji = "⚡"; text += " · Rekord: " + alt; }
            if (akt.ziel) {
                if (s.richtig > akt.ziel) { titel = "Herausforderung geschafft!"; emoji = "🥇"; if (typeof confetti === "function") confetti(); }
                else { titel = "Knapp! Ziel war mehr als " + akt.ziel; emoji = "💪"; }
            }
        } else {
            const n = s.richtig + s.falsch;
            text = s.richtig + " von " + n + " richtig · " + sek + " Sekunden";
            if (s.modus === "runde") {
                const stern = s.falsch <= 1 && sek <= n * 5 ? 3 : (s.falsch <= 3 ? 2 : 1);
                if (stern > (d.sterne[key] || 0)) d.sterne[key] = stern;
                titel = sterneText(stern); emoji = stern === 3 ? "🌟" : "👍";
            } else if (s.modus === "trick") {
                titel = s.falsch === 0 ? "Trick sitzt!" : "Gut geübt!"; emoji = "💡";
            } else {
                titel = d.fehler.length ? "Weiter so!" : "Alle Fehler ausgebügelt!";
                emoji = d.fehler.length ? "🔁" : "🧽";
            }
        }
        const c = coinsGeben(s.richtig);
        if (c) extra.unshift("+" + c + " Coins");
        else if (s.richtig && currentPlayer && currentPlayer.kopfTag && currentPlayer.kopfTag.coins >= COINS_PRO_TAG) extra.push("Coin-Tageslimit erreicht – Üben lohnt sich trotzdem!");
        aufgabeAbhaken(s);
        if (typeof SFX !== "undefined" && SFX.win) SFX.win();
        speichern();
        letzteRunde = { modus: s.modus, stufe: s.stufe, reihe: s.reihe, richtig: s.richtig };
        document.getElementById("kr-res-emoji").innerText = emoji;
        document.getElementById("kr-res-titel").innerText = titel;
        document.getElementById("kr-res-text").innerText = text;
        document.getElementById("kr-res-extra").innerText = extra.join(" · ");
        document.getElementById("kr-res-share").classList.toggle("hidden", s.modus !== "blitz" || !s.richtig);
        const rw = document.getElementById("kr-res-weiter");
        rw.classList.toggle("hidden", s.modus !== "trick");
        rw.innerText = nachTrickModus === "blitz" ? "⚡ Jetzt die Blitzrunde" : "🎯 Jetzt die Übungsrunde";
        zeigeTeil("kr-result");
    }
    let letzteRunde = null;
    let nachTrickModus = null;
    function kopfNachTrick() { const m = nachTrickModus || "runde"; nachTrickModus = null; kopfStart(m, true); }

    function kopfNochmal() {
        if (!letzteRunde) return kopfZeigeHome();
        akt.stufe = letzteRunde.stufe; akt.reihe = letzteRunde.reihe;
        kopfStart(letzteRunde.modus);
    }

    // ---------------- Teilen / Herausforderung ----------------
    function linkFuer(modus, st, reihe, ziel) {
        return location.origin + location.pathname + "?aufgabe=R." + [modus, st, reihe || 0, ziel || 0].join("~");
    }
    function teilen(text) {
        if (navigator.share) navigator.share({ text: text }).catch(function () { });
        else window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
    }
    function kopfHerausfordern() {
        if (!letzteRunde) return;
        const r = letzteRunde;
        teilen("⚡ Ich habe " + r.richtig + " Aufgaben in 60 Sekunden geschafft (" + stufenTitel(r.stufe, r.reihe) + ")!\nSchaffst du mehr? 👉 "
            + linkFuer("blitz", r.stufe, r.reihe, r.richtig));
    }

    function parseId(id) {
        const t = String(id || "").split("~");
        if (t.length < 3 || !stufe(t[1])) return null;
        const modus = ["blitz", "runde", "fehler"].indexOf(t[0]) !== -1 ? t[0] : "runde";
        return { modus: modus, stufe: t[1], reihe: Number(t[2]) || 0, ziel: Number(t[3]) || 0, basis: t.slice(0, 3).join("~") };
    }
    function kopfTitelAusId(id) {
        const c = parseId(id); if (!c) return "Kopfrechnen";
        return "🧮 " + (c.modus === "blitz" ? "Blitzrunde: " : "Übungsrunde: ") + stufenTitel(c.stufe, c.reihe) + (c.ziel ? " – schlage " + c.ziel + "!" : "");
    }
    window.kopfTitelAusId = kopfTitelAusId;

    // Aufruf aus versucheAufgabenLink (family-dashboard.js)
    function kopfStartAusLink(id) {
        const c = parseId(id); if (!c) return kopfOeffnen();
        einbauen();
        gewKlasse = stufe(c.stufe).kl;
        switchView("kopfrechnen");
        akt.stufe = c.stufe; akt.reihe = c.reihe; akt.ziel = c.ziel; akt.aufgabeId = c.basis;
        zeigeTeil("kr-modus");
        modusAnzeigen();
        if (c.ziel) {
            document.getElementById("kr-rekord-text").innerText = "Herausforderung: schaffe mehr als " + c.ziel + " in 60 Sekunden!";
        }
        const auf = offeneKopfrechnen(currentPlayer).find(function (x) { return x.id === c.basis; });
        if (auf && typeof showToast === "function") showToast("🧮 Aufgabe: " + (auf.runden || 1) + "× " + (auf.modus === "blitz" ? "Blitzrunde" : "Übungsrunde"), "info");
    }
    window.kopfStartAusLink = kopfStartAusLink;

    // ---------------- Zuweisungen (Kind-Seite) ----------------
    function kopfStartAufgabe(id) {
        const t = offeneKopfrechnen(currentPlayer).find(function (x) { return x.id === id; });
        if (!t) return;
        kopfStartAusLink(t.id + "~0");
    }
    window.kopfStartAufgabe = kopfStartAufgabe;

    function aufgabeAbhaken(s) {
        if (!currentPlayer || s.modus === "fehler") return;
        const id = s.modus + "~" + s.stufe + "~" + (s.reihe || 0);
        const liste = offeneKopfrechnen(currentPlayer);
        const t = liste.find(function (x) { return x.id === id; });
        if (!t) return;
        t.erledigt = (t.erledigt || 0) + 1;
        if (t.erledigt >= (t.runden || 1)) {
            currentPlayer.pendingKopfrechnen = liste.filter(function (x) { return x !== t; });
            currentPlayer.kopfNotices = [{ id: t.id, title: t.title, at: Date.now(), ergebnis: s.richtig, seen: false }]
                .concat(currentPlayer.kopfNotices || []).slice(0, 8);
            if (typeof showToast === "function") showToast("✅ Kopfrechen-Aufgabe erledigt!", "success");
            if (typeof addZeit === "function") addZeit(5);
        } else if (typeof showToast === "function") {
            showToast("🧮 Noch " + ((t.runden || 1) - t.erledigt) + " Runde(n) für deine Aufgabe", "info");
        }
        if (typeof renderAufgabenKarte === "function") renderAufgabenKarte();
    }

    // ---------------- Eltern-Dashboard ----------------
    function dashboardEinbauen() {
        if (document.getElementById("dash-kopf-card")) return;
        const kurs = document.getElementById("dash-kurszuw-body");
        const karte = kurs && kurs.closest(".glass-card");
        if (!karte) return;
        const opt = STUFEN.map(function (s) { return `<option value="${s.id}">Kl. ${s.kl} · ${e(s.titel)}</option>`; }).join("");
        karte.insertAdjacentHTML("afterend", `
        <div id="dash-kopf-card" class="glass-card overflow-hidden">
            <button type="button" onclick="kopfDashToggle()" class="w-full px-4 py-4 flex items-center justify-between hover:bg-white/5 transition">
                <span class="text-base font-black text-amber-300">🧮 Kopfrechnen zuweisen</span>
                <span id="dash-kopf-arrow" class="text-gray-400 transition-transform">▼</span>
            </button>
            <div id="dash-kopf-body" class="hidden px-4 pb-4 space-y-2">
                <p class="text-[11px] text-gray-500">Eine Trainingsrunde für das Kind im Fokus. Erscheint bei „Aufgaben für dich“.</p>
                <select id="dash-kopf-stufe" class="input-modern text-sm" onchange="kopfDashReihen()">${opt}</select>
                <select id="dash-kopf-reihe" class="input-modern text-sm hidden"></select>
                <div class="flex gap-2">
                    <select id="dash-kopf-modus" class="input-modern text-sm flex-1"><option value="runde">🎯 Übungsrunde (20)</option><option value="blitz">⚡ Blitzrunde (60 s)</option></select>
                    <select id="dash-kopf-runden" class="input-modern text-sm w-24"><option value="1">1×</option><option value="2">2×</option><option value="3">3×</option><option value="5">5×</option></select>
                </div>
                <label class="text-[11px] text-gray-500 font-bold block mb-1">Fällig bis (optional)</label>
                <input type="date" id="dash-kopf-deadline" class="input-modern text-sm">
                <button type="button" onclick="kopfZuweisen(false)" class="btn-primary w-full text-center">Kopfrechnen zuweisen 🧮</button>
                <button type="button" onclick="kopfZuweisen(true)" class="btn-secondary w-full text-center text-sm">📤 Zuweisen &amp; per WhatsApp schicken</button>
                <div id="dash-kopf-notices" class="space-y-2"></div>
                <div id="dash-kopf-1x1"></div>
            </div>
        </div>`);
        kopfDashReihen();
    }
    function dashKey() { return (document.getElementById("dash-test-profile") || {}).value || activePlayerKey; }
    function kopfDashToggle() {
        const b = document.getElementById("dash-kopf-body"), a = document.getElementById("dash-kopf-arrow");
        const auf = b.classList.contains("hidden");
        b.classList.toggle("hidden", !auf);
        if (a) a.style.transform = auf ? "rotate(180deg)" : "";
        if (auf) kopfDashRender();
    }
    function kopfDashReihen() {
        const s = stufe((document.getElementById("dash-kopf-stufe") || {}).value);
        const sel = document.getElementById("dash-kopf-reihe");
        if (!sel) return;
        sel.classList.toggle("hidden", !(s && s.reihen));
        sel.innerHTML = s && s.reihen ? [0].concat(s.reihen).map(function (r) { return `<option value="${r}">${r ? r + "er-Reihe" : "Alle Reihen gemischt"}</option>`; }).join("") : "";
    }
    function profilSpeichern(key, patch) {
        if (!currentParentUser || isAnonGuest) return;
        db.collection("parents").doc(currentParentUser.uid).collection("profiles").doc(key).update(patch)
            .catch(function (er) { if (typeof handleError === "function") handleError("kopfrechnen", er, "Konnte nicht gespeichert werden."); });
    }
    function kopfZuweisen(mitTeilen) {
        const key = dashKey(), p = ALL_PROFILES[key];
        if (!p) return showToast("Kein Kind ausgewählt!", "error");
        const st = document.getElementById("dash-kopf-stufe").value;
        const s = stufe(st);
        const reihe = s && s.reihen ? Number(document.getElementById("dash-kopf-reihe").value) || 0 : 0;
        const modus = document.getElementById("dash-kopf-modus").value === "blitz" ? "blitz" : "runde";
        const runden = Number(document.getElementById("dash-kopf-runden").value) || 1;
        const faellig = document.getElementById("dash-kopf-deadline").value || "";
        const id = modus + "~" + st + "~" + reihe;
        const title = (modus === "blitz" ? "Blitzrunde: " : "Übungsrunde: ") + stufenTitel(st, reihe) + (runden > 1 ? " (" + runden + "×)" : "");
        const liste = offeneKopfrechnen(p).filter(function (x) { return x.id !== id; });
        liste.push({ id: id, modus: modus, stufe: st, reihe: reihe, runden: runden, erledigt: 0, title: title, faellig: faellig, createdAt: new Date().toISOString() });
        p.pendingKopfrechnen = liste;
        if (currentPlayer && activePlayerKey === key && currentPlayer !== p) currentPlayer.pendingKopfrechnen = liste;
        profilSpeichern(key, { pendingKopfrechnen: liste });
        showToast("Kopfrechnen zugewiesen.", "success");
        kopfDashRender();
        if (typeof renderAufgabenKarte === "function") renderAufgabenKarte();
        if (mitTeilen) {
            let frist = "";
            if (faellig) { try { frist = " – bis " + new Date(faellig + "T12:00").toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "numeric" }); } catch (er) { } }
            teilen("🧮 Kopfrechen-Aufgabe für " + (p.name || "dich") + frist + ":\n• " + title + "\n\nHier geht's direkt los 👉 " + linkFuer(modus, st, reihe, 0));
        }
    }
    function kopfZuruecknehmen(id) {
        const key = dashKey(), p = ALL_PROFILES[key];
        if (!p) return;
        const liste = offeneKopfrechnen(p).filter(function (x) { return x.id !== id; });
        p.pendingKopfrechnen = liste;
        if (currentPlayer && activePlayerKey === key && currentPlayer !== p) currentPlayer.pendingKopfrechnen = liste;
        profilSpeichern(key, { pendingKopfrechnen: liste });
        kopfDashRender();
    }
    function kopfNoticeOk(i) {
        const key = dashKey(), p = ALL_PROFILES[key];
        if (!p || !p.kopfNotices || !p.kopfNotices[i]) return;
        p.kopfNotices[i].seen = true;
        profilSpeichern(key, { kopfNotices: p.kopfNotices });
        kopfDashRender();
    }
    function kopfDashRender() {
        const box = document.getElementById("dash-kopf-notices");
        if (!box) return;
        const key = dashKey(), p = ALL_PROFILES[key];
        if (!p) { box.innerHTML = ""; return; }
        const ft = (typeof faelligText === "function") ? faelligText : function () { return ""; };
        let html = offeneKopfrechnen(p).map(function (t) {
            return `<div class="flex items-center justify-between gap-2 bg-white/5 rounded-lg px-2.5 py-2">
                <span class="text-[11px] font-bold text-amber-200 min-w-0 truncate">Offen: ${e(t.title)} · ${t.erledigt || 0}/${t.runden || 1}${ft(t)}</span>
                <button type="button" onclick="kopfZuruecknehmen('${e(t.id)}')" class="text-[10px] font-black text-gray-400 hover:text-white shrink-0">✕ Zurücknehmen</button></div>`;
        }).join("");
        (p.kopfNotices || []).forEach(function (n, i) {
            if (n.seen) return;
            html += `<div class="flex items-start justify-between gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-2.5 py-2">
                <div class="text-[11px] font-bold text-emerald-200">Fertig: ${e(n.title)}${n.ergebnis != null ? " · " + n.ergebnis + " richtig" : ""}</div>
                <button type="button" class="text-[10px] font-black text-gray-400" onclick="kopfNoticeOk(${i})">OK</button></div>`;
        });
        box.innerHTML = html;
        const g = document.getElementById("dash-kopf-1x1");
        if (g) g.innerHTML = einmaleinsHtml(p, false) + rekordeHtml(p);
    }
    function rekordeHtml(p) {
        const d = daten(p);
        const zeilen = Object.keys(d.rekorde).map(function (k) {
            const t = k.split(":"); return `<div class="flex justify-between text-[11px]"><span class="text-gray-300">${e(stufenTitel(t[0], Number(t[1]) || 0))}</span><span class="text-amber-300 font-black">⚡ ${d.rekorde[k]}</span></div>`;
        }).join("");
        return zeilen ? `<div class="glass-card p-4 space-y-1 mt-2"><div class="text-sm font-black mb-1">⚡ Blitz-Rekorde</div>${zeilen}</div>` : "";
    }
    // Für die Spieler-Statistik im Dashboard
    window.kopfDashboardHtml = function (p) {
        const d = daten(p);
        if (!Object.keys(d.reihen).length && !Object.keys(d.rekorde).length) return "";
        return einmaleinsHtml(p, false) + rekordeHtml(p);
    };

    // ---------------- Global ----------------
    Object.assign(window, {
        kopfOeffnen: kopfOeffnen, kopfZeigeHome: kopfZeigeHome, kopfKlasse: kopfKlasse, kopfStufe: kopfStufe,
        kopfReihe: kopfReihe, kopfReiheUeben: kopfReiheUeben, kopfStart: kopfStart, kopfTaste: kopfTaste,
        kopfAbbrechen: kopfAbbrechen, kopfTrickAnsehen: kopfTrickAnsehen, kopfTrickWeiter: kopfTrickWeiter,
        kopfTrickUeben: kopfTrickUeben, kopfTrickSammlung: kopfTrickSammlung, kopfNachTrick: kopfNachTrick, KOPF_TRICKS: TRICKS, kopfNochmal: kopfNochmal, kopfHerausfordern: kopfHerausfordern,
        kopfDashToggle: kopfDashToggle, kopfDashReihen: kopfDashReihen, kopfZuweisen: kopfZuweisen,
        kopfZuruecknehmen: kopfZuruecknehmen, kopfNoticeOk: kopfNoticeOk, kopfDashRender: kopfDashRender,
        KOPF_STUFEN: STUFEN
    });

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", einbauen);
    else einbauen();
})();
