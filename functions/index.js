/**
 * EduPlay Hub – KI-Lerncoach Proxy
 * Gemini-Key nur hier (Secret), nie im Frontend.
 *
 * Deploy:
 *   firebase functions:secrets:set GEMINI_API_KEY
 *   firebase deploy --only functions:kiExplain
 */
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");

if (!admin.apps.length) admin.initializeApp();

const geminiApiKey = defineSecret("GEMINI_API_KEY");
const MODEL = "gemini-2.0-flash";

const COACH_RULES = `
Du bist der Lerncoach in der Kinder-Lern-App EduPlay Hub.
Regeln (verbindlich):
1. Sprache: einfaches Deutsch, altersgerecht (ca. Klasse 1–10 je nach Angabe).
2. Kurz: maximal 3–4 Sätze. Keine Romane.
3. Nach Fehlern: nie beschämen. Ruhig, ermutigend.
4. Erkläre WARUM die richtige Antwort stimmt und was am Fehler typisch ist.
5. Gib einen konkreten Tipp, wie man den Fehler künftig vermeidet.
6. Bei zu schwer: biete eine einfachere Denkhilfe / Beispiel.
7. Keine gefährlichen, politischen oder unangemessenen Inhalte.
8. Keine erfundenen Fakten. Wenn unsicher, sage es ehrlich und bleibe beim Kern.
9. Kein freier Chat-Thema außerhalb der Lernfrage.
10. Antworte nur mit dem Erklärungstext, ohne Markdown-Überschriften.
`.trim();

// einfache Rate-Limits pro UID/IP (Speicher pro Instanz)
const hits = new Map();
function rateOk(id, maxPerMin) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  let arr = hits.get(id) || [];
  arr = arr.filter((t) => now - t < windowMs);
  if (arr.length >= maxPerMin) {
    hits.set(id, arr);
    return false;
  }
  arr.push(now);
  hits.set(id, arr);
  return true;
}

exports.kiExplain = onRequest(
  {
    region: "europe-west1",
    secrets: [geminiApiKey],
    cors: true,
    maxInstances: 10,
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
      res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.status(204).send("");
      return;
    }
    res.set("Access-Control-Allow-Origin", "*");

    if (req.method !== "POST") {
      res.status(405).json({ error: "POST only" });
      return;
    }

    // Optional: eingeloggte Nutzer bevorzugen
    let uid = "anon";
    const authHeader = req.get("Authorization") || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    if (token) {
      try {
        const decoded = await admin.auth().verifyIdToken(token);
        uid = decoded.uid || "user";
      } catch (_) {
        // anonyme Nutzung weiter erlauben, aber strenger limitieren
      }
    }

    const limit = uid === "anon" ? 8 : 30;
    if (!rateOk(uid + ":" + (req.ip || ""), limit)) {
      res.status(429).json({ error: "Zu viele Anfragen. Bitte kurz warten." });
      return;
    }

    const body = req.body || {};
    const question = String(body.question || "").slice(0, 800);
    const chosen = String(body.chosen || "").slice(0, 200);
    const correctText = String(body.correctText || "").slice(0, 200);
    const explanation = String(body.explanation || "").slice(0, 500);
    const category = String(body.category || "").slice(0, 80);
    const ageHint = String(body.ageHint || "Schülerin/Schüler").slice(0, 40);

    if (!question || !correctText) {
      res.status(400).json({ error: "question und correctText nötig" });
      return;
    }

    const key = geminiApiKey.value();
    if (!key) {
      res.status(500).json({ error: "Server-Key fehlt" });
      return;
    }

    const userPrompt =
      "Alter/Stufe: " +
      ageHint +
      "\nKategorie: " +
      (category || "allgemein") +
      "\nFrage: " +
      question +
      "\nGewählte Antwort: " +
      (chosen || "—") +
      "\nRichtige Antwort: " +
      correctText +
      "\nVorhandene Kurz-Erklärung: " +
      (explanation || "—") +
      "\n\nErkläre dem Kind verständlich, warum die richtige Antwort stimmt und wie man den Fehler vermeidet.";

    try {
      const url =
        "https://generativelanguage.googleapis.com/v1beta/models/" +
        MODEL +
        ":generateContent?key=" +
        encodeURIComponent(key);

      const gRes = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          systemInstruction: { parts: [{ text: COACH_RULES }] },
          generationConfig: { temperature: 0.4, maxOutputTokens: 280 },
        }),
      });

      if (!gRes.ok) {
        const errText = await gRes.text().catch(() => "");
        console.error("Gemini HTTP", gRes.status, errText.slice(0, 300));
        res.status(502).json({ error: "KI vorübergehend nicht erreichbar" });
        return;
      }

      const data = await gRes.json();
      const text = (data.candidates &&
        data.candidates[0] &&
        data.candidates[0].content &&
        data.candidates[0].content.parts &&
        data.candidates[0].content.parts.map((p) => p.text || "").join("")) ||
        "";

      if (!String(text).trim()) {
        res.status(502).json({ error: "Leere KI-Antwort" });
        return;
      }

      res.json({ text: String(text).trim() });
    } catch (e) {
      console.error("kiExplain", e);
      res.status(500).json({ error: "Serverfehler" });
    }
  }
);
