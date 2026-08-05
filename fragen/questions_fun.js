// Fun-Kategorien (Meta) – Fragen liegen in fragen/fun/*.js
const FUN_CATEGORIES = [
    { key: "spass_allgemein", label: "🏆 Allgemeinwissen" },
    { key: "spass_kleine", label: "🧸 Für die Kleinen (ganz leicht)" },
    { key: "spass_wuerdest_du", label: "🤔 Schätzfragen & Würdest du eher" },
    { key: "spass_nice_to_know", label: "✨ Nice to Know" },
    { key: "spass_welt", label: "🌍 Ungewöhnliches aus der Welt" },
    { key: "spass_sport_film", label: "🎬 Sport & Film" },
    { key: "spass_musik", label: "🎵 Musik" },
    { key: "spass_essen", label: "🍕 Essen & Trinken" },
    { key: "spass_tiere", label: "🐾 Tiere" },
    { key: "spass_laender", label: "🗺️ Länder & Flaggen" },
    { key: "spass_erfindungen", label: "💡 Erfindungen & Technik" },
    { key: "spass_raetsel", label: "🧩 Rätsel & Logik" },
    { key: "spass_humor", label: "😂 Schul- & Alltagshumor" },
    { key: "spass_beruf_humor", label: "🔧 Berufe mit Humor" },
      // Neue Kategorien für Hauptstädte (am Ende des Arrays einfügen)
    { key: "spass_hauptstaedte_europa", label: "🏛️ Hauptstädte Europa" },
    { key: "spass_hauptstaedte_welt", label: "🌍 Hauptstädte Welt" },
    // Kinder & Zusatz aus fragen/fun/*
    { key: "kinder_anime_cartoons", label: "🎬 Anime & Cartoons" },
    { key: "kinder_maerchen_disney", label: "🏰 Märchen & Disney" },
    { key: "kinder_tiere_natur", label: "🌿 Tiere & Natur (Kinder)" },
    { key: "kinder_erstes_wissen", label: "📘 Erstes Wissen" },
    { key: "schaetzen_nice_to_know", label: "✨ Schätzen · Nice to Know" },
    { key: "schaetzen_mensch_koerper", label: "🧍 Schätzen · Mensch & Körper" },
    { key: "schaetzen_ungewoehnlich_welt", label: "🌐 Schätzen · Ungewöhnliche Welt" },
];

if (typeof window !== "undefined") window.FUN_CATEGORIES = FUN_CATEGORIES;
