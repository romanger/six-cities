import React, {PureComponent, createRef} from 'react';
import PropTypes, {arrayOf} from "prop-types";
import leaflet from 'leaflet';

const PIN_ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    if (!this._mapRef.current) {
      return;
    }

    const {places, city} = this.props;

    const cityMap = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    cityMap.setView(city, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(cityMap);

    if (places) {
      places.forEach((place) => {
        leaflet
          .marker(place.coordinates, {PIN_ICON})
          .addTo(cityMap);
      });
    }
  }

  render() {
    return (
      <section
        ref={this._mapRef}
        className="cities__map map">
      </section>
    );
  }

}

Map.propTypes = {
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
    coordinates: PropTypes.arrayOf(PropTypes.number),
  })),
  city: PropTypes.arrayOf(PropTypes.number),
};

export default Map;
