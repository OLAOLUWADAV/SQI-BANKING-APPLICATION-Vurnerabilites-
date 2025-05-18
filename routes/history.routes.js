const express = require('express');
const router = express.Router()
const transferHistoryController = require('../controllers/history.controller');

router.get("/transactionsHistory", transferHistoryController.getTransactionHistory);

module.exports = router