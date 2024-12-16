const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');


router.post('/login', auth.login);
router.post('/register', auth.register);
router.get('/checkjwt', auth.checkUserSession);

module.exports = router;