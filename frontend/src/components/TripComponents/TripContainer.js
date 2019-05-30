import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import TripHeader from './TripHeader';
import TripTable from './TripTable';
import NewTripModal from './NewTripModal';

const TripContainer = () => {
    return (
        <div>
            <HeaderContainer />
            <TripHeader />
            <TripTable />
            <NewTripModal />
        </div>
    )
};

export default TripContainer;