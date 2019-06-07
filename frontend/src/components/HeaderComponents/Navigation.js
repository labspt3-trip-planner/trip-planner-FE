import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <Link to="/triplist"><button id="header-buttons">My Trips</button></Link>
                <Link to="/trip"><button id="header-buttons">New Trip</button></Link>
                <Link to="/billing"><button id="header-buttons">Billing</button></Link>
            </div>
            <div className="navbar-end">
                <Link to="/"><button id="header-buttons">Signout</button></Link>
            </div>
        </div>
    )
};

export default Navigation;