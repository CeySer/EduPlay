/* ============================================================
   EduPlay Hub – Qualitätsprüfung für lektionen.js
   Aufruf im Projektordner:   node pruefe-lektionen.js
   Prüft Struktur, Eindeutigkeit, Antwortqualität, Grafiken
   und rechnet einfache Rechenaufgaben automatisch nach.
   ============================================================ */
const fs = require("fs");

const F = { rot: t => "\x1b[31m" + t + "\x1b[0m", gruen: t => "\x1b[32m" + t + "\x1b[0m",
            gelb: t => "\x1b[33m" + t + "\x1b[0m", grau: t => "\x1b[90m" + t + "\x1b[0m" };

let src;
try { src = fs.readFileSync("lektionen.js", "utf8"); }
catch (e) { console.log(F.rot("lektionen.js nicht gefunden – bitte im Projektordner ausführen.")); process.exit(1); }

const cut = src.indexOf("//  ZUSTAND & HILFSFUNKTIONEN");
let KURSE, LEKTIONEN;
try { ({ KURSE, LEKTIONEN } = eval(src.slice(0, cut > 0 ? cut : src.length) + "\n({KURSE,LEKTIONEN})")); }
catch (e) { console.log(F.rot("SYNTAXFEHLER in lektionen.js:")); console.log(e.message); process.exit(1); }

/* ---------- Zusatzdateien lektionen_*.js mitprüfen ----------
   Sie haengen ueber KURSE.push / LEKTIONEN.push an. Reihenfolge wie in index.html
   ist egal, weil jede Datei nur anhaengt.                                        */
const zusatz = fs.readdirSync(".")
    .filter(f => /^lektionen_.*\.js$/.test(f))
    .sort();
const window = undefined;
for (const datei of zusatz) {
    try {
        const code = fs.readFileSync(datei, "utf8");
        (new Function("KURSE", "LEKTIONEN", code))(KURSE, LEKTIONEN);
    } catch (e) {
        console.log(F.rot("SYNTAXFEHLER in " + datei + ":"));
        console.log(e.message);
        process.exit(1);
    }
}

const fehler = [], warnung = [], hinweis = [];
const E = (id, t) => fehler.push(id + ": " + t);
const W = (id, t) => warnung.push(id + ": " + t);
const H = (id, t) => hinweis.push(id + ": " + t);

/* ---------- Wert einer Antwort bestimmen (Zahl, Bruch, Geld, gemischt) ---------- */
function wert(t) {
  if (typeof t !== "string") return null;
  let s = t.trim().replace(EINHEIT, "").trim();
  let m = s.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);            // gemischt: 1 1/2
  if (m) return +m[1] + (+m[2]) / (+m[3]) * (m[1][0] === "-" ? -1 : 1);
  m = s.match(/^(-?\d+)\/(\d+)$/);                         // Bruch
  if (m) return +m[1] / +m[2];
  m = s.match(/^-?\d+(?:[.,]\d+)?$/);                      // Dezimalzahl
  if (m) return parseFloat(s.replace(",", "."));
  return null;
}

const EINHEIT = /(€|ml|cm³|cm²|cm|mm|m²|m³|m|kg|g|%|Cent|Jahre?|Monate?|Tage?)\.?$/i;
function einheit(t) {
  if (typeof t !== "string") return "";
  const m = t.trim().match(EINHEIT);
  return m ? m[1].toLowerCase() : "";
}

/* ---------- einfache Rechenaufgaben nachrechnen ---------- */
const RECHEN = /(?:Rechne|Was ergibt|Löse)\s*:?\s*(-?[\d.,]+(?:\/\d+)?)\s*([+\-−·×*÷:])\s*(-?[\d.,]+(?:\/\d+)?)(?:\s*([+\-−])\s*(-?[\d.,]+(?:\/\d+)?))?/;
function rechne(frage) {
  const m = frage.match(RECHEN);
  if (!m) return null;
  const a = wert(m[1]), b = wert(m[3]);
  if (a === null || b === null) return null;
  let r = m[2] === "+" ? a + b
        : (m[2] === "-" || m[2] === "−") ? a - b
        : (m[2] === "·" || m[2] === "×" || m[2] === "*") ? a * b
        : (b === 0 ? null : a / b);
  if (r === null) return null;
  if (m[4]) { const c = wert(m[5]); if (c === null) return null; r = m[4] === "+" ? r + c : r - c; }
  return r;
}

/* ---------- Prüfung ---------- */
const gesehen = new Map();
const kursIds = new Set(KURSE.map(k => k.id));
if (kursIds.size !== KURSE.length) fehler.push("KURSE: doppelte Kurs-IDs vorhanden");

KURSE.forEach(k => {
  ["id", "title", "icon", "grade", "subject", "beschreibung"].forEach(f => {
    if (k[f] === undefined || k[f] === "") E(k.id, "Kurs-Feld fehlt: " + f);
  });
  const lek = LEKTIONEN.filter(l => l.kurs === k.id);
  if (!lek.length) E(k.id, "Kurs hat keine einzige Lektion");
  const ord = lek.map(l => l.order);
  if (new Set(ord).size !== ord.length) E(k.id, "doppelte order innerhalb des Kurses");
  if (lek.length && Math.min(...ord) !== 1) W(k.id, "erste Lektion hat nicht order 1");
});

let fragenGesamt = 0, geprueft = 0, svgGesamt = 0;

LEKTIONEN.forEach(l => {
  if (gesehen.has(l.id)) E(l.id, "Lektions-ID doppelt vergeben");
  gesehen.set(l.id, 1);
  if (!kursIds.has(l.kurs)) E(l.id, "verweist auf unbekannten Kurs: " + l.kurs);
  if (!l.erklaerung || !l.erklaerung.intro) E(l.id, "erklaerung.intro fehlt");
  if (!l.erklaerung || !l.erklaerung.merksatz) W(l.id, "merksatz fehlt");
  if (typeof l.bestehenAb !== "number") W(l.id, "bestehenAb fehlt");

  (l.erklaerung.beispiele || []).forEach((b, i) => {
    if (b.includes("<svg")) {
      svgGesamt++;
      if ((b.match(/<svg/g) || []).length !== (b.match(/<\/svg>/g) || []).length) E(l.id, "Beispiel " + i + ": SVG nicht geschlossen");
      if ((b.match(/<text/g) || []).length !== (b.match(/<\/text>/g) || []).length) E(l.id, "Beispiel " + i + ": <text> nicht geschlossen");
    }
  });

  const alle = [...(l.uebung.leicht || []), ...(l.uebung.mittel || []), ...(l.uebung.schwer || []), ...(l.test || [])];
  if (alle.length !== 18) W(l.id, alle.length + " Fragen (üblich sind 18: 4+4+4+6)");
  if ((l.test || []).length < 5) W(l.id, "Abschlusstest hat nur " + (l.test || []).length + " Fragen");

  alle.forEach(q => {
    fragenGesamt++;
    if (gesehen.has(q.id)) E(q.id, "Fragen-ID doppelt vergeben");
    gesehen.set(q.id, 1);

    if (!Array.isArray(q.answers) || q.answers.length !== 4) { E(q.id, "nicht genau 4 Antworten"); return; }
    if (new Set(q.answers).size !== 4) E(q.id, "identische Antwortoptionen");
    if (typeof q.correct !== "number" || q.correct < 0 || q.correct > 3) E(q.id, "correct ungültig");
    if (!q.explanation) E(q.id, "explanation fehlt");
    if (!q.question) E(q.id, "question fehlt");
    ["category", "grade", "subject", "difficulty"].forEach(f => { if (q[f] === undefined) W(q.id, "Feld fehlt: " + f); });

    // Antwortlängen-Bias
    const L = q.answers.map(a => a.length);
    const d = Math.max(...L) - Math.min(...L);
    if (d > 15) W(q.id, "Antwortlängen-Differenz " + d + " Zeichen");

    // wertgleiche Antworten
    //  - Fragen, die ausdrücklich nach Gleichwertigkeit fragen, sind ausgenommen
    //  - richtige Antwort wertgleich zu einem Distraktor  -> FEHLER (zwei vertretbare Lösungen)
    //  - zwei Distraktoren untereinander wertgleich       -> Warnung (eine Option verschenkt)
    const gleichwertFrage = /gleichwertig|nicht gleich|denselben Wert|gleich groß|welche.*(?:sind|ist) gleich/i.test(q.question);
    if (!gleichwertFrage) {
      const werte = q.answers.map(wert);
      const einh  = q.answers.map(einheit);
      for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) {
        if (werte[i] === null || werte[j] === null) continue;
        if (Math.abs(werte[i] - werte[j]) > 1e-9) continue;
        if (einh[i] !== einh[j]) continue;   // 84 cm² und 84 cm³ sind nicht dasselbe
        if (i === q.correct || j === q.correct)
          E(q.id, "Distraktor ist wertgleich zur Lösung: '" + q.answers[i] + "' = '" + q.answers[j] + "'");
        else
          W(q.id, "zwei Distraktoren sind wertgleich: '" + q.answers[i] + "' = '" + q.answers[j] + "'");
      }
    }

    // Grafik
    if (q.grafik) {
      if (!q.grafik.trim().startsWith("<svg")) E(q.id, "grafik beginnt nicht mit <svg");
      if (!q.grafik.trim().endsWith("</svg>")) E(q.id, "grafik endet nicht mit </svg>");
    }

    // Rechenprobe
    const soll = rechne(q.question);
    if (soll !== null) {
      geprueft++;
      const ist = wert(q.answers[q.correct]);
      if (ist === null) H(q.id, "Rechenaufgabe, Antwort nicht als Zahl lesbar: " + q.answers[q.correct]);
      else if (Math.abs(ist - soll) > 1e-9) E(q.id, "Rechenfehler: erwartet " + soll + ", markiert ist " + q.answers[q.correct]);
    }
  });
});

/* ---------- Ausgabe ---------- */
const t = {};
KURSE.forEach(k => { t[k.grade] = t[k.grade] || {}; t[k.grade][k.subject] = (t[k.grade][k.subject] || 0) + 1; });

console.log("");
console.log("  EduPlay Hub – Prüfung von lektionen.js" + (zusatz.length ? " + " + zusatz.length + " Zusatzdateien" : ""));
console.log("  " + "─".repeat(52));
console.log("  Kurse: " + KURSE.length + "   Lektionen: " + LEKTIONEN.length + "   Fragen: " + fragenGesamt);
console.log("  SVG-Grafiken in Erklärungen: " + svgGesamt + "   automatisch nachgerechnet: " + geprueft);
/* Konventions-Hinweis: die App mischt die Antworten ohnehin (shuffleAnswers),
   deshalb ist jeder correct-Index erlaubt. Beim NACHTRÄGLICHEN Ersetzen von
   answers muss correct aber mitgezogen werden – sonst zeigt der Index auf eine
   falsche Antwort. Diese Zahl macht sichtbar, wie viele Fragen betroffen wären. */
let nichtNull = 0;
LEKTIONEN.forEach(l => {
  const alle = [].concat(l.uebung && l.uebung.leicht || [], l.uebung && l.uebung.mittel || [],
                         l.uebung && l.uebung.schwer || [], l.test || []);
  alle.forEach(q => { if (q.correct !== 0) nichtNull++; });
});
if (nichtNull) console.log(F.grau("  Fragen mit correct \u2260 0: " + nichtNull + " \u2013 beim Ersetzen von answers muss correct mitgezogen werden"));
Object.keys(t).sort((a, b) => a - b).forEach(g => {
  const z = Object.entries(t[g]).map(([f, n]) => f + " " + n).join(", ");
  console.log("  " + F.grau("Klasse " + g + ": " + z));
});
console.log("");

if (fehler.length) { console.log(F.rot("  FEHLER (" + fehler.length + ") – bitte beheben:")); fehler.forEach(f => console.log("   ✗ " + f)); console.log(""); }
if (warnung.length) { console.log(F.gelb("  WARNUNGEN (" + warnung.length + ") – prüfen, oft Absicht:")); warnung.forEach(w => console.log("   ! " + w)); console.log(""); }
if (hinweis.length) { console.log(F.grau("  HINWEISE (" + hinweis.length + "):")); hinweis.forEach(h => console.log("   · " + h)); console.log(""); }

if (!fehler.length && !warnung.length) console.log(F.gruen("  Alles sauber – keine Fehler, keine Warnungen.\n"));
else if (!fehler.length) console.log(F.gruen("  Keine Fehler – nur Warnungen zum Durchsehen.\n"));

process.exit(fehler.length ? 1 : 0);
