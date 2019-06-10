const mongoose = require("mongoose");

const Presenca = mongoose.model("Presenca");

exports.obterPresencasDaChamada = function(req, res){
    const presencas = Presenca.find({
        chamada: req.params.chamada
    });

    return res.json(presencas);
}

exports.alterarPresenca = function (req, res){
    
    Presenca.findById(req.params.presenca_id, function(err, presenca){
        if(err){
            res.send(err);
        }
        presenca.presente = !presenca.presente;
        chamada.save(function (err){
            if(err)
                res.json(err);
            res.json({
                message: 'Presença alterada',
                data: presenca
            })
        })
    })

}