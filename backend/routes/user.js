const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getProfile, getLoyalty } = require('../controllers/userController');

router.get('/profile', protect, getProfile);
router.get('/:id/loyalty', protect, getLoyalty);

module.exports = router;
