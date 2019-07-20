import React, { Component } from "react";

import MediaQuery from "react-responsive";

// import TripViewMobilePortrait from "./styles_MobilePortrait";
// import TripViewMobileLandscape from "./styles_MobileLandscape";
import TripViewDesktop from "./layout_Desktop";

// import "../Styles/styles.css";

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
						{/* <TripViewMobilePortrait /> */}
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
