import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import './login.css';
import Cadastro from './Cadastro';
import './cadastro.css';
import TelaInicial from './TelaInicial';
import './telaInicial.css';
import Denuncia from './Denuncia';
import './denuncia.css';
import PerfilUsuario from './PerfilUsuario';
import './perfilUsuario.css';
import AdminPainel from './AdminPainel';
import './adminPainel.css';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/tela-inicial' element={<TelaInicial />} />
        <Route path='/nova-denuncia' element={<Denuncia />} />
        <Route path='/minhas-denuncias' element={<PerfilUsuario />} />
        <Route path='/admin' element={<AdminPainel />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
