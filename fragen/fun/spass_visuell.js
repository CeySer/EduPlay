// Fun · spass_visuell – Demo visuelle Rätsel (SVG inline, kein Upload nötig)
// Feld "image" = URL oder data:image/svg+xml;...

const SPASS_VISUELL_QUESTIONS = [
  {
    id: "vis_001",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Wie viele Kreise siehst du?",
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120"><rect width="240" height="120" rx="12" fill="#1e1b4b"/><circle cx="50" cy="60" r="22" fill="#f472b6"/><circle cx="110" cy="60" r="22" fill="#a78bfa"/><circle cx="170" cy="60" r="22" fill="#34d399"/><circle cx="140" cy="35" r="14" fill="#fbbf24"/></svg>'),
    imageAlt: "Bunte Kreise",
    answers: ["Drei", "Vier", "Fünf", "Sechs"],
    correct: 1,
    difficulty: "leicht",
    points: 10,
    explanation: "Es sind vier Kreise: drei große und ein kleiner oben."
  },
  {
    id: "vis_002",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Welche Form passt nicht zu den anderen?",
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 100"><rect width="280" height="100" rx="12" fill="#0f172a"/><rect x="20" y="25" width="50" height="50" rx="6" fill="#38bdf8"/><rect x="90" y="25" width="50" height="50" rx="6" fill="#38bdf8"/><circle cx="185" cy="50" r="25" fill="#f472b6"/><rect x="220" y="25" width="50" height="50" rx="6" fill="#38bdf8"/></svg>'),
    imageAlt: "Drei Quadrate und ein Kreis",
    answers: ["Erstes Quadrat", "Der Kreis", "Zweites Quadrat", "Letztes Quadrat"],
    correct: 1,
    difficulty: "leicht",
    points: 10,
    explanation: "Drei Quadrate, ein Kreis – der Kreis gehört nicht dazu."
  },
  {
    id: "vis_003",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Wohin zeigt der Pfeil?",
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"><rect width="200" height="120" rx="12" fill="#111827"/><polygon points="40,60 140,20 140,45 180,45 180,75 140,75 140,100" fill="#fbbf24"/></svg>'),
    imageAlt: "Pfeil nach rechts",
    answers: ["Nach links", "Nach rechts", "Nach oben", "Nach unten"],
    correct: 1,
    difficulty: "leicht",
    points: 10,
    explanation: "Die Spitze zeigt nach rechts."
  },
  {
    id: "vis_004",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Wie viele Dreiecke sind zu sehen?",
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140"><rect width="200" height="140" rx="12" fill="#1e293b"/><polygon points="100,15 30,120 170,120" fill="none" stroke="#e2e8f0" stroke-width="3"/><line x1="100" y1="15" x2="100" y2="120" stroke="#e2e8f0" stroke-width="3"/><line x1="30" y1="120" x2="100" y2="68" stroke="#e2e8f0" stroke-width="3"/><line x1="170" y1="120" x2="100" y2="68" stroke="#e2e8f0" stroke-width="3"/></svg>'),
    imageAlt: "Unterteiltes großes Dreieck",
    answers: ["Drei", "Vier", "Fünf", "Sechs"],
    correct: 2,
    difficulty: "mittel",
    points: 10,
    explanation: "Vier kleine und das große – zusammen fünf."
  },
  {
    id: "vis_005",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Welche Farbe hat der mittlere Punkt?",
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 80"><rect width="240" height="80" rx="12" fill="#0f172a"/><circle cx="50" cy="40" r="18" fill="#ef4444"/><circle cx="120" cy="40" r="18" fill="#22c55e"/><circle cx="190" cy="40" r="18" fill="#3b82f6"/></svg>'),
    imageAlt: "Drei farbige Punkte",
    answers: ["Rot", "Grün", "Blau", "Gelb"],
    correct: 1,
    difficulty: "leicht",
    points: 10,
    explanation: "Links rot, Mitte grün, rechts blau."
  }
];

if (typeof window !== "undefined") window.SPASS_VISUELL_QUESTIONS = SPASS_VISUELL_QUESTIONS;
if (typeof registerQuestions === "function") registerQuestions("SPASS_VISUELL_QUESTIONS", SPASS_VISUELL_QUESTIONS);
