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

let matchedCards = document.getElementsByClassName("match");

const CCOUNT = 60;
let t, count;


//  ******************************  S T A R T    G A M E  ******************************

document.body.onload = function onLoad(){
  cdreset();
  startGame();
};

function restart(){
  cdreset();
  startGame();
};


function startGame() {
  cards = shuffle(cards);
  cleanStart(cards);
  countdown();


  //this bracket closes startgame function
}

//  *******************************************  F U N C T I O N S  *******************************************

// CARD RESPOND TO CLICK AND DISPLAY CARD'S SYMBOL
function respondToClick(evt) {
  if (evt.target.nodeName === 'LI') {
    openedCards(evt.target);
    getMatch();

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
function openedCards(t) {

  // find initially opened cards
  const initOpened = getOpened();
  if (initOpened.length < 2) {
    // open clicked card
    t.classList.toggle('open'); // add or remove class open to clicked element
    t.classList.toggle('show'); // add or remove class show to clicked element
  }
  else{
    return;
  }

  const opened = getOpened();
  if (opened.length == 2) {

    var first = opened[0].firstElementChild.className;
    var second = opened[1].firstElementChild.className;
    first === second ? cardsMatch(opened) : cardsNotMatched(opened);
  }
}


// WHAT TO DO IF CARDS MATCH
function cardsNotMatched(notMatched) {
  var arr = [].slice.call(notMatched);
  setTimeout(function () {
    arr.forEach(function (el) {
      el.classList.toggle('open');
      el.classList.toggle('show');
    });
  }, 1100);

}


// WHAT TO DO IF CARDS DO NOT MATCH
function cardsMatch(matchedElements) {
  var arr = [].slice.call(matchedElements);
  arr.forEach(function (el) {
    el.classList.toggle('match');
    el.classList.toggle('open');
  });

}

// CLEANING CLASSES OF THE WHOLE DECK (restart)
function cleanStart(clean) {
  for (var i = 0; i < clean.length; i++) {
    [].forEach.call(clean, function (item) {
      cardDeck.appendChild(item);
    });
    clean[i].classList.remove("show", "open", "match");
  }
}

// Opened Cards Array
function getOpened() {
  return document.getElementsByClassName('open');
}


// timer  ---- timer taken from http://jsfiddle.net/XcvaE/4/
// https://stackoverflow.com/questions/7325146/countdown-timer-with-pause-reset



   function cddisplay() {
       // displays time in span
       document.getElementById('timer').innerHTML = count + ' seconds left';
   };

   function countdown() {
       // starts countdown
       cddisplay();
       if (count == 0) {
           // time is up
       } else {
           count--;
           t = setTimeout("countdown()", 1000);
       }
   };

   function cdpause() {
       // pauses countdown
       clearTimeout(t);
   };

   function cdreset() {
       // resets countdown
       cdpause();
       count = CCOUNT;
       cddisplay();
   };

/*
<body onload="cdreset()">
<span id="timespan"></span>
<input type="button" value="Start" onclick="countdown()">
<input type="button" value="Stop" onclick="cdpause()">
<input type="button" value="Reset" onclick="cdreset()">
*/




// Win FUNCTION

function getMatch(){
  console.log(matchedCards.length);
  if (matchedCards.length === 16){
      modal();
  }
}


// moves
function moves(){
  let moves = matchedCards.length % 2;
  if(moves === 16){
    console.log ( 'you Win !');
  } else if(moves < 16){
    console.log ('you made ' + moves + 'moves');
  }
}



// Modal
/*
document.addEventListener('click', function (e) {
    e = e || window.event;
    */
    //var target = e.target || e.srcElement;

function modal(){
            document.getElementById('simpleModal_1').classList.add('open');
        }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    document.addEventListener('click', function (e){
    if(e.target == 'div.modal-window'){
        function modalClose(){
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        }
      }
    });

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
