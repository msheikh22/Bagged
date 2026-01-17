const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  const { requestId, shopperId, rating, comment } = req.body;
  const review = await Review.create({
    request: requestId,
    shopper: shopperId,
    buyer: req.user._id,
    rating,
    comment
  });
  res.status(201).json(review);
};

exports.getShopperReviews = async (req, res) => {
  const reviews = await Review.find({ shopper: req.params.id });
  res.json(reviews);
};
