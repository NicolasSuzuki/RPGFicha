// src/components/PasswordRecovery.js
import React, { useState } from 'react';
import axios from 'axios';
import backendUrl from '../../settings.js'

// ===================================
// TODO FIX THIS COMPONENT
// ===================================
const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordRecovery = async () => {
    try {
      // Enviar solicitação de recuperação de senha para o backend
      const response = await axios.post(backendUrl + '/recovery', { email });

      // Exibir mensagem de sucesso ou resposta do servidor
      setMessage(response.data.message);
    } catch (error) {
      // Exibir mensagem de erro em caso de falha
      setMessage('Erro ao enviar solicitação de recuperação de senha.');
    }
  };

  return (
    <div>
      <h1>Recuperação de Senha</h1>
      <p>Informe o seu e-mail para receber instruções de recuperação de senha.</p>
      
      <label>E-mail:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <button type="button" onClick={handlePasswordRecovery}>
        Enviar Solicitação
      </button>

      <p>{message}</p>
    </div>
  );
};

export default PasswordRecovery;
