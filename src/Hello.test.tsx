import * as React from "react";
import Hello from "./Hello";
import { shallow } from "enzyme";

it("renders the heading", () => {
  const result = shallow(<Hello />).contains(<h1>Hello!</h1>);
  expect(result).toBeTruthy();
});
