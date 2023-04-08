import { useState } from 'react';
import CustomerLoginForm from '../components/customers/CustomerLoginForm';
import LoginHeader from "./common/LoginHeader";
import CustomerProfile from '../components/customers/CustomerProfile';
function CustomerLogin() {
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async (values) => {
        try {
            const response = await fetch('http://localhost:9000/customers/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message);
            }

            const data = await response.json();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            setLoggedIn(true);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    console.log(loggedIn);
    if (loggedIn) {
        return <CustomerProfile />;
    }

    return (
        <div>
            <LoginHeader />
            <h1>Customer Login</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <CustomerLoginForm onSubmit={handleLogin} />
        </div>
    );
}


export default CustomerLogin;
