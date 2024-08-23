import express, { Express, Request, Response } from 'express';
import enviroments from './configs/enviroment';

import { routes } from './api';

const app: Express = express();
const port = enviroments.PORT;


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

routes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
