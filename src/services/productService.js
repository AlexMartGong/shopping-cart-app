import {products} from "../data/products.js";

export const getProducts = () => {
    return products;
}

export const getCalculeTotal = (items) => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}
