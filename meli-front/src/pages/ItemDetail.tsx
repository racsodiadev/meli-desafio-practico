import { useParams } from "react-router-dom";
import { useItemByID } from "../services/ItemService";
import Loader from "../components/common/Loader";
import ItemDetailContainer from "../components/ItemDetailContainer";


const ItemDetail = () => {

    const { id } = useParams()
    console.log('location :>> ', id)
    const { data, loading, error } = useItemByID(id ?? '')


    if (loading) {
        return <Loader />
    }
    if (error) {
        return <div>{error}</div>
    }

    if (data) {
        console.log('data :>> ', data);
        return (
            <ItemDetailContainer item={data.item}/>
        )
    }

    return <p>ItemList</p>
}

export default ItemDetail;