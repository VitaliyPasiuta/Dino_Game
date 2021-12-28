const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("score");
const cactusMov = document.getElementById("")
let scoreChangeVal;
let speed = 3;
let scoreCof = 1; 
let iterator = 0;
let leftLegs = true;
let imgIterator = 0;
let step = 40;

document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
    if (dino.classList != "jump"){
       dino.classList.add("jump"); 
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    },500)
}

let game = setInterval(() => {
    let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    move();
    iter();

    if (cactusPos >= 0 && cactusPos <= 50 && dinoPos >= 75){
        newGame();
    }
}, 10);

function move () {
    let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusPos <= 0){
        cactus.style.left = "580px";
        cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    }
    cactus.style.left = (cactusPos - speed) + 'px';
}

function iter(){
    if ((iterator % 700 === 0) && (iterator < 4000)){
        speed += 1;
        
        scoreCof += 1
        if (step > 25){
           step -= 8; 
           imgIterator = 0;
        }
        
    }
    if (imgIterator === step && leftLegs){
        dino.style.backgroundImage = "url(./img/dino3.png)";
        imgIterator = 0;
        leftLegs = false;
    }
    else if (imgIterator === step && !leftLegs){
        dino.style.backgroundImage = "url(./img/dino4.png)";
        imgIterator = 0;
        leftLegs = true;
    }
    iterator += 1;
    imgIterator+= 1;
    
}

let scoreChange = setInterval(() => {
    scoreChangeVal = parseInt(score.innerHTML);
    scoreChangeVal += scoreCof;
    scoreChangeVal = scoreChangeVal.toString();
    score.innerHTML = scoreChangeVal;
}, 10);

function newGame () {
    alert(`GAME OVER your score ${scoreChangeVal}`);
    score.innerHTML = "0";
    cactus.style.left = "580px";
    speed = 3;
    scoreCof = 1; 
    iterator = 0;
}


