export interface CharacterData {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}
  
  export interface CharacterProps {
    character: {
      id: number;
      name: string;
      image: string;
    };

}