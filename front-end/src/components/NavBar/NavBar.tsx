import React from 'react'
import './style.css'
import logo from '../../images/logo.png'
import { RiAdminLine } from "react-icons/ri";
export default function NavBar() {
    const shoot = () => {
        alert("Open Login");
      }
    return (
        <div className='nav'>
           <li><a href="https://www.c4cneu.com/"><img src={logo} alt="c4c logo" /></a></li>
            <h1>Projects</h1>
            <span onClick={shoot}><RiAdminLine className="admin-icon" color='white' size={35}/></span>
        </div>
        
    );
}