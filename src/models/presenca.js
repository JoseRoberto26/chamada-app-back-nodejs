const mongoose = require('mongoose');
const PresencaSchema = mongoose.Schema({
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    chamada:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chamada'
    }
});

mongoose.model("Presenca", PresencaSchema);