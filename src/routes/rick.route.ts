// import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
// import validationMiddleware from '@middlewares/validation.middleware';
import RickController from '@controllers/rick.controller';
import { Router } from 'express';

class RickRoute implements Routes {
  public path = '/rickandmorty';
  public router = Router();
  public rickController = new RickController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.rickController.getCharacters);
  }

}

export default RickRoute;
