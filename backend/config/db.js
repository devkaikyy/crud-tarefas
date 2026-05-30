const mongoose = require('mongoose')

function connectDB(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/banco02')
        console.log("Banco mongodb conectado!")
    } catch(erro) {
        console.log("erro ao si conectar no banco!")
        console.log(erro)
    }
}

module.exports = connectDB