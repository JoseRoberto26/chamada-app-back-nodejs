const mongoose = require('mongoose');
const UsuarioSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    matricula:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    isAluno:{
        type: Boolean,
        required: true
    }
});


mongoose.model("Usuario", UsuarioSchema);