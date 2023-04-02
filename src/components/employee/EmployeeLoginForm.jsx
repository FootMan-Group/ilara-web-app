import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:9000/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            // Store the JWT token in local storage or cookies
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            alert('Successfully logged in');
            navigate('/products');
        } else {
            alert('Failed to login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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

export default EmployeeLoginForm;
