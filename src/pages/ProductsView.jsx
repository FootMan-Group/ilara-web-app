import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsView = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9000/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Product</th>
                    <th>Status</th>
                    <th>Stock Count</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.product}</td>
                        <td>{product.status ? "Active" : "Inactive"}</td>
                        <td>{product.stock_count}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsView;
