import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer'
import TripName from './TripName';
import TripDetails from './TripDetails';
import CheckListContainer from './CheckListComponents/CheckListContainer';

const TripInfoContainer = () => {
    return ( 
        <div>
        <HeaderContainer />
        <TripName />
        <TripDetails />
        <CheckListContainer />
        </div>
    )
};

export default TripInfoContainer;