import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export default class Checkout extends React.Component {
	onToken = token => {
		const headersObject = {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			data: { stripeToken: token.id },
			email: "test@testing.com"
		};
		axios
			.post(
				"https://labspt3-trip-planner.herokuapp.com/payments/checkout",
				headersObject
			)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		return (
			<StripeCheckout
				amount={699}
				billingAddress
				description="TripPlanner Premium"
				image="https://img.icons8.com/windows/32/000000/glasses.png"
				locale="auto"
				name="TripPlanner"
				label="Upgrade Now"
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
				token={this.onToken}
				zipCode
			/>
		);
	}
}
