import React, { useState } from 'react';
import api from '../services/api';

function ProdutoForm({ onProdutoCriado }) {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
    estoque: ''
  });
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!produto.nome || !produto.preco || !produto.estoque) {
      setErro('Nome, preço e estoque são obrigatórios.');
      return;
    }

    try {
      await api.post('/produtos', {
        ...produto,
        preco: parseFloat(produto.preco),
        estoque: parseInt(produto.estoque, 10)
      });
      setProduto({ nome: '', descricao: '', preco: '', estoque: '' });
      setErro('');
      if (onProdutoCriado) onProdutoCriado();
    } catch (err) {
      setErro('Erro ao salvar produto.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded mt-4">
      <h2 className="text-xl font-semibold">Cadastrar Produto</h2>
      {erro && <p className="text-red-500">{erro}</p>}
      <input className="w-full border p-2" name="nome" placeholder="Nome" value={produto.nome} onChange={handleChange} />
      <input className="w-full border p-2" name="descricao" placeholder="Descrição" value={produto.descricao} onChange={handleChange} />
      <input className="w-full border p-2" name="preco" type="number" placeholder="Preço" value={produto.preco} onChange={handleChange} />
      <input className="w-full border p-2" name="estoque" type="number" placeholder="Estoque" value={produto.estoque} onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Salvar</button>
    </form>
  );
}

export default ProdutoForm;