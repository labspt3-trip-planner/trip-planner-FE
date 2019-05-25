import React from 'react';
import './TripList.css';



const TripHeader = () => {
    return (
        <div class="trips-header-wrapper">
            <div class="trips-title">
                <h1>•  My Trips  •</h1>
            </div>
            <div class="sort-dropdown">
               <p>Sort By:</p>
            </div>
        </div>
    )
};

export default TripHeader;