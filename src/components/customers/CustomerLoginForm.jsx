import React, { useState } from 'react';

const CustomerLoginForm = () => {
    const [identification_number, setIdentification_number] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:9000/customers/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identification_number: identification_number,
                password: password,
            }),
        });
        console.log(response);
        if (response.ok) {
            const data = await response.json();
            // Store the JWT token in local storage or cookies
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            alert('Successfully logged in');
        } else {
            alert('Failed to login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Identification Number:</label>
                <input
                    type="identification_number"
                    id="identification_number"
                    value={identification_number}
                    onChange={(event) => setIdentification_number(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default CustomerLoginForm;
