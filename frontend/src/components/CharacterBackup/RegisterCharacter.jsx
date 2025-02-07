// src/components/RegisterCharacter.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';
import backendUrl from '../../settings.js'

const RegisterCharacter = () => {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = useState('');
  const [level, setLevel] = useState(1);
  const [position, setPosition] = useState('');
  const [quirk, setQuirk] = useState('');
  const [hp, setHp] = useState(0);
  const [defenseDa, setDefenseDa] = useState(0);
  const [defenseRes, setDefenseRes] = useState(0);
  const [defenseCm, setDefenseCm] = useState(0);
  const [strength, setStrength] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [agility, setAgility] = useState(0);
  const [vigor, setVigor] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0 );
  const [charisma, setCharisma] = useState(0);
  const [talent, setTalent] = useState('');
  const [skillPoints, setSkillPoints] = useState(0);
  
  const talents = [
    ['agility', 'Pulo do Gato'],
    ['strength', 'Artista Marcial'],
    ['wisdom', 'Contra Ataque'],
    ['accuracy', 'Saque Rápido']
  ]

  const handleRegisterCharacter = async () => {
    try {
      const userId = null; // Replace with the actual user ID
      // Make a request to your backend to register the character
      await axios.post(backendUrl + '/api/register-character', {
        userId,
        characterName,
        level,
        position,
        quirk,
        hp,
        defenseDa,
        defenseRes,
        defenseCm,
        strength,
        accuracy,
        agility,
        vigor,
        intelligence,
        wisdom,
        charisma,
        talent,
        skillPoints,
      });

      // Display a success message or redirect to another page
      Swal.fire({
        icon: 'success',
        title: 'Registration successful',
        text: 'Character registered successfully!',
      });
      return true;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Registration failed',
            text: 'An error occurred during registration.',
          });
        return false;
    }
  };

  const handleRegisterGoBack = () => {
    handleRegisterCharacter().then((resp) => {
        navigate(-1);
    })
  }

  const handleRegisterClean = () => {
    handleRegisterCharacter().then((resp) => {
        if(resp){
            setCharacterName('');
            setLevel('');
            setPosition('');
            setQuirk('');
            setHp('');
            setDefenseDa('');
            setDefenseRes('');
            setDefenseCm('');
            setStrength('');
            setAccuracy('');
            setAgility('');
            setVigor('');
            setIntelligence('');
            setWisdom('');
            setCharisma('');
            setTalent('');
            setSkillPoints('');
        }
    })
 }

  return (
    <Box>
      <h2>Register Character</h2>
      <form>
        <TextField style={{ margin: 10 }} label="Nome do personagem" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Nível" value={level} onChange={(e) => setLevel(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Cargo" value={position} onChange={(e) => setPosition(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Individualidade" value={quirk} onChange={(e) => setQuirk(e.target.value)} />

        <TextField style={{ margin: 10 }} label="HP" value={hp} onChange={(e) => setHp(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Defesa DA" value={defenseDa} onChange={(e) => setDefenseDa(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Defesa RES" value={defenseRes} onChange={(e) => setDefenseRes(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Defesa CM" value={defenseCm} onChange={(e) => setDefenseCm(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Força" value={strength} onChange={(e) => setStrength(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Precisão" value={accuracy} onChange={(e) => setAccuracy(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Agilidade" value={agility} onChange={(e) => setAgility(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Vigor" value={vigor} onChange={(e) => setVigor(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Inteligência" value={intelligence} onChange={(e) => setIntelligence(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Sabedoria" value={wisdom} onChange={(e) => setWisdom(e.target.value)} />

        <TextField style={{ margin: 10 }} label="Carisma" value={charisma} onChange={(e) => setCharisma(e.target.value)} />

        <FormGroup style={{ margin: 10 }}>
          <label>Talentos:</label>
          {talents.map(([key, value]) => (
            <FormControlLabel
              key={key}
              control={<Checkbox checked={talent === key} onChange={() => setTalent(key)} />}
              label={value}
            />
          ))}
        </FormGroup>

        <TextField style={{ margin: 10 }} label="Skill Points" value={skillPoints} onChange={(e) => setSkillPoints(e.target.value)} />

        <Button variant="contained" onClick={handleRegisterGoBack}>
          Register and Go back
        </Button>
        <Button variant="contained" onClick={handleRegisterClean}>
          Register and clean fields
        </Button>
      </form>
    </Box>
  );
};

export default RegisterCharacter;
