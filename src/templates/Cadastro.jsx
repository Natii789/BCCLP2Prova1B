import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { identificarCliente } from '../acoes'; 


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(identificarCliente({ nome, cpf, endereco, cidade, uf}));

        alert('Cliente identificado com sucesso!');

    };

    return (
        <div>
            <h3>Cadastro de Cliente</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <label>
                    Cpf:
                    <input
                        type="text"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                </label>
                <label>
                    Endereco:
                    <input
                        type="text"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                    />
                </label>
                <label>
                    Cidade:
                    <input
                        type="text"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    />
                </label>
                <label>
                    UF:
                    <input
                        type="text"
                        value={uf}
                        onChange={(e) => setUf(e.target.value)}
                    />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
