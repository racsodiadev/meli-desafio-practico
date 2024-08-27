import { useParams } from "react-router-dom";
import { useItemByID } from "../services/ItemService";
import Loader from "../components/common/Loader";
import ItemDetailContainer from "../components/ItemDetailContainer";
import BreadCrumb from "../components/common/BreadCrumb";


const ItemDetail = () => {

    const { id } = useParams()
    const { data, loading, error } = useItemByID(id ?? '')


    if (loading) {
        return <Loader />
    }
    if (error) {
        return <div>{error}</div>
    }

    if (data) {

        return (
            <>
                <BreadCrumb categories={localStorage.getItem("categories") ?? ""}/>
                 <ItemDetailContainer item={data.item}/>
            </>
       
        )
    }

    return <p>ItemList</p>
}

export default ItemDetail;