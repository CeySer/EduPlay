        // Entwickler-Ansicht: nur sichtbar für isDevAdmin()
        function openDevAdmin() {
            if (typeof isDevAdmin !== "function" || !isDevAdmin()) {
                return showToast("Nur für den Entwickler.", "error");
            }
            switchView("dev-admin");
            fillDevBrowserFilters();
            loadDevSignups();
            if (typeof renderDevPanel === "function") renderDevPanel();
        }
        window.openDevAdmin = openDevAdmin;

        function funCategoryKeys() {
            const set = {};
            if (typeof FUN_CATEGORIES !== "undefined" && Array.isArray(FUN_CATEGORIES)) {
                FUN_CATEGORIES.forEach(function (s) { if (s && s.key) set[s.key] = s.label || s.key; });
            }
            return set;
        }
        function curriculumMap() {
            const byKey = {};
            if (typeof CURRICULUM !== "undefined" && Array.isArray(CURRICULUM)) {
                CURRICULUM.forEach(function (g) {
                    (g.subjects || []).forEach(function (s) {
                        byKey[s.key] = { grade: g.label || "", subject: s.label || s.key };
                    });
                });
            }
            return byKey;
        }
        function catLabel(key) {
            const fun = funCategoryKeys();
            if (fun[key]) return fun[key];
            const cur = curriculumMap()[key];
            if (cur) return cur.subject;
            if (typeof CATEGORY_LABELS !== "undefined" && CATEGORY_LABELS[key]) return CATEGORY_LABELS[key];
            if (typeof labelFuerKategorie === "function") return labelFuerKategorie(key) || key;
            return key;
        }
        function isFunCategory(key) {
            if (funCategoryKeys()[key]) return true;
            return /^(spass_|kinder_|schaetzen_)/.test(key || "");
        }

        function fillDevBrowserFilters() {
            const grade = document.getElementById("dev-filter-grade");
            const cat = document.getElementById("dev-filter-cat");
            if (!grade || !cat) return;
            const mode = ((document.getElementById("dev-browser-mode") || {}).value || "wissen");
            const cur = curriculumMap();
            const fun = funCategoryKeys();
            const grades = new Set();
            const cats = [];
            if (mode === "wissen") {
                (QUESTIONS_DATABASE || []).forEach(function (q) {
                    if (isFunCategory(q.category)) return;
                    if (q.grade) grades.add(String(q.grade));
                });
                Object.keys(cur).forEach(function (k) { cats.push({ key: k, label: cur[k].grade + " · " + cur[k].subject }); });
            } else if (mode === "spass") {
                Object.keys(fun).forEach(function (k) { cats.push({ key: k, label: fun[k] }); });
            }
            cats.sort(function (a, b) { return a.label.localeCompare(b.label, "de"); });
            grade.innerHTML = ["<option value=\"\">Alle Klassen</option>"].concat(
                Array.from(grades).sort(function (a, b) { return Number(a) - Number(b); })
                    .map(function (g) { return "<option value=\"" + g + "\">Klasse " + g + "</option>"; })
            ).join("");
            grade.style.display = (mode === "wissen") ? "" : "none";
            cat.innerHTML = ["<option value=\"\">Alle Kategorien</option>"].concat(
                cats.map(function (c) { return "<option value=\"" + esc(c.key) + "\">" + esc(c.label) + "</option>"; })
            ).join("");
            cat.style.display = (mode === "wissen" || mode === "spass") ? "" : "none";
        }

        function devItemHtml(title, meta, raw) {
            return "<details class=\"bg-black/20 rounded-lg px-2.5 py-1.5\">" +
                "<summary class=\"cursor-pointer text-xs text-gray-200\">" + esc(String(title || "").slice(0, 110)) + "</summary>" +
                (meta ? "<div class=\"text-[10px] text-gray-500 mt-1\">" + esc(meta) + "</div>" : "") +
                "<pre class=\"text-[10px] text-gray-400 mt-1 overflow-x-auto whitespace-pre-wrap\">" +
                esc(JSON.stringify(raw, null, 2)) + "</pre></details>";
        }
        function devGroupHtml(title, count, inner) {
            return "<details class=\"bg-white/5 rounded-xl overflow-hidden\">" +
                "<summary class=\"cursor-pointer px-3 py-2.5 font-black text-sm text-white flex justify-between\">" +
                "<span>" + esc(title) + "</span><span class=\"text-gray-500 text-xs font-bold\">" + count + "</span></summary>" +
                "<div class=\"px-2 pb-2 space-y-1\">" + inner + "</div></details>";
        }

        async function runDevBrowser() {
            const box = document.getElementById("dev-browser-out");
            if (!box) return;
            box.classList.remove("hidden");
            box.innerHTML = "<div class=\"text-xs text-gray-500\">Lädt …</div>";
            if (typeof ladeAlleFragen === "function") {
                try { await ladeAlleFragen(); } catch (e) { /* */ }
            }
            const q = ((document.getElementById("dev-browser-q") || {}).value || "").trim().toLowerCase();
            const gradeF = ((document.getElementById("dev-filter-grade") || {}).value || "");
            const catF = ((document.getElementById("dev-filter-cat") || {}).value || "");
            const mode = ((document.getElementById("dev-browser-mode") || {}).value || "wissen");
            const cur = curriculumMap();
            const groups = {};
            function add(group, title, meta, raw) {
                if (!groups[group]) groups[group] = [];
                groups[group].push({ title: title, meta: meta, raw: raw });
            }
            let total = 0;

            if (mode === "vokabeln" && typeof VOCABULARY_DATABASE !== "undefined") {
                Object.keys(VOCABULARY_DATABASE).forEach(function (lang) {
                    Object.keys(VOCABULARY_DATABASE[lang] || {}).forEach(function (lv) {
                        const set = VOCABULARY_DATABASE[lang][lv];
                        (set.words || []).forEach(function (w, i) {
                            const de = String(w.de || "");
                            const fo = String(w.foreign || w.en || w.tr || w.fr || "");
                            if (q && de.toLowerCase().indexOf(q) < 0 && fo.toLowerCase().indexOf(q) < 0) return;
                            total++;
                            add((lang.toUpperCase() + " · " + (set.label || lv)), fo + " → " + de, lang + "/" + lv, w);
                        });
                    });
                });
            } else if (mode === "woerter") {
                const themes = (typeof GERMAN_WORDS_KIDS_THEMES !== "undefined") ? GERMAN_WORDS_KIDS_THEMES : {};
                Object.keys(themes).forEach(function (th) {
                    (themes[th] || []).forEach(function (w) {
                        const s = String(w);
                        if (q && s.toLowerCase().indexOf(q) < 0) return;
                        total++;
                        add("Kinder · " + th, s, "Wort-Duell", w);
                    });
                });
                const adult = (typeof GERMAN_WORDS_ADULT !== "undefined") ? GERMAN_WORDS_ADULT : [];
                adult.forEach(function (w) {
                    const s = String(w);
                    if (q && s.toLowerCase().indexOf(q) < 0) return;
                    total++;
                    add("Erwachsene", s, "Wort-Duell", w);
                });
            } else {
                (QUESTIONS_DATABASE || []).forEach(function (item) {
                    const key = item.category || "";
                    const fun = isFunCategory(key);
                    if (mode === "wissen" && fun) return;
                    if (mode === "spass" && !fun) return;
                    if (gradeF && String(item.grade) !== gradeF) return;
                    if (catF && key !== catF) return;
                    const t = String(item.question || "");
                    if (q && t.toLowerCase().indexOf(q) < 0 && String(item.id || "").toLowerCase().indexOf(q) < 0) return;
                    total++;
                    let gname;
                    if (fun) gname = catLabel(key);
                    else if (cur[key]) gname = cur[key].grade + " · " + cur[key].subject;
                    else gname = (item.grade ? "Klasse " + item.grade + " · " : "") + catLabel(key);
                    add(gname, t, (item.id || "") + " · " + key, item);
                });
            }

            const names = Object.keys(groups).sort(function (a, b) { return a.localeCompare(b, "de"); });
            let html = "<div class=\"flex items-center justify-between mb-2\">" +
                "<div class=\"text-xs text-gray-400\">" + total + " Treffer · " + names.length + " Gruppen · alle Fragen</div>" +
                "<button type=\"button\" class=\"text-[11px] font-bold text-indigo-300\" onclick=\"document.getElementById('dev-browser-out').classList.add('hidden')\">Liste ausblenden</button></div>";
            names.forEach(function (name) {
                const items = groups[name];
                const inner = items.map(function (r) { return devItemHtml(r.title, r.meta, r.raw); }).join("");
                html += devGroupHtml(name, items.length, inner);
            });
            box.innerHTML = html || "<div class=\"text-xs text-gray-500\">Keine Treffer.</div>";
        }
        window.runDevBrowser = runDevBrowser;

        async function runDevQuestionCheck() {
            const box = document.getElementById("dev-check-out");
            if (!box) return;
            box.innerHTML = "<div class=\"text-xs text-gray-500\">Prüfe …</div>";
            if (typeof ladeAlleFragen === "function") {
                try { await ladeAlleFragen(); } catch (e) { /* */ }
            }
            const F = QUESTIONS_DATABASE || [];
            const idZ = {};
            const textZ = {};
            const doppelteAntwort = [];
            const struktur = [];
            let richtig0 = 0, laengste = 0, gesamt = 0;
            F.forEach(function (q) {
                if (q.id) idZ[q.id] = (idZ[q.id] || 0) + 1;
                const key = (q.question || "") + "|" + (q.category || "");
                textZ[key] = (textZ[key] || 0) + 1;
                const a = q.answers;
                if (!Array.isArray(a) || a.length < 2) {
                    struktur.push((q.id || "?") + " – keine Antwortliste");
                    return;
                }
                if (typeof q.correct !== "number" || q.correct < 0 || q.correct >= a.length) {
                    struktur.push((q.id || "?") + " – ungültiger correct-Index");
                    return;
                }
                const richtig = String(a[q.correct]).trim().toLowerCase();
                let treffer = 0;
                a.forEach(function (x) { if (String(x).trim().toLowerCase() === richtig) treffer++; });
                if (treffer > 1) doppelteAntwort.push((q.id || "?") + " – richtige Antwort " + treffer + "×");
                gesamt++;
                if (q.correct === 0) richtig0++;
                let maxL = 0;
                a.forEach(function (x) { maxL = Math.max(maxL, String(x).length); });
                if (String(a[q.correct]).length === maxL) laengste++;
            });
            const doppelteIds = Object.keys(idZ).filter(function (k) { return idZ[k] > 1; })
                .map(function (k) { return k + " (" + idZ[k] + "×)"; });
            const dubletten = Object.keys(textZ).filter(function (k) { return textZ[k] > 1; }).length;
            const einsPct = gesamt ? Math.round(richtig0 / gesamt * 100) : 0;
            const langPct = gesamt ? Math.round(laengste / gesamt * 100) : 0;
            function block(titel, arr, warn) {
                const n = arr.length;
                return "<div class=\"rounded-xl p-3 " + (n ? (warn === "rot" ? "bg-rose-500/10" : "bg-amber-500/10") : "bg-emerald-500/10") +
                    "\"><div class=\"font-black text-sm mb-1\">" + titel + " · " + n + "</div>" +
                    (n ? "<ul class=\"text-[11px] text-gray-300 space-y-1\">" + arr.slice(0, 40).map(function (x) {
                        return "<li>" + esc(x) + "</li>";
                    }).join("") + (n > 40 ? "<li>… +" + (n - 40) + "</li>" : "") + "</ul>" : "<div class=\"text-xs text-emerald-300\">sauber</div>") +
                    "</div>";
            }
            box.innerHTML =
                "<div class=\"grid grid-cols-2 gap-2 text-center mb-3\">" +
                "<div class=\"glass-card p-2\"><b>" + F.length + "</b><div class=\"text-[10px] text-gray-400\">Fragen</div></div>" +
                "<div class=\"glass-card p-2\"><b>" + einsPct + "%</b><div class=\"text-[10px] text-gray-400\">richtig Platz 1</div></div>" +
                "<div class=\"glass-card p-2\"><b>" + langPct + "%</b><div class=\"text-[10px] text-gray-400\">längste = richtig</div></div>" +
                "<div class=\"glass-card p-2\"><b>" + dubletten + "</b><div class=\"text-[10px] text-gray-400\">Text-Dubletten</div></div>" +
                "</div>" +
                block("Doppelte IDs", doppelteIds, "rot") +
                block("Doppelte Antwortoptionen", doppelteAntwort, "rot") +
                block("Ungültige Struktur", struktur, "rot");
        }
        window.runDevQuestionCheck = runDevQuestionCheck;

        async function loadDevFeedback() {
            const box = document.getElementById("dev-feedback-out");
            if (!box) return;
            if (!isDevAdmin()) return;
            box.innerHTML = "<div class=\"text-xs text-gray-500\">Lädt …</div>";
            try {
                const snap = await db.collection("feedback").orderBy("erstellt", "desc").limit(40).get();
                if (snap.empty) {
                    box.innerHTML = "<div class=\"text-xs text-gray-500\">Noch kein Feedback.</div>";
                    return;
                }
                let seen = [];
                try { seen = JSON.parse(localStorage.getItem("eduplayFbSeen") || "[]"); } catch (e2) { seen = []; }
                const byType = {};
                snap.forEach(function (doc) {
                    const d = doc.data() || {};
                    d._id = doc.id;
                    d._seen = seen.indexOf(doc.id) !== -1;
                    const typ = d.type || "Feedback";
                    if (!byType[typ]) byType[typ] = [];
                    byType[typ].push(d);
                });
                let html = "<div class=\"flex justify-end mb-1\"><button type=\"button\" class=\"text-[11px] font-bold text-indigo-300\" onclick=\"document.getElementById('dev-feedback-out').classList.add('hidden')\">Liste ausblenden</button></div>";
                Object.keys(byType).sort().forEach(function (typ) {
                    const list = byType[typ];
                    html += "<details class=\"bg-white/5 rounded-xl overflow-hidden\">" +
                        "<summary class=\"cursor-pointer px-3 py-2.5 font-black text-sm text-white flex justify-between\">" +
                        "<span>" + esc(typ) + "</span><span class=\"text-gray-500 text-xs\">" + list.length + "</span></summary>" +
                        "<div class=\"px-2 pb-2 space-y-1.5\">";
                    list.forEach(function (d) {
                        const when = d.erstellt && d.erstellt.toDate ? d.erstellt.toDate().toLocaleString("de-DE") : "";
                        const preview = String(d.text || "").replace(/\s+/g, " ").slice(0, 60);
                        html += "<details class=\"bg-black/20 rounded-lg px-2.5 py-1.5" + (d._seen ? " opacity-60" : "") + "\">" +
                            "<summary class=\"cursor-pointer text-xs text-gray-200\">" +
                            (d._seen ? "✓ " : "") +
                            esc((d.name || "anonym") + (when ? " · " + when : "") + (preview ? " · " + preview : "")) +
                            "</summary>" +
                            "<div class=\"text-sm text-gray-200 whitespace-pre-wrap mt-1.5\">" + esc(d.text || "") + "</div>" +
                            (d._seen ? "" : "<button type=\"button\" class=\"mt-2 text-[11px] font-bold text-indigo-300\" onclick=\"markFeedbackSeen('" + d._id + "')\">Als gelesen markieren</button>") +
                            "</details>";
                    });
                    html += "</div></details>";
                });
                box.classList.remove("hidden");
                box.innerHTML = html;
            } catch (e) {
                box.innerHTML = "<div class=\"text-xs text-rose-400\">Lesen fehlgeschlagen. Firestore-Regel für Entwickler einspielen?</div>";
            }
        }
        window.loadDevFeedback = loadDevFeedback;

        function markFeedbackSeen(id) {
            if (!id) return;
            let seen = [];
            try { seen = JSON.parse(localStorage.getItem("eduplayFbSeen") || "[]"); } catch (e) { seen = []; }
            if (seen.indexOf(id) === -1) seen.push(id);
            try { localStorage.setItem("eduplayFbSeen", JSON.stringify(seen)); } catch (e) { /* */ }
            loadDevFeedback();
        }
        window.markFeedbackSeen = markFeedbackSeen;

        async function loadDevSignups() {
            const el = document.getElementById("dev-signup-count");
            if (!el || !isDevAdmin()) return;
            el.textContent = "…";
            try {
                const snap = await db.collection("stats").doc("signups").get();
                const n = snap.exists ? ((snap.data() || {}).count || 0) : 0;
                el.textContent = String(n);
            } catch (e) {
                el.textContent = "–";
            }
        }
        window.loadDevSignups = loadDevSignups;

        async function recountSignups() {
            if (!isDevAdmin()) return;
            const el = document.getElementById("dev-signup-count");
            const hint = document.getElementById("dev-signup-hint");
            if (el) el.textContent = "…";
            try {
                const snap = await db.collection("parents").get();
                const n = snap.size;
                try {
                    await db.collection("stats").doc("signups").set({ count: n, updatedAt: Date.now() }, { merge: true });
                } catch (writeErr) {
                    if (el) el.textContent = String(n);
                    if (hint) {
                        hint.textContent = n + " in parents gefunden, Speichern blockiert: " +
                            ((writeErr && writeErr.message) || writeErr);
                    }
                    showToast(n + " gefunden – Speichern fehlgeschlagen.", "error");
                    return;
                }
                if (el) el.textContent = String(n);
                if (hint) hint.textContent = n + " Dokumente in parents → Zähler aktualisiert.";
                showToast("Zähler auf " + n + " gesetzt.", "success");
            } catch (e) {
                if (el) el.textContent = "–";
                const msg = (e && e.message) ? e.message : String(e);
                if (hint) {
                    hint.textContent = "Lesen von parents fehlgeschlagen: " + msg +
                        " · Mit cu.oezdemir@gmail.com einloggen und firestore.rules neu veröffentlichen.";
                }
                showToast("Nachzählen fehlgeschlagen.", "error");
            }
        }
        window.recountSignups = recountSignups;

        async function bumpSignupIfNew() {
            try {
                const u = currentParentUser;
                if (!u || u.isAnonymous) return;
                const flag = "eduplaySignupCounted_" + u.uid;
                if (localStorage.getItem(flag)) return;
                const pref = db.collection("parents").doc(u.uid);
                const psnap = await pref.get();
                if (!psnap.exists) {
                    await pref.set({ createdAt: Date.now(), email: u.email || null }, { merge: true });
                    await db.collection("stats").doc("signups").set({
                        count: firebase.firestore.FieldValue.increment(1),
                        updatedAt: Date.now()
                    }, { merge: true });
                }
                localStorage.setItem(flag, "1");
            } catch (e) {
                console.warn("signup count", e);
            }
        }
        window.bumpSignupIfNew = bumpSignupIfNew;
