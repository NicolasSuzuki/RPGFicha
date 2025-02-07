// src/components/ChangePassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backendUrl from '../../settings.js'

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleChangePassword = async () => {
    try {
      // Enviar solicitação de alteração de senha para o backend
      if(newPassword === confirmPassword){
        const response = await axios.post(backendUrl + '/api/change-password', {
          email,
          newPassword
        });

        // Exibir mensagem de sucesso ou resposta do servidor
        setMessage(response.data.message);
        navigate('/');
      }
    } catch (error) {
      // Exibir mensagem de erro em caso de falha
      setMessage('Erro ao alterar a senha. Verifique as informações fornecidas.');
    }
  };

  return (
    <div>
      <h1>Alterar Senha</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Nova Senha:</label>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

      <label>Confirmar Nova Senha:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="button" onClick={handleChangePassword}>
        Alterar Senha
      </button>

      <p>{message}</p>
    </div>
  );
};

export default ChangePassword;
