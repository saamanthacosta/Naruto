const VerificaObjetos = require('../../utilitarios/VerificaObjetos');

module.exports = class Ninja {

    constructor(id, preco, data, nivel, detalhes, status, aprovadaPor, solicitadaPor) {
        this._id = id;
        this._preco = preco;
        this._data = data;
        this._nivel = VerificaObjetos.nivelEhValido(nivel) ? nivel : null;
        this._detalhes = detalhes;
        this._status = VerificaObjetos.statusEhValido(status) ? status : null;
        this._aprovadaPor = aprovadaPor;
        this._solicitadaPor = solicitadaPor;
    }

    get id() {
        return this._id;
    }

    get preco() {
        return this._preco;
    }

    get data() {
        return this._data;
    }

    get nivel() {
        return this._nivel;
    }

    get detalhes() {
        return this._detalhes;
    }

    get status() {
        return this._status;
    }

    get aprovadaPor() {
        return this._aprovadaPor;
    }

    get solicitadaPor() {
        return this._solicitadaPor;
    }

    set id(id) {
        this._id = id;
    }

    set preco(preco) {
        this._preco = preco;
    }

    set data(data) {
        this._data = data;
    }

    set nivel(nivel) {
        this._nivel = nivel;
    }

    set detalhes(detalhes) {
        VerificaObjetos.detalhesEhValida(detalhes) ? this._detalhes = detalhes : null;
    }

    set status(status) {
        VerificaObjetos.statusEhValido(status) ? this._status = status : null;
    }

    set aprovadaPor(aprovadaPor) {
        VerificaObjetos.aprovadaPorEhValido(aprovadaPor) ? this._aprovadaPor = aprovadaPor : null;
    }

    set solicitadaPor(solicitadaPor) {
        this._solicitadaPor = solicitadaPor;
    }
}