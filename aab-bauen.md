# AAB bauen und in die Play Console bringen

Ziel: eine `.aab`-Datei, hochgeladen in die Play Console, danach der
geschlossene Test mit 12 Testern.

**Entschieden am 01.09.2026:**

| | |
|---|---|
| Paketname | `de.eduplayhub.app` – **unveränderlich nach dem ersten Upload** |
| Werkzeug | PWABuilder (Browser, kein Java, kein Android SDK) |
| Domain | `eduplayhub.de` |

---

## Vorher prüfen: läuft die Seite sauber?

PWABuilder liest deine Live-Seite. Was dort steht, landet in der App.

1. <https://eduplayhub.de> aufrufen, **Strg+F5**.
2. Kurse öffnen, eine Lektion starten – der neue Nachlade-Mechanismus muss laufen.
3. Handy: Seite aufrufen, Browsermenü → „Zum Startbildschirm hinzufügen". Erscheint
   das richtige Icon und startet sie ohne Adressleiste, ist das Manifest in Ordnung.

Klappt Schritt 3 nicht, klappt auch der AAB-Build nicht.

---

## Schritt 1: AAB erzeugen

1. <https://www.pwabuilder.com> öffnen.
2. `https://eduplayhub.de` eingeben → **Start**.
3. PWABuilder zeigt eine Bewertung (Manifest, Service Worker, Security).
   Bei Punktabzug: notieren, aber weitermachen – entscheidend ist, dass
   Manifest und Service Worker gefunden werden.
4. **Package For Stores** → **Android** → **Generate Package**.
5. Im Dialog eintragen:

```
Package ID          de.eduplayhub.app
App name            EduPlay Hub
Short name          EduPlay
Launcher name       EduPlay
App version         1.0.0
App version code    1
Host                eduplayhub.de
Start URL           /index.html
Theme color         #080c18
Background color    #080c18
Navigation color    #080c18
Display mode        Standalone
```

**Signing key: „Create new"** wählen. PWABuilder erzeugt den Schlüssel und legt
ihn in die ZIP-Datei.

6. **Download** – du bekommst eine ZIP mit:
   - `app-release-bundle.aab` ← das lädst du hoch
   - `signing.keystore` und `signing-key-info.txt`
   - `assetlinks.json`

---

## Schritt 2: Den Schlüssel sichern – wirklich sichern

`signing.keystore` und `signing-key-info.txt` (enthält Passwörter und Alias)
gehören an **zwei** Orte, von denen keiner dein Projektordner ist:

- ein Passwortmanager oder ein verschlüsselter Ordner
- ein zweiter, getrennter Ort (externe Platte, anderes Konto)

**Nicht ins Git-Repo und nicht in den GitHub-Ordner.** Wer den Schlüssel hat,
kann Updates für deine App signieren.

Geht der Schlüssel verloren, kommst du über Play App Signing wieder rein –
das ist aber ein Support-Vorgang mit Wartezeit. Einfacher ist: nicht verlieren.

---

## Schritt 3: App in der Play Console anlegen

1. <https://play.google.com/console> → **App erstellen**.
2. Name „EduPlay Hub", Deutsch, **App**, **Kostenlos**.
3. Erklärungen zu Richtlinien und Exportgesetzen bestätigen.

---

## Schritt 4: AAB hochladen

1. **Test → Geschlossener Test** → Neuen Release erstellen.
2. **Play App Signing** aktivieren (Standard, einfach bestätigen).
3. `app-release-bundle.aab` hochladen.
4. Release-Name `1.0.0`, Notizen z. B. „Erste Testversion".
5. Speichern – **noch nicht freigeben.**

---

## Schritt 5: assetlinks.json füllen – der Schritt, der gern schiefgeht

Ohne diese Datei startet die App mit **Browser-Adressleiste oben**. Sie sieht
dann aus wie eine Webseite in einer Hülle, und genau das bemängeln Prüfer.

Wichtig: Es gibt **zwei** Fingerabdrücke. Der aus PWABuilder ist der von
deinem lokalen Schlüssel. Sobald Play App Signing aktiv ist, signiert Google
mit einem **eigenen** Schlüssel – und der zählt.

1. Play Console → **Test und Freigabe → App-Integrität → App-Signatur**.
2. Dort steht **SHA-256-Zertifikat-Fingerabdruck** – kopieren.
3. `.well-known/assetlinks.json` in deinem Projektordner ist aktuell **0 Byte**.
   Fülle sie so:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "de.eduplayhub.app",
      "sha256_cert_fingerprints": [
        "HIER_DEN_FINGERABDRUCK_AUS_DER_PLAY_CONSOLE"
      ]
    }
  }
]
```

Der Fingerabdruck wird mit Doppelpunkten eingesetzt, so:
`A1:B2:C3:...:9F`

4. Datei hochladen, damit sie unter
   `https://eduplayhub.de/.well-known/assetlinks.json` erreichbar ist.
5. Im Browser aufrufen und prüfen, dass wirklich JSON erscheint – kein 404,
   keine HTML-Fehlerseite.
6. Gegenprüfen mit dem Google-Testwerkzeug:
   <https://developers.google.com/digital-asset-links/tools/generator>

**Erst wenn diese Datei live ist, startet die App ohne Adressleiste.**

---

## Schritt 6: Store-Eintrag ausfüllen

Die Texte liegen fertig in `claude/store-eintrag-texte.md`:
Titel (29 Zeichen), Kurzbeschreibung (67 Zeichen), Langbeschreibung.

Fehlen noch die Bilder:
- **App-Symbol** 512 × 512 – hast du als `icons/icon-512.png`
- **Feature-Grafik** 1024 × 500 – muss noch gebaut werden
- **Screenshots** mindestens 2, besser 8 – müssen noch aufgenommen werden

---

## Schritt 7: Data Safety und Familien-Richtlinie

In der Console unter **Richtlinie und Programme**:
- Datenschutz → **Datensicherheit**: Texte in `claude/data-safety-formular.md`
- **Zielgruppe und Inhalte**: Angaben in `claude/familien-richtlinie.md`

Beides muss vollständig sein, bevor der Test startet.

---

## Schritt 8: Geschlossener Test

- **12 Tester mit Google-Konto**, 14 Tage durchgehend – Pflicht vor der
  Produktionsfreigabe.
- Die Tester müssen die App **wirklich installieren** und in den 14 Tagen
  aktiv sein. Nur beitreten reicht nicht.
- E-Mail-Adressen als Liste in der Console hinterlegen, Opt-in-Link verschicken.

Fang früh an, Tester zu sammeln – das ist erfahrungsgemäß der Punkt, an dem
es hängt, nicht die Technik.

---

## Reihenfolge auf einen Blick

```
PWABuilder → AAB + Schlüssel
      ↓
Schlüssel sichern (zwei Orte)
      ↓
Play Console: App anlegen
      ↓
AAB hochladen (geschlossener Test, noch nicht freigeben)
      ↓
SHA-256 aus der Console → assetlinks.json → hochladen → prüfen
      ↓
Store-Eintrag, Data Safety, Familien-Angaben
      ↓
12 Tester einladen → 14 Tage
      ↓
Produktionsfreigabe
```

## Wenn etwas klemmt

Sag mir, an welchem Schritt und was auf dem Bildschirm steht. Die typischen
Stolpersteine sind: `assetlinks.json` nicht erreichbar (404 durch GitHub Pages),
falscher Fingerabdruck (lokal statt Play App Signing), oder ein Manifest,
das PWABuilder nicht findet.
