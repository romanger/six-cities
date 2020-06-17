import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

it(`Render Main`, () => {
  const tree = renderer.create(
      <Main
        placesCount={50}
        places = {Array}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
