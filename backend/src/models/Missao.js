const mongoose = require('mongoose');
const Nivel = require('./Nivel');
const Cliente = require('./Cliente');

const MissaoSchema = new mongoose.Schema({
    Preco: Number,
    Cliente: Cliente,
    Data: Date,
    Nivel: {
        type: String,
        enum: Nivel
    },
    Detalhes: String,
    Time: Time
})

module.exports = mongoose.model('Missao', MissaoSchema);