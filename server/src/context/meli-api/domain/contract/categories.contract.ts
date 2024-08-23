import { CategoryDataResponseDTO } from '../../service/dto/category.dto';
import { subCategory } from '../../service/sub-category.service';

export const getCategories = async (dto: string): Promise<CategoryDataResponseDTO> => {
  return await subCategory(dto);
};
