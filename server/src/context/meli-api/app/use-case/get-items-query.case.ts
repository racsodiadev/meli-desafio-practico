import { getItemByQuery } from "../../domain/contract/items.contract"
import { ItemRequestDTO } from "../../domain/dto/items.dto";


export const itemsQuery = (query: ItemRequestDTO) => {
    return getItemByQuery(query);
}