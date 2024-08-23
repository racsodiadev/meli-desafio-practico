import { Item } from "../../service/dto/search-query.dto";

export interface ItemRequestDTO{
    query: string;
}

export interface ItemResponseDTO{
    author: Author;
    categories: String[];
    items: Item[];
}

interface Author {
    name: String;
    lastname: String;
}

