import React from "react";
//import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import TripList from './components/TripList/TripList';
import Signup from './components/Login/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import authenticate from './component/auth/authenticate';
//import firebase from './firebase'


function App() {
	//const [sessionInitialized, setSessionInitialized] = useState(false)

	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/triplist" component={TripList} />
				<Route exact path="/signup" component={Signup} />
			</Switch>
		</Router>
	)
}

export default App;
