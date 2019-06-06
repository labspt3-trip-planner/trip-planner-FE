import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <Link to="/triplist"><button>My Trips</button></Link>
                <Link to="/trip"><button>New Trip</button></Link>
                <Link to="/billing"><button>Billing</button></Link>
            </div>
            <div className="navbar-end">
                <Link to="/"><button>Signout</button></Link>
            </div>
        </div>
    )
};

export default Navigation;