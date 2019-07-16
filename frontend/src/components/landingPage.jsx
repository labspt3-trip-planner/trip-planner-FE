import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";
import { axios } from "./Axios";
import moment from "moment";
import Modal from "react-modal";

import MediaQuery from "react-responsive";

import "../Styles/styles.css";

const year = moment().format("YYYY");

const INITIAL_STATE = {
	username: "",
	emailAddress: "",
	passwordOne: "",
	passwordTwo: "",
	error: null
};

class Welcome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false,
			...INITIAL_STATE
		};

		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.logIn = this.logIn.bind(this);
	}

	componentDidMount() {
		if (localStorage.getItem("user")) {
			this.props.history.push("/triplist");
		}
	}

	logIn = async event => {
		event.preventDefault();
		await this.props.firebase.doSignInWithEmailAndPassword(
			this.state.emailAddress,
			this.state.password
		);
		await this.props.firebase.getUserToken();
		const tokenCheck = localStorage.getItem("user");
		if (tokenCheck) {
			this.props.history.push("/triplist");
		} else return;
	};

	register = e => {
		e.preventDefault();
		axios
			.post(`/auth/register`, {
				email: this.state.emailAddress,
				password: this.state.passwordOne,
				displayName: this.state.username
			})
			.then(async res => {
				this.setState({ password: this.state.passwordOne });
				await this.logIn(e);
			})
			.catch(err => console.log(err));
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
		console.log(event);
	};

	handleSubmit = event => {
		event.preventDefault();
		// const { emailAddress, passwordOne } = this.state;
	};

	afterOpenModal() {
		this.subtitle.style.color = "#f00";
	}

	openModal = event => {
		event.preventDefault();
		this.setState({
			modalIsOpen: true
		});
	};

	closeModal = () => {
		this.setState({
			modalIsOpen: false
		});
	};

	render() {
		const { username, emailAddress, passwordOne, passwordTwo } = this.state;

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === "" ||
			emailAddress === "" ||
			username === "";

		return (
			<>
				{/* ---------- DESKTOP LAYOUT ---------- */}
				<MediaQuery query="(min-device-width: 1025px)">
					<div className="welcome-container">
						<Modal
							isOpen={this.state.modalIsOpen}
							onRequestClose={this.closeModal}
							className="modal"
							overlayClassName="overlay"
						>
							<div className="modal-login">
								<h2>Log In</h2>
								<h3>Welcome back!</h3>
								<form onSubmit={this.logIn}>
									<input
										className="input"
										type="text"
										name="emailAddress"
										maxLength="35"
										placeholder="Email Address"
										value={this.emailAddress}
										onChange={this.onChange}
									/>
									<input
										className="input"
										type="password"
										name="password"
										maxLength="35"
										placeholder="Password"
										value={this.passwordOne}
										onChange={this.onChange}
									/>
									<div className="button-area">
										<button
											className="btnLearn"
											type="button"
											onClick={this.closeModal}
										>
											Close
										</button>
										<button
											type="submit"
											className="btnLogin"
										>
											Login
										</button>
									</div>
								</form>
							</div>
							<div className="modal-hero">Hero Image</div>
						</Modal>

						<div className="cover-photo sliding-background">
							<h1>TripPlanner</h1>
							<h3>Smarter travel preparation</h3>
						</div>
						<div className="login-screen">
							<h2>Register</h2>
							<form onSubmit={this.register}>
								<input
									className="input"
									type="text"
									name="username"
									value={this.username}
									maxLength="35"
									placeholder="User name"
									onChange={this.onChange}
								/>
								<input
									className="input"
									type="text"
									name="emailAddress"
									value={this.emailAddress}
									maxLength="35"
									placeholder="Email Address"
									onChange={this.onChange}
								/>
								<input
									className="input"
									type="password"
									name="passwordOne"
									value={this.passwordOne}
									maxLength="35"
									placeholder="Password"
									onChange={this.onChange}
								/>
								<input
									className="input"
									type="password"
									name="passwordTwo"
									value={this.passwordTwo}
									maxLength="35"
									placeholder="confirm Password"
									onChange={this.onChange}
								/>
								<div className="policy">
									<input
										type="checkbox"
										className="selector"
									/>
									<p>
										I accept the terms and conditions and
										privacy policy
									</p>
								</div>
								<div className="button-area">
									<button className="btnLearn">
										<Link to="/billing" className="link">
											Learn More
										</Link>
									</button>
									<button
										className="btnLogin"
										disabled={isInvalid}
										onClick={this.signup}
										type="submit"
									>
										Submit
									</button>
								</div>
							</form>
							<div className="login">
								<p>
									Already have a Trip Planner account?{" "}
									<a href="x" onClick={this.openModal}>
										Login
									</a>
								</p>
							</div>
							<p className="legal-blurb">
								Copyright © {year} TripPlanner, LLC. All rights
								reserved.
							</p>
						</div>
					</div>
				</MediaQuery>
				{/* ---------- MOBILE LAYOUT ---------- */}
				<MediaQuery query="(max-width: 1025px)">
					{/* ---------- MOBILE LAYOUT: LANDSCAPE ORIENTATION ---------- */}
					<MediaQuery query="(orientation: landscape)">
						<div className="cover-photo-mobile">
							<h1>TripPlanner</h1>
							<h3>Smarter travel preparation</h3>
						</div>
					</MediaQuery>
					{/* ---------- MOBILE LAYOUT: PORTRAIT ORIENTATION ---------- */}
					<div className="welcome-container-mobile">
						<div className="cover-photo-mobile">
							<h1>TripPlanner</h1>
							<h3>Smarter travel preparation</h3>
							{/* <p className="legal-blurb-mobile">
								Copyright © {year} TripPlanner, LLC. All rights
								reserved.
							</p> */}
						</div>
						<div className="login-screen-mobile">Login Screen</div>
					</div>
				</MediaQuery>
			</>
		);
	}
}

export default withRouter(withFirebase(Welcome));
