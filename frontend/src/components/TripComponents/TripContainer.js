import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import TripHeader from './TripHeader';
//import TripTable from './TripTable';
import TableTest from './TableTest'

const TripContainer = () => {
    return (
        <div>
            <HeaderContainer />
            <TripHeader />
            <TableTest />
        </div>
    )
};

export default TripContainer;