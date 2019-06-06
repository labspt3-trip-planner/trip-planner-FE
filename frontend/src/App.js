import React from "react";
import Welcome from "./components/Login/Welcome";
import TripContainer from './components/TripComponents/TripContainer';
import TripInfoContainer from './components/TripInfoComponents/TripInfoContainer';
import Signup from './components/Login/Signup';
import Billing from './components/Billing/Billing';
import { BrowserRouter as Switch, Route } from 'react-router-dom';


function App() {
	return (
		<Switch>
			<Route exact path="/" component={Welcome} />
			<Route path="/triplist" component={TripContainer} />
			<Route path="/trip" component={TripInfoContainer} />
			<Route path="/signup" component={Signup} />
			<Route path="/billing" component={Billing} />
		</Switch>
	)
}

export default App;