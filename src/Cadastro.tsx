import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './cadastro.css';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        // Simulação de cadastro bem-sucedido
        console.log('Cadastro realizado:', { nome, telefone, email });
        alert(`Cadastro realizado com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`);
        
        // Redireciona para o login
        navigate('/login');
    };

    return (
        <>
        <div className="container">
            <h2>Cadastre-se</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Nome" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Telefone com DDD" 
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                />
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
                <input 
                    className="input" 
                    type="password" 
                    placeholder="Confirme sua Senha" 
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    required
                />
                <button id="botao" type='submit'>Cadastrar</button>
            </form>
            <Link to="/login" className="login-link">Entre aqui</Link>
        </div>
        </>
    )
    
}