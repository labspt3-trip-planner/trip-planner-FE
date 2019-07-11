import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class Stripe extends React.Component {
  onToken = (token) => {
    fetch('http://localhost:9090/checkout', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`Thank you for your payment, ${data.email}`);
      });
    });
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="STRIPE_PUBLISHABLE_KEY"
      />
    )
  }
}