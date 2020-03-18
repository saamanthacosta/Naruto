const mongoose = require('mongoose');
const Jutsu = require('./Jutsu');
const Time = require('./Time');
const Aldeia = require('./Aldeia');

const NinjaSchema = new mongoose.Schema({
    Nome: String,
    Email: String,
    Senha: String,
    Aldeia: {
        type: String,
        enum: Aldeia
    },
    Jutsu: {
        type: String,
        enum: Jutsu
    },
    KekkeiGenkai: String,
    AtuouCom: Time,
    Missoes: [Missao],
    Avaliacao: Number
})

module.exports = mongoose.model('Ninja', NinjaSchema);