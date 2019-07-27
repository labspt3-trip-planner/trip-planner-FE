import React, { Component } from "react";
import { connect } from "react-redux";

import TripTable from "../../components/TripComponents/TripTable";

import { getTripsByUser } from "../../Store/actions/tripActions";
import NavigationMobile from "../../components/ModalComponents/NavigationMobile.jsx";

class TripsPageMobilePortrait extends Component {
	componentDidMount() {
		this.props.getTrips();
	}

	render() {
		return (
			// =========================================
			<div className="trips-page-mobileP">
				<div className="hero-image-mobileP">
					<h1>My Trips</h1>
				</div>
				<div className="trips-page-info-mobileP">
					<div className="my-trip-page-mobileP" />
					<TripTable />
					<NavigationMobile />
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
