        // =======================================================
        // DATENBANK: LESEN-LERNEN FÜR KLASSE 1
        // =======================================================

        const READING_DATABASE = {
            buchstaben: {
                label: "Buchstaben lernen (A-Z)",
                description: "Lerne alle Buchstaben mit Bildern",
                items: [
                    { letter: "A", word: "Affe", image: '<img src="img/A.png" alt="🐒">', sound: "ah" },
                    { letter: "B", word: "Ball", image: '<img src="img/B.png" alt="⚽">', sound: "beh" },
                    { letter: "C", word: "Clown", image: '<img src="img/C.jpg" alt="💻">', sound: "tseh" },
                    { letter: "D", word: "Dino", image: '<img src="img/D.jpg" alt="🐉">', sound: "deh" },
                    { letter: "E", word: "Elefant", image: '<img src="img/E.jpg" alt="🦆">', sound: "eh" },
                    { letter: "F", word: "Fuchs", image: '<img src="img/F.png" alt="🐟">', sound: "eff" },
                    { letter: "G", word: "Giraffe", image: '<img src="img/G.png" alt="🦒">', sound: "geh" },
                    { letter: "H", word: "Hase", image: '<img src="img/H.png" alt="🐕">', sound: "hah" },
                    { letter: "I", word: "Igel", image: '<img src="img/I.jpg" alt="🦔">', sound: "ih" },
                    { letter: "J", word: "Joghurt", image: '<img src="img/J.jpg" alt="🍦">', sound: "jott" },
                    { letter: "K", word: "Katze", image: '<img src="img/K.jpg" alt="🐈">', sound: "kah" },
                    { letter: "L", word: "Löwe", image: '<img src="img/L.jpg" alt="🦁">', sound: "ell" },
                    { letter: "M", word: "Maus", image: '<img src="img/M.jpg" alt="🐭">', sound: "emm" },
                    { letter: "N", word: "Nase", image: '<img src="img/J.jpg" alt="👃">', sound: "enn" },
                    { letter: "O", word: "Oma", image: "👵", sound: "oh" },


                    { letter: "P", word: "Pferd", image: "🐴", sound: "peh" },
                    { letter: "Q", word: "Quelle", image: "⛲", sound: "kuh" },
                    { letter: "R", word: "Regen", image: "🌧️", sound: "err" },
                    { letter: "S", word: "Sonne", image: "☀️", sound: "ess" },
                    { letter: "T", word: "Tiger", image: "🐯", sound: "teh" },
                    { letter: "U", word: "Uhu", image: "🦉", sound: "uh" },
                    { letter: "V", word: "Vogel", image: "🐦", sound: "vau" },
                    { letter: "W", word: "Wasser", image: "💧", sound: "weh" },
                    { letter: "X", word: "Xylophon", image: "🎵", sound: "ix" },
                    { letter: "Y", word: "Yoga", image: "🧘", sound: "üpsilon" },
                    { letter: "Z", word: "Zebra", image: "🦓", sound: "zett" },
                    { letter: "Ä", word: "Äpfel", image: "🍎", sound: "äh" },
                    { letter: "Ö", word: "Öl", image: "🛢️", sound: "öh" },
                    { letter: "Ü", word: "Über", image: "⬆️", sound: "üh" },
                    { letter: "ß", word: "Straße", image: "🛣️", sound: "ess-tsett" }
                ]
            },
            silben: {
                label: "👏 Sil-ben klat-schen",
                description: "Klatsche die Silben in jedem Wort",
                items: [
                    { word: "Haus", syllables: "Haus", count: 1 },
                    { word: "Ball", syllables: "Ball", count: 1 },
                    { word: "Tisch", syllables: "Tisch", count: 1 },
                    { word: "Apfel", syllables: "Ap-fel", count: 2 },
                    { word: "Tasse", syllables: "Tas-se", count: 2 },
                    { word: "Hose", syllables: "Ho-se", count: 2 },
                    { word: "Banane", syllables: "Ba-na-ne", count: 3 },
                    { word: "Tomate", syllables: "To-ma-te", count: 3 },
                    { word: "Elefant", syllables: "E-le-fant", count: 3 },
                    { word: "Krokodil", syllables: "Kro-ko-dil", count: 3 },
                    { word: "Schmetterling", syllables: "Schmet-ter-ling", count: 3 },
                    { word: "Taschenlampe", syllables: "Ta-schen-lam-pe", count: 4 },
                    { word: "Bananen", syllables: "Ba-na-nen", count: 3 },
                    { word: "Kartoffel", syllables: "Kar-tof-fel", count: 3 },
                    { word: "Sonne", syllables: "Son-ne", count: 2 },
                    { word: "Tasse", syllables: "Tas-se", image: "☕" }, { word: "Hose", syllables: "Ho-se", image: "👖" },
                    { word: "Mütze", syllables: "Müt-ze", image: "🧢" }, { word: "Tasche", syllables: "Ta-sche", image: "👜" },
                    { word: "Schule", syllables: "Schu-le", image: "🏫" }, { word: "Lehrer", syllables: "Leh-rer", image: "👨‍🏫" },
                    { word: "Buch", syllables: "Buch", image: "📖" }, { word: "Tür", syllables: "Tür", image: "🚪" },
                    { word: "Fenster", syllables: "Fens-ter", image: "🪟" }, { word: "Garten", syllables: "Gar-ten", image: "🌻" },
                    { word: "Blume", syllables: "Blu-me", image: "🌸" }, { word: "Baum", syllables: "Baum", image: "🌳" },
                    { word: "Banane", syllables: "Ba-na-ne", image: "🍌" }, { word: "Tomate", syllables: "To-ma-te", image: "🍅" },

                    { word: "Elefant", syllables: "E-le-fant", image: "🐘" }, { word: "Krokodil", syllables: "Kro-ko-dil", image: "🐊" },
                    { word: "Schmetterling", syllables: "Schmet-ter-ling", image: "🦋" }, { word: "Libelle", syllables: "Li-bel-le", image: "🪰" },
                    { word: "Marienkäfer", syllables: "Ma-ri-en-kä-fer", image: "🐞" }, { word: "Schokolade", syllables: "Scho-ko-la-de", image: "🍫" },
                    { word: "Kartoffel", syllables: "Kar-tof-fel", image: "🥔" }, { word: "Giraffe", syllables: "Gi-raf-fe", image: "🦒" }

                ]
            },
            anlaute: {
                label: "🔊 Erste Wörter (Anlaute)",
                description: "Mit welchem Buchstaben beginnt das Wort?",
                items: [
                    { word: "Affe", startsWith: "A", image: "🐒" },
                    { word: "Ball", startsWith: "B", image: "⚽" },
                    { word: "Drache", startsWith: "D", image: "🐉" },
                    { word: "Ente", startsWith: "E", image: "🦆" },
                    { word: "Fisch", startsWith: "F", image: "🐟" },
                    { word: "Giraffe", startsWith: "G", image: "🦒" },
                    { word: "Hund", startsWith: "H", image: "🐕" },
                    { word: "Igel", startsWith: "I", image: "🦔" },
                    { word: "Katze", startsWith: "K", image: "🐈" },
                    { word: "Löwe", startsWith: "L", image: "🦁" },
                    { word: "Maus", startsWith: "M", image: "🐭" },
                    { word: "Nase", startsWith: "N", image: "👃" },
                    { word: "Oma", startsWith: "O", image: "👵" },
                    { word: "Pferd", startsWith: "P", image: "🐴" },
                    { word: "Regen", startsWith: "R", image: "🌧️" },
                    { word: "Sonne", startsWith: "S", image: "☀️" },
                    { word: "Tiger", startsWith: "T", image: "🐯" },
                    { word: "Uhu", startsWith: "U", image: "🦉" },
                    { word: "Vogel", startsWith: "V", image: "🐦" },
                    { word: "Wasser", startsWith: "W", image: "💧" },
                    { word: "Zebra", startsWith: "Z", image: "🦓" },
                ]
            },
            word_match: {
                label: "🖼️ Wort zu Bild zuordnen",
                description: "Welches Wort passt zum Bild?",
                items: [
                    { word: "Hund", image: "🐕" }, { word: "Katze", image: "🐈" }, { word: "Maus", image: "🐭" }, { word: "Vogel", image: "🐦" },
                    { word: "Fisch", image: "🐟" }, { word: "Apfel", image: "🍎" }, { word: "Banane", image: "🍌" }, { word: "Brot", image: "🍞" },
                    { word: "Milch", image: "🥛" }, { word: "Wasser", image: "💧" }
                ]
            },
            sentences: {
                label: "📝 Erste Sätze",
                description: "Lies die kurzen Sätze vor",
                items: [
                    { sentence: "Ich sehe einen Hund.", emoji: "🐕", words: ["Ich", "sehe", "einen", "Hund"] },
                    { sentence: "Mama hat einen Apfel.", emoji: "🍎", words: ["Mama", "hat", "einen", "Apfel"] },
                    { sentence: "Papa liest ein Buch.", emoji: "📖", words: ["Papa", "liest", "ein", "Buch"] },
                    { sentence: "Die Sonne scheint warm.", emoji: "☀️", words: ["Die", "Sonne", "scheint", "warm"] },
                    { sentence: "Der Hund bellt laut.", emoji: "🐕", words: ["Der", "Hund", "bellt", "laut"] },
                    { sentence: "Das Kind spielt im Garten.", emoji: "🧒", words: ["Das", "Kind", "spielt", "im", "Garten"] },
                    { sentence: "Die Katze schläft auf dem Stuhl.", emoji: "🐈", words: ["Die", "Katze", "schläft", "auf", "dem", "Stuhl"] },
                    { sentence: "Ich trinke Wasser.", emoji: "💧", words: ["Ich", "trinke", "Wasser"] },
                    { sentence: "Das Auto fährt schnell.", emoji: "🚗", words: ["Das", "Auto", "fährt", "schnell"] },
                    { sentence: "Ich mag die Schule.", emoji: "🏫", words: ["Ich", "mag", "die", "Schule"] },
                    { sentence: "Oma backt einen Kuchen.", emoji: "👵", words: ["Oma", "backt", "einen", "Kuchen"] },
                    { sentence: "Der Vogel fliegt hoch.", emoji: "🐦", words: ["Der", "Vogel", "fliegt", "hoch"] }
                ]
            },
            reading_comprehension: {
                label: "🧠 Lesen mit Verständnis",
                description: "Lies den Satz und entscheide",
                items: [
                    { sentence: "Die Sonne scheint. Es ist warm.", question: "Wie ist das Wetter?", answer: "warm" },
                    { sentence: "Der Hund bellt laut.", question: "Was macht der Hund?", answer: "er bellt" },
                    { sentence: "Mama backt einen Kuchen.", question: "Was backt Mama?", answer: "einen Kuchen" },
                    { sentence: "Das Kind spielt im Sandkasten.", question: "Wo spielt das Kind?", answer: "im Sandkasten" },
                    { sentence: "Die Katze schläft auf dem Bett.", question: "Wo schläft die Katze?", answer: "auf dem Bett" }
                ]
            },
            word_puzzle: {
                label: "🧩 Buchstaben-Puzzle",
                description: "Setze die Buchstaben zum Wort zusammen",
                items: [
                    { letters: "A-U-S-H", solution: "HAUS" }, { letters: "B-A-L-L", solution: "BALL" },
                    { letters: "T-I-S-C-H", solution: "TISCH" }, { letters: "S-O-N-N-E", solution: "SONNE" },
                    { letters: "M-O-N-D", solution: "MOND" }, { letters: "S-T-E-R-N", solution: "STERN" },
                    { letters: "A-P-F-E-L", solution: "APFEL" }, { letters: "B-U-C-H", solution: "BUCH" },
                    { letters: "F-I-S-C-H", solution: "FISCH" }, { letters: "V-O-G-E-L", solution: "VOGEL" }
                ]
            }
        };

        const LESEN_DATABASE = READING_DATABASE;


        // ============================================================
        // LOGIK: LESEN-LERNEN  (Klasse 1 & 2)
        // ============================================================

        let lesenState = {
            currentCategory: null,
            currentIndex: 0,
            score: 0,
            wrongAttempts: 0,
            total: 0,
            options: [],
            correctIndex: -1
        };

        const LESEN_ICONS = {
            buchstaben: '🔤', silben: '👏', anlaute: '🔊',
            word_match: '🖼️', sentences: '📝',
            reading_comprehension: '🧠', word_puzzle: '🧩'
        };

        const LESEN_FLASHCARDS = ['buchstaben', 'silben', 'simple_words', 'sentences'];

        function lesenDB() {
            if (typeof LESEN_DATABASE !== 'undefined' && LESEN_DATABASE) return LESEN_DATABASE;
            return null;
        }

        function shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }

        function getCurrentProfileId() {
            try {
                if (typeof activePlayerKey !== 'undefined' && activePlayerKey) return String(activePlayerKey);
                if (typeof currentPlayer !== 'undefined' && currentPlayer && currentPlayer.name) return 'name_' + currentPlayer.name;
            } catch (e) { }
            return 'gast';
        }

        function speakLesen(text) {
            try {
                if (typeof soundOn !== "undefined" && !soundOn) return;
                if (!('speechSynthesis' in window) || !text) return;
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(String(text));
                u.lang = 'de-DE';
                u.rate = 0.9;
                u.pitch = 1.0;

                const voices = window.speechSynthesis.getVoices();
                const deVoices = voices.filter(v => v.lang.startsWith('de'));

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
            } catch (e) { }
        }

        function hoerButton(text) {
            // Nur den relevanten Teil zum Vorlesen extrahieren
            let textToRead = String(text);

            // Bei Buchstaben: Nur den Buchstaben + Wort vorlesen
            if (textToRead.includes('.')) {
                const parts = textToRead.split('.');
                textToRead = parts[0] + '. ' + (parts[1] || '').trim();
            }

            // Bei Silben: Nur das Wort vorlesen
            if (textToRead.includes('👏')) {
                const match = textToRead.match(/([A-ZÄÖÜa-zäöüß\-]+)/);
                if (match) textToRead = match[1];
            }

            const safe = encodeURIComponent(textToRead);
            return `<button onclick="speakNatural(decodeURIComponent('${safe}'))"
                class="mt-3 inline-flex items-center gap-2 px-5 py-2 bg-yellow-500 text-gray-900 rounded-xl font-bold shadow hover:bg-yellow-400 transition">
                🔊 Hören
            </button>`;
        }

        function lesenStorageKey() {
            return 'lesen_progress_' + getCurrentProfileId();
        }

        function getAllLesenProgress() {
            try { return JSON.parse(localStorage.getItem(lesenStorageKey()) || '{}'); } catch (e) { return {}; }
        }

        function getLesenProgress(categoryKey) {
            const all = getAllLesenProgress();
            return all[categoryKey] || { done: 0, total: 0 };
        }

        function saveLesenProgress(categoryKey, done, total) {
            const all = getAllLesenProgress();
            all[categoryKey] = { done: done, total: total };
            try { localStorage.setItem(lesenStorageKey(), JSON.stringify(all)); } catch (e) { }
        }

        function renderLesenCategories() {
            const container = document.getElementById('lesen-categories');
            if (!container) return;

            const categories = lesenDB();
            if (!categories) {
                container.innerHTML = '<div class="col-span-2 text-center text-gray-500 py-8">❌ Lesen-Datenbank nicht gefunden</div>';
                return;
            }

            // NUR die Kacheln, KEIN "Zurück zur Übersicht" Button mehr!
            let html = '';

            const keys = Object.keys(categories);
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
                    class="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-left hover:border-blue-500 transition-all">
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


        let comprehensionStep = 0;
        function startLesenCategory(categoryKey) {
            const categories = lesenDB();
            if (!categories || !categories[categoryKey]) return;

            lesenState.currentCategory = categoryKey;
            lesenState.currentIndex = 0;
            lesenState.score = 0;
            lesenState.wrongAttempts = 0;
            lesenState.total = (categories[categoryKey].items || []).length;

            // Für "Lesen mit Verständnis" den Schritt zurücksetzen
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
        <div class="flex gap-2">
            <button onclick="closeLesen()" class="text-xs text-gray-500 hover:text-white transition px-2 py-1 bg-white/5 rounded-lg">← Zurück</button>
            <button onclick="resetLesenCategory('${categoryKey}')" class="text-xs text-gray-500 hover:text-red-400 transition px-2 py-1 bg-white/5 rounded-lg">↺</button>
        </div>
    </div>
`;

            switch (categoryKey) {
                case 'buchstaben': html += renderBuchstaben(item); break;
                case 'silben': html += renderSilben(item); break;
                case 'anlaute': html += renderAnlaute(item); break;
                case 'simple_words':
                case 'zweisilbig':
                case 'dreisilbig': html += renderWordWithImage(item); break;
                case 'word_match': html += renderWordMatch(item); break;
                case 'sentences': html += renderSentence(item); break;
                case 'reading_comprehension': html += renderComprehension(item); break;
                case 'word_puzzle': html += renderWordPuzzle(item); break;
                default: html += renderDefault(item);
            }

            container.innerHTML = html;
        }

        //     function renderBuchstaben(item) {
        //         return `
        //     <div class="text-center py-6">
        //         <div class="text-8xl font-black text-blue-400 mb-2">${item.letter}</div>
        //         <div class="text-3xl font-bold text-white">${item.word}</div>
        //         <div class="text-6xl my-4">${item.image}</div>
        //         <div class="text-sm text-gray-400">Klingt wie: <span class="text-yellow-400 font-bold">"${item.sound}"</span></div>
        //         ${hoerButton(item.letter + '. ' + item.word)}
        //         <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        //     </div>
        // `;
        // }

        function renderBuchstaben(item) {
            return `
        <div class="text-center py-6">
            <div class="text-8xl font-black text-blue-400 mb-2">${item.letter}</div>
            <div class="text-3xl font-bold text-white">${item.word}</div>
            <div class="text-6xl my-4">${item.image}</div>
            <div class="text-sm text-gray-400">Klingt wie: <span class="text-yellow-400 font-bold">"${item.sound}"</span></div>
            ${hoerButton(item.letter + '. ' + item.word)}
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        </div>
    `;
        }

        //     function renderSilben(item) {
        //         return `
        //     <div class="text-center py-6">
        //         <div class="text-5xl font-bold text-white mb-4">${item.word}</div>
        //         <div class="text-2xl text-yellow-400 font-bold">👏 ${item.syllables}</div>
        //         <div class="text-sm text-gray-400 mt-2">${item.count} Silbe${item.count > 1 ? 'n' : ''}</div>
        //         ${hoerButton(item.word)}
        //         <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        //     </div>
        // `;
        //     }

        function renderSilben(item) {
            return `
        <div class="text-center py-6">
            <div class="text-5xl font-bold text-white mb-4">${item.word}</div>
            <div class="text-2xl text-yellow-400 font-bold">👏 ${item.syllables}</div>
            <div class="text-sm text-gray-400 mt-2">${item.count} Silbe${item.count > 1 ? 'n' : ''}</div>
            ${hoerButton(item.word)}
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        </div>
    `;
        }

        //     function renderWordWithImage(item) {
        //         return `
        //     <div class="text-center py-6">
        //         <div class="text-7xl mb-4">${item.image}</div>
        //         <div class="text-4xl font-bold text-white">${item.word}</div>
        //         ${item.syllables ? `<div class="text-sm text-gray-400 mt-2">👏 ${item.syllables}</div>` : ''}
        //         ${hoerButton(item.word)}
        //         <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        //     </div>
        // `;
        //     }

        function renderWordWithImage(item) {
            return `
        <div class="text-center py-6">
            <div class="text-7xl mb-4">${item.image}</div>
            <div class="text-4xl font-bold text-white">${item.word}</div>
            ${item.syllables ? `<div class="text-sm text-gray-400 mt-2">👏 ${item.syllables}</div>` : ''}
            ${hoerButton(item.word)}
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        </div>
    `;
        }

        //     function renderSentence(item) {
        //         return `
        //     <div class="text-center py-6">
        //         <div class="text-4xl font-bold text-white mb-4">${item.emoji}</div>
        //         <div class="text-2xl font-bold text-yellow-400 leading-relaxed">${item.sentence}</div>
        //         <div class="text-xs text-gray-500 mt-2">${item.words.join(' · ')}</div>
        //         ${hoerButton(item.sentence)}
        //         <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        //     </div>
        // `;
        //     }

        function renderSentence(item) {
            return `
        <div class="text-center py-6">
            <div class="text-4xl font-bold text-white mb-4">${item.emoji}</div>
            <div class="text-2xl font-bold text-yellow-400 leading-relaxed">${item.sentence}</div>
            <div class="text-xs text-gray-500 mt-2">${item.words.join(' · ')}</div>
            ${hoerButton(item.sentence)}
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        </div>
    `;
        }
        function prepareOptions(values, correctValue) {
            const opts = shuffle(values.slice());
            lesenState.options = opts;
            lesenState.correctIndex = opts.indexOf(correctValue);
            return opts;
        }

        function pickDistractors(pool, correctValue, n) {
            const uniq = Array.from(new Set(pool)).filter(v => v !== correctValue);
            shuffle(uniq);
            return uniq.slice(0, n);
        }

        //     function renderAnlaute(item) {
        //         const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        //         const distractors = pickDistractors(letters, item.startsWith, 3);
        //         const opts = prepareOptions([item.startsWith].concat(distractors), item.startsWith);

        //         const buttons = opts.map((l, i) => `
        //     <button onclick="lesenCheck(${i})" class="w-16 h-16 text-2xl font-bold bg-gray-700 rounded-xl">${l}</button>
        // `).join('');

        //         return `
        //     <div class="text-center py-6">
        //         <div class="text-6xl mb-4">${item.image}</div>
        //         <div class="text-3xl font-bold text-white mb-1">${item.word}</div>
        //         ${hoerButton(item.word)}
        //         <div class="text-sm text-gray-400 my-3">Mit welchem Buchstaben beginnt das Wort?</div>
        //         <div class="flex justify-center gap-4 flex-wrap">${buttons}</div>
        //     </div>
        // `;
        //     }

        function renderAnlaute(item) {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
            const distractors = pickDistractors(letters, item.startsWith, 3);
            const opts = prepareOptions([item.startsWith].concat(distractors), item.startsWith);

            const buttons = opts.map((l, i) => `
        <button onclick="lesenCheck(${i})" class="w-16 h-16 text-2xl font-bold bg-gray-700 rounded-xl">${l}</button>
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

        //     function renderWordMatch(item) {
        //         const categories = lesenDB();
        //         const pool = (categories.word_match.items || []).map(it => it.word);
        //         const distractors = pickDistractors(pool, item.word, 3);
        //         const opts = prepareOptions([item.word].concat(distractors), item.word);

        //         const buttons = opts.map((w, i) => `
        //     <button onclick="lesenCheck(${i})" class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white">${w}</button>
        // `).join('');

        //         return `
        //     <div class="text-center py-6">
        //         <div class="text-7xl mb-4">${item.image}</div>
        //         <div class="text-sm text-gray-400 mb-4">Welches Wort passt zum Bild?</div>
        //         <div class="flex justify-center gap-3 flex-wrap">${buttons}</div>
        //     </div>
        // `;
        //     }
        function renderWordMatch(item) {
            const categories = lesenDB();
            const pool = (categories.word_match.items || []).map(it => it.word);
            const distractors = pickDistractors(pool, item.word, 3);
            const opts = prepareOptions([item.word].concat(distractors), item.word);

            const buttons = opts.map((w, i) => `
        <button onclick="lesenCheck(${i})" class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white">${w}</button>
    `).join('');

            return `
        <div class="text-center py-6">
            <div class="text-7xl mb-4">${item.image}</div>
            <div class="text-sm text-gray-400 mb-4">Welches Wort passt zum Bild?</div>
            <div class="flex justify-center gap-3 flex-wrap">${buttons}</div>
        </div>
    `;
        }
        //     //     // --------------------------------------------------------
        //     // DAS IST DIE ÜBERARBEITETE "LESEN MIT VERSTÄNDNIS"-FUNKTION
        //     // --------------------------------------------------------
        //     let comprehensionStep = 0;

        //     function renderComprehension(item) {
        //         const categories = lesenDB();
        //         const pool = (categories.reading_comprehension.items || []).map(it => it.answer);
        //         const distractors = pickDistractors(pool, item.answer, 3);
        //         const opts = prepareOptions([item.answer].concat(distractors), item.answer);

        //         const buttons = opts.map((a, i) => `
        //     <button onclick="lesenCheck(${i})" class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white">${a}</button>
        // `).join('');

        //         if (comprehensionStep === 0) {
        //             return `
        //         <div class="text-center py-6">
        //             <div class="text-xl font-bold text-white leading-relaxed mb-4">📖 Lies den Satz:</div>
        //             <div class="text-2xl font-bold text-yellow-400 leading-relaxed mb-8">${item.sentence}</div>
        //             <button onclick="comprehensionNext()" 
        //                     class="mt-6 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">
        //                 ➔ Weiter zur Frage
        //             </button>
        //         </div>
        //     `;
        //         }

        function renderComprehension(item) {
            const categories = lesenDB();
            const pool = (categories.reading_comprehension.items || []).map(it => it.answer);
            const distractors = pickDistractors(pool, item.answer, 3);
            const opts = prepareOptions([item.answer].concat(distractors), item.answer);

            const buttons = opts.map((a, i) => `
        <button onclick="lesenCheck(${i})" class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white">${a}</button>
    `).join('');

            if (comprehensionStep === 0) {
                return `
            <div class="text-center py-6">
                <div class="text-xl font-bold text-white leading-relaxed mb-4">📖 Lies den Satz:</div>
                <div class="text-2xl font-bold text-yellow-400 leading-relaxed mb-8">${item.sentence}</div>
                ${hoerButton(item.sentence)}
                <button onclick="comprehensionNext()" 
                        class="mt-6 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-500">
                    ➔ Weiter zur Frage
                </button>
            </div>
        `;
            }

            return `
        <div class="text-center py-4">
            <div class="text-sm text-gray-400 mb-2">📖 ${item.sentence}</div>
            <div class="text-lg text-yellow-400 font-bold my-4">❓ ${item.question}</div>
            <div class="flex justify-center gap-3 flex-wrap">${buttons}</div>
        </div>
    `;
        }

        //     return `
        //     <div class="text-center py-4">
        //         <div class="text-sm text-gray-400 mb-2">📖 ${item.sentence}</div>
        //         <div class="text-lg text-yellow-400 font-bold my-4">❓ ${item.question}</div>
        //         <div class="flex justify-center gap-3 flex-wrap">${buttons}</div>
        //     </div>
        // `;
        //     }

        function comprehensionNext() {
            comprehensionStep = 1;
            renderLesenExercise(lesenState.currentCategory);
        }
        // --------------------------------------------------------

        //     function renderWordPuzzle(item) {
        //         const shownLetters = shuffle(item.letters.split('-'));
        //         const categories = lesenDB();
        //         const allWords = [];
        //         Object.keys(categories).forEach(key => {
        //             (categories[key].items || []).forEach(it => {
        //                 if (it.solution) allWords.push(it.solution);
        //                 else if (it.word) allWords.push(it.word.toUpperCase());
        //             });
        //         });
        //         const distractors = pickDistractors(allWords, item.solution, 3);
        //         const opts = prepareOptions([item.solution].concat(distractors), item.solution);

        //         const tiles = shownLetters.map(l => `
        //     <span class="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-2xl font-bold text-white">${l}</span>
        // `).join('');

        //         const buttons = opts.map((w, i) => `
        //     <button onclick="lesenCheck(${i})" class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white">${w}</button>
        // `).join('');

        //         return `
        //     <div class="text-center py-4">
        //         <div class="text-sm text-gray-400 mb-3">Setze die Buchstaben zum Wort zusammen</div>
        //         <div class="flex justify-center gap-2 flex-wrap mb-4">${tiles}</div>
        //         <div class="flex justify-center gap-3 flex-wrap">${buttons}</div>
        //     </div>
        // `;
        //     }

        function renderWordPuzzle(item) {
            const shownLetters = shuffle(item.letters.split('-'));
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
        <button onclick="lesenCheck(${i})" class="px-6 py-3 bg-gray-700 rounded-xl font-bold text-white">${w}</button>
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
            <button onclick="lesenNext()" class="mt-4 w-full p-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg">➔ Weiter</button>
        </div>
    `;
        }

        // --------------------------------------------------------
        // ÜBERARBEITETE ANTWORT-PRÜFUNG: NUR TÖNE
        // --------------------------------------------------------
        function lesenCheck(idx) {
            if (idx === lesenState.correctIndex) {
                playLesenSound(true);
                lesenState.score++;
                setTimeout(() => lesenNext(), 500);
            } else {
                lesenState.wrongAttempts++;
                playLesenSound(false);
            }
        }

        function playLesenSound(correct) {
            try {
                if (correct) {
                    if (typeof playTones === 'function') {
                        playTones([[523, 0.1], [659, 0.1], [784, 0.2]], 'sine', 0.15);
                    } else if (typeof SFX !== 'undefined' && SFX.correct) {
                        SFX.correct();
                    } else {
                        console.log("Richtig-Ton abgespielt");
                    }
                } else {
                    if (typeof playTones === 'function') {
                        playTones([[392, 0.12], [349, 0.12], [330, 0.2]], 'sine', 0.12);
                    } else if (typeof SFX !== 'undefined' && SFX.wrong) {
                        SFX.wrong();
                    } else {
                        console.log("Falsch-Ton abgespielt");
                    }
                }
            } catch (e) { }
        }


        // Sorgt dafür, dass die Stimmen im Hintergrund geladen werden (wichtig für Chrome/Safari)
        // window.speechSynthesis.onvoiceschanged = () => {
        //     window.speechSynthesis.getVoices();
        // };

        // function speakNatural(text) {
        //     if (!('speechSynthesis' in window)) return;

        //     // Bricht aktuelles Vorlesen ab, falls noch etwas gesprochen wird
        //     window.speechSynthesis.cancel();

        //     const utterance = new SpeechSynthesisUtterance(text);
        //     utterance.lang = 'de-DE';
        //     utterance.rate = 0.9; // Leicht verlangsamt (0.9 statt 1.0) für bessere Verständlichkeit
        //     utterance.pitch = 1.1; // Ein kleines bisschen höher, wirkt oft freundlicher

        //     const voices = window.speechSynthesis.getVoices();

        //     // Wir suchen gezielt nach hochwertigen deutschen Stimmen
        //     const bestVoice = voices.find(v => v.lang.includes('de') && (v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Google')))
        //         || voices.find(v => v.lang.includes('de')); // Fallback: Erste verfügbare deutsche Stimme

        //     if (bestVoice) {
        //         utterance.voice = bestVoice;
        //     }

        //     window.speechSynthesis.speak(utterance);
        // }

        function speakNatural(text) {
            if (typeof soundOn !== "undefined" && !soundOn) return;
            if (typeof speakText === "function") {
                speakText(text);
                return;
            }
            if (!('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();
            let cleanText = String(text || "")
                .replace(/<u[^>]*>[\s\S]*?<\/u>/gi, " ")
                .replace(/__+|_+/g, " ")
                .replace(/\([^)]*\)/g, " ")
                .replace(/[🔤👏🔊📖🖼️📗📕📝🧠🧩✅❌➔❓💡🎉🌟🏆👂👀📚]/g, "")
                .replace(/[^\w\s\.\,\!\?\-\u00C0-\u017F]/g, "")
                .replace(/\s+/g, " ")
                .trim();
            if (!cleanText) return;
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = "de-DE";
            utterance.rate = 0.85;
            utterance.pitch = 1.15;
            const voices = window.speechSynthesis.getVoices() || [];
            const bestVoice = voices.find(v => /de/i.test(v.lang) && /natural|neural|premium|google|anna|helena|katja/i.test(v.name))
                || voices.find(v => /de-DE/i.test(v.lang))
                || voices.find(v => /de/i.test(v.lang));
            if (bestVoice) utterance.voice = bestVoice;
            window.speechSynthesis.speak(utterance);
        }



        // --------------------------------------------------------

        function lesenNext() {
            const categories = lesenDB();
            const cat = categories[lesenState.currentCategory];
            const items = cat.items || [];

            lesenState.currentIndex++;
            comprehensionStep = 0; // Setzt den Leseschritt für die nächste Aufgabe zurück

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

            const wrong = lesenState.wrongAttempts;
            let emoji, msg;
            if (wrong <= 2) { emoji = '🏆'; msg = 'Perfekt gemacht!'; }
            else if (wrong <= 6) { emoji = '🌟'; msg = 'Super gemacht!'; }
            else { emoji = '👍'; msg = 'Gut gemacht!'; }

            const isFlashcard = LESEN_FLASHCARDS.indexOf(categoryKey) !== -1;
            const line = isFlashcard ? `Du hast alle ${total} angeschaut!` : `Du hast alle ${total} geschafft!`;

            saveLesenProgress(categoryKey, total, total);

            container.innerHTML = `
        <div class="text-center py-8">
            <div class="text-7xl mb-4">${emoji}</div>
            <div class="text-2xl font-bold text-white">${msg}</div>
            <div class="text-lg font-bold text-yellow-400 mt-2">${line}</div>
            <div class="flex gap-3 mt-6">
                <button onclick="startLesenCategory('${categoryKey}')" class="flex-1 p-3 bg-blue-600 rounded-xl font-bold text-white shadow-lg">🔄 Nochmal</button>
                <button onclick="closeLesen()" class="flex-1 p-3 bg-gray-700 rounded-xl font-bold text-white shadow-lg">↩️ Zurück</button>
            </div>
        </div>
    `;
        }

        async function resetLesenCategory(categoryKey) {
            if (!(await appConfirm("Der Fortschritt für diese Übung wird auf null gesetzt.", {
                titel: "Fortschritt zurücksetzen?", icon: "🔄", okText: "Zurücksetzen", gefahr: true
            }))) return;
            const categories = lesenDB();
            const total = categories[categoryKey].items ? categories[categoryKey].items.length : 0;
            saveLesenProgress(categoryKey, 0, total);
            lesenState.currentIndex = 0;
            lesenState.score = 0;
            lesenState.wrongAttempts = 0;
            renderLesenExercise(categoryKey);
        }

        // --------------------------------------------------------
        // ÜBERARBEITETE NAVIGATION: ZURÜCK VS. HAUPTMENÜ
        // --------------------------------------------------------

        // Geht einen Schritt zurück (von Übung zu Kategorieliste)
        // function closeLesen() {
        //     try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) { }
        //     const ex = document.getElementById('lesen-exercise');
        //     const gr = document.getElementById('lesen-categories');
        //     if (ex) ex.classList.add('hidden');
        //     if (gr) gr.classList.remove('hidden');
        //     renderLesenCategories();
        // }

        function closeLesen() {
            try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) { }
            const ex = document.getElementById('lesen-exercise');
            const gr = document.getElementById('lesen-categories');
            if (ex) ex.classList.add('hidden');
            if (gr) gr.classList.remove('hidden');
            renderLesenCategories();
        }


        // Geht von überall im Lesen-Bereich komplett zurück ins Hauptmenü

        function openLesen() {
            renderLesenCategories();
            const ex = document.getElementById('lesen-exercise');
            const gr = document.getElementById('lesen-categories');
            if (ex) ex.classList.add('hidden');
            if (gr) gr.classList.remove('hidden');
            if (typeof switchView === 'function') switchView('lesen');
        }

