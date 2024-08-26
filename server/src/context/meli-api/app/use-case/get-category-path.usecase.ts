import { getCategoriesContract } from '../../domain/contract/categories.contract';
import { 
    CategoryDataResponseDTO } from '../../service/dto/category.dto';
import { PathFromRoot } from '../../service/dto/search-query.dto';

export const getCategoryPath = async (category: string): Promise<PathFromRoot[]> => {
  const categories: CategoryDataResponseDTO = await getCategoriesContract(category);
  const pathFromRoot = categories?.path_from_root ?? [];
  return pathFromRoot;
};
