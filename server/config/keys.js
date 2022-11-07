module.exports = {
    app: {
        name: "modden",
        apiURL: `${process.env.BASE_API_URL}`,
    },
    port: process.env.PORT || 5000,
    jwt: {
        secret: process.env.JWT_SECRET,
        tokenLife: '7d'
    },
    database: {
        // url: process.env.MONGO_URI
        HOST: "localhost",
        PORT: 27017,
        DB: "modden_db"      
    },
    twilio: {
        authyKey: process.env.AUTHY_API_KEY,
        accountSid:process.env.TWILIO_ACCOUNT_SID,
        authToken:process.env.TWILIO_AUTH_TOKEN,
        twilioNumber: process.env.TWILIO_NUMBER
    },
    sendgrid:{
        apiKey: process.env.SENDGRID_API_KEY,
        sender: process.env.SENDGRID_SENDER,
    },
    mailchimp: {
        key: process.env.MAILCHIMP_KEY,
        listKey: process.env.MAILCHIMP_LIST_KEY
    },
    mailgun: {
        key: process.env.MAILGUN_KEY,
        domain: process.env.MAILGUN_DOMAIN,
        sender: process.env.MAILGUN_SENDER
    },
}