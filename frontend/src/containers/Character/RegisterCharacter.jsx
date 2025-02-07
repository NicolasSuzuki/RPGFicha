import React from 'react';
import axios from 'axios';
import backendUrl from 'settings';

const RegisterCharacter = () => {

  const handleRegisterCharacter = async ({ character, showToast }) => {
    try {
      const userId = null; // Replace with the actual user ID
      await axios.post(backendUrl + '/api/register-character', { userId, ...character });
      // Show success toast
      showToast('Success', 'Character registered successfully!', 'success');
      return true;
    } catch (error) {
      showToast('Error', 'An error occurred during registration.', 'error');
      return false;
    }
  };

  return <RegisterCharacterCMP handleRegisterCharacter={handleRegisterCharacter} />
};

export default RegisterCharacter;