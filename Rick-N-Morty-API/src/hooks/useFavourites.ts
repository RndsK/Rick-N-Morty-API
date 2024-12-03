import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CharacterData } from '../types';

const fetchFavorites = async () => {
  const response = await axios.get('http://localhost:3001/favorites');
  return response.data as CharacterData[];
};

const addFavorite = async (character: CharacterData) => {
  await axios.post('http://localhost:3001/favorites', character);
};

export const useFavorites = () => {
    const queryClient = useQueryClient();
  
    const favoritesQuery = useQuery({
      queryKey: ['favorites'],
      queryFn: fetchFavorites,
    });
      
    const addFavoriteMutation = useMutation({
      mutationFn: addFavorite,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['favorites'] }),
    });
    
    return { ...favoritesQuery, addFavorite: addFavoriteMutation.mutate };
};