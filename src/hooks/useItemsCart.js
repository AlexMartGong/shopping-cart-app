import {useEffect, useReducer} from "react";
import {itemsReducer} from "../reducer/itemsReducer.js";
import {ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY_ITEM} from "../reducer/itemsAction.js";

const initialCart = JSON.parse((sessionStorage.getItem('cart') || '[]'));


export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCart);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = (product) => {
        const hasItem = cartItems.find(item => item.id === product.id);
        if (hasItem) {
            dispatch(
                {
                    type: UPDATE_QUANTITY_ITEM,
                    payload: {
                        id: product.id,
                    }
                });
        } else {
            dispatch({
                type: ADD_ITEM,
                payload: product,
            });
        }
    }

    const handleRemoveFromCart = (id) => {
        dispatch({
            type: REMOVE_ITEM,
            payload: {
                id: id,
            }
        });
    }

    return {
        cartItems,
        handleAddToCart,
        handleRemoveFromCart
    }
}