const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
const port = process.env.PORT || 8080;
const router = require('./controllers/beacon');

const emergencyEventController = require('./models/emergencyevent');
const locationController = require('./models/location');
const locationPreferenceController = require('./models/locationpreference');
const notificationController = require('./models/notification');
const routeController = require('./models/route');
const userController = require('./models/user');

const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// MONGODB CONNECTION
const mongoURI = process.env.MONGOURI;

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connection with MongoDB established");
    } catch (err) {
        console.error("Error connecting to MongoDB: ", err);
    }
};

connectToMongo();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.json());

// ROUTES
app.use('/emergencyevent', emergencyEventController);
app.use('/location', locationController);
app.use('/locationpreference', locationPreferenceController);
app.use('/notification', notificationController);
app.use('/route', routeController);
app.use('/user', userController);

app.get('/', (req, res) => {
    res.render('2landing.ejs');
});

app.get('/signin', (req, res) => {
    res.render('signin.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
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

app.post('/signin', async (req, res) => {
    const { phoneNumber } = req.body;
    const user = await User.findOne({ phoneNumber });

    if (user) {
        res.redirect('/map');
    } else {
        res.redirect('/register');
    }
});

app.post('/register', async (req, res) => {
    const { name, email, password, phoneNumber, emergencyContact } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        emergencyContact
    });

    await newUser.save();
    res.redirect('/signin');
});

// PORT LISTENER
app.listen(port, () => {
    console.log(`I am listening on port: ${port}`);
});