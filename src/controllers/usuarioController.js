const mongoose = require('mongoose');


const Usuario = mongoose.model('Usuario');


module.exports = {
    async index(req, res){
       const usuario = await Usuario.findOne({"matricula": req.params.matricula, "senha": req.params.senha});

       return res.json(usuario);
       },
};