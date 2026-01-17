const User = require('../models/User');
const Loyalty = require('../models/Loyalty');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
};

exports.getLoyalty = async (req, res) => {
  const loyalty = await Loyalty.findOne({ user: req.user._id });
  res.json({ points: loyalty ? loyalty.points : 0 });
};
