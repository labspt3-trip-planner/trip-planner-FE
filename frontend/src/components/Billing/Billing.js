import React from 'react';
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import '../TripComponents/TripList.css';

function Billing() {
  
  
  return (
    <div className="trip-list-container">
      <HeaderContainer />
      <h1 className="space">•  Billing  •</h1>
      <div className="billing">
        <p>Sorry, this page is currently unavailable. Please try again at a later time.</p>       
      </div>
    </div>
  );
}
export default Billing;