const mongoose = require('mongoose')

const Banc2Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    descricao: {
       type: String,
       required: true
    },

    horas: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Banco2", Banc2Schema,)