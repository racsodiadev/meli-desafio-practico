import axios from 'axios';
import URLS from '../../../configs/urls';
import { ItemRequestDTO } from '../domain/dto/items.dto';
import { MeliSearchQueryDTO } from './dto/search-query.dto';

export const searchQuery = async (query: ItemRequestDTO): Promise<MeliSearchQueryDTO> => {
  const url = URLS.meli.mla.search + '?q=:' + query.query;
  let response: MeliSearchQueryDTO | null = null;
  try{
    response = await axios.get(url);

    return response;
  } catch (error) {
    console.error('error :>> ', error);
    return response;
  }
};
