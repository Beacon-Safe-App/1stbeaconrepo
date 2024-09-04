const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    id: { type: UUID, required: true },
    userId: {type: Foreign Key to User, required: true},
    message: {type: String, required: true},
    type: {type: Enum, required: true},
    isRead: {type: Boolean, required: true},
    createdAt: {type: DateTime, required: true},
});

//This converts our schema to a model
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;