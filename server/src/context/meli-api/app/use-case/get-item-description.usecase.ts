import { getItemDescriptionContract } from '../../domain/contract/items.contract';
import { ItemDescriptionResponse, ItemDescriptionResponseDTO } from '../../service/dto/item-description.dto';

export const getItemDescription = async (id: string): Promise<ItemDescriptionResponseDTO> => {
  const description: ItemDescriptionResponseDTO = (await getItemDescriptionContract(id));
  return description;
};
