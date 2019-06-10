const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario");

exports.obterUsuarios = function(req, res){
  const usuarios = Usuario.get(function(err, usuarios){
    if(err){
            res.json({
                status: "error",
                message: err
            })
        }
        res.json({
            status:"sucesso",
            message:"Todas as chamadas obtidas",
            data: usuarios
        })
  })
}

(exports.cadastrar = function(req, res) {
  const checaUsuario = Usuario.findOne({ matricula: req.body.matricula });
  if (checaUsuario != null) {
    try {
      const novoUsuario = new Usuario(req.body);
      const result = novoUsuario.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  else{
      res.status(500).send("Já existe usuário cadastrado");
  }
}),
  (exports.index = function(req, res) {
    const usuario = Usuario.findOne({
      matricula: req.params.matricula,
      senha: req.params.senha
    });

    return res.json(usuario);
  });
