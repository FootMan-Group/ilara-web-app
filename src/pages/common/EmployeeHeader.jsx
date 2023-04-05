import React from 'react';

function EmployeeHeader() {
    return (
        <div className="header">
            <h1>My Application</h1>
            <nav>
                <ul>
                    <li><a href="/transactions/all">Transactions</a></li>
                    <li><a href="/services/all">Services</a></li>
                    <li><a href="/customers/all">Customers</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default EmployeeHeader;