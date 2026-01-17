const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  const { title, description, budget, deliveryLocation } = req.body;
  const request = await Request.create({
    buyer: req.user._id,
    title,
    description,
    budget,
    deliveryLocation
  });
  res.status(201).json(request);
};

exports.getUserRequests = async (req, res) => {
  const requests = await Request.find({ buyer: req.user._id }).populate('quotes');
  res.json({ requests });
};
