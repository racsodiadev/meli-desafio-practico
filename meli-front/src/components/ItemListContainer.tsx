import { Item, ItemData } from "../types/ItemTypes";
import ItemListBox from "./ItemListBox";


interface ItemsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ItemData
}


const ItemListContainer: React.FC<ItemsProps> = (props: ItemsProps) => {
    return(
        <div className="container">
        {props.items.items.map((item:Item) => <ItemListBox item={item}/>)}
    </div>
    )
}

export default ItemListContainer