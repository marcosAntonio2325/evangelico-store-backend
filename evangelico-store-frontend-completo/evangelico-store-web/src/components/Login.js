import React, { useState } from 'react';

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usuario === 'admin' && senha === 'senha123') {
      onLogin(usuario);
    } else {
      setErro('Usuário ou senha inválidos');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {erro && <p className="text-red-500">{erro}</p>}
      <input className="w-full border p-2 mb-2" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <input className="w-full border p-2 mb-2" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Entrar</button>
    </form>
  );
}

export default Login;