import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backendUrl from 'settings';
import LoginCMP from 'components/Auth/Login.jsx';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await axios.post(backendUrl + '/api/login', {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginCMP handleLogin={handleLogin} />
  );
};

export default Login;