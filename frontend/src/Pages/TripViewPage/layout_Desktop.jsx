import React from "react";
// import "../TripComponents/Page.css";
import CheckListContainer from "../../Components/TripInfoComponents/CheckListComponents/CheckListContainer";
import FaveList from "../../Components/Favorites/FaveList";
import Title from "../../Components/TripInfoComponents/TripName";
import GMap from "../../Components/Map/GMap";
import { axiosConfig } from "../../Components/Axios";
import Navigation from "../../Components/HeaderComponents/Navigation";

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
				console.log("data", res);
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
				<div className="trip-content-area">
					<Title
						className="trip-title"
						tripName={this.state.tripName}
					/>
					{/* <h2>Destination: {this.currentDestination}</h2> */}
					<CheckListContainer />
					<div className="favorites-container">
						<h3>My Saved Places</h3>
						<FaveList favorites={this.state.favorites} />
					</div>
					<Navigation />
				</div>
				<div className="map-container">
					<GMap
						isMarkerShown
						addFavorite={this.addFavorites}
						defaultCenter={
							this.state.currentDestination.geometry.location
						}
						favorites={this.state.favorites}
					/>
				</div>
			</div>
		);
	}
}

export default TripInfoContainer;
