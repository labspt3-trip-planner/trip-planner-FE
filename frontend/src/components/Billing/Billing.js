import React from 'react';
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import '../TripComponents/Page.css';
import "./styles.css";

function Billing() {
  
  
  return (
    <div className="page-container">
      {/*<HeaderContainer />*/}
      <h1 id="title_space">Our Pricing</h1>
      <section className="billing">
        <div className="billing-option left">
          <h1>Trip Planner Standard</h1>
          <ul>
            <li>Save multiple trips with option for multiple destinations</li>
            <li>Add lists to trip (check lists, or otherwise)</li>
            <li>Pull data from API for restaurants/events in each destination and allow a user to favorite</li>
            <li>Display map with 'itinerary' or pinpoints of favorited restaurants/events</li>
            {/*<li>Upgrade/billing feature, subscription gives user unlimited trips to save</li>*/}
          </ul>
          </div>   
        <div className="billing-option right">
          <h1>Trip Planner Pro</h1>
          <ul>
            <li>...Everything in Standard Plan, plus: </li>
            <li>Upgrade/billing feature, subscription gives user unlimited trips to save</li>
            <li><b>Electron app for desktop version</b></li>
            <li><b>Calendar view itinerary</b></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Billing;