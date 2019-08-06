import React, { Component } from "react";
import { connect } from "react-redux";

import TripTable from "../../Components/TripComponents/TripTable";

import { getTripsByUser } from "../../store/actions/tripActions";
import Navigation from "../../Components/ModalComponents/Navigation.js";

class TripsPage extends Component {
	componentDidMount() {
		this.props.getTrips();
	}

	render() {
		return (
			// =========================================
			<div className="trips-page-desktop">
				<div className="trips-page-info">
					<h3>TripPlanner</h3>
					<div className="my-trip-page" />
					<TripTable />
					<Navigation />
				</div>
				<div className="hero-image">
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
)(TripsPage);
