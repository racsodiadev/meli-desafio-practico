import axios from 'axios';
import URLS from '../../../configs/urls';
import { ItemDescriptionResponseDTO } from './dto/item-description.dto';

export const itemDescription = async (id: string): Promise<ItemDescriptionResponseDTO> => {
  const url = URLS.meli.mla.itemSearch.description(id);
  let response: ItemDescriptionResponseDTO = null;

  try {
    const search = await axios.get(url);
    response = search.data;
    return response;
  } catch (error) {
    console.error('SearchQueryService error :>> ', error);
    return response;
  }
};
