/*
 * Create a list that holds all of your cards
 */
 //deck of cards
let cardDeck = document.querySelector('#deck');
// adding event listener on click for deck of cards
cardDeck.addEventListener('click', respondToClick);
// defining cardList variable
const cardList = cardDeck.getElementsByTagName('li');
//defining array of cards
let cards = [];
//push all cards to an Array
for (var i = 0; i < cardList.length; i++) {
    var arrValue = cardList[i].innerHTML;
    cards.push(arrValue);
}





//  ******************************  S T A R T    G A M E  ******************************

document.body.onload = startGame();

function startGame(){
    shuffle (cards);




}








//  *******************************************  F U N C T I O N S  *******************************************

// CARD RESPOND TO CLICK
function respondToClick(evt) {
    if (evt.target.nodeName === 'LI') {
        console.log('LI element was clicked');
    }
}

// DISPLAY CARD'S SYMBOL ON CLICK

function toggleClass () {


}






/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle cards on document load

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
