export default (state, { cards, deckId }) => {
  const topCard = cards.pop();
  return {
    ...state,
    deck: {
      ...state.deck,
      cards,
      deckId,
      cardsShowing: [topCard],
      resettingDeck: false
    }
  };
};