import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerHeader from "./common/CustomerHeader";

function CustomerTransactions(props) {
    const [transactions, setTransactions] = useState([]);
    const customerId = localStorage.getItem('customer_id');

    useEffect(() => {
        axios.get(`http://localhost:9000/transactions/customer/${customerId}`)
            .then(response => {
                setTransactions(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [customerId]);

    return (
        <div>
            <CustomerHeader />
            <h1>Transactions for Customer {props.customerID}</h1>
            <table>
                <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Payment Ref</th>
                    <th>Account Ref</th>
                    <th>Amount</th>
                    <th>Transaction Timestamp</th>
                    <th>Status</th>
                    <th>Payer Name</th>
                    <th>Payer Number</th>
                    <th>Source</th>
                    <th>Service ID</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.payment_ref}</td>
                        <td>{transaction.account_ref}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.transaction_timestamp}</td>
                        <td>{transaction.status ? 'Paid' : 'Unpaid'}</td>
                        <td>{transaction.payer_name}</td>
                        <td>{transaction.payer_number}</td>
                        <td>{transaction.source}</td>
                        <td>{transaction.service_id}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerTransactions;
