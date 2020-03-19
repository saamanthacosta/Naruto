const Ninja = require('../models/beans/Ninja');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(request, response) {
        const ninjas = await Ninja.find();

        return response.json(ninjas);
    },

    async show(request, response) {
        const _id = request.params.id;
        const ninja = await Ninja.findOne({ _id });
        return response.json(ninja);
    },

    async store(request, response) {
        const { Nome, Email, Senha, Aldeia, Jutsu, KekkeiGenkai, AtuouCom, 
            Missoes, Avaliacao } = request.body;

        let ninja = await Ninja.findOne({ nome });

        if (!ninja) {
            ninja = await Ninja.create({
                Nome, Email, Senha, Aldeia, Jutsu, KekkeiGenkai, 
                AtuouCom, Missoes, Avaliacao
            });
        };

        return response.json(ninja);
    },

    // async update(request, response) {
    //     const { _id, nome, nomeCompleto, codinome, personalidade, terraNatal, especie, editora, 
    //         grupos, fotos, amigos, inimigos, poderes, fraquezas } = request.body;

    //     let heroina = await Heroina.findOne({ _id });

    //     if (heroina) {
    //         const codinomeArray = parseStringAsArray(codinome);
    //         const gruposArray = parseStringAsArray(grupos);
    //         const fotosArray = parseStringAsArray(fotos);
    //         const amigosArray = parseStringAsArray(amigos);
    //         const inimigosArray = parseStringAsArray(inimigos);
    //         const poderesArray = parseStringAsArray(poderes);
    //         const fraquezasArray = parseStringAsArray(fraquezas);
            
    //         heroina = await Heroina.updateOne({
    //             nome,
    //             codinome: codinomeArray,
    //             nomeCompleto,
    //             terraNatal,
    //             personalidade,
    //             especie,
    //             editora,
    //             amigos: amigosArray,
    //             inimigos: inimigosArray,
    //             poderes: poderesArray,
    //             fraquezas: fraquezasArray,
    //             grupos: gruposArray,
    //             fotos: fotosArray
    //         })
    //         response.sendStatus(200);
    //     } else {
    //         response.sendStatus(404);
    //     }

    // },
    // async destroy(request, response) {
    //     const _id = request.params.id;
    //     const heroina = await Heroina.findOne({ _id });
    //     await heroina.remove();
    //     response.sendStatus(200);
    // }
}