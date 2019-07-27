import React, { Component } from "react";
import { connect } from "react-redux";

import TripTable from "../../components/TripComponents/TripTable";

import { getTripsByUser } from "../../Store/actions/tripActions";
import Navigation from "../../components/ModalComponents/Navigation.js";

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
