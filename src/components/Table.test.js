import React from "react";
import { Table, styles } from "./Table";

const props = {
  classes: classReducer(styles),
  dispatch: jest.fn(),
  cardsShowing: 1,
  correctGuesses: 0,
  cardsRemainingInDeck: 10,
  currentGuess: {
    direction: null,
    isCorrect: false,
    guessedCard: null,
  },
  resettingDeck: false,
};

describe("<Table />", () => {
  it("should render correctly with the default props", () => {
    const table = shallow(<Table {...props} />);
    expect(toJson(table)).toMatchSnapshot();
  });

  it("should prevent guesses when there is a guessed card", () => {
    const guessedCardProps = {
      ...props,
      currentGuess: {
        ...props.currentGuess,
        guessedCard: {
          code: "AD",
          image: "ace image",
          value: "ACE"
        }
      }
    };
    const table = shallow(<Table {...guessedCardProps} />);
    const higherButton = table.find("button.higherButton");
    higherButton.simulate("click");

    expect(props.dispatch).not.toHaveBeenCalled();
  });

  it("should enable the 'PASS TURN' button when there are three correct guesses", () => {
    const table = shallow(<Table {...props} />);
    expect(table.find("button.passTurnButton").prop("disabled")).toBe(true);

    table.setProps({ correctGuesses: 3 });
    expect(table.find("button.passTurnButton").prop("disabled")).toBe(false);
  });
});