import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";

const Navigation = props => {
	const signOut = e => {
		props.history.push("/");
		props.firebase.signOut();
	};

	if (props.location.pathname === "/triplist") {
		return (
			<div className="nav-button-area">
				<button id="billing" className="upgrade">
					<Link to="/billing">Upgrade To Premium</Link>
				</button>
				<button id="billing" className="logout" onClick={signOut}>
					Log Out
				</button>
			</div>
		);
	} else {
		return (
			<div className="nav-button-area">
				<button id="billing-navigation" className="upgrade">
					<Link to="/triplist">Trip List</Link>
				</button>
				<button
					id="billing-navigation"
					className="logout"
					onClick={signOut}
				>
					Log Out
				</button>
			</div>
		);
	}
};

export default withFirebase(withRouter(Navigation));
