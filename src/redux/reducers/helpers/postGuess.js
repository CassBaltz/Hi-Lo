import { SWITCH_PLAYER, DEFAULT_STATE, } from "../../constants";
import drawCard from "./drawCard";

const currentGuessDefault = DEFAULT_STATE.game.currentGuess;

export const loseTurnAfterGuess = ({ game, deck, }) => {
  const player = game.turn.player;
  const numberOfCardsShowing = deck.cardsShowing.length;
  const newCards = [...deck.cards];
  const nextCard = newCards.pop();

  return {
    game: {
      ...game,
      [player]: {
        ...game[player],
        score: game[player].score + numberOfCardsShowing,
      },
      turn: {
        ...game.turn,
        player: SWITCH_PLAYER[player],
        correctGuesses: 0,
      },
      currentGuess: currentGuessDefault,
    },
    deck: {
      ...deck,
      cardsShowing: [nextCard],
      cards: newCards,
    },
  };
};

export default (state) => {
  const { game, deck, } = state;

  const guessWasCorrect = game.currentGuess.isCorrect;

  if (guessWasCorrect) {
    const updatedState = drawCard(state);
    return {
      ...updatedState,
      game: {
        ...updatedState.game,
        turn: {
          ...updatedState.game.turn,
          correctGuesses: updatedState.game.turn.correctGuesses + 1,
        },
        currentGuess: currentGuessDefault,
      },
    };
  }

  return loseTurnAfterGuess({ game, deck, });
};