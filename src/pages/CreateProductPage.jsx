import React, { useState } from 'react';
import EmployeeHeader from "./common/EmployeeHeader";

function CreateProductPage() {
    const [product, setProduct] = useState('');
    const [status, setStatus] = useState(true);
    const [stockCount, setStockCount] = useState('');
    const [price, setPrice] = useState('');
    const [savedProduct, setSavedProduct] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            product,
            status,
            stock_count: parseInt(stockCount),
            price: parseInt(price)
        };
        const response = await fetch('http://localhost:9000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        console.log(data);
        setSavedProduct(data);
    };

    return (
        <div>
            <EmployeeHeader />
            <h1>Create a new Product</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="product">Product:</label>
                <input
                    type="text"
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
                <br />
                <label htmlFor="status">Status:</label>
                <input
                    type="checkbox"
                    id="status"
                    checked={status}
                    onChange={(e) => setStatus(e.target.checked)}
                />
                <br />
                <label htmlFor="stockCount">Stock Count:</label>
                <input
                    type="number"
                    id="stockCount"
                    value={stockCount}
                    onChange={(e) => setStockCount(parseInt(e.target.value))}
                />
                <br />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                />
                <br />
                <button type="submit">Create Product</button>
            </form>
            {savedProduct && (
                <div>
                    <h2>Saved Product:</h2>
                    <p>ID: {savedProduct.id}</p>
                    <p>Product: {savedProduct.product}</p>
                    <p>Status: {savedProduct.status ? 'Active' : 'Inactive'}</p>
                    <p>Stock Count: {savedProduct.stock_count}</p>
                    <p>Price: {savedProduct.price}</p>
                </div>
            )}
        </div>
    );
}

export default CreateProductPage;
