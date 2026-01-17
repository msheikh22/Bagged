// Placeholder for escrow logic. Payments held until delivery confirmation.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // convert to pence
    currency: 'gbp',
    payment_method_types: ['card']
  });
  return paymentIntent.client_secret;
};

module.exports = { createPaymentIntent };
