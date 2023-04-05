import React, { useState, useEffect } from 'react';
import EmployeeHeader from "./common/EmployeeHeader";

const AllCustomersView = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch('http://localhost:9000/customers/all');
            const data = await response.json();
            setCustomers(data.data);
        };
        fetchCustomers();
    }, []);

    return (
        <div>
            <EmployeeHeader />
            <h1>All Customers</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Identification Number</th>
                    <th>Customer Names</th>
                    <th>MSISDN</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.identification_number}</td>
                        <td>{customer.customer_names}</td>
                        <td>{customer.msisdn}</td>
                        <td>{customer.email}</td>
                        <td>{customer.created_at}</td>
                        <td>{customer.updated_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllCustomersView;
