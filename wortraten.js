// ============================================================
//  WORT-RÄTSEL – freundliches Buchstaben-Duell (Anti-Galgenmann)
//  Mehrere Spieler raten reihum die Buchstaben eines gemeinsamen
//  Wortes. Bei jedem falschen Buchstaben wächst ein freundlicher
//  Schneemann oder Roboter – niemand wird "gehängt"! Wer die
//  meisten Buchstaben richtig errät, sammelt die meisten Punkte.
// ============================================================

const WORTRAETSEL_MAX_WRONG = 7; // = Anzahl Bau-Stufen der Figur

const WORTRAETSEL_DIFFICULTIES = {
    leicht: { label: "🟢 Leicht (3-5 Buchstaben)", minLen: 3, maxLen: 5 },
    mittel: { label: "🟡 Mittel (5-7 Buchstaben)", minLen: 5, maxLen: 7 },
    schwer: { label: "🔴 Schwer (7-10 Buchstaben)", minLen: 7, maxLen: 10 },
    experte: { label: "🟣 Experte (9+ Buchstaben)", minLen: 9, maxLen: 18 }
};

const WORTRAETSEL_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ".split("");

let wortratenState = null;
let wortratenSetupTheme = "schneemann";

// ============================================================
//  Reine Logik-Helfer (ohne DOM-Zugriff – gut testbar)
// ============================================================
function wrWordPool(wordmode) {
    const src = (wordmode === "adult" && typeof GERMAN_WORDS_ADULT !== "undefined")
        ? GERMAN_WORDS_ADULT
        : (typeof GERMAN_WORDS_KIDS !== "undefined" ? GERMAN_WORDS_KIDS : []);
    // Wörter mit "ß" rausfiltern - dafür gibt's keine eigene Taste auf der Tastatur
    return src.filter(w => !w.includes("ß") && !w.includes("ẞ"));
}

function wrPickWord(pool, minLen, maxLen, avoidSet) {
    const avoid = avoidSet || new Set();
    let filtered = pool.filter(w => w.length >= minLen && w.length <= maxLen && !avoid.has(w));
    if (filtered.length === 0) filtered = pool.filter(w => w.length >= minLen && w.length <= maxLen);
    if (filtered.length === 0) filtered = pool;
    const word = filtered[Math.floor(Math.random() * filtered.length)] || "";
    return String(word).toUpperCase().normalize("NFC");
}

function wrMaskArray(word, guessedSet) {
    return word.split("").map(ch => guessedSet.has(ch) ? ch : "_");
}

function wrIsComplete(word, guessedSet) {
    return word.length > 0 && word.split("").every(ch => guessedSet.has(ch));
}

function wrCountOccurrences(word, letter) {
    return word.split("").filter(ch => ch === letter).length;
}

// ============================================================
//  Freundliche Figur (SVG, baut sich in 7 Stufen auf)
// ============================================================
function wrFigureStagesSVG(theme) {
    if (theme === "roboter") {
        return [
            `<rect x="78" y="188" width="16" height="20" rx="3" fill="#94a3b8"/><rect x="106" y="188" width="16" height="20" rx="3" fill="#94a3b8"/><rect x="60" y="140" width="80" height="55" rx="12" fill="#cbd5e1" stroke="#64748b" stroke-width="3"/>`,
            `<rect x="75" y="150" width="50" height="30" rx="6" fill="#38bdf8" opacity="0.55" stroke="#0ea5e9" stroke-width="2"/><circle cx="85" cy="165" r="4" fill="#0ea5e9"/><circle cx="100" cy="165" r="4" fill="#0ea5e9"/><circle cx="115" cy="165" r="4" fill="#0ea5e9"/>`,
            `<rect x="72" y="78" width="56" height="48" rx="12" fill="#e2e8f0" stroke="#64748b" stroke-width="3"/>`,
            `<circle cx="88" cy="100" r="7" fill="#0ea5e9"/><circle cx="112" cy="100" r="7" fill="#0ea5e9"/><circle cx="88" cy="100" r="2.5" fill="#fff"/><circle cx="112" cy="100" r="2.5" fill="#fff"/>`,
            `<rect x="90" y="112" width="20" height="6" rx="2" fill="#64748b"/><line x1="93" y1="112" x2="93" y2="118" stroke="#334155" stroke-width="1.5"/><line x1="100" y1="112" x2="100" y2="118" stroke="#334155" stroke-width="1.5"/><line x1="107" y1="112" x2="107" y2="118" stroke="#334155" stroke-width="1.5"/>`,
            `<rect x="38" y="148" width="18" height="45" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2"/><rect x="144" y="148" width="18" height="45" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2"/><circle cx="47" cy="196" r="9" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/><circle cx="153" cy="196" r="9" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>`,
            `<line x1="100" y1="78" x2="100" y2="58" stroke="#64748b" stroke-width="3"/><circle cx="100" cy="52" r="7" fill="#f43f5e"/>`
        ];
    }
    // Schneemann (Standard)
    return [
        `<ellipse cx="100" cy="196" rx="14" ry="6" fill="#cbd5e1" opacity="0.5"/><circle cx="100" cy="168" r="50" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>`,
        `<circle cx="100" cy="108" r="38" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>`,
        `<circle cx="100" cy="58" r="26" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>`,
        `<circle cx="91" cy="53" r="3" fill="#1e293b"/><circle cx="109" cy="53" r="3" fill="#1e293b"/><path d="M88,68 Q100,76 112,68" stroke="#1e293b" stroke-width="2" fill="none" stroke-linecap="round"/>`,
        `<polygon points="100,58 120,63 100,69" fill="#f97316"/>`,
        `<line x1="65" y1="100" x2="28" y2="80" stroke="#92400e" stroke-width="4" stroke-linecap="round"/><line x1="135" y1="100" x2="172" y2="80" stroke="#92400e" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="150" r="4" fill="#1e293b"/><circle cx="100" cy="168" r="4" fill="#1e293b"/><circle cx="100" cy="186" r="4" fill="#1e293b"/>`,
        `<rect x="80" y="6" width="40" height="27" rx="2" fill="#1e293b"/><rect x="66" y="30" width="68" height="10" rx="2" fill="#1e293b"/><rect x="76" y="74" width="48" height="13" rx="3" fill="#ef4444"/><rect x="118" y="84" width="10" height="26" rx="2" fill="#ef4444"/>`
    ];
}

function wrFigureEmoji(theme) { return theme === "roboter" ? "🤖" : "⛄"; }
function wrFigureName(theme) { return theme === "roboter" ? "Robo" : "Schneemann"; }

function wrRenderFigureBase(theme) {
    const stages = wrFigureStagesSVG(theme);
    const groups = stages.map((markup, i) => `<g id="wr-stage-${i + 1}" class="hidden">${markup}</g>`).join("");
    const host = document.getElementById("wortraten-figure");
    if (!host) return;
    host.innerHTML = `
        <svg viewBox="0 0 200 220" class="w-full h-full">
            <ellipse cx="100" cy="208" rx="72" ry="8" fill="#000" opacity="0.07"/>
            ${groups}
        </svg>`;
}

function wrRevealFigureStage(n) {
    const g = document.getElementById(`wr-stage-${n}`);
    if (!g) return;
    g.classList.remove("hidden");
    try {
        g.style.transformOrigin = "center";
        requestAnimationFrame(() => {
            g.animate([
                { transform: "scale(0.4)", opacity: 0 },
                { transform: "scale(1.15)", opacity: 1 },
                { transform: "scale(1)", opacity: 1 }
            ], { duration: 380, easing: "ease-out" });
        });
    } catch (e) { /* Web Animations API evtl. nicht verfügbar - kein Problem */ }
}

// ============================================================
//  SETUP
// ============================================================
function openWortratenSetup() {
    const keys = Object.keys(ALL_PROFILES);
    if (keys.length === 0) return showToast("Ihr braucht mindestens einen Spieler!", "error");
    const box = document.getElementById("wortraten-player-checkboxes");
    box.innerHTML = keys.map((k, i) => `
        <label class="flex items-center gap-2 bg-white/5 border border-white/5 rounded-xl p-3 cursor-pointer hover:bg-white/10 transition">
            <input type="checkbox" class="wortraten-player-check w-5 h-5 accent-sky-500" value="${k}" ${i < 2 ? 'checked' : ''}>
            <span class="font-bold text-white text-sm">${esc(ALL_PROFILES[k].name)}</span>
        </label>`).join("");
    setWortratenTheme(wortratenSetupTheme);
    switchView('wortraten-setup');
}

function setWortratenTheme(theme) {
    wortratenSetupTheme = theme;
    const btnSnow = document.getElementById("wortraten-theme-schneemann");
    const btnRobo = document.getElementById("wortraten-theme-roboter");
    [[btnSnow, "schneemann"], [btnRobo, "roboter"]].forEach(([btn, name]) => {
        if (!btn) return;
        const active = theme === name;
        btn.classList.toggle("ring-2", active);
        btn.classList.toggle("ring-sky-400", active);
        btn.classList.toggle("bg-white/10", active);
    });
}

function startWortratenGame() {
    const checked = Array.from(document.querySelectorAll(".wortraten-player-check:checked")).map(c => c.value);
    if (checked.length === 0) return showToast("Bitte mindestens einen Spieler auswählen!", "error");
    const wordmode = (document.getElementById("wortraten-wordmode") || {}).value || "kids";
    const difficulty = (document.getElementById("wortraten-difficulty") || {}).value || "mittel";
    const rounds = parseInt((document.getElementById("wortraten-rounds") || {}).value || "3");

    wortratenState = {
        playerKeys: checked,
        wordmode,
        difficulty,
        theme: wortratenSetupTheme,
        rounds,
        round: 1,
        turnIndex: 0,
        scores: {},
        streaks: {},
        usedWords: new Set(),
        word: "",
        guessed: new Set(),
        wrongCount: 0,
        roundActive: false
    };
    checked.forEach(k => { wortratenState.scores[k] = 0; wortratenState.streaks[k] = 0; });

    switchView('wortraten-play');
    wrStartRound();
}

// ============================================================
//  RUNDEN-ABLAUF
// ============================================================
function wrStartRound() {
    const s = wortratenState;
    if (!s) return;
    const cfg = WORTRAETSEL_DIFFICULTIES[s.difficulty] || WORTRAETSEL_DIFFICULTIES.mittel;
    const pool = wrWordPool(s.wordmode);
    s.word = wrPickWord(pool, cfg.minLen, cfg.maxLen, s.usedWords);
    if (!s.word) {
        showToast("Hoppla, dafür haben wir gerade keine passenden Wörter. Bitte andere Einstellungen wählen!", "error");
        switchView('wortraten-setup');
        return;
    }
    s.usedWords.add(s.word);
    s.guessed = new Set();
    s.wrongCount = 0;
    s.roundActive = false;

    document.getElementById("wortraten-turn-intro").classList.remove("hidden");
    document.getElementById("wortraten-play-area").classList.add("hidden");

    const key = s.playerKeys[s.turnIndex % s.playerKeys.length];
    const isSolo = s.playerKeys.length === 1;
    document.getElementById("wortraten-turn-title").innerText = isSolo
        ? `Los geht's, ${esc(ALL_PROFILES[key].name)}!`
        : `${esc(ALL_PROFILES[key].name)} fängt an!`;
    document.getElementById("wortraten-turn-sub").innerText =
        `Runde ${s.round}/${s.rounds} – ${isSolo ? `knack deinen Highscore gegen den ${wrFigureName(s.theme)}!` : 'reihum Buchstaben wählen, Handy in der Mitte lassen.'}`;
}

function wrBeginRound() {
    const s = wortratenState;
    if (!s) return;
    s.roundActive = true;
    document.getElementById("wortraten-turn-intro").classList.add("hidden");
    document.getElementById("wortraten-play-area").classList.remove("hidden");
    document.getElementById("wortraten-progress").innerText = `Runde ${s.round}/${s.rounds}`;
    wrRenderFigureBase(s.theme);
    wrRenderWord();
    wrRenderKeyboard();
    wrRenderScores();
    wrUpdateTurnBanner();
}

function wrRenderWord() {
    const s = wortratenState;
    const mask = wrMaskArray(s.word, s.guessed);
    document.getElementById("wortraten-word-tiles").innerHTML = mask.map(ch => `
        <div class="w-9 h-11 sm:w-10 sm:h-12 border-b-4 ${ch === '_' ? 'border-sky-400/40' : 'border-emerald-400'} flex items-center justify-center text-xl sm:text-2xl font-black text-white">${ch === '_' ? '' : ch}</div>
    `).join("");
}

function wrRenderKeyboard() {
    const s = wortratenState;
    document.getElementById("wortraten-keyboard").innerHTML = WORTRAETSEL_ALPHABET.map(letter => {
        const used = s.guessed.has(letter);
        const correct = used && s.word.includes(letter);
        const cls = !used
            ? "bg-white/10 border border-white/10 text-white hover:bg-white/20"
            : correct
                ? "bg-emerald-500 border border-emerald-400 text-white opacity-90"
                : "bg-rose-500/70 border border-rose-400/50 text-white opacity-50";
        return `<button ${used ? 'disabled' : ''} onclick="wrGuessLetter('${letter}')"
            class="h-10 rounded-lg font-black text-sm sm:text-base transition ${cls}">${letter}</button>`;
    }).join("");
}

function wrRenderScores() {
    const s = wortratenState;
    const active = s.playerKeys[s.turnIndex % s.playerKeys.length];
    document.getElementById("wortraten-scores").innerHTML = s.playerKeys.map(k => `
        <div class="flex-shrink-0 px-3 py-2 rounded-xl border text-center ${k === active && s.roundActive ? 'bg-sky-500/20 border-sky-400 ring-2 ring-sky-400' : 'bg-white/5 border-white/5'}">
            <div class="text-xs font-bold text-white whitespace-nowrap">${esc(ALL_PROFILES[k].name)}</div>
            <div class="text-sm font-black text-sky-300">${s.scores[k]} Pkt.</div>
        </div>
    `).join("");
}

function wrUpdateTurnBanner() {
    const s = wortratenState;
    const key = s.playerKeys[s.turnIndex % s.playerKeys.length];
    const el = document.getElementById("wortraten-turn-banner");
    if (!el) return;
    el.innerText = s.playerKeys.length === 1
        ? "Wähl einen Buchstaben!"
        : `🎯 ${ALL_PROFILES[key].name} ist dran – wähl einen Buchstaben!`;
}

function wrGuessLetter(letter) {
    const s = wortratenState;
    if (!s || !s.roundActive || s.guessed.has(letter)) return;
    s.guessed.add(letter);
    const key = s.playerKeys[s.turnIndex % s.playerKeys.length];
    const isHit = s.word.includes(letter);

    wrRenderKeyboard();

    if (isHit) {
        const occ = wrCountOccurrences(s.word, letter);
        s.streaks[key] = (s.streaks[key] || 0) + 1;
        const b = (typeof calcAnswerBonus === "function") ? calcAnswerBonus(s.streaks[key], true) : { bonus: 0, parts: [] };
        let points = occ * 3 + b.bonus;
        wrRenderWord();
        if (typeof SFX !== "undefined") SFX.correct();

        if (wrIsComplete(s.word, s.guessed)) {
            points += 15;
            s.scores[key] += points;
            wrRenderScores();
            if (typeof showPointsPopup === "function") showPointsPopup(points, "Wort komplett! +15 🎉");
            wrEndRound(true, key);
            return;
        }
        s.scores[key] += points;
        wrRenderScores();
        if (typeof showPointsPopup === "function") showPointsPopup(points, b.parts.join(" · ") || "Treffer!");
    } else {
        s.streaks[key] = 0;
        s.wrongCount++;
        wrRevealFigureStage(s.wrongCount);
        if (typeof SFX !== "undefined") SFX.wrong();
        if (s.wrongCount >= WORTRAETSEL_MAX_WRONG) {
            wrEndRound(false, key);
            return;
        }
    }

    s.turnIndex = (s.turnIndex + 1) % s.playerKeys.length;
    wrRenderScores();
    wrUpdateTurnBanner();
}

function wrEndRound(solved) {
    const s = wortratenState;
    s.roundActive = false;
    wrRenderScores();
    if (solved) {
        showToast(`🎉 Gelöst! Das Wort war "${s.word}"`, "success");
        if (typeof SFX !== "undefined") SFX.win();
        try { if (typeof confetti === "function") confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } }); } catch (e) { }
    } else {
        showToast(`${wrFigureEmoji(s.theme)} ${wrFigureName(s.theme)} ist fertig gebaut! Das Wort war "${s.word}"`, "info");
    }
    setTimeout(() => {
        if (!wortratenState) return;
        wortratenState.round++;
        wortratenState.turnIndex = (wortratenState.turnIndex + 1) % wortratenState.playerKeys.length;
        if (wortratenState.round > wortratenState.rounds) { wrFinishGame(); return; }
        wrStartRound();
    }, 1700);
}

function wrFinishGame() {
    const s = wortratenState;
    const sorted = [...s.playerKeys].sort((a, b) => s.scores[b] - s.scores[a]);
    sorted.forEach((key, i) => { if (typeof awardXPToProfile === "function") awardXPToProfile(key, i === 0 ? 15 : 5); });

    const medals = ["🥇", "🥈", "🥉"];
    let html = `<div class="glass-card-glow p-8 text-center space-y-4" style="border-color:rgba(14,165,233,0.2);">
        <div class="text-6xl">${wrFigureEmoji(s.theme)}</div>
        <h2 class="text-2xl font-black text-white mb-2">Wort-Rätsel beendet!</h2>
        <div class="space-y-3 max-w-sm mx-auto">`;
    sorted.forEach((key, i) => {
        const medal = i < 3 ? medals[i] : `${i + 1}.`;
        html += `<div class="flex items-center justify-between bg-white/5 border ${i === 0 ? 'border-sky-400' : 'border-white/5'} rounded-xl p-3">
            <div class="flex items-center gap-3"><span class="text-2xl">${medal}</span><span class="font-bold text-white">${esc(ALL_PROFILES[key].name)}</span></div>
            <div class="font-black text-sky-300">${s.scores[key]} Pkt.</div>
        </div>`;
    });
    html += `</div>
        <div class="grid grid-cols-2 gap-3 mt-6">
            <button onclick="startWortratenGame()" class="btn-primary w-full text-center" style="background:var(--gradient-cool);box-shadow:0 4px 24px rgba(6,182,212,0.3);">🔄 Nochmal</button>
            <button onclick="switchView('menu')" class="btn-secondary w-full text-center">🏁 Beenden</button>
        </div>
    </div>`;
    document.getElementById("wortraten-result-content").innerHTML = html;
    wortratenState = null;
    switchView('wortraten-result');
    if (typeof renderFamilyHub === "function") renderFamilyHub();
}
