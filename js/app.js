/*
 * Create a list that holds all of your cards
 */
 let cardDeck = document.querySelector('#deck');
  //document.getElementsByClassName('card');
 let card = cardDeck.getElementsByTagName('li');
 //push all cards to an Array
 let cards = [...card];
 //console.log(cards);
 //elements to be shuffled
 //let shuffleClass=[];
let cardClass = [];
 //deck of cards

 // adding event listener on click for deck of cards
 //cardDeck.addEventListener('click', respondToClick());
 // defining classes of cards





//  ******************************  S T A R T    G A M E  ******************************
document.body.onLoad = startGame();
cardClasses(card);
console.log(cardClass.length);

for (let i = 0; i < cardClass.length; i++){
      if ((cardClass[i].length) > 1){
            console.log(cardClass[i]);
      }
}










//  *******************************************  F U N C T I O N S  *******************************************

// CARD classes
function cardClasses(element){
  for (var i = 0; i < element.length; i++) {
      cardClass.push(element[i].classList);
  }
}


// CARD RESPOND TO CLICK AND DISPLAY CARD'S SYMBOL
function respondToClick(evt) {
    if (evt.target.nodeName == 'LI') {
        evt.target.classList.toggle('open'); // add or remove class open to clicked element
        //evt.target.classList.toggle('show'); // add or remove class show to clicked element
        evt.target.classList.toggle('match'); // add or remove class show to clicked element
        //evt.target.classList.toggle('card'); // add or remove class show to clicked element
        console.log(evt.target);
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
    var currentIndex = array.length, temporaryValue, randomIndex;

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
function removeClasses(elements){
  for (var i = 0; i < elements.length; i++) {
   elements.classList.remove('match');
}
console.log(elements[i]);
}



// START GAME

function startGame(){
   let shuffledCards = shuffle(cards);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
          	cardDeck.appendChild(item);
      });
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
