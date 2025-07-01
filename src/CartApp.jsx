import {CatalogView} from "./components/CatalogView.jsx";
import {CartView} from "./components/CartView.jsx";
import {useState} from "react";

export const CartApp = () => {

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        const hasItem = cartItems.find(item => item.id === product.id);
        if (hasItem) {
            setCartItems(cartItems.map(item => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            }));
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
        }
    }

    return (
        <>
            <div className="container">
                <h1>Shopping cart</h1>
                <CatalogView handler={handleAddToCart}/>
                <CartView items={cartItems}/>
            </div>
        </>
    )
}