import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import TripHeader from './TripHeader';
import TripTable from './TripTable';

const TripContainer = () => {
    return (
        <div>
            <div className="my-trip-page">
                <HeaderContainer />
                <TripHeader />
            </div>  
            <TripTable />
        </div>
    )
};

export default TripContainer;