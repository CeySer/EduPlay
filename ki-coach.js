/**
 * EduPlay KI-Lerncoach
 * 1) Server-Proxy (Cloud Function) – Key zentral, für alle Nutzer
 * 2) optional lokaler Gemini-Key (Fallback / Dev)
 * 3) Offline-Erklärung
 */
(function () {
  "use strict";

  const STORAGE_KEY = "eduplay_gemini_api_key";
  const MODEL = "gemini-2.0-flash";

  /** Nach Deploy anpassen, falls Region/Name anders */
  const PROXY_URL =
    "https://europe-west1-eduplay-hub-70d1a.cloudfunctions.net/kiExplain";

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

  function getApiKey() {
    try {
      return (localStorage.getItem(STORAGE_KEY) || "").trim();
    } catch (_) {
      return "";
    }
  }

  function setApiKey(key) {
    try {
      if (key && key.trim()) localStorage.setItem(STORAGE_KEY, key.trim());
      else localStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  }

  function playerAgeHint() {
    try {
      const p = typeof currentPlayer !== "undefined" ? currentPlayer : null;
      if (!p) return "Grundschule/Weiterführend";
      const g = p.grade || p.klasse || p.classLevel;
      if (g) return "Klasse " + g;
      if (p.age) return "ca. " + p.age + " Jahre";
    } catch (_) {}
    return "Schülerin/Schüler";
  }

  function mockExplain(ctx) {
    const parts = [];
    if (ctx.correctText) parts.push("Richtig ist: „" + ctx.correctText + "“.");
    if (ctx.explanation) parts.push(ctx.explanation);
    else parts.push("Schau dir die richtige Antwort noch einmal in Ruhe an.");
    parts.push("Tipp: Lies die Frage noch einmal und streiche unpassende Antworten.");
    return parts.join(" ");
  }

  async function getIdToken() {
    try {
      if (typeof firebase === "undefined" || !firebase.auth) return "";
      const u = firebase.auth().currentUser;
      if (!u) return "";
      return await u.getIdToken();
    } catch (_) {
      return "";
    }
  }

  /** Zentraler Server – alle Nutzer, ein Key */
  async function explainViaProxy(ctx) {
    const headers = { "Content-Type": "application/json" };
    const token = await getIdToken();
    if (token) headers.Authorization = "Bearer " + token;

    const res = await fetch(PROXY_URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        question: ctx.question || "",
        chosen: ctx.chosen || "",
        correctText: ctx.correctText || "",
        explanation: ctx.explanation || "",
        category: ctx.category || "",
        ageHint: playerAgeHint(),
      }),
    });
    if (!res.ok) {
      const err = await res.json().catch(function () {
        return {};
      });
      throw new Error(err.error || "proxy " + res.status);
    }
    const data = await res.json();
    if (!data || !data.text) throw new Error("empty proxy");
    return String(data.text).trim();
  }

  /** Dev-Fallback: direkter Gemini-Call mit lokalem Key */
  async function explainViaLocalKey(ctx) {
    const key = getApiKey();
    if (!key) throw new Error("no local key");

    const userPrompt =
      "Alter/Stufe: " +
      playerAgeHint() +
      "\nKategorie: " +
      (ctx.category || "allgemein") +
      "\nFrage: " +
      (ctx.question || "") +
      "\nGewählte Antwort: " +
      (ctx.chosen || "—") +
      "\nRichtige Antwort: " +
      (ctx.correctText || "") +
      "\nVorhandene Kurz-Erklärung: " +
      (ctx.explanation || "—") +
      "\n\nErkläre dem Kind verständlich, warum die richtige Antwort stimmt und wie man den Fehler vermeidet.";

    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/" +
      MODEL +
      ":generateContent?key=" +
      encodeURIComponent(key);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: COACH_RULES }] },
        generationConfig: { temperature: 0.4, maxOutputTokens: 280 },
      }),
    });
    if (!res.ok) throw new Error("gemini " + res.status);
    const data = await res.json();
    const text =
      data &&
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts
        .map(function (p) {
          return p.text || "";
        })
        .join("");
    if (!text || !String(text).trim()) throw new Error("empty gemini");
    return String(text).trim();
  }

  async function explainWrong(ctx) {
    try {
      return await explainViaProxy(ctx);
    } catch (e1) {
      console.warn("KI-Proxy:", e1 && e1.message);
      try {
        return await explainViaLocalKey(ctx);
      } catch (e2) {
        console.warn("KI lokal:", e2 && e2.message);
        return mockExplain(ctx);
      }
    }
  }

  function localWeakTopics(player, limit) {
    limit = limit || 5;
    if (!player || !player.stats) return [];
    const rows = [];
    Object.keys(player.stats).forEach(function (cat) {
      const s = player.stats[cat];
      if (!s || !s.attempts) return;
      const rate = (s.correct || 0) / s.attempts;
      if (s.attempts >= 3 && rate < 0.7) {
        rows.push({ category: cat, rate: rate, attempts: s.attempts });
      }
    });
    rows.sort(function (a, b) {
      return a.rate - b.rate;
    });
    return rows.slice(0, limit);
  }

  function fillSettingsKeyField() {
    const i = document.getElementById("settings-gemini-key");
    if (!i) return;
    const k = getApiKey();
    i.value = k ? k : "";
    i.placeholder = k ? "•••• Key gespeichert (optional)" : "Optional / nur Dev – Server bevorzugt";
  }

  document.addEventListener("DOMContentLoaded", fillSettingsKeyField);
  const _sw = window.switchView;
  if (typeof _sw === "function") {
    window.switchView = function (id) {
      const r = _sw.apply(this, arguments);
      if (id === "einstellungen") setTimeout(fillSettingsKeyField, 50);
      return r;
    };
  }

  window.EduPlayCoach = {
    COACH_RULES: COACH_RULES,
    PROXY_URL: PROXY_URL,
    getApiKey: getApiKey,
    setApiKey: setApiKey,
    explainWrong: explainWrong,
    localWeakTopics: localWeakTopics,
    mockExplain: mockExplain,
    fillSettingsKeyField: fillSettingsKeyField,
    STORAGE_KEY: STORAGE_KEY,
    MODEL: MODEL,
  };
})();
