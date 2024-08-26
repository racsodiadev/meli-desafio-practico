import axios from 'axios';
import URLS from '../../../configs/urls';
import { CategoryDataResponseDTO } from './dto/category.dto';

export const subCategory = async (category: string): Promise<CategoryDataResponseDTO> => {
  const url = URLS.meli.categories() + category;

  let response: CategoryDataResponseDTO = null;
  try {
    const categories = await axios.get(url);
    response = categories.data;
    return response;
  } catch (error) {
    console.error('SubCategoryService error :>> ', error);
    return response;
  }
};
