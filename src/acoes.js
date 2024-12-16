export const IDENTIFICAR_CLIENTE = 'IDENTIFICAR_CLIENTE';
export const ATUALIZAR_CARRINHO = 'ATUALIZAR_CARRINHO';

export const identificarCliente = (cliente) => ({
  type: IDENTIFICAR_CLIENTE,
  payload: cliente
});

export const atualizarCarrinho = (carrinho) => ({
  type: ATUALIZAR_CARRINHO,
  payload: carrinho
});
