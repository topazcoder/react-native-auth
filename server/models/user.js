const Mongoose = require('mongoose');
const { Schema } = Mongoose;
const bcrypt = require('bcryptjs')

const keys = require('../config/keys');
// Create authenticated Authy and Twilio API clients
const { authyKey, accountSid, authToken, twilioNumber} = keys.twilio;

// now, since I have no authyKey and twilio key, I can't use this property.
const authy = require('authy')(authyKey);
const twilioClient = require('twilio')(accountSid, authToken);
const SALT_WORK_FACTOR = 10;

//User Schema
const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        min: 3,
        max: 50,
        unique: true
    },
    email: {
        type: String,
        required: () => {
            return this.provider !== 'email' ? false : true;
        },
        min: 4,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6

    },
    countryCode: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    authyId: String,
    provider: {
        type: String,
        required: true,
        default: 'email'
    },
    role: {
        type: String,
        default: 'ROLE_MEMBER',
        enum: ['ROLE_MEMBER', 'ROLE_ADMIN']
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

// Middleware executed before save - hash the user's password
UserSchema.pre('save', function(next) {
    const self = this;

    // only hash the password if it has been modified (or is new)
    if (!self.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(self.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            self.password = hash;
            next();
        });
    });
});

// Test candidate password
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    const self = this;
    bcrypt.compare(candidatePassword, self.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Send a verification token to this user
UserSchema.methods.sendAuthyToken = function (cb) {
    var self = this;

    if (!self.authyId) {
        // Register this user if it's a new user
        authy.register_user(self.email, self.phoneNumber, self.countryCode,
            function (err, response) {
                if (err || !response.user) return cb.call(self, err);
                self.authyId = response.user.id;
                self.save(function (err, doc) {
                    if (err || !doc) return cb.call(self, err);
                    self = doc;
                    sendToken();
                });
            });
    } else {
        // Otherwise send token to a known user
        sendToken();
    }

    // With a valid Authy ID, send the 2FA token for this user
    function sendToken() {
        authy.request_sms(self.authyId, true, function (err, response) {
            cb.call(self, err);
        });
    }
};

// Test a 2FA token
UserSchema.methods.verifyAuthyToken = function (otp, cb) {
    const self = this;
        
    authy.verify(self.authyId, otp, function (err, response) {
        console.log("verifyAuthyToken===>", err, response);
        cb.call(self, err, response);
    });
};

// Send a text message via twilio to this user
UserSchema.methods.sendMessage =
    function (message, successCallback, errorCallback) {
        const self = this;
        const toNumber = `+${self.countryCode}${self.phoneNumber}`;
        twilioClient.messages.create({
            to: toNumber,
            from: twilioNumber,
            body: message,
        }).then(function () {
            successCallback();
        }).catch(function (err) {
            console.log("error:", err);
            errorCallback(err);
        });
    };


module.exports = Mongoose.model('User', UserSchema);