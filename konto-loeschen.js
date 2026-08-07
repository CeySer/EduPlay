// ============================================================
//  EduPlay Hub – Konto vollständig löschen
//
//  Pflicht für den App Store (Guideline 5.1.1(v)): Wer sich in der
//  App ein Konto anlegen kann, muss es dort auch wieder löschen
//  können – nicht nur einzelne Profile.
//
//  Ablauf:
//   1. Warnung + Tippen von "LÖSCHEN" als Absicherung
//   2. Erneute Anmeldung (Firebase verlangt das für user.delete())
//   3. Firestore-Daten löschen, danach das Auth-Konto
//
//  Reihenfolge ist wichtig: Nach user.delete() sind die
//  Firestore-Regeln nicht mehr erfüllt, die Daten blieben liegen.
//
//  Das Modal wird komplett hier erzeugt, index.html braucht nur
//  den Button und den <script>-Eintrag.
// ============================================================

(function () {
    "use strict";

    // Diese Untersammlungen hängen unter parents/{uid}.
    // Neue Untersammlung angelegt? Hier eintragen, sonst bleibt sie liegen.
    const UNTERSAMMLUNGEN = ["profiles", "tv_game", "live_duel"];

    function el(id) { return document.getElementById(id); }

    function melde(text, istFehler) {
        const box = el("konto-del-hinweis");
        if (!box) return;
        box.textContent = text || "";
        box.className = text
            ? "text-xs font-bold " + (istFehler ? "text-rose-400" : "text-emerald-400")
            : "hidden";
    }

    // ---------- Modal aufbauen ----------

    function baueModal() {
        if (el("konto-del-overlay")) return;

        const overlay = document.createElement("div");
        overlay.id = "konto-del-overlay";
        overlay.style.cssText =
            "position:fixed;inset:0;z-index:9999;display:none;align-items:center;" +
            "justify-content:center;padding:16px;background:rgba(0,0,0,0.72);" +
            "backdrop-filter:blur(4px);overflow-y:auto;";

        overlay.innerHTML = `
            <div class="glass-card p-5 space-y-4" style="max-width:420px;width:100%;margin:auto;">
                <h2 class="text-lg font-black text-rose-400">🗑 Konto endgültig löschen</h2>

                <p class="text-sm text-gray-300">
                    Damit verschwinden <strong>alle</strong> Spielerprofile, Punkte, Coins,
                    Abzeichen, Belohnungen und die Anmeldung selbst. Das lässt sich
                    <strong>nicht</strong> rückgängig machen.
                </p>

                <div class="space-y-2">
                    <label class="text-xs text-gray-400 font-bold block">
                        Zum Bestätigen <span class="text-rose-400">LÖSCHEN</span> eintippen:
                    </label>
                    <input type="text" id="konto-del-wort" autocomplete="off"
                           class="input-modern font-bold" placeholder="LÖSCHEN">
                </div>

                <div id="konto-del-pw-block" class="space-y-2 hidden">
                    <label class="text-xs text-gray-400 font-bold block">
                        Zur Sicherheit noch einmal das Passwort:
                    </label>
                    <input type="password" id="konto-del-pw" autocomplete="current-password"
                           class="input-modern font-bold" placeholder="Passwort">
                </div>

                <p id="konto-del-google" class="hidden text-xs text-gray-400">
                    Zur Sicherheit öffnet sich gleich noch einmal die Google-Anmeldung.
                </p>

                <div id="konto-del-hinweis" class="hidden"></div>

                <div class="flex gap-2 pt-1">
                    <button id="konto-del-abbruch" class="btn-secondary flex-1 text-center text-sm py-2.5">
                        Abbrechen
                    </button>
                    <button id="konto-del-start" class="btn-primary flex-1 text-center text-sm py-2.5"
                            style="background:linear-gradient(135deg,#f43f5e,#be123c);
                                   box-shadow:0 4px 24px rgba(244,63,94,0.3);">
                        Endgültig löschen
                    </button>
                </div>
            </div>`;

        document.body.appendChild(overlay);

        el("konto-del-abbruch").addEventListener("click", schliesseModal);
        el("konto-del-start").addEventListener("click", loescheKonto);
        overlay.addEventListener("click", function (e) {
            if (e.target === overlay) schliesseModal();
        });
    }

    function schliesseModal() {
        const o = el("konto-del-overlay");
        if (!o) return;
        o.style.display = "none";
        const w = el("konto-del-wort"); if (w) w.value = "";
        const p = el("konto-del-pw"); if (p) p.value = "";
        melde("");
        el("konto-del-start").disabled = false;
        el("konto-del-start").textContent = "Endgültig löschen";
    }

    // Wird vom Button in den Einstellungen aufgerufen.
    window.openKontoLoeschen = function () {
        const user = (typeof auth !== "undefined") && auth.currentUser;
        if (!user) {
            if (typeof showToast === "function") {
                showToast("Dafür musst du angemeldet sein", "error");
            }
            return;
        }

        baueModal();

        // Passwort-Feld nur bei E-Mail-Anmeldung, Google-Hinweis nur bei Google.
        const perGoogle = (user.providerData || []).some(function (p) {
            return p && p.providerId === "google.com";
        });
        el("konto-del-pw-block").classList.toggle("hidden", perGoogle);
        el("konto-del-google").classList.toggle("hidden", !perGoogle);

        el("konto-del-overlay").style.display = "flex";
        setTimeout(function () {
            const f = perGoogle ? el("konto-del-wort") : el("konto-del-wort");
            if (f) f.focus();
        }, 50);
    };

    // ---------- Erneute Anmeldung ----------

    async function bestaetigeIdentitaet(user) {
        const perGoogle = (user.providerData || []).some(function (p) {
            return p && p.providerId === "google.com";
        });

        if (perGoogle) {
            const provider = new firebase.auth.GoogleAuthProvider();
            await user.reauthenticateWithPopup(provider);
            return;
        }

        const pw = (el("konto-del-pw").value || "").trim();
        if (!pw) throw { code: "kein-passwort" };

        const cred = firebase.auth.EmailAuthProvider.credential(user.email, pw);
        await user.reauthenticateWithCredential(cred);
    }

    // ---------- Firestore aufräumen ----------

    // Sammlungen in Blöcken löschen, damit auch größere Bestände
    // durchlaufen, ohne das Batch-Limit von 500 zu reißen.
    async function loescheSammlung(ref) {
        while (true) {
            const schnappschuss = await ref.limit(200).get();
            if (schnappschuss.empty) return;

            const batch = db.batch();
            schnappschuss.docs.forEach(function (d) { batch.delete(d.ref); });
            await batch.commit();

            if (schnappschuss.size < 200) return;
        }
    }

    async function loescheFamiliendaten(uid) {
        const eltern = db.collection("parents").doc(uid);

        for (const name of UNTERSAMMLUNGEN) {
            try {
                await loescheSammlung(eltern.collection(name));
            } catch (e) {
                console.error("Untersammlung " + name + " nicht gelöscht:", e);
            }
        }

        // Der gerade aktive TV-Code, falls einer offen ist. Ältere Codes
        // lassen sich nicht abfragen (die Regeln verbieten das Auflisten
        // fremder Codes) – sie verfallen nach zwölf Stunden von selbst.
        try {
            if (window._activeTVCode) {
                await db.collection("tv_codes").doc(window._activeTVCode).delete();
            }
        } catch (e) { /* nicht schlimm, läuft ohnehin ab */ }

        await eltern.delete();
    }

    // ---------- Hauptablauf ----------

    async function loescheKonto() {
        const user = auth.currentUser;
        if (!user) { schliesseModal(); return; }

        const wort = (el("konto-del-wort").value || "").trim().toUpperCase();
        if (wort !== "LÖSCHEN" && wort !== "LOESCHEN") {
            melde("Bitte LÖSCHEN eintippen.", true);
            return;
        }

        const knopf = el("konto-del-start");
        knopf.disabled = true;
        knopf.textContent = "Wird gelöscht …";
        melde("");

        try {
            await bestaetigeIdentitaet(user);

            melde("Daten werden entfernt …", false);
            await loescheFamiliendaten(user.uid);

            // Zuletzt das Konto selbst – danach greifen die
            // Firestore-Regeln nicht mehr.
            await user.delete();

            try { localStorage.clear(); } catch (e) { }
            try { sessionStorage.clear(); } catch (e) { }

            // Zwischenspeicher leeren, sonst startet die App mit alten Daten.
            try {
                if (window.caches && caches.keys) {
                    const namen = await caches.keys();
                    await Promise.all(namen.map(function (n) { return caches.delete(n); }));
                }
            } catch (e) { }

            alert("Dein Konto und alle Daten wurden gelöscht.");
            location.replace("index.html");

        } catch (err) {
            knopf.disabled = false;
            knopf.textContent = "Endgültig löschen";

            const code = (err && err.code) || "";
            let text = "Das hat nicht geklappt. Versuch es bitte noch einmal.";

            if (code === "kein-passwort") {
                text = "Bitte das Passwort eintragen.";
            } else if (code === "auth/wrong-password" || code === "auth/invalid-credential") {
                text = "Das Passwort stimmt nicht.";
            } else if (code === "auth/too-many-requests") {
                text = "Zu viele Versuche. Bitte etwas warten.";
            } else if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") {
                text = "Anmeldung abgebrochen.";
            } else if (code === "auth/network-request-failed") {
                text = "Keine Verbindung. Zum Löschen wird Internet gebraucht.";
            } else if (code === "auth/requires-recent-login") {
                text = "Bitte kurz ab- und wieder anmelden, dann noch einmal versuchen.";
            }

            melde(text, true);
            console.error("Konto-Löschung fehlgeschlagen:", err);
        }
    }
})();
