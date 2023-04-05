/*state variables*/
let clicks;
let winner;
let cards;
let time;
let matches;
let card1;
let card2;

/* const Elements. Need cards front and backs to show. Need messages to show.Need a buton*/
/*const cardsBacksEls = document.querySelectorAll('.cardsBacks > div');
const cardsFrontsEls = document.querySelectorAll('.cardsFronts > div')*/
const messageEl = document.querySelectorAll ('h1', 'h2');
const playAgainBtn = document.querySelectorAll('button');
const board = document.querySelector('#board');

/* event listeners. */
board.addEventListener('click', flipCard);

function flipCard(evt) {
        console.log('click');
        const cardContainer = evt.target.closest('.flip-card-inner');
        /*console.log(cardContainer);*/
        cardContainer.style.transform = 'rotateX(180deg)'; 
        flipped(cardContainer)
    }

/* list all of the functions */
initialize ();

function initialize(){

matches = 0;
chosen = [];
cards = [];
time = 0;
flips = 0;
highscore = {
    time:null,
    flips: null
    };
}

/* Flip cards over*/
function flipped(cardContainer) {
    const card = cardContainer
    console.log(card)
    /*card.style.transform = "rotateX(180deg)";*/
    /*card.classList.toggle('flipped');*/
    if (chosen.length == 0) {
        card1 = card
        console.log(card1)
    };
    if (chosen.length == 2) {
        card2 = card
        console.log(card2)
    }
    chosen.push(card.dataset.id)
        
/*How to know if the player won. check for card matches */
    console.log(matches)
    console.log(chosen)
    if(chosen.length === 2) {
        matches = chosen.every(id => id === chosen[0]) ? matches + 1: matches + 0
        chosen = []
    }
}  

/* How to know if the player lost. check for cards not matching */






/*document.getElementById('flip').addEventListener('click', function (){
    cards.toggleClassName('flipped');
}, false); */

