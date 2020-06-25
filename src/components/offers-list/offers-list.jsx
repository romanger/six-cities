import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card.jsx';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {}
    };

    this._hoverHandler = this._hoverHandler.bind(this);
  }

  _hoverHandler(card) {
    this.setState({
      activeCard: card,
    });
  }

  render() {
    const {places, onTitleClick} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {places.map((place, i) => (
        <OfferCard place={place} key={place.city + i} onTitleClick={onTitleClick} onCardHover={this._hoverHandler} />
      ))}
    </div >;
  }

}

export default OffersList;

OffersList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string,
    type: PropTypes.string,
    picture: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    rate: PropTypes.number,
    isPremium: PropTypes.bool,
    isFeatured: PropTypes.bool,
  })),
  onTitleClick: PropTypes.func.isRequired
};
