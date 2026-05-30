
function Blog() {
    return (
        <>
           <div className="container my-5 text-white">
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8">

      <h2 className="text-center fw-bold mb-4">
        Sobre o Projeto
      </h2>

      <p className="text-center">
        Este projeto foi desenvolvido com o objetivo de facilitar o
        gerenciamento de tarefas, permitindo o cadastro, a edição,
        a visualização e a exclusão de atividades de forma prática e intuitiva.
      </p>

      <p className="text-center">
        O front-end foi construído com <strong>React</strong> e <strong>Bootstrap</strong>,
        garantindo uma interface responsiva e moderna.
      </p>

      <p className="text-center">
        No back-end foi utilizado <strong>Node.js</strong> com o framework <strong>Express</strong>,
        responsável por gerenciar as rotas, requisições e a comunicação com o banco de dados.
      </p>

      <p className="text-center">
        Os dados são armazenados em <strong>MongoDB</strong>, seguindo o padrão CRUD
        (Create, Read, Update e Delete), permitindo uma integração completa entre front-end
        e back-end.
      </p>

    </div>
  </div>
</div>
        </>
    )
}

export default Blog