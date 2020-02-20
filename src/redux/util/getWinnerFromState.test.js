import getWinnerFromState, { TIED } from "./getWinnerFromState";
import { PLAYER_ONE, PLAYER_TWO, } from "../constants";
import { DECK_SIZE } from "../actions/deck";

const mockState = {
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


describe("getWinnerFromState", () => {
  it("should return 'TIED' if there are no cards left and scores are tied", () => {
    expect(getWinnerFromState(mockState)).toBe(TIED);
  });

  it("should return the name of 'PLAYER_ONE' if there are no cards left and player one has a lower score", () => {
    const playerOneWins = {
      ...mockState,
      game: {
        ...mockState.game,
        [PLAYER_TWO]: {
          ...mockState.game[PLAYER_TWO],
          score: 10,
        },
      },
    };
    expect(getWinnerFromState(playerOneWins)).toBe(playerOneWins.game[PLAYER_ONE].name);
  });

  it("should return the name of 'PLAYER_TWO' if there are no cards left and player two has a lower score", () => {
    const playerTwoWins = {
      ...mockState,
      game: {
        ...mockState.game,
        [PLAYER_ONE]: {
          ...mockState.game[PLAYER_ONE],
          score: 10,
        },
      },
    };
    expect(getWinnerFromState(playerTwoWins)).toBe(playerTwoWins.game[PLAYER_TWO].name);
  });

  it("should determine a winner when one player's score is greater than half the deck size", () => {
    const playerTwoWins = {
      ...mockState,
      deck: {
        ...mockState.deck,
        cards: [{code: "one card remaining"}],
      },
      game: {
        ...mockState.game,
        [PLAYER_ONE]: {
          ...mockState.game[PLAYER_ONE],
          score: Math.ceil(DECK_SIZE / 2) + 1,
        },
      },
    };

    expect(getWinnerFromState(playerTwoWins)).toBe(playerTwoWins.game[PLAYER_TWO].name);
  });
});