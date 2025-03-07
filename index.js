// count Home score
let countHomeScore =document.getElementById("countingHome")

function btn1Home(){
    countHomeScore.textContent++;
}

function btn2Home(){
    countHomeScore.textContent = parseInt(countHomeScore.textContent) + 2;
}
function btn3Home(){
    countHomeScore.textContent = parseInt(countHomeScore.textContent) + 3;
}
function resetHome(){
    countHomeScore.textContent = 0;
}


// count guest score
let countGuestScore = document.getElementById("countingGuest")

function btn1Guest(){
    countGuestScore.textContent++;
}

function btn2Guest(){
    countGuestScore.textContent = parseInt(countGuestScore.textContent) + 2;
}
function btn3Guest(){
    countGuestScore.textContent = parseInt(countGuestScore.textContent) + 3;
}
function resetGuest(){
    countGuestScore.textContent = 0;
}