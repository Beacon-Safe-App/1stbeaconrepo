const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['hospital', 'police', 'safehouse'], required: true },
    address: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    hours: { type: String, required: true },
    is24Hour: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

//This converts our schema to a model
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;