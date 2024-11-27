import{ useEffect, useState } from 'react';
import axios from 'axios';
import CharacterList from './Components/CharacterList/Index';
import { CharacterData } from './types';
import './App.css';

function App() {

  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching the characters:', error);
      });
  }, []);

  const handleCharacterClick = (character: CharacterData) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <CharacterList 
        characters={characters} 
        onCharacterClick={handleCharacterClick} 
        selectedCharacter={selectedCharacter} 
        closeModal={closeModal} 
      />
    </div>
  )
}

export default App
