const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    id: { type: UUID, required: true },
    name: { type: String, required: true },
    type: { type: Enum, required: true },
    address: { type: String, required: true },
    latitude: { type: Float, required: true },
    longitude: { type: Float, required: true },
    phoneNumber: { type: String, required: true },
    hours: { type: String, required: true },
    is24Hour: { type: Boolean, required: true },
    createdAt: { type: DateTime, required: true },
    updatedAt: { type: DateTime, required: true },
});

//This converts our schema to a model
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;