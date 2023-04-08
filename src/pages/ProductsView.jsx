import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeHeader from "./common/EmployeeHeader";

const ProductsView = () => {
    const [products, setProducts] = useState([]);
    const [amount, setAmount] = useState(0);

    const increaseStockCount = (id, amount) => {
        axios
            .patch(`http://localhost:9000/products/${id}/increase-stock/${amount}`)
            .then((response) => {
                setProducts((prevProducts) =>
                    prevProducts.map((product) => {
                        if (product.id === id) {
                            return {
                                ...product,
                                stock_count: product.stock_count + amount,
                            };
                        } else {
                            return product;
                        }
                    })
                );
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const activateProduct = (id) => {
        axios
            .patch(`http://localhost:9000/products/${id}/activate`)
            .then((response) => {
                setProducts((prevProducts) =>
                    prevProducts.map((product) => {
                        if (product.id === id) {
                            return {
                                ...product,
                                status: true,
                            };
                        } else {
                            return product;
                        }
                    })
                );
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const deactivateProduct = (id) => {
        axios
            .patch(`http://localhost:9000/products/${id}/deactivate`)
            .then((response) => {
                setProducts((prevProducts) =>
                    prevProducts.map((product) => {
                        if (product.id === id) {
                            return {
                                ...product,
                                status: false,
                            };
                        } else {
                            return product;
                        }
                    })
                );
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        axios.get("http://localhost:9000/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <EmployeeHeader />
            <h1>Products</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Product</th>
                    <th>Status</th>
                    <th>Stock Count</th>
                    <th>Price</th>
                    <th>Increament</th>
                    <th>Actions</th>
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
                        <td>
                            <div>
                                <input
                                    type="number"
                                    min="0"
                                    step="1"
                                    onChange={(event) =>
                                        setAmount(parseInt(event.target.value))
                                    }
                                />
                                <button
                                    onClick={() => increaseStockCount(product.id, amount)}
                                >
                                    Add
                                </button>
                            </div>
                        </td>
                        <td>
                            {product.status ? (
                                <button
                                    onClick={() =>
                                        axios
                                            .patch(
                                                `http://localhost:9000/products/${product.id}/deactivate`
                                            )
                                            .then(() => {
                                                setProducts((prevProducts) =>
                                                    prevProducts.map((prevProduct) => {
                                                        if (prevProduct.id === product.id) {
                                                            return { ...prevProduct, status: false };
                                                        }
                                                        return prevProduct;
                                                    })
                                                );
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                            })
                                    }
                                >
                                    Deactivate
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        axios
                                            .patch(
                                                `http://localhost:9000/products/${product.id}/activate`
                                            )
                                            .then(() => {
                                                setProducts((prevProducts) =>
                                                    prevProducts.map((prevProduct) => {
                                                        if (prevProduct.id === product.id) {
                                                            return { ...prevProduct, status: true };
                                                        }
                                                        return prevProduct;
                                                    })
                                                );
                                            })
                                            .catch((error) => {
                                                console.error(error);
                                            })
                                    }
                                >
                                    Activate
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsView;