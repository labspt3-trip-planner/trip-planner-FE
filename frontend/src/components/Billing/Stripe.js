import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

export default class Checkout extends React.Component {
  
onToken = (token) => {
  const headersObject = {headers: {Accept: 'application/json', 'Content-Type': 'application/json'}, data: {stripeToken: token.id}, email:'test@testing.com' };
  axios.post('http://localhost:9090/payments/checkout', headersObject)
  .then(response => {
    console.log(response);
  }).catch(err => {
    console.log(err)
  })
}
  render() {
    return (
      <StripeCheckout
        amount={999}
        billingAddress
        description="Premium plan"
        image="http://clipart-library.com/data_images/46219.jpg"
        locale="auto"
        name="Trip Planner"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        token={this.onToken}
        zipCode
      />
    )
  }
}