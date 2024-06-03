import { Outlet, Navigate } from 'react-router-dom'
import React, {useContext} from 'react'
import AuthContext from './AuthContext.js';
const PrivateRoutes = () => {
    const { auth } = useContext(AuthContext);
    return(
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes