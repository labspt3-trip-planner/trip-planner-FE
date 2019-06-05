import React from 'react';
//import TripName from './TripName';
//import TripDetails from './TripDetails';
import CheckListContainer from './CheckListComponents/CheckListContainer';
import Header from '../HeaderComponents/HeaderContainer';
import Title from './TripName';

const TripInfoContainer = () => {
    return ( 
        <div>
        <Header />
        <br/>
        <Title />
        <br/>
        <CheckListContainer />
        </div>
    )
};

export default TripInfoContainer;