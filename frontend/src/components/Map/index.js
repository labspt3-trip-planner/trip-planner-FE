import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
import MapGL from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN =
	"pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";

class Map extends Component {
	state = {
		viewport: {
			width: 400,
			height: 200,
			latitude: 37.7577,
			longitude: -122.4376,
			zoom: 10
		},
		searchResultLayer: null
	};

	mapRef = React.createRef();

	resize = () => {
		this.handleViewportChange({
			width: window.innerWidth,
			height: window.innerHeight
		});
	};

	handleViewportChange = viewport => {
		this.setState({
			viewport: { ...this.state.viewport, ...viewport }
		});
	};

	// if you are happy with Geocoder default settings, you can just use handleViewportChange directly
	handleGeocoderViewportChange = viewport => {
		const geocoderDefaultOverrides = { transitionDuration: 1000 };

		return this.handleViewportChange({
			...viewport,
			...geocoderDefaultOverrides
		});
	};

	handleOnResult = event => {
		this.setState({
			searchResultLayer: new GeoJsonLayer({
				id: "search-result",
				data: event.result.geometry,
				getFillColor: [255, 0, 0, 128],
				getRadius: 1000,
				pointRadiusMinPixels: 10,
				pointRadiusMaxPixels: 10
			})
		});
	};

	render() {
		const { viewport, searchResultLayer } = this.state;

		return (
			<MapGL
				className="map"
				ref={this.mapRef}
				{...viewport}
				mapStyle={"mapbox://styles/mapbox/light-v10"}
				onViewportChange={this.handleViewportChange}
				mapboxApiAccessToken={MAPBOX_TOKEN}
			>
				<Geocoder
					mapRef={this.mapRef}
					onResult={this.handleOnResult}
					onViewportChange={this.handleGeocoderViewportChange}
					mapboxApiAccessToken={MAPBOX_TOKEN}
					position="top-left"
				/>
				<DeckGL {...viewport} layers={[searchResultLayer]} />
			</MapGL>
		);
	}
}

export default Map;
