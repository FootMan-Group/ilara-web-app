import React from "react";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("customer_names");
        localStorage.removeItem("customer_id");
        localStorage.removeItem("token");
        navigate('/customers/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto"></ul>
                <button onClick={handleLogout} className="btn btn-link">Logout</button>
            </div>
        </nav>
    );
};

export default LogOutButton;
