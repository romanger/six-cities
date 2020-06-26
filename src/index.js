import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';


const init = () => {
  const settings = {
    placesCount: 50,
  };

  ReactDOM.render(
      <App
        placesCount={settings.placesCount}
        places={offers} />,
      document.querySelector(`#root`)
  );
};

init();
