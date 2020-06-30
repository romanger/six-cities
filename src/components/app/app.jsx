import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPlace: null
    };
    this._titleClickHandler = this._titleClickHandler.bind(this);
  }

  _titleClickHandler(place) {
    this.setState({
      currentPlace: place
    });
  }

  _renderScreen() {
    const {placesCount, places} = this.props;
    const {currentPlace} = this.state;

    if (!currentPlace) {
      return (<Main
        placesCount={placesCount}
        places={places}
        onTitleClick={this._titleClickHandler}
      />);
    } else {
      return (
        <OfferDetails place={currentPlace} />
      );

    }

  }

  render() {

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderScreen()}
        </Route>
        <Route exact path="/dev-offer-details">
          <OfferDetails place={this.props.places[1]} />
        </Route>
      </Switch>
    </BrowserRouter>;
  }

}


App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  places: PropTypes.array.isRequired,
};

export default App;
