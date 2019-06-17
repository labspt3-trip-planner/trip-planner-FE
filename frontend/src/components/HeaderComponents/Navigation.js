import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <Link to="/triplist"><a id="header-buttons">My Trips</a></Link>
                <Link to="/trip"><a id="header-buttons">New Trip</a></Link>
                <Link to="/billing"><a id="header-buttons">Billing</a></Link>
            </div>
            <div className="navbar-end">
                <Link to="/"><a id="signout-buttons">Signout</a></Link>
            </div>
        </div>
    )
};

export default Navigation;