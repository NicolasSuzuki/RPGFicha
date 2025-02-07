import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backendUrl from 'settings';
import ChangePasswordCMP from 'components/Auth/ChangePassword.jsx';

const ChangePassword = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = async ({ newPassword, confirmPassword, email }) => {
    try {
      if (newPassword !== confirmPassword) {
        setMessage('Passwords do not match');
        setStatus('error');
        return;
      }

      const response = await axios.post(backendUrl + '/api/change-password', {
        email,
        newPassword
      });

      setMessage(response.data.message);
      setStatus('success');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setMessage('Failed to change password. Please verify your information.');
      setStatus('error');
    }
  };

  return (
    <ChangePasswordCMP handleChangePassword={handleChangePassword} status={status} message={message} />
  );
};

export default ChangePassword;