import React from "react";
import { Item } from "../types/ItemTypes"
import { useNavigate } from "react-router-dom";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    item: Item
}

const ItemListBox: React.FC<ItemProps> = (props: ItemProps) => {

    const navigate = useNavigate()

    const handleItemClick = () => [
        navigate(`/item/${props.item.id}`)
    ]

    return (
        <div id="item" onClick={handleItemClick} className="item-box-container">
            <div className="row">
                <div className="col-3">
                    <img className="item-box-img" src={props.item.thumbnail} alt={props.item.title} />
                </div>
                <div className="col-9 item-box-description">
                    <div className="row">
                        <div className="col-3 p-0">
                            <span style={{fontSize: '35px'}}>{Intl.NumberFormat('es-CL', { style: "currency", currency: 'CLP' }).format(props.item.price)}</span>
                           
                        </div>
                        <div className="col-9 p-0" style={{alignContent: 'center'}}>
                        {props.item.shipping.free_shipping ? <span ><img src="/img/shipping.png" alt="Envío gratis" />  </span> : ''}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{props.item.title}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{props.item.condition === "new"? "Nuevo": "Usado"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListBox