import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Sword, Brain, Heart, Target, Zap, Activity, Users, Star, CircleDot } from 'lucide-react';
import axios from 'axios';
import backendUrl from '../../settings.js';

const InputField = ({ label, value, onChange, icon: Icon }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
      />
    </div>
  </div>
);

const TextInputField = ({ label, value, onChange, icon: Icon }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="block w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
      />
    </div>
  </div>
);

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
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [talent, setTalent] = useState('');
  const [skillPoints, setSkillPoints] = useState(0);
  
  const talents = [
    ['agility', 'Pulo do Gato'],
    ['strength', 'Artista Marcial'],
    ['wisdom', 'Contra Ataque'],
    ['accuracy', 'Saque Rápido']
  ];

  const handleRegisterCharacter = async () => {
    try {
      const userId = null; // Replace with the actual user ID
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

      // Show success toast
      showToast('Success', 'Character registered successfully!', 'success');
      return true;
    } catch (error) {
      showToast('Error', 'An error occurred during registration.', 'error');
      return false;
    }
  };

  const showToast = (title, message, type) => {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white max-w-sm animate-fade-in`;
    toast.innerHTML = `
      <h4 class="font-bold">${title}</h4>
      <p>${message}</p>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('animate-fade-out');
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
  };

  const handleRegisterGoBack = () => {
    handleRegisterCharacter().then((resp) => {
      if (resp) navigate(-1);
    });
  };

  const handleRegisterClean = () => {
    handleRegisterCharacter().then((resp) => {
      if(resp) {
        setCharacterName('');
        setLevel(1);
        setPosition('');
        setQuirk('');
        setHp(0);
        setDefenseDa(0);
        setDefenseRes(0);
        setDefenseCm(0);
        setStrength(0);
        setAccuracy(0);
        setAgility(0);
        setVigor(0);
        setIntelligence(0);
        setWisdom(0);
        setCharisma(0);
        setTalent('');
        setSkillPoints(0);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Register New Character</h1>
          <p className="text-gray-400">Create a new character by filling out the details below</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInputField
                label="Character Name"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                icon={Users}
              />
              
              <InputField
                label="Level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                icon={Star}
              />

              <TextInputField
                label="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                icon={Target}
              />

              <TextInputField
                label="Quirk"
                value={quirk}
                onChange={(e) => setQuirk(e.target.value)}
                icon={CircleDot}
              />

              <InputField
                label="HP"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                icon={Heart}
              />

              <InputField
                label="Defense DA"
                value={defenseDa}
                onChange={(e) => setDefenseDa(e.target.value)}
                icon={Shield}
              />

              <InputField
                label="Defense RES"
                value={defenseRes}
                onChange={(e) => setDefenseRes(e.target.value)}
                icon={Shield}
              />

              <InputField
                label="Defense CM"
                value={defenseCm}
                onChange={(e) => setDefenseCm(e.target.value)}
                icon={Shield}
              />

              <InputField
                label="Strength"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
                icon={Sword}
              />

              <InputField
                label="Accuracy"
                value={accuracy}
                onChange={(e) => setAccuracy(e.target.value)}
                icon={Target}
              />

              <InputField
                label="Agility"
                value={agility}
                onChange={(e) => setAgility(e.target.value)}
                icon={Zap}
              />

              <InputField
                label="Vigor"
                value={vigor}
                onChange={(e) => setVigor(e.target.value)}
                icon={Activity}
              />

              <InputField
                label="Intelligence"
                value={intelligence}
                onChange={(e) => setIntelligence(e.target.value)}
                icon={Brain}
              />

              <InputField
                label="Wisdom"
                value={wisdom}
                onChange={(e) => setWisdom(e.target.value)}
                icon={Brain}
              />

              <InputField
                label="Charisma"
                value={charisma}
                onChange={(e) => setCharisma(e.target.value)}
                icon={Users}
              />

              <InputField
                label="Skill Points"
                value={skillPoints}
                onChange={(e) => setSkillPoints(e.target.value)}
                icon={Star}
              />
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-3">Talents</h3>
              <div className="grid grid-cols-2 gap-4">
                {talents.map(([key, value]) => (
                  <label key={key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={talent === key}
                      onChange={() => setTalent(key)}
                      className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-600 bg-gray-700 focus:ring-blue-500"
                    />
                    <span className="text-gray-300">{value}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={handleRegisterGoBack}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Register and Go Back
              </button>
              <button
                type="button"
                onClick={handleRegisterClean}
                className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                Register and Clean Fields
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCharacter;