// Geld rechnen – Klasse 2+3
const GELD_QUESTIONS = [
 {
  "id": "geld_k2_001",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Lolli kostet 0,50 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "5 Euro",
   "5,50 Euro",
   "4,50 Euro",
   "0,50 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 0,50 Euro ergibt 4,50 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='15' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>50 ct</text></svg>"
 },
 {
  "id": "geld_k2_002",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Kartenspiel kostet 3,50 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "1,50 Euro",
   "3,50 Euro",
   "5 Euro",
   "2,50 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 3,50 Euro ergibt 1,50 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 242 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,50 €</text></svg>"
 },
 {
  "id": "geld_k2_003",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Kuscheltier kostet 8 Euro. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "8 Euro",
   "3 Euro",
   "2 Euro",
   "10 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "10 Euro minus 8 Euro ergibt 2 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 274 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 €</text></svg>"
 },
 {
  "id": "geld_k2_004",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Zoo-Ticket kostet 5 Euro. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "6 Euro",
   "10 Euro",
   "7 Euro",
   "5 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "10 Euro minus 5 Euro ergibt 5 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 194 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text></svg>"
 },
 {
  "id": "geld_k2_005",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Kreisel kostet 3 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "4 Euro",
   "3 Euro",
   "5 Euro",
   "2 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 3 Euro ergibt 2 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 206 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text></svg>"
 },
 {
  "id": "geld_k2_006",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Tafel Schokolade kostet 1,50 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "4,50 Euro",
   "5 Euro",
   "3,50 Euro",
   "1,50 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 1,50 Euro ergibt 3,50 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 202 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,50 €</text></svg>"
 },
 {
  "id": "geld_k2_007",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Malbuch kostet 3 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "3 Euro",
   "4 Euro",
   "5 Euro",
   "2 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 3 Euro ergibt 2 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 206 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text></svg>"
 },
 {
  "id": "geld_k2_008",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Buntstift-Set kostet 4,50 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "0,50 Euro",
   "5 Euro",
   "1,50 Euro",
   "4,50 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 4,50 Euro ergibt 0,50 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 242 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,50 €</text></svg>"
 },
 {
  "id": "geld_k2_009",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Radiergummi-Set kostet 2 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "4 Euro",
   "3 Euro",
   "2 Euro",
   "5 Euro"
  ],
  "correct": 1,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 2 Euro ergibt 3 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 €</text></svg>"
 },
 {
  "id": "geld_k2_010",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Getränk im Kino kostet 2,50 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "5 Euro",
   "4,50 Euro",
   "3,50 Euro",
   "2,50 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 2,50 Euro ergibt 2,50 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 202 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text></svg>"
 },
 {
  "id": "geld_k2_011",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Wasserpistole kostet 3 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "5 Euro",
   "4 Euro",
   "2 Euro",
   "3 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 3 Euro ergibt 2 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 206 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text></svg>"
 },
 {
  "id": "geld_k2_012",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Sticker-Heft kostet 2,50 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "4,50 Euro",
   "3,50 Euro",
   "5 Euro",
   "2,50 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 2,50 Euro ergibt 2,50 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 202 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text></svg>"
 },
 {
  "id": "geld_k2_013",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Comicheft kostet 4 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "1 Euro",
   "5 Euro",
   "4 Euro",
   "2 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 4 Euro ergibt 1 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 206 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 €</text></svg>"
 },
 {
  "id": "geld_k2_014",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Puzzle kostet 6,50 Euro. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "3,50 Euro",
   "6,50 Euro",
   "4,50 Euro",
   "10 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "10 Euro minus 6,50 Euro ergibt 3,50 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 270 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6,50 €</text></svg>"
 },
 {
  "id": "geld_k2_015",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Museumsticket kostet 4 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "1 Euro",
   "2 Euro",
   "4 Euro",
   "5 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 4 Euro ergibt 1 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 206 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 €</text></svg>"
 },
 {
  "id": "geld_k2_016",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Frisbee kostet 2,50 Euro. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "5 Euro",
   "4,50 Euro",
   "3,50 Euro",
   "2,50 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "5 Euro minus 2,50 Euro ergibt 2,50 Euro Rückgeld.",
  "grafik": "<svg viewBox='0 0 202 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text></svg>"
 },
 {
  "id": "geld_k2_017",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Comicheft kostet 4 Euro und ein Popcorn kostet 3 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "6 Euro",
   "8 Euro",
   "7 Euro",
   "1 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "4 Euro plus 3 Euro ergibt 7 Euro.",
  "grafik": "<svg viewBox='0 0 190 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Comicheft</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 €</text><text x='95' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='110' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Popcorn</text><g transform='translate(110,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='110' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text></svg>"
 },
 {
  "id": "geld_k2_018",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Buntstift-Set kostet 4,50 Euro und ein Springseil kostet 3,50 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "7 Euro",
   "9 Euro",
   "8 Euro",
   "1 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "4,50 Euro plus 3,50 Euro ergibt 8 Euro.",
  "grafik": "<svg viewBox='0 0 262 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Buntstift-Set</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,50 €</text><text x='131' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='146' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Springseil</text><g transform='translate(146,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='146' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,50 €</text></svg>"
 },
 {
  "id": "geld_k2_019",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Luftballon kostet 1 Euro und ein Comicheft kostet 4 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "5 Euro",
   "3 Euro",
   "4 Euro",
   "6 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "1 Euro plus 4 Euro ergibt 5 Euro.",
  "grafik": "<svg viewBox='0 0 198 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Luftballon</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 €</text><text x='103' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='118' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Comicheft</text><g transform='translate(118,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='118' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 €</text></svg>"
 },
 {
  "id": "geld_k2_020",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Museumsticket kostet 4 Euro und eine Packung Gummibärchen kostet 1,50 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "5,50 Euro",
   "4,50 Euro",
   "6,50 Euro",
   "2,50 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "4 Euro plus 1,50 Euro ergibt 5,50 Euro.",
  "grafik": "<svg viewBox='0 0 218 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Museumsticket</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 €</text><text x='127' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='142' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Packung…</text><g transform='translate(142,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='142' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,50 €</text></svg>"
 },
 {
  "id": "geld_k2_021",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Comicheft kostet 4 Euro und eine Postkarte kostet 1 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "6 Euro",
   "4 Euro",
   "3 Euro",
   "5 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "4 Euro plus 1 Euro ergibt 5 Euro.",
  "grafik": "<svg viewBox='0 0 190 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Comicheft</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 €</text><text x='95' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='110' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Postkarte</text><g transform='translate(110,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='110' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 €</text></svg>"
 },
 {
  "id": "geld_k2_022",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Wasserpistole kostet 3 Euro und ein Luftballon kostet 1 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "2 Euro",
   "5 Euro",
   "3 Euro",
   "4 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "3 Euro plus 1 Euro ergibt 4 Euro.",
  "grafik": "<svg viewBox='0 0 230 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Wasserpistole</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text><text x='127' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='142' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Luftballon</text><g transform='translate(142,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='142' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 €</text></svg>"
 },
 {
  "id": "geld_k2_023",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Postkarte kostet 1 Euro und ein Kreisel kostet 3 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "5 Euro",
   "4 Euro",
   "2 Euro",
   "3 Euro"
  ],
  "correct": 1,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "1 Euro plus 3 Euro ergibt 4 Euro.",
  "grafik": "<svg viewBox='0 0 190 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Postkarte</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 €</text><text x='95' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='110' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kreisel</text><g transform='translate(110,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='110' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text></svg>"
 },
 {
  "id": "geld_k2_024",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Sticker-Heft kostet 2,50 Euro und ein Kinoticket kostet 6 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "8,50 Euro",
   "9,50 Euro",
   "3,50 Euro",
   "7,50 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2,50 Euro plus 6 Euro ergibt 8,50 Euro.",
  "grafik": "<svg viewBox='0 0 242 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Sticker-Heft</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text><text x='119' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='134' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kinoticket</text><g transform='translate(134,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='134' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 €</text></svg>"
 },
 {
  "id": "geld_k2_025",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Radiergummi-Set kostet 2 Euro und eine Packung Gummibärchen kostet 1,50 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "4,50 Euro",
   "0,50 Euro",
   "3,50 Euro",
   "2,50 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2 Euro plus 1,50 Euro ergibt 3,50 Euro.",
  "grafik": "<svg viewBox='0 0 234 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Radiergummi-Set</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 €</text><text x='143' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='158' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Packung…</text><g transform='translate(158,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='158' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,50 €</text></svg>"
 },
 {
  "id": "geld_k2_026",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Wasserpistole kostet 3 Euro und ein Lolli kostet 0,50 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "5,50 Euro",
   "4,50 Euro",
   "3,50 Euro",
   "2,50 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "3 Euro plus 0,50 Euro ergibt 3,50 Euro.",
  "grafik": "<svg viewBox='0 0 194 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Wasserpistole</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text><text x='127' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='142' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Lolli</text><g transform='translate(142,20)'><circle cx='15' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='142' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>50 ct</text></svg>"
 },
 {
  "id": "geld_k2_027",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Sticker-Heft kostet 2,50 Euro und ein Kuscheltier kostet 8 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "10,50 Euro",
   "5,50 Euro",
   "9,50 Euro",
   "11,50 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2,50 Euro plus 8 Euro ergibt 10,50 Euro.",
  "grafik": "<svg viewBox='0 0 282 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Sticker-Heft</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text><text x='119' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='134' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kuscheltier</text><g transform='translate(134,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='134' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 €</text></svg>"
 },
 {
  "id": "geld_k2_028",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Eis kostet 2 Euro und ein Buntstift-Set kostet 4,50 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "6,50 Euro",
   "7,50 Euro",
   "2,50 Euro",
   "5,50 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2 Euro plus 4,50 Euro ergibt 6,50 Euro.",
  "grafik": "<svg viewBox='0 0 198 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Eis</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 €</text><text x='67' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='82' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Buntstift-Set</text><g transform='translate(82,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='82' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,50 €</text></svg>"
 },
 {
  "id": "geld_k2_029",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Getränk im Kino kostet 2,50 Euro und ein Luftballon kostet 1 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "3,50 Euro",
   "4,50 Euro",
   "1,50 Euro",
   "2,50 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2,50 Euro plus 1 Euro ergibt 3,50 Euro.",
  "grafik": "<svg viewBox='0 0 246 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Getränk im Kino</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text><text x='143' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='158' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Luftballon</text><g transform='translate(158,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='158' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1 €</text></svg>"
 },
 {
  "id": "geld_k2_030",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Portion Pommes kostet 2,50 Euro und ein Kuscheltier kostet 8 Euro. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "10,50 Euro",
   "11,50 Euro",
   "9,50 Euro",
   "5,50 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2,50 Euro plus 8 Euro ergibt 10,50 Euro.",
  "grafik": "<svg viewBox='0 0 298 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Portion Pommes</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text><text x='135' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='150' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kuscheltier</text><g transform='translate(150,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='150' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8 €</text></svg>"
 },
 {
  "id": "geld_k2_031",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Lena hat 15 Euro Taschengeld und kauft sich ein Kinoticket für 6 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "15 Euro",
   "11 Euro",
   "6 Euro",
   "9 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "15 Euro minus 6 Euro ergibt 9 Euro.",
  "grafik": "<svg viewBox='0 0 274 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>15 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 €</text></svg>"
 },
 {
  "id": "geld_k2_032",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Tim hat 15 Euro Taschengeld und kauft sich ein Eis für 2 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "2 Euro",
   "15 Euro",
   "14 Euro",
   "13 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "15 Euro minus 2 Euro ergibt 13 Euro.",
  "grafik": "<svg viewBox='0 0 246 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>15 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 €</text></svg>"
 },
 {
  "id": "geld_k2_033",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Mia hat 20 Euro Taschengeld und kauft sich einen Kreisel für 3 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "17 Euro",
   "19 Euro",
   "3 Euro",
   "20 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "20 Euro minus 3 Euro ergibt 17 Euro.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3 €</text></svg>"
 },
 {
  "id": "geld_k2_034",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ben hat 10 Euro Taschengeld und kauft sich ein Sticker-Heft für 2,50 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "9,50 Euro",
   "10 Euro",
   "2,50 Euro",
   "7,50 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "10 Euro minus 2,50 Euro ergibt 7,50 Euro.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text></svg>"
 },
 {
  "id": "geld_k2_035",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Emma hat 15 Euro Taschengeld und kauft sich einen Ball für 6 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "9 Euro",
   "6 Euro",
   "15 Euro",
   "11 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "15 Euro minus 6 Euro ergibt 9 Euro.",
  "grafik": "<svg viewBox='0 0 274 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>15 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6 €</text></svg>"
 },
 {
  "id": "geld_k2_036",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Finn hat 10 Euro Taschengeld und kauft sich einen Frisbee für 2,50 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "9,50 Euro",
   "2,50 Euro",
   "10 Euro",
   "7,50 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "10 Euro minus 2,50 Euro ergibt 7,50 Euro.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text></svg>"
 },
 {
  "id": "geld_k2_037",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Lea hat 10 Euro Taschengeld und kauft sich ein Radiergummi-Set für 2 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "9 Euro",
   "2 Euro",
   "10 Euro",
   "8 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "10 Euro minus 2 Euro ergibt 8 Euro.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 €</text></svg>"
 },
 {
  "id": "geld_k2_038",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Noah hat 10 Euro Taschengeld und kauft sich ein Comicheft für 4 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "10 Euro",
   "4 Euro",
   "8 Euro",
   "6 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "10 Euro minus 4 Euro ergibt 6 Euro.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 €</text></svg>"
 },
 {
  "id": "geld_k2_039",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Mila hat 20 Euro Taschengeld und kauft sich ein Kartenspiel für 3,50 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "20 Euro",
   "18,50 Euro",
   "16,50 Euro",
   "3,50 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "20 Euro minus 3,50 Euro ergibt 16,50 Euro.",
  "grafik": "<svg viewBox='0 0 214 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,50 €</text></svg>"
 },
 {
  "id": "geld_k2_040",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Paul hat 10 Euro Taschengeld und kauft sich ein Museumsticket für 4 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "10 Euro",
   "6 Euro",
   "4 Euro",
   "8 Euro"
  ],
  "correct": 1,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "10 Euro minus 4 Euro ergibt 6 Euro.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4 €</text></svg>"
 },
 {
  "id": "geld_k2_041",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ida hat 20 Euro Taschengeld und kauft sich eine Fahrt auf dem Karussell für 2 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "18 Euro",
   "2 Euro",
   "20 Euro",
   "19 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "20 Euro minus 2 Euro ergibt 18 Euro.",
  "grafik": "<svg viewBox='0 0 178 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2 €</text></svg>"
 },
 {
  "id": "geld_k2_042",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Luis hat 15 Euro Taschengeld und kauft sich ein Puzzle für 6,50 Euro. Wie viel Geld bleibt übrig?",
  "answers": [
   "6,50 Euro",
   "8,50 Euro",
   "15 Euro",
   "10,50 Euro"
  ],
  "correct": 1,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "15 Euro minus 6,50 Euro ergibt 8,50 Euro.",
  "grafik": "<svg viewBox='0 0 310 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>15 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6,50 €</text></svg>"
 },
 {
  "id": "geld_k2_043",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ben spart jede Woche 1 Euro. Wie viel Geld hat Ben nach 2 Wochen gespart?",
  "answers": [
   "3 Euro",
   "1 Euro",
   "4 Euro",
   "2 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "1 Euro mal 2 Wochen ergibt 2 Euro.",
  "grafik": "<svg viewBox='0 0 200 78' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>jede Woche</text><circle cx='24' cy='42' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='24' cy='42' r='12' fill='#fbbf24'/><text x='24' y='46' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><text x='58' y='48' font-size='20' font-weight='700' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='88' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='110' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='110' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 1</text><rect x='140' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='162' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='162' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 2</text></svg>"
 },
 {
  "id": "geld_k2_044",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Emma spart jede Woche 1 Euro. Wie viel Geld hat Emma nach 3 Wochen gespart?",
  "answers": [
   "4 Euro",
   "3 Euro",
   "5 Euro",
   "2 Euro"
  ],
  "correct": 1,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "1 Euro mal 3 Wochen ergibt 3 Euro.",
  "grafik": "<svg viewBox='0 0 252 78' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>jede Woche</text><circle cx='24' cy='42' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='24' cy='42' r='12' fill='#fbbf24'/><text x='24' y='46' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><text x='58' y='48' font-size='20' font-weight='700' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='88' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='110' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='110' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 1</text><rect x='140' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='162' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='162' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 2</text><rect x='192' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='214' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='214' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 3</text></svg>"
 },
 {
  "id": "geld_k2_045",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Finn spart jede Woche 1 Euro. Wie viel Geld hat Finn nach 4 Wochen gespart?",
  "answers": [
   "6 Euro",
   "3 Euro",
   "4 Euro",
   "5 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "1 Euro mal 4 Wochen ergibt 4 Euro.",
  "grafik": "<svg viewBox='0 0 304 78' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>jede Woche</text><circle cx='24' cy='42' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='24' cy='42' r='12' fill='#fbbf24'/><text x='24' y='46' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><text x='58' y='48' font-size='20' font-weight='700' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='88' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='110' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='110' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 1</text><rect x='140' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='162' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='162' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 2</text><rect x='192' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='214' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='214' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 3</text><rect x='244' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='266' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='266' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 4</text></svg>"
 },
 {
  "id": "geld_k2_046",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Lea spart jede Woche 1 Euro. Wie viel Geld hat Lea nach 5 Wochen gespart?",
  "answers": [
   "6 Euro",
   "4 Euro",
   "7 Euro",
   "5 Euro"
  ],
  "correct": 3,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "1 Euro mal 5 Wochen ergibt 5 Euro.",
  "grafik": "<svg viewBox='0 0 356 78' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>jede Woche</text><circle cx='24' cy='42' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='24' cy='42' r='12' fill='#fbbf24'/><text x='24' y='46' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><text x='58' y='48' font-size='20' font-weight='700' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='88' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='110' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='110' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 1</text><rect x='140' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='162' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='162' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 2</text><rect x='192' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='214' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='214' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 3</text><rect x='244' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='266' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='266' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 4</text><rect x='296' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='318' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='318' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 5</text></svg>"
 },
 {
  "id": "geld_k2_047",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Noah spart jede Woche 2 Euro. Wie viel Geld hat Noah nach 2 Wochen gespart?",
  "answers": [
   "4 Euro",
   "2 Euro",
   "6 Euro",
   "5 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2 Euro mal 2 Wochen ergibt 4 Euro.",
  "grafik": "<svg viewBox='0 0 200 78' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>jede Woche</text><circle cx='24' cy='42' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='24' cy='42' r='12' fill='#fbbf24'/><text x='24' y='46' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><text x='58' y='48' font-size='20' font-weight='700' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='88' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='110' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='110' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 1</text><rect x='140' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='162' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='162' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 2</text></svg>"
 },
 {
  "id": "geld_k2_048",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Mila spart jede Woche 2 Euro. Wie viel Geld hat Mila nach 3 Wochen gespart?",
  "answers": [
   "8 Euro",
   "3 Euro",
   "6 Euro",
   "4 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2 Euro mal 3 Wochen ergibt 6 Euro.",
  "grafik": "<svg viewBox='0 0 252 78' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>jede Woche</text><circle cx='24' cy='42' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='24' cy='42' r='12' fill='#fbbf24'/><text x='24' y='46' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><text x='58' y='48' font-size='20' font-weight='700' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='88' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='110' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='110' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 1</text><rect x='140' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='162' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='162' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 2</text><rect x='192' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='214' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='214' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 3</text></svg>"
 },
 {
  "id": "geld_k2_049",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Paul spart jede Woche 2 Euro. Wie viel Geld hat Paul nach 4 Wochen gespart?",
  "answers": [
   "8 Euro",
   "10 Euro",
   "4 Euro",
   "6 Euro"
  ],
  "correct": 0,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2 Euro mal 4 Wochen ergibt 8 Euro.",
  "grafik": "<svg viewBox='0 0 304 78' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>jede Woche</text><circle cx='24' cy='42' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='24' cy='42' r='12' fill='#fbbf24'/><text x='24' y='46' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><text x='58' y='48' font-size='20' font-weight='700' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='88' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='110' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='110' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 1</text><rect x='140' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='162' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='162' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 2</text><rect x='192' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='214' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='214' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 3</text><rect x='244' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='266' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='266' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 4</text></svg>"
 },
 {
  "id": "geld_k2_050",
  "category": "k2_mathe_geld",
  "area": "schule",
  "grade": 2,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ida spart jede Woche 2 Euro. Wie viel Geld hat Ida nach 5 Wochen gespart?",
  "answers": [
   "12 Euro",
   "8 Euro",
   "10 Euro",
   "5 Euro"
  ],
  "correct": 2,
  "difficulty": "leicht",
  "points": 10,
  "explanation": "2 Euro mal 5 Wochen ergibt 10 Euro.",
  "grafik": "<svg viewBox='0 0 356 78' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>jede Woche</text><circle cx='24' cy='42' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='24' cy='42' r='12' fill='#fbbf24'/><text x='24' y='46' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><text x='58' y='48' font-size='20' font-weight='700' font-family='sans-serif' fill='#94a3b8'>×</text><rect x='88' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='110' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='110' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 1</text><rect x='140' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='162' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='162' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 2</text><rect x='192' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='214' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='214' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 3</text><rect x='244' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='266' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='266' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 4</text><rect x='296' y='24' width='44' height='36' rx='5' fill='rgba(148,163,184,0.10)' stroke='rgba(148,163,184,0.40)' stroke-dasharray='4 3'/><text x='318' y='47' text-anchor='middle' font-size='15' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>?</text><text x='318' y='72' text-anchor='middle' font-size='10' font-family='sans-serif' fill='#94a3b8'>Woche 5</text></svg>"
 },
 {
  "id": "geld_k3_001",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Kuscheltier kostet 9,90 €. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "1,10 €",
   "0,60 €",
   "0,10 €",
   "9,90 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "10,00 € minus 9,90 € ergibt 0,10 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 274 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='51' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='51' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='87' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='87' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='126' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9,90 €</text></svg>"
 },
 {
  "id": "geld_k3_002",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Duft-Radiergummi kostet 1,40 €. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "3,10 €",
   "3,60 €",
   "1,40 €",
   "4,60 €"
  ],
  "correct": 1,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "5,00 € minus 1,40 € ergibt 3,60 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 238 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,40 €</text></svg>"
 },
 {
  "id": "geld_k3_003",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Modellauto kostet 6,90 €. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "4,10 €",
   "3,10 €",
   "2,60 €",
   "6,90 €"
  ],
  "correct": 1,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "10,00 € minus 6,90 € ergibt 3,10 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 270 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='51' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='51' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='126' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6,90 €</text></svg>"
 },
 {
  "id": "geld_k3_004",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Museumsticket kostet 4,50 €. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "0,50 €",
   "4,50 €",
   "0,00 €",
   "1,50 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "5,00 € minus 4,50 € ergibt 0,50 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 242 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,50 €</text></svg>"
 },
 {
  "id": "geld_k3_005",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Portion Pommes kostet 3,10 €. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "1,40 €",
   "2,90 €",
   "1,90 €",
   "3,10 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "5,00 € minus 3,10 € ergibt 1,90 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 242 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,10 €</text></svg>"
 },
 {
  "id": "geld_k3_006",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Comicheft kostet 3,50 €. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "3,50 €",
   "2,50 €",
   "1,50 €",
   "1,00 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "5,00 € minus 3,50 € ergibt 1,50 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 242 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,50 €</text></svg>"
 },
 {
  "id": "geld_k3_007",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Federmäppchen kostet 5,60 €. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "4,40 €",
   "3,90 €",
   "5,40 €",
   "5,60 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "10,00 € minus 5,60 € ergibt 4,40 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 266 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='83' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='83' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='119' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='119' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5,60 €</text></svg>"
 },
 {
  "id": "geld_k3_008",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Trinkflasche kostet 5,90 €. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "5,10 €",
   "4,10 €",
   "3,60 €",
   "5,90 €"
  ],
  "correct": 1,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "10,00 € minus 5,90 € ergibt 4,10 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 266 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='83' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='83' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='119' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='119' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='126' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5,90 €</text></svg>"
 },
 {
  "id": "geld_k3_009",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Ball kostet 5,30 €. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "4,70 €",
   "5,30 €",
   "4,20 €",
   "5,70 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "10,00 € minus 5,30 € ergibt 4,70 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 266 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='83' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='83' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='119' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='119' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5,30 €</text></svg>"
 },
 {
  "id": "geld_k3_010",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Wasserball kostet 4,70 €. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "0,30 €",
   "4,70 €",
   "1,30 €",
   "0,80 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "5,00 € minus 4,70 € ergibt 0,30 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 278 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='131' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='131' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,70 €</text></svg>"
 },
 {
  "id": "geld_k3_011",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Kinoticket kostet 7,50 €. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "7,50 €",
   "2,00 €",
   "3,50 €",
   "2,50 €"
  ],
  "correct": 3,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "10,00 € minus 7,50 € ergibt 2,50 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 270 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7,50 €</text></svg>"
 },
 {
  "id": "geld_k3_012",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Kreisel kostet 2,90 €. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "2,10 €",
   "1,60 €",
   "3,10 €",
   "2,90 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "5,00 € minus 2,90 € ergibt 2,10 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 274 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='127' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='127' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,90 €</text></svg>"
 },
 {
  "id": "geld_k3_013",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Notizheft kostet 2,60 €. Du bezahlst mit einem 5-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "2,60 €",
   "1,90 €",
   "3,40 €",
   "2,40 €"
  ],
  "correct": 3,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "5,00 € minus 2,60 € ergibt 2,40 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 238 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,60 €</text></svg>"
 },
 {
  "id": "geld_k3_014",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Buch kostet 6,50 €. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "6,50 €",
   "3,50 €",
   "4,50 €",
   "3,00 €"
  ],
  "correct": 1,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "10,00 € minus 6,50 € ergibt 3,50 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 270 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>6,50 €</text></svg>"
 },
 {
  "id": "geld_k3_015",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Zoo-Ticket kostet 8,50 €. Du bezahlst mit einem 10-Euro-Schein. Wie viel Rückgeld bekommst du?",
  "answers": [
   "1,50 €",
   "1,00 €",
   "8,50 €",
   "2,50 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "10,00 € minus 8,50 € ergibt 1,50 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 274 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10 €</text><text x='111' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8,50 €</text></svg>"
 },
 {
  "id": "geld_k3_016",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Museumsticket kostet 4,50 € und ein Ball kostet 5,30 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "9,80 €",
   "9,30 €",
   "0,80 €",
   "10,80 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "4,50 € plus 5,30 € ergibt 9,80 €.",
  "grafik": "<svg viewBox='0 0 286 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Museumsticket</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,50 €</text><text x='131' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='146' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Ball</text><g transform='translate(146,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='83' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='83' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='119' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='119' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='146' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5,30 €</text></svg>"
 },
 {
  "id": "geld_k3_017",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Getränk kostet 2,80 € und ein Kuscheltier kostet 9,90 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "12,70 €",
   "12,20 €",
   "13,70 €",
   "7,10 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "2,80 € plus 9,90 € ergibt 12,70 €.",
  "grafik": "<svg viewBox='0 0 326 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Getränk</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='127' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='127' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,80 €</text><text x='163' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='178' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kuscheltier</text><g transform='translate(178,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='51' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='51' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='87' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='87' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='178' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9,90 €</text></svg>"
 },
 {
  "id": "geld_k3_018",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Duft-Radiergummi kostet 1,40 € und ein Notizheft kostet 2,60 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "5,00 €",
   "3,50 €",
   "1,20 €",
   "4,00 €"
  ],
  "correct": 3,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "1,40 € plus 2,60 € ergibt 4,00 €.",
  "grafik": "<svg viewBox='0 0 278 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Duft-Radiergummi</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,40 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Notizheft</text><g transform='translate(166,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,60 €</text></svg>"
 },
 {
  "id": "geld_k3_019",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Schlüsselanhänger kostet 2,20 € und eine Packung Gummibärchen kostet 1,60 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "3,80 €",
   "3,30 €",
   "4,80 €",
   "0,60 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "2,20 € plus 1,60 € ergibt 3,80 €.",
  "grafik": "<svg viewBox='0 0 286 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Schlüsselanhänger</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,20 €</text><text x='159' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='174' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Packung…</text><g transform='translate(174,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='174' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,60 €</text></svg>"
 },
 {
  "id": "geld_k3_020",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Kreisel kostet 2,90 € und ein Kugelschreiber kostet 1,20 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "5,10 €",
   "3,60 €",
   "4,10 €",
   "1,70 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "2,90 € plus 1,20 € ergibt 4,10 €.",
  "grafik": "<svg viewBox='0 0 298 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kreisel</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='127' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='127' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,90 €</text><text x='163' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='178' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kugelschreiber</text><g transform='translate(178,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='178' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,20 €</text></svg>"
 },
 {
  "id": "geld_k3_021",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Schlüsselanhänger kostet 2,20 € und ein Fussball kostet 12,50 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "15,70 €",
   "14,20 €",
   "10,30 €",
   "14,70 €"
  ],
  "correct": 3,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "2,20 € plus 12,50 € ergibt 14,70 €.",
  "grafik": "<svg viewBox='0 0 318 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Schlüsselanhänger</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,20 €</text><text x='159' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='174' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Fussball</text><g transform='translate(174,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='174' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>12,50 €</text></svg>"
 },
 {
  "id": "geld_k3_022",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Lolli kostet 0,60 € und ein Kinoticket kostet 7,50 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "8,10 €",
   "9,10 €",
   "6,90 €",
   "7,60 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "0,60 € plus 7,50 € ergibt 8,10 €.",
  "grafik": "<svg viewBox='0 0 246 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Lolli</text><g transform='translate(0,20)'><circle cx='15' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='51' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='51' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>60 ct</text><text x='87' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='102' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kinoticket</text><g transform='translate(102,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='102' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7,50 €</text></svg>"
 },
 {
  "id": "geld_k3_023",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Duft-Radiergummi kostet 1,40 € und ein Fussball kostet 12,50 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "13,40 €",
   "11,10 €",
   "14,90 €",
   "13,90 €"
  ],
  "correct": 3,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "1,40 € plus 12,50 € ergibt 13,90 €.",
  "grafik": "<svg viewBox='0 0 310 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Duft-Radiergummi</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>1,40 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Fussball</text><g transform='translate(166,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>12,50 €</text></svg>"
 },
 {
  "id": "geld_k3_024",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Schlüsselanhänger kostet 2,20 € und ein Kinoticket kostet 7,50 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "5,30 €",
   "10,70 €",
   "9,70 €",
   "9,20 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "2,20 € plus 7,50 € ergibt 9,70 €.",
  "grafik": "<svg viewBox='0 0 318 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Schlüsselanhänger</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,20 €</text><text x='159' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='174' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Kinoticket</text><g transform='translate(174,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='123' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='123' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='174' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>7,50 €</text></svg>"
 },
 {
  "id": "geld_k3_025",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Eine Portion Pommes kostet 3,10 € und ein Sticker-Set kostet 2,40 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "6,50 €",
   "0,70 €",
   "5,50 €",
   "5,00 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "3,10 € plus 2,40 € ergibt 5,50 €.",
  "grafik": "<svg viewBox='0 0 262 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Portion Pommes</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,10 €</text><text x='135' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='150' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Sticker-Set</text><g transform='translate(150,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='150' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,40 €</text></svg>"
 },
 {
  "id": "geld_k3_026",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Springseil kostet 4,20 € und eine Portion Pommes kostet 3,10 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "1,10 €",
   "6,80 €",
   "7,30 €",
   "8,30 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "4,20 € plus 3,10 € ergibt 7,30 €.",
  "grafik": "<svg viewBox='0 0 266 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Springseil</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,20 €</text><text x='131' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='146' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Portion Pommes</text><g transform='translate(146,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='146' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,10 €</text></svg>"
 },
 {
  "id": "geld_k3_027",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Ein Springseil kostet 4,20 € und ein Notizheft kostet 2,60 €. Wie viel bezahlst du zusammen für beide?",
  "answers": [
   "6,80 €",
   "6,30 €",
   "1,60 €",
   "7,80 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "4,20 € plus 2,60 € ergibt 6,80 €.",
  "grafik": "<svg viewBox='0 0 258 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Springseil</text><g transform='translate(0,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,20 €</text><text x='131' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>+</text><text x='146' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Notizheft</text><g transform='translate(146,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='146' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,60 €</text></svg>"
 },
 {
  "id": "geld_k3_028",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Sophie kauft ein Springseil für 4,20 €, einen Schlüsselanhänger für 2,20 € und ein Federmäppchen für 5,60 €. Wie viel bezahlt Sophie insgesamt?",
  "answers": [
   "12,00 €",
   "13,00 €",
   "11,00 €",
   "6,40 €"
  ],
  "correct": 0,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "4,20 € plus 2,20 € plus 5,60 € ergibt 12,00 €.",
  "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='6' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='18' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='22' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Springseil</text><text x='290' y='22' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>4,20 €</text><rect x='0' y='36' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='48' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='52' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Schlüsselanhänger</text><text x='290' y='52' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>2,20 €</text><rect x='0' y='66' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='78' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='82' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Federmäppchen</text><text x='290' y='82' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>5,60 €</text></svg>"
 },
 {
  "id": "geld_k3_029",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Jonas kauft ein Kuscheltier für 9,90 €, einen Radiergummi für 0,80 € und eine Packung Gummibärchen für 1,60 €. Wie viel bezahlt Jonas insgesamt?",
  "answers": [
   "11,30 €",
   "12,30 €",
   "13,30 €",
   "10,70 €"
  ],
  "correct": 1,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "9,90 € plus 0,80 € plus 1,60 € ergibt 12,30 €.",
  "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='6' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='18' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='22' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Kuscheltier</text><text x='290' y='22' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>9,90 €</text><rect x='0' y='36' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='48' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='52' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Radiergummi</text><text x='290' y='52' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>0,80 €</text><rect x='0' y='66' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='78' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='82' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Packung Gummibärchen</text><text x='290' y='82' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>1,60 €</text></svg>"
 },
 {
  "id": "geld_k3_030",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Anna kauft einen Fussball für 12,50 €, ein Notizheft für 2,60 € und ein Getränk für 2,80 €. Wie viel bezahlt Anna insgesamt?",
  "answers": [
   "16,90 €",
   "17,90 €",
   "15,10 €",
   "18,90 €"
  ],
  "correct": 1,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "12,50 € plus 2,60 € plus 2,80 € ergibt 17,90 €.",
  "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='6' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='18' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='22' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Fussball</text><text x='290' y='22' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>12,50 €</text><rect x='0' y='36' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='48' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='52' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Notizheft</text><text x='290' y='52' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>2,60 €</text><rect x='0' y='66' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='78' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='82' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Getränk</text><text x='290' y='82' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>2,80 €</text></svg>"
 },
 {
  "id": "geld_k3_031",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Leon kauft einen Kreisel für 2,90 €, ein Comicheft für 3,50 € und einen Frisbee für 3,90 €. Wie viel bezahlt Leon insgesamt?",
  "answers": [
   "10,30 €",
   "9,30 €",
   "11,30 €",
   "6,40 €"
  ],
  "correct": 0,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "2,90 € plus 3,50 € plus 3,90 € ergibt 10,30 €.",
  "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='6' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='18' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='22' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Kreisel</text><text x='290' y='22' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>2,90 €</text><rect x='0' y='36' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='48' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='52' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Comicheft</text><text x='290' y='52' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>3,50 €</text><rect x='0' y='66' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='78' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='82' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Frisbee</text><text x='290' y='82' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>3,90 €</text></svg>"
 },
 {
  "id": "geld_k3_032",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Lina kauft einen Lolli für 0,60 €, ein Zoo-Ticket für 8,50 € und ein Malbuch für 3,30 €. Wie viel bezahlt Lina insgesamt?",
  "answers": [
   "9,10 €",
   "12,40 €",
   "11,40 €",
   "13,40 €"
  ],
  "correct": 1,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "0,60 € plus 8,50 € plus 3,30 € ergibt 12,40 €.",
  "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='6' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='18' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='22' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Lolli</text><text x='290' y='22' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>0,60 €</text><rect x='0' y='36' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='48' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='52' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Zoo-Ticket</text><text x='290' y='52' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>8,50 €</text><rect x='0' y='66' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='78' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='82' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Malbuch</text><text x='290' y='82' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>3,30 €</text></svg>"
 },
 {
  "id": "geld_k3_033",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Max kauft ein Kinoticket für 7,50 €, eine Tafel Schokolade für 1,80 € und eine Tüte Popcorn für 3,20 €. Wie viel bezahlt Max insgesamt?",
  "answers": [
   "11,50 €",
   "12,50 €",
   "9,30 €",
   "13,50 €"
  ],
  "correct": 1,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "7,50 € plus 1,80 € plus 3,20 € ergibt 12,50 €.",
  "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='6' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='18' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='22' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Kinoticket</text><text x='290' y='22' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>7,50 €</text><rect x='0' y='36' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='48' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='52' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Tafel Schokolade</text><text x='290' y='52' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>1,80 €</text><rect x='0' y='66' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='78' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='82' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Tüte Popcorn</text><text x='290' y='82' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>3,20 €</text></svg>"
 },
 {
  "id": "geld_k3_034",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Klara kauft ein Sticker-Set für 2,40 €, ein Waffeleis für 3,40 € und eine Portion Pommes für 3,10 €. Wie viel bezahlt Klara insgesamt?",
  "answers": [
   "9,90 €",
   "5,80 €",
   "7,90 €",
   "8,90 €"
  ],
  "correct": 3,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "2,40 € plus 3,40 € plus 3,10 € ergibt 8,90 €.",
  "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='6' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='18' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='22' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Sticker-Set</text><text x='290' y='22' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>2,40 €</text><rect x='0' y='36' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='48' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='52' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Waffeleis</text><text x='290' y='52' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>3,40 €</text><rect x='0' y='66' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='78' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='82' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Portion Pommes</text><text x='290' y='82' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>3,10 €</text></svg>"
 },
 {
  "id": "geld_k3_035",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Elias kauft einen Wasserball für 4,70 €, eine Trinkflasche für 5,90 € und einen Ball für 5,30 €. Wie viel bezahlt Elias insgesamt?",
  "answers": [
   "16,90 €",
   "10,60 €",
   "15,90 €",
   "14,90 €"
  ],
  "correct": 2,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "4,70 € plus 5,90 € plus 5,30 € ergibt 15,90 €.",
  "grafik": "<svg viewBox='0 0 300 100' style='width:100%;max-width:320px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='6' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='18' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='22' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Wasserball</text><text x='290' y='22' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>4,70 €</text><rect x='0' y='36' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='48' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='52' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Trinkflasche</text><text x='290' y='52' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>5,90 €</text><rect x='0' y='66' width='300' height='24' rx='6' fill='rgba(148,163,184,0.12)' stroke='rgba(148,163,184,0.35)'/><circle cx='16' cy='78' r='7' fill='#fbbf24' stroke='#b45309' stroke-width='1.5'/><text x='30' y='82' font-size='13' font-family='sans-serif' fill='#e5e7eb'>Ball</text><text x='290' y='82' text-anchor='end' font-size='13' font-weight='700' font-family='sans-serif' fill='#fbbf24'>5,30 €</text></svg>"
 },
 {
  "id": "geld_k3_036",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Max kauft eine Tafel Schokolade für 1,80 € und einen Radiergummi für 0,80 € und bezahlt mit einem 20-Euro-Schein. Wie viel Rückgeld bekommt Max?",
  "answers": [
   "17,40 €",
   "16,40 €",
   "2,60 €",
   "18,40 €"
  ],
  "correct": 0,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "1,80 € plus 0,80 € ergibt 2,60 €. 20,00 € minus 2,60 € ergibt 17,40 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 238 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,60 €</text></svg>"
 },
 {
  "id": "geld_k3_037",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Klara kauft einen Kreisel für 2,90 € und ein Notizheft für 2,60 € und bezahlt mit einem 20-Euro-Schein. Wie viel Rückgeld bekommt Klara?",
  "answers": [
   "13,50 €",
   "5,50 €",
   "15,50 €",
   "14,50 €"
  ],
  "correct": 3,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "2,90 € plus 2,60 € ergibt 5,50 €. 20,00 € minus 5,50 € ergibt 14,50 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 230 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='83' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='83' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5,50 €</text></svg>"
 },
 {
  "id": "geld_k3_038",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Elias kauft ein Modellauto für 6,90 € und eine Tüte Popcorn für 3,20 € und bezahlt mit einem 20-Euro-Schein. Wie viel Rückgeld bekommt Elias?",
  "answers": [
   "8,90 €",
   "9,90 €",
   "10,90 €",
   "10,10 €"
  ],
  "correct": 1,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "6,90 € plus 3,20 € ergibt 10,10 €. 20,00 € minus 10,10 € ergibt 9,90 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 230 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><circle cx='83' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='83' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>10,10 €</text></svg>"
 },
 {
  "id": "geld_k3_039",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Nele kauft einen Ball für 5,30 € und ein Comicheft für 3,50 € und bezahlt mit einem 20-Euro-Schein. Wie viel Rückgeld bekommt Nele?",
  "answers": [
   "11,20 €",
   "8,80 €",
   "12,20 €",
   "10,20 €"
  ],
  "correct": 0,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "5,30 € plus 3,50 € ergibt 8,80 €. 20,00 € minus 8,80 € ergibt 11,20 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 274 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='111' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='51' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='51' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='87' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='87' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>8,80 €</text></svg>"
 },
 {
  "id": "geld_k3_040",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Felix kauft ein Federmäppchen für 5,60 € und ein Springseil für 4,20 € und bezahlt mit einem 20-Euro-Schein. Wie viel Rückgeld bekommt Felix?",
  "answers": [
   "11,20 €",
   "9,20 €",
   "9,80 €",
   "10,20 €"
  ],
  "correct": 3,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "5,60 € plus 4,20 € ergibt 9,80 €. 20,00 € minus 9,80 € ergibt 10,20 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 274 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='111' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='51' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='51' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='87' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='87' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>9,80 €</text></svg>"
 },
 {
  "id": "geld_k3_041",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Marie kauft ein Kuscheltier für 9,90 € und ein Malbuch für 3,30 € und bezahlt mit einem 20-Euro-Schein. Wie viel Rückgeld bekommt Marie?",
  "answers": [
   "6,80 €",
   "13,20 €",
   "5,80 €",
   "7,80 €"
  ],
  "correct": 0,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "9,90 € plus 3,30 € ergibt 13,20 €. 20,00 € minus 13,20 € ergibt 6,80 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 274 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='111' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><circle cx='85' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='85' cy='17' r='12' fill='#fbbf24'/><text x='85' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='125' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='125' cy='17' r='12' fill='#fbbf24'/><text x='125' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='126' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>13,20 €</text></svg>"
 },
 {
  "id": "geld_k3_042",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Tom kauft einen Lolli für 0,60 € und einen Wasserball für 4,70 € und bezahlt mit einem 20-Euro-Schein. Wie viel Rückgeld bekommt Tom?",
  "answers": [
   "5,30 €",
   "14,70 €",
   "15,70 €",
   "13,70 €"
  ],
  "correct": 1,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "0,60 € plus 4,70 € ergibt 5,30 €. 20,00 € minus 5,30 € ergibt 14,70 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 266 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text><circle cx='83' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='83' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='119' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='119' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>10ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>5,30 €</text></svg>"
 },
 {
  "id": "geld_k3_043",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Sophie kauft einen Schlüsselanhänger für 2,20 € und ein Eis für 2,50 € und bezahlt mit einem 20-Euro-Schein. Wie viel Rückgeld bekommt Sophie?",
  "answers": [
   "16,30 €",
   "15,30 €",
   "14,30 €",
   "4,70 €"
  ],
  "correct": 1,
  "difficulty": "schwer",
  "points": 10,
  "explanation": "2,20 € plus 2,50 € ergibt 4,70 €. 20,00 € minus 4,70 € ergibt 15,30 € Rückgeld.",
  "grafik": "<svg viewBox='0 0 278 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du bezahlst</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='111' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='126' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Preis</text><g transform='translate(126,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='131' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='131' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='126' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,70 €</text></svg>"
 },
 {
  "id": "geld_k3_044",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Anna hat 25,00 € Taschengeld gespart und kauft sich ein Eis für 2,50 €. Wie viel Geld bleibt Anna übrig?",
  "answers": [
   "22,50 €",
   "2,50 €",
   "23,50 €",
   "22,00 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "25,00 € minus 2,50 € ergibt 22,50 €.",
  "grafik": "<svg viewBox='0 0 246 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>25 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,50 €</text></svg>"
 },
 {
  "id": "geld_k3_045",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Leon hat 25,00 € Taschengeld gespart und kauft sich einen Schlüsselanhänger für 2,20 €. Wie viel Geld bleibt Leon übrig?",
  "answers": [
   "2,20 €",
   "23,80 €",
   "22,30 €",
   "22,80 €"
  ],
  "correct": 3,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "25,00 € minus 2,20 € ergibt 22,80 €.",
  "grafik": "<svg viewBox='0 0 246 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>25 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,20 €</text></svg>"
 },
 {
  "id": "geld_k3_046",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Lina hat 30,00 € Taschengeld gespart und kauft sich einen Frisbee für 3,90 €. Wie viel Geld bleibt Lina übrig?",
  "answers": [
   "27,10 €",
   "3,90 €",
   "26,10 €",
   "25,60 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "30,00 € minus 3,90 € ergibt 26,10 €.",
  "grafik": "<svg viewBox='0 0 318 116' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>30 €</text><text x='151' y='58' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='131' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='131' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='15' cy='55' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='15' y='59' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='166' y='110' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,90 €</text></svg>"
 },
 {
  "id": "geld_k3_047",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Max hat 30,00 € Taschengeld gespart und kauft sich einen Wasserball für 4,70 €. Wie viel Geld bleibt Max übrig?",
  "answers": [
   "26,30 €",
   "24,80 €",
   "25,30 €",
   "4,70 €"
  ],
  "correct": 2,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "30,00 € minus 4,70 € ergibt 25,30 €.",
  "grafik": "<svg viewBox='0 0 318 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>30 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='131' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='131' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,70 €</text></svg>"
 },
 {
  "id": "geld_k3_048",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Klara hat 20,00 € Taschengeld gespart und kauft sich ein Springseil für 4,20 €. Wie viel Geld bleibt Klara übrig?",
  "answers": [
   "15,80 €",
   "16,80 €",
   "4,20 €",
   "15,30 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "20,00 € minus 4,20 € ergibt 15,80 €.",
  "grafik": "<svg viewBox='0 0 214 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>4,20 €</text></svg>"
 },
 {
  "id": "geld_k3_049",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Elias hat 20,00 € Taschengeld gespart und kauft sich ein Waffeleis für 3,40 €. Wie viel Geld bleibt Elias übrig?",
  "answers": [
   "3,40 €",
   "17,60 €",
   "16,10 €",
   "16,60 €"
  ],
  "correct": 3,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "20,00 € minus 3,40 € ergibt 16,60 €.",
  "grafik": "<svg viewBox='0 0 250 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#60a5fa' stroke='#1d4ed8' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>20 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>20 €</text><text x='83' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='98' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(98,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='57' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='57' cy='17' r='12' fill='#fbbf24'/><text x='57' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>1€</text><circle cx='95' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='95' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='131' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='131' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='98' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>3,40 €</text></svg>"
 },
 {
  "id": "geld_k3_050",
  "category": "k3_mathe_geld",
  "area": "schule",
  "grade": 3,
  "subject": "mathe",
  "topic": "geld",
  "question": "Nele hat 15,00 € Taschengeld gespart und kauft sich einen Kreisel für 2,90 €. Wie viel Geld bleibt Nele übrig?",
  "answers": [
   "12,10 €",
   "13,10 €",
   "11,60 €",
   "2,90 €"
  ],
  "correct": 0,
  "difficulty": "mittel",
  "points": 10,
  "explanation": "15,00 € minus 2,90 € ergibt 12,10 €.",
  "grafik": "<svg viewBox='0 0 314 80' style='width:100%;max-width:330px;height:auto;display:block;margin:8px auto' xmlns='http://www.w3.org/2000/svg'><text x='0' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du hast</text><g transform='translate(0,20)'><rect x='0' y='0' width='62' height='34' rx='4' fill='#f87171' stroke='#b91c1c' stroke-width='2'/><text x='31' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>10 €</text><rect x='68' y='0' width='62' height='34' rx='4' fill='#9ca3af' stroke='#4b5563' stroke-width='2'/><text x='99' y='22' text-anchor='middle' font-size='13' font-weight='700' font-family='sans-serif' fill='#0f172a'>5 €</text></g><text x='0' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>15 €</text><text x='151' y='40' text-anchor='middle' font-size='22' font-weight='700' font-family='sans-serif' fill='#94a3b8'>−</text><text x='166' y='13' font-size='12' font-weight='700' font-family='sans-serif' fill='#94a3b8'>Du kaufst</text><g transform='translate(166,20)'><circle cx='17' cy='17' r='17' fill='#cbd5e1' stroke='#64748b' stroke-width='2'/><circle cx='17' cy='17' r='12' fill='#fbbf24'/><text x='17' y='21' text-anchor='middle' font-size='10' font-weight='700' font-family='sans-serif' fill='#0f172a'>2€</text><circle cx='55' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='55' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>50ct</text><circle cx='91' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='91' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text><circle cx='127' cy='15' r='15' fill='#fbbf24' stroke='#b45309' stroke-width='2'/><text x='127' y='19' text-anchor='middle' font-size='9' font-weight='700' font-family='sans-serif' fill='#0f172a'>20ct</text></g><text x='166' y='74' font-size='13' font-weight='700' font-family='sans-serif' fill='#e5e7eb'>2,90 €</text></svg>"
 }
];
if (typeof window !== 'undefined') window.GELD_QUESTIONS = GELD_QUESTIONS;
if (typeof registerQuestions === 'function') registerQuestions('GELD_QUESTIONS', GELD_QUESTIONS);
