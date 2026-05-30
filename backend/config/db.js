const mongoose = require('mongoose')

function connectDB(){
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Banco mongodb conectado!")
    } catch(erro) {
        console.log("erro ao si conectar no banco!")
        console.log(erro)
    }
}

module.exports = connectDB