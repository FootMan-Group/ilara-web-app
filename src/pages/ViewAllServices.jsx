import React, { useState, useEffect } from "react";
import EmployeeHeader from "./common/EmployeeHeader";

function ViewAllServices() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchServices() {
            const response = await fetch("http://localhost:9000/services/all/");
            const data = await response.json();
            setServices(data);
        }
        fetchServices();
    }, []);

    return (
        <div>
            <EmployeeHeader />
            <h1>All Services</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Customer ID</th>
                    <th>Product ID</th>
                    <th>Service Ref</th>
                    <th>Units</th>
                    <th>Total Cost</th>
                    <th>Balance</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
                </thead>
                <tbody>
                {services.map((service) => (
                    <tr key={service.id}>
                        <td>{service.id}</td>
                        <td>{service.customerID['customer_names']}</td>
                        <td>{service.productID['product']}</td>
                        <td>{service.service_ref}</td>
                        <td>{service.units}</td>
                        <td>{service.total_cost}</td>
                        <td>{service.balance}</td>
                        <td>{service.status ? "Active" : "Inactive"}</td>
                        <td>{service.created_at}</td>
                        <td>{service.updated_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewAllServices;
