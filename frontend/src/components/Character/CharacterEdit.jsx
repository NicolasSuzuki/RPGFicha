import React from 'react';
import { Shield, Sword, Brain, Heart, Target, Zap, Activity, Users, Star, CircleDot, Save, ArrowLeft } from 'lucide-react';

const AttributeInput = ({ icon: Icon, label, value, onChange, min = 0 }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
        className="block w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
      />
    </div>
  </div>
);

const TextInput = ({ icon: Icon, label, value, onChange }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
      />
    </div>
  </div>
);

const CharacterEdit = ({ handleUpdateCharacter, message, status, character }) => {
  const talents = [
    ['agility', 'Pulo do Gato'],
    ['strength', 'Artista Marcial'],
    ['wisdom', 'Contra Ataque'],
    ['accuracy', 'Saque Rápido']
  ];
  console.log(character)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Edit Character</h1>
            <p className="text-gray-400">Update your character's attributes and details</p>
          </div>
          <button
            onClick={() => history.goBack()}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              icon={Users}
              label="Character Name"
              value={character.name}
              onChange={(value) => setCharacter({ ...character, name: value })}
            />
            
            <AttributeInput
              icon={Star}
              label="Level"
              value={character.level}
              onChange={(value) => setCharacter({ ...character, level: value })}
              min={1}
            />

            <TextInput
              icon={Target}
              label="Position"
              value={character.position}
              onChange={(value) => setCharacter({ ...character, position: value })}
            />

            <TextInput
              icon={CircleDot}
              label="Quirk"
              value={character.quirk}
              onChange={(value) => setCharacter({ ...character, quirk: value })}
            />

            <AttributeInput
              icon={Heart}
              label="HP"
              value={character.hp}
              onChange={(value) => setCharacter({ ...character, hp: value })}
            />

            <AttributeInput
              icon={Shield}
              label="Defense DA"
              value={character.defense_da}
              onChange={(value) => setCharacter({ ...character, defense_da: value })}
            />

            <AttributeInput
              icon={Shield}
              label="Defense RES"
              value={character.defense_res}
              onChange={(value) => setCharacter({ ...character, defense_res: value })}
            />

            <AttributeInput
              icon={Shield}
              label="Defense CM"
              value={character.defense_cm}
              onChange={(value) => setCharacter({ ...character, defense_cm: value })}
            />

            <AttributeInput
              icon={Sword}
              label="Strength"
              value={character.strength}
              onChange={(value) => setCharacter({ ...character, strength: value })}
            />

            <AttributeInput
              icon={Target}
              label="Accuracy"
              value={character.accuracy}
              onChange={(value) => setCharacter({ ...character, accuracy: value })}
            />

            <AttributeInput
              icon={Zap}
              label="Agility"
              value={character.agility}
              onChange={(value) => setCharacter({ ...character, agility: value })}
            />

            <AttributeInput
              icon={Activity}
              label="Vigor"
              value={character.vigor}
              onChange={(value) => setCharacter({ ...character, vigor: value })}
            />

            <AttributeInput
              icon={Brain}
              label="Intelligence"
              value={character.intelligence}
              onChange={(value) => setCharacter({ ...character, intelligence: value })}
            />

            <AttributeInput
              icon={Brain}
              label="Wisdom"
              value={character.wisdom}
              onChange={(value) => setCharacter({ ...character, wisdom: value })}
            />

            <AttributeInput
              icon={Users}
              label="Charisma"
              value={character.charisma}
              onChange={(value) => setCharacter({ ...character, charisma: value })}
            />

            <AttributeInput
              icon={Star}
              label="Skill Points"
              value={character.skillPoints}
              onChange={(value) => setCharacter({ ...character, skillPoints: value })}
            />
          </div>

          <div className="bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-300 mb-3">Talents</h3>
            <div className="grid grid-cols-2 gap-4">
              {talents.map(([key, value]) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={character.talent === value}
                    onChange={() => setCharacter({ ...character, talent: key })}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-600 bg-gray-700 focus:ring-blue-500"
                  />
                  <span className="text-gray-300">{value}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => handleUpdateCharacter(character)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>

          {message && (
            <div className={`p-4 rounded-lg ${
              status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterEdit;