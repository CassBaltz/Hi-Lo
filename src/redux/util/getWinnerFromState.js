import { PLAYER_ONE, PLAYER_TWO, } from "../constants";
import { DECK_SIZE } from "../actions/deck";
export const TIED = "TIED";

const getWinnerFromState = state => {
  const { deck, game, } = state;
  const cardsRemaining = deck.cards.length;
  const playerOne = game[PLAYER_ONE];
  const playerOneScore = playerOne.score;
  const playerTwo = game[PLAYER_TWO];
  const playerTwoScore = playerTwo.score;
  const halfTheDeck = DECK_SIZE / 2;


  if (playerOneScore > halfTheDeck) {
    return playerTwo.name;
  }

  if (playerTwoScore > halfTheDeck) {
    return playerOne.name;
  }

  if (!cardsRemaining) {

    if (playerOneScore === playerTwoScore) {
      return TIED;
    }

    return playerOneScore > playerTwoScore ?
      playerTwo.name :
      playerOne.name;
  }

  return null;
};

export default getWinnerFromState;