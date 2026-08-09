// ============================================================
//  EduPlay Hub – Zurück-Taste des Handys nutzen
//
//  Problem in der installierten App: Ohne Browser-Leiste ist die
//  Zurück-Taste der einzige Rückweg – und sie schließt sonst
//  sofort die ganze App, mitten im Quiz.
//
//  Lösung: Jeder Ansichtswechsel wird als Schritt im Verlauf des
//  Browsers hinterlegt. Die Zurück-Taste geht dann eine Ansicht
//  zurück statt die App zu beenden. Erst auf der Startseite
//  beendet ein weiteres Zurück die App – wie erwartet.
//
//  Offene Fenster (Konto löschen, E-Mail-Sperre, Menü-Schublade)
//  fangen die Taste ab und schließen sich zuerst.
//
//  MUSS NACH fragen-vorladen.js geladen werden – beide hängen
//  sich um switchView, und diese Datei soll außen liegen.
// ============================================================

(function () {
    'use strict';

    // Laufende Spiele: Zurück fragt nach und beendet sauber (Firestore/Timer).
    const SPIELANSICHTEN = [
        'quiz', 'duel-play', 'scrabble-play', 'wortraten-play',
        'live-duel-play', 'live-duel-lobby', 'live-duel-result',
        'tv-quiz-host', 'tv-quiz-player', 'tv-quiz-setup'
    ];

    // Was gilt als "ganz unten"? Von hier beendet Zurück die App.
    const STARTANSICHTEN = ['menu', 'family-hub', 'auth', 'guest-join'];

    let ausVerlauf = false;   // gerade läuft ein Zurück – nicht erneut merken
    let aktuelle = null;

    async function beendeSpielWennNoetig(ansicht) {
        if (SPIELANSICHTEN.indexOf(ansicht) === -1) return true;
        const ok = (typeof window.confirmLeaveGame === 'function')
            ? await window.confirmLeaveGame({ text: 'Fortschritt geht verloren.', titel: 'Spiel verlassen?' })
            : confirm('Spiel wirklich verlassen? Der Fortschritt geht verloren.');
        if (!ok) return false;
        try {
            if ((ansicht === 'live-duel-play' || ansicht === 'live-duel-lobby' || ansicht === 'live-duel-result')
                && typeof window.leaveLiveDuel === 'function') {
                await window.leaveLiveDuel(true);
            } else if ((ansicht === 'tv-quiz-host' || ansicht === 'tv-quiz-player' || ansicht === 'tv-quiz-setup')
                && typeof window.leaveTVGame === 'function') {
                await window.leaveTVGame(true);
            } else if (ansicht === 'quiz' && typeof window.leaveQuiz === 'function') {
                await window.leaveQuiz('menu');
            } else if (ansicht === 'scrabble-play' && typeof window.stopScrabbleTicker === 'function') {
                window.stopScrabbleTicker();
            } else if (ansicht === 'wortraten-play' && typeof wortratenState !== 'undefined' && wortratenState) {
                wortratenState.roundActive = false;
            }
        } catch (e) { /* Cleanup best effort */ }
        return true;
    }

    function sichtbar(id) {
        const e = document.getElementById(id);
        if (!e) return false;
        const st = window.getComputedStyle(e);
        return st.display !== 'none' && st.visibility !== 'hidden';
    }

    // Gibt es etwas Offenes, das die Taste zuerst schließen soll?
    // Reihenfolge = Vorrang.
    function schliesseOffenes() {
        if (sichtbar('konto-del-overlay')) {
            const b = document.getElementById('konto-del-abbruch');
            if (b) { b.click(); return true; }
        }

        // Die E-Mail-Sperre bleibt bewusst offen: Wer sie wegklickt,
        // stünde vor einer App ohne Daten.

        // Es gibt mehrere Schiebemenüs (drawer-familyhub u.a.), deshalb
        // alle durchgehen. Als "offen" gilt: sichtbar und nicht aus dem
        // Bild geschoben.
        if (typeof window.closeDrawer === 'function') {
            const menues = document.querySelectorAll('.drawer');
            for (let i = 0; i < menues.length; i++) {
                const d = menues[i];
                if (d.classList.contains('hidden')) continue;

                const st = window.getComputedStyle(d);
                if (st.display === 'none' || st.visibility === 'hidden') continue;

                // Geschlossene Menüs stehen meist per transform daneben.
                const t = st.transform;
                const zurSeite = t && t !== 'none' && /matrix|translate/.test(t)
                    && !/matrix\(1,\s*0,\s*0,\s*1,\s*0,\s*0\)/.test(t);
                if (zurSeite) continue;

                window.closeDrawer();
                return true;
            }
        }

        return false;
    }

    function haengeUm() {
        if (typeof window.switchView !== 'function') return false;
        if (window.switchView._zurueckAktiv) return true;

        const vorher = window.switchView;

        const neu = function (ansicht) {
            const ergebnis = vorher.apply(this, arguments);

            // Beim Zurückgehen nichts Neues in den Verlauf schreiben,
            // sonst käme man nie heraus.
            if (!ausVerlauf && ansicht && ansicht !== aktuelle) {
                try {
                    history.pushState({ eduplayAnsicht: ansicht }, '');
                } catch (e) { /* Verlauf voll o.ä. – dann eben ohne */ }
                aktuelle = ansicht;
            }
            return ergebnis;
        };

        neu._zurueckAktiv = true;
        window.switchView = neu;

        // Startpunkt setzen, damit der erste Zurück-Druck etwas vorfindet.
        try {
            history.replaceState({ eduplayAnsicht: aktuelle || 'menu' }, '');
        } catch (e) { /* egal */ }

        return true;
    }

    window.addEventListener('popstate', async function (e) {
        // 1. Offenes Fenster schließen und den Schritt zurückgeben
        if (schliesseOffenes()) {
            try { history.pushState({ eduplayAnsicht: aktuelle }, ''); } catch (e2) { }
            return;
        }

        const ziel = e.state && e.state.eduplayAnsicht;
        const von = aktuelle;

        // 2. Laufendes Spiel: nachfragen + sauber beenden
        if (SPIELANSICHTEN.indexOf(von) !== -1) {
            const weiter = await beendeSpielWennNoetig(von);
            if (!weiter) {
                try { history.pushState({ eduplayAnsicht: von }, ''); } catch (e2) { }
                return;
            }
        }

        // 3. Zur vorherigen Ansicht – ohne sie erneut zu merken
        if (ziel && typeof window.switchView === 'function') {
            ausVerlauf = true;
            aktuelle = ziel;
            try {
                window.switchView(ziel);
            } finally {
                ausVerlauf = false;
            }
            return;
        }

        // 4. Kein Ziel bekannt: zur Startseite statt App schließen
        if (STARTANSICHTEN.indexOf(aktuelle) === -1 && typeof window.switchView === 'function') {
            ausVerlauf = true;
            aktuelle = 'menu';
            try {
                window.switchView('menu');
                history.pushState({ eduplayAnsicht: 'menu' }, '');
            } catch (e2) { } finally {
                ausVerlauf = false;
            }
        }
    });

    // switchView entsteht in app-ui.js – falls es beim Start noch
    // nicht da ist, kurz warten statt aufzugeben.
    function start() {
        if (haengeUm()) return;
        let versuche = 0;
        const timer = setInterval(function () {
            if (haengeUm() || ++versuche > 40) clearInterval(timer);
        }, 100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
