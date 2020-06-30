import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const places = [
  {
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
  },
  {
    id: 2,
    city: `Amsterdam`,
    type: `room`,
    pictures: {
      featured: `img/apartment-01.jpg`,
      gallery: [
        `img/apartment-03.jpg`,
        `img/room.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-01.jpg`,
      ]
    },
    title: `Wood and stone place`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    price: 80,
    rate: 4.3,
    isPremium: false,
    isFeatured: true,
    badrooms: 1,
    maxGuests: 2,
    includes: [`Wifi`, `Heating`],
    host: {
      image: `img/avatar-angelina.jpg`,
      name: `Greta`,
      isSuper: false,
    }
  },
  {
    id: 3,
    city: `Amsterdam`,
    type: `house`,
    pictures: {
      featured: `img/apartment-03.jpg`,
      gallery: [
        `img/apartment-03.jpg`,
        `img/room.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-01.jpg`,
      ]
    },
    title: `Canal View Prinsengracht`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    price: 132,
    rate: 3.3,
    isPremium: false,
    isFeatured: false,
    badrooms: 2,
    maxGuests: 1,
    includes: [`Kitchen`, `Cable TV`],
    host: {
      image: `img/avatar-angelina.jpg`,
      name: `Sam`,
      isSuper: true,
    }
  },
  {
    id: 4,
    city: `Amsterdam`,
    type: `apartment`,
    pictures: {
      featured: `img/room.jpg`,
      gallery: [
        `img/apartment-03.jpg`,
        `img/room.jpg`,
        `img/apartment-01.jpg`,
        `img/apartment-02.jpg`,
        `img/apartment-01.jpg`,
      ]
    },
    title: `Nice, cozy, warm big bed apartment`,
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`],
    price: 180,
    rate: 4.6,
    isPremium: true,
    isFeatured: false,
    badrooms: 3,
    maxGuests: 4,
    includes: [`Wifi`, `Heating`, `Kitchen`],
    host: {
      image: `img/avatar-angelina.jpg`,
      name: `Yosi`,
      isSuper: false,
    }
  },
];

it(`Render Main`, () => {
  const tree = renderer.create(
      <Main
        placesCount={50}
        places={places}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
