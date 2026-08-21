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

        function fillDevBrowserFilters() {
            const grade = document.getElementById("dev-filter-grade");
            const cat = document.getElementById("dev-filter-cat");
            if (!grade || !cat) return;
            const grades = new Set();
            const cats = new Set();
            (QUESTIONS_DATABASE || []).forEach(function (q) {
                if (q.grade) grades.add(String(q.grade));
                if (q.category) cats.add(q.category);
            });
            const gSel = ["<option value=\"\">Alle Klassen</option>"].concat(
                Array.from(grades).sort(function (a, b) { return Number(a) - Number(b); })
                    .map(function (g) { return "<option value=\"" + g + "\">Klasse " + g + "</option>"; })
            );
            grade.innerHTML = gSel.join("");
            const labels = (typeof CATEGORY_LABELS !== "undefined") ? CATEGORY_LABELS : {};
            const cSel = ["<option value=\"\">Alle Kategorien</option>"].concat(
                Array.from(cats).sort().map(function (c) {
                    return "<option value=\"" + esc(c) + "\">" + esc(labels[c] || c) + "</option>";
                })
            );
            cat.innerHTML = cSel.join("");
        }

        async function runDevBrowser() {
            const box = document.getElementById("dev-browser-out");
            if (!box) return;
            box.innerHTML = "<div class=\"text-xs text-gray-500\">Lädt …</div>";
            if (typeof ladeAlleFragen === "function") {
                try { await ladeAlleFragen(); } catch (e) { /* */ }
            }
            fillDevBrowserFilters();
            const q = ((document.getElementById("dev-browser-q") || {}).value || "").trim().toLowerCase();
            const grade = ((document.getElementById("dev-filter-grade") || {}).value || "");
            const cat = ((document.getElementById("dev-filter-cat") || {}).value || "");
            const mode = ((document.getElementById("dev-browser-mode") || {}).value || "fragen");
            let rows = [];
            if (mode === "vokabeln" && typeof VOCABULARY_DATABASE !== "undefined") {
                Object.keys(VOCABULARY_DATABASE).forEach(function (lang) {
                    Object.keys(VOCABULARY_DATABASE[lang] || {}).forEach(function (lv) {
                        const set = VOCABULARY_DATABASE[lang][lv];
                        (set.words || []).forEach(function (w, i) {
                            const de = String(w.de || "");
                            const fo = String(w.foreign || "");
                            if (q && de.toLowerCase().indexOf(q) < 0 && fo.toLowerCase().indexOf(q) < 0) return;
                            rows.push({
                                title: fo + " → " + de,
                                meta: lang + " · " + (set.label || lv),
                                raw: { lang: lang, level: lv, i: i, de: de, foreign: fo }
                            });
                        });
                    });
                });
            } else {
                (QUESTIONS_DATABASE || []).forEach(function (item) {
                    if (grade && String(item.grade) !== grade) return;
                    if (cat && item.category !== cat) return;
                    const t = String(item.question || "");
                    if (q && t.toLowerCase().indexOf(q) < 0 && String(item.id || "").toLowerCase().indexOf(q) < 0) return;
                    rows.push({
                        title: t,
                        meta: (item.id || "?") + " · " + (item.category || "") + (item.grade ? " · K" + item.grade : ""),
                        raw: item
                    });
                });
            }
            const max = 80;
            box.innerHTML = "<div class=\"text-xs text-gray-400 mb-2\">" + rows.length + " Treffer" +
                (rows.length > max ? " (zeige " + max + ")" : "") + "</div>" +
                rows.slice(0, max).map(function (r, i) {
                    return "<details class=\"bg-white/5 rounded-xl p-2.5\"><summary class=\"cursor-pointer text-sm font-bold text-white\">" +
                        esc(r.title).slice(0, 120) +
                        "</summary><div class=\"text-[11px] text-gray-400 mt-1\">" + esc(r.meta) +
                        "</div><pre class=\"text-[10px] text-gray-300 mt-2 overflow-x-auto whitespace-pre-wrap\">" +
                        esc(JSON.stringify(r.raw, null, 2)) + "</pre></details>";
                }).join("");
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
                let html = "";
                snap.forEach(function (doc) {
                    const d = doc.data() || {};
                    const when = d.erstellt && d.erstellt.toDate ? d.erstellt.toDate().toLocaleString("de-DE") : "";
                    html += "<div class=\"bg-white/5 rounded-xl p-3 space-y-1\">" +
                        "<div class=\"text-xs font-black text-indigo-300\">" + esc(d.type || "Feedback") +
                        (d.bewertung ? " · " + d.bewertung + "/5" : "") + "</div>" +
                        "<div class=\"text-[11px] text-gray-400\">" + esc(d.name || "anonym") +
                        (d.spieler ? " · " + esc(d.spieler) : "") + (when ? " · " + when : "") + "</div>" +
                        "<div class=\"text-sm text-gray-200 whitespace-pre-wrap\">" + esc(d.text || "") + "</div></div>";
                });
                box.innerHTML = html;
            } catch (e) {
                box.innerHTML = "<div class=\"text-xs text-rose-400\">Lesen fehlgeschlagen. Firestore-Regel für Entwickler einspielen?</div>";
            }
        }
        window.loadDevFeedback = loadDevFeedback;

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
