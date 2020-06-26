import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

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

it(`Render OffersList`, () => {
  const tree = renderer.create(
      <OffersList
        places={places}
        onTitleClick={() => { }}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
