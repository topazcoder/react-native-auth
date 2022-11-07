const keys = require('./keys');

const {apiKey, sender} = keys.sendgrid;
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(apiKey);
// const sendgrid = require('sendgrid')(sender, apiKey);

exports.sendEmail = (recipient, message) => {
    return new Promise((resolve, reject) => {
        const data = {
            to: recipient,
            from: sender,
            subject: message.subject,
            html: message.html
        }
        sendgrid.send(data)
            .then((body) => {

                resolve(body);
            })
            .catch((err) => {
                reject(err);
            })
    })
}
