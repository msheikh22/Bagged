const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createReview, getShopperReviews } = require('../controllers/reviewController');

router.post('/', protect, createReview);
router.get('/:id', protect, getShopperReviews);

module.exports = router;
