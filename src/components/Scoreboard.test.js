import React from "react";

import { Scoreboard, styles, } from "./Scoreboard";

const props = {
  classes: classReducer(styles),
  playerOne: {
    name: "mike",
    score: 0,
    isPlaying: true,
  },
  playerTwo: {
    name: "jim",
    score: 0,
  },
};


describe("<Scoreboard />", () => {
  it("should render correctly when given the default props", () => {
    const scoreboard = shallow(<Scoreboard {...props} />);

    expect(toJson(scoreboard)).toMatchSnapshot();
  });

  it("should render correctly when player one is winning", () => {
    const playerOneWinningProps = {
      ...props,
      playerTwo: {
        ...props.playerTwo,
        score: 1,
      }
    };
    const scoreboard = shallow(<Scoreboard {...playerOneWinningProps} />);

    expect(toJson(scoreboard)).toMatchSnapshot();
  });

  it("should render correctly when player two is winning and it is player two's turn", () => {
    const playerTwoWinningProps = {
      ...props,
      playerOne: {
        ...props.playerOne,
        score: 1,
        isPlaying: false,
      }
    };
    const scoreboard = shallow(<Scoreboard {...playerTwoWinningProps} />);

    expect(toJson(scoreboard)).toMatchSnapshot();
  });
});