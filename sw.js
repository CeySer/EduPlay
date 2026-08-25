// ============================================================
//  EduPlay Hub – Service Worker
//  Version: 1.0
//
//  Zweck: Die App startet und läuft auch ohne Netz. Gedacht für
//  Autofahrten durch Funklöcher – Lernraum, Vokabeln und
//  Wort-Rätsel funktionieren dann weiter.
//
//  Wichtig: Firestore und Firebase-Auth werden NICHT abgefangen.
//  Firestore bringt einen eigenen Offline-Speicher mit
//  (enablePersistence in app-config.js); ein zweiter Cache davor
//  würde ihn nur stören.
// ============================================================

const CACHE = 'eduplay-v7';

// Alles, was die App zum Starten braucht. Die Fragen-Dateien landen
// beim ersten Laden automatisch im Cache (siehe unten), damit diese
// Liste nicht bei jeder neuen Datei gepflegt werden muss.
const GRUNDGERUEST = [
    './',
    './index.html',
    './styles.css',
    './manifest.json',
    './datenbanken_loader.js',
    './fragen/manifest.js',
    './fragen-vorladen.js',
        './app-config.js',
    './app-ui.js',
    './family-dashboard.js',
    './ui-common.js',
    './quiz-core.js',
    './vocab.js',
    './duel-scrabble.js',
    './wortraten.js',
    './tv-cast.js',
    './live-duel.js',
    './app-misc.js',
'./lobby-avatar.js',
    './konto-loeschen.js',
    './datenschutz.html',
'./konto-loeschen.js',
    './email-bestaetigung.js',

];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            // Einzeln statt addAll: Fehlt eine Datei, soll nicht die
            // gesamte Installation scheitern.
            return Promise.all(GRUNDGERUEST.map(function (url) {
                return cache.add(url).catch(function () { });
            }));
        }).then(function () { return self.skipWaiting(); })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (namen) {
            return Promise.all(namen.map(function (n) {
                return n === CACHE ? null : caches.delete(n);
            }));
        }).then(function () { return self.clients.claim(); })
    );
});

function istFirebaseVerkehr(url) {
    return url.indexOf('firestore.googleapis.com') !== -1
        || url.indexOf('identitytoolkit.googleapis.com') !== -1
        || url.indexOf('securetoken.googleapis.com') !== -1
        || url.indexOf('google-analytics') !== -1
        || url.indexOf('/api.qrserver.com/') !== -1
        || url.indexOf('languagetool.org') !== -1;
}

self.addEventListener('fetch', function (event) {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = req.url;

    // Nur echte Web-Adressen. chrome-extension:// und andere Schemata
    // lassen sich nicht in den Cache legen – cache.put() wirft dort.
    if (url.indexOf('http') !== 0) return;

    // Firestore, Anmeldung, QR-Bilder, Wörterbuch-Prüfung: nie abfangen.
    if (istFirebaseVerkehr(url)) return;

    // Fragen-, Vokabel- und Wörterdateien: sofort aus dem Cache antworten
    // (schnell, spart Datenvolumen), aber im Hintergrund IMMER neu holen und
    // den Cache aktualisieren ("stale-while-revalidate"). So kommt jede
    // Änderung an einer Datei spätestens beim zweiten Laden automatisch an –
    // ganz ohne manuell gepflegte "?v="-Nummer, die man vergessen kann.
    const istDatenDatei = url.indexOf('/fragen/') !== -1
        || url.indexOf('formula.js') !== -1;

    if (istDatenDatei) {
        event.respondWith(
            caches.open(CACHE).then(function (cache) {
                return cache.match(req).then(function (treffer) {
                    const netzwerk = fetch(req).then(function (antwort) {
                        if (antwort && (antwort.ok || antwort.type === 'opaque')) {
                            cache.put(req, antwort.clone());
                        }
                        return antwort;
                    }).catch(function () { return treffer; });

                    return treffer || netzwerk;
                });
            })
        );
        return;
    }

    // Alles andere – App-Gerüst, Bilder, auch Tailwind und Firebase vom
    // CDN: erst das Netz versuchen (damit Updates ankommen), bei
    // Fehlschlag aus dem Cache. Für den Store-Build sollten Tailwind und
    // Firebase trotzdem echte lokale Kopien werden.
    // cache: 'no-store' hier bewusst: sonst kann der normale HTTP-Cache des
    // Browsers eine alte Antwort liefern, obwohl "das Netz" versucht wird -
    // genau das sorgte zuletzt dafür, dass frisch gelieferte Änderungen
    // (z. B. app-ui.js) nicht ankamen, obwohl online.
    event.respondWith(
        fetch(req, { cache: 'no-store' }).then(function (antwort) {
            if (antwort && (antwort.ok || antwort.type === 'opaque')) {
                const kopie = antwort.clone();
                caches.open(CACHE).then(function (c) { c.put(req, kopie); });
            }
            return antwort;
        }).catch(function () {
            return caches.match(req).then(function (treffer) {
                if (treffer) return treffer;
                // Seitenaufruf ohne Netz und ohne Treffer: Startseite liefern.
                if (req.mode === 'navigate') return caches.match('./index.html');
                return new Response('', { status: 504, statusText: 'offline' });
            });
        })
    );
});

// ============================================================
//  Benachrichtigungen (offene Duelle / TV)
// ============================================================
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    const ziel = (event.notification.data && event.notification.data.url) || './index.html';
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
            for (let i = 0; i < list.length; i++) {
                const c = list[i];
                if (c.url && 'focus' in c) {
                    c.postMessage({ type: 'eduplay-notif-click', url: ziel });
                    return c.focus();
                }
            }
            if (clients.openWindow) return clients.openWindow('./index.html');
        })
    );
});
