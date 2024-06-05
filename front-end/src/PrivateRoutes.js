import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
//const API_BASE = "http://localhost:3000";
const PrivateRoutes = () => {
    const AUTHENTICATE_API = `${API_BASE}/api/protected`;
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const retrievedToken = window.localStorage.getItem('token');
        if (!retrievedToken) {
            console.log("No token found, navigating to home");
            navigate('/');
            return;
        }

        const authenticate = async () => {
            try {
                await axios.get(AUTHENTICATE_API, {
                    headers: {
                        'Authorization': retrievedToken
                    }
                });
                setIsAuthenticated(true);
            } catch (error) {
                if (error.response) {
                    setIsAuthenticated(false);
                    navigate('/');
                }
            }
        }
        authenticate();
    }, [AUTHENTICATE_API, navigate]);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated ? <Outlet /> : null
    );
}

export default PrivateRoutes;
