const mongoose = require('mongoose');
const Jutsu = require('./Jutsu');
const Aldeia = require('./Aldeia');
const Time = require('./Time');
const Missao = require('./Missao');

const KageSchema = new mongoose.Schema({
    Nome: String,
    Email: String,
    Senha: String,
    Aldeia: Aldeia,
    Jutsu: {
        type: String,
        enum : Jutsu
    },
    KekkeiGenkai: String,
    AtuouCom: Time,
    Missoes: [Missao]
})

module.exports = mongoose.model('Kage', KageSchema);