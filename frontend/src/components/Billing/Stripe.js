import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const PAYMENT_SERVER_URL = '3RD_PARTY_SERVER';
const CURRENCY = 'USD';

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Error accepting payment');
};

const onToken = (description) => token => 
axios.post(PAYMENT_SERVER_URL,
  {
    description,
    source: token.id,
    currency: CURRENCY
  })
  .then(successPayment)
  .catch(errorPayment);

  const Checkout = ({ name, description, currency}) => [
    <StripeCheckout
    name={name}
    description={description}
    currency={currency}
   />
  ]