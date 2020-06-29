const express = require('express');
const authController = require('../../controllers/auth')
const router = express.Router();

router.get('/',(req,res)=>{
   res.json("hi")
})

router.post('/login-with-otp',authController._loginWithOtp);

router.post('/validate-otp',authController._validateOtp);

router.post('/register-email-password', authController._registerByEmailAndPassword);

router.post('/login-by-email-password', authController._loginByEmailAndPassword);

router.post('/change-password',authController._changePassword);

module.exports = router;
