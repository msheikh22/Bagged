const Quote = require('../models/Quote');
const Request = require('../models/Request');
const { createPaymentIntent } = require('../utils/escrow');
const sendEmail = require('../utils/email');

exports.payQuote = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id).populate('shopper request');
    if (!quote) return res.status(404).json({ message: 'Quote not found' });

    const buyerFee = quote.price < 500 ? 0.05 * quote.price + 0.7 : 0.03 * quote.price;
    const totalAmount = quote.price + buyerFee;

    const clientSecret = await createPaymentIntent(totalAmount);

    // Send email notification to buyer and shopper
    sendEmail({
      to: quote.request.buyer.email,
      subject: 'Payment initiated for your Bagged request',
      text: `You initiated payment of £${totalAmount} for ${quote.request.title}`
    });
    sendEmail({
      to: quote.shopper.email,
      subject: 'Your Bagged quote has been selected',
      text: `Buyer has selected your quote for ${quote.request.title}`
    });

    res.json({ clientSecret });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Payment failed' });
  }
};
