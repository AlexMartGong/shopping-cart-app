import {useEffect, useState} from "react";
import {getCalculeTotal} from "../services/productService.js";

export const CartView = ({items, handleRemoveFromCart}) => {

    const [getTotal, setGetTotal] = useState(0);

    useEffect(() => {
        setGetTotal(getCalculeTotal(items));
    }, [items]);

    const onDeleteProduct = (id) => {
        handleRemoveFromCart(id);

    }

    return (
        <>
            <table className="table table-striped table-bordered table-hover table-responsive">
                <thead>
                <tr>
                    <th>name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price * item.quantity}</td>
                        <td>
                            <button className="btn btn-danger btn-sm"
                                    onClick={() => onDeleteProduct(item.id)}>
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="4" className="text-end fw-bold">Total:</td>
                    <td colSpan="1" className="text-start fw-bold">$ {getTotal}</td>
                </tr>
                </tfoot>
            </table>
        </>
    )
}