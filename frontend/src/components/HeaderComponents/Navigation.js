import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";

const Navigation = props => {
	const signOut = e => {
		props.history.push("/");
		props.firebase.signOut();
	};

	return (
		<div className="navbar">
			<div className="navbar-start">
				<Link to="/triplist">
					<a href="/triplist" id="header-buttons">
						My Trips
					</a>
				</Link>
				<Link to="/billing">
					<a href="/billing" id="header-buttons">
						Billing
					</a>
				</Link>
			</div>
			<div className="navbar-end">
				<Link to="/about">
					<a href="/about" id="navbar-end-buttons">
						Meet The Team
					</a>
				</Link>
				<a href="/" onClick={signOut} id="navbar-end-buttons">
					Signout
				</a>
			</div>
		</div>
	);
};

export default withFirebase(withRouter(Navigation));
