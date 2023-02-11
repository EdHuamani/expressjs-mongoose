import { CreateCharacterDto } from '@/dtos/character.dto';
import { HttpException } from '@/exceptions/HttpException';
import { RickAndMortyCollection } from '@interfaces/rick.interface';
import characterModel from '@models/character.model';
import { isEmpty } from '@utils/util';

class CharacterService {
  public characters = characterModel;
  public async findMyCollection(userId: string): Promise<RickAndMortyCollection[]> {
    const findData: RickAndMortyCollection[] = await this.characters.find({ uid: userId });

    return findData;
  }

  public async findCharactersByName(userId: string, name: string): Promise<RickAndMortyCollection[]> {
    try {
      const regex = {$regex: name, $options: 'i'};
      const findData: RickAndMortyCollection[] = await this.characters.find({ uid: userId, name: regex})
      return findData;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  public async saveCollection(data: CreateCharacterDto): Promise<RickAndMortyCollection> {
    if (isEmpty(data)) throw new HttpException(400, 'rickAndMortyData is empty');

    let findData: RickAndMortyCollection = await this.characters.findOne({ ref: data.ref });
    if (findData) throw new HttpException(409, `This _id ${data.ref} already exists`);

    const createdData: RickAndMortyCollection = await this.characters.create({ ...data });

    return createdData;
  }
}

export default CharacterService;
