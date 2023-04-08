import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeHeader from "./common/EmployeeHeader";

function ServicePage() {
    const [customerId, setCustomerId] = useState(1);
    const [productId, setProductId] = useState(1);
    const [units, setUnits] = useState(1);
    const [serviceRef, setServiceRef] = useState('');
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [result, setResult] = useState({});

    // Load customers and products on component mount
    useEffect(() => {
        async function fetchCustomersAndProducts() {
            try {
                const customersResponse = await axios.get('http://localhost:9000/customers/all');
                setCustomers(customersResponse.data.data);

                const productsResponse = await axios.get('http://localhost:9000/products');
                setProducts(productsResponse.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCustomersAndProducts();
    }, []);

    const handleCustomerIdChange = (event) => {
        setCustomerId(Number(event.target.value));
    };

    const handleProductIdChange = (event) => {
        setProductId(Number(event.target.value));
    };

    const handleUnitsChange = (event) => {
        setUnits(Number(event.target.value));
    };

    const handleServiceRefChange = (event) => {
        setServiceRef(event.target.value);
    };

    // Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/services', {
                customerId,
                productId,
                units,
                service_ref: serviceRef
            });
            setResult(response.data);
        } catch (error) {
            alert(error);
            console.error(error);
        }
    }

    return (
        <div>
            <EmployeeHeader />
            <h1>Create a new service</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer:
                    <select value={customerId} onChange={handleCustomerIdChange} required>
                        {customers.map((customer) => (
                            <option key={customer.id} value={customer.id}>
                                {customer.customer_names}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Product:
                    <select value={productId} onChange={handleProductIdChange} required>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.product}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Units:
                    <input type="number" value={units} onChange={handleUnitsChange} min="1" required />
                </label>
                <br />
                <label>
                    Service Ref:
                    <input type="text" value={serviceRef} onChange={handleServiceRefChange} required />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {result.id && (
                <div>
                    <h2>Service created successfully</h2>
                    <p>ID: {result.id}</p>
                    <p>Customer ID: {result.customer_id}</p>
                    <p>Product ID: {result.product_id}</p>
                    <p>Service Ref: {result.service_ref}</p>
                    <p>Units: {result.units}</p>
                    <p>Total Cost: {result.total_cost}</p>
                    <p>Balance: {result.balance}</p>
                    <p>Status: {result.status ? 'Paid' : 'Unpaid'}</p>
                    <p>Created At: {result.created_at}</p>
                    <p>Updated At: {result.updated_at}</p>
                </div>
            )}
        </div>
    );
}

export default ServicePage;
