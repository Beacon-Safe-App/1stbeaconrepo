const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    id: { type: UUID, required: true },
    userId: {type: Foreign Key to User, required: true},
    startLocation: {type: String, required: true},
    endLocation: {type: String, required: true},
    routeData: { type: JSON, required: true },
    createdAt: { type: DateTime, required: true },
});

//This converts our schema to a model
const Route = mongoose.model('Route', routeSchema);

module.exports = Route;