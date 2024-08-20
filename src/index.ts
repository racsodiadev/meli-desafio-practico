import express, { Express, Request, Response } from 'express';
import properties from './config/config';

const app: Express = express();
const port = properties.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
