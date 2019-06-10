const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario");


const controller = {
  obterUsuarios: (req, res) => {
    Usuario.find({isAluno: true}, function (err, usuarios) {
      if (err) {
        res.json({
          status: "error",
          message: err
        })
      }
      res.json({
        status: "sucesso",
        message: "Todas as chamadas obtidas",
        data: usuarios
      })
    })
  },
  cadastrar: async (req, res) => {
    console.log("LOG RES: " + JSON.stringify(req.body, null, 2))

    const checaUsuario = await Usuario.findOne({
      matricula: req.body.matricula
    });

    console.log(JSON.stringify(checaUsuario, null, 2))

    if (checaUsuario == null) {
      new Usuario(req.body).save().then((u => {
        return res.send(u);
      })).catch(e => res.status(500).send(e));
    } else {
      res.status(500).send("Já existe usuário cadastrado");
    }
  },
  logar: async (req, res) => {
    const usuario = await Usuario.findOne({
      matricula: req.query.matricula,
      senha: req.query.senha
    });
    return res.json(usuario);
  }
};

// (exports.obterUsuarios = function(req, res){
//  Usuario.find({}, function(err,  usuarios){
//     if(err){
//             res.json({
//                 status: "error",
//                 message: err
//             })
//         }
//         res.json({
//             status:"sucesso",
//             message:"Todas as chamadas obtidas",
//             data: usuarios
//         })
//   })
// })

// (exports.cadastrar = function(req, res) {
// const checaUsuario = Usuario.findOne({ matricula: req.body.matricula });
// if (checaUsuario != null) {
//   try {
//     const novoUsuario = new Usuario(req.body);
//     const result = novoUsuario.save();
//     res.send(result);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// }
// else{
//     res.status(500).send("Já existe usuário cadastrado");
// }
// }),
//   (exports.index = function(req, res) {
//   const usuario = Usuario.findOne({
//     matricula: req.params.matricula,
//     senha: req.params.senha
//   });

//   return res.json(usuario);
// });
module.exports = controller;