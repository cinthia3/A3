import { useState } from 'react';
import { Link } from 'react-router-dom';
import './telaInicial.css';

export default function TelaInicial() {
  const [pesquisa, setPesquisa] = useState<string>('');
  const nomeUsuario = "Usuário";

  const handleBuscar = () => {
    console.log('Buscando:', pesquisa);
    // Implementar lógica de busca aqui
  };

  const sair = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    window.location.href = "/login";
  };

  return (
    <div className="pagina-inicial">
      <header className="header-inicial">
        <div className="header-content">
          <h1 className="titulo-portal">Portal de Denúncias</h1>
          <div className="usuario-info">
            <span className="nome-usuario">Olá, {nomeUsuario}</span>
            <button className="btn-sair-user" onClick={sair}>Sair</button>
          </div>
        </div>
      </header>

      <main className="conteudo-principal">
        <section className="hero-section">
          <h2>Denuncie Golpes e Fraudes</h2>
          <p className="subtitulo">
            Sua denúncia é importante para combater fraudes e proteger outras pessoas.
          </p>
        </section>

        <section className="pesquisa-section">
          <div className="pesquisa-box">
            <input 
              className="input-pesquisa" 
              type="text" 
              placeholder="Pesquisar denúncias por tipo, palavra-chave..." 
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleBuscar()}
            />
            <button className="botao-buscar" type="button" onClick={handleBuscar}>
              🔍 Buscar
            </button>
          </div>
        </section>

        <section className="acoes-section">
          <div className="cards-container">
            <Link to="/nova-denuncia" className="card-acao">
              <div className="card-icone">📝</div>
              <h3>Fazer Denúncia</h3>
              <p>Registre um novo caso de golpe ou fraude</p>
            </Link>

            <Link to="/minhas-denuncias" className="card-acao">
              <div className="card-icone">📋</div>
              <h3>Minhas Denúncias</h3>
              <p>Acompanhe o status das suas denúncias</p>
            </Link>
          </div>
        </section>

        <section className="info-section">
          <div className="info-cards">
            <div className="info-card">
              <h4>🔒 Segurança</h4>
              <p>Suas informações são protegidas e confidenciais</p>
            </div>
            <div className="info-card">
              <h4>⚡ Rápido</h4>
              <p>Processo simples e ágil para fazer denúncias</p>
            </div>
            <div className="info-card">
              <h4>🎯 Efetivo</h4>
              <p>Suas denúncias ajudam a prevenir novos golpes</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
