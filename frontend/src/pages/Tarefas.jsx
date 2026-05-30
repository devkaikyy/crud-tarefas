import {BancoGet, BancoPost, BancoDelete, BancoPut} from '../services/api'
import Home from './Home'
import { useState, useEffect } from 'react'

function Taferas(){
   
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [horas, setHoras] = useState('')
    const [editandoId, setEditandoId] = useState(null)
    const [msg, setMsg] = useState("")
    const [msgDelete, setDelete] = useState("")
    const [tarefas, setTarefas] = useState([])

     async function Buscar(){
        const data = await BancoGet()
        setTarefas(data)
     }

     async function handAdd(e) {

        e.preventDefault()
        if(editandoId) {
            await BancoPut(
                editandoId,
                nome,
                descricao,
                horas
            )
            setEditandoId(null)
        } else {

           const resposta = await BancoPost(
                nome,
                descricao,
                horas
            )

            setMsg(resposta.mensagem)

            setTimeout(()=> {
                setMsg("")
            }, 3000)
        }

        setNome('')
        setDescricao('')
        setHoras('')
        Buscar()
     }

     async function deletarId(id) {
        const res = await BancoDelete(id)
        setDelete(res.message)

        setTimeout(()=> {
            setDelete('')
        }, 3000)
        Buscar()
        
     }

     async function Atualizar(tarefa) {
        setNome(tarefa.nome)
        setDescricao(tarefa.descricao)
        setHoras(tarefa.horas)
        setEditandoId(tarefa._id)

        Buscar()
     }

     useEffect(()=>{
        Buscar()
     }, [])


    return (
        <>
        <div>
            <Home
            nome={nome}
            descricao={descricao}
            horas={horas}
            setNome={setNome}
            setDescricao={setDescricao}
            setHoras={setHoras}
            handAdd={handAdd}
            deletarId={deletarId}
            tarefas={tarefas}
            Atualizar={Atualizar}
            msg={msg}
            msgDelete={msgDelete}/>
        </div>
        </>
    )
}

export default Taferas