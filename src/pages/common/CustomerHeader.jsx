import React from 'react';
import LogOutButton from "./LogOutButton";

function CustomerHeader() {
    return (
        <div className="header">
            <h1>Ilara Health Customers Portal</h1>
            <nav>
                <ul>
                    <li><a href="/customer/transactions">Transactions</a></li>
                    <li><a href="/customer/services">Services</a></li>
                    <li><a href="/customer/me">Profile</a></li>
                    <li><a href="/customer/service/create">Create Service</a></li>
                </ul>
            </nav>
            <LogOutButton />
        </div>
    );
}

export default CustomerHeader;