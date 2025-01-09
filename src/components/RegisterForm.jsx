import React from 'react';

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold text-center">Registrar</h2>
      <input
        type="text"
        placeholder="Nome"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
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
      <button className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700">
        Registrar
      </button>
    </form>
  );
};

export default RegisterForm;
