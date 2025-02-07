import React, { useState, useEffect } from 'react';

const CharacterDetails = (characterToShow) => {
   console.log(characterToShow)
    const [character, setCharacter] = useState(characterToShow.character);
  
    /* useEffect(() => {
      const fetchCharacter = async () => {
        try {
          const response = await axios.get(`/api/get-character/${match.params.characterId}`);
          setCharacter(response.data);
        } catch (error) {
          console.error('Error fetching character:', error);
        }
      };
  
      fetchCharacter();
    }, [match.params.characterId]); */
  
    if (!character) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>{character.name}</h2>
        <p>Level: {character.level}</p>
        <p>Position: {character.position}</p>
        <p>Quirk: {character.quirk}</p>
        <p>HP: {character.hp}</p>
        <p>Defense DA: {character.defense_da}</p>
        <p>Defense RES: {character.defense_res}</p>
        <p>Defense CM: {character.defense_cm}</p>
        <p>Strength: {character.strength}</p>
        <p>Accuracy: {character.accuracy}</p>
        <p>Agility: {character.agility}</p>
        <p>Vigor: {character.vigor}</p>
        <p>Intelligence: {character.intelligence}</p>
        <p>Wisdom: {character.wisdom}</p>
        <p>Charisma: {character.charisma}</p>
        <p>Talent: {character.talent}</p>
        <p>Skill Points: {character.skillPoints}</p>
        <h3>Skills:</h3>
        <ul>
          {Object.entries(character.skills).map(([skill, value]) => (
            <li key={skill}>
              {skill}: {value}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CharacterDetails;