import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { IoIosClose } from "react-icons/io";
import {  motion, AnimatePresence} from "framer-motion"
import axios from 'axios';
import './style.css'
const API_BASE = process.env.REACT_APP_API_BASE;
//const API_BASE = "http://localhost:3000";
export default function AddModal({open, onClose}) {
  const ADD_API = `${API_BASE}/api/projects/add`;
  const [isActiveChecked, setIsActiveChecked] = useState(false);
  const AuthToken = window.localStorage.getItem("token");
  const [data, setData] = useState({
    title: "",
    header: "",
    description: "",
    img_url: "",
    active: false
  });

  useEffect(() => {
    const value = isActiveChecked
    console.log(value)
    setData({
        title: data.title,
        header: data.header,
        description: data.description,
        img_url: data.img_url,
        active: value
    });
  }, [isActiveChecked])

  if (!open) {
    return null
}


const handleCheckboxChange = () => {
    console.log("set")
    setIsActiveChecked(!isActiveChecked);
   
  };

  const handleTitle = (event) => {
    const value = event.target.value;
    setData({
        title: value,
        header: data.header,
        description: data.description,
        img_url: data.img_url,
        active: data.active
    });
  } 

  const handleHeader = (event) => {
    const value = event.target.value;
    setData({
        title: data.title,
        header: value,
        description: data.description,
        img_url: data.img_url,
        active: data.active
    });
  } 

  const handleDescription = (event) => {
    const value = event.target.value;
    setData({
        title: data.title,
        header: data.header,
        description: value,
        img_url: data.img_url,
        active: data.active
    });
  } 

  const handleImg = (event) => {
    const value = event.target.value;
    setData({
        title: data.title,
        header: data.header,
        description: data.description,
        img_url: value,
        active: data.active
    });
  } 



    const createProject = () => {
      if(!data.title || !data.header || !data.description || !data.img_url ) {
        console.log("missing required fields")
        return
      }
      const response = async () => {
        console.log(data)
        await axios.post(ADD_API,  {
            headers: {
              Authorization: AuthToken,
            },
            data: data,
          }).then((response) => {
            console.log("added new project")
          onClose(true);
        
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
            }}   exit={{opacity: 0 }} className='add-modal'>
      <span onClick={onClose}><IoIosClose size={50} className="exit-icon"/></span>
      <div className="signup-form">
       <div className='add-project-h1'><h1 style={{color: 'white'}}>Create Project</h1></div> 
        <input  onChange={handleTitle} type="text" id='project-title' name='title' placeholder='Enter a title'  required/>
        <input onChange={handleHeader} type="text" name="header" id="project-header" placeholder='Enter a header' required/>
          
        <input onChange={handleImg} type="text" name="handleImg" id="project-img" placeholder='Enter a Image URL' required/>
        <textarea onChange={handleDescription} name="description" id="input-description" rows={2} cols={70} placeholder='Enter a Description' required></textarea>
      
       <button id="active-button"  className={isActiveChecked ? 'active' : 'inactive'} onClick={handleCheckboxChange}>Active</button>
       <div ><button id="create-button" style={{marginLeft: "80px"}}onClick={createProject}>Create</button></div> 
       
      </div>
      </motion.div>)}
      </AnimatePresence>,
      </>, 
      document.getElementById("portal")!,
      
  )
}
