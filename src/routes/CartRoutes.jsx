import {Route, Routes} from "react-router-dom";
import {CatalogView} from "../components/CatalogView.jsx";
import {CartView} from "../components/CartView.jsx";

export const CartRoutes = ({cartItems, handleAddToCart, handleRemoveFromCart}) => {
    return (
        <Routes>
            <Route path="/" element={<CatalogView handler={handleAddToCart}/>}/>
            <Route path="/cart" element={(
                cartItems.length <= 0 ? <p className="alert alert-warning">Your cart is empty</p> : (
                    <CartView items={cartItems} handleRemoveFromCart={handleRemoveFromCart}/>)
            )}/>
        </Routes>
    )
}