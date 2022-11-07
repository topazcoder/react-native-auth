const keys = require('./keys');
const { key, domain, sender } = keys.mailgun;

const mailgun = require('mailgun-js')({
  apiKey: key,
  domain: domain
});

exports.sendEmail = (recipient, message) => {
  return new Promise((resolve, reject) => {
    const data = {
      from: `<${sender}>`,
      to: recipient,
      subject: message.subject,
      html: message.html
    };

    console.log("---------", data);
    mailgun.messages().send(data, (error, body) => {
      if (error) {
        console.log("error", error);
        reject(error);
      } else {
        console.log("success", body);
        resolve(body);
      }
    });
  });
};
