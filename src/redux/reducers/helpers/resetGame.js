import { PLAYER_ONE, PLAYER_TWO, DEFAULT_STATE } from '../../constants';

export default state => ({
  ...state,
  game: {
    ...DEFAULT_STATE.game,
    [PLAYER_ONE]: {
      ...DEFAULT_STATE.game[PLAYER_ONE],
      name: state.game[PLAYER_ONE].name,
    },
    [PLAYER_TWO]: {
      ...DEFAULT_STATE.game[PLAYER_TWO],
      name: state.game[PLAYER_TWO].name,
    },
  },
  deck: { ...state.deck, resettingDeck: true }
});