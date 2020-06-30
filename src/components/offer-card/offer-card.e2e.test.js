import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card.jsx";

configure({adapter: new Adapter()});

const place = {
  id: 1,
  city: `Amsterdam`,
  type: `hotel`,
  pictures: {
    featured: `img/apartment-02.jpg`,
    gallery: [
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
    ]
  },
  title: `Beautiful & luxurious apartment at great location`,
  description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
  price: 120,
  rate: 4.5,
  isPremium: true,
  isFeatured: false,
  badrooms: 3,
  maxGuests: 4,
  includes: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
  host: {
    image: `img/avatar-angelina.jpg`,
    name: `Angelina`,
    isSuper: true,
  }
};

const mockEvent = {
  preventDefault() {}
};

it(`On card hover run function onCardHover with this card object`, () => {
  const onCardHover = jest.fn();
  const offerCard = shallow(
      <OfferCard
        onCardHover={onCardHover}
        place={place}
        onTitleClick={() => { }}
      />);

  const card = offerCard.find(`article`);
  card.simulate(`mouseover`);

  expect(onCardHover).toHaveBeenCalledWith(place);
  expect(onCardHover).toHaveBeenCalledTimes(1);
});

it(`On card title click function onTitleClick returns this place object`, () => {
  const onTitleClick = jest.fn();

  const offerCard = shallow(
      <OfferCard
        onCardHover={()=>{}}
        place={place}
        onTitleClick = {onTitleClick}
      />
  );
  const card = offerCard.find(`.place-card__name a`);
  card.simulate(`click`, mockEvent);

  expect(onTitleClick).toHaveBeenCalledWith(place);
  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
