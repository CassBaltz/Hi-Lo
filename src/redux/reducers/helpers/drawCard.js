export default state => {
  const { deck } = state;
  const newCards = [...deck.cards];
  const drawnCard = newCards.pop();
  const newCardsShowing = [...deck.cardsShowing];
  newCardsShowing.push(drawnCard);

  return {
    ...state,
    deck: {
      ...deck,
      cards: newCards,
      cardsShowing: newCardsShowing,
    },
  };
};