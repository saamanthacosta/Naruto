const mongoose = require('mongoose');
const Aldeia = require('./Aldeia');
const Jutsu = require('./Jutsu');
const Missao = require('./Missao');
const Avaliacao = require('./Avaliacao');

const ClienteSchema = new mongoose.Schema({
    Nome: String,
    Email: String,
    Senha: String,
    Aldeia: Aldeia,
    Jutsu: {
        type: String,
        enum : Jutsu
    },
    KekkeiGenkai: String,
    Missoes: [Missao],
    Avaliacao: Avaliacao
})

module.exports = mongoose.model('Cliente', ClienteSchema);