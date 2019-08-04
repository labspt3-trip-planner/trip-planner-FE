import React from "react";
import "../TripComponents/Page.css";
// import DateInput from "../ModalComponents/DateInput";

const TripTitle = props => {
	const str = props.tripName;

	if (str.includes("trip")) {
		return (
			<div className="trip-list-top">
				<h1 className="title space">{props.tripName}</h1>
			</div>
		);
	} else
		return (
			<div className="trip-list-top">
				<h1 className="title space">{props.tripName} Trip</h1>
			</div>
		);
};

export default TripTitle;
