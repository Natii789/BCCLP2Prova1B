import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import GradeProdutos from './componentes/GradeProdutos';
import BarraBusca from './templates/BarraBusca';
import Cabecalho from './templates/Cabecalho';
import { atualizarCarrinho } from './acoes';

function App() {
  const [produtos, setProdutos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });
  }, []);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    dispatch(atualizarCarrinho(carrinho));
  }, [dispatch]);

  return (
    <div className="App">
      <Cabecalho />
      <BarraBusca />
      <GradeProdutos listaProdutos={produtos} />
    </div>
  );
}

export default App;

