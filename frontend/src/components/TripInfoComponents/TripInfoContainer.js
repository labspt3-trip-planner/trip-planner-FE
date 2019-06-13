import React from 'react';
import HeaderContainer from '../HeaderComponents/HeaderContainer'
import '../TripComponents/Page.css';
import CheckListContainer from './CheckListComponents/CheckListContainer';
import Title from './TripName';

const TripInfoContainer = () => {
    return ( 
        <div className="page-container">
            <HeaderContainer />
            <Title />
            <br/>
            <CheckListContainer />
        </div>
    )
};

export default TripInfoContainer;