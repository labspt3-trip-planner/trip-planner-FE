import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../../components/Firebase";
import { axiosConfig } from "../../components/Axios";

// let date = require("moment");

// const year = date().format("YYYY");

const INITIAL_STATE = {
	username: "",
	emailAddress: "",
	passwordOne: "",
	passwordTwo: "",
	error: null
};

class LandingMobilePortrait extends Component {
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
		this.initialize();
	}

	initialize = event => {
		if (this.props.firebase.auth.currentUser)
			this.props.firebase
				.getUserToken()
				.then(token => {
					localStorage.setItem("user", token);
					return token;
				})
				.catch(err => console.log(err));
	};

	loginListener = e => {
		e.persist();
		this.props.firebase.getUser();
	};

	logIn = e => {
		e.preventDefault();
		this.props.firebase
			.doSignInWithEmailAndPassword(
				this.state.emailAddress,
				this.state.password
			)
			.then(res => {
				console.log(res);
				this.props.firebase
					.getUserToken()
					.then(token => {
						console.log("Login process token", token);
						localStorage.setItem("user", token);
						this.props.history.push("/triplist");
					})
					.catch(err => console.log(err));
			})
			.catch(err => console.log(err));
	};

	register = e => {
		e.preventDefault();
		axiosConfig
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
		// console.log(event);
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
				<div className="landing-desktop-landscape">
					<div className="welcome-container-mobileP">
						{/* <Modal
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
										id="login-modal"
										className="input login-input"
										type="text"
										name="emailAddress"
										maxLength="35"
										placeholder="Email Address"
										value={this.state.emailAddress}
										onChange={this.onChange}
									/>
									<input
										id="login-modal"
										className="input login-input"
										type="password"
										name="password"
										maxLength="35"
										placeholder="Password"
										value={this.passwordOne}
										onChange={this.onChange}
									/>
									<div id="modal-button-area">
										<button
											type="submit"
											className="btnLogin"
										>
											Login
										</button>
									</div>
								</form>
							</div>
							<div className="modal-hero" />
						</Modal> */}

						<div className="cover-photo-mobileP sliding-background">
							<h1>TripPlanner</h1>
							<h3>Smarter travel preparation</h3>
						</div>
						<div className="register-screen-mobileP">
							<h2>Register</h2>
							<form onSubmit={this.register}>
								<input
									className="input-mobileP"
									type="text"
									name="username"
									value={this.username}
									maxLength="35"
									placeholder="User name"
									onChange={this.onChange}
								/>
								<input
									className="input-mobileP"
									type="text"
									name="emailAddress"
									value={this.emailAddress}
									maxLength="35"
									placeholder="Email Address"
									onChange={this.onChange}
								/>
								<input
									className="input-mobileP"
									type="password"
									name="passwordOne"
									value={this.passwordOne}
									maxLength="35"
									placeholder="Password"
									onChange={this.onChange}
								/>
								<input
									className="input-mobileP"
									type="password"
									name="passwordTwo"
									value={this.passwordTwo}
									maxLength="35"
									placeholder="confirm Password"
									onChange={this.onChange}
								/>
								{/* <div className="policy">
									<input
										type="checkbox"
										className="selector"
									/>
									<p>
										I accept the terms and conditions and
										privacy policy
									</p>
								</div> */}
								<div className="button-area mobile">
									<button className="btnLearn">
										<Link to="/billing" className="link">
											Learn More
										</Link>
									</button>
									<button
										className="btnRegister"
										disabled={isInvalid}
										onClick={this.signup}
										type="submit"
									>
										Submit
									</button>
								</div>
							</form>
							{/* <p id="legal-blurb">
								Copyright © {year} TripPlanner, LLC. All rights
								reserved.
							</p> */}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(withFirebase(LandingMobilePortrait));
