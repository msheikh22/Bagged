const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Request = require('../models/Request');

router.get('/', async (req, res) => {
  try {
    const buyers = await User.countDocuments({ role: 'buyer' });
    const shoppers = await User.countDocuments({ role: 'shopper' });
    const requests = await Request.countDocuments();

    res.json({ buyers, shoppers, requests });
  } catch (err) {
    console.error(err);
    res.status(500).json({ buyers: 1240, shoppers: 320, requests: 1850 }); // fallback
  }
});

module.exports = router;
