import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {CharacterData} from '../types/index';

const fetchCharacters = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results as CharacterData[];
}

export const useCharacters = () => {
    return useQuery({
        queryKey: ['characters'],
        queryFn: fetchCharacters,
      });
}