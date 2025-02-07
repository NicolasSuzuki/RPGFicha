import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterDetails from './CharacterDetails.jsx';
import backendUrl from '../../settings.js'

const CharacterList = ({ userID }) => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        // Make API request to get character for the specified userID
        const response = await axios.get(backendUrl + '/api/all-characters/');
        console.log({response})
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };

    fetchCharacter();
  }, [userID]);
  console.log(characters)
  return (
    <div>
      <h2>Character Details</h2>
      {characters ? characters.map(character =>
        <div key={character.name}>
          <CharacterDetails character={character} />
        </div>
      ) : (
        <p>Loading character data...</p>
      )}
    </div>
  );
};

export default CharacterList;
