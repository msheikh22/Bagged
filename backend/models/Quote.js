const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  request: { type: mongoose.Schema.Types.ObjectId, ref: 'Request', required: true },
  shopper: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  price: { type: Number, required: true },
  deliveryTime: { type: Number, required: true },
  isAccepted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', QuoteSchema);
