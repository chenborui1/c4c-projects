import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { IoIosClose } from "react-icons/io";
import {  motion, AnimatePresence} from "framer-motion"
import axios from 'axios';
import './style.css'
const API_BASE = process.env.REACT_APP_API_BASE;
//const API_BASE = "http://localhost:3000";
export default function LoginModal({open, onClose}) {
  const LOGIN_API = `${API_BASE}/api/login`;
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  if (!open) {
    return null
}


  
  const handleUser = (event) => {
    const value = event.target.value;
    setData({
      username: value,
      password: data.password
    });
  } 

  const handlePassword = (event) => {
    const value = event.target.value;
    setData({
      username: data.username,
      password: value
    });
  } 

    
    const login = () => {
      if(!data.password || !data.username) {
        console.log("empty username or password")
        return
      }
      const response = async () => {
        await axios.post(LOGIN_API, data).then((response) => {
          window.localStorage.setItem('token', response.data);
          console.log("Logged in success")
          onClose();
          navigate('/admin')
         
        });
      }
      response()
    }
    

  return ReactDOM.createPortal(
    <>
    <div className='blur' onClick={onClose}></div>
   <AnimatePresence>
   {open && (
    <motion.div  initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              opacity: { duration: 2 },
            }}   exit={{opacity: 0 }} className='modal'>
      <span onClick={onClose}><IoIosClose size={50} className="exit-icon"/></span>
      <div className="signup-form">
        <h1 style={{color: 'white'}}>Admin Login</h1>
        <input  onChange={handleUser} type="text" id='first' name='first' placeholder='Username'  required/>
        <input onChange={handlePassword} type="password" name="password" id="password" placeholder='Password' required/>
        <button onClick={login}>Login</button>
      </div>
      </motion.div>)}
      </AnimatePresence>,
      </>, 
      document.getElementById("portal")!,
      
  )
}
