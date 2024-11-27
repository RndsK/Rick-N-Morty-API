import { CharacterData } from '../../../types';
import './character.css';

interface CharacterProps {
  character: CharacterData;
  onClick: () => void;
}

const Character = ({ character, onClick }: CharacterProps) => {
  return (
    <div className="character" onClick={onClick}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
};

export default Character;