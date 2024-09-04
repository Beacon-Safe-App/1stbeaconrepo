const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emergencyEventSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    eventType: { type: String, enum: ['fire', 'medical', 'police'], required: true },
    timeStamp: { type: Date, default: Date.now, required: true },
    location: { type: String, required: true },
    status: { type: String, enum: ['active', 'resolved', 'pending'], required: true },
});

//This converts our schema to a model
const EmergencyEvent = mongoose.model('Emergency Event', emergencyEventSchema);

module.exports = EmergencyEvent;