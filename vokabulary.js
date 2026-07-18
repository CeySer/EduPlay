const VOCABULARY_DATABASE = {
    en: {
        numbers: {
            label: "🔢 Zahlen (Numbers)",
            words: [
                { de: "Null", foreign: "zero" }, { de: "Eins", foreign: "one" }, { de: "Zwei", foreign: "two" }, 
                { de: "Drei", foreign: "three" }, { de: "Vier", foreign: "four" }, { de: "Fünf", foreign: "five" }, 
                { de: "Sechs", foreign: "six" }, { de: "Sieben", foreign: "seven" }, { de: "Acht", foreign: "eight" }, 
                { de: "Neun", foreign: "nine" }, { de: "Zehn", foreign: "ten" }, { de: "Elf", foreign: "eleven" }, 
                { de: "Zwölf", foreign: "twelve" }, { de: "Dreizehn", foreign: "thirteen" }, { de: "Vierzehn", foreign: "fourteen" },
                { de: "Fünfzehn", foreign: "fifteen" }, { de: "Sechzehn", foreign: "sixteen" }, { de: "Siebzehn", foreign: "seventeen" },
                { de: "Achtzehn", foreign: "eighteen" }, { de: "Neunzehn", foreign: "nineteen" }, { de: "Zwanzig", foreign: "twenty" },
                { de: "Dreißig", foreign: "thirty" }, { de: "Vierzig", foreign: "forty" }, { de: "Fünfzig", foreign: "fifty" }, 
                { de: "Sechzig", foreign: "sixty" }, { de: "Siebzig", foreign: "seventy" }, { de: "Achtzig", foreign: "eighty" },
                { de: "Neunzig", foreign: "ninety" }, { de: "Einhundert", foreign: "one hundred" }, { de: "Eintausend", foreign: "one thousand" }
            ]
        },
        colours: {
            label: "🎨 Farben (Colours)",
            words: [
                { de: "Schwarz", foreign: "black" }, { de: "Blau", foreign: "blue" }, { de: "Braun", foreign: "brown" },
                { de: "Grün", foreign: "green" }, { de: "Grau", foreign: "grey" }, { de: "Rot", foreign: "red" },
                { de: "Gelb", foreign: "yellow" }, { de: "Weiß", foreign: "white" }, { de: "Rosa", foreign: "pink" },
                { de: "Lila", foreign: "purple" }, { de: "Orange", foreign: "orange" }
            ]
        },
        school: {
            label: "🎒 Schule (At school)",
            words: [
                { de: "Buch", foreign: "book" }, { de: "Tisch", foreign: "table" }, { de: "Stuhl", foreign: "chair" },
                { de: "Tafel", foreign: "board" }, { de: "Schultasche", foreign: "schoolbag" }, { de: "Lineal", foreign: "ruler" },
                { de: "Schere", foreign: "scissors" }, { de: "Bücherregal", foreign: "bookshelf" }, { de: "Buntstift", foreign: "coloured pencil" },
                { de: "Computer", foreign: "computer" }, { de: "Schrank", foreign: "cupboard" }, { de: "Tür", foreign: "door" },
                { de: "Übungsheft", foreign: "exercise book" }, { de: "Kleber", foreign: "glue" }, { de: "Füller", foreign: "pen" },
                { de: "Federmäppchen", foreign: "pencil case" }, { de: "Anspitzer", foreign: "pencil sharpener" }, { de: "Radiergummi", foreign: "rubber" },
                { de: "Waschbecken", foreign: "washbasin" }, { de: "Fenster", foreign: "window" }
            ]
        },
        zoo_animals: {
            label: "🦁 Zootiere (Animals at the zoo)",
            words: [
                { de: "Bär", foreign: "bear" }, { de: "Elefant", foreign: "elephant" }, { de: "Giraffe", foreign: "giraffe" },
                { de: "Löwe", foreign: "lion" }, { de: "Affe", foreign: "monkey" }, { de: "Schlange", foreign: "snake" },
                { de: "Krokodil", foreign: "crocodile" }, { de: "Nilpferd", foreign: "hippo" }, { de: "Seehund", foreign: "seal" },
                { de: "Tiger", foreign: "tiger" }, { de: "Schildkröte", foreign: "tortoise" }, { de: "Zebra", foreign: "zebra" }
            ]
        },
        farm_animals: {
            label: "🐄 Bauernhoftiere (Farm animals)",
            words: [
                { de: "Katze", foreign: "cat" }, { de: "Hahn", foreign: "cock" }, { de: "Kuh", foreign: "cow" },
                { de: "Hund", foreign: "dog" }, { de: "Esel", foreign: "donkey" }, { de: "Ziege", foreign: "goat" },
                { de: "Gans", foreign: "goose" }, { de: "Henne", foreign: "hen" }, { de: "Pferd", foreign: "horse" },
                { de: "Schwein", foreign: "pig" }, { de: "Schaf", foreign: "sheep" }
            ]
        },
        pets: {
            label: "🐶 Haustiere (Pets)",
            words: [
                { de: "Hund", foreign: "dog" }, { de: "Katze", foreign: "cat" }, { de: "Maus", foreign: "mouse" },
                { de: "Vogel", foreign: "bird" }, { de: "Fisch", foreign: "fish" }, { de: "Kaninchen", foreign: "rabbit" },
                { de: "Wellensittich", foreign: "budgie" }, { de: "Meerschweinchen", foreign: "guinea pig" }, { de: "Hamster", foreign: "hamster" },
                { de: "Papagei", foreign: "parrot" }, { de: "Ratte", foreign: "rat" }, { de: "Spinne", foreign: "spider" }
            ]
        },
        body: {
            label: "🧍 Körper (My body)",
            words: [
                { de: "Kopf", foreign: "head" }, { de: "Hals", foreign: "neck" }, { de: "Hand", foreign: "hand" },
                { de: "Finger", foreign: "finger" }, { de: "Knie", foreign: "knee" }, { de: "Zeh", foreign: "toe" },
                { de: "Schulter", foreign: "shoulder" }, { de: "Arm", foreign: "arm" }, { de: "Bauch", foreign: "belly" },
                { de: "Bein", foreign: "leg" }, { de: "Fuß", foreign: "foot" }, { de: "Haare", foreign: "hair" },
                { de: "Gesicht", foreign: "face" }, { de: "Ohr", foreign: "ear" }, { de: "Nase", foreign: "nose" },
                { de: "Mund", foreign: "mouth" }, { de: "Auge", foreign: "eye" }, { de: "Zahn", foreign: "tooth" }
            ]
        },
        clothes: {
            label: "👕 Kleidung (Clothes)",
            words: [
                { de: "T-Shirt", foreign: "T-shirt" }, { de: "Hose", foreign: "trousers" }, { de: "Schuhe", foreign: "shoes" },
                { de: "Pullover", foreign: "pullover" }, { de: "Kleid", foreign: "dress" }, { de: "kurze Hose", foreign: "shorts" },
                { de: "Kappe", foreign: "cap" }, { de: "Jacke", foreign: "jacket" }, { de: "Regenmantel", foreign: "raincoat" },
                { de: "Regenhut", foreign: "rainhat" }, { de: "Schal", foreign: "scarf" }, { de: "Rock", foreign: "skirt" },
                { de: "Handschuhe", foreign: "gloves" }, { de: "Jeans", foreign: "jeans" }, { de: "Sandalen", foreign: "sandals" },
                { de: "Schneestiefel", foreign: "snowboots" }, { de: "Socken", foreign: "socks" }, { de: "Sonnenbrille", foreign: "sunglasses" },
                { de: "Gummistiefel", foreign: "wellies" }
            ]
        },
        family: {
            label: "👨‍👩‍👦 Familie (My family)",
            words: [
                { de: "Mutter", foreign: "mother" }, { de: "Vater", foreign: "father" }, { de: "Bruder", foreign: "brother" },
                { de: "Schwester", foreign: "sister" }, { de: "Oma", foreign: "grandmother" }, { de: "Opa", foreign: "grandfather" },
                { de: "Eltern", foreign: "parents" }, { de: "Großeltern", foreign: "grandparents" }, { de: "Kind", foreign: "child" }
            ]
        },
        fruit: {
            label: "🍎 Obst (Fruit)",
            words: [
                { de: "Apfel", foreign: "apple" }, { de: "Banane", foreign: "banana" }, { de: "Kirsche", foreign: "cherry" },
                { de: "Weintrauben", foreign: "grapes" }, { de: "Zitrone", foreign: "lemon" }, { de: "Orange", foreign: "orange" },
                { de: "Pfirsich", foreign: "peach" }, { de: "Birne", foreign: "pear" }, { de: "Ananas", foreign: "pineapple" },
                { de: "Pflaume", foreign: "plum" }, { de: "Erdbeere", foreign: "strawberry" }, { de: "Wassermelone", foreign: "watermelon" }
            ]
        },
        vegetables: {
            label: "🥦 Gemüse (Vegetables)",
            words: [
                { de: "Aubergine", foreign: "aubergine" }, { de: "Bohnen", foreign: "beans" }, { de: "Karotte", foreign: "carrot" },
                { de: "Gurke", foreign: "cucumber" }, { de: "Lauch", foreign: "leek" }, { de: "Kopfsalat", foreign: "lettuce" },
                { de: "Zwiebel", foreign: "onion" }, { de: "Erbsen", foreign: "peas" }, { de: "Kartoffel", foreign: "potato" },
                { de: "Kürbis", foreign: "pumpkin" }, { de: "Radieschen", foreign: "radish" }, { de: "Tomate", foreign: "tomato" }
            ]
        },
        food: {
            label: "🥪 Essen (Food)",
            words: [
                { de: "Brot", foreign: "bread" }, { de: "Käse", foreign: "cheese" }, { de: "Ei", foreign: "egg" },
                { de: "Butter", foreign: "butter" }, { de: "Müsli", foreign: "cereals" }, { de: "Schokoladenkuchen", foreign: "chocolate cake" },
                { de: "Schinken", foreign: "ham" }, { de: "Honig", foreign: "honey" }, { de: "Marmelade", foreign: "jam" },
                { de: "Pizza", foreign: "pizza" }, { de: "Sandwich", foreign: "sandwich" }, { de: "Toast", foreign: "toast" }
            ]
        },
        drinks: {
            label: "🧃 Getränke (Drinks)",
            words: [
                { de: "Kaffee", foreign: "coffee" }, { de: "heiße Schokolade", foreign: "hot chocolate" }, 
                { de: "Milch", foreign: "milk" }, { de: "Mineralwasser", foreign: "mineral water" }, 
                { de: "Orangensaft", foreign: "orange juice" }, { de: "Tee", foreign: "tea" }, { de: "Wasser", foreign: "water" }
            ]
        },
        weather: {
            label: "⛅ Wetter (Weather)",
            words: [
                { de: "wolkig", foreign: "cloudy" }, { de: "kalt", foreign: "cold" }, { de: "Hagel", foreign: "hail" },
                { de: "heiß", foreign: "hot" }, { de: "Regenbogen", foreign: "rainbow" }, { de: "regnerisch", foreign: "rainy" },
                { de: "verschneit", foreign: "snowy" }, { de: "stürmisch", foreign: "stormy" }, { de: "sonnig", foreign: "sunny" },
                { de: "Gewitter", foreign: "thunder and lightning" }, { de: "windig", foreign: "windy" }, { de: "Regenschirm", foreign: "umbrella" }
            ]
        },
        christmas: {
            label: "🎄 Weihnachten (Christmas)",
            words: [
                { de: "Glocke", foreign: "bell" }, { de: "Kerze", foreign: "candle" }, { de: "Weihnachtsbaum", foreign: "Christmas tree" },
                { de: "Kekse", foreign: "cookies" }, { de: "Lichter", foreign: "lights" }, { de: "Geschenk", foreign: "present" },
                { de: "Rentier", foreign: "reindeer" }, { de: "Weihnachtsmann", foreign: "Santa Claus" }, { de: "Schlitten", foreign: "sleigh" }
            ]
        }
    },
    tr: {
        numbers: {
            label: "🔢 Sayılar (Zahlen)",
            words: [
                { de: "Null", foreign: "sıfır" }, { de: "Eins", foreign: "bir" }, { de: "Zwei", foreign: "iki" }, 
                { de: "Drei", foreign: "üç" }, { de: "Vier", foreign: "dört" }, { de: "Fünf", foreign: "beş" }, 
                { de: "Sechs", foreign: "altı" }, { de: "Sieben", foreign: "yedi" }, { de: "Acht", foreign: "sekiz" }, 
                { de: "Neun", foreign: "dokuz" }, { de: "Zehn", foreign: "on" }, { de: "Elf", foreign: "on bir" }, 
                { de: "Zwölf", foreign: "on iki" }, { de: "Dreizehn", foreign: "on üç" }, { de: "Vierzehn", foreign: "on dört" },
                { de: "Fünfzehn", foreign: "on beş" }, { de: "Sechzehn", foreign: "on altı" }, { de: "Siebzehn", foreign: "on yedi" },
                { de: "Achtzehn", foreign: "on sekiz" }, { de: "Neunzehn", foreign: "on dokuz" }, { de: "Zwanzig", foreign: "yirmi" },
                { de: "Dreißig", foreign: "otuz" }, { de: "Vierzig", foreign: "kırk" }, { de: "Fünfzig", foreign: "elli" }, 
                { de: "Sechzig", foreign: "altmış" }, { de: "Siebzig", foreign: "yetmiş" }, { de: "Achtzig", foreign: "seksen" },
                { de: "Neunzig", foreign: "doksan" }, { de: "Einhundert", foreign: "yüz" }, { de: "Eintausend", foreign: "bin" }
            ]
        },
        colours: {
            label: "🎨 Renkler (Farben)",
            words: [
                { de: "Schwarz", foreign: "siyah" }, { de: "Blau", foreign: "mavi" }, { de: "Braun", foreign: "kahverengi" },
                { de: "Grün", foreign: "yeşil" }, { de: "Grau", foreign: "gri" }, { de: "Rot", foreign: "kırmızı" },
                { de: "Gelb", foreign: "sarı" }, { de: "Weiß", foreign: "beyaz" }, { de: "Rosa", foreign: "pembe" },
                { de: "Lila", foreign: "mor" }, { de: "Orange", foreign: "turuncu" }
            ]
        },
        school: {
            label: "🎒 Okul (Schule)",
            words: [
                { de: "Buch", foreign: "kitap" }, { de: "Tisch", foreign: "masa" }, { de: "Stuhl", foreign: "sandalye" },
                { de: "Tafel", foreign: "tahta" }, { de: "Schultasche", foreign: "okul çantası" }, { de: "Lineal", foreign: "cetvel" },
                { de: "Schere", foreign: "makas" }, { de: "Bücherregal", foreign: "kitaplık" }, { de: "Buntstift", foreign: "boya kalemi" },
                { de: "Computer", foreign: "bilgisayar" }, { de: "Schrank", foreign: "dolap" }, { de: "Tür", foreign: "kapı" },
                { de: "Übungsheft", foreign: "yazı defteri" }, { de: "Kleber", foreign: "yapıştırıcı" }, { de: "Füller", foreign: "dolma kalem" },
                { de: "Federmäppchen", foreign: "kalem kutusu" }, { de: "Anspitzer", foreign: "kalemtıraş" }, { de: "Radiergummi", foreign: "silgi" },
                { de: "Waschbecken", foreign: "lavabo" }, { de: "Fenster", foreign: "pencere" }
            ]
        },
        zoo_animals: {
            label: "🦁 Hayvanat Bahçesi Hayvanları (Zootiere)",
            words: [
                { de: "Bär", foreign: "ayı" }, { de: "Elefant", foreign: "fil" }, { de: "Giraffe", foreign: "zürafa" },
                { de: "Löwe", foreign: "aslan" }, { de: "Affe", foreign: "maymun" }, { de: "Schlange", foreign: "yılan" },
                { de: "Krokodil", foreign: "timsah" }, { de: "Nilpferd", foreign: "su aygırı" }, { de: "Seehund", foreign: "fok" },
                { de: "Tiger", foreign: "kaplan" }, { de: "Schildkröte", foreign: "kaplumbağa" }, { de: "Zebra", foreign: "zebra" }
            ]
        },
        farm_animals: {
            label: "🐄 Çiftlik Hayvanları (Bauernhoftiere)",
            words: [
                { de: "Katze", foreign: "kedi" }, { de: "Hahn", foreign: "horoz" }, { de: "Kuh", foreign: "inek" },
                { de: "Hund", foreign: "köpek" }, { de: "Esel", foreign: "eşek" }, { de: "Ziege", foreign: "keçi" },
                { de: "Gans", foreign: "kaz" }, { de: "Henne", foreign: "tavuk" }, { de: "Pferd", foreign: "at" },
                { de: "Schwein", foreign: "domuz" }, { de: "Schaf", foreign: "koyun" }
            ]
        },
        pets: {
            label: "🐶 Evcil Hayvanlar (Haustiere)",
            words: [
                { de: "Hund", foreign: "köpek" }, { de: "Katze", foreign: "kedi" }, { de: "Maus", foreign: "fare" },
                { de: "Vogel", foreign: "kuş" }, { de: "Fisch", foreign: "balık" }, { de: "Kaninchen", foreign: "tavşan" },
                { de: "Wellensittich", foreign: "muhabbet kuşu" }, { de: "Meerschweinchen", foreign: "ginea domuzu" }, { de: "Hamster", foreign: "hamster" },
                { de: "Papagei", foreign: "papağan" }, { de: "Ratte", foreign: "sıçan" }, { de: "Spinne", foreign: "örümcek" }
            ]
        },
        body: {
            label: "🧍 Vücudumuz (Körper)",
            words: [
                { de: "Kopf", foreign: "baş / kafa" }, { de: "Hals", foreign: "boyun" }, { de: "Hand", foreign: "el" },
                { de: "Finger", foreign: "parmak" }, { de: "Knie", foreign: "diz" }, { de: "Zeh", foreign: "ayak parmağı" },
                { de: "Schulter", foreign: "omuz" }, { de: "Arm", foreign: "kol" }, { de: "Bauch", foreign: "karın" },
                { de: "Bein", foreign: "bacak" }, { de: "Fuß", foreign: "ayak" }, { de: "Haare", foreign: "saç" },
                { de: "Gesicht", foreign: "yüz" }, { de: "Ohr", foreign: "kulak" }, { de: "Nase", foreign: "burun" },
                { de: "Mund", foreign: "ağız" }, { de: "Auge", foreign: "göz" }, { de: "Zahn", foreign: "diş" }
            ]
        },
        clothes: {
            label: "👕 Giysiler (Kleidung)",
            words: [
                { de: "T-Shirt", foreign: "tişört" }, { de: "Hose", foreign: "pantolon" }, { de: "Schuhe", foreign: "ayakkabı" },
                { de: "Pullover", foreign: "kazak" }, { de: "Kleid", foreign: "elbise" }, { de: "kurze Hose", foreign: "şort" },
                { de: "Kappe", foreign: "şapka / kep" }, { de: "Jacke", foreign: "ceket / mont" }, { de: "Regenmantel", foreign: "yağmurluk" },
                { de: "Regenhut", foreign: "yağmur şapkası" }, { de: "Schal", foreign: "atkı" }, { de: "Rock", foreign: "etek" },
                { de: "Handschuhe", foreign: "eldiven" }, { de: "Jeans", foreign: "kot pantolon" }, { de: "Sandalen", foreign: "sandalet" },
                { de: "Schneestiefel", foreign: "kar botu" }, { de: "Socken", foreign: "çorap" }, { de: "Sonnenbrille", foreign: "güneş gözlüğü" },
                { de: "Gummistiefel", foreign: "çizme" }
            ]
        },
        family: {
            label: "👨‍👩‍👦 Aile (Familie)",
            words: [
                { de: "Mutter", foreign: "anne" }, { de: "Vater", foreign: "baba" }, { de: "Bruder", foreign: "erkek kardeş" },
                { de: "Schwester", foreign: "kız kardeş" }, { de: "Oma", foreign: "büyükanne / anneanne / babaanne" }, { de: "Opa", foreign: "büyükbaba / dede" },
                { de: "Eltern", foreign: "ebeveyn" }, { de: "Großeltern", foreign: "büyükanne ve büyükbaba" }, { de: "Kind", foreign: "çocuk" }
            ]
        },
        fruit: {
            label: "🍎 Meyveler (Obst)",
            words: [
                { de: "Apfel", foreign: "elma" }, { de: "Banane", foreign: "muz" }, { de: "Kirsche", foreign: "kiraz" },
                { de: "Weintrauben", foreign: "üzüm" }, { de: "Zitrone", foreign: "limon" }, { de: "Orange", foreign: "portakal" },
                { de: "Pfirsich", foreign: "şeftali" }, { de: "Birne", foreign: "armut" }, { de: "Ananas", foreign: "ananas" },
                { de: "Pflaume", foreign: "erik" }, { de: "Erdbeere", foreign: "çilek" }, { de: "Wassermelone", foreign: "karpuz" }
            ]
        },
        vegetables: {
            label: "🥦 Sebzeler (Gemüse)",
            words: [
                { de: "Aubergine", foreign: "patlıcan" }, { de: "Bohnen", foreign: "fasulye" }, { de: "Karotte", foreign: "havuç" },
                { de: "Gurke", foreign: "salatalık" }, { de: "Lauch", foreign: "pırasa" }, { de: "Kopfsalat", foreign: "marul" },
                { de: "Zwiebel", foreign: "soğan" }, { de: "Erbsen", foreign: "bezelye" }, { de: "Kartoffel", foreign: "patates" },
                { de: "Kürbis", foreign: "kabak" }, { de: "Radieschen", foreign: "turp" }, { de: "Tomate", foreign: "domates" }
            ]
        },
        food: {
            label: "🥪 Yiyecekler (Essen)",
            words: [
                { de: "Brot", foreign: "ekmek" }, { de: "Käse", foreign: "peynir" }, { de: "Ei", foreign: "yumurta" },
                { de: "Butter", foreign: "tereyağı" }, { de: "Müsli", foreign: "müsli" }, { de: "Schokoladenkuchen", foreign: "çikolatalı pasta" },
                { de: "Schinken", foreign: "jambon" }, { de: "Honig", foreign: "bal" }, { de: "Marmelade", foreign: "reçel" },
                { de: "Pizza", foreign: "pizza" }, { de: "Sandwich", foreign: "sandviç" }, { de: "Toast", foreign: "tost" }
            ]
        },
        drinks: {
            label: "🧃 İçecekler (Getränke)",
            words: [
                { de: "Kaffee", foreign: "kahve" }, { de: "heiße Schokolade", foreign: "sıcak çikolata" }, 
                { de: "Milch", foreign: "süt" }, { de: "Mineralwasser", foreign: "maden suyu" }, 
                { de: "Orangensaft", foreign: "portakal suyu" }, { de: "Tee", foreign: "çay" }, { de: "Wasser", foreign: "su" }
            ]
        },
        weather: {
            label: "⛅ Hava Durumu (Wetter)",
            words: [
                { de: "wolkig", foreign: "bulutlu" }, { de: "kalt", foreign: "soğuk" }, { de: "Hagel", foreign: "dolu" },
                { de: "heiß", foreign: "sıcak" }, { de: "Regenbogen", foreign: "gökkuşağı" }, { de: "regnerisch", foreign: "yağmurlu" },
                { de: "verschneit", foreign: "karlı" }, { de: "stürmisch", foreign: "fırtınalı" }, { de: "sonnig", foreign: "güneşli" },
                { de: "Gewitter", foreign: "gök gürültülü fırtına" }, { de: "windig", foreign: "rüzgarlı" }, { de: "Regenschirm", foreign: "şemsiye" }
            ]
        },
        christmas: {
            label: "🎄 Noel (Weihnachten)",
            words: [
                { de: "Glocke", foreign: "çan" }, { de: "Kerze", foreign: "mum" }, { de: "Weihnachtsbaum", foreign: "noel ağacı" },
                { de: "Kekse", foreign: "kurabiye" }, { de: "Lichter", foreign: "ışıklar" }, { de: "Geschenk", foreign: "hediye" },
                { de: "Rentier", foreign: "ren geyiği" }, { de: "Weihnachtsmann", foreign: "noel baba" }, { de: "Schlitten", foreign: "kızak" }
            ]
        }
    }
};