import React, { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList/Index';
import { CharacterData } from '../types';

const Favorites = () => {
  const [favorites, setFavorites] = useState<CharacterData[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const handleToggleFavorite = (character: CharacterData) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== character.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <CharacterList
          characters={favorites}
          onCharacterClick={() => {}}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
