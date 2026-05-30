import { Routes, Route, Link } from 'react-router-dom'
import Tarefas from './pages/Tarefas'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <div className="navbar navbarr-expand-lg bg-dark">
       <div className='container'>
         <h2 className='navbar-brand text-white'>MeuTarefas</h2>

        <nav className="d-flex gap-4">
          <Link className="text-white text-decoration-none" to="/">Home</Link>
          <Link className="text-white text-decoration-none" to="/blog">Sobre</Link>
        </nav>
       </div>
      </div>

      <Routes>
        <Route path="/" element={<Tarefas />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App