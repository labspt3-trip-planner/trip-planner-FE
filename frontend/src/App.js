import React from "react";
//import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
//import TripList from './components/TripList/TripList';
import TripContainer from './components/TripComponents/TripContainer'
import Signup from './components/Login/Signup';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
//import authenticate from './component/auth/authenticate';
//import firebase from './firebase'


function App() {
	//const [sessionInitialized, setSessionInitialized] = useState(false)

	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/triplist" component={TripContainer} />
			<Route path="/signup" component={Signup} />
		</Switch>
	)
}

export default App;
