import {useEffect, useState} from "react";
import {getProducts} from "../services/productService.js";
import {CatalogItems} from "./CatalogItems.jsx";

export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts);
    }, []);

    return (
        <>
            <div className="row">
                {products.map((p) => (
                    <div className="col-4 my-2" key={p.id}>
                        <CatalogItems id={p.id} name={p.name} price={p.price} description={p.description}
                                      handler={handler}/>
                    </div>
                ))}
            </div>
        </>
    )
}