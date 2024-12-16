import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { atualizarCarrinho } from '../acoes';
import Cadastro from './Cadastro';

export default function Produto(props) {
    const [quantidade, setQuantidade] = useState(1);
    const cliente = useSelector(state => state.cliente);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const AdicionarCarrinho = () => {
        /*if (!cliente) {
            alert('Você precisa se identificar antes de comprar!');
            navigate('/cadastro');
            return;
        }*/

        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const produto = props.produto;
        const index = carrinho.findIndex(item => item.id === produto.id);

        if (index !== -1) {
            carrinho[index].quantidade += quantidade;
        } else {
            carrinho.push({ ...produto, quantidade });
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        dispatch(atualizarCarrinho(carrinho));
    };

    return (
        <div style={{
            width: '200px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '10px',
            padding: '10px',
            marginBottom: '40px'
        }}>
            <div style={{
                width: '100px',
                height: '100px',
            }}
                id='imagem-produto'>
                <img style={{
                    width: "100%",
                    height: "100%"
                }} src={props.produto?.image || ''}
                    alt={props.produto?.description || ''} />
            </div>
            <div style={{ height: '40px' }} id='titulo-produto'>
                <p><strong>{props.produto?.title.substring(0, 20)}</strong></p>
            </div>
            <div style={{
                color: 'rgb(0,120,0)',
            }} id='preco-produto'>
                <p><strong>R$ {props.produto?.price}</strong></p>
            </div>
            <div style={{

            }} id="opinioes-produoto">
                <span>{((props.produto ? props.produto.rating.rate : 0) * 20) || 0}% gostaram</span>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
                id='quantidade-selecionada'>
                <p style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                    margin: '0px',
                    padding: '0px',
                    marginRight: '10px',
                }}>Quantidade:</p>
                <input
                    style={{
                        width: '40px',
                        border: '0px',
                        outline: 'none',
                    }}
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(parseInt(e.target.value))}
                    step={1}
                    min={1} />
            </div>
            <div id='botao-comprar'>
                <button
                    onClick={AdicionarCarrinho}
                    style={{
                        backgroundColor: 'rgb(255,60,60)',
                        color: 'white',
                        border: '0px',
                        borderRadius: '10px',
                        height: '40px',
                        width: '120px',
                    }}
                    type='button'>
                    Comprar
                </button>
            </div>
        </div>
    )
}
