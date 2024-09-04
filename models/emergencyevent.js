const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emergencyEventSchema = new Schema({
    id: { type: UUID, required: true },
    userId: {type: Foreign Key to User, required: true},
    eventType: {type: Enum, required: true},
    timeStamp: {type: DateTime, required: true},
    location: {type: String, required: true},
    status: {type: Enum, required: true},
});

//This converts our schema to a model
const EmergencyEvent = mongoose.model('Emergency Event', emergencyEventSchema);

module.exports = EmergencyEvent;