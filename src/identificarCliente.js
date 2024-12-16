import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { identificarCliente } from '../acoes';

export default function IdentificarCliente() {
    const [cliente, setCliente] = useState({ nome: '', cpf: '', endereco: '', cidade: '', uf: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(identificarCliente(cliente));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
            />
            <input
                type="text"
                placeholder="CPF"
                onChange={(e) => setCliente({ ...cliente, cpf: e.target.value })}
            />
            <input
                type="text"
                placeholder="Endereço"
                onChange={(e) => setCliente({ ...cliente, endereco: e.target.value })}
            />
            <input
                type="text"
                placeholder="Cidade"
                onChange={(e) => setCliente({ ...cliente, cidade: e.target.value })}
            />
            <input
                type="text"
                placeholder="UF"
                onChange={(e) => setCliente({ ...cliente, uf: e.target.value })}
            />
            <button type="submit">Cadastrar</button>
        </form>
    );
}
