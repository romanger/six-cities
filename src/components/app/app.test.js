import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        placesCount={50}
        places = {places}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
