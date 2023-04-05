import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeHeader from './common/EmployeeHeader';

const AllTransactionsView = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const response = await axios.get('http://localhost:9000/transactions/all');
            setTransactions(response.data);
        };
        fetchTransactions();
    }, []);

    return (
        <div>
            <EmployeeHeader />
            <h2>All Transactions</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Customer ID</th>
                    <th>Transaction Type ID</th>
                    <th>Payment Ref</th>
                    <th>Account Ref</th>
                    <th>Amount</th>
                    <th>Transaction Timestamp</th>
                    <th>Status</th>
                    <th>Payer Name</th>
                    <th>Payer Number</th>
                    <th>Source</th>
                    <th>Service Balance</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.customerID['customer_names']}</td>
                        <td>{transaction.transaction_type_id}</td>
                        <td>{transaction.payment_ref}</td>
                        <td>{transaction.account_ref}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.transaction_timestamp}</td>
                        <td>{transaction.status ? 'True' : 'False'}</td>
                        <td>{transaction.payer_name}</td>
                        <td>{transaction.payer_number}</td>
                        <td>{transaction.source}</td>
                        <td>{transaction.serviceID['balance']}</td>
                        <td>{transaction.created_at}</td>
                        <td>{transaction.updated_at}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTransactionsView;
