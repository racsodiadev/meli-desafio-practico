import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { version } from '../package.json';
import enviroments from './configs/enviroment';

import { routes } from './api';

const app: Express = express();
const port = enviroments.PORT;

app.use(cors())
app.get('/health', (req: Request, res: Response) => {
  res.send({ status: 'online', version: version });
});
app.get('/', (req: Request, res: Response) => {
  res.send('BFF for MercadoLibre Test');
});

routes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
