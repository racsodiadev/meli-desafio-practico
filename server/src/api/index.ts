import { Application } from 'express';
import enviroments from '../configs/enviroment';
import itemsRouter from './v1/items/routes/items.routes';

export const routes = (app: Application) => {
  app.use(`/api/${enviroments.API_VERSION}`, [itemsRouter]);
};
