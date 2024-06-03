import React, { useState } from 'react'
import './style.css'
import logo from '../../images/logo.png';
import LoginModal from '../../pages/login/loginModal.tsx';
import { RiAdminLine } from "react-icons/ri";
export default function NavBar() {
    const [isOpen, setisOpen] = useState(false)
    if (isOpen) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'unset'
    }
    return (
        <div className='nav'>
           <li><a href="https://www.c4cneu.com/"><img src={logo} alt="c4c logo" /></a></li>
            <h1>Projects</h1>
            <span onClick={() => setisOpen(true)}><RiAdminLine className="admin-icon" color='white' size={35}/></span>
            <LoginModal open={isOpen} onClose={() => setisOpen(false)}></LoginModal>
        </div>
       
    );
}