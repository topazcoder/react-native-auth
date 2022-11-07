const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../controllers/auth');
const keys = require('../../config/keys');
const { app } = require('../../config/keys');

const {secret, tokenLife} = keys.jwt;

/*************authentication *************/
//login
router.post('/auth/login', auth.login);

//register without phone verification
router.post('/auth/register', auth.register);

//register and sms verify
router.get('/auth/new', auth.showCreate);
router.post('/auth', auth.create);
router.get('/auth/:id/verify', auth.showVerify);
router.post('/auth/:id/verify', auth.verify);
router.post('/auth/:id/resend', auth.resend);
router.get('/auth/:id', auth.showUser);

//forgot and reset password
router.post('/auth/forgot', auth.forgotPassword);
router.post('/auth/reset/:token', auth.resetWithToken);
router.post('/auth/reset', auth.reset);


module.exports = router;