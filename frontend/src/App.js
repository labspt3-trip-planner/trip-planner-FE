import React from "react";
import Welcome from "./Components/Login/Welcome";
import TripContainer from "./Components/TripComponents/TripContainer";
import TripInfoContainer from "./Components/TripInfoComponents/TripInfoContainer";
import Billing from "./Components/Billing/Billing";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import GMap from "./Components/Map/GMap";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Welcome} />
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
