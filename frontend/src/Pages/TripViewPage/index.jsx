import React from "react";

import MediaQuery from "react-responsive";

import TripViewMobilePortrait from "./layout_MobilePortrait";
// import TripViewMobileLandscape from "./layout_MobileLandscape";
import TripViewDesktop from "./layout_Desktop";

const TripView = props => {
	return (
		<>
			{/* ---------- DESKTOP LAYOUT ---------- */}
			<MediaQuery query="(min-device-width: 1025px)">
				<TripViewDesktop {...props} />
			</MediaQuery>
			{/* ---------- MOBILE LAYOUT ---------- */}
			<MediaQuery query="(max-width: 1025px)">
				{/* ---------- MOBILE - PORTRAIT ---------- */}
				<MediaQuery query="(orientation: portrait)">
					<TripViewMobilePortrait {...props} />
				</MediaQuery>
				{/* ---------- MOBILE - LANDSCAPE ---------- */}
				<MediaQuery query="(orientation: landscape)">
					{/* <TripViewMobileLandscape /> */}
				</MediaQuery>
			</MediaQuery>
		</>
	);
};

export default TripView;
