// ============================================================
//  EduPlay Hub – Lernvideos
//  Eigener Bereich „Videos“ im Lernraum: Liste nach Klasse/Fach,
//  Player und Sprung zum passenden Kurs.
//  Die MP4-Dateien liegen in /videos/ und werden NICHT vom
//  Service Worker zwischengespeichert (Range-Anfragen, Größe).
// ============================================================
(function () {
    'use strict';

    const VIDEOS = [
        { id: "silben_k1", titel: "Silben klatschen", klasse: 1, fach: "deutsch", dauer: 42, kurs: "silben_k1" },
        { id: "anlaute_k1", titel: "Anlaute hören", klasse: 1, fach: "deutsch", dauer: 36, kurs: "anlaute_k1" },
        { id: "zehner_einer_k1", titel: "Zehner und Einer", klasse: 1, fach: "mathe", dauer: 37, kurs: "zahlen20_k1" },
        { id: "zahlenstrahl_k1", titel: "Plus und Minus am Zahlenstrahl", klasse: 1, fach: "mathe", dauer: 48, kurs: "plusrechnen_k1" },
        { id: "malnehmen_k2", titel: "Malnehmen heißt bündeln", klasse: 2, fach: "mathe", dauer: 40, kurs: "einmaleins_k2" },
        { id: "uhr_k2", titel: "Die Uhr lesen", klasse: 2, fach: "mathe", dauer: 41, kurs: "uhr_viertel_k2" },
        { id: "wortarten_k2", titel: "Nomen, Verben, Adjektive", klasse: 2, fach: "deutsch", dauer: 45, kurs: "wortarten_k2" },
        { id: "brueche_viertel_k3", titel: "Brüche: Was ist ein Viertel?", klasse: 3, fach: "mathe", dauer: 55, kurs: "brueche_k3" },
        { id: "schriftlich_addieren_k3", titel: "Schriftlich addieren", klasse: 3, fach: "mathe", dauer: 52, kurs: "schriftlich_k3" },
        { id: "himmelsrichtungen_k3", titel: "Die Himmelsrichtungen", klasse: 3, fach: "sachunterricht", dauer: 38, kurs: "karte_heimat_k3" },
        { id: "stromkreis_k3", titel: "Der Stromkreis", klasse: 3, fach: "sachunterricht", dauer: 45, kurs: "strom_k3" },
        { id: "das_dass_k4", titel: "das oder dass?", klasse: 4, fach: "deutsch", dauer: 53, kurs: "rechtschreib_k4" },
        // Welle 2
        { id: "farben_zahlen_en_k2", titel: "Farben und Zahlen auf Englisch", klasse: 2, fach: "englisch", dauer: 35, kurs: "farben_zahlen_en_k2" },
        { id: "geld_k2", titel: "Mit Geld rechnen", klasse: 2, fach: "mathe", dauer: 37, kurs: "groessen_k2" },
        { id: "jetzt_frueher_k3", titel: "Jetzt und früher – Zeitformen", klasse: 3, fach: "deutsch", dauer: 45, kurs: "zeitform_k3" },
        { id: "geteilt_k3", titel: "Geteilt rechnen", klasse: 3, fach: "mathe", dauer: 38, kurs: "einmaleins_k3" },
        { id: "vier_faelle_k4", titel: "Die vier Fälle", klasse: 4, fach: "deutsch", dauer: 54, kurs: "faelle_k4" },
        { id: "schriftlich_multiplizieren_k4", titel: "Schriftlich multiplizieren", klasse: 4, fach: "mathe", dauer: 47, kurs: "schriftlich_k4" },
        { id: "laengen_k4", titel: "Längen umrechnen", klasse: 4, fach: "mathe", dauer: 46, kurs: "groessen_k3k4" },
        { id: "toter_winkel_k4", titel: "Der tote Winkel", klasse: 4, fach: "sachunterricht", dauer: 45, kurs: "radfahren_k4" },
        // Welle 4
        { id: "zehnerfreunde_k1", titel: "Die Zehnerfreunde", klasse: 1, fach: "mathe", dauer: 36, kurs: "plusrechnen_k1" },
        { id: "formen_k1", titel: "Kreis, Dreieck, Viereck", klasse: 1, fach: "mathe", dauer: 37, kurs: "formen_k1" },
        { id: "fuenf_sinne_k1", titel: "Unsere fünf Sinne", klasse: 1, fach: "sachunterricht", dauer: 33, kurs: "koerper_k1" },
        { id: "jahreszeiten_k1", titel: "Die vier Jahreszeiten", klasse: 1, fach: "sachunterricht", dauer: 35, kurs: "jahreszeiten_k1" },
        { id: "satzzeichen_k1", titel: "Punkt, Fragezeichen, Ausrufezeichen", klasse: 1, fach: "deutsch", dauer: 30, kurs: "satzzeichen_k1" },
        { id: "wer_hilft_k1", titel: "Wer hilft uns?", klasse: 1, fach: "sachunterricht", dauer: 35, kurs: "alltag_k1" },
        { id: "selbstlaute_k1", titel: "Groß und klein, Selbstlaute", klasse: 1, fach: "deutsch", dauer: 35, kurs: "buchstaben_k1" },
        { id: "reime_k1", titel: "Was reimt sich?", klasse: 1, fach: "deutsch", dauer: 25, kurs: "reime_k1" },
        { id: "laute_im_wort_k1", titel: "Laute im Wort hören", klasse: 1, fach: "deutsch", dauer: 29, kurs: "laute_k1" },
        { id: "erste_woerter_k1", titel: "Erste Wörter lesen", klasse: 1, fach: "deutsch", dauer: 29, kurs: "lesen_k1" },
        { id: "zaehlen_vergleichen_k1", titel: "Zählen und vergleichen", klasse: 1, fach: "mathe", dauer: 29, kurs: "zaehlen_k1" },
        { id: "nachbarzahlen_k1", titel: "Nachbarzahlen", klasse: 1, fach: "mathe", dauer: 32, kurs: "nachbar_k1" },
        { id: "minus_rechnen_k1", titel: "Minus rechnen", klasse: 1, fach: "mathe", dauer: 36, kurs: "minusrechnen_k1" },
        { id: "geld_bis_20_k1", titel: "Geld zählen bis 20 Euro", klasse: 1, fach: "mathe", dauer: 36, kurs: "geld_k1" },
        { id: "tierkinder_k1", titel: "Tierkinder auf dem Bauernhof", klasse: 1, fach: "sachunterricht", dauer: 26, kurs: "tiere_k1" },
        { id: "sicher_unterwegs_k1", titel: "Sicher über die Straße", klasse: 1, fach: "sachunterricht", dauer: 36, kurs: "verkehr_k1" },
        { id: "zahlen_bis_100_k2", titel: "Zahlen bis 100", klasse: 2, fach: "mathe", dauer: 35, kurs: "zahlen100_k2" },
        { id: "uhr_viertel_k2", titel: "Viertel nach und Viertel vor", klasse: 2, fach: "mathe", dauer: 43, kurs: "uhr_viertel_k2" },
        { id: "wasserkreislauf_k2", titel: "Der Wasserkreislauf", klasse: 2, fach: "sachunterricht", dauer: 38, kurs: "stoffe_k2" },
        { id: "tiere_en_k2", titel: "Tiere auf Englisch", klasse: 2, fach: "englisch", dauer: 30, kurs: "tiere_en_k2" },
        { id: "quadrat_rechteck_k2", titel: "Quadrat, Rechteck, Kreis und Oval", klasse: 2, fach: "mathe", dauer: 33, kurs: "formen_k2" },
        { id: "verdoppeln_halbieren_k2", titel: "Verdoppeln und Halbieren", klasse: 2, fach: "mathe", dauer: 37, kurs: "verdoppeln_k2" },
        { id: "i_see_i_can_k2", titel: "I see, I can, I like", klasse: 2, fach: "englisch", dauer: 31, kurs: "mini_english_k2" },
        { id: "uhr_fuenf_minuten_k2", titel: "Die Uhr in 5-Minuten-Schritten", klasse: 2, fach: "mathe", dauer: 35, kurs: "uhr_fuenf_k2" },
        { id: "komma_aufzaehlung_k2", titel: "Komma und Großschreibung", klasse: 2, fach: "deutsch", dauer: 33, kurs: "satzbau_k2" },
        { id: "ck_und_tz_k2", titel: "ck und tz", klasse: 2, fach: "deutsch", dauer: 35, kurs: "rechtschreib_k2" },
        { id: "umlaute_aeu_eu_k2", titel: "Umlaute: ä, ö, ü und äu oder eu", klasse: 2, fach: "deutsch", dauer: 37, kurs: "umlaute_k2" },
        { id: "lesen_verstehen_k2", titel: "Lesen und verstehen: Wer? Was? Wo?", klasse: 2, fach: "deutsch", dauer: 34, kurs: "lesen_k2" },
        { id: "plus_minus_100_k2", titel: "Plus und Minus bis 100", klasse: 2, fach: "mathe", dauer: 52, kurs: "plusminus100_k2" },
        { id: "tiergruppen_k2", titel: "Säugetier, Vogel, Fisch, Insekt", klasse: 2, fach: "sachunterricht", dauer: 36, kurs: "tiere_k2" },
        { id: "wochentage_monate_k2", titel: "Wochentage und Monate", klasse: 2, fach: "sachunterricht", dauer: 30, kurs: "zeit_k2" },
        { id: "sicheres_fahrrad_k2", titel: "Das verkehrssichere Fahrrad", klasse: 2, fach: "sachunterricht", dauer: 32, kurs: "zaehne_rad_k2" },
        { id: "hello_goodbye_k2", titel: "Hello, Goodbye und What's your name?", klasse: 2, fach: "englisch", dauer: 34, kurs: "hallo_en_k2" },
        { id: "family_en_k2", titel: "My family – Familie auf Englisch", klasse: 2, fach: "englisch", dauer: 33, kurs: "familie_schule_en_k2" },
        { id: "schriftlich_subtrahieren_k3", titel: "Schriftlich subtrahieren", klasse: 3, fach: "mathe", dauer: 49, kurs: "schriftlich_k3" },
        { id: "ae_oder_e_k3", titel: "ä oder e? Ableiten hilft", klasse: 3, fach: "deutsch", dauer: 35, kurs: "rechtschreib_k3" },
        { id: "woertliche_rede_k3", titel: "Die wörtliche Rede", klasse: 3, fach: "deutsch", dauer: 35, kurs: "saetze_k3" },
        { id: "wochentage_en_k3", titel: "Die Wochentage auf Englisch", klasse: 3, fach: "englisch", dauer: 34, kurs: "wetter_en_k3" },
        { id: "karte_lesen_k3", titel: "Eine Karte lesen", klasse: 3, fach: "sachunterricht", dauer: 40, kurs: "karte_k3" },
        { id: "zahlen_bis_1000_k3", titel: "Zahlen bis 1000", klasse: 3, fach: "mathe", dauer: 40, kurs: "zahlen1000_k3" },
        { id: "feelings_en_k3", titel: "How are you? Gefühle auf Englisch", klasse: 3, fach: "englisch", dauer: 33, kurs: "familie_en_k3" },
        { id: "i_like_food_k3", titel: "I like – I don't like: Essen auf Englisch", klasse: 3, fach: "englisch", dauer: 34, kurs: "essen_kleidung_en_k3" },
        { id: "in_on_under_k3", titel: "in, on, under – Wo ist die Katze?", klasse: 3, fach: "englisch", dauer: 36, kurs: "haus_stadt_en_k3" },
        { id: "am_is_are_k3", titel: "I am, you are, he is", klasse: 3, fach: "englisch", dauer: 35, kurs: "saetze_en_k3" },
        { id: "vier_zeitformen_k3", titel: "Präsens, Präteritum, Perfekt, Futur", klasse: 3, fach: "deutsch", dauer: 33, kurs: "wortarten_k3" },
        { id: "maerchen_fabel_sachtext_k3", titel: "Märchen, Fabel, Sachtext, Gedicht", klasse: 3, fach: "deutsch", dauer: 36, kurs: "lesen_k3" },
        { id: "knochen_muskeln_k3", titel: "Knochen, Muskeln, Gelenke", klasse: 3, fach: "sachunterricht", dauer: 38, kurs: "koerper_k3" },
        { id: "stockwerke_wald_k3", titel: "Die Stockwerke des Waldes", klasse: 3, fach: "sachunterricht", dauer: 34, kurs: "wald_k3" },
        { id: "laengen_gewichte_k3", titel: "Längen und Gewichte", klasse: 3, fach: "mathe", dauer: 49, kurs: "laengen_gewichte_k3" },
        { id: "koerper_spiegeln_k3", titel: "Körper und Spiegeln", klasse: 3, fach: "mathe", dauer: 44, kurs: "geometrie_k3" },
        { id: "zeit_kalender_k3", titel: "Uhrzeit, Zeitspannen und Kalender", klasse: 3, fach: "mathe", dauer: 50, kurs: "zeit_kalender_k3" },
        { id: "sachaufgaben_k3", titel: "Sachaufgaben lösen", klasse: 3, fach: "mathe", dauer: 47, kurs: "sachaufgaben_k3" },
        { id: "umfang_flaeche_k4", titel: "Umfang und Fläche", klasse: 4, fach: "mathe", dauer: 47, kurs: "umfang_flaeche_k4" },
        { id: "koerper_en_k4", titel: "Körperteile auf Englisch", klasse: 4, fach: "englisch", dauer: 32, kurs: "koerper_kleidung_en_k4" },
        { id: "zahlen_million_k4", titel: "Zahlen bis zur Million", klasse: 4, fach: "mathe", dauer: 54, kurs: "zahlen1mio_k4" },
        { id: "brueche_alltag_k4", titel: "Brüche im Alltag", klasse: 4, fach: "mathe", dauer: 50, kurs: "brueche_k4" },
        { id: "satzglieder_k4", titel: "Objekte und adverbiale Bestimmungen", klasse: 4, fach: "deutsch", dauer: 49, kurs: "satzglieder_k4" },
        { id: "bundeslaender_k4", titel: "Die 16 Bundesländer", klasse: 4, fach: "sachunterricht", dauer: 47, kurs: "bundeslaender_k4" },
        { id: "uhrzeit_en_k4", titel: "What time is it? Die Uhrzeit auf Englisch", klasse: 4, fach: "englisch", dauer: 37, kurs: "schule_stadt_en_k4" },
        { id: "aufsatz_aufbau_k4", titel: "Aufsatz: Einleitung, Hauptteil, Schluss", klasse: 4, fach: "deutsch", dauer: 35, kurs: "aufsatz_k4" },
        { id: "play_or_go_k4", titel: "Hobbys und Sport: play oder go?", klasse: 4, fach: "englisch", dauer: 37, kurs: "hobbys_en_k4" },
        { id: "how_much_is_it_k4", titel: "Einkaufen auf Englisch: How much is it?", klasse: 4, fach: "englisch", dauer: 37, kurs: "einkaufen_en_k4" },
        { id: "sage_maerchen_bericht_k4", titel: "Sage, Märchen oder Bericht?", klasse: 4, fach: "deutsch", dauer: 38, kurs: "lesen_k4" },
        { id: "nachbarlaender_k4", titel: "Deutschlands Nachbarländer", klasse: 4, fach: "sachunterricht", dauer: 36, kurs: "de_europa_k4" },
        { id: "ritter_burgen_k4", titel: "Ritter und Burgen im Mittelalter", klasse: 4, fach: "sachunterricht", dauer: 34, kurs: "geschichte_k4" },
        { id: "herz_blut_k4", titel: "Herz und Blutkreislauf", klasse: 4, fach: "sachunterricht", dauer: 34, kurs: "entwicklung_k4" },
        { id: "netze_wuerfelgebaeude_k4", titel: "Würfelnetze und Würfelgebäude", klasse: 4, fach: "mathe", dauer: 50, kurs: "koerper_k4" },
        { id: "massstab_k4", titel: "Maßstab und Pläne", klasse: 4, fach: "mathe", dauer: 48, kurs: "massstab_k4" },
        { id: "daten_zufall_k4", titel: "Diagramme und Zufall", klasse: 4, fach: "mathe", dauer: 46, kurs: "daten_zufall_k4" },
        { id: "sachaufgaben_k4", titel: "Sachaufgaben clever lösen", klasse: 4, fach: "mathe", dauer: 58, kurs: "sachaufgaben_k4" },
        // Klasse 5
        { id: "bruchteile_k5", titel: "Bruchteile von Mengen", klasse: 5, fach: "mathe", dauer: 41, kurs: "bruchrechnen_k5" },
        { id: "brueche_addieren_k5", titel: "Gleichnamige Brüche addieren", klasse: 5, fach: "mathe", dauer: 45, kurs: "brueche_addieren_k5" },
        { id: "teiler_primzahlen_k5", titel: "Teiler und Primzahlen", klasse: 5, fach: "mathe", dauer: 44, kurs: "teiler_vielfache_k5" },
        { id: "winkelarten_k5", titel: "Winkelarten", klasse: 5, fach: "mathe", dauer: 42, kurs: "geometrie_grundlagen_k5" },
        { id: "achsensymmetrie_k5", titel: "Achsensymmetrie", klasse: 5, fach: "mathe", dauer: 43, kurs: "symmetrie_k5" },
        { id: "satzglieder_k5", titel: "Satzglieder bestimmen", klasse: 5, fach: "deutsch", dauer: 45, kurs: "satzglieder_k5" },
        { id: "kommasetzung_k5", titel: "Wann kommt ein Komma?", klasse: 5, fach: "deutsch", dauer: 44, kurs: "komma_k5" },
        { id: "s_ss_sz_k5", titel: "s, ss oder ß?", klasse: 5, fach: "deutsch", dauer: 45, kurs: "s_ss_sz_k5" },
        { id: "pronomen_praepositionen_k5", titel: "Pronomen und Präpositionen", klasse: 5, fach: "deutsch", dauer: 47, kurs: "wortarten_vertiefend_k5" },
        { id: "simple_present_k5", titel: "Simple Present – he, she, it", klasse: 5, fach: "englisch", dauer: 48, kurs: "simple_present_k5" },
        { id: "simple_past_k5", titel: "Simple Past – played, went, saw", klasse: 5, fach: "englisch", dauer: 47, kurs: "simple_past_k5" },
        { id: "plural_en_k5", titel: "Plural auf Englisch", klasse: 5, fach: "englisch", dauer: 48, kurs: "plural_regeln_k5" },
        { id: "brueche_erweitern_kuerzen_k5", titel: "Brüche erweitern und kürzen", klasse: 5, fach: "mathe", dauer: 40, kurs: "bruchrechnen_k5" },
        { id: "woertliche_rede_begleitsatz_k5", titel: "Wörtliche Rede: der Begleitsatz", klasse: 5, fach: "deutsch", dauer: 41, kurs: "woertliche_rede_k5" },
        { id: "groessen_umrechnen_k5", titel: "Größen umrechnen: Gewicht und Zeit", klasse: 5, fach: "mathe", dauer: 36, kurs: "groessen_umrechnen_k5" },
        { id: "present_progressive_k5", titel: "Present Progressive: gerade jetzt", klasse: 5, fach: "englisch", dauer: 44, kurs: "present_progressive_k5" },
        { id: "diagramm_lesen_k5", titel: "Ein Diagramm richtig lesen", klasse: 5, fach: "deutsch", dauer: 30, kurs: "diagramme_texte_k5" },
        { id: "wegbeschreibung_k5", titel: "Einen Weg beschreiben", klasse: 5, fach: "deutsch", dauer: 40, kurs: "beschreiben_k5" },
        { id: "meinung_begruenden_k5", titel: "Die eigene Meinung begründen", klasse: 5, fach: "deutsch", dauer: 36, kurs: "meinung_begruenden_k5" },
        { id: "textknacker_k5", titel: "Der Textknacker", klasse: 5, fach: "deutsch", dauer: 34, kurs: "textknacker_maerchen_k5" },
        { id: "my_day_k5", titel: "My day – der Tagesablauf auf Englisch", klasse: 5, fach: "englisch", dauer: 36, kurs: "themenwortschatz_k5" },
        { id: "praepositionen_faelle_k5", titel: "Präpositionen und ihre Fälle", klasse: 5, fach: "deutsch", dauer: 44, kurs: "vier_faelle_k5" },
        { id: "possessive_s_k5", titel: "Possessive 's – wem gehört was?", klasse: 5, fach: "englisch", dauer: 36, kurs: "be_havegot_k5" },
        { id: "mittelwert_spannweite_k5", titel: "Strichliste, Mittelwert und Spannweite", klasse: 5, fach: "mathe", dauer: 36, kurs: "daten_diagramme_k5" },
        { id: "some_any_k5", titel: "some oder any?", klasse: 5, fach: "englisch", dauer: 38, kurs: "some_any_questions_k5" },
        { id: "can_must_mustnt_k5", titel: "can, must und mustn't", klasse: 5, fach: "englisch", dauer: 44, kurs: "modals_k5" },
        { id: "artikel_adverb_k5", titel: "Nomen, Artikel, Adjektiv und Adverb", klasse: 5, fach: "deutsch", dauer: 36, kurs: "wortarten_grundlagen_k5" },
        { id: "go_went_gone_k5", titel: "go – went – gone", klasse: 5, fach: "englisch", dauer: 49, kurs: "dreiformen_k5" },
        { id: "grosse_zahlen_rechengesetze_k5", titel: "Große Zahlen und Rechengesetze", klasse: 5, fach: "mathe", dauer: 59, kurs: "zahlen_rechengesetze_k5" },
        // Klasse 6
        { id: "dezimalzahlen_k6", titel: "Dezimalzahlen verstehen", klasse: 6, fach: "mathe", dauer: 48, kurs: "dezimalzahlen_k6" },
        { id: "dezimal_addieren_k6", titel: "Dezimalzahlen addieren", klasse: 6, fach: "mathe", dauer: 51, kurs: "dezimal_rechnen_k6" },
        { id: "dezimal_multiplizieren_k6", titel: "Dezimalzahlen multiplizieren", klasse: 6, fach: "mathe", dauer: 49, kurs: "dezimal_rechnen_k6" },
        { id: "brueche_multiplizieren_k6", titel: "Brüche multiplizieren", klasse: 6, fach: "mathe", dauer: 50, kurs: "bruchrechnen_k6" },
        { id: "negative_zahlen_k6", titel: "Negative Zahlen", klasse: 6, fach: "mathe", dauer: 39, kurs: "negative_zahlen_k6" },
        { id: "volumen_quader_k6", titel: "Volumen des Quaders", klasse: 6, fach: "mathe", dauer: 50, kurs: "koerper_volumen_k6" },
        { id: "adjektive_steigern_k6", titel: "Adjektive steigern", klasse: 6, fach: "deutsch", dauer: 43, kurs: "adjektive_steigern_k6" },
        { id: "nominalisierung_k6", titel: "Verben und Adjektive werden groß", klasse: 6, fach: "deutsch", dauer: 42, kurs: "grossschreibung_k6" },
        { id: "perfekt_plusquamperfekt_k6", titel: "Perfekt und Plusquamperfekt", klasse: 6, fach: "deutsch", dauer: 47, kurs: "zeitformen_k6" },
        { id: "present_perfect_k6", titel: "Present Perfect bilden", klasse: 6, fach: "englisch", dauer: 51, kurs: "present_perfect_k6" },
        { id: "comparison_k6", titel: "Comparison: bigger, more beautiful", klasse: 6, fach: "englisch", dauer: 45, kurs: "comparison_k6" },
        { id: "adverbs_k6", titel: "Adverbs: slow oder slowly?", klasse: 6, fach: "englisch", dauer: 47, kurs: "adverbs_k6" },
        { id: "umfang_flaeche_formeln_k6", titel: "Umfang und Fläche: die Formeln", klasse: 6, fach: "mathe", dauer: 43, kurs: "flaechen_umfang_k6" },
        { id: "hauptsatz_nebensatz_k6", titel: "Hauptsatz und Nebensatz", klasse: 6, fach: "deutsch", dauer: 36, kurs: "nebensaetze_k6" },
        { id: "progressive_ohne_ing_k6", titel: "Present Progressive: Verben ohne -ing", klasse: 6, fach: "englisch", dauer: 44, kurs: "present_progressive_k6" },
        { id: "dass_nach_verben_k6", titel: "dass nach sagen, glauben, hoffen", klasse: 6, fach: "deutsch", dauer: 38, kurs: "das_dass_k6" },
        { id: "bruch_dezimalzahl_k6", titel: "Brüche und Dezimalzahlen umwandeln", klasse: 6, fach: "mathe", dauer: 39, kurs: "brueche_dezimal_k6" },
        { id: "wortfeld_wortfamilie_k6", titel: "Wortfeld oder Wortfamilie?", klasse: 6, fach: "deutsch", dauer: 38, kurs: "wortfelder_k6" },
        { id: "silbentrennung_k6", titel: "Silbentrennung, Dehnung und Schärfung", klasse: 6, fach: "deutsch", dauer: 42, kurs: "silben_dehnung_k6" },
        { id: "there_is_there_are_k6", titel: "there is und there are", klasse: 6, fach: "englisch", dauer: 36, kurs: "there_is_k6" },
        { id: "i_me_my_mine_k6", titel: "Pronouns: I, me, my, mine", klasse: 6, fach: "englisch", dauer: 39, kurs: "pronouns_k6" },
        { id: "word_order_k6", titel: "Word order: place before time", klasse: 6, fach: "englisch", dauer: 43, kurs: "word_order_k6" },
        { id: "past_progressive_k6", titel: "Past Progressive: was/were + -ing", klasse: 6, fach: "englisch", dauer: 41, kurs: "past_progressive_k6" },
        { id: "irregular_verbs_k6", titel: "Mehr unregelmäßige Verben", klasse: 6, fach: "englisch", dauer: 52, kurs: "dreiformen_k6" },
        { id: "ing_form_k6", titel: "Die -ing-Form", klasse: 6, fach: "englisch", dauer: 49, kurs: "ing_form_k6" },
        // Klasse 7
        { id: "prozentrechnung_k7", titel: "Prozentrechnung", klasse: 7, fach: "mathe", dauer: 42, kurs: "prozentrechnung_k7" },
        { id: "zinsrechnung_k7", titel: "Zinsen berechnen", klasse: 7, fach: "mathe", dauer: 56, kurs: "zinsrechnung_k7" },
        { id: "gleichungen_waage_k7", titel: "Gleichungen lösen wie eine Waage", klasse: 7, fach: "mathe", dauer: 38, kurs: "terme_gleichungen_k7" },
        { id: "dreisatz_k7", titel: "Der Dreisatz", klasse: 7, fach: "mathe", dauer: 54, kurs: "zuordnungen_k7" },
        { id: "dreieck_trapez_k7", titel: "Fläche von Dreieck und Trapez", klasse: 7, fach: "mathe", dauer: 57, kurs: "flaechen_k7" },
        { id: "winkelsaetze_k7", titel: "Winkelsätze", klasse: 7, fach: "mathe", dauer: 46, kurs: "winkelsaetze_k7" },
        { id: "aktiv_passiv_k7", titel: "Aktiv und Passiv", klasse: 7, fach: "deutsch", dauer: 42, kurs: "aktiv_passiv_k7" },
        { id: "nebensatzarten_k7", titel: "Nebensatzarten", klasse: 7, fach: "deutsch", dauer: 44, kurs: "nebensatzarten_k7" },
        { id: "praepositionalobjekt_k7", titel: "Präpositionalobjekt oder adverbiale Bestimmung?", klasse: 7, fach: "deutsch", dauer: 52, kurs: "satzglieder_vertiefend_k7" },
        { id: "prepositions_k7", titel: "in, on, at – Prepositions of time and place", klasse: 7, fach: "englisch", dauer: 45, kurs: "prepositions_k7" },
        { id: "will_going_to_k7", titel: "will oder going to?", klasse: 7, fach: "englisch", dauer: 51, kurs: "future_k7" },
        { id: "past_present_perfect_k7", titel: "Simple Past oder Present Perfect?", klasse: 7, fach: "englisch", dauer: 56, kurs: "perfect_past_k7" },
        { id: "formeller_brief_k7", titel: "Der formelle Brief und die E-Mail", klasse: 7, fach: "deutsch", dauer: 48, kurs: "briefe_email_k7k8" },
        { id: "dreiecke_kongruenz_k7", titel: "Dreiecke: Ungleichung und Kongruenzsätze", klasse: 7, fach: "mathe", dauer: 52, kurs: "dreiecke_k7" },
        { id: "haeufigkeit_laplace_k7", titel: "Relative Häufigkeit und Wahrscheinlichkeit", klasse: 7, fach: "mathe", dauer: 53, kurs: "haeufigkeit_k7" },
        // Klasse 8
        { id: "lineare_funktionen_k8", titel: "Lineare Funktionen", klasse: 8, fach: "mathe", dauer: 40, kurs: "lineare_funktionen_k8" },
        { id: "binomische_formeln_k8", titel: "Die binomischen Formeln", klasse: 8, fach: "mathe", dauer: 53, kurs: "binomische_formeln_k8" },
        { id: "gleichungssysteme_k8", titel: "Lineare Gleichungssysteme lösen", klasse: 8, fach: "mathe", dauer: 50, kurs: "gleichungssysteme_k8" },
        { id: "wahrscheinlichkeit_k8", titel: "Wahrscheinlichkeit und Baumdiagramm", klasse: 8, fach: "mathe", dauer: 42, kurs: "wahrscheinlichkeit_k8" },
        { id: "pythagoras_k8", titel: "Der Satz des Pythagoras", klasse: 8, fach: "mathe", dauer: 43, kurs: "pythagoras_k8" },
        { id: "kreis_k8", titel: "Kreis: Umfang und Fläche", klasse: 8, fach: "mathe", dauer: 51, kurs: "kreis_k8" },
        { id: "indirekte_rede_k8", titel: "Indirekte Rede mit Konjunktiv I", klasse: 8, fach: "deutsch", dauer: 44, kurs: "konjunktiv_k8" },
        { id: "sprachliche_mittel_k8", titel: "Sprachliche Mittel erkennen", klasse: 8, fach: "deutsch", dauer: 45, kurs: "sprachmittel_k8" },
        { id: "argumentieren_k8", titel: "Ein gutes Argument bauen", klasse: 8, fach: "deutsch", dauer: 43, kurs: "argumentieren_k8" },
        { id: "if_clauses_k8", titel: "if-clauses Typ 1 und 2", klasse: 8, fach: "englisch", dauer: 48, kurs: "conditionals_k8" },
        { id: "passive_en_k8", titel: "The Passive", klasse: 8, fach: "englisch", dauer: 45, kurs: "passive_k8" },
        { id: "reported_speech_k8", titel: "Reported Speech", klasse: 8, fach: "englisch", dauer: 46, kurs: "reported_speech_k8" },
        { id: "prozent_wachstum_k8", titel: "Prozentuales Wachstum", klasse: 8, fach: "mathe", dauer: 59, kurs: "prozent_wachstum_k8" },
        { id: "prisma_zylinder_k8", titel: "Volumen von Prisma und Zylinder", klasse: 8, fach: "mathe", dauer: 50, kurs: "prisma_zylinder_k8" },
        { id: "past_perfect_k8", titel: "Past Perfect", klasse: 8, fach: "englisch", dauer: 50, kurs: "past_perfect_k8" },
        { id: "gerund_infinitiv_k8", titel: "Gerund oder Infinitiv: enjoy doing, want to do", klasse: 8, fach: "englisch", dauer: 51, kurs: "gerund_k8" },
        { id: "attribute_apposition_k8", titel: "Attribute und Appositionen", klasse: 8, fach: "deutsch", dauer: 43, kurs: "attribute_apposition_k8" },
        // Klasse 9
        { id: "quadratische_funktionen_k9", titel: "Quadratische Funktionen und Scheitelpunkt", klasse: 9, fach: "mathe", dauer: 48, kurs: "quad_funktionen_k9" },
        { id: "pq_formel_k9", titel: "Quadratische Gleichungen mit der pq-Formel", klasse: 9, fach: "mathe", dauer: 56, kurs: "quad_gleichungen_k9" },
        { id: "strahlensatz_k9", titel: "Der Strahlensatz", klasse: 9, fach: "mathe", dauer: 47, kurs: "aehnlichkeit_k9" },
        { id: "trigonometrie_k9", titel: "Sinus, Kosinus und Tangens", klasse: 9, fach: "mathe", dauer: 50, kurs: "trigonometrie_k9" },
        { id: "wurzeln_k9", titel: "Quadratwurzeln", klasse: 9, fach: "mathe", dauer: 47, kurs: "wurzeln_k9" },
        { id: "potenzen_k9", titel: "Potenzgesetze und Zehnerpotenzen", klasse: 9, fach: "mathe", dauer: 44, kurs: "potenzen_k9" },
        { id: "relativsaetze_k9", titel: "Relativsätze und Relativpronomen", klasse: 9, fach: "deutsch", dauer: 43, kurs: "relativsaetze_k9" },
        { id: "eroerterung_k9", titel: "Die Erörterung", klasse: 9, fach: "deutsch", dauer: 44, kurs: "eroerterung_k9" },
        { id: "kurzgeschichte_k9", titel: "Merkmale der Kurzgeschichte", klasse: 9, fach: "deutsch", dauer: 39, kurs: "kurzgeschichte_k9" },
        { id: "bewerbung_k9", titel: "Bewerbung: Anschreiben und Lebenslauf", klasse: 9, fach: "deutsch", dauer: 46, kurs: "bewerbung_k9" },
        { id: "relative_clauses_k9", titel: "Relative clauses: who, which, whose", klasse: 9, fach: "englisch", dauer: 48, kurs: "relative_clauses_k9" },
        { id: "conditional_3_k9", titel: "Conditional Type III", klasse: 9, fach: "englisch", dauer: 43, kurs: "conditional_3_k9" },
        { id: "wish_k9", titel: "I wish … und if only …", klasse: 9, fach: "englisch", dauer: 40, kurs: "wish_k9" },
        { id: "zufall_mehrstufig_k9", titel: "Mehrstufige Zufallsexperimente", klasse: 9, fach: "mathe", dauer: 54, kurs: "zufall_mehrstufig_k9" },
        { id: "kommasetzung_k9", titel: "Kommasetzung", klasse: 9, fach: "deutsch", dauer: 44, kurs: "kommasetzung_k9" },
        { id: "drama_k9", titel: "Dramatische Texte", klasse: 9, fach: "deutsch", dauer: 53, kurs: "drama_k9" },
        { id: "referat_k9", titel: "Referat & Präsentation", klasse: 9, fach: "deutsch", dauer: 46, kurs: "referat_k9" },
        { id: "participles_k9", titel: "Participle clauses", klasse: 9, fach: "englisch", dauer: 52, kurs: "participles_k9" },
        { id: "mediation_k9", titel: "Mediation", klasse: 9, fach: "englisch", dauer: 43, kurs: "mediation_k9" },
        { id: "formal_writing_k9", titel: "Formal letters & emails", klasse: 9, fach: "englisch", dauer: 50, kurs: "formal_writing_k9" },
        // Klasse 10
        { id: "exponentialfunktionen_k10", titel: "Exponentielles Wachstum", klasse: 10, fach: "mathe", dauer: 54, kurs: "exponential_k10" },
        { id: "statistik_k10", titel: "Mittelwert, Median und Spannweite", klasse: 10, fach: "mathe", dauer: 46, kurs: "statistik_k10" },
        { id: "sinus_kosinussatz_k10", titel: "Sinussatz und Kosinussatz", klasse: 10, fach: "mathe", dauer: 57, kurs: "sinus_kosinussatz_k10" },
        { id: "kugel_k10", titel: "Volumen und Oberfläche der Kugel", klasse: 10, fach: "mathe", dauer: 41, kurs: "kugel_k10" },
        { id: "pyramide_kegel_k10", titel: "Volumen von Pyramide und Kegel", klasse: 10, fach: "mathe", dauer: 48, kurs: "pyramide_kegel_k10" },
        { id: "gedichte_k10", titel: "Gedichte analysieren", klasse: 10, fach: "deutsch", dauer: 43, kurs: "lyrik_k10" },
        { id: "charakterisierung_k10", titel: "Eine Figur charakterisieren", klasse: 10, fach: "deutsch", dauer: 43, kurs: "charakterisierung_k10" },
        { id: "erzaehlperspektive_k10", titel: "Die Erzählperspektive", klasse: 10, fach: "deutsch", dauer: 43, kurs: "prosatexte_k10" },
        { id: "sachtexte_k10", titel: "Sachtexte unterscheiden", klasse: 10, fach: "deutsch", dauer: 42, kurs: "sachtexte_k10" },
        { id: "vorstellungsgespraech_k10", titel: "Das Vorstellungsgespräch", klasse: 10, fach: "deutsch", dauer: 46, kurs: "bewerbung_k10" },
        { id: "comment_k10", titel: "Writing a comment", klasse: 10, fach: "englisch", dauer: 49, kurs: "comment_k10" },
        { id: "phrasal_verbs_k10", titel: "Phrasal verbs", klasse: 10, fach: "englisch", dauer: 50, kurs: "phrasal_verbs_k10" },
        { id: "modals_deduction_k10", titel: "must, might, can't – Vermutungen", klasse: 10, fach: "englisch", dauer: 49, kurs: "modals_deduction_k10" },
        { id: "present_perfect_progressive_k10", titel: "Present perfect progressive", klasse: 10, fach: "englisch", dauer: 45, kurs: "present_perfect_prog_k10" },
        { id: "sinusfunktion_k10", titel: "Die Sinusfunktion", klasse: 10, fach: "mathe", dauer: 49, kurs: "sinusfunktion_k10" },
        { id: "fit_zp10_k10", titel: "Fit für die ZP10", klasse: 10, fach: "mathe", dauer: 60, kurs: "zp10_k10" },
    ];
    const FACH = {
        mathe: { icon: "🧮", label: "Mathematik" },
        deutsch: { icon: "📖", label: "Deutsch" },
        sachunterricht: { icon: "🌍", label: "Sachunterricht" },
        englisch: { icon: "🇬🇧", label: "Englisch" }
    };
    const FACH_ORDER = ["mathe", "deutsch", "sachunterricht", "englisch"];
    const SPEICHER = "eduplay_videos_gesehen";

    let filterKlasse = 0;       // 0 = alle
    let aktuellesVideo = null;

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }
    function gesehen() {
        try { return JSON.parse(localStorage.getItem(SPEICHER) || "{}") || {}; } catch (e) { return {}; }
    }
    function merkeGesehen(id) {
        try { const g = gesehen(); g[id] = 1; localStorage.setItem(SPEICHER, JSON.stringify(g)); } catch (e) { }
    }
    function dauerText(s) { return s < 60 ? s + " s" : Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0") + " min"; }
    function klasseVorschlag() {
        // Klasse des aktiven Spielers, falls bekannt – sonst alle zeigen
        try {
            const p = (typeof currentPlayer !== "undefined" && currentPlayer) ? currentPlayer : null;
            const k = p && Number(p.grade || p.klasse);
            if (k && VIDEOS.some(function (v) { return v.klasse === k; })) return k;
        } catch (e) { }
        return 0;
    }

    function chip(k, label) {
        const an = filterKlasse === k;
        return an
            ? '<button type="button" onclick="filterVideos(' + k + ')" class="px-4 py-2 rounded-full text-sm font-black text-white whitespace-nowrap shrink-0" style="background:linear-gradient(140deg,#ec4899,#f43f5e);">' + label + '</button>'
            : '<button type="button" onclick="filterVideos(' + k + ')" class="px-4 py-2 rounded-full text-sm font-black text-white whitespace-nowrap shrink-0 bg-white/5 border border-white/10">' + label + '</button>';
    }

    function karte(v, g) {
        const fertig = !!g[v.id];
        return '<button type="button" onclick="openVideo(\'' + v.id + '\')" class="w-full flex items-center gap-3 p-3 rounded-2xl text-left transition bg-white/5 hover:bg-white/10 border border-white/10">'
            + '<span class="shrink-0" style="position:relative;width:128px;height:72px;border-radius:12px;overflow:hidden;background:#fff8ec;display:block;">'
            + '<img src="videos/' + v.id + '.jpg" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">'
            + '<span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">'
            + '<span style="width:34px;height:34px;border-radius:999px;background:rgba(15,23,42,0.75);color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;">▶</span></span></span>'
            + '<span class="flex-1 min-w-0">'
            + '<span class="block font-black text-white text-sm">' + esc(v.titel) + '</span>'
            + '<span class="block text-xs text-gray-400 mt-1">Klasse ' + v.klasse + ' · ' + dauerText(v.dauer) + '</span></span>'
            + '<span class="shrink-0" style="font-size:18px;">' + (fertig ? "✅" : "") + '</span></button>';
    }

    function renderListe() {
        const wrap = document.getElementById("videos-liste");
        const chips = document.getElementById("videos-klassen");
        if (!wrap || !chips) return;
        const klassen = Array.from(new Set(VIDEOS.map(function (v) { return v.klasse; }))).sort(function (a, b) { return a - b; });
        chips.innerHTML = chip(0, "Alle") + klassen.map(function (k) { return chip(k, "Klasse " + k); }).join("");
        const g = gesehen();
        const liste = VIDEOS.filter(function (v) { return !filterKlasse || v.klasse === filterKlasse; });
        const html = FACH_ORDER.map(function (f) {
            const imFach = liste.filter(function (v) { return v.fach === f; });
            if (!imFach.length) return "";
            const lab = FACH[f] || { icon: "🎬", label: f };
            return '<div class="space-y-2"><div class="text-sm font-black text-white px-1 pt-1">' + lab.icon + ' ' + esc(lab.label) + '</div>'
                + '<div class="space-y-2">' + imFach.map(function (v) { return karte(v, g); }).join("") + '</div></div>';
        }).join("");
        wrap.innerHTML = html || '<p class="text-center text-xs text-gray-400 py-3">Für diese Klasse gibt es noch keine Videos.</p>';
        const anz = document.getElementById("videos-anzahl");
        if (anz) anz.innerText = Object.keys(g).filter(function (id) { return VIDEOS.some(function (v) { return v.id === id; }); }).length + " von " + VIDEOS.length + " angesehen";
    }

    window.showVideos = function () {
        if (filterKlasse === 0 && !window._videosFilterGesetzt) filterKlasse = klasseVorschlag();
        renderListe();
        switchView("videos");
    };
    window.filterVideos = function (k) {
        filterKlasse = Number(k) || 0; window._videosFilterGesetzt = true; renderListe();
    };

    window.openVideo = function (id) {
        const v = VIDEOS.find(function (x) { return x.id === id; });
        if (!v) return;
        aktuellesVideo = v;
        const t = document.getElementById("video-titel");
        if (t) t.innerText = v.titel;
        const info = document.getElementById("video-info");
        const lab = FACH[v.fach] || { icon: "🎬", label: v.fach };
        if (info) info.innerText = lab.icon + " " + lab.label + " · Klasse " + v.klasse + " · " + dauerText(v.dauer);
        const el = document.getElementById("video-player");
        if (el) {
            el.pause();
            el.poster = "videos/" + v.id + ".jpg";
            el.src = "videos/" + v.id + ".mp4";
            el.load();
            // Autostart: openVideo läuft im Tipp-Handler, daher erlauben Browser den Ton
            const p = el.play();
            if (p && p.catch) p.catch(function () { /* blockiert: Nutzer tippt selbst auf Play */ });
        }
        const kursBtn = document.getElementById("video-kurs-btn");
        if (kursBtn) kursBtn.classList.toggle("hidden", !v.kurs);
        const naechstes = naechstesVideo(v);
        const nBtn = document.getElementById("video-next-btn");
        if (nBtn) {
            nBtn.classList.toggle("hidden", !naechstes);
            if (naechstes) nBtn.innerText = "▶ Nächstes: " + naechstes.titel;
        }
        switchView("video");
    };

    function naechstesVideo(v) {
        const gefiltert = VIDEOS.filter(function (x) { return !filterKlasse || x.klasse === filterKlasse; });
        // gleiche Reihenfolge wie in der Liste: nach Fach gruppiert
        const liste = FACH_ORDER.reduce(function (acc, f) {
            return acc.concat(gefiltert.filter(function (x) { return x.fach === f; }));
        }, []);
        const i = liste.indexOf(v);
        return i >= 0 && i < liste.length - 1 ? liste[i + 1] : null;
    }
    window.videoNaechstes = function () {
        const n = aktuellesVideo && naechstesVideo(aktuellesVideo);
        if (n) window.openVideo(n.id);
    };
    window.videoZumKurs = function () {
        const v = aktuellesVideo;
        if (!v || !v.kurs) return;
        const el = document.getElementById("video-player");
        if (el) el.pause();
        const laden = (typeof window.ladeLektionen === "function") ? window.ladeLektionen() : Promise.resolve();
        laden.then(function () {
            if (typeof window.openKurs === "function") window.openKurs(v.kurs);
        }, function () {
            if (typeof showToast === "function") showToast("Kurse konnten nicht geladen werden. Bitte Internet prüfen.", "error");
        });
    };
    window.videoZurueck = function () {
        const el = document.getElementById("video-player");
        if (el) el.pause();
        window.showVideos();
    };

    function verbindePlayer() {
        const el = document.getElementById("video-player");
        const view = document.getElementById("view-video");
        if (!el || !view || el._eduplay) return;
        el._eduplay = true;
        el.addEventListener("timeupdate", function () {
            if (aktuellesVideo && el.duration && el.currentTime / el.duration > 0.8) merkeGesehen(aktuellesVideo.id);
        });
        el.addEventListener("ended", function () { if (aktuellesVideo) merkeGesehen(aktuellesVideo.id); });
        // Hintergrundmusik pausieren, solange ein Video läuft
        el.addEventListener("play", function () { if (typeof stopBackgroundMusic === "function") stopBackgroundMusic(); });
        el.addEventListener("error", function () {
            if (el.getAttribute("src") && typeof showToast === "function") showToast("Video konnte nicht geladen werden. Bitte Internet prüfen.", "error");
        });
        // Video anhalten, sobald die Ansicht verlassen wird – egal auf welchem Weg
        new MutationObserver(function () {
            if (view.classList.contains("hidden")) {
                if (!el.paused) el.pause();
                if (typeof startBackgroundMusic === "function") startBackgroundMusic();
            }
        }).observe(view, { attributes: true, attributeFilter: ["class"] });
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", verbindePlayer);
    else verbindePlayer();

    window.EDUPLAY_VIDEOS = VIDEOS;
})();
