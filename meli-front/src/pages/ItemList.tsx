import { useLocation } from "react-router-dom";
import { useItemByQuery } from "../services/ItemService";
import Loader from "../components/common/Loader";
import ItemListContainer from "../components/ItemListContainer";
import BreadCrumb from "../components/common/BreadCrumb";

const ItemList = () => {
    const { search } = useLocation()
    const query = new URLSearchParams(search).get('search') ?? ''
    const { data, loading, error } = useItemByQuery(query)

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <div>{error}</div>
    }

    if (data) {
        localStorage.setItem("categories", data.categories.join( " > " ))
        return (
            <>
                <BreadCrumb categories={data.categories} />
                <ItemListContainer items={data} />
            </>

        )
    }

    return <p>ItemList</p>
}

export default ItemList;