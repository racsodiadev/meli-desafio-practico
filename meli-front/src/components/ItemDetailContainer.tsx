

const ItemDetailContainer = (props: any) => {
    return (
        <div id="item-detail" className="container item-detail-container">
            <div className="row">
                <div className="col-8 text-center">
                    <img src={props.item.pictures[0].url} alt="" />
                </div>
                <div className="col-4 p-3">
                    <span>
                        Condición: {props.item.condition === 'new' ? 'Nuevo' : 'Usado'}
                    </span>
                    <div className="row">
                        <div className="col pt-3">
                            <h5><b>{props.item.title}</b></h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1>{Intl.NumberFormat('es-CL', { style: "currency", currency: 'CLP' }).format(props.item.price)}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button  className="buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-8 p-5 text-description">
                    <h2>Descripción del producto</h2>
                    {props.item.description.plain_text}
                </div>
                <div className="col-4"></div>
            </div>

        </div>
    )
}

export default ItemDetailContainer

