import {Navbar} from "./components/Navbar.jsx";
import {CartRoutes} from "./routes/CartRoutes.jsx";
import {useItemsCart} from "./hooks/useItemsCart.js";

export const CartApp = () => {
    const {cartItems, handleAddToCart, handleRemoveFromCart} = useItemsCart()
    return (
        <>
            <Navbar/>
            <div className="container my-5">
                <h1>Shopping cart</h1>
                <CartRoutes cartItems={cartItems} handleAddToCart={handleAddToCart}
                            handleRemoveFromCart={handleRemoveFromCart}/>
            </div>
        </>
    )
}