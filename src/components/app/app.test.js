import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const places = [
  {
    city: `Amsterdam`,
    type: `Apartment`,
    picture: `img/apartment-01.jpg`,
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    rate: 4,
    isPremium: false,
    isFeatured: false,
  },
  {
    city: `Amsterdam`,
    type: `Privet room`,
    picture: `img/room.jpg`,
    title: `Wood and stone place`,
    price: 80,
    rate: 4,
    isPremium: false,
    isFeatured: true,
  },
  {
    city: `Amsterdam`,
    type: `Apartment`,
    picture: `img/apartment-02.jpg`,
    title: `Canal View Prinsengracht`,
    price: 132,
    rate: 4,
    isPremium: false,
    isFeatured: false,
  },
  {
    city: `Amsterdam`,
    type: `Apartment`,
    picture: `img/apartment-03.jpg`,
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    rate: 5,
    isPremium: true,
    isFeatured: false,
  },
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
