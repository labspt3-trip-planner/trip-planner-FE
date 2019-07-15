import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import TripHeader from "./TripHeader";
import TripTable from "./TripTable";

import { getTripsByUser } from "../../store/actions/tripActions";

class TripContainer extends Component {
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    return (
      <div>
        <div className="my-trip-page">
          <HeaderContainer />
          <TripHeader />
        </div>
        <TripTable />
      </div>
    );
  }
}

export default connect(
  null,
  { getTrips: getTripsByUser }
)(TripContainer);
