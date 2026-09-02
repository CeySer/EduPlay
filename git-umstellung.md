# Von OneDrive + Web-Upload auf Git umstellen

Ziel: Der Projektordner liegt außerhalb von OneDrive, ist mit dem
bestehenden GitHub-Repo verbunden, und ein Deploy ist künftig
**Commit → Push** in GitHub Desktop statt vier Dateien von Hand hochladen.

Dauer: ca. 20 Minuten. Nichts davon ist unumkehrbar – der alte Ordner
bleibt bis zum Schluss unangetastet liegen.

---

## 1. GitHub Desktop installieren

Falls noch nicht da: <https://desktop.github.com> herunterladen, installieren,
mit deinem GitHub-Konto anmelden.

## 2. Repo-Namen herausfinden

Auf <https://github.com> einloggen → deine Repositories durchsehen. Gesucht
ist das Repo, in dem `index.html`, `lektionen.js` und `CNAME` liegen und in
dem unter **Settings → Pages** die Seite `eduplayhub.de` konfiguriert ist.
Merk dir den Namen, zum Beispiel `ceyhun/eduplay-hub`.

## 3. Repo klonen

GitHub Desktop → **File → Clone repository** → Reiter **GitHub.com** →
das Repo auswählen.

Bei **Local path** eintragen:

```
C:\Users\ceyhu\Projects
```

GitHub Desktop legt darunter automatisch einen Ordner mit dem Repo-Namen an,
also z. B. `C:\Users\ceyhu\Projects\eduplay-hub`. **Nicht** in OneDrive klonen.

Nach dem Klonen liegt dort der Stand, der aktuell live auf eduplayhub.de ist.

## 4. Aktuelle Dateien hineinkopieren

Explorer öffnen, in den alten Ordner gehen:

```
C:\Users\ceyhu\OneDrive\Websites\EduPlay Hub SPA
```

Alles markieren (**Strg+A**), kopieren (**Strg+C**), in den geklonten Ordner
wechseln, einfügen (**Strg+V**), beim Nachfragen **„Dateien im Ziel ersetzen"**
wählen.

Danach im geklonten Ordner diese drei Ordner **löschen** – sie sind Ablage,
keine Website:

- `_delete`
- `_ausgliedern`
- `_backup_kategorien`

Den Ordner `.git` (versteckt) auf keinen Fall anfassen.

## 5. .gitignore einfügen

Die Datei `.gitignore` (liegt bei dieser Anleitung) in den **Wurzelordner**
des geklonten Repos legen – also direkt neben `index.html`.

Sie sorgt dafür, dass Ablageordner, `node_modules` und Windows-Kramdateien
wie `Thumbs.db` und `desktop.ini` gar nicht erst in Git landen.

## 6. Ersten Commit prüfen und pushen

Zurück in GitHub Desktop. Links steht jetzt die Liste aller geänderten
Dateien. **Kurz durchsehen:**

- Erwartet sind Änderungen an `lektionen.js`, `index.html`, `sw.js`,
  `family-dashboard.js` und neue Dateien wie `pruefe-lektionen.js`.
- Taucht eine Datei als **gelöscht** auf, die du nicht gelöscht hast, dann
  war sie im Repo, aber nicht in deinem OneDrive-Ordner. Vor dem Commit
  klären: Rechtsklick → **Discard changes**, dann ist sie wieder da.

Unten links **Summary** eintragen, zum Beispiel:

```
Stand 28.08.2026: Kurse Klasse 5-10, Qualitaetsdurchlauf
```

**Commit to main** klicken, dann oben **Push origin**.

## 7. Prüfen, dass die Seite noch läuft

1–2 Minuten warten (GitHub Pages baut neu), dann <https://eduplayhub.de>
aufrufen und einmal **Strg+F5** drücken. Kurse öffnen, eine Lektion starten.

Läuft alles: weiter zu Schritt 8. Läuft etwas nicht: in GitHub Desktop
**History** öffnen, den Commit per Rechtsklick **Revert** – die Seite ist
dann wieder auf dem alten Stand.

## 8. Alten Ordner sichern, nicht löschen

Den OneDrive-Ordner umbenennen in:

```
EduPlay Hub SPA _ALT_bis_28-08
```

So merkst du sofort, falls noch irgendein Programm darauf zeigt. Nach ein
oder zwei Wochen ohne Probleme kannst du ihn löschen.

## 9. Ordner in Cowork neu verbinden

In der Claude-Desktop-App den alten Ordner trennen und
`C:\Users\ceyhu\Projects\<repo-name>` verbinden. Danach arbeite ich direkt
im Git-Ordner weiter.

---

## Der Ablauf ab jetzt

1. Änderungen an den Dateien (von dir oder von mir)
2. GitHub Desktop öffnen → Änderungen ansehen
3. Summary schreiben → **Commit to main**
4. **Push origin**
5. Nach 1–2 Minuten ist eduplayhub.de aktualisiert

Kein manueller Upload mehr. Und: jeder Stand ist wiederherstellbar –
wenn eine Änderung etwas kaputt macht, ist das ein **Revert** statt einer
Suche nach der letzten guten Version.

## Kleiner Hinweis für später

Vor jedem Push, bei dem `lektionen.js` geändert wurde:

```
node pruefe-lektionen.js
```

im Projektordner ausführen. Braucht Node.js (<https://nodejs.org>, LTS).
Meldet das Skript Fehler, gehören die vor den Commit repariert.
