import React from 'react'
import ReactDOM from 'react-dom';
import { IoIosClose } from "react-icons/io";
import {  motion } from "framer-motion"
import './style.css'
export default function loginModal({open, onClose}) {
    if (!open) {
        return null
    }
    
    

  return ReactDOM.createPortal(
    <>
    <div className='blur' onClick={onClose}></div>
    <motion.div  initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              opacity: { duration: 2 },
            }} className='modal'>
      <span onClick={onClose}><IoIosClose size={50} className="exit-icon"/></span>
      <form className="signup-form" action="hello" method='post' >
        <h1 style={{color: 'white'}}>Admin Login</h1>
        <input type="text" id='first' name='first' placeholder='Username' required/>
        <input type="password" name="password" id="password" placeholder='Password' required/>
        <button type='submit'>Login</button>
      </form>
      </motion.div>,
      </>, 
      document.getElementById("portal")!,
      
  )
}
