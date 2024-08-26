import { Router } from "express";
import { itemQueryController } from "../controllers/get-items-query.controller";
import { itemByIDController } from "../controllers/get-item-by-id.controller";


const itemsRouter = Router();

itemsRouter.get('/items',itemQueryController);
itemsRouter.get('/item/:id', itemByIDController);

export default itemsRouter;