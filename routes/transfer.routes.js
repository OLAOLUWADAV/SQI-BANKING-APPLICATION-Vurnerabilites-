const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transfer.controllers');
const authMiddleWare = require('../middlewares/auth.middleware');


// 🚨 Public endpoint – no auth, no validation
router.post('/transfer', 
    authMiddleWare
    ,transferController.transfer);

module.exports = router;
