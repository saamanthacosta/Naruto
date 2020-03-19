const VerificaObjetos = require('../../utilitarios/VerificaObjetos');

module.exports = class Ninja {

    constructor(id, nome, email, senha, aldeia, perfil, jutsu, kekkeiGenkai) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._aldeia = VerificaObjetos.aldeiaEhValida(aldeia) ? aldeia : null;
        this._perfil = VerificaObjetos.perfilEhValido(perfil) ? perfil : null;
        this._jutsu = VerificaObjetos.jutsuEhValido(jutsu) ? jutsu : null;
        this._kekkeiGenkai = kekkeiGenkai;
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get email() {
        return this._email;
    }

    get senha() {
        return this._senha;
    }

    get aldeia() {
        return this._aldeia;
    }

    get perfil() {
        return this._perfil;
    }

    get jutsu() {
        return this._jutsu;
    }

    get kekkeiGenkai() {
        return this._kekkeiGenkai;
    }

    set id(id) {
        this._id = id;
    }

    set nome(nome) {
        this._nome = nome;
    }

    set email(email) {
        this._email = email;
    }

    set senha(senha) {
        this._senha = senha;
    }

    set aldeia(aldeia) {
        VerificaObjetos.aldeiaEhValida(aldeia) ? this._aldeia = aldeia : null;
    }

    set perfil(perfil) {
        VerificaObjetos.perfilEhValido(perfil) ? this._perfil = perfil : null;
    }

    set jutsu(jutsu) {
        VerificaObjetos.jutsuEhValido(jutsu) ? this._jutsu = jutsu : null;
    }

    set kekkeiGenkai(kekkeiGenkai) {
        this._kekkeiGenkai = kekkeiGenkai;
    }
}