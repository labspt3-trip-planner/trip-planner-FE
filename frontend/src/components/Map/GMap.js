import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import "./GMap.css";

const Map = props => (
  <div>
    <GoogleMap defaultZoom={10} center={{ lng: -81.656761, lat: 30.32597 }}>
      {/* {props.markers.map((marker, index) => (
        <Marker key={index} position={marker.position} />
      ))}{" "} */}
    </GoogleMap>
  </div>
);

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GMap() {
  return (
    <div className="map-wrapper">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
