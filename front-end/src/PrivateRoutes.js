import { Outlet, useNavigate } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from 'axios' 
const API_BASE = ("https://c4c-projects.onrender.com" || "https:localhost:3000")
//const API_BASE = "http://localhost:3000";
const PrivateRoutes = () => {
    const AUTHENTICATE_API = `${API_BASE}/api/protected`;
    const Navigate = useNavigate();
    const [isAuthenticated, setisAuthenticated] = useState(false)
   
    

    useEffect(() => {
        const retrievedToken = window.localStorage.getItem('token')
        if (!retrievedToken) {
            console.log("No token found no request")
            return 
        }
       
        const authenticate = async () => {
            try {
            const response = await axios.get(AUTHENTICATE_API,  {
                headers: {
                  'Authorization': retrievedToken
                }
              })
            setisAuthenticated(response.data)
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    Navigate('/')
                  }
            }
        }
        authenticate();
      }, [AUTHENTICATE_API, isAuthenticated, Navigate]);

    return(
        isAuthenticated ? <Outlet/> : <Navigate to="/admin"/>
    )
}

export default PrivateRoutes