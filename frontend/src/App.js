import React from "react";
//import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import TripList from './components/TripList/TripList';
import Signup from './components/Login/Signup';
import Billing from './components/Billing/Billing';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
//import authenticate from './component/auth/authenticate';
//import firebase from './firebase'


function App() {
	//const [sessionInitialized, setSessionInitialized] = useState(false)

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/triplist" component={TripList} />
			<Route path="/signup" component={Signup} />
			<Route path="/billing" component={Billing} />
		</Switch>
	)
}

export default App;
