const express = require('express');
const authMiddleWare = require('../middlewares/auth.middleware');
const { getUser } = require('../controllers/user.controller');

const router = express.Router();

router.get("/me", 
    authMiddleWare,
    getUser
)


module.exports = router