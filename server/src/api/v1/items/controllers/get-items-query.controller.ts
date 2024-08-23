import { Request, Response } from 'express';

export const itemQueryController = (req: Request, res: Response) => {
  const { q } = req.query;
  console.log('q :>> ', q);
};
