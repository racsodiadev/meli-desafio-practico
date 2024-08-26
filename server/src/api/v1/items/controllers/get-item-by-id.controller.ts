import { Request, Response } from 'express';
import { getItemByID } from '../../../../context/meli-api/app/use-case/get-item-by-id.useacase';

export const itemByIDController = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) {
    res.sendStatus(400).send({ message: 'id param expected' });
  } else {
    const item = await getItemByID(id);
    if (item === null) {
      res.sendStatus(502);
    } else {
      res.send(item);
    }
  }
};
