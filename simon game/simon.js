let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false ) {
        console.log("game is started");
        started = true;
    }

    levelUp();
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    //console.log(randColor);
   // console.log(randIdx);
    //console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx) {
    //console.log("curr level : ", level);

    if(userSeq[idx] === gameSeq[idx]) {
        //console.log("same value");
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            Document.querySelector("body").style.backgroundColor = " white";
        }, 150);
        reset();
    }
}

function btnPress() {
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress) 
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}