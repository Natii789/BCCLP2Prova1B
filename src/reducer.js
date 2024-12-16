import { IDENTIFICAR_CLIENTE, ATUALIZAR_CARRINHO } from './acoes';

const estadoInicial = {
  cliente: JSON.parse(localStorage.getItem('cliente')) || null,
  carrinho: JSON.parse(localStorage.getItem('carrinho')) || [],
};

const reducer = (estado = estadoInicial, acao) => {
  switch (acao.type) {
    case IDENTIFICAR_CLIENTE:
      localStorage.setItem('cliente', JSON.stringify(acao.payload));
      return {
        ...estado,
        cliente: acao.payload,
      };
    case ATUALIZAR_CARRINHO:
      localStorage.setItem('carrinho', JSON.stringify(acao.payload));
      return {
        ...estado,
        carrinho: acao.payload,
      };
    default:
      return estado;
  }
};

export default reducer;
