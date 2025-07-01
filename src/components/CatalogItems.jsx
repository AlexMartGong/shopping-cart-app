export const CatalogItems = ({id, name, description, price, handler}) => {

    const onAddToCart = (product) => {
        handler(product);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <button className="btn btn-primary" onClick={() => onAddToCart({id, name, description, price})}>
                        Add to the cart
                    </button>
                </div>
            </div>
        </>
    )
}