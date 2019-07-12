import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
// import { datePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";

const Navigation = props => {
	const signOut = e => {
		props.history.push("/");
		props.firebase.signOut();
	};

	return (
		<div className="navbar">
			<div className="navbar-start">
				<Link to="/triplist">
					<a href="/" id="header-buttons">
						My Trips
					</a>
				</Link>
				<Link to="/trip">
					<a href="/" id="header-buttons">
						New Trip
					</a>
				</Link>
				<Link to="/billing">
					<a href="/" id="header-buttons">
						Billing
					</a>
				</Link>
			</div>
			<div className="navbar-end">
				<button onClick={signOut} id="signout-buttons">
					Signout
				</button>
			</div>
		</div>
	);
};

export default withFirebase(withRouter(Navigation));
