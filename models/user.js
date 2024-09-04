const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: UUID, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    locationPreferences: { type: Array of LocationPreference, required: true },
    emergencyContact: { type: String, required: true },
    createdAt: { type: DateTime, required: true },
    updatedAt: { type: DateTime, required: true },
});

//This converts our schema to a model
const User = mongoose.model('User', userSchema);

module.exports = User;