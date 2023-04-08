import React, { useState } from "react";
import axios from "axios";
import EmployeeHeader from "./common/EmployeeHeader";

const CreateCustomer = () => {
    const [customer, setCustomer] = useState({
        msisdn: "",
        identification_number: "",
        email: "",
        customer_names: "",
        password: "",
    });
    const [createdCustomer, setCreatedCustomer] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomer) => ({
            ...prevCustomer,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/customers/create", customer)
            .then((response) => {
                setCreatedCustomer(response.data);
                setCustomer({
                    msisdn: "",
                    identification_number: "",
                    email: "",
                    customer_names: "",
                    password: "",
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <EmployeeHeader />
            <h1>Create Customer</h1>
            {createdCustomer && (
                <div>
                    <h2>Customer created successfully!</h2>
                    <p>ID: {createdCustomer.id}</p>
                    <p>Name: {createdCustomer.customer_names}</p>
                    <p>MSISDN: {createdCustomer.msisdn}</p>
                    <p>Email: {createdCustomer.email}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="msisdn">MSISDN:</label>
                    <input
                        type="text"
                        id="msisdn"
                        name="msisdn"
                        value={customer.msisdn}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="identification_number">Identification Number:</label>
                    <input
                        type="text"
                        id="identification_number"
                        name="identification_number"
                        value={customer.identification_number}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="customer_names">Customer Names:</label>
                    <input
                        type="text"
                        id="customer_names"
                        name="customer_names"
                        value={customer.customer_names}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={customer.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Create Customer</button>
            </form>
        </div>
    );
};

export default CreateCustomer;
