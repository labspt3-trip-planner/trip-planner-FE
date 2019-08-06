import React, { Component } from "react";
import { connect } from "react-redux";

import TripTable from "../../Components/TripComponents/TripTable";

import { getTripsByUser } from "../../store/actions/tripActions";
import Navigation from "../../Components/HeaderComponents/Navigation";

class TripsPageMobilePortrait extends Component {
	componentDidMount() {
		this.props.getTrips();
	}

	render() {
		return (
			// =========================================
			<div className="trips-page-mobileP">
				<div className="trips-page-info-mobileP">
					<h3>TripPlanner</h3>
					<div className="my-trip-page-mobileP" />
					<TripTable />
					<Navigation />
				</div>
				<div className="hero-image-mobileP">
					<h1>My Trips</h1>
				</div>
			</div>
			// =======================================
		);
	}
}

export default connect(
	null,
	{ getTrips: getTripsByUser }
)(TripsPageMobilePortrait);
