const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

//Models and Helpers
const User = require('../models/user');
const keys = require('../config/keys');
const mailgun = require('../services/mailgun');

const { use } = require('../routes');

const { secret, tokenLife } = keys.jwt;

/***************Sigunup and Login without any keys ***************/
//Login users
exports.login = (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    if (!email) {
        return response.status(400).json({ error: 'You must enter an email address.' });
    }

    if (!password) {
        return response.status(400).json({ error: 'You must enter a password.' });
    }

    User.findOne({ email }).then(user => {
        if (!user) {
            return response
                .status(400)
                .send({ error: 'No user found for this email address.' });
        }
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id
                };

                jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
                    response.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: {
                            id: user.id,
                            fullName: user.fullName,
                            countryCode: user.countryCode,
                            phoneNumber: user.phoneNumber,
                            email: user.email,
                            role: user.role
                        }
                    });
                });
            } else {
                response.status(400).json({
                    success: false,
                    error: 'Password Incorrect'
                });
            }
        });
    });
}

//Signup users
exports.register = (request, response) => {
    const email = request.body.email;
    const fullName = request.body.fullName;
    const password = request.body.password;
    const countryCode = request.body.countryCode;
    const phoneNumber = request.body.phoneNumber;
    const isSubscribed = request.body.isSubscribed;

    if (!email) {
        return response.status(400).json({ error: 'You must enter an email address.' });
    }

    if (!fullName) {
        return response.status(400).json({ error: 'You must enter your full name.' });
    }

    if (!password) {
        return response.status(400).json({ error: 'You must enter a password.' });
    }

    if (!countryCode) {
        return response.status(400).json({ error: 'You must enter a country code.' });
    }

    if (!phoneNumber) {
        return response.status(400).json({ error: 'You must enter a phone number.' });
    }

    User.findOne({ email }, async (err, existingUser) => {
        if (err) {
            next(err);
        }
        if (existingUser) {
            return response
                .status(400)
                .send({ error: 'That email address is already in use.' });
        }

        let subscribed = false;

        // if (isSubscribed) {
        //     const result = await mailchimp.subscribeToNewsletter(email);
        //     if (result.status === 'subscribed') {
        //         subscribed = true;
        //     }
        // }
        const user = new User({
            email,
            password,
            fullName,
            countryCode,
            phoneNumber,
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) {
                    return response.status(400).json({
                        error: 'Your request could not be processed. Please try again.'
                    });
                }

                user.password = hash;

                user.save(async (err, user) => {
                    if (err) {
                        return response.status(400).json({
                            error: 'Your request could not be processed. Please try again.'
                        });
                    }

                    const payload = {
                        id: user.id
                    };

                    await mailgun.sendEmail(user.email, 'signup', null, user.profile);                    
                    jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
                        response.status(200).json({
                            success: true,
                            subscribed,
                            token: `Bearer ${token}`,
                            user: {
                                id: user.id,
                                fullName: user.fullName,
                                email: user.email,
                                countryCode: user.countryCode,
                                phoneNumber: user.phoneNumber,
                                role: user.role
                            }
                        });
                    });

                    response.status(200).send({ message: "User was registered successfully!" });
                });

            });
        });

    })

}

/***************Create new account and verify it via sms *************/
// Display a form that allows users to sign up for a new account
exports.showCreate = function (request, response) {
    response.render('auth/new', {
        title: 'Create User Account',
        // include any errors (success messages not possible for view)
        errors: request.flash('errors'),
    });
};

// create a new user based on the form submission
exports.create = function (request, response) {
    const params = request.body;

    // Create a new user based on form parameters
    const user = new User({
        fullName: params.fullName,
        email: params.email,
        phoneNumber: params.phoneNumber,
        password: params.password,
        countryCode: params.countryCode,
    });

    user.save(function (err, doc) {
        if (err) {
            // To improve on this example, you should include a better
            // error message, especially around form field validation. But
            // for now, just indicate that the save operation failed
            request.flash('errors', 'There was a problem creating your'
                + ' account - note that all fields are required. Please'
                + ' double-check your input and try again.');

            response.redirect('/auth');
        } else {
            // If the user is created successfully, send them an account
            // verification token
            user.sendAuthyToken(function (err) {
                if (err) {
                    request.flash('errors', 'There was a problem sending '
                        + 'your token - sorry :(');
                }

                // Send to token verification page
                response.redirect('/auth/' + doc._id + '/verify');
            });
        }
    });
};

// Display a form that allows users to enter a verification token
exports.showVerify = function (request, response) {
    response.render('/auth/verify', {
        title: 'Verify Phone Number',
        // include any errors
        errors: request.flash('errors'),
        // success messsages
        successes: request.flash('successes'),
        // Include database ID to include in form POST action
        id: request.params.id,
    });
};

// Handle submission of verification token
exports.verify = function (request, response) {
    let user = {};

    // Load user model
    User.findById(request.params.id, function (err, doc) {
        if (err || !doc) {
            return die('User not found for this ID.');
        }

        // If we find the user, let's validate the token they entered
        user = doc;
        user.verifyAuthyToken(request.body.code, postVerify);
    });

    // Handle verification response
    function postVerify(err) {
        if (err) {
            return die('The token you entered was invalid - please retry.');
        }

        // If the token was valid, flip the bit to validate the user account
        user.verified = true;
        user.save(postSave);
    }

    // after we save the user, handle sending a confirmation
    function postSave(err) {
        if (err) {
            return die('There was a problem validating your account '
                + '- please enter your token again.');
        }

        // Send confirmation text message
        const message = 'You did it! Signup complete :)';
        user.sendMessage(message, function () {
            // show success page
            request.flash('successes', message);
            response.redirect(`/auth/${user._id}`);
        }, function (err) {
            request.flash('errors', 'You are signed up, but '
                + 'we could not send you a message. Our bad :(');
        });
    }

    // respond with an error
    function die(message) {
        request.flash('errors', message);
        response.redirect('/auth/' + request.params.id + '/verify');
    }
};

// Resend a code if it was not received
exports.resend = function (request, response) {
    // Load user model
    User.findById(request.params.id, function (err, user) {
        if (err || !user) {
            return die('User not found for this ID.');
        }

        // If we find the user, let's send them a new code
        user.sendAuthyToken(postSend);
    });

    // Handle send code response
    function postSend(err) {
        if (err) {
            return die('There was a problem sending you the code - please '
                + 'retry.');
        }

        request.flash('successes', 'Code re-sent!');
        response.redirect('/auth/' + request.params.id + '/verify');
    }

    // respond with an error
    function die(message) {
        request.flash('errors', message);
        response.redirect('/auth/' + request.params.id + '/verify');
    }
};

// Show details about the user
exports.showUser = function (request, response, next) {
    // Load user model
    User.findById(request.params.id, function (err, user) {
        if (err || !user) {
            // 404
            return next();
        }

        response.render('/auth/show', {
            title: 'Hi there ' + user.fullName + '!',
            user: user,
            // any errors
            errors: request.flash('errors'),
            // any success messages
            successes: request.flash('successes'),
        });
    });
};

/***********forgot and reset password *************/
//Display a form that allows users to enter an email address and send link to that email
exports.forgotPassword = function (request, response) {
    const email = request.body.email;

    if (!email) {
        return response.status(400).json({ error: 'You must enter an email address.' });
    }
    
    //Load user by email
    User.findOne({ email }, (err, existingUser) => {
        if (err || existingUser === null) {
            //not exist
            return response.status(400).json({
                error:
                    'Your request could not be processed as entered. Please try again.'
            });
        }

        //create reset token
        crypto.randomBytes(48, (err, buffer) => {
            const resetToken = buffer.toString('hex');
            if (err) {
                return response.status(400).json({
                    error: 'Your request could not be processed. Please try again.'
                });
            }

            //save the resettoken and expiration date.
            existingUser.resetPasswordToken = resetToken;
            existingUser.resetPasswordExpires = Date.now() + 3600000;

            existingUser.save(async err => {
                if (err) {
                    return response.status(400).json({
                        error: 'Your request could not be processed. Please try again.'
                    });
                }

                //handle the response
                await mailgun.sendEmail(existingUser.email, 'reset', request.headers.host, resetToken);                response.status(200).json({
                    success: true,
                    message:
                        'Please check your email for the link to reset your password.'
                });
            });
        });
    });
}

//Handle reset password with reset token 
exports.resetWithToken = function (request, response) {
    const password = request.body.password;

    //empty password
    if (!password) {
        return response.status(400).json({ error: 'You must enter a password.' });
    }

    //Load the user with the current resetPasswordToken
    User.findOne(
        {
            resetPasswordToken: request.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        },
        (err, resetUser) => {
            //expriation
            if (!resetUser) {
                return response.status(400).json({
                    error:
                        'Your token has expired. Please attempt to reset your password again.'
                });
            }
            //calculate the hash of the password from the reset token.
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(request.body.password, salt, (err, hash) => {
                    if (err) {
                        return response.status(400).json({
                            error:
                                'Your request could not be processed as entered. Please try again.'
                        });
                    }
                    request.body.password = hash;

                    resetUser.password = request.body.password;
                    resetUser.resetPasswordToken = undefined;
                    resetUser.resetPasswordExpires = undefined;

                    // reset user password to database
                    resetUser.save(async err => {
                        if (err) {
                            return response.status(400).json({
                                error:
                                    'Your request could not be processed as entered. Please try again.'
                            });
                        }

                        //send email for confirmation
                        await mailgun.sendEmail(resetUser.email, 'reset-confirmation');                        //handle the response
                        response.status(200).json({
                            success: true,
                            message:
                                'Password changed successfully. Please login with your new password.'
                        });
                    });
                });
            });
        }
    );

}

//Update password with new password and token.
exports.reset = function (request, response) {
    const email = request.user.email;
    const password = request.body.password;

    //empty password
    if (!password) {
        return response.status(400).json({ error: 'You must enter a password.' });
    }

    //Load the user with the email.
    User.findOne({ email }, (err, existingUser) => {

        //non existing user
        if (err || existingUser === null) {
            return response.status(400).json({
                error:
                    'Your request could not be processed as entered. Please try again.'
            });
        }

        //generate hash of the password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(request.body.password, salt, (err, hash) => {
                if (err) {
                    return response.status(400).json({
                        error:
                            'Your request could not be processed as entered. Please try again.'
                    });
                }
                request.body.password = hash;

                existingUser.password = request.body.password;

                // save the current password to database.
                existingUser.save(async err => {
                    if (err) {
                        return response.status(400).json({
                            error:
                                'Your request could not be processed as entered. Please try again.'
                        });
                    }

                    await mailgun.sendEmail(existingUser.email, 'reset-confirmation');                    
                    response.status(200).json({
                        success: true,
                        message:
                            'Password changed successfully. Please login with your new password.'
                    });
                });
            });
        });
    });
}