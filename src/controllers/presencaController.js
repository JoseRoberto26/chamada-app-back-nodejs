const mongoose = require("mongoose");

const Presenca = mongoose.model("Presenca");

const controller = {
    todasPresencas: (req, res) => {
        Presenca.find({}, function(err, presencas){
             if (err) {
                 res.json({
                   status: "error",
                   message: err
                 })
               }
               res.json({
                 status: "sucesso",
                 message: "Todas as presencas obtidas",
                 data: presencas
               })
         });   
     },
    obterPresencasDaChamada: (req, res) => {
       Presenca.find({
            chamada: req.query.chamada
        }, function(err, presencas){
            if (err) {
                res.json({
                  status: "error",
                  message: err
                })
              }
              res.json({
                status: "sucesso",
                message: "Todas as presencas da chamada obtidas",
                data: presencas
              })
        });   
    },
    alterarPresenca: (req, res) => {
        Presenca.findById(req.query.presenca_id, function(err, presenca){
            if(err){
                res.send(err);
            }
            presenca.presente = !presenca.presente;
            presenca.save(function (err){
                if(err)
                    res.json(err);
                res.json({
                    message: 'Presença alterada',
                    data: presenca
                })
            })
        })
    },
    criarPresenca: async (req, res) => {
        try {
            const checaPresenca = await Presenca.findOne({usuario: req.body.usuario});
            if(checaPresenca != null){
                res.status(500).send("Você já respondeu a essa chamada!");
            }
            const novaPresenca = new Presenca(req.body);
            const result = novaPresenca.save();
            res.send(result);
          } catch (error) {
            res.status(500).send(error);
          }
    }
}

module.exports = controller;

// exports.obterPresencasDaChamada = function(req, res){
//     const presencas = Presenca.find({
//         chamada: req.params.chamada
//     });

//     return res.json(presencas);
// }

// exports.alterarPresenca = function (req, res){
    
//     Presenca.findById(req.params.presenca_id, function(err, presenca){
//         if(err){
//             res.send(err);
//         }
//         presenca.presente = !presenca.presente;
//         chamada.save(function (err){
//             if(err)
//                 res.json(err);
//             res.json({
//                 message: 'Presença alterada',
//                 data: presenca
//             })
//         })
//     })

// }