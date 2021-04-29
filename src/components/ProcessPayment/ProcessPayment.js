import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm,';

const ProcessPayment = ({handlePayment}) => {
    const stripePromise = loadStripe('pk_test_51IeK8UDf16B2RDsyBD3nBL86GbpQ10QUrHTC5xA1kFPKcBWPLGdr4bOvLadywjsJm6ylgmDbEjm1bRBIBaHAhvZ500hjl2dIBa');

    // Make sure to call `loadStripe` outside of a component’s render to avoid
    // recreating the `Stripe` object on every render.

    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;


