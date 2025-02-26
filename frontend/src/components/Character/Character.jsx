const CharacterDetailsBackup = ({ character }) => {
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
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="flex-1 bg-gradient-to-r from-red-500/20 to-red-500/10 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold">HP</span>
            </div>
            <p className="text-2xl font-bold">{character.hp}</p>
          </div>
          <div className="flex-1 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-semibold">Skill Points</span>
            </div>
            <p className="text-2xl font-bold">{character.skillPoints}</p>
          </div>
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
          <h4 className="text-sm font-medium text-gray-400 mb-3">Primary Attributes</h4>
          <div className="grid grid-cols-2 gap-3">
            <AttributeCard icon={Sword} label="Strength" value={character.strength} />
            <AttributeCard icon={Target} label="Accuracy" value={character.accuracy} />
            <AttributeCard icon={Zap} label="Agility" value={character.agility} />
            <AttributeCard icon={Activity} label="Vigor" value={character.vigor} />
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-400 mb-3">Mental Attributes</h4>
          <div className="grid grid-cols-2 gap-3">
            <AttributeCard icon={Brain} label="Intelligence" value={character.intelligence} />
            <AttributeCard icon={BookOpen} label="Wisdom" value={character.wisdom} />
            <AttributeCard icon={Users} label="Charisma" value={character.charisma} />
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-400 mb-3">Special</h4>
          <div className="grid grid-cols-2 gap-3">
            <AttributeCard icon={CircleDot} label="Quirk" value={character.quirk} />
            <AttributeCard icon={Award} label="Talent" value={character.talent} />
          </div>
        </div>

        {character.skills && Object.keys(character.skills).length > 0 && (
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-400 mb-3">Skills</h4>
            <div className="grid grid-cols-2 gap-3">
              <AttributeCard key={'base'} icon={Lightbulb} label={'Base'} value={5} />
              {/*Object.entries(character.skills).map(([skill, value]) => (
                <AttributeCard key={skill} icon={Lightbulb} label={skill} value={value} />
              ))*/}
            </div>
          </div>
        )}
      </div>

      <button onClick={handleClick} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
        Edit Character
      </button>
    </div>
  );
};