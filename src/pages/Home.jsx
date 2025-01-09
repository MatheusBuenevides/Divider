import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-md">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="text-center mt-4">
          <p>
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
            <button
              className="text-blue-500 underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Registrar" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
