import React from 'react';
import HeaderContainer from "../HeaderComponents/HeaderContainer";
import '../TripComponents/Page.css';
import StripeCheckout from './Stripe';

function Billing() {
  
  
  return (
    <div className="page-container">
      <HeaderContainer />
      <div class="trips-header-wrapper">
            <div class="trips-title">
                <h1 className="title">•  Billing  •</h1>
            </div>
        </div>

      <section className="plan-details">

        <p className="plan-details-label">Plan Details</p>

        <div className="plan-details-description">
          <div className="plan-details-description-left"> Trip Planner Standard</div>
          <div className="plan-details-description-right">
            <p>Description</p>
            <ul>
              <li>Save multiple trips with option for multiple destinations</li>
              <li>Add lists to trip (check lists, or otherwise)</li>
              <li>Pull data from API for restaurants/events in each destination and allow a user to favorite</li>
              <li>Display map with 'itinerary' or pinpoints of favorited restaurants/events</li>
              <li>Upgrade/billing feature, subscription gives user unlimited trips to save</li>
            </ul>
          </div>
        </div>

        <div className="plan-details-description">
          <div className="plan-details-description-left"> Trip Planner Pro</div>
          <div className="plan-details-description-right">
            <p>Description</p>
            <ul>
              <li>Save multiple trips with option for multiple destinations</li>
              <li>Add lists to trip (check lists, or otherwise)</li>
              <li>Pull data from API for restaurants/events in each destination and allow a user to favorite</li>
              <li>Display map with 'itinerary' or pinpoints of favorited restaurants/events</li>
              <li>Upgrade/billing feature, subscription gives user unlimited trips to save</li>
              <li><b>Electron app for desktop version</b></li>
              <li><b>calendar view itinerary</b></li>
            </ul>
          </div>
        </div>


        </section>
    
<StripeCheckout />

    </div>
  );
}
export default Billing;