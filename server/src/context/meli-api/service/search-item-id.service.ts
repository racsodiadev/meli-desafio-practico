import axios from 'axios';
import URLS from '../../../configs/urls';
import { SearchItemResponseDTO } from './dto/search-item-id.dto';

export const searchItemById = async (id: string): Promise<SearchItemResponseDTO> => {
  const url = URLS.meli.mla.itemSearch.id() + id;
  let response: SearchItemResponseDTO = null;
  try {
    const item = await axios.get(url);
    response = item.data;
    return response;
  } catch (error) {
    console.error('SearchItemById error :>> ', error);
    return response;
  }
};
