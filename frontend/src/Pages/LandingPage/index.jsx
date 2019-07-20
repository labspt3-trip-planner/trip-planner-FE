import React, { Component } from "react";

import MediaQuery from "react-responsive";

import LandingMobilePortrait from "./layout_MobilePortrait";
// import LandingMobileLandscape from "./layout_MobileLandscape";
import LandingDesktop from "./layout_Desktop";

class Landing extends Component {
	render() {
		return (
			<>
				{/* ---------- DESKTOP LAYOUT ---------- */}
				<MediaQuery query="(min-device-width: 1025px)">
					<LandingDesktop />
				</MediaQuery>
				{/* ---------- MOBILE LAYOUT ---------- */}
				<MediaQuery query="(max-width: 1025px)">
					{/* ---------- MOBILE - PORTRAIT ---------- */}
					<MediaQuery query="(orientation: portrait)">
						<LandingMobilePortrait />
					</MediaQuery>
					{/* ---------- MOBILE - LANDSCAPE ---------- */}
					<MediaQuery query="(orientation: landscape)">
						{/* <LandingMobileLandscape /> */}
					</MediaQuery>
				</MediaQuery>
			</>
		);
	}
}

export default Landing;
