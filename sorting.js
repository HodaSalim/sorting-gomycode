function sortingCards(cardsDeck) {
  for (var i = 0; i < cardsDeck.length; i++) {
    for (var j = 0; j < cardsDeck.length - i - 1; j++) {
      if (cardsDeck[j] > cardsDeck[j + 1]) {
        var temp = cardsDeck[j];
        cardsDeck[j] = cardsDeck[j + 1];
        cardsDeck[j + 1] = temp;
      }
    }
  }
  console.log(cardsDeck);
}
