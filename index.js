let elScoreHome = document.getElementById("score-home")
let elScoreGuest = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0



function add1Home(){
    scoreHome += 1
    elScoreHome.textContent = scoreHome
}
function add2Home(){
    scoreHome += 2
    elScoreHome.textContent = scoreHome
}
function add3Home(){
    scoreHome += 3
    elScoreHome.textContent = scoreHome
}



function add1Guest(){
    scoreGuest += 1
    elScoreGuest.textContent = scoreGuest
}
function add2Guest(){
    scoreGuest += 2
    elScoreGuest.textContent = scoreGuest
}
function add3Guest(){
    scoreGuest += 3
    elScoreGuest.textContent = scoreGuest
}

function newGame(){
    scoreGuest = 0
    scoreHome = 0
    elScoreHome.textContent = scoreHome
    elScoreGuest.textContent = scoreGuest
}