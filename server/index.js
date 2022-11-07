require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const routes = require('./routes');
const session = require('express-session');
const flash = require('express-flash');

const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// flash 
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "Parchuk is a super star",
        cookie: {
            secure: false,
            maxAge: 1000 * 5
        }
    })
)
app.use(flash());

//connect to local MongoDB
const db = require('./models');
const User = db.user;
db.mongoose
    .connect(`mongodb://${keys.database.HOST}:${keys.database.PORT}/${keys.database.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to local MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

app.use(flash());
app.use(routes);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.json({message: "Welcome to modden backend server application"});
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


function initial() {
    User.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new User({
                fullName: "Parchuk Dmytro",
                email: "parchukdmytro1@gmail.com",
                password:"modden",
                countryCode: "1",
                phoneNumber:"23-456-789",
            }).save(err => {
                if (err) console.log("error", err);
                console.log("added user");
            })
        }
    })
}  


