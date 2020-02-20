import React from "react";

import { Player, styles, } from "./Player";

const props = {
  classes: classReducer(styles),
  isPlaying: false,
  rotateAvatar: false,
};


describe("<Player />", () => {
  it("should render correctly when the player is playing", () => {
    const player = shallow(<Player {...props} />);
    expect(toJson(player)).toMatchSnapshot();
  });

  it("should render correctly when the player is NOT playing", () => {
    const newProps = { ...props, isPlaying: true };
    const player = shallow(<Player {...newProps} />);
    expect(toJson(player)).toMatchSnapshot();
  });

  it("should render correctly when the avatar is rotated", () => {
    const newProps = { ...props, rotateAvatar: true };
    const player = shallow(<Player {...newProps} />);
    expect(toJson(player)).toMatchSnapshot();
  });
});