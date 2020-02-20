import React from "react";
import Instructions from "./Instructions";

describe("<Instructions />", () => {
  it("should display a modal with instructions", () => {
    const instructions = shallow(<Instructions />);
    expect(toJson(instructions)).toMatchSnapshot();
  });
});