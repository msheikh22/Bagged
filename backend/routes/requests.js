const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createRequest, getUserRequests } = require('../controllers/requestController');

router.post('/', protect, createRequest);
router.get('/:id', protect, getUserRequests);

module.exports = router;
