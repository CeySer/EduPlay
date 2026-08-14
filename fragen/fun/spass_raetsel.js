// Fun · spass_raetsel (152 Fragen)
const SPASS_RAETSEL_QUESTIONS = [
  {
        "id": "q_ra_001",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was wird umso nasser, je mehr man damit trocknet?",
        "answers": [
            "Ein Handtuch",
            "Ein Schwamm",
            "Ein Regenschirm",
            "Ein Föhn"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧺 Ein Handtuch nimmt Feuchtigkeit auf, wenn man sich abtrocknet."
    },
  {
        "id": "q_ra_002",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Ich habe Städte, aber keine Häuser. Ich habe Wälder, aber keine Bäume. Ich habe Flüsse, aber kein Wasser. Was bin ich?",
        "answers": [
            "Ein Buch",
            "Eine Landkarte",
            "Ein Traum",
            "Ein Globus aus Glas"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🗺️ Auf einer Landkarte sind geografische Gegebenheiten gezeichnet, aber nicht physisch vorhanden."
    },
  {
        "id": "q_ra_003",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was gehört dir, aber andere benutzen es viel öfter als du selbst?",
        "answers": [
            "Dein Telefon",
            "Dein Auto",
            "Dein Name",
            "Deine Haustür"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🗣️ Andere Menschen rufen und nennen dich bei deinem Namen wesentlich häufiger, als du ihn selbst aussprichst."
    },
  {
        "id": "q_ra_004",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Ein Mann schaut auf ein Porträt und sagt: 'Brüder und Schwestern habe ich keine, aber dieses Mannes Vater ist meiner Mutter Sohn.' Wen zeigt das Bild?",
        "answers": [
            "Sich selbst",
            "Seinen Vater",
            "Seinen Onkel",
            "Seinen Sohn"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🖼️ 'Meiner Mutter Sohn' ohne Geschwister ist der Mann selbst. 'Dieses Mannes Vater' ist also der Mann selbst – folglich zeigt das Bild seinen Sohn."
    },
  {
        "id": "q_ra_005",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat viele Zähne, kann aber niemals beißen?",
        "answers": [
            "Ein Kamm",
            "Ein Sägeblatt",
            "Ein Hai",
            "Ein Reißverschluss"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "💇‍♂️ Ein Kamm hat feine 'Zinken' oder 'Zähne', um Haare zu ordnen, besitzt aber keinen Kiefer."
    },
  {
        "id": "q_ra_006",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat ein Herz, das nicht schlägt?",
        "answers": [
            "Ein Holzklotz",
            "Eine Artischocke / Eine Palme",
            "Eine Steinfigur",
            "Ein Apfel"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥬 Das Innere einer Artischocke oder einer Palme wird botanisch/kulinarisch als 'Herz' bezeichnet."
    },
  {
        "id": "q_ra_007",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welches Wort steht in jedem Lexikon falsch geschrieben?",
        "answers": [
            "Fehler",
            "Lexikon",
            "Das Wort 'falsch'",
            "Unmöglich"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔤 Das Wort 'falsch' wird immer f-a-l-s-c-h geschrieben."
    },
  {
        "id": "q_ra_008",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Je mehr man davon wegnimmt, desto größer wird es. Was ist das?",
        "answers": [
            "Ein Berg",
            "Ein Schatten",
            "Ein Rätsel",
            "Ein Loch"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🕳️ Wenn man Erde aus einem Loch gräbt (etwas wegnimmt), vergrößert sich das Loch."
    },
  {
        "id": "q_ra_009",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was kann ein Zimmer füllen, nimmt aber absolut keinen Platz weg?",
        "answers": [
            "Licht",
            "Luft",
            "Musik",
            "Wärme"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "💡 Das Licht einer Kerze oder Lampe erleuchtet den gesamten Raum, ohne physischen Raum zu blockieren."
    },
  {
        "id": "q_ra_010",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was läuft ohne Beine, fließt ohne Flügel und weint ohne Augen?",
        "answers": [
            "Der Wind",
            "Eine Wolke / Ein Fluss",
            "Die Zeit",
            "Ein Schmelzofen"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "☁️ Wolken ziehen am Himmel, fließen als Wasserdampf und 'weinen' Regentropfen."
    },
  {
        "id": "q_ra_011",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Monat hat 28 Tage?",
        "answers": [
            "Nur der Februar",
            "Nur Schaltjahre",
            "Alle Monate",
            "Kein Monat"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📅 Jeder der 12 Monate hat mindestens 28 Tage."
    },
  {
        "id": "q_ra_012",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat zwei Köpfe, vier Augen, sechs Beine und einen Schwanz?",
        "answers": [
            "Ein Fabelwesen",
            "Ein Doppelhund",
            "Eine Krabbe",
            "Ein Reiter auf einem Pferd"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🐎 Mensch (1 Kopf, 2 Augen, 2 Beine) + Pferd (1 Kopf, 2 Augen, 4 Beine, 1 Schwanz)."
    },
  {
        "id": "q_ra_013",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was bricht, sobald man seinen Namen ausspricht?",
        "answers": [
            "Die Stille / Das Schweigen",
            "Ein Versprechen",
            "Ein Glas",
            "Ein Geheimnis"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🤫 Sobald man 'Stille' oder ein Geräusch macht, ist die Stille gebrochen."
    },
  {
        "id": "q_ra_014",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wenn ein Elektrozug nach Süden fährt, in welche Richtung weht der Rauch?",
        "answers": [
            "Nach Norden",
            "Gar nicht (Elektrozüge erzeugen keinen Rauch)",
            "Nach Westen",
            "Nach Süden"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚆 Ein elektrisch betriebener Zug fährt ohne Abgase und Rauch."
    },
  {
        "id": "q_ra_015",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat einen Hals, aber keinen Kopf?",
        "answers": [
            "Ein Hemd",
            "Gitarre",
            "Eine Flasche",
            "Ein Pullover"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍾 Der verengte obere Teil einer Flasche heißt Flaschenhals."
    },
  {
        "id": "q_ra_016",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wie viele Erbsen passen in ein leeres Glas?",
        "answers": [
            "Etwa 100",
            "Genau eine",
            "Das kommt auf das Glas an",
            "Keine einzige (danach ist das Glas nicht mehr leer)"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🫛 Nach der ersten Erbse ist das Glas bereits nicht mehr leer."
    },
  {
        "id": "q_ra_017",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was geht am Morgen auf vier Beinen, am Mittag auf zwei Beinen und am Abend auf drei Beinen?",
        "answers": [
            "Der Mensch (Rätsel der Sphinx)",
            "Ein Hund",
            "Ein Stuhl",
            "Die Zeit"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🏛️ Bekanntes antikes Rätsel: Baby (krabbelt auf vier), Erwachsener (geht auf zwei), Greis (mit Gehstock auf drei)."
    },
  {
        "id": "q_ra_018",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was kann reisen rund um die Welt, bleibt aber immer in derselben Ecke hocken?",
        "answers": [
            "Ein Kompass",
            "Eine Briefmarke",
            "Der Mond",
            "Ein Flugzeug"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "✉️ Eine Briefmarke wird auf die Ecke des Umschlags geklebt und reist um den Erdball."
    },
  {
        "id": "q_ra_019",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Der Vater von Monika hat 5 Töchter: Lala, Lela, Lila, Lola ... Wie heißt die 5. Tochter?",
        "answers": [
            "Lula",
            "Lyla",
            "Monika",
            "Lola II"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "👧 Der Satz beginnt mit: 'Der Vater von Monika...'."
    },
  {
        "id": "q_ra_020",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was wird größer, je mehr man es umdreht?",
        "answers": [
            "Ein Kreis",
            "Ein Rad",
            "Eine Schraube",
            "Die Zahl 6 (wird zur 9)"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🔢 Dreht man die Ziffer 6 auf dem Kopf, entsteht die größere Zahl 9."
    },
  {
        "id": "q_ra_021",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat Flügel, kann aber nicht fliegen, hat einen Rücken, kann aber nicht liegen?",
        "answers": [
            "Ein Buch / Eine Nase",
            "Ein Pinguin",
            "Ein Engel aus Stein",
            "Ein Flugzeug ohne Motor"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📖 Ein Buch besitzt Seitenflügel und einen Buchrücken."
    },
  {
        "id": "q_ra_022",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Hand ist die beste zum Umrühren von Tee?",
        "answers": [
            "Die rechte Hand",
            "Keine (man nimmt einen Löffel)",
            "Die linke Hand",
            "Beide Hände"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥄 Tee rührt man mit einem Teelöffel um, nicht direkt mit der bloßen Hand."
    },
  {
        "id": "q_ra_023",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was steht mitten in Paris?",
        "answers": [
            "Der Eiffelturm",
            "Der Louvre",
            "Der Buchstabe 'r'",
            "Die Seine"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔤 Das Wort Pa-r-is hat das 'r' genau in der Mitte."
    },
  {
        "id": "q_ra_024",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was ist das: Es gehört dem Armen, der Reiche braucht es, und wenn man es isst, stirbt man?",
        "answers": [
            "Gift",
            "Geld",
            "Luft",
            "Nichts"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧩 Der Arme hat nichts, der Reiche braucht nichts, und wer nichts isst, stirbt."
    },
  {
        "id": "q_ra_025",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was kann man halten, ohne es jemals mit den Händen zu berühren?",
        "answers": [
            "Sein Wort / Seinen Atem",
            "Einen Ball",
            "Wasser",
            "Schatten"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🗣️ Man kann ein Versprechen ('sein Wort halten') oder 'den Atem anhalten'."
    },
  {
        "id": "q_ra_026",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wer baut Häuser, ohne Werkzeug zu benutzen?",
        "answers": [
            "Der Biber",
            "Die Schnecke (Schneckenhaus)",
            "Die Biene",
            "Der Vogel"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐌 Die Schnecke scheidet ihr Kalkgehäuse von Natur aus selbst aus."
    },
  {
        "id": "q_ra_027",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Ein Flugzeug stürzt genau auf der Grenze zwischen Deutschland und Österreich ab. Wo werden die Überlebenden begraben?",
        "answers": [
            "In Deutschland",
            "In Österreich",
            "Gar nicht (Überlebende begräbt man nicht)",
            "Auf dem neutralen Friedhof"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🏥 Überlebende eines Absturzes leben und werden selbstverständlich nicht beerdigt."
    },
  {
        "id": "q_ra_028",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat Schlüssel, kann aber keine Türen öffnen?",
        "answers": [
            "Ein Schließfach",
            "Eine Schatztruhe",
            "Ein Schlüsseldienst",
            "Ein Klavier / Eine Tastatur"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎹 Im Englischen/Musikalischen nennt man Tasten auch 'Keys' (Notenschlüssel)."
    },
  {
        "id": "q_ra_029",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Je mehr du davon hast, desto weniger siehst du. Was ist das?",
        "answers": [
            "Dunkelheit / Nebel",
            "Licht",
            "Augen",
            "Brillen"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌑 Bei zunehmender Dunkelheit oder dichtem Nebel sinkt die Sichtweite."
    },
  {
        "id": "q_ra_030",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was steigt auf, wenn der Regen fällt?",
        "answers": [
            "Temperatur",
            "Ein Regenschirm",
            "Luftfeuchtigkeit",
            "Der Flusspegel"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "☂️ Wenn es regnet, spannt man den Regenschirm nach oben auf."
    },
  {
        "id": "q_ra_031",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Becher hat keinen Henkel und man kann nicht daraus trinken?",
        "answers": [
            "Pappbecher",
            "Joghurtbecher",
            "Der Fingerhut / Würfelbecher",
            "Messbecher"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎲 Ein Würfelbecher dient dem Würfeln beim Spiel."
    },
  {
        "id": "q_ra_032",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was fliegt ohne Flügel und weint ohne Augen?",
        "answers": [
            "Der Wind",
            "Das Flugzeug",
            "Ein Ballon",
            "Eine Wolke"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🌧️ Wolken schweben am Himmel und lassen Regentropfen fallen."
    },
  {
        "id": "q_ra_033",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wenn drei Katzen in drei Minuten drei Mäuse fangen, wie viele Katzen braucht man, um 100 Mäuse in 100 Minuten zu fangen?",
        "answers": [
            "Genau 3 Katzen",
            "100 Katzen",
            "33 Katzen",
            "300 Katzen"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🐱 3 Katzen fangen alle 3 Minuten 3 Mäuse (also 1 Maus pro Katze alle 3 Min.). In 100 Minuten fängt dieselbe 3er-Gruppe 100 Mäuse."
    },
  {
        "id": "q_ra_034",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was schlägt stetig, hat aber kein Herz?",
        "answers": [
            "Ein Specht",
            "Uhr / Wellen",
            "Ein Schlagzeuger",
            "Ein Boxhandschuh"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "⏰ Eine Uhr schlägt die Stunden (oder das Zifferblatt tickt/schlägt)."
    },
  {
        "id": "q_ra_035",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Brücke kann man niemals überqueren?",
        "answers": [
            "Hängebrücke",
            "Zugbrücke",
            "Die Eselbrücke",
            "Regenbogenbrücke"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧠 Eine Eselbrücke ist eine gedankliche Lernhilfe."
    },
  {
        "id": "q_ra_036",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat 4 Beine, kann aber nicht laufen?",
        "answers": [
            "Hund",
            "Katze",
            "Pferd",
            "Ein Stuhl / Tisch"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🪑 Stühle und Tische stehen stabil auf vier Beinen."
    },
  {
        "id": "q_ra_037",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wenn ein Hahn auf dem First eines Scheunendachs genau in der Mitte ein Ei legt, nach welcher Seite fällt es herunter?",
        "answers": [
            "Hähne legen keine Eier",
            "Nach links",
            "Nach rechts",
            "Es bleibt oben liegen"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐓 Nur Hühner (Hennen) legen Eier, Hähne nicht."
    },
  {
        "id": "q_ra_038",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was gehört dir, wird aber von deinen Freunden öfter benutzt als von dir?",
        "answers": [
            "Dein Fahrrad",
            "Dein Name",
            "Dein WLAN",
            "Deine Wohnung"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🗣️ Andere nennen dich bei deinem Namen."
    },
  {
        "id": "q_ra_039",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Ein Haus hat vier Wände, und jede Wand zeigt nach Süden. Ein Bär läuft am Haus vorbei. Welche Farbe hat der Bär?",
        "answers": [
            "Braun",
            "Schwarz",
            "Weiß (Polarbär am Nordpol)",
            "Grau"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🧊 Ein Haus, dessen vier Wände alle nach Süden zeigen, steht exakt am Nordpol. Dort leben Eisbären."
    },
  {
        "id": "q_ra_040",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was kommt einmal in jeder Minute, zweimal in jedem Moment, aber niemals in tausend Jahren vor?",
        "answers": [
            "Ein Schicksalsschlag",
            "Die Zeit",
            "Ein Gedanke",
            "Der Buchstabe 'M'"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🔤 Nu-m-e-ro-logie des Wortes: 1x in 'Minute', 2x in 'Moment', 0x in 'tausend Jahren'."
    },
  {
        "id": "q_ra_041",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Der Erfinder braucht es nicht, der Käufer nutzt es nicht, der Nutzer weiß nichts davon. Was ist es?",
        "answers": [
            "Ein Sarg",
            "Ein Haus",
            "Eine Wiege",
            "Ein Grabstein"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "⚰️ Der Schreiner stellt ihn her, der Hinterbliebene kauft ihn, und der Verstorbene liegt darin."
    },
  {
        "id": "q_ra_042",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was wandert durch das ganze Haus, steht aber immer in der Ecke?",
        "answers": [
            "Ein Staubsauger",
            "Ein Besen",
            "Eine Spinne",
            "Ein Kühlschrank"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧹 Man kehrt das Haus mit dem Besen und stellt ihn danach wieder in die Ecke."
    },
  {
        "id": "q_ra_043",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wie kann ein Mann acht Tage lang ohne Schlaf auskommen?",
        "answers": [
            "Mit viel Kaffee",
            "Durch Meditation",
            "Er schläft einfach nachts",
            "Das ist unmöglich"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "😴 Acht Tage lang am 'Tag' wach zu sein ist normal, wenn man nachts schläft."
    },
  {
        "id": "q_ra_044",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Zutat fehlt in einem Kuchen, wenn man vergisst, Mehl hineinzugeben?",
        "answers": [
            "Zucker",
            "Eier",
            "Backpulver",
            "Mehl"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥮 Fangfrage: Es fehlt schlichtweg das Mehl."
    },
  {
        "id": "q_ra_045",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was kann man zwar brechen, aber niemals anfassen?",
        "answers": [
            "Ein Versprechen / Das Schweigen",
            "Ein Stock",
            "Ein Herz",
            "Glas"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🤝 Ein Wort oder Versprechen bricht man im übertragenen Sinne."
    },
  {
        "id": "q_ra_046",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat zwei Beine, kann aber nicht stehen?",
        "answers": [
            "Ein Stuhl",
            "Eine Hose",
            "Ein Vogel",
            "Ein Tisch"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "👖 Eine Hose hat zwei Hosenbeine, fällt aber ohne Träger um."
    },
  {
        "id": "q_ra_047",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Zwei Väter und zwei Söhne gehen angeln. Sie fangen insgesamt 3 Fische, und jeder bekommt genau einen ganzen Fisch. Wie ist das möglich?",
        "answers": [
            "Einer hat seinen Fisch verloren",
            "Sie haben die Fische geteilt",
            "Es sind Großvater, Vater und Sohn (3 Personen)",
            "Ein Fisch war trächtig"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🎣 3 Generationen: Der Großvater ist Vater, der Vater ist Sohn & Vater, der Junge ist Sohn."
    },
  {
        "id": "q_ra_048",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was wächst nach unten statt nach oben?",
        "answers": [
            "Bambus",
            "Eiche",
            "Sonnenblume",
            "Ein Eiszapfen / Karotte"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "❄️ Eiszapfen wachsen durch herabtropfendes Wasser nach unten."
    },
  {
        "id": "q_ra_049",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat ein Auge, kann aber absolut nichts sehen?",
        "answers": [
            "Eine Nadel / Der Wirbelsturm",
            "Ein Zyklop",
            "Ein Blinder",
            "Ein Fernrohr"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🪡 Das Öhr einer Nähnadel nennt man Nadelöhr oder Nadelauge."
    },
  {
        "id": "q_ra_050",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wenn du mich hast, willst du mich teilen. Wenn du mich teilst, hast du mich nicht mehr. Was bin ich?",
        "answers": [
            "Ein Kuchen",
            "Ein Geheimnis",
            "Geld",
            "Ein Apfel"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🤫 Ein verratenes Geheimnis ist kein Geheimnis mehr."
    },
  {
        "id": "q_ra_051",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Schlange ist nicht giftig und kann man essen?",
        "answers": [
            "Die Blindschleiche",
            "Die Kobra",
            "Die Schaumzucker-Schlange / Teigschlange",
            "Die Viper"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍬 Süßigkeiten-Schlangen aus Fruchtgummi oder Schaumzucker."
    },
  {
        "id": "q_ra_052",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Zahn beißt niemals zu?",
        "answers": [
            "Der Weisheitszahn",
            "Der Eckzahn",
            "Der Schneidezahn",
            "Der Löwenzahn / Zahnrad"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌼 Der Löwenzahn ist eine gelbe Wiesenblume."
    },
  {
        "id": "q_ra_053",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was haben ein Elefant und eine Bäckerei gemeinsam?",
        "answers": [
            "Beide haben Tuten (Tüten / Tuten)",
            "Beide sind grau",
            "Beide machen Lärm",
            "Gar nichts"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🐘 Der Elefant tutet mit dem Rüssel, die Bäckerei packt Brötchen in Tüten."
    },
  {
        "id": "q_ra_054",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was macht das Pferd, wenn es die Schaufel sieht?",
        "answers": [
            "Es gräbt ein Loch",
            "Es macht einen Schritt zur Seite (oder gar nichts)",
            "Es frißt sie auf",
            "Es wiehert dreimal"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐴 Wortspiel / Scherzfrage."
    },
  {
        "id": "q_ra_055",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was fliegt über das Wasser und wird niemals nass?",
        "answers": [
            "Ein Entenküken",
            "Ein Wasserläufer",
            "Der Schatten eines Vogels",
            "Luft"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🦅 Ein Schatten projiziert nur Lichtunterschiede und berührt die Oberfläche nicht stofflich."
    },
  {
        "id": "q_ra_056",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welches Schild schützt nicht vor Regen oder Hieben?",
        "answers": [
            "Der Ritterschild",
            "Das Dach",
            "Der Regenschirm",
            "Das Verkehrsschild / Aushängeschild"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🛑 Verkehrsschilder dienen der Straßennavigation."
    },
  {
        "id": "q_ra_057",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wenn ein rotes Haus links steht und ein blaues Haus rechts steht, wo steht das weiße Haus?",
        "answers": [
            "In Washington D.C. (USA)",
            "In der Mitte",
            "Dahinter",
            "Gegenüber"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🏛️ Das 'White House' ist der Regierungssitz des US-Präsidenten."
    },
  {
        "id": "q_ra_058",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was verliert der Mensch, wenn er rennt?",
        "answers": [
            "Die Schuhe",
            "Den Atem / Schweiß",
            "Das Geld",
            "Die Geduld"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🏃‍♂️ Beim Sprinten kommt man 'außer Atem'."
    },
  {
        "id": "q_ra_059",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Hahn kräht niemals am Morgen?",
        "answers": [
            "Der Schornsteinhahn",
            "Der Mistgockel",
            "Der Wasserhahn",
            "Der Vogel"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚰 Aus dem Wasserhahn fließt Trinkwasser."
    },
  {
        "id": "q_ra_060",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Knopf lässt sich nicht an ein Hemd nähen?",
        "answers": [
            "Der Hosenknopf",
            "Der Plastikknopf",
            "Der Mantelknopf",
            "Der Drehknopf / Pilzknopf"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📻 Ein Schalter- oder Drehknopf an Elektrogeräten."
    },
  {
        "id": "q_ra_061",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wie kann man Wasser in einem Sieb tragen?",
        "answers": [
            "Wenn das Wasser gefroren ist (Eis)",
            "Gar nicht",
            "Indem man sehr schnell rennt",
            "Mit Folie darunter"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧊 Als Eiswürfel bleibt Wasser problemlos im Sieb liegen."
    },
  {
        "id": "q_ra_062",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was haben ein Fluss und ein Auge gemeinsam?",
        "answers": [
            "Beide fließen",
            "Beide haben ein Bett / ein Ufer / Lider",
            "Beide sind blau",
            "Gar nichts"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🌊 Der Fluss liegt im Flussbett, das Auge in der Augenhöhle."
    },
  {
        "id": "q_ra_063",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was wird umso kürzer, je länger man daran zieht?",
        "answers": [
            "Ein Seil",
            "Ein Gummiband",
            "Eine Zigarette / Eine Kerze",
            "Ein Faden"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚬 Je öfter man an einer Zigarette zieht, desto mehr brennt sie ab."
    },
  {
        "id": "q_ra_064",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat 88 Tasten, kann aber kein einziges Wort tippen?",
        "answers": [
            "Eine Schreibmaschine",
            "Ein Supercomputer",
            "Eine Fernbedienung",
            "Ein Flügel / Klavier"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎹 Ein Standardklavier hat genau 88 Klaviertasten."
    },
  {
        "id": "q_ra_065",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Ein Lkw-Fahrer fährt eine Einbahnstraße in falscher Richtung entlang. Ein Polizist sieht ihn, hält ihn aber nicht an. Warum?",
        "answers": [
            "Der Lkw-Fahrer geht zu Fuß",
            "Der Polizist war blind",
            "Es war nachts",
            "Er hatte Blaulicht an"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🚶‍♂️ Zu Fuß darf man Einbahnstraßen in beide Richtungen nutzen."
    },
  {
        "id": "q_ra_066",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was ist umso leichter, je größer es wird?",
        "answers": [
            "Ein Stein",
            "Ein Luftballon",
            "Ein Buch",
            "Ein Haus"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🎈 Mit Helium gefüllt steigt ein größerer Ballon leichter auf."
    },
  {
        "id": "q_ra_067",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was gehört dir ganz allein, wird aber von jedem Menschen benutzt, der dich kennt?",
        "answers": [
            "Dein Fahrrad",
            "Deine Schuhe",
            "Dein Name",
            "Dein Bett"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🗣️ Klassisches Namensrätsel."
    },
  {
        "id": "q_ra_068",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wie nennt man ein Mann, der in einem Haus ohne Fenster und Türen wohnt?",
        "answers": [
            "Ein Einsiedler",
            "Ein Gefangener",
            "Ein Roboter",
            "Ein Kükenei / Pilz"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🥚 Das Küken im Ei."
    },
  {
        "id": "q_ra_069",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Maus fliegt durch die Nacht und saugt Insekten?",
        "answers": [
            "Die Fledermaus",
            "Die Computermaus",
            "Die Feldmaus",
            "Die Spitzmaus"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🦇 Fledermäuse sind fliegende Säugetiere."
    },
  {
        "id": "q_ra_070",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Insel klingt wie ein Kleidungsstück?",
        "answers": [
            "Mallorca",
            "Rügen (oder Ärmelkanal)",
            "Sylt",
            "Kreta"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "👔 Ärmelkanal oder 'Rüschen/Rügen'."
    },
  {
        "id": "q_ra_071",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welches Band verknüpft zwei Menschen, ohne dass man es sehen kann?",
        "answers": [
            "Ein Geschenkband",
            "Ein Absperrband",
            "Das Eheband / Die Freundschaft",
            "Ein Maßband"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "💍 Das Band der Ehe oder Freundschaft."
    },
  {
        "id": "q_ra_072",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat zwei Füße, kann aber nicht laufen?",
        "answers": [
            "Ein Vogel",
            "Ein Stuhl",
            "Ein Sessel",
            "Der Zirkel / Der Versfuß"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📐 Ein Geometrie-Zirkel hat zwei Metallbeine/Füße."
    },
  {
        "id": "q_ra_073",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welches Tier hat die Zähne im Magen?",
        "answers": [
            "Der Krebs / Hummer",
            "Der Hai",
            "Der Oktopus",
            "Die Krokodilkröte"
        ],
        "correct": 0,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🦀 Krebse besitzen einen Kau-Magen (Magenmühle) mit Chitin-Zähnen."
    },
  {
        "id": "q_ra_074",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was läuft den ganzen Tag und kommt nie vom Fleck?",
        "answers": [
            "Ein Sportler",
            "Die Uhr / Das Laufband",
            "Ein Hund",
            "Ein Bach"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "⏰ Die Uhr 'läuft'."
    },
  {
        "id": "q_ra_075",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wer hat einen Bart, wird aber niemals rasiert?",
        "answers": [
            "Der Weihnachtsmann",
            "Ein Pirat",
            "Der Schlüssel / Der Jammerbart",
            "Ein Ziegenbock"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🔑 Der profilierte Teil des Schlüssels heißt Schlüsselbart."
    },
  {
        "id": "q_ra_076",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was brennt Tag und Nacht, ohne zu verbrennen?",
        "answers": [
            "Eine Kerze",
            "Ein Lagerfeuer",
            "Die Sonne",
            "Brennessel / Die Liebe"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌿 Die Brennnessel juckt/brennt auf der Haut."
    },
  {
        "id": "q_ra_077",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Fluss fließt nicht?",
        "answers": [
            "Der Schweißfluss / Notenfluss",
            "Der Rhein",
            "Die Donau",
            "Der Nil"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎶 Ein Redefluss oder Notenfluss."
    },
  {
        "id": "q_ra_078",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wer spricht alle Sprachen der Welt, ohne eine einzige Schule besucht zu haben?",
        "answers": [
            "Ein Dolmetscher",
            "Das Echo",
            "Ein Papagei",
            "Ein Roboter"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "Echos wiederholen jedes Wort in jeder Sprache exakt."
    },
  {
        "id": "q_ra_079",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat Nadeln, kann aber nicht nähen?",
        "answers": [
            "Ein Schneider",
            "Eine Nähmaschine",
            "Ein Tannenbaum / Igel",
            "Eine Kaktee"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌲 Nadelbäume tragen Tannennadeln."
    },
  {
        "id": "q_ra_080",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was steht auf einem Bein und hat den Kopf voll Stein?",
        "answers": [
            "Ein Storch",
            "Ein Pilz",
            "Ein Denkmal",
            "Der Kopfsteinpflaster-Macher / Der Neugierige"
        ],
        "correct": 3,
        "difficulty": "schwer",
        "points": 10,
        "explanation": "🍄 Ein Pilz mit fester Kappe."
    },
  {
        "id": "q_ra_081",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Ein Mann blickt aus dem Fenster bei strömendem Regen. Er hat keinen Schirm und keinen Hut. Seine Haare werden kein bisschen nass. Warum?",
        "answers": [
            "Er hat eine Glatze",
            "Er stand drinnen",
            "Er trug eine Perücke",
            "Der Regen war vorbei"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "👨‍🦲 Wer keine Haare hat, dessen Haare können nicht nass werden."
    },
  {
        "id": "q_ra_082",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was wird weich, wenn man es erhitzt, und hart, wenn man es kocht?",
        "answers": [
            "Schokolade",
            "Ein Hühnerei",
            "Wachs",
            "Butter"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥚 Das flüssige Eiweiß und Eigelb gerinnen beim Kochen und werden fest."
    },
  {
        "id": "q_ra_083",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Brille korrigiert die Sehschärfe nicht?",
        "answers": [
            "Lesebrille",
            "Gleitsichtbrille",
            "Die Taucherbrille / Sonnenbrille",
            "Hornbrille"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🥽 Taucherbrillen schützen die Augen unter Wasser vor Reizungen."
    },
  {
        "id": "q_ra_084",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Saft schmeckt niemanden gut?",
        "answers": [
            "Apfelsaft",
            "Orangensaft",
            "Traubensaft",
            "Der Datensaft / Kazentat-Saft"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "⚡ Ein Wortspiel."
    },
  {
        "id": "q_ra_085",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was fliegt ohne Flügel, weint ohne Tränen und breitet sich überall aus?",
        "answers": [
            "Die Rauchwolke",
            "Der Wind",
            "Das Flugzeug",
            "Das Wasser"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "💨 Rauch steigt empor und breitet sich im Raum aus."
    },
  {
        "id": "q_ra_086",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Kuchen schmeckt extrem bitter?",
        "answers": [
            "Schokokuchen",
            "Der Seifenkuchen / Kuhkuchen",
            "Käsekuchen",
            "Apfelkuchen"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧼 Ein Seifenstück nennt man auch Seifenkuchen."
    },
  {
        "id": "q_ra_087",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Baum hat keine Blätter und keine Wurzeln?",
        "answers": [
            "Tannenbaum",
            "Laubbaum",
            "Der Purzelbaum",
            "Bonsai"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🤸‍♂️ Ein Purzelbaum ist eine sportliche Überroll-Bewegung."
    },
  {
        "id": "q_ra_088",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was ist grün, klebrig und hüpft durch den Wald?",
        "answers": [
            "Ein Laubfrosch",
            "Ein Grashüpfer",
            "Ein Bär",
            "Ein Kaugummi-Frosch"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐸 Scherzrätsel."
    },
  {
        "id": "q_ra_089",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Vogel hat das Hören im Namen?",
        "answers": [
            "Der Auerhahn ('Auer')",
            "Der Specht",
            "Der Falke",
            "Die Taube"
        ],
        "correct": 0,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🐦 Worträtsel."
    },
  {
        "id": "q_ra_090",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Leiter hat keine Sprossen?",
        "answers": [
            "Die Strickleiter",
            "Der Schulleiter / Tonleiter",
            "Die Anlegeleiter",
            "Die Stehleiter"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎵 Eine Tonleiter oder ein Direktor."
    },
  {
        "id": "q_ra_091",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Star hat keine Fans und singt nicht?",
        "answers": [
            "Ein Popstar",
            "Ein Hollywoodstar",
            "Der Vogel Star",
            "Ein Stern"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐦 Der Star ist eine heimische Vogelart."
    },
  {
        "id": "q_ra_092",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was kann man zwar lesen, aber nicht schreiben?",
        "answers": [
            "Ein Buch",
            "Einen Brief",
            "Ein Schild",
            "Die Temperatur / Die Uhrzeit"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌡️ Man liest die Temperatur am Thermometer ab."
    },
  {
        "id": "q_ra_093",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Tisch hat keine Beine?",
        "answers": [
            "Der Nachtisch",
            "Der Schreibtisch",
            "Der Esstisch",
            "Der Couchtisch"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍨 Der Nachtisch ist ein süßes Dessert."
    },
  {
        "id": "q_ra_094",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was fällt tief, ohne sich zu verletzen?",
        "answers": [
            "Ein Mensch",
            "Der Schnee / Der Regen",
            "Ein Stein",
            "Ein Vorgebirge"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "❄️ Schneeflocken schweben sanft zu Boden."
    },
  {
        "id": "q_ra_095",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welches Gewässer hat kein Wasser?",
        "answers": [
            "Der Bodensee",
            "Der Pazifik",
            "Das Gewässer auf der Landkarte",
            "Der Pfütze"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🗺️ Geografische Zeichnung."
    },
  {
        "id": "q_ra_096",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat zwei Flügel und kann nicht fliegen, hat zwei Beine und kann nicht gehen?",
        "answers": [
            "Ein Huhn",
            "Ein Pinguin",
            "Ein Denkmal",
            "Eine geöffnete Schere"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "✂️ Scherenbeine und Scherenschneiden."
    },
  {
        "id": "q_ra_097",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wie nennt man ein Kaninchen im Fitnessstudio?",
        "answers": [
            "Pumpernickel / Pumper-Muckel",
            "Muskel-Hase",
            "Fitness-Muckel",
            "Sport-Kaninchen"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐇 Wortspiel um Pumpernickel."
    },
  {
        "id": "q_ra_098",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Schimmel kann nicht reiten?",
        "answers": [
            "Pferd",
            "Der Brotschimmel / Käseschimmel",
            "Apfelschimmel",
            "Zirkuspferd"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍞 Pilzbefall auf Lebensmitteln."
    },
  {
        "id": "q_ra_099",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welches Kleidstück trägt man nie am Körper?",
        "answers": [
            "Das Sommerkleid",
            "Die Hose",
            "Das Segelkleid / Wandkleid",
            "Der Mantel"
        ],
        "correct": 2,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "⛵ Farbüberzug oder Segelausstattung."
    },
  {
        "id": "q_ra_100",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hat 12 Gesichter, aber keinen einzigen Kopf?",
        "answers": [
            "Eine Uhr",
            "Ein Würfel",
            "Ein Spiegel",
            "Ein Zwölfflächner (Dodekaeder) / Kalender"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "📅 Ein Jahreskalender mit 12 Monatsblättern."
    },
  {
        "id": "q_ra_101",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was hängt an der Wand, macht 'Tick-Tack' und wenn sie herunterfällt, ist die Uhr kaputt?",
        "answers": [
            "Eine Wanduhr",
            "Ein Pendel",
            "Ein Bild",
            "Ein Kalender"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🕰️ Klassisches Scherzrätsel."
    },
  {
        "id": "q_ra_102",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wer hat Hut und Fuß, aber keinen Kopf und keine Beine?",
        "answers": [
            "Ein Baum",
            "Ein Pilz",
            "Ein Wanderer",
            "Ein Regenschirm"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍄 Botanisch besteht der Pilzfruchtkörper aus Hut und Stiel/Fuß."
    },
  {
        "id": "q_ra_103",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was wird immer billiger, je mehr man kauft?",
        "answers": [
            "Gold",
            "Aktien",
            "Großpackungen (Mengenrabatt)",
            "Benzin"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🛒 Der Stückpreis sinkt bei Abnahme größerer Mengen."
    },
  {
        "id": "q_ra_104",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welche Brücke wird ohne Steine und Holz gebaut?",
        "answers": [
            "Stahlbrücke",
            "Steinbrücke",
            "Holzbrücke",
            "Die Eisbrücke / Luftbrücke"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "❄️ Eine gefrorene Eisschicht über dem Fluss."
    },
  {
        "id": "q_ra_105",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was macht zwei Menschen aus einer Person?",
        "answers": [
            "Der Spiegel / Ein Foto",
            "Ein Schatten",
            "Eine Brille",
            "Ein Doppelgänger"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🪞 Das Spiegelbild verdoppelt den optischen Eindruck."
    },
  {
        "id": "q_ra_106",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welches Tier kann nicht springen?",
        "answers": [
            "Das Känguru",
            "Der Elefant",
            "Der Frosch",
            "Die Katze"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐘 Elefanten sind die einzigen Säugetiere, die nicht mit allen vier Beinen gleichzeitig vom Boden abheben können."
    },
  {
        "id": "q_ra_107",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Fisch braucht die meiste Kleidung?",
        "answers": [
            "Der Hai",
            "Der Hering",
            "Der Zander / Der Kaltfisch",
            "Die Scholle"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🐟 Wortspiel."
    },
  {
        "id": "q_ra_108",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wer baut Häuser für andere und hat selbst keines?",
        "answers": [
            "Die Schnecke",
            "Der Biber",
            "Der Einsiedler",
            "Der Maurermeister / Bauarbeiter"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🧱 Berufsrätsel."
    },
  {
        "id": "q_ra_109",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was ist rot, rund und hat einen Stein im Herzen?",
        "answers": [
            "Die Kirsche",
            "Der Apfel",
            "Die Erdbeere",
            "Die Tomate"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🍒 Kirschen besitzen im Zentrum einen harten Kern/Stein."
    },
  {
        "id": "q_ra_110",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was ist weicher als Butter, kann aber Steine spalten?",
        "answers": [
            "Luft",
            "Das Wasser (Frostsprengung)",
            "Wachs",
            "Teig"
        ],
        "correct": 1,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "💧 Wasser dringt in Felsspalten ein und sprengt den Stein beim Gefrieren."
    },
  {
        "id": "q_ra_111",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wo kommt der Donnerstag vor dem Mittwoch?",
        "answers": [
            "Im Schaltjahr",
            "Auf dem Kalender",
            "Im Wörterbuch (Lexikon)",
            "Niemals"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "📖 Alphabetische Sortierung: D steht vor M."
    },
  {
        "id": "q_ra_112",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was steigt, fällt aber niemals ab?",
        "answers": [
            "Ein Flugzeug",
            "Der Luftdruck",
            "Das Fieber",
            "Das eigene Alter"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🎂 Das Alter nimmt im Laufe des Lebens stetig zu."
    },
  {
        "id": "q_ra_113",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was fliegt ohne Flügel, weint ohne Tränen und vergeht im Wind?",
        "answers": [
            "Die Wolke",
            "Der Rauch",
            "Der Vogel",
            "Das Blatt"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌧️ Klassische Variante."
    },
  {
        "id": "q_ra_114",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welches Buch hat keine Seiten?",
        "answers": [
            "Ein e-Book",
            "Das Taschenbuch / Malbuch",
            "Das Bilderbuch",
            "Das Wörterbuch"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "💻 Ein digitales e-Book."
    },
  {
        "id": "q_ra_115",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was pfeift ohne Mund und rennt ohne Beine?",
        "answers": [
            "Der Zug",
            "Der Wasserkocher",
            "Der Wind",
            "Ein Hund"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌬️ Der Wind pfeift durch Ritzen und zieht übers Land."
    },
  {
        "id": "q_ra_116",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was brennt ohne Flamme und leuchtet ohne Strom?",
        "answers": [
            "Eine Lampe",
            "Ein Ofen",
            "Eine Kerze",
            "Die Brennnessel / Das Glühwürmchen"
        ],
        "correct": 3,
        "difficulty": "mittel",
        "points": 10,
        "explanation": "🪲 Das Glühwürmchen erzeugt kaltes Licht (Biolumineszenz)."
    },
  {
        "id": "q_ra_117",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Welcher Schlüssel öffnet jedes Herz?",
        "answers": [
            "Die Höflichkeit / Das Lächeln",
            "Der Hausschlüssel",
            "Der Autoschlüssel",
            "Der Dietrich"
        ],
        "correct": 0,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "❤️ Sprichwort."
    },
  {
        "id": "q_ra_118",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was ist leichter als eine Feder, aber selbst der stärkste Mann kann es nicht 5 Minuten halten?",
        "answers": [
            "Ein Luftballon",
            "Der Atem",
            "Eine Seifenblase",
            "Gedanke"
        ],
        "correct": 1,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🫁 Den Atem anzuhalten ist physisch auf wenige Minuten begrenzt."
    },
  {
        "id": "q_ra_119",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Was wird trocken, wenn man es in Wasser legt?",
        "answers": [
            "Ein Stein",
            "Ein Fisch",
            "Das Löschpapier / Das Handtuch",
            "Ein Badeschwamm"
        ],
        "correct": 2,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🌊 Scherzfrage."
    },
  {
        "id": "q_ra_120",
        "category": "spass_raetsel",
        "area": "spass",
        "subject": "raetsel",
        "question": "Wer sieht alles, hört alles und sagt kein einziges Wort?",
        "answers": [
            "Ein Spion",
            "Der Richter",
            "Ein Buch",
            "Der Spiegel"
        ],
        "correct": 3,
        "difficulty": "leicht",
        "points": 10,
        "explanation": "🪞 Der Spiegel wirft Bilder lautlos zurück."
    },
  { id: "q1446", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was wird nasser, je mehr es trocknet?", answers: ["Ein Regenschirm", "Ein Stein", "Ein Handtuch", "Ein Schuh"], correct: 2, difficulty: "mittel", points: 10, explanation: "Je mehr es abtrocknet, desto nasser wird es selbst." },
  { id: "q1447", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Ein Bauer hat 17 Schafe. Alle bis auf 9 laufen weg. Wie viele bleiben?", answers: ["9", "17", "18", "8"], correct: 0, difficulty: "mittel", points: 10, explanation: "'Alle bis auf 9' heißt: genau 9 bleiben übrig." },
  { id: "q1448", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat Städte, aber keine Häuser, und Wasser, aber keine Fische?", answers: ["Eine Zeitung", "Ein Fernseher", "Ein Buch", "Eine Landkarte"], correct: 3, difficulty: "mittel", points: 10, explanation: "Auf einer Landkarte sind Städte und Flüsse eingezeichnet." },
  { id: "q1449", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Wie viele Monate haben 28 Tage?", answers: ["Nur einer", "Sechs", "Zwei", "Alle 12"], correct: 3, difficulty: "mittel", points: 10, explanation: "Jeder Monat hat mindestens 28 Tage." },
  { id: "q1450", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was geht hoch, wenn der Regen runterkommt?", answers: ["Der Regenschirm", "Die Temperatur", "Die Sonne", "Der Boden"], correct: 0, difficulty: "mittel", points: 10, explanation: "Ein kleines Wortspiel-Rätsel." },
  { id: "q1451", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Setze die Reihe fort: 2, 4, 8, 16, ...", answers: ["32", "20", "24", "36"], correct: 0, difficulty: "mittel", points: 10, explanation: "Jede Zahl ist das Doppelte der vorherigen." },
  { id: "q1452", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Setze fort: 1, 1, 2, 3, 5, 8, ...", answers: ["18", "11", "16", "13"], correct: 3, difficulty: "mittel", points: 10, explanation: "Fibonacci-Folge: Jede Zahl ist die Summe der beiden vorherigen." },
  { id: "q1453", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Ein Zug fährt von Köln nach Berlin. Was fährt er, wenn er zurückfährt?", answers: ["Von Berlin nach Köln", "Nach München", "Er bleibt stehen", "Nach Hamburg"], correct: 0, difficulty: "mittel", points: 10, explanation: "Eine Scherzfrage, bei der man oft zu kompliziert denkt." },
  { id: "q1454", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was ist schwerer: 1 kg Federn oder 1 kg Blei?", answers: ["Das Blei, es ist viel dichter", "Man kann es nicht sagen", "Beides ist exakt gleich schwer", "Die Federn, es sind mehr davon"], correct: 2, difficulty: "mittel", points: 10, explanation: "Ein Kilogramm ist ein Kilogramm – nur das Volumen unterscheidet sich." },
  { id: "q1455", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Vater und Sohn sind zusammen 60 Jahre. Der Vater ist dreimal so alt. Wie alt ist der Sohn?", answers: ["15", "20", "23", "12"], correct: 0, difficulty: "mittel", points: 10, explanation: "Sohn 15, Vater 45 – zusammen 60 und dreimal so alt." },
  { id: "q1456", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Wie oft kann man 10 von 100 abziehen?", answers: ["Einmal, danach ist es 90", "Zehnmal in der Praxis", "Genau fünfmal im Alltag", "Unendlich oft im Alltag"], correct: 0, difficulty: "mittel", points: 10, explanation: "Beim zweiten Mal zieht man ja von 90 ab, nicht mehr von 100." },
  { id: "q1457", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was kann man fangen, aber nicht werfen?", answers: ["Ein Nickerchen", "Einen Stein", "Eine Erkältung", "Einen Ball"], correct: 2, difficulty: "mittel", points: 10, explanation: "Man 'fängt sich' eine Erkältung ein." },
  { id: "q1458", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat einen Anfang, eine Mitte und ein Ende, aber keinen Körper?", answers: ["Eine Geschichte", "Ein Buch", "Ein Tag", "Ein Wort"], correct: 3, difficulty: "mittel", points: 10, explanation: "Ein Wort hat Anfang, Mitte und Ende – aber keinen physischen Körper." },
  { id: "q1459", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was gehört einem Menschen, wird aber von anderen mehr benutzt?", answers: ["Das Geld", "Das Gesicht", "Die Zeit", "Der Name"], correct: 3, difficulty: "mittel", points: 10, explanation: "Der eigene Name gehört einem – aber andere benutzen ihn häufiger." },
  { id: "q1460", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was kann man essen, aber nicht kochen?", answers: ["Eine Banane", "Salat", "Eiscreme", "Obst"], correct: 2, difficulty: "mittel", points: 10, explanation: "Eiscreme wird gegessen, aber nicht gekocht – sie wird gefroren." },
  { id: "q1461", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat viele Löcher, aber hält Wasser?", answers: ["Ein Netz", "Ein Schwamm", "Ein Eimer", "Ein Sieb"], correct: 1, difficulty: "mittel", points: 10, explanation: "Ein Schwamm hat viele kleine Löcher und kann trotzdem Wasser aufnehmen." },
  { id: "q1462", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was ist größer als die Ewigkeit, aber kleiner als ein Tropfen?", answers: ["Die Liebe", "Nichts", "Ein Gedanke", "Die Zeit"], correct: 1, difficulty: "mittel", points: 10, explanation: "Nichts ist größer als alles und kleiner als alles – ein klassisches Rätsel." },
  { id: "q1463", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was wird kürzer, wenn man es verlängert?", answers: ["Das Leben", "Ein Seil", "Eine Kerze", "Der Tag"], correct: 3, difficulty: "mittel", points: 10, explanation: "Wenn man den Tag verlängert, wird die Nacht kürzer – eine spielerische Antwort." },
  { id: "q1464", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat Schlüssel, aber keine Schlösser?", answers: ["Ein Klavier", "Ein Keyboard", "Ein Auto", "Ein Haus"], correct: 1, difficulty: "mittel", points: 10, explanation: "Ein Keyboard hat Tasten (Keys), aber keine Schlösser." },
  { id: "q1465", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was ist immer vor dir, aber du kannst es nicht sehen?", answers: ["Das Licht", "Die Zukunft", "Der Wind", "Die Vergangenheit"], correct: 1, difficulty: "mittel", points: 10, explanation: "Die Zukunft ist immer vor dir – aber man kann sie nicht sehen." },
  { id: "q1466", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat einen Kopf und einen Schwanz, aber keinen Körper?", answers: ["Eine Münze", "Ein Komet", "Ein Brief", "Ein Tier"], correct: 0, difficulty: "mittel", points: 10, explanation: "Eine Münze hat Kopf (Bild) und Zahl (Schwanz), aber keinen Körper." },
  { id: "q1467", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was wird größer, je mehr man davon nimmt?", answers: ["Ein Berg", "Eine Schuld", "Ein Loch", "Ein Blatt"], correct: 2, difficulty: "mittel", points: 10, explanation: "Je mehr man von einem Loch wegnimmt, desto größer wird es." },
  { id: "q1468", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat Zähne, aber kann nicht beißen?", answers: ["Ein Löwe", "Ein Säge", "Ein Reißverschluss", "Ein Kamm"], correct: 3, difficulty: "mittel", points: 10, explanation: "Ein Kamm hat Zähne, aber er kann nicht beißen." },
  { id: "q1170", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was kann man brechen, ohne es zu berühren?", answers: ["Ein Versprechen", "Ein Rekord", "Ein Knochen", "Ein Glas"], correct: 0, difficulty: "mittel", points: 10, explanation: "Ein Versprechen kann man brechen, ohne es anzufassen." },
  { id: "q1171", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was ist immer vor dir, aber nie zu sehen?", answers: ["Dein Rücken", "Die Zeit", "Die Zukunft", "Die Vergangenheit"], correct: 2, difficulty: "mittel", points: 10, explanation: "Die Zukunft ist immer vor dir – aber sichtbar wird sie erst später." },
  { id: "q1173", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was geht durch die Wand, ohne einen Ton zu machen?", answers: ["Der Schall", "Das Licht", "Eine Nadel", "Ein Gedanke"], correct: 1, difficulty: "mittel", points: 10, explanation: "Licht dringt durch Wände – Schall macht Geräusche." },
  { id: "q1174", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat viele Blätter, aber ist kein Baum?", answers: ["Ein Salat", "Ein Buch", "Ein Kalender", "Eine Pflanze"], correct: 1, difficulty: "mittel", points: 10, explanation: "Ein Buch hat Blätter (Seiten), ist aber kein Baum." },
  { id: "q1175", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was kann fliegen, aber hat keine Flügel?", answers: ["Ein Vogel", "Ein Insekt", "Eine Rakete", "Ein Flugzeug"], correct: 2, difficulty: "mittel", points: 10, explanation: "Eine Rakete fliegt ohne Flügel – ein Vogel nicht." },
  { id: "q1176", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was ist rund, aber kein Ball?", answers: ["Ein Rad", "Eine Münze", "Ein Teller", "Ein Reifen"], correct: 1, difficulty: "mittel", points: 10, explanation: "Eine Münze ist rund, aber kein Ball." },
  { id: "q1177", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat Zähne, aber kann nicht kauen?", answers: ["Ein Buch", "Ein Säge", "Ein Kamm", "Ein Brief"], correct: 2, difficulty: "mittel", points: 10, explanation: "Ein Kamm hat Zähne, aber er kann nicht kauen." },
  { id: "q1178", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was steigt, wenn es fällt?", answers: ["Der Preis", "Der Ballon", "Die Temperatur", "Der Regenschirm"], correct: 3, difficulty: "mittel", points: 10, explanation: "Ein Regenschirm geht hoch, wenn es regnet – also wenn Wasser fällt." },
  { id: "q1179", category: "spass_raetsel", area: "spass", subject: "raetsel", question: "Was hat ein Ende, aber keinen Anfang?", answers: ["Ein Tag", "Ein Kreis", "Ein Leben", "Eine Reise"], correct: 2, difficulty: "mittel", points: 10, explanation: "Ein Leben hat ein Ende, aber der Anfang ist schwer zu fassen." },
  {
    id: "rae_ext_001",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Städte, aber keine Häuser, Wälder, aber keine Bäume, Wasser, aber keine Fische?",
    answers: ["Eine Landkarte", "Ein Buch", "Ein Foto", "Ein Traum"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Karte."
  },
  {
    id: "rae_ext_002",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was wird nasser, je mehr es trocknet?",
    answers: ["Ein Handtuch", "Ein Schwamm", "Ein Stein", "Ein Glas"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Handtuch."
  },
  {
    id: "rae_ext_003",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat einen Hals, aber keinen Kopf?",
    answers: ["Eine Flasche", "Ein Hemd", "Ein Baum", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Flasche."
  },
  {
    id: "rae_ext_004",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Zähne, aber kann nicht beißen?",
    answers: ["Ein Kamm", "Ein Reißverschluss", "Ein Sägeblatt", "Alle möglich"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Kamm."
  },
  {
    id: "rae_ext_005",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was geht um die Welt, bleibt aber in der Ecke?",
    answers: ["Eine Briefmarke", "Ein Flugzeug", "Ein Schiff", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Briefmarke."
  },
  {
    id: "rae_ext_006",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Schlüssel, aber keine Schlösser?",
    answers: ["Ein Klavier", "Eine Tür", "Ein Auto", "Ein Haus"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Klavier."
  },
  {
    id: "rae_ext_007",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat ein Bett, schläft aber nie?",
    answers: ["Ein Fluss", "Ein Auto", "Ein Baum", "Ein Stein"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Flussbett."
  },
  {
    id: "rae_ext_008",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was wird größer, wenn man es teilt?",
    answers: ["Ein Geheimnis / Freude", "Ein Stein", "Ein Auto", "Ein Apfel"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Geheimnis."
  },
  {
    id: "rae_ext_009",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Hände, aber kann nicht klatschen?",
    answers: ["Eine Uhr", "Ein Mensch", "Ein Roboter", "Ein Affe"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Uhr."
  },
  {
    id: "rae_ext_010",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was fliegt ohne Flügel?",
    answers: ["Zeit", "Ein Stein", "Ein Auto", "Ein Haus"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Zeit."
  },
  {
    id: "rae_ext_011",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat ein Gesicht und zwei Hände, aber keinen Körper?",
    answers: ["Eine Uhr", "Ein Foto", "Ein Spiegel", "Ein Bild"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Uhr."
  },
  {
    id: "rae_ext_012",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man fangen, aber nicht werfen?",
    answers: ["Eine Erkältung", "Einen Ball", "Einen Stein", "Einen Apfel"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Erkältung."
  },
  {
    id: "rae_ext_013",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat vier Beine morgens, zwei mittags, drei abends? (Sphinx)",
    answers: ["Der Mensch", "Ein Hund", "Ein Tisch", "Ein Stuhl"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Kind, Erwachsener, Greis mit Stock."
  },
  {
    id: "rae_ext_014",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was brennt ohne Feuer?",
    answers: ["Ein Herz / Ehrgeiz", "Ein Stein", "Ein Glas", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Übertragen."
  },
  {
    id: "rae_ext_015",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat viele Blätter, aber ist kein Baum?",
    answers: ["Ein Buch", "Ein Strauch", "Ein Gras", "Ein Farn"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Buch."
  },
  {
    id: "rae_ext_016",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was steht in der Mitte von Paris?",
    answers: ["Der Buchstabe R", "Der Eiffelturm", "Die Seine", "Notre-Dame"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Pa-r-is."
  },
  {
    id: "rae_ext_017",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist schwerer: 1 kg Federn oder 1 kg Steine?",
    answers: ["Gleich schwer", "Federn", "Steine", "Luft"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Beide 1 kg."
  },
  {
    id: "rae_ext_018",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Ohren, aber kann nicht hören?",
    answers: ["Ein Maiskolben", "Ein Hund", "Ein Mensch", "Ein Radio"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Mais."
  },
  {
    id: "rae_ext_019",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was läuft, hat aber keine Beine?",
    answers: ["Wasser/Uhr", "Ein Hund", "Ein Mensch", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Wasser oder Uhr."
  },
  {
    id: "rae_ext_020",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man zerbrechen, ohne es zu berühren?",
    answers: ["Ein Versprechen", "Ein Glas", "Ein Stein", "Ein Ast"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Versprechen."
  },
  {
    id: "rae_ext_021",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat einen Rücken, aber keinen Bauch?",
    answers: ["Ein Stuhl/Buch", "Ein Mensch", "Ein Hund", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Stuhl."
  },
  {
    id: "rae_ext_022",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was füllt einen Raum, nimmt aber keinen Platz?",
    answers: ["Licht", "Luft schwer", "Wasser", "Stein"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Licht."
  },
  {
    id: "rae_ext_023",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Wurzeln, die niemand sieht, ist höher als Bäume, steigt nie?",
    answers: ["Ein Berg", "Ein Baum", "Ein Haus", "Ein Turm"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Berg."
  },
  {
    id: "rae_ext_024",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann fliegen, hat aber keine Flügel – und ist heiß?",
    answers: ["Zeit? Nein – eine Rakete / Funke", "Ein Stein", "Ein Auto", "Ein Haus"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Funke/Rakete."
  },
  {
    id: "rae_ext_025",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat ein Ende, aber keinen Anfang (Streichholz)?",
    answers: ["Ein Streichholz", "Ein Seil", "Ein Kreis", "Ein Ball"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Streichholz."
  },
  {
    id: "rae_ext_026",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist immer vor dir, aber du siehst es nicht?",
    answers: ["Die Zukunft", "Die Vergangenheit", "Die Gegenwart", "Ein Spiegel"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Zukunft."
  },
  {
    id: "rae_ext_027",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Städte ohne Menschen?",
    answers: ["Eine Landkarte", "Ein Buch leer", "Ein Foto", "Ein Film"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Karte."
  },
  {
    id: "rae_ext_028",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was wird von oben nach unten gelesen und ist nass?",
    answers: ["Ein Wasserfall", "Ein Buch", "Ein Brief", "Ein Schild"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Wasserfall."
  },
  {
    id: "rae_ext_029",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Zungen, aber kann nicht sprechen?",
    answers: ["Schuhe", "Ein Mensch", "Ein Hund", "Ein Radio"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Schuhzungen."
  },
  {
    id: "rae_ext_030",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist schwarz, wenn man es kauft, rot beim Nutzen, grau wenn weg?",
    answers: ["Kohle/Holzkohle", "Ein Apfel", "Ein Stein", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Kohle."
  },
  {
    id: "rae_ext_031",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat ein Loch in der Mitte und ist wertvoll?",
    answers: ["Eine Münze/CD", "Ein Stein", "Ein Blatt", "Ein Seil"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Münze."
  },
  {
    id: "rae_ext_032",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man in die Hosentasche stecken, das ist schwerer als ein Elefant?",
    answers: ["Ein Foto vom Elefant", "Ein Stein", "Ein Apfel", "Ein Blatt"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Foto."
  },
  {
    id: "rae_ext_033",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat viele Zähne und beißt den Papierstapel?",
    answers: ["Ein Hefter/Tacker", "Ein Kamm", "Ein Hund", "Ein Mensch"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Tacker."
  },
  {
    id: "rae_ext_034",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was geht hoch und runter, bleibt aber an Ort?",
    answers: ["Eine Treppe", "Ein Aufzug auch", "Ein Ball", "Ein Vogel"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Treppe."
  },
  {
    id: "rae_ext_035",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat ein Herz, das nicht schlägt?",
    answers: ["Eine Artischocke/Kartenherz", "Ein Stein", "Ein Auto", "Ein Glas"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Artischocke."
  },
  {
    id: "rae_ext_036",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist voller Löcher, hält aber Wasser?",
    answers: ["Ein Schwamm", "Ein Sieb", "Ein Netz", "Ein Korb"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Schwamm."
  },
  {
    id: "rae_ext_037",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat einen Kopf und einen Fuß, aber keinen Körper?",
    answers: ["Ein Bett", "Ein Mensch", "Ein Hund", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Bett."
  },
  {
    id: "rae_ext_038",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man kochen, aber nicht essen?",
    answers: ["Versprechen / Geld? – Wasser/Teeblätter-Wasser", "Stein", "Holz", "Glas"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "z.B. Wasser."
  },
  {
    id: "rae_ext_039",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Augen, aber kann nicht sehen?",
    answers: ["Eine Nadel", "Ein Mensch", "Ein Hund", "Ein Radio"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Nadelöhr."
  },
  {
    id: "rae_ext_040",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist leichter als eine Feder, aber schwerer zu halten?",
    answers: ["Atem", "Luftballon", "Papier", "Blatt"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Atem."
  },
  {
    id: "rae_ext_041",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Ringe, aber ist kein Schmuck?",
    answers: ["Ein Baum", "Ein Finger", "Ein Telefon", "Ein Planet"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Jahresringe."
  },
  {
    id: "rae_ext_042",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann laufen, ohne Beine zu haben – auf dem Boden geschrieben?",
    answers: ["Tropfen/Farbe? – Nase läuft", "Wasser", "Sand", "Staub"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Nase läuft."
  },
  {
    id: "rae_ext_043",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist am Ende eines Regenbogens?",
    answers: ["Der Buchstabe S / Gold-Legende", "Ein Topf", "Ein Stein", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "S in Regenbogen."
  },
  {
    id: "rae_ext_044",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat vier Räder und fliegt?",
    answers: ["Ein Müllwagen / Scherz", "Ein Flugzeug", "Ein Auto", "Ein Zug"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Klassiker-Witz."
  },
  {
    id: "rae_ext_045",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist so zerbrechlich, dass schon das Aussprechen es bricht?",
    answers: ["Stille", "Glas", "Stein", "Holz"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Stille."
  },
  {
    id: "rae_ext_046",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat einen Daumen und vier Finger, ist aber kein Körperteil?",
    answers: ["Ein Handschuh", "Eine Hand", "Ein Fuß", "Ein Schuh"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Handschuh."
  },
  {
    id: "rae_ext_047",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man mit der rechten Hand halten, aber nicht mit der linken?",
    answers: ["Die linke Hand", "Einen Ball", "Einen Stein", "Einen Apfel"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "linke Hand."
  },
  {
    id: "rae_ext_048",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist in Monaten mit 28 Tagen?",
    answers: ["Alle Monate", "Nur Februar", "Nur Januar", "Nur März"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Alle."
  },
  {
    id: "rae_ext_049",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Beine, aber läuft nicht – am Tisch?",
    answers: ["Ein Tisch", "Ein Hund", "Ein Mensch", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Tisch."
  },
  {
    id: "rae_ext_050",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was fliegt nachts ohne Federn?",
    answers: ["Zeit / Fledermaus", "Stein", "Auto", "Haus"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Fledermaus."
  },
  {
    id: "rae_ext_051",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist nass, wenn es trocken ist?",
    answers: ["Farbe / Handtuch-Gegensatz – Tinte?", "Stein", "Glas", "Holz"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "z.B. frische Farbe."
  },
  {
    id: "rae_ext_052",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat eine Krone, ist aber kein König?",
    answers: ["Ein Zahn", "Ein Hut", "Ein Baum", "Ein Berg"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Zahnkrone."
  },
  {
    id: "rae_ext_053",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man schneiden, ohne dass etwas kleiner wird?",
    answers: ["Ein Kartenspiel", "Ein Brot", "Ein Holz", "Ein Seil"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Karten mischen/schneiden."
  },
  {
    id: "rae_ext_054",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Flügel, fliegt aber nicht?",
    answers: ["Ein Gebäude-Flügel", "Ein Vogel", "Ein Flugzeug", "Ein Insekt"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Gebäude."
  },
  {
    id: "rae_ext_055",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist immer gekommen, aber nie angekommen?",
    answers: ["Morgen", "Gestern", "Heute", "Jetzt"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Morgen."
  },
  {
    id: "rae_ext_056",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat einen Kamm, aber keine Haare?",
    answers: ["Ein Hahn", "Ein Mensch", "Ein Hund", "Ein Kamm-Objekt"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Hahn."
  },
  {
    id: "rae_ext_057",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist schwarz und weiß und rot?",
    answers: ["Zeitung (read)", "Zebra", "Panda", "Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Zeitung."
  },
  {
    id: "rae_ext_058",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man füllen mit leeren Händen?",
    answers: ["Handschuhe", "Ein Glas", "Ein Becher", "Eine Tasche"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Handschuhe anziehen."
  },
  {
    id: "rae_ext_059",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Städte, Flüsse, Länder – auf Papier?",
    answers: ["Atlas/Karte", "Buch leer", "Foto", "Film"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Atlas."
  },
  {
    id: "rae_ext_060",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was läuft ums Haus, ohne sich zu bewegen?",
    answers: ["Ein Zaun", "Ein Hund", "Ein Auto", "Ein Mensch"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Zaun."
  },
  {
    id: "rae_ext_061",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist größer als Gott, böser als der Teufel, Arme haben es, Reiche brauchen es?",
    answers: ["Nichts", "Alles", "Geld", "Zeit"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Nichts."
  },
  {
    id: "rae_ext_062",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat ein Ohr, aber kann nicht hören – am Getreide?",
    answers: ["Mais", "Weizen", "Reis", "Hafer"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Mais."
  },
  {
    id: "rae_ext_063",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man öffnen, ohne zu berühren?",
    answers: ["Ein Gespräch / Ei? – Schirm mit Wind", "Tür", "Fenster", "Buch"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Gespräch."
  },
  {
    id: "rae_ext_064",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Zähne im Maul der Landschaft?",
    answers: ["Eine Säge / Gebirge", "Ein Hund", "Ein Mensch", "Ein Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Säge."
  },
  {
    id: "rae_ext_065",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist am leichtesten zu fangen, aber am schwersten zu halten?",
    answers: ["Atem / Atemzug", "Ball", "Stein", "Apfel"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Atem."
  },
  {
    id: "rae_ext_066",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat keinen Anfang und kein Ende?",
    answers: ["Ein Kreis", "Eine Linie", "Ein Strich", "Ein Punkt"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Kreis."
  },
  {
    id: "rae_ext_067",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was steht still, wenn es geht?",
    answers: ["Eine Uhr (geht=tickt) / Scherz", "Ein Auto", "Ein Mensch", "Ein Hund"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Wortspiel."
  },
  {
    id: "rae_ext_068",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat viele Schlüssel, öffnet aber keine Tür?",
    answers: ["Klaviatur", "Schlüsselbund", "Auto", "Haus"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Klavier."
  },
  {
    id: "rae_ext_069",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man kochen, ohne Feuer?",
    answers: ["Beziehungen / Sonnenofen", "Stein", "Glas", "Holz"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Übertragen."
  },
  {
    id: "rae_ext_070",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat ein Gesicht, das man waschen kann, ohne Augen?",
    answers: ["Eine Uhr / Bergwand", "Mensch", "Hund", "Foto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Uhr."
  },
  {
    id: "rae_ext_071",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist schwer, wenn es leer ist, und leicht, wenn voll?",
    answers: ["Ein Luftballon", "Ein Stein", "Ein Glas", "Ein Eimer"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Ballon."
  },
  {
    id: "rae_ext_072",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat vier Buchstaben, manchmal schreibt man es mit 9?",
    answers: ["Post / Briefmarke? – QUEUES engl. – im DE: Zeit", "Haus", "Baum", "Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Variante."
  },
  {
    id: "rae_ext_073",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man sehen, wenn man die Augen schließt?",
    answers: ["Träume", "Farben", "Menschen", "Autos"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Träume."
  },
  {
    id: "rae_ext_074",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat einen Kopf, der nie denkt?",
    answers: ["Ein Kohlkopf / Nagel", "Mensch", "Hund", "Auto"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Kohl."
  },
  {
    id: "rae_ext_075",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist nass von Natur und macht trocken?",
    answers: ["Handtuch nach Trocknen – Sonne", "Regen", "Meer", "Fluss"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Sonne."
  },
  {
    id: "rae_ext_076",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Beine im Meer?",
    answers: ["Ein Tischbein-Schiff? – Krabbe", "Fisch", "Hai", "Wal"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Krabbe."
  },
  {
    id: "rae_ext_077",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was kann man teilen, sodass es mehr wird?",
    answers: ["Wissen/Freude", "Brot physisch weniger", "Stein", "Glas"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Wissen."
  },
  {
    id: "rae_ext_078",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was hat Flügel an der Tür?",
    answers: ["Ein Türflügel", "Vogel", "Flugzeug", "Insekt"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Tür."
  },
  {
    id: "rae_ext_079",
    category: "spass_raetsel",
    area: "spass",
    subject: "spass",
    question: "Was ist immer hungrig und muss gefüttert werden?",
    answers: ["Feuer", "Hund", "Mensch", "Katze"],
    correct: 0,
    difficulty: "leicht",
    points: 5,
    explanation: "Feuer."
  }
];

if (typeof window !== "undefined") window.SPASS_RAETSEL_QUESTIONS = SPASS_RAETSEL_QUESTIONS;
