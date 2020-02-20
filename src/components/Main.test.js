import React from "react";

import { Main } from "./Main";

const props = {
  classes: {
    header: "header",
    instructions: "instructions",
    newGame: "newGame",
  },
  dispatch: jest.fn(),
  deckId: "abc",
};

jest.mock("../redux/actions/deck", () => {
  return {
    __esModule: true,
    startNewGame: jest.fn(() => "abc"),
  };
});


describe("<Main />", () => {
  it("should display the main page with action buttons, a scoreboard, and the game", () => {
    const main = shallow(<Main {...props} />);
    expect(toJson(main)).toMatchSnapshot();
  });

  it("should call its dispatch function with the correct payload when the 'NEW GAME' button is clicked.", () => {
    const main = shallow(<Main {...props} />);
    const newGameButton = main.find("button.newGame");
    newGameButton.simulate("click");
    expect(props.dispatch).toHaveBeenCalledWith(props.deckId);
  });
});