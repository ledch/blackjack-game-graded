let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
let startBtn = document.querySelector(".start-btn");
let newCardBtn = document.querySelector(".new-card-btn")

//populate player name and number of chips
let player = {
    name: "Per",
    chips: "145"
}

let playerEl = document.querySelector(".player-el");
playerEl.textContent = player.name + ": $" + player.chips;

//player takes a turn, getting a card
function takeTurn() {
    getRandomCard();
    checkSum();
    renderGame();
    checkGameState();
}

function getRandomCard() {
    let randomCard = (Math.floor(Math.random()*13) + 1);
   if (randomCard===1) {
    return 11;
   }
   else if (randomCard>=11) {
    return 10;
   }
   else {
    return randomCard;
   }
}

function checkSum() {
    let cardValue = getRandomCard();
    cards.push(cardValue);
    sum+=cardValue;
}

//prints out the messages
function renderGame() {
    cardsEl.textContent = "Cards:";
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += (" " + cards[i]);
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

//Evaluates if you are in the middle of a game or ready to start a new game
function checkGameState() {
    //enable start button, disable new card button if you get blackjack or lose
    if (!isAlive || hasBlackJack===true) {
        startBtn.disabled = false;
        newCardBtn.disabled = true;
        resetGame();
    }
    //if you are still playing only new card is enabled
    else {
        startBtn.disabled=true;
        newCardBtn.disabled = false;
    }
}

//resets game values
function resetGame() {
    isAlive=true;
    sum = 0;
    cards=[];
}