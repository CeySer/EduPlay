        // ============================================================
        //  VOKABEL-TRAINER
        // ============================================================
        let activeLang = 'en',
            activeCategory = 'k1',
            vIndex = 0,
            vocabMode = 'flashcards',
            currentVocabList = [];

        let vocabAnswerStreak = 0;

        const VOCAB_LANG_ENABLED = { en: true, tr: false };

        function isVocabLangEnabled(l) { return VOCAB_LANG_ENABLED[l] !== false; }

        function applyVocabLangSettings() {
            const langs = Object.keys(VOCAB_LANG_ENABLED);
            let visible = 0;
            langs.forEach(l => {
                const btn = document.getElementById("lang-btn-" + l);
                if (!btn) return;
                const on = isVocabLangEnabled(l);
                btn.classList.toggle("hidden", !on);
                if (on) visible++;
            });
            const bar = document.getElementById("lang-selector");
            if (bar) bar.classList.toggle("hidden", visible < 2);
        }

        function setLanguage(l) {
            if (!isVocabLangEnabled(l)) return;
            activeLang = l;
            vIndex = 0;
            vocabAnswerStreak = 0;
            loadVocabSystem();
        }

        function setVocabMode(m) {
            vocabMode = m;
            ["flashcards", "mc", "typing"].forEach(mode => {
                const el = document.getElementById("vmode-" + mode);
                if (el) el.classList.toggle("active", mode === m);
            });
            showVocabQuestion();
        }

        function selectCategory(c) {
            activeCategory = c;
            vIndex = 0;
            vocabAnswerStreak = 0;
            currentVocabList = shuffleArray(VOCABULARY_DATABASE[activeLang][activeCategory].words);
            showVocabQuestion();
        }

        function leaveVocab() { switchView('family-hub'); }

        function loadVocabSystem() {
            if (typeof VOCABULARY_DATABASE === 'undefined') {
                showToast("Die Vokabeln konnten nicht geladen werden. Bitte lade die App neu.", "error", "vocab-db");
                return;
            }
            applyVocabLangSettings();
            if (!isVocabLangEnabled(activeLang) || !VOCABULARY_DATABASE[activeLang]) {
                const fallback = Object.keys(VOCABULARY_DATABASE).find(isVocabLangEnabled);
                if (!fallback) return;
                activeLang = fallback;
            }
            const dd = document.getElementById("category-dropdown");
            dd.innerHTML = "";
            const keys = Object.keys(VOCABULARY_DATABASE[activeLang]);
            keys.forEach(k => {
                const n = VOCABULARY_DATABASE[activeLang][k].words.length;
                dd.innerHTML += `<option value="${k}">${VOCABULARY_DATABASE[activeLang][k].label} · ${n} Wörter</option>`;
            });
            let preselect = keys[0];
            if (currentPlayer && playerGrade(currentPlayer)) {
                const g = playerGrade(currentPlayer);
                if (g >= 1 && g <= 13) {
                    if (keys.includes("k" + g)) preselect = "k" + g;
                    else {
                        const grades = keys.map(k => parseInt(k.replace("k", ""))).filter(n => !isNaN(n));
                        if (grades.length) {
                            const nearest = grades.reduce((a, b) => Math.abs(b - g) < Math.abs(a - g) ? b : a);
                            preselect = "k" + nearest;
                        }
                    }
                }
            }
            dd.value = preselect;
            activeCategory = preselect;
            vIndex = 0;
            vocabAnswerStreak = 0;
            currentVocabList = shuffleArray(VOCABULARY_DATABASE[activeLang][activeCategory].words);
            showVocabQuestion();
        }

        function shuffleArray(array) {
            let arr = [...array];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        function updateVocabProgressUI(list) {
            const total = list.length || 0;
            const idx = total ? (vIndex % total) + 1 : 0;
            const cur = document.getElementById("current-index-display");
            const tot = document.getElementById("total-display");
            if (cur) cur.innerText = idx;
            if (tot) tot.innerText = total;

            const bar = document.getElementById("vocab-progress-bar");
            if (bar && total) bar.style.width = Math.round((idx / total) * 100) + "%";

            const streakEl = document.getElementById("vocab-streak-badge");
            if (streakEl) {
                if (vocabAnswerStreak >= 2) {
                    streakEl.classList.remove("hidden");
                    streakEl.innerHTML = `🔥 ${vocabAnswerStreak}er Streak`;
                } else {
                    streakEl.classList.add("hidden");
                }
            }
        }

        /** Punkte vergeben + Animation. firstTry = Bonus. Streak multipliziert. */
        function awardVocabPoints(base, opts) {
            opts = opts || {};
            const firstTry = !!opts.firstTry;
            let amount = base;
            let parts = [];

            if (firstTry) {
                amount += 1;
                parts.push("Schnell +1");
            }

            if (vocabAnswerStreak >= 2) {
                const bonus = Math.min(vocabAnswerStreak, 5);
                amount += bonus;
                parts.push(`Streak +${bonus}`);
            }

            if (typeof addXP === "function") addXP(amount);
            if (typeof showPointsPopup === "function") {
                showPointsPopup(amount, parts.join(" · "), document.getElementById("vokabel-box"));
            }
            return amount;
        }

        function onVocabCorrect(base, opts) {
            vocabAnswerStreak++;
            const total = awardVocabPoints(base, opts);
            if (typeof SFX !== "undefined") SFX.correct();
            updateVocabProgressUI(currentVocabList);
            return total;
        }

        function onVocabWrong() {
            vocabAnswerStreak = 0;
            updateVocabProgressUI(currentVocabList);
            if (typeof SFX !== "undefined") SFX.wrong();
        }

        function showVocabQuestion() {
            let list = currentVocabList.length
                ? currentVocabList
                : (currentVocabList = shuffleArray(VOCABULARY_DATABASE[activeLang][activeCategory].words));
            if (list.length === 0) return;

            let lc = 0;
            list.forEach(i => {
                if (sessionLearnedWords.has(activeLang + "_" + activeCategory + "_" + i.foreign)) lc++;
            });
            if (lc >= list.length) {
                showToast("Wörter resettet!");
                list.forEach(i => sessionLearnedWords.delete(activeLang + "_" + activeCategory + "_" + i.foreign));
                savePlayerProgress();
            }
            let sc = 0;
            while (sessionLearnedWords.has(activeLang + "_" + activeCategory + "_" + list[vIndex].foreign) && sc < list.length) {
                vIndex = (vIndex + 1) % list.length;
                sc++;
            }

            const w = list[vIndex];
            updateVocabProgressUI(list);
            const box = document.getElementById("vokabel-box");
            if (!box) return;

            if (vocabMode === "flashcards") {
                box.innerHTML = `
                    <div class="vocab-card-wrap">
                        <div class="flip-card vocab-flip" onclick="this.classList.toggle('flipped')">
                            <div class="flip-card-inner">
                                <div class="flip-card-front vocab-face vocab-face-front">
                                    <span class="vocab-face-label">Deutsch</span>
                                    <span class="vocab-face-word">${esc(w.de)}</span>
                                    <span class="vocab-face-hint">Tippen zum Umdrehen</span>
                                </div>
                                <div class="flip-card-back vocab-face vocab-face-back">
                                    <span class="vocab-face-label">Übersetzung</span>
                                    <span class="vocab-face-word">${esc(w.foreign)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="vocab-actions flex gap-2">
                            <button onclick="prevVocab()" class="btn-secondary flex-1 text-center">← Zurück</button>
                            <button onclick="nextVocab(false)" class="btn-primary flex-1 text-center">Weiter ➔</button>
                            <button onclick="nextVocab(true)" class="btn-secondary flex-1 text-center text-sm">✅ Kann ich</button>
                        </div>
                    </div>`;
            } else if (vocabMode === "mc") {
                let ops = [w.foreign];
                let ow = shuffleArray(list.filter(x => x.foreign !== w.foreign));
                for (let i = 0; i < 3 && i < ow.length; i++) ops.push(ow[i].foreign);
                ops = shuffleArray(ops);
                let h = `
                    <div class="vocab-card-wrap">
                        <div class="vocab-prompt">
                            <span class="vocab-face-label">Was heißt…</span>
                            <span class="vocab-prompt-word">${esc(w.de)}</span>
                        </div>
                        <div class="vocab-mc-grid" id="mc-options">`;
                ops.forEach(o => {
                    h += `<button type="button" class="vocab-mc-btn" onclick="checkVocabMC(this, '${esc(o).replace(/'/g, "\\'")}', '${esc(w.foreign).replace(/'/g, "\\'")}')">${esc(o)}</button>`;
                });
                h += `</div>
                        <div id="mc-feedback" class="vocab-feedback hidden"></div>
                        <button id="mc-next-btn" onclick="nextVocab(false)" class="btn-primary w-full text-center hidden mt-3">Weiter ➔</button>
                    </div>`;
                box.innerHTML = h;
            } else {
                box.innerHTML = `
                    <div class="vocab-card-wrap">
                        <div class="vocab-prompt">
                            <span class="vocab-face-label">Übersetze</span>
                            <span class="vocab-prompt-word">${esc(w.de)}</span>
                        </div>
                        <input type="text" id="vocab-typing-input" class="input-modern text-center text-lg"
                            placeholder="Antwort tippen…" autocomplete="off"
                            onkeypress="if(event.key==='Enter') checkVocabTyping('${esc(w.foreign).replace(/'/g, "\\'")}')">
                        <button id="typing-check-btn" onclick="checkVocabTyping('${esc(w.foreign).replace(/'/g, "\\'")}')"
                            class="btn-primary w-full text-center mt-3" style="background:var(--gradient-green);box-shadow:0 4px 24px rgba(16,185,129,0.25);">Prüfen</button>
                        <div id="typing-feedback" class="vocab-feedback mt-3"></div>
                        <button id="typing-next-btn" onclick="nextVocab(false)" class="btn-primary w-full text-center hidden mt-3">Weiter ➔</button>
                    </div>`;
                setTimeout(() => {
                    const inp = document.getElementById("vocab-typing-input");
                    if (inp) inp.focus();
                }, 80);
            }
        }

        function checkVocabMC(btn, sel, cor) {
            const p = document.getElementById("mc-options");
            if (!p) return;
            let already = false;
            Array.from(p.children).forEach(b => {
                if (b.disabled) already = true;
            });
            if (already) return;

            Array.from(p.children).forEach(b => {
                b.disabled = true;
                if (b.innerText === cor) b.classList.add("vocab-mc-correct");
                else if (b.innerText === sel) b.classList.add("vocab-mc-wrong");
                else b.classList.add("vocab-mc-dim");
            });

            const fb = document.getElementById("mc-feedback");
            const nextBtn = document.getElementById("mc-next-btn");
            if (nextBtn) nextBtn.classList.remove("hidden");
            if (fb) fb.classList.remove("hidden");

            if (sel === cor) {
                onVocabCorrect(2, { firstTry: true });
                if (fb) {
                    fb.className = "vocab-feedback vocab-feedback-ok";
                    fb.innerHTML = `<div class="font-black text-emerald-400">✅ Richtig!</div>`;
                }
            } else {
                onVocabWrong();
                showToast("Falsch!", "error");
                if (fb) {
                    fb.className = "vocab-feedback vocab-feedback-bad";
                    fb.innerHTML = `<div class="font-black text-rose-400 mb-1">💡 Lösung</div>
                        <div class="text-sm" style="color:var(--text-secondary)">Richtig: <strong style="color:var(--text-primary)">${esc(cor)}</strong></div>`;
                }
            }
        }

        function checkVocabTyping(cor) {
            const i = document.getElementById("vocab-typing-input");
            if (!i) return;
            const val = i.value.trim().toLowerCase();
            if (!val) return;
            i.disabled = true;
            const checkBtn = document.getElementById("typing-check-btn");
            const nextBtn = document.getElementById("typing-next-btn");
            if (checkBtn) checkBtn.classList.add("hidden");
            if (nextBtn) nextBtn.classList.remove("hidden");
            const fb = document.getElementById("typing-feedback");

            if (val === cor.toLowerCase()) {
                i.classList.add("vocab-input-ok");
                sessionLearnedWords.add(activeLang + "_" + activeCategory + "_" + cor);
                onVocabCorrect(5, { firstTry: true });
                if (fb) {
                    fb.className = "vocab-feedback vocab-feedback-ok";
                    fb.innerHTML = `<span class="text-emerald-400 font-bold">Perfekt!</span>`;
                }
            } else {
                i.classList.add("vocab-input-bad");
                onVocabWrong();
                showToast("Leider falsch!", "error");
                if (fb) {
                    fb.className = "vocab-feedback vocab-feedback-bad";
                    fb.innerHTML = `<div class="font-black text-rose-400 mb-1">💡 Schreibweise</div>
                        <div class="text-sm" style="color:var(--text-secondary)">Dein Tipp: ${esc(val)}<br>Korrekt: <strong style="color:var(--text-primary)">${esc(cor)}</strong></div>`;
                }
            }
        }

        function nextVocab(known) {
            if (known) {
                sessionLearnedWords.add(`${activeLang}_${activeCategory}_${currentVocabList[vIndex].foreign}`);
                onVocabCorrect(2, { firstTry: false });
            }
            vIndex = (vIndex + 1) % currentVocabList.length;
            showVocabQuestion();
        }

        function prevVocab() {
            if (!currentVocabList || !currentVocabList.length) return;
            vIndex = (vIndex - 1 + currentVocabList.length) % currentVocabList.length;
            showVocabQuestion();
        }
