window.addEventListener('DOMContentLoaded', function() {
  // Part 1: Ensure that the user can play the game.
  var cards = document.querySelectorAll('.card');
  var selectedCards = [];
  var matchedCards = [];
  var timer = document.querySelector('.timer');
  var timerInitialState = timer.innerText;
  var countDown = 0;
  var countDownId;
  var maxCountDown = 3;

  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      // If there is no active countdown, start one.
      if (!countDownId) {
        countDown = maxCountDown;
        timer.innerText = countDown;

        countDownId = setInterval(function() {
          if (!(--countDown)) {
            selectedCards.forEach(function(card) {
              card.classList.remove('is-selected');
            });
            selectedCards = [];
            clearInterval(countDownId);
          }
          timer.innerText = countDown || timerInitialState;
        }, 1000);
      }

      // If the card has already been matched, ignore it.
      if (card.classList.contains('is-matched')) {
        return;
      }

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
      if (selectedCards.length < 2) {
        card.classList.add('is-selected');
        selectedCards.push(card);
      }

      // If we have selected two cards, see if they match.
      if (selectedCards.length === 2) {
        var card1 = selectedCards[0];
        var card2 = selectedCards[1];

        // If the cards match, add them to the collection of matched cards and
        // apply the correct CSS class.
        if (card1.innerText === card2.innerText) {
          matchedCards.push(card1, card2);
          card1.classList.add('is-matched');
          card2.classList.add('is-matched');
        }

        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.
        card1.classList.remove('is-selected');
        card2.classList.remove('is-selected');
        selectedCards = [];

        // Make sure that the current countdown is cleared.
        clearInterval(countDownId);
        countDownId = null;
        timer.innerText = timerInitialState;
      }

      // If we've matched all the cards, display a message.
      if (matchedCards.length === cards.length) {
        document.querySelector('.endgame').classList.add('is-active');
      }
    });
  });

  // Part 2: Allow the user to customize the colour of the cards.
  // This is achieved by including one of the following values in the URL:
  // - #green
  // - #orange
  // - #red
  var deckElement = document.querySelector('.cards');
  var deckColor = window.location.hash.substring(1);

  if (deckElement && deckColor) {
    console.log('__ HERE');
    var className = 'cards--' + deckColor;
    deckElement.classList.add(className);
  }
});
