const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/db')
const router = require('./routes/RotasBanco')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/tarefas', router)
connectDB()


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})