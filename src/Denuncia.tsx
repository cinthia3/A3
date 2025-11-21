import { useState } from 'react';
import { Link } from 'react-router-dom';
import './denuncia.css';

export default function Denuncia() {
    const [tipoGolpe, setTipoGolpe] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [arquivo, setArquivo] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setArquivo(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Denúncia:', { tipoGolpe, descricao, arquivo });
        // Implementar lógica de envio aqui
    };

    return (
        <>
            <div className="container">
                <h2>Fazer Denúncia</h2>
                <form onSubmit={handleSubmit}>
                    <select 
                        className="input" 
                        value={tipoGolpe}
                        onChange={(e) => setTipoGolpe(e.target.value)}
                        required
                    >
                        <option value="">Selecione o tipo de golpe</option>
                        <option value="phishing">Phishing</option>
                        <option value="fraude-bancaria">Fraude Bancária</option>
                        <option value="golpe-pix">Golpe do Pix</option>
                        <option value="falsa-central">Falsa Central</option>
                        <option value="compra-online">Compra Online Fraudulenta</option>
                        <option value="investimento">Golpe de Investimento</option>
                        <option value="outro">Outro</option>
                    </select>

                    <textarea
                        className="input textarea"
                        placeholder="Descrição do golpe"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        rows={6}
                        required
                    />

                    <div className="file-input-container">
                        <label htmlFor="anexo" className="file-label">
                            {arquivo ? arquivo.name : 'Anexar arquivo (opcional)'}
                        </label>
                        <input
                            id="anexo"
                            type="file"
                            className="file-input"
                            onChange={handleFileChange}
                            accept="image/*,.pdf,.doc,.docx"
                        />
                    </div>

                    <button id="botao" type="submit">Enviar Denúncia</button>
                    <Link to="/tela-inicial" className="voltar-link">Voltar</Link>
                </form>
            </div>
        </>
    );
}
