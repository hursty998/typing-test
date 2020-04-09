
var words = ["the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "hot", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "there", "when", "up", "use", "your", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these", "her", "long", "make", "thing", "see", "him", "two", "has", "look", "more", "day", "could", "go", "come", "did", "number", "sound", "no", "most", "people", "my", "over", "know", "water", "than", "call", "first", "who", "may", "down", "side", "been", "now", "find", "any", "new", "work", "part", "take", "get", "place", "made", "live", "where", "after", "back", "little", "only", "round", "man", "year", "came", "show", "every", "good", "me", "give", "our", "under", "name", "very", "through", "just", "form", "sentence", "great", "think", "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean", "before", "move", "right", "boy", "old", "too", "same", "tell", "does", "set", "three", "want", "air", "well", "also", "play", "small", "end", "put", "home", "read", "hand", "port", "large", "spell", "add", "even", "land", "here", "must", "big", "high", "such", "follow", "act", "why", "ask", "men", "change", "went", "light", "kind", "off", "need", "house", "picture", "try", "us", "again", "animal", "point", "mother", "world", "near", "build", "self", "earth", "father", "head", "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study", "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run", "don't", "while", "press", "close", "night", "real", "life", "few", "north", "open", "seem", "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper", "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile", "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat", "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain", "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song", "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen", "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece", "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best", "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold", "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table", "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay", "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road", "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power", "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note", "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able", "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final", "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong", "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply", "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface", "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common", "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran", "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire", "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball", "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position", "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general", "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick", "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "energy", "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", "forest", "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg", "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat", "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign", "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear", "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight", "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven", "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result", "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast", "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry", "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else", "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud", "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method", "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny", "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single", "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "trade", "melody", "trip", "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout", "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard", "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team", "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell", "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "gentle", "woman", "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "whose", "locate", "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human", "history", "effect", "electric", "expect", "crop", "modern", "element", "hit", "student", "corner", "party", "supply", "bone", "rail", "imagine", "provide", "agree", "thus", "capital", "won't", "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "guess", "necessary", "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare", "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream", "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine", "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print", "dead", "spot", "desert", "suit", "current", "lift", "rose", "continue", "block", "chart", "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term", "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born", "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch", "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require", "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent", "oxygen", "sugar", "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch", "match", "suffix", "especially", "fig", "afraid", "huge", "sister"];

var timer;
var time = 0;
var timerText= "Time: 60s";
var firstTime =true;
var letterNo=0;
var entered;
var backColorWhenTyping = "pink";
var colorWhenCorrected = "rgb(255, 191, 0)"; //have to use this or color name not #FFFFF due to validation issues
var colorCorrect = "green";
var colorWrong = "red";
var end=false;
var correct=0;
var partiallyCorrect=0;
var incorrect=0;
var black=0;
var charactersAttempted=0;
var amountSpaces=0;
var easy;
var medium;
var hard;

function start(level) {
    hideItem("but1");
    hideItem("but2");
    hideItem("but3");
    
    if(level=="easy"){
        
        easy=true;
        medium=false;
        hard=false;
    }
    else if(level=="medium"){
        easy=false;
        medium=true;
        hard=false;
    }
    else{
        easy=false;
        medium=false;
        hard=true;
    }
    showItem("ul");
    showItem("text-imp");
    showItem("restart-btn");
    showItem("timer");
    
    textin=createString();
    createList(textin);
    document.getElementsByTagName("LI")[0].style.background=backColorWhenTyping;
}

window.onload = function () {
    hideItem("ul")
    hideItem("text-imp");
    hideItem("restart-btn");
    hideItem("timer");
}

function createList(text){ //this function takes the string 'text' and puts it in unordered list
    for (var i =0; i<text.length;i++){
        var node = document.createElement("LI");  
        var textnode = document.createTextNode(text[i]);
        node.appendChild(textnode);
        document.getElementById("ul").appendChild(node); //appending list items into the UL with id="ul"
    }
}

function emptyList(){ //this function empties the unordered list id="ul" so you can write something else there
    var ul = document.getElementById("ul")
    ul.innerHTML='';
}

document.onkeyup = function(evt){
    
    if(end==false){
        var inputValue = document.getElementById("text-imp").value;  //string inside input box
        if (firstTime==true){ //starts the timer when the first key is entred
            if(inputValue.length>0){ //it will only start if the user is typing inside the box
                timer = setInterval(updateTime, 100); //remeber updateTime is a function further down
                firstTime=false;
            }
        }

        for (var i = 0; i < document.getElementsByTagName("LI").length; i++) { //making all the values unhighlighted
            var currentLetter = document.getElementsByTagName("LI")[i]
            currentLetter.style.background= "none";
        }

        
        for (var i = 0; i < inputValue.length; i++) //this part basically checks to see if they have imputted the correct character
        {
            var currentLetter = document.getElementsByTagName("LI")[i]
            if (inputValue[i] == currentLetter.innerHTML) 
            {
                if (currentLetter.style.color== colorWrong || currentLetter.style.color==colorWhenCorrected ) 
                {
                    currentLetter.style.color=colorWhenCorrected; //if the color of the character was red and they corrected it then it will go to the colorWhenCorrected color
                }
                else
                currentLetter.style.color=colorCorrect; //f they have the character correct then it will become color=colorCorrect
            }
            else if (inputValue[i] != currentLetter.innerHTML && currentLetter.innerHTML == " ") 
            {
                currentLetter.innerHTML = "_"; 
                currentLetter.style.color=colorWrong;
            }
            else
            {
                if(currentLetter.innerHTML=="_" && inputValue[i]==" "){
                    currentLetter.style.color = colorWhenCorrected;
                }
                else{
                    currentLetter.style.color=colorWrong; //if the character is incorrect then the color will be colorWrong
                }
            }
        }
        currentLetter = document.getElementsByTagName("LI")[inputValue.length];
        currentLetter1 = document.getElementsByTagName("LI")[inputValue.length-1];
        currentLetter1.scrollIntoView();
        currentLetter.style.background=backColorWhenTyping; //this will highlight the next character which needs to be typed
    }
    
}


function updateTime() //this function will be called every 1000ms 
{
    time+=0.1; //every time the function is called we want to add 1 second
    if (time>=60){
        clearInterval(timer);
        end=true;
        for (var i = 0; i < document.getElementsByTagName("LI").length; i++) { 
            
            var currentLetter = document.getElementsByTagName("LI")[i]
            if (currentLetter.style.color==colorCorrect){
                correct+=1;
                charactersAttempted+=1;
            }
            else if(currentLetter.style.color==colorWhenCorrected){
                partiallyCorrect+=1;
                charactersAttempted+=1;
            }
            else if(currentLetter.style.color==colorWrong)
            {
                incorrect+=1;
                charactersAttempted+=1;
            }
            else
                black+=1;
            if (currentLetter.innerHTML==" " || currentLetter.innerHTML=="_"){   
                if(currentLetter.style.color==colorWrong || currentLetter.style.color==colorWhenCorrected ||currentLetter.style.color==colorCorrect){
                amountSpaces+=1;
                }
            }
        }
        emptyList();
        createList("game over");
        timer= 0;
        document.getElementById("timer").innerHTML="Time left: 0 seconds";
        showItem("speed");
        showItem("accuracy");
        showItem("realAccuracy");
        getScore();
    }
    else{
        timerText="time: "+time+"s";
        document.getElementById("timer").innerHTML="Time left: "+(60-time).toFixed(1)+" seconds";
    }
    
}

function createString() {
    var text="";
    for (var i =0; i<200;i++){
        var word=words[Math.floor(Math.random()*words.length)]
        var num = Math.floor(Math.random()*18);
        if (num == 1 && i != 0) {
            if (medium==true || hard==true){
                text += ". ";
                text += word.charAt(0).toUpperCase() + word.slice(1) 
            }
            
        }
        else if(num==2 && i!=0 && hard==true){
            text+=", "
            text+=word;
        }
        if(i==0){
            text+=word.charAt(0).toUpperCase() + word.slice(1)
        }
        else{
            
            text+=" ";
            text+=word;
            
        }
        
    }
    return text;
}

function getScore(){
    var speed=0;
   
    var accuracy = ((correct+partiallyCorrect)/charactersAttempted)*100;
    var realAccuracy = (correct/charactersAttempted)*100;
    speed= (charactersAttempted-amountSpaces)/5.1;
    document.getElementById("speed").innerText= "your speed is: "+speed.toFixed(1)+" WPM";
    document.getElementById("accuracy").innerText="your acuracy is: "+accuracy.toFixed(1)+"%";
    document.getElementById("realAccuracy").innerText="your first time accuracy is: "+realAccuracy.toFixed(1)+"%";
}

function restart() {
    showItem("but1");
    showItem("but2");
    showItem("but3");
    hideItem("ul");
    hideItem("text-imp");
    hideItem("restart-btn")
    hideItem("timer")
    emptyList();
    clearInterval(timer);
    hideItem("speed");
    hideItem("accuracy");
    hideItem("realAccuracy");
    end = false;
    time = 0;
    document.getElementById("timer").innerHTML = "Time left: " + (60 - time).toFixed(1) + " seconds";
    document.getElementById("text-imp").value="";
    firstTime = true;
}
function hideItem(classN) {
    document.getElementById(classN).style.display="none";
}
function showItem(classN) {
    document.getElementById(classN).style.display="block";
}