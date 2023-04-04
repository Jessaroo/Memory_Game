/*state variables*/
let clicks;
let winner;
let cards;
let time;

/* const Elements. Need cards front and backs to show. Need messages to show.Need a buton*/
const cardsBacksEls = document.querySelectorAll('.cardsBacks > div');
const cardsFrontsEls = document.querySelectorAll('.cardsFronts > div')
const messageEl = document.querySelectorAll ('h1', 'h2');
const playAgainBtn = document.querySelectorAll('button');
const board = document.querySelector('#board');

/* event listeners. Need a play again button*/
board.addEventListener('click', flipCard);
    function flipCard(evt) {
        console.log('click');
        const cardContainer = evt.target.closest('.flip-card-inner');
        cardContainer.style.transform = 'rotateX(180deg)';
    }

/* list all of the functions */
/*Make sure game is set to load cards for player to click on */
initialize ();   

/*How to know if the player won. check for card matches */

/* How to know if the player lost. check for cards not matching */

/* .*/




document.getElementById('flip').addEventListener('click', function (){
    cards.toggleClassName('flipped');
}, false);

