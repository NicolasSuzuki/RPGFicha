import React, { useState, useEffect } from 'react';
import CharacterDetails from './CharacterDetails';
import { User } from 'lucide-react';


  function handleClick() {
    window.location.href = "/register-character";
  }

const CharacterList = ({ characters, handleLevelUp }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-row justify-between'>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Character Management</h1>
            <p className="text-gray-400">Manage your RPG characters and their attributes</p>
          </div>
          <div className="mb-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md" onClick={handleLevelUp}>
              Level Up All
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {characters ? characters.map(character => (
            <CharacterDetails key={character.name} character={character} />
          )) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-400">Loading character data...</p>
            </div>
          )}
                    
          <div onClick={handleClick} className="bg-gray-800/50 rounded-xl p-6 border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-800/70 transition-colors">
           <User className="w-8 h-8 mb-2" />
            <p className="font-medium">Create New Character</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;