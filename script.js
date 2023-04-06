/*state variables*/
/*let clicks;*/
let won;
let lost;
/*let card1;*/
let time;
let matches;
let card1;
let card2;
/*let numberFlipsTracked;*/
let turns;

/* const Elements. */
/*const cardsBacksEls = document.querySelectorAll('.cardsBacks > div');
const cardsFrontsEls = document.querySelectorAll('.cardsFronts > div')*/
/*const messageEl = document.querySelectorAll ('');*/
const cards = document.querySelector(".flip-card")
const playAgainBtn = document.querySelector('button');
const board = document.querySelector('#board');
const header= document.querySelector('#message');
const h2 = document.querySelector('#turnscountdown');

/* event listeners. */
board.addEventListener('click', flipCard);
playAgainBtn.addEventListener('click', function () {
    window.location.reload()
});

function flipCard(evt) {
        console.log('click');
        const cardContainer = evt.target.closest('.flip-card-inner');
        /*clickstracked ++;
        console.log(clickstracked);*/
        /*console.log(cardContainer);*/
        cardContainer.style.transform = 'rotateX(180deg)'; 
        flipped(cardContainer)

    }

/* list all of the functions */
initialize ();

function initialize(){

turns = 0;
matches = 0;
chosen = [];
/*cards = [];*/
flipsCountDown = 0;
flips = 0;
highscore = {
    time: null, 
    flips: null,
    };
/*numberFlipsTracked = 0;*/
/*flipped();*/


}

/* Flip cards over*/
function flipped(cardContainer) {
    const card = cardContainer
    console.log(card);
    /*card.style.transform = "rotateX(180deg)";*/
    /*card.classList.toggle('flipped');*/
    turns++;
    if (turns >= 15) {
        header.innerText="Better Luck Next Time!"
        h2.innerText = ''
        return; 
    } else {
        h2. innerText="Remaining Turns: " + (15-turns)

    }
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
            //if matches equal 6 then game won//
            if (matches === 6) {
                header.innerText="You're a Rockstar!"
                /*console.log('gamewon'); */
            }
            chosen = [];
            /* turns start at 5*/
            /* decrement by 1 */
            /* turns  */
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

/*function flipstracked(evt) {
    const playAgainBtn = evt.target.closest('.flip-card-front');
    cardContainer.style.transform = 'rotateX(0deg)';
    flipped(cardContainer)
}*/

/*dom Elements
state variables
initialize function*/

/*  

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

/* 1, turns start at 0.
   1.5, each click increment turns by 1
   2, turns equals one click. 15 clicks to get 6 matches to win
   2.5, while game is played show user how many clicks are remaining
   2.75, if turns equals 15 stop game from being played
   3, if 15 clicks then player lost
   4, if 15 clicks are met message displays that player lost
   */