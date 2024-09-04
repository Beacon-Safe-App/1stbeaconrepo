const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationPreferenceSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    locationType: { type: String, enum: ['hospital', 'police', 'safehouse'], required: true },
    avoid: { type: Boolean, required: true },
});

//This converts our schema to a model
const LocationPreference = mongoose.model('Location Preference', locationPreferenceSchema);

module.exports = LocationPreference;