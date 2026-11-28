// Doppelte Grundschulkurse zusammenlegen (28.11.2026) – muss als LETZTE Lektionsdatei geladen werden
// SU K3: „Karte & Himmel“ (karte_k3) geht in „Karte und Heimat“ (karte_heimat_k3) auf.
//        Himmelsrichtungen gab es doppelt → karte_k3_l1 entfällt, Kompass wird Lektion 2.
// SU K4: „Bundesländer“ (bundeslaender_k4) geht in „Deutschland und Europa“ (de_europa_k4) auf.
//        Bundesländer & Hauptstädte gab es doppelt → de_k4_l1 entfällt, bl_k4_l1/l2 werden Lektion 1/2.
(function () {
    if (typeof KURSE === "undefined" || typeof LEKTIONEN === "undefined") return;
    function plan(alterKurs, zielKurs, wegLektion, reihenfolge) {
        var i;
        for (i = LEKTIONEN.length - 1; i >= 0; i--) if (LEKTIONEN[i].id === wegLektion) LEKTIONEN.splice(i, 1);
        LEKTIONEN.forEach(function (l) { if (l.kurs === alterKurs) l.kurs = zielKurs; });
        reihenfolge.forEach(function (id, n) { LEKTIONEN.forEach(function (l) { if (l.id === id) l.order = n + 1; }); });
        for (i = KURSE.length - 1; i >= 0; i--) if (KURSE[i].id === alterKurs) KURSE.splice(i, 1);
    }
    plan("karte_k3", "karte_heimat_k3", "karte_k3_l1", ["kh_k3_l1", "karte_k3_l2", "kh_k3_l2", "kh_k3_l3"]);
    plan("bundeslaender_k4", "de_europa_k4", "de_k4_l1", ["bl_k4_l1", "bl_k4_l2", "de_k4_l2", "de_k4_l3"]);
    KURSE.forEach(function (k) {
        if (k.id === "karte_heimat_k3") k.beschreibung = "Himmelsrichtungen, Kompass, Karten lesen mit Legende und Maßstab, Gemeinde und Bundesland.";
        if (k.id === "de_europa_k4") k.beschreibung = "Die 16 Bundesländer und Hauptstädte, Lage, Flüsse, Gebirge, Meere, Nachbarländer und die EU.";
    });
})();
