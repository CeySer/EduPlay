// ============================================================
//  📖 LESEN-LERNEN LOGIK  (Klasse 1 & 2)
//  Überarbeitet: Ton/Vorlesen, Fortschritt pro Profil,
//  Fortschrittsbalken für ALLE Kategorien, faire Antworten,
//  einheitliches (kindgerechtes) Ergebnis, injektionssicher.
// ============================================================

let lesenState = {
    currentCategory: null,
    currentIndex: 0,
    score: 0,
    wrongAttempts: 0,
    total: 0,
    options: [],       // aktuelle Antwortmöglichkeiten (Reihenfolge = Anzeige)
    correctIndex: -1   // Index der richtigen Option in options
};

// Kategorien-Icons
const LESEN_ICONS = {
    buchstaben: '🔤',
    silben: '👏',
    anlaute: '🔊',
    simple_words: '📖',
    word_match: '🖼️',
    zweisilbig: '📗',
    dreisilbig: '📕',
    sentences: '📝',
    reading_comprehension: '🧠',
    word_puzzle: '🧩'
};

// Welche Kategorien sind "Lernkarten" (nur anschauen + Weiter),
// welche sind "Quiz" (mit Auswahl)? Wichtig fürs Ergebnis-Feedback.
const LESEN_FLASHCARDS = ['buchstaben', 'silben', 'simple_words', 'zweisilbig', 'dreisilbig', 'sentences'];

// ============================================================
//  HELFER
// ============================================================

function lesenDB() {
    if (typeof LESEN_DATABASE !== 'undefined' && LESEN_DATABASE) return LESEN_DATABASE;
    if (typeof READING_DATABASE !== 'undefined' && READING_DATABASE) return READING_DATABASE;
    return null;
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Aktuelles Profil ermitteln, damit der Fortschritt NICHT zwischen den
// Kindern geteilt wird (Handy wird ja weitergereicht).
// In EduPlay ist der aktive Spieler über activePlayerKey identifiziert.
function getCurrentProfileId() {
    try {
        if (typeof activePlayerKey !== 'undefined' && activePlayerKey) return String(activePlayerKey);
        if (typeof currentPlayer !== 'undefined' && currentPlayer && currentPlayer.name) return 'name_' + currentPlayer.name;
    } catch (e) {}
    return 'gast';
}

// Ton-Einstellung der App respektieren (Auto-Vorlesen nur, wenn Ton an ist).
// In EduPlay steuert soundOn den Ton-Schalter.
// Auto-Vorlesen ist AUS – der Nutzer muss auf den Hören-Button klicken.
// (Nichts tun, das Vorlesen ist jetzt manuell)

// Vorlesen per Browser-Sprachausgabe (für Erstleser der eigentliche Kern).
function speakLesen(text) {
    try {
        if (!('speechSynthesis' in window) || !text) return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(String(text));
        u.lang = 'de-DE';
        u.rate = 0.9;
        u.pitch = 1.0;
        
        // Versuche, eine natürliche deutsche Stimme zu finden
        const voices = window.speechSynthesis.getVoices();
        const deVoices = voices.filter(v => v.lang.startsWith('de'));
        
        // Bevorzugte Stimmen (Google/Apple sind meist besser)
        const preferred = ['Google Deutsch', 'Google Deutsche', 'Samantha', 'Anna', 'Maria'];
        let found = null;
        for (const name of preferred) {
            found = deVoices.find(v => v.name.includes(name));
            if (found) break;
        }
        if (!found && deVoices.length > 0) {
            found = deVoices[0];
        }
        if (found) u.voice = found;
        
        window.speechSynthesis.speak(u);
    } catch (e) {}
}

// 🔊-Knopf, injektionssicher (Text URL-kodiert, keine Anführungszeichen-Probleme).
function hoerButton(text) {
    const safe = encodeURIComponent(text);
    return `<button onclick="speakLesen(decodeURIComponent('${safe}'))"
                class="mt-3 inline-flex items-center gap-2 px-5 py-2 bg-yellow-500 text-gray-900 rounded-xl font-bold shadow hover:bg-yellow-400">
                🔊 Hören
            </button>`;
}

// ============================================================
//  FORTSCHRITT (pro Profil, ein Schlüssel je Profil)
// ============================================================

function lesenStorageKey() {
    return 'lesen_progress_' + getCurrentProfileId();
}

function getAllLesenProgress() {
    try {
        return JSON.parse(localStorage.getItem(lesenStorageKey()) || '{}');
    } catch (e) {
        return {};
    }
}

function getLesenProgress(categoryKey) {
    const all = getAllLesenProgress();
    return all[categoryKey] || { done: 0, total: 0 };
}

function saveLesenProgress(categoryKey, done, total) {
    const all = getAllLesenProgress();
    all[categoryKey] = { done: done, total: total };
    try {
        localStorage.setItem(lesenStorageKey(), JSON.stringify(all));
    } catch (e) {}
}

// ============================================================
//  KATEGORIE-ÜBERSICHT
// ============================================================

function renderLesenCategories() {
    const container = document.getElementById('lesen-categories');
    if (!container) return;

    const categories = lesenDB();
    if (!categories) {
        container.innerHTML = '<div class="col-span-2 text-center text-gray-500 py-8">❌ Lesen-Datenbank nicht gefunden</div>';
        return;
    }

    const keys = Object.keys(categories);
    if (keys.length === 0) {
        container.innerHTML = '<div class="col-span-2 text-center text-gray-500 py-8">📭 Keine Kategorien gefunden</div>';
        return;
    }

    let html = '';
    keys.forEach(key => {
        const cat = categories[key];
        const icon = LESEN_ICONS[key] || '📚';
        const count = cat.items ? cat.items.length : 0;
        const progress = getLesenProgress(key);
        const total = progress.total || count;
        const pct = total > 0 ? Math.round((progress.done / total) * 100) : 0;
        const progressBar = pct > 0
            ? `<div class="w-full bg-gray-700 rounded-full h-1.5 mt-2"><div class="bg-green-500 h-1.5 rounded-full" style="width:${pct}%"></div></div>`
            : '';
        const doneBadge = pct >= 100 ? '<span class="text-green-400 text-xs">✅</span>' : '';

        html += `
            <button onclick="startLesenCategory('${key}')"
                    class="bg-gray-900 border border-gray-700 rounded-xl p-4 text-left hover:border-blue-500 transition-all">
                <div class="flex items-center gap-2">
                    <span class="text-2xl">${icon}</span>
                    <div class="min-w-0">
                        <div class="font-bold text-sm text-white flex items-center gap-1">${cat.label} ${doneBadge}</div>
                        <div class="text-[10px] text-gray-400">${count} Übungen</div>
                    </div>
                </div>
                ${progressBar}
            </button>
        `;
    });
    container.innerHTML = html;
}

// ============================================================
//  START & ÜBUNGS-RENDERING
// ============================================================

function startLesenCategory(categoryKey) {
    const categories = lesenDB();
    if (!categories || !categories[categoryKey]) {
        if (typeof showToast === 'function') showToast('Kategorie nicht gefunden!', 'error');
        return;
    }

    lesenState.currentCategory = categoryKey;
    lesenState.currentIndex = 0;
    lesenState.score = 0;
    lesenState.wrongAttempts = 0;
    lesenState.total = (categories[categoryKey].items || []).length;

        // Comprehension-Schritt zurücksetzen
    comprehensionStep = 0;
    
    const ex = document.getElementById('lesen-exercise');
    const gr = document.getElementById('lesen-categories');
    if (ex) ex.classList.remove('hidden');
    if (gr) gr.classList.add('hidden');

    renderLesenExercise(categoryKey);
}




function renderLesenExercise(categoryKey) {
    const container = document.getElementById('lesen-exercise');
    if (!container) return;
    const categories = lesenDB();
    const cat = categories[categoryKey];
    const items = cat.items || [];
    const idx = lesenState.currentIndex;

    if (idx >= items.length) {
        showLesenResult(categoryKey);
        return;
    }

    const item = items[idx];
    const progress = getLesenProgress(categoryKey);
    const done = Math.min(progress.done || 0, items.length);
    const total = items.length;

    let html = `
        <div class="flex justify-between items-center mb-3">
            <span class="text-xs font-bold text-gray-400">${idx + 1} / ${total}</span>
            <span class="text-xs font-bold text-green-400">✅ ${done} / ${total}</span>
            <button onclick="resetLesenCategory('${categoryKey}')" class="text-xs text-gray-500 hover:text-red-400" title="Fortschritt zurücksetzen">↺</button>
        </div>
    `;

    switch (categoryKey) {
        case 'buchstaben':            html += renderBuchstaben(item); break;
        case 'silben':                html += renderSilben(item); break;
        case 'anlaute':               html += renderAnlaute(item); break;
        case 'simple_words':
        case 'zweisilbig':
        case 'dreisilbig':            html += renderWordWithImage(item); break;
        case 'word_match':            html += renderWordMatch(item); break;
        case 'sentences':             html += renderSentence(item); break;
        case 'reading_comprehension': html += renderComprehension(item); break;
        case 'word_puzzle':           html += renderWordPuzzle(item); break;
        default:                      html += renderDefault(item);
    }

    container.innerHTML = html;

    // Auto-Vorlesen (nur wenn Ton an) – hilft Kindern, die noch nicht lesen können.
    if (lesenSoundOn()) {
        const speakText = flashcardSpeakText(categoryKey, item);
        if (speakText) speakLesen(speakText);
    }
}

// Was soll beim Anzeigen automatisch vorgelesen werden?
function flashcardSpeakText(categoryKey, item) {
    switch (categoryKey) {
        case 'buchstaben':            return `${item.letter}. ${item.word}`;
        case 'silben':                return item.word;
        case 'simple_words':
        case 'zweisilbig':
        case 'dreisilbig':            return item.word;
        case 'sentences':             return item.sentence;
        case 'anlaute':               return item.word;                 // Wort vorlesen, Buchstabe bleibt Aufgabe
        case 'reading_comprehension': return item.sentence;             // Satz vorlesen, Frage bleibt Aufgabe
        default:                      return null;                      // word_match/word_puzzle NICHT vorlesen (wäre die Lösung)
    }
}

// ============================================================
//  RENDER-FUNKTIONEN – LERNKARTEN (nur anschauen + Weiter)
// ============================================================

function renderBuchstaben(item) {
    return `
        <div class="text-center py-6">
            <div class="text-8xl font-black text-blue-400 mb-2">${item.letter}</div>
            <div class="text-3xl font-bold text-white">${item.word}</div>
            <div class="text-6xl my-4">${item.image}</div>
            <div class="text-sm text-gray-400">Klingt wie: <span class="text-yellow-400 font-bold">"${item.sound}"</span></div>
            ${hoerButton(item.letter + '. ' + item.word)}
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">➔ Weiter</button>
        </div>
    `;
}

function renderSilben(item) {
    return `
        <div class="text-center py-6">
            <div class="text-5xl font-bold text-white mb-4">${item.word}</div>
            <div class="text-2xl text-yellow-400 font-bold">👏 ${item.syllables}</div>
            <div class="text-sm text-gray-400 mt-2">${item.count} Silbe${item.count > 1 ? 'n' : ''}</div>
            ${hoerButton(item.word)}
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">➔ Weiter</button>
        </div>
    `;
}

function renderWordWithImage(item) {
    return `
        <div class="text-center py-6">
            <div class="text-7xl mb-4">${item.image}</div>
            <div class="text-4xl font-bold text-white">${item.word}</div>
            ${item.syllables ? `<div class="text-sm text-gray-400 mt-2">👏 ${item.syllables}</div>` : ''}
            ${hoerButton(item.word)}
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">➔ Weiter</button>
        </div>
    `;
}

function renderSentence(item) {
    return `
        <div class="text-center py-6">
            <div class="text-4xl font-bold text-white mb-4">${item.emoji}</div>
            <div class="text-2xl font-bold text-yellow-400 leading-relaxed">${item.sentence}</div>
            <div class="text-xs text-gray-500 mt-2">${item.words.join(' · ')}</div>
            ${hoerButton(item.sentence)}
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">➔ Weiter</button>
        </div>
    `;
}

// ============================================================
//  RENDER-FUNKTIONEN – QUIZ (mit Auswahl, injektionssicher via Index)
// ============================================================

// Legt die Optionen fest, merkt sich den richtigen Index im State
// und gibt die gemischte Liste zurück. Alle Buttons rufen lesenCheck(i).
function prepareOptions(values, correctValue) {
    const opts = shuffle(values.slice());
    lesenState.options = opts;
    lesenState.correctIndex = opts.indexOf(correctValue);
    return opts;
}

// Zieht bis zu n andere Werte aus einer Liste als Ablenker.
function pickDistractors(pool, correctValue, n) {
    const uniq = Array.from(new Set(pool)).filter(v => v !== correctValue);
    shuffle(uniq);
    return uniq.slice(0, n);
}

function renderAnlaute(item) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const distractors = pickDistractors(letters, item.startsWith, 3);
    const opts = prepareOptions([item.startsWith].concat(distractors), item.startsWith);

    const buttons = opts.map((l, i) => `
        <button onclick="lesenCheck(${i})"
                class="w-16 h-16 text-2xl font-bold bg-gray-700 rounded-xl hover:bg-gray-600 transition-all">${l}</button>
    `).join('');

    return `
        <div class="text-center py-6">
            <div class="text-6xl mb-4">${item.image}</div>
            <div class="text-3xl font-bold text-white mb-1">${item.word}</div>
            ${hoerButton(item.word)}
            <div class="text-sm text-gray-400 my-3">Mit welchem Buchstaben beginnt das Wort?</div>
            <div class="flex justify-center gap-4 flex-wrap">${buttons}</div>
        </div>
    `;
}

// Bild zeigen, richtiges WORT wählen (passt zur Kategorie-Beschreibung
// "Welches Wort passt zum Bild?" und ist echtes Lesen üben).
function renderWordMatch(item) {
    const categories = lesenDB();
    const pool = (categories.word_match.items || []).map(it => it.word);
    const distractors = pickDistractors(pool, item.word, 3);
    const opts = prepareOptions([item.word].concat(distractors), item.word);

    const buttons = opts.map((w, i) => `
        <button onclick="lesenCheck(${i})"
                class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white hover:bg-gray-600 transition-all">${w}</button>
    `).join('');

    return `
        <div class="text-center py-6">
            <div class="text-7xl mb-4">${item.image}</div>
            <div class="text-sm text-gray-400 mb-4">Welches Wort passt zum Bild?</div>
            <div class="flex justify-center gap-3 flex-wrap">${buttons}</div>
        </div>
    `;
}

// Zustand für die Comprehension-Zwei-Schritt-Ansicht
let comprehensionStep = 0; // 0 = Satz anzeigen, 1 = Frage anzeigen

function renderComprehension(item) {
    const categories = lesenDB();
    const pool = (categories.reading_comprehension.items || []).map(it => it.answer);
    const distractors = pickDistractors(pool, item.answer, 3);
    const opts = prepareOptions([item.answer].concat(distractors), item.answer);

    const buttons = opts.map((a, i) => `
        <button onclick="lesenCheck(${i})"
                class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white hover:bg-gray-600 transition-all">${a}</button>
    `).join('');

    // Wenn Schritt 0: Nur den Satz zeigen
    if (comprehensionStep === 0) {
        return `
            <div class="text-center py-6">
                <div class="text-xl font-bold text-white leading-relaxed mb-4">📖 Lies den Satz:</div>
                <div class="text-2xl font-bold text-yellow-400 leading-relaxed">${item.sentence}</div>
                ${hoerButton(item.sentence)}
                <button onclick="comprehensionNext()" 
                        class="mt-6 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">
                    ➔ Weiter zur Frage
                </button>
            </div>
        `;
    }

    // Schritt 1: Frage mit Antworten
    return `
        <div class="text-center py-4">
            <div class="text-sm text-gray-400 mb-2">📖 ${item.sentence}</div>
            ${hoerButton(item.sentence)}
            <div class="text-lg text-yellow-400 font-bold my-4">❓ ${item.question}</div>
            <div class="flex justify-center gap-3 flex-wrap">${buttons}</div>
        </div>
    `;
}

// Weiter zur Frage
function comprehensionNext() {
    comprehensionStep = 1;
    // Aktuelle Übung neu rendern
    const cat = lesenState.currentCategory;
    renderLesenExercise(cat);
}

function renderWordPuzzle(item) {
    // Durcheinandergewürfelte Buchstaben anzeigen
    const shownLetters = shuffle(item.letters.split('-'));

    // Wort-Optionen aus allen Lösungen/Wörtern ziehen
    const categories = lesenDB();
    const allWords = [];
    Object.keys(categories).forEach(key => {
        (categories[key].items || []).forEach(it => {
            if (it.solution) allWords.push(it.solution);
            else if (it.word) allWords.push(it.word.toUpperCase());
        });
    });
    const distractors = pickDistractors(allWords, item.solution, 3);
    const opts = prepareOptions([item.solution].concat(distractors), item.solution);

    const tiles = shownLetters.map(l => `
        <span class="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-2xl font-bold text-white">${l}</span>
    `).join('');

    const buttons = opts.map((w, i) => `
        <button onclick="lesenCheck(${i})"
                class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white hover:bg-gray-600 transition-all">${w}</button>
    `).join('');

    return `
        <div class="text-center py-4">
            <div class="text-sm text-gray-400 mb-3">Setze die Buchstaben zum Wort zusammen</div>
            <div class="flex justify-center gap-2 flex-wrap mb-4">${tiles}</div>
            <div class="flex justify-center gap-3 flex-wrap">${buttons}</div>
        </div>
    `;
}

function renderDefault(item) {
    return `
        <div class="text-center py-6">
            <div class="text-xl font-bold text-white">${item.word || item.sentence || '—'}</div>
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">➔ Weiter</button>
        </div>
    `;
}

// ============================================================
//  ANTWORT PRÜFEN (eine Funktion für alle Quiz-Kategorien)
// ============================================================

function lesenCheck(idx) {
    if (idx === lesenState.correctIndex) {
        // Richtig: Nur ein schöner Ton, kein Text
        playLesenSound(true);
        lesenState.score++;
        setTimeout(() => lesenNext(), 500);
    } else {
        lesenState.wrongAttempts++;
        // Falsch: Anderer Ton, kein Text
        playLesenSound(false);
    }
}

// Funktion für die Töne (nutzt die bestehenden SFX-Funktionen)
function playLesenSound(correct) {
    try {
        if (correct) {
            // Fröhlicher, aufsteigender Ton
            if (typeof playTones === 'function') {
                playTones([
                    [523, 0.1],
                    [659, 0.1],
                    [784, 0.2]
                ], 'sine', 0.15);
            } else if (typeof SFX !== 'undefined' && SFX.correct) {
                SFX.correct();
            }
        } else {
            // Sanfter, absteigender Ton (nicht zu hart)
            if (typeof playTones === 'function') {
                playTones([
                    [392, 0.12],
                    [349, 0.12],
                    [330, 0.2]
                ], 'sine', 0.12);
            } else if (typeof SFX !== 'undefined' && SFX.wrong) {
                SFX.wrong();
            }
        }
    } catch (e) {
        // Fallback: Nichts
    }
}
// ============================================================
//  WEITER / FORTSCHRITT / ERGEBNIS
// ============================================================

function lesenNext() {
    const categories = lesenDB();
    const cat = categories[lesenState.currentCategory];
    const items = cat.items || [];

    lesenState.currentIndex++;

    // Fortschritt = wie weit man gekommen ist → füllt sich für ALLE Kategorien
    const prev = getLesenProgress(lesenState.currentCategory);
    const done = Math.min(Math.max(prev.done || 0, lesenState.currentIndex), items.length);
    saveLesenProgress(lesenState.currentCategory, done, items.length);

    renderLesenExercise(lesenState.currentCategory);
}

function showLesenResult(categoryKey) {
    const container = document.getElementById('lesen-exercise');
    const categories = lesenDB();
    const cat = categories[categoryKey];
    const total = cat.items ? cat.items.length : 0;

    // Kindgerecht: kein "0 %". Immer ein Erfolg, Abstufung nur über Sterne.
    const wrong = lesenState.wrongAttempts;
    let emoji, msg;
    if (wrong <= 2)      { emoji = '🏆'; msg = 'Perfekt gemacht!'; }
    else if (wrong <= 6) { emoji = '🌟'; msg = 'Super gemacht!'; }
    else                 { emoji = '👍'; msg = 'Gut gemacht!'; }

    const isFlashcard = LESEN_FLASHCARDS.indexOf(categoryKey) !== -1;
    const line = isFlashcard
        ? `Du hast alle ${total} angeschaut!`
        : `Du hast alle ${total} geschafft!`;

    // Kategorie als vollständig markieren
    saveLesenProgress(categoryKey, total, total);

    // Optionaler Haken ans XP/Belohnungs-System (greift nur, wenn vorhanden):
    // try { if (typeof grantXP === 'function') grantXP(total); } catch (e) {}

    container.innerHTML = `
        <div class="text-center py-8">
            <div class="text-7xl mb-4">${emoji}</div>
            <div class="text-2xl font-bold text-white">${msg}</div>
            <div class="text-lg font-bold text-yellow-400 mt-2">${line}</div>
            <div class="flex gap-3 mt-6">
                <button onclick="startLesenCategory('${categoryKey}')"
                        class="flex-1 p-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">🔄 Nochmal</button>
                <button onclick="closeLesen()"
                        class="flex-1 p-3 bg-gray-700 rounded-xl font-bold text-white shadow-lg hover:bg-gray-600">↩️ Zurück</button>
            </div>
        </div>
    `;
}

function resetLesenCategory(categoryKey) {
    if (!confirm('Fortschritt für diese Übung zurücksetzen?')) return;
    const categories = lesenDB();
    const total = categories[categoryKey].items ? categories[categoryKey].items.length : 0;
    saveLesenProgress(categoryKey, 0, total);
    lesenState.currentIndex = 0;
    lesenState.score = 0;
    lesenState.wrongAttempts = 0;
    renderLesenExercise(categoryKey);
}

// ============================================================
//  VIEW ÖFFNEN / SCHLIESSEN
// ============================================================

// Zurück zur Kategorie-Auswahl (innerhalb der Lesen-View)
function closeLesen() {
    try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
    const ex = document.getElementById('lesen-exercise');
    const gr = document.getElementById('lesen-categories');
    if (ex) ex.classList.add('hidden');
    if (gr) gr.classList.remove('hidden');
    renderLesenCategories();
}

// Einstieg aus dem Hauptmenü – der Menü-Button MUSS diese Funktion aufrufen
// (nicht direkt switchView), sonst bleibt das Kategorie-Raster leer.
function openLesen() {
    renderLesenCategories();
    const ex = document.getElementById('lesen-exercise');
    const gr = document.getElementById('lesen-categories');
    if (ex) ex.classList.add('hidden');
    if (gr) gr.classList.remove('hidden');
    if (typeof switchView === 'function') switchView('lesen');
}

// ============================================================
//  DATENBANK-CHECK
// ============================================================
if (typeof LESEN_DATABASE === 'undefined' && typeof READING_DATABASE === 'undefined') {
    console.warn('⚠️ lesen.js wurde nicht geladen! (READING_DATABASE fehlt)');
} else {
    console.log('✅ Lesen-Logik geladen');
}
