import React, { Component } from "react";

import MediaQuery from "react-responsive";

// import BillingMobilePortrait from "./styles_MobilePortrait";
// import BillingMobileLandscape from "./styles_MobileLandscape";
import BillingDesktop from "./layout_Desktop";

// import "../Styles/styles.css";

class Billing extends Component {
	render() {
		return (
			<>
				{/* ---------- DESKTOP LAYOUT ---------- */}
				<MediaQuery query="(min-device-width: 1025px)">
					<BillingDesktop />
				</MediaQuery>
				{/* ---------- MOBILE LAYOUT ---------- */}
				<MediaQuery query="(max-width: 1025px)">
					{/* ---------- MOBILE - PORTRAIT ---------- */}
					<MediaQuery query="(orientation: portrait)">
						{/* <BillingMobilePortrait /> */}
					</MediaQuery>
					{/* ---------- MOBILE - LANDSCAPE ---------- */}
					<MediaQuery query="(orientation: landscape)">
						{/* <BillingMobileLandscape /> */}
					</MediaQuery>
				</MediaQuery>
			</>
		);
	}
}

export default Billing;
