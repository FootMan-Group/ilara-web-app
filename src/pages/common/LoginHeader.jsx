import React from 'react';

function LoginHeader() {
    return (
        <div className="header">
            <h1>My Application</h1>
            <nav>
                <ul>
                    <li><a href="/employee/login">Employee Login</a></li>
                    <li><a href="/customers/login">Customer Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default LoginHeader;