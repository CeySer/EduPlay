        // ============================================================
        //  INIT & OFFLINE
        // ============================================================
        OFFLINE_MODUS_AKTIV = false;


        function applyOfflineModusSichtbarkeit() {
            const block = document.getElementById("family-duel-block");
            if (block) block.classList.toggle("hidden", !OFFLINE_MODUS_AKTIV);
        }

        function renderOfflineBanner() {
            let bar = document.getElementById("offline-banner");
            if (!bar) {
                bar = document.createElement("div");
                bar.id = "offline-banner";
                bar.className =
                    "fixed top-0 left-0 right-0 z-[10000] bg-amber-500 text-slate-950 text-center text-xs font-black py-2 px-3 shadow-lg";
                bar.innerText = "📴 Keine Internetverbindung – Online-Duelle pausieren. Lokal gespeicherte Inhalte gehen weiter.";
                document.body.appendChild(bar);
            }
            const offline = (typeof isOffline === "function") ? isOffline()
                : (typeof navigator !== "undefined" && navigator.onLine === false);
            bar.classList.toggle("hidden", !offline);
            if (!offline && typeof showToast === "function" && bar.dataset.wasOffline === "1") {
                showToast("🌐 Wieder online", "success", "online");
                bar.dataset.wasOffline = "0";
            }
            if (offline) bar.dataset.wasOffline = "1";
        }
        window.addEventListener("online", renderOfflineBanner);
        window.addEventListener("offline", renderOfflineBanner);
        try { document.addEventListener("DOMContentLoaded", renderOfflineBanner); } catch (e) { /* */ }

        // ============================================================
        //  LESEN LERNEN (aus lesen_in_index.js)
        // ============================================================
        if (typeof renderLesenCategories !== 'function') {
            window.renderLesenCategories = function () {
                const container = document.getElementById('lesen-categories');
                if (!container) return;
                container.innerHTML =
                    '<div class="text-gray-400 text-sm text-center col-span-2 py-4">📖 Lesen-Modul wird geladen...</div>';
            };
        }

        // ============================================================
        // VORLESEFUNKTION FÜR LESEN LERNEN
        // ============================================================
        function leseAktuelleAufgabeVor() {
            // Greift exakt auf den Container zu, in dem die Aufgabe angezeigt wird
            const exerciseContainer = document.getElementById('lesen-exercise');

            // Bricht ab, falls keine Aufgabe geladen/sichtbar ist
            if (!exerciseContainer || exerciseContainer.classList.contains('hidden')) {
                return;
            }

            // Holt sich den gesamten reinen Text der aktuellen Übung ohne HTML-Schnipsel
            const textZumVorlesen = exerciseContainer.innerText || exerciseContainer.textContent;

            // Startet die Vorlesefunktion, falls Text vorhanden ist
            if (textZumVorlesen.trim() !== '') {
                speakNatural(textZumVorlesen);
            }
        }

        // function leseAktuelleAufgabeVor() {
        //     // Statt des gesamten Texts nur das AKTUELLE ELEMENT vorlesen
        //     const exerciseDiv = document.getElementById('lesen-exercise');

        //     // Nur den sichtbaren Text im Übungsbereich nehmen
        //     // (nicht den ganzen Container mit allen versteckten Elementen)
        //     const visibleText = exerciseDiv.querySelector('.aktuelle-aufgabe')?.textContent ||
        //         exerciseDiv.textContent;

        //     // ODER: Nur das aktuell markierte Wort/Silbe
        //     const highlightedWord = exerciseDiv.querySelector('.highlight')?.textContent;
        //     const textToRead = highlightedWord || visibleText;

        //     if (!textToRead || textToRead.trim() === '') {
        //         showToast('Kein Text zum Vorlesen', 'warning');
        //         return;
        //     }

        //     // Vorlesen mit dem bereinigten Text
        //     const utterance = new SpeechSynthesisUtterance(textToRead.trim());
        //     utterance.lang = 'de-DE';
        //     utterance.rate = 0.8;
        //     window.speechSynthesis.speak(utterance);
        // }


        // function leseSilbenweiseVor(text) {
        //     // Silben erkennen (einfache Regel: nach Vokalen trennen)
        //     const silben = text.split(/(?<=[aeiouäöü])/i).filter(s => s.trim().length > 0);

        //     let index = 0;

        //     function sprecheNaechsteSilbe() {
        //         if (index >= silben.length) {
        //             showToast('✅ Fertig!', 'success');
        //             return;
        //         }

        //         const silbe = silben[index].trim();
        //         if (!silbe) {
        //             index++;
        //             sprecheNaechsteSilbe();
        //             return;
        //         }

        //         // Silbe vorlesen
        //         const utterance = new SpeechSynthesisUtterance(silbe);
        //         utterance.lang = 'de-DE';
        //         utterance.rate = 0.7; // Extra langsam für Leseanfänger

        //         // Die aktuelle Silbe im Text hervorheben
        //         markiereSilbe(index, silben);

        //         utterance.onend = () => {
        //             index++;
        //             // Pause von 500ms zwischen den Silben
        //             setTimeout(sprecheNaechsteSilbe, 500);
        //         };

        //         window.speechSynthesis.speak(utterance);
        //     }

        //     sprecheNaechsteSilbe();
        // }

        // Silbe im Text markieren
        function markiereSilbe(index, silben) {
            const container = document.getElementById('lesen-uebung-inhalt');
            let html = '';
            silben.forEach((s, i) => {
                const trimmed = s.trim();
                if (trimmed) {
                    if (i === index) {
                        html += `<span class="bg-yellow-400 text-black px-1 rounded font-bold">${trimmed}</span>`;
                    } else {
                        html += trimmed;
                    }
                    // Leerzeichen zwischen Silben erhalten
                    if (s.endsWith(' ')) html += ' ';
                }
            });
            container.innerHTML = html;
        }


        // ============================================================
        //  FLOATING ACTION BUTTON (FAB) LOGIK
        // ============================================================

        // Speichert die letzte Aktivität des Spielers
        let lastActivity = {
            view: 'menu',      // Standard: Hauptmenü
            label: 'Hauptmenü',
            icon: '🏠'
        };

        // Funktion, die beim Klick auf den FAB ausgeführt wird
        function handleFabClick() {
            if (typeof SFX !== 'undefined') SFX.tap();

            const currentView = getCurrentView();

            if (currentView === 'menu') {
                switchView('family-hub');
                updateFab('family-hub', '👨‍👩‍👧‍👦', 'Spieler wechseln');
                return;
            }

            if (currentView !== 'family-hub' && currentView !== 'auth') {
                lastActivity.view = currentView;
                lastActivity.label = getViewLabel(currentView);
                lastActivity.icon = getViewIcon(currentView);
                switchView('menu');
                updateFab('menu', '🏠', 'Zum Hauptmenü');
                return;
            }

            if (currentView === 'family-hub') {
                switchView('menu');
                updateFab('menu', '🏠', 'Zum Hauptmenü');
                return;
            }
        }

        // Hilft, die aktuelle View zu erkennen
        function getCurrentView() {
            const views = document.querySelectorAll('.view');
            for (const view of views) {
                if (!view.classList.contains('hidden')) {
                    return view.id.replace('view-', '');
                }
            }
            return 'menu';
        }

        // Gibt einen lesbaren Namen für die View zurück
        function getViewLabel(viewId) {
            const labels = {
                'menu': 'Hauptmenü',
                'family-hub': 'Familien-Hub',
                'dashboard': 'Kontrollzentrum',
                'quiz-setup': 'Quiz-Einstellungen',
                'quiz': 'Quiz',
                'vokabeln': 'Vokabel-Trainer',
                'lesen': 'Lesen lernen',
                'fokus': 'Fokus-Timer',
                'rewards': 'Belohnungen',
                'duel-setup': 'Duell',
                'duel-play': 'Duell-Spiel',
                'scrabble-setup': 'Wort-Duell',
                'scrabble-play': 'Wort-Duell-Spiel',
                'live-duel-setup': 'Live-Duell',
                'live-duel-lobby': 'Live-Duell-Lobby',
                'live-duel-play': 'Live-Duell-Spiel',
                'tv-quiz-setup': 'TV-Quiz',
                'tv-quiz-host': 'TV-Quiz (Host)',
                'tv-quiz-player': 'TV-Quiz (Spieler)'
            };
            return labels[viewId] || viewId;
        }

        // Gibt ein passendes Icon für die View zurück
        function getViewIcon(viewId) {
            const icons = {
                'menu': '🏠',
                'spielen': '⚔️',
                'lernen': '🎓',
                'guest-join': '🎮',
                'family-hub': '👨‍👩‍👧‍👦',
                'dashboard': '📊',
                'quiz-setup': '🧠',
                'quiz': '🎯',
                'vokabeln': '🃏',
                'lesen': '📖',
                'fokus': '⏱️',
                'rewards': '🎁',
                'duel-setup': '⚔️',
                'duel-play': '⚔️',
                'scrabble-setup': '🔤',
                'scrabble-play': '🔤',
                'live-duel-setup': '⚔️',
                'live-duel-lobby': '⚔️',
                'live-duel-play': '⚔️',
                'tv-quiz-setup': '📺',
                'tv-quiz-host': '📺',
                'tv-quiz-player': '📺'
            };
            return icons[viewId] || '🚀';
        }

        // Aktualisiert den FAB basierend auf der aktuellen View
        function updateFab(viewId, icon, tooltip) {
            const fabIcon = document.getElementById('fabIcon');
            const fabTooltip = document.getElementById('fabTooltip');
            const fabBadge = document.getElementById('fabBadge');

            if (fabIcon) fabIcon.textContent = icon || '🚀';
            if (fabTooltip) fabTooltip.textContent = tooltip || 'Schnellstart';

            // Badge anzeigen, wenn wir nicht im Hauptmenü sind
            if (fabBadge) {
                if (viewId !== 'menu' && viewId !== 'family-hub' && viewId !== 'auth') {
                    fabBadge.style.display = 'flex';
                    fabBadge.textContent = '1';
                } else {
                    fabBadge.style.display = 'none';
                }
            }
        }

        // Initialisiere den FAB beim Start
        function initFab() {
            updateFab('menu', '🏠', 'Zum Hauptmenü');
        }

        // FAB-Update sitzt in switchView (lobby-avatar.js)


        // Initialisiere beim Laden
        document.addEventListener('DOMContentLoaded', function () {
            initFab();
        });

        // FAB auch initialisieren, wenn die Seite schon geladen ist
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            initFab();
        }

