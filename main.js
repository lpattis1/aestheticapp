let generatePalettes = document.querySelector(".generatePalettes");
let paletteReset = document.querySelector(".resetButton");

const aestheticAdjective = ["demonic", "dapper", "gleaming", "psychedelic", "cloudy", "charming", "quixotic", "bashful", "ubiquitous", "hateful", "clever", "snobbish", "spiritual", "dreary", "rapid", "fabulous", "youthful", "wise", "basic", "damaged", "penitent", "bewildered", "flippant", "precious", "fluffy", "delicate", "vagabond", "quizzical", "shallow", "apathetic", "silent", "anxious", "meek", "delirious", "misty", "sad", "rare", "lively", "abrasive", "damaged", "gullible", "frail", "grouchy", "chilly", "childlike", "enchanted", "draconian", "average", "accidental", "guarded", "gray", "fancy", "brave", "sincere", "smelly", "mundane", "goofy", "zany", "voiceless", "imperfect", "deadpan", "sarcastic", "blue-eyed", "royal", "ethereal"];

const aestheticNoun = ["mortal", "witch", "human", "maid", "angel", "doomer", "simp", "bachelor", "vampire", "spirit", "mom", "aunt", "uncle", "ghost", "bro", "mermaid", "hippie", "squid", "lover", "millenial", "boomer", "poet", "gamer", "author", "apostle", "cavalier", "leader", "metropolitan", "chef", "sage", "singer", "lover", "teetotaler", "karen"];

const firstAesthetic = ["warm hands", "hot chocolate mustache", "silk pillowcases", "lighting the fireplace", "looking at the moon on the roof", "falling stars", "bloody knuckles", "angel wing scars", "the smell of brewing potions", "night swims", "shakespeare at starbucks", "laundromats after dark", "breathing cold air", "counting clouds", "freighthopping in small towns", "acoustic guitar strumming"];

const secondAesthetic = ["foggy halloweens", "walking in the rain", "steaming pavements after rain", "the smell of old books", "slow songs from two decades ago", "venturing through azeroth with friends", "climbing trees", "the smell of your childhood dog", "disney movies with your mom", "putting up the christmas tree", "midnight strolls through the forest", "music festivals in the summer", "wading through the creek by your house"];

const thirdAesthetic = ["first love on a friday", "staring at the glowing stickers on your ceiling", "closing your eyes during a windy day", "listening to music with your headphones on", "the perfumed smell that lingers after a shower", "sledding in the snow", "looking out at the vast ocean"];

const quotes = [
        "I'll swallow poison until I grow immune, I will scream my lungs out 'til it fills this room.",

        "Words you say never seem to live up to the ones inside your head.",

        "I'm not like them but I can pretend.",

        "The world is full of noise, yeah I hear it all the time.",

        "I'm so happy, 'cause today I found my friends, they're in my head. And I'm so ugly, but that's ok 'cause so are you, we broke our mirrors.",

        "Tired of lying in the sunshine staying home to watch the rain, you are young and life is long and there is time to kill today.",

        "I think it's gonna be a long long time till touch down brings me round again to find I'm not the man they think I am at home.",

        "Hello darkness, my old friend I've come to talk with you again.",

        "I feel that when I'm old, I'll look at you and know the world was beautiful.",

        "I shot a man in Reno, just to watch him die. When I hear that whistle blowin', I hang my head and cry.",

        "If the children don't grow up, our bodies get bigger but our hearts get torn up.",

        "I'm sick of seeing ghosts and I know how it's all going to end.",

        "I rode a tank, held a general's rank while the blitzkrieg raged and the bodies stank.",

        "Yes, there are two paths you can go by, but in the long run there's still time to change the road you're on.",

        "If seeing is believing, then believe that we have lost our eyes.",

        "There's no sensation to compare with this. Suspended animation - a state of bliss.",

        "I've had recurring nightmares, that I was loved for who I am, and missed the opportunity, to be a better man.",

        "You can check-out any time you like, but you can never leave",

        "I scraped my knees while I was praying and found a demon in my safest haven, seems like it's getting harder to believe in anything",

        "Nightswimming, remembering that night. Septembers coming soon, I'm pining for the moon.",

        "It's a luscious mix of words and tricks that let us bet when you know we should fold",

        "Faced with the dodo's conundrum I felt like I could just fly, but nothing happened every time I'd try",

        "I don't believe you, you're so serene, careening through the universe your axis on a tilt , you're guiltless and free.",

        "And I look back in regret, how I ignored when they said: run as fast as you can.",

        "Long live, all the magic we made.",

        "Would you lie with me and just forget the world?",

        "All the glory when he took our place but he took my shoulders and he shook my face and he takes and he takes and he takes.",

        "You can't plan on the heart.",

        "Let's dance to joy division and celebrate the irony, everything is going wrong, but we're so happy.",

        "Fate has dealt you a tricky hand.",

        "Take me out tonight, because I want to see people and I want to see life.",

        "Don't feel bad for me, I want you to know, deep in the cell of my heart I will feel so glad to go.",

        "You can fake it for a while, bite your tongue and smile like every mother does her ugly child.",

        "Love is the devil ahead and the devil doesn't sleep.",

        "There's a light at each end of this tunnel you shout, because you're just as far in as you'll ever be out.",

        "Once in a while you get shown the light, in the strangest places if you look at it right.",

        "You were right about the stars, each one is a setting sun.",

        "I wanna be adored."

];


function colorOne(){
    let colorOne = Math.floor(Math.random() * 12345678).toString(16);
    document.querySelector(".color-one").style.backgroundColor = "#" + colorOne;
    

}

function colorTwo(){
    const colorTwo = Math.floor(Math.random() * 12345678).toString(16);
    document.querySelector(".color-two").style.backgroundColor = "#" + colorTwo;
    

}

function colorThree(){
    const colorThree = Math.floor(Math.random() * 12345678).toString(16);
    document.querySelector(".color-three").style.backgroundColor = "#" + colorThree;
    

}

function colorFour(){
    const colorFour = Math.floor(Math.random() * 12345678).toString(16);
    document.querySelector(".color-four").style.backgroundColor = "#" + colorFour;
    

}

function colorFive(){
    const colorFive = Math.floor(Math.random() * 12345678).toString(16);
    document.querySelector(".color-five").style.backgroundColor = "#" + colorFive;
    

}

function quoteColor(){
    
    let yourQuote = document.querySelector(".quote-text").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector(".quote-text").style.fontSize = "145%";
    document.querySelector(".quote-text").style.width = "75%";
    document.querySelector(".quote-text").style.margin = "auto";
    document.querySelector(".quote-text").style.lineHeight = "1.9";
    document.querySelector(".quote-text").style.fontStyle = "italic";
    document.querySelector(".quote-text").style.paddingTop = "1.3rem";
    document.querySelector(".quote-text").style.paddingBottom = "1.3rem";

}

function aesthetic(){
    
    let aestheticGen = document.querySelector(".aesthetic-title").innerHTML = aestheticAdjective[Math.floor(Math.random() * aestheticAdjective.length)] + " " + aestheticNoun[Math.floor(Math.random() * aestheticNoun.length)];
    document.querySelector(".aesthetic-title").style.fontSize = "145%";
    document.querySelector(".aesthetic-title").style.fontWeight = "600";
    document.querySelector(".aesthetic-title").style.paddingTop = "1.3rem";

}

function threeAesthetics1(){
    
    let threeAestheticGen1 = document.querySelector(".three-aesthetics1").innerHTML = firstAesthetic[Math.floor(Math.random() * firstAesthetic.length)];
    document.querySelector(".three-aesthetics1").style.fontSize = "127%";
    document.querySelector(".three-aesthetics1").style.fontWeight = "500";
    document.querySelector(".three-aesthetics1").style.paddingTop = "1.3rem";
    let colorRandom = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector(".three-aesthetics1").style.color = "#" + colorRandom;

}

function threeAesthetics2(){
    
    let threeAestheticGen2 = document.querySelector(".three-aesthetics2").innerHTML = secondAesthetic[Math.floor(Math.random() * secondAesthetic.length)];
    document.querySelector(".three-aesthetics2").style.fontSize = "127%";
    document.querySelector(".three-aesthetics2").style.fontWeight = "500";
    document.querySelector(".three-aesthetics2").style.paddingTop = "1rem";
    let colorRandom = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector(".three-aesthetics2").style.color = "#" + colorRandom;

}

function threeAesthetics3(){
    
    let threeAestheticGen3 = document.querySelector(".three-aesthetics3").innerHTML = thirdAesthetic[Math.floor(Math.random() * thirdAesthetic.length)];
    document.querySelector(".three-aesthetics3").style.fontSize = "127%";
    document.querySelector(".three-aesthetics3").style.fontWeight = "500";
    document.querySelector(".three-aesthetics3").style.paddingTop = "1rem";
    document.querySelector(".three-aesthetics3").style.paddingBottom = "1.3rem";
    let colorRandom = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector(".three-aesthetics3").style.color = "#" + colorRandom;

}


generatePalettes.addEventListener("click", function(){
    colorOne();
    colorTwo();
    quoteColor();
    colorThree();
    colorFour();
    colorFive();
    aesthetic();
    threeAesthetics1();
    threeAesthetics2();
    threeAesthetics3();
});

paletteReset.addEventListener("click", function(){
    location.reload();
})

console.log(quotes);