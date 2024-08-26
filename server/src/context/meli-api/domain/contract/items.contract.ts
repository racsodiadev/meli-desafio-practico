import { ItemDescriptionResponseDTO } from '../../service/dto/item-description.dto';
import { SearchItemResponseDTO } from '../../service/dto/search-item-id.dto';
import { MeliSearchQueryDTO } from '../../service/dto/search-query.dto';
import { itemDescription } from '../../service/item-description.dto';
import { searchItemById } from '../../service/search-item-id.service';
import { searchQuery } from '../../service/search-query.service';
import { ItemRequestDTO } from '../dto/items.dto';

export const getItemByQueryContract = async (query: ItemRequestDTO): Promise<MeliSearchQueryDTO> => {
  return await searchQuery(query);
};

export const getItemByIDContract = async (id: string): Promise<SearchItemResponseDTO> => {
  return await searchItemById(id);
};

export const getItemDescriptionContract = async (id: string): Promise<ItemDescriptionResponseDTO> => {
  return await itemDescription(id);
};
