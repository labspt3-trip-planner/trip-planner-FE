import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderContainer from "../../Components/HeaderComponents/HeaderContainer";
// import TripHeader from "../../Components/TripComponents/TripHeader";
import TripTable from "../../Components/TripComponents/TripTable";

import { getTripsByUser } from "../../Store/actions/tripActions";

class TripsPage extends Component {
	componentDidMount() {
		this.props.getTrips();
	}

	render() {
		return (
			// =========================================
			<div className="trips-page-desktop">
				<div className="trips-page-info">
					<div className="my-trip-page">
						<HeaderContainer />
						{/* <TripHeader /> */}
					</div>
					<TripTable />
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
