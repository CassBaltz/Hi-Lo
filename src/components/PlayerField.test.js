import React from "react";

import { PlayerField, styles, } from "./PlayerField";

const props = {
  classes: classReducer(styles),
  dispatch: jest.fn(),
  name: "mike",
  playerKey: "PLAYER_ONE",
};


describe("<PlayerField />", () => {
  it("should render correctly when the field is not being edited", () => {
    const playerField = shallow(<PlayerField {...props} />);

    expect(playerField.find("em.staticName").length).toBe(1);
    expect(playerField.find("input.editNameField").length).toBe(0);

    expect(toJson(playerField)).toMatchSnapshot();
  });

  it("should show the edit field on click and render the edit field correctly", () => {
    const playerField = shallow(<PlayerField {...props} />);

    playerField.find("em.staticName").simulate("click");
    expect(playerField.find("em.staticName").length).toBe(0);
    expect(playerField.find("input.editNameField").length).toBe(1);

    expect(toJson(playerField)).toMatchSnapshot();
  });
});