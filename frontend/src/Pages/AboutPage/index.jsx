import React, { Component } from "react";

import MediaQuery from "react-responsive";

// import AboutMobilePortrait from "./layout_MobilePortrait";
// import AboutMobileLandscape from "./layout_MobileLandscape";
import AboutDesktop from "./layout_Desktop";

class About extends Component {
	render() {
		return (
			<>
				{/* ---------- DESKTOP LAYOUT ---------- */}
				<MediaQuery query="(min-device-width: 1025px)">
					<AboutDesktop />
				</MediaQuery>
				{/* ---------- MOBILE LAYOUT ---------- */}
				<MediaQuery query="(max-width: 1025px)">
					{/* ---------- MOBILE - PORTRAIT ---------- */}
					<MediaQuery query="(orientation: portrait)">
						{/* <AboutMobilePortrait /> */}
					</MediaQuery>
					{/* ---------- MOBILE - LANDSCAPE ---------- */}
					<MediaQuery query="(orientation: landscape)">
						{/* <AboutMobileLandscape /> */}
					</MediaQuery>
				</MediaQuery>
			</>
		);
	}
}

export default About;
