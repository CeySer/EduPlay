// ============================================================
//  EduPlay Hub – Eltern-Bereich (neu, Okt. 2026)
//
//  Übersicht pro Kind · Aufgaben mit Status · Verlauf · Wochenbericht
//  · Assistent „Neue Aufgabe“. Die bisherigen Zuweisungs-Funktionen
//  (Test, Lektion, Kurs, Lernzeit) werden weiterverwendet und nur
//  umhüllt, damit jede Zuweisung zusätzlich als Aufgabe mit Status
//  nachverfolgt wird.
//
//  Neue Felder im Profil:
//    aufgaben        { id: {typ,titel,erstellt,faellig,coins,...} }  – schreiben NUR Eltern
//    aufgabenBelohnt { id: Zeitpunkt }                                 – schreibt das Kind
//    verlauf         [ {t,k,ti,d} ] (max. 150)                         – schreibt das Kind
//    studyLogBereich { tag: { bereich: Sekunden } } (60 Tage)          – schreibt das Kind
//
//  Lädt NACH lobby-avatar.js und VOR fragen-vorladen.js/zurueck-knopf.js.
// ============================================================
(function () {
    'use strict';

    const EB = {
        tab: 'uebersicht', kind: null, live: null, liveUnsub: null, eigenUnsub: null,
        renderTimer: null, filterAuf: 'alle', filterKind: 'alle', filterArt: 'alle',
        wiz: null, altFormular: null, stand: {}, duellGeloggt: {}
    };
    window.__EB = EB;

    const ELTERN_FELDER = ['pendingTest', 'pendingLessons', 'pendingLesson', 'pendingKurse', 'pendingKurs', 'studyGoal', 'aufgaben', 'suggestedKurs'];
    const BEREICH = { any: 'Alles', vokabeln: 'Vokabeln', wissen: 'Wissen', lesen: 'Lesen', suchsel: 'Suchsel', sonst: 'Sonstiges' };
    const BEREICH_ICON = { any: '🧩', vokabeln: '📚', wissen: '🧠', lesen: '📖', suchsel: '🔎', sonst: '✨' };
    const VIEW_BEREICH = { quiz: 'wissen', vokabeln: 'vokabeln', lesen: 'lesen', 'suchsel-play': 'suchsel' };
    const TYP_ICON = { zeit: '⏱', test: '📝', lektion: '📚', kurs: '🎓', schwaeche: '🎯' };
    const STATUS = {
        offen: ['offen', ''], begonnen: ['begonnen', 'eb-c-yel'], ueberfaellig: ['überfällig', 'eb-c-red'],
        erledigt: ['erledigt', 'eb-c-grn'], weg: ['ersetzt', '']
    };

    // ---------- kleine Helfer ----------
    const tag = (d) => (d ? new Date(d) : new Date()).toISOString().slice(0, 10);
    function h(s) {
        if (typeof esc === 'function') return esc(s);
        return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }
    const js = (s) => String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    function minuten(sec) {
        sec = Math.round(sec || 0);
        if (sec === 0) return '0 Min.';
        if (sec < 60) return sec + ' Sek.';
        const m = Math.round(sec / 60);
        if (m < 60) return m + ' Min.';
        return Math.floor(m / 60) + ' Std. ' + (m % 60 ? (m % 60) + ' Min.' : '');
    }
    function uhrzeit(t) { return new Date(t).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }); }
    function tagName(t) {
        const d = tag(t), heute = tag(), g = new Date(); g.setDate(g.getDate() - 1);
        if (d === heute) return 'Heute';
        if (d === tag(g)) return 'Gestern';
        return new Date(t).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'numeric' });
    }
    function datumKurz(iso) {
        if (!iso) return '';
        try { return new Date(iso + 'T12:00').toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'numeric' }); } catch (e) { return iso; }
    }
    function toast(t, art) { if (typeof showToast === 'function') showToast(t, art || 'success'); }
    function istTest() { return typeof testMode !== 'undefined' && !!testMode; }
    function profilRef(k) { return db.collection('parents').doc(currentParentUser.uid).collection('profiles').doc(k); }
    function katLabel(c) {
        c = String(c || '');
        if (c.startsWith('vocab:')) return 'Vokabeln ' + c.slice(6).replace(/_/g, ' ');
        if (c.startsWith('topic:')) { const t = c.split(':'); return t[2] || t[1]; }
        return (typeof labelFuerKategorie === 'function' && labelFuerKategorie(c)) ||
            (typeof CATEGORY_LABELS !== 'undefined' && CATEGORY_LABELS[c]) || c;
    }
    function katTitel(cats) {
        cats = cats || [];
        const t = cats.slice(0, 2).map(katLabel).join(', ');
        return t + (cats.length > 2 ? ' +' + (cats.length - 2) : '');
    }
    function lektion(id) { return (typeof LEKTIONEN !== 'undefined' && Array.isArray(LEKTIONEN)) ? LEKTIONEN.find(l => l.id === id) : null; }
    function kurs(id) { return (typeof KURSE !== 'undefined' && Array.isArray(KURSE)) ? KURSE.find(k => k.id === id) : null; }
    function neueId() { return 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
    function farbe(k, p) {
        if (p && p.discColor) return p.discColor;
        return typeof colorForPlayer === 'function' ? colorForPlayer(k) : '#6366f1';
    }
    function kuerzel(p) { return typeof initialsFor === 'function' ? initialsFor(p.name || '?') : (p.name || '?').slice(0, 2); }
    function klasse(p) { const g = typeof playerGrade === 'function' ? playerGrade(p) : null; return g ? 'Klasse ' + g : ''; }

    // ---------- Daten (live) ----------
    function daten() {
        const basis = Object.assign({}, (typeof ALL_PROFILES !== 'undefined' && ALL_PROFILES) || {}, EB.live || {});
        if (typeof activePlayerKey !== 'undefined' && activePlayerKey && typeof currentPlayer !== 'undefined' && currentPlayer) {
            basis[activePlayerKey] = Object.assign({}, EB.live && EB.live[activePlayerKey] || {}, currentPlayer);
        }
        return basis;
    }
    function kinder() {
        const d = daten();
        return Object.keys(d).filter(k => d[k] && !d[k].isGuest && d[k].profileRole !== 'eltern')
            .sort((a, b) => String(d[a].name || '').localeCompare(String(d[b].name || ''), 'de'));
    }

    function starteLiveSync() {
        if (EB.liveUnsub || typeof currentParentUser === 'undefined' || !currentParentUser) return;
        if (typeof isAnonGuest !== 'undefined' && isAnonGuest) return;
        try {
            EB.liveUnsub = db.collection('parents').doc(currentParentUser.uid).collection('profiles')
                .onSnapshot(snap => {
                    const neu = {};
                    snap.forEach(doc => { neu[doc.id] = doc.data(); });
                    EB.live = neu;
                    // Altes Dashboard arbeitet mit ALL_PROFILES – frisch halten, damit
                    // Zuweisungen nicht mit veralteten Listen überschreiben.
                    if (typeof ALL_PROFILES !== 'undefined' && ALL_PROFILES) {
                        Object.keys(neu).forEach(k => {
                            if (typeof activePlayerKey !== 'undefined' && k === activePlayerKey) return;
                            ALL_PROFILES[k] = neu[k];
                        });
                    }
                    planeRender();
                }, err => console.warn('Eltern-Bereich: Live-Daten', err));
        } catch (e) { console.warn(e); }
    }
    function stoppeLiveSync() {
        if (EB.liveUnsub) { try { EB.liveUnsub(); } catch (e) { } EB.liveUnsub = null; }
    }

    // Kind-Gerät: Zuweisungen der Eltern sofort übernehmen (ohne Neuladen).
    function starteEigenSync() {
        stoppeEigenSync();
        if (typeof currentParentUser === 'undefined' || !currentParentUser) return;
        if (typeof isAnonGuest !== 'undefined' && isAnonGuest) return;
        if (typeof activePlayerKey === 'undefined' || !activePlayerKey) return;
        const key = activePlayerKey;
        try {
            EB.eigenUnsub = profilRef(key).onSnapshot(snap => {
                if (!snap.exists || (snap.metadata && snap.metadata.hasPendingWrites)) return;
                if (activePlayerKey !== key || !currentPlayer) return;
                const d = snap.data() || {};
                let anders = false;
                ELTERN_FELDER.forEach(f => {
                    const a = JSON.stringify(currentPlayer[f] === undefined ? null : currentPlayer[f]);
                    const b = JSON.stringify(d[f] === undefined ? null : d[f]);
                    if (a !== b) { currentPlayer[f] = d[f] === undefined ? null : d[f]; anders = true; }
                });
                if (!anders) return;
                ['renderPendingTestCard', 'renderAufgabenKarte', 'renderStudyGoalCard', 'renderTodayStatusCard']
                    .forEach(fn => { if (typeof window[fn] === 'function') { try { window[fn](); } catch (e) { } } });
                pruefeBelohnungen(true);
            }, () => { });
        } catch (e) { }
    }
    function stoppeEigenSync() {
        if (EB.eigenUnsub) { try { EB.eigenUnsub(); } catch (e) { } EB.eigenUnsub = null; }
    }

    // ---------- Aufgaben-Status ----------
    function lektionenVon(a) {
        if (a.typ === 'lektion') return a.ids || [];
        if (a.typ === 'kurs' && typeof LEKTIONEN !== 'undefined' && Array.isArray(LEKTIONEN)) {
            const ids = [];
            (a.ids || []).forEach(kid => LEKTIONEN.forEach(l => { if (l.kurs === kid) ids.push(l.id); }));
            return ids;
        }
        return null;
    }
    function aufgabeStatus(a, p) {
        const heute = tag();
        const r = { code: 'offen', fort: 0, ergebnis: '', fertigAm: null, dauer: null };
        p = p || {};
        if (a.typ === 'zeit') {
            const s = (p.studyLog && p.studyLog[a.tag]) || 0;
            const need = (a.minuten || 0) * 60;
            r.fort = need ? Math.min(1, s / need) : 0;
            r.ergebnis = Math.floor(s / 60) + ' von ' + a.minuten + ' Min.';
            if (need && s >= need) { r.code = 'erledigt'; r.ergebnis = Math.round(s / 60) + ' Min.'; }
            else if (s > 0) r.code = 'begonnen';
            if (r.code !== 'erledigt' && a.tag < heute) r.code = 'ueberfaellig';
            return r;
        }
        if (a.typ === 'test') {
            const ab = Date.parse(a.ref || '') || a.erstellt || 0;
            const treffer = (p.testHistory || []).filter(x => (Date.parse(x.date) || 0) >= ab - 1000)
                .sort((x, y) => Date.parse(x.date) - Date.parse(y.date))[0];
            if (treffer) {
                r.code = 'erledigt'; r.fort = 1;
                r.ergebnis = treffer.correct + '/' + treffer.total + ' richtig';
                r.fertigAm = Date.parse(treffer.date); r.dauer = treffer.durationSec;
                return r;
            }
            if (!p.pendingTest || p.pendingTest.createdAt !== a.ref) { r.code = 'weg'; return r; }
        } else if (a.typ === 'lektion' || a.typ === 'kurs') {
            const ids = lektionenVon(a);
            const lek = p.lektionen || {};
            const ab = (a.erstellt || 0) - 60000;
            if (ids && ids.length) {
                const fertig = ids.filter(id => lek[id] && lek[id].bestanden && (lek[id].datum || 0) >= ab);
                const versucht = ids.filter(id => lek[id] && (lek[id].datum || 0) >= ab);
                r.fort = fertig.length / ids.length;
                r.ergebnis = fertig.length + ' von ' + ids.length + (ids.length === 1 ? ' Lektion' : ' Lektionen');
                if (fertig.length === ids.length) {
                    r.code = 'erledigt';
                    r.fertigAm = Math.max.apply(null, fertig.map(id => lek[id].datum || 0));
                    return r;
                }
                if (versucht.length) r.code = 'begonnen';
            }
            const offen = a.typ === 'lektion'
                ? (typeof offeneLektionen === 'function' ? offeneLektionen(p) : []).some(x => (a.ids || []).indexOf(x.lektionId) !== -1)
                : (typeof offeneKurse === 'function' ? offeneKurse(p) : []).some(x => (a.ids || []).indexOf(x.kursId) !== -1);
            if (!offen && !ids) { r.code = 'erledigt'; r.fort = 1; return r; }
            if (!offen && r.code !== 'begonnen') { r.code = 'weg'; return r; }
        }
        if (a.faellig && a.faellig < heute) r.code = 'ueberfaellig';
        return r;
    }

    // Alle Aufgaben eines Kindes: gespeicherte + noch offene Altzuweisungen ohne Eintrag.
    function aufgabenVon(k, p) {
        const liste = [];
        const auf = p.aufgaben || {};
        Object.keys(auf).forEach(id => { if (auf[id]) liste.push(Object.assign({ id, kind: k }, auf[id])); });
        const hatTest = liste.some(a => a.typ === 'test' && p.pendingTest && a.ref === p.pendingTest.createdAt);
        if (p.pendingTest && !hatTest) {
            liste.push({ id: 'alt-test', kind: k, typ: 'test', alt: true, ref: p.pendingTest.createdAt,
                titel: 'Test: ' + katTitel(p.pendingTest.categories), erstellt: Date.parse(p.pendingTest.createdAt) || 0, faellig: '' });
        }
        (typeof offeneLektionen === 'function' ? offeneLektionen(p) : []).forEach(x => {
            if (liste.some(a => a.typ === 'lektion' && (a.ids || []).indexOf(x.lektionId) !== -1)) return;
            liste.push({ id: 'alt-l-' + x.lektionId, kind: k, typ: 'lektion', alt: true, ids: [x.lektionId],
                titel: x.title || x.lektionId, erstellt: Date.parse(x.createdAt) || 0, faellig: x.faellig || '' });
        });
        (typeof offeneKurse === 'function' ? offeneKurse(p) : []).forEach(x => {
            if (liste.some(a => a.typ === 'kurs' && (a.ids || []).indexOf(x.kursId) !== -1)) return;
            liste.push({ id: 'alt-k-' + x.kursId, kind: k, typ: 'kurs', alt: true, ids: [x.kursId],
                titel: 'Kurs: ' + (x.title || x.kursId), erstellt: Date.parse(x.createdAt) || 0, faellig: x.faellig || '' });
        });
        const g = p.studyGoal;
        if (g && g.minutes && (!g.day || g.day === tag())
            && !liste.some(a => a.typ === 'zeit' && a.tag === (g.day || tag()))) {
            liste.push({ id: 'alt-zeit', kind: k, typ: 'zeit', alt: true, minuten: g.minutes, bereich: g.activity || 'any',
                tag: g.day || tag(), titel: g.minutes + ' Min. ' + (BEREICH[g.activity] || 'Lernen'), erstellt: Date.parse(g.createdAt) || 0, notiz: g.note || '' });
        }
        liste.forEach(a => { a.st = aufgabeStatus(a, p); });
        return liste;
    }
    function alleAufgaben() {
        const d = daten(), alle = [];
        kinder().forEach(k => alle.push.apply(alle, aufgabenVon(k, d[k])));
        const rang = { ueberfaellig: 0, begonnen: 1, offen: 2, erledigt: 3, weg: 4 };
        return alle.sort((a, b) => (rang[a.st.code] - rang[b.st.code]) || ((b.st.fertigAm || b.erstellt || 0) - (a.st.fertigAm || a.erstellt || 0)));
    }

    // Aufgabe speichern (Eltern-Gerät)
    function speichereAufgabe(k, eintrag) {
        const d = daten(); const p = d[k];
        if (!p || !currentParentUser) return;
        const id = neueId();
        const patch = {};
        patch['aufgaben.' + id] = eintrag;
        // Aufräumen: max. 40 Einträge, älteste erledigte zuerst raus
        const vorhanden = Object.keys(p.aufgaben || {});
        if (vorhanden.length >= 40) {
            const sortiert = vorhanden.map(i => Object.assign({ id: i }, p.aufgaben[i]))
                .sort((x, y) => (x.erstellt || 0) - (y.erstellt || 0));
            const zuViel = vorhanden.length - 39;
            sortiert.slice(0, zuViel).forEach(x => { patch['aufgaben.' + x.id] = firebase.firestore.FieldValue.delete(); });
        }
        if (typeof ALL_PROFILES !== 'undefined' && ALL_PROFILES[k]) {
            ALL_PROFILES[k].aufgaben = Object.assign({}, ALL_PROFILES[k].aufgaben || {}, { [id]: eintrag });
        }
        if (EB.live && EB.live[k]) EB.live[k].aufgaben = Object.assign({}, EB.live[k].aufgaben || {}, { [id]: eintrag });
        profilRef(k).update(patch).catch(e => console.warn('Aufgabe speichern', e));
        planeRender();
    }

    // ---------- Bestehende Zuweisungen umhüllen ----------
    function wizCoins() { return (EB.wiz && EB.wiz.coins) || 0; }
    function nachZuweisung() { if (EB.wiz) schliesseWiz(true); planeRender(); }

    function umhuelle(name, vorher, nachher) {
        const orig = window[name];
        if (typeof orig !== 'function' || orig.__eb) return;
        const neu = function () {
            let ctx = null;
            try { ctx = vorher(); } catch (e) { }
            const r = orig.apply(this, arguments);
            try { if (ctx) nachher(ctx); } catch (e) { console.warn('Eltern-Bereich', name, e); }
            return r;
        };
        neu.__eb = true;
        window[name] = neu;
    }

    function installiereZuweisungsHuellen() {
        umhuelle('assignTestFromDashboard', () => {
            const k = (document.getElementById('dash-test-profile') || {}).value;
            const p = k && ALL_PROFILES[k];
            const faellig = (document.getElementById('dash-test-deadline') || {}).value || '';
            return { k, faellig, vorher: p && p.pendingTest ? p.pendingTest.createdAt : null };
        }, ctx => {
            const p = ALL_PROFILES[ctx.k];
            const pt = p && p.pendingTest;
            if (!pt || pt.createdAt === ctx.vorher) return;
            const schwach = !!(EB.wiz && EB.wiz.typ === 'schwaeche');
            speichereAufgabe(ctx.k, {
                typ: 'test', ref: pt.createdAt, kategorien: pt.categories || [],
                minuten: Math.round((pt.timeLimitSeconds || 600) / 60),
                titel: (schwach ? 'Schwächen üben: ' : 'Test: ') + katTitel(pt.categories),
                erstellt: Date.now(), faellig: ctx.faellig || (EB.wiz && EB.wiz.faellig) || '', coins: wizCoins()
            });
            nachZuweisung();
        });
        umhuelle('assignLessonFromDashboard', () => {
            const k = (document.getElementById('dash-test-profile') || {}).value || activePlayerKey;
            const ids = typeof dashAuswahlIds === 'function' ? dashAuswahlIds('dash-lesson-id') : [];
            const faellig = (document.getElementById('dash-lesson-deadline') || {}).value || '';
            return { k, ids, faellig };
        }, ctx => {
            const p = ALL_PROFILES[ctx.k];
            if (!p || !ctx.ids.length) return;
            const offen = offeneLektionen(p).map(x => x.lektionId);
            const ids = ctx.ids.filter(id => offen.indexOf(id) !== -1);
            if (!ids.length) return;
            const titel = ids.map(id => { const l = lektion(id); return l ? l.title : id; });
            speichereAufgabe(ctx.k, {
                typ: 'lektion', ids, titel: (ids.length === 1 ? 'Lektion: ' : ids.length + ' Lektionen: ') + titel.slice(0, 2).join(', ') + (titel.length > 2 ? ' …' : ''),
                erstellt: Date.now(), faellig: ctx.faellig, coins: wizCoins()
            });
            nachZuweisung();
        });
        umhuelle('assignKursFromDashboard', () => {
            const k = (document.getElementById('dash-test-profile') || {}).value || activePlayerKey;
            const ids = typeof dashAuswahlIds === 'function' ? dashAuswahlIds('dash-kurszuw-id') : [];
            const faellig = (document.getElementById('dash-kurs-deadline') || {}).value || '';
            return { k, ids, faellig };
        }, ctx => {
            const p = ALL_PROFILES[ctx.k];
            if (!p || !ctx.ids.length) return;
            const offen = offeneKurse(p).map(x => x.kursId);
            const ids = ctx.ids.filter(id => offen.indexOf(id) !== -1);
            if (!ids.length) return;
            const titel = ids.map(id => { const x = kurs(id); return x ? x.title : id; });
            speichereAufgabe(ctx.k, {
                typ: 'kurs', ids, titel: 'Kurs: ' + titel.slice(0, 2).join(', ') + (titel.length > 2 ? ' …' : ''),
                erstellt: Date.now(), faellig: ctx.faellig, coins: wizCoins()
            });
            nachZuweisung();
        });
        umhuelle('assignStudyGoalFromDashboard', () => {
            const k = (document.getElementById('dash-goal-profile') || {}).value;
            const p = k && ALL_PROFILES[k];
            return { k, vorher: p && p.studyGoal ? p.studyGoal.createdAt : null };
        }, ctx => {
            const p = ALL_PROFILES[ctx.k];
            const g = p && p.studyGoal;
            if (!g || g.createdAt === ctx.vorher) return;
            speichereAufgabe(ctx.k, {
                typ: 'zeit', minuten: g.minutes, bereich: g.activity || 'any', tag: g.day || tag(), notiz: g.note || '',
                titel: g.minutes + ' Min. ' + (BEREICH[g.activity] || 'Lernen'), erstellt: Date.now(), faellig: g.day || tag(), coins: wizCoins()
            });
        });
    }

    // ---------- Kind-Gerät: Verlauf, Lernbereiche, Belohnungen ----------
    function protokoll(k, ti, d) {
        if (typeof currentPlayer === 'undefined' || !currentPlayer) return;
        if (typeof isAnonGuest !== 'undefined' && isAnonGuest) return;
        const v = Array.isArray(currentPlayer.verlauf) ? currentPlayer.verlauf : (currentPlayer.verlauf = []);
        v.unshift({ t: Date.now(), k, ti: String(ti || '').slice(0, 90), d: String(d || '').slice(0, 90) });
        if (v.length > 150) v.length = 150;
    }
    window.ebProtokoll = protokoll;

    let lernAkt = null;
    function lernTitel(b) {
        if (b === 'wissen') {
            const c = (typeof currentQuestions !== 'undefined' && currentQuestions && currentQuestions[0]) ? currentQuestions[0].category : '';
            return c ? 'Quiz · ' + katLabel(c) : 'Wissens-Quiz';
        }
        return { vokabeln: 'Vokabeltraining', lesen: 'Lesen', suchsel: 'Suchsel' }[b] || 'Lernen';
    }

    function installiereKindHuellen() {
        const origTrack = window.trackStudySeconds;
        if (typeof origTrack === 'function' && !origTrack.__eb) {
            const neu = function (sec) {
                try {
                    if (!istTest() && currentPlayer && sec > 0) {
                        const b = (lernAkt && lernAkt.bereich) || 'sonst';
                        const t = tag();
                        const m = currentPlayer.studyLogBereich || (currentPlayer.studyLogBereich = {});
                        const tg = m[t] || (m[t] = {});
                        tg[b] = (tg[b] || 0) + Math.round(sec);
                        const keys = Object.keys(m).sort();
                        while (keys.length > 60) delete m[keys.shift()];
                        if (lernAkt) lernAkt.sec += Math.round(sec);
                    }
                } catch (e) { }
                return origTrack.apply(this, arguments);
            };
            neu.__eb = true;
            window.trackStudySeconds = neu;
        }
        const origView = window.onStudyViewChange;
        if (typeof origView === 'function' && !origView.__eb) {
            const neu = function (viewId) {
                const b = (VIEW_BEREICH[viewId] && !istTest()) ? VIEW_BEREICH[viewId] : null;
                if (b && !lernAkt) lernAkt = { bereich: b, sec: 0, ti: lernTitel(b) };
                const r = origView.apply(this, arguments);
                if (lernAkt && lernAkt.bereich !== b) {
                    const a = lernAkt; lernAkt = null;
                    if (a.sec >= 60) {
                        protokoll('lernen', a.ti, minuten(a.sec));
                        if (typeof savePlayerProgress === 'function') savePlayerProgress();
                    }
                    if (b) lernAkt = { bereich: b, sec: 0, ti: lernTitel(b) };
                } else if (lernAkt && lernAkt.bereich === 'wissen' && lernAkt.sec === 0) {
                    lernAkt.ti = lernTitel('wissen');
                }
                return r;
            };
            neu.__eb = true;
            window.onStudyViewChange = neu;
        }
        const origFinish = window.finishTest;
        if (typeof origFinish === 'function' && !origFinish.__eb) {
            const neu = function () {
                const r = origFinish.apply(this, arguments);
                try {
                    const x = currentPlayer && currentPlayer.testHistory && currentPlayer.testHistory[0];
                    if (x) {
                        protokoll('test', 'Test · ' + katTitel(x.categories), x.correct + '/' + x.total + ' richtig · ' + minuten(x.durationSec));
                        savePlayerProgress();
                    }
                } catch (e) { }
                return r;
            };
            neu.__eb = true;
            window.finishTest = neu;
        }
        const origDuell = window.renderLiveDuelFinalResult;
        if (typeof origDuell === 'function' && !origDuell.__eb) {
            const neu = function (data) {
                const r = origDuell.apply(this, arguments);
                try {
                    const id = (typeof liveDuelRef !== 'undefined' && liveDuelRef && liveDuelRef.id) || (data && data.createdAt) || '';
                    if (id && !EB.duellGeloggt[id] && data && data.players && activePlayerKey && data.players[activePlayerKey]) {
                        EB.duellGeloggt[id] = 1;
                        const alle = Object.values(data.players);
                        const ich = data.players[activePlayerKey];
                        const platz = alle.filter(p => (p.score || 0) > (ich.score || 0)).length + 1;
                        const art = data.subject === 'vokabel' ? 'Vokabel-Duell' : data.type === 'scrabble' ? 'Wort-Duell'
                            : data.type === 'wortraten' ? 'Wort-Rätsel' : data.type === 'kopf' ? 'Kopfrechen-Duell' : 'Quiz-Duell';
                        const gegner = alle.filter(p => p !== ich).map(p => p.name).filter(Boolean).slice(0, 3).join(', ');
                        protokoll('spiel', art + (gegner ? ' mit ' + gegner : ''),
                            data.mode === 'coop' ? 'gemeinsam · ' + (ich.score || 0) + ' Pkt.' : 'Platz ' + platz + ' von ' + alle.length + ' · ' + (ich.score || 0) + ' Pkt.');
                        savePlayerProgress();
                    }
                } catch (e) { }
                return r;
            };
            neu.__eb = true;
            window.renderLiveDuelFinalResult = neu;
        }
        const origSave = window.savePlayerProgress;
        if (typeof origSave === 'function' && !origSave.__eb) {
            let laeuft = false;
            const neu = function () {
                if (laeuft || typeof currentPlayer === 'undefined' || !currentPlayer) return origSave.apply(this, arguments);
                laeuft = true;
                try { vergleicheStand(); pruefeBelohnungen(false); } catch (e) { }
                // „aufgaben“ gehören den Eltern – das Kind schreibt sie nie zurück,
                // sonst würde ein älterer Stand neue Aufgaben überschreiben.
                const auf = currentPlayer.aufgaben;
                const hatte = Object.prototype.hasOwnProperty.call(currentPlayer, 'aufgaben');
                delete currentPlayer.aufgaben;
                try { return origSave.apply(this, arguments); }
                finally {
                    if (hatte) currentPlayer.aufgaben = auf;
                    laeuft = false;
                }
            };
            neu.__eb = true;
            window.savePlayerProgress = neu;
        }
        const origSel = window.selectProfile;
        if (typeof origSel === 'function' && !origSel.__eb) {
            const neu = async function (key) {
                EB.stand = {};
                const r = await origSel.apply(this, arguments);
                starteEigenSync();
                return r;
            };
            neu.__eb = true;
            window.selectProfile = neu;
        }
    }

    // Lektionen und Belohnungen: Änderungen seit dem letzten Speichern erkennen.
    function vergleicheStand() {
        const k = activePlayerKey;
        if (!k) return;
        const lek = currentPlayer.lektionen || {};
        const rew = (currentPlayer.redeemedRewards && currentPlayer.redeemedRewards[0]) || null;
        const st = EB.stand[k];
        const lekStand = {};
        Object.keys(lek).forEach(id => { lekStand[id] = (lek[id] && lek[id].datum) || 0; });
        if (st) {
            Object.keys(lek).forEach(id => {
                const x = lek[id];
                if (!x || !x.datum || x.datum <= (st.lek[id] || 0)) return;
                const l = lektion(id);
                protokoll('lektion', 'Lektion · ' + (l ? l.title : id), (x.bestanden ? 'bestanden' : 'nicht bestanden') + ' · ' + (x.pct || 0) + ' %');
            });
            const rewKey = rew ? rew.date + '|' + rew.name : '';
            if (rew && rewKey !== st.rew) {
                protokoll('belohnung', 'Belohnung eingelöst: ' + (rew.name || ''), '−' + (rew.cost || 0) + (rew.currency === 'zeit' ? ' Min.' : ' Coins'));
            }
        }
        EB.stand[k] = { lek: lekStand, rew: rew ? rew.date + '|' + rew.name : '' };
    }

    function pruefeBelohnungen(speichern) {
        if (typeof currentPlayer === 'undefined' || !currentPlayer || !currentPlayer.aufgaben) return;
        if (typeof isAnonGuest !== 'undefined' && isAnonGuest) return;
        const auf = currentPlayer.aufgaben;
        const bel = currentPlayer.aufgabenBelohnt || (currentPlayer.aufgabenBelohnt = {});
        let summe = 0;
        Object.keys(auf).forEach(id => {
            const a = auf[id];
            if (!a || bel[id]) return;
            const st = aufgabeStatus(a, currentPlayer);
            if (st.code !== 'erledigt') return;
            bel[id] = Date.now();
            protokoll('aufgabe', 'Aufgabe erledigt: ' + (a.titel || ''), a.coins > 0 ? '+' + a.coins + ' Coins' : '');
            if (a.coins > 0) {
                currentPlayer.coins = (currentPlayer.coins || 0) + a.coins;
                currentPlayer.xp = (currentPlayer.xp || 0) + a.coins;
                summe += a.coins;
            }
        });
        if (summe > 0) {
            toast('✅ Aufgabe erledigt: +' + summe + ' Coins!', 'success');
            const c = document.getElementById('menu-coins');
            if (c) c.innerText = currentPlayer.coins || 0;
        }
        if (speichern && summe >= 0 && typeof savePlayerProgress === 'function') savePlayerProgress();
    }

    // ---------- Darstellung ----------
    function css() {
        if (document.getElementById('eb-style')) return;
        const s = document.createElement('style');
        s.id = 'eb-style';
        s.textContent = `
#eb-root{max-width:560px;margin:0 auto;padding-bottom:84px;color:#eef0ff}
#eb-root h1{font-size:21px;font-weight:900;margin:2px 0}
#eb-root .eb-h2{font-size:12px;font-weight:800;color:#9aa0c3;text-transform:uppercase;letter-spacing:.07em;margin:18px 2px 8px}
#eb-root .eb-sub{color:#9aa0c3;font-size:13px}
#eb-root .eb-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);border-radius:18px;padding:14px;margin:10px 0}
#eb-root .eb-card.eb-klick{cursor:pointer;transition:background .15s}#eb-root .eb-card.eb-klick:active{background:rgba(255,255,255,.1)}
#eb-root .eb-row{display:flex;align-items:center;gap:10px}#eb-root .eb-sp{flex:1;min-width:0}
#eb-root .eb-ava{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-weight:900;color:#0b1020;flex-shrink:0}
#eb-root .eb-amp{width:12px;height:12px;border-radius:50%;flex-shrink:0}
#eb-root .eb-bar{height:8px;border-radius:6px;background:rgba(255,255,255,.08);overflow:hidden}#eb-root .eb-bar>i{display:block;height:100%;background:linear-gradient(90deg,#6366f1,#8b5cf6)}
#eb-root .eb-bar.eb-gruen>i{background:linear-gradient(90deg,#10b981,#34d399)}
#eb-root .eb-chip{display:inline-block;font-size:12px;font-weight:800;padding:3px 9px;border-radius:999px;background:rgba(255,255,255,.08);margin:6px 4px 0 0;color:#d6d9f5}
#eb-root .eb-c-red{background:rgba(239,68,68,.18);color:#fca5a5}#eb-root .eb-c-grn{background:rgba(34,197,94,.18);color:#86efac}
#eb-root .eb-c-yel{background:rgba(234,179,8,.18);color:#fde047}#eb-root .eb-c-ind{background:rgba(99,102,241,.22);color:#c7d2fe}
#eb-root .eb-btn{border:0;border-radius:14px;padding:13px 14px;font-weight:900;color:#fff;background:#6366f1;width:100%;font-size:15px;cursor:pointer}
#eb-root .eb-btn.eb-sek{background:rgba(255,255,255,.08)}#eb-root .eb-btn.eb-amb{background:#f59e0b;color:#1b1300}
#eb-root .eb-mini{border:0;border-radius:10px;padding:7px 10px;font-weight:800;font-size:12px;color:#fff;background:rgba(255,255,255,.1);cursor:pointer;white-space:nowrap}
#eb-root .eb-nav{position:fixed;left:0;right:0;bottom:0;z-index:40;background:rgba(15,16,36,.97);border-top:1px solid rgba(255,255,255,.1);padding-bottom:env(safe-area-inset-bottom)}
#eb-root .eb-nav>div{max-width:560px;margin:0 auto;display:flex}
#eb-root .eb-nav button{flex:1;background:none;border:0;color:#9aa0c3;padding:9px 0 10px;font-size:11px;font-weight:800;cursor:pointer}
#eb-root .eb-nav button b{display:block;font-size:20px;line-height:1.2}#eb-root .eb-nav button.eb-on{color:#fff}
#eb-root .eb-seg{display:flex;gap:6px;overflow-x:auto;padding:2px 0 6px}#eb-root .eb-seg button{white-space:nowrap;border:1px solid rgba(255,255,255,.12);background:transparent;color:#9aa0c3;border-radius:999px;padding:6px 12px;font-weight:800;font-size:13px;cursor:pointer}
#eb-root .eb-seg button.eb-on{background:#fff;color:#111}
#eb-root .eb-tl{border-left:2px solid rgba(255,255,255,.1);margin-left:8px;padding-left:14px}
#eb-root .eb-it{position:relative;margin:0 0 14px}#eb-root .eb-it:before{content:"";position:absolute;left:-21px;top:5px;width:10px;height:10px;border-radius:50%;background:#6366f1}
#eb-root .eb-it.eb-k-spiel:before,#eb-root .eb-it.eb-k-belohnung:before{background:#f59e0b}#eb-root .eb-it.eb-k-test:before{background:#22c55e}#eb-root .eb-it.eb-k-aufgabe:before{background:#10b981}
#eb-root .eb-days{display:flex;align-items:flex-end;gap:8px;height:120px;margin-top:10px}
#eb-root .eb-days div{flex:1;text-align:center;font-size:11px;color:#9aa0c3;display:flex;flex-direction:column;justify-content:flex-end;height:100%}
#eb-root .eb-days i{display:block;border-radius:6px 6px 2px 2px;background:linear-gradient(#8b5cf6,#6366f1);margin-bottom:4px;min-height:2px}
#eb-root .eb-days i.eb-ziel{background:linear-gradient(#34d399,#10b981)}
#eb-root .eb-days span{font-size:10px;color:#c7d2fe;margin-bottom:2px}
#eb-modal{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:flex-end;justify-content:center;z-index:60}
#eb-modal .eb-sheet{background:#17183a;width:100%;max-width:560px;border-radius:22px 22px 0 0;padding:18px 16px calc(22px + env(safe-area-inset-bottom));max-height:90vh;overflow:auto;color:#eef0ff}
#eb-modal .eb-opt{display:flex;gap:12px;align-items:center;border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:12px;margin:8px 0;cursor:pointer}
#eb-modal .eb-opt.eb-on{border-color:#6366f1;background:rgba(99,102,241,.16)}#eb-modal .eb-opt b.eb-i{font-size:24px}
#eb-modal .eb-steps{display:flex;gap:6px;margin:8px 0 12px}#eb-modal .eb-steps i{flex:1;height:4px;border-radius:4px;background:rgba(255,255,255,.12)}#eb-modal .eb-steps i.eb-on{background:#f59e0b}
#eb-modal .eb-seg{display:flex;gap:6px;flex-wrap:wrap;padding:2px 0 6px}#eb-modal .eb-seg button{border:1px solid rgba(255,255,255,.12);background:transparent;color:#9aa0c3;border-radius:999px;padding:7px 13px;font-weight:800;font-size:13px;cursor:pointer}
#eb-modal .eb-seg button.eb-on{background:#fff;color:#111}
#eb-modal .eb-sub{color:#9aa0c3;font-size:13px;margin-top:10px}
#eb-modal .eb-btn{border:0;border-radius:14px;padding:13px 14px;font-weight:900;color:#fff;background:#6366f1;width:100%;font-size:15px;cursor:pointer}
#eb-modal .eb-btn.eb-sek{background:rgba(255,255,255,.08)}#eb-modal .eb-mini{border:0;border-radius:10px;padding:7px 10px;font-weight:800;font-size:12px;color:#fff;background:rgba(255,255,255,.1);cursor:pointer}
#eb-modal input,#eb-modal select{width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#eef0ff;padding:11px;font-size:15px}
#eb-modal .eb-ava{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-weight:900;color:#0b1020;flex-shrink:0}
#eb-modal .eb-alt{margin-top:10px}
#eb-modal .eb-alt .hidden{display:none}
`;
        document.head.appendChild(s);
    }

    function root() { return document.getElementById('eb-root'); }
    function planeRender() {
        if (EB.renderTimer) clearTimeout(EB.renderTimer);
        EB.renderTimer = setTimeout(() => { EB.renderTimer = null; render(); }, 120);
    }
    function aufView() { const v = document.getElementById('view-eltern'); return v && !v.classList.contains('hidden'); }

    function render() {
        const r = root();
        if (!r || !aufView()) return;
        css();
        const tabs = { uebersicht: renderUebersicht, kind: renderKind, aufgaben: renderAufgaben, verlauf: renderVerlauf, belohnungen: renderBelohnungen, einstellungen: renderEinstellungen };
        const inhalt = (tabs[EB.tab] || renderUebersicht)();
        const navTab = EB.tab === 'kind' ? 'uebersicht' : EB.tab;
        const nav = [['uebersicht', '🏠', 'Übersicht'], ['aufgaben', '📋', 'Aufgaben'], ['verlauf', '🕒', 'Verlauf'], ['belohnungen', '🎁', 'Belohnungen'], ['einstellungen', '⚙️', 'Einstellungen']]
            .map(n => `<button class="${n[0] === navTab ? 'eb-on' : ''}" onclick="ebTab('${n[0]}')"><b>${n[1]}</b>${n[2]}</button>`).join('');
        const scroll = window.scrollY;
        const kopf = `<div class="eb-row" style="padding-top:4px"><button class="eb-mini" onclick="ebZurApp()">‹ Zur App</button><span class="eb-sp" style="text-align:center;font-weight:900;color:#fbbf24">👨‍👩‍👧‍👦 Eltern-Bereich</span><button class="eb-mini" onclick="ebSperren()" title="Eltern-Bereich sperren">🔒</button></div>`;
        r.innerHTML = kopf + inhalt + `<nav class="eb-nav"><div>${nav}</div></nav>`;
        if (EB._behalteScroll) window.scrollTo(0, scroll);
        EB._behalteScroll = true;
    }

    function ampel(p, auf) {
        const heute = tag();
        const ue = auf.some(a => a.st.code === 'ueberfaellig');
        const g = p.studyGoal && p.studyGoal.minutes && (!p.studyGoal.day || p.studyGoal.day === heute) ? p.studyGoal.minutes : 0;
        const s = (p.studyLog && p.studyLog[heute]) || 0;
        const tage = p.lastActive ? (Date.now() - p.lastActive) / 86400000 : 99;
        if (ue || tage >= 2) return ['#ef4444', ue ? 'überfällige Aufgabe' : 'seit ' + Math.floor(tage) + ' Tagen nichts'];
        if (g ? s >= g * 60 : s >= 15 * 60) return ['#22c55e', 'Ziel erreicht'];
        return ['#eab308', 'heute noch nicht fertig'];
    }

    function aktivText(p) {
        if (typeof activityLabel === 'function') return activityLabel(p.lastActive).text;
        return p.lastActive ? 'zuletzt ' + new Date(p.lastActive).toLocaleString('de-DE') : 'noch nicht gespielt';
    }

    function hinweise() {
        const d = daten(), out = [];
        kinder().forEach(k => {
            const p = d[k];
            aufgabenVon(k, p).forEach(a => { if (a.st.code === 'ueberfaellig') out.push({ k, txt: `${h(p.name)}: „${h(a.titel)}“ ist überfällig`, aktion: `ebTab('aufgaben')`, knopf: 'Ansehen' }); });
            const sw = schwaechen(p, 1)[0];
            if (sw && sw.pct < 0.5 && sw.attempts >= 5) out.push({ k, txt: `${h(p.name)}: nur ${Math.round(sw.pct * 100)} % richtig bei „${h(katLabel(sw.cat))}“`, aktion: `ebUeben('${js(k)}','${js(sw.cat)}')`, knopf: 'Üben lassen' });
            const tage = p.lastActive ? Math.floor((Date.now() - p.lastActive) / 86400000) : null;
            if (tage !== null && tage >= 3) out.push({ k, txt: `${h(p.name)} war seit ${tage} Tagen nicht aktiv`, aktion: `ebWizard(null,'${js(k)}')`, knopf: 'Aufgabe geben' });
        });
        return out.slice(0, 4);
    }

    function renderUebersicht() {
        const d = daten();
        const ks = kinder();
        const heute = tag();
        let gesamt = 0;
        ks.forEach(k => { gesamt += (d[k].studyLog && d[k].studyLog[heute]) || 0; });
        const std = new Date().getHours();
        const gruss = std < 11 ? 'Guten Morgen' : std < 18 ? 'Hallo' : 'Guten Abend';
        let html = `<div class="eb-row" style="margin-top:6px"><div class="eb-sp"><h1>${gruss} 👋</h1><div class="eb-sub">Heute bisher ${minuten(gesamt)} gelernt · alle Kinder</div></div></div>
            <button class="eb-btn eb-amb" style="margin-top:12px" onclick="ebWizard()">＋ Neue Aufgabe</button>`;
        const hw = hinweise();
        if (hw.length) {
            html += `<div class="eb-card" style="border-color:rgba(239,68,68,.35)"><b>⚠️ Braucht Aufmerksamkeit</b>` +
                hw.map(x => `<div class="eb-row" style="margin-top:8px"><span class="eb-sp eb-sub" style="color:#e5e7ff">${x.txt}</span><button class="eb-mini" onclick="${x.aktion}">${x.knopf}</button></div>`).join('') + `</div>`;
        }
        html += `<div class="eb-h2">Kinder</div>`;
        if (!ks.length) html += `<div class="eb-card eb-sub">Noch keine Kinder-Profile angelegt.</div>`;
        ks.forEach(k => {
            const p = d[k];
            const auf = aufgabenVon(k, p);
            const [farbeAmp, ampTxt] = ampel(p, auf);
            const g = p.studyGoal && p.studyGoal.minutes && (!p.studyGoal.day || p.studyGoal.day === heute) ? p.studyGoal.minutes : 0;
            const s = (p.studyLog && p.studyLog[heute]) || 0;
            const ziel = g || 0;
            const pct = ziel ? Math.min(100, Math.round(s / (ziel * 60) * 100)) : Math.min(100, Math.round(s / 1800 * 100));
            const zaehl = c => auf.filter(a => a.st.code === c).length;
            const erl = auf.filter(a => a.st.code === 'erledigt' && (a.st.fertigAm ? tag(a.st.fertigAm) === heute : a.tag === heute)).length;
            html += `<div class="eb-card eb-klick" onclick="ebKind('${js(k)}')">
                <div class="eb-row"><div class="eb-ava" style="background:${h(farbe(k, p))}">${h(kuerzel(p))}</div>
                <div class="eb-sp"><b>${h(p.name)}</b> <span class="eb-sub">${klasse(p) ? '· ' + klasse(p) : ''}</span><div class="eb-sub">${h(aktivText(p))}</div></div>
                <span class="eb-amp" title="${h(ampTxt)}" style="background:${farbeAmp}"></span></div>
                <div class="eb-row" style="margin-top:10px"><div class="eb-sp eb-bar ${ziel && s >= ziel * 60 ? 'eb-gruen' : ''}"><i style="width:${pct}%"></i></div>
                <span class="eb-sub">${ziel ? Math.floor(s / 60) + '/' + ziel + ' Min.' + (s >= ziel * 60 ? ' ✓' : '') : Math.floor(s / 60) + ' Min. heute'}</span></div>
                ${zaehl('ueberfaellig') ? `<span class="eb-chip eb-c-red">${zaehl('ueberfaellig')} überfällig</span>` : ''}
                ${zaehl('begonnen') ? `<span class="eb-chip eb-c-yel">${zaehl('begonnen')} begonnen</span>` : ''}
                ${zaehl('offen') ? `<span class="eb-chip">${zaehl('offen')} offen</span>` : ''}
                ${erl ? `<span class="eb-chip eb-c-grn">${erl} heute erledigt</span>` : ''}
                ${p.streak ? `<span class="eb-chip eb-c-ind">🔥 ${typeof p.streak === 'object' ? (p.streak.count || p.streak.days || '') : p.streak} Tage</span>` : ''}
            </div>`;
        });
        html += `<div class="eb-sub" style="margin:8px 4px">Ampel: grün = Tagesziel erreicht · gelb = noch dabei · rot = überfällig oder seit 2 Tagen nichts gemacht.</div>`;
        return html;
    }

    function schwaechen(p, n) {
        const st = (p && p.stats) || {};
        return Object.keys(st).map(cat => ({ cat, attempts: st[cat].attempts || 0, pct: st[cat].attempts ? (st[cat].correct || 0) / st[cat].attempts : 0 }))
            .filter(x => x.attempts >= 3 && x.pct < 0.7).sort((a, b) => a.pct - b.pct).slice(0, n || 3);
    }
    function staerken(p, n) {
        const st = (p && p.stats) || {};
        return Object.keys(st).map(cat => ({ cat, attempts: st[cat].attempts || 0, pct: st[cat].attempts ? (st[cat].correct || 0) / st[cat].attempts : 0 }))
            .filter(x => x.attempts >= 3 && x.pct >= 0.8).sort((a, b) => b.pct - a.pct || b.attempts - a.attempts).slice(0, n || 2);
    }

    function wochenTage(versatz) {
        const jetzt = new Date();
        const idx = (jetzt.getDay() + 6) % 7;
        const montag = new Date(jetzt); montag.setDate(jetzt.getDate() - idx - 7 * (versatz || 0));
        const out = [];
        for (let i = 0; i < 7; i++) { const x = new Date(montag); x.setDate(montag.getDate() + i); out.push(tag(x)); }
        return out;
    }

    function aufgabeKarte(a, mitName) {
        const d = daten(); const p = d[a.kind] || {};
        const [txt, cls] = STATUS[a.st.code] || STATUS.offen;
        const offen = a.st.code !== 'erledigt' && a.st.code !== 'weg';
        let zeile2 = [];
        if (mitName) zeile2.push(h(p.name || ''));
        if (a.st.code === 'erledigt') {
            if (a.st.fertigAm) zeile2.push('erledigt ' + tagName(a.st.fertigAm).replace(/^(Heute|Gestern)$/, m => m.toLowerCase()) + ' ' + uhrzeit(a.st.fertigAm));
            if (a.st.dauer) zeile2.push(minuten(a.st.dauer));
            if (a.typ === 'zeit' && a.st.ergebnis) zeile2.push(a.st.ergebnis + ' gelernt');
        } else {
            if (a.typ === 'zeit') zeile2.push(a.tag === tag() ? 'heute' : datumKurz(a.tag));
            else if (a.faellig) zeile2.push('bis ' + datumKurz(a.faellig));
            if (a.st.ergebnis && a.typ !== 'test') zeile2.push(a.st.ergebnis);
        }
        if (a.coins > 0) zeile2.push(a.st.code === 'erledigt' ? '🪙 ' + a.coins + ' Coins bekommen' : '🪙 +' + a.coins + ' Coins');
        const chip = a.st.code === 'erledigt' && a.st.ergebnis && a.typ !== 'zeit' ? '✓ ' + a.st.ergebnis : txt;
        return `<div class="eb-card" style="${a.st.code === 'ueberfaellig' ? 'border-color:rgba(239,68,68,.35)' : ''}">
            <div class="eb-row"><b class="eb-sp">${TYP_ICON[a.typ] || '📌'} ${h(a.titel)}</b><span class="eb-chip ${cls}" style="margin-top:0">${h(chip)}</span></div>
            <div class="eb-sub" style="margin-top:3px">${zeile2.join(' · ')}</div>
            ${offen && a.st.fort > 0 && a.st.fort < 1 ? `<div class="eb-bar" style="margin-top:8px"><i style="width:${Math.round(a.st.fort * 100)}%"></i></div>` : ''}
            <div class="eb-row" style="margin-top:10px;gap:8px;flex-wrap:wrap">
                ${offen ? `<button class="eb-mini" onclick="ebErinnern('${js(a.kind)}','${js(a.id)}')">📤 Erinnern</button>` : ''}
                <button class="eb-mini" onclick="ebEntfernen('${js(a.kind)}','${js(a.id)}')">${offen ? '↩️ Zurücknehmen' : '🗑 Aus Liste'}</button>
            </div></div>`;
    }

    function verlaufEintrag(e, name) {
        const icon = { lernen: '📘', test: '📝', lektion: '📚', spiel: '🎮', belohnung: '🎁', aufgabe: '✅' }[e.k] || '•';
        return `<div class="eb-it eb-k-${h(e.k)}"><b>${icon} ${name ? h(name) + ' · ' : ''}${h(e.ti)}</b><div class="eb-sub">${uhrzeit(e.t)}${e.d ? ' · ' + h(e.d) : ''}</div></div>`;
    }

    function renderKind() {
        const d = daten();
        const k = EB.kind;
        const p = d[k];
        if (!p) { EB.tab = 'uebersicht'; return renderUebersicht(); }
        const lv = typeof getLevelInfo === 'function' ? getLevelInfo(p.xp || 0) : null;
        let html = `<button class="eb-mini" style="margin-top:6px" onclick="ebTab('uebersicht')">‹ Übersicht</button>
            <div class="eb-row" style="margin-top:10px"><div class="eb-ava" style="background:${h(farbe(k, p))}">${h(kuerzel(p))}</div>
            <div class="eb-sp"><h1>${h(p.name)}</h1><div class="eb-sub">${[klasse(p), lv ? lv.current.icon + ' ' + lv.current.name : '', (p.coins || 0) + ' Coins'].filter(Boolean).join(' · ')}</div></div>
            <button class="eb-mini" onclick="ebWizard(null,'${js(k)}')">＋ Aufgabe</button></div>`;

        // Woche
        const tage = wochenTage(0), vor = wochenTage(1);
        const sec = t => (p.studyLog && p.studyLog[t]) || 0;
        const summe = tage.reduce((s, t) => s + sec(t), 0), summeVor = vor.reduce((s, t) => s + sec(t), 0);
        const max = Math.max(1800, ...tage.map(sec));
        const zielMin = (p.studyGoal && p.studyGoal.minutes) || 20;
        let trend = '';
        if (summeVor > 0) { const dlt = Math.round((summe - summeVor) / summeVor * 100); trend = `<span class="eb-chip ${dlt >= 0 ? 'eb-c-grn' : 'eb-c-red'}" style="margin:0">${dlt >= 0 ? '+' : ''}${dlt} % zur Vorwoche</span>`; }
        const wt = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
        html += `<div class="eb-h2">Diese Woche</div><div class="eb-card"><div class="eb-row"><b class="eb-sp">${minuten(summe)}</b>${trend}</div>
            <div class="eb-days">${tage.map((t, i) => { const s = sec(t); return `<div>${s >= 60 ? `<span>${Math.round(s / 60)}</span>` : ''}<i class="${s >= zielMin * 60 ? 'eb-ziel' : ''}" style="height:${Math.round(s / max * 90)}px"></i>${wt[i]}</div>`; }).join('')}</div>
            <div class="eb-sub" style="margin-top:6px">Grün = mindestens ${zielMin} Min. gelernt (${tage.filter(t => sec(t) >= zielMin * 60).length} von ${tage.filter(t => t <= tag()).length} Tagen)</div>`;
        const ber = {};
        tage.forEach(t => { const m = (p.studyLogBereich || {})[t] || {}; Object.keys(m).forEach(b => { ber[b] = (ber[b] || 0) + m[b]; }); });
        const bsum = Object.values(ber).reduce((a, b) => a + b, 0);
        if (bsum > 0) {
            html += `<div style="margin-top:8px">` + Object.keys(ber).sort((a, b) => ber[b] - ber[a])
                .map(b => `<span class="eb-chip">${BEREICH_ICON[b] || '•'} ${BEREICH[b] || b} ${Math.round(ber[b] / bsum * 100)} %</span>`).join('') + `</div>`;
        } else {
            html += `<div class="eb-sub" style="margin-top:8px">Die Aufteilung nach Fächern erscheint, sobald ${h(p.name)} mit der neuen Version lernt.</div>`;
        }
        html += `</div>`;

        // Stärken & Schwächen
        const sw = schwaechen(p, 3), sk = staerken(p, 2);
        html += `<div class="eb-h2">Stärken &amp; Schwächen</div><div class="eb-card">`;
        if (!sw.length && !sk.length) html += `<div class="eb-sub">Noch nicht genug geübt für eine Auswertung.</div>`;
        sk.forEach(x => { html += `<div class="eb-row" style="margin:6px 0"><span class="eb-sp">✅ ${h(katLabel(x.cat))}</span><b style="color:#86efac">${Math.round(x.pct * 100)} %</b></div>`; });
        sw.forEach(x => {
            html += `<div class="eb-row" style="margin:6px 0"><span class="eb-sp">⚠️ ${h(katLabel(x.cat))}</span><b style="color:${x.pct < 0.5 ? '#fca5a5' : '#fde047'}">${Math.round(x.pct * 100)} %</b>
                <button class="eb-mini" onclick="ebUeben('${js(k)}','${js(x.cat)}')">Üben lassen</button></div>`;
        });
        html += `</div>`;

        // Aufgaben
        const auf = aufgabenVon(k, p).sort((a, b) => {
            const r = { ueberfaellig: 0, begonnen: 1, offen: 2, erledigt: 3, weg: 4 };
            return (r[a.st.code] - r[b.st.code]) || ((b.st.fertigAm || b.erstellt || 0) - (a.st.fertigAm || a.erstellt || 0));
        });
        html += `<div class="eb-h2">Aufgaben</div>`;
        html += auf.length ? auf.slice(0, 6).map(a => aufgabeKarte(a, false)).join('') : `<div class="eb-card eb-sub">Keine Aufgaben. Über „＋ Aufgabe“ kannst du eine vergeben.</div>`;
        if (auf.length > 6) html += `<button class="eb-btn eb-sek" onclick="ebAufgabenFuer('${js(k)}')">Alle ${auf.length} Aufgaben</button>`;

        // Letzte Aktivität
        const v = (p.verlauf || []).slice(0, 6);
        html += `<div class="eb-h2">Letzte Aktivität</div>`;
        if (v.length) {
            html += `<div class="eb-tl">` + v.map(e => verlaufEintrag(e)).join('') + `</div>
                <button class="eb-btn eb-sek" onclick="ebVerlaufFuer('${js(k)}')">Ganzen Verlauf ansehen</button>`;
        } else {
            html += `<div class="eb-card eb-sub">Der Verlauf füllt sich, sobald ${h(p.name)} mit der neuen Version lernt oder spielt.</div>`;
        }
        if ((p.testHistory || []).length) {
            html += `<div class="eb-h2">Letzte Tests</div>` + p.testHistory.slice(0, 3).map(t =>
                `<div class="eb-card"><div class="eb-row"><span class="eb-sp">📝 ${h(katTitel(t.categories) || 'Test')}</span><b>${t.correct}/${t.total}</b></div>
                <div class="eb-sub">${tagName(Date.parse(t.date))} ${uhrzeit(Date.parse(t.date))} · ${minuten(t.durationSec)}</div></div>`).join('');
        }
        return html;
    }

    function renderAufgaben() {
        const alle = alleAufgaben().filter(a => EB.filterKind === 'alle' || a.kind === EB.filterKind);
        const zahl = c => alle.filter(a => a.st.code === c).length;
        const f = EB.filterAuf;
        const d = daten();
        let html = `<div class="eb-row" style="margin-top:6px"><div class="eb-sp"><h1>Aufgaben</h1><div class="eb-sub">Alles, was du vergeben hast – mit Status</div></div>
            <button class="eb-mini" onclick="ebWizard()">＋ Neu</button></div>`;
        html += `<div class="eb-seg" style="margin-top:12px">` + [['alle', 'Alle ' + alle.filter(a => a.st.code !== 'weg').length], ['offen', 'Offen ' + zahl('offen')], ['begonnen', 'Begonnen ' + zahl('begonnen')], ['ueberfaellig', 'Überfällig ' + zahl('ueberfaellig')], ['erledigt', 'Erledigt ' + zahl('erledigt')]]
            .map(x => `<button class="${f === x[0] ? 'eb-on' : ''}" onclick="ebFilter('auf','${x[0]}')">${x[1]}</button>`).join('') + `</div>`;
        const ks = kinder();
        if (ks.length > 1) {
            html += `<div class="eb-seg">` + [['alle', 'Alle Kinder']].concat(ks.map(k => [k, d[k].name]))
                .map(x => `<button class="${EB.filterKind === x[0] ? 'eb-on' : ''}" onclick="ebFilter('kind','${js(x[0])}')">${h(x[1])}</button>`).join('') + `</div>`;
        }
        const liste = alle.filter(a => f === 'alle' ? a.st.code !== 'weg' : a.st.code === f);
        html += liste.length ? liste.map(a => aufgabeKarte(a, true)).join('') : `<div class="eb-card eb-sub">Hier ist gerade nichts.</div>`;
        return html;
    }

    function renderVerlauf() {
        const d = daten();
        const ks = kinder();
        let eintraege = [];
        ks.forEach(k => {
            if (EB.filterKind !== 'alle' && EB.filterKind !== k) return;
            (d[k].verlauf || []).forEach(e => eintraege.push(Object.assign({ name: d[k].name }, e)));
        });
        const art = EB.filterArt;
        const passt = { alle: () => true, lernen: e => e.k === 'lernen' || e.k === 'lektion', test: e => e.k === 'test', spiel: e => e.k === 'spiel', belohnung: e => e.k === 'belohnung' || e.k === 'aufgabe' };
        eintraege = eintraege.filter(passt[art] || passt.alle).sort((a, b) => b.t - a.t).slice(0, 120);
        let html = `<div style="margin-top:6px"><h1>Verlauf</h1><div class="eb-sub">Was wann gemacht wurde</div></div>`;
        if (ks.length > 1) {
            html += `<div class="eb-seg" style="margin-top:12px">` + [['alle', 'Alle Kinder']].concat(ks.map(k => [k, d[k].name]))
                .map(x => `<button class="${EB.filterKind === x[0] ? 'eb-on' : ''}" onclick="ebFilter('kind','${js(x[0])}')">${h(x[1])}</button>`).join('') + `</div>`;
        }
        html += `<div class="eb-seg">` + [['alle', 'Alles'], ['lernen', 'Lernen'], ['test', 'Tests'], ['spiel', 'Spiele'], ['belohnung', 'Belohnungen']]
            .map(x => `<button class="${art === x[0] ? 'eb-on' : ''}" onclick="ebFilter('art','${x[0]}')">${x[1]}</button>`).join('') + `</div>`;
        if (!eintraege.length) {
            return html + `<div class="eb-card eb-sub">Noch keine Einträge. Ab jetzt wird festgehalten, was die Kinder lernen und spielen – Lernzeit ab 1 Minute, Tests, Lektionen, Duelle und eingelöste Belohnungen.</div>`;
        }
        let letzterTag = '';
        const mitName = EB.filterKind === 'alle' && ks.length > 1;
        eintraege.forEach(e => {
            const t = tagName(e.t);
            if (t !== letzterTag) { html += (letzterTag ? '</div>' : '') + `<div class="eb-h2">${h(t)}</div><div class="eb-tl">`; letzterTag = t; }
            html += verlaufEintrag(e, mitName ? e.name : '');
        });
        return html + '</div>';
    }

    function renderBelohnungen() {
        const d = daten();
        let html = `<div style="margin-top:6px"><h1>Belohnungen</h1><div class="eb-sub">Coins, Level und echte Belohnungen</div></div>`;
        kinder().forEach(k => {
            const p = d[k];
            const lv = typeof getLevelInfo === 'function' ? getLevelInfo(p.xp || 0) : null;
            const letzte = (p.redeemedRewards || [])[0];
            html += `<div class="eb-card"><div class="eb-row"><div class="eb-ava" style="background:${h(farbe(k, p))}">${h(kuerzel(p))}</div>
                <div class="eb-sp"><b>${h(p.name)}</b><div class="eb-sub">${lv ? lv.current.icon + ' ' + h(lv.current.name) : ''}${letzte ? ' · zuletzt: ' + h(letzte.name) : ''}</div></div><b>${p.coins || 0} 🪙</b></div></div>`;
        });
        html += `<button class="eb-btn" style="margin-top:8px" onclick="ebKlassisch('rewards')">🛒 Shop, Anfragen &amp; Level verwalten</button>
            <div class="eb-sub" style="margin:10px 4px">Tipp: Beim Vergeben einer Aufgabe kannst du Coins als Belohnung festlegen. Das Kind bekommt sie automatisch, sobald die Aufgabe erledigt ist.</div>`;
        return html;
    }

    function renderEinstellungen() {
        const zeile = (icon, txt, aktion, sub) => `<div class="eb-card eb-klick" onclick="${aktion}"><div class="eb-row"><span class="eb-sp">${icon} ${txt}${sub ? `<div class="eb-sub">${sub}</div>` : ''}</span>›</div></div>`;
        return `<div style="margin-top:6px"><h1>Einstellungen</h1></div>
            ${zeile('👨‍👩‍👧', 'Profile &amp; Klassen', "switchView('family-hub')", 'Kinder anlegen, Klasse ändern')}
            ${zeile('🔒', 'Eltern-PIN, Lautstärke &amp; mehr', "switchView('einstellungen')", '')}
            ${zeile('📚', 'Inhalte', "ebInhalte()", 'Fragen · Vokabeln · Wörter durchsuchen')}
            ${zeile('📊', 'Ausführliche Statistik', "ebKlassisch('progress')", 'Lernzeit, Tests und Kurse im Detail (bisherige Ansicht)')}
            ${zeile('🗂', 'Bisherige Eltern-Ansicht', "ebKlassisch('aufgaben')", 'Alles wie früher – Vorlagen, Lernauftrag, Zuweisungen')}`;
    }

    // ---------- Assistent „Neue Aufgabe“ ----------
    const WIZ_TYPEN = [
        ['zeit', '⏱', 'Lernzeit', 'z. B. 20 Min. Vokabeln heute'],
        ['test', '📝', 'Test', 'Themen wählen, Zeitlimit'],
        ['lektion', '📚', 'Lektion', 'eine oder mehrere'],
        ['kurs', '🎓', 'Kurs', 'ganzer Lernpfad'],
        ['schwaeche', '🎯', 'Schwächen üben', 'Test aus den schwächsten Themen']
    ];
    function ebWizard(typ, kind) {
        css();
        const ks = kinder();
        EB.wiz = { schritt: typ ? 2 : 1, typ: typ || null, kinder: kind ? [kind] : (ks.length === 1 ? [ks[0]] : []), coins: 20, minuten: 20, bereich: 'any', notiz: '', faellig: '', kat: {} };
        if (typ && kind) EB.wiz.schritt = 3;
        let m = document.getElementById('eb-modal');
        if (!m) { m = document.createElement('div'); m.id = 'eb-modal'; document.body.appendChild(m); }
        m.onclick = ev => { if (ev.target === m) schliesseWiz(); };
        renderWiz();
    }
    function schliesseWiz(still) {
        gibAltFormularZurueck();
        const m = document.getElementById('eb-modal');
        if (m) m.remove();
        EB.wiz = null;
        if (!still) planeRender();
    }

    function holeAltFormular(typ, kind) {
        const id = { test: 'dash-assign-body', lektion: 'dash-lesson-body', kurs: 'dash-kurszuw-body' }[typ];
        const el = id && document.getElementById(id);
        if (!el) return null;
        // Kind im Fokus setzen, damit Themen/Lektionen zur Klasse passen
        try {
            if (typeof fillDashFocusProfile === 'function') fillDashFocusProfile();
            const f = document.getElementById('dash-focus-profile');
            if (f) { f.value = kind; }
            if (typeof renderDashAdminTest === 'function') renderDashAdminTest();
            const t = document.getElementById('dash-test-profile');
            if (t) t.value = kind;
            if (typeof onDashFocusProfileChange === 'function') onDashFocusProfileChange();
            if (t) t.value = kind;
            // Klasse des Kindes vorwählen (die alte Ansicht nahm das gerade aktive Profil)
            const kl = typeof playerGrade === 'function' ? playerGrade(daten()[kind]) : null;
            [['dash-lesson-grade', 'fillDashLessonSelect'], ['dash-kurszuw-grade', 'fillDashKursSelect']].forEach(([id, fn]) => {
                const g = document.getElementById(id);
                if (g && kl && g.querySelector('option[value="' + kl + '"]')) {
                    g.value = String(kl);
                    if (typeof window[fn] === 'function') window[fn]();
                }
            });
        } catch (e) { console.warn(e); }
        EB.altFormular = { el, parent: el.parentNode, next: el.nextSibling, warVersteckt: el.classList.contains('hidden') };
        el.classList.remove('hidden');
        return el;
    }
    function gibAltFormularZurueck() {
        const a = EB.altFormular;
        if (!a) return;
        try {
            if (a.next && a.next.parentNode === a.parent) a.parent.insertBefore(a.el, a.next);
            else a.parent.appendChild(a.el);
            if (a.warVersteckt) a.el.classList.add('hidden');
        } catch (e) { }
        EB.altFormular = null;
    }

    function renderWiz() {
        const w = EB.wiz;
        const m = document.getElementById('eb-modal');
        if (!w || !m) return;
        gibAltFormularZurueck();
        const d = daten();
        const ks = kinder();
        const titel = ['Was?', 'Für wen?', w.typ === 'zeit' || w.typ === 'schwaeche' ? 'Details & Belohnung' : 'Auswahl & Belohnung'][w.schritt - 1];
        const multi = w.typ === 'zeit' || w.typ === 'schwaeche';
        let body = '';
        if (w.schritt === 1) {
            body = WIZ_TYPEN.map(t => `<div class="eb-opt ${w.typ === t[0] ? 'eb-on' : ''}" onclick="ebWiz('typ','${t[0]}')"><b class="eb-i">${t[1]}</b><div><b>${t[2]}</b><div class="eb-sub" style="margin:0">${t[3]}</div></div></div>`).join('');
        } else if (w.schritt === 2) {
            body = `<div class="eb-sub" style="margin-top:0">${multi ? 'Mehrere möglich.' : 'Ein Kind – Themen und Lektionen richten sich nach der Klasse.'}</div>` +
                ks.map(k => `<div class="eb-opt ${w.kinder.indexOf(k) !== -1 ? 'eb-on' : ''}" onclick="ebWiz('kind','${js(k)}')"><div class="eb-ava" style="background:${h(farbe(k, d[k]))}">${h(kuerzel(d[k]))}</div><div><b>${h(d[k].name)}</b> <span class="eb-sub">${klasse(d[k])}</span></div></div>`).join('');
        } else {
            body = coinsWahl();
            if (w.typ === 'zeit') {
                body += `<div class="eb-sub">Bereich</div><div class="eb-seg">` + ['any', 'vokabeln', 'wissen', 'lesen', 'suchsel']
                    .map(b => `<button data-was="bereich" data-wert="${b}" class="${w.bereich === b ? 'eb-on' : ''}" onclick="ebWiz('bereich','${b}')">${BEREICH_ICON[b]} ${BEREICH[b]}</button>`).join('') + `</div>
                    <div class="eb-sub">Minuten (heute)</div><div class="eb-seg">` + [10, 15, 20, 30, 45, 60]
                    .map(x => `<button data-was="minuten" data-wert="${x}" class="${w.minuten === x ? 'eb-on' : ''}" onclick="ebWiz('minuten',${x})">${x}</button>`).join('') + `</div>
                    <div class="eb-sub">Notiz (optional)</div><input id="eb-wiz-notiz" maxlength="60" placeholder="z. B. vor dem Fußball" value="${h(w.notiz)}">`;
            } else if (w.typ === 'schwaeche') {
                body += `<div class="eb-sub">Bis wann?</div>` + faelligWahl() + `<div class="eb-sub">Test mit 10 Min. aus den schwächsten Themen:</div>`;
                w.kinder.forEach(k => {
                    const sw = schwaechen(d[k], 3);
                    body += `<div class="eb-opt" style="cursor:default;display:block"><b>${h(d[k].name)}</b><div class="eb-sub" style="margin-top:4px">${sw.length ? sw.map(x => h(katLabel(x.cat)) + ' (' + Math.round(x.pct * 100) + ' %)').join(' · ') : 'Noch zu wenig geübt – keine Schwäche erkennbar.'}</div></div>`;
                });
            } else {
                const kind = w.kinder[0];
                body += `<div class="eb-sub">Wähle unten aus und tippe auf den Knopf zum Zuweisen. Fälligkeit und WhatsApp findest du dort.</div><div class="eb-alt" id="eb-alt"></div>`;
                setTimeout(() => {
                    const ziel = document.getElementById('eb-alt');
                    const el = holeAltFormular(w.typ, kind);
                    if (ziel && el) ziel.appendChild(el);
                    else if (ziel) ziel.innerHTML = '<div class="eb-sub">Auswahl konnte nicht geladen werden. Bitte die bisherige Ansicht nutzen.</div>';
                }, 0);
            }
        }
        const kannWeiter = (w.schritt === 1 && w.typ) || (w.schritt === 2 && w.kinder.length);
        const eigenerAbschluss = w.schritt === 3 && (w.typ === 'zeit' || w.typ === 'schwaeche');
        m.innerHTML = `<div class="eb-sheet">
            <div style="display:flex;align-items:center;gap:10px"><b style="flex:1">Neue Aufgabe · ${titel}</b><button class="eb-mini" onclick="ebWizZu()">✕</button></div>
            <div class="eb-steps">${[1, 2, 3].map(i => `<i class="${i <= w.schritt ? 'eb-on' : ''}"></i>`).join('')}</div>
            ${body}
            <div style="display:flex;gap:8px;margin-top:14px">
                ${w.schritt > 1 ? `<button class="eb-btn eb-sek" onclick="ebWiz('schritt',-1)">Zurück</button>` : ''}
                ${w.schritt < 3 ? `<button class="eb-btn" ${kannWeiter ? '' : 'disabled style="opacity:.4"'} onclick="ebWiz('schritt',1)">Weiter</button>` : ''}
                ${eigenerAbschluss ? `<button class="eb-btn" onclick="ebWizFertig()">Vergeben ✓</button>` : ''}
            </div></div>`;
    }
    function coinsWahl() {
        const w = EB.wiz;
        return `<div class="eb-sub" style="margin-top:0">Belohnung bei Erledigung</div><div class="eb-seg">` + [0, 10, 20, 50, 100]
            .map(c => `<button data-was="coins" data-wert="${c}" class="${w.coins === c ? 'eb-on' : ''}" onclick="ebWiz('coins',${c})">${c ? '+' + c + ' 🪙' : 'keine'}</button>`).join('') + `</div>`;
    }
    function faelligWahl() {
        const w = EB.wiz;
        const m = new Date(); m.setDate(m.getDate() + 1);
        const so = new Date(); so.setDate(so.getDate() + ((7 - so.getDay()) % 7));
        const opts = [['', 'ohne'], [tag(), 'heute'], [tag(m), 'morgen'], [tag(so), 'bis Sonntag']];
        return `<div class="eb-seg">` + opts.map(o => `<button data-was="faellig" data-wert="${o[0]}" class="${w.faellig === o[0] ? 'eb-on' : ''}" onclick="ebWiz('faellig','${o[0]}')">${o[1]}</button>`).join('') + `</div>`;
    }

    function ebWiz(was, wert) {
        const w = EB.wiz;
        if (!w) return;
        const n = document.getElementById('eb-wiz-notiz');
        if (n) w.notiz = n.value;
        if (was === 'typ') { w.typ = wert; if (!(w.typ === 'zeit' || w.typ === 'schwaeche') && w.kinder.length > 1) w.kinder = [w.kinder[0]]; }
        else if (was === 'kind') {
            const multi = w.typ === 'zeit' || w.typ === 'schwaeche';
            if (!multi) w.kinder = [wert];
            else w.kinder = w.kinder.indexOf(wert) !== -1 ? w.kinder.filter(x => x !== wert) : w.kinder.concat([wert]);
        }
        else if (was === 'schritt') {
            w.schritt = Math.max(1, Math.min(3, w.schritt + wert));
            if (w.schritt === 2 && wert > 0 && kinder().length === 1) w.schritt = 3;
            if (w.schritt === 2 && wert < 0 && kinder().length === 1) w.schritt = 1;
        }
        else {
            w[was] = wert;
            // Nur die Knöpfe umschalten – nicht neu zeichnen, sonst ginge die
            // Auswahl im eingebetteten Formular (Themen, Lektionen) verloren.
            const knoepfe = document.querySelectorAll('#eb-modal [data-was="' + was + '"]');
            if (knoepfe.length) {
                knoepfe.forEach(b => b.classList.toggle('eb-on', String(b.getAttribute('data-wert')) === String(wert)));
                return;
            }
        }
        renderWiz();
    }

    function vergebeTest(k, cats, min, titelPrefix, faellig, coins) {
        const d = daten();
        const p = d[k];
        if (!p || !currentParentUser) return false;
        const pendingTest = { categories: cats, timeLimitSeconds: min * 60, vocabDir: 'de2f', createdAt: new Date().toISOString() };
        if (ALL_PROFILES[k]) ALL_PROFILES[k].pendingTest = pendingTest;
        if (activePlayerKey === k && currentPlayer) currentPlayer.pendingTest = pendingTest;
        profilRef(k).update({ pendingTest }).catch(e => typeof handleError === 'function' && handleError('ebTest', e, 'Test konnte nicht zugewiesen werden.'));
        speichereAufgabe(k, { typ: 'test', ref: pendingTest.createdAt, kategorien: cats, minuten: min, titel: titelPrefix + katTitel(cats), erstellt: Date.now(), faellig: faellig || '', coins: coins || 0 });
        return true;
    }

    async function ebWizFertig() {
        const w = EB.wiz;
        if (!w) return;
        const n = document.getElementById('eb-wiz-notiz');
        if (n) w.notiz = (n.value || '').trim().slice(0, 60);
        const d = daten();
        let ok = 0;
        if (w.typ === 'zeit') {
            w.kinder.forEach(k => {
                if (!d[k] || !currentParentUser) return;
                const studyGoal = { minutes: w.minuten, activity: w.bereich, note: w.notiz || '', day: tag(), createdAt: new Date().toISOString() };
                if (ALL_PROFILES[k]) ALL_PROFILES[k].studyGoal = studyGoal;
                if (activePlayerKey === k && currentPlayer) currentPlayer.studyGoal = studyGoal;
                profilRef(k).update({ studyGoal }).catch(e => typeof handleError === 'function' && handleError('ebZeit', e, 'Auftrag konnte nicht gespeichert werden.'));
                speichereAufgabe(k, { typ: 'zeit', minuten: w.minuten, bereich: w.bereich, tag: tag(), notiz: w.notiz || '', titel: w.minuten + ' Min. ' + BEREICH[w.bereich], erstellt: Date.now(), faellig: tag(), coins: w.coins });
                ok++;
            });
        } else if (w.typ === 'schwaeche') {
            w.kinder.forEach(k => {
                const sw = schwaechen(d[k], 3);
                if (!sw.length) return;
                if (vergebeTest(k, sw.map(x => x.cat), 10, 'Schwächen üben: ', w.faellig, w.coins)) ok++;
            });
        }
        if (!ok) { toast(w.typ === 'schwaeche' ? 'Keine Schwächen erkennbar – nichts vergeben.' : 'Bitte ein Kind wählen.', 'error'); return; }
        toast(ok === 1 ? 'Aufgabe vergeben ✓' : ok + ' Aufgaben vergeben ✓');
        schliesseWiz();
    }

    // ---------- Aktionen ----------
    async function ebUeben(k, cat) {
        const d = daten();
        const p = d[k];
        if (!p) return;
        const ok = typeof appConfirm === 'function'
            ? await appConfirm(`${p.name} bekommt einen Übungstest (10 Min.) zu „${katLabel(cat)}“. Ein offener Test wird dabei ersetzt.`, { titel: 'Üben lassen', icon: '🎯', okText: 'Zuweisen', abbrechenText: 'Abbrechen' })
            : confirm('Übungstest zuweisen?');
        if (!ok) return;
        if (vergebeTest(k, [cat], 10, 'Üben: ', '', 20)) toast('Übungstest für ' + p.name + ' vergeben (+20 Coins bei Erledigung).');
    }

    function finde(k, id) {
        const d = daten();
        return d[k] ? aufgabenVon(k, d[k]).find(a => a.id === id) : null;
    }

    async function ebEntfernen(k, id) {
        const a = finde(k, id);
        if (!a) return;
        const offen = a.st.code !== 'erledigt' && a.st.code !== 'weg';
        if (offen) {
            // Echte Zuweisung zurücknehmen (fragt selbst nach)
            const p = daten()[k];
            if (a.typ === 'zeit') {
                const ok = typeof appConfirm === 'function' ? await appConfirm('Lernzeit-Auftrag zurücknehmen?', { titel: 'Zurücknehmen', icon: '↩️', okText: 'Zurücknehmen', abbrechenText: 'Behalten' }) : confirm('Zurücknehmen?');
                if (!ok) return;
                if (ALL_PROFILES[k]) ALL_PROFILES[k].studyGoal = null;
                if (activePlayerKey === k && currentPlayer) currentPlayer.studyGoal = null;
                profilRef(k).update({ studyGoal: null }).catch(() => { });
            } else if (a.typ === 'test') {
                await zuweisungZuruecknehmen('pendingTest', k);
                if (ALL_PROFILES[k] && ALL_PROFILES[k].pendingTest && ALL_PROFILES[k].pendingTest.createdAt === a.ref) return; // abgebrochen
            } else {
                const feld = a.typ === 'lektion' ? 'pendingLesson' : 'pendingKurs';
                const ids = a.ids || [];
                const vorher = (a.typ === 'lektion' ? offeneLektionen(p) : offeneKurse(p)).length;
                for (let i = 0; i < ids.length; i++) {
                    await zuweisungZuruecknehmen(feld, k, ids[i]);
                    const pp = ALL_PROFILES[k] || p;
                    const jetzt = (a.typ === 'lektion' ? offeneLektionen(pp) : offeneKurse(pp)).length;
                    if (i === 0 && jetzt === vorher) return; // abgebrochen
                }
            }
        } else if (!a.alt) {
            const ok = typeof appConfirm === 'function' ? await appConfirm('Eintrag aus der Liste entfernen?', { titel: 'Aus Liste', icon: '🗑', okText: 'Entfernen', abbrechenText: 'Behalten' }) : confirm('Entfernen?');
            if (!ok) return;
        }
        if (!a.alt) {
            if (ALL_PROFILES[k] && ALL_PROFILES[k].aufgaben) delete ALL_PROFILES[k].aufgaben[id];
            if (EB.live && EB.live[k] && EB.live[k].aufgaben) delete EB.live[k].aufgaben[id];
            profilRef(k).update({ ['aufgaben.' + id]: firebase.firestore.FieldValue.delete() }).catch(() => { });
        }
        planeRender();
    }

    function ebErinnern(k, id) {
        const a = finde(k, id);
        const p = daten()[k];
        if (!a || !p) return;
        let link = location.origin + location.pathname;
        if ((a.typ === 'lektion' || a.typ === 'kurs') && (a.ids || []).length) {
            link += '?aufgabe=' + a.ids.map(x => (a.typ === 'lektion' ? 'L.' : 'K.') + x).join(',');
        }
        const frist = a.faellig ? ' – bis ' + datumKurz(a.faellig) : '';
        const text = `⏰ Erinnerung für ${p.name}${frist}:\n• ${a.titel}${a.coins > 0 ? `\n🪙 +${a.coins} Coins, wenn erledigt` : ''}\n\nHier geht's los 👉 ${link}`;
        if (navigator.share) navigator.share({ text }).catch(() => { });
        else window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
    }

    function ebKlassisch(tab) {
        window.__ebKlassisch = true;
        if (typeof switchView === 'function') switchView('dashboard');
        if (typeof switchDashboardSection === 'function') switchDashboardSection('eltern');
        if (typeof switchDashAdminTab === 'function') switchDashAdminTab(tab || 'aufgaben', false);
        window.__ebKlassisch = false;
    }
    function ebInhalte() {
        if (typeof switchView === 'function') switchView('dashboard');
        if (typeof switchDashboardSection === 'function') switchDashboardSection('inhalte');
    }

    // ---------- Öffentliche Funktionen ----------
    window.ebTab = function (t) { EB.tab = t; EB._behalteScroll = false; render(); window.scrollTo(0, 0); };
    window.ebKind = function (k) { EB.kind = k; EB.tab = 'kind'; EB._behalteScroll = false; render(); window.scrollTo(0, 0); };
    window.ebFilter = function (art, wert) { if (art === 'auf') EB.filterAuf = wert; if (art === 'kind') EB.filterKind = wert; if (art === 'art') EB.filterArt = wert; render(); };
    window.ebAufgabenFuer = function (k) { EB.filterKind = k; EB.filterAuf = 'alle'; window.ebTab('aufgaben'); };
    window.ebVerlaufFuer = function (k) { EB.filterKind = k; EB.filterArt = 'alle'; window.ebTab('verlauf'); };
    window.ebWizard = ebWizard;
    window.ebWiz = ebWiz;
    window.ebWizZu = function () { schliesseWiz(); };
    window.ebWizFertig = ebWizFertig;
    window.ebUeben = ebUeben;
    window.ebEntfernen = ebEntfernen;
    window.ebErinnern = ebErinnern;
    window.ebKlassisch = ebKlassisch;
    window.ebZurApp = function () {
        const ziel = (typeof currentPlayer !== 'undefined' && currentPlayer) ? 'menu' : 'family-hub';
        if (typeof switchView === 'function') switchView(ziel);
    };
    window.ebSperren = function () {
        window.__eduplayDashUnlocked = false;
        if (typeof switchView === 'function') switchView('family-hub');
        toast('🔒 Eltern-Bereich gesperrt');
    };
    window.ebInhalte = ebInhalte;
    window.ebAufgabeStatus = aufgabeStatus;

    // Eltern-Kachel im Kontrollzentrum öffnet den neuen Bereich.
    window.openParentAreaKlassisch = window.openParentArea;
    window.openParentArea = function () {
        if (typeof switchView === 'function') switchView('eltern');
    };

    // switchView umhüllen: PIN-Schutz, Live-Daten, Render
    function installiereViewHuelle() {
        const orig = window.switchView;
        if (typeof orig !== 'function' || orig.__eb) return;
        const neu = function (viewId) {
            if (viewId === 'eltern' && typeof adminPin !== 'undefined' && adminPin && !window.__eduplayDashUnlocked) {
                return orig.call(this, 'dashboard');
            }
            if (viewId !== 'eltern' && EB.wiz) schliesseWiz(true);
            const r = orig.apply(this, arguments);
            try {
                if (viewId === 'eltern' || viewId === 'dashboard') starteLiveSync();
                else stoppeLiveSync();
                const fab = document.getElementById('fabContainer');
                if (fab) fab.style.display = viewId === 'eltern' ? 'none' : '';
                if (viewId === 'eltern') { EB._behalteScroll = false; render(); window.scrollTo(0, 0); }
                if (viewId === 'dashboard') bannerAlt();
            } catch (e) { console.warn('Eltern-Bereich', e); }
            return r;
        };
        neu.__eb = true;
        window.switchView = neu;
    }

    function bannerAlt() {
        const sek = document.getElementById('dash-section-eltern');
        if (!sek || document.getElementById('eb-banner-alt')) return;
        const b = document.createElement('button');
        b.id = 'eb-banner-alt';
        b.type = 'button';
        b.className = 'w-full glass-card p-4 text-left font-black text-amber-300';
        b.style.border = '1px solid rgba(245,158,11,.35)';
        b.innerHTML = '✨ Zum neuen Eltern-Bereich <span style="float:right">›</span><div style="font-weight:600;font-size:12px;color:#9aa0c3;margin-top:2px">Übersicht pro Kind, Aufgaben mit Status, Verlauf</div>';
        b.onclick = function () { if (typeof switchView === 'function') switchView('eltern'); };
        sek.insertBefore(b, sek.firstChild);
    }

    function init() {
        installiereViewHuelle();
        installiereZuweisungsHuellen();
        installiereKindHuellen();
        if (typeof activePlayerKey !== 'undefined' && activePlayerKey) starteEigenSync();
    }
    // Andere Skripte laden teils danach (live-duel.js steht vorher, lektionen lazy) –
    // sofort und nach dem Laden nochmals einhängen (Hüllen sind gegen Doppel geschützt).
    init();
    window.addEventListener('load', init);
})();
