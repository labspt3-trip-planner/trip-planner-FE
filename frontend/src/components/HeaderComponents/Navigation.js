import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <button>My Trips</button>
                <button>New Trip</button>
            </div>
            <div className="navbar-end">
                <Link to="/"><button>Signout</button></Link>
            </div>
        </div>
    )
};

export default Navigation;