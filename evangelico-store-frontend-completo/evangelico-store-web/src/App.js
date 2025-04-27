import React, { useState, useEffect } from 'react';
import ProdutoList from './components/ProdutoList';
import ProdutoForm from './components/ProdutoForm';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import api from './services/api';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    const res = await api.get('/produtos');
    setProdutos(res.data);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  if (!usuario) {
    return <Login onLogin={(user) => setUsuario(user)} />;
  }

  const totalEstoque = produtos.reduce((acc, p) => acc + p.estoque, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Loja Evangélica</h1>
      <Dashboard total={produtos.length} estoque={totalEstoque} />
      <ProdutoForm onProdutoCriado={carregarProdutos} />
      <ProdutoList />
    </div>
  );
}

export default App;