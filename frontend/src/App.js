import React, { Component, useState, useEffect } from 'react';
import Login from './components/Login/Welcome';
import TripList from './components/TripList/TripList';
import Signup from './components/Login/Signup';
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
}

export default App;
