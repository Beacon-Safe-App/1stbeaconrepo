const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const port = process.env.PORT || 8080;
const catalogController = require('./controllers/user');
const bodyParser = require('body-parser');
require('dotenv').config();

//MONGODB CONNECTION
const mongoURI = process.env.MONGOURI;

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI);
        console.log("connection with mongodb established");
    } catch (err) {
        console.error("error connecting to mongodb: ", err);
    }
};

connectToMongo();

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.json());

//ROUTES
app.get('/', (req, res) => {
    res.render('2landing.ejs');
});

app.use('/emergencyevent', emergencyEventController);
app.use('/location', locationController);
app.use('/locationpreference', locationPreferenceController);
app.use('/notification', notificationController);
app.use('/route', routeController);
app.use('/user', userController);

app.get('/registration', (req, res) => {
    res.render('0registration.ejs');
});

app.get('/preferences', (req, res) => {
    res.render('1preferences.ejs');
});

app.get('/map', (req, res) => {
    res.render('3map.ejs');
});

app.get('/route', (req, res) => {
    res.render('4route.ejs');
});

app.get('/crimedocumentation', (req, res) => {
    res.render('5crimedocumentation.ejs');
});

app.get('/resources', (req, res) => {
    res.render('6resources.ejs');
});

//PORT LISTENER
app.listen(port, () => {
    console.log(`I am listening on port: ${port}`)
});