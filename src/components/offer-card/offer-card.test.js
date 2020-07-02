import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

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
  },
  coordinates: [52.3909553943508, 4.85309666406198],
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
