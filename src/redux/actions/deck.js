import axios from 'axios';

export const DECK_SIZE = 52;
export const NEW_DECK_URL = `https://deckofcardsapi.com/api/deck/new/draw/?count=${DECK_SIZE}`;
export const getShuffleDeckUrl = deckId => `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`;
export const getDrawnCardsFromShuffledDeckUrl = deckId => `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${DECK_SIZE}`;

export const RESET_DECK = 'RESET_DECK';
export const resetDeck = () => ({
  type: RESET_DECK,
});

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
  type: RESET_GAME,
});

export const LOAD_DECK = 'LOAD_DECK';
export const loadDeck = ({ cards, deckId }) => ({
  type: LOAD_DECK,
  payload: {
    cards,
    deckId
  }
});

export const getNewDeck = () => dispatch => {
  dispatch(resetDeck());

  axios.get(NEW_DECK_URL).then(({ data }) => {
    const { cards, deck_id } = data;
    dispatch(loadDeck({ cards, deckId: deck_id }));
  });
};

export const startNewGame = deckId => dispatch => {
  dispatch(resetGame());

  axios.get(getShuffleDeckUrl(deckId)).then(() => {
    axios.get(getDrawnCardsFromShuffledDeckUrl(deckId)).then(({ data }) => {
      const { cards, deck_id } = data;
      dispatch(loadDeck({ cards, deckId: deck_id, }));
    });
  });
};

export const DRAW_CARD = 'DRAW_CARD';
export const drawCard = () => ({
  type: DRAW_CARD,
});

