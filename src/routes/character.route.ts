// import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
// import validationMiddleware from '@middlewares/validation.middleware';
import { CreateCharacterDto } from '@/dtos/character.dto';
import validationMiddleware from '@/middlewares/validation.middleware';
import CharacterController from '@controllers/character.controller';
import { Router } from 'express';

class RickRoute implements Routes {
  public path = '/character';
  public router = Router();
  public characterController = new CharacterController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.characterController.getCharacters);
    this.router.post(`${this.path}`, validationMiddleware(CreateCharacterDto, 'body'), this.characterController.saveCollection);
  }

}

export default RickRoute;
