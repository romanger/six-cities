import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";

configure({adapter: new Adapter()});

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

it(`On card hover run function onCardHover with this card object`, () => {
  const onCardHover = jest.fn();
  const offerCard = shallow(
      <OfferCard
        onCardHover={onCardHover}
        place={place}
        onTitleClick={() => {}}
      />);

  const card = offerCard.find(`article`);
  card.simulate(`mouseover`);

  expect(onCardHover).toHaveBeenCalledWith(place);
  expect(onCardHover).toHaveBeenCalledTimes(1);
});
