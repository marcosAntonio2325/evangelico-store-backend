import React from 'react';

function Dashboard({ total, estoque }) {
  return (
    <div className="mt-6 p-4 border rounded grid grid-cols-2 gap-4 text-center">
      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="text-lg font-bold">Total de Produtos</h3>
        <p className="text-2xl">{total}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded shadow">
        <h3 className="text-lg font-bold">Estoque Total</h3>
        <p className="text-2xl">{estoque}</p>
      </div>
    </div>
  );
}

export default Dashboard;