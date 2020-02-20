import React from "react";
import { DiscardPile } from "./DiscardPile";

const props = {
  cardsShowing: [
    {
      code: "AD",
      value: "ACE",
      image: "ace-url",
    },
  ],
  classes: {
    root: "root",
    topCard: "topCard",
    blankCard: "blankCard",
    count: "count",
  }
};

describe("<DiscardPile />", () => {
  it("should display correctly when there is only one card", () => {
    const singleCardPile = shallow(<DiscardPile {...props} />);
    expect(toJson(singleCardPile)).toMatchSnapshot();
  });
  it("should display correctly when there are multiple cards", () => {
    const newProps = {
      ...props,
      cardsShowing: [
        ...props.cardsShowing,
        {
          code: "KD",
          value: "KING",
          image: "King-url",
        }
      ]
    };
    const multipleCardPile = shallow(<DiscardPile {...newProps} />);
    expect(toJson(multipleCardPile)).toMatchSnapshot();
  });
});