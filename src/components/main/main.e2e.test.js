import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const places = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title link be pressed`, () => {
  const onTitleLinkClick = jest.fn();

  const mainScreen = shallow(
      <Main
        placesCount={50}
        places={places}
        onTitleClick={onTitleLinkClick}
      />
  );

  const titleLinks = mainScreen.find(`.place-card__name a`);

  titleLinks.forEach((it) => {
    it.simulate(`click`, {
      preventDefault: () => {},
      onClick: onTitleLinkClick
    });
  });

  expect(onTitleLinkClick.mock.calls.length).toBe(places.length);

});
