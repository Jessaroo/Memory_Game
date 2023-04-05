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
    time:[],
    flips: [],
    };
}

/* Flip cards over*/
function flipped(cardContainer) {
    const card = cardContainer
    console.log(card);
    /*card.style.transform = "rotateX(180deg)";*/
    /*card.classList.toggle('flipped');*/
    if (chosen.length == 0) {
        card1 = card;
        console.log(card1);
    } else if (chosen.length === 1) {
        card2 = card;
        console.log(card2);
    }
    chosen.push(card.dataset.id);
    
    if (chosen.length === 2) {
        if (chosen[0] === chosen[1]) {
            matches ++;
            chosen = [];
        } else {
            chosen = [];
            const cardsToFlip = [card1, card2];
            setTimeout(() => {
                cardsToFlip.forEach((card) => {
                    card.style.transform = 'rotateX(0deg)';
                });
                console.log(card1, card2);
            }, 1000);
        }
    }
}
    // chosen.push(card.dataset.id);
        
/*How to know if the player won. check for card matches */
   
    /*if(chosen.length === 2) {
        matches = chosen.every(id => id === chosen[0]) ? matches + 1: matches + 0
        chosen = []
        console.log(matches);
        console.log(chosen);
    }*/
    
 

/* How to know if the player lost. check for cards not matching */






/*document.getElementById('flip').addEventListener('click', function (){
    cards.toggleClassName('flipped');
}, false); */

