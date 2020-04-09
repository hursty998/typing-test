var timer;
var time = 0;
var timerText= "Time: 60s";
var firstTime =true;
var letterNo=0;
var entered;

window.onload = function(){
    var textin = "this is the text going in"
    createList(textin)
    document.getElementsByTagName("LI")[0].setAttribute("style","color: yellow;");
}

function createList(text){
    for (var i =0; i<text.length;i++){
        var node = document.createElement("LI");  
        var textnode = document.createTextNode(text[i]);
        node.appendChild(textnode);
        document.getElementById("ul").appendChild(node);
    }
}

function emptyList(){
    var ul = document.getElementById("ul")
    ul.innerHTML='';
}

document.onkeyup = function(evt){
    
    //btw i have no idea how this next bit works but it gets the charCode of what ever was entred
        /*Key       Code
        backspace	8
        tab	9
        enter	13
        shift	16
        ctrl	17
        alt	18
        pause/break	19
        caps lock	20
        escape	27
        (space)	32
        page up	33
        page down	34
        end	35
        home	36
        left arrow	37
        up arrow	38
        right arrow	39
        down arrow	40
        insert	45
        delete	46*/
    evt = (evt) ? evt : (window.event) ? event : null;
    if (evt)
    { 
        var charCode = (evt.charCode) ? evt.charCode :((evt.keyCode) ? evt.keyCode :((evt.which) ? evt.which : 0));
        console.log(charCode); 
    }
    if (firstTime==true){ //starts the timer when the first key is entred
        timer = setInterval(updateTime, 1000);
        firstTime=false;
    }
    var currentLetter =document.getElementsByTagName("LI")[letterNo]
    currentLetter.setAttribute("style","color: yellow;");
    var keyof = currentLetter.innerHTML.toUpperCase().charCodeAt(0);
    console.log(keyof);
    if (charCode == keyof){
        currentLetter.setAttribute("style","color: green;");
    }
    else if (charCode==8){
        letterNo-=2;
    }
    else{
        if (keyof == 32){
            currentLetter.innerText="_";//help here
            console.log(currentLetter.innerHTML);
        }
        currentLetter.setAttribute("style","color: red;");
    }
    
    letterNo+=1; //which letter we are on
    currentLetter =document.getElementsByTagName("LI")[letterNo]
    currentLetter.setAttribute("style","color: yellow;");
}


function updateTime()
{

    time+=1
    if (time>=60){
        
        emptyList();
        createList("game over");
        timer= 0;
        document.getElementById("timer").innerHTML="Time left: 0 seconds"
    }
    else{
        timerText="time: "+time+"s";
        document.getElementById("timer").innerHTML="Time left: "+(60-time)+" seconds";
    }
    
}