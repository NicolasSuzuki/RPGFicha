import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import axios from 'axios';
import backendUrl from 'settings';
import PasswordRecoveryCMP from 'components/Auth/PasswordRecovery.jsx';

const PasswordRecovery = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handlePasswordRecovery = async ({ email }) => {
    try {
      const response = await axios.post(backendUrl + '/recovery', { email });
      setMessage(response.data.message);
      setStatus('success');
    } catch (error) {
      setMessage('Failed to send password recovery request. Please try again.');
      setStatus('error');
    }
  };

  return <PasswordRecoveryCMP handlePasswordRecovery={handlePasswordRecovery} message={message} status={status}/>;
};

export default PasswordRecovery;