
inializeGameboard();

const allCards = document.querySelectorAll('.card');
const openCards = [];

allCards.forEach(function(card) {
 card.addEventListener('click', function () {
    if(isFippable(card)){
      flipCard(card);
      addToOpenCardList(card);
      if (openCards.length == 2){

      }
    }
 });
});


/*
*
* Functions
*
*/

// Create cards, start timer, begin move count, keep track of ratings
 function inializeGameboard(){
   createCardsHTML();
 }


// Initiates randomly shuffles cards on the gameboard
function createCardsHTML(){
  const cards = ['fa-anchor', 'fa-anchor',
                 'fa-bicycle', 'fa-bicycle',
                 'fa-bolt', 'fa-bolt',
                 'fa-bomb', 'fa-bomb',
                 'fa-cube', 'fa-cube',
                 'fa-diamond', 'fa-diamond',
                 'fa-leaf', 'fa-leaf',
                 'fa-paper-plane-o', 'fa-paper-plane-o'
               ];
  const cardsHTML = [];
  const deck = document.querySelector('.deck');

  cards.forEach(function(card){
    cardsHTML.push('<li class="card"><i class="fa ' + card + '"></i></li>');
  });

  shuffle(cardsHTML);

  deck.innerHTML = cardsHTML.join("");
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// Visually "open" (flip over) a card
function flipCard(card){
  card.classList.add('open', 'show');
}

// Keep track of which cards are "open" (flipped)
function addToOpenCardList(card){
  openCards.push(card);
}

// Determine if a card can be "opened" (flipped)
function isFippable(card){
  if(!card.classList.contains('open') && !card.classList.contains('show') &&
  !card.classList.contains('match') && openCards.length < 2){
       return true;
     }else{
       return false;
     }
}

function compareCards(cardA, cardB){}

function win(){}
