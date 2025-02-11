import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import backendUrl from 'settings';
import CharacterEditCMP from 'components/Character/CharacterEdit.jsx';

const CharacterEdit = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/get-character/${id}`);
        setCharacter(response.data.character);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleUpdateCharacter = async () => {
    try {
      await axios.put(`${backendUrl}/api/update-character/${character.id}`, character);
      setMessage('Character updated successfully!');
      setStatus('success');
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    } catch (error) {
      setMessage('Failed to update character. Please try again.');
      setStatus('error');
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }
  return <CharacterEditCMP handleUpdateCharacter={handleUpdateCharacter} message={message} status={status} character={character}/>;
};

export default CharacterEdit;