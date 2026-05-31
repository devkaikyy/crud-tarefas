const URL_API = 'https://crud-tarefas-4y7u.onrender.com'

export async function BancoGet(){
   const response = await fetch(`${URL_API}/tarefas`)
   return response.json()
}

export async function BancoPut(id, nome, descricao, horas) {
   const res = await fetch(`${URL_API}/tarefas/${id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         nome,
         descricao,
         horas
      })
   })
   return res.json()
}

export async function BancoPost(nome, descricao, horas){

    const response = await fetch(`${URL_API}/tarefas`, {

        method: 'POST',
    
        headers: {
            'Content-Type': 'application/json'
        },
    
        body: JSON.stringify({
            nome,
            descricao,
            horas
        })
    })

    return response.json()

}

export async function BancoDelete(id){
    const response = await fetch(`${URL_API}/tarefas/${id}`, {
        method: 'DELETE'
    })

    return response.json()

}