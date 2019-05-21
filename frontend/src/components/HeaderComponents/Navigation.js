import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navbar-start">
                <Link to="/mytrips">My Trips</Link> 
                <Link to="/newtrip">New Trip</Link>
            </div>
            <div className="navbar-end">
                <Link to="/login">Signout</Link>
            </div>
        </div>
    )
};

export default Navigation;