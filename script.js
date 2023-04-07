/*state variables*/
let won;
let lost;
let time;
let matches;
let card1;
let card2;
let turns;

/* const Elements. */
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

/* list all of the functions */
initialize ();

function initialize(){

turns = 0;
matches = 0;
chosen = [];
flipsCountDown = 0;
flips = 0;
highscore = {
    time: null, 
    flips: null,
    };
}

function flipCard(evt) {
    console.log('click');
    const cardContainer = evt.target.closest('.flip-card-inner');
    cardContainer.style.transform = 'rotateX(180deg)'; 
    flipped(cardContainer)
}

/* Flip cards over*/
function flipped(cardContainer) {
    const card = cardContainer
    console.log(card);
    turns++;
    if (turns >= 15) {
        header.innerText="Better Luck Next Time!"
        h2.innerText = ''
        return; 
    } else {
        h2. innerText="Remaining Turns: " + (15-turns)
    }
    if (chosen.length === 0) {
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
            if (matches === 6) {
                header.innerText="You're a Rockstar!"
            }
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