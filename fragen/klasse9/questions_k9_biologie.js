// ================================================================
// KLASSE 9 - BIOLOGIE (LEHRPLAN NRW) - VOLLSTÄNDIG (100 FRAGEN)
// ================================================================

const K9_BIOLOGIE_QUESTIONS = [
  // --- GENETIK & VERERBUNG (001 - 025) ---
  {
    "id": "k9_bio_001",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wo befindet sich der Großteil der Erbinformation (DNA) in einer eukaryotischen Zelle?",
    "answers": [
      "Im Zellkern der Zelle",
      "In den Vakuolen Raum",
      "Im Zellplasma Flüssig",
      "An der Zellwand außen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Eukaryoten liegt der Hauptteil des genetischen Materials geschützt im Zellkern."
  },
  {
    "id": "k9_bio_002",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie viele Chromosomen enthält ein normaler diploider Zellsatz beim Menschen?",
    "answers": [
      "Exakt 46 Chromosomen",
      "Exakt 23 Chromosomen",
      "Exakt 48 Chromosomen",
      "Exakt 44 Chromosomen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Mensch besitzt 46 Chromosomen (23 Paare) in jedem normalen Körperzellkern."
  },
  {
    "id": "k9_bio_003",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie nennt man die räumliche Doppelhelix-Struktur des DNA-Moleküls nach Watson u. Crick?",
    "answers": [
      "Eine Doppelhelix Form",
      "Eine Kugelform Dichte",
      "Ein einfaches Band",
      "Ein verzweigtes Netz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die DNA ist wie eine gewundene Strickleiter (Doppelhelix) aufgebaut."
  },
  {
    "id": "k9_bio_004",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche vier organischen Basen bilden die Sprossen der DNA-Leiter?",
    "answers": [
      "Adenin, Thymin, Guanin, Cytosin",
      "Adenin, Uracil, Guanin, Cytosin",
      "Alanin, Thymin, Glycin, Cytosin",
      "Adenin, Thymin, Glutamin, Lysin"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die vier DNA-Basen heißen Adenin (A), Thymin (T), Guanin (G) u. Cytosin (C)."
  },
  {
    "id": "k9_bio_005",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Basen paaren sich in der DNA stets komplementär zueinander?",
    "answers": [
      "A mit T und G mit C",
      "A mit C und G mit T",
      "A mit G und T mit C",
      "A mit U und C mit G"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nach den Chargaff-Regeln paart sich Adenin stets mit Thymin (zwei H-Brücken) u. Guanin mit Cytosin (drei H-Brücken)."
  },
  {
    "id": "k9_bio_006",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter dem Begriff 'Mitose'?",
    "answers": [
      "Einfache Kernteilung Körper",
      "Reifung der Eizellen",
      "Verschmelzung von Samen",
      "Programmierter Zelltod"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Mitose ist die Teilung des Zellkerns, bei der zwei genetisch identische Tochterkerne entstehen."
  },
  {
    "id": "k9_bio_007",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "In welcher Phase der Mitose ordnen sich die Chromosomen in der Äquatorialebene an?",
    "answers": [
      "In der Metaphase Phase",
      "In der Prophase Phase",
      "In der Anaphase Phase",
      "In der Telophase Phase"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Metaphase ordnen sich die maximal verkürzten Zwei-Chromatid-Chromosomen in der Mitte (Äquatorialebene) an."
  },
  {
    "id": "k9_bio_008",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was passiert während der Anaphase der Mitose?",
    "answers": [
      "Chromatiden getrennt Zelle",
      "Kernhülle löst sich auf",
      "DNA wird neu verdoppelt",
      "Zellwand wird gebildet"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In der Anaphase werden die Schwesterchromatiden am Centromer getrennt u. zu den entgegengesetzten Polen gezogen."
  },
  {
    "id": "k9_bio_009",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was ist das Hauptziel der 'Meiose' (Reifeteilung) im Organismus?",
    "answers": [
      "Bildung haploider Keimzellen",
      "Wachstum von Gewebeteilen",
      "Reparatur von Hautwunden",
      "Verdopplung des Chromosoms"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Meiose halbiert den Chromosomensatz zur Bildung von haploiden Geschlechtszellen (Spermien u. Eizellen)."
  },
  {
    "id": "k9_bio_010",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie viele Chromosomen enthält eine menschliche Eizelle oder Samenzelle (haploider Satz)?",
    "answers": [
      "Exakt 23 Chromosomen",
      "Exakt 46 Chromosomen",
      "Exakt 12 Chromosomen",
      "Exakt 92 Chromosomen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Keimzellen besitzen nur einen einfachen (haploiden) Chromosomensatz mit $n = 23$ Chromosomen."
  },
  {
    "id": "k9_bio_011",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter dem stochastischen Vorgang des 'Crossing-Over' während der Meiose I?",
    "answers": [
      "Stoffaustausch Chromatiden",
      "Verlust von Zellkernen",
      "Verdopplung der DNA-Masse",
      "Verschmelzung zweier Ei"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Beim Crossing-Over tauschen homologe Chromosomen Abschnitte aus, was zu neuer genetischer Rekombination führt."
  },
  {
    "id": "k9_bio_012",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie lautet die 1. Mendel'sche Regel (Uniformitätsregel)?",
    "answers": [
      "F1-Generation ist gleich",
      "F2 spaltet im 3:1 Muster",
      "Gene vererben unabhängig",
      "Mischlinge sterben früher"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kreuzt man zwei reinerbige (homozygote) Individuen, die sich in einem Merkmal unterscheiden, sind alle Nachkommen der F1-Generation phänotypisch u. genotypisch gleich."
  },
  {
    "id": "k9_bio_013",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welches Spaltungsverhältnis der Phänotypen ergibt sich in der F2-Generation nach der 2. Mendel'schen Regel bei dominant-rezessivem Erbgang?",
    "answers": [
      "Verhältnis 3 zu 1",
      "Verhältnis 1 zu 1",
      "Verhältnis 9 zu 3",
      "Verhältnis 2 zu 1"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kreuzt man die F1-Mischlinge untereinander, spaltet sich die F2-Generation im Phänotyp im Verhältnis 3:1 auf."
  },
  {
    "id": "k9_bio_014",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was bedeutet der Begriff 'homozygot' in der Genetik?",
    "answers": [
      "Reinerbig mit zwei gleichen Allelen",
      "Mischerbig mit zwei Kontrasten",
      "Besitz von nur einem Allel",
      "Fehlen jeglicher Erbanlagen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Homozygot bedeutet, dass auf beiden homologen Chromosomen identische Allele für ein Merkmal vorliegen (z. B. AA oder aa)."
  },
  {
    "id": "k9_bio_015",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreibt der Begriff 'Heterozygot'?",
    "answers": [
      "Mischerbig mit zwei verschiedenen Allelen",
      "Reinerbig mit doppelten Allelen",
      "Besitz von drei Allelen zugleich",
      "Ein vollkommen stummes Gen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Heterozygot bedeutet mischerbig (z. B. Aa): Das Genpaar besteht aus zwei verschiedenen Allelen."
  },
  {
    "id": "k9_bio_016",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was unterscheidet den 'Phänotyp' vom 'Genotyp'?",
    "answers": [
      "Phänotyp ist Erscheinungsbild",
      "Phänotyp ist die DNA-Sequenz",
      "Genotyp ist das Aussehen",
      "Beide Begriffe sind exakt ident"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Genotyp ist die Gesamtheit der Erbanlagen; der Phänotyp ist das äußerlich sichtbare Erscheinungsbild."
  },
  {
    "id": "k9_bio_017",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "chemie",
    "question": "Welche Allelkombination führt zur Ausprägung der Blutgruppe 0 beim Menschen?",
    "answers": [
      "Zwei rezessive Allele (00)",
      "Ein Allel A und ein Allel B",
      "Ein Allel A und ein Allel 0",
      "Zwei dominante Allele (AA)"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Allel 0 verhält sich rezessiv gegenüber A u. B. Blutgruppe 0 tritt nur bei Reinerbigkeit (00) auf."
  },
  {
    "id": "k9_bio_018",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Warum nennt man die Blutgruppenvererbung A u. B miteinander 'kodominant'?",
    "answers": [
      "Beide Allele prägen sich aus",
      "Allel A unterdrückt B völlig",
      "Allel B zerstört Allel A",
      "Beide Allele verschwinden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Genotyp AB werden sowohl Antigen A als auch Antigen B voll ausgebildet (Kodominanz)."
  },
  {
    "id": "k9_bio_019",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Gonosomen (Geschlechtschromosomen) besitzen biologisch männliche Säugetiere?",
    "answers": [
      "Ein X- und ein Y-Chromosom",
      "Zwei identische X-Chromosomen",
      "Zwei identische Y-Chromosomen",
      "Drei Chromatiden des Typs X"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Männer besitzen die Kombination XY, Frauen besitzen XX."
  },
  {
    "id": "k9_bio_020",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Warum tritt die Rot-Grün-Sehschwäche bei Männern statistisch deutlich häufiger auf als bei Frauen?",
    "answers": [
      "Gen liegt rezessiv auf X-Chromosom",
      "Männer haben keine Zapfen im Auge",
      "Gen liegt isoliert auf Y-Chromosom",
      "Frauen vererben nie Krankheiten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Da das Gen auf dem X-Chromosom liegt u. rezessiv ist, reicht beim Mann ein einziges defektes X-Chromosom zur Erkrankung."
  },
  {
    "id": "k9_bio_021",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter einer 'Mutation' in der Genetik?",
    "answers": [
      "Veränderung der Erbanlage",
      "Normale Teilung der Zelle",
      "Ausbildung von Muskeln",
      "Reifung von Samenzellen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Mutation ist eine spontane oder durch Mutagene ausgelöste dauerhafte Veränderung der genetischen Information."
  },
  {
    "id": "k9_bio_022",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche genetische Ursache hat das Down-Syndrom (Trisomie 21)?",
    "answers": [
      "Chromosom 21 ist 3-fach da",
      "Chromosom 21 fehlt völlig",
      "Fehlen des X-Chromosoms",
      "Verdopplung des Y-Chromosoms"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Durch eine Fehlteilung bei der Meiose liegt das Chromosom 21 in allen Körperzellen dreifach vor."
  },
  {
    "id": "k9_bio_023",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreibt ein 'Karyogramm' in der Humangenetik?",
    "answers": [
      "Geordnete Chromosomenkarte",
      "Stammbaum über 5 Generationen",
      "Aufnahme der Herzschläge",
      "Blutgruppen-Testergebnis"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Karyogramm ist das geordnete Bild aller Metaphase-Chromosomen einer Zelle nach Größe u. Form."
  },
  {
    "id": "k9_bio_024",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was charakterisiert einen autosomal-dominanten Erbgang im Stammbaum?",
    "answers": [
      "Erkrankte in jeder Generation",
      "Nur Männer erkranken stets",
      "Gesunde Eltern kriegen Kranke",
      "Überspringen von Generationen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei autosomal-dominanter Vererbung führt bereits ein defektes Allel zur Krankheit. Meist ist in jeder Generation mindestens ein Betroffener vorhanden."
  },
  {
    "id": "k9_bio_025",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was ist das Hauptmerkmal eines autosomal-rezessiven Erbgangs?",
    "answers": [
      "Gesunde Eltern haben kranke Kinder",
      "Krankheit bricht immer sofort aus",
      "Nur Mütter übertragen Krankheit",
      "Alle Nachkommen sind betroffen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei heterozygot gesunde Anlageträger (Aa) können mit $25\\%$ Wahrscheinlichkeit ein homozygotes krankes Kind (aa) bekommen."
  },

  // --- IMMUNBIOLOGIE & INFEKTIONSKRANKHEITEN (026 - 050) ---
  {
    "id": "k9_bio_026",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was unterscheidet Viren grundlegend von Bakterien?",
    "answers": [
      "Viren haben keinen Zellbau",
      "Bakterien besitzen keinen Kern",
      "Viren vermehren sich selbst",
      "Bakterien sind stets kleiner"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Viren besitzen keinen eigenen Stoffwechsel u. keine Zellstruktur; sie benötigen zwingend Wirtszellen zur Vermehrung."
  },
  {
    "id": "k9_bio_027",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Gegen welche Art von Krankheitserregern wirken Antibiotika gezielt?",
    "answers": [
      "Nur gegen Bakterien",
      "Gegen Viren u. Grippe",
      "Gegen Prionen u. Gifte",
      "Gegen erblich bedingte Mängel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antibiotika greifen spezifisch zelluläre Strukturen von Bakterien an (z. B. Zellwandbau) u. sind gegen Viren wirkungslos."
  },
  {
    "id": "k9_bio_028",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie nennt man die weißen Blutkörperchen, die Erreger ungerichtet umschließen u. verdauen (Phagozytose)?",
    "answers": [
      "Die Fresszellen / Makrophagen",
      "Die Roten Blutkörperchen",
      "Die Blutplättchen Zellen",
      "Die Nervenzellen Gehirn"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Makrophagen (Fresszellen) gehören zur angeborenen unspezifischen Immunabwehr u. phagozytieren Fremdkörper."
  },
  {
    "id": "k9_bio_029",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter einem 'Antigen' im Immunsystem?",
    "answers": [
      "Fremde Oberflächenstruktur",
      "Vom Körper gebauter Schutz",
      "Injektion gegen Viren",
      "Giftstoff im Magen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antigene sind Proteine oder Strukturen auf Erregeroberflächen, die eine spezifische Immunantwort auslösen."
  },
  {
    "id": "k9_bio_030",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Zellen des Immunsystems produzieren passgenaue Antikörper gegen spezifische Erreger?",
    "answers": [
      "B-Lymphozyten / Plasmazellen",
      "T-Helferzellen Immunsystem",
      "Erythrozyten Blutkreislauf",
      "Thrombozyten Wundverschluss"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Differenzierte B-Lymphozyten (Plasmazellen) stellen riesige Mengen spezifischer Antikörper her."
  },
  {
    "id": "k9_bio_031",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Form besitzen die Proteinstrukturen der Antikörper üblicherweise?",
    "answers": [
      "Eine charakteristische Y-Form",
      "Eine Kugelgestalt Proteine",
      "Eine lange Fadenstruktur",
      "Einen geschlossenen Ring"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antikörper sind Y-förmige Moleküle, deren Enden spezifisch wie ein Schlüssel zum Schloss des Antigens passen."
  },
  {
    "id": "k9_bio_032",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreibt die 'Antigen-Antikörper-Reaktion'?",
    "answers": [
      "Verklumpung von Erregern",
      "Auflösung der Erythrozyten",
      "Zerstörung von Gewebe",
      "Bildung von Histamin"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Antikörper binden nach dem Schlüssel-Schloss-Prinzip an Antigene u. führen zur Verklumpung (Agglutination) oder Inaktivierung."
  },
  {
    "id": "k9_bio_033",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Aufgabe haben T-Helferzellen im spezifischen Immunsystem?",
    "answers": [
      "Regulieren u. aktivieren Abwehr",
      "Fressen Bakterien direkt auf",
      "Produzieren Antikörper selbst",
      "Transportieren Sauerstoff"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "T-Helferzellen erkennen präsentierte Antigene u. schütten Botenstoffe aus, um B-Zellen u. T-Killerzellen zu aktivieren."
  },
  {
    "id": "k9_bio_034",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Funktion erfüllen 'T-Killerzellen'?",
    "answers": [
      "Zerstören infizierte Zellen",
      "Bauen Antikörper im Blut ab",
      "Verschließen Wunden rasch",
      "Filtern Gift im Nierenbecken"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "T-Killerzellen erkennen körpereigene Zellen, die von Viren oder Tumoren verändert sind, u. leiten deren Zelltod ein."
  },
  {
    "id": "k9_bio_035",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Zellen sorgen dafür, dass nach einer Erstinfektion bei Zweitkontakt eine schnelle Immunantwort erfolgt?",
    "answers": [
      "Die Gedächtniszellen",
      "Die roten Blutkörperchen",
      "Die Hornschicht der Haut",
      "Die Blutplättchen Zellen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Langlebige B- u. T-Gedächtniszellen speichern die Information über das Antigen u. reagieren bei erneutem Kontakt sofort."
  },
  {
    "id": "k9_bio_036",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was wird bei einer 'Aktiven Schutzimpfung' (Vakzinierung) verabreicht?",
    "answers": [
      "Abgeschwächte Erreger/Antigene",
      "Fertige fremde Antikörper",
      "Starke Breitband-Antibiotika",
      "Reines Vitamin-Serum"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei der aktiven Impfung werden dem Körper Antigene/abgetötete Erreger zugeführt, damit dieser selbstständig Antikörper u. Gedächtniszellen bildet."
  },
  {
    "id": "k9_bio_037",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wann kommt eine 'Passive Schutzimpfung' zum Einsatz?",
    "answers": [
      "Sofortschutz nach Ansteckung",
      "Vorsorge für viele Jahre",
      "Dauerhafte Immunisierung",
      "Verhütung einer Wundrose"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Verdacht auf eine Akutinfektion (z. B. Tetanus) spritzt man fertige Antikörper für raschen, aber kurzfristigen Schutz."
  },
  {
    "id": "k9_bio_038",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter einer 'Allergie'?",
    "answers": [
      "Überreaktion auf Harmloses",
      "Schwäche der roten Blutkörper",
      "Bakterielle Entzündung",
      "Mangel an Vitamin C"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Allergie ist eine überschießende Immunreaktion des Körpers auf eigentlich harmlose Umweltstoffe (Allergene)."
  },
  {
    "id": "k9_bio_039",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welcher körpereigene Botenstoff wird bei allergischen Reaktionen massiv freigesetzt u. verursacht Entzündungszeichen?",
    "answers": [
      "Der Botenstoff Histamin",
      "Das Hormon Insulin",
      "Das Enzym Amylase",
      "Das Pigment Melanin"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Mastzellen schütten bei Allergenkontakt Histamin aus, was Juckreiz, Rötung u. Schwellung hervorruft."
  },
  {
    "id": "k9_bio_040",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welches Immunsystem-Organ dient als Hauptfilter für das Blut u. baut alte rote Blutkörperchen ab?",
    "answers": [
      "Die Milz im Bauchraum",
      "Der Thymus im Brustkorb",
      "Die Mandeln im Rachen",
      "Der Wurmfortsatz Darm"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Milz vermehrt Lymphozyten u. filtert überalterte Erythrozyten u. Erreger aus dem Blutstrom."
  },
  {
    "id": "k9_bio_041",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Zellen des Immunsystems befallt u. zerstört das HI-Virus (HIV) gezielt?",
    "answers": [
      "T-Helferzellen des Körpers",
      "Erythrozyten des Blutes",
      "Nervenzellen des Gehirns",
      "Hautzellen der Oberhaut"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "HIV befallt über den CD4-Rezeptor vor allem T-Helferzellen u. schädigt dadurch schrittweise das gesamte Immunsystem."
  },
  {
    "id": "k9_bio_042",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wofür steht die Abkürzung 'AIDS' in der Medizin?",
    "answers": [
      "Acquired Immunodeficiency Synd.",
      "Acute Infections Disease State",
      "Autoimmune Defense System",
      "Antigen Immunization Shield"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "AIDS steht für 'Acquired Immunodeficiency Syndrome' (Erworbenes Immunschwächesyndrom)."
  },
  {
    "id": "k9_bio_043",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Über welchen Hauptübertragungsweg wird das HI-Virus weitergegeben?",
    "answers": [
      "Ungeschützter Geschlechtsverkehr",
      "Tröpfcheninfektion beim Niesen",
      "Gemeinsame Handtuchnutzung",
      "Insektenstiche im Sommer"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "HIV wird vor allem durch ungeschützten Intimkontakt u. direkten Blut-zu-Blut-Kontakt (z. B. verseuchte Spritzen) übertragen."
  },
  {
    "id": "k9_bio_044",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter einer 'Autoimmunerkrankung'?",
    "answers": [
      "Abwehr greift eigene Zellen an",
      "Mangel an Antikörpern im Blut",
      "Angeborene Virenresistenz",
      "Allergie gegen Autoschadstoffe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Autoimmunerkrankungen (z. B. Diabetes Typ 1, Multiple Sklerose) richtet sich das Immunsystem irrtümlich gegen körpereigene Strukturen."
  },
  {
    "id": "k9_bio_045",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Barriere gehört zur mechanisch-chemischen ersten Schutzlinie des Körpers?",
    "answers": [
      "Säureschutzmantel der Haut",
      "B-Lymphozyten im Blut",
      "Antikörper in der Milz",
      "T-Killerzellen im Gewebe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die intakte Haut, Magensäure, Tränenflüssigkeit u. Schleimhäute bilden die primäre Schutzbarriere."
  },
  {
    "id": "k9_bio_046",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreibt eine 'Epidemie' im Unterschied zu einer 'Pandemie'?",
    "answers": [
      "Lokal begrenzte Ausbreitung",
      "Weltweite Verbreitung Erreger",
      "Infektion ohne Krankheitszeichen",
      "Erkrankung nur bei Tieren"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Eine Epidemie beschreibt eine zeitlich u. räumlich begrenzte Häufung einer Krankheit; Pandemien breiten sich länder- u. kontinentübergreifend aus."
  },
  {
    "id": "k9_bio_047",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Funktion besitzen die Lymphknoten im menschlichen Lymphsystem?",
    "answers": [
      "Filterstationen für Erreger",
      "Produktion von roten Blutkörpern",
      "Pumpen von Blut ins Gehirn",
      "Speicherung von Traubenzucker"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lymphknoten enthalten viele Lymphozyten u. Makrophagen u. schwellen bei Infektionen als Abwehrreaktion an."
  },
  {
    "id": "k9_bio_048",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie nennt man die Entzündungszeichen, die durch Histaminausschüttung im Gewebe entstehen?",
    "answers": [
      "Rötung, Wärme, Schwellung, Schmerz",
      "Kälte, Blässe, Taubheit, Lähmung",
      "Verbleichung, Schrumpfung, Ruhe",
      "Fieber, Husten, Heiserkeit"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die klassischen örtlichen Entzündungszeichen lauten: Rubor (Rötung), Calor (Erwärmung), Tumor (Schwellung) u. Dolor (Schmerz)."
  },
  {
    "id": "k9_bio_049",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Warum ist Fieber eine sinnvolle Abwehrreaktion des Körpers bei Infekten?",
    "answers": [
      "Hemmt Vermehrung der Erreger",
      "Tötet gesunde Muskelzellen ab",
      "Zersetzt giftige Nährstoffe",
      "Stoppt die Blutgerinnung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Höhere Temperaturen beschleunigen Stoffwechsel- u. Abwehrprozesse u. verlangsamen die Vermehrung vieler Krankheitserreger."
  },
  {
    "id": "k9_bio_050",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter 'Herdenschutz' (Herdenimmunität)?",
    "answers": [
      "Schutz Geimpfter für Ungeimpfte",
      "Verhinderung von Tierseuchen",
      "Desinfektion von Ställen",
      "Schutz vor Insektenstichen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Sind genügend Menschen geimpft/immun, kann sich der Erreger nicht ausbreiten; dadurch werden auch nicht-impfbare Personen geschützt."
  },

  // --- NEUROBIOLOGIE & SINNESPHYSIOLOGIE (051 - 075) ---
  {
    "id": "k9_bio_051",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie heißen die baulichen Grundeinheiten des Nervensystems?",
    "answers": [
      "Die Neuronen / Nervenzellen",
      "Die Nephrone in der Niere",
      "Die Alveolen in der Lunge",
      "Die Myozyten im Muskel"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Nervenzellen (Neuronen) sind auf die Aufnahme, Leitung u. Übertragung von elektrischen u. chemischen Signalen spezialisiert."
  },
  {
    "id": "k9_bio_052",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Fortsätze der Nervenzelle nehmen Signale von anderen Zellen auf u. leiten sie zum Soma?",
    "answers": [
      "Die Dendriten Äste",
      "Das lange Axon Kabel",
      "Die Endknöpfchen",
      "Die Schwannschen Zellen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Dendriten sind stark verzweigte Ausläufer, die Erregungen aufnehmen u. zum Zellkörper (Soma) leiten."
  },
  {
    "id": "k9_bio_053",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welcher langer Fortsatz leitet Aktionspotenziale von der Nervenzelle weg zu anderen Zellen?",
    "answers": [
      "Das Axon / Neurit",
      "Der Dendrit Ast",
      "Der Zellkern Kern",
      "Die Synapsenmembran"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Axon leitet nervöse Impulse über teils weite Strecken vom Zellkörper weg."
  },
  {
    "id": "k9_bio_054",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wozu dient die Myelinscheide (Ranviersche Schnürringe) um das Axon?",
    "answers": [
      "Beschleunigt Erregungsleitung",
      "Kühlt die Nervenzelle ab",
      "Speichert Proteine für Zellen",
      "Verhindert Muskelkrämpfe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die isolierende Myelinhülle ermöglicht die schnelle, saltatorische (und sprungweise) Erregungsleitung."
  },
  {
    "id": "k9_bio_055",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie hoch liegt das Ruhepotenzial einer unerregten Nervenzelle etwa?",
    "answers": [
      "Spannung: ca. -70 Millivolt",
      "Spannung: ca. +30 Millivolt",
      "Spannung: ca. 0 Millivolt",
      "Spannung: ca. -230 Volt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Unerregten Zustand beträgt die elektrische Spannung an der Axonmembran im Inneren etwa $-70\\,mV$."
  },
  {
    "id": "k9_bio_056",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Ionen sind für die Aufrechterhaltung des Ruhepotenzials von zentraler Bedeutung?",
    "answers": [
      "Natrium- und Kalium-Ionen",
      "Calcium- und Eisen-Ionen",
      "Magnesium- und Chlor-Ionen",
      "Kupfer- und Zink-Ionen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die ungleiche Verteilung von $Na^+$-Ionen (außen hoch) u. $K^+$-Ionen (innen hoch) wird durch die $Na^+/K^+$-Pumpe aufrechterhalten."
  },
  {
    "id": "k9_bio_057",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was passiert bei der 'Depolarisation' während eines Aktionspotenzials?",
    "answers": [
      "Schlagartiger Natriumeinstrom",
      "Ausstrom von Proteinen",
      "Schließen aller Kanäle",
      "Verstärkung des Minuspols"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Spannungsgesteuerte $Na^+$-Kanäle öffnen sich; der massive Einstrom positiver Natriumionen polart die Membran auf ca. $+30\\,mV$ um."
  },
  {
    "id": "k9_bio_058",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreibt das 'Alles-oder-Nichts-Gesetz' bei Aktionspotenzialen?",
    "answers": [
      "Schwellenwert löst immer volles AP aus",
      "Impuls wird je nach Reiz stärker",
      "Nervenzelle teilt sich völlig",
      "Aktionspotenzial dauert ewig an"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Wird der Schwellenwert (ca. $-50\\,mV$) erreicht, entsteht immer ein volles Aktionspotenzial fester Amplitude; wird er verfehlt, entsteht keines."
  },
  {
    "id": "k9_bio_059",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie wird eine Erregung an einer chemischen 'Synapse' auf die Nachbarzelle übertragen?",
    "answers": [
      "Durch chemische Neurotransmitter",
      "Durch direkte Lichtstrahlen",
      "Durch elektrische Funken",
      "Durch mechanischen Druck"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der elektrische Impuls schüttet im synaptischen Spalt chemische Botenstoffe (Neurotransmitter) aus."
  },
  {
    "id": "k9_bio_060",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wo werden Neurotransmitter in der präsynaptischen Endknöpfchen-Region gespeichert?",
    "answers": [
      "In synaptischen Vesikeln",
      "Frei im Zellkern der Zelle",
      "In der Myelinschicht auße",
      "An den Dendritenspitzen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Neurotransmitter (z. B. Acetylcholin) sind in kleinen Membranbläschen (Vesikeln) verpackt."
  },
  {
    "id": "k9_bio_061",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Organe bilden zusammen das 'Zentrale Nervensystem' (ZNS)?",
    "answers": [
      "Gehirn und Rückenmark",
      "Gehirn und alle Herzmuskeln",
      "Rückenmark und Sehfechtnerv",
      "Magen, Darm und Leber"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das ZNS besteht aus dem Gehirn im Schädel u. dem Rückenmark im Wirbelkanal."
  },
  {
    "id": "k9_bio_062",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was zeichnet einen 'Reflex' (z. B. Kniescheibenreflex) aus?",
    "answers": [
      "Unwillkürlich und sehr schnell",
      "Langsam u. durchdacht im Großhirn",
      "Wird erst im Alter gelernt",
      "Hängt rein von Gefühlen ab"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Reflex ist eine unwillkürliche, stets gleichbleibende u. extrem schnelle Antwort des Körpers auf einen Reiz über das Rückenmark."
  },
  {
    "id": "k9_bio_063",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Sinneszellen in der Netzhaut des Auges dienen dem Hell-Dunkel-Sehen bei geringer Helligkeit?",
    "answers": [
      "Die Stäbchen Sehzellen",
      "Die Zapfen Sehzellen",
      "Die Ganglienzellen Auge",
      "Die Pigmentzellen Haut"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Stäbchen sind extrem lichtempfindlich u. ermöglichen das Dämmerungs- u. Nachtsehen (Schwarz-Weiß)."
  },
  {
    "id": "k9_bio_064",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Lichtsinneszellen in der Netzhaut ermöglichen das Farbensehen bei ausreichender Helligkeit?",
    "answers": [
      "Die Zapfen Sehzellen",
      "Die Stäbchen Sehzellen",
      "Die Hornhautzellen Auge",
      "Die Linsenzellen Auge"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zapfen sind für das Farbsehen zuständig u. kommen in drei Typen vor (Rot-, Grün- u. Blau-Zapfen)."
  },
  {
    "id": "k9_bio_065",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie nennt man die Stelle des schärfsten Sehens auf der Netzhaut (Fovea centralis)?",
    "answers": [
      "Der Gelbe Fleck Auge",
      "Der Blinde Fleck Auge",
      "Die Regenbogenhaut Iris",
      "Die Hornhaut Vorderseite"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Gelben Fleck (Sehgrube) liegen die Zapfen in extrem hoher Dichte gedrängt."
  },
  {
    "id": "k9_bio_066",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Warum gibt es auf der Netzhaut einen 'Blinden Fleck'?",
    "answers": [
      "Austrittsstelle des Sehnervs",
      "Schattenwurf der Linse",
      "Fehlen von Blutgefäßen",
      "Verdickung der Hornhaut"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "An der Austrittsstelle des Sehnervs befinden sich keinerlei Lichtsinneszellen (weder Stäbchen noch Zapfen)."
  },
  {
    "id": "k9_bio_067",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter 'Akkommodation' des Auges?",
    "answers": [
      "Anpassung der Brechkraft",
      "Anpassung der Pupillenweite",
      "Reinigung durch Tränen",
      "Bewegung des Augapfels"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Akkommodation ist die Verformung der Augenlinse durch den Ciliarmuskel zur Scharfstellung auf Nah- oder Fernobjekte."
  },
  {
    "id": "k9_bio_068",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter 'Adaptation' des Auges?",
    "answers": [
      "Anpassung an Helligkeit",
      "Scharfstellen auf Nähe",
      "Farbänderung der Iris",
      "Erneuerung der Sehzellen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Adaptation ist die Anpassung des Auges an unterschiedliche Lichtintensitäten durch Pupillenverengung/-weitstellung u. Sehfarbstoffgehalt."
  },
  {
    "id": "k9_bio_069",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Mit welcher Linsenart korrigiert man Kurzsichtigkeit (Augapfel zu lang)?",
    "answers": [
      "Mit einer Zerstreuungslinse (Konkav)",
      "Mit einer Sammellinse (Konvex)",
      "Mit einer Zylinderlinse rein",
      "Mit einer Farbfilterlinse"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Kurzsichtige sehen in der Ferne unscharf (Brennpunkt vor der Netzhaut). Eine Konkavlinse verlagert den Brennpunkt nach hinten."
  },
  {
    "id": "k9_bio_070",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Mit welcher Linsenart korrigiert man Weitsichtigkeit (Augapfel zu kurz)?",
    "answers": [
      "Mit einer Sammellinse (Konvex)",
      "Mit einer Zerstreuungslinse",
      "Mit einer flachen Glasplatte",
      "Mit einer Dunkelbrille"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Bei Weitsichtigkeit liegt der Brennpunkt theoretisch hinter der Netzhaut. Eine Konvexlinse sammelt das Licht stärker vorab."
  },
  {
    "id": "k9_bio_071",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welches Gehirnareal steuert übergeordnete Denkprozesse, Sprache u. Persönlichkeit?",
    "answers": [
      "Das Großhirn (Cortex)",
      "Das Kleinhirn hinten",
      "Das Nachhirn Stamm",
      "Das Rückenmark Kanal"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Großhirn mit seinen Rindenfeldern ist das Zentrum für Wahrnehmung, Bewusstsein, Gedächtnis u. Sprache."
  },
  {
    "id": "k9_bio_072",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Hauptaufgabe hat das 'Kleinhirn' (Cerebellum)?",
    "answers": [
      "Koordination Bewegung u. Balance",
      "Regulierung Körpertemperatur",
      "Erzeugung von Sehbildern",
      "Steuerung der Verdauung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Das Kleinhirn ist zentral für die feine Abstimmung von Bewegungsabläufen u. das Gleichgewicht zuständig."
  },
  {
    "id": "k9_bio_073",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welches Gehirnareal steuert lebenswichtige vegetative Reflexe wie Atmung, Herzschlag u. Schlucken?",
    "answers": [
      "Das Nachhirn / Hirnstamm",
      "Das Großhirn vorne",
      "Der Balken im Zentrum",
      "Das Kleinhirn hinten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Im Hirnstamm (Medulla oblongata) liegen die lebenswichtigen Zentren für Herztätigkeit, Atmung u. Blutdruck."
  },
  {
    "id": "k9_bio_074",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie heißen die zwei Abschnitte des vegetativen Nervensystems, die als Gegenspieler wirken?",
    "answers": [
      "Sympathikus u. Parasympathikus",
      "Zentral u. Peripher Nerven",
      "Motorisch u. Sensorisch",
      "Somatisch u. Autonom Teil"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Der Sympathikus versetzt den Körper in Leistungs- u. Fluchtbereitschaft; der Parasympathikus fördert Ruhe u. Verdauung."
  },
  {
    "id": "k9_bio_075",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welches Hormon schüttet das Nebennierenmark unter Einfluss des Sympathikus bei Stress aus?",
    "answers": [
      "Das Stresshormon Adrenalin",
      "Das Blutzuckerhormon Insulin",
      "Das Schilddrüsenhormon Thyroxin",
      "Das Schlafhormon Melatonin"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Adrenalin erhöht Herzfrequenz, Blutdruck u. Blutzuckerspiegel rasch für körperliche Höchstleistungen."
  },

  // --- EVOLUTIONSBIOLOGIE & ÖKOLOGIE (076 - 100) ---
  {
    "id": "k9_bio_076",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wer begründete die moderne Evolutionstheorie durch natürliche Selektion (1859)?",
    "answers": [
      "Charles Darwin Biologe",
      "Jean-Baptiste de Lamarck",
      "Gregor Mendel Genetik",
      "Louis Pasteur Forscher"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Charles Darwin erklärte die Entstehung der Arten durch Abstammung u. natürliche Auslese ('Survival of the Fittest')."
  },
  {
    "id": "k9_bio_077",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche irrtümliche Annahme traf Lamarck bezüglich der Merkmalsvererbung?",
    "answers": [
      "Erworbenes wird vererbt",
      "Zufällige Mutation entscheidet",
      "Arten sind völlig unveränderlich",
      "Selektion tötet schwache Tiere"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lamarck glaubte fälschlicherweise, dass durch Gebrauch gestärkte Organe (z. B. Giraffenhals) direkt an Nachkommen vererbt werden."
  },
  {
    "id": "k9_bio_078",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was bedeutet der Begriff 'Selektion' in der Evolutionsbiologie?",
    "answers": [
      "Überlebenserfolg Angepasster",
      "Gezielte Züchtung im Labor",
      "Spontane Verdopplung DNA",
      "Aussterben durch Katastrophe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Natürliche Selektion ist der unterschiedliche Fortpflanzungserfolg von Individuen aufgrund vorteilhafter Angepasstheit."
  },
  {
    "id": "k9_bio_079",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreiben 'homologe Organe' im Vergleich verschiedener Lebewesen?",
    "answers": [
      "Gleicher Grundbauplan durch Abstammung",
      "Gleiche Funktion ohne Abstammung",
      "Rückgebildete nutzlose Reste",
      "Künstlich veränderte Gewebe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Homologie weist auf gemeinsamen anatomischen Grundbauplan u. Verwandtschaft hin (z. B. Vogelflügel u. Walflosse)."
  },
  {
    "id": "k9_bio_080",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreiben 'analoge Organe'?",
    "answers": [
      "Gleiche Funktion, anderer Bauplan",
      "Gleicher Bauplan, gleiche Verwandtschaft",
      "Genetisch identische Abschnitte",
      "Organe zur Fortpflanzung"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Analoge Organe (z. B. Maulwurfsgrabbett u. Maulwurfsgrille) haben sich durch ähnlichen Selektionsdruck unabhängig entwickelt (Konvergenz)."
  },
  {
    "id": "k9_bio_081",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter 'Rudimenten' in der Evolutionsbiologie?",
    "answers": [
      "Rückgebildete Organreste",
      "Perfekt angepasste Strukturen",
      "Fossile Abdrücke im Stein",
      "Mutierte Gene ohne Funktion"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rudimente sind im Laufe der Evolution verkümmerte Organe, die ihre ursprüngliche Funktion weitgehend verloren haben (z. B. Steißbein)."
  },
  {
    "id": "k9_bio_082",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was sind 'Atavismen' beim Menschen?",
    "answers": [
      "Wiederauftreten ahnenalter Merkmale",
      "Gefährliche Krebstumore",
      "Verluste von Chromosomen",
      "Neuentstandene Organe"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Atavismen sind zufällig wieder auftretende ursprüngliche Merkmale von Vorfahren (z. B. Ganzkörperbehaarung oder Schwanzansatz)."
  },
  {
    "id": "k9_bio_083",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was kennzeichnet den fossilen Urvogel 'Archaeopteryx'?",
    "answers": [
      "Brückentier Vogel/Reptil",
      "Erster echter Säugetier-Ahn",
      "Reiner Schwimmvogel Wasser",
      "Ausgestorbener Flugsaurier"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Archaeopteryx vereinigt Merkmale von Reptilien (Zähne, Schwanzwirbelsäule) u. Vögeln (Federn, Gabelbein)."
  },
  {
    "id": "k9_bio_084",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie nennt man Arten, die über Jahrmillionen fast unverändert überlebt haben (z. B. Quastenflosser)?",
    "answers": [
      "Lebende Fossilien",
      "Brückentiere Stamm",
      "Mutierte Arten",
      "Künstliche Hybriden"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Lebende Fossilien sind isolierte Arten, die ursprüngliche Merkmale über geologische Zeiträume kaum veränderten."
  },
  {
    "id": "k9_bio_085",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreibt die 'allopatrische Artbildung'?",
    "answers": [
      "Artbildung durch Barriere",
      "Artbildung im selben Raum",
      "Artbildung durch Pflanzung",
      "Artbildung im Reagenzglas"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Allopatrische Artbildung entsteht, wenn eine Population durch geografische Isolation (Fluss, Gebirge) getrennt wird u. sich getrennt weiterentwickelt."
  },
  {
    "id": "k9_bio_086",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter 'biologischen abiotischen Umweltfaktoren'?",
    "answers": [
      "Unbelebte Einflüsse wie Licht/Temp.",
      "Belebte Einflüsse wie Fressfeinde",
      "Konkurrenz durch Artgenossen",
      "Parasiten im Magen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Abiotische Faktoren sind Umweltfaktoren der unbelebten Natur (Licht, Temperatur, Wasser, Boden, pH-Wert)."
  },
  {
    "id": "k9_bio_087",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter 'biotischen Umweltfaktoren'?",
    "answers": [
      "Einflüsse anderer Lebewesen",
      "Jahreszeitliche Temperaturschwankungen",
      "Menge des Regenniederschlags",
      "Sauerstoffgehalt im Wasser"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Biotische Faktoren umfassen alle Wechselwirkungen zwischen Lebewesen (Feinde, Beute, Konkurrenten, Symbionten)."
  },
  {
    "id": "k9_bio_088",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was besagt die 'Bergmannsche Regel' für gleichwarme Tiere (Homoiotherme)?",
    "answers": [
      "Kaltbereich -> Körper größer",
      "Kaltbereich -> Ohranhänge größer",
      "Warmbereich -> Körper größer",
      "Kaltbereich -> Felle dünner"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Individuen nahe verwandter Arten sind in kälteren Regionen meist größer, da das Verhältnis von Volumen (Wärmeproduktion) zu Oberfläche (Wärmeverlust) günstiger ist."
  },
  {
    "id": "k9_bio_089",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was besagt die 'Allensche Regel' bezüglich der Körperanhänge (Ohren, Schwanz)?",
    "answers": [
      "Kaltbereich -> Anhänge kleiner",
      "Kaltbereich -> Anhänge riesig",
      "Warmbereich -> Anhänge kleiner",
      "Anhänge bleiben stets gleich"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Gleichwarme Tiere in kalten Klimazonen besitzen kleinere Körperanhänge zur Vermeidung von Wärmeverlusten (z. B. Polarfuchs vs. Wüstenfuchs)."
  },
  {
    "id": "k9_bio_090",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was bezeichnet man als 'ökologische Nische' einer Art?",
    "answers": [
      "Gesamtheit aller Beziehungen zur Umwelt",
      "Der konkrete Wohnort im Wald",
      "Das Nest oder die Höhle",
      "Ein geschütztes Territorium"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die ökologische Nische ist kein Raum, sondern der 'Beruf' der Art: die Gesamtheit aller abiotischen u. biotischen Umweltansprüche."
  },
  {
    "id": "k9_bio_091",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was besagt das 'Konkurrenzausschlussprinzip'?",
    "answers": [
      "Gleiche Nische -> eine Art weicht aus",
      "Konkurrenten helfen sich stets",
      "Arten teilen alle Ressourcen fest",
      "Raubtiere sterben vor der Beute"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Zwei Arten mit identischen ökologischen Ansprüchen können nicht dauerhaft koexistieren; die konkurrenzstärkere Art setzt sich durch."
  },
  {
    "id": "k9_bio_092",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie nennt man das Zusammenleben zweier Arten zum gegenseitigen Vorteil?",
    "answers": [
      "Eine Symbiose Partnerschaft",
      "Ein Parasitismus Befall",
      "Räuber-Beute-Beziehung",
      "Freie Konkurrenz"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "In einer Symbiose ziehen beide Partner (z. B. Flechten = Alge + Pilz) Nutzen aus der Interaktion."
  },
  {
    "id": "k9_bio_093",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was charakterisiert den 'Parasitismus'?",
    "answers": [
      "Parasit nutzt Wirt u. schädigt",
      "Beide Lebewesen profitieren",
      "Wirt tötet den Parasit sofort",
      "Keine Auswirkung auf Wirt"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Ein Parasit entzieht dem Wirt Nährstoffe u. schädigt ihn, ohne ihn i. d. R. sofort zu töten."
  },
  {
    "id": "k9_bio_094",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was besagt die 1. Lotka-Volterra-Regel für Räuber-Beute-Populationen?",
    "answers": [
      "Periodische Phasenverschiebung",
      "Räubersterben erhöht Beute nie",
      "Mittelwerte bleiben ungleich",
      "Beide sterben zeitgleich aus"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Populationsgrößen von Räuber u. Beute schwanken periodisch. Die Maxima der Räuber folgen phasenverzögert denen der Beute."
  },
  {
    "id": "k9_bio_095",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Organismengruppe bildet die Basis einer Nahrungspyramide (Produzenten)?",
    "answers": [
      "Grüne Pflanzen (Fotosynthese)",
      "Pflanzenfressende Tiere",
      "Fleischfressende Raubtiere",
      "Zersetzer u. Bakterien"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Autotrophe Produzenten (Pflanzen/Algen) erzeugen aus Sonnenlicht u. CO2 Biomasse für alle Konsumenten."
  },
  {
    "id": "k9_bio_096",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Wie viel Prozent der Energie wird grob von einer Trophieebene zur nächsten weitergegeben?",
    "answers": [
      "Etwa 10 Prozent der Energie",
      "Etwa 50 Prozent der Energie",
      "Etwa 90 Prozent der Energie",
      "Exakt 100 Prozent Energie"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Rund $90\\%$ der Energie gehen auf jeder Stufe durch Baustoffwechsel, Bewegung u. Wärme verloren; nur ca. $10\\%$ werden als Biomasse weitergegeben."
  },
  {
    "id": "k9_bio_097",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welche Rolle spielen 'Destruenten' (Zersetzer wie Pilze u. Bakterien) im Ökosystem?",
    "answers": [
      "Bauen organisches zu Mineralien ab",
      "Erzeugen Sauerstoff durch Licht",
      "Fressen lebende Pflanzenfresser",
      "Steuern das Klima im See"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Destruenten remineralisieren totes organisches Material u. schließen so den Stoffkreislauf."
  },
  {
    "id": "k9_bio_098",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was versteht man unter 'Biomagnifikation' in einer Nahrungskette?",
    "answers": [
      "Anreicherung von Giften nach oben",
      "Zunahme der Tiergröße",
      "Verdopplung der Geburtenrate",
      "Verlust von Pflanzenarten"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Schwer abbaubare Umweltgifte (z. B. Schwermetalle, DDT) reichern sich über die Nahrungskette in Endkonsumenten immer stärker an."
  },
  {
    "id": "k9_bio_099",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Welcher anthropogene Prozess verstärkt den natürlichen Treibhauseffekt massiv?",
    "answers": [
      "Freisetzung von CO2 durch Verbrennung",
      "Einsatz von Dünger in Feldern",
      "Ausbau von Solaranlagen",
      "Aufforstung von Mischwäldern"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Die Verbrennung fossiler Energieträger (Kohle, Öl, Gas) erhöht den $CO_2$-Gehalt der Atmosphäre u. treibt die globale Erwärmung an."
  },
  {
    "id": "k9_bio_0100",
    "category": "k9_biologie",
    "area": "schule",
    "grade": 9,
    "subject": "biologie",
    "question": "Was beschreibt der Begriff 'Biodiversität'?",
    "answers": [
      "Vielfalt des Lebens auf allen Ebenen",
      "Anzahl aller Tiere im Zoo",
      "Masse aller Algen im Ozean",
      "Reine Dichte von Bäumen"
    ],
    "correct": 0,
    "difficulty": "mittel",
    "points": 10,
    "explanation": "Biodiversität umfasst die genetische Vielfalt, die Artenvielfalt u. die Vielfalt der Ökosysteme."
  },
  {"id":"k9bi101","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Photosynthese in …","answers":["Mitochondrien","Chloroplasten","Zellkern","Ribosomen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Chloroplasten."},
  {"id":"k9bi102","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"DNA-Base A paart mit …","answers":["G","T","C","U"],"correct":1,"difficulty":"mittel","points":10,"explanation":"T."},
  {"id":"k9bi103","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Mitose erzeugt …","answers":["Gameten","Körperzellen diploid","Mutationen","Viren"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Körperzellen."},
  {"id":"k9bi104","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Enzyme sind meist …","answers":["Lipide","Proteine","DNA","Zucker"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Proteine."},
  {"id":"k9bi105","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Ökosystem = …","answers":["nur Tiere","Lebewesen + Umwelt","nur Klima","nur Boden"],"correct":1,"difficulty":"mittel","points":10,"explanation":"System."},
  {"id":"k9bi106","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Antibiotika gegen …","answers":["Viren","Bakterien","Knochen","Allergie"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Bakterien."},
  {"id":"k9bi107","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Selektion wirkt auf …","answers":["Genotyp immer sichtbar","Fitness","Mode","Zufall"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Fitness."},
  {"id":"k9bi108","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Blut transportiert …","answers":["nur Wasser","O₂/Nährstoffe","Knochen","Licht"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Stoffe."},
  {"id":"k9bi109","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Nerven leiten …","answers":["Blut","Impulse","Luft","Knochen"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Erregung."},
  {"id":"k9bi110","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Biodiversität = …","answers":["eine Art","Vielfalt","Klima","Städte"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Vielfalt."},
  {"id":"k9bi111","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Impfung aktiviert …","answers":["Verdauung","Immunsystem","Muskeln","Gehör"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Immun."},
  {"id":"k9bi112","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Zellatmung in …","answers":["Chloroplast","Mitochondrien","Zellwand","Vakuole"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Mitochondrien."},
  {"id":"k9bi113","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Art = …","answers":["beliebige Tiere","fortpflanzungsfähige Gruppe","Farbe","Größe"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Art."},
  {"id":"k9bi114","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Parasit … dem Wirt.","answers":["nützt","schadet","neutral","ersetzt"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Schaden."},
  {"id":"k9bi115","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Gene auf …","answers":["Blut","Chromosomen","Zähnen","Haaren"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Chromosomen."},
  {"id":"k9bi116","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Nachhaltigkeit: …","answers":["erschöpfen","Tragfähigkeit achten","nur Konsum","nur Wachstum"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Grenzen."},
  {"id":"k9bi117","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Haut schützt vor …","answers":["nur Kälte","Keimen u. a.","Schall","Magneten"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Schutz."},
  {"id":"k9bi118","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Bestäubung = …","answers":["Kernverschmelzung","Pollenübertragung","Keimung","Photosynthese"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Pollen."},
  {"id":"k9bi119","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Population = …","answers":["alle Arten","Art im Gebiet","Pflanzen","Klima"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Population."},
  {"id":"k9bi120","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Viren sind …","answers":["Zellen","keine vollständigen Zellen","Pflanzen","Bakterien"],"correct":1,"difficulty":"mittel","points":10,"explanation":"akaryotisch."},
  {"id":"k9bi121","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Nahrungskette start: …","answers":["Fleischfresser","Produzenten","Menschen","Pilze"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Pflanzen."},
  {"id":"k9bi122","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Insulin beeinflusst …","answers":["Hören","Blutzucker","Knochenfarbe","Haare"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Glucose."},
  {"id":"k9bi123","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Mutation = …","answers":["immer tödlich","DNA-Änderung","nur Phänotyp","Sport"],"correct":1,"difficulty":"mittel","points":10,"explanation":"DNA."},
  {"id":"k9bi124","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Symbiose: beide …","answers":["schaden","profitieren","neutral","parasitär"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Nutzen."},
  {"id":"k9bi125","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Lunge nimmt … auf.","answers":["CO₂","O₂","N₂","He"],"correct":1,"difficulty":"mittel","points":10,"explanation":"O₂."},
  {"id":"k9bi126","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Zellmembran ist …","answers":["starr","selektiv permeabel","dicht total","DNA"],"correct":1,"difficulty":"mittel","points":10,"explanation":"selektiv."},
  {"id":"k9bi127","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Insektenbeine: …","answers":["4","6","8","10"],"correct":1,"difficulty":"mittel","points":10,"explanation":"6."},
  {"id":"k9bi128","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Winterschlaf spart …","answers":["Licht","Energie","Wasser","Luft"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Energie."},
  {"id":"k9bi129","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Gentechnik greift in … ein.","answers":["Verhalten","Erbgut","Wetter","Sport"],"correct":1,"difficulty":"mittel","points":10,"explanation":"Genom."},
  {"id":"k9bi130","category":"k9_biologie","area":"schule","grade":9,"subject":"biologie","topic":"erweiterung","question":"Artenschutz in situ = …","answers":["Zoo","im Lebensraum","Labor","Museum"],"correct":1,"difficulty":"mittel","points":10,"explanation":"vor Ort."}
];
// Einbindung für Browser
if (typeof window !== 'undefined') {
    window.K9_BIOLOGIE_QUESTIONS = K9_BIOLOGIE_QUESTIONS;
}