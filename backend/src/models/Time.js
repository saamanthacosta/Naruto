const mongoose = require('mongoose');
const Ninja = require('./Ninja');

const TimeSchema = new mongoose.Schema({
    Ninjas: [Ninja]
})

module.exports = mongoose.model('Time', TimeSchema);