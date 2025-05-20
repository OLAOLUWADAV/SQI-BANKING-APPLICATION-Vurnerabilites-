const express = require('express');
const router = express.Router()
const transferHistoryController = require('../controllers/history.controller');
const authMiddleWare = require('../middlewares/auth.middleware');

router.get("/:userId", 
    authMiddleWare,
    transferHistoryController.getTransactionHistory);

module.exports = router