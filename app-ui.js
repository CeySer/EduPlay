// ============================================================
//  APP-UI  –  Ladeanzeige und App-eigene Dialoge
//  Version: 8.4
//
//  Ersetzt die nativen confirm()/prompt()/alert()-Fenster. Die sehen
//  im App-Wrapper wie Browser-Dialoge aus (inkl. Domainname) und
//  prompt() funktioniert in iOS-WebViews nicht zuverlässig.
//
//  Alle drei Funktionen geben ein Promise zurück:
//      if (await appConfirm("Wirklich löschen?")) { ... }
//      const name = await appPrompt("Wie heißt der Gast?");
//      await appAlert("Fertig!");
// ============================================================

(function () {

    // ------------------------------------------------------------
    //  LADEANZEIGE
    // ------------------------------------------------------------
    let loadingCount = 0;

    window.showGlobalLoading = function (text) {
        loadingCount++;
        const box = document.getElementById("global-loading");
        const txt = document.getElementById("global-loading-text");
        if (txt && text) txt.innerText = text;
        if (box) box.classList.remove("hidden");
    };

    window.hideGlobalLoading = function (force) {
        loadingCount = force ? 0 : Math.max(0, loadingCount - 1);
        if (loadingCount > 0) return;
        const box = document.getElementById("global-loading");
        if (box) box.classList.add("hidden");
    };

    // ------------------------------------------------------------
    //  FRAGEN-DATENBANK: BEREITSCHAFT
    //  Der Loader holt über 80 Dateien nacheinander. Wer schneller
    //  tippt, landete bisher in "Zu wenige Fragen für dieses Thema!".
    //  Jetzt: Ladeanzeige beim Start, Spielknöpfe erst danach aktiv.
    // ------------------------------------------------------------
    window.datenbankBereit = false;

    const KNOEPFE_BRAUCHEN_FRAGEN = "[data-needs-questions]";

    function setzeKnoepfe(aktiv) {
        document.querySelectorAll(KNOEPFE_BRAUCHEN_FRAGEN).forEach(function (el) {
            el.disabled = !aktiv;
            el.classList.toggle("is-loading-disabled", !aktiv);
        });
    }

    document.addEventListener("datenbanken-geladen", function (e) {
        window.datenbankBereit = true;
        const anzahl = (e && e.detail && e.detail.count) || 0;
        setzeKnoepfe(true);
        hideGlobalLoading(true);
        const hinweis = document.getElementById("db-loading-hint");
        if (hinweis) hinweis.classList.add("hidden");
        try { console.log("🎬 UI freigegeben – " + anzahl + " Fragen"); } catch (_) { }
        if (anzahl === 0) {
            const offline = (typeof navigator !== "undefined" && navigator.onLine === false);
            const msg = offline
                ? "📴 Offline – keine Fragen geladen. Bitte online gehen und neu laden."
                : "Keine Fragen geladen. Bitte Seite neu laden oder Verbindung prüfen.";
            if (typeof appAlert === "function") {
                appAlert(msg, { titel: "Fragen fehlen", icon: "📚", okText: "OK" });
            } else if (typeof showToast === "function") {
                showToast(msg, "error");
            }
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        if (window.datenbankBereit) return;
        setzeKnoepfe(false);
        const hinweis = document.getElementById("db-loading-hint");
        if (hinweis) hinweis.classList.remove("hidden");
        // Sicherheitsnetz: falls der Loader nie fertig meldet (z.B. weil
        // eine Datei hängt), nach 20 Sekunden trotzdem freigeben.
        setTimeout(function () {
            if (window.datenbankBereit) return;
            setzeKnoepfe(true);
            hideGlobalLoading(true);
            const h = document.getElementById("db-loading-hint");
            if (h) h.classList.add("hidden");
            const offline = (typeof navigator !== "undefined" && navigator.onLine === false);
            const msg = offline
                ? "📴 Offline: Fragen konnten nicht geladen werden. WLAN prüfen und App neu laden."
                : "Die Fragen brauchen ungewöhnlich lange. Verbindung prüfen und Seite neu laden.";
            if (typeof appAlert === "function") {
                appAlert(msg, { titel: offline ? "Keine Verbindung" : "Fragen laden", icon: "📴", okText: "OK" });
            } else if (typeof showToast === "function") {
                showToast(msg, "error");
            }
        }, 20000);
    });

    // ------------------------------------------------------------
    //  "WEITERMACHEN?" – zuletzt gespieltes Thema
    //
    //  CATEGORY_LABELS in app-config.js wird beim Laden der Datei
    //  gebaut, da ist CURRICULUM oft noch gar nicht da (der Loader holt
    //  die Fragen asynchron). Deshalb lösen wir den Namen hier zur
    //  Laufzeit auf.
    // ------------------------------------------------------------
    window.labelFuerKategorie = function (key) {
        if (!key) return "";
        try {
            if (typeof CURRICULUM !== "undefined" && Array.isArray(CURRICULUM)) {
                for (const g of CURRICULUM) {
                    for (const s of g.subjects) {
                        if (s.key === key) return g.label + " · " + s.label;
                    }
                }
            }
            if (typeof FUN_CATEGORIES !== "undefined" && Array.isArray(FUN_CATEGORIES)) {
                const f = FUN_CATEGORIES.find(s => s.key === key);
                if (f) return f.label;
            }
            if (typeof LEKTIONEN !== "undefined" && Array.isArray(LEKTIONEN)) {
                const id = String(key).replace(/^kurs_/, "");
                const l = LEKTIONEN.find(function (x) { return x.id === id || ("kurs_" + x.id) === key; });
                if (l) {
                    const k = (typeof KURSE !== "undefined" && Array.isArray(KURSE))
                        ? KURSE.find(function (c) { return c.id === l.kurs; }) : null;
                    return (k ? k.title + " · " : "") + l.title;
                }
            }
        } catch (e) { /* egal, dann eben ohne Namen */ }
        return "";
    };

    // Wird beim Start eines Solo-Quiz gerufen. Bewusst nur im Speicher
    // und im Profil – kein extra Firestore-Schreibvorgang, das erledigt
    // der nächste savePlayerProgress() ohnehin.
    window.merkeLetzteAktivitaet = function (kategorieKey) {
        if (!kategorieKey || typeof currentPlayer === "undefined" || !currentPlayer) return;
        if (String(kategorieKey).indexOf("topic:") === 0) {
            kategorieKey = String(kategorieKey).split(":")[1] || kategorieKey;
        }
        currentPlayer.lastCategory = kategorieKey;
    };

    window.renderContinueCard = function () {
        const box = document.getElementById("continue-card");
        if (!box) return;
        const key = (typeof currentPlayer !== "undefined" && currentPlayer) ? currentPlayer.lastCategory : null;
        const name = key ? labelFuerKategorie(key) : "";
        if (!key || !name) {
            box.classList.add("hidden");
            box.innerHTML = "";
            return;
        }
        box.classList.remove("hidden");
        box.innerHTML =
            '<div class="relative">' +
            '<button type="button" onclick="weiterMitLetztemThema()" ' +
            'class="w-full flex items-center gap-3 p-4 pr-12 rounded-2xl text-left transition hover:scale-[1.01]" ' +
            'style="background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.3);">' +
            '<span class="text-2xl shrink-0">📚</span>' +
            '<span class="min-w-0">' +
            '<span class="block text-sm font-black text-white">Weitermachen?</span>' +
            '<span class="block text-xs font-bold text-gray-400 truncate">' +
            (typeof esc === "function" ? esc(name) : name) + '</span>' +
            '</span>' +
            '</button>' +
            '<button type="button" onclick="event.stopPropagation();verwirfContinueCard()" aria-label="Weitermachen-Karte schließen" ' +
            'class="continue-card-close">✕</button>' +
            '</div>';
    };

    // Karte wegtippen/-wischen, ohne ins Thema zu springen: Vorschlag ist
    // erledigt, taucht danach nicht mehr auf (bis zur nächsten echten
    // Quiz-Runde, die lastCategory neu setzt).
    window.verwirfContinueCard = function () {
        if (typeof currentPlayer !== "undefined" && currentPlayer) currentPlayer.lastCategory = null;
        const box = document.getElementById("continue-card");
        if (box) { box.classList.add("hidden"); box.innerHTML = ""; }
    };

    window.weiterMitLetztemThema = function () {
        const key = (typeof currentPlayer !== "undefined" && currentPlayer) ? currentPlayer.lastCategory : null;
        if (!key) return;
        if (typeof showQuizSetup === "function") showQuizSetup();
        // Auswahl im Setup vorbelegen, damit nur noch "Start" fehlt
        setTimeout(function () {
            const sub = document.getElementById("sub-category");
            if (!sub) return;
            const treffer = Array.from(sub.options).some(o => o.value === key);
            if (treffer) {
                sub.value = key;
                try { sub.dispatchEvent(new Event("change")); } catch (e) { }
            }
        }, 60);
    };

    // ------------------------------------------------------------
    //  DIALOGE
    // ------------------------------------------------------------
    let offenerDialog = null;

    function schliesse(ergebnis) {
        if (!offenerDialog) return;
        const { wrap, aufloesen, vorherFokus } = offenerDialog;
        offenerDialog = null;
        wrap.classList.add("app-dialog-closing");
        setTimeout(function () { try { wrap.remove(); } catch (_) { } }, 160);
        document.removeEventListener("keydown", tastatur, true);
        try { if (vorherFokus && vorherFokus.focus) vorherFokus.focus(); } catch (_) { }
        aufloesen(ergebnis);
    }

    function tastatur(e) {
        if (!offenerDialog) return;
        if (e.key === "Escape") {
            e.preventDefault();
            schliesse(offenerDialog.abbruchWert);
        } else if (e.key === "Enter" && offenerDialog.typ !== "prompt") {
            e.preventDefault();
            schliesse(offenerDialog.bestaetigWert);
        } else if (e.key === "Tab") {
            // Fokus im Dialog halten
            const f = offenerDialog.wrap.querySelectorAll("button, input");
            if (!f.length) return;
            const erste = f[0], letzte = f[f.length - 1];
            if (e.shiftKey && document.activeElement === erste) {
                e.preventDefault(); letzte.focus();
            } else if (!e.shiftKey && document.activeElement === letzte) {
                e.preventDefault(); erste.focus();
            }
        }
    }

    function escHtml(s) {
        return (typeof esc === "function") ? esc(s) : String(s === undefined || s === null ? "" : s)
            .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }

    // Zeilenumbrüche aus alten confirm()-Texten übernehmen
    function textZuHtml(s) {
        return escHtml(s).replace(/\n/g, "<br>");
    }

    function baueDialog(opt) {
        // Ein bereits offener Dialog wird abgebrochen, damit sich nie
        // zwei überlagern.
        if (offenerDialog) schliesse(offenerDialog.abbruchWert);

        const vorherFokus = document.activeElement;
        const wrap = document.createElement("div");
        wrap.className = "app-dialog-backdrop";
        wrap.setAttribute("role", "dialog");
        wrap.setAttribute("aria-modal", "true");
        wrap.setAttribute("aria-label", opt.titel || "Hinweis");

        const eingabe = opt.typ === "prompt"
            ? `<input id="app-dialog-input" class="input-modern app-dialog-input" type="${opt.passwort ? "password" : "text"}"
                      inputmode="${opt.passwort ? "numeric" : "text"}" maxlength="${opt.maxLen || 40}"
                      placeholder="${escHtml(opt.platzhalter || "")}" value="${escHtml(opt.wert || "")}"
                      autocomplete="off" enterkeyhint="done">`
            : "";

        wrap.innerHTML = `
            <div class="app-dialog">
                <button type="button" class="app-dialog-close" data-rolle="x" aria-label="Schließen">✕</button>
                ${opt.icon ? `<div class="app-dialog-icon" aria-hidden="true">${opt.icon}</div>` : ""}
                ${opt.titel ? `<h3 class="app-dialog-title">${escHtml(opt.titel)}</h3>` : ""}
                <p class="app-dialog-text">${textZuHtml(opt.text)}</p>
                ${eingabe}
                <div class="app-dialog-buttons">
                    ${opt.typ === "alert" ? "" :
                `<button type="button" class="btn-secondary app-dialog-btn" data-rolle="abbrechen">${escHtml(opt.abbrechenText || "Abbrechen")}</button>`}
                    <button type="button" class="btn-primary app-dialog-btn" data-rolle="ok"
                        ${opt.gefahr ? 'style="background:var(--gradient-rose);"' : ""}>${escHtml(opt.okText || "OK")}</button>
                </div>
            </div>`;

        document.body.appendChild(wrap);
        return { wrap, vorherFokus };
    }

    function zeige(opt) {
        return new Promise(function (aufloesen) {
            const { wrap, vorherFokus } = baueDialog(opt);

            offenerDialog = {
                wrap: wrap,
                aufloesen: aufloesen,
                vorherFokus: vorherFokus,
                typ: opt.typ,
                abbruchWert: opt.typ === "prompt" ? null : (opt.typ === "alert" ? undefined : false),
                bestaetigWert: opt.typ === "prompt" ? "" : (opt.typ === "alert" ? undefined : true)
            };

            const input = wrap.querySelector("#app-dialog-input");
            wrap.querySelectorAll("[data-rolle]").forEach(function (btn) {
                btn.addEventListener("click", function () {
                    const rolle = btn.getAttribute("data-rolle");
                    if (rolle === "ok") {
                        if (opt.typ === "prompt") return schliesse(input ? input.value : "");
                        if (opt.typ === "alert") return schliesse(undefined);
                        return schliesse(true);
                    }
                    schliesse(offenerDialog ? offenerDialog.abbruchWert : false);
                });
            });

            // Klick auf den Hintergrund = abbrechen
            wrap.addEventListener("click", function (e) {
                if (e.target === wrap) schliesse(offenerDialog ? offenerDialog.abbruchWert : false);
            });

            // Wegswippen: die Dialog-Karte nach unten ziehen schließt sie, gleiche
            // Bedeutung wie Klick auf den Hintergrund. Betrifft alle appConfirm/
            // appPrompt/appAlert-Dialoge, u.a. die "Weiter?"-Meldung beim
            // Wiedereinstieg in eine Runde. Pointer Events statt Touch Events:
            // funktioniert damit einheitlich auf Handy (Touch), Maus und Stift.
            const dialogEl = wrap.querySelector(".app-dialog");
            if (dialogEl && window.PointerEvent) {
                let swipeStartY = null, swiping = false, activePointerId = null;
                dialogEl.style.touchAction = "none";
                dialogEl.addEventListener("pointerdown", function (e) {
                    if (activePointerId !== null) return;
                    // Nicht auf Eingabefeldern/Buttons starten, sonst blockiert es Tippen/Klicken.
                    if (e.target.closest && e.target.closest("input, button, textarea, select, a")) return;
                    activePointerId = e.pointerId;
                    swipeStartY = e.clientY;
                    swiping = true;
                    dialogEl.style.transition = "none";
                    try { dialogEl.setPointerCapture(e.pointerId); } catch (_) { }
                });
                dialogEl.addEventListener("pointermove", function (e) {
                    if (!swiping || e.pointerId !== activePointerId) return;
                    const dy = e.clientY - swipeStartY;
                    if (dy > 0) dialogEl.style.transform = `translateY(${dy}px)`;
                });
                function swipeEnde(e) {
                    if (!swiping || e.pointerId !== activePointerId) return;
                    swiping = false;
                    activePointerId = null;
                    dialogEl.style.transition = "";
                    const dy = e.clientY - swipeStartY;
                    swipeStartY = null;
                    if (dy > 80) {
                        schliesse(offenerDialog ? offenerDialog.abbruchWert : false);
                    } else {
                        dialogEl.style.transform = "";
                    }
                }
                dialogEl.addEventListener("pointerup", swipeEnde);
                dialogEl.addEventListener("pointercancel", swipeEnde);
            }

            if (input) {
                input.addEventListener("keydown", function (e) {
                    if (e.key === "Enter") { e.preventDefault(); schliesse(input.value); }
                });
            }

            document.addEventListener("keydown", tastatur, true);

            requestAnimationFrame(function () {
                wrap.classList.add("app-dialog-open");
                try { (input || wrap.querySelector('[data-rolle="ok"]')).focus(); } catch (_) { }
            });
        });
    }

    window.appConfirm = function (text, opt) {
        opt = opt || {};
        return zeige({
            typ: "confirm", text: text,
            titel: opt.titel, icon: opt.icon || "❓",
            okText: opt.okText || "Ja", abbrechenText: opt.abbrechenText || "Abbrechen",
            gefahr: !!opt.gefahr
        });
    };

    window.appPrompt = function (text, opt) {
        opt = opt || {};
        return zeige({
            typ: "prompt", text: text,
            titel: opt.titel, icon: opt.icon || "✏️",
            platzhalter: opt.platzhalter, wert: opt.wert,
            passwort: !!opt.passwort, maxLen: opt.maxLen,
            okText: opt.okText || "Weiter", abbrechenText: "Abbrechen"
        });
    };

    // Bequemer Kurzweg für "Wirklich beenden?"-Knöpfe, die danach nur
    // die Ansicht wechseln. Ersetzt die inline-confirm() im HTML.
    window.appConfirmSwitch = async function (text, titel, zielView, vorher) {
        const ok = await appConfirm(text, {
            titel: titel || "Spiel verlassen?",
            icon: "🚪",
            okText: "Ja",
            abbrechenText: "Nein",
            gefahr: true
        });
        if (!ok) return;
        if (typeof vorher === "function") {
            try { vorher(); } catch (e) { console.warn("appConfirmSwitch:", e); }
        }
        if (zielView && typeof switchView === "function") switchView(zielView);
    };

    // Typische Ja/Nein-Abfrage beim Verlassen eines laufenden Spiels.
    // force=true überspringt den Dialog (z.B. nach Spielende).
    window.confirmLeaveGame = async function (opt) {
        opt = opt || {};
        if (opt.force) return true;
        return appConfirm(
            opt.text || "Fortschritt geht verloren.",
            {
                titel: opt.titel || "Spiel verlassen?",
                icon: opt.icon || "🚪",
                okText: opt.okText || "Ja",
                abbrechenText: opt.abbrechenText || "Nein",
                gefahr: true
            }
        );
    };

    window.appAlert = function (text, opt) {
        opt = opt || {};
        return zeige({
            typ: "alert", text: text,
            titel: opt.titel, icon: opt.icon || "ℹ️",
            okText: opt.okText || "Alles klar"
        });
    };

})();
