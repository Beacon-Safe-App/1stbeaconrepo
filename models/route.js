const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    routeData: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

//This converts our schema to a model
const Route = mongoose.model('Route', routeSchema);

module.exports = Route;