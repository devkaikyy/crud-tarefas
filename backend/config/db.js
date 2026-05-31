const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
       
        console.log("Banco mongodb conectado!")
    } catch (erro) {
        console.log("Erro ao se conectar no banco!")
        console.log(erro)
    }
}

module.exports = connectDB