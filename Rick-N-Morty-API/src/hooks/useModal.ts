import { useState } from 'react';
import { CharacterData } from '../types';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData | null>(null);

  const openModal = (character: CharacterData) => {
    setSelectedCharacter(character);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedCharacter,
    openModal,
    closeModal,
  };
};