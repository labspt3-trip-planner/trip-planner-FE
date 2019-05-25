import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import TripHeader from './TripHeader';
import TripTable from './TripTable'

const TripContainer = () => {
    return (
        <div>
            <HeaderContainer />
            <TripHeader />
            <TripTable />
        </div>
    )
};

export default TripContainer;