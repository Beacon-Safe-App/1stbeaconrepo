const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationPreferenceSchema = new Schema({
    id: { type: UUID, required: true },
    userId: {type: Foreign Key to User, required: true},
    locationType: { type: Enum, required: true },
    avoid: { type: Boolean, required: true },
});

//This converts our schema to a model
const LocationPreference = mongoose.model('Location Preference', locationPreferenceSchema);

module.exports = LocationPreference;