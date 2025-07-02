import {useNavigate} from "react-router-dom";

export const CatalogItems = ({id, name, description, price, handler}) => {

    const navigate = useNavigate();

    const onAddToCart = (product) => {
        handler(product);
        navigate('/cart');
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