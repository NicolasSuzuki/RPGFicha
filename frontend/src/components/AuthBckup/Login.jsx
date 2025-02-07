// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backendUrl from '../../settings.js'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(backendUrl + '/api/login', {
        email,
        password,
      });

      // Assuming your backend sends a token upon successful login
      const token = response.data.token;

      // Save the token to localStorage or a global state management system (e.g., Redux)
      localStorage.setItem('token', token);

      // Redirect to the dashboard or home page
      navigate('/dashboard'); // Change '/dashboard' to your desired route
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRedirectToChangePassword = () => {
    // Redirect to the change password page
    navigate('/change-password'); // Change '/change-password' to your desired route
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <button type="button" onClick={handleRedirectToChangePassword}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Login;
