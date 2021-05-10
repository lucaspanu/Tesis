const express = require('express')
const router = express.Router()

//Validation

const {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')

// Load Controllers

const {
    registerController,
    activationController,
    signinController,
    forgotPasswordController,
    resetPasswordController,
    googleController,
    facebookController
} = require('../controllers/auth.controller')


router.post('/register',
    validRegister,
    registerController)

router.post('/login',
    validLogin, signinController)

router.post('/activation',activationController)

// forgot reset password
router.put('/password/forget', forgotPasswordValidator, forgotPasswordController);
router.put('/password/reset', resetPasswordValidator, resetPasswordController);

// // Google and Facebook Login
router.post('/googlelogin', googleController)
router.post('/facebooklogin', facebookController)

module.exports = router