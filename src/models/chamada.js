const mongoose = require('mongoose');
const ChamadaSchema = mongoose.Schema({
    captcha:{
        type: String,
        required: true
    },
    hasExpired:{
        type: Boolean,
        required: true,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model("Chamada", ChamadaSchema);