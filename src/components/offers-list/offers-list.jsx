import React, {PureComponent} from 'react';
import PropTypes, {arrayOf} from 'prop-types';
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
      {places.map((place) => (
        <OfferCard place={place} key={place.id} onTitleClick={onTitleClick} onCardHover={this._hoverHandler} />
      ))}
    </div >;
  }
}

export default OffersList;

OffersList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    type: PropTypes.string,
    pictures: PropTypes.shape({
      featured: PropTypes.string,
      gallery: arrayOf(PropTypes.string),
    }),
    title: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    rate: PropTypes.number,
    isPremium: PropTypes.bool,
    isFeatured: PropTypes.bool,
    badrooms: PropTypes.number,
    maxGuests: PropTypes.number,
    includes: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      isSuper: PropTypes.bool,
    }),
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired
};
