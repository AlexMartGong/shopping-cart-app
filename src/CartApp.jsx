import {CatalogView} from "./components/CatalogView.jsx";
import {CartView} from "./components/CartView.jsx";
import {useState} from "react";

const initialCart = JSON.parse((sessionStorage.getItem('cart') || '[]'));

export const CartApp = () => {

    const [cartItems, setCartItems] = useState(initialCart);

    const handleRemoveFromCart = (id) => {
        setCartItems([...cartItems.filter(item => item.id !== id)]);
    }

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
            <div className="container my-5">
                <h1>Shopping cart</h1>
                {cartItems.length <= 0 || (
                    <CartView items={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>
                )}
                <CatalogView handler={handleAddToCart}/>
            </div>
        </>
    )
}