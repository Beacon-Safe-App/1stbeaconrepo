const express = require('express');
const router = express.Router();

//MODELS
const EmergencyEvent = require("../models/emergencyevent.js");
const Location = require("../models/location.js");
const LocationPreference = require("../models/locationpreference.js");
const Notification = require("../models/notification.js");
const Route = require("../models/route.js");
const User = require("../models/user.js");

module.exports = router;