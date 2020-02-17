export default state => ({
  ...state,
  deck: { ...state.deck, resettingDeck: true }
});