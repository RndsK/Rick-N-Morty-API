import Character from '../Character/Index';
import { CharacterData } from '../../types';
import './CharacterList.css';

interface CharacterListProps {
  characters: CharacterData[];
  onCharacterClick: (character: CharacterData) => void;
  favorites: CharacterData[];
  onToggleFavorite: (character: CharacterData) => void;
}

const CharacterList = ({ characters, onCharacterClick, favorites, onToggleFavorite }: CharacterListProps) => (
  <div className="character-list">
    {characters.map((character) => {
      const isFavorite = favorites.some((fav) => fav.id === character.id);
      return (
        <Character
          key={character.id}
          character={character}
          onClick={() => onCharacterClick(character)}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      );
    })}
  </div>
);

export default CharacterList;
