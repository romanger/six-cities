import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const titleClickHandler = () => {};

const App = (props) => {
  const {placesCount, places} = props;
  return <Main
    placesCount={placesCount}
    places={places}
    onTitleClick = {titleClickHandler}
  />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
      PropTypes.string
  ),
};

export default App;
