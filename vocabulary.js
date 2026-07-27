// ============================================================
//  VOCABULARY_DATABASE - Vokabeln für EduPlay Hub
// ============================================================

const VOCABULARY_DATABASE = {
    // ============================================================
    // ENGLISCH
    // ============================================================
    en: {
        k1: {
            label: "1. Klasse · Erste Wörter",
            words: [
                { de: "Hallo", foreign: "Hello" },
                { de: "Tschüss", foreign: "Goodbye" },
                { de: "Ja", foreign: "Yes" },
                { de: "Nein", foreign: "No" },
                { de: "Katze", foreign: "Cat" },
                { de: "Hund", foreign: "Dog" },
                { de: "Haus", foreign: "House" },
                { de: "Baum", foreign: "Tree" },
                { de: "Blume", foreign: "Flower" },
                { de: "Sonne", foreign: "Sun" }
            ]
        },
        k2: {
            label: "2. Klasse · Grundwortschatz",
            words: [
                { de: "Apfel", foreign: "Apple" },
                { de: "Banane", foreign: "Banana" },
                { de: "Auto", foreign: "Car" },
                { de: "Flugzeug", foreign: "Plane" },
                { de: "Schule", foreign: "School" },
                { de: "Lehrer", foreign: "Teacher" },
                { de: "Schüler", foreign: "Student" },
                { de: "Buch", foreign: "Book" },
                { de: "Tisch", foreign: "Table" },
                { de: "Stuhl", foreign: "Chair" }
            ]
        },
        k3: {
            label: "3. Klasse · Erweiterter Wortschatz",
            words: [
                { de: "Freund", foreign: "Friend" },
                { de: "Familie", foreign: "Family" },
                { de: "Glücklich", foreign: "Happy" },
                { de: "Traurig", foreign: "Sad" },
                { de: "Groß", foreign: "Big" },
                { de: "Klein", foreign: "Small" },
                { de: "Schnell", foreign: "Fast" },
                { de: "Langsam", foreign: "Slow" },
                { de: "Hell", foreign: "Bright" },
                { de: "Dunkel", foreign: "Dark" }
            ]
        },
        k4: {
            label: "4. Klasse · Fortgeschritten",
            words: [
                { de: "Abenteuer", foreign: "Adventure" },
                { de: "Fantastisch", foreign: "Fantastic" },
                { de: "Wunderbar", foreign: "Wonderful" },
                { de: "Erstaunlich", foreign: "Amazing" },
                { de: "Mutig", foreign: "Brave" },
                { de: "Klug", foreign: "Smart" },
                { de: "Stark", foreign: "Strong" },
                { de: "Schön", foreign: "Beautiful" },
                { de: "Freundlich", foreign: "Friendly" },
                { de: "Hilfsbereit", foreign: "Helpful" }
            ]
        },
        k5: {
            label: "5. Klasse · Oberstufe",
            words: [
                { de: "Wissenschaft", foreign: "Science" },
                { de: "Technologie", foreign: "Technology" },
                { de: "Umwelt", foreign: "Environment" },
                { de: "Nachhaltig", foreign: "Sustainable" },
                { de: "Fortschritt", foreign: "Progress" },
                { de: "Entwicklung", foreign: "Development" },
                { de: "Zukunft", foreign: "Future" },
                { de: "Vision", foreign: "Vision" },
                { de: "Kreativ", foreign: "Creative" },
                { de: "Innovativ", foreign: "Innovative" }
            ]
        }
    },
    
    // ============================================================
    // TÜRKISCH
    // ============================================================
    tr: {
        k1: {
            label: "1. Sınıf · İlk Kelimeler",
            words: [
                { de: "Hallo", foreign: "Merhaba" },
                { de: "Tschüss", foreign: "Hoşçakal" },
                { de: "Ja", foreign: "Evet" },
                { de: "Nein", foreign: "Hayır" },
                { de: "Katze", foreign: "Kedi" },
                { de: "Hund", foreign: "Köpek" },
                { de: "Haus", foreign: "Ev" },
                { de: "Baum", foreign: "Ağaç" },
                { de: "Blume", foreign: "Çiçek" },
                { de: "Sonne", foreign: "Güneş" }
            ]
        },
        k2: {
            label: "2. Sınıf · Temel Kelimeler",
            words: [
                { de: "Apfel", foreign: "Elma" },
                { de: "Banane", foreign: "Muz" },
                { de: "Auto", foreign: "Araba" },
                { de: "Flugzeug", foreign: "Uçak" },
                { de: "Schule", foreign: "Okul" },
                { de: "Lehrer", foreign: "Öğretmen" },
                { de: "Schüler", foreign: "Öğrenci" },
                { de: "Buch", foreign: "Kitap" },
                { de: "Tisch", foreign: "Masa" },
                { de: "Stuhl", foreign: "Sandalye" }
            ]
        },
        k3: {
            label: "3. Sınıf · Genişletilmiş Kelimeler",
            words: [
                { de: "Freund", foreign: "Arkadaş" },
                { de: "Familie", foreign: "Aile" },
                { de: "Glücklich", foreign: "Mutlu" },
                { de: "Traurig", foreign: "Üzgün" },
                { de: "Groß", foreign: "Büyük" },
                { de: "Klein", foreign: "Küçük" },
                { de: "Schnell", foreign: "Hızlı" },
                { de: "Langsam", foreign: "Yavaş" },
                { de: "Hell", foreign: "Aydınlık" },
                { de: "Dunkel", foreign: "Karanlık" }
            ]
        }
    }
};

// Debug-Ausgabe
console.log('✅ VOCABULARY_DATABASE geladen!');
console.log(`📝 Sprachen: ${Object.keys(VOCABULARY_DATABASE).join(', ')}`);
Object.keys(VOCABULARY_DATABASE).forEach(lang => {
    const levels = Object.keys(VOCABULARY_DATABASE[lang]);
    let total = 0;
    levels.forEach(level => {
        total += VOCABULARY_DATABASE[lang][level].words.length;
    });
    console.log(`  ${lang}: ${levels.length} Niveaus, ${total} Wörter`);
});