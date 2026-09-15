# Klasse 10 – was fehlt und wie es gebaut wird

Stand 28.08.2026. Klasse 10 hat aktuell **5 Mathe-Kurse, 1 Deutsch-Kurs, 1 Englisch-Kurs**.
Mathe ist damit ordentlich besetzt, Deutsch und Englisch sind die Lücke.

---

## Teil 1: Was fehlt

### Deutsch – 3 Kurse (vorhanden: „Gedichte untersuchen")

**1. Charakterisierung** · `charakterisierung_k10` · Icon 👤

| Lektion | Inhalt |
|---|---|
| L1 Direkt und indirekt | Direkte Charakterisierung (der Erzähler sagt es) vs. indirekte (Handeln, Sprache, Aussehen, Gedanken). Äußere vs. innere Merkmale. |
| L2 Charakterisierung schreiben | Präsens, Belege mit Zeilenangabe, vom Äußeren zum Inneren, Entwicklung der Figur, kein Nacherzählen. |

**2. Prosatexte interpretieren** · `prosa_k10` · Icon 📕

| Lektion | Inhalt |
|---|---|
| L1 Erzählperspektive | Ich-Erzähler, auktorial, personal, neutral. Innensicht vs. Außensicht. Erzähler ≠ Autor. |
| L2 Deutungshypothese | Erzählzeit vs. erzählte Zeit, Aufbau, von der Beobachtung zur These, Beleg am Text. |

**3. Sachtexte analysieren** · `sachtext_k10` · Icon 📰

| Lektion | Inhalt |
|---|---|
| L1 Textsorte und Absicht | Bericht, Kommentar, Reportage, Glosse unterscheiden. Informieren vs. überzeugen vs. unterhalten. |
| L2 Argumentation und Sprache | Argumentationsgang, These/Beleg/Beispiel, Fachwörter, Wertungen, rhetorische Fragen, Adressat. |

### Englisch – 3 Kurse (vorhanden: „Comment schreiben")

**4. Phrasal Verbs** · `phrasal_verbs_k10` · Icon 🔗

| Lektion | Inhalt |
|---|---|
| L1 Häufige Phrasal Verbs | give up, find out, look after, turn down, put off, get on with – Bedeutung erkennen. |
| L2 Trennbar oder nicht | turn it down ✓ / turn down it ✗. Pronomen steht in der Mitte. Verben mit festem Partikel. |

**5. Modals of Deduction** · `modals_past_k10` · Icon 🕵️

| Lektion | Inhalt |
|---|---|
| L1 must, might, can't | Sicherheit ausdrücken in der Gegenwart: He must be tired. She can't be serious. |
| L2 In der Vergangenheit | must have been, can't have been, might have been, should have done (Vorwurf/Bedauern). |

**6. Present Perfect Progressive** · `ppp_k10` · Icon ⏱️

| Lektion | Inhalt |
|---|---|
| L1 Bilden und verwenden | have/has been + -ing. Dauer bis jetzt, for und since. |
| L2 Abgrenzung | Progressive (wie lange, noch am Laufen) vs. Simple (Ergebnis, wie viele). |

Diese drei Englisch-Themen kommen bisher **nirgends** in der App vor – kein Überschneidungsrisiko.
Bei Deutsch grenzt „Prosatexte interpretieren" an den K9-Kurs „Die Kurzgeschichte" an: dort geht es um
Wendepunkt und offenes Ende, hier um Perspektive und Deutungshypothese. Wenn du unsicher bist,
schau vorher in die K9-Lektion.

**Umfang gesamt:** 6 Kurse · 12 Lektionen · 216 Fragen. Fang mit einem Kurs an, prüf ihn, dann der nächste.

---

## Teil 2: Wohin es kommt

Alles in `lektionen.js`, zwei Stellen:

1. **KURSE-Array** (oben, endet mit `];` bei ca. Zeile 96) – ein Eintrag pro Kurs, ans Ende.
2. **LEKTIONEN-Array** (der große Block, endet mit `];` direkt vor `//  ZUSTAND & HILFSFUNKTIONEN`) – ein Eintrag pro Lektion, ans Ende.

Die Reihenfolge im Array ist egal – `getLektionenForKurs()` sortiert nach `order`.
An `index.html` musst du **nichts** ändern; das Feld `grade` sortiert den Kurs automatisch in die richtige Klassenstufe.

**Vergiss das Komma nicht** vor deinem neuen Eintrag – der bisher letzte Eintrag hat keins.

---

## Teil 3: Namensregeln

| Was | Muster | Beispiel |
|---|---|---|
| Kurs-ID | `thema_k10` | `phrasal_verbs_k10` |
| Lektions-ID | `kurz_k10_l1` | `phras_k10_l1` |
| `category` | `kurs_` + Lektions-ID | `kurs_phras_k10_l1` |
| Übungsfrage | `<kürzel>u_<stufe>_<nr>` | `phrask10l1u_mittel_3` |
| Testfrage | `<kürzel>_test_<nr>` | `phrask10l1_test_5` |

Das Kürzel ist die Lektions-ID ohne Unterstriche. **Jede ID muss in der ganzen Datei einmalig sein** –
das prüft das Skript.

---

## Teil 4: Aufbau einer Lektion

Immer **18 Fragen**: 4 leicht + 4 mittel + 4 schwer + 6 Test. `bestehenAb: 0.8`.

Die richtige Antwort steht **immer an Position 0**, also `correct: 0`. Die App mischt beim Anzeigen
selbst (`shuffleAnswers()`), du musst also nichts durcheinanderwürfeln.

Die Vorlage dafür liegt als `vorlage-lektion.js` im Projektordner – kopieren, ausfüllen, einfügen.

---

## Teil 5: Antwortlängen – die wichtigste Regel

**Regel: Zwischen längster und kürzester Antwort dürfen höchstens 15 Zeichen liegen.**

Warum das zählt: Beim Prüflauf heute waren in den Klassen 8–10 bei 188 Fragen die Längen zu weit
auseinander – und in 136 Fällen war die längste Antwort die richtige. Ein Kind, das nichts weiß,
tippt einfach die längste Antwort und liegt zu 72 % richtig. Damit misst der Test nichts mehr.

### Der Trick, der es verhindert

**Schreib zuerst die drei falschen Antworten, dann die richtige.** Wenn man mit der richtigen anfängt,
formuliert man sie automatisch vollständig und sorgfältig – und die falschen werden zu Resten.

### Alle vier gleich bauen

Gleiche Wortart, gleiche Satzform, gleiche Ausführlichkeit:

```
schlecht:  ✔ Vom schwächsten zum stärksten Argument   (38)
             zufällig                                  (8)
             nur alphabetisch                          (16)
             nur nach Länge                            (13)

gut:       ✔ Vom schwächsten zum stärksten Argument   (38)
             Vom stärksten zum schwächsten Argument    (38)
             Nach der Länge der Absätze sortiert       (35)
             Alphabetisch nach dem ersten Wort         (33)
```

Der zweite Distraktor ist zusätzlich der Fehler, den Schüler wirklich machen. Das ist der Unterschied
zwischen einer Frage, die etwas misst, und einer, die man wegrät.

### Wenn die richtige Antwort kurz ist

Dann müssen **alle vier** kurz sein. Nicht die richtige aufblähen.

```
schlecht:  ✔ 2√2          falsch:  √4·√2 falsch als 6
gut:       ✔ 2√2  |  4  |  2√4  |  8
```

### Weitere Fallen, die das Skript nicht findet

- **Wegwerf-Distraktoren.** „π", „nie", „nur reimen", „kein Verb" – die schließt man ohne
  Sachwissen aus. Jede falsche Antwort soll eine echte Fehlvorstellung sein.
- **Wertgleiche Antworten.** Bei „Kürze 18/24" darf 9/12 nicht danebenstehen – das ist derselbe Wert.
  (Das findet das Skript inzwischen.)
- **Zwei richtige Antworten.** Besonders bei Wortfamilien (Fähre kommt von fahren) und bei
  Geld-/Kombinationsaufgaben. Selbst durchrechnen.
- **Erklärungen.** 1–2 vollständige Sätze mit Beispiel oder Rechenweg. Keine Stichworte wie
  „Beide Seiten." oder „Tempo." – daraus lernt niemand.

---

## Teil 6: Prüfen

Im Projektordner:

```
node pruefe-lektionen.js
```

Braucht Node.js (nodejs.org, LTS-Version). Das Skript prüft Syntax, doppelte IDs, fehlende Felder,
vier Antworten, doppelte Optionen, Antwortlängen, wertgleiche Antworten, SVG-Fehler, Fragenanzahl
pro Lektion – und rechnet einfache Rechenaufgaben nach.

**Ziel: „Alles sauber – keine Fehler, keine Warnungen."**

Danach Cache hochzählen, sonst sehen bestehende Installationen die neuen Kurse nicht:

- `index.html`: `lektionen.js?v=3.6` → `3.7`
- `sw.js`: `const CACHE = 'eduplay-v15'` → `'eduplay-v16'`

---

## Teil 7: Wenn du nicht weiterkommst

Schick mir den Kurs, den du gebaut hast – ich prüfe ihn durch und sage dir konkret, was noch hakt.
Oder sag, welche der sechs Kurse ich übernehmen soll.
