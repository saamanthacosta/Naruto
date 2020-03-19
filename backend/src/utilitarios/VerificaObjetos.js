const Aldeia = require('../models/beans/Aldeia');
const Nivel = require('../models/beans/Nivel');
const Jutsu = require('../models/beans/Jutsu');
const Perfil = require('../models/beans/Perfil');
const Status = require('../models/beans/Status');

module.exports = {

    aldeiaEhValida(aldeia) {
        if(Aldeia.includes(aldeia)) {
            return true;
        } else {
            return false;
        }
    },

    jutsuEhValido(jutsu) {
        if (Jutsu.includes(jutsu)) {
            return true;
        } else {
            return false;
        }
    },

    perfilEhValido(perfil) {
        if (Perfil.includes(perfil)) {
            return true;
        } else {
            return false;
        }
    },

    nivelEhValido(nivel) {
        if (Nivel.includes(nivel)) {
            return true;
        } else {
            return false;
        }
    },

    statusEhValido(status) {
        if (Status.includes(status)) {
            return true;
        } else {
            return false;
        }
    }

}