import React from 'react';
import PropTypes, {arrayOf} from 'prop-types';
import {PropertyType} from '../../const.js';
import {roundRate} from '../../utils.js';

const OfferCard = (props) => {
  const {place, onTitleClick, onCardHover} = props;

  return <article onMouseOver={() => onCardHover(place)} className="cities__place-card place-card">
    {place.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={place.pictures.featured} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{place.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: roundRate(place.rate) + `%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a onClick={(e) => {
          e.preventDefault();
          onTitleClick(place);
        }}
        href="#">{place.title}</a>
      </h2>
      <p className="place-card__type">{PropertyType[place.type]}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  place: PropTypes.shape({
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
  }),
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default OfferCard;
