        // ============================================================
        //  VOKABEL-TRAINER
        // ============================================================
        let activeLang = 'en',
            activeCategory = 'k1',
            vIndex = 0,
            vocabMode = 'flashcards',
            currentVocabList = [];

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
            loadVocabSystem();
        }

        function setVocabMode(m) {
            vocabMode = m;
            document.getElementById("vmode-flashcards").className =
                `flex-1 py-2 px-1 rounded-lg font-bold transition-all text-xs ${m === 'flashcards' ? 'active' : ''}`;
            document.getElementById("vmode-mc").className =
                `flex-1 py-2 px-1 rounded-lg font-bold transition-all text-xs ${m === 'mc' ? 'active' : ''}`;
            document.getElementById("vmode-typing").className =
                `flex-1 py-2 px-1 rounded-lg font-bold transition-all text-xs ${m === 'typing' ? 'active' : ''}`;
            showVocabQuestion();
        }

        function selectCategory(c) {
            activeCategory = c;
            vIndex = 0;
            currentVocabList = shuffleArray(VOCABULARY_DATABASE[activeLang][activeCategory].words);
            showVocabQuestion();
        }

        function leaveVocab() { switchView('family-hub'); }

        function loadVocabSystem() {
            if (typeof VOCABULARY_DATABASE === 'undefined') return alert("Fehler: vocabulary.js nicht gefunden!");
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

        function showVocabQuestion() {
            let list = currentVocabList.length ? currentVocabList : (currentVocabList = shuffleArray(VOCABULARY_DATABASE[activeLang][activeCategory].words)); if (list.length === 0) return;
            let lc = 0;
            list.forEach(i => { if (sessionLearnedWords.has(activeLang + "_" + activeCategory + "_" + i.foreign)) lc++; });
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
            document.getElementById("total-display").innerText = list.length;
            document.getElementById("current-index-display").innerText = vIndex + 1;
            const box = document.getElementById("vokabel-box");

            if (vocabMode === 'flashcards') {
                box.innerHTML =
                    `<div class="flip-card w-full h-48 cursor-pointer" onclick="this.classList.toggle('flipped')">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front glass-card-glow flex items-center justify-center font-bold text-3xl text-white" style="background:rgba(99,102,241,0.15);border-color:rgba(99,102,241,0.2);">${w.de}</div>
                                    <div class="flip-card-back glass-card-glow flex items-center justify-center font-bold text-3xl text-white" style="background:rgba(236,72,153,0.15);border-color:rgba(236,72,153,0.2);">${w.foreign}</div>
                                </div>
                            </div>
                            <button onclick="nextVocab(false)" class="mt-4 btn-primary w-full text-center">Nächstes Wort ➔</button>
                            <button onclick="nextVocab(true)" class="mt-2 btn-secondary w-full text-center text-sm">✅ Kann ich (Ausblenden)</button>`;
            } else if (vocabMode === 'mc') {
                let ops = [w.foreign];
                let ow = shuffleArray(list.filter(x => x.foreign !== w.foreign));
                for (let i = 0; i < 3 && i < ow.length; i++) ops.push(ow[i].foreign);
                ops = shuffleArray(ops);
                let h =
                    `<div class="glass-card-glow py-8 px-4 rounded-2xl text-3xl font-black mb-4 text-white" style="background:rgba(99,102,241,0.15);border-color:rgba(99,102,241,0.2);">${w.de}</div><div class="grid grid-cols-2 gap-2" id="mc-options">`;
                ops.forEach(o => {
                    h +=
                        `<button class="p-4 bg-white/5 border border-white/5 rounded-xl font-bold text-sm text-white hover:bg-white/10 transition" onclick="checkVocabMC(this, '${o}', '${w.foreign}')">${o}</button>`;
                });
                h +=
                    `</div><div id="mc-feedback" class="mt-4 hidden p-4 rounded-xl text-left shadow-inner"></div><button id="mc-next-btn" onclick="nextVocab(false)" class="mt-4 btn-primary w-full text-center hidden">Nächstes Wort ➔</button>`;
                box.innerHTML = h;
            } else {
                box.innerHTML =
                    `<div class="glass-card-glow py-8 px-4 rounded-2xl text-3xl font-black mb-4 text-white" style="background:rgba(99,102,241,0.15);border-color:rgba(99,102,241,0.2);">${w.de}</div>
                            <input type="text" id="vocab-typing-input" class="input-modern text-center mb-4 text-lg" placeholder="Tippen..." onkeypress="if(event.key==='Enter') checkVocabTyping('${w.foreign}')">
                            <button id="typing-check-btn" onclick="checkVocabTyping('${w.foreign}')" class="btn-primary w-full text-center" style="background:var(--gradient-green);box-shadow:0 4px 24px rgba(16,185,129,0.3);">Prüfen</button>
                            <div id="typing-feedback" class="mt-3 font-bold text-center"></div>
                            <button id="typing-next-btn" onclick="nextVocab(false)" class="mt-4 btn-primary w-full text-center hidden">Nächstes Wort ➔</button>`;
            }
        }

        function checkVocabMC(btn, sel, cor) {
            const p = document.getElementById("mc-options");
            let ans = false;
            Array.from(p.children).forEach(b => {
                if (b.disabled) ans = true;
                b.disabled = true;
                if (b.innerText === cor) b.className = "p-4 bg-emerald-600 rounded-xl font-bold text-white";
                else if (b.innerText === sel) b.className = "p-4 bg-rose-600 rounded-xl font-bold text-white opacity-50";
                else b.classList.add("opacity-50");
            });
            if (ans) return;
            const fb = document.getElementById("mc-feedback");
            fb.classList.remove("hidden");
            document.getElementById("mc-next-btn").classList.remove("hidden");
            if (sel === cor) {
                showToast("Richtig! +2 Coins");
                if (typeof confetti === 'function') confetti();
                SFX.correct();
                addXP(2);
                fb.className = "mt-4 p-4 rounded-xl text-left shadow-inner bg-white/5 border-l-4 border-emerald-500 block";
                fb.innerHTML =
                    `<div class="font-black text-emerald-400 mb-1">✅ Richtig!</div><div class="text-gray-300 text-sm">Sehr gut gemerkt.</div>`;
            } else {
                showToast("Falsch!", "error");
                fb.className = "mt-4 p-4 rounded-xl text-left shadow-inner bg-white/5 border-l-4 border-rose-500 block";
                fb.innerHTML =
                    `<div class="font-black text-rose-400 mb-1 flex items-center gap-2"><span class="text-xl">💡</span> Fehler-Analyse</div><div class="text-gray-300 text-sm">Du hast leider das falsche Wort gewählt.<br>Die richtige Übersetzung ist: <span class="text-white font-bold">${cor}</span></div>`;
            }
        }

        function checkVocabTyping(cor) {
            const i = document.getElementById("vocab-typing-input");
            const val = i.value.trim().toLowerCase();
            if (!val) return;
            i.disabled = true;
            document.getElementById("typing-check-btn").classList.add("hidden");
            document.getElementById("typing-next-btn").classList.remove("hidden");
            const fb = document.getElementById("typing-feedback");
            if (val === cor.toLowerCase()) {
                i.className = "input-modern text-center mb-4 text-lg bg-emerald-900/30 text-emerald-400 font-bold border-emerald-500/30";
                fb.innerHTML = `<span class="text-emerald-400">Perfekt! +5 Coins</span>`;
                showToast("Super!");
                if (typeof confetti === 'function') confetti();
                SFX.correct();
                sessionLearnedWords.add(activeLang + "_" + activeCategory + "_" + cor);
                addXP(5);
            } else {
                i.className = "input-modern text-center mb-4 text-lg bg-rose-900/30 text-rose-400 font-bold border-rose-500/30 line-through";
                fb.innerHTML =
                    `<div class="bg-white/5 border-l-4 border-rose-500 p-4 rounded-xl text-left mt-2 shadow-inner"><span class="text-rose-400 font-black block mb-1">💡 Achte auf die Schreibweise!</span><span class="text-gray-300 text-sm">Du hast getippt: ${val}<br>Korrekt ist: <span class="text-white font-bold text-lg">${cor}</span></span></div>`;
                showToast("Leider falsch!", "error");
            }
        }

        function nextVocab(known) {
            if (known) {
                sessionLearnedWords.add(`${activeLang}_${activeCategory}_${currentVocabList[vIndex].foreign}`);
                showToast("+2 Coins!", "success");
                addXP(2);
            }
            vIndex = (vIndex + 1) % currentVocabList.length;
            showVocabQuestion();
        }

