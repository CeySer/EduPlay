// ============================================================
//  EduPlay Hub – E-Mail-Bestätigung erzwingen
//
//  Ohne bestätigte Adresse kommt niemand in die Familiendaten.
//  Grund: Wer sich bei der Adresse vertippt, sitzt beim
//  Passwort-Zurücksetzen für immer aus – und fremde Adressen
//  ließen sich beliebig eintragen.
//
//  Ausgenommen sind:
//   • Gäste (anonyme Anmeldung, haben gar keine Adresse)
//   • Google-Anmeldung (Google hat die Adresse bereits geprüft)
//
//  Die Sperre hängt in onAuthStateChanged (family-dashboard.js).
//  Das Overlay wird komplett hier erzeugt, index.html braucht nur
//  den <script>-Eintrag.
// ============================================================

(function () {
    "use strict";

    function el(id) { return document.getElementById(id); }

    // Nur bei echter E-Mail-Anmeldung prüfen.
    window.emailBestaetigungNoetig = function (user) {
        if (!user || user.isAnonymous) return false;
        if (user.emailVerified) return false;

        const perPasswort = (user.providerData || []).some(function (p) {
            return p && p.providerId === "password";
        });
        return perPasswort;
    };

    function melde(text, art) {
        const box = el("mail-sperre-hinweis");
        if (!box) return;
        box.textContent = text || "";
        box.className = text
            ? "text-xs font-bold " + (art === "fehler" ? "text-rose-400" : "text-emerald-400")
            : "hidden";
    }

    function baueOverlay() {
        if (el("mail-sperre-overlay")) return;

        const overlay = document.createElement("div");
        overlay.id = "mail-sperre-overlay";
        overlay.style.cssText =
            "position:fixed;inset:0;z-index:9998;display:none;align-items:center;" +
            "justify-content:center;padding:16px;background:rgba(8,12,24,0.94);" +
            "backdrop-filter:blur(6px);overflow-y:auto;";

        overlay.innerHTML = `
            <div class="glass-card p-6 space-y-4 text-center" style="max-width:420px;width:100%;margin:auto;">
                <div class="text-5xl">📧</div>
                <h2 class="text-xl font-black text-indigo-400">Noch ein Schritt</h2>

                <p class="text-sm text-gray-300">
                    Wir haben eine Bestätigungsmail an<br>
                    <strong id="mail-sperre-adresse" class="text-white"></strong><br>
                    geschickt. Bitte den Link darin antippen – danach geht es los.
                </p>

                <p class="text-xs text-gray-500">
                    Nichts angekommen? Schau bitte auch im Spam-Ordner nach.
                </p>

                <div id="mail-sperre-hinweis" class="hidden"></div>

                <div class="space-y-2 pt-1">
                    <button id="mail-sperre-fertig" class="btn-primary w-full text-center py-3">
                        Ich habe bestätigt
                    </button>
                    <button id="mail-sperre-nochmal" class="btn-secondary w-full text-center text-sm py-2.5">
                        Mail erneut senden
                    </button>
                    <button id="mail-sperre-abmelden" class="btn-secondary w-full text-center text-sm py-2.5 text-gray-400">
                        Abmelden
                    </button>
                </div>
            </div>`;

        document.body.appendChild(overlay);

        el("mail-sperre-fertig").addEventListener("click", pruefeErneut);
        el("mail-sperre-nochmal").addEventListener("click", sendeErneut);
        el("mail-sperre-abmelden").addEventListener("click", function () {
            schliesse();
            auth.signOut();
        });
    }

    function schliesse() {
        const o = el("mail-sperre-overlay");
        if (o) o.style.display = "none";
        melde("");
    }

    window.zeigeEmailSperre = function (user) {
        baueOverlay();
        const adr = el("mail-sperre-adresse");
        if (adr) adr.textContent = (user && user.email) || "";
        melde("");
        el("mail-sperre-overlay").style.display = "flex";
    };

    // Firebase merkt die Bestätigung nicht von selbst – der Zustand
    // muss neu geladen werden.
    async function pruefeErneut() {
        const user = auth.currentUser;
        if (!user) { schliesse(); return; }

        const knopf = el("mail-sperre-fertig");
        knopf.disabled = true;
        melde("Wird geprüft …", "ok");

        try {
            await user.reload();
            const frisch = auth.currentUser;

            if (frisch && frisch.emailVerified) {
                schliesse();
                if (typeof showToast === "function") {
                    showToast("Danke! Deine E-Mail ist bestätigt 🎉", "success");
                }
                if (typeof loadFamilyProfiles === "function") loadFamilyProfiles();
            } else {
                melde("Noch nicht bestätigt. Bitte zuerst den Link in der Mail antippen.", "fehler");
            }
        } catch (e) {
            melde("Das ließ sich gerade nicht prüfen. Bitte nochmal.", "fehler");
        } finally {
            knopf.disabled = false;
        }
    }

    async function sendeErneut() {
        const user = auth.currentUser;
        if (!user) return;

        const knopf = el("mail-sperre-nochmal");
        knopf.disabled = true;

        try {
            await user.sendEmailVerification();
            melde("Mail ist unterwegs 📧", "ok");
        } catch (err) {
            const code = (err && err.code) || "";
            melde(
                code === "auth/too-many-requests"
                    ? "Gerade zu viele Versuche. Bitte ein paar Minuten warten."
                    : "Die Mail ging nicht raus. Bitte später nochmal.",
                "fehler"
            );
        } finally {
            // Kurze Sperre, damit niemand den Knopf festhält.
            setTimeout(function () { knopf.disabled = false; }, 20000);
        }
    }
})();
