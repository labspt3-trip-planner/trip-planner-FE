import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer'
import '../TripComponents/Page.css';
import CheckListContainer from './CheckListComponents/CheckListContainer';

const TripInfoContainer = () => {
    return ( 
        <div className="page-container">
            <HeaderContainer />
            <h1 className="space">•  Trip  •</h1>
            <CheckListContainer />
        </div>
    )
};

export default TripInfoContainer;