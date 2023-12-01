import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <button onClick={handleLoginClick} >
      로그인
    </button>
  );
};

export default LoginButton;
