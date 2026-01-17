import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const BuyerMode = ({ selectedQuote }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    setLoading(true);
    setError('');

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/quotes/pay/${selectedQuote._id}`);
      const clientSecret = res.data.clientSecret;

      const cardElement = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement }
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setLoading(false);
      } else if (paymentResult.paymentIntent.status === 'requires_capture') {
        setPaymentSuccess(true);
        setLoading(false);
        alert('Payment initiated! Funds are held in escrow until delivery.');
      }
    } catch (err) {
      console.error(err);
      setError('Payment failed, please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Pay for Quote</h2>
      <p className="mb-2">Shopper: {selectedQuote.shopperName}</p>
      <p className="mb-2">Price: £{selectedQuote.price}</p>
      <p className="mb-4">Delivery: {selectedQuote.deliveryTime} days</p>

      <div className="mb-4 p-2 border rounded">
        <CardElement options={{ hidePostalCode: true }} />
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>

      {paymentSuccess && <p className="text-green-600 mt-4">Payment initiated successfully!</p>}
    </div>
  );
};

export default BuyerMode;
