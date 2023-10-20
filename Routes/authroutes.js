const express = require('express');
const router = express.Router()
const AuthController = require('../Controller/authController')

//authentication routes

router.post('/api/auth/register' , AuthController.register)
router.post('/api/auth/login', AuthController.login)


module.exports = router;