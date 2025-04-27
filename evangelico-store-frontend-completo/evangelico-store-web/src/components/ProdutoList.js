import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ProdutoList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/produtos').then(res => setProdutos(res.data));
  }, []);

  return (
    <div>
      <ul className='space-y-2 mt-4'>
        {produtos.map(p => (
          <li key={p.id} className='border p-2 rounded shadow'>
            <strong>{p.nome}</strong>: R${p.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdutoList;