import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !senha) {
      alert('Preencha todos os campos!');
      return;
    }

    // Simulação de login bem-sucedido
    console.log('Login realizado:', { email });
    localStorage.setItem('usuario', email);
    
    // Redireciona para a tela inicial
    navigate('/tela-inicial');
  };

  return(
    <>
    <div className="container">
      <h1>Bem vindo!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className="input" 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> 
        <input 
          className="input" 
          type="password" 
          placeholder="Senha" 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button id="botao" type='submit'>Entrar</button>
      </form>
      <Link to="/cadastro" className='cadastro-link'>Cadastre-se aqui</Link>
    </div>
    </>
   
  )
} 