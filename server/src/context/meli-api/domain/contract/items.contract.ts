import { MeliSearchQueryDTO } from '../../service/dto/search-query.dto';
import { searchQuery } from '../../service/search-query.service';
import { ItemRequestDTO } from '../dto/items.dto';

export const getItemByQuery = async (query: ItemRequestDTO): Promise<MeliSearchQueryDTO> => {
  return await searchQuery(query);
};
