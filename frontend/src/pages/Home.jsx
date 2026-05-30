
function Home({ nome, descricao, horas, setNome, setDescricao, setHoras, handAdd, deletarId, tarefas, msg, msgDelete, Atualizar }) {
  return (
    <>
      <div className="container mt-3">
          {msg && <div className="alert alert-success">{msg}</div>}
           {msgDelete && <div className="alert alert-danger">{msgDelete}</div>}
        <form onSubmit={handAdd} className='form-control mt-4 bg-dark'>
          <input type="text"
            placeholder="digite o nome da tarefa..."
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className='form-control mt-4' />

          <input type="text"
            placeholder="digite a descrição da tarefa..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className='form-control mt-4' />

          <input type="text"
            placeholder="digite as horas da tarefa..."
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
            className='form-control mt-4' />

          <button className='btn btn-primary mt-4' type="submit">Enviar</button>
        </form>
       <div className="container mt-5">
  <div className="row g-4">
    {tarefas?.map((tarefa) => (
      <div key={tarefa._id} className="col-12 col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
           <p className="card-text">
            <strong>Nome</strong> {tarefa.nome}
           </p>

            <p className="card-text">
              <strong>Descrição:</strong> {tarefa.descricao}
            </p>

            <p className="card-text">
              <strong>Horas:</strong> {tarefa.horas}
            </p>

            <div className="d-flex gap-2">
              <button
                className="btn btn-danger"
                onClick={() => deletarId(tarefa._id)}
              >
                Deletar
              </button>

              <button
                className="btn btn-success"
                onClick={() => Atualizar(tarefa)}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>


    </>
  )
}

export default Home