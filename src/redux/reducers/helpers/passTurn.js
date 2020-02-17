import { SWITCH_PLAYER } from '../../constants';

export default state => {
  return {
    ...state,
    game: {
      ...state.game,
      turn: {
        ...state.game.turn,
        player: SWITCH_PLAYER[state.game.turn.player],
        correctGuesses: 0,
      },
    }
  };
};