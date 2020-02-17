export const PLAYER_ONE = 'PLAYER_ONE';
export const PLAYER_TWO = 'PLAYER_TWO';

export const SWITCH_PLAYER = {
  [PLAYER_ONE]: PLAYER_TWO,
  [PLAYER_TWO]: PLAYER_ONE,
};

export const DEFAULT_STATE = {
  deck: {
    cards: [],
    cardsShowing: [],
    deckId: null,
    resettingDeck: false,
  },
  game: {
    [PLAYER_ONE]: {
      name: "Player 1",
      score: 0,
    },
    [PLAYER_TWO]: {
      name: "Player 2",
      score: 0,
    },
    turn: {
      player: PLAYER_ONE,
      correctGuesses: 0,
    },
    currentGuess: {
      direction: null,
      isCorrect: false,
      guessedCard: null,
    },
    winner: null,
  },
};

export const CARD_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
};

export const LOWER = "LOWER";
export const HIGHER = "HIGHER";
export const CORRECT_GUESSES_TIL_PASS = 3;