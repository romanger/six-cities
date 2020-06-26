import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const place = {
  city: `Amsterdam`,
  type: `Apartment`,
  picture: `img/apartment-03.jpg`,
  title: `Nice, cozy, warm big bed apartment`,
  price: 180,
  rate: 5,
  isPremium: true,
  isFeatured: false,
};

it(`Render offer card`, () => {
  const tree = renderer.create(
      (<OfferCard
        place={place}
        onTitleClick={() => { }}
        onCardHover={() => { }}
      />), {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
