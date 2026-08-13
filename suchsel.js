        // ============================================================
        //  SUCHSEL (WORTSUCHRÄTSEL) – Solo
        //  Buchstabengitter, versteckte Wörter werden durch Ziehen
        //  (Maus/Finger) in einer geraden Linie markiert. Kein Duell,
        //  kein Firestore – reine Übung mit Timer und Coins am Ende.
        // ============================================================

        let suchselState = null;

        const SUCHSEL_DIFFICULTIES = {
            leicht: { label: "Leicht", count: 8, size: 9 },
            mittel: { label: "Mittel", count: 10, size: 11 },
            schwer: { label: "Schwer", count: 12, size: 13 }
        };

        // rechts, runter, diagonal runter-rechts, diagonal runter-links –
        // bewusst kein rückwärts/aufwärts, damit Wörter beim Lesen nicht
        // verwirren.
        const SUCHSEL_DIRS = [[0, 1], [1, 0], [1, 1], [1, -1]];
        const SUCHSEL_FILL_DE = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ";
        const SUCHSEL_FILL_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const SUCHSEL_THEME_LABELS = {
            gemischt: "🎲 Gemischt", tiere: "🐾 Tiere", schule: "📚 Schule",
            essen: "🍎 Essen", sport: "⚽ Sport", natur: "🌳 Natur",
            zuhause: "🏠 Zuhause", fahrzeuge: "🚗 Fahrzeuge"
        };

        // ------------------------------------------------------------
        //  SETUP
        // ------------------------------------------------------------
        function setupSuchselOptions() {
            const view = document.getElementById("view-suchsel-setup");
            if (view && !view.dataset.source) setSuchselSource("wortschatz");
            if (view && !view.dataset.difficulty) setSuchselDifficulty("mittel");

            const themeSel = document.getElementById("suchsel-word-theme");
            if (themeSel && !themeSel.dataset.filled && typeof GERMAN_WORDS_KIDS_THEMES !== "undefined") {
                themeSel.innerHTML = Object.keys(GERMAN_WORDS_KIDS_THEMES)
                    .map(k => `<option value="${k}">${SUCHSEL_THEME_LABELS[k] || k}</option>`).join("");
                themeSel.dataset.filled = "1";
            }
            toggleSuchselThemeRow();

            if (typeof VOCABULARY_DATABASE !== "undefined") {
                fillSuchselVocabClasses((document.getElementById("suchsel-lang") || {}).value || "en");
            }
        }

        function setSuchselSource(src) {
            const view = document.getElementById("view-suchsel-setup");
            if (view) view.dataset.source = src;
            ["wortschatz", "vokabeln"].forEach(s => {
                const btn = document.getElementById("suchsel-src-" + s);
                if (btn) btn.classList.toggle("active", s === src);
                const panel = document.getElementById("suchsel-panel-" + s);
                if (panel) panel.classList.toggle("hidden", s !== src);
            });
        }

        function setSuchselDifficulty(level) {
            const view = document.getElementById("view-suchsel-setup");
            if (view) view.dataset.difficulty = level;
            Object.keys(SUCHSEL_DIFFICULTIES).forEach(k => {
                const btn = document.getElementById("suchsel-diff-" + k);
                if (btn) btn.classList.toggle("active", k === level);
            });
        }

        function toggleSuchselThemeRow() {
            const mode = (document.getElementById("suchsel-wordmode") || {}).value || "kids";
            const row = document.getElementById("suchsel-theme-row");
            if (row) row.classList.toggle("hidden", mode === "adult");
        }

        function fillSuchselVocabClasses(lang) {
            const sel = document.getElementById("suchsel-vocab-class");
            if (!sel || typeof VOCABULARY_DATABASE === "undefined" || !VOCABULARY_DATABASE[lang]) return;
            const keys = Object.keys(VOCABULARY_DATABASE[lang]);
            sel.innerHTML = keys.map(k => `<option value="${k}">${esc(VOCABULARY_DATABASE[lang][k].label)}</option>`).join("");
            let preselect = keys[0];
            if (typeof currentPlayer !== "undefined" && currentPlayer && typeof playerGrade === "function") {
                const g = playerGrade(currentPlayer);
                if (g && keys.includes("k" + g)) preselect = "k" + g;
            }
            sel.value = preselect;
        }

        // ------------------------------------------------------------
        //  START
        // ------------------------------------------------------------
        function startSuchsel() {
            const view = document.getElementById("view-suchsel-setup");
            const source = (view && view.dataset.source) || "wortschatz";
            const diffKey = (view && view.dataset.difficulty) || "mittel";
            const conf = SUCHSEL_DIFFICULTIES[diffKey] || SUCHSEL_DIFFICULTIES.mittel;

            let candidates = [];
            let fillAlphabet = SUCHSEL_FILL_DE;

            if (source === "vokabeln") {
                if (typeof VOCABULARY_DATABASE === "undefined") return showToast("Die Vokabeln konnten nicht geladen werden.", "error");
                const lang = (document.getElementById("suchsel-lang") || {}).value || "en";
                const classKey = (document.getElementById("suchsel-vocab-class") || {}).value;
                const entry = VOCABULARY_DATABASE[lang] && VOCABULARY_DATABASE[lang][classKey];
                if (!entry) return showToast("Bitte eine Klasse wählen.", "error");
                candidates = entry.words
                    .filter(w => w.foreign && /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(w.foreign) && w.foreign.length >= 3 && w.foreign.length <= conf.size)
                    .map(w => ({ word: w.foreign.toUpperCase(), clue: w.de }));
                fillAlphabet = SUCHSEL_FILL_EN;
            } else {
                if (typeof GERMAN_WORDS_KIDS === "undefined") return showToast("Die Wortliste konnte nicht geladen werden.", "error");
                const mode = (document.getElementById("suchsel-wordmode") || {}).value || "kids";
                let pool;
                if (mode === "adult") {
                    pool = (typeof GERMAN_WORDS_ADULT !== "undefined") ? GERMAN_WORDS_ADULT : [];
                } else {
                    const theme = (document.getElementById("suchsel-word-theme") || {}).value || "gemischt";
                    const themed = (typeof GERMAN_WORDS_KIDS_THEMES !== "undefined") ? GERMAN_WORDS_KIDS_THEMES[theme] : null;
                    pool = themed || GERMAN_WORDS_KIDS;
                }
                candidates = pool
                    .filter(w => w.length >= 3 && w.length <= conf.size)
                    .map(w => ({ word: w, clue: null }));
            }

            const seen = new Set();
            candidates = shuffleArray(candidates).filter(c => {
                if (seen.has(c.word)) return false;
                seen.add(c.word);
                return true;
            });

            const chosenCount = Math.min(conf.count, candidates.length);
            if (chosenCount < 3) return showToast("Zu wenige passende Wörter für diese Auswahl.", "error");

            const chosen = candidates.slice(0, chosenCount);
            const built = generateSuchselGrid(chosen.map(c => c.word), conf.size, fillAlphabet);
            if (built.placed.length < 3) return showToast("Das Gitter konnte nicht gefüllt werden – bitte nochmal versuchen.", "error");

            const clueByWord = {};
            chosen.forEach(c => { clueByWord[c.word] = c.clue; });

            suchselState = {
                size: conf.size,
                grid: built.grid,
                placements: built.placements,
                words: built.placed,
                clues: clueByWord,
                found: new Set(),
                foundCellKeys: new Set(),
                selectingCells: [],
                dragging: false,
                dragStart: null,
                startedAt: Date.now(),
                timerInterval: null,
                finished: false
            };

            switchView("suchsel-play");
            renderSuchselGrid();
            renderSuchselWordlist();
            startSuchselTimer();
        }

        // ------------------------------------------------------------
        //  GITTER-GENERATOR
        // ------------------------------------------------------------
        function generateSuchselGrid(words, size, fillAlphabet) {
            const grid = Array.from({ length: size }, () => Array(size).fill(null));
            const placements = {};
            const placed = [];
            const order = [...words].sort((a, b) => b.length - a.length);

            order.forEach(word => {
                let done = false;
                for (let attempt = 0; attempt < 200 && !done; attempt++) {
                    const dir = SUCHSEL_DIRS[Math.floor(Math.random() * SUCHSEL_DIRS.length)];
                    const dr = dir[0], dc = dir[1];
                    const len = word.length;
                    let rMin = 0, rMax = size - 1, cMin = 0, cMax = size - 1;
                    if (dr > 0) rMax = size - len;
                    if (dc > 0) cMax = size - len;
                    else if (dc < 0) cMin = len - 1;
                    if (rMax < rMin || cMax < cMin) continue;

                    const r0 = rMin + Math.floor(Math.random() * (rMax - rMin + 1));
                    const c0 = cMin + Math.floor(Math.random() * (cMax - cMin + 1));

                    let fits = true;
                    const cells = [];
                    for (let i = 0; i < len; i++) {
                        const r = r0 + dr * i, c = c0 + dc * i;
                        const existing = grid[r][c];
                        if (existing !== null && existing !== word[i]) { fits = false; break; }
                        cells.push([r, c]);
                    }
                    if (!fits) continue;

                    cells.forEach(([r, c], i) => { grid[r][c] = word[i]; });
                    placements[word] = cells;
                    placed.push(word);
                    done = true;
                }
            });

            for (let r = 0; r < size; r++) {
                for (let c = 0; c < size; c++) {
                    if (grid[r][c] === null) {
                        grid[r][c] = fillAlphabet[Math.floor(Math.random() * fillAlphabet.length)];
                    }
                }
            }

            return { grid, placements, placed };
        }

        // ------------------------------------------------------------
        //  RENDERN
        // ------------------------------------------------------------
        function renderSuchselGrid() {
            const wrap = document.getElementById("suchsel-grid");
            if (!wrap || !suchselState) return;
            const size = suchselState.size;
            const cellPx = size >= 13 ? "text-[10px]" : size >= 11 ? "text-xs" : "text-sm";
            wrap.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            wrap.innerHTML = suchselState.grid.map((row, r) =>
                row.map((letter, c) =>
                    `<div class="suchsel-cell aspect-square flex items-center justify-center rounded-md font-black ${cellPx} bg-white/5 border border-white/5 text-gray-200 select-none" data-r="${r}" data-c="${c}">${esc(letter)}</div>`
                ).join("")
            ).join("");
            attachSuchselGridEvents();
        }

        function renderSuchselWordlist() {
            const box = document.getElementById("suchsel-wordlist");
            if (!box || !suchselState) return;
            box.innerHTML = suchselState.words.map(w => {
                const found = suchselState.found.has(w);
                const revealed = !found && suchselState.gaveUp;
                const label = suchselState.clues[w] ? esc(suchselState.clues[w]) : esc(w);
                let style = "";
                if (found) style = "text-decoration:line-through;opacity:.5;";
                else if (revealed) style = "text-decoration:line-through;opacity:.6;color:#fbbf24;";
                return `<span class="badge-pill" style="${style}">${revealed ? "🏳️ " : ""}${label}</span>`;
            }).join("");
            const counter = document.getElementById("suchsel-found-count");
            if (counter) counter.innerText = `${suchselState.found.size}/${suchselState.words.length}`;
        }

        function suchselSetCellState(el, state) {
            el.classList.remove("bg-white/5", "border-white/5", "text-gray-200",
                "bg-indigo-500", "border-indigo-400", "text-white",
                "bg-emerald-500/80", "border-emerald-400",
                "bg-amber-500/70", "border-amber-400");
            if (state === "selecting") el.classList.add("bg-indigo-500", "border-indigo-400", "text-white");
            else if (state === "found") el.classList.add("bg-emerald-500/80", "border-emerald-400", "text-white");
            else if (state === "revealed") el.classList.add("bg-amber-500/70", "border-amber-400", "text-white");
            else el.classList.add("bg-white/5", "border-white/5", "text-gray-200");
        }

        // ------------------------------------------------------------
        //  AUSWAHL PER MAUS/FINGER
        // ------------------------------------------------------------
        function suchselCellKey(r, c) { return r + "," + c; }

        function suchselCellsBetween(r0, c0, r1, c1) {
            const dr = r1 - r0, dc = c1 - c0;
            const steps = Math.max(Math.abs(dr), Math.abs(dc));
            if (steps === 0) return [[r0, c0]];
            const isStraight = (dr === 0) || (dc === 0) || (Math.abs(dr) === Math.abs(dc));
            if (!isStraight) return null;
            const sr = dr === 0 ? 0 : dr / Math.abs(dr);
            const sc = dc === 0 ? 0 : dc / Math.abs(dc);
            const cells = [];
            for (let i = 0; i <= steps; i++) cells.push([r0 + sr * i, c0 + sc * i]);
            return cells;
        }

        function suchselCellFromPoint(x, y) {
            const el = document.elementFromPoint(x, y);
            const cell = el && el.closest ? el.closest(".suchsel-cell") : null;
            if (!cell) return null;
            return { r: parseInt(cell.dataset.r, 10), c: parseInt(cell.dataset.c, 10) };
        }

        function attachSuchselGridEvents() {
            const wrap = document.getElementById("suchsel-grid");
            if (!wrap) return;
            wrap.style.touchAction = "none";
            wrap.onpointerdown = suchselGridPointerDown;
            wrap.onpointermove = suchselGridPointerMove;
        }

        function suchselGridPointerDown(e) {
            if (!suchselState || suchselState.finished) return;
            const cell = suchselCellFromPoint(e.clientX, e.clientY);
            if (!cell) return;
            suchselState.dragging = true;
            suchselState.dragStart = cell;
            suchselHighlightSelection(cell, cell);
            e.preventDefault();
        }

        function suchselGridPointerMove(e) {
            if (!suchselState || !suchselState.dragging) return;
            const cell = suchselCellFromPoint(e.clientX, e.clientY);
            if (!cell) return;
            suchselHighlightSelection(suchselState.dragStart, cell);
            e.preventDefault();
        }

        function suchselPointerUp(e) {
            if (!suchselState || !suchselState.dragging) return;
            suchselState.dragging = false;
            const cell = suchselCellFromPoint(e.clientX, e.clientY) || suchselState.dragStart;
            const path = suchselCellsBetween(suchselState.dragStart.r, suchselState.dragStart.c, cell.r, cell.c);
            clearSuchselSelectionStyle();
            if (path && path.length >= 2) evaluateSuchselPath(path);
            suchselState.dragStart = null;
        }

        // Läuft genau einmal beim Laden dieser Datei – reagiert nur,
        // solange ein Suchsel-Zug aktiv ist (siehe Guard oben).
        document.addEventListener("pointerup", suchselPointerUp);
        document.addEventListener("pointercancel", suchselPointerUp);

        function suchselHighlightSelection(start, end) {
            (suchselState.selectingCells || []).forEach(([r, c]) => {
                const el = document.querySelector(`#suchsel-grid [data-r="${r}"][data-c="${c}"]`);
                if (el) suchselSetCellState(el, suchselState.foundCellKeys.has(suchselCellKey(r, c)) ? "found" : "idle");
            });
            const path = suchselCellsBetween(start.r, start.c, end.r, end.c) || [[start.r, start.c]];
            suchselState.selectingCells = path;
            path.forEach(([r, c]) => {
                if (suchselState.foundCellKeys.has(suchselCellKey(r, c))) return;
                const el = document.querySelector(`#suchsel-grid [data-r="${r}"][data-c="${c}"]`);
                if (el) suchselSetCellState(el, "selecting");
            });
        }

        function clearSuchselSelectionStyle() {
            if (!suchselState) return;
            (suchselState.selectingCells || []).forEach(([r, c]) => {
                const el = document.querySelector(`#suchsel-grid [data-r="${r}"][data-c="${c}"]`);
                if (el) suchselSetCellState(el, suchselState.foundCellKeys.has(suchselCellKey(r, c)) ? "found" : "idle");
            });
            suchselState.selectingCells = [];
        }

        function evaluateSuchselPath(path) {
            const letters = path.map(([r, c]) => suchselState.grid[r][c]).join("");
            const reversed = letters.split("").reverse().join("");
            const match = suchselState.words.find(w => !suchselState.found.has(w) && (w === letters || w === reversed));
            if (match) markSuchselWordFound(match, path);
        }

        function markSuchselWordFound(word, cells) {
            if (!suchselState || suchselState.found.has(word)) return;
            suchselState.found.add(word);
            cells.forEach(([r, c]) => {
                suchselState.foundCellKeys.add(suchselCellKey(r, c));
                const el = document.querySelector(`#suchsel-grid [data-r="${r}"][data-c="${c}"]`);
                if (el) suchselSetCellState(el, "found");
            });
            if (typeof SFX !== "undefined") SFX.correct();
            renderSuchselWordlist();
            const wrap = document.getElementById("suchsel-grid");
            if (typeof showPointsPopup === "function") showPointsPopup(3, word, wrap);
            if (suchselState.found.size >= suchselState.words.length) finishSuchsel();
        }

        // ------------------------------------------------------------
        //  TIMER
        // ------------------------------------------------------------
        function startSuchselTimer() {
            stopSuchselTimer();
            if (!suchselState) return;
            updateSuchselTimerDisplay();
            suchselState.timerInterval = setInterval(updateSuchselTimerDisplay, 1000);
        }

        function updateSuchselTimerDisplay() {
            if (!suchselState) return;
            const el = document.getElementById("suchsel-timer");
            if (!el) return;
            const sec = Math.floor((Date.now() - suchselState.startedAt) / 1000);
            const m = String(Math.floor(sec / 60)).padStart(2, "0");
            const s = String(sec % 60).padStart(2, "0");
            el.innerText = `${m}:${s}`;
        }

        function stopSuchselTimer() {
            if (suchselState && suchselState.timerInterval) {
                clearInterval(suchselState.timerInterval);
                suchselState.timerInterval = null;
            }
        }

        function leaveSuchselPlay() {
            stopSuchselTimer();
            suchselState = null;
        }

        // Für Kinder, die nicht weiterkommen: zeigt alle fehlenden Wörter
        // im Gitter (amber statt grün) und beendet die Runde ohne weitere
        // Coins für diese Wörter.
        async function revealSuchsel() {
            if (!suchselState || suchselState.finished) return;
            const offen = suchselState.words.length - suchselState.found.size;
            if (offen <= 0) return;
            const ok = (typeof appConfirm === "function")
                ? await appConfirm(`Die ${offen} restlichen Wörter werden im Gitter gezeigt. Dafür gibt's keine Coins mehr.`, {
                    titel: "Suchsel auflösen?", icon: "🏳️", okText: "Auflösen", abbrechenText: "Weiter suchen", gefahr: true
                })
                : confirm("Suchsel auflösen? Für die restlichen Wörter gibt's keine Coins mehr.");
            if (!ok || !suchselState || suchselState.finished) return;

            suchselState.gaveUp = true;
            suchselState.words.forEach(w => {
                if (suchselState.found.has(w)) return;
                (suchselState.placements[w] || []).forEach(([r, c]) => {
                    suchselState.foundCellKeys.add(suchselCellKey(r, c));
                    const el = document.querySelector(`#suchsel-grid [data-r="${r}"][data-c="${c}"]`);
                    if (el) suchselSetCellState(el, "revealed");
                });
            });
            renderSuchselWordlist();
            finishSuchsel();
        }

        // ------------------------------------------------------------
        //  ENDE
        // ------------------------------------------------------------
        function finishSuchsel() {
            if (!suchselState || suchselState.finished) return;
            suchselState.finished = true;
            stopSuchselTimer();
            const seconds = Math.max(1, Math.floor((Date.now() - suchselState.startedAt) / 1000));
            const total = suchselState.words.length;
            const foundCount = suchselState.found.size;
            const gaveUp = !!suchselState.gaveUp;
            const speedBonus = (!gaveUp && seconds <= total * 12) ? 5 : 0;
            const coins = foundCount * 3 + speedBonus;

            if (typeof addXP === "function") addXP(coins);
            if (typeof SFX !== "undefined") SFX[gaveUp ? "tap" : "win"]();
            if (!gaveUp && typeof confetti === "function") confetti();

            const m = String(Math.floor(seconds / 60)).padStart(2, "0");
            const s = String(seconds % 60).padStart(2, "0");

            const title = gaveUp ? "Aufgelöst – nächstes Mal klappt's!" : "Alle Wörter gefunden!";
            const emoji = gaveUp ? "🏳️" : "🔍";
            const summary = gaveUp ? `${foundCount}/${total} selbst gefunden · +${coins} 🪙` : `${total} Wörter · +${coins} 🪙`;

            const box = document.getElementById("test-result-content");
            if (box) {
                box.innerHTML = `
        <div class="glass-card-glow p-8 text-center space-y-4" style="border-color:rgba(16,185,129,0.2);">
            <div class="text-7xl">${emoji}</div>
            <h2 class="text-2xl font-black text-white">${title}</h2>
            <div class="text-5xl font-black text-emerald-400">${m}:${s}</div>
            <div class="text-gray-400 font-bold">${summary}</div>
            <div class="flex gap-3 mt-4">
                <button onclick="switchView('suchsel-setup')" class="flex-1 p-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500 transition">🔄 Neues Suchsel</button>
                <button onclick="switchView('lernen')" class="flex-1 p-3 bg-emerald-600 rounded-xl font-bold text-white shadow-lg hover:bg-emerald-500 transition">⬅ Beenden</button>
            </div>
        </div>`;
            }
            switchView("test-result");
        }
