let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
const messageEl = document.querySelector(".message-el");
const sumEl = document.querySelector(".sum-el");
const cardsEl = document.querySelector(".cards-el");
const startBtn = document.querySelector(".start-btn");
const newCardBtn = document.querySelector(".new-card-btn")
const playerEl = document.querySelector(".player-el");
playerEl.textContent = player.name + ": $" + player.chips;

// Populate player name and number of chips
const player = {
    name: "Per",
    chips: "145"
}

function takeTurn() {
    getRandomCard();
    checkSum();
    renderGame();
    checkGameState();
}

// Draws a card and returns the calculated value of the card
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

// Plays the game and determines state of player
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
    // Enable start button, disable new card button if you get blackjack or lose
    if (!isAlive || hasBlackJack===true) {
        startBtn.disabled = false;
        newCardBtn.disabled = true;
        resetGame();
    }
    // New card button enabled only if you are still alive
    else {
        startBtn.disabled=true;
        newCardBtn.disabled = false;
    }
}

// Resets game values
function resetGame() {
    isAlive=true;
    sum = 0;
    cards=[];
}