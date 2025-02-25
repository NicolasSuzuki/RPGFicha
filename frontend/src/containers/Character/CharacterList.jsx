import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backendUrl from 'settings';
import CharacterListCMP from 'components/Character/CharacterList.jsx';

const CharacterList = ({ userID }) => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(backendUrl + '/api/all-characters/');
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [userID]);

  const handleLevelUp = async () => {
    try {
      await axios.post(backendUrl + '/api/level-up/');
      // Refresh the character list after level up
      const response = await axios.get(backendUrl + '/api/all-characters/');
      setCharacters(response.data);
    } catch (error) {
      console.error('Error level up character:', error);
    }
  };

  return <CharacterListCMP characters={characters} handleLevelUp={handleLevelUp} />;
};

export default CharacterList;