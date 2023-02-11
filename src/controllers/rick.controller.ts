import { NextFunction, Request, Response } from 'express';
import { RickAndMorty } from '@interfaces/rick.interface';
import RickService from '@services/rick.service';

class RickController {
  public rickService = new RickService();

  public getCharacters = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      let findAllData: RickAndMorty[];
      const name = req.query.name;
      //search by name
      if (name) {
        findAllData = await this.rickService.findCharactersByName(name.toString());
      } else {
        findAllData = await this.rickService.findCharacters();
      }
      res.status(200).json({ data: findAllData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };


}

export default RickController;
