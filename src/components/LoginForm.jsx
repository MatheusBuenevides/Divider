import React from 'react';

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        placeholder="Senha"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
