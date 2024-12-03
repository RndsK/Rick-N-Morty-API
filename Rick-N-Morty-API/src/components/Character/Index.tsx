import { CharacterData } from '../../types';
import './Character.css';

interface CharacterProps {
  character: CharacterData;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: (character: CharacterData) => void;
}

const Character = ({ character, onClick, isFavorite, onToggleFavorite }: CharacterProps) => (
  <div className="character" onClick={onClick}>
    <img src={character.image} alt={character.name} />
    <h3>{character.name}</h3>
    <button
        className="add-favorites-button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(character);
        }}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
  </div>
);

export default Character;