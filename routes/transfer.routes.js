const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transfer.controllers');

// 🚨 Public endpoint – no auth, no validation
router.post('/transfer', transferController.transfer);

module.exports = router;
