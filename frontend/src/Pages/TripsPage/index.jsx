import React, { Component } from "react";

import MediaQuery from "react-responsive";

import TripsMobilePortrait from "./layout_MobilePortrait";
// import TripsMobileLandscape from "./layout_MobileLandscape";
import TripsDesktop from "./layout_Desktop";

class Trips extends Component {
	render() {
		return (
			<>
				{/* ---------- DESKTOP LAYOUT ---------- */}
				<MediaQuery query="(min-device-width: 1025px)">
					<TripsDesktop />
				</MediaQuery>
				{/* ---------- MOBILE LAYOUT ---------- */}
				<MediaQuery query="(max-width: 1025px)">
					{/* ---------- MOBILE - PORTRAIT ---------- */}
					<MediaQuery query="(orientation: portrait)">
						<TripsMobilePortrait />
					</MediaQuery>
					{/* ---------- MOBILE - LANDSCAPE ---------- */}
					<MediaQuery query="(orientation: landscape)">
						{/* <TripsMobileLandscape /> */}
					</MediaQuery>
				</MediaQuery>
			</>
		);
	}
}

export default Trips;