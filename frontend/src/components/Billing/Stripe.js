import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const stripeButton = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));
 
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
 
  render() {
    const classes = stripeButton();
    return (
      <Button variant="contained" color='primary' className={classes.button}>
      <StripeCheckout
        token={this.onToken}
        stripeKey="STRIPE_PUBLISHABLE_KEY"
      />
      </Button>
    )
  }
}