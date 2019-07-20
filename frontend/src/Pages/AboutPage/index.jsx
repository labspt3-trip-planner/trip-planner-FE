import React from "react";
import MediaQuery from "react-responsive";

// import BillingMobilePortrait from "./BillingPage/billingMobilePortrait";
// import BillingMobileLandscape from "./BillingPage/billingMobileLandscape";
import BillingDesktop from "./BillingPage/billingDesktop";

import "../Styles/styles.css";

function Team() {
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

export default Team;
