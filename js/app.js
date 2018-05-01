/*
 * Create a list that holds all of your cards
 */
//deck of cards
let cardDeck = document.querySelector('#deck');
// adding event listener on click for deck of cards
cardDeck.addEventListener('click', respondToClick);
// defining card variable which contains all cards with class name .card
let card = cardDeck.children;
let cards = [...card]



//  ******************************  S T A R T    G A M E  ******************************

document.body.addEventListener('click', startGame(), true);

function startGame() {

  cards = shuffle(cards);
  cleanStart(cards);


  //this bracket closes startgame function
}








//  *******************************************  F U N C T I O N S  *******************************************

// RESPONDING TO EVERY CLICK AND RUN FUNTIONS



// CARD RESPOND TO CLICK AND DISPLAY CARD'S SYMBOL
function respondToClick(evt) {
  if (evt.target.nodeName === 'LI') {
    evt.target.classList.toggle('open'); // add or remove class open to clicked element
    evt.target.classList.toggle('show'); // add or remove class show to clicked element
    setTimeout(function() {
      openedCards();
    }, 1000);
  }
}


//

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};


// REMOVING CLASSES FROM CARDS

function removeClasses(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('open', 'show', 'match');
  }
}

// THIS FUNCTION CHECKS IF TWO CARDS MATCH OR NOT

function openedCards() {
  let opened = document.getElementsByClassName('open');
  if (opened.length == 2) {
    var first = opened[0].firstElementChild.className;
    var second = opened[1].firstElementChild.className;
    first === second ? cardsMatch(opened) : cardsNotMatched(opened);
  }
}

// WHAT TO DO IF CARDS MATCH

function cardsNotMatched(notMatched) {
  var arr = [].slice.call(notMatched);
  arr.forEach(function(el) {
    el.classList.toggle('open');
    el.classList.toggle('show');
  })
}


// WHAT TO DI IF CARDS DO NOT MATCH

function cardsMatch(matchedElements) {
  var arr = [].slice.call(matchedElements);
  arr.forEach(function(el) {
    el.classList.toggle('match');
    el.classList.toggle('open');
  })

}

// CLEANING CLASSES OF THE WHOLE DECK (restart)

function cleanStart(clean) {
  for (var i = 0; i < clean.length; i++) {
    [].forEach.call(clean, function(item) {
      cardDeck.appendChild(item);
    });
    clean[i].classList.remove("show", "open", "match");
  }
}

// NO CLICK ON CARDS DURING MATCHING

function disabledClick() {

  }

//  *******************************************  F U N C T I O N S    E N D  *******************************************


/*
 **  - set up the event listener for a card. If a card is clicked:

 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
