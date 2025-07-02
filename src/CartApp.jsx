import {CatalogView} from "./components/CatalogView.jsx";
import {CartView} from "./components/CartView.jsx";
import {useItemsCart} from "./hooks/useItemsCart.js";

export const CartApp = () => {

    const {cartItems, handleAddToCart, handleRemoveFromCart} = useItemsCart()

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