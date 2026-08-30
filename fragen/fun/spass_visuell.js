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
  },
  {
    id: "vis_006",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Wie viele Quadrate siehst du?",
    grafik: "<svg viewBox='0 0 240 120' xmlns='http://www.w3.org/2000/svg'><rect width='240' height='120' rx='12' fill='#0f172a'/><rect x='20' y='30' width='50' height='50' fill='#38bdf8'/><rect x='90' y='30' width='50' height='50' fill='#38bdf8'/><rect x='160' y='30' width='50' height='50' fill='#38bdf8'/></svg>",
    answers: ["Zwei", "Drei", "Vier", "Fünf"],
    correct: 1,
    difficulty: "leicht",
    points: 10,
    explanation: "Drei gleich große Quadrate."
  },
  {
    id: "vis_007",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Welche Figur ist die größte?",
    grafik: "<svg viewBox='0 0 240 120' xmlns='http://www.w3.org/2000/svg'><rect width='240' height='120' rx='12' fill='#111827'/><circle cx='50' cy='60' r='16' fill='#f472b6'/><circle cx='120' cy='60' r='28' fill='#34d399'/><circle cx='190' cy='60' r='20' fill='#60a5fa'/></svg>",
    answers: ["Der linke Kreis", "Der mittlere Kreis", "Der rechte Kreis", "Alle gleich"],
    correct: 1,
    difficulty: "leicht",
    points: 10,
    explanation: "Der grüne Kreis in der Mitte ist am größten."
  },
  {
    id: "vis_008",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Wohin zeigt die Spitze?",
    grafik: "<svg viewBox='0 0 200 120' xmlns='http://www.w3.org/2000/svg'><rect width='200' height='120' rx='12' fill='#1e1b4b'/><polygon points='100,20 160,90 40,90' fill='#fbbf24'/></svg>",
    answers: ["Nach unten", "Nach links", "Nach rechts", "Nach oben"],
    correct: 3,
    difficulty: "leicht",
    points: 10,
    explanation: "Das Dreieck zeigt nach oben."
  },
  {
    id: "vis_009",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Wie viele Sterne sind zu sehen?",
    grafik: "<svg viewBox='0 0 240 100' xmlns='http://www.w3.org/2000/svg'><rect width='240' height='100' rx='12' fill='#0b1220'/><text x='40' y='62' font-size='36'>⭐</text><text x='100' y='62' font-size='36'>⭐</text><text x='160' y='62' font-size='36'>⭐</text></svg>",
    answers: ["Zwei", "Drei", "Vier", "Fünf"],
    correct: 1,
    difficulty: "leicht",
    points: 10,
    explanation: "Drei Sterne."
  },
  {
    id: "vis_010",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Welche Reihe hat mehr Punkte?",
    grafik: "<svg viewBox='0 0 240 120' xmlns='http://www.w3.org/2000/svg'><rect width='240' height='120' rx='12' fill='#0f172a'/><circle cx='40' cy='35' r='8' fill='#e5e7eb'/><circle cx='70' cy='35' r='8' fill='#e5e7eb'/><circle cx='100' cy='35' r='8' fill='#e5e7eb'/><circle cx='40' cy='80' r='8' fill='#e5e7eb'/><circle cx='70' cy='80' r='8' fill='#e5e7eb'/><circle cx='100' cy='80' r='8' fill='#e5e7eb'/><circle cx='130' cy='80' r='8' fill='#e5e7eb'/><circle cx='160' cy='80' r='8' fill='#e5e7eb'/></svg>",
    answers: ["Die obere Reihe", "Beide gleich", "Man kann es nicht sehen", "Die untere Reihe"],
    correct: 3,
    difficulty: "leicht",
    points: 10,
    explanation: "Oben 3, unten 5."
  },
  {
    id: "vis_011",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Welches Viertel ist ausgefüllt?",
    grafik: "<svg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'><rect width='160' height='160' rx='12' fill='#111827'/><rect x='20' y='20' width='55' height='55' fill='#22c55e'/><rect x='85' y='20' width='55' height='55' fill='#1f2937' stroke='#334155'/><rect x='20' y='85' width='55' height='55' fill='#1f2937' stroke='#334155'/><rect x='85' y='85' width='55' height='55' fill='#1f2937' stroke='#334155'/></svg>",
    answers: ["Unten rechts", "Unten links", "Oben rechts", "Oben links"],
    correct: 3,
    difficulty: "leicht",
    points: 10,
    explanation: "Nur oben links ist grün."
  },
  {
    id: "vis_012",
    category: "spass_visuell",
    area: "spass",
    subject: "visuell",
    question: "Wie viele Seiten hat die Form in der Mitte?",
    grafik: "<svg viewBox='0 0 200 140' xmlns='http://www.w3.org/2000/svg'><rect width='200' height='140' rx='12' fill='#1e293b'/><polygon points='100,20 170,60 145,120 55,120 30,60' fill='#a78bfa'/></svg>",
    answers: ["Vier", "Sechs", "Drei", "Fünf"],
    correct: 3,
    difficulty: "mittel",
    points: 10,
    explanation: "Ein Fünfeck."
  }
];


if (typeof window !== "undefined") window.SPASS_VISUELL_QUESTIONS = SPASS_VISUELL_QUESTIONS;
if (typeof registerQuestions === "function") registerQuestions("SPASS_VISUELL_QUESTIONS", SPASS_VISUELL_QUESTIONS);
