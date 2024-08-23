import { Router } from "express";
import { itemQueryController } from "../controllers/get-items-query.controller";


const itemsRouter = Router();

itemsRouter.get('/items',itemQueryController);

export default itemsRouter;