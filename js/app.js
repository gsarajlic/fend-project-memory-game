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

// timer variables
let seconds = 0;
let minutes = 0;
let t;
let timerId;

// moves variable
let moves = 0;

//  ******************************  S T A R T    G A M E  ******************************

document.body.onload = function onLoad() {
  modal('modalStart');
  startGame();
};


function restart() {
  let modalRestart = document.getElementById('modalWin');
  modalRestart.classList.remove('open');
  clearTimer();
  resetMove();
  startGame();
  scheduleTimer();
};


function startGame() {
  clearTimer();
  cards = shuffle(cards);
  cleanStart(cards);

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
  } else {
    return;
  }

  const opened = getOpened();
  if (opened.length == 2) {
    move();
    var first = opened[0].firstElementChild.className;
    var second = opened[1].firstElementChild.className;
    first === second ? cardsMatch(opened) : cardsNotMatched(opened);
  }
}


// WHAT TO DO IF CARDS MATCH
function cardsNotMatched(notMatched) {
  var arr = [].slice.call(notMatched);
  setTimeout(function() {
    arr.forEach(function(el) {
      el.classList.toggle('open');
      el.classList.toggle('show');
    });
  }, 1100);

}


// WHAT TO DO IF CARDS DO NOT MATCH
function cardsMatch(matchedElements) {
  var arr = [].slice.call(matchedElements);
  arr.forEach(function(el) {
    el.classList.toggle('match');
    el.classList.toggle('open');
  });

}

// CLEANING CLASSES OF THE WHOLE DECK (restart)
function cleanStart(clean) {
  for (var i = 0; i < clean.length; i++) {
    [].forEach.call(clean, function(item) {
      cardDeck.appendChild(item);
    });
    clean[i].classList.remove("show", "open", "match");
  }
  starsRestart();
}

// Opened Cards Array
function getOpened() {
  return document.getElementsByClassName('open');
}

function showTime(min, sec) {
  document.getElementById('timer').innerHTML = 'Time : ' + ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
}


function scheduleTimer() {
  if (timerId === null) {
    minutes = 0;
    seconds = 0;
    timerId = setInterval(function() {
      seconds++;
      if (seconds > 59) {
        seconds = 0;
        minutes++;
      }
      showTime(minutes, seconds);
    }, 1000);
  }
}

function clearTimer() {
  clearInterval(timerId);
  showTime(0, 0);
  timerId = null;
}

function stopTimer() {
  clearInterval(timerId);
}

// Win FUNCTION

function getMatch() {
  if (matchedCards.length === 16) {
    modal('modalWin');
    /*move(0);*/
  }
}


// moves function - counts moves
function move() {
  moves++;
  document.getElementById('moves').innerHTML = 'Moves : ' + moves;
  //  if (moves === 10){
  //  console.log(moves);
  stars();
  //  }
}


//moves reset - when game is reseted, moves will start count from zero
function resetMove() {
  moves = 0;
  document.getElementById('moves').innerHTML = 'Moves : ' + moves;
}


// Modal - function - opens modals for start game and finish game
function modal(evt) {
  document.getElementById(evt).classList.add('open');
  switch (evt) {
    case ('modalStart'):
      modalStart();
      modalClose(evt);
    case ('modalWin'):
      modalWin();
      modalClose(evt);
  }

}

// Close modal window
function modalClose(e) {
  document.addEventListener('click', function(e) {
    const modal = e.target.parentElement;
    modal.classList.remove('open');
    scheduleTimer();
  });
}

function modalWin() {
  stopTimer();
  let time = document.getElementById('timer').innerHTML;
  document.getElementById('modalWintext').innerHTML = 'You finished your game ! <br>' + time + '<br>Moves : ' + moves + '<br>With rating :';
}

function modalStart() {
  let startText = document.getElementById('modalStartText');
  startText.innerHTML = 'This is memory card game in which you have to find matching cards.<br> To close this window just click it. <br> GOOD LUCK !';
}


// Rating function - shows stars and disable them based on moves
function stars() {
  let starOne = document.getElementsByClassName('starOne');
  let starTwo = document.getElementsByClassName('starTwo');
  let starThree = document.getElementsByClassName('starThree');
  if (moves === 18) {
    toggleStar(starOne);
  } else if (moves === 22) {
    toggleStar(starTwo);
  } else if (moves === 27) {
    toggleStar(starThree);
  }
}

function toggleStar(starArr){
  for (var i=0; i < starArr.length; i++) {
    starArr[i].classList.remove('fas');
    starArr[i].classList.add('far');
  }
}




function starsRestart() {
  let stars = document.getElementsByName('starRating');
  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.remove('far')
    stars[i].classList.add('fas')
  }
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
