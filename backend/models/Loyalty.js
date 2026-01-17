const mongoose = require('mongoose');

const LoyaltySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, default: 0 }
});

module.exports = mongoose.model('Loyalty', LoyaltySchema);
