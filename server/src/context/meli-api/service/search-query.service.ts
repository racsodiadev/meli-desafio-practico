import axios from 'axios';
import URLS from '../../../configs/urls';
import { ItemRequestDTO } from '../domain/dto/items.dto';
import { MeliSearchQueryDTO } from './dto/search-query.dto';

export const searchQuery = async (dto: ItemRequestDTO): Promise<MeliSearchQueryDTO> => {
  const url = URLS.meli.mla.search();
  let response: MeliSearchQueryDTO = null;
  try {
    const search = await axios.get(url, { params: { q: dto.query } });
    response = search.data;
    return response;
  } catch (error) {
    console.error('error :>> ', error);
    return response;
  }
};
