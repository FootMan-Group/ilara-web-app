import { useState, useEffect } from 'react';

const CustomerProfile = () => {
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomerProfile = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await fetch('http://localhost:9000/customers/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setCustomer(data);
                } else {
                    setError('Failed to fetch customer profile');
                }
            } catch (error) {
                setError('Failed to fetch customer profile');
            }
        };
        fetchCustomerProfile();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!customer) {
        return <div>Loading...</div>;
    }
    try {
        localStorage.setItem('customer_id', customer.customerId);
        localStorage.setItem('refresh_token', customer.customer_names);
    }
    catch (e) {
        console.log(e)
    }

    return (
        <div>
            <h1>Customer Profile</h1>
            <div>ID: {customer.customerId}</div>
            <div>Name: {customer.customer_names}</div>
            // Add other fields as needed
        </div>
    );
};

export default CustomerProfile;
