const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  budget: { type: Number, required: true },
  deliveryLocation: { type: String, required: true },
  quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quote' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);
