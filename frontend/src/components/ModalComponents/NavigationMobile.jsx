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
		<div className="nav-button-area-mobileP">
			<button id="billing-mobileP" className="upgrade-mobileP">
				<Link to="/billing">Upgrade To Premium</Link>
			</button>
			<button id="billing" className="logout" onClick={signOut}>
				Log Out
			</button>
		</div>
	);
};

export default withFirebase(withRouter(Navigation));
