import React, { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import logo from '../../images/logo.png';
import LoginModal from '../../pages/login/loginModal.tsx';
import { RiAdminLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
const API_BASE = process.env.REACT_APP_API_BASE;
//const API_BASE = "http://localhost:3000";
export default function NavBar() {
    const navigate = useNavigate()
    const AUTHENTICATE_API = `${API_BASE}/api/protected`;
    const [isOpen, setisOpen] = useState(false)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const logout = () => {
        localStorage.removeItem("token");
        console.log("logged out");
        setisAuthenticated(false)
        navigate('/');
     }
  
    useEffect(() => {
        const retrievedToken = window.localStorage.getItem('token')
        if (!retrievedToken) {
            console.log("No token found no request redirect back");
            return 
        }
        
        const authenticate = async () => {
            try {
            await axios.get(AUTHENTICATE_API,  {
                headers: {
                  'Authorization': retrievedToken
                }
              })
            setisAuthenticated(true)
            } catch (error) {
               
                    setisAuthenticated(false);
                 
                   
                  
            }
        }
        authenticate();
      }, [isAuthenticated, AUTHENTICATE_API, navigate]);

      
    if (isOpen) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'unset'
    }
    return (
        isAuthenticated ? <div className='nav'>
        <li><a href="https://www.c4cneu.com/"><img src={logo} alt="c4c logo" /></a></li>
         <h1>Projects</h1>
        <div className='log-nav'> <span onClick={() => navigate('/admin')}><RiAdminLine className="admin-icon" color='white' size={35}/></span>
        <span onClick={() => logout()}><IoLogOutOutline className="logout-icon" color='white' size={35}/></span>
        </div>
        
       
     </div> :
        <div className='nav'>
           <li><a href="https://www.c4cneu.com/"><img src={logo} alt="c4c logo" /></a></li>
            <h1>Projects</h1>
            <span onClick={() => setisOpen(true)}><RiAdminLine className="admin-icon" color='white' size={35}/></span>
           <LoginModal open={isOpen} onClose={() => setisOpen(false)}></LoginModal>
        </div> 
       
    );
}