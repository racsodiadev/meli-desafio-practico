import { SearchItemResponse } from "../../service/dto/search-item-id.dto";
import { Item } from "../../service/dto/search-query.dto";

export interface ItemRequestDTO{
    query: string;
}

export interface ItemResponseDTO{
    author: Author;
    categories: String[];
    items: Item[];
}

export interface ItemByIdDTO {
    author: Author;
    item: SearchItemResponse | null;
}
interface Author {
    name: String;
    lastname: String;
}

