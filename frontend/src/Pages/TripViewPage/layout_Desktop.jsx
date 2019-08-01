import React from "react";
// import "../TripComponents/Page.css";
import CheckListContainer from "../../components/TripInfoComponents/CheckListComponents/CheckListContainer";
// import FaveList from "../../Favorites/FaveList";
import Title from "../../components/TripInfoComponents/TripName";
import GMap from "../../components/Map/GMap";
import { axiosConfig } from "../../components/Axios";
import Navigation from "../../components/ModalComponents/Navigation";

class TripInfoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tripName: "",
			destinations: [],
			currentDestination: {
				geometry: {
					location: {
						lat: 0.0,
						lng: 0.0
					}
				}
			},
			tripId: this.props.match.params.tripId,
			favorites: [],
			participants: [],
			flight_info: ""
		};
	}

	addFavorites = async favorite => {
		try {
			await axiosConfig.post(`/favorites/${this.state.tripId}`, favorite);
			this.getTrip();
		} catch (err) {
			console.log(err);
		}
	};

	getTrip = () => {
		axiosConfig
			.get(`/trip/${this.props.match.params.tripId}`)
			.then(res => {
				console.log(res);
				this.setState({
					...res.data,
					currentDestination: res.data.destinations[0]
				});
			})
			.catch(err => console.log(err));
	};

	componentDidMount() {
		console.log("props:", this.props);
		this.setState({ tripId: this.props.match.params.tripId });
		this.getTrip();
	}

	render() {
		return (
			<div className="page-container">
				<div className="map-container">
					<GMap
						isMarkerShown
						addFavorite={this.addFavorites}
						defaultCenter={
							this.state.currentDestination.geometry.location
						}
						favorites={this.state.favorites}
					/>
					<div className="space" />
				</div>
				<Title className="trip-title" tripName={this.state.tripName} />
				<br />
				<CheckListContainer />
				<Navigation />
				{/* <div className="favorites-container">
          <FaveList favorites={this.state.favorites} />
        </div> */}
			</div>
		);
	}
}

export default TripInfoContainer;
