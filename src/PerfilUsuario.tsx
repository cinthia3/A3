import { useState } from 'react';
import { Link } from 'react-router-dom';
import './perfilUsuario.css';

interface Denuncia {
    id: number;
    tipo: string;
    descricao: string;
    data: string;
    status: 'pendente' | 'em-analise' | 'resolvida';
}

export default function PerfilUsuario() {
    // Dados mockados do usuário
    const [usuario] = useState({
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        telefone: '(11) 98765-4321'
    });

    // Histórico de denúncias mockado
    const [denuncias] = useState<Denuncia[]>([
        {
            id: 1,
            tipo: 'Phishing',
            descricao: 'Recebi um email falso do banco solicitando dados pessoais...',
            data: '2025-11-15',
            status: 'em-analise'
        },
        {
            id: 2,
            tipo: 'Golpe do Pix',
            descricao: 'Transferência via Pix para pessoa que se passou por vendedor...',
            data: '2025-11-10',
            status: 'resolvida'
        },
        {
            id: 3,
            tipo: 'Fraude Bancária',
            descricao: 'Compras não autorizadas no cartão de crédito...',
            data: '2025-11-05',
            status: 'pendente'
        }
    ]);

    const getStatusClass = (status: string) => {
        switch (status) {
            case 'pendente':
                return 'status-pendente';
            case 'em-analise':
                return 'status-analise';
            case 'resolvida':
                return 'status-resolvida';
            default:
                return '';
        }
    };

    const getStatusTexto = (status: string) => {
        switch (status) {
            case 'pendente':
                return 'Pendente';
            case 'em-analise':
                return 'Em Análise';
            case 'resolvida':
                return 'Resolvida';
            default:
                return status;
        }
    };

    return (
        <>
            <div className="container-perfil">
                <h2>Meu Perfil</h2>

                <div className="perfil-info">
                    <div className="info-item">
                        <span className="info-label">Nome:</span>
                        <span className="info-valor">{usuario.nome}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <span className="info-valor">{usuario.email}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Telefone:</span>
                        <span className="info-valor">{usuario.telefone}</span>
                    </div>
                </div>

                <h3>Histórico de Denúncias</h3>

                <div className="denuncias-lista">
                    {denuncias.length > 0 ? (
                        denuncias.map((denuncia) => (
                            <div key={denuncia.id} className="denuncia-card">
                                <div className="denuncia-header">
                                    <span className="denuncia-tipo">{denuncia.tipo}</span>
                                    <span className={`denuncia-status ${getStatusClass(denuncia.status)}`}>
                                        {getStatusTexto(denuncia.status)}
                                    </span>
                                </div>
                                <p className="denuncia-descricao">{denuncia.descricao}</p>
                                <span className="denuncia-data">
                                    {new Date(denuncia.data).toLocaleDateString('pt-BR')}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="sem-denuncias">Você ainda não fez nenhuma denúncia.</p>
                    )}
                </div>

                <Link to="/tela-inicial" className="voltar-link">Voltar</Link>
            </div>
        </>
    );
}
