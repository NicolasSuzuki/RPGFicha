import React from 'react';
import {
  Sword, Shield, Brain, Zap, User, Heart, Target,
  Dumbbell, Activity, Lightbulb, BookOpen, Users,
  Star, Award, CircleDot
} from 'lucide-react';

const AttributeCard = ({ icon: Icon, label, value }) => {
  const modifiedValue = value && Math.floor(value / 5) - 1;
  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3">
      <Icon className="w-5 h-5 text-blue-400" />
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-semibold">{value} {typeof value === 'number' && modifiedValue > 0 && `(${modifiedValue})`}</p>
      </div>
    </div>
  );
};


const CharacterDetails = ({ character }) => {
  if (!character) {
    return <div className="text-center py-8 text-gray-400">Loading...</div>;
  }

  function handleClick() {
    window.location.href = '/edit-character/' + character.id;
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{character.name}</h3>
          <p className="text-gray-400">{character.quirk} • Level {character.level}</p>
        </div>
        <div className="w-[80px] bg-red-500/20 rounded-lg p-3 ml-auto">
          <div className="flex items-center gap-2 m-auto w-min">
            <Heart className="w-5 h-5 text-red-400" />
            <p className="text-xl font-bold">{character.hp}</p>
          </div>
        </div>
        <div onClick={() => console.log({ character })} className="w-[80px] bg-purple-500/20 rounded-lg p-3">
          <div className="flex items-center gap-2 m-auto w-min">
            <Star className="w-5 h-5 text-purple-400" />
            <p className="text-xl font-bold">{character.skillPoints}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-400 mb-3">Defense Stats</h4>
          <div className="grid grid-cols-3 gap-3">
            <AttributeCard icon={Shield} label="DA" value={character.defense_da} />
            <AttributeCard icon={Shield} label="RES" value={character.defense_res} />
            <AttributeCard icon={Shield} label="CM" value={character.defense_cm} />
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-400 mb-3">Mental Attributes</h4>
          <div className="grid grid-cols-2 gap-3">
            <AttributeCard icon={Sword} label="Strength" value={character.strength} />
            <AttributeCard icon={Target} label="Accuracy" value={character.accuracy} />
            <AttributeCard icon={Zap} label="Agility" value={character.agility} />
            <AttributeCard icon={Activity} label="Vigor" value={character.vigor} />
            <AttributeCard icon={Brain} label="Intelligence" value={character.intelligence} />
            <AttributeCard icon={BookOpen} label="Wisdom" value={character.wisdom} />
            <AttributeCard icon={Users} label="Charisma" value={character.charisma} />
            <AttributeCard icon={Award} label="Talent" value={character.talent} />
          </div>
        </div>
      </div>

      <button onClick={handleClick} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
        Edit Character
      </button>
    </div>
  );
};

export default CharacterDetails;