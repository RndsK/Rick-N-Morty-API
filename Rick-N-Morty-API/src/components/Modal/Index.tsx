import './Modal.css';
import { CharacterData } from '../../types';

interface ModalProps {
    character: CharacterData;
    onClose: () => void;
}

const Modal = ({ character, onClose }: ModalProps) => {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default Modal;