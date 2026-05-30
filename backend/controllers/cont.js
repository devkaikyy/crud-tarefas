const Banco = require('../models/Banc2')

exports.BancoGet = async (req, res) => {
    try {
        const dados = await Banco.find()
        res.json(dados)
    } catch(error) {
        res.status(500).json({
            erro: error.message
        })
    }
}

exports.BancoPost = async (req, res) => {
    try {
        const dados = await Banco.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            horas: req.body.horas

            
           
        })

        res.status(201).json({
            mensagem: "Tarefa cadastrada com sucesso!",
            dados
        });
    } catch (error) {
        res.status(500).json({
            erro: error.message
            
        })
    }
}

exports.BancoDelete = async (req, res) => {
     try {
    const { id } = req.params;

    const deletado = await Banco.findByIdAndDelete(id);

    if (!deletado) {
      return res.status(404).json({
        message: "Tarefa não encontrada"
      });
    }

    return res.json({
      message: "Tarefa deletada com sucesso"
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

exports.BancoPut = async (req, res) => {
    const {id} = req.params

    const atualizarTarefa = await Banco.findByIdAndUpdate(
        id,
        {
            nome: req.body.nome,
            descricao: req.body.descricao,
            horas: req.body.horas
        },
         { returnDocument: 'after' }

        )
        res.json(atualizarTarefa)
}