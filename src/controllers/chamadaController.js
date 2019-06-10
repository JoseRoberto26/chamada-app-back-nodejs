const mongoose = require("mongoose");

const Chamada = mongoose.model("Chamada");

const controller = {
    criarChamada: (req, res) => {
        try {
            const novaChamada = new Chamada(req.body);
            const result = novaChamada.save();
            res.send(result);
          } catch (error) {
            res.status(500).send(error);
          }
    },
    obterChamadas: (req, res) => {
        Chamada.find({}, function(err, chamadas){
            if(err){
                res.json({
                    status: "error",
                    message: err
                })
            }
            res.json({
                status:"sucesso",
                message:"Todas as chamadas obtidas",
                data: chamadas
            })
        })
    },
    encerrarChamada: (req, res) => {
        Chamada.findById(req.params.chamada_id, function (err, chamada){
            if(err){
                res.send(err);
            }
            chamada.hasExpired = true;
            chamada.save(function (err){
                if(err)
                    res.json(err);
                res.json({
                    message: 'Chamada finalizada',
                    data: chamada
                })
            })
    
        })
    }
}

// exports.criarChamada = function(req, res) {
//     try {
//         const novaChamada = new Chamada(req.body);
//         const result = novaChamada.save();
//         res.send(result);
//       } catch (error) {
//         res.status(500).send(error);
//       }
// }

// exports.obterChamadas = function(req, res){
//     Chamada.find({}, function(err, chamadas){
//         if(err){
//             res.json({
//                 status: "error",
//                 message: err
//             })
//         }
//         res.json({
//             status:"sucesso",
//             message:"Todas as chamadas obtidas",
//             data: chamadas
//         })
//     })
// }

// exports.encerrarChamada = function(req, res){
//     Chamada.findById(req.params.chamada_id, function (err, chamada){
//         if(err){
//             res.send(err);
//         }
//         chamada.hasExpired = true;
//         chamada.save(function (err){
//             if(err)
//                 res.json(err);
//             res.json({
//                 message: 'Chamada finalizada',
//                 data: chamada
//             })
//         })

//     })
// }

module.exports = controller;