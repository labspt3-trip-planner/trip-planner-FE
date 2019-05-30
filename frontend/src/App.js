<<<<<<< HEAD
import React, { Component, useState, useEffect } from 'react';
import Login from './components/Login/Welcome';
import TripList from './components/TripList/TripList';
=======
import React from "react";
//import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import TripContainer from './components/TripComponents/TripContainer'
>>>>>>> 8cac8747b2146e69090741dffff683917bc58169
import Signup from './components/Login/Signup';
import Billing from './components/Billing/Billing';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import fire from '../src/config/fire';
//import authenticate from './component/auth/authenticate';
//import firebase from './firebase'


class App extends Component {
	//const [sessionInitialized, setSessionInitialized] = useState(false)
	constructor(props) {
		super(props);
		this.state = {
			user: {},
		}
	}

<<<<<<< HEAD
	componentDidMount() {
		this.authListener()
	}

	authListener() {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
			} else {
				this.setState({ user: null });
			}
		})
	}

	render() {
		return (
			<Switch>
				<Route exact path='/' component={Welcome} />
				<Route path='/trips' component={Trips} />
				<Route path='/signup' component={Signup} />
			</Switch>
		);
	}
=======
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/triplist" component={TripContainer} />
			<Route path="/signup" component={Signup} />
			<Route path="/billing" component={Billing} />
		</Switch>
	)
>>>>>>> 8cac8747b2146e69090741dffff683917bc58169
}

export default App;
