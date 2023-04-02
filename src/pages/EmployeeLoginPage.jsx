import { useState } from 'react';
import EmployeeLoginForm from '../components/employee/EmployeeLoginForm';

function EmployeeLogin() {
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (values) => {
        try {
            const response = await fetch('http://localhost:9000/auth/signin', {
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
            // Redirect to employee dashboard
            // e.g. history.push('/employees/dashboard');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <h1>Employee Login</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <EmployeeLoginForm onSubmit={handleLogin} />
        </div>
    );
}

export default EmployeeLogin;
