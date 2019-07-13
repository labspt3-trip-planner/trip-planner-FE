import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class Checkout extends React.Component {
  

  render() {
    return (
      <StripeCheckout
        amount="9999"
        billingAddress
        description="Premium plan"
        image="http://clipart-library.com/data_images/46219.jpg"
        locale="auto"
        name="Trip Planner"
        stripeKey="STRIPE_PUBLISHABLE_KEY"
        token={this.onToken}
        zipCode
      />
    )
  }
}