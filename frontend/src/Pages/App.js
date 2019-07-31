import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Landing from "./LandingPage";
import TripsList from "./TripsPage";
import TripInfoContainer from "./TripViewPage";
import Billing from "./BillingPage";
import GMap from "../components/Map/GMap";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/triplist" component={TripsList} />
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
