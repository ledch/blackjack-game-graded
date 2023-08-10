let cards = [];
let sum = 0;
let hasBlackJack = false;
//starting out with false, because how can you be alive when you're not even playing the game?
let isAlive = true;
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");

//populate player name and number of chips
let player = {
    name: "Per",
    chips: "145"
}

let playerEl = document.querySelector(".player-el");
playerEl.textContent = player.name + ": $" + player.chips;

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
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
}

function startGame() {
    if (isAlive && hasBlackJack!==true) {
        let card = getRandomCard();
        cards.push(card);
        sum+=card;
        renderGame();
    }
    else {
        isAlive=true;
        sum = 0;
        cards=[];
        renderGame();
    }
}

function getRandomCard() {
    let randomNumber = (Math.floor(Math.random()*13) + 1);
   if (randomNumber===1) {
    return 11;
   }
   else if (randomNumber>=11) {
    return 10;
   }
   else {
    return randomNumber;
   }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        startGame();
    }
}