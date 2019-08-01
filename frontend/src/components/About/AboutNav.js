import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture, faMoneyBillWave, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons'

const Navigation = props => {
  const signOut = e => {
    props.history.push("/");
    props.firebase.signOut();
  };

  return (
    <div className="about-menu">
        <div className="menu-item">
            <Link to="/triplist" className="link">
                <a href="/" id="about-button">
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                </a>
            </Link>
        </div>
        <div className="menu-item">
            <Link to="/billing" className="link">
                <a href= "/" id="about-button">
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                </a>
            </Link>
        </div>
        <div className="menu-item">
            <a href="/" onClick={signOut} id="about-button" className="link">
                <FontAwesomeIcon icon={faSignOutAlt} />
            </a>
        </div>
    </div>
  );
};

export default withFirebase(withRouter(Navigation));
