// Fun · Flaggen raten (MVP)
// Bilder lokal unter img/flags/*.png (offline-fähig).
(function () {
    const LAENDER = [
        { code: "de", name: "Deutschland", kontinent: "Europa" },
        { code: "at", name: "Österreich", kontinent: "Europa" },
        { code: "ch", name: "Schweiz", kontinent: "Europa" },
        { code: "fr", name: "Frankreich", kontinent: "Europa" },
        { code: "it", name: "Italien", kontinent: "Europa" },
        { code: "es", name: "Spanien", kontinent: "Europa" },
        { code: "pt", name: "Portugal", kontinent: "Europa" },
        { code: "nl", name: "Niederlande", kontinent: "Europa" },
        { code: "be", name: "Belgien", kontinent: "Europa" },
        { code: "pl", name: "Polen", kontinent: "Europa" },
        { code: "cz", name: "Tschechien", kontinent: "Europa" },
        { code: "dk", name: "Dänemark", kontinent: "Europa" },
        { code: "se", name: "Schweden", kontinent: "Europa" },
        { code: "no", name: "Norwegen", kontinent: "Europa" },
        { code: "fi", name: "Finnland", kontinent: "Europa" },
        { code: "ie", name: "Irland", kontinent: "Europa" },
        { code: "gb", name: "Großbritannien", kontinent: "Europa" },
        { code: "gr", name: "Griechenland", kontinent: "Europa" },
        { code: "tr", name: "Türkei", kontinent: "Europa" },
        { code: "ru", name: "Russland", kontinent: "Europa" },
        { code: "ua", name: "Ukraine", kontinent: "Europa" },
        { code: "hu", name: "Ungarn", kontinent: "Europa" },
        { code: "ro", name: "Rumänien", kontinent: "Europa" },
        { code: "hr", name: "Kroatien", kontinent: "Europa" },
        { code: "us", name: "USA", kontinent: "Amerika" },
        { code: "ca", name: "Kanada", kontinent: "Amerika" },
        { code: "mx", name: "Mexiko", kontinent: "Amerika" },
        { code: "br", name: "Brasilien", kontinent: "Amerika" },
        { code: "ar", name: "Argentinien", kontinent: "Amerika" },
        { code: "cl", name: "Chile", kontinent: "Amerika" },
        { code: "jp", name: "Japan", kontinent: "Asien" },
        { code: "cn", name: "China", kontinent: "Asien" },
        { code: "kr", name: "Südkorea", kontinent: "Asien" },
        { code: "in", name: "Indien", kontinent: "Asien" },
        { code: "th", name: "Thailand", kontinent: "Asien" },
        { code: "vn", name: "Vietnam", kontinent: "Asien" },
        { code: "id", name: "Indonesien", kontinent: "Asien" },
        { code: "sa", name: "Saudi-Arabien", kontinent: "Asien" },
        { code: "ae", name: "Vereinigte Arabische Emirate", kontinent: "Asien" },
        { code: "il", name: "Israel", kontinent: "Asien" },
        { code: "eg", name: "Ägypten", kontinent: "Afrika" },
        { code: "za", name: "Südafrika", kontinent: "Afrika" },
        { code: "ng", name: "Nigeria", kontinent: "Afrika" },
        { code: "ke", name: "Kenia", kontinent: "Afrika" },
        { code: "ma", name: "Marokko", kontinent: "Afrika" },
        { code: "gh", name: "Ghana", kontinent: "Afrika" },
        { code: "au", name: "Australien", kontinent: "Ozeanien" },
        { code: "nz", name: "Neuseeland", kontinent: "Ozeanien" },
        { code: "is", name: "Island", kontinent: "Europa" },
        { code: "lu", name: "Luxemburg", kontinent: "Europa" }
    ];

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    }

    function flagUrl(code) {
        const rel = "img/flags/" + String(code || "").toLowerCase() + ".png";
        try {
            return new URL(rel, (typeof document !== "undefined" && document.baseURI) || "./").href;
        } catch (e) {
            return rel;
        }
    }
    function flagCdn(code) {
        return "https://flagcdn.com/w320/" + String(code || "").toLowerCase() + ".png";
    }

    function buildQuestions() {
        const names = LAENDER.map(function (l) { return l.name; });
        return LAENDER.map(function (land, idx) {
            const wrongs = shuffle(names.filter(function (n) { return n !== land.name; })).slice(0, 3);
            const options = shuffle([land.name].concat(wrongs));
            const correct = options.indexOf(land.name);
            return {
                id: "flag_" + land.code,
                category: "spass_flaggen",
                area: "spass",
                subject: "flaggen",
                question: "Welches Land hat diese Flagge?" + "\u200b".repeat(idx + 1),
                answers: options,
                correct: correct,
                difficulty: "mittel",
                points: 10,
                explanation: "Das ist die Flagge von " + land.name + " (" + land.kontinent + ").",
                imageLocal: flagUrl(land.code),
                image: flagCdn(land.code),
                imageAlt: "Flagge von " + land.name,
                kontinent: land.kontinent
            };
        });
    }

    const SPASS_FLAGGEN_QUESTIONS = buildQuestions();
    if (typeof window !== "undefined") {
        window.SPASS_FLAGGEN_QUESTIONS = SPASS_FLAGGEN_QUESTIONS;
    }
    if (typeof registerQuestions === "function") {
        registerQuestions("SPASS_FLAGGEN_QUESTIONS", SPASS_FLAGGEN_QUESTIONS);
    }
})();
