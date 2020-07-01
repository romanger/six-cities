import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const city = [52.38333, 4.9];

const places = [
  {coordinates: [52.3909553943508, 4.85309666406198]},
  {coordinates: [52.3909553943508, 4.85309666406198]},
  {coordinates: [52.3909553943508, 4.85309666406198]},
  {coordinates: [52.3909553943508, 4.85309666406198]},
];

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn(),
    remove: jest.fn()
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
}));

it(`Render Map`, () => {
  const tree = renderer
    .create(<Map city={city} places={places} />
        , {
          createNodeMock: () => document.createElement(`section`)
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
