import { Request, Response } from 'express';
import { itemsQuery } from '../../../../context/meli-api/app/use-case/get-items-query.case';

export const itemQueryController = async (req: Request, res: Response) => {
  const { q } = req.query;
  if (typeof q === 'string') {
    const items = await itemsQuery({ query: q });
    if (items === null) {
      res.sendStatus(502);
    } else {
      res.send(items);
    }
  } else {
    res.sendStatus(400).send({message: 'string expected'});
  }
};
