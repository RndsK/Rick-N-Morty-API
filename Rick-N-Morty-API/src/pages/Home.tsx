import React, { useState, useEffect } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import CharacterList from '../components/CharacterList/Index';
import Modal from '../components/Modal/Index';
import { CharacterData } from '../types';

const Home = () => {
  const { data: characters, isLoading, error } = useCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);
  const [favorites, setFavorites] = useState<CharacterData[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleToggleFavorite = (character: CharacterData) => {
    const isAlreadyFavorite = favorites.find((fav) => fav.id === character.id);

    const updatedFavorites = isAlreadyFavorite
      ? favorites.filter((fav) => fav.id !== character.id) 
      : [...favorites, character];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading characters</p>;

  return (
    <div>
      <CharacterList
        characters={characters || []}
        onCharacterClick={setSelectedCharacter}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
      {selectedCharacter && (
        <Modal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  );
};

export default Home;
