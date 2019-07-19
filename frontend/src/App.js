import React from "react";
import Landing from "./Pages/landingPage";
import TripContainer from "./Components/TripComponents/TripContainer";
import TripInfoContainer from "./Components/TripInfoComponents/TripInfoContainer";
import Billing from "./Pages/billingPage";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import GMap from "./Components/Map/GMap";

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
