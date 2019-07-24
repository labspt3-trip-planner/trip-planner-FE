import React, { Component } from "react";

import MediaQuery from "react-responsive";

import TripViewMobilePortrait from "./layout_MobilePortrait";
// import TripViewMobileLandscape from "./layout_MobileLandscape";
import TripViewDesktop from "./layout_Desktop";

class TripView extends Component {
	render() {
		return (
			<>
				{/* ---------- DESKTOP LAYOUT ---------- */}
				<MediaQuery query="(min-device-width: 1025px)">
					<TripViewDesktop />
				</MediaQuery>
				{/* ---------- MOBILE LAYOUT ---------- */}
				<MediaQuery query="(max-width: 1025px)">
					{/* ---------- MOBILE - PORTRAIT ---------- */}
					<MediaQuery query="(orientation: portrait)">
						<TripViewMobilePortrait />
					</MediaQuery>
					{/* ---------- MOBILE - LANDSCAPE ---------- */}
					<MediaQuery query="(orientation: landscape)">
						{/* <TripViewMobileLandscape /> */}
					</MediaQuery>
				</MediaQuery>
			</>
		);
	}
}

export default TripView;
