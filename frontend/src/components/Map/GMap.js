/*global google*/
import React from "react";
import "./GMap.css";

const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const {
  SearchBox
} = require("react-google-maps/lib/components/places/SearchBox");

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        bounds: null,
        markers: [],
        currentLocation: {},
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          console.log(places[0]);
          console.log(places[0].geometry.location.lat());
          console.log(places[0].geometry.location.lng());
          const bounds = new google.maps.LatLngBounds();
          this.setState({ currentLocation: places[0] });

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location
          }));
          const nextCenter = _.get(
            nextMarkers,
            "0.position",
            this.state.center
          );
          this.setState({
            center: nextCenter,
            markers: nextMarkers
          });
          refs.map.fitBounds(bounds);
        }
      });
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const faveHandler = () => {
    props.addFavorite(props.currentLocation);
  };

  const destHandler = () => {
    props.addDest(props.currentLocation);
  };

  return (
    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={15}
      center={props.defaultCenter}
      onBoundsChanged={props.onBoundsChanged}
    >
      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.bounds}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Destination!"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            marginTop: `27px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`
          }}
        />
      </SearchBox>
      {props.markers.map((marker, index) => (
        <Marker key={index} position={marker.position} />
      ))}
      {props.favorites &&
        props.favorites.map(favorite => (
          <Marker
            key={favorite.place_id}
            position={favorite.geometry.location}
          />
        ))}
      {props.favorites && <button className="modalButton" onClick={faveHandler}>+</button>}
      {props.addDest && <button className="modalButton" onClick={destHandler}>Add Destination</button>}
    </GoogleMap>
  );
});

export default GMap;
