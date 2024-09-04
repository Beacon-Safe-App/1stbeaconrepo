const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    locationPreferences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LocationPreference' }],
    emergencyContact: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

//This converts our schema to a model
const User = mongoose.model('User', userSchema);

module.exports = User;