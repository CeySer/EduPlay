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
            label: "🥪 Essen & Mahlzeiten (Food)",
            words: [
                { de: "Brot", foreign: "bread" }, { de: "Käse", foreign: "cheese" }, { de: "Ei", foreign: "egg" },
                { de: "Butter", foreign: "butter" }, { de: "Müsli", foreign: "cereals" }, { de: "Schokoladenkuchen", foreign: "chocolate cake" },
                { de: "Schinken", foreign: "ham" }, { de: "Honig", foreign: "honey" }, { de: "Marmelade", foreign: "jam" },
                { de: "Pizza", foreign: "pizza" }, { text: "sandwich", foreign: "sandwich" }, { de: "Toast", foreign: "toast" }
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
                { de: "Eins", foreign: "bir" }, { de: "Zwei", foreign: "iki" }, { de: "Drei", foreign: "üç" },
                { de: "Vier", foreign: "dört" }, { de: "Fünf", foreign: "beş" }
            ]
        }
    }
};