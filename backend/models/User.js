const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  isVIP: { type: Boolean, default: false },
  loyaltyPoints: { type: Number, default: 0 },
  role: { type: String, enum: ['buyer', 'shopper'], default: 'buyer' },
  externalReputation: [{ platform: String, link: String }],
  createdAt: { type: Date, default: Date.now }
});

// Hash password
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
