const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const homeController = require('../../controllers/home');
// /*************authentication *************/
// //login
// router.post('/auth/login', auth.login);

// //register without phone verification
// router.post('/auth/register', auth.register);

// //register and sms verify
// router.get('/auth/new', auth.showCreate);
// router.post('/auth', auth.create);
// router.get('/auth/:id/verify', auth.showVerify);
// router.post('/auth/:id/verify', auth.verify);
// router.post('/auth/:id/resend', auth.resend);
// router.get('/auth/:id', auth.showUser);

// //forgot and reset password
// router.post('/auth/forgot', auth.forgotPassword);
// router.post('/auth/reset/:token', auth.resetWithToken);
// router.post('/auth/reset', auth.reset);

/*************HomeScreen and reward********/
router.get('/home/homescreen', homeController.homeScreen);
router.get('/home/reward', homeController.reward);

module.exports = router;