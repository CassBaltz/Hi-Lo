import {
  loadDeck,
  drawCard,
  passTurn,
  guess,
  resetGame,
  resetDeck,
  postGuess,
  updateName,
} from './helpers';
import { DEFAULT_STATE } from '../constants';
import { RESET_GAME, LOAD_DECK, DRAW_CARD, RESET_DECK, } from "../actions/deck";
import { PASS_TURN, GUESS, POST_GUESS, UPDATE_NAME, } from "../actions/game";

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RESET_DECK:
      return resetDeck(state);
    case RESET_GAME:
      return resetGame(state);
    case LOAD_DECK:
      return loadDeck(state, action.payload);
    case DRAW_CARD:
      return drawCard(state, action.payload);
    case PASS_TURN:
      return passTurn(state);
    case GUESS:
      return guess(state, action.payload);
    case POST_GUESS:
      return postGuess(state);
    case UPDATE_NAME:
      return updateName(state, action.payload);
    default:
      return state;
  }
};