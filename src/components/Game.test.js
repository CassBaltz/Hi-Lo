import React from "react";
import Game from "./Game";

describe("<Game />", () => {
  it("should render two players and a table component", () => {
    const game = shallow(<Game />);
    expect(toJson(game)).toMatchSnapshot();
  });
});