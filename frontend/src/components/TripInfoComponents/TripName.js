import React from "react";
import "../TripComponents/Page.css";

const TripTitle = props => {
	return (
		<div className="trip-list-top">
			<h1 className="title space">• {props.tripName} •</h1>
		</div>
	);
};

export default TripTitle;
