export default (state, payload) => ({
  ...state,
  game: {
    ...state.game,
    [payload.key]: {
      ...state.game[payload.key],
      name: payload.value,
    },
  },
});