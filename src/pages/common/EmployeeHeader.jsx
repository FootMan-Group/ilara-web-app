import React from 'react';
import LogOutButton from "./LogOutButton";

function EmployeeHeader() {
    return (
        <div className="header">
            <h1>Ilara Health Employee Portal</h1>
            <nav>
                <ul>
                    <li><a href="/transactions/all">Transactions</a></li>
                    <li><a href="/services/all">Services</a></li>
                    <li><a href="/customers/all">Customers</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/customers/create">Create Customer</a></li>
                    <li><a href="/services/create">Create Service</a></li>
                    <li><a href="/products/create">Create Product</a></li>
                </ul>
            </nav>
            <LogOutButton />
        </div>
    );
}

export default EmployeeHeader;