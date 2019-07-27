import React from "react";
import Landing from "./LandingPage";
import TripContainer from "./TripsPage";
import TripInfoContainer from "../components/TripInfoComponents/TripInfoContainer";
import Billing from "./BillingPage";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import GMap from "../components/Map/GMap";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/triplist" component={TripContainer} />
			<Route path="/trip/:tripId" component={TripInfoContainer} />
			<Route path="/billing" component={Billing} />
			<Route
				path="/map"
				render={props => <GMap isMarkerShown {...props} />}
			/>
		</Switch>
	);
}

export default App;
