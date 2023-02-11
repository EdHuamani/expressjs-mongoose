import { RickAndMorty } from '@interfaces/rick.interface';
import characterModel from '@models/character.model';
import axios from 'axios';

class RickService {
  public characters = characterModel;
  public apiUrl = 'https://rickandmortyapi.com/api/';

  public async findCharacters(): Promise<RickAndMorty[]> {
    try {
      const response = await axios.get(`${this.apiUrl}character`);
      const data: RickAndMorty[] = response.data['results'];
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  public async findCharactersByName(name: string): Promise<RickAndMorty[]> {
    try {
      const response = await axios.get(`${this.apiUrl}character/?name=${name}`);
      const data: RickAndMorty[] = response.data['results'];
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export default RickService;
