import { CARD_VALUES, LOWER, } from "../../constants";

export const isCorrectGuess = (deck, direction) => {
  const cardShowing = deck.cardsShowing[deck.cardsShowing.length - 1];
  const topCardInDeck = deck.cards[deck.cards.length - 1];

  const cardShowingValue = CARD_VALUES[cardShowing.value];
  const topCardInDeckValue = CARD_VALUES[topCardInDeck.value];

  if (direction === LOWER) {
    return topCardInDeckValue < cardShowingValue;
  }

  return topCardInDeckValue > cardShowingValue;
};

export default (state, direction) => {
  const { game, deck, } = state;
  const isCorrect = isCorrectGuess(deck, direction);
  const guessedCard = deck.cards[deck.cards.length - 1];

  return {
    ...state,
    game: {
      ...game,
      currentGuess: {
        direction,
        isCorrect,
        guessedCard,
      },
    },
  };
};
