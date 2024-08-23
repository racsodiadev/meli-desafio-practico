import enviroments from '../../../../configs/enviroment';
import { mostFrecuentElement } from '../../../shared/utils/mostfrecuentElement';
import { getItemByQuery } from '../../domain/contract/items.contract';
import { ItemRequestDTO, ItemResponseDTO } from '../../domain/dto/items.dto';
import { Item } from '../../service/dto/search-query.dto';
import { getCategoryPath } from './get-category-path.usecase';

export const itemsQuery = async (query: ItemRequestDTO): Promise<ItemResponseDTO> => {
  const categoriesResult: string[] = [];
  const categories: string[] = [];
  const searchResult = await getItemByQuery(query);
  const categoriePaths = await getCategoryPath(mostFrecuentElement(categoriesResult));
  const itemResults: Item[] = searchResult?.results ?? [];

  itemResults.map((result) => {
    categoriesResult.push(result.category_id ?? '');
  });

  categoriePaths.map((category) => {
    categories.push(category.name);
  });

  const items: ItemResponseDTO = {
    author: {
      name: enviroments.AUTHOR.NAME,
      lastname: enviroments.AUTHOR.LASTNAME,
    },
    categories: categories,
    items: itemResults,
  };

  return items;
};
