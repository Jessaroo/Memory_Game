/*state variables*/
let turn;
let winner;

/* Elements. Need cards front and backs to show. Need messages to show.Need a buton*/
const cardsBacksEls = document.querySelectorAll('#cardsBacks > div');
const cardsFrontsEls = document.querySelectorAll('#cardsFronts > div')
const messageEl = document.querySelectorAll ('h1', 'h2');
const playAgainBtn = document.querySelectorAll('button');

/* event liteners. Need a play again button*/
playAgainBtn.addEventListener('click', initialize);
document.getElementById('cardsBacks', 'cardsFronts').addEventListener('click');

/* list all of the functions */
/*Make sure game is set to load cards for player to click on */
initialize ();   

/*How to know if the player won. check for card matches */

/* How to know if the player lost. check for cards not matching */

/* .*/