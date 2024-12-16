import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { identificarCliente } from '../redux/clienteReducer'; 

export default function Cliente() {
  const dispatch = useDispatch();

  const [clientInfo, setClientInfo] = useState({
    cpf: '',
    nome: '',
    endereco: '',
    cidade: '',
    uf: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(identificarCliente(clientInfo));
  };

  return (
    <div className="container mt-5">
      <h2>Identifique-se</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="cpf" className="form-label">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={clientInfo.cpf}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Digite seu CPF"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={clientInfo.nome}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endereco" className="form-label">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={clientInfo.endereco}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Digite seu endereço"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cidade" className="form-label">Cidade:</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={clientInfo.cidade}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Digite sua cidade"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="uf" className="form-label">UF:</label>
          <input
            type="text"
            id="uf"
            name="uf"
            value={clientInfo.uf}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Digite seu UF"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Identificar</button>
      </form>
    </div>
  );
}