import React from "react";
import App from "./App";
test("renders learn react link", () => {
  const app = shallow(<App />);
  expect(toJson(app)).toMatchSnapshot();
});
