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
        console.log({response});
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [userID]);

  return <CharacterListCMP characters={characters} userID={userID} />;
};

export default CharacterList;