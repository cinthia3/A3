import { useState } from "react";
import "./adminPainel.css";

interface Denuncia {
  id: number;
  tipo: string;
  descricao: string;
  status: string;
  chavePix?: string;
  dataCriacao: string;
  usuarioId: number;
  evidencias?: string;
  resposta?: string | null;
}

export default function AdminPainel() {
  const [denuncias] = useState<Denuncia[]>([
    {
      id: 1,
      tipo: "Phishing",
      descricao: "Recebi um email falso do banco solicitando dados pessoais...",
      status: "EM_ANDAMENTO",
      chavePix: "email@exemplo.com",
      dataCriacao: "2025-11-15T10:30:00",
      usuarioId: 1,
      evidencias: "print_email.jpg"
    },
    {
      id: 2,
      tipo: "Golpe do Pix",
      descricao: "Transferência via Pix para pessoa que se passou por vendedor...",
      status: "PENDENTE",
      chavePix: "123.456.789-00",
      dataCriacao: "2025-11-18T14:20:00",
      usuarioId: 2,
      evidencias: "comprovante.pdf"
    },
    {
      id: 3,
      tipo: "Fraude Bancária",
      descricao: "Compras não autorizadas no cartão de crédito...",
      status: "RESOLVIDA",
      dataCriacao: "2025-11-10T09:15:00",
      usuarioId: 3,
      resposta: "Caso encaminhado para investigação bancária"
    }
  ]);

  const [selecionada, setSelecionada] = useState<Denuncia | null>(null);
  const [resposta, setResposta] = useState("");
  const [novoStatus, setNovoStatus] = useState("EM_ANDAMENTO");
  const [mensagem, setMensagem] = useState("");

  const nomeAdmin = "Administrador";

  const enviarResposta = () => {
    if (!selecionada || !resposta.trim()) return;

    setMensagem("Denúncia Respondida!");
    setSelecionada(null);
    setResposta("");
    setNovoStatus("EM_ANDAMENTO");

    setTimeout(() => setMensagem(""), 5000);
  };

  const sair = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminNome");
    window.location.href = "/login";
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "PENDENTE":
        return "status-pendente";
      case "EM_ANDAMENTO":
        return "status-andamento";
      case "RESOLVIDA":
        return "status-resolvida";
      case "RECUSADA":
        return "status-recusada";
      default:
        return "";
    }
  };

  return (
    <div className="pagina-admin">
      <header className="header-admin">
        <div className="header-content">
          <h1 className="titulo-admin">Painel Administrativo</h1>
          <div className="admin-info">
            <span className="nome-admin">👤 {nomeAdmin}</span>
            <button className="btn-sair-admin" onClick={sair}>Sair</button>
          </div>
        </div>
      </header>

      <main className="conteudo-admin">
        <section className="hero-admin">
          <h2>Gerenciamento de Denúncias</h2>
        </section>

        {mensagem && (
          <div className="mensagem-sucesso">
            ✅ {mensagem}
          </div>
        )}

        <section className="denuncias-section">
          <h3 className="section-title">📋 Todas as Denúncias</h3>
          <div className="denuncias-grid">
            {denuncias.map((d) => (
              <div key={d.id} className="denuncia-card-admin">
                <div className="card-header">
                  <div className="card-title">
                    <span className="denuncia-id">#{d.id}</span>
                    <span className="denuncia-tipo-badge">{d.tipo}</span>
                  </div>
                  <span className={`badge ${getStatusClass(d.status)}`}>
                    {d.status.replace("_", " ")}
                  </span>
                </div>

                <div className="card-body">
                  <div className="info-row">
                    <strong>Descrição:</strong>
                    <p>{d.descricao}</p>
                  </div>
                  
                  <div className="info-row">
                    <strong>Evidências:</strong>
                    <p>{d.evidencias || "Nenhuma"}</p>
                  </div>

                  <div className="info-row">
                    <strong>Chave Pix:</strong>
                    <p>{d.chavePix || "—"}</p>
                  </div>

                  <div className="info-row">
                    <strong>Data:</strong>
                    <p>{new Date(d.dataCriacao).toLocaleDateString("pt-BR")}</p>
                  </div>

                  {d.resposta && (
                    <div className="info-row resposta-enviada">
                      <strong>Resposta Enviada:</strong>
                      <p>{d.resposta}</p>
                    </div>
                  )}
                </div>

                <div className="card-footer">
                  <button 
                    className="btn-responder" 
                    onClick={() => setSelecionada(d)}
                  >
                    📝 Responder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {selecionada && (
        <div className="modal-overlay" onClick={() => setSelecionada(null)}>
          <div className="form-resposta" onClick={(e) => e.stopPropagation()}>
            <h3>Responder denúncia #{selecionada.id}</h3>

            <div className="form-group">
              <label htmlFor="resposta">Resposta:</label>
              <textarea
                id="resposta"
                placeholder="Digite a resposta para o usuário"
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
                rows={4}
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Novo Status:</label>
              <select 
                id="status"
                value={novoStatus} 
                onChange={(e) => setNovoStatus(e.target.value)}
              >
                <option value="PENDENTE">Pendente</option>
                <option value="EM_ANDAMENTO">Em andamento</option>
                <option value="RESOLVIDA">Resolvida</option>
                <option value="RECUSADA">Recusada</option>
              </select>
            </div>

            <div className="botoes-modal">
              <button className="btn-salvar" onClick={enviarResposta}>Salvar</button>
              <button className="btn-cancelar" onClick={() => setSelecionada(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
