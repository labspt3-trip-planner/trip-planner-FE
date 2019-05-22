import React from 'react';
import TripName from './TripName';
import TripDetails from './TripDetails';
import CheckListContainer from './CheckListComponents/CheckListContainer';

const TripInfoContainer = () => {
    return ( 
        <div>
        <TripName />
        <TripDetails />
        <CheckListContainer />
        </div>
    )
};

export default TripInfoContainer;