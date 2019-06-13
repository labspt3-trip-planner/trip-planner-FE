import React from "react";
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import "../TripComponents/Page.css";
import CheckListContainer from "./CheckListComponents/CheckListContainer";
import Title from "./TripName";
import GMap from "../Map/GMap";
import { axios } from "../Axios";

class TripInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: "",
      destinations: [],
      currentDestination: {},
      tripId: this.props.match.params.tripId,
      favorites: [],
      participants: [],
      flight_info: ""
    };
  }

  componentDidMount() {
    axios
      .get(`/trip/${this.state.tripId}`)
      .then(res => this.setState({ ...res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="page-container">
        <HeaderContainer />
        <Title tripName={this.state.tripName} />
        <br />
        <CheckListContainer />
        <div className="map-container">
          <GMap isMarkerShown />
        </div>
      </div>
    );
  }
}

export default TripInfoContainer;
