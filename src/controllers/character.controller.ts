import { NextFunction, Request, Response } from 'express';
// import { CreateUserDto } from '@dtos/users.dto';
import { CreateCharacterDto } from '@/dtos/character.dto';
import { RickAndMortyCollection } from '@interfaces/rick.interface';
import CharacterService from '@services/character.service';

class CharacterController {
  public characterService = new CharacterService();

  public getCharacters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      let findAllData: RickAndMortyCollection[];
      const userId = req.params.id;
      findAllData = await this.characterService.findMyCollection(userId);
      const name = req.query.name;
      //search by name
      if (name) {
        findAllData = await this.characterService.findCharactersByName(userId, name.toString());
      } else {
        findAllData = await this.characterService.findMyCollection(userId);
      }

      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };


  public saveCollection = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data: CreateCharacterDto = req.body;
      const createUserData: RickAndMortyCollection = await this.characterService.saveCollection(data);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };


}

export default CharacterController;
