import enviroments from '../../../../configs/enviroment';
import { getItemByIDContract } from '../../domain/contract/items.contract';
import { ItemByIdDTO } from '../../domain/dto/items.dto';
import { getItemDescription } from './get-item-description.usecase';

export const getItemByID = async (id: string): Promise<ItemByIdDTO> => {
  const item = await getItemByIDContract(id);
  const description = await getItemDescription(id);
  if (item !== null) {
    item.description = description;
  }

  const itemResponse = {
    author: {
      name: enviroments.AUTHOR.NAME,
      lastname: enviroments.AUTHOR.LASTNAME,
    },
    item: item,
  };

  return itemResponse;
};
