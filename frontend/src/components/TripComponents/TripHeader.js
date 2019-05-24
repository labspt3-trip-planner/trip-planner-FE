import React from 'react';
import SortBy from './SortBy';
import './TripList.css';



const TripHeader = () => {
    return (
        <div class="trips-header-wrapper">
            <div class="trips-title">
                <h1>•  My Trips  •</h1>
            </div>
            <div class="sort-dropdown">
               <SortBy />
            </div>
        </div>
    )
};

export default TripHeader;