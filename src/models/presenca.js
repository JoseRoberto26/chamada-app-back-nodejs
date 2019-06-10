const mongoose = require('mongoose');
const PresencaSchema = mongoose.Schema({
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    chamada:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chamada'
    },
    presente:{
        type: Boolean,
        required: true
    }
});

mongoose.model("Presenca", PresencaSchema);