import Character from './Character/Index';
import { CharacterData } from '../../types';
import './CharacterList.css';

interface CharacterListProps {
  characters: CharacterData[];
  onCharacterClick: (character: CharacterData) => void;
  selectedCharacter: CharacterData | null;
  closeModal: () => void;
}

const CharacterList = ({ characters, onCharacterClick, selectedCharacter, closeModal }: CharacterListProps) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <Character key={character.id} character={character} onClick={() => onCharacterClick(character)} />
      ))}
      {selectedCharacter && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCharacter.name}</h2>
            <img src={selectedCharacter.image} alt={selectedCharacter.name} />
            <p>Status: {selectedCharacter.status}</p>
            <p>Gender: {selectedCharacter.gender}</p>
            <p>Species: {selectedCharacter.species}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
    );
  };
  
  export default CharacterList;